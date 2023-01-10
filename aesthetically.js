"use strict";
class Aesthetically {
  static styles = {
    "serf-bold": {
      "upper": 0x1d400,
      "lower": 0x1d41a,
      "digits": 0x1d7cf,
      "zero": 0x1d7ce,
    },
    "serf-italic": {
      "upper": 0x1d434,
      "lower": 0x1d44e,
      "exceptions": {
        "h": 0x210e,
      },
    },
    "serf-bold-italic": {
      "upper": 0x1d468,
      "lower": 0x1d482,
    },
    "sans-serf": {
      "upper": 0x1d5a0,
      "lower": 0x1d5ba,
      "digits": 0x1d7e3,
      "zero": 0x1d7e2,
    },
    "sans-serf-bold": {
      "upper": 0x1d5d4,
      "lower": 0x1d5ee,
      "digits": 0x1d7ed,
      "zero": 0x1d7ec,
    },
    "sans-serf-italic": {
      "upper": 0x1d608,
      "lower": 0x1d622,
    },
    "sans-serf-bold-italic": {
      "upper": 0x1d63c,
      "lower": 0x1d656,
    },
    "script": {
      "upper": 0x1d49c,
      "lower": 0x1d4b6,
      "exceptions": {
        "B": 0x212c,
        "EF": 0x2130,
        "H": 0x210b,
        "I": 0x2110,
        "L": 0x2112,
        "M": 0x2133,
        "R": 0x211b,
        "e": 0x212f,
        "g": 0x210a,
        "o": 0x2134,
      },
    },
    "script-bold": {
      "upper": 0x1d4d0,
      "lower": 0x1d4ea,
    },
    "fraktur": {
      "upper": 0x1d504,
      "lower": 0x1d51e,
      "exceptions": {
        "C": 0x212d,
        "H": 0x210c,
        "I": 0x2111,
        "R": 0x211c,
        "Z": 0x2128,
      },
    },
    "fraktur-bold": {
      "upper": 0x1d56c,
      "lower": 0x1d586,
    },
    "monospace": {
      "upper": 0x1d670,
      "lower": 0x1d68a,
      "digits": 0x1d7f7,
      "zero": 0x1d7f6,
    },
    "double-struck": {
      "upper": 0x1d538,
      "lower": 0x1d552,
      "digits": 0x1d7d9,
      "zero": 0x1d7d8,
      "exceptions": {
        "C": 0x2102,
        "H": 0x210d,
        "N": 0x2115,
        "P": 0x2119,
        "Q": 0x211a,
        "R": 0x211d,
        "Z": 0x2124,
      },
    },
    "circled": {
      "upper": 0x24b6,
      "lower": 0x24d0,
      "digits": 0x2460,
      "zero": 0x1f10b,
    },
    "negative-circled": {
      "upper": 0x1f150,
      "zero": 0x24ff,
    },
    "parenthesized-small": {
      "lower": 0x249c,
      "digits": 0x2474,
    },
    "parenthesized-large": {
      "upper": 0x1f110,
    },
    "squared": {
      "upper": 0x1f130,
    },
    "negative-squared": {
      "upper": 0x1f170,
    },
  };
  /* 
    The list of characters Aesthetically can handle
    */
  static #characters = {
    "lower": {
      "chars": "abcdefghijklmnopqrstuvwxyz",
      "lower-bound": 0x61,
    },
    "upper": {
      "chars": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      "lower-bound": 0x41,
    },
    "digits": {
      "chars": "123456789",
      "lower-bound": 0x31,
    },
    "zero": {
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

  /**
    Style text
    @param {string} text - text to transform
    @param {string} style - style to transform text to (e.g. "double-struck")
    @returns {string} - formatted text
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

  /**
    Generate a style map
    (Private)
    @param {object} StyleInfo - an object with the unicode offsets for the style
    e.g.
    {
        "upper": 0x1D56C,
        "lower": 0x1D586
    }
    @returns {Map} Map of ASCII characters to styled characters 
            for a character set (upper, lower etc.)
    */
  static _generateMap(styleInfo) {
    const map = new Map();
    const hasExceptions = styleInfo.hasOwnProperty("exceptions");
    let exceptions;

    if (hasExceptions) {
      exceptions = [];
      Object.keys(styleInfo["exceptions"]).forEach((key) => {
        exceptions = [...exceptions, ...key];
      });
      for (const chars in styleInfo["exceptions"]) {
        const offset = styleInfo["exceptions"][chars];
        let i = 0;
        for (const char of chars) {
          const styledChar = String.fromCodePoint(i + offset);
          map.set(char, styledChar);
          i++;
        }
      }
    }

    if (
      !styleInfo.hasOwnProperty("upper") &&
      styleInfo.hasOwnProperty("lower")
    ) {
      styleInfo["upper"] = styleInfo["lower"];
    } else if (
      !styleInfo.hasOwnProperty("lower") &&
      styleInfo.hasOwnProperty("upper")
    ) {
      styleInfo["lower"] = styleInfo["upper"];
    }

    for (const charSet in Aesthetically.#characters) {
      if (typeof styleInfo[charSet] != "number") continue;
      for (const char of Aesthetically.#characters[charSet]["chars"]) {
        if (hasExceptions) if (exceptions.includes(char)) continue;
        const code = char.codePointAt(0);
        const styledChar = String.fromCodePoint(
          code +
            styleInfo[charSet] -
            Aesthetically.#characters[charSet]["lower-bound"]
        );
        map.set(char, styledChar);
      }
    }
    return map;
  }

  /**
    Converts styled text into unstyled text

    @param {string} text - text to transform
    @return {string} unstyled text
    */
  static unformat(text) {
    if (typeof Aesthetically.#styleReverseMap === "undefined")
      Aesthetically._generateReverseMap();
    let unformatted = "";

    for (const char of text) {
      unformatted += Aesthetically.#styleReverseMap.get(char) || char;
    }
    return unformatted;
  }

  /**
    Generate a style set used to convert styled text to ASCII
    @param {string[]} styleList - list of styles
    */
  static _generateReverseMap(...styleList) {
    let styles = {};
    if (styleList.length === 0) {
      styles = Aesthetically.styles;
      for (const normalSet in Aesthetically.#characters) {
        const offset = Aesthetically.#characters[normalSet]["lower-bound"];
        styles["normal"] = offset;
      }
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
export default Aesthetically;
