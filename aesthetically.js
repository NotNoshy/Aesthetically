"use strict";
export default class Aesthetically {
  static styles = {
    "serf-bold": {
      upper: 0x1d400,
      lower: 0x1d41a,
      digits: 0x1d7cf,
      zero: 0x1d7ce,
    },
    "serf-italic": {
      upper: 0x1d434,
      lower: 0x1d44e,
    },
    "serf-bold-italic": {
      upper: 0x1d468,
      lower: 0x1d482,
    },
    "sans-serf": {
      upper: 0x1d5a0,
      lower: 0x1d5ba,
      digits: 0x1d7e3,
      zero: 0x1d7e2,
    },
    "sans-serf-bold": {
      upper: 0x1d5d4,
      lower: 0x1d5ee,
      digits: 0x1d7ed,
      zero: 0x1d7ec,
    },
    "sans-serf-italic": {
      upper: 0x1d608,
      lower: 0x1d622,
    },
    "sans-serf-bold-italic": {
      upper: 0x1d63c,
      lower: 0x1d656,
    },
    "script": {
      upper: 0x1d49c,
      lower: 0x1d4b6,
    },
    "script-bold": {
      upper: 0x1d4d0,
      lower: 0x1d4ea,
    },
    "fraktur": {
      upper: 0x1d504,
      lower: 0x1d51e,
    },
    "fraktur-bold": {
      upper: 0x1d56c,
      lower: 0x1d586,
    },
    "monospace": {
      upper: 0x1d670,
      lower: 0x1d68a,
      digits: 0x1d7f7,
      zero: 0x1d7f6,
    },
    "double-struck": {
      upper: 0x1d538,
      lower: 0x1d552,
      digits: 0x1d7d9,
      zero: 0x1d7d8,
    },
    "circled": {
      upper: 0x24b6,
      lower: 0x24d0,
      digits: 0x2461,
      zero: 0x2460,
    },
    "negative-circled": {
      upper: 0x1f150,
      zero: 0x24ff,
    },
    "parenthesized-small": {
      lower: 0x249c,
      digits: 0x2474,
    },
    "parenthesized-large": {
      upper: 0x1f110,
    },
    "squared": {
      upper: 0x1f130,
    },
    "negative-squared": {
      upper: 0x1f170,
    },
  };
  /* 
    The list of characters Aesthetically can handle
    */
  static #charaters = {
    lower: {
      "chars": "abcdefghijklmnopqrstuvwxyz",
      "lower-bound": 0x61,
    },
    upper: {
      "chars": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      "lower-bound": 0x41,
    },
    digits: {
      "chars": "123456789",
      "lower-bound": 0x31,
    },
    zero: {
      "chars": "0",
      "lower-bound": 0x30,
    },
  };
  /* 
    Used to convert test to another style 
    */
  static #styleDict = {};

  /*
    Used to convert styled text to ASCII
    */
  static #styleReverseMap;

  /* 
    Style text
    Parameters: text: (String) text to transform
                style: (String) Style to transform text to
                e.g. "double-struck"
    Returns: (String) formatted text
    */
  static format(text, style) {
    let styledText;

    if (style in Aesthetically.#styleDict) {
      styledText = convertText(text, Aesthetically.#styleDict[style]);
    } else {
      Aesthetically.#styleDict[style] = Aesthetically._generateMap(
        Aesthetically.styles[style]
      );
      styledText = convertText(text, Aesthetically.#styleDict[style]);
    }
    return styledText;

    function convertText(text, styleMap) {
      let styledText = "";
      for (const char of text) {
        styledText += styleMap.get(char) || char;
      }
      return styledText;
    }
  }

  /* 
    Generate a style map
    (Private)
    Parameters: StyleInfo: (Object) san object with the unicode offsets for the style
    e.g.
    {
        "upper": 0x1D56C,
        "lower": 0x1D586
    }
    Returns: (Map) Map of ASCII characters to styled characters 
            for a characrer set (upper, lower etc.)
    */
  static _generateMap(styleInfo) {
    const map = new Map();
    for (const charSet in Aesthetically.#charaters) {
      if (typeof styleInfo[charSet] === "undefined") continue;
      for (const char of Aesthetically.#charaters[charSet]["chars"]) {
        const code = char.codePointAt(0);
        const styledChar = String.fromCodePoint(
          code +
            styleInfo[charSet] -
            Aesthetically.#charaters[charSet]["lower-bound"]
        );
        map.set(char, styledChar);
      }
    }
    console.log(map);
    return map;
  }

  /* 
    Converts styled text into unstyled text

    Parameters: text: (String) text to transform
    Returns: (String) unstyled text
    */
  static unformat(text) {
    if (typeof Aesthetically.#styleReverseMap === "undefined")
      Aesthetically.generateReverseMap();
    let unformatted = "";
    for (const char of text) {
      unformatted += Aesthetically.#styleReverseMap.get(char) || char;
    }
    return unformatted;
  }

  /* 
    Generate a style set used to convert styled text to ASCII
    Parameters: (Optional) styleList: string[] of styles
    */
  static generateReverseMap(...styleList) {
    let styles = {};
    if (styleList.length === 0) {
      styles = Aesthetically.styles;
    } else {
      styleList.forEach((s) => {
        styles.push(Aesthetically.styles[s]);
      });
    }
    Aesthetically.#styleReverseMap = new Map();
    for (const style in styles) {
      let map;
      if (style in Aesthetically.#styleDict) {
        map = Aesthetically.#styleDict[style];
      } else {
        map = Aesthetically._generateMap(styles[style]);
      }
      for (const [key, value] of map) {
        Aesthetically.#styleReverseMap.set(value, key);
      }
    }
  }
}
