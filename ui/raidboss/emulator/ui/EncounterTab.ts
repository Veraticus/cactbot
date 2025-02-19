import DTFuncs from '../../../../resources/datetime';
import { UnreachableCode } from '../../../../resources/not_reached';
import Persistor from '../data/Persistor';
import PersistorEncounter from '../data/PersistorEncounter';
import { getTemplateChild, querySelectorAllSafe, querySelectorSafe } from '../EmulatorCommon';
import EventBus from '../EventBus';

type DateMap = {
  start: string;
  name: string;
  duration: string;
  encounter: PersistorEncounter;
};

type ZoneMap = {
  [date: string]: DateMap[];
};

type EncounterMap = {
  [zone: string]: ZoneMap;
};

export default class EncounterTab extends EventBus {
  $zoneColumn: HTMLElement;
  $dateColumn: HTMLElement;
  $encounterColumn: HTMLElement;
  $infoColumn: HTMLElement;
  $encounterTabRowTemplate: HTMLElement;
  $encounterTabEncounterRowTemplate: HTMLElement;
  $encounterInfoTemplate: HTMLElement;
  encounters: EncounterMap = {};
  currentZone?: string;
  currentDate?: string;
  currentEncounter?: number;
  constructor(private persistor: Persistor) {
    super();

    this.$zoneColumn = querySelectorSafe(document, '#encounters-tab .zoneList');
    this.$dateColumn = querySelectorSafe(document, '#encounters-tab .dateList');
    this.$encounterColumn = querySelectorSafe(document, '#encounters-tab .encounterList');
    this.$infoColumn = querySelectorSafe(document, '#encounters-tab .encounter-info');

    this.$encounterTabRowTemplate = getTemplateChild(document, 'template.encounterTabRow');
    this.$encounterTabEncounterRowTemplate = getTemplateChild(
      document,
      'template.encounterTabEncounterRow',
    );
    this.$encounterInfoTemplate = getTemplateChild(document, 'template.encounter-info');
  }

  refresh(): void {
    this.encounters = {};
    void this.persistor.encounterSummaries.toArray().then((encounters: PersistorEncounter[]) => {
      for (const enc of encounters) {
        const zone = enc.zoneName;
        // ?? operator here to account for old encounters that don't have the property
        const encDate = DTFuncs.timeStringToDateString(enc.start, enc.tzOffsetMillis ?? 0);
        const encTime = DTFuncs.timeToTimeString(enc.start + enc.offset, enc.tzOffsetMillis ?? 0);
        const encDuration = DTFuncs.msToDuration(enc.duration - enc.offset);
        const zoneObj = this.encounters[zone] = this.encounters[zone] || {};
        const dateObj = zoneObj[encDate] = zoneObj[encDate] || [];
        dateObj.push({
          start: encTime,
          name: enc.name,
          duration: encDuration,
          encounter: enc,
        });
      }

      this.refreshUI();
    });
  }

  refreshUI(): void {
    this.refreshZones();
    this.refreshDates();
    this.refreshEncounters();
    this.refreshInfo();
  }

  refreshZones(): void {
    this.$zoneColumn.innerHTML = '';

    let clear = true;

    const zones = new Set(Object.keys(this.encounters));

    for (const zone of [...zones].sort()) {
      const $row = this.$encounterTabRowTemplate.cloneNode(true);
      if (!($row instanceof HTMLElement))
        throw new UnreachableCode();
      $row.innerText = zone;
      if (zone === this.currentZone) {
        clear = false;
        $row.classList.add('selected');
      }
      $row.addEventListener('click', (ev) => {
        const t = ev.currentTarget;
        if (!(t instanceof HTMLElement))
          throw new UnreachableCode();
        const parent = t.parentElement;
        if (!parent)
          throw new UnreachableCode();
        querySelectorAllSafe(parent, '.selector-row.selected').forEach((n) => {
          n.classList.remove('selected');
        });
        t.classList.add('selected');
        this.currentZone = t.textContent ?? undefined;
        this.refreshUI();
      });
      this.$zoneColumn.append($row);
    }

    if (clear)
      this.currentZone = undefined;
  }

