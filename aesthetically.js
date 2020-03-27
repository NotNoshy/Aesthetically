"use strict";
export default class Aesthetically {
    // Styles and offsets
    static styles = {
        "serf-bold": {
            "upper": 0x1D400,
            "lower": 0x1D41A,
            "digits": 0x1D7CF,
            "zero": 0x1D7CE
        },
        "serf-italic": {
            "upper": 0x1D434,
            "lower": 0x1D44E
        },
        "serf-bold-italic": {
            "upper": 0x1D468,
            "lower": 0x1D482
        },
        "sans-serf": {
            "upper": 0x1D5A0,
            "lower": 0x1D5BA,
            "digits": 0x1D7E3,
            "zero": 0x1D7E2
        },
        "sans-serf-bold": {
            "upper": 0x1D5D4,
            "lower": 0x1D5EE,
            "digits": 0x1D7ED,
            "zero": 0x1D7EC
        },
        "sans-serf-italic": {
            "upper": 0x1D608,
            "lower": 0x1D622
        },
        "sans-serf-bold-italic": {
            "upper": 0x1D63C,
            "lower": 0x1D656
        },
        "script": {
            "upper": 0x1D49C,
            "lower": 0x1D4B6
        },
        "script-bold": {
            "upper": 0x1D4D0,
            "lower": 0x1D4EA
        },
        "fraktur": {
            "upper": 0x1D504,
            "lower": 0x1D51E
        },
        "fraktur-bold": {
            "upper": 0x1D56C,
            "lower": 0x1D586
        },
        "monospace": {
            "upper": 0x1D670,
            "lower": 0x1D68A,
            "digits": 0x1D7F7,
            "zero" : 0x1D7F6
        },
        "double-struck": {
            "upper": 0x1D538,
            "lower": 0x1D552,
            "digits": 0x1D7D9,
            "zero": 0x1D7D8
        },
        "circled" : {
            "upper": 0x24B6,
            "lower": 0x24D0,
            "digits": 0x2461,
            "zero": 0x2460
        },
        "negative-circled": {
            "upper": 0x1F150,
            "zero": 0x24ff
        },
        "parenthesized-small": {
            "lower": 0x249C,
            "digits": 0x2474
        },
        "parenthesized-large": {
            "upper": 0x1F110
        },
        "squared": {
            "upper": 0x1F130
        },
        "negative-squared":{
            "upper": 0x1F170
        }
    };
    /* 
    The list of characters Aesthetically can handle
    */
    static #charaters = {
        "lower": {
            "chars": "abcdefghijklmnopqrstuvwxyz",
            "lower-bound": 0x61
        },
        "upper": {
            "chars": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "lower-bound": 0x41
        },
        "digits": {
            "chars": "123456789",
            "lower-bound": 0x31
        },
        "zero" : {
            "chars": "0",
            "lower-bound": 0x30
        }
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
        }
        else {
            Aesthetically.#styleDict[style] = Aesthetically._generateMap(
                Aesthetically.styles[style]);
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
                const styledChar = String.fromCodePoint(code + styleInfo[charSet]
                    - Aesthetically.#charaters[charSet]["lower-bound"])
                    map.set(char, styledChar);
                }
            }
            console.log(map)
            return map;
    }

    /* 
    Converts styled text into unstyled text

    Parameters: text: (String) text to transform
    Returns: (String) unstyled text
    */
    static unformat(text) {
        if (typeof Aesthetically.#styleReverseMap === 'undefined')
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
        }
        else {
            styleList.forEach((s) => {
                styles.push(Aesthetically.styles[s])
            });
        }
        Aesthetically.#styleReverseMap = new Map();
        for (const style in styles) {
            let map;
            if (style in Aesthetically.#styleDict) {
                map = Aesthetically.#styleDict[style];
            }
            else {
                map = Aesthetically._generateMap(styles[style]);
            }
            for (const [key, value] of map) {
                Aesthetically.#styleReverseMap.set(value, key);
            }
        }
    }
}
