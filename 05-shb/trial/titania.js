// Titania Normal Mode
Options.Triggers.push({
  zoneId: ZoneId.TheDancingPlague,
  timelineFile: 'titania.txt',
  triggers: [
    {
      id: 'Titania Bright Sabbath',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '3D5C', source: 'Titania', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '3D5C', source: 'Titania', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '3D5C', source: 'Titania', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '3D5C', source: 'ティターニア', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '3D5C', source: '缇坦妮雅', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '3D5C', source: '티타니아', capture: false }),
      response: Responses.aoe(),
    },
    {
      id: 'Titania Phantom Out',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '3D5D', source: 'Titania', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '3D5D', source: 'Titania', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '3D5D', source: 'Titania', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '3D5D', source: 'ティターニア', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '3D5D', source: '缇坦妮雅', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '3D5D', source: '티타니아', capture: false }),
      response: Responses.getOut(),
    },
    {
      id: 'Titania Phantom In',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '3D5E', source: 'Titania', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '3D5E', source: 'Titania', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '3D5E', source: 'Titania', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '3D5E', source: 'ティターニア', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '3D5E', source: '缇坦妮雅', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '3D5E', source: '티타니아', capture: false }),
      response: Responses.getIn(),
    },
    {
      id: 'Titania Mist Failure',
      type: 'AddedCombatant',
      netRegex: NetRegexes.addedCombatant({ name: 'Spirit Of Dew', capture: false }),
      netRegexDe: NetRegexes.addedCombatant({ name: 'Wasserfee', capture: false }),
      netRegexFr: NetRegexes.addedCombatant({ name: 'Esprit Des Rosées', capture: false }),
      netRegexJa: NetRegexes.addedCombatant({ name: '水の精', capture: false }),
      netRegexCn: NetRegexes.addedCombatant({ name: '水精', capture: false }),
      netRegexKo: NetRegexes.addedCombatant({ name: '물의 정령', capture: false }),
      response: Responses.killExtraAdd(),
    },
    {
      id: 'Titania Mist',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '3D45', source: 'Titania', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '3D45', source: 'Titania', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '3D45', source: 'Titania', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '3D45', source: 'ティターニア', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '3D45', source: '缇坦妮雅', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '3D45', source: '티타니아', capture: false }),
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Water Positions',
          de: 'Wasser Positionen',
          fr: 'Positions pour l\'eau',
          ja: 'ポジションへ',
          cn: '水毒',
          ko: '물 장판 위치',
        },
      },
    },
    {
      id: 'Titania Flame',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '3D47', source: 'Titania', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '3D47', source: 'Titania', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '3D47', source: 'Titania', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '3D47', source: 'ティターニア', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '3D47', source: '缇坦妮雅', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '3D47', source: '티타니아', capture: false }),
      delaySeconds: 6,
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Stack In Puddles',
          de: 'In einer Fläche sammeln',
          fr: 'Packez-vous dans les Flaques d\'eau',
          ja: '水の輪に集合',
          cn: '水圈集合',
          ko: '장판에 모이기',
        },
      },
    },
    {
      id: 'Titania Divination',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '3D5B', source: 'Titania' }),
      netRegexDe: NetRegexes.startsUsing({ id: '3D5B', source: 'Titania' }),
      netRegexFr: NetRegexes.startsUsing({ id: '3D5B', source: 'Titania' }),
      netRegexJa: NetRegexes.startsUsing({ id: '3D5B', source: 'ティターニア' }),
      netRegexCn: NetRegexes.startsUsing({ id: '3D5B', source: '缇坦妮雅' }),
      netRegexKo: NetRegexes.startsUsing({ id: '3D5B', source: '티타니아' }),
      response: Responses.tankCleave(),
    },
    {
      id: 'Titania Frost Rune 1',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '3D2A', source: 'Titania', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '3D2A', source: 'Titania', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '3D2A', source: 'Titania', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '3D2A', source: 'ティターニア', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '3D2A', source: '缇坦妮雅', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '3D2A', source: '티타니아', capture: false }),
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Get Middle, Shiva Circles',
          de: 'In die Mitte, Shiva Kreise',
          fr: 'Allez au milieu, cercles de Shiva',
          ja: 'シヴァの輪っか',
          cn: '中间集合, 九连环',
          ko: '시바 얼음 장판',
        },
      },
    },
    {
      id: 'Titania Frost Rune 2',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '3D2A', source: 'Titania', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '3D2A', source: 'Titania', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '3D2A', source: 'Titania', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '3D2A', source: 'ティターニア', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '3D2A', source: '缇坦妮雅', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '3D2A', source: '티타니아', capture: false }),
      delaySeconds: 6.5,
      response: Responses.getOut('info'),
    },
    {
      id: 'Titania Frost Rune 3',
      type: 'Ability',
      netRegex: NetRegexes.ability({ id: '3D4E', source: 'Titania', capture: false }),
      netRegexDe: NetRegexes.ability({ id: '3D4E', source: 'Titania', capture: false }),
      netRegexFr: NetRegexes.ability({ id: '3D4E', source: 'Titania', capture: false }),
      netRegexJa: NetRegexes.ability({ id: '3D4E', source: 'ティターニア', capture: false }),
      netRegexCn: NetRegexes.ability({ id: '3D4E', source: '缇坦妮雅', capture: false }),
      netRegexKo: NetRegexes.ability({ id: '3D4E', source: '티타니아', capture: false }),
      suppressSeconds: 60,
      response: Responses.getIn('info'),
    },
    {
      id: 'Titania Growth Rune',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '3D2E', source: 'Titania', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '3D2E', source: 'Titania', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '3D2E', source: 'Titania', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '3D2E', source: 'ティターニア', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '3D2E', source: '缇坦妮雅', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '3D2E', source: '티타니아', capture: false }),
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Avoid Roots',
          de: 'Ranken vermeiden',
          fr: 'Évitez les Racines',
          ja: '根っこを避ける',
          cn: '躲避树根',
          ko: '뿌리 피하기',
        },
      },
    },
    {
      id: 'Titania Uplift Markers',
      type: 'HeadMarker',
      netRegex: NetRegexes.headMarker({ id: '008B' }),
      condition: Conditions.targetIsYou(),
      response: Responses.spread(),
    },
    {
      id: 'Titania Peasebomb Markers',
      type: 'HeadMarker',
      netRegex: NetRegexes.headMarker({ id: '00BD' }),
      condition: Conditions.targetIsYou(),
      response: Responses.spread(),
    },
    {
      id: 'Titania Pucks Breath Markers',
      type: 'HeadMarker',
      netRegex: NetRegexes.headMarker({ id: '00A1' }),
      response: Responses.stackMarkerOn(),
    },
    {
      id: 'Titania Knockback',
      type: 'Ability',
      netRegex: NetRegexes.ability({ id: '3D42', source: 'Puck', capture: false }),
      netRegexDe: NetRegexes.ability({ id: '3D42', source: 'Puck', capture: false }),
      netRegexFr: NetRegexes.ability({ id: '3D42', source: 'Puck', capture: false }),
      netRegexJa: NetRegexes.ability({ id: '3D42', source: 'パック', capture: false }),
      netRegexCn: NetRegexes.ability({ id: '3D42', source: '帕克', capture: false }),
      netRegexKo: NetRegexes.ability({ id: '3D42', source: '요정의 권속', capture: false }),
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Diagonal Knockback Soon',
          de: 'diagonaler Knockback bald',
          fr: 'Poussée en diagonale bientôt',
          ja: '対角に飛ぶ',
          cn: '对角击退准备',
          ko: '곧 대각선 넉백',
        },
      },
    },
    {
      id: 'Titania Mini Add Phase',
      type: 'Ability',
      netRegex: NetRegexes.ability({ id: '3D31', source: 'Titania', capture: false }),
      netRegexDe: NetRegexes.ability({ id: '3D31', source: 'Titania', capture: false }),
      netRegexFr: NetRegexes.ability({ id: '3D31', source: 'Titania', capture: false }),
      netRegexJa: NetRegexes.ability({ id: '3D31', source: 'ティターニア', capture: false }),
      netRegexCn: NetRegexes.ability({ id: '3D31', source: '缇坦妮雅', capture: false }),
      netRegexKo: NetRegexes.ability({ id: '3D31', source: '티타니아', capture: false }),
      infoText: (data, _matches, output) => {
        if (data.role === 'tank')
          return output.groupAddsEastOnMustardseed();
        return output.killMustardseedEast();
      },
      outputStrings: {
        groupAddsEastOnMustardseed: {
          en: 'Group Adds East (on Mustardseed)',
          de: 'Adds im Osten sammeln (bei Senfsamen)',
          fr: 'Groupe sur l\'Add Est (Pousse-de-moutarde)',
          ja: '東の雑魚 (マスタードシード)',
          cn: '东边小怪 (芥子)',
          ko: '쫄 모으기 (겨자씨 쪽)',
        },
        killMustardseedEast: {
          en: 'Kill Mustardseed (East)',
          de: 'Senfsamen angreifen (Osten)',
          fr: 'Tuez Pousse-de-moutarde (Est)',
          ja: '雑魚マスタードシードを倒す (東)',
          cn: '击杀芥子 (东)',
          ko: '겨자씨 잡기(동쪽)',
        },
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Titania': 'Titania',
        'Puck': 'Puck',
        'Spirit Of Dew': 'Wasserfee',
        'Spirit of Flame': 'Feuerfee',
        'Peaseblossom': 'Bohnenblüte',
        'Mustardseed': 'Senfsamen',
      },
      'replaceText': {
        'Being Mortal': 'Sterblichkeit',
        'Bright Sabbath': 'Leuchtender Sabbat',
        'Divination Rune': 'Prophezeiungsrune',
        'Flame Hammer': 'Flammenhammer',
        'Flame Rune': 'Flammenrune',
        'Frost Rune(?! )': 'Frostrune',
        'Frost Rune Middle': 'Frostrune Mitte',
        'Gentle Breeze': 'Sanfte Brise',
        'Growth Rune': 'Wachstumsrune',
        'Hard Swipe': 'Harter Hieb',
        'Leafstorm': 'Blättersturm',
        'Love-In-Idleness': 'Liebevoller Müßiggang',
        'Midsummer Night\'s Dream': 'Mittsommernachtstraum',
        'Mist Rune': 'Nebelrune',
        '(?<! )Pease(?!\\w)': 'Bohne',
        'Peasebomb': 'Bohnenbombe',
        'Phantom Rune': 'Phantomrune',
        'Puck\'s Breath': 'Pucks Atem',
        'Puck\'s Caprice': 'Pucks Laune',
        'Puck\'s Rebuke': 'Pucks Tadel',
        'Pummel': 'Deftige Dachtel',
        'Uplift': 'Feenring',
        'War And Pease': 'Böhnchen und Tönchen',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Titania': 'Titania',
        'Puck': 'Puck',
        'Spirit Of Dew': 'Esprit Des Rosées',
        'Spirit of Flame': 'Esprit Des Flammes',
        'Peaseblossom': 'Fleur-de-pois',
        'Mustardseed': 'Pousse-de-moutarde',
      },
      'replaceText': {
        'Being Mortal': 'Deuil des vivants',
        'Bright Sabbath': 'Sabbat en plein jour',
        'Divination Rune': 'Rune de malice',
        'Flame Hammer': 'Marteau de feu',
        'Flame Rune': 'Rune de feu',
        'Frost Rune(?! )': 'Rune de gel',
        'Frost Rune Middle': 'Rune de gel milieu',
        'Gentle Breeze': 'Douce Brise',
        'Growth Rune': 'Rune de racine',
        'Hard Swipe': 'Fauchage brutal',
        'Leafstorm': 'Tempête de feuilles',
        'Love-In-Idleness': 'Pensées sauvages',
        'Midsummer Night\'s Dream': 'Songe d\'une nuit d\'été',
        'Mist Rune': 'Rune d\'eau',
        '(?<! )Pease(?!\\w)': 'Explosion de haricot',
        'Peasebomb': 'Haricot explosif',
        'Phantom Rune': 'Rune d\'illusion',
        'Puck\'s Breath': 'Haleine de Puck',
        'Puck\'s Caprice': 'Toquade de Puck',
        'Puck\'s Rebuke': 'Réprimande de Puck',
        'Pummel': 'Torgnole',
        'Uplift': 'Exhaussement',
        'War And Pease': 'La fin des haricots',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Titania': 'ティターニア',
        'Puck': 'パック',
        'Spirit Of Dew': '水の精',
        'Spirit of Flame': '火の精',
        'Peaseblossom': 'ピーズブロッサム',
        'Mustardseed': 'マスタードシード',
      },
      'replaceText': {
        'Being Mortal': '死すべき定め',
        'Bright Sabbath': 'ブライトサバト',
        'Divination Rune': '魔のルーン',
        'Flame Hammer': 'フレイムハンマー',
        'Flame Rune': '火のルーン',
        'Frost Rune(?! )': '氷のルーン',
        'Frost Rune Middle': '氷のルーン（中央）',
        'Gentle Breeze': '上風',
        'Growth Rune': '根のルーン',
        'Hard Swipe': 'ハードスワイプ',
        'Leafstorm': 'リーフストーム',
        'Love-In-Idleness': 'ラブ・イン・アイドルネス',
        'Midsummer Night\'s Dream': 'ミッドサマー・ナイツドリーム',
        'Mist Rune': '水のルーン',
        '(?<! )Pease(?!\\w)': '豆爆発',
        'Peasebomb': 'ビーズボム',
        'Phantom Rune': '幻のルーン',
        'Puck\'s Breath': 'パック・ブレス',
        'Puck\'s Caprice': 'パック・カプリース',
        'Puck\'s Rebuke': 'パックレビューク',
        'Pummel': '殴打',
        'Uplift': '隆起',
        'War And Pease': '大豆爆発',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Titania': '缇坦妮雅',
        'Puck': '帕克',
        'Spirit Of Dew': '水精',
        'Spirit of Flame': '炎精',
        'Peaseblossom': '豌豆花',
        'Mustardseed': '芥子',
      },
      'replaceText': {
        'Being Mortal': '终有一死',
        'Bright Sabbath': '欢快的安息日',
        'Divination Rune': '魔之符文',
        'Flame Hammer': '烈火锤',
        'Flame Rune': '火之符文',
        'Frost Rune(?! )': '冰之符文(?! )',
        'Frost Rune Middle': '冰之符文 中间',
        'Gentle Breeze': '青翠柔风',
        'Growth Rune': '根之符文',
        'Hard Swipe': '强烈重击',
        'Leafstorm': '绿叶风暴',
        'Love-In-Idleness': '爱懒花',
        'Midsummer Night\'s Dream': '仲夏夜之梦',
        'Mist Rune': '水之符文',
        '(?<! )Pease(?!\\w)': '(?<! )爆炸(?!\\w)',
        'Peasebomb': '豌豆炸弹',
        'Phantom Rune': '幻之符文',
        'Puck\'s Breath': '帕克的吐息',
        'Puck\'s Caprice': '帕克的随想',
        'Puck\'s Rebuke': '帕克的指责',
        'Pummel': '殴打',
        'Uplift': '隆起',
        'War And Pease': '豌豆大爆炸',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Titania': '티타니아',
        'Puck': '요정의 권속',
        'Spirit Of Dew': '물의 정령',
        'Spirit of Flame': '불의 정령',
        'Peaseblossom': '콩나무',
        'Mustardseed': '겨자씨',
      },
      'replaceText': {
        'Being Mortal': '죽어야 할 운명',
        'Bright Sabbath': '빛나는 안식',
        'Divination Rune': '마법의 룬',
        'Flame Hammer': '불꽃 망치',
        'Flame Rune': '불의 룬',
        'Frost Rune(?! )': '얼음의 룬',
        'Frost Rune Middle': '얼음의 룬 가운데',
        'Gentle Breeze': '윗바람',
        'Growth Rune': '뿌리의 룬',
        'Hard Swipe': '강력한 후려치기',
        'Leafstorm': '잎사귀 폭풍',
        'Love-In-Idleness': '삼색제비꽃',
        'Midsummer Night\'s Dream': '한여름 밤의 꿈',
        'Mist Rune': '물의 룬',
        '(?<! )Pease(?!\\w)': '콩 폭발',
        'Peasebomb': '콩폭탄',
        'Phantom Rune': '환상의 룬',
        'Puck\'s Breath': '요정의 숨결',
        'Puck\'s Caprice': '요정의 변덕',
        'Puck\'s Rebuke': '요정의 꾸지람',
        'Pummel': '구타',
        'Uplift': '융기',
        'War And Pease': '큰콩 폭발',
      },
    },
  ],
});
