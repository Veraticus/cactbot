Options.Triggers.push({
  zoneId: ZoneId.AmdaporKeep,
  triggers: [
    {
      id: 'Amdapor Keep Liquefy Middle',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '415', source: 'Demon Wall', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '415', source: 'Dämonenwand', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '415', source: 'Mur Démonique', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '415', source: 'デモンズウォール', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '415', source: '恶魔墙', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '415', source: '악마의 벽', capture: false }),
      response: Responses.goMiddle(),
    },
    {
      id: 'Amdapor Keep Liquefy Sides',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '416', source: 'Demon Wall', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '416', source: 'Dämonenwand', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '416', source: 'Mur Démonique', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '416', source: 'デモンズウォール', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '416', source: '恶魔墙', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '416', source: '악마의 벽', capture: false }),
      response: Responses.goSides(),
    },
    {
      id: 'Amdapor Keep Repel',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '417', source: 'Demon Wall', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '417', source: 'Dämonenwand', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '417', source: 'Mur Démonique', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '417', source: 'デモンズウォール', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '417', source: '恶魔墙', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '417', source: '악마의 벽', capture: false }),
      response: Responses.knockback(),
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Demon Wall': 'Dämonenwand',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Demon Wall': 'mur démonique',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Demon Wall': 'デモンズウォール',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Demon Wall': '恶魔墙',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Demon Wall': '악마의 벽',
      },
    },
  ],
});
