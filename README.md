# next-jjencode
> jjencode for next.

## installation
```bash
npm install -S @feizheng/next-jjencode
```

## usage
```js
import '@feizheng/next-jjencode';

const res = nx.jjencode('$', `console.log("Hello, JavaScript" )`, true);

// result
'\"+'+",$=~[];$={___:++$,$$$$:(![]+"")[$],__$:++$,$_$_:(![]+"")[$],_$_:++$,$_$$:({}+"")[$],$$_$:($[$]+"")[$],_$$:++$,$$$_:(!""+"")[$],$__:++$,$_$:++$,$$__:({}+"")[$],$$_:++$,$$$:++$,$___:++....
```

## resources
- http://utf-8.jp/public/jjencode.html
