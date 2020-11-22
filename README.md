# next-jjencode
> jjencode for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-jjencode
```

## usage
```js
import '@jswork/next-jjencode';

const res = nx.jjencode('$', `console.log("Hello, JavaScript" )`, true);

// result
'\"+'+",$=~[];$={___:++$,$$$$:(![]+"")[$],__$:++$,$_$_:(![]+"")[$],_$_:++$,$_$$:({}+"")[$],$$_$:($[$]+"")[$],_$$:++$,$$$_:(!""+"")[$],$__:++$,$_$:++$,$$__:({}+"")[$],$$_:++$,$$$:++$,$___:++....
```

## resources
- http://utf-8.jp/public/jjencode.html

## license
Code released under [the MIT license](https://github.com/afeiship/next-jjencode/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-jjencode
[version-url]: https://npmjs.org/package/@jswork/next-jjencode

[license-image]: https://img.shields.io/npm/l/@jswork/next-jjencode
[license-url]: https://github.com/afeiship/next-jjencode/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-jjencode
[size-url]: https://github.com/afeiship/next-jjencode/blob/master/dist/next-jjencode.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-jjencode
[download-url]: https://www.npmjs.com/package/@jswork/next-jjencode
