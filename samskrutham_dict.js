

//Samskrutham database
var halanth = "्"
var anuswara = "ं"
var visarga = "ः"
var samyukta = "््"
var chandrabindu = "ँ"
var swaraMatra = new Map([
    [ 'अ',' ' ],
    [ 'आ','ा' ],
    [ 'इ','ि' ],
    [ 'ई','ी' ],
    [ 'उ','ु' ],
    [ 'ऊ','ू' ],
    [ 'ऋ','ृ' ],
    [ 'ॠ','ॄ' ],
    [ 'ऌ','ॢ' ],
    [ 'ॡ','ॣ' ],
    [ 'ए','े' ],
    [ 'ऐ','ै' ],
    [ 'ओ','ो' ],
    [ 'औ','ौ' ],
    [ 'अं', '\u0902' ],
    [ 'अः','\u0903' ]
])


let matraSwara = new Map([...swaraMatra.entries()].map(
  ([key, value]) => ([value, key]))
);

var swara = [ 'अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ऋ', 'ऌ', 'ए', 'ऐ', 'ओ', 'औ' ]
var vyanjan = [ 
                'क', 'ख', 'ग', 'घ', 'ङ', 
                'च', 'छ', 'ज', 'झ', 'ञ', 
                'ट', 'ठ', 'ड', 'ढ', 'ण', 
                'त', 'थ', 'द', 'ध', 'न', 
                'प', 'फ', 'ब', 'भ', 'म', 
                'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह'
               ];
var sankya = [ '०', '१', '२', '३', '४', '५', '६', '७', '८', '९' ]


var linga = [ 'पुलिंग','स्त्रिलिंग','नपुंसकलिंग' ]

var vibhaktiDescription =
      {
          telugu: {
              telugu: [ 'తెలుగు' ],
              samskrutham: [ 'संस्कृतम्' ],
              vibhakti: [ 'విభక్తి' ],
              eka: [ 'ఎకవచనము' ],
              dvi: [ 'ద్వివచనము' ],
              bahu: [ 'బహువచనము'],
              anthya: [ 'అంత్య స్వరం' ],
              linga: [ 'లింగం' ], 
              karanta: [ 'కారాంత' ],
              shabda: [ 'శబ్దః' ],
              ityadi: [ 'ఇలాంటి శబ్దాలు చుపుము' ],
              prathama : [ 'ప్రధమా','డు, ము, వు, లు' ],
              sambhodana: [ 'సంభోధన ప్రధమా','' ],
              dvitiya: [ 'ద్వితీయా','ని, ను, ల, కూర్చి, గురించి' ],
              trutiya: [ 'తృతియా','చేత, చే, తోడ, తో' ],
              chaturthi: [ 'చతుర్థీ','కొఱకు, కై' ],
              panchami: [ 'పంచమీ','వలన, కంటె, పట్టి' ],
              shasti: [ 'షష్ఠి','కి, కు, యొక్క , లో, లోపల' ],
              saptami: [ 'సప్తమీ','అందు, ఇందు, న' ],
          },
          samskrutham: {
              telugu: [ 'తెలుగు' ],
              samskrutham: [ 'संस्कृतम्' ],
              vibhakti: [ 'विभक्तिः' ],
              eka: [ 'एकवचनम्' ],
              dvi: [ 'द्विवचनम्' ],
              bahu: [ 'बहुवचनम्' ],
              anthya: [ 'अंत्य स्वरः' ],
              linga: [ 'लिंगः' ], 
              karanta: [ 'कारांतः' ],
              shabda: [ 'शब्दः' ],
              ityadi: [ 'इत्यादि शब्द:' ],
              prathama : [ 'प्रदमा','డు, ము, వు, లు' ],
              sambhodana: [ 'संबोदना प्रदमा','' ],
              dvitiya: [ 'द्वितीया','ని, ను, ల, కూర్చి, గురించి' ],
              trutiya: [ 'त्रुतिया','చేత, చే, తోడ, తో' ],
              chaturthi: [ 'चतुर्ती','కొఱకు, కై' ],
              panchami: [ 'पंचमी','వలన, కంటె, పట్టి' ],
              shasti: [ 'शश्ठी','కి, కు, యొక్క , లో, లోపల' ],
              saptami: [ 'सप्तमी','అందు, ఇందు, న' ],
          }
      }

