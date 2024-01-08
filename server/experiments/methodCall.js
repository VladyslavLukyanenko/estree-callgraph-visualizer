(function () {
  class SimpleClass {
    constructor(_0x3dc08b) {
      this.proxyList = _0x3dc08b;
    }

    async initSession(_0x2dbee1) {
      await _0x354f98.bind(this)(1);
      await standaloneMethod.bind(this)("Some param value");
    }
  }

  function standaloneMethod(value) {
    console.log(value + this.proxyList);
  }

  const c = new SimpleClass("fake");
  c.initSession("session");
})()
