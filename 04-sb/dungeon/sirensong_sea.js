Options.Triggers.push({
  zoneId: ZoneId.TheSirensongSea,
  timelineFile: 'sirensong_sea.txt',
  timelineTriggers: [
    {
      id: 'Sirensong Lorelei Head Butt',
      regex: /Head Butt/,
      beforeSeconds: 6,
      response: Responses.tankBuster(),
    },
  ],
  triggers: [
    {
      id: 'Sirensong Lugat Hydroball',
      type: 'HeadMarker',
      netRegex: NetRegexes.headMarker({ id: '003E' }),
      response: Responses.stackMarkerOn(),
    },
    {
      id: 'Sirensong Lugat Sea Swallows All',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ source: 'Lugat', id: '1F58', capture: false }),
      response: Responses.drawIn(),
    },
    {
      id: 'Sirensong Lugat Overtow',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ source: 'Lugat', id: '1F59', capture: false }),
      response: Responses.knockback('info'),
    },
    {
      id: 'Sirensong Governor Shadowflow',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ source: 'The Governor', id: '1F5E', capture: false }),
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Avoid Shadows',
          de: 'Schatten ausweichen',
          fr: 'Évitez les ombres',
          ja: '影を避ける',
          cn: '避开阴影',
          ko: '그림자 피하기',
        },
      },
    },
    {
      id: 'Sirensong Governor Bloodburst',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ source: 'The Governor', id: '1F5C', capture: false }),
      response: Responses.aoe(),
    },
    {
      id: 'Sirensong Governor Enter Night',
      type: 'HeadMarker',
      netRegex: NetRegexes.headMarker({ id: '0016' }),
      condition: Conditions.targetIsYou(),
      response: Responses.getOut(),
    },
    {
      id: 'Sirensong Fleshless Captive Seductive Scream',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ source: 'Fleshless Captive', id: '2352' }),
      response: Responses.stunOrInterruptIfPossible(),
    },
    {
      id: 'Sirensong Lorelei Morbid Advance',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ source: 'Lorelei', id: '1F65', capture: false }),
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Forward March',
          de: 'Marchiere Vorwärts',
          fr: 'Marche avant forcée',
          ja: '強制移動: 前',
          cn: '强制移动: 前',
          ko: '정신 장악: 앞',
        },
      },
    },
    {
      id: 'Sirensong Lorelei Morbid Retreat',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ source: 'Lorelei', id: '1F66', capture: false }),
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Backwards March',
          de: 'Marchiere Rückwärts',
          fr: 'Marche forcée en arrière',
          ja: '強制移動: 後ろ',
          cn: '强制移动: 后',
          ko: '정신 장악: 뒤',
        },
      },
    },
    {
      id: 'Sirensong Lorelei Somber Melody',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ source: 'Lorelei', id: '1F67', capture: false }),
      response: Responses.aoe(),
    },
  ],
  timelineReplace: [
    {
      'locale': 'en',
      'replaceText': {
        'Morbid Advance/Morbid Retreat': 'Morbid Advance/Retreat',
      },
    },
    {
      'locale': 'de',
      'replaceSync': {
        'Spae Rock': 'Gespensterfelsen',
        'Lugat': 'Lugat',
        'Warden\'s Delight': 'Trauersteg',
        'The Governor': 'Friedhofsvorsteher',
        'The Groveller': 'Knecht',
        'Glowering Krautz': 'Krautz-Leuchtturm',
        'Lorelei': 'Loreley',
        'Fleshless Captive': 'entfleischt(?:e|er|es|en) Gefangen(?:e|er|es|en)',
      },
      'replaceText': {
        'Amorphous Applause': 'Amorpher Applaus',
        'Hydroball': 'Wasserbombe',
        'Sea Swallows All': 'Strudel',
        'Concussive Oscillation': 'Erschütternde Oszillation',
        'Overtow': 'Schnellfluss',
        'Shadowflow': 'Schattenfluss',
        'Bloodburst': 'Blutstoß',
        'Enter Night': 'Einbruch der Nacht',
        'Shadow Split': 'Splitterschatten',
        'Virgin Tears': 'Jungferntränen',
        'Morbid Advance': 'Morbider Marsch',
        'Morbid Retreat': 'Morbider Rückzug',
        'Head Butt': 'Kopfstoß',
        'Somber Melody': 'Schwermütige Melodie',
        'Void Water III': 'Nichts-Aquaga',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Spae Rock': 'Rocher aux Spectres',
        'Lugat': 'Lugat',
        'Warden\'s Delight': 'Délice du gardien',
        'The Governor': 'Gouverneur',
        'The Groveller': 'Quémandeur',
        'Glowering Krautz': 'Phare de Krautz',
        'Lorelei': 'Lorelei',
        'Fleshless Captive': 'fantôme de prisonnier',
      },
      'replaceText': {
        'Amorphous Applause': 'Applaudissement amorphe',
        'Hydroball': 'Hydroballe',
        'Sea Swallows All': 'Gouffre de la mer',
        'Concussive Oscillation': 'Oscillation commotionnelle',
        'Overtow': 'Débordement',
        'Shadowflow': 'Flux d\'ombre',
        'Bloodburst': 'Explosion sanguine',
        'Enter Night': 'Appel de la nuit',
        'Shadow Split': 'Division d\'ombre',
        'Virgin Tears': 'Larmes de vierge',
        'Morbid Advance/Morbid Retreat': 'Avancée/Retraite morbide',
        'Head Butt': 'Coup de tête',
        'Somber Melody': 'Sombre mélodie',
        'Void Water III': 'Méga Eau du néant',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Spae Rock': '亡霊の岩場',
        'Lugat': 'ルガト',
        'Warden\'s Delight': '看守長の遊技場',
        'The Governor': 'ガバナー',
        'The Groveller': 'グロヴェラー',
        'Glowering Krautz': 'クラウツ大灯台',
        'Lorelei': 'ローレライ',
        'Fleshless Captive': 'レイス・プリズナー',
      },
      'replaceText': {
        'Amorphous Applause': 'ハンドクラップ',
        'Hydroball': 'ハイドロボール',
        'Sea Swallows All': 'ホワールプール',
        'Concussive Oscillation': 'コンカシヴ・オレーション',
        'Overtow': 'ハイフロウ',
        'Shadowflow': 'シャドウフロウ',
        'Bloodburst': 'ブラッドバースト',
        'Enter Night': 'エンターナイト',
        'Shadow Split': 'シャドウスプリット',
        'Virgin Tears': '乙女の涙',
        'Morbid Advance': 'デスマーチ：前進',
        'Morbid Retreat': 'デスマーチ：後退',
        'Head Butt': 'ヘッドバット',
        'Somber Melody': 'ソンバーメロディー',
        'Void Water III': 'ヴォイド・ウォタガ',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Spae Rock': '亡灵岩场',
        'Lugat': '卢加特',
        'Warden\'s Delight': '狱长的娱乐场',
        'The Governor': '狱长',
        'The Groveller': '奴仆',
        'Glowering Krautz': '克劳茨大灯塔',
        'Lorelei': '罗蕾莱',
        'Fleshless Captive': '幽灵囚徒',
      },
      'replaceText': {
        'Amorphous Applause': '莫名击掌',
        'Hydroball': '水力球',
        'Sea Swallows All': '漩涡',
        'Concussive Oscillation': '振荡气流',
        'Overtow': '潮起',
        'Shadowflow': '暗影流',
        'Bloodburst': '血爆',
        'Enter Night': '入夜',
        'Shadow Split': '暗影分裂',
        'Virgin Tears': '少女之泪',
        'Morbid Advance': '死亡行进：前',
        'Morbid Retreat': '死亡行进：后',
        'Head Butt': '冲顶',
        'Somber Melody': '忧郁旋律',
        'Void Water III': '虚空狂水',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Spae Rock': '망령의 바위터',
        'Lugat': '루가트',
        'Warden\'s Delight': '간수장의 놀이터',
        'The Governor': '간수장',
        'The Groveller': '그림자 죄수',
        'Glowering Krautz': '크라우츠 대등대',
        'Lorelei': '로렐라이',
        'Fleshless Captive': '망령 죄수',
      },
      'replaceText': {
        'Amorphous Applause': '무형의 갈채',
        'Hydroball': '물탄환',
        'Sea Swallows All': '소용돌이',
        'Concussive Oscillation': '격렬한 진동',
        'Overtow': '높은 밀물',
        'Shadowflow': '그림자 흐름',
        'Bloodburst': '피의 범람',
        'Enter Night': '밤의 서막',
        'Shadow Split': '그림자 분열',
        'Virgin Tears': '소녀의 눈물',
        'Morbid Advance': '죽음의 전진',
        'Morbid Retreat': '죽음의 후진',
        'Head Butt': '박치기',
        'Somber Melody': '침울한 선율',
        'Void Water III': '보이드 워터가',
      },
    },
  ],
});
