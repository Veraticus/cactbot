// Byakko Extreme
Options.Triggers.push({
  id: 'TheJadeStoaExtreme',
  zoneId: ZoneId.TheJadeStoaExtreme,
  timelineFile: 'byakko-ex.txt',
  triggers: [
    {
      id: 'ByaEx Heavenly Strike',
      type: 'StartsUsing',
      netRegex: { id: '27DA', source: 'Byakko' },
      response: Responses.tankBuster(),
    },
    {
      id: 'ByaEx Flying Donut',
      type: 'StartsUsing',
      netRegex: { id: '27F4', source: 'Byakko', capture: false },
      response: Responses.getIn(),
    },
    {
      id: 'ByaEx Sweep The Leg',
      type: 'StartsUsing',
      netRegex: { id: '27DB', source: 'Byakko', capture: false },
      response: Responses.getBehind(),
    },
    {
      id: 'ByaEx Storm Pulse',
      type: 'StartsUsing',
      netRegex: { id: '27DC', source: 'Byakko', capture: false },
      response: Responses.aoe(),
    },
    {
      id: 'ByaEx Distant Clap',
      type: 'StartsUsing',
      netRegex: { id: '27DD', source: 'Byakko', target: 'Byakko', capture: false },
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Distant Clap',
          de: 'Donnergrollen',
          fr: 'Tonnerre lointain',
          ja: '遠雷',
          cn: '远雷',
          ko: '원뢰',
        },
      },
    },
    {
      id: 'ByaEx State Of Shock Tank 1',
      type: 'StartsUsing',
      netRegex: { id: '27E0', source: 'Byakko' },
      condition: (data, matches) => data.role === 'tank' && matches.target !== data.me,
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Provoke Boss',
          de: 'Boss abspotten',
          fr: 'Provoquez le Boss',
          ja: '挑発',
          cn: '挑衅',
          ko: '보스 도발',
        },
      },
    },
    {
      id: 'ByaEx State Of Shock Tank 2',
      type: 'StartsUsing',
      netRegex: { id: '27E0', source: 'Byakko' },
      condition: (data, matches) => data.role === 'tank' && matches.target === data.me,
      delaySeconds: 12,
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Provoke Boss',
          de: 'Boss abspotten',
          fr: 'Provoquez le Boss',
          ja: '挑発',
          cn: '挑衅',
          ko: '보스 도발',
        },
      },
    },
    {
      id: 'ByaEx Roar Counter',
      type: 'StartsUsing',
      netRegex: { id: '27F9', source: 'Hakutei', capture: false },
      run: (data) => {
        data.roarCount = (data.roarCount ?? 0) + 1;
      },
    },
    {
      id: 'ByaEx Roar of Thunder',
      type: 'StartsUsing',
      netRegex: { id: '27F9', source: 'Hakutei', capture: false },
      delaySeconds: 14,
      alarmText: (data, _matches, output) => {
        if (data.roarCount !== 2)
          return;
        if (data.role === 'tank')
          return output.text();
      },
      outputStrings: {
        text: {
          en: 'Tank LB NOW',
          de: 'JETZT Tank LB',
          fr: 'Transcendance Tank maintenant !',
          ja: '今タンクLB',
          cn: '坦克LB',
          ko: '탱리밋',
        },
      },
    },
    {
      id: 'ByaEx Bubble',
      type: 'HeadMarker',
      netRegex: { id: '0065' },
      condition: Conditions.targetIsYou(),
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Drop bubble outside',
          de: 'Blase außen ablegen',
          fr: 'Déposez la bulle à l\'extérieur',
          ja: '外にマーカーを置く',
          cn: '边缘放点名',
          ko: '장판 바깥에 깔기',
        },
      },
    },
    {
      id: 'ByaEx Ominous Wind',
      type: 'GainsEffect',
      netRegex: { effectId: '5C9' },
      condition: Conditions.targetIsYou(),
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Pink bubble',
          de: 'Pinke Blase',
          fr: 'Bulle violette',
          ja: '祟り目',
          cn: '泡泡',
          ko: '핑크 구슬',
        },
      },
    },
    {
      id: 'ByaEx Puddle Marker',
      type: 'HeadMarker',
      netRegex: { id: '0004' },
      condition: Conditions.targetIsYou(),
      alarmText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Puddles on YOU',
          de: 'Pfützen auf DIR',
          fr: 'Zones au sol sur VOUS',
          ja: '自分に床範囲',
          cn: '点名',
          ko: '장판 바깥에 깔기 (3번)',
        },
      },
    },
    {
      id: 'ByaEx G100',
      type: 'HeadMarker',
      netRegex: { id: '0057' },
      condition: Conditions.targetIsYou(),
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Get away',
          de: 'Weg da',
          fr: 'Éloignez-vous',
          ja: '離れる',
          cn: '远离',
          ko: '멀리가기',
        },
      },
    },
    {
      id: 'ByaEx Tiger Add',
      type: 'GameLog',
      netRegex: {
        line: '[^:]*:Twofold is my wrath, twice-cursed my foes!.*?',
        code: Util.gameLogCodes.dialog,
        capture: false,
      },
      condition: (data) => data.role === 'tank',
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Tiger Add',
          de: 'Tiger Add',
          fr: 'Add Tigre',
          ja: '虎分離',
          cn: '虎分离',
          ko: '호랑이 쫄',
        },
      },
    },
    {
      id: 'ByaEx Stake Counter',
      type: 'StartsUsing',
      netRegex: { id: '27E2', source: 'Byakko', capture: false },
      run: (data) => {
        data.stakeCount = (data.stakeCount ?? 0) + 1;
      },
    },
    {
      id: 'ByaEx Stake Counter Cleanup',
      type: 'StartsUsing',
      netRegex: { id: '27E2', source: 'Byakko', capture: false },
      delaySeconds: 20,
      run: (data) => delete data.stakeCount,
    },
    {
      id: 'ByaEx Highest Stakes',
      type: 'StartsUsing',
      netRegex: { id: '27E2', source: 'Byakko', capture: false },
      infoText: (data, _matches, output) => output.text({ num: data.stakeCount }),
      outputStrings: {
        text: {
          en: 'Stack #${num}',
          de: 'Stack #${num}',
          fr: 'Packez-vous #${num}',
          ja: '頭割り #${num}',
          cn: '集合 #${num}',
          ko: '쉐어 #${num}',
        },
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Byakko': 'Byakko',
        'Hakutei': 'Hakutei',
        'Twofold is my wrath, twice-cursed my foes!': 'Stürmt los, meine zwei Gesichter!',
      },
      'replaceText': {
        '--Hakutei Add--': '--Hakutei Add--',
        '--leap north--': '--Sprung nach Norden--',
        '--tiger targetable--': '--Tiger anvisierbar--',
        '--tiger untargetable--': '--Tiger nicht anvisierbar--',
        'Answer On High': 'Himmlische Antwort',
        'Bombogenesis': 'Plötzliches Orkantief',
        'Clutch': 'Umklammerung',
        'Dance Of The Incomplete': 'Tanz der zwei Gesichter',
        'Distant Clap': 'Donnergrollen',
        'Fell Swoop': 'Auf einen Streich',
        'Fire and Lightning': 'Feuer und Blitz',
        'Gale Force': 'Orkan',
        'Heavenly Strike': 'Himmlischer Schlag',
        'Highest Stakes': 'Höchstes Risiko',
        'Hundredfold Havoc': 'Hundertfache Verwüstung',
        'Imperial Guard': 'Herbststurm',
        'Ominous Wind': 'Unheilvoller Wind',
        'State of Shock': 'Bannblitze',
        'Steel Claw': 'Stahlklaue',
        'Storm Pulse': 'Gewitterwelle',
        'Sweep the Leg': 'Vertikalität',
        'The Roar Of Thunder': 'Brüllen des Donners',
        'The Voice Of Thunder': 'Stimme des Donners',
        'Unrelenting Anguish': 'Pandämonium',
        'White Herald': 'Herbstböe',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Byakko': 'Byakko',
        'Hakutei': 'Hakutei',
        'Twofold is my wrath, twice-cursed my foes!': 'Ma colère devient double !',
      },
      'replaceText': {
        '--Hakutei Add--': '--Add Hakutei--',
        '--leap north--': '--saut au nord--',
        '--tiger targetable--': '--tigre ciblable--',
        '--tiger untargetable--': '--tigre non ciblable--',
        'Answer On High': 'Foudre céleste',
        'Bombogenesis': 'Bombogénèse',
        'Clutch': 'Empoignement',
        'Dance Of The Incomplete': 'Danse semi-bestiale',
        'Distant Clap': 'Tonnerre lointain',
        'Fell Swoop': 'Éléments déchaînés',
        'Fire and Lightning': 'Feu et foudre',
        'Gale Force': 'Coup de rafale',
        'Heavenly Strike': 'Frappe céleste',
        'Highest Stakes': 'Tout pour le tout',
        'Hundredfold Havoc': 'Ravages centuples',
        'Imperial Guard': 'Garde impériale',
        'Ominous Wind': 'Vent mauvais',
        'State of Shock': 'Foudroiement brutal',
        'Steel Claw': 'Griffe d\'acier',
        'Storm Pulse': 'Pulsion de tempête',
        'Sweep the Leg': 'Verticalité',
        'The Roar Of Thunder': 'Rugissement du tonnerre',
        'The Voice Of Thunder': 'Voix du tonnerre',
        'Unrelenting Anguish': 'Douleur continuelle',
        'White Herald': 'Héraut blanc',
      },
    },
    {
      'locale': 'ja',
      'missingTranslations': true,
      'replaceSync': {
        'Byakko': '白虎',
        'Hakutei': '白帝',
        'Twofold is my wrath, twice-cursed my foes!': '駆けろ、我が半身ッ！歯向かう者どもに、牙と爪を突き立ててやれ！',
      },
      'replaceText': {
        '--leap north--': '--北に飛ぶ--',
        '--tiger untargetable--': '--白帝タゲ不可--',
        'Answer On High': '天つ雷',
        'Bombogenesis': '爆弾低気圧',
        'Clutch': '掌握',
        'Dance Of The Incomplete': '半獣舞踏',
        'Distant Clap': '遠雷',
        'Fell Swoop': '迅雷風烈波',
        'Fire and Lightning': '雷火一閃',
        'Gale Force': '暴風',
        'Heavenly Strike': '天雷掌',
        'Highest Stakes': '乾坤一擲',
        'Hundredfold Havoc': '百雷繚乱',
        'Imperial Guard': '白帝一陣',
        'Ominous Wind': '祟り風',
        'State of Shock': '呪縛雷',
        'Steel Claw': '鉄爪斬',
        'Storm Pulse': '風雷波動',
        'Sweep the Leg': '旋体脚',
        'The Roar Of Thunder': '雷轟',
        'The Voice Of Thunder': '雷声',
        'Unrelenting Anguish': '無間地獄',
        'White Herald': '白帝衝',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Byakko': '白虎',
        'Hakutei': '白帝',
        'Twofold is my wrath, twice-cursed my foes!': '半身分离，助我杀敌！向胆敢抵抗的家伙们露出你的爪牙！',
      },
      'replaceText': {
        '--Hakutei Add--': '--白帝出现--',
        '--leap north--': '--跳北--',
        '--tiger targetable--': '--白帝可选中--',
        '--tiger untargetable--': '--白帝无法选中--',
        'Answer On High': '天雷',
        'Bombogenesis': '炸弹低气压',
        'Clutch': '紧握',
        'Dance Of The Incomplete': '半兽舞蹈',
        'Distant Clap': '远雷',
        'Fell Swoop': '迅雷风烈波',
        'Fire and Lightning': '雷火一闪',
        'Gale Force': '暴风',
        'Heavenly Strike': '天雷掌',
        'Highest Stakes': '乾坤一掷',
        'Hundredfold Havoc': '百雷缭乱',
        'Imperial Guard': '白帝降临',
        'Ominous Wind': '妖风',
        'State of Shock': '咒缚雷',
        'Steel Claw': '铁爪斩',
        'Storm Pulse': '风雷波动',
        'Sweep the Leg': '旋体脚',
        'The Roar Of Thunder': '雷轰',
        'The Voice Of Thunder': '雷声',
        'Unrelenting Anguish': '无间地狱',
        'White Herald': '白帝冲',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Byakko': '백호',
        'Hakutei': '하얀 제왕',
        'Twofold is my wrath, twice-cursed my foes!': '달려라! 나의 반신이여! 맞서는 자들에게 이빨과 발톱을 찔러넣어라!',
      },
      'replaceText': {
        '--Hakutei Add--': '--하얀 제왕 등장--',
        '--leap north--': '--보스 북쪽으로 이동--',
        '--tiger targetable--': '--호랑이 타겟가능--',
        '--tiger untargetable--': '--호랑이 타겟불가--',
        'Answer On High': '하늘의 번개',
        'Bombogenesis': '폭탄 저기압',
        'Clutch': '장악',
        'Dance Of The Incomplete': '반수의 춤',
        'Distant Clap': '원뢰',
        'Fell Swoop': '신뢰풍렬파',
        'Fire and Lightning': '뇌화일섬',
        'Gale Force': '폭풍',
        'Heavenly Strike': '천뢰장',
        'Highest Stakes': '건곤일척',
        'Hundredfold Havoc': '백뢰요란',
        'Imperial Guard': '제왕의 진격',
        'Ominous Wind': '불길한 바람',
        'State of Shock': '주박뢰',
        'Steel Claw': '강철 발톱',
        'Storm Pulse': '풍뢰파동',
        'Sweep the Leg': '돌려차기',
        'The Roar Of Thunder': '뇌굉',
        'The Voice Of Thunder': '뇌성',
        'Unrelenting Anguish': '무간지옥',
        'White Herald': '제왕의 충격',
      },
    },
  ],
});
