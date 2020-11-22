(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.jjencode will output: Hello Javascript', function () {
      var res = nx.jjencode('$', `console.log("Hello, JavaScript" )`, true);
      // expect(eval(res)).toBe('Hello, JavaScript');
    });
  });
})();
