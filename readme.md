<!-- omit in toc -->

# Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Getting a list of styles](#getting-a-list-of-styles)
  - [Styling test](#styling-test)
  - [Un-styling text](#un-styling-text)
  - [Table of styles and support](#table-of-styles-and-support)
- [Acknowledgements](#acknowledgements)
- [License](#license)

# Installation

In the browser:

_Because Aesthetically is a [module], it's really important to write your scripts in a module too by specifying `<script type="module">`._

Using [jsDelivr](https://www.jsdelivr.com/):

```html
<script type="module">
  import Aesthetically from "https://cdn.jsdelivr.net/npm/aesthetically@0.0.1/aesthetically.js";
</script>
```

Self-hosted:

```html
<script type="module">
  import Aesthetically from "/aesthetically.js";
</script>
```

Using npm:

```bash
$ npm i aesthetically
```

In Node:

```javascript
import Aesthetically from "./node_modules/aesthetically/aesthetically.js";
```

# Usage

## Getting a list of styles

_If your looking for a list of styles, take a look at the [table](#table-of-styles-and-support) below_

```javascript
styles = Object.keys(Aesthetically.styles);
```

## Styling test

```javascript
Aesthetically.format("this is v cool", "double-struck");
("this is v cool");
```

**Arguments**

text: (String) text to transform

style: (String) Style to transform text to

**Returns**

(String) formatted text

## Un-styling text

```javascript
Aesthetically.unformat("𝓹𝓪𝓬𝓶𝓪𝓷 𝓲𝓼 𝓱𝓾𝓷𝓰𝓻𝔂 👾🍔");
("pacman is hungry 👾🍔");
```

**Arguments**

text: (String) text to transform

**Returns**

(String) unstyled text

## Table of styles and support

Not all styles support all types of characters. Some only support lowercase or uppercase. Digits indicate support for 1 - 9 while zero is listed sperately if supported.

[Mathematical Alphanumeric Symbols]

| Style                 | Support                    | Sample                                          |
| --------------------- | -------------------------- | ----------------------------------------------- |
| serf-bold             | upper, lower, digits, zero | 𝐬𝐩𝐡𝐢𝐧𝐱 𝐨𝐟 𝐛𝐥𝐚𝐜𝐤 𝐪𝐮𝐚𝐫𝐭𝐳, 𝐣𝐮𝐝𝐠𝐞 𝐦𝐲 𝐯𝐨𝐰 𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗 |
| serf-italic           | upper, lower               | 𝑠𝑝𝑕𝑖𝑛𝑥 𝑜𝑓 𝑏𝑙𝑎𝑐𝑘 𝑞𝑢𝑎𝑟𝑡𝑧, 𝑗𝑢𝑑𝑔𝑒 𝑚𝑦 𝑣𝑜𝑤            |
| serf-bold-italic      | upper, lower               | 𝒔𝒑𝒉𝒊𝒏𝒙 𝒐𝒇 𝒃𝒍𝒂𝒄𝒌 𝒒𝒖𝒂𝒓𝒕𝒛, 𝒋𝒖𝒅𝒈𝒆 𝒎𝒚 𝒗𝒐𝒘            |
| sans-serf             | upper, lower, digits, zero | 𝗌𝗉𝗁𝗂𝗇𝗑 𝗈𝖿 𝖻𝗅𝖺𝖼𝗄 𝗊𝗎𝖺𝗋𝗍𝗓, 𝗃𝗎𝖽𝗀𝖾 𝗆𝗒 𝗏𝗈𝗐 𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫 |
| sans-serf-bold        | upper, lower, digits, zero | 𝘀𝗽𝗵𝗶𝗻𝘅 𝗼𝗳 𝗯𝗹𝗮𝗰𝗸 𝗾𝘂𝗮𝗿𝘁𝘇, 𝗷𝘂𝗱𝗴𝗲 𝗺𝘆 𝘃𝗼𝘄 𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵 |
| sans-serf-italic      | upper, lower               | 𝘴𝘱𝘩𝘪𝘯𝘹 𝘰𝘧 𝘣𝘭𝘢𝘤𝘬 𝘲𝘶𝘢𝘳𝘵𝘻, 𝘫𝘶𝘥𝘨𝘦 𝘮𝘺 𝘷𝘰𝘸            |
| sans-serf-bold-italic | upper, lower               | 𝙨𝙥𝙝𝙞𝙣𝙭 𝙤𝙛 𝙗𝙡𝙖𝙘𝙠 𝙦𝙪𝙖𝙧𝙩𝙯, 𝙟𝙪𝙙𝙜𝙚 𝙢𝙮 𝙫𝙤𝙬            |
| script                | upper, lower               | 𝓈𝓅𝒽𝒾𝓃𝓍 𝓄𝒻 𝒷𝓁𝒶𝒸𝓀 𝓆𝓊𝒶𝓇𝓉𝓏, 𝒿𝓊𝒹𝒼𝒺 𝓂𝓎 𝓋𝓄𝓌            |
| script-bold           | upper, lower               | 𝓼𝓹𝓱𝓲𝓷𝔁 𝓸𝓯 𝓫𝓵𝓪𝓬𝓴 𝓺𝓾𝓪𝓻𝓽𝔃, 𝓳𝓾𝓭𝓰𝓮 𝓶𝔂 𝓿𝓸𝔀            |
| fraktur               | upper, lower               | 𝔰𝔭𝔥𝔦𝔫𝔵 𝔬𝔣 𝔟𝔩𝔞𝔠𝔨 𝔮𝔲𝔞𝔯𝔱𝔷, 𝔧𝔲𝔡𝔤𝔢 𝔪𝔶 𝔳𝔬𝔴            |
| fraktur-bold          | upper, lower               | 𝖘𝖕𝖍𝖎𝖓𝖝 𝖔𝖋 𝖇𝖑𝖆𝖈𝖐 𝖖𝖚𝖆𝖗𝖙𝖟, 𝖏𝖚𝖉𝖌𝖊 𝖒𝖞 𝖛𝖔𝖜            |
| monospace             | upper, lower, digits, zero | 𝚜𝚙𝚑𝚒𝚗𝚡 𝚘𝚏 𝚋𝚕𝚊𝚌𝚔 𝚚𝚞𝚊𝚛𝚝𝚣, 𝚓𝚞𝚍𝚐𝚎 𝚖𝚢 𝚟𝚘𝚠 𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿 |
| double-struck         | upper, lower, digits, zero | 𝕤𝕡𝕙𝕚𝕟𝕩 𝕠𝕗 𝕓𝕝𝕒𝕔𝕜 𝕢𝕦𝕒𝕣𝕥𝕫, 𝕛𝕦𝕕𝕘𝕖 𝕞𝕪 𝕧𝕠𝕨 𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡 |

[Enclosed Alphanumerics] & [Supplement]

| Style               | Support                    | Sample                                          |
| ------------------- | -------------------------- | ----------------------------------------------- |
| circled             | upper, lower, digits, zero | ⓢⓟⓗⓘⓝⓧ ⓞⓕ ⓑⓛⓐⓒⓚ ⓠⓤⓐⓡⓣⓩ, ⓙⓤⓓⓖⓔ ⓜⓨ ⓥⓞⓦ ①②③④⑤⑥⑦⑧⑨⑩ |
| negative-circled    | upper, zero                | 🅢🅟🅗🅘🅝🅧 🅞🅕 🅑🅛🅐🅒🅚 🅠🅤🅐🅡🅣🅩, 🅙🅤🅓🅖🅔 🅜🅨 🅥🅞🅦 ⓿          |
| parenthesized-small | lower, digits              | ⒮⒫⒣⒤⒩⒳ ⒪⒡ ⒝⒧⒜⒞⒦ ⒬⒰⒜⒭⒯⒵, ⒥⒰⒟⒢⒠ ⒨⒴ ⒱⒪⒲⑴⑵⑶⑷⑸⑹⑺⑻⑼   |
| parenthesized-large | upper                      | 🄢🄟🄗🄘🄝🄧 🄞🄕 🄑🄛🄐🄒🄚 🄠🄤🄐🄡🄣🄩, 🄙🄤🄓🄖🄔 🄜🄨 🄥🄞🄦            |
| squared             | upper                      | 🅂🄿🄷🄸🄽🅇 🄾🄵 🄱🄻🄰🄲🄺 🅀🅄🄰🅁🅃🅉, 🄹🅄🄳🄶🄴 🄼🅈 🅅🄾🅆            |
| negative-squared    | upper                      | 🆂🅿🅷🅸🅽🆇 🅾🅵 🅱🅻🅰🅲🅺 🆀🆄🅰🆁🆃🆉, 🅹🆄🅳🅶🅴 🅼🆈 🆅🅾🆆            |

# Acknowledgements

[This article](https://dmitripavlutin.com/what-every-javascript-developer-should-know-about-unicode/) and [this other article](https://mathiasbynens.be/notes/javascript-encoding) were really useful for understanding the way Unicode strings work in JavaScript.
The [demo] uses the awesome [Bulma](https://bulma.io/) CSS framework <3.

# License

```
MIT License

Copyright (c) 2020 Joshy Nosh

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

[mathematical alphanumeric symbols]: https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols
[enclosed alphanumerics]: https://en.wikipedia.org/wiki/Enclosed_Alphanumerics
[supplement]: https://en.wikipedia.org/wiki/Enclosed_Alphanumeric_Supplement
[demo]: https://aesthetically.glitch.me/
[module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