//Sabdhamanjari
var vibhaktiList =

  [


 // Pullinga Shabdaha

       {
          shabdam: "",
          suffix: "",
          lingam: "",
          meaning: "",
          vibhakti: {
              prathama: ['', '', ''],
              sambhodana: ['', '', ''],
              dvitiya: ['', '', ''],
              trutiya: ['', '', ''],
              chaturthi: ['', '', ''],
              panchami: ['', '', ''],
              shasti: ['', '', ''],
              saptami: ['', '', ''],
          }
      },


      {
          shabdam: "राम",
          suffix: "अ",
          lingam: "पुलिंग",
          meaning: "రాముడు",
          primary: true,
          similar: ['कृष्ण', 'गोविंद', 'मुकुंद' ],
          vibhakti: {
              prathama: [ 'रामः', 'रामौ', 'रामाः' ],
              sambhodana: [ 'हे रामः', 'हे रामौ', 'हे रामा' ],
              dvitiya: [ 'रामम्', 'रामौ', 'रामान्' ],
              trutiya: [ 'रामेण', 'रामाभ्याम्', 'रामैः' ],
              chaturthi: [ 'रामाय', 'रामाभ्याम्', 'रामेभ्यः' ],
              panchami: [ 'रामात्', 'रामाभ्याम्', 'रामेभ्यः' ],
              shasti: [ 'रामस्य', 'रामयोः', 'रामाणाम्' ],
              saptami: [ 'रामे', 'रामयोः', 'रामेशु' ],
          }
      },


      {
          shabdam: "हरि",
          suffix: "इ",
          lingam: "पुलिंग",
          meaning: "విష్నువు",
          primary: true,
          similar: [ '' ],
          vibhakti: {
              prathama: [ 'हरिः','हरी','हरयः' ],
              sambhodana: [ 'हे हरे','हे हरी','हे हरयः' ],
              dvitiya: [ 'हरिम्','हरी','हरीन्' ],
              trutiya: [ 'हरिणा','हरिभ्याम्','हरिभिः' ],
              chaturthi: [ 'हरये','हरिभ्याम्','हरिभ्यः' ],
              panchami: [ 'हरेः','हरिभ्याम्','हरिभ्यः' ],
              shasti: [ 'हरेः','हर्यौः','हरिणाम्' ],
              saptami: [ 'हरौ','हर्योः','हरिषु' ],
          }
      },

      {
          shabdam: "शंभु",
          suffix: "उ",
          lingam: "पुलिंग",
          meaning: "శివుడు",
          primary: true,
          similar: [ '' ],
          vibhakti: {
              prathama: [ 'शंभु','शंभू','शंभवः' ],
              sambhodana: [ 'हे शंभो','हे शंभू','हे शंभवः' ],
              dvitiya: [ 'शंभुम्','शंभू','शंभून्' ],
              trutiya: [ 'शंभुना','शंभुभ्याम्','शंभुभिः' ],
              chaturthi: [ 'शंभवे','शंभुभ्याम्','शंभुभ्यः' ],
              panchami: [ 'शंभो','शंभुभ्याम्','शंभुभ्यः' ],
              shasti: [ 'शंभोः','शंभ्वोः','शंभुनाम्' ],
              saptami: [ 'शंभौ','शंभ्वोः','शंभुशु' ],
          }
      },

//Stree linga Shabdaha
      {
          shabdam: "रमा",
          suffix: "अ",
          lingam: "स्त्रिलिंग",
          meaning: "లక్ష్మి",
          primary: true,
          similar: [ "सीता","भामा","पद्मा" ],
          vibhakti: {
              prathama: [ 'रमा','रमे','रमाः' ],
              sambhodana: [ 'हे रमे','हे रमे','हे रमाः' ],
              dvitiya: [ 'रमाम्','रमे','रमाः' ],
              trutiya: [ 'रमया','रमाभ्याम्','रमाभिः' ],
              chaturthi: [ 'रमयै','रमाभ्याम्','रमाभ्यः' ],
              panchami: [ 'रमायाः','रमाभ्याम्','रमाभ्यः' ],
              shasti: [ 'रमायाः','रमयोः','रमाणाम्' ],
              saptami: [ 'रमायाम्','रमयोः','रमासु' ],
          }
      },

      {
          shabdam: "मति",
          suffix: "इ",
          lingam: "स्त्रिलिंग",
          meaning: "బుద్ధి",
          primary: true,
          similar: [ '' ],
          vibhakti: {
              prathama: [ 'मतिः','मती','मतयः' ],
              sambhodana: [ 'हे मते','हे मती','हे मतयः' ],
              dvitiya: [ 'मतिम्','मति','मतीः' ],
              trutiya: [ 'मत्या','मतिभ्याम्','मतिभिः' ],
              chaturthi: [ 'मत्यै / मतये','मतिभ्याम्','मतिभ्यः' ],
              panchami: [ 'मत्याः / मतेः','मतिभ्याम्','मतिभ्यः' ],
              shasti: [ 'मत्याः / मतेः','मत्योः','मतीनाम्' ],
              saptami: [ 'मत्याम् / मतौ','मत्योः','मतिशु' ],
          }
      },


      {
          shabdam: "धेनु",
          suffix: "उ",
          lingam: "स्त्रिलिंग",
          meaning: "ఆవు",
          primary: true,
          similar: [ "तनु", "इषु", "पटु" ],
          vibhakti: {
              prathama: [ 'धेनुः','धेनू','धेनवः' ],
              sambhodana: [ 'हे धेनो','हे धेनू','हे धेनवः' ],
              dvitiya: [ 'धेनुम्','धेनू','धेनूः' ],
              trutiya: [ 'धेन्वा','धेनुभ्याम्','धेनुभिः' ],
              chaturthi: [ 'धेन्वै / (धे??)','धेनुभ्याम्','धेनुभ्यः' ],
              panchami: [ 'धेन्वाः / धेनोः','धेनुभ्याम्','धेनुभ्यः' ],
              shasti: [ 'धेन्वाः / धेनोः','धेन्वोः','धेनुनाम्' ],
              saptami: [ 'धेन्वाम् / धेनौ','धेन्वोः','धेनुशु' ],
          }
      },

      {
          shabdam: "",
          suffix: "",
          lingam: "",
          meaning: "",
          vibhakti: {
              prathama: [ '' ],
              sambhodana: [ '' ],
              dvitiya: [ '' ],
              trutiya: [ '' ],
              chaturthi: [ '' ],
              panchami: [ '' ],
              shasti: [ '' ],
              saptami: [ '' ],
          }
      },
 
{
          shabdam: "ज्ञान",
          suffix: "अ",
          lingam: "नपुंसकलिंग",
          meaning: "తెలివి",
          primary: true,
          similar: [ '' ],
          vibhakti: {
              prathama: [ 'ज्ञानम्','ज्ञाने','ज्ञानानि' ],
              sambhodana: [ 'हे ज्ञान','हे ज्ञाने','हे ज्ञानानि' ],
              dvitiya: [ 'ज्ञानम्','ज्ञाने','ज्ञानेनि' ],
              trutiya: [ 'ज्ञानेन','ज्ञानाभ्याम्','ज्ञानैः' ],
              chaturthi: [ 'ज्ञानाय','ज्ञानाभ्याम्','ज्ञानेभ्यः' ],
              panchami: [ 'ज्ञानात्','ज्ञानाभ्याम्','ज्ञानेभ्य:' ],
              shasti: [ 'ज्ञानस्य','ज्ञानयोः','ज्ञानानाम्' ],
              saptami: [ 'ज्ञाने','ज्ञानयोः','ज्ञानेशु' ],
          }
      },

      {
          shabdam: "वारि",
          suffix: "इ",
          lingam: "नपुंसकलिंग",
          meaning: "ఉదకము",
          primary: true,
          similar: [ '' ],
          vibhakti: {
              prathama: [ 'वारि','वारिणी','वारीणि' ],
              sambhodana: [ 'हे वारे / हे वारि','हे वारिणी','हे वारीणि' ],
              dvitiya: [ 'वारि','वारिणी','वारीणि' ],
              trutiya: [ 'वारिणा','वारिभ्याम्','वारिभिः' ],
              chaturthi: [ 'वारिणे','वारिभ्याम्','वारिभ्यः' ],
              panchami: [ 'वारिणः','वारिभ्याम्','वारिभ्यः' ],
              shasti: [ 'वारिणः','वारिणोः','वारीणाम्' ],
              saptami: [ 'वारिणि','वारिणोः','वारीशु' ],
          }
      },

      {
          shabdam: "मधु",
          suffix: "उ",
          lingam: "नपुंसकलिंग",
          meaning: "తేనె",
          primary: true,
          similar: [ '' ],
          vibhakti: {
              prathama: [ 'मधु','मधुनी','मधूनि' ],
              sambhodana: [ 'हे मधो / हे मधु','हे मधुनि','हे मधूनि' ],
              dvitiya: [ 'मधु','मधुनी','मधूनि' ],
              trutiya: [ 'मधुना','मधुभ्याम्','मधुभिः' ],
              chaturthi: [ 'मधुने','मधुभ्याम्','मधुभ्यः' ],
              panchami: [ 'मधुनः','मधुभ्याम्','मधुभ्यः' ],
              shasti: [ 'मधुनः','मधुनोः','मधुनाम्' ],
              saptami: [ 'मधुनी','मधुनोः','मधुशु' ],
          }
      },
        
      {
          shabdam: "",
          suffix: "",
          lingam: "",
          meaning: "",
          vibhakti: {
              prathama: [ '' ],
              sambhodana: [ '' ],
              dvitiya: [ '' ],
              trutiya: [ '' ],
              chaturthi: [ '' ],
              panchami: [ '' ],
              shasti: [ '' ],
              saptami: [ '' ],
          }
      },
      
  ]


