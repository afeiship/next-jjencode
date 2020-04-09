const nx = require('@feizheng/next-js-core2');
require('../src/next-jjencode');

describe('api.basic test', () => {
  test('nx.jjencode will output: Hello Javascript', function () {
    var res = nx.jjencode('$', `console.log("Hello, JavaScript" )`, true);
    eval(res);
  });
});
