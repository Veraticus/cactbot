'use strict';

[{
  zoneRegex: {
    en: /^Anamnesis Anyder$/,
  },
  timelineFile: 'anamnesis_anyder.txt',
  timelineTriggers: [
  ],
  triggers: [
    {
      id: 'AnAnyder Fetid Fang',
      regex: Regexes.startsUsing({ source: 'Unknown', id: ['4B69', '4B72'] }),
      regexDe: Regexes.startsUsing({ source: 'Unbekannt(?:e|er|es|en)', id: ['4B69', '4B72'] }),
      regexFr: Regexes.startsUsing({ source: 'Inconnu', id: ['4B69', '4B72'] }),
      regexJa: Regexes.startsUsing({ source: '正体不明', id: ['4B69', '4B72'] }),
      regexCn: Regexes.startsUsing({ source: '不明物体', id: ['4B69', '4B72'] }),
      regexKo: Regexes.startsUsing({ source: '정체불명', id: ['4B69', '4B72'] }),
      condition: Conditions.caresAboutPhysical(),
      response: Responses.tankBuster(),
    },
    {
      id: 'AnAnyder Scrutiny',
      regex: Regexes.startsUsing({ source: 'Unknown', id: '4E25', capture: false }),
      regexDe: Regexes.startsUsing({ source: 'Unbekannt(?:e|er|es|en)', id: '4E25', capture: false }),
      regexFr: Regexes.startsUsing({ source: 'Inconnu', id: '4E25', capture: false }),
      regexJa: Regexes.startsUsing({ source: '正体不明', id: '4E25', capture: false }),
      regexCn: Regexes.startsUsing({ source: '不明物体', id: '4E25', capture: false }),
      regexKo: Regexes.startsUsing({ source: '정체불명', id: '4E25', capture: false }),
      delaySeconds: 3,
      durationSeconds: 7,
      infoText: {
        en: 'Avoid Arrow',
        de: 'Pfeil ausweichen',
        fr: 'Évitez la flèche',
        cn: '躲箭头',
        ko: '화살표 피하기',
      },
    },
    {
      id: 'AnAnyder Inscrutability',
      regex: Regexes.startsUsing({ source: 'Unknown', id: '4B6A', capture: false }),
      regexDe: Regexes.startsUsing({ source: 'Unbekannt(?:e|er|es|en)', id: '4B6A', capture: false }),
      regexFr: Regexes.startsUsing({ source: 'Inconnu', id: '4B6A', capture: false }),
      regexJa: Regexes.startsUsing({ source: '正体不明', id: '4B6A', capture: false }),
      regexCn: Regexes.startsUsing({ source: '不明物体', id: '4B6A', capture: false }),
      regexKo: Regexes.startsUsing({ source: '정체불명', id: '4B6A', capture: false }),
      condition: Conditions.caresAboutMagical(),
      response: Responses.aoe(),
    },
    {
      id: 'AnAnyder Luminous Ray',
      regex: Regexes.startsUsing({ source: 'Unknown', id: '4E2[67]', capture: false }),
      regexDe: Regexes.startsUsing({ source: 'Unbekannt(?:e|er|es|en)', id: '4E2[67]', capture: false }),
      regexFr: Regexes.startsUsing({ source: 'Inconnu', id: '4E2[67]', capture: false }),
      regexJa: Regexes.startsUsing({ source: '正体不明', id: '4E2[67]', capture: false }),
      regexCn: Regexes.startsUsing({ source: '不明物体', id: '4E2[67]', capture: false }),
      regexKo: Regexes.startsUsing({ source: '정체불명', id: '4E2[67]', capture: false }),
      response: Responses.awayFromFront(),
    },
    {
      id: 'AnAnyder The Final Verse',
      regex: Regexes.startsUsing({ source: 'Kyklops', id: '4B58', capture: false }),
      regexDe: Regexes.startsUsing({ source: 'Kyklops', id: '4B58', capture: false }),
      regexFr: Regexes.startsUsing({ source: 'Kyklops', id: '4B58', capture: false }),
      regexJa: Regexes.startsUsing({ source: 'クリュプス', id: '4B58', capture: false }),
      condition: Conditions.caresAboutMagical(),
      response: Responses.aoe(),
    },
    {
      id: 'AnAnyder 2,000-Mina Swing',
      regex: Regexes.startsUsing({ source: 'Kyklops', id: '4B55', capture: false }),
      regexDe: Regexes.startsUsing({ source: 'Kyklops', id: '4B55', capture: false }),
      regexFr: Regexes.startsUsing({ source: 'Kyklops', id: '4B55', capture: false }),
      regexJa: Regexes.startsUsing({ source: 'クリュプス', id: '4B55', capture: false }),
      response: Responses.getOut(),
    },
    {
      id: 'AnAnyder Eye Of The Cyclone',
      regex: Regexes.startsUsing({ source: 'Kyklops', id: '4B57', capture: false }),
      regexDe: Regexes.startsUsing({ source: 'Kyklops', id: '4B57', capture: false }),
      regexFr: Regexes.startsUsing({ source: 'Kyklops', id: '4B57', capture: false }),
      regexJa: Regexes.startsUsing({ source: 'クリュプス', id: '4B57', capture: false }),
      response: Responses.getIn(),
    },
    {
      id: 'AnAnyder 2,000-Mina Swipe',
      regex: Regexes.startsUsing({ source: 'Kyklops', id: '4B54', capture: false }),
      regexDe: Regexes.startsUsing({ source: 'Kyklops', id: '4B54', capture: false }),
      regexFr: Regexes.startsUsing({ source: 'Kyklops', id: '4B54', capture: false }),
      regexJa: Regexes.startsUsing({ source: 'クリュプス', id: '4B54', capture: false }),
      response: Responses.awayFromFront(),
    },
    {
      id: 'AnAnyder Raging Glower',
      regex: Regexes.startsUsing({ source: 'Kyklops', id: '4B56', capture: false }),
      regexDe: Regexes.startsUsing({ source: 'Kyklops', id: '4B56', capture: false }),
      regexFr: Regexes.startsUsing({ source: 'Kyklops', id: '4B56', capture: false }),
      regexJa: Regexes.startsUsing({ source: 'クリュプス', id: '4B56', capture: false }),
      response: Responses.awayFromFront(),
    },
    {
      id: 'AnAnyder Open Hearth Flying Fount',
      regex: Regexes.headMarker({ id: '003E' }),
      response: Responses.stackOn(),
    },
    {
      id: 'AnAnyder Bonebreaker',
      regex: Regexes.startsUsing({ source: 'Rukshs Dheem', id: '4B8C' }),
      regexDe: Regexes.startsUsing({ source: 'Rukshs Dheem', id: '4B8C' }),
      regexFr: Regexes.startsUsing({ source: 'Rukshs Dheem', id: '4B8C' }),
      regexJa: Regexes.startsUsing({ source: 'ルクスィー・ディーマ', id: '4B8C' }),
      condition: Conditions.caresAboutPhysical(),
      response: Responses.tankBuster(),
    },
    {
      id: 'AnAnyder Falling Water',
      regex: Regexes.startsUsing({ source: 'Rukshs Dheem', id: '4B7E' }),
      regexDe: Regexes.startsUsing({ source: 'Rukshs Dheem', id: '4B7E' }),
      regexFr: Regexes.startsUsing({ source: 'Rukshs Dheem', id: '4B7E' }),
      regexJa: Regexes.startsUsing({ source: 'ルクスィー・ディーマ', id: '4B7E' }),
      condition: Conditions.targetIsYou(),
      response: Responses.spread(),
    },
    {
      id: 'AnAnyder Depth Grip',
      regex: Regexes.startsUsing({ source: 'Rukshs Dheem', id: '4B84', capture: false }),
      regexDe: Regexes.startsUsing({ source: 'Rukshs Dheem', id: '4B84', capture: false }),
      regexFr: Regexes.startsUsing({ source: 'Rukshs Dheem', id: '4B84', capture: false }),
      regexJa: Regexes.startsUsing({ source: 'ルクスィー・ディーマ', id: '4B84', capture: false }),
      infoText: {
        en: 'Avoid Hands',
        de: 'Händen ausweichen',
        fr: 'Évitez les mains',
        cn: '躲手',
        ko: '손 피하기',
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Sinister Bubble': 'Finster(?:e|er|es|en) Blase',
        'Rukshs Dheem': 'Rukshs Dheem',
        'Unknown': 'Unbekannt(?:e|er|es|en)',
        'Kyklops': 'Kyklops',
        'Depth Grip': 'Hand des Ozeans',
        'Katharsis': 'Platz der Katharsis',
        'Doxa': 'Platz der Doxa',
        'Noesis': 'Noesis',
      },
      'replaceText': {
        'The Final Verse': 'Schreckensvers',
        'Wavebreaker': 'Wellenbrecher',
        'Terrible Hammer/Blade': 'Schreckenshammer/klinge',
        'Terrible Blade/Hammer': 'Schreckensklinge/Hammer',
        'Swift Shift': 'Schneller Wechsel',
        'Sweeping Gouge': 'Schwunghieb',
        'Sewer Water': 'Abwasser',
        'Setback': 'Rücksetzer',
        'Seabed Ceremony': 'Riffsturmzeremonie',
        'Scrutiny': 'Überwachung',
        'Rock Hard': 'Felsspalter',
        'Rising Tide': 'Steigende Flut',
        'Reflection': 'Widerschein',
        'Recharge': 'Aufladen',
        'Raging Glower': 'Wütender Blick',
        'Plain Weirdness': 'Unbekanntes Prinzip',
        'Nursed Grudge': 'Unergründlicher Wille',
        'Naval Ram': 'Seeramme',
        'Meatshield': 'Fleischschild',
        'Mantle Drill': 'Mantelbohrer',
        'Luminous Ray': 'Lumineszenzstrahl',
        'Lacerate': 'Erodieren',
        'Jumping Thrust': 'Sprungattacke',
        'Inscrutability': 'Unidentifizierbar',
        'Hydroball': 'Wasserbombe',
        'Flying Fount': 'Spritzige Fontäne',
        'Flood': 'Flut',
        'Fetid Fang': 'Kontaminierte Klaue',
        'Falling Water': 'Fallendes Wasser',
        'Falling Rock': 'Steinschlag',
        'Eye of the Cyclone': 'Auge des Zyklons',
        'Explosion': 'Explosion',
        'Ectoplasmic Ray': 'Ektoplasmastrahl',
        'Dreadstorm': 'Furchtsturm',
        'Depth Grip': 'Hand des Ozeans',
        'Crushing Gaze': 'Erdrückender Blick',
        'Coral Trident': 'Korallenharpune',
        'Command Current': 'Flutenruf',
        'Clearout': 'Kreisfeger',
        'Buccal Cones': 'Bukkale Kegel',
        'Bonebreaker': 'Knochenbrecher',
        'Barreling Smash': 'Fasswalze',
        'Arise': 'Erheben',
        'Acrid Stream': 'Ätzende Strömung',
        'Swing/Swipe/Cyclone': 'Hiebe/Schwung/Zyklons',
        'Hammer/Blade Mark': 'Hammer/Klingenmarkierung',
        'Blade/Hammer Mark': 'Klinge/Hammermarkierung',
        'Pyre/Hearth': 'Schreckensstachel/flammen',
        'Unknown Add': 'Unbekanntes Add',
      },
      '~effectNames': {
        'Dropsy': 'Wassersucht',
        'Bleeding': 'Blutung',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Depth Grip': 'Emprise Des Profondeurs',
        'Doxa': 'la Doxa',
        'Katharsis': 'la Catharsis',
        'Kyklops': 'Kyklops',
        'Noesis': 'la Noesis',
        'Sinister Bubble': 'Bulle sinistre',
        'Rukshs Dheem': 'Rukshs Dheem',
        'Unknown': 'Inconnu',
      },
      'replaceText': {
        'The Final Verse': 'Le chapitre final',
        'Wavebreaker': 'Brise-vague',
        'Unknown Add': 'Add Inconnu',
        'Terrible Hammer/Blade': 'Marteau/Lame terrifiante',
        'Terrible Blade/Hammer': 'Lame/Marteau terrifiant',
        'Swing/Swipe/Cyclone': 'Swing/Fauche/Cyclone',
        'Swift Shift': 'Déplacement soudain',
        'Sweeping Gouge': 'Perforation balayante',
        'Sewer Water': 'Eaux souillées',
        'Setback': 'Revers',
        'Seabed Ceremony': 'Cérémonie abyssale',
        'Scrutiny': 'Observation',
        'Rock Hard': 'Brise-roc',
        'Rising Tide': 'Marée montante',
        'Reflection': 'Réverbération',
        'Recharge': 'Recharge',
        'Raging Glower': 'Regard enragé',
        'Pyre/Hearth': 'Explosion/Flamme',
        'Plain Weirdness': 'Principe inconnu',
        'Nursed Grudge': 'Rancune nourrie',
        'Naval Ram': 'Charge marine',
        'Meatshield': 'Chair à canon',
        'Mantle Drill': 'Manteau forant',
        'Luminous Ray': 'Rayon lumineux',
        'Lacerate': 'Lacération',
        'Jumping Thrust': 'Percée bondissante',
        'Inscrutability': 'Signification inconnue',
        'Hydroball': 'Hydroballe',
        'Hammer/Blade Mark': 'Marque Marteau/Lame',
        'Flying Fount': 'Cascade',
        'Flood': 'Déluge',
        'Fetid Fang': 'Croc contaminé',
        'Falling Water': 'Chute d\'eau',
        'Falling Rock': 'Chute de pierre',
        'Eye of the Cyclone': 'Œil du cyclone',
        'Explosion': 'Explosion',
        'Ectoplasmic Ray': 'Rayon ectoplasmique',
        'Dreadstorm': 'Tempête d\'effroi',
        'Depth Grip': 'Emprise des profondeurs',
        'Crushing Gaze': 'Regard écrasant',
        'Coral Trident': 'Trident corallien',
        'Command Current': 'Eau courante',
        'Clearout': 'Fauchage',
        'Buccal Cones': 'Cônes buccaux',
        'Bonebreaker': 'Brise-os',
        'Blade/Hammer Mark': 'Marque Lame/Marteau',
        'Barreling Smash': 'Fracas effréné',
        'Arise': 'Apparition',
        'Acrid Stream': 'Projection âcre',
      },
      '~effectNames': {
        'Dropsy': 'Œdème',
        'Bleeding': 'Saignant',
      },
    },
    {
      'locale': 'ja',
      'missingTranslations': true,
      'replaceSync': {
        'Depth Grip': 'ハンド・オブ・オーシャン',
        'Doxa': 'ドクサの広間',
        'Katharsis': 'カタルシスの広場',
        'Kyklops': 'クリュプス',
        'Noesis': 'ノエシスの間',
        'Rukshs Dheem': 'ルクスィー・ディーマ',
        'Sinister Bubble': '不気味な泡',
        'Unknown': '正体不明',
      },
      'replaceText': {
        'The Final Verse': '恐怖の最終章',
        'Wavebreaker': 'ウェーブブレイク',
        'Terrible Hammer': '恐怖の戦鎚',
        'Terrible Blade': '恐怖の大剣',
        'Swift Shift': '高速移動',
        'Sweeping Gouge': 'スウィーピングガウジ',
        'Sewer Water': 'スーウェッジウォーター',
        'Setback': '打ち払い',
        'Seabed Ceremony': '水底の儀式',
        'Scrutiny': '観察',
        'Rock Hard': 'ロッククラッシャー',
        'Rising Tide': '上げ潮',
        'Reflection': 'リフレクション',
        'Recharge': '魔力供給',
        'Raging Glower': 'レイジング・グラワー',
        'Plain Weirdness': '原理不明',
        'Open Hearth': '恐怖の火焔',
        'Nursed Grudge': '不気味な念',
        'Naval Ram': 'ネイバルラム',
        'Meatshield': 'ミートシールド',
        'Mantle Drill': 'マントルドリル',
        'Luminous Ray': 'ルミナスレイ',
        'Lacerate': 'ラサレイト',
        'Jumping Thrust': 'ジャンプスラスト',
        'Inscrutability': '意味不明',
        'Hydroball': 'ハイドロボール',
        'Flying Fount': '飛泉',
        'Flood': 'フラッド',
        'Fetid Fang': '不快な牙',
        'Falling Water': '落水',
        'Falling Rock': '落石',
        'Eye of the Cyclone': 'アイ・オブ・サイクロン',
        'Explosion': '爆散',
        'Ectoplasmic Ray': 'エクトプラズミックレイ',
        'Dreadstorm': 'ドレッドストーム',
        'Depth Grip': 'ハンド・オブ・オーシャン',
        'Crushing Gaze': 'クラッシングゲイズ',
        'Coral Trident': '珊瑚の銛',
        'Command Current': '流水',
        'Clearout': 'なぎ払い',
        'Buccal Cones': 'バッカルコーン',
        'Bonebreaker': '骨砕き',
        'Barreling Smash': 'バレリングスマッシュ',
        'Arise': '出現',
        'Acrid Stream': 'アクリッドストリーム',
        '2,000-mina swipe': '2000ミナ・スワイプ',
        '2,000-mina swing': '2000ミナ・スイング',
      },
      '~effectNames': {
        'Dropsy': '水毒',
        'Bleeding': 'ペイン',
      },
    },
  ],
}];
