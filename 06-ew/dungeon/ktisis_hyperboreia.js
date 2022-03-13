Options.Triggers.push({
    zoneId: ZoneId.KtisisHyperboreia,
    timelineFile: 'ktisis_hyperboreia.txt',
    triggers: [
        {
            id: 'Ktisis Lyssa Skull Dasher',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '625E', source: 'Lyssa' }),
            netRegexDe: NetRegexes.startsUsing({ id: '625E', source: 'Lyssa' }),
            netRegexFr: NetRegexes.startsUsing({ id: '625E', source: 'Lyssa' }),
            netRegexJa: NetRegexes.startsUsing({ id: '625E', source: 'リッサ' }),
            netRegexCn: NetRegexes.startsUsing({ id: '625E', source: '吕萨' }),
            response: Responses.tankBuster(),
        },
        {
            id: 'Ktisis Lyssa Frigid Stomp',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '625D', source: 'Lyssa', capture: false }),
            netRegexDe: NetRegexes.startsUsing({ id: '625D', source: 'Lyssa', capture: false }),
            netRegexFr: NetRegexes.startsUsing({ id: '625D', source: 'Lyssa', capture: false }),
            netRegexJa: NetRegexes.startsUsing({ id: '625D', source: 'リッサ', capture: false }),
            netRegexCn: NetRegexes.startsUsing({ id: '625D', source: '吕萨', capture: false }),
            response: Responses.aoe(),
        },
        {
            id: 'Ktisis Lyssa Heavy Smash',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '625C', source: 'Lyssa' }),
            netRegexDe: NetRegexes.startsUsing({ id: '625C', source: 'Lyssa' }),
            netRegexFr: NetRegexes.startsUsing({ id: '625C', source: 'Lyssa' }),
            netRegexJa: NetRegexes.startsUsing({ id: '625C', source: 'リッサ' }),
            netRegexCn: NetRegexes.startsUsing({ id: '625C', source: '吕萨' }),
            response: Responses.stackMarkerOn(),
        },
        {
            id: 'Ktisis Ladon Lord Scratch',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '648F', source: 'Ladon Lord' }),
            netRegexDe: NetRegexes.startsUsing({ id: '648F', source: 'Ladon-Lord' }),
            netRegexFr: NetRegexes.startsUsing({ id: '648F', source: 'Seigneur Ladon' }),
            netRegexJa: NetRegexes.startsUsing({ id: '648F', source: 'ラドンロード' }),
            netRegexCn: NetRegexes.startsUsing({ id: '648F', source: '拉冬之王' }),
            response: Responses.tankBuster(),
        },
        {
            id: 'Ktisis Ladon Lord Intimidation',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '648D', source: 'Ladon Lord', capture: false }),
            netRegexDe: NetRegexes.startsUsing({ id: '648D', source: 'Ladon-Lord', capture: false }),
            netRegexFr: NetRegexes.startsUsing({ id: '648D', source: 'Seigneur Ladon', capture: false }),
            netRegexJa: NetRegexes.startsUsing({ id: '648D', source: 'ラドンロード', capture: false }),
            netRegexCn: NetRegexes.startsUsing({ id: '648D', source: '拉冬之王', capture: false }),
            response: Responses.aoe(),
        },
        {
            id: 'Ktisis Ladon Lord Pyric Blast',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '648E', source: 'Ladon Lord' }),
            netRegexDe: NetRegexes.startsUsing({ id: '648E', source: 'Ladon-Lord' }),
            netRegexFr: NetRegexes.startsUsing({ id: '648E', source: 'Seigneur Ladon' }),
            netRegexJa: NetRegexes.startsUsing({ id: '648E', source: 'ラドンロード' }),
            netRegexCn: NetRegexes.startsUsing({ id: '648E', source: '拉冬之王' }),
            response: Responses.stackMarkerOn(),
        },
        {
            id: 'Ktisis Hermes Trimegistos',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '651E', source: 'Hermes', capture: false }),
            netRegexDe: NetRegexes.startsUsing({ id: '651E', source: 'Hermes', capture: false }),
            netRegexFr: NetRegexes.startsUsing({ id: '651E', source: 'Hermès', capture: false }),
            netRegexJa: NetRegexes.startsUsing({ id: '651E', source: 'ヘルメス', capture: false }),
            netRegexCn: NetRegexes.startsUsing({ id: '651E', source: '赫尔墨斯', capture: false }),
            response: Responses.aoe(),
            run: (data) => data.isHermes = true,
        },
        {
            id: 'Ktisis Hermes True Tornado',
            // StartsUsing line is self-targeted.
            type: 'HeadMarker',
            netRegex: NetRegexes.headMarker({ id: '00DA' }),
            // This headmarker is used for the first two bosses but only Hermes cleaves.
            condition: (data) => data.isHermes,
            response: Responses.tankCleave('alert'),
        },
        {
            id: 'Ktisis Hermes True Aero',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '652B', source: 'Hermes', capture: false }),
            netRegexDe: NetRegexes.startsUsing({ id: '652B', source: 'Hermes', capture: false }),
            netRegexFr: NetRegexes.startsUsing({ id: '652B', source: 'Hermès', capture: false }),
            netRegexJa: NetRegexes.startsUsing({ id: '652B', source: 'ヘルメス', capture: false }),
            netRegexCn: NetRegexes.startsUsing({ id: '652B', source: '赫尔墨斯', capture: false }),
            response: Responses.spread(),
        },
        {
            id: 'Ktisis Hermes True Bravery',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '6533', source: 'Hermes' }),
            netRegexDe: NetRegexes.startsUsing({ id: '6533', source: 'Hermes' }),
            netRegexFr: NetRegexes.startsUsing({ id: '6533', source: 'Hermès' }),
            netRegexJa: NetRegexes.startsUsing({ id: '6533', source: 'ヘルメス' }),
            netRegexCn: NetRegexes.startsUsing({ id: '6533', source: '赫尔墨斯' }),
            condition: (data) => data.CanSilence(),
            response: Responses.interrupt(),
        },
        {
            id: 'Ktisis Hermes Meteor Cosmic Kiss',
            type: 'Ability',
            netRegex: NetRegexes.ability({ id: '6523', source: 'Meteor', capture: false }),
            netRegexDe: NetRegexes.ability({ id: '6523', source: 'Meteor', capture: false }),
            netRegexFr: NetRegexes.ability({ id: '6523', source: 'Météore', capture: false }),
            netRegexJa: NetRegexes.ability({ id: '6523', source: 'メテオ', capture: false }),
            netRegexCn: NetRegexes.ability({ id: '6523', source: '陨石', capture: false }),
            suppressSeconds: 5,
            infoText: (_data, _matches, output) => output.text(),
            outputStrings: {
                text: {
                    en: 'Hide behind unbroken meteor',
                    de: 'Hinter einem nicht zerbrochenen Meteor verstecken',
                    fr: 'Cachez-vous derrière le météore intact',
                    cn: '躲在未破碎的陨石后',
                    ko: '금이 안 간 돌 뒤에 숨기',
                },
            },
        },
    ],
    timelineReplace: [
        {
            'locale': 'de',
            'replaceSync': {
                'Concept Review': 'Konzeptbewertung',
                'Hermes': 'Hermes',
                'Ice Pillar': 'Eissäule',
                'Karukeion': 'Kerykeion',
                'Ladon Lord': 'Ladon-Lord',
                'Lyssa': 'Lyssa',
                'Meteor': 'Meteor',
                'Pyric Sphere': 'Pyrische Sphäre',
                'The Celestial Sphere': 'Astralzone',
                'The Frozen Sphere': 'Kaltzone',
            },
            'replaceText': {
                'Cosmic Kiss': 'Einschlag',
                'Double': 'Doppel',
                'Frigid Stomp': 'Froststampfer',
                'Frostbite and Seek': 'In eisige Winde gehüllt',
                'Heavy Smash': 'Schwerer Klopfer',
                'Hermetica': 'Hermetika',
                'Ice Pillar': 'Eissäule',
                'Icicall': 'Eiszapfen-Brüller',
                'Inhale': 'Inhalieren',
                'Intimidation': 'Einschüchterungsversuch',
                'Meteor': 'Meteor',
                'Pillar Pierce': 'Säulendurchschlag',
                'Punishing Slice': 'Strafender Schlitzer',
                'Pyric Blast': 'Pyrischer Rumms',
                'Pyric Breath': 'Pyrischer Atem',
                'Pyric Sphere': 'Pyrische Sphäre',
                'Quadruple': 'Quadrupel',
                'Scratch': 'Schramme',
                'Skull Dasher': 'Schädelzertrümmerer',
                'Trismegistos': 'Trismegistus',
                'True Aero(?! I)': 'Vollkommener Wind',
                'True Aero II': 'Vollkommenes Windra',
                'True Aero IV': 'Vollkommenes Windka',
                'True Tornado': 'Vollkommener Tornado',
            },
        },
        {
            'locale': 'fr',
            'replaceSync': {
                'Concept Review': 'Salle d\'évaluation',
                'Hermes': 'Hermès',
                'Ice Pillar': 'Pilier de glace',
                'Karukeion': 'kerykeion',
                'Ladon Lord': 'seigneur Ladon',
                'Lyssa': 'Lyssa',
                'Meteor': 'Météore',
                'Pyric Sphere': 'Sphère pyrogène',
                'The Celestial Sphere': 'Voûte céleste',
                'The Frozen Sphere': 'Glacier artificiel',
            },
            'replaceText': {
                'Cosmic Kiss': 'Impact de canon',
                'Double': 'Double',
                'Frigid Stomp': 'Piétinement glacial',
                'Frostbite and Seek': 'Gelure furtive',
                'Heavy Smash': 'Fracas violent',
                'Hermetica': 'Hermética',
                'Ice Pillar': 'Pilier de glace',
                'Icicall': 'Stalactite rugissante',
                'Inhale': 'Inhalation',
                'Intimidation': 'Intimidation',
                'Meteor': 'Météore',
                'Pillar Pierce': 'Empalement',
                'Punishing Slice': 'Tranchage punitif',
                'Pyric Blast': 'Souffle pyrogène',
                'Pyric Breath': 'Bouffée pyrogène',
                'Pyric Sphere': 'Sphère pyrogène',
                'Quadruple': 'Quadruple',
                'Scratch': 'Griffade',
                'Skull Dasher': 'Charge du crâne',
                'Trismegistos': 'Trismégistos',
                'True Aero(?! I)': 'Vent véritable',
                'True Aero II': 'Extra Vent véritable',
                'True Aero IV': 'Giga Vent véritable',
                'True Tornado': 'Tornade véritable',
            },
        },
        {
            'locale': 'ja',
            'replaceSync': {
                'Concept Review': '創造生物評価室',
                'Hermes': 'ヘルメス',
                'Ice Pillar': '氷柱',
                'Karukeion': 'ケリュケイオン',
                'Ladon Lord': 'ラドンロード',
                'Lyssa': 'リッサ',
                'Meteor': 'メテオ',
                'Pyric Sphere': 'パイリックスフィア',
                'The Celestial Sphere': '天脈創造環境',
                'The Frozen Sphere': '寒冷創造環境',
            },
            'replaceText': {
                'Cosmic Kiss': '着弾',
                'Double': 'ダブル',
                'Frigid Stomp': 'フリジッドストンプ',
                'Frostbite and Seek': 'フロストバイト・アンドシーク',
                'Heavy Smash': 'ヘビースマッシュ',
                'Hermetica': 'ヘルメチカ',
                'Ice Pillar': '氷柱',
                'Icicall': 'アイシクルロア',
                'Inhale': 'インヘイル',
                'Intimidation': 'インティミデーション',
                'Meteor': 'メテオ',
                'Pillar Pierce': '激突',
                'Punishing Slice': 'パニッシングスライス',
                'Pyric Blast': 'パイリックブラスト',
                'Pyric Breath': 'パイリックブレス',
                'Pyric Sphere': 'パイリックスフィア',
                'Quadruple': 'クアドラプル',
                'Scratch': 'スクラッチ',
                'Skull Dasher': 'スカルダッシャー',
                'Trismegistos': 'トリスメギストス',
                'True Aero(?! I)': 'トゥルー・エアロ',
                'True Aero II': 'トゥルー・エアロラ',
                'True Aero IV': 'トゥルー・エアロジャ',
                'True Tornado': 'トゥルー・トルネド',
            },
        },
        {
            'locale': 'cn',
            'replaceSync': {
                'Concept Review': '创造生物评价室',
                'Hermes': '赫尔墨斯',
                'Ice Pillar': '冰柱',
                'Karukeion': '双蛇杖纹',
                'Ladon Lord': '拉冬之王',
                'Lyssa': '吕萨',
                'Meteor': '陨石',
                'Pyric Sphere': '燃烧晶球',
                'The Celestial Sphere': '天脉创造环境',
                'The Frozen Sphere': '寒冷创造环境',
            },
            'replaceText': {
                'Cosmic Kiss': '流星坠落',
                'Double': '双重',
                'Frigid Stomp': '严寒踏压',
                'Frostbite and Seek': '寒霜寻影',
                'Heavy Smash': '重挥碎击',
                'Hermetica': '赫尔墨斯文集',
                'Ice Pillar': '冰柱',
                'Icicall': '召唤冰柱',
                'Inhale': '吸引',
                'Intimidation': '恐吓',
                'Meteor': '陨石',
                'Pillar Pierce': '激突',
                'Punishing Slice': '惩罚切',
                'Pyric Blast': '燃烧爆发',
                'Pyric Breath': '燃烧吐息',
                'Pyric Sphere': '燃烧晶球',
                'Quadruple': '四重',
                'Scratch': '抓击',
                'Skull Dasher': '铁颅猛击',
                'Trismegistos': '三重伟大',
                'True Aero(?! I)': '纯正疾风',
                'True Aero II': '纯正烈风',
                'True Aero IV': '纯正飙风',
                'True Tornado': '纯正龙卷',
            },
        },
    ],
});