  refreshDates(): void {
    this.$dateColumn.innerHTML = '';

    let clear = true;

    if (this.currentZone !== undefined) {
      const zoneMap = this.encounters[this.currentZone];
      if (!zoneMap)
        return;
      const dates = new Set<string>(Object.keys(zoneMap));
      for (const date of [...dates].sort()) {
        const $row = this.$encounterTabRowTemplate.cloneNode(true);
        if (!($row instanceof HTMLElement))
          throw new UnreachableCode();
        $row.innerText = date;
        if (date === this.currentDate) {
          clear = false;
          $row.classList.add('selected');
        }
        $row.addEventListener('click', (ev) => {
          const t = ev.currentTarget;
          if (!(t instanceof HTMLElement))
            throw new UnreachableCode();
          const parent = t.parentElement;
          if (!parent)
            throw new UnreachableCode();
          querySelectorAllSafe(parent, '.selector-row.selected').forEach((n) => {
            n.classList.remove('selected');
          });
          t.classList.add('selected');
          this.currentDate = t.textContent ?? undefined;
          this.refreshUI();
        });
        this.$dateColumn.append($row);
      }
    }

    if (clear)
      this.currentDate = undefined;
  }

  refreshEncounters(): void {
    this.$encounterColumn.innerHTML = '';

    let clear = true;

    if (this.currentZone === undefined || this.currentDate === undefined)
      return;

    const zoneMap = this.encounters[this.currentZone];
    if (!zoneMap)
      return;

    const dateMap = zoneMap[this.currentDate];
    if (!dateMap)
      return;

    const sortedEncounters = dateMap.sort((l, r) => {
      return l.start.localeCompare(r.start);
    });
    for (const [i, enc] of sortedEncounters.entries()) {
      const $row = this.$encounterTabEncounterRowTemplate.cloneNode(true);
      if (!($row instanceof HTMLElement))
        throw new UnreachableCode();
      $row.setAttribute('data-index', i.toString());
      if (i === this.currentEncounter) {
        clear = false;
        $row.classList.add('selected');
      }
      querySelectorSafe($row, '.encounterStart').innerText = '[' + enc.start + ']';
      querySelectorSafe($row, '.encounterName').innerText = enc.name;
      querySelectorSafe($row, '.encounterDuration').innerText = '(' + enc.duration + ')';
      $row.addEventListener('click', (ev) => {
        const t = ev.currentTarget;
        if (!(t instanceof HTMLElement))
          throw new UnreachableCode();
        const parent = t.parentElement;
        if (!parent)
          throw new UnreachableCode();
        querySelectorAllSafe(parent, '.selector-row.selected').forEach((n) => {
          n.classList.remove('selected');
        });
        t.classList.add('selected');
        const index = t.getAttribute('data-index');
        if (index !== null)
          this.currentEncounter = parseInt(index);
        this.refreshUI();
      });
      this.$encounterColumn.append($row);
    }

    if (clear)
      this.currentEncounter = undefined;
  }

  refreshInfo(): void {
    this.$infoColumn.innerHTML = '';

    const zoneMap = this.currentZone !== undefined ? this.encounters[this.currentZone] : undefined;

    if (!zoneMap)
      return;

    const dateMap = this.currentDate !== undefined ? zoneMap[this.currentDate] : undefined;

    if (!dateMap)
      return;

    const encMap = this.currentEncounter !== undefined ? dateMap[this.currentEncounter] : undefined;

    if (!encMap)
      return;

    const enc = encMap.encounter;

    const $info = this.$encounterInfoTemplate.cloneNode(true);
    if (!($info instanceof HTMLElement))
      throw new UnreachableCode();

    querySelectorSafe($info, '.encounterLoad').addEventListener('click', () => {
      void this.dispatch('load', enc.id);
    });
    querySelectorSafe($info, '.encounterParse').addEventListener('click', () => {
      void this.dispatch('parse', enc.id);
    });
    querySelectorSafe($info, '.encounterPrune').addEventListener('click', () => {
      void this.dispatch('prune', enc.id);
    });
    querySelectorSafe($info, '.encounterDelete').addEventListener('click', () => {
      void this.dispatch('delete', enc.id);
    });
    querySelectorSafe($info, '.encounterZone .label').textContent = enc.zoneName;
    // ?? operator here to account for old encounters that don't have the property
    querySelectorSafe($info, '.encounterStart .label').textContent = DTFuncs
      .dateTimeToString(enc.start + enc.offset, enc.tzOffsetMillis ?? 0);
    querySelectorSafe($info, '.encounterDuration .label').textContent = DTFuncs.timeToString(
      enc.duration - enc.offset,
      false,
    );
    querySelectorSafe($info, '.encounterName .label').textContent = enc.name;
    querySelectorSafe($info, '.encounterStartStatus .label').textContent = enc.startStatus;
    querySelectorSafe($info, '.encounterEndStatus .label').textContent = enc.endStatus;

    this.$infoColumn.append($info);
  }
}
