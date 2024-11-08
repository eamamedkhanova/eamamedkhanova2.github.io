let button = document.querySelector(".button");
let flag = true;

function translitToEN(text) {
  const translitMap = {
    А: "A",
    Б: "B",
    В: "V",
    Г: "G",
    Д: "D",
    Е: "E",
    Ё: "YO",
    Ж: "ZH",
    З: "Z",
    И: "I",
    Й: "Y",
    К: "K",
    Л: "L",
    М: "M",
    Н: "N",
    О: "O",
    П: "P",
    Р: "R",
    С: "S",
    Т: "T",
    У: "U",
    Ф: "F",
    Х: "KH",
    Ц: "TS",
    Ч: "CH",
    Ш: "SH",
    Щ: "SHCH",
    Ъ: "",
    Ы: "Y",
    Ь: "",
    Э: "E",
    Ю: "YU",
    Я: "YA",
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "yo",
    ж: "zh",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "kh",
    ц: "ts",
    ч: "ch",
    ш: "sh",
    щ: "shch",
    ъ: "",
    ы: "y",
    ь: "",
    э: "e",
    ю: "yu",
    я: "ya",
  };
  return text
    .split("")
    .map((char) => translitMap[char] || char)
    .join("");
}

function translitToRU(text) {
  const converter = {
    sch: "щ",

    yo: "ё",
    zh: "ж",
    ch: "ч",
    sh: "ш",
    yu: "ю",
    ya: "я",

    a: "а",
    b: "б",
    v: "в",
    g: "г",
    d: "д",
    e: "е",
    z: "з",
    и: "i",
    y: "й",
    k: "к",
    l: "л",
    m: "м",
    n: "н",
    o: "о",
    p: "п",
    r: "р",
    s: "с",
    t: "т",
    u: "у",
    f: "ф",
    h: "х",
    c: "ц",
    y: "ы",
  };

  return text
    .split("")
    .map((char) => converter[char] || char)
    .join("");
}

function convertText() {
  const elements = document.querySelectorAll(
    ".hfamilia, .hname, .hfname, .hborn, .hpborn1, .hpborn2"
  );

  elements.forEach((element) => {
    if (flag) {
      element.innerText = translitToEN(element.innerText);
    } else {
      element.innerText = translitToRU(element.innerText);
    }
  });
  flag = !flag;
  console.log(flag);
}

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".button");

  button.addEventListener("click", convertText);
});
