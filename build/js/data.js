/*
 * International Telephone Input v24.1.2
 * https://github.com/jackocnr/intl-tel-input.git
 * Licensed under the MIT license
 */

// UMD
(function(factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    window.allCountries = factory();
  }
}(() => {

var factoryOutput = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/js/intl-tel-input/data.ts
  var data_exports = {};
  __export(data_exports, {
    default: () => data_default
  });
  var rawCountryData = [
    [
      "af",
      "93"
    ],
    [
      "al",
      "355"
    ],
    [
      "dz",
      "213"
    ],
    [
      "as",
      "1",
      5,
      ["684"]
    ],
    [
      "ad",
      "376"
    ],
    [
      "ao",
      "244"
    ],
    [
      "ai",
      "1",
      6,
      ["264"]
    ],
    [
      "ag",
      "1",
      7,
      ["268"]
    ],
    [
      "ar",
      "54"
    ],
    [
      "am",
      "374"
    ],
    [
      "aw",
      "297"
    ],
    [
      "ac",
      "247"
    ],
    [
      "au",
      "61",
      0
    ],
    [
      "at",
      "43"
    ],
    [
      "az",
      "994"
    ],
    [
      "bs",
      "1",
      8,
      ["242"]
    ],
    [
      "bh",
      "973"
    ],
    [
      "bd",
      "880"
    ],
    [
      "bb",
      "1",
      9,
      ["246"]
    ],
    [
      "by",
      "375"
    ],
    [
      "be",
      "32"
    ],
    [
      "bz",
      "501"
    ],
    [
      "bj",
      "229"
    ],
    [
      "bm",
      "1",
      10,
      ["441"]
    ],
    [
      "bt",
      "975"
    ],
    [
      "bo",
      "591"
    ],
    [
      "ba",
      "387"
    ],
    [
      "bw",
      "267"
    ],
    [
      "br",
      "55"
    ],
    [
      "io",
      "246"
    ],
    [
      "vg",
      "1",
      11,
      ["284"]
    ],
    [
      "bn",
      "673"
    ],
    [
      "bg",
      "359"
    ],
    [
      "bf",
      "226"
    ],
    [
      "bi",
      "257"
    ],
    [
      "kh",
      "855"
    ],
    [
      "cm",
      "237"
    ],
    [
      "ca",
      "1",
      1,
      ["204", "226", "236", "249", "250", "263", "289", "306", "343", "354", "365", "367", "368", "382", "387", "403", "416", "418", "428", "431", "437", "438", "450", "584", "468", "474", "506", "514", "519", "548", "579", "581", "584", "587", "604", "613", "639", "647", "672", "683", "705", "709", "742", "753", "778", "780", "782", "807", "819", "825", "867", "873", "879", "902", "905"]
    ],
    [
      "cv",
      "238"
    ],
    [
      "bq",
      "599",
      1,
      ["3", "4", "7"]
    ],
    [
      "ky",
      "1",
      12,
      ["345"]
    ],
    [
      "cf",
      "236"
    ],
    [
      "td",
      "235"
    ],
    [
      "cl",
      "56"
    ],
    [
      "cn",
      "86"
    ],
    [
      "cx",
      "61",
      2,
      ["89164"]
    ],
    [
      "cc",
      "61",
      1,
      ["89162"]
    ],
    [
      "co",
      "57"
    ],
    [
      "km",
      "269"
    ],
    [
      "cg",
      "242"
    ],
    [
      "cd",
      "243"
    ],
    [
      "ck",
      "682"
    ],
    [
      "cr",
      "506"
    ],
    [
      "ci",
      "225"
    ],
    [
      "hr",
      "385"
    ],
    [
      "cu",
      "53"
    ],
    [
      "cw",
      "599",
      0
    ],
    [
      "cy",
      "357"
    ],
    [
      "cz",
      "420"
    ],
    [
      "dk",
      "45"
    ],
    [
      "dj",
      "253"
    ],
    [
      "dm",
      "1",
      13,
      ["767"]
    ],
    [
      "do",
      "1",
      2,
      ["809", "829", "849"]
    ],
    [
      "ec",
      "593"
    ],
    [
      "eg",
      "20"
    ],
    [
      "sv",
      "503"
    ],
    [
      "gq",
      "240"
    ],
    [
      "er",
      "291"
    ],
    [
      "ee",
      "372"
    ],
    [
      "sz",
      "268"
    ],
    [
      "et",
      "251"
    ],
    [
      "fk",
      "500"
    ],
    [
      "fo",
      "298"
    ],
    [
      "fj",
      "679"
    ],
    [
      "fi",
      "358",
      0
    ],
    [
      "fr",
      "33"
    ],
    [
      "gf",
      "594"
    ],
    [
      "pf",
      "689"
    ],
    [
      "ga",
      "241"
    ],
    [
      "gm",
      "220"
    ],
    [
      "ge",
      "995"
    ],
    [
      "de",
      "49"
    ],
    [
      "gh",
      "233"
    ],
    [
      "gi",
      "350"
    ],
    [
      "gr",
      "30"
    ],
    [
      "gl",
      "299"
    ],
    [
      "gd",
      "1",
      14,
      ["473"]
    ],
    [
      "gp",
      "590",
      0
    ],
    [
      "gu",
      "1",
      15,
      ["671"]
    ],
    [
      "gt",
      "502"
    ],
    [
      "gg",
      "44",
      1,
      ["1481", "7781", "7839", "7911"]
    ],
    [
      "gn",
      "224"
    ],
    [
      "gw",
      "245"
    ],
    [
      "gy",
      "592"
    ],
    [
      "ht",
      "509"
    ],
    [
      "hn",
      "504"
    ],
    [
      "hk",
      "852"
    ],
    [
      "hu",
      "36"
    ],
    [
      "is",
      "354"
    ],
    [
      "in",
      "91"
    ],
    [
      "id",
      "62"
    ],
    [
      "ir",
      "98"
    ],
    [
      "iq",
      "964"
    ],
    [
      "ie",
      "353"
    ],
    [
      "im",
      "44",
      2,
      ["1624", "74576", "7524", "7924", "7624"]
    ],
    [
      "il",
      "972"
    ],
    [
      "it",
      "39",
      0
    ],
    [
      "jm",
      "1",
      4,
      ["876", "658"]
    ],
    [
      "jp",
      "81"
    ],
    [
      "je",
      "44",
      3,
      ["1534", "7509", "7700", "7797", "7829", "7937"]
    ],
    [
      "jo",
      "962"
    ],
    [
      "kz",
      "7",
      1,
      ["33", "7"]
    ],
    [
      "ke",
      "254"
    ],
    [
      "ki",
      "686"
    ],
    [
      "xk",
      "383"
    ],
    [
      "kw",
      "965"
    ],
    [
      "kg",
      "996"
    ],
    [
      "la",
      "856"
    ],
    [
      "lv",
      "371"
    ],
    [
      "lb",
      "961"
    ],
    [
      "ls",
      "266"
    ],
    [
      "lr",
      "231"
    ],
    [
      "ly",
      "218"
    ],
    [
      "li",
      "423"
    ],
    [
      "lt",
      "370"
    ],
    [
      "lu",
      "352"
    ],
    [
      "mo",
      "853"
    ],
    [
      "mg",
      "261"
    ],
    [
      "mw",
      "265"
    ],
    [
      "my",
      "60"
    ],
    [
      "mv",
      "960"
    ],
    [
      "ml",
      "223"
    ],
    [
      "mt",
      "356"
    ],
    [
      "mh",
      "692"
    ],
    [
      "mq",
      "596"
    ],
    [
      "mr",
      "222"
    ],
    [
      "mu",
      "230"
    ],
    [
      "yt",
      "262",
      1,
      ["269", "639"]
    ],
    [
      "mx",
      "52"
    ],
    [
      "fm",
      "691"
    ],
    [
      "md",
      "373"
    ],
    [
      "mc",
      "377"
    ],
    [
      "mn",
      "976"
    ],
    [
      "me",
      "382"
    ],
    [
      "ms",
      "1",
      16,
      ["664"]
    ],
    [
      "ma",
      "212",
      0
    ],
    [
      "mz",
      "258"
    ],
    [
      "mm",
      "95"
    ],
    [
      "na",
      "264"
    ],
    [
      "nr",
      "674"
    ],
    [
      "np",
      "977"
    ],
    [
      "nl",
      "31"
    ],
    [
      "nc",
      "687"
    ],
    [
      "nz",
      "64"
    ],
    [
      "ni",
      "505"
    ],
    [
      "ne",
      "227"
    ],
    [
      "ng",
      "234"
    ],
    [
      "nu",
      "683"
    ],
    [
      "nf",
      "672"
    ],
    [
      "kp",
      "850"
    ],
    [
      "mk",
      "389"
    ],
    [
      "mp",
      "1",
      17,
      ["670"]
    ],
    [
      "no",
      "47",
      0
    ],
    [
      "om",
      "968"
    ],
    [
      "pk",
      "92"
    ],
    [
      "pw",
      "680"
    ],
    [
      "ps",
      "970"
    ],
    [
      "pa",
      "507"
    ],
    [
      "pg",
      "675"
    ],
    [
      "py",
      "595"
    ],
    [
      "pe",
      "51"
    ],
    [
      "ph",
      "63"
    ],
    [
      "pl",
      "48"
    ],
    [
      "pt",
      "351"
    ],
    [
      "pr",
      "1",
      3,
      ["787", "939"]
    ],
    [
      "qa",
      "974"
    ],
    [
      "re",
      "262",
      0
    ],
    [
      "ro",
      "40"
    ],
    [
      "ru",
      "7",
      0
    ],
    [
      "rw",
      "250"
    ],
    [
      "ws",
      "685"
    ],
    [
      "sm",
      "378"
    ],
    [
      "st",
      "239"
    ],
    [
      "sa",
      "966"
    ],
    [
      "sn",
      "221"
    ],
    [
      "rs",
      "381"
    ],
    [
      "sc",
      "248"
    ],
    [
      "sl",
      "232"
    ],
    [
      "sg",
      "65"
    ],
    [
      "sx",
      "1",
      21,
      ["721"]
    ],
    [
      "sk",
      "421"
    ],
    [
      "si",
      "386"
    ],
    [
      "sb",
      "677"
    ],
    [
      "so",
      "252"
    ],
    [
      "za",
      "27"
    ],
    [
      "kr",
      "82"
    ],
    [
      "ss",
      "211"
    ],
    [
      "es",
      "34"
    ],
    [
      "lk",
      "94"
    ],
    [
      "bl",
      "590",
      1
    ],
    [
      "sh",
      "290"
    ],
    [
      "kn",
      "1",
      18,
      ["869"]
    ],
    [
      "lc",
      "1",
      19,
      ["758"]
    ],
    [
      "mf",
      "590",
      2
    ],
    [
      "pm",
      "508"
    ],
    [
      "vc",
      "1",
      20,
      ["784"]
    ],
    [
      "sd",
      "249"
    ],
    [
      "sr",
      "597"
    ],
    [
      "sj",
      "47",
      1,
      ["79"]
    ],
    [
      "se",
      "46"
    ],
    [
      "ch",
      "41"
    ],
    [
      "sy",
      "963"
    ],
    [
      "tw",
      "886"
    ],
    [
      "tj",
      "992"
    ],
    [
      "tz",
      "255"
    ],
    [
      "th",
      "66"
    ],
    [
      "tl",
      "670"
    ],
    [
      "tg",
      "228"
    ],
    [
      "tk",
      "690"
    ],
    [
      "to",
      "676"
    ],
    [
      "tt",
      "1",
      22,
      ["868"]
    ],
    [
      "tn",
      "216"
    ],
    [
      "tr",
      "90"
    ],
    [
      "tm",
      "993"
    ],
    [
      "tc",
      "1",
      23,
      ["649"]
    ],
    [
      "tv",
      "688"
    ],
    [
      "ug",
      "256"
    ],
    [
      "ua",
      "380"
    ],
    [
      "ae",
      "971"
    ],
    [
      "gb",
      "44",
      0
    ],
    [
      "us",
      "1",
      0
    ],
    [
      "uy",
      "598"
    ],
    [
      "vi",
      "1",
      24,
      ["340"]
    ],
    [
      "uz",
      "998"
    ],
    [
      "vu",
      "678"
    ],
    [
      "va",
      "39",
      1,
      ["06698"]
    ],
    [
      "ve",
      "58"
    ],
    [
      "vn",
      "84"
    ],
    [
      "wf",
      "681"
    ],
    [
      "eh",
      "212",
      1,
      ["5288", "5289"]
    ],
    [
      "ye",
      "967"
    ],
    [
      "zm",
      "260"
    ],
    [
      "zw",
      "263"
    ],
    [
      "ax",
      "358",
      1,
      ["18"]
    ]
  ];
  var allCountries = [];
  for (let i = 0; i < rawCountryData.length; i++) {
    const c = rawCountryData[i];
    allCountries[i] = {
      name: "",
      // this is now populated in the plugin
      iso2: c[0],
      dialCode: c[1],
      priority: c[2] || 0,
      areaCodes: c[3] || null,
      nodeById: {}
    };
  }
  var data_default = allCountries;
  return __toCommonJS(data_exports);
})();

// UMD
  return factoryOutput.default;
}));
