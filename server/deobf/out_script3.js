(function (_0x124540, _0x2b80d5, _0xd3e51f, _0x1c3c2d, _0x5860df, _0x459147, _0x41b00e, _0x4376a2, _0x433f5d, _0x570af9, _0x3066df, _0x28d3a4, _0x5cc2b6, _0x12b840, _0x2b4694, _0x3113c9, _0xdb2d92) {
  var arg_0 = function () {
    const _0x5b0c52 = _0x8044f7;

    const _0x4da5ef = function () {
      const _0x3475b6 = _0x5b0c52;

      const _0x965064 = _0x4da5ef.constructor(_0xccdd84.wjAQC)().constructor(_0xccdd84.FvfIH);

      return !_0x965064.test(_0x52d352);
    };

    return _0x4da5ef();
  };

  const _0x8044f7 = a0_0x38b5;

  const _0x50a510 = function () {
    let _0x1808da = !![];

    return function (_0x3656b2, _0x19cd86) {
      const _0x14b130 = a0_0x38b5;
      let _0x2ea06b = null;

      if (_0x1808da) {
        _0x2ea06b = function () {
          const _0x36f453 = _0x14b130;

          if (_0x19cd86) {
            const _0x5e42d3 = _0x19cd86.apply(_0x3656b2, arguments);

            return _0x19cd86 = null, _0x5e42d3;
          }
        };
      } else {
        _0x2ea06b = function () {
        };
      }

      return _0x1808da = ![], _0x2ea06b;
    };
  }();

  const _0x52d352 = _0x50a510(this, arg_0);

  _0x52d352();

  'use strict';

  var _0x5b1a41 = null;

  if ("default" in _0x2b80d5) {
    _0x5b1a41 = _0x2b80d5["default"];
  } else {
    _0x5b1a41 = _0x2b80d5;
  }

  if (_0xd3e51f && _0xd3e51f.hasOwnProperty("default")) {
    _0xd3e51f = _0xd3e51f["default"];
  } else {
    _0xd3e51f = _0xd3e51f;
  }

  if (_0x1c3c2d && _0x1c3c2d.hasOwnProperty("default")) {
    _0x1c3c2d = _0x1c3c2d["default"];
  } else {
    _0x1c3c2d = _0x1c3c2d;
  }

  if (_0x5860df && _0x5860df.hasOwnProperty("default")) {
    _0x5860df = _0x5860df["default"];
  } else {
    _0x5860df = _0x5860df;
  }

  if (_0x459147 && _0x459147.hasOwnProperty("default")) {
    _0x459147 = _0x459147["default"];
  } else {
    _0x459147 = _0x459147;
  }

  if (_0x41b00e && _0x41b00e.hasOwnProperty("default")) {
    _0x41b00e = _0x41b00e["default"];
  } else {
    _0x41b00e = _0x41b00e;
  }

  if (_0x433f5d && _0x433f5d.hasOwnProperty("default")) {
    _0x433f5d = _0x433f5d["default"];
  } else {
    _0x433f5d = _0x433f5d;
  }

  if (_0x570af9 && _0x570af9.hasOwnProperty("default")) {
    _0x570af9 = _0x570af9["default"];
  } else {
    _0x570af9 = _0x570af9;
  }

  if (_0x3066df && _0x3066df.hasOwnProperty("default")) {
    _0x3066df = _0x3066df["default"];
  } else {
    _0x3066df = _0x3066df;
  }

  if (_0x28d3a4 && _0x28d3a4.hasOwnProperty("default")) {
    _0x28d3a4 = _0x28d3a4["default"];
  } else {
    _0x28d3a4 = _0x28d3a4;
  }

  if (_0x5cc2b6 && _0x5cc2b6.hasOwnProperty("default")) {
    _0x5cc2b6 = _0x5cc2b6["default"];
  } else {
    _0x5cc2b6 = _0x5cc2b6;
  }

  if (_0x2b4694 && _0x2b4694.hasOwnProperty("default")) {
    _0x2b4694 = _0x2b4694["default"];
  } else {
    _0x2b4694 = _0x2b4694;
  }

  var arg_1 = (_0x5b1a41.app || _0x5b1a41.remote.app).getPath("userData");

  const _0x2c7416 = require("axios-https-proxy-fix");

  const _0x15a846 = new _0x5860df();

  const _0x45a98b = _0x42c6cb => {
    return new Promise(_0xfc14e9 => setTimeout(_0xfc14e9, _0x42c6cb));
  };

  const _0x354f98 = async function () {
    const _0x1cf273 = _0x8044f7;

    try {
      await this.session.clearStorageData({
        'storages': "cookies"
      });
      await this.session.clearCache();

      let _0x4608ac = await this.session.cookies.get({});

      for (let _0x2d79c4 of _0x4608ac) {
        await this.session.cookies.remove(this.siteOrigin, _0x2d79c4.name);
      }
    } catch (err) {
    }
  };

  const _0x586466 = async (_0x155eb0, _0xc8021b, _0x1a34b7 = 0) => {
    const _0x308f78 = _0x8044f7;

    if (_0x1a34b7 == 5) {
      return;
    }

    try {
      let _0x436075 = await _0x1c3c2d({
        'method': "post",
        'uri': _0xc8021b,
        'headers': {
          'Content-Type': "application/json"
        },
        'json': _0x155eb0,
        'simple': ![],
        'resolveWithFullResponse': !![]
      });

      console.log(_0x436075.statusCode);

      if (_0x436075.body && _0x436075.body.retry_after) {
        let _0x278c66 = _0x436075.body.retry_after;
        return await _0x45a98b(parseInt(_0x278c66)), _0x586466(_0x155eb0, _0xc8021b);
      }

      if (_0x436075.statusCode == 204 || _0x436075.statusCode == 400) {
        return;
      } else {
        if (_0x436075.statusCode == 429) {
          return await _0x45a98b(10000), _0x586466(_0x155eb0, _0xc8021b, _0x1a34b7);
        }
      }

      return await _0x45a98b(10000), _0x586466(_0x155eb0, _0xc8021b, _0x1a34b7 + 1);
    } catch (err) {
      return console.log(err), await _0x45a98b(10000), _0x586466(_0x155eb0, _0xc8021b, _0x1a34b7 + 1);
    }
  };

  const _0x3ef86a = async (_0x3dd18c, _0x3f89d8) => {
    const _0x12cfd0 = _0x8044f7;

    let _0x2f80c9 = _0x15a846.get("webhook");

    let _0x41192e = null;

    if (_0x15a846.get("webhookSuccessOnly")) {
      _0x41192e = _0x15a846.get("webhookSuccessOnly");
    } else {
      _0x41192e = ![];
    }

    return _0x2f80c9 && (!_0x41192e || _0x3f89d8) && _0x586466(_0x3dd18c, _0x2f80c9);
  };

  const _0x310223 = _0x2d6383 => {
    const _0x3ad27c = _0x8044f7;
    return _0x2d6383[Math.floor(Math.random() * _0x2d6383.length)];
  };

  const _0x2bda7f = (_0x2c98b4 = 32) => {
    const _0x2dff71 = _0x8044f7;
    var _0x51d9c5 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var _0x25e88b = '';
    var _0x5efc84 = 0;
    ;

    for (; _0x5efc84 < _0x2c98b4; _0x5efc84++) {
      _0x25e88b += _0x51d9c5[Math.floor(Math.random() * _0x51d9c5.length)];
    }

    return _0x25e88b;
  };

  const _0x27b1e4 = async (_0x528e13, _0x46fc92 = 0) => {
    const _0x26b642 = _0x8044f7;

    try {
      return await _0x2c7416(_0xecfbe2);
    } catch (err) {
      return console.log(err), await _0x45a98b(10000), _0x27b1e4(_0x528e13, _0x46fc92 + 1);
    }
  };

  const _0x1df7bc = _0x3c0300 => {
    const _0x5ec579 = _0x8044f7;

    try {
      const _0x255c57 = _0x15a846.get("taskProfile");

      let _0x1c146b = _0x255c57[_0x3c0300];

      if (_0x1c146b) {
        return _0x1c146b.isBillingSameAsShipping;
      }

      return !![];
    } catch (err) {
      return console.log(err), !![];
    }
  };

  const _0x833cc4 = ["TUVLQUlPLUpHNEc0QUNCOTI5RjU4RjU4NjFDMDk=", "TUVLQUlPLTVIMjY0RzQ4OUJFODMzS0s2SUU1SzU=", "TUVLQUlPLTZFS0pHOEc4S0tENzQ4Sjc3RTYzQjY=", "TUVLQUlPLUhKMTBBNDVBS0NHSEdENEZIQjBHNkE=", "TUVLQUlPLUpLMks0OUczNzIyR0dEOEo4OThLOUI=", "TUVLQUlPLUdBMkYyRTFLNjZESDFGNzBEMEY5RDU=", "TUVLQUlPLTM1SzI2RjMyNzU5RkUyOUZBQUdCMEM=", "TUVLQUlPLUdJREM3OUU1OTVEMTc5Mjg4N0lGQzE=", "TUVLQUlPLUc1N0tLNkRKSjJCSkRDRjZKSUJINjI=", "TUVLQUlPLTczNDVJS0JHSkhJRjlKMzVCSEcwMjI=", "TUVLQUlPLUgySTRHMkdESzBKRjdEQkQwSjJGOTQ=", "TUVLQUlPLUcwSkk2Q0k2Mks3MEpGM0pHSjM4S0E=", "TUVLQUlPLUIzSzZFRkpGQkhKRDBLSEM3QkhDQzQ=", "TUVLQUlPLTA2NkU4N0JKNjIzRUdCOEkzSklEMks=", "TUVLQUlPLTlCNjU1SEIySEFJOUFBSkhISkMxNkE=", "TUVLQUlPLUcyQUg2RTI1NzdFNzkzQkg4NkpBR0U=", "TUVLQUlPLUpJN0ZHNkdIMko1NUExNDFHSDk2SjE=", "TUVLQUlPLUpEM0M1SDZHQjc1RUhLMkM2NkJHMjg=", "TUVLQUlPLUFIR0Q1QkJFQ0dFMEZGSEMxQTBLOTg=", "TUVLQUlPLUhERTA4NEcwMDExRTA3MUY4NzdFQ0I=", "TUVLQUlPLTg3RzBBS0FFNEtGRDgyMUczNzNIODg=", "TUVLQUlPLTJFRjUxSUFDQUM1SEdCODhIRUM5NjE=", "TUVLQUlPLUE2RTY2M0pLSDhFOURGQzNJMTMwN0Y=", "TUVLQUlPLURDQjMxSkVERTVJRUtCSzQzMzgwNDY=", "TUVLQUlPLUc4MjFENzc1NURJMzE2REk1RUhFNzQ=", "TUVLQUlPLUQ0RkJKNUY0RjBISEEwREFFOUVEN0c=", "TUVLQUlPLTczRDQwQkYySDdIQzc5M0YyREIwQkk=", "TUVLQUlPLUIzMEk5NUZKNEpCSUgxREJHRDExODI=", "TUVLQUlPLUNGRTlFNkI4RUdHQkFCSTFIRkk4RTI=", "TUVLQUlPLUZKSkhHOEkzSjVKM0RCSzVLRjRBSkk=", "TUVLQUlPLUZBNzlJSjUyQUhEREJIMzU5NThIOEM=", "TUVLQUlPLTIzQTc3RjAwOEQwMzFDSUFFMTlCSTI=", "TUVLQUlPLUVBNDk2QjU5MTFHS0lESEo2QkJLS0M=", "TUVLQUlPLTU0SEZJNkNJR0pDMEdGNEoyOEc5SDI=", "TUVLQUlPLUJEOTVENEFEREZIQTczMzhFSDc0NkM=", "TUVLQUlPLTE2NDU2SEUzNEQ5MTMxOTU3NzA4NzY=", "TUVLQUlPLTBEQTUyR0M2RjRBSjZGQjUyNkk5MTY=", "TUVLQUlPLUE1REJBSjIwSDcwREg4QURLMkswNUs=", "TUVLQUlPLTA0QUIwQzRJQUlEOTdLN0c1NkdDRzI=", "TUVLQUlPLUE5Q0NINzZGRUVIMTgxS0Y5QjlCSjA=", "TUVLQUlPLUgxNTBFSzQ1SEIxOTdFS0E3ODkyQkE=", "TUVLQUlPLUtLRDhESDZHODZER0Q3Q0JCMTc3NTA=", "TUVLQUlPLUhJQkE3REo0RTg4MjY2Q0JKQzBCQkQ=", "TUVLQUlPLTFBRjk2Qjk1SDFGSzU3MTVDRkQ4N0c=", "TUVLQUlPLUlKSDdGRjI4OURGNzcyOUtIMkI0NkE=", "TUVLQUlPLTgzODA2OTcwNTM1SUsxQkQ1M0RDNUg=", "TUVLQUlPLThIQkhFQzQ1OUM4MEI0QUg3NjFENzM=", "TUVLQUlPLTUxNjc4NURLMzlBSTI4SEY5QzkySTI=", "TUVLQUlPLUU3NTM1S0o0Mzk0RUhGOEgyRDRJMUo=", "TUVLQUlPLTdBODRFSjJKQ0MxNzMxN0k5RDlCRTU=", "TUVLQUlPLTBIOUE4NEQ1QUkwMkk2MzY5QTdISzg=", "TUVLQUlPLUQ2NTI1SDY3MEpLSjk4SEhBQkJCR0U=", "TUVLQUlPLURHR0c0Skk5NUM5REEyRTU1QjlGMEE=", "TUVLQUlPLURJNEUxOTJINTBKQjAySkhBQTZCMzU=", "TUVLQUlPLUk4M0tLOUlBN0JHRUpENEZISkQxMEo=", "TUVLQUlPLThBMzkwMDE0NzM2Q0g0MjFLMDc0MzU=", "TUVLQUlPLTBKRUIwSDIzNEFDRjQ0OUM2OThHS0g=", "TUVLQUlPLTdHNTM0SEc2MTJLNjhLSTZJS0JIN0Q=", "TUVLQUlPLUM4NjRGMDdFQUEzRUFKSEVHM0lLSzU=", "TUVLQUlPLTZFOTVIREc1SjE0NDUzREI4QUJBRjA=", "TUVLQUlPLUQ5QkI2OEJBM0dCNTlKODRHOEQ3NDk=", "TUVLQUlPLUhHMENEMUtLNkNJMjQ2NEs1MEo2MDU=", "TUVLQUlPLTY4STY0RktKNzRJNzRBNktFRzRLQkE=", "TUVLQUlPLUZHREYxSzYyQTgwOUdDRzk3RjlGRjY=", "TUVLQUlPLTdGQ0cyNDhDODI4Q0VBQUZHQTg5N0g=", "TUVLQUlPLUNJNTQzSTAwRDg2QzFKMEtFMjRHNDg=", "TUVLQUlPLTRFNDZJSkE1RjNLMDhCMUo2NkdCM0Q=", "TUVLQUlPLTI1R0NLRUY4RjM3NUUwRTczSEY1MDc=", "TUVLQUlPLTlGSTQyMzg1OUJKSjFIR0c2QjUzRkM=", "TUVLQUlPLUs4Skk5NEpKQkRFQkZLRERHQUcwOUU=", "TUVLQUlPLTY2MURINUZFRjg0R0o5Qks0SEsyMzA=", "TUVLQUlPLTQwNzM1RDQ1MzdJOUZGMDNJMDRLRTA=", "TUVLQUlPLUpDOTRFS0EzNjhGQ0YxNjQwQUJISUc=", "TUVLQUlPLUc4NDRGOUhJSzNEQURGSUY1SEs3Skg=", "TUVLQUlPLTY0OThKNjM5Q0tIM0tCSEQyRUo4MUE=", "TUVLQUlPLUpHMEo0SkEwQUkyNzA1OTlKRTNLNUs=", "TUVLQUlPLTc4NjU1NEE2NDZGSDdDQ0EyRzA4QjI=", "TUVLQUlPLUgzM0Q3M0UwRURFQkc2OTM2Q0NHOTM=", "TUVLQUlPLTdLQTRHODVBQUhINks1MERDMEg5NTE="];
  const _0x41abf7 = ["604001435339849738", "791751299162046464", "603719121246486538", "655669026156052500", "745001738305536119"];

  const _0x3b9bb4 = () => {
    const _0xa91abe = _0x8044f7;

    try {
      return global.user.key && !global.user.key.toLowerCase().includes("mek") || global.user.userId && _0x41abf7.includes(global.user.userId) || global.user.key && _0x833cc4.includes(Buffer.from(global.user.key.toUpperCase()).toString("base64"));
    } catch (err) {
      return ![];
    }
  };

  const _0x4886a5 = "\n<html>\n<head>\n\t<title>MEKaio Captcha Harvester</title>\n    <style type=\"text/css\">\n    *,\n*::after,\n*::before {\n    -webkit-user-select: none;\n    user-select: none;\n}\nbody {\n\tmargin: auto;\n\tfont-weight: 500;\n    overflow: hidden;\n}\n\n.captchaFooter {\n\tbackground-color: black;\n\tbottom: 0;\n\tcolor: white;\n\theight: 10vh;\n\twidth: 100%;\n\ttext-align: center;\n\tpadding: 10px 10px 80px;\n}\n\n.center {\n\theight: 100%;\n}\n\n.btn {\n\theight: 40px !important;\n\twidth: 90px !important;\n\tmargin: 5px !important;\n}\n\n#clearSession {\n\twidth: 120px !important;\n}\n\n#title-bar {\n\theight: 5% !important;\n\tmin-height: 30px !important;\n    background-color: #050a1d;\n    border-radius: 20px;\n}\n\n#title-text {\n    /* height: 100% !important; */\n    /* min-height: 30px !important; */\n    text-align: center;\n    /* color: white; */\n    font-size: 14px;\n    padding-top: 2px;\n    line-height: 2;\n}\n\n#bottom {\n\tbackground-color: rgb(15, 23, 53);\n\theight: 40%;\n\tcolor: white;\n}\n\n#title-bar-btns {\n    -webkit-app-region: no-drag;\n    position: absolute;\n    top: 0px;\n    right: 9px;\n    height: 5% !important;\n    min-height: 30px !important;\n}\n\n#title-bar-btns button {\n    width: 30px;\n    height: 24px;\n    margin: 6px 3px;\n    background-color: #1c2235;\n    border-radius: 6px;\n    border: none;\n    color: grey;\n    font-size: 16px;\n    float: left;\n}\n\n#title-bar-btns path:hover {\n    pointer-events: bounding-box;\n}\n\n#title-bar-btns path:hover {\n    cursor: pointer;\n}\n\n#title-bar-btns svg:hover {\n    cursor: pointer;\n}\n\n#title-bar-btns button:hover {\n    cursor: pointer;\n    background: #293350;\n}\n\n#title-bar-btns button:focus {\n    outline: none;\n}\n\n.col-12 {\n\ttext-align: center !important;\n\tmargin: auto;\n\tfont-weight: bold;\n\tfont-size: 1.2em;\n}\n\n@keyframes inner-spinner {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\t50% {\n\t\ttransform: rotate(180deg);\n\t}\n\t100% {\n\t\ttransform: rotate(360deg);\n\t}\n}\n.inner-spinner div {\n\tposition: absolute;\n\tanimation: inner-spinner 1s linear infinite;\n\twidth: 160px;\n\theight: 160px;\n\ttop: 20px;\n\tleft: 20px;\n\tborder-radius: 50%;\n\tbox-shadow: 0 4px 0 0 #df1c29;\n\ttransform-origin: 80px 82px;\n}\n#spinner {\n\tmargin: auto;\n\twidth: 200px;\n\theight: 200px;\n\tdisplay: inline-block;\n\toverflow: hidden;\n\tbackground: rgb(13, 19, 43);\n}\n.inner-spinner {\n\twidth: 100%;\n\theight: 100%;\n\tposition: relative;\n\ttransform: translateZ(0) scale(1);\n\tbackface-visibility: hidden;\n\ttransform-origin: 0 0; /* see note above */\n}\n.inner-spinner div {\n\tbox-sizing: content-box;\n}\n\n#captcha-form {\n\tmargin: auto;\n}\n\n#harvesterType,\n#harvesterName,\n#count {\n    color: #b7c7fa;\n    display: inline;\n    vertical-align: top;\n    font-size: 18px;\n    padding-left: 5px;\n}\nbody {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: 'Roboto', sans-serif;\n\tfont: Regular SF Pro Text;\n    color: #b7c7fa;\n    background: transparent !important;\n}\n.center {\n\tdisplay: flex;\n\ttext-align: center;\n\tjustify-content: center;\n\talign-items: center;\n    min-height: 90vh;\n    position: relative;\n}\n.ring {\n    position: relative;\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    animation: ring 2s linear infinite;\n    text-align: center;\n    \n}\n@keyframes ring {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t\tbox-shadow: 1px 5px 2px #95aaed;\n\t}\n\t50% {\n\t\ttransform: rotate(180deg);\n\t\tbox-shadow: 1px 5px 2px #ef109e;\n\t}\n\t100% {\n\t\ttransform: rotate(0360deg);\n\t\tbox-shadow: 1px 5px 2px #b7c7fa;\n\t}\n}\n.ring::before {\n\tposition: absolute;\n\tleft: 0;\n\tcontent: \"\";\n\ttop: 0;\n\theight: 100%;\n\twidth: 100%;\n\tborder-radius: 50%;\n\tbox-shadow: 0 0 5px rgba(255, 255, 255, 0.3);\n}\n#waiting {\n\tcolor: #b7c7fa;\n    font-size: 20px;\n\ttext-transform: uppercase;\n\tletter-spacing: 1px;\n\tline-height: 200px;\n\tanimation: text 3s ease-in-out infinite;\n}\n@keyframes text {\n\t50% {\n\t\tcolor: #03070e;\n\t}\n}\n.footerSvg {\n    width: 100%;\n    height: 54px;\n}\n\n.footer {\n    position: absolute;\n    width: 100%;\n    bottom: 0px;\n}\n\n.container {\n    background: #050a1d;\n    height: 100%;\n    width: 100%;\n}\n\n#title-bar-left {\n    position: absolute;\n    top: 3px;\n    left: 6px;\n    font-size: 13px;\n    padding: 3px 10px;\n    border-radius: 12px;\n    background: #1D2230;\n}\n.top-bar-icon {\n    fill: #808080;\n}\n\n#footer-left-text {\n    font-size: 13px;\n    width: 113px;\n    position: absolute;\n    left: 11px;\n    top: 10px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n#footer-right-text {\n    position: absolute;\n    right: 11px;\n    top: 10px;\n    font-size: 13px;\n}\n\n#footer-center-icon {\n    position: absolute;\n    left: 146px;\n    top: -10px;\n}\n\n    </style>\n    <script src=\"https://www.google.com/recaptcha/api.js\"></script>\n</head>\n\n\n<body>\n    <div class=\"container\">\n\n        <div class=\"center\">\n                <div class=\"ring\"></div>\n        </div>\n    </div>\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>\n\n</body>\n</html>\n";
  const _0x28c13c = "<html>\n<head>\n\t<title>MEKaio Captcha Harvester</title>\n    <style type=\"text/css\">\n    *,\n*::after,\n*::before {\n    -webkit-user-select: none;\n    user-select: none;\n}\nbody {\n\tmargin: auto;\n\tfont-weight: 500;\n    overflow: hidden;\n}\n\n.captchaFooter {\n\tbackground-color: black;\n\tbottom: 0;\n\tcolor: white;\n\theight: 10vh;\n\twidth: 100%;\n\ttext-align: center;\n\tpadding: 10px 10px 80px;\n}\n\n.center {\n\theight: 84vh;\n}\n\n.btn {\n\theight: 40px !important;\n\twidth: 90px !important;\n\tmargin: 5px !important;\n}\n\n#clearSession {\n\twidth: 120px !important;\n}\n\n#title-bar {\n\theight: 5% !important;\n\tmin-height: 30px !important;\n    background-color: #050a1d;\n    border-radius: 20px;\n}\n\n#title-text {\n    /* height: 100% !important; */\n    /* min-height: 30px !important; */\n    text-align: center;\n    /* color: white; */\n    font-size: 14px;\n    padding-top: 2px;\n    line-height: 2;\n}\n\n#bottom {\n\tbackground-color: rgb(15, 23, 53);\n\theight: 40%;\n\tcolor: white;\n}\n\n#title-bar-btns {\n    -webkit-app-region: no-drag;\n    position: absolute;\n    top: 0px;\n    right: 9px;\n    height: 5% !important;\n    min-height: 30px !important;\n}\n\n#title-bar-btns button {\n    width: 30px;\n    height: 24px;\n    margin: 6px 3px;\n    background-color: #1c2235;\n    border-radius: 6px;\n    border: none;\n    color: grey;\n    font-size: 16px;\n    float: left;\n}\n\n#title-bar-btns path:hover {\n    pointer-events: bounding-box;\n}\n\n#title-bar-btns path:hover {\n    cursor: pointer;\n}\n\n#title-bar-btns svg:hover {\n    cursor: pointer;\n}\n\n#title-bar-btns button:hover {\n    cursor: pointer;\n    background: #293350;\n}\n\n#title-bar-btns button:focus {\n    outline: none;\n}\n\n.col-12 {\n\ttext-align: center !important;\n\tmargin: auto;\n\tfont-weight: bold;\n\tfont-size: 1.2em;\n}\n\n@keyframes inner-spinner {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\t50% {\n\t\ttransform: rotate(180deg);\n\t}\n\t100% {\n\t\ttransform: rotate(360deg);\n\t}\n}\n.inner-spinner div {\n\tposition: absolute;\n\tanimation: inner-spinner 1s linear infinite;\n\twidth: 160px;\n\theight: 160px;\n\ttop: 20px;\n\tleft: 20px;\n\tborder-radius: 50%;\n\tbox-shadow: 0 4px 0 0 #df1c29;\n\ttransform-origin: 80px 82px;\n}\n#spinner {\n\tmargin: auto;\n\twidth: 200px;\n\theight: 200px;\n\tdisplay: inline-block;\n\toverflow: hidden;\n\tbackground: rgb(13, 19, 43);\n}\n.inner-spinner {\n\twidth: 100%;\n\theight: 100%;\n\tposition: relative;\n\ttransform: translateZ(0) scale(1);\n\tbackface-visibility: hidden;\n\ttransform-origin: 0 0; /* see note above */\n}\n.inner-spinner div {\n\tbox-sizing: content-box;\n}\n\n#captcha-form {\n\tmargin: auto;\n}\n\n#harvesterType,\n#harvesterName,\n#count {\n    color: #b7c7fa;\n    display: inline;\n    vertical-align: top;\n    font-size: 18px;\n    padding-left: 5px;\n}\nbody {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: 'Roboto', sans-serif;\n\tfont: Regular SF Pro Text;\n    color: #b7c7fa;\n    background: transparent !important;\n}\n.center {\n\tdisplay: flex;\n\ttext-align: center;\n\tjustify-content: center;\n\talign-items: center;\n    min-height: 90vh;\n    position: relative;\n}\n.ring {\n    position: absolute;\n    top: 160px;\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    animation: ring 2s linear infinite;\n    left: 86px;\n}\n@keyframes ring {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t\tbox-shadow: 1px 5px 2px #95aaed;\n\t}\n\t50% {\n\t\ttransform: rotate(180deg);\n\t\tbox-shadow: 1px 5px 2px #ef109e;\n\t}\n\t100% {\n\t\ttransform: rotate(0360deg);\n\t\tbox-shadow: 1px 5px 2px #b7c7fa;\n\t}\n}\n.ring::before {\n\tposition: absolute;\n\tleft: 0;\n\tcontent: \"\";\n\ttop: 0;\n\theight: 100%;\n\twidth: 100%;\n\tborder-radius: 50%;\n\tbox-shadow: 0 0 5px rgba(255, 255, 255, 0.3);\n}\n#waiting {\n\tcolor: #b7c7fa;\n\tfont-size: 20px;\n\ttext-transform: uppercase;\n\tletter-spacing: 1px;\n\tline-height: 200px;\n\tanimation: text 3s ease-in-out infinite;\n}\n@keyframes text {\n\t50% {\n\t\tcolor: #03070e;\n\t}\n}\n.footerSvg {\n    width: 100%;\n    height: 54px;\n}\n\n.footer {\n    position: absolute;\n    width: 100%;\n    bottom: 0px;\n}\n\n.container {\n    background: #050a1d;\n    border-radius: 20px;\n    height: 100%;\n    width: 100%;\n}\n\n#title-bar-left {\n    position: absolute;\n    top: 3px;\n    left: 6px;\n    font-size: 13px;\n    padding: 3px 10px;\n    border-radius: 12px;\n    background: #1D2230;\n}\n.top-bar-icon {\n    fill: #808080;\n}\n\n#footer-left-text {\n    font-size: 13px;\n    width: 113px;\n    position: absolute;\n    left: 11px;\n    top: 10px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n#footer-right-text {\n    position: absolute;\n    right: 11px;\n    top: 10px;\n    font-size: 13px;\n}\n\n#footer-center-icon {\n    position: absolute;\n    left: 146px;\n    top: -10px;\n}\n\n    </style>\n    <script src=\"https://www.google.com/recaptcha/api.js\"></script>\n</head>\n\n\n<body>\n    <div class=\"container\">\n        <div style=\"-webkit-app-region: drag\" id=\"title-bar\">\n            <div id=\"title-bar-left\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19.26\" height=\"19.26\" viewBox=\"0 0 19.26 19.26\"><g class=\"a\" transform=\"translate(0 -0.003)\"><ellipse fnB cx=\"7.667\" cy=\"8.929\" rx=\"7.667\" ry=\"8.929\" transform=\"translate(1.51 1.405)\"/><path fill=\"#677188\" d=\"M16.442,2.82a9.63,9.63,0,1,0,0,13.625A9.645,9.645,0,0,0,16.442,2.82ZM15.015,6.989l-5.62,5.62a.8.8,0,0,1-1.135,0L5.048,9.4A.8.8,0,0,1,6.183,8.262l2.644,2.644,5.053-5.053a.8.8,0,1,1,1.135,1.135Z\" transform=\"translate(0 0)\"/></g></svg>\n                    <div id=\"count\"></div>\n            </div>\n            <div id=\"title-text\">Harvester</div>\n            <div id=\"title-bar-btns\">\n                    <button id=\"min-btn\" type=\"button\" class=\"topBarBtn button\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12.289\" height=\"2.208\" viewBox=\"0 0 12.289 2.208\"><defs></defs><path fill=\"#a9a9a9\" d=\"M7.024,19H17.265a1.107,1.107,0,0,1,0,2.208H7.024a1.107,1.107,0,0,1,0-2.208Z\" transform=\"translate(-6 -19)\"/></svg>\n                    </button>\n                    <button id=\"close-btn\" type=\"button\" class=\"topBarBtn button\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17.379\" height=\"17.379\" viewBox=\"0 0 17.379 17.379\"><defs></defs><g transform=\"translate(8.689 0) rotate(45)\"><g transform=\"translate(0 0)\"><g transform=\"translate(0 0)\"><path fill=\"#a9a9a9\" d=\"M11.162,5.017H7.272V1.127a1.128,1.128,0,0,0-2.255,0v3.89H1.128a1.127,1.127,0,1,0,0,2.254H5.017v3.89a1.128,1.128,0,0,0,2.255,0V7.271h3.89a1.127,1.127,0,1,0,0-2.254Z\"/></g></g></g></svg>\n                    </button>\n            </div>\n            <div class=\"footer\">\n                <div id=\"footer-left-text\"></div>\n                <div id=\"footer-center-icon\"></div>\n                <div id=\"footer-right-text\"></div>\n                <div class=\"footer-harvester-type\">\n\n                </div>\n                <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" class=\"footerSvg\" viewBox=\"0 0 312 52\"><defs><style>.a{fill:url(#a);}.b{clip-path:url(#b);}.c{fill:#1a2235;}.d{fill:#203c65;}.e{fill:url(#c);}</style><linearGradient id=\"a\" x1=\"0.5\" x2=\"0.5\" y2=\"1\" gradientUnits=\"objectBoundingBox\"><stop offset=\"0\" stop-color=\"#465465\"/><stop offset=\"1\" stop-color=\"#020a18\"/></linearGradient><clipPath id=\"b\"><path class=\"a\" d=\"M0,0H312a0,0,0,0,1,0,0V37a15,15,0,0,1-15,15H15A15,15,0,0,1,0,37V0A0,0,0,0,1,0,0Z\" transform=\"translate(0.081 466)\"/></clipPath><radialGradient id=\"c\" cx=\"0.506\" cy=\"-5.319\" r=\"9.299\" gradientTransform=\"translate(0.494) scale(0.023 1)\" gradientUnits=\"objectBoundingBox\"><stop offset=\"0\" stop-color=\"#ff00f7\" stop-opacity=\"0.502\"/><stop offset=\"1\" stop-color=\"#f93c3c\" stop-opacity=\"0\"/></radialGradient></defs><g class=\"b\" transform=\"translate(-0.081 -466)\"><rect class=\"c\" width=\"312\" height=\"52\" transform=\"translate(0.081 466)\"/><g transform=\"translate(-543.919 499.308)\"><path class=\"d\" d=\"M0,1195.588V1165.3H665.814l34.608,17.933,32.671-17.933H1400v30.283Z\" transform=\"translate(0 -1165.304)\"/><path class=\"e\" d=\"M0,1195.588V1165.3H665.814l34.608,17.933,32.671-17.933H1400v30.283Z\" transform=\"translate(0 -1165.304)\"/></g><g transform=\"translate(-493.919 499.308)\"><path class=\"d\" d=\"M0,1195.588V1165.3H618.372l32.142,17.933,30.343-17.933h619.388v30.283Z\" transform=\"translate(0 -1165.304)\"/><path class=\"e\" d=\"M0,1195.588V1165.3H618.372l32.142,17.933,30.343-17.933h619.388v30.283Z\" transform=\"translate(0 -1165.304)\"/></g></g></svg>\n            </div>\n        </div>\n\n        <div class=\"center\">\n            <div id=\"top\"></div>\n\n            <script>\n                (function () {\n                    const remote = require('electron').remote;\n                    function init() {\n                        document.getElementById(\"min-btn\").addEventListener(\"click\", function (e) {\n                            const window = remote.getCurrentWindow();\n                            window.minimize();\n                        });\n\n                        document.getElementById(\"close-btn\").addEventListener(\"click\", function (e) {\n                            const window = remote.getCurrentWindow();\n                            window.close();\n                        });\n                    }\n\n                    document.onreadystatechange = function () {\n                        if (document.readyState == \"complete\") {\n                            init();\n                        }\n                    };\n                })();\n                if (typeof module === 'object') {\n                    window.module = module; module = undefined;\n                }\n            </script>\n\n            <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>\n            <script>if (window.module) module = window.module;</script>\n\n            <script>\n                console.log(window.location.href)\n                const {ipcRenderer} = require(\"electron\");\n                const spinnerHTML = ' <div class=\"ring\"></div><span id=\"waiting\">Waiting</span>'\n\n                const waitForCaptchaLoad = async () => {\n                    if (window.grecaptcha != null && window.grecaptcha.render != null) {\n                        return;\n                    } else {\n                        await sleep(50);\n                        return await waitForCaptchaLoad();\n                    }\n                }\n\n                const createElementFromHTML = (htmlString) => {\n                    var div = document.createElement('div');\n                    div.innerHTML = htmlString.trim();\n                    return div.firstChild; \n                }\n\n                const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));\n\n                window.onCaptchaSuccess = (token) => {\n                    //console.log(token)\n                    grecaptcha.reset();\n                    $('head script[src*=\"www.recaptcha.net\"]').remove();\n                    $('head script[src*=\"www.gstatic.com\"]').remove();\n                    $('.grecaptcha-badge').remove();\n                    count ++;\n                    $('#count').html(count);\n                    $('#top').html(spinnerHTML);\n                    ipcRenderer.send('sendCaptcha', {\n                        token: token,\n                        timestamp: new Date().getTime(),\n                        id: window.harvesterId,\n                        siteOrigin: window.siteOrigin,\n                        taskId: window.taskId\n                    });            \n                }\n\n                var recaptchaCallback = function() {\n                    let renderOptions = {\n                        sitekey : window.siteKey,\n                        callback: 'onCaptchaSuccess'\n                    }\n\n                    grecaptcha.render('g-recaptcha', renderOptions);\n                };\n\n                window.onloadCallback =  async() => {\n                    $('#top').html('<div><input id=\"reloadCaptcha\" type=\"submit\" value=\"Reload\"><input id=\"g-recaptcha\" type=\"submit\" value=\"Submit\"><script>$(\"#reloadCaptcha\").on(\"click\", () => {window.onloadCallback();})');\n                    recaptchaCallback();\n                    await waitForCaptchaLoad();\n                    grecaptcha.execute();\n                    return;\n                };\n\n                ipcRenderer.on('cancelCaptcha', async (event) => {\n                    grecaptcha.reset();\n                    $('#count').html(count);\n                    $('#top').html(spinnerHTML);\n                });\n                    \n                ipcRenderer.on('requestCaptcha', async (event, siteOrigin, siteKey, extraS, taskId) => {\n                    window.siteOrigin = siteOrigin;\n                    window.siteKey = siteKey;\n                    window.extraS = extraS;\n                    window.taskId = taskId;\n\n                    window.onloadCallback();\n                });\n\n                const urlParams = new URLSearchParams('?' + window.location.href.split('?')[1]);\n                const harvesterName = urlParams.get('name');\n                let count = urlParams.get('count');\n                window.harvesterId = urlParams.get('id');\n                const harvesterType = urlParams.get('type');\n                $('#footer-center-icon').html('<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30px\" height=\"60px\" viewBox=\"0 0 133.453 127.713\"><defs><style>.cc{fill:#b7c7fa;}.dd{fill:#b7c7fa;}</style></defs><g transform=\"translate(-158 -370.459)\"><path class=\"cc\" d=\"M103.429,124.291c-10.6-7.727-21.083-15.343-31.68-23.07-1.434-1.1-2.98-2.208-4.415-3.312a.621.621,0,0,0-.994,0L28.921,125.174a37.389,37.389,0,0,1-3.422,2.318c5.187-16.227,10.376-32.343,15.674-48.569Q20.476,63.857,0,48.9c.111,0,.111,0,.111-.11h50c.662,0,.882-.111,1.1-.773C56.3,32.232,61.373,16.558,66.451.883A3.746,3.746,0,0,0,66.782,0c.442,1.435.883,2.76,1.325,4.084,4.636,14.571,9.383,29.252,14.129,43.823.22.662.441.773,1.1.773H132.57v.22h.882a3.038,3.038,0,0,0-.551.442L92.832,78.482A.889.889,0,0,0,92.5,79.7c5.188,15.784,10.266,31.459,15.343,47.244a3.374,3.374,0,0,1,.22.773C106.409,126.5,104.975,125.395,103.429,124.291Z\" transform=\"translate(158 370.459)\"/><path d=\"M10514.872,2592.407V2585.7l-13.787-1-8.493,2.255-5.223,5.456s.152,9.978,0,10.515,3.272,8.494,3.272,8.494l1.95,4.124-1.95,4.207-8.18,4.288h-6.228l-13.621,7.781-10.213,10.129,7.092,7.863,8.647-2.886,6.846-4.977,2.266,26.953.772,15.656h45.646l2.723-43.929,7.408,6.3,10.279,3.5,4.277-9.8-6.614-7.173-10.6-6.928-6.542-2.489-11.6-2.967-1.252-1.869-1.086-6.309,4.906-11.064,1.238-1-1.938-6.625Z\" transform=\"translate(-10276.199 -2197.224)\"/><g transform=\"translate(166.999 386.628)\"><path class=\"dd\" d=\"M459.888,1040.865c2.063,3.25,3.937,3.426,6.755.748l2.72,3.727-2.69,1.6,1.295,2.2-3.07,1.783c.787.646,2.224,1.386,2.137,1.824-.957,4.822-1.184,5.048-4.154,4.682s-5.918-.959-8.892-1.3a8.917,8.917,0,0,0-2.631.5,7.04,7.04,0,0,0,1.006,2.267c2.331,2.32,2.285,4.918,1.2,8.34-2.279-1.772-4.485-3.115-6.156-4.946a5.262,5.262,0,0,1-.9-4.1c.83-3.8,1.267-7.413-1.119-10.86a4.03,4.03,0,0,1-.763-2.469c.109-1.024.479-2.5,1.191-2.849a3.582,3.582,0,0,1,3.026.725c2.812,2.274,2.757,2.358,4.1-.988a9.756,9.756,0,0,1,8.46-6.3c2.851-.332,3.371-2.121,3.453-4.381.091-2.5-1.575-3.14-3.635-3.117-4.3.048-8.692-.349-12.882.379-8.538,1.483-12.31,8.935-9,16.989,1.1,2.685,2.608,5.207,3.679,7.9,2.257,5.678.407,9.322-5.492,11.188-.751.237-1.506.458-2.463.749.987,20.349,1.972,40.654,2.965,61.114h-4.444c-1.042-20.006-2.081-39.95-3.131-60.106l-4.642.974c.833,13.331,1.651,26.417,2.469,39.5l-.942.082c-.778-7.159-1.556-14.318-2.372-21.828l-6.636,4.1-1.865-2.642c1.568-1.063,3.053-2.093,4.561-3.087,3.773-2.485,3.777-2.479,2.814-7.565l-9.97,6.283-2.152-2.965c3.433-2.275,6.726-4.557,10.127-6.666,1.523-.944,2.144-1.919,1.084-3.836-6.474,3.625-12.622,7.52-17.187,13.767l5.423,8.88a47.771,47.771,0,0,1-5.211,2.732c-3.441,1.31-3.617,1.883-1.041,4.312a28.73,28.73,0,0,1,2.553,3.01c1.542,1.922,2.994,3.921,4.6,5.786,3.163,3.668,6.8,5.777,11.851,3.657,1.295-.543,2.874-.411,5.35-.714-1.028,3.12-1.836,5.522-2.609,7.936-.508,1.588-1.637,1.8-3.111,1.655-6.913-.7-12.785-3.8-18.21-7.879a39.436,39.436,0,0,1-10.417-11.837c-1.553-2.666-1.7-5.088.335-7.534,1.633-1.965,3.181-4,4.807-5.97q4.281-5.185,8.627-10.318a14.064,14.064,0,0,1,2.163-1.929c7.284-5.62,15.126-10.11,24.468-11.081,3.189-.332,4.527-2.786,6.456-4.583.359-.335.179-1.546-.095-2.212-1.137-2.767-2.369-5.5-3.634-8.207-1.756-3.765-2.849-7.632-1.63-11.768,1.824-6.192,6.192-9.621,12.442-10.255a89.23,89.23,0,0,1,13.179-.088c3.848.181,5.5,2.9,4.713,6.74-.3,1.45.032,3.019-.172,4.5a2.8,2.8,0,0,1-1.213,1.96A54.541,54.541,0,0,1,459.888,1040.865Z\" transform=\"translate(-393.743 -1025.68)\"/><path class=\"dd\" d=\"M540.993,1098.943c-1.478,2.43-.963,3.422.627,4.4,3.428,2.109,6.725,4.43,10.224,6.763l-2.052,3.006-9.907-6.243c-1.494,4.506-1.393,4.8,2.224,7.182,1.608,1.058,3.2,2.133,4.948,3.294l-1.709,2.828-6.77-4.274c-.8,7.557-1.561,14.713-2.321,21.87l-.922-.087c.815-13.1,1.63-26.2,2.457-39.481l-4.707-.961c-.95,20.076-1.89,39.946-2.84,60.028h-4.682q1.46-30.48,2.919-60.933c-2.316-1.184-5.71-.975-5.705-4.64,4.166,3.458,9.566,2.8,14.193,4.5,7.172,2.626,13.635,6.367,18.7,12.228,3.8,4.395,7.732,8.681,11.358,13.215,3.919,4.9,3.9,6.008.4,11.236a40.225,40.225,0,0,1-24.463,17.258c-4.846,1.2-7.716-1.163-7.917-6.151-.032-.777,0-1.557,0-2.92a38.323,38.323,0,0,1,5.761.983,7.787,7.787,0,0,0,8.879-2.221c2.083-2.262,4.045-4.636,6.052-6.967,1.143-1.328,2.191-2.749,3.424-3.986,1.854-1.861,1.672-2.632-.852-3.677-1.959-.812-3.837-1.818-5.945-2.831l5.932-9.745Z\" transform=\"translate(-454.467 -1056.745)\"/><path class=\"dd\" d=\"M513.339,1169.233h-3.924v-52.078l5.361-.241C514.311,1133.832,513.83,1151.375,513.339,1169.233Z\" transform=\"translate(-448.178 -1068.615)\"/><path class=\"dd\" d=\"M513.339,1169.233h-3.924v-52.078l5.361-.241C514.311,1133.832,513.83,1151.375,513.339,1169.233Z\" transform=\"translate(-458.766 -1068.615)\"/></g></g></svg>')\n                $('#footer-left-text').html(harvesterName);\n                $('#footer-right-text').html(harvesterType);\n\n                $('#count').html(count);\n                $('#top').html(spinnerHTML);\n            \n            </script>\n        </div>\n    </div>\n</body>\n</html>";
  const _0x343ecf = "<html>\n<head>\n\t<title>MEKaio Captcha Harvester</title>\n    <style type=\"text/css\">\n    *,\n*::after,\n*::before {\n    -webkit-user-select: none;\n    user-select: none;\n}\nbody {\n\tmargin: auto;\n\tfont-weight: 500;\n    overflow: hidden;\n}\n\n.captchaFooter {\n\tbackground-color: black;\n\tbottom: 0;\n\tcolor: white;\n\theight: 10vh;\n\twidth: 100%;\n\ttext-align: center;\n\tpadding: 10px 10px 80px;\n}\n\n.center {\n\theight: 84vh;\n}\n\n.btn {\n\theight: 40px !important;\n\twidth: 90px !important;\n\tmargin: 5px !important;\n}\n\n#clearSession {\n\twidth: 120px !important;\n}\n\n#title-bar {\n\theight: 5% !important;\n\tmin-height: 30px !important;\n    background-color: #050a1d;\n    border-radius: 20px;\n}\n\n#title-text {\n    /* height: 100% !important; */\n    /* min-height: 30px !important; */\n    text-align: center;\n    /* color: white; */\n    font-size: 14px;\n    padding-top: 2px;\n    line-height: 2;\n}\n\n#bottom {\n\tbackground-color: rgb(15, 23, 53);\n\theight: 40%;\n\tcolor: white;\n}\n\n#title-bar-btns {\n    -webkit-app-region: no-drag;\n    position: absolute;\n    top: 0px;\n    right: 9px;\n    height: 5% !important;\n    min-height: 30px !important;\n}\n\n#title-bar-btns button {\n    width: 30px;\n    height: 24px;\n    margin: 6px 3px;\n    background-color: #1c2235;\n    border-radius: 6px;\n    border: none;\n    color: grey;\n    font-size: 16px;\n    float: left;\n}\n\n#title-bar-btns path:hover {\n    pointer-events: bounding-box;\n}\n\n#title-bar-btns path:hover {\n    cursor: pointer;\n}\n\n#title-bar-btns svg:hover {\n    cursor: pointer;\n}\n\n#title-bar-btns button:hover {\n    cursor: pointer;\n    background: #293350;\n}\n\n#title-bar-btns button:focus {\n    outline: none;\n}\n\n.col-12 {\n\ttext-align: center !important;\n\tmargin: auto;\n\tfont-weight: bold;\n\tfont-size: 1.2em;\n}\n\n@keyframes inner-spinner {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\t50% {\n\t\ttransform: rotate(180deg);\n\t}\n\t100% {\n\t\ttransform: rotate(360deg);\n\t}\n}\n.inner-spinner div {\n\tposition: absolute;\n\tanimation: inner-spinner 1s linear infinite;\n\twidth: 160px;\n\theight: 160px;\n\ttop: 20px;\n\tleft: 20px;\n\tborder-radius: 50%;\n\tbox-shadow: 0 4px 0 0 #df1c29;\n\ttransform-origin: 80px 82px;\n}\n#spinner {\n\tmargin: auto;\n\twidth: 200px;\n\theight: 200px;\n\tdisplay: inline-block;\n\toverflow: hidden;\n\tbackground: rgb(13, 19, 43);\n}\n.inner-spinner {\n\twidth: 100%;\n\theight: 100%;\n\tposition: relative;\n\ttransform: translateZ(0) scale(1);\n\tbackface-visibility: hidden;\n\ttransform-origin: 0 0; /* see note above */\n}\n.inner-spinner div {\n\tbox-sizing: content-box;\n}\n\n#captcha-form {\n\tmargin: auto;\n}\n\n#harvesterType,\n#harvesterName,\n#count {\n    color: #b7c7fa;\n    display: inline;\n    vertical-align: top;\n    font-size: 18px;\n    padding-left: 5px;\n}\nbody {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: 'Roboto', sans-serif;\n\tfont: Regular SF Pro Text;\n    color: #b7c7fa;\n    background: transparent !important;\n}\n.center {\n\tdisplay: flex;\n\ttext-align: center;\n\tjustify-content: center;\n\talign-items: center;\n    min-height: 90vh;\n    position: relative;\n}\n.ring {\n    position: absolute;\n    top: 160px;\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    animation: ring 2s linear infinite;\n    left: 86px;\n}\n@keyframes ring {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t\tbox-shadow: 1px 5px 2px #95aaed;\n\t}\n\t50% {\n\t\ttransform: rotate(180deg);\n\t\tbox-shadow: 1px 5px 2px #ef109e;\n\t}\n\t100% {\n\t\ttransform: rotate(0360deg);\n\t\tbox-shadow: 1px 5px 2px #b7c7fa;\n\t}\n}\n.ring::before {\n\tposition: absolute;\n\tleft: 0;\n\tcontent: \"\";\n\ttop: 0;\n\theight: 100%;\n\twidth: 100%;\n\tborder-radius: 50%;\n\tbox-shadow: 0 0 5px rgba(255, 255, 255, 0.3);\n}\n#waiting {\n\tcolor: #b7c7fa;\n\tfont-size: 20px;\n\ttext-transform: uppercase;\n\tletter-spacing: 1px;\n\tline-height: 200px;\n\tanimation: text 3s ease-in-out infinite;\n}\n@keyframes text {\n\t50% {\n\t\tcolor: #03070e;\n\t}\n}\n.footerSvg {\n    width: 100%;\n    height: 54px;\n}\n\n.footer {\n    position: absolute;\n    width: 100%;\n    bottom: 0px;\n}\n\n.container {\n    background: #050a1d;\n    border-radius: 20px;\n    height: 100%;\n    width: 100%;\n}\n\n#title-bar-left {\n    position: absolute;\n    top: 3px;\n    left: 6px;\n    font-size: 13px;\n    padding: 3px 10px;\n    border-radius: 12px;\n    background: #1D2230;\n}\n.top-bar-icon {\n    fill: #808080;\n}\n\n#footer-left-text {\n    font-size: 13px;\n    width: 113px;\n    position: absolute;\n    left: 11px;\n    top: 10px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n#footer-right-text {\n    position: absolute;\n    right: 11px;\n    top: 10px;\n    font-size: 13px;\n}\n\n#footer-center-icon {\n    position: absolute;\n    left: 146px;\n    top: -10px;\n}\n\n    </style>\n</head>\n\n\n<body>\n    <div class=\"container\">\n        <div style=\"-webkit-app-region: drag\" id=\"title-bar\">\n            <div id=\"title-bar-left\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19.26\" height=\"19.26\" viewBox=\"0 0 19.26 19.26\"><g class=\"a\" transform=\"translate(0 -0.003)\"><ellipse class=\"b\" cx=\"7.667\" cy=\"8.929\" rx=\"7.667\" ry=\"8.929\" transform=\"translate(1.51 1.405)\"/><path fill=\"#677188\" d=\"M16.442,2.82a9.63,9.63,0,1,0,0,13.625A9.645,9.645,0,0,0,16.442,2.82ZM15.015,6.989l-5.62,5.62a.8.8,0,0,1-1.135,0L5.048,9.4A.8.8,0,0,1,6.183,8.262l2.644,2.644,5.053-5.053a.8.8,0,1,1,1.135,1.135Z\" transform=\"translate(0 0)\"/></g></svg>\n                    <div id=\"count\"></div>\n            </div>\n            <div id=\"title-text\">Harvester</div>\n            <div id=\"title-bar-btns\">\n                    <button id=\"min-btn\" type=\"button\" class=\"topBarBtn button\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12.289\" height=\"2.208\" viewBox=\"0 0 12.289 2.208\"><defs></defs><path fill=\"#a9a9a9\" d=\"M7.024,19H17.265a1.107,1.107,0,0,1,0,2.208H7.024a1.107,1.107,0,0,1,0-2.208Z\" transform=\"translate(-6 -19)\"/></svg>\n                    </button>\n                    <button id=\"close-btn\" type=\"button\" class=\"topBarBtn button\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17.379\" height=\"17.379\" viewBox=\"0 0 17.379 17.379\"><defs></defs><g transform=\"translate(8.689 0) rotate(45)\"><g transform=\"translate(0 0)\"><g transform=\"translate(0 0)\"><path fill=\"#a9a9a9\" d=\"M11.162,5.017H7.272V1.127a1.128,1.128,0,0,0-2.255,0v3.89H1.128a1.127,1.127,0,1,0,0,2.254H5.017v3.89a1.128,1.128,0,0,0,2.255,0V7.271h3.89a1.127,1.127,0,1,0,0-2.254Z\"/></g></g></g></svg>\n                    </button>\n            </div>\n            <div class=\"footer\">\n                <div id=\"footer-left-text\"></div>\n                <div id=\"footer-center-icon\"></div>\n                <div id=\"footer-right-text\"></div>\n                <div class=\"footer-harvester-type\">\n\n                </div>\n                <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" class=\"footerSvg\" viewBox=\"0 0 312 52\"><defs><style>.a{fill:url(#a);}.b{clip-path:url(#b);}.c{fill:#1a2235;}.d{fill:#203c65;}.e{fill:url(#c);}</style><linearGradient id=\"a\" x1=\"0.5\" x2=\"0.5\" y2=\"1\" gradientUnits=\"objectBoundingBox\"><stop offset=\"0\" stop-color=\"#465465\"/><stop offset=\"1\" stop-color=\"#020a18\"/></linearGradient><clipPath id=\"b\"><path class=\"a\" d=\"M0,0H312a0,0,0,0,1,0,0V37a15,15,0,0,1-15,15H15A15,15,0,0,1,0,37V0A0,0,0,0,1,0,0Z\" transform=\"translate(0.081 466)\"/></clipPath><radialGradient id=\"c\" cx=\"0.506\" cy=\"-5.319\" r=\"9.299\" gradientTransform=\"translate(0.494) scale(0.023 1)\" gradientUnits=\"objectBoundingBox\"><stop offset=\"0\" stop-color=\"#ff00f7\" stop-opacity=\"0.502\"/><stop offset=\"1\" stop-color=\"#f93c3c\" stop-opacity=\"0\"/></radialGradient></defs><g class=\"b\" transform=\"translate(-0.081 -466)\"><rect class=\"c\" width=\"312\" height=\"52\" transform=\"translate(0.081 466)\"/><g transform=\"translate(-543.919 499.308)\"><path class=\"d\" d=\"M0,1195.588V1165.3H665.814l34.608,17.933,32.671-17.933H1400v30.283Z\" transform=\"translate(0 -1165.304)\"/><path class=\"e\" d=\"M0,1195.588V1165.3H665.814l34.608,17.933,32.671-17.933H1400v30.283Z\" transform=\"translate(0 -1165.304)\"/></g><g transform=\"translate(-493.919 499.308)\"><path class=\"d\" d=\"M0,1195.588V1165.3H618.372l32.142,17.933,30.343-17.933h619.388v30.283Z\" transform=\"translate(0 -1165.304)\"/><path class=\"e\" d=\"M0,1195.588V1165.3H618.372l32.142,17.933,30.343-17.933h619.388v30.283Z\" transform=\"translate(0 -1165.304)\"/></g></g></svg>\n            </div>\n        </div>\n\n        <div class=\"center\">\n            <div id=\"top\"></div>\n\n            <script>\n                (function () {\n                    const remote = require('electron').remote;\n                    function init() {\n                        document.getElementById(\"min-btn\").addEventListener(\"click\", function (e) {\n                            const window = remote.getCurrentWindow();\n                            window.minimize();\n                        });\n\n                        document.getElementById(\"close-btn\").addEventListener(\"click\", function (e) {\n                            const window = remote.getCurrentWindow();\n                            window.close();\n                        });\n                    }\n\n                    document.onreadystatechange = function () {\n                        if (document.readyState == \"complete\") {\n                            init();\n                        }\n                    };\n                })();\n                if (typeof module === 'object') {\n                    window.module = module; module = undefined;\n                }\n            </script>\n\n            <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>\n            <script>if (window.module) module = window.module;</script>\n\n            <script>\n                console.log(window.location.href)\n                const {ipcRenderer} = require(\"electron\");\n                const spinnerHTML = ' <div class=\"ring\"></div><span id=\"waiting\">Waiting</span>'\n\n                const waitForCaptchaLoad = async () => {\n                    if (window.grecaptcha != null && window.grecaptcha.render != null) {\n                        return;\n                    } else {\n                        await sleep(50);\n                        return await waitForCaptchaLoad();\n                    }\n                }\n\n                // const pushUrl = (href) => {\n                //     window.locationSearch = href.split('?')[1];\n                //     history.pushState({}, '', href.split('?')[0]);\n                //     window.dispatchEvent(new Event('popstate'));\n                // };\n\n                const createElementFromHTML = (htmlString) => {\n                    var div = document.createElement('div');\n                    div.innerHTML = htmlString.trim();\n                    return div.firstChild; \n                }\n\n                const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));\n\n                const solveCaptcha = async () => {\n                    if ($('[role=\"presentation\"]').length != 0 && $('[role=\"presentation\"]').contents().find(\n                '.recaptcha-checkbox-checkmark').length != 0) {\n                        await clickCaptcha();\n                    } else {\n                        await sleep(20);\n                        return solveCaptcha();\n                    }\n                }\n\n                const clickCaptcha = async () => {\n                    try {\n                        let iframe = document.querySelector('iframe').contentDocument || document.querySelector('iframe').contentWindow.document;\n                        let dimensions = iframe.querySelector('.rc-anchor.rc-anchor-normal.rc-anchor-light').getBoundingClientRect();\n                        let xInFrame = Math.floor(Math.random() * dimensions.width);\n                        let yInFrame = Math.floor(Math.random() * dimensions.height);\n                        let label = iframe.querySelector('.rc-anchor-checkbox-holder.rc-anchor-center-item').getBoundingClientRect();\n                        let xInLabel = Math.floor(Math.random() * label.width);\n                        let yInLabel = Math.floor(Math.random() * label.height);\n                        let xInCheck = Math.floor(Math.random() * 38);\n                        let yInCheck = Math.floor(Math.random() * 30);\n                        const xOutside = 1 + 190 + Math.floor(Math.random() * 100);\n                        const yOutside = 1 + 310 + Math.floor(Math.random() * 100);\n                        let simLab = iframe.querySelector('.rc-anchor.rc-anchor-normal.rc-anchor-light');\n\n                        for (let i = 0; i < 50; i++) {\n                            await sleep(3);\n                            simulatedClick(simLab, {\n                                type: 'mousemove',\n                                clientX: xInCheck + Math.floor(((70 - i) / 2) + Math.floor(Math.random() * 10)),\n                                clientY: yInCheck + Math.floor(((70 - i) / 2) + Math.floor(Math.random() * 10)),\n                                screenX: xOutside + Math.floor(((70 - i) / 2) + Math.floor(Math.random() * 10)),\n                                screenY: yOutside + Math.floor(((70 - i) / 2) + Math.floor(Math.random() * 10))\n                            });\n                        }\n\n                        let arr = ['mousedown', 'mouseup', 'click'];\n                        for (let entry of arr) {\n                            await sleep(10);\n                            simulatedClick(iframe.querySelector('.recaptcha-checkbox-checkmark'), {\n                                type: entry,\n                                clientX: xInCheck,\n                                clientY: yInCheck,\n                                screenX: xOutside,\n                                screenY: yOutside\n                            })\n                        }\n                    } catch (e) {\n                        await sleep(50);\n                        return clickCaptcha();\n                    }\n                }\n\n                const simulatedClick = (target, options) => {\n                    //console.log(options.type + ' ' + options.clientX+ ' ' +options.clientY+ ' ' +options.screenX+ ' ' +options.screenY)\n                    var event = target.ownerDocument.createEvent('MouseEvents'),\n                        options = options || {},\n                        opts = { // These are the default values, set up for un-modified left clicks\n                            type: 'click',\n                            canBubble: true,\n                            cancelable: true,\n                            view: target.ownerDocument.defaultView,\n                            detail: 1,\n                            screenX: 0, //The coordinates within the entire page\n                            screenY: 0,\n                            clientX: 0, //The coordinates within the viewport\n                            clientY: 0,\n                            ctrlKey: false,\n                            altKey: false,\n                            shiftKey: false,\n                            metaKey: false, //I *think* 'meta' is 'Cmd/Apple' on Mac, and 'Windows key' on Win. Not sure, though!\n                            button: 0, //0 = left, 1 = middle, 2 = right\n                            relatedTarget: null,\n                        };\n\n                    //Merge the options with the defaults\n                    for (var key in options) {\n                        if (options.hasOwnProperty(key)) {\n                            opts[key] = options[key];\n                        }\n                    }\n\n                    //Pass in the options\n                    event.initMouseEvent(\n                        opts.type,\n                        opts.canBubble,\n                        opts.cancelable,\n                        opts.view,\n                        opts.detail,\n                        opts.screenX,\n                        opts.screenY,\n                        opts.clientX,\n                        opts.clientY,\n                        opts.ctrlKey,\n                        opts.altKey,\n                        opts.shiftKey,\n                        opts.metaKey,\n                        opts.button,\n                        opts.relatedTarget\n                    );\n\n                    //Fire the event\n                    target.dispatchEvent(event);\n                }\n\n                window.onCaptchaSuccess = (token) => {\n                    //console.log(token)\n                    grecaptcha.reset();\n                    $('head script[src*=\"www.recaptcha.net\"]').remove();\n                    $('head script[src*=\"www.gstatic.com\"]').remove();\n                    $('.grecaptcha-badge').remove();\n                    count ++;\n                    $('#count').html(count);\n                    $('#top').html(spinnerHTML);\n                    ipcRenderer.send('sendCaptcha', {\n                        token: token,\n                        timestamp: new Date().getTime(),\n                        id: window.harvesterId,\n                        siteOrigin: window.siteOrigin,\n                        taskId: window.taskId\n                    });            \n                }\n\n                var recaptchaCallback = function() {\n                    let renderOptions = {\n                        sitekey : window.siteKey,\n                        size: (window.innerWidth > 320) ? 'normal' : 'compact',\n                        callback: 'onCaptchaSuccess'\n                    }\n\n                    grecaptcha.render('g-recaptcha', renderOptions);\n                };\n\n                window.onloadCallback =  async() => {\n                    $('#top').html('<div id=\"g-recaptcha\"></div>');\n                    var s = document.createElement(\"script\");\n                    s.src = 'https://www.google.com/recaptcha/api.js?onload=recaptchaCallback&render=explicit&hl=en';\n                    s.type = 'text/javascript';\n                    s.async = 1;\n                    s.defer = 1;\n                    $(\"head\").append(s);\n                    return solveCaptcha();\n                };\n\n                ipcRenderer.on('cancelCaptcha', async (event) => {\n                    grecaptcha.reset();\n                    $('#count').html(count);\n                    $('#top').html(spinnerHTML);\n                });\n                    \n                ipcRenderer.on('requestCaptcha', async (event, siteOrigin, siteKey, extraS, taskId) => {\n                    window.siteOrigin = siteOrigin;\n                    window.siteKey = siteKey;\n                    window.extraS = extraS;\n                    window.taskId = taskId;\n\n                    window.onloadCallback();\n                });\n\n                const urlParams = new URLSearchParams('?' + window.location.href.split('?')[1]);\n                const harvesterName = urlParams.get('name');\n                let count = urlParams.get('count');\n                window.harvesterId = urlParams.get('id');\n                const harvesterType = urlParams.get('type');\n                //console.log('harvesterType', harvesterType)\n                $('#footer-center-icon').html('<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30px\" height=\"60px\" viewBox=\"0 0 133.453 127.713\"><defs><style>.cc{fill:#b7c7fa;}.dd{fill:#b7c7fa;}</style></defs><g transform=\"translate(-158 -370.459)\"><path class=\"cc\" d=\"M103.429,124.291c-10.6-7.727-21.083-15.343-31.68-23.07-1.434-1.1-2.98-2.208-4.415-3.312a.621.621,0,0,0-.994,0L28.921,125.174a37.389,37.389,0,0,1-3.422,2.318c5.187-16.227,10.376-32.343,15.674-48.569Q20.476,63.857,0,48.9c.111,0,.111,0,.111-.11h50c.662,0,.882-.111,1.1-.773C56.3,32.232,61.373,16.558,66.451.883A3.746,3.746,0,0,0,66.782,0c.442,1.435.883,2.76,1.325,4.084,4.636,14.571,9.383,29.252,14.129,43.823.22.662.441.773,1.1.773H132.57v.22h.882a3.038,3.038,0,0,0-.551.442L92.832,78.482A.889.889,0,0,0,92.5,79.7c5.188,15.784,10.266,31.459,15.343,47.244a3.374,3.374,0,0,1,.22.773C106.409,126.5,104.975,125.395,103.429,124.291Z\" transform=\"translate(158 370.459)\"/><path d=\"M10514.872,2592.407V2585.7l-13.787-1-8.493,2.255-5.223,5.456s.152,9.978,0,10.515,3.272,8.494,3.272,8.494l1.95,4.124-1.95,4.207-8.18,4.288h-6.228l-13.621,7.781-10.213,10.129,7.092,7.863,8.647-2.886,6.846-4.977,2.266,26.953.772,15.656h45.646l2.723-43.929,7.408,6.3,10.279,3.5,4.277-9.8-6.614-7.173-10.6-6.928-6.542-2.489-11.6-2.967-1.252-1.869-1.086-6.309,4.906-11.064,1.238-1-1.938-6.625Z\" transform=\"translate(-10276.199 -2197.224)\"/><g transform=\"translate(166.999 386.628)\"><path class=\"dd\" d=\"M459.888,1040.865c2.063,3.25,3.937,3.426,6.755.748l2.72,3.727-2.69,1.6,1.295,2.2-3.07,1.783c.787.646,2.224,1.386,2.137,1.824-.957,4.822-1.184,5.048-4.154,4.682s-5.918-.959-8.892-1.3a8.917,8.917,0,0,0-2.631.5,7.04,7.04,0,0,0,1.006,2.267c2.331,2.32,2.285,4.918,1.2,8.34-2.279-1.772-4.485-3.115-6.156-4.946a5.262,5.262,0,0,1-.9-4.1c.83-3.8,1.267-7.413-1.119-10.86a4.03,4.03,0,0,1-.763-2.469c.109-1.024.479-2.5,1.191-2.849a3.582,3.582,0,0,1,3.026.725c2.812,2.274,2.757,2.358,4.1-.988a9.756,9.756,0,0,1,8.46-6.3c2.851-.332,3.371-2.121,3.453-4.381.091-2.5-1.575-3.14-3.635-3.117-4.3.048-8.692-.349-12.882.379-8.538,1.483-12.31,8.935-9,16.989,1.1,2.685,2.608,5.207,3.679,7.9,2.257,5.678.407,9.322-5.492,11.188-.751.237-1.506.458-2.463.749.987,20.349,1.972,40.654,2.965,61.114h-4.444c-1.042-20.006-2.081-39.95-3.131-60.106l-4.642.974c.833,13.331,1.651,26.417,2.469,39.5l-.942.082c-.778-7.159-1.556-14.318-2.372-21.828l-6.636,4.1-1.865-2.642c1.568-1.063,3.053-2.093,4.561-3.087,3.773-2.485,3.777-2.479,2.814-7.565l-9.97,6.283-2.152-2.965c3.433-2.275,6.726-4.557,10.127-6.666,1.523-.944,2.144-1.919,1.084-3.836-6.474,3.625-12.622,7.52-17.187,13.767l5.423,8.88a47.771,47.771,0,0,1-5.211,2.732c-3.441,1.31-3.617,1.883-1.041,4.312a28.73,28.73,0,0,1,2.553,3.01c1.542,1.922,2.994,3.921,4.6,5.786,3.163,3.668,6.8,5.777,11.851,3.657,1.295-.543,2.874-.411,5.35-.714-1.028,3.12-1.836,5.522-2.609,7.936-.508,1.588-1.637,1.8-3.111,1.655-6.913-.7-12.785-3.8-18.21-7.879a39.436,39.436,0,0,1-10.417-11.837c-1.553-2.666-1.7-5.088.335-7.534,1.633-1.965,3.181-4,4.807-5.97q4.281-5.185,8.627-10.318a14.064,14.064,0,0,1,2.163-1.929c7.284-5.62,15.126-10.11,24.468-11.081,3.189-.332,4.527-2.786,6.456-4.583.359-.335.179-1.546-.095-2.212-1.137-2.767-2.369-5.5-3.634-8.207-1.756-3.765-2.849-7.632-1.63-11.768,1.824-6.192,6.192-9.621,12.442-10.255a89.23,89.23,0,0,1,13.179-.088c3.848.181,5.5,2.9,4.713,6.74-.3,1.45.032,3.019-.172,4.5a2.8,2.8,0,0,1-1.213,1.96A54.541,54.541,0,0,1,459.888,1040.865Z\" transform=\"translate(-393.743 -1025.68)\"/><path class=\"dd\" d=\"M540.993,1098.943c-1.478,2.43-.963,3.422.627,4.4,3.428,2.109,6.725,4.43,10.224,6.763l-2.052,3.006-9.907-6.243c-1.494,4.506-1.393,4.8,2.224,7.182,1.608,1.058,3.2,2.133,4.948,3.294l-1.709,2.828-6.77-4.274c-.8,7.557-1.561,14.713-2.321,21.87l-.922-.087c.815-13.1,1.63-26.2,2.457-39.481l-4.707-.961c-.95,20.076-1.89,39.946-2.84,60.028h-4.682q1.46-30.48,2.919-60.933c-2.316-1.184-5.71-.975-5.705-4.64,4.166,3.458,9.566,2.8,14.193,4.5,7.172,2.626,13.635,6.367,18.7,12.228,3.8,4.395,7.732,8.681,11.358,13.215,3.919,4.9,3.9,6.008.4,11.236a40.225,40.225,0,0,1-24.463,17.258c-4.846,1.2-7.716-1.163-7.917-6.151-.032-.777,0-1.557,0-2.92a38.323,38.323,0,0,1,5.761.983,7.787,7.787,0,0,0,8.879-2.221c2.083-2.262,4.045-4.636,6.052-6.967,1.143-1.328,2.191-2.749,3.424-3.986,1.854-1.861,1.672-2.632-.852-3.677-1.959-.812-3.837-1.818-5.945-2.831l5.932-9.745Z\" transform=\"translate(-454.467 -1056.745)\"/><path class=\"dd\" d=\"M513.339,1169.233h-3.924v-52.078l5.361-.241C514.311,1133.832,513.83,1151.375,513.339,1169.233Z\" transform=\"translate(-448.178 -1068.615)\"/><path class=\"dd\" d=\"M513.339,1169.233h-3.924v-52.078l5.361-.241C514.311,1133.832,513.83,1151.375,513.339,1169.233Z\" transform=\"translate(-458.766 -1068.615)\"/></g></g></svg>')\n                \n                $('#footer-left-text').html(harvesterName);\n                $('#footer-right-text').html(harvesterType);\n\n                $('#count').html(count);\n                $('#top').html(spinnerHTML);\n            \n            </script>\n        </div>\n    </div>\n</body>\n</html>";
  const _0x3851fb = "<html>\n<head>\n\t<title>MEKAIO Captcha Harvester</title>\n    <style type=\"text/css\">\n    *,\n*::after,\n*::before {\n    -webkit-user-select: none;\n    user-select: none;\n}\nbody {\n\tmargin: auto;\n\tfont-weight: 500;\n    overflow: hidden;\n}\n\n.captchaFooter {\n\tbackground-color: black;\n\tbottom: 0;\n\tcolor: white;\n\theight: 10vh;\n\twidth: 100%;\n\ttext-align: center;\n\tpadding: 10px 10px 80px;\n}\n\n.center {\n\theight: 84vh;\n}\n\n.btn {\n\theight: 40px !important;\n\twidth: 90px !important;\n\tmargin: 5px !important;\n}\n\n#clearSession {\n\twidth: 120px !important;\n}\n\n#title-bar {\n\theight: 5% !important;\n\tmin-height: 30px !important;\n    background-color: #050a1d;\n    border-radius: 20px;\n}\n\n#title-text {\n    /* height: 100% !important; */\n    /* min-height: 30px !important; */\n    text-align: center;\n    /* color: white; */\n    font-size: 14px;\n    padding-top: 2px;\n    line-height: 2;\n}\n\n#bottom {\n\tbackground-color: rgb(15, 23, 53);\n\theight: 40%;\n\tcolor: white;\n}\n\n#title-bar-btns {\n    -webkit-app-region: no-drag;\n    position: absolute;\n    top: 0px;\n    right: 9px;\n    height: 5% !important;\n    min-height: 30px !important;\n}\n\n#title-bar-btns button {\n    width: 30px;\n    height: 24px;\n    margin: 6px 3px;\n    background-color: #1c2235;\n    border-radius: 6px;\n    border: none;\n    color: grey;\n    font-size: 16px;\n    float: left;\n}\n\n#title-bar-btns path:hover {\n    pointer-events: bounding-box;\n}\n\n#title-bar-btns path:hover {\n    cursor: pointer;\n}\n\n#title-bar-btns svg:hover {\n    cursor: pointer;\n}\n\n#title-bar-btns button:hover {\n    cursor: pointer;\n    background: #293350;\n}\n\n#title-bar-btns button:focus {\n    outline: none;\n}\n\n.col-12 {\n\ttext-align: center !important;\n\tmargin: auto;\n\tfont-weight: bold;\n\tfont-size: 1.2em;\n}\n\n@keyframes inner-spinner {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\t50% {\n\t\ttransform: rotate(180deg);\n\t}\n\t100% {\n\t\ttransform: rotate(360deg);\n\t}\n}\n.inner-spinner div {\n\tposition: absolute;\n\tanimation: inner-spinner 1s linear infinite;\n\twidth: 160px;\n\theight: 160px;\n\ttop: 20px;\n\tleft: 20px;\n\tborder-radius: 50%;\n\tbox-shadow: 0 4px 0 0 #df1c29;\n\ttransform-origin: 80px 82px;\n}\n#spinner {\n\tmargin: auto;\n\twidth: 200px;\n\theight: 200px;\n\tdisplay: inline-block;\n\toverflow: hidden;\n\tbackground: rgb(13, 19, 43);\n}\n.inner-spinner {\n\twidth: 100%;\n\theight: 100%;\n\tposition: relative;\n\ttransform: translateZ(0) scale(1);\n\tbackface-visibility: hidden;\n\ttransform-origin: 0 0; /* see note above */\n}\n.inner-spinner div {\n\tbox-sizing: content-box;\n}\n\n#captcha-form {\n\tmargin: auto;\n}\n\n#harvesterType,\n#harvesterName,\n#count {\n    color: #b7c7fa;\n    display: inline;\n    vertical-align: top;\n    font-size: 18px;\n    padding-left: 5px;\n}\nbody {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: 'Roboto', sans-serif;\n\tfont: Regular SF Pro Text;\n    color: #b7c7fa;\n    background: transparent !important;\n}\n.center {\n\tdisplay: flex;\n\ttext-align: center;\n\tjustify-content: center;\n\talign-items: center;\n    min-height: 90vh;\n    position: relative;\n}\n.ring {\n    position: absolute;\n    top: 160px;\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    animation: ring 2s linear infinite;\n    left: 86px;\n}\n@keyframes ring {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t\tbox-shadow: 1px 5px 2px #95aaed;\n\t}\n\t50% {\n\t\ttransform: rotate(180deg);\n\t\tbox-shadow: 1px 5px 2px #ef109e;\n\t}\n\t100% {\n\t\ttransform: rotate(0360deg);\n\t\tbox-shadow: 1px 5px 2px #b7c7fa;\n\t}\n}\n.ring::before {\n\tposition: absolute;\n\tleft: 0;\n\tcontent: \"\";\n\ttop: 0;\n\theight: 100%;\n\twidth: 100%;\n\tborder-radius: 50%;\n\tbox-shadow: 0 0 5px rgba(255, 255, 255, 0.3);\n}\n#waiting {\n\tcolor: #b7c7fa;\n\tfont-size: 20px;\n\ttext-transform: uppercase;\n\tletter-spacing: 1px;\n\tline-height: 200px;\n\tanimation: text 3s ease-in-out infinite;\n}\n@keyframes text {\n\t50% {\n\t\tcolor: #03070e;\n\t}\n}\n.footerSvg {\n    width: 100%;\n    height: 54px;\n}\n\n.footer {\n    position: absolute;\n    width: 100%;\n    bottom: 0px;\n}\n\n.container {\n    background: #050a1d;\n    border-radius: 20px;\n    height: 100%;\n    width: 100%;\n}\n\n#title-bar-left {\n    position: absolute;\n    top: 3px;\n    left: 6px;\n    font-size: 13px;\n    padding: 3px 10px;\n    border-radius: 12px;\n    background: #1D2230;\n}\n.top-bar-icon {\n    fill: #808080;\n}\n\n#footer-left-text {\n    font-size: 13px;\n    width: 113px;\n    position: absolute;\n    left: 11px;\n    top: 10px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n#footer-right-text {\n    position: absolute;\n    right: 11px;\n    top: 10px;\n    font-size: 13px;\n}\n\n#footer-center-icon {\n    position: absolute;\n    left: 146px;\n    top: -10px;\n}\n\n    </style>\n</head>\n\n\n<body>\n    <div class=\"container\">\n        <div style=\"-webkit-app-region: drag\" id=\"title-bar\">\n            <div id=\"title-bar-left\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19.26\" height=\"19.26\" viewBox=\"0 0 19.26 19.26\"><g class=\"a\" transform=\"translate(0 -0.003)\"><ellipse class=\"b\" cx=\"7.667\" cy=\"8.929\" rx=\"7.667\" ry=\"8.929\" transform=\"translate(1.51 1.405)\"/><path fill=\"#677188\" d=\"M16.442,2.82a9.63,9.63,0,1,0,0,13.625A9.645,9.645,0,0,0,16.442,2.82ZM15.015,6.989l-5.62,5.62a.8.8,0,0,1-1.135,0L5.048,9.4A.8.8,0,0,1,6.183,8.262l2.644,2.644,5.053-5.053a.8.8,0,1,1,1.135,1.135Z\" transform=\"translate(0 0)\"/></g></svg>\n                    <div id=\"count\"></div>\n            </div>\n            <div id=\"title-text\">Harvester</div>\n            <div id=\"title-bar-btns\">\n                    <button id=\"min-btn\" type=\"button\" class=\"topBarBtn button\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12.289\" height=\"2.208\" viewBox=\"0 0 12.289 2.208\"><defs></defs><path fill=\"#a9a9a9\" d=\"M7.024,19H17.265a1.107,1.107,0,0,1,0,2.208H7.024a1.107,1.107,0,0,1,0-2.208Z\" transform=\"translate(-6 -19)\"/></svg>\n                    </button>\n                    <button id=\"close-btn\" type=\"button\" class=\"topBarBtn button\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17.379\" height=\"17.379\" viewBox=\"0 0 17.379 17.379\"><defs></defs><g transform=\"translate(8.689 0) rotate(45)\"><g transform=\"translate(0 0)\"><g transform=\"translate(0 0)\"><path fill=\"#a9a9a9\" d=\"M11.162,5.017H7.272V1.127a1.128,1.128,0,0,0-2.255,0v3.89H1.128a1.127,1.127,0,1,0,0,2.254H5.017v3.89a1.128,1.128,0,0,0,2.255,0V7.271h3.89a1.127,1.127,0,1,0,0-2.254Z\"/></g></g></g></svg>\n                    </button>\n            </div>\n            <div class=\"footer\">\n                <div id=\"footer-left-text\"></div>\n                <div id=\"footer-center-icon\"></div>\n                <div id=\"footer-right-text\"></div>\n                <div class=\"footer-harvester-type\">\n\n                </div>\n                <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" class=\"footerSvg\" viewBox=\"0 0 312 52\"><defs><style>.a{fill:url(#a);}.b{clip-path:url(#b);}.c{fill:#1a2235;}.d{fill:#203c65;}.e{fill:url(#c);}</style><linearGradient id=\"a\" x1=\"0.5\" x2=\"0.5\" y2=\"1\" gradientUnits=\"objectBoundingBox\"><stop offset=\"0\" stop-color=\"#465465\"/><stop offset=\"1\" stop-color=\"#020a18\"/></linearGradient><clipPath id=\"b\"><path class=\"a\" d=\"M0,0H312a0,0,0,0,1,0,0V37a15,15,0,0,1-15,15H15A15,15,0,0,1,0,37V0A0,0,0,0,1,0,0Z\" transform=\"translate(0.081 466)\"/></clipPath><radialGradient id=\"c\" cx=\"0.506\" cy=\"-5.319\" r=\"9.299\" gradientTransform=\"translate(0.494) scale(0.023 1)\" gradientUnits=\"objectBoundingBox\"><stop offset=\"0\" stop-color=\"#ff00f7\" stop-opacity=\"0.502\"/><stop offset=\"1\" stop-color=\"#f93c3c\" stop-opacity=\"0\"/></radialGradient></defs><g class=\"b\" transform=\"translate(-0.081 -466)\"><rect class=\"c\" width=\"312\" height=\"52\" transform=\"translate(0.081 466)\"/><g transform=\"translate(-543.919 499.308)\"><path class=\"d\" d=\"M0,1195.588V1165.3H665.814l34.608,17.933,32.671-17.933H1400v30.283Z\" transform=\"translate(0 -1165.304)\"/><path class=\"e\" d=\"M0,1195.588V1165.3H665.814l34.608,17.933,32.671-17.933H1400v30.283Z\" transform=\"translate(0 -1165.304)\"/></g><g transform=\"translate(-493.919 499.308)\"><path class=\"d\" d=\"M0,1195.588V1165.3H618.372l32.142,17.933,30.343-17.933h619.388v30.283Z\" transform=\"translate(0 -1165.304)\"/><path class=\"e\" d=\"M0,1195.588V1165.3H618.372l32.142,17.933,30.343-17.933h619.388v30.283Z\" transform=\"translate(0 -1165.304)\"/></g></g></svg>\n            </div>\n        </div>\n\n        <div class=\"center\">\n            <div id=\"top\"></div>\n\n            <script>\n                (function () {\n                    const remote = require('electron').remote;\n                    function init() {\n                        document.getElementById(\"min-btn\").addEventListener(\"click\", function (e) {\n                            const window = remote.getCurrentWindow();\n                            window.minimize();\n                        });\n\n                        document.getElementById(\"close-btn\").addEventListener(\"click\", function (e) {\n                            const window = remote.getCurrentWindow();\n                            window.close();\n                        });\n                    }\n\n                    document.onreadystatechange = function () {\n                        if (document.readyState == \"complete\") {\n                            init();\n                        }\n                    };\n                })();\n                if (typeof module === 'object') {\n                    window.module = module; module = undefined;\n                }\n            </script>\n\n            <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>\n            <script>if (window.module) module = window.module;</script>\n\n            <script>\n                console.log(window.location.href)\n                const {ipcRenderer} = require(\"electron\");\n                const spinnerHTML = ' <div class=\"ring\"></div><span id=\"waiting\">Waiting</span>'\n\n                const waitForCaptchaLoad = async () => {\n                    if (window.grecaptcha != null && window.grecaptcha.render != null) {\n                        return;\n                    } else {\n                        await sleep(50);\n                        return await waitForCaptchaLoad();\n                    }\n                }\n\n                const createElementFromHTML = (htmlString) => {\n                    var div = document.createElement('div');\n                    div.innerHTML = htmlString.trim();\n                    return div.firstChild; \n                }\n\n                const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));\n\n                const solveCaptcha = async () => {\n                    if ($('[role=\"presentation\"]').length != 0 && $('[role=\"presentation\"]').contents().find(\n                '.recaptcha-checkbox-checkmark').length != 0) {\n                        await clickCaptcha();\n                    } else {\n                        await sleep(20);\n                        return solveCaptcha();\n                    }\n                }\n\n                const clickCaptcha = async () => {\n                    try {\n                        let iframe = document.querySelector('iframe').contentDocument || document.querySelector('iframe').contentWindow.document;\n                        let dimensions = iframe.querySelector('.rc-anchor.rc-anchor-normal.rc-anchor-light').getBoundingClientRect();\n                        let xInFrame = Math.floor(Math.random() * dimensions.width);\n                        let yInFrame = Math.floor(Math.random() * dimensions.height);\n                        let label = iframe.querySelector('.rc-anchor-checkbox-holder.rc-anchor-center-item').getBoundingClientRect();\n                        let xInLabel = Math.floor(Math.random() * label.width);\n                        let yInLabel = Math.floor(Math.random() * label.height);\n                        let xInCheck = Math.floor(Math.random() * 38);\n                        let yInCheck = Math.floor(Math.random() * 30);\n                        const xOutside = 1 + 190 + Math.floor(Math.random() * 100);\n                        const yOutside = 1 + 310 + Math.floor(Math.random() * 100);\n                        let simLab = iframe.querySelector('.rc-anchor.rc-anchor-normal.rc-anchor-light');\n\n                        for (let i = 0; i < 50; i++) {\n                            await sleep(3);\n                            simulatedClick(simLab, {\n                                type: 'mousemove',\n                                clientX: xInCheck + Math.floor(((70 - i) / 2) + Math.floor(Math.random() * 10)),\n                                clientY: yInCheck + Math.floor(((70 - i) / 2) + Math.floor(Math.random() * 10)),\n                                screenX: xOutside + Math.floor(((70 - i) / 2) + Math.floor(Math.random() * 10)),\n                                screenY: yOutside + Math.floor(((70 - i) / 2) + Math.floor(Math.random() * 10))\n                            });\n                        }\n\n                        let arr = ['mousedown', 'mouseup', 'click'];\n                        for (let entry of arr) {\n                            await sleep(10);\n                            simulatedClick(iframe.querySelector('.recaptcha-checkbox-checkmark'), {\n                                type: entry,\n                                clientX: xInCheck,\n                                clientY: yInCheck,\n                                screenX: xOutside,\n                                screenY: yOutside\n                            })\n                        }\n                    } catch (e) {\n                        await sleep(50);\n                        return clickCaptcha();\n                    }\n                }\n\n                const simulatedClick = (target, options) => {\n                    //console.log(options.type + ' ' + options.clientX+ ' ' +options.clientY+ ' ' +options.screenX+ ' ' +options.screenY)\n                    var event = target.ownerDocument.createEvent('MouseEvents'),\n                        options = options || {},\n                        opts = { // These are the default values, set up for un-modified left clicks\n                            type: 'click',\n                            canBubble: true,\n                            cancelable: true,\n                            view: target.ownerDocument.defaultView,\n                            detail: 1,\n                            screenX: 0, //The coordinates within the entire page\n                            screenY: 0,\n                            clientX: 0, //The coordinates within the viewport\n                            clientY: 0,\n                            ctrlKey: false,\n                            altKey: false,\n                            shiftKey: false,\n                            metaKey: false, //I *think* 'meta' is 'Cmd/Apple' on Mac, and 'Windows key' on Win. Not sure, though!\n                            button: 0, //0 = left, 1 = middle, 2 = right\n                            relatedTarget: null,\n                        };\n\n                    //Merge the options with the defaults\n                    for (var key in options) {\n                        if (options.hasOwnProperty(key)) {\n                            opts[key] = options[key];\n                        }\n                    }\n\n                    //Pass in the options\n                    event.initMouseEvent(\n                        opts.type,\n                        opts.canBubble,\n                        opts.cancelable,\n                        opts.view,\n                        opts.detail,\n                        opts.screenX,\n                        opts.screenY,\n                        opts.clientX,\n                        opts.clientY,\n                        opts.ctrlKey,\n                        opts.altKey,\n                        opts.shiftKey,\n                        opts.metaKey,\n                        opts.button,\n                        opts.relatedTarget\n                    );\n\n                    //Fire the event\n                    target.dispatchEvent(event);\n                }\n\n                window.onCaptchaSuccess = (token) => {\n                    //console.log(token)\n                    grecaptcha.reset();\n                    $('head script[src*=\"www.recaptcha.net\"]').remove();\n                    $('head script[src*=\"www.gstatic.com\"]').remove();\n                    $('.grecaptcha-badge').remove();\n                    count ++;\n                    $('#count').html(count);\n                    $('#top').html(spinnerHTML);\n                    ipcRenderer.send('sendCaptcha', {\n                        token: token,\n                        timestamp: new Date().getTime(),\n                        id: window.harvesterId,\n                        siteOrigin: window.siteOrigin,\n                        taskId: window.taskId\n                    });            \n                }\n\n                var recaptchaCallback = function() {\n                    let renderOptions = {\n                        sitekey : window.siteKey,\n                        size: (window.innerWidth > 320) ? 'normal' : 'compact',\n                        callback: 'onCaptchaSuccess'\n                    }\n\n                    if (window.extraS != \"null\") {\n                        renderOptions[\"s\"] = window.extraS;\n                    }\n\n                    grecaptcha.render('g-recaptcha', renderOptions);\n                };\n\n                window.onloadCallback =  async() => {\n                    $('#top').html('<div id=\"g-recaptcha\"></div>');\n                    var s = document.createElement(\"script\");\n                    s.type = \"text/javascript\";\n                    s.async = \"async\";\n                    s.src = \"https://www.recaptcha.net/recaptcha/api.js?onload=recaptchaCallback&render=6LcCR2cUAAAAANS1Gpq_mDIJ2pQuJphsSQaUEuc9&hl=en\"\n                    $(\"head\").append(s);\n                    return solveCaptcha();\n                };\n\n                ipcRenderer.on('cancelCaptcha', async (event) => {\n                    grecaptcha.reset();\n                    $('#count').html(count);\n                    $('#top').html(spinnerHTML);\n                });\n                    \n                ipcRenderer.on('requestCaptcha', async (event, siteOrigin, siteKey, extraS, taskId) => {\n                    window.siteOrigin = siteOrigin;\n                    window.siteKey = siteKey;\n                    window.extraS = extraS;\n                    window.taskId = taskId;\n\n                    window.onloadCallback();\n                });\n\n                const urlParams = new URLSearchParams('?' + window.location.href.split('?')[1]);\n                const harvesterName = urlParams.get('name');\n                let count = urlParams.get('count');\n                window.harvesterId = urlParams.get('id');\n                const harvesterType = urlParams.get('type');\n                //console.log('harvesterType', harvesterType)\n                if (harvesterType === 'shopify-checkout' || harvesterType === 'shopify-checkpoint') {\n                    $('#footer-center-icon').html('<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30px\" height=\"60px\" viewBox=\"0 0 25.13 28.578\"><defs><style>.a{fill:#7c8dc4;}.b{fill:#6273aa;}.c{fill:#fff;}</style></defs><g transform=\"translate(-658.081 -645.806)\"><g transform=\"translate(658.081 645.806)\"><path fill=\"#70819e\"; d=\"M22.048,6.343a.276.276,0,0,0-.25-.232L19.5,5.94s-1.526-1.515-1.693-1.682a.694.694,0,0,0-.622-.079l-.854.264c-.51-1.466-1.409-2.814-2.991-2.814-.044,0-.089,0-.134,0A1.923,1.923,0,0,0,11.717.779c-3.686,0-5.447,4.607-6,6.949l-2.58.8c-.8.251-.825.276-.93,1.029C2.13,10.127.038,26.3.038,26.3l16.3,3.054,8.831-1.91s-3.1-20.96-3.12-21.1ZM15.429,4.721l-1.379.427c0-.1,0-.193,0-.3a6.765,6.765,0,0,0-.329-2.227C14.537,2.726,15.08,3.653,15.429,4.721ZM12.71,2.8a6.837,6.837,0,0,1,.374,2.483c0,.056,0,.108,0,.16l-2.848.882C10.784,4.212,11.812,3.19,12.71,2.8Zm-1.1-1.037a.832.832,0,0,1,.473.16c-1.181.556-2.447,1.956-2.982,4.751l-2.251.7c.626-2.132,2.113-5.608,4.761-5.608Z\" transform=\"translate(-0.038 -0.779)\"/><path class=\"b\" d=\"M171.185,37l-2.3-.171s-1.526-1.515-1.693-1.682a.418.418,0,0,0-.236-.108l-1.232,25.207,8.831-1.91s-3.1-20.96-3.12-21.1a.276.276,0,0,0-.25-.232\" transform=\"translate(-149.424 -31.671)\"/><path fill=\"white\" d=\"M48.667,100.674l-1.089,3.239a5.009,5.009,0,0,0-2.124-.509c-1.715,0-1.8,1.076-1.8,1.347,0,1.479,3.856,2.046,3.856,5.511,0,2.726-1.729,4.482-4.061,4.482A5.649,5.649,0,0,1,39.221,113l.749-2.475a5.356,5.356,0,0,0,2.712,1.263,1.094,1.094,0,0,0,1.141-1.1c0-1.93-3.164-2.016-3.164-5.187,0-2.669,1.916-5.252,5.782-5.252a4.757,4.757,0,0,1,2.226.427\" transform=\"translate(-35.366 -90.462)\"/></g></g></svg>')\n                } else if (harvesterType === 'footsite-datadome') {\n                    $('#footer-center-icon').html('<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30px\" height=\"60px\" viewBox=\"0 0 133.453 127.713\"><defs><style>.cc{fill:#b7c7fa;}.dd{fill:#b7c7fa;}</style></defs><g transform=\"translate(-158 -370.459)\"><path class=\"cc\" d=\"M103.429,124.291c-10.6-7.727-21.083-15.343-31.68-23.07-1.434-1.1-2.98-2.208-4.415-3.312a.621.621,0,0,0-.994,0L28.921,125.174a37.389,37.389,0,0,1-3.422,2.318c5.187-16.227,10.376-32.343,15.674-48.569Q20.476,63.857,0,48.9c.111,0,.111,0,.111-.11h50c.662,0,.882-.111,1.1-.773C56.3,32.232,61.373,16.558,66.451.883A3.746,3.746,0,0,0,66.782,0c.442,1.435.883,2.76,1.325,4.084,4.636,14.571,9.383,29.252,14.129,43.823.22.662.441.773,1.1.773H132.57v.22h.882a3.038,3.038,0,0,0-.551.442L92.832,78.482A.889.889,0,0,0,92.5,79.7c5.188,15.784,10.266,31.459,15.343,47.244a3.374,3.374,0,0,1,.22.773C106.409,126.5,104.975,125.395,103.429,124.291Z\" transform=\"translate(158 370.459)\"/><path d=\"M10514.872,2592.407V2585.7l-13.787-1-8.493,2.255-5.223,5.456s.152,9.978,0,10.515,3.272,8.494,3.272,8.494l1.95,4.124-1.95,4.207-8.18,4.288h-6.228l-13.621,7.781-10.213,10.129,7.092,7.863,8.647-2.886,6.846-4.977,2.266,26.953.772,15.656h45.646l2.723-43.929,7.408,6.3,10.279,3.5,4.277-9.8-6.614-7.173-10.6-6.928-6.542-2.489-11.6-2.967-1.252-1.869-1.086-6.309,4.906-11.064,1.238-1-1.938-6.625Z\" transform=\"translate(-10276.199 -2197.224)\"/><g transform=\"translate(166.999 386.628)\"><path class=\"dd\" d=\"M459.888,1040.865c2.063,3.25,3.937,3.426,6.755.748l2.72,3.727-2.69,1.6,1.295,2.2-3.07,1.783c.787.646,2.224,1.386,2.137,1.824-.957,4.822-1.184,5.048-4.154,4.682s-5.918-.959-8.892-1.3a8.917,8.917,0,0,0-2.631.5,7.04,7.04,0,0,0,1.006,2.267c2.331,2.32,2.285,4.918,1.2,8.34-2.279-1.772-4.485-3.115-6.156-4.946a5.262,5.262,0,0,1-.9-4.1c.83-3.8,1.267-7.413-1.119-10.86a4.03,4.03,0,0,1-.763-2.469c.109-1.024.479-2.5,1.191-2.849a3.582,3.582,0,0,1,3.026.725c2.812,2.274,2.757,2.358,4.1-.988a9.756,9.756,0,0,1,8.46-6.3c2.851-.332,3.371-2.121,3.453-4.381.091-2.5-1.575-3.14-3.635-3.117-4.3.048-8.692-.349-12.882.379-8.538,1.483-12.31,8.935-9,16.989,1.1,2.685,2.608,5.207,3.679,7.9,2.257,5.678.407,9.322-5.492,11.188-.751.237-1.506.458-2.463.749.987,20.349,1.972,40.654,2.965,61.114h-4.444c-1.042-20.006-2.081-39.95-3.131-60.106l-4.642.974c.833,13.331,1.651,26.417,2.469,39.5l-.942.082c-.778-7.159-1.556-14.318-2.372-21.828l-6.636,4.1-1.865-2.642c1.568-1.063,3.053-2.093,4.561-3.087,3.773-2.485,3.777-2.479,2.814-7.565l-9.97,6.283-2.152-2.965c3.433-2.275,6.726-4.557,10.127-6.666,1.523-.944,2.144-1.919,1.084-3.836-6.474,3.625-12.622,7.52-17.187,13.767l5.423,8.88a47.771,47.771,0,0,1-5.211,2.732c-3.441,1.31-3.617,1.883-1.041,4.312a28.73,28.73,0,0,1,2.553,3.01c1.542,1.922,2.994,3.921,4.6,5.786,3.163,3.668,6.8,5.777,11.851,3.657,1.295-.543,2.874-.411,5.35-.714-1.028,3.12-1.836,5.522-2.609,7.936-.508,1.588-1.637,1.8-3.111,1.655-6.913-.7-12.785-3.8-18.21-7.879a39.436,39.436,0,0,1-10.417-11.837c-1.553-2.666-1.7-5.088.335-7.534,1.633-1.965,3.181-4,4.807-5.97q4.281-5.185,8.627-10.318a14.064,14.064,0,0,1,2.163-1.929c7.284-5.62,15.126-10.11,24.468-11.081,3.189-.332,4.527-2.786,6.456-4.583.359-.335.179-1.546-.095-2.212-1.137-2.767-2.369-5.5-3.634-8.207-1.756-3.765-2.849-7.632-1.63-11.768,1.824-6.192,6.192-9.621,12.442-10.255a89.23,89.23,0,0,1,13.179-.088c3.848.181,5.5,2.9,4.713,6.74-.3,1.45.032,3.019-.172,4.5a2.8,2.8,0,0,1-1.213,1.96A54.541,54.541,0,0,1,459.888,1040.865Z\" transform=\"translate(-393.743 -1025.68)\"/><path class=\"dd\" d=\"M540.993,1098.943c-1.478,2.43-.963,3.422.627,4.4,3.428,2.109,6.725,4.43,10.224,6.763l-2.052,3.006-9.907-6.243c-1.494,4.506-1.393,4.8,2.224,7.182,1.608,1.058,3.2,2.133,4.948,3.294l-1.709,2.828-6.77-4.274c-.8,7.557-1.561,14.713-2.321,21.87l-.922-.087c.815-13.1,1.63-26.2,2.457-39.481l-4.707-.961c-.95,20.076-1.89,39.946-2.84,60.028h-4.682q1.46-30.48,2.919-60.933c-2.316-1.184-5.71-.975-5.705-4.64,4.166,3.458,9.566,2.8,14.193,4.5,7.172,2.626,13.635,6.367,18.7,12.228,3.8,4.395,7.732,8.681,11.358,13.215,3.919,4.9,3.9,6.008.4,11.236a40.225,40.225,0,0,1-24.463,17.258c-4.846,1.2-7.716-1.163-7.917-6.151-.032-.777,0-1.557,0-2.92a38.323,38.323,0,0,1,5.761.983,7.787,7.787,0,0,0,8.879-2.221c2.083-2.262,4.045-4.636,6.052-6.967,1.143-1.328,2.191-2.749,3.424-3.986,1.854-1.861,1.672-2.632-.852-3.677-1.959-.812-3.837-1.818-5.945-2.831l5.932-9.745Z\" transform=\"translate(-454.467 -1056.745)\"/><path class=\"dd\" d=\"M513.339,1169.233h-3.924v-52.078l5.361-.241C514.311,1133.832,513.83,1151.375,513.339,1169.233Z\" transform=\"translate(-448.178 -1068.615)\"/><path class=\"dd\" d=\"M513.339,1169.233h-3.924v-52.078l5.361-.241C514.311,1133.832,513.83,1151.375,513.339,1169.233Z\" transform=\"translate(-458.766 -1068.615)\"/></g></g></svg>')\n                }\n                $('#footer-left-text').html(harvesterName);\n                $('#footer-right-text').html(harvesterType);\n\n                $('#count').html(count);\n                $('#top').html(spinnerHTML);\n            \n            </script>\n        </div>\n    </div>\n</body>\n</html>";
  const _0x287474 = "<html>\n<head>\n\t<title>MEKaio Captcha Harvester</title>\n    <style type=\"text/css\">\n    *,\n*::after,\n*::before {\n    -webkit-user-select: none;\n    user-select: none;\n}\nbody {\n\tmargin: auto;\n\tfont-weight: 500;\n    overflow: hidden;\n}\n\n.ui-button {\n    display: none;\n}\n\n.captchaFooter {\n\tbackground-color: black;\n\tbottom: 0;\n\tcolor: white;\n\theight: 10vh;\n\twidth: 100%;\n\ttext-align: center;\n\tpadding: 10px 10px 80px;\n}\n\n.center {\n\theight: 84vh;\n}\n\n.btn {\n\theight: 40px !important;\n\twidth: 90px !important;\n\tmargin: 5px !important;\n}\n\n#clearSession {\n\twidth: 120px !important;\n}\n\n#title-bar {\n\theight: 5% !important;\n\tmin-height: 30px !important;\n    background-color: #050a1d;\n    border-radius: 20px;\n}\n\n#title-text {\n    /* height: 100% !important; */\n    /* min-height: 30px !important; */\n    text-align: center;\n    /* color: white; */\n    font-size: 14px;\n    padding-top: 2px;\n    line-height: 2;\n}\n\n#bottom {\n\tbackground-color: rgb(15, 23, 53);\n\theight: 40%;\n\tcolor: white;\n}\n\n#title-bar-btns {\n    -webkit-app-region: no-drag;\n    position: absolute;\n    top: 0px;\n    right: 9px;\n    height: 5% !important;\n    min-height: 30px !important;\n}\n\n#title-bar-btns button {\n    width: 30px;\n    height: 24px;\n    margin: 6px 3px;\n    background-color: #1c2235;\n    border-radius: 6px;\n    border: none;\n    color: grey;\n    font-size: 16px;\n    float: left;\n}\n\n#title-bar-btns path:hover {\n    pointer-events: bounding-box;\n}\n\n#title-bar-btns path:hover {\n    cursor: pointer;\n}\n\n#title-bar-btns svg:hover {\n    cursor: pointer;\n}\n\n#title-bar-btns button:hover {\n    cursor: pointer;\n    background: #293350;\n}\n\n#title-bar-btns button:focus {\n    outline: none;\n}\n\n.col-12 {\n\ttext-align: center !important;\n\tmargin: auto;\n\tfont-weight: bold;\n\tfont-size: 1.2em;\n}\n\n@keyframes inner-spinner {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\t50% {\n\t\ttransform: rotate(180deg);\n\t}\n\t100% {\n\t\ttransform: rotate(360deg);\n\t}\n}\n.inner-spinner div {\n\tposition: absolute;\n\tanimation: inner-spinner 1s linear infinite;\n\twidth: 160px;\n\theight: 160px;\n\ttop: 20px;\n\tleft: 20px;\n\tborder-radius: 50%;\n\tbox-shadow: 0 4px 0 0 #df1c29;\n\ttransform-origin: 80px 82px;\n}\n#spinner {\n\tmargin: auto;\n\twidth: 200px;\n\theight: 200px;\n\tdisplay: inline-block;\n\toverflow: hidden;\n\tbackground: rgb(13, 19, 43);\n}\n.inner-spinner {\n\twidth: 100%;\n\theight: 100%;\n\tposition: relative;\n\ttransform: translateZ(0) scale(1);\n\tbackface-visibility: hidden;\n\ttransform-origin: 0 0; /* see note above */\n}\n.inner-spinner div {\n\tbox-sizing: content-box;\n}\n\n#captcha-form {\n\tmargin: auto;\n}\n\n#harvesterType,\n#harvesterName,\n#count {\n    color: #b7c7fa;\n    display: inline;\n    vertical-align: top;\n    font-size: 18px;\n    padding-left: 5px;\n}\nbody {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: 'Roboto', sans-serif;\n\tfont: Regular SF Pro Text;\n    color: #b7c7fa;\n    background: transparent !important;\n}\n.center {\n\tdisplay: flex;\n\ttext-align: center;\n\tjustify-content: center;\n\talign-items: center;\n    min-height: 90vh;\n    position: relative;\n}\n.ring {\n    position: absolute;\n    top: 160px;\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    animation: ring 2s linear infinite;\n    left: 86px;\n}\n@keyframes ring {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t\tbox-shadow: 1px 5px 2px #95aaed;\n\t}\n\t50% {\n\t\ttransform: rotate(180deg);\n\t\tbox-shadow: 1px 5px 2px #ef109e;\n\t}\n\t100% {\n\t\ttransform: rotate(0360deg);\n\t\tbox-shadow: 1px 5px 2px #b7c7fa;\n\t}\n}\n.ring::before {\n\tposition: absolute;\n\tleft: 0;\n\tcontent: \"\";\n\ttop: 0;\n\theight: 100%;\n\twidth: 100%;\n\tborder-radius: 50%;\n\tbox-shadow: 0 0 5px rgba(255, 255, 255, 0.3);\n}\n#waiting {\n\tcolor: #b7c7fa;\n\tfont-size: 20px;\n\ttext-transform: uppercase;\n\tletter-spacing: 1px;\n\tline-height: 200px;\n\tanimation: text 3s ease-in-out infinite;\n}\n@keyframes text {\n\t50% {\n\t\tcolor: #03070e;\n\t}\n}\n.footerSvg {\n    width: 100%;\n    height: 54px;\n}\n\n.footer {\n    position: absolute;\n    width: 100%;\n    bottom: 0px;\n}\n\n.container {\n    background: #050a1d;\n    border-radius: 20px;\n    height: 100%;\n    width: 100%;\n}\n\n#title-bar-left {\n    position: absolute;\n    top: 3px;\n    left: 6px;\n    font-size: 13px;\n    padding: 3px 10px;\n    border-radius: 12px;\n    background: #1D2230;\n}\n.top-bar-icon {\n    fill: #808080;\n}\n\n#footer-left-text {\n    font-size: 13px;\n    width: 113px;\n    position: absolute;\n    left: 11px;\n    top: 10px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n#footer-right-text {\n    position: absolute;\n    right: 11px;\n    top: 10px;\n    font-size: 13px;\n}\n\n#footer-center-icon {\n    position: absolute;\n    left: 146px;\n    top: -10px;\n}\n\n    </style>\n</head>\n\n\n<body>\n    <div class=\"container\">\n        <div style=\"-webkit-app-region: drag\" id=\"title-bar\">\n            <div id=\"title-bar-left\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19.26\" height=\"19.26\" viewBox=\"0 0 19.26 19.26\"><g class=\"a\" transform=\"translate(0 -0.003)\"><ellipse class=\"b\" cx=\"7.667\" cy=\"8.929\" rx=\"7.667\" ry=\"8.929\" transform=\"translate(1.51 1.405)\"/><path fill=\"#677188\" d=\"M16.442,2.82a9.63,9.63,0,1,0,0,13.625A9.645,9.645,0,0,0,16.442,2.82ZM15.015,6.989l-5.62,5.62a.8.8,0,0,1-1.135,0L5.048,9.4A.8.8,0,0,1,6.183,8.262l2.644,2.644,5.053-5.053a.8.8,0,1,1,1.135,1.135Z\" transform=\"translate(0 0)\"/></g></svg>\n                    <div id=\"count\"></div>\n            </div>\n            <div id=\"title-text\">Harvester</div>\n            <div id=\"title-bar-btns\">\n                    <button id=\"min-btn\" type=\"button\" class=\"topBarBtn button\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12.289\" height=\"2.208\" viewBox=\"0 0 12.289 2.208\"><defs></defs><path fill=\"#a9a9a9\" d=\"M7.024,19H17.265a1.107,1.107,0,0,1,0,2.208H7.024a1.107,1.107,0,0,1,0-2.208Z\" transform=\"translate(-6 -19)\"/></svg>\n                    </button>\n                    <button id=\"close-btn\" type=\"button\" class=\"topBarBtn button\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17.379\" height=\"17.379\" viewBox=\"0 0 17.379 17.379\"><defs></defs><g transform=\"translate(8.689 0) rotate(45)\"><g transform=\"translate(0 0)\"><g transform=\"translate(0 0)\"><path fill=\"#a9a9a9\" d=\"M11.162,5.017H7.272V1.127a1.128,1.128,0,0,0-2.255,0v3.89H1.128a1.127,1.127,0,1,0,0,2.254H5.017v3.89a1.128,1.128,0,0,0,2.255,0V7.271h3.89a1.127,1.127,0,1,0,0-2.254Z\"/></g></g></g></svg>\n                    </button>\n            </div>\n            <div class=\"footer\">\n                <div id=\"footer-left-text\"></div>\n                <div id=\"footer-center-icon\"></div>\n                <div id=\"footer-right-text\"></div>\n                <div class=\"footer-harvester-type\">\n\n                </div>\n                <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" class=\"footerSvg\" viewBox=\"0 0 312 52\"><defs><style>.a{fill:url(#a);}.b{clip-path:url(#b);}.c{fill:#1a2235;}.d{fill:#203c65;}.e{fill:url(#c);}</style><linearGradient id=\"a\" x1=\"0.5\" x2=\"0.5\" y2=\"1\" gradientUnits=\"objectBoundingBox\"><stop offset=\"0\" stop-color=\"#465465\"/><stop offset=\"1\" stop-color=\"#020a18\"/></linearGradient><clipPath id=\"b\"><path class=\"a\" d=\"M0,0H312a0,0,0,0,1,0,0V37a15,15,0,0,1-15,15H15A15,15,0,0,1,0,37V0A0,0,0,0,1,0,0Z\" transform=\"translate(0.081 466)\"/></clipPath><radialGradient id=\"c\" cx=\"0.506\" cy=\"-5.319\" r=\"9.299\" gradientTransform=\"translate(0.494) scale(0.023 1)\" gradientUnits=\"objectBoundingBox\"><stop offset=\"0\" stop-color=\"#ff00f7\" stop-opacity=\"0.502\"/><stop offset=\"1\" stop-color=\"#f93c3c\" stop-opacity=\"0\"/></radialGradient></defs><g class=\"b\" transform=\"translate(-0.081 -466)\"><rect class=\"c\" width=\"312\" height=\"52\" transform=\"translate(0.081 466)\"/><g transform=\"translate(-543.919 499.308)\"><path class=\"d\" d=\"M0,1195.588V1165.3H665.814l34.608,17.933,32.671-17.933H1400v30.283Z\" transform=\"translate(0 -1165.304)\"/><path class=\"e\" d=\"M0,1195.588V1165.3H665.814l34.608,17.933,32.671-17.933H1400v30.283Z\" transform=\"translate(0 -1165.304)\"/></g><g transform=\"translate(-493.919 499.308)\"><path class=\"d\" d=\"M0,1195.588V1165.3H618.372l32.142,17.933,30.343-17.933h619.388v30.283Z\" transform=\"translate(0 -1165.304)\"/><path class=\"e\" d=\"M0,1195.588V1165.3H618.372l32.142,17.933,30.343-17.933h619.388v30.283Z\" transform=\"translate(0 -1165.304)\"/></g></g></svg>\n            </div>\n        </div>\n\n        <div class=\"center\">\n            <div id=\"top\">\n            FormHere\n            </div>\n\n            <script>\n                (function () {\n                    const remote = require('electron').remote;\n                    function init() {\n                        document.getElementById(\"min-btn\").addEventListener(\"click\", function (e) {\n                            const window = remote.getCurrentWindow();\n                            window.minimize();\n                        });\n\n                        document.getElementById(\"close-btn\").addEventListener(\"click\", function (e) {\n                            const window = remote.getCurrentWindow();\n                            window.close();\n                        });\n                    }\n\n                    document.onreadystatechange = function () {\n                        if (document.readyState == \"complete\") {\n                            init();\n                        }\n                    };\n                })();\n                if (typeof module === 'object') {\n                    window.module = module; module = undefined;\n                }\n            </script>\n\n            <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>\n            <script>if (window.module) module = window.module;</script>\n\n            <script>\n                console.log(window.location.href)\n                const spinnerHTML = ' <div class=\"ring\"></div><span id=\"waiting\">Waiting</span>'\n\n                const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));\n\n                const urlParams = new URLSearchParams('?' + window.location.href.split('?')[1]);\n                const harvesterName = urlParams.get('name');\n                let count = urlParams.get('count');\n                window.harvesterId = urlParams.get('id');\n                const harvesterType = urlParams.get('type');\n                $('#footer-center-icon').html('<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30px\" height=\"60px\" viewBox=\"0 0 25.13 28.578\"><defs><style>.a{fill:#7c8dc4;}.b{fill:#6273aa;}.c{fill:#fff;}</style></defs><g transform=\"translate(-658.081 -645.806)\"><g transform=\"translate(658.081 645.806)\"><path fill=\"#70819e\"; d=\"M22.048,6.343a.276.276,0,0,0-.25-.232L19.5,5.94s-1.526-1.515-1.693-1.682a.694.694,0,0,0-.622-.079l-.854.264c-.51-1.466-1.409-2.814-2.991-2.814-.044,0-.089,0-.134,0A1.923,1.923,0,0,0,11.717.779c-3.686,0-5.447,4.607-6,6.949l-2.58.8c-.8.251-.825.276-.93,1.029C2.13,10.127.038,26.3.038,26.3l16.3,3.054,8.831-1.91s-3.1-20.96-3.12-21.1ZM15.429,4.721l-1.379.427c0-.1,0-.193,0-.3a6.765,6.765,0,0,0-.329-2.227C14.537,2.726,15.08,3.653,15.429,4.721ZM12.71,2.8a6.837,6.837,0,0,1,.374,2.483c0,.056,0,.108,0,.16l-2.848.882C10.784,4.212,11.812,3.19,12.71,2.8Zm-1.1-1.037a.832.832,0,0,1,.473.16c-1.181.556-2.447,1.956-2.982,4.751l-2.251.7c.626-2.132,2.113-5.608,4.761-5.608Z\" transform=\"translate(-0.038 -0.779)\"/><path class=\"b\" d=\"M171.185,37l-2.3-.171s-1.526-1.515-1.693-1.682a.418.418,0,0,0-.236-.108l-1.232,25.207,8.831-1.91s-3.1-20.96-3.12-21.1a.276.276,0,0,0-.25-.232\" transform=\"translate(-149.424 -31.671)\"/><path fill=\"white\" d=\"M48.667,100.674l-1.089,3.239a5.009,5.009,0,0,0-2.124-.509c-1.715,0-1.8,1.076-1.8,1.347,0,1.479,3.856,2.046,3.856,5.511,0,2.726-1.729,4.482-4.061,4.482A5.649,5.649,0,0,1,39.221,113l.749-2.475a5.356,5.356,0,0,0,2.712,1.263,1.094,1.094,0,0,0,1.141-1.1c0-1.93-3.164-2.016-3.164-5.187,0-2.669,1.916-5.252,5.782-5.252a4.757,4.757,0,0,1,2.226.427\" transform=\"translate(-35.366 -90.462)\"/></g></g></svg>')\n                \n                $('#footer-left-text').html(harvesterName);\n                $('#footer-right-text').html(harvesterType);\n\n                $('#count').html(count);\n            </script>\n        </div>\n    </div>\n</body>\n</html>";
  const _0x1eba5a = "<html>\n<head>\n\t<title>MEKaio Captcha Harvester</title>\n    <style type=\"text/css\">\n    *,\n*::after,\n        *::before {\n            -webkit-user-select: none;\n        }\n        body {\n            margin: auto;\n            font-weight: 500;\n            overflow: hidden;\n        }\n        \n        .captchaFooter {\n            background-color: black;\n            bottom: 0;\n            color: white;\n            height: 10vh;\n            width: 100%;\n            text-align: center;\n            padding: 10px 10px 80px;\n        }\n        \n        .center {\n            height: 84vh;\n        }\n        \n        .btn {\n            height: 40px !important;\n            width: 90px !important;\n            margin: 5px !important;\n        }\n        \n        #clearSession {\n            width: 120px !important;\n        }\n        \n        #title-bar {\n            height: 5% !important;\n            min-height: 30px !important;\n            background-color: #050a1d;\n            border-radius: 20px;\n        }\n        \n        #title-text {\n            /* height: 100% !important; */\n            /* min-height: 30px !important; */\n            text-align: center;\n            /* color: white; */\n            font-size: 14px;\n            padding-top: 2px;\n            line-height: 2;\n        }\n        \n        #bottom {\n            background-color: rgb(15, 23, 53);\n            height: 40%;\n            color: white;\n        }\n        \n        #title-bar-btns {\n            -webkit-app-region: no-drag;\n            position: absolute;\n            top: 0px;\n            right: 9px;\n            height: 5% !important;\n            min-height: 30px !important;\n        }\n        \n        #title-bar-btns button {\n            width: 30px;\n            height: 24px;\n            margin: 6px 3px;\n            background-color: #1c2235;\n            border-radius: 6px;\n            border: none;\n            color: grey;\n            font-size: 16px;\n            float: left;\n        }\n        \n        #title-bar-btns path:hover {\n            pointer-events: bounding-box;\n        }\n        \n        #title-bar-btns path:hover {\n            cursor: pointer;\n        }\n        \n        #title-bar-btns svg:hover {\n            cursor: pointer;\n        }\n        \n        #title-bar-btns button:hover {\n            cursor: pointer;\n            background: #293350;\n        }\n        \n        #title-bar-btns button:focus {\n            outline: none;\n        }\n        \n        .col-12 {\n            text-align: center !important;\n            margin: auto;\n            font-weight: bold;\n            font-size: 1.2em;\n        }\n        \n        @keyframes inner-spinner {\n            0% {\n                transform: rotate(0deg);\n            }\n            50% {\n                transform: rotate(180deg);\n            }\n            100% {\n                transform: rotate(360deg);\n            }\n        }\n        .inner-spinner div {\n            position: absolute;\n            animation: inner-spinner 1s linear infinite;\n            width: 160px;\n            height: 160px;\n            top: 20px;\n            left: 20px;\n            border-radius: 50%;\n            box-shadow: 0 4px 0 0 #df1c29;\n            transform-origin: 80px 82px;\n        }\n        #spinner {\n            margin: auto;\n            width: 200px;\n            height: 200px;\n            display: inline-block;\n            overflow: hidden;\n            background: rgb(13, 19, 43);\n        }\n        .inner-spinner {\n            width: 100%;\n            height: 100%;\n            position: relative;\n            transform: translateZ(0) scale(1);\n            backface-visibility: hidden;\n            transform-origin: 0 0; /* see note above */\n        }\n        .inner-spinner div {\n            box-sizing: content-box;\n        }\n        \n        #captcha-form {\n            margin: auto;\n        }\n        \n        #harvesterType,\n        #harvesterName,\n        #count {\n            color: #b7c7fa;\n            display: inline;\n            vertical-align: top;\n            font-size: 18px;\n            padding-left: 5px;\n        }\n        body {\n            margin: 0;\n            padding: 0;\n            font-family: 'Roboto', sans-serif;\n            font: Regular SF Pro Text;\n            color: #b7c7fa;\n            background: transparent !important;\n        }\n        .center {\n            display: flex;\n            text-align: center;\n            justify-content: center;\n            align-items: center;\n            min-height: 90vh;\n            position: relative;\n        }\n        .ring {\n            position: absolute;\n            top: 160px;\n            width: 150px;\n            height: 150px;\n            border-radius: 50%;\n            animation: ring 2s linear infinite;\n            left: 86px;\n        }\n        @keyframes ring {\n            0% {\n                transform: rotate(0deg);\n                box-shadow: 1px 5px 2px #95aaed;\n            }\n            50% {\n                transform: rotate(180deg);\n                box-shadow: 1px 5px 2px #ef109e;\n            }\n            100% {\n                transform: rotate(0360deg);\n                box-shadow: 1px 5px 2px #b7c7fa;\n            }\n        }\n        .ring::before {\n            position: absolute;\n            left: 0;\n            content: \"\";\n            top: 0;\n            height: 100%;\n            width: 100%;\n            border-radius: 50%;\n            box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);\n        }\n        #waiting {\n            color: #b7c7fa;\n            font-size: 20px;\n            text-transform: uppercase;\n            letter-spacing: 1px;\n            line-height: 200px;\n            animation: text 3s ease-in-out infinite;\n        }\n        @keyframes text {\n            50% {\n                color: #03070e;\n            }\n        }\n        .footerSvg {\n            width: 100%;\n            height: 54px;\n        }\n        \n        .footer {\n            position: absolute;\n            width: 100%;\n            bottom: 0px;\n        }\n        \n        .container {\n            background: #050a1d;\n            border-radius: 20px;\n            height: 100%;\n            width: 100%;\n        }\n        \n        #title-bar-left {\n            position: absolute;\n            top: 3px;\n            left: 6px;\n            font-size: 13px;\n            padding: 3px 10px;\n            border-radius: 12px;\n            background: #1D2230;\n        }\n        .top-bar-icon {\n            fill: #808080;\n        }\n        \n        #footer-left-text {\n            font-size: 13px;\n            width: 113px;\n            position: absolute;\n            left: 11px;\n            top: 10px;\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n        }\n        \n        #footer-right-text {\n            position: absolute;\n            right: 11px;\n            top: 10px;\n            font-size: 13px;\n        }\n        #footer-center-icon {\n            position: absolute;\n            left: 138px;\n            top: 12px;\n        }\n</style>\n</head>\n<body>\n    <div class=\"container\">\n        <div style=\"-webkit-app-region: drag\" id=\"title-bar\">\n                <div id=\"title-bar-left\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19.26\" height=\"19.26\" viewBox=\"0 0 19.26 19.26\"><g class=\"a\" transform=\"translate(0 -0.003)\"><ellipse class=\"b\" cx=\"7.667\" cy=\"8.929\" rx=\"7.667\" ry=\"8.929\" transform=\"translate(1.51 1.405)\"/><path fill=\"#677188\" d=\"M16.442,2.82a9.63,9.63,0,1,0,0,13.625A9.645,9.645,0,0,0,16.442,2.82ZM15.015,6.989l-5.62,5.62a.8.8,0,0,1-1.135,0L5.048,9.4A.8.8,0,0,1,6.183,8.262l2.644,2.644,5.053-5.053a.8.8,0,1,1,1.135,1.135Z\" transform=\"translate(0 0)\"/></g></svg>\n                    <div id=\"count\"></div>\n                </div>\n                <div id=\"title-text\">Harvester</div>\n            <div id=\"title-bar-btns\">\n                    <button id=\"min-btn\" type=\"button\" class=\"topBarBtn button\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12.289\" height=\"2.208\" viewBox=\"0 0 12.289 2.208\"><defs></defs><path fill=\"#a9a9a9\" d=\"M7.024,19H17.265a1.107,1.107,0,0,1,0,2.208H7.024a1.107,1.107,0,0,1,0-2.208Z\" transform=\"translate(-6 -19)\"/></svg>\n                    </button>\n                    <button id=\"close-btn\" type=\"button\" class=\"topBarBtn button\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17.379\" height=\"17.379\" viewBox=\"0 0 17.379 17.379\"><defs></defs><g transform=\"translate(8.689 0) rotate(45)\"><g transform=\"translate(0 0)\"><g transform=\"translate(0 0)\"><path fill=\"#a9a9a9\" d=\"M11.162,5.017H7.272V1.127a1.128,1.128,0,0,0-2.255,0v3.89H1.128a1.127,1.127,0,1,0,0,2.254H5.017v3.89a1.128,1.128,0,0,0,2.255,0V7.271h3.89a1.127,1.127,0,1,0,0-2.254Z\"/></g></g></g></svg>\n                    </button>\n            </div>\n            <div class=\"footer\">\n                    <div id=\"footer-left-text\"></div>\n                    <div id=\"footer-center-icon\"></div>\n                    <div id=\"footer-right-text\"></div>\n                    <div class=\"footer-harvester-type\">\n    \n                    </div>\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" class=\"footerSvg\" viewBox=\"0 0 312 52\"><defs><style>.a{fill:url(#a);}.b{clip-path:url(#b);}.c{fill:#1a2235;}.d{fill:#203c65;}.e{fill:url(#c);}</style><linearGradient id=\"a\" x1=\"0.5\" x2=\"0.5\" y2=\"1\" gradientUnits=\"objectBoundingBox\"><stop offset=\"0\" stop-color=\"#465465\"/><stop offset=\"1\" stop-color=\"#020a18\"/></linearGradient><clipPath id=\"b\"><path class=\"a\" d=\"M0,0H312a0,0,0,0,1,0,0V37a15,15,0,0,1-15,15H15A15,15,0,0,1,0,37V0A0,0,0,0,1,0,0Z\" transform=\"translate(0.081 466)\"/></clipPath><radialGradient id=\"c\" cx=\"0.506\" cy=\"-5.319\" r=\"9.299\" gradientTransform=\"translate(0.494) scale(0.023 1)\" gradientUnits=\"objectBoundingBox\"><stop offset=\"0\" stop-color=\"#ff00f7\" stop-opacity=\"0.502\"/><stop offset=\"1\" stop-color=\"#f93c3c\" stop-opacity=\"0\"/></radialGradient></defs><g class=\"b\" transform=\"translate(-0.081 -466)\"><rect class=\"c\" width=\"312\" height=\"52\" transform=\"translate(0.081 466)\"/><g transform=\"translate(-543.919 499.308)\"><path class=\"d\" d=\"M0,1195.588V1165.3H665.814l34.608,17.933,32.671-17.933H1400v30.283Z\" transform=\"translate(0 -1165.304)\"/><path class=\"e\" d=\"M0,1195.588V1165.3H665.814l34.608,17.933,32.671-17.933H1400v30.283Z\" transform=\"translate(0 -1165.304)\"/></g><g transform=\"translate(-493.919 499.308)\"><path class=\"d\" d=\"M0,1195.588V1165.3H618.372l32.142,17.933,30.343-17.933h619.388v30.283Z\" transform=\"translate(0 -1165.304)\"/><path class=\"e\" d=\"M0,1195.588V1165.3H618.372l32.142,17.933,30.343-17.933h619.388v30.283Z\" transform=\"translate(0 -1165.304)\"/></g></g></svg>\n                </div>\n        </div>\n<div class=\"center\">\n    <div id=\"top\"></div>\n    <script>\n        (function () {\n            const remote = require('electron').remote;\n            function init() {\n                document.getElementById(\"min-btn\").addEventListener(\"click\", function (e) {\n                    const window = remote.getCurrentWindow();\n                    window.minimize();\n                });\n                document.getElementById(\"close-btn\").addEventListener(\"click\", function (e) {\n                    const window = remote.getCurrentWindow();\n                    window.close();\n                });\n            }\n            document.onreadystatechange = function () {\n                if (document.readyState == \"complete\") {\n                    init();\n                }\n            };\n        })();\n        if (typeof module === 'object') {\n            window.module = module; module = undefined;\n        }\n    </script>\n\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>\n    <script>if (window.module) module = window.module;</script>\n\n    <script>\n        console.log(window.location.href)\n        const {ipcRenderer} = require(\"electron\");\n        const spinnerHTML = '<div class=\"ring\"></div><span id=\"waiting\">Waiting</span>'\n\n        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));\n\n        const waitForCaptchaLoad = async () => {\n            if (window.grecaptcha != null && window.grecaptcha.enterprise.render != null) {\n                return;\n            } else {\n                await sleep(50);\n                return await waitForCaptchaLoad();\n            }\n        }\n\n        window.onloadCallback =  async() => {\n            console.log('onloadCallback')\n            grecaptcha.enterprise.ready(function() {\n                grecaptcha.enterprise.execute(window.siteKey, {action: window.action}).then(function(token) {\n                    count ++;\n                    $('#count').html(count);\n                    ipcRenderer.send('sendCaptcha', {\n                        token: token,\n                        timestamp: Date.now(),\n                        id: window.harvesterId,\n                        siteOrigin: window.siteOrigin,\n                        taskId: window.taskId,\n                        groupId: window.groupId\n                    });\n                });\n            });\n        };\n\n        ipcRenderer.on('cancelCaptcha', async (event) => {\n            $('#count').html(count);\n            $('#top').html(spinnerHTML);\n        });\n\n        ipcRenderer.on('requestCaptcha', async (event, siteOrigin, siteKey, action, taskId, groupId) => {\n            if (!window.grecaptcha) {\n                const script = document.createElement(\"script\");\n                script.src = 'https://www.google.com/recaptcha/enterprise.js?render=' + siteKey;\n                document.body.appendChild(script);\n                await waitForCaptchaLoad();\n            } else if (window.siteKey != siteKey) {\n                const filename = 'https://www.google.com/recaptcha/enterprise.js';\n                const filename2 = 'https://www.gstatic.com/recaptcha/releases/';\n                var tags = document.getElementsByTagName('script');\n                for (var i = tags.length; i >= 0; i--) { \n                    if (tags[i] && tags[i].getAttribute('src') != null && (tags[i].getAttribute('src').indexOf(filename) != -1 || tags[i].getAttribute('src').indexOf(filename2) != -1))\n                        tags[i].parentNode.removeChild(tags[i]);\n                }\n    \n                const elem = document.querySelector('.grecaptcha-badge');\n                if (elem) {\n                    elem.parentNode.removeChild(elem);\n                }\n\n                // const iframe = document.querySelector('iframe');\n                // if (iframe && iframe.parentNode.tagName != 'BODY') {\n                //     iframe.parentNode.parentNode.removeChild(iframe.parentNode);\n                // }\n                delete window.grecaptcha;\n\n                const script = document.createElement(\"script\");\n                script.src = 'https://www.google.com/recaptcha/enterprise.js?render=' + siteKey;\n                document.body.appendChild(script);\n                await waitForCaptchaLoad();\n            }\n            \n            window.siteOrigin = siteOrigin;\n            window.siteKey = siteKey;\n            window.action = action;\n            window.taskId = taskId;\n            window.groupId = groupId;\n            window.onloadCallback();\n        });\n\n        const urlParams = new URLSearchParams('?' + window.location.href.split('?')[1]);\n        window.siteKey = urlParams.get('siteKey');\n        window.action = urlParams.get('action');\n        const harvesterName = urlParams.get('name');\n        let count = urlParams.get('count');\n        window.harvesterId = urlParams.get('id');\n        const harvesterType = urlParams.get('type');\n        $('#footer-left-text').html(harvesterName);\n        let svg = '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"46.792\" height=\"13\" viewBox=\"0 0 46.792 13\"><defs><style>.a{fill:#7c8dc4;}</style></defs><path d=\"M644.316,598.078v3.4h4.808c.4,0,.47.076.47.47v1.135c0,.378-.083.462-.454.462H642.6c-.3,0-.4-.1-.4-.407V590.972c0-.319.1-.422.412-.422h6.568c.31,0,.414.108.414.421v1.243c0,.308-.088.4-.4.4H644.32v3.4h4.438c.356,0,.438.085.439.448v1.216c0,.31-.092.4-.4.4h-4.481Z\" transform=\"translate(-622.52 -590.544)\"/><path class=\"a\" d=\"M470.953,596.011H475.4c.324,0,.415.089.415.413v1.27c0,.292-.094.383-.389.383H470.95v3.4h4.809c.378,0,.456.077.456.456,0,.415,0,.829,0,1.243a.32.32,0,0,1-.361.366h-6.677c-.254,0-.347-.113-.347-.4V590.977c0-.341.086-.427.429-.427h6.515c.346,0,.441.1.441.447v1.216c0,.309-.088.4-.4.4h-4.856Z\" transform=\"translate(-458.523 -590.545)\"/><path class=\"a\" d=\"M819.084,592.637h-4.1c-.438,0-.5-.065-.5-.492v-1.216a.33.33,0,0,1,.375-.378h6.35c.241,0,.371.108.367.355a.443.443,0,0,0,0,.054,3.6,3.6,0,0,1-.559,2.353c-.487.788-.878,1.63-1.31,2.45-.036.069-.067.14-.118.25h.865c.261,0,.379.116.382.373,0,.45,0,.9,0,1.352a.306.306,0,0,1-.351.343c-.586,0-1.171-.006-1.756.006a.362.362,0,0,0-.276.139c-.557,1.038-1.1,2.084-1.645,3.128a.572.572,0,0,0-.023.108h4.618c.367,0,.441.075.441.441v1.27c0,.264-.108.371-.378.371h-6.836c-.28,0-.378-.108-.382-.392a.25.25,0,0,0,0-.027,3.675,3.675,0,0,1,.606-2.474c.458-.741.832-1.533,1.243-2.3.041-.076.074-.156.127-.267h-.836a.315.315,0,0,1-.361-.361v-1.324c0-.27.118-.378.4-.382.559,0,1.117,0,1.676-.005a.341.341,0,0,0,.262-.116C817.93,594.824,818.5,593.751,819.084,592.637Z\" transform=\"translate(-785.232 -590.545)\"/><path class=\"a\" d=\"M988.437,595.228c.14-.3.27-.576.4-.851.552-1.2,1.108-2.4,1.651-3.606a.463.463,0,0,1,.494-.32c.487.015.973,0,1.46,0,.283,0,.4.183.28.441q-1.562,3.438-3.121,6.878a1.173,1.173,0,0,0-.1.464c-.008,1.594,0,3.19,0,4.783,0,.359-.067.424-.426.425h-1.216c-.37,0-.445-.074-.445-.433q0-2.405-.005-4.812a1.242,1.242,0,0,0-.108-.49q-1.531-3.378-3.075-6.751c-.168-.368-.076-.506.337-.506.442,0,.884.015,1.324-.005a.524.524,0,0,1,.577.363c.606,1.383,1.231,2.757,1.85,4.137C988.338,595.032,988.38,595.111,988.437,595.228Z\" transform=\"translate(-945.969 -590.45)\"/><path class=\"a\" d=\"M282.484,595.276l1.362-2.964c.236-.515.478-1.027.706-1.546a.415.415,0,0,1,.438-.279c.477.01.955,0,1.432,0,.37,0,.471.154.324.487q-1.546,3.4-3.09,6.8a1.3,1.3,0,0,0-.111.516c-.009,1.586,0,3.171-.005,4.758,0,.356-.073.433-.422.433h-1.243c-.347,0-.422-.077-.422-.433,0-1.6,0-3.207,0-4.812a1.182,1.182,0,0,0-.1-.465q-1.549-3.415-3.111-6.823c-.136-.3-.03-.461.3-.461.487,0,.973.007,1.46,0a.447.447,0,0,1,.475.306C281.13,592.272,281.8,593.747,282.484,595.276Z\" transform=\"translate(-278.183 -590.485)\"/></svg>';\n        if (window.location.href.includes('finishline')) {\n            svg = '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"70\" height=\"12.398\" viewBox=\"0 0 85.099 12.398\"><defs><style>.jdA{fill:#b7c7fa;}.jdB{fill:#505b7d;}</style></defs><g transform=\"translate(-44.457 -134.395)\"><g transform=\"translate(95.901 134.395)\"><path class=\"jdA\" d=\"M72.1,146.69l2.11-12.008h3.253L75.353,146.69Z\" transform=\"translate(-64.014 -134.349)\"/><path class=\"jdA\" d=\"M85.825,134.527H82.571l-1.027,5.74-2.4-4.821a1.576,1.576,0,0,0-1.541-.918H76.293l-2.169,12.34h3.31l1.027-5.854,2.4,4.936a1.73,1.73,0,0,0,1.541.918h1.256Z\" transform=\"translate(-61.7 -134.527)\"/><path class=\"jdA\" d=\"M5.358,1.623h0l.571-3.042H-2.518l-2.169,12.4H3.7l.571-3.1H-.863L-.52,5.985h4l.571-3.1H-.007L.222,1.623Z\" transform=\"translate(27.726 1.42)\"/><path class=\"jdA\" d=\"M1.847,4.96h0L3.5-4.338H.248L-1.578,5.993A1.717,1.717,0,0,0,.077,8.059H5.385L5.9,4.96Z\" transform=\"translate(1.615 4.339)\"/></g><g transform=\"translate(44.457 134.395)\"><path class=\"jdB\" d=\"M48.745,146.69l2.11-12.008h3.309L52,146.69Z\" transform=\"translate(-39.271 -134.35)\"/><path class=\"jdB\" d=\"M55.722,146.69l2.11-12.008h3.31L59.032,146.69Z\" transform=\"translate(-31.294 -134.35)\"/><path class=\"jdB\" d=\"M6.241,0H2.988L1.961,5.74-.379.918A1.712,1.712,0,0,0-1.978,0H-3.233L-5.459,12.34h3.31l1.027-5.854,2.4,4.936a1.73,1.73,0,0,0,1.541.918H4.072Z\" transform=\"translate(19.271 0)\"/><path class=\"jdB\" d=\"M5.328,1.623h0L5.9-1.419H.362A3.381,3.381,0,0,0-3.005,1.393L-4.66,10.978h3.253l.856-4.994H3.5l.514-3.1h-4L.248,1.623Z\" transform=\"translate(4.66 1.419)\"/><path class=\"jdB\" d=\"M4.384,0h0L3.471,4.936H.731L1.645,0h-3.31L-3.835,12.34h3.31L.218,7.978h2.74l-.8,4.362h3.31L7.637,0Z\" transform=\"translate(41.276 0)\"/><path class=\"jdB\" d=\"M2.831,1.623H6.713l.514-3.042H1.576A2.4,2.4,0,0,0-.65,2.024l2.74,5.625c.057.115,0,.23-.114.23H-1.963l-.514,3.1H3.231A2.485,2.485,0,0,0,5.457,7.42L2.717,1.795c-.057-.057,0-.172.114-.172\" transform=\"translate(31.3 1.419)\"/></g></g></svg>';\n        } else if (window.location.href.includes('jdsports')) {\n            svg = '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"26\" viewBox=\"0 0 35.486 35.485\"><defs><style>.fnA{fill:#424b6f;}.fnB{fill:#fff;}</style></defs><g transform=\"translate(-25.035 -25.072)\"><path class=\"fnA\" d=\"M60.521,42.815A17.743,17.743,0,1,1,42.777,25.072,17.744,17.744,0,0,1,60.521,42.815Z\" transform=\"translate(0 0)\"/><path class=\"fnB\" d=\"M70.135,70.608c-1.009,5.216-6.377,4.406-6.377,4.406l1.466-8.853S71.182,65.195,70.135,70.608Zm3.547-3.777a6.588,6.588,0,0,0-6.1-4.25H62.126L59.474,78.637h5.46a9.233,9.233,0,0,0,9.038-8,7.654,7.654,0,0,0-.289-3.8ZM57.4,62.558c-.022.242-1.457,11.681-6.878,12.433-.1.015-.191.015-.847.052l-.508,3.719s.6.011.855.025c1.172.064,4.791-.093,7.685-4.9,1.465-2.436,2.705-6.044,3.491-11.33Z\" transform=\"translate(-18.42 -28.613)\"/></g></svg>';\n        }\n        $('#footer-center-icon').html(svg)\n        $('#footer-right-text').html(harvesterType);\n        $('#count').html(count);\n        $('#top').html(spinnerHTML);\n    \n    </script>\n</div>\n</div>\n</body>\n</html>";

  const _0x3d92c7 = arg_1 + "/GeetestPictures";

  async function _0xcd3d47(_0x21a4de, _0x83fbf1) {
    const _0x34233a = _0x8044f7;

    try {
      return !_0xd3e51f.existsSync(_0x3d92c7) && _0xd3e51f.mkdirSync(_0x3d92c7), _0xd3e51f.promises.writeFile(_0x3d92c7 + '/' + _0x21a4de, _0x83fbf1, "base64");
    } catch (err) {
      console.log(err);
    }
  }

  async function _0x1056fb(_0x474ef7) {
    const _0x1bc67b = _0x8044f7;

    try {
      let images = await _0x474ef7.$$eval('.geetest_canvas_img canvas', canvases => canvases.map(canvas => canvas.toDataURL().replace(/^data:image\/png;base64,/, '')));
      await _0xcd3d47('puzzle.png', images[1]);
      let srcPuzzleImage = await _0x459147.read(`${_0x3d92c7}/puzzle.png`);

      let srcPuzzle = _0x4376a2.cv.matFromImageData(srcPuzzleImage.bitmap);

      let dstPuzzle = new _0x4376a2.cv.Mat();

      _0x4376a2.cv.cvtColor(srcPuzzle, srcPuzzle, _0x4376a2.cv.COLOR_BGR2GRAY);

      _0x4376a2.cv.threshold(srcPuzzle, dstPuzzle, 127, 255, _0x4376a2.cv.THRESH_BINARY);

      let kernel = _0x4376a2.cv.Mat.ones(5, 5, _0x4376a2.cv.CV_8UC1);

      var arg_29 = -1;
      var arg_30 = -1;
      let anchor = new _0x4376a2.cv.Point(arg_29, arg_30);

      _0x4376a2.cv.dilate(dstPuzzle, dstPuzzle, kernel, anchor, 1);

      _0x4376a2.cv.erode(dstPuzzle, dstPuzzle, kernel, anchor, 1);

      let contours = new _0x4376a2.cv.MatVector();
      let hierarchy = new _0x4376a2.cv.Mat();

      _0x4376a2.cv.findContours(dstPuzzle, contours, hierarchy, _0x4376a2.cv.RETR_EXTERNAL, _0x4376a2.cv.CHAIN_APPROX_SIMPLE);

      let contour = contours.get(0);

      let moment = _0x4376a2.cv.moments(contour);

      return [Math.floor(moment.m10 / moment.m00), Math.floor(moment.m01 / moment.m00)];
    } catch (err) {
    }
  }

  async function _0xe17235(_0x4e7f52) {
    const _0x33c410 = _0x8044f7;

    try {
      await _0x4e7f52.waitFor(300);
      var arg_31 = -1;
      var arg_32 = -1;

      let _0x29953a = await _0x459147.read(_0x3d92c7 + "/diff.png");

      let _0x42eb75 = _0x4376a2.cv.matFromImageData(_0x29953a.bitmap);

      let _0x5f5994 = new _0x4376a2.cv.Mat();

      let _0x1e2183 = _0x4376a2.cv.Mat.ones(5, 5, _0x4376a2.cv.CV_8UC1);

      let _0x3bf541 = new _0x4376a2.cv.Point(arg_31, arg_32);

      _0x4376a2.cv.threshold(_0x42eb75, _0x5f5994, 127, 255, _0x4376a2.cv.THRESH_BINARY);

      _0x4376a2.cv.erode(_0x5f5994, _0x5f5994, _0x1e2183, _0x3bf541, 1);

      _0x4376a2.cv.dilate(_0x5f5994, _0x5f5994, _0x1e2183, _0x3bf541, 1);

      _0x4376a2.cv.erode(_0x5f5994, _0x5f5994, _0x1e2183, _0x3bf541, 1);

      _0x4376a2.cv.dilate(_0x5f5994, _0x5f5994, _0x1e2183, _0x3bf541, 1);

      _0x4376a2.cv.cvtColor(_0x5f5994, _0x5f5994, _0x4376a2.cv.COLOR_BGR2GRAY);

      _0x4376a2.cv.threshold(_0x5f5994, _0x5f5994, 150, 255, _0x4376a2.cv.THRESH_BINARY_INV);

      let _0x58109e = new _0x4376a2.cv.MatVector();

      let _0x809cd9 = new _0x4376a2.cv.Mat();

      _0x4376a2.cv.findContours(_0x5f5994, _0x58109e, _0x809cd9, _0x4376a2.cv.RETR_EXTERNAL, _0x4376a2.cv.CHAIN_APPROX_SIMPLE);

      let _0x5b7648 = _0x58109e.get(0);

      let _0x55539b = _0x4376a2.cv.moments(_0x5b7648);

      return [Math.floor(_0x55539b.m10 / _0x55539b.m00), Math.floor(_0x55539b.m01 / _0x55539b.m00)];
    } catch (err) {
      return console.log(err), [null, null];
    }
  }

  async function _0x1baf04(_0x250007) {
    const _0x50cebf = _0x8044f7;

    try {
      await _0x250007.waitForSelector('[aria-label="Click to verify"]');
      await _0x250007.click('[aria-label="Click to verify"]');
      await _0x250007.waitForSelector('.geetest_canvas_img canvas', {
        visible: true
      });
      await _0x250007.waitFor(1000);
      let images = await _0x250007.$$eval('.geetest_canvas_img canvas', canvases => {
        return canvases.map(canvas => canvas.toDataURL().replace(/^data:image\/png;base64,/, ''));
      });
      await _0xcd3d47('captcha.png', images[0]);
      await _0xcd3d47('original.png', images[2]);
    } catch (err) {
      console.log(err);
    }
  }

  async function _0x443165() {
    const _0x3d6d69 = _0x8044f7;

    try {
      const _0x497a95 = await _0x459147.read(_0x3d92c7 + "/original.png");

      const _0x6d2c16 = await _0x459147.read(_0x3d92c7 + "/captcha.png");

      const {
        width: _0x28ee30,
        height: _0x5cbc9b
      } = _0x497a95.bitmap;

      const _0xdac83e = new _0x459147(_0x28ee30, _0x5cbc9b);

      _0x41b00e(_0x497a95.bitmap.data, _0x6d2c16.bitmap.data, _0xdac83e.bitmap.data, _0x28ee30, _0x5cbc9b, _0x1c7658);

      var arg_33 = _0x3d92c7 + "/diff.png";

      _0xdac83e.write(arg_33);
    } catch (err) {
      console.log(err);
    }
  }

  function _0x1a933c() {
    const _0x1bac44 = _0x8044f7;
    return "(() => {\n        return new Promise(async (resolve, reject) => {\n            let sleep = (ms) => {\n                return new Promise(resolve => setTimeout(resolve, ms));\n            }\n\n            try {\n                while(true) {\n                    if (geetestResponse) {\n                        resolve({\n                            geetestResponse: geetestResponse\n                        });\n                    }\n                    await sleep(50);\n                }\t\n            } catch(e) {\n                reject(null)\n            }\n        })\n    })();";
  }

  var arg_2 = (_0x5b1a41.app || _0x5b1a41.remote.app).getPath("userData");

  const _0x20de35 = arg_2 + "/GeetestPictures";

  const _0x19d8f5 = require("puppeteer-extra");

  const _0x145bdd = require("chrome-paths");

  class _0x29fd2e {
    constructor(_0x21d782) {
      const _0x2f6c81 = _0x8044f7;

      const _0x284edb = "2|18|19|8|3|11|12|21|0|9|1|7|16|20|17|22|13|15|4|5|10|14|6|23".split('|');

      let _0x483c2f = 0;
      this.name = _0x21d782.captchaName;
      this.proxy = _0x21d782.captchaProxy;
      this.id = _0x21d782.captchaId;
      this.taskId = null;
      this.type = _0x21d782.captchaType;
      this.opened = _0x21d782.opened;
      this.browser = null;
      this.idle = !![];
      this.youtubeBrowser = null;
      this.youtubeBrowserPage = null;
      this.hCaptchaBrowser = null;
      this.count = 0;
      this.v3Html = _0x1eba5a;
      this.checkboxHtml = _0x3851fb;
      this.invisibleHTML = _0x28c13c;
      this.datadomeHTML = _0x343ecf;
      this.geetestHTML = _0x4886a5;
      this.checkpointHTML = _0x287474;
      this.captchaHTM = null;
      this.ready = ![];
      this.harvesterURL = null;
      this.currentHCapQuestion = null;
      this.curCheckpointHTML = null;
      this.curCheckpointURL = null;
    }

    async updateHarvester(_0x592b51) {
      const _0x2c9c0d = _0x8044f7;

      const _0x4f1cc7 = "0|2|5|3|1|4".split('|');

      let _0x48f7d8 = 0;
      this.name = _0x592b51.captchaName;
      this.proxy = _0x592b51.captchaProxy;
      this.id = _0x592b51.captchaId;
      this.type = _0x592b51.captchaType;
      this.opened = _0x592b51.opened;
      await this.addProxy(this.proxy);
    }

    async addProxy(_0x34dc05) {
      const _0x7456c0 = _0x8044f7;

      try {
        if (_0x34dc05) {
          _0x34dc05 = _0x34dc05.trim();
        } else {
          _0x34dc05 = '';
        }

        if (_0x34dc05.includes('@')) {
          let _0x5d8341 = _0x34dc05.split('@');

          _0x34dc05 = _0x5d8341[1] + ':' + _0x5d8341[0].split('//')[1];
        }

        this.proxy = _0x34dc05 && _0x34dc05.replace("http://", '');
        var arg_36 = this.proxy.trim();

        if (arg_36 != '') {
          var arg_37 = _0x49a7a9[0] + ':';

          let _0x49a7a9 = this.proxy.split(':');

          let _0x4eaeea = arg_37 + _0x49a7a9[1];

          global.proxyInfo[_0x4eaeea] = _0x49a7a9;
          await _0x2b80d5.session.fromPartition("persist:" + this.id).setProxy({
            'proxyRules': _0x4eaeea
          });
        } else {
          await _0x2b80d5.session.fromPartition("persist:" + this.id).setProxy({
            'proxyRules': null
          });
        }
      } catch (err) {
        console.log(err);
      }
    }

    async loginToYoutube() {
      const _0x3a4262 = _0x8044f7;

      if (this.youtubeBrowser == null || this.youtubeBrowser.isDestroyed()) {
        await this.addProxy(this.proxy);
        this.youtubeBrowser = new _0x2b80d5.BrowserWindow(arg_42);
        this.youtubeBrowser.webContents.on("login", (_0x14c0dc, _0x50510d, _0x1ef023, _0x45b5c8) => {
          const _0x2a0d59 = _0x3a4262;

          _0x14c0dc.preventDefault();

          if (_0x1ef023.isProxy) {
            let _0xce06a = this.proxy.split(':');

            var arg_44 = _0xce06a[2] || '';
            var arg_45 = _0xce06a[3] || '';

            _0x45b5c8(arg_44, arg_45);
          }
        });
        this.youtubeBrowser.loadURL("https://www.youtube.com/", arg_43);
        this.youtubeBrowser.once("ready-to-show", () => {
          const _0x5ebc74 = _0x3a4262;
          this.youtubeBrowser.show();
        });
        this.youtubeBrowser.once("closed", () => {
          const _0x4c2080 = _0x3a4262;
          this.youtubeBrowser.destroy();
        });
      } else {
        this.youtubeBrowser.webContents.focus();
      }
    }

    async openHCaptchaWindow() {
      const _0x2d7ad7 = _0x8044f7;

      if (this.hCaptchaBrowser == null) {
        await this.addProxy(this.proxy);
        this.hCaptchaBrowser = new _0x2b80d5.BrowserWindow(arg_48);
        this.hCaptchaBrowser.webContents.on("login", (_0x5da576, _0x120aff, _0x9bb4fc, _0x2e8853) => {
          const _0x54c539 = _0x2d7ad7;

          _0x5da576.preventDefault();

          if (_0x9bb4fc.isProxy) {
            let _0x186779 = this.proxy.split(':');

            var arg_50 = _0x186779[2] || '';
            var arg_51 = _0x186779[3] || '';

            _0x2e8853(arg_50, arg_51);
          }
        });
        this.hCaptchaBrowser.loadURL("https://dashboard.hcaptcha.com/welcome_accessibility", arg_49);
        this.hCaptchaBrowser.once("ready-to-show", () => {
          const _0x808465 = _0x2d7ad7;
          this.hCaptchaBrowser.show();
        });
        this.hCaptchaBrowser.once("closed", () => {
          const _0x2a0479 = _0x2d7ad7;
          this.hCaptchaBrowser = null;
        });
      } else {
        this.hCaptchaBrowser.webContents.focus();
      }
    }

    async clearSession() {
      const _0x493525 = _0x8044f7;

      try {
        await _0x2b80d5.session.fromPartition("persist:" + this.id).clearStorageData([]);
        await _0x2b80d5.session.fromPartition("persist:" + this.id).clearCache();
        await _0x2b80d5.session.fromPartition("persist:" + this.id).flushStorageData();
      } catch (err) {
        console.log(err);
      }
    }

    async openHarvester(_0x2672fc) {
      const _0x462694 = _0x8044f7;

      try {
        if (this.browser == null || !this.ready) {
          this.count = 0;

          if (this.browser) {
            await this.browser.close();
          }

          this.browser = new _0x2b80d5.BrowserWindow(_0x1f722b);

          var arg_56 = function (_0x11a37f) {
            const _0x70c350 = _0x462694;

            _0x11a37f.preventDefault();
          };

          this.browser.on("page-title-updated", arg_56);
          this.name = _0x2672fc.captchaName;
          this.proxy = _0x2672fc.captchaProxy;
          this.id = _0x2672fc.captchaId;
          this.type = _0x2672fc.captchaType;
          this.idle = !![];
          this.browser.webContents.on("login", (_0x511e3e, _0x7f45e9, _0x16fc80, _0x5d972e) => {
            const _0x3794a8 = _0x462694;

            try {
              _0x511e3e.preventDefault();

              if (_0x16fc80.isProxy) {
                let _0x2d1af6 = this.proxy.split(':');

                var arg_57 = _0x2d1af6[2] || '';
                var arg_58 = _0x2d1af6[3] || '';

                _0x5d972e(arg_57, arg_58);
              }
            } catch (err) {
              console.log(err);
            }
          });
          await this.addProxy(this.proxy);

          let _0x313641;

          if (this.type == _0x4802da.YEEZYSUPPLY || this.type == _0x4802da.YEEZYSUPPLY_ADVANCE || this.type == _0x4802da.FINISHLINE || this.type == _0x4802da.JDSPORTS) {
            let _0x26a97f = "www.yeezysupply.com";
            _0x26a97f = _0x172aa3.vTnbA;
            _0x313641 = "http://" + _0x26a97f + "/#/captchaHarvester?id=" + this.id + "&type=" + this.type + "&name=" + this.name + "&count=" + this.count;
            this.captchaHTM = this.v3Html;
          } else {
            _0x313641 = "http://checkout.shopify.com/" + (this.type == _0x4802da.SHOPIFY_CHECKPOINT ? "checkpoint" : "checkout") + "/#/captchaHarvester?id=" + this.id + "&type=" + this.type + "&name=" + this.name + "&count=" + this.count;
            this.captchaHTM = this.checkboxHtml;
          }

          this.harvesterURL = _0x313641;
          this.browser.setMenu(null);
          this.browser.once("closed", () => {
            const _0x41af32 = _0x462694;
            this.idle = !![];
            this.browser = null;
            this.ready = ![];
          });
          this.browser.webContents.session.protocol.interceptBufferProtocol("http", (_0xaf4f2c, _0x5d2e88) => {
            const _0x12c923 = _0x462694;

            if (_0xaf4f2c.url.includes(_0x2ef119.MeSxB)) {
              _0x5d2e88(arg_83);
            }
          });
          this.browser.webContents.on("did-finish-load", async _0x1bb61a => {
            const _0x29f9b3 = _0x462694;

            let _0x11d9a0 = _0x1bb61a.sender.getURL && _0x1bb61a.sender.getURL() || _0x1bb61a.sender.history[_0x1bb61a.sender.currentIndex];

            if (_0x11d9a0.startsWith("http")) {
              if (_0x11d9a0.includes("google") && !_0x11d9a0.includes("/search?q=")) {
                await _0x45a98b(2000);
                var arg_84 = "window.location.href = 'https://www.google.com/search?q=google+map+" + _0x2bda7f(7) + "&oq=google+map+" + _0x2bda7f(7) + '\x27';
                this.browser.webContents.executeJavaScript(arg_84);
              } else {
                if (_0x11d9a0.includes("/search?q=")) {
                  const _0x1a5fde = "4|3|2|1|0".split('|');

                  let _0x4ffe95 = 0;
                  await _0x45a98b(2000);
                  var arg_86 = "window.location.href = '" + _0x313641 + '\x27';
                  this.browser.webContents.executeJavaScript(arg_86);
                  await _0x45a98b(500);
                  this.browser.show();
                  this.ready = !![];
                }
              }
            }
          });
          this.browser.loadURL("https://www.google.com");
        } else {
          this.browser.focus();
        }
      } catch (err) {
        console.log(err);
      }
    }

    generateHarvesterId(_0x24b16d) {
      const _0x212e6e = _0x8044f7;
      return "CP-" + Math.random().toString(36).substring(2, 15) + '-' + _0x24b16d;
    }

    async requestCaptcha(_0x141948) {
      const _0x2424aa = _0x8044f7;

      try {
        if (this.browser != null && this.ready) {
          this.idle = ![];
          this.taskId = _0x141948.taskId;

          let _0x55ca40 = await _0x2b80d5.session.fromPartition("persist:" + this.id).cookies.get({});

          for (let _0x4c9998 of _0x55ca40) {
            if (_0x4c9998.domain && (_0x4c9998.domain.includes("google") || _0x4c9998.domain.includes("youtube") || _0x4c9998.domain.includes("hcaptcha"))) {
              continue;
            }

            if (_0x4c9998.url && (_0x4c9998.url.includes("google") || _0x4c9998.url.includes("youtube") || _0x4c9998.url.includes("hcaptcha"))) {
              continue;
            }

            await _0x2b80d5.session.fromPartition("persist:" + this.id).cookies.remove(_0x4c9998.url || "https://" + _0x4c9998.domain || _0x141948.siteOrigin, _0x4c9998.name);
          }

          if (this.type == _0x4802da.SHOPIFY_CHECKPOINT || this.type == _0x4802da.SHOPIFY_CHECKOUT) {
            await this.addProxy(_0x141948.proxy);
            this.browser.focus();
          } else {
          }

          this.browser.webContents.send("requestCaptcha", _0x141948.siteOrigin, _0x141948.siteKey, _0x141948.s_action, _0x141948.taskId, _0x141948.groupId);
        } else {
          setTimeout(() => {
            const _0x41006b = _0x2424aa;
            this.requestCaptcha(_0x141948);
          }, 100);
        }
      } catch (err) {
        console.log(err);
      }
    }

    async requestGoogleSession() {
      const _0xa7ae78 = _0x8044f7;

      if (this.browser != null && this.ready) {
        return await _0x2b80d5.session.fromPartition("persist:" + this.id).cookies.get({});
      } else {
        setTimeout(() => {
          const _0x579c98 = _0xa7ae78;
          this.requestGoogleSession(requestObj);
        }, 500);
      }
    }

    cancelCaptcha() {
      const _0x56726e = _0x8044f7;

      try {
        if (this.browser != null && this.ready) {
          if (this.type == _0x4802da.FOOTSITE_DATADOME && this.page) {
            var arg_131 = "http://geo.captcha-delivery.com/captchaHarvester?id=" + this.id + "&type=" + this.type + "&name=" + this.name + "&count=" + this.count;
            this.page.goto(arg_131);
          } else {
            this.browser.webContents.send("cancelCaptcha");
          }

          this.taskId = null;
          this.idle = !![];
        }
      } catch (err) {
        console.log(err);
      }
    }

  }

  var arg_3 = (_0x5b1a41.app || _0x5b1a41.remote.app).getPath("userData");

  const {
    net: _0x325c8f
  } = _0x5b1a41;

  const _0x525073 = async function (_0x5cabe5, _0x3241d2 = !![], _0x12fa71 = null) {
    const _0x3ce079 = _0x8044f7;
    return new Promise((_0x1b7b70, _0xaa30fb) => {
      const _0x43f9fb = _0x3ce079;
      let _0x5410ee = null;

      try {
        if (!_0x12fa71) {
          _0x12fa71 = this.session;
        }

        var arg_132 = JSON.stringify(_0x5cabe5.headers);

        let _0x3f6b75 = JSON.parse(arg_132);

        _0x5cabe5.headers = {};
        _0x5cabe5 = {
          ..._0x335b0f,
          ..._0x5cabe5,
          'url': _0x5cabe5.url || _0x5cabe5.uri,
          'useSessionCookies': _0x3241d2,
          'session': _0x12fa71
        };
        _0x5410ee = _0x325c8f.request(_0x5cabe5);
        const _0x36a0bc = this.proxyUsername;
        const _0x51786e = this.proxyPassword;

        for (let _0xe5f0f0 of Object.keys(_0x3f6b75)) {
          _0x5410ee.setHeader(_0xe5f0f0, _0x3f6b75[_0xe5f0f0]);
        }

        let _0x132bf0 = _0x5cabe5.url;
        let _0x5bdb99 = '';

        if (_0x5cabe5.followRedirect === undefined && _0x5cabe5.method !== _0xbd0206.pTqrn) {
          _0x5cabe5.followRedirect = ![];
        }

        if (_0x5cabe5.followAllRedirects) {
          _0x5cabe5.followRedirect = !![];
        } else {
          _0x5cabe5.followRedirect = ![];
        }

        if (_0x5cabe5.form) {
          _0x5410ee.setHeader(_0xbd0206.qnIGE, _0xbd0206.CvOxm);

          let _0x3b280c = Object.entries(_0x5cabe5.form).map(([_0x1071c5, _0xc1f3f]) => encodeURIComponent(_0x1071c5) + '=' + encodeURIComponent(_0xc1f3f)).join('&');

          _0x5410ee.write(_0x3b280c);
        }

        if (_0x5cabe5.json) {
          _0x5410ee.setHeader(_0xbd0206.qnIGE, _0xbd0206.vndun);

          if (typeof _0x5cabe5.json !== _0xbd0206.TnOZL) {
            var arg_136 = JSON.stringify(_0x5cabe5.json);

            _0x5410ee.write(arg_136);
          }
        }

        if (_0x5cabe5.body) {
          _0x5410ee.write(_0x5cabe5.body);
        }

        setTimeout(() => {
          const _0x1f1913 = _0x43f9fb;

          try {
            _0x5410ee.abort();
          } catch (err) {
          }

          var arg_139 = _0x201ddd.TsBPG;
          var arg_138 = new Error(arg_139);

          _0xaa30fb(arg_138);
        }, _0x5cabe5.timeout);

        _0x5410ee.on(_0xbd0206.fKuWh, async _0x323cd4 => {
          const _0x45d2ec = _0x43f9fb;

          _0x323cd4.on(_0x201ddd.aPMAT, _0x26c7b4 => {
            const _0x11a94c = _0x45d2ec;
            _0x5bdb99 += _0x26c7b4.toString();
          });

          var arg_167 = function () {
            const _0x5599fc = _0x45d2ec;

            if (typeof _0x5cabe5.json == _0x201ddd.oNtvM) {
              try {
                _0x5bdb99 = JSON.parse(_0x5bdb99);
              } catch (err) {
              }
            }

            if (_0x323cd4.headers && _0x323cd4.headers.location) {
              _0x323cd4.headers.location = _0x323cd4.headers.location[0];
            }

            _0x5410ee.removeAllListeners();

            _0x323cd4.removeAllListeners();

            _0x1b7b70(arg_168);
          };

          _0x323cd4.on(_0x201ddd.SyJjT, arg_167);

          _0x323cd4.on(_0x201ddd.ggsLo, _0xbb5f65 => {
            const _0x287ab0 = _0x45d2ec;

            _0x5410ee.abort();

            console.log(_0x201ddd.zmHqs, _0xbb5f65);

            _0xaa30fb(_0xbb5f65);
          });
        });

        _0x5410ee.on(_0xbd0206.BZcqQ, async (_0x1ce778, _0x360286, _0x4638a0, _0x3222ed) => {
          const _0x599a5a = _0x43f9fb;

          if (_0x5cabe5.followRedirect !== ![]) {
            _0x132bf0 = _0x4638a0;
            console.log(_0x201ddd.vlIMa, _0x4638a0);

            _0x5410ee.followRedirect();
          } else {
            if (_0x3222ed.location) {
              _0x3222ed.location = _0x3222ed.location[0];
            }

            _0x5410ee.abort();

            _0x1b7b70(arg_169);
          }
        });

        _0x5410ee.on(_0xbd0206.Wyxwl, (_0x1a3081, _0x4393f4) => {
          const _0x52d431 = _0x43f9fb;

          if (_0x1a3081.isProxy) {
            try {
              var arg_170 = _0x36a0bc || '';
              var arg_171 = _0x51786e || '';

              _0x4393f4(arg_170, arg_171);
            } catch (err) {
              console.log(err);
            }
          }
        });

        _0x5410ee.on(_0xbd0206.JnstP, _0x20deef => {
          const _0x393b12 = _0x43f9fb;

          _0x5410ee.abort();

          console.log(_0x201ddd.aJdPs, _0x20deef);

          _0xaa30fb(_0x20deef);
        });

        _0x5410ee.end();
      } catch (err) {
        if (_0x5410ee) {
          _0x5410ee.abort();
        }

        console.log(_0xbd0206.ycZRz, err);

        _0xaa30fb(err);
      }
    });
  };

  const _0x417888 = require("get-random-values");

  const _0xb8ee84 = require("path");

  const _0x5df318 = arg_3 + "/taskLogs";

  const _0x5a14e3 = _0x218bb7 => {
    const _0x4eeec2 = _0x8044f7;
    let {
      id: _0x104585,
      status: _0xfae9db,
      statusCode: _0x3a914d,
      groupId: _0x1176f9
    } = _0x218bb7;

    if (!global.taskState[_0x1176f9]) {
      global.taskState[_0x1176f9] = {};
    }

    if (!global.taskState[_0x1176f9][_0x104585]) {
      global.taskState[_0x1176f9][_0x104585] = {};
    }

    global.taskState[_0x1176f9][_0x104585].status = _0xfae9db;
    global.taskState[_0x1176f9][_0x104585].statusCode = _0x3a914d;
  };

  const _0x2ae771 = _0x449481 => {
    const _0x19b567 = _0x8044f7;

    const _0x29199f = _0x184241 => _0x184241.split('').map(_0x485329 => _0x485329.charCodeAt(0));

    const _0x2b4d23 = _0x23ae96 => _0x29199f(_0x449481).reduce((_0x173c65, _0x34132d) => _0x173c65 ^ _0x34132d, _0x23ae96);

    return _0x31aae8 => _0x31aae8.match(/.{1,2}/g).map(_0x271603 => parseInt(_0x271603, 16)).map(_0x2b4d23).map(_0x4634f6 => String.fromCharCode(_0x4634f6)).join('');
  };

  const _0x5ad14a = _0x2ae771(global.user.key);

  const _0x5fb498 = _0x30d53c => {
    const _0x12de62 = _0x8044f7;
    return new Promise(_0x556044 => setTimeout(_0x556044, _0x30d53c));
  };

  let _0x2d2bdc = (_0x26ac69, _0xf2bdb7) => {
    const _0x33ae7e = _0x8044f7;

    if (!_0xd3e51f.existsSync(_0x5df318)) {
      _0xd3e51f.mkdirSync(_0x5df318);
    }

    var arg_177 = _0x26ac69 + '\x0a';

    _0xd3e51f.appendFile(_0xf2bdb7, arg_177, arg_178, _0x2ccb23 => {
    });
  };

  const _0xef59c6 = _0x52b7a7 => {
    const _0x55484e = _0x8044f7;

    if (_0xd3e51f.existsSync(_0x52b7a7)) {
      var arg_181 = function (_0x1068ec, _0x4a5b4b) {
        const _0x296993 = _0x55484e;
        var arg_182 = _0x52b7a7 + '/';

        var _0x31a01f = arg_182 + _0x1068ec;

        if (_0xd3e51f.lstatSync(_0x31a01f).isDirectory()) {
          _0xef59c6(_0x31a01f);
        } else {
          _0xd3e51f.unlinkSync(_0x31a01f);
        }
      };

      _0xd3e51f.readdirSync(_0x52b7a7).forEach(arg_181);

      _0xd3e51f.rmdirSync(_0x52b7a7);
    }
  };

  const _0x26be17 = async function (_0x7ebbf3, _0x269b44) {
    const _0x41bc59 = _0x8044f7;

    try {
      if (_0x3b9bb4()) {
        return null;
      }

      let _0x1af215;

      if ((this.siteOrigin.includes("yeezy") || this.siteOrigin.includes("finish") || this.siteOrigin.includes('jd')) && !this.useMekApi) {
        _0x1af215 = await _0x2ad2(_0x7ebbf3, this.currentURL, _0x269b44, this.pixelHash);
        var arg_185 = '[' + new Date().toISOString() + "]: get sensor: " + (_0x1af215 && _0x1af215.sensor && _0x1af215.userAgent ? "success" : "failed");

        _0x2d2bdc(arg_185, this.logFilePath);
      } else {
        _0x1af215 = await _0x5c4262.bind(this)(_0x7ebbf3, this.siteOrigin, _0x269b44);
      }

      return _0x1af215;
    } catch (err) {
      return console.log(err), null;
    }
  };

  const _0x2ad2 = async function (_0x1d37cf, _0x4d75cd, _0xdd9fe1, _0x41896e = null) {
    const _0x1b5587 = _0x8044f7;
    let _0x2c0920 = 0;

    let _0xee216d = await _0x3dd0b5(_0x1d37cf, _0x4d75cd, _0xdd9fe1, _0x41896e);

    while (!_0xee216d && _0x2c0920 < 5) {
      await _0x5fb498(1000);
      _0xee216d = await _0x3dd0b5(_0x1d37cf, _0x4d75cd, _0xdd9fe1, _0x41896e);
      _0x2c0920++;
    }

    return _0xee216d;
  };

  const _0xeba061 = ["http://119.246.175.169:8093/sensordata", "http://119.246.175.169:8100/sensordata", "http://119.246.175.169:8101/sensordata", "http://119.246.175.169:8102/sensordata", "http://119.246.175.169:8103/sensordata", "http://119.246.175.169:8104/sensordata", "http://119.246.175.169:8091/sensordata"];

  const _0x33c4cc = function (_0x4ac4ed, _0x41a9c5, _0x336aa5) {
    const _0x59b0d8 = _0x8044f7;

    const _0x3cb023 = "8|3|5|7|0|4|6|1|2|9".split('|');

    let _0x3cee29 = 0;

    if (!_0x4ac4ed) {
      return '';
    }

    _0x336aa5 = _0x336aa5 || '';
    var _0x1b0e5d = "utf8";
    var _0x5f3139 = "base64";
    var _0x56a71c = [];

    var _0x33a56b = _0x433f5d.createDecipheriv("aes-128-cbc", _0x41a9c5, _0x336aa5);

    _0x33a56b.setAutoPadding(!![]);

    var arg_186 = _0x33a56b.update(_0x4ac4ed, _0x5f3139, _0x1b0e5d);

    _0x56a71c.push(arg_186);

    var arg_187 = _0x33a56b.final(_0x1b0e5d);

    _0x56a71c.push(arg_187);

    return _0x56a71c.join('');
  };

  const _0x5c4262 = async function (_0x4b913a, _0x54de79, _0x44b52d = null) {
    const _0x370c21 = _0x8044f7;

    try {
      if (_0x3b9bb4()) {
        return null;
      }

      const _0x373eff = await _0x1c3c2d({
        'method': "POST",
        'uri': _0xeba061[Math.floor(Math.random() * _0xeba061.length)],
        'form': _0x201aff,
        'followAllRedirects': !![],
        'timeout': 15000
      });

      let _0x4c1598 = JSON.parse(_0x373eff);

      let _0x3b10bf = _0x33c4cc(_0x4c1598.sensor_data, "K1HeBuOfPJWmqDUA", "P82WqozfYCGyieLR");

      return _0x107367;
    } catch (err) {
      return console.log(err), null;
    }
  };

  const _0x23254f = async function (_0x1aa2cc) {
    const _0x21ed32 = _0x8044f7;

    try {
      let _0x4c241e = _0x4edeba();
      let _0x284e73 = null;

      if (this.keepSameUA) {
        _0x284e73 = {
          'x-instana-t': _0x4c241e,
          'content-type': "text/plain;charset=UTF-8",
          'x-instana-s': _0x4c241e,
          'sec-ch-ua-mobile': '?0',
          'user-agent': _0x1aa2cc.userAgent,
          'sec-ch-ua': this.secUAHeader,
          'x-instana-l': "1,correlationType=web;correlationId=" + _0x4c241e,
          'accept': "*/*",
          'origin': this.siteOrigin,
          'sec-fetch-site': "same-origin",
          'sec-fetch-mode': "cors",
          'sec-fetch-dest': "empty",
          'referer': this.currentURL,
          'accept-encoding': "gzip, deflate, br",
          'accept-language': "en-US"
        };
      }

      let _0x7447a5 = await _0x525073.bind(this)(_0x14c2f3);

      console.log(_0x7447a5.body);

      if (_0x7447a5.headers["set-cookie"]) {
        let _0xa2b101 = _0x7447a5.headers["set-cookie"].find(_0x343fb7 => _0x343fb7.includes("abck"));

        if (_0xa2b101) {
          return {
            'cookie': _0xa2b101.split(';')[0].split("abck=")[1],
            'body': _0x7447a5.body
          };
        }
      }

      return null;
    } catch (err) {
      return console.log(err), null;
    }
  };

  const _0x52f001 = async function (_0x5b157b) {
    const _0xdcc8a6 = _0x8044f7;
    let _0x3f282a = null;
    let _0x3991f4 = "LOCAL";

    let _0x1948df = await this.session.cookies.get({
      'url': this.siteOrigin
    });

    let _0x2cb4bc = _0x1948df.find(_0x594048 => _0x594048.name.includes("abck"));

    const _0x10f2ce = _0x1948df.filter(_0x582ce1 => !(_0x582ce1.name === "AKA_A2" || _0x582ce1.name === "ak_bmsc" || _0x582ce1.name === "bm_sz" || _0x582ce1.name === "_abck" || _0x582ce1.name === "bm_mi" || _0x582ce1.name === "bm_sv"));

    if (!_0x5b157b) {
      for (let _0x44533e of _0x10f2ce) {
        await this.session.cookies.remove(this.siteOrigin, _0x44533e.name);
      }
    }

    try {
      let _0x720346 = await _0x26be17.bind(this)(_0x2cb4bc.value, _0x5b157b);

      if (_0x720346) {
        let _0x12988e = await _0x23254f.bind(this)(_0x720346);

        let _0x4a747a = 0;

        while (this.running && _0x12988e && _0x12988e.cookie && (_0x12988e.cookie.includes('||') || _0x4a747a < 20 && _0x12988e.body.includes(":true"))) {
          const _0x183d3d = "4|2|3|1|5|0".split('|');

          let _0x618a7 = 0;
          console.log(_0x12988e);
          _0x720346 = await _0x26be17.bind(this)(_0x12988e.cookie, _0x5b157b);

          while (!_0x720346 && this.running) {
            await _0x5fb498(500);
            _0x720346 = await _0x26be17.bind(this)(_0x12988e.cookie, _0x5b157b);
          }

          _0x4a747a++;
          await _0x5fb498(500);
          _0x12988e = await _0x23254f.bind(this)(_0x720346);
        }

        if (_0x12988e) {
          _0x3f282a = _0x12988e.cookie;
          _0x3991f4 = _0x172aa3.DKbwg;
        }
      }
    } catch (err) {
      console.log(err);
      var arg_191 = '[' + new Date().toISOString() + "]: Fetched Akamai Sensor Error: " + err;

      _0x2d2bdc(arg_191, this.logFilePath);
    }

    if (!_0x5b157b) {
      for (let _0x41a019 of _0x10f2ce) {
        await this.session.cookies.set({
          ..._0x41a019,
          'url': this.siteOrigin
        });
      }
    }

    return _0x2d2bdc('[' + new Date().toISOString() + "]: genned akamai cookie with: " + _0x3f282a, this.logFilePath), {
      'cookie': _0x3f282a,
      'type': _0x3991f4
    };
  };

  const _0x3dd0b5 = async (_0x46b325, _0x5a0d88, _0x594d0b, _0x1fbf49 = null) => {
    const _0x5ab914 = _0x8044f7;
    return null;
  };

  const _0x1efb6 = _0x39b463 => {
    const _0x227958 = _0x8044f7;

    if (_0x39b463.includes("Chrome/87")) {
      return "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"87\", \"Chromium\";v=\"87\"";
    } else {
      if (_0x39b463.includes("Chrome/88")) {
        return "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"88\", \"Chromium\";v=\"88\"";
      } else {
        if (_0x39b463.includes("Chrome/89")) {
          return "\" Not A Brand\";v=\"99,   Google Chrome\";v=\"89\", \"Chromium\";v=\"89\"";
        } else {
          if (_0x39b463.includes("Chrome/90")) {
            return "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"90\", \"Chromium\";v=\"90\"";
          }
        }
      }
    }
  };

  const _0x4edeba = () => {
    const _0x36c383 = _0x8044f7;
    var arg_193 = new Uint32Array(2);

    var _0x5b9594 = _0x433f5d.randomFillSync(arg_193);

    return _0x5b9594[0].toString(16) + _0x5b9594[1].toString(16);
  };

  const _0x5e67a9 = async function (_0x1e12d9) {
    const _0x5c02af = _0x8044f7;
    this.needCaptcha = _0x1e12d9;

    let _0x544e9d = global.appInfo.capServiceManager.getToken(_0x1e12d9);

    while (this.running && !_0x544e9d) {
      await _0x5fb498(100);
      _0x544e9d = global.appInfo.capServiceManager.getToken(_0x1e12d9);
    }

    this.needCaptcha = ![];

    if (_0x544e9d && _0x544e9d.cancel) {
      return await _0x5fb498(1000), _0x5e67a9.bind(this)(_0x1e12d9);
    }

    return _0x544e9d;
  };

  class _0x4f0b67 {
    constructor() {
      const _0x1b10b1 = _0x8044f7;

      const _0xc30a4a = "4|3|1|0|2".split('|');

      let _0x5e1774 = 0;
      this.tokens = {
        'shopify-checkpoint': {},
        'shopify-checkout': {},
        'adidas': {},
        'ys-advanced-aycd': {},
        'finishline-aycd': {},
        'jdsports-aycd': {},
        'ys-aycd': {},
        'ys-advanced': {},
        'finishline': {},
        'jdsports': {},
        'ys': {},
        'footsite-datadome': {},
        'footsite-geetest': {},
        'supreme': {}
      };
      this.captchaQueue = {
        'shopify-checkpoint': [],
        'shopify-checkout': [],
        'ys-advanced': [],
        'finishline': [],
        'jdsports': [],
        'adidas': [],
        'ys': [],
        'footsite-datadome': [],
        'footsite-geetest': [],
        'supreme': []
      };
      this.harvesters = {};
      this.requestedV3 = ![];
      this.requestedV3AYCD = ![];
    }

    initiateAllHarvesters(_0x27d255) {
      const _0x58c50e = _0x8044f7;
      Object.keys(_0x27d255).forEach(_0x596d61 => {
        const _0x1e8f13 = _0x58c50e;
        var arg_195 = _0x27d255[_0x596d61];
        this.harvesters[_0x596d61] = new _0x29fd2e(arg_195);
      });
    }

    addCaptchaHarvester(_0x6b6066) {
      const _0x5e1809 = _0x8044f7;

      if (this.harvesters[_0x6b6066.captchaId]) {
        this.harvesters[_0x6b6066.captchaId].updateHarvester(_0x6b6066);
      } else {
        this.harvesters[_0x6b6066.captchaId] = new _0x29fd2e(_0x6b6066);
      }
    }

    removeCaptchaHarvester(_0x4e3ccb) {
      const _0x303438 = _0x8044f7;

      if (this.harvesters[_0x4e3ccb]) {
        this.harvesters[_0x4e3ccb].clearSession();

        delete this.harvesters[_0x4e3ccb];
      }
    }

    clearHarvesterSession(_0x522fda) {
      const _0xf0bf17 = _0x8044f7;

      this.harvesters[_0x522fda].clearSession();
    }

    openCaptchaHarvesterWindow(_0x504d67) {
      const _0x215542 = _0x8044f7;
      let _0x3bdb93 = _0x504d67.captchaId;

      this.harvesters[_0x3bdb93].openHarvester(_0x504d67);
    }

    openYoutubeWindow(_0x23e53b) {
      const _0x1e3c2a = _0x8044f7;

      this.harvesters[_0x23e53b].loginToYoutube();
    }

    openHCaptchaWindow(_0x537dfc) {
      const _0x1547e1 = _0x8044f7;

      this.harvesters[_0x537dfc].openHCaptchaWindow();
    }

    isExpiredToken(_0x2cac1a) {
      const _0x375154 = _0x8044f7;
      return _0x2cac1a.timestamp == -1 || Date.now() - _0x2cac1a.timestamp > 100 * 1000;
    }

    grabCaptchaToken(_0x1be06e, _0x86f97b, _0x5046b9, _0x153f34, _0x25642c, _0x54d3de, _0x11e32a, _0x3c272e, _0xf7f5a4, _0x1987ae) {
      const _0x4be8f7 = _0x8044f7;
      let _0x7a7d1d = null;

      if (_0x3c272e["Adv-Cap"]) {
        let _0x4a6a75 = _0xf7f5a4;
        _0x7a7d1d = this.tokens[_0x86f97b][_0x4a6a75];

        if (_0x7a7d1d != null && !this.isExpiredToken(_0x7a7d1d)) {
          return _0x7a7d1d.token;
        }
      } else {
        if (this.tokens[_0x86f97b] == null) {
          this.tokens[_0x86f97b] = {};
        }

        _0x7a7d1d = this.tokens[_0x86f97b][_0x54d3de];

        if (_0x7a7d1d != null) {
          delete this.tokens[_0x86f97b][_0x54d3de];

          if (!this.isExpiredToken(_0x7a7d1d)) {
            return _0x7a7d1d.token;
          } else {
            this.requestCaptchaToken(_0x1be06e, _0x86f97b, _0x5046b9, _0x153f34, _0x25642c, _0x54d3de, _0x11e32a, _0x3c272e, _0xf7f5a4, _0x1987ae);
          }
        }
      }

      return null;
    }

    async requestGoogleSession() {
      const _0x5ebf30 = _0x8044f7;
      let _0x12c7a2 = this.harvesters;

      let _0x3720ff = Object.keys(_0x12c7a2).filter(_0x2ed89b => {
        const _0x1afaf1 = _0x5ebf30;
        return _0x12c7a2[_0x2ed89b].browser != null && _0x12c7a2[_0x2ed89b].ready && _0x12c7a2[_0x2ed89b].type != _0x4802da.FOOTSITE_GEETEST && _0x12c7a2[_0x2ed89b].type != _0x4802da.YEEZYSUPPLY_ADVANCE;
      });

      if (_0x3720ff.length != 0) {
        let _0x50dba2 = _0x3720ff.filter(_0x140197 => {
          const _0x2122d7 = _0x5ebf30;
          return _0x12c7a2[_0x140197].idle;
        });

        if (_0x50dba2.length != 0) {
          let _0x4f1d56 = _0x50dba2[Math.floor(Math.random() * _0x50dba2.length)];

          let _0x58f289 = await _0x12c7a2[_0x4f1d56].requestGoogleSession();

          return _0x58f289;
        }
      } else {
        return [];
      }
    }

    resetV3Token(_0x224631, _0x1805e0, _0x3a42da, _0x4dd3f9, _0x1d33ec, _0x431cb7, _0x4d56b6, _0x2346c9) {
      const _0x253201 = _0x8044f7;

      if (_0x1d33ec.AYCD) {
        global.appInfo.capServiceManager.requestCapV3(arg_200);
        return;
      } else {
        let _0x234862 = this.harvesters;

        let _0x16358f = Object.keys(_0x234862).filter(_0x4515ef => {
          const _0x570e7c = _0x253201;
          return _0x234862[_0x4515ef].browser != null && _0x234862[_0x4515ef].ready && _0x234862[_0x4515ef].type.includes("ys-advanced") && _0x234862[_0x4515ef].idle;
        });

        if (_0x16358f.length > 0) {
          let _0x9a3270 = _0x16358f[Math.floor(Math.random() * _0x16358f.length)];

          let _0x57bfe4 = _0x234862[_0x9a3270];

          _0x57bfe4.requestCaptcha(_0x57b0b6);

          return;
        }
      }
    }

    async requestCaptchaToken(_0x225eaf, _0x5d9712, _0x4f01f0, _0x47210f, _0x36fd97, _0x518b98, _0x566716, _0x9c3f8f, _0x41c0a9, _0x55e5a3) {
      const _0x3fe2f7 = _0x8044f7;
      let _0x2225d7 = this.harvesters;
      let _0x100002 = _0x41c0a9;

      if (_0x9c3f8f["Adv-Cap"]) {
        let _0x4ddf80 = this.tokens[_0x5d9712][_0x100002];

        if (_0x9c3f8f.AYCD) {
          if (!this.requestedV3AYCD && (_0x4ddf80 == null || this.isExpiredToken(_0x4ddf80))) {
            this.requestedV3AYCD = !![];
            global.appInfo.capServiceManager.requestCapV3(arg_202);
          }

          return;
        } else {
          let _0x15c8b8 = Object.keys(_0x2225d7).filter(_0x5f1f36 => {
            const _0xb843f9 = _0x3fe2f7;
            return _0x2225d7[_0x5f1f36][_0x559b60.zkRtl] != null && _0x2225d7[_0x5f1f36].ready && _0x2225d7[_0x5f1f36][_0x559b60.YEqRN] == _0x559b60.ClSvR && _0x2225d7[_0x5f1f36][_0x559b60.cjOni];
          });

          if (_0x15c8b8.length > 0) {
            let _0x4468b1 = _0x15c8b8[Math.floor(Math.random() * _0x15c8b8.length)];

            let _0x28acd3 = _0x2225d7[_0x4468b1];

            if (!this.requestedV3 && (_0x4ddf80 == null || this.isExpiredToken(_0x4ddf80))) {
              console.log(this.tokens);
              this.requestedV3 = !![];

              _0x28acd3.requestCaptcha(_0x29a57d);
            }

            return;
          }
        }
      }

      if (_0x9c3f8f.AYCD) {
        global.appInfo.capServiceManager.requestCapV3(arg_206);
        return;
      }

      let _0x3992a5 = Object.keys(_0x2225d7).filter(_0x573646 => {
        const _0x44bc6a = _0x3fe2f7;
        return _0x2225d7[_0x573646].type == _0x5d9712;
      });

      if (_0x3992a5.length != 0) {
        let _0x52f779 = _0x3992a5.filter(_0x27738e => {
          const _0x25887c = _0x3fe2f7;
          return _0x2225d7[_0x27738e].browser != null && _0x2225d7[_0x27738e].ready;
        });

        if (_0x52f779.length != 0) {
          let _0x2f6c50 = _0x52f779.filter(_0x267b6e => {
            const _0x3eb053 = _0x3fe2f7;
            return _0x2225d7[_0x267b6e].idle;
          });

          if (_0x2f6c50.length != 0) {
            let _0x1d0d46 = _0x2f6c50[Math.floor(Math.random() * _0x2f6c50.length)];

            _0x2225d7[_0x1d0d46].requestCaptcha(_0x29a57d);

            return;
          }
        } else {
          let _0x5817c5 = _0x3992a5.filter(_0x479711 => {
            const _0x59a8c7 = _0x3fe2f7;
            return _0x2225d7[_0x479711][_0x559b60.zkRtl] == null;
          });

          if (_0x5817c5.length != 0) {
            let _0x13da26 = _0x5817c5[Math.floor(Math.random() * _0x5817c5.length)];

            let _0x530a41 = _0x2225d7[_0x13da26];

            _0x530a41.openHarvester(arg_212);

            _0x530a41.requestCaptcha(_0x29a57d);

            return;
          }
        }
      }

      if (this.captchaQueue[_0x5d9712] == null) {
        this.captchaQueue[_0x5d9712] = [];
      }

      this.captchaQueue[_0x5d9712].push(_0x29a57d);
    }

    storeCaptchaToken(_0x1e9fbc) {
      const _0x4af72b = _0x8044f7;
      var arg_214 = JSON.stringify(_0x1e9fbc);

      let _0x5f4678 = JSON.parse(arg_214);

      if (_0x5f4678.isAYCD) {
        let _0x517ab3 = _0x5f4678.type;

        if (this.tokens[_0x517ab3] == null) {
          this.tokens[_0x517ab3] = {};
        }

        if (_0x517ab3.includes("ys-advanced")) {
          this.requestedV3AYCD = ![];
          this.tokens[_0x517ab3][_0x5f4678.groupId] = _0x5f4678;
        } else {
          this.tokens[_0x517ab3][_0x5f4678.taskId] = _0x5f4678;
        }

        return;
      }

      let _0x163927 = _0x5f4678.id;
      let _0x5e272c = this.harvesters[_0x163927];
      let _0x364997 = _0x5e272c.type;
      let _0x395e18 = _0x5f4678.taskId;

      if (_0x364997 == "ys-advanced") {
        const _0x5d1a12 = "3|5|2|0|6|4|1".split('|');

        let _0x55686f = 0;
        this.requestedV3 = ![];
        this.tokens[_0x364997][_0x5f4678.groupId] = _0x5f4678;
        this.harvesters[_0x163927].count = _0x5e272c.count + 1;
        this.harvesters[_0x163927].taskId = null;
        this.harvesters[_0x163927].idle = !![];
        console.log(_0x5f4678);
        return;
      }

      if (this.tokens[_0x364997] == null) {
        this.tokens[_0x364997] = {};
      }

      this.tokens[_0x364997][_0x395e18] = _0x5f4678;
      this.harvesters[_0x163927].count = _0x5e272c.count + 1;
      this.harvesters[_0x163927].taskId = null;

      if (this.captchaQueue[_0x364997] && this.captchaQueue[_0x364997].length > 0) {
        var arg_217 = this.captchaQueue[_0x364997].pop();

        this.harvesters[_0x163927].requestCaptcha(arg_217);
      } else {
        this.harvesters[_0x163927].idle = !![];
      }
    }

    cancelCaptcha(_0x1627bd, _0x1cc29d) {
      const _0x3e5180 = _0x8044f7;
      let _0x5f1369 = this.captchaQueue[_0x1627bd];

      let _0x3b44e4 = ![];

      if (_0x5f1369) {
        var _0x3f7a0d = 0;
        ;

        for (; _0x3f7a0d < _0x5f1369.length; _0x3f7a0d++) {
          if (_0x5f1369[_0x3f7a0d].taskId === _0x1cc29d) {
            _0x5f1369.splice(_0x3f7a0d, 1);

            _0x3b44e4 = !![];
          }
        }
      }

      if (!_0x3b44e4) {
        let _0x405258 = this.harvesters;

        let _0x525cfc = Object.keys(_0x405258).filter(_0x4c251d => {
          const _0x58987b = _0x3e5180;
          return _0x405258[_0x4c251d][_0x206f91.MEnfY] == _0x1627bd;
        });

        let _0x5939a4 = _0x525cfc.find(_0x129a5a => {
          const _0x48b924 = _0x3e5180;
          return _0x405258[_0x129a5a].taskId == _0x1cc29d;
        });

        if (_0x5939a4) {
          _0x405258[_0x5939a4].cancelCaptcha();

          if (this.captchaQueue[_0x1627bd] && this.captchaQueue[_0x1627bd].length > 0) {
            var arg_219 = this.captchaQueue[_0x1627bd].pop();

            this.harvesters[_0x5939a4].requestCaptcha(arg_219);
          }
        }
      }
    }

  }

  const _0x2a8ad3 = async function (_0x9341c4, _0x3491f1 = 0) {
    const _0x3de2b0 = _0x8044f7;

    if (!this.running || _0x3491f1 == 10) {
      return null;
    }

    try {
      this.sender.send("captchaServiceStatus", arg_221);

      let _0x409756 = await _0x1c3c2d(_0x195bbc);

      let _0x21bca7 = JSON.parse(_0x409756.body);

      if (!_0x21bca7.status) {
        if ("ERROR_WRONG_USER_KEY" == _0x21bca7.request || "ERROR_KEY_DOES_NOT_EXIST" == _0x21bca7.request) {
          this.sender.send("captchaServiceStatus", arg_222);
          this.running = ![];
          return;
        } else {
          if ("ERROR_ZERO_BALANCE" == _0x21bca7.request) {
            this.sender.send("captchaServiceStatus", arg_225);
            this.running = ![];
            return;
          } else {
            if ("ERROR_NO_SLOT_AVAILABLE" == _0x21bca7.request) {
              this.sender.send("captchaServiceStatus", arg_226);
            } else {
              this.sender.send("captchaServiceStatus", arg_227);
            }
          }
        }

        return await _0x5fb498(5000), _0x2a8ad3.bind(this)(_0x9341c4, _0x3491f1 + 1);
      }

      return _0x21bca7;
    } catch (err) {
      return this.sender.send("captchaServiceStatus", {
        'captchaServiceId': this.id,
        'statusText': "Init Worker Failed, Retry",
        'statusCode': 2
      }), await _0x5fb498(5000), _0x2a8ad3.bind(this)(_0x9341c4, _0x3491f1 + 1);
    }
  };

  const _0x34bfd2 = async function (_0x3202bb, _0x5bc161 = 0) {
    const _0x382475 = _0x8044f7;

    if (!this.running || _0x5bc161 == 10) {
      return null;
    }

    try {
      this.sender.send("captchaServiceStatus", arg_236);

      let _0x2ef644 = await _0x1c3c2d(_0xd87a05);

      let _0x4b320d = _0x2ef644.body.errorId;

      if (_0x4b320d == 0) {
        return _0x2ef644.body;
      } else {
        if (_0x4b320d == 1) {
          this.sender.send("captchaServiceStatus", arg_237);
          this.running = ![];
          return;
        } else {
          if (_0x4b320d == 10) {
            this.sender.send("captchaServiceStatus", arg_238);
            this.running = ![];
            return;
          } else {
            if (_0x4b320d == 2) {
              return this.sender.send("captchaServiceStatus", {
                'captchaServiceId': this.id,
                'statusText': "No Slot, Retry",
                'statusCode': 2
              }), await _0x5fb498(15000), _0x34bfd2.bind(this)(_0x3202bb, _0x5bc161 + 1);
            } else {
              return this.sender.send("captchaServiceStatus", {
                'captchaServiceId': this.id,
                'statusText': "Init Worker Failed, Retry",
                'statusCode': 2
              }), await _0x5fb498(5000), _0x34bfd2.bind(this)(_0x3202bb, _0x5bc161 + 1);
            }
          }
        }
      }
    } catch (err) {
      return this.sender.send("captchaServiceStatus", {
        'captchaServiceId': this.id,
        'statusText': "Init Worker Failed, Retry",
        'statusCode': 2
      }), await _0x5fb498(5000), _0x34bfd2.bind(this)(_0x3202bb, _0x5bc161 + 1);
    }
  };

  const _0x7c46d2 = async function (_0x3a8796, _0x5785b6 = 0) {
    const _0x5b1525 = _0x8044f7;

    if (!this.running || _0x5785b6 == 10) {
      return null;
    }

    try {
      this.sender.send("captchaServiceStatus", arg_239);

      let _0xdbd379 = await _0x1c3c2d(_0x1e5db4);

      let _0x1871f4 = _0xdbd379.body.errorId;

      if (_0x1871f4 == 0) {
        return _0xdbd379.body;
      } else {
        let _0x1af0c3 = _0xdbd379.body.errorCode;

        if (_0x1af0c3 == "ERROR_KEY_DOES_NOT_EXIST" || _0x1af0c3 == "ERROR_ZERO_BALANCE") {
          this.sender.send("captchaServiceStatus", arg_240);
          this.running = ![];
          return;
        } else {
          return this.sender.send("captchaServiceStatus", {
            'captchaServiceId': this.id,
            'statusText': "Init Worker Failed, Retry",
            'statusCode': 2
          }), await _0x5fb498(5000), _0x7c46d2.bind(this)(_0x3a8796, _0x5785b6 + 1);
        }
      }
    } catch (err) {
      return console.log(err), this.sender.send("captchaServiceStatus", {
        'captchaServiceId': this.id,
        'statusText': "Init Worker Failed, Retry",
        'statusCode': 2
      }), await _0x5fb498(5000), _0x7c46d2.bind(this)(_0x3a8796, _0x5785b6 + 1);
    }
  };

  const _0x3ebcef = async function (_0x25fcf7, _0x10470b = 0) {
    const _0x2e6d95 = _0x8044f7;

    if (!this.running || _0x10470b == 10) {
      return null;
    }

    try {
      this.sender.send("captchaServiceStatus", arg_245);

      if (this.siteType == _0x23da2b.YEEZYSUPPLY || this.siteType == _0x23da2b.FINISHLINE) {
        return this.autoSolver.sendTokenRequest({
          'taskId': _0x25fcf7.taskId,
          'url': _0x25fcf7.url,
          'siteKey': _0x25fcf7.siteKey,
          'action': _0x25fcf7.action,
          'metadata': {
            'type': _0x25fcf7.captchaType,
            'groupId': _0x25fcf7.groupId
          },
          'version': '2',
          'minScore': 0.9
        });
      } else {
        return this.autoSolver.sendTokenRequest({
          'taskId': "capServiceWorker",
          'url': _0x25fcf7.url,
          'siteKey': _0x25fcf7.siteKey,
          'userAgent': _0x25fcf7.userAgent,
          'version': '0'
        });
      }
    } catch (err) {
      return console.log(err), this.sender.send("captchaServiceStatus", {
        'captchaServiceId': this.id,
        'statusText': "Init Worker Failed, Retry",
        'statusCode': 2
      }), await _0x5fb498(5000), _0x3ebcef.bind(this)(_0x25fcf7, _0x10470b + 1);
    }
  };

  const _0x26456f = async function (_0x4c8d84, _0x1add9f = 0) {
    const _0x352dd6 = _0x8044f7;

    if (!this.running || _0x1add9f == 10) {
      return null;
    }

    try {
      this.sender.send("captchaServiceStatus", arg_247);

      let _0x4c1732 = await _0x1c3c2d(_0x2c7c89);

      if (!_0x4c1732.body.id) {
        return await this.sleep(5000), this.initWorker(_0x4c8d84, _0x1add9f + 1);
      }

      return _0x4c1732.body;
    } catch (err) {
      return console.log(err), this.sender.send("captchaServiceStatus", {
        'captchaServiceId': this.id,
        'statusText': "Init Worker Failed, Retry",
        'statusCode': 2
      }), await _0x5fb498(5000), _0x26456f.bind(this)(_0x4c8d84, _0x1add9f + 1);
    }
  };

  const _0x5b9884 = async function (_0x55e677, _0x1b5dbe = 0) {
    const _0x89a2ea = _0x8044f7;

    if (!this.running || _0x1b5dbe == 20) {
      return null;
    }

    try {
      this.sender.send("captchaServiceStatus", arg_248);

      let _0x1c4fcd = await _0x1c3c2d(_0x2f23cd);

      let _0x4d055a = JSON.parse(_0x1c4fcd.body);

      if (!_0x4d055a.status) {
        return await _0x5fb498(5000), _0x5b9884.bind(this)(_0x55e677, _0x1b5dbe + 1);
      }

      return _0x4d055a.request;
    } catch (err) {
      return console.log(err), await _0x5fb498(5000), _0x5b9884.bind(this)(_0x55e677, _0x1b5dbe + 1);
    }
  };

  const _0x15fbcc = async function (_0x2b919c, _0x3a1923 = 0) {
    const _0x3fb2ea = _0x8044f7;

    if (!this.running || _0x3a1923 == 15) {
      return null;
    }

    try {
      this.sender.send("captchaServiceStatus", arg_249);

      let _0x202081 = await _0x1c3c2d(_0x39907e);

      let _0x2d63b8 = _0x202081.body.errorId;

      if (_0x2d63b8 == 0) {
        let _0x559d03 = _0x202081.body.status;

        if (_0x559d03 == "processing") {
          return await _0x5fb498(5000), _0x15fbcc.bind(this)(_0x2b919c, _0x3a1923 + 1);
        } else {
          if (_0x559d03 == "ready") {
            return _0x202081.body.solution.gRecaptchaResponse;
          }
        }
      } else {
        if (_0x2d63b8 > 1) {
          return null;
        }
      }

      return null;
    } catch (err) {
      return console.log(err), await _0x5fb498(5000), _0x15fbcc.bind(this)(_0x2b919c, _0x3a1923 + 1);
    }
  };

  const _0x523bb8 = async function (_0x3e2736, _0x20e5bf = 0) {
    const _0x5175e9 = _0x8044f7;

    if (!this.running || _0x20e5bf == 15) {
      return null;
    }

    try {
      this.sender.send("captchaServiceStatus", arg_251);

      let _0x4e9fdf = await _0x1c3c2d(_0x3f790b);

      let _0x3901d4 = _0x4e9fdf.body.errorId;

      if (_0x3901d4 == 0) {
        let _0x399e07 = _0x4e9fdf.body.status;

        if (_0x399e07 == "processing") {
          return await _0x5fb498(5000), _0x523bb8.bind(this)(_0x3e2736, _0x20e5bf + 1);
        } else {
          if (_0x399e07 == "ready") {
            return _0x4e9fdf.body.solution.gRecaptchaResponse;
          }
        }
      } else {
        return null;
      }

      return null;
    } catch (err) {
      return console.log(err), await _0x5fb498(5000), _0x523bb8.bind(this)(_0x3e2736, _0x20e5bf + 1);
    }
  };

  const _0x117099 = async function (_0x837b1c, _0x45c6e5 = 0) {
    const _0x38226d = _0x8044f7;

    if (!this.running || _0x45c6e5 == 15) {
      return null;
    }

    try {
      this.sender.send("captchaServiceStatus", arg_253);

      let _0x55d170 = await _0x1c3c2d(_0x5f323e);

      let _0x44e31d = _0x55d170.body;

      if (_0x44e31d == "failed") {
        return this.sender.send("captchaServiceStatus", {
          'captchaServiceId': this.id,
          'statusText': "Failed, Retry",
          'statusCode': 2
        }), null;
      } else {
        if (_0x44e31d == "completed") {
          return _0x55d170.body.token;
        } else {
          return await _0x5fb498(5000), _0x523bb8.bind(this)(_0x837b1c, _0x45c6e5 + 1);
        }
      }
    } catch (err) {
      return console.log(err), await _0x5fb498(5000), _0x523bb8.bind(this)(_0x837b1c, _0x45c6e5 + 1);
    }
  };

  class _0x33bd44 {
    constructor(_0xf3c48b, _0x1cf5fd) {
      const _0x5da22c = _0x8044f7;
      let {
        siteKey: _0x488685,
        key: _0x8b0fa8,
        id: _0x3bc3e8,
        param1: _0x2a1019,
        param2: _0x14be83
      } = _0xf3c48b;
      this.type = _0x8b0fa8;
      this.siteType = _0x488685;
      this.apiKey = _0x2a1019.trim();
      this.id = _0x3bc3e8;
      this.running = ![];
      this.tokens = [];
      this.sender = _0x1cf5fd;
      this.isV3 = this.siteType == _0x23da2b.FINISHLINE || this.siteType == _0x23da2b.YEEZYSUPPLY;

      if (!this.isV3) {
        this.captchaInfo = _0x413c7e[_0x488685];
      }
    }

    async initAutoSolver() {
      const _0x1a651b = _0x8044f7;

      if (!this.autoSolver) {
        this.autoSolver = _0x570af9.getInstance(arg_256);
        this.autoSolver.init(this.apiToken, this.apiKey).then(() => {
          const _0x49f250 = _0x1a651b;
          this.sender.send("captchaServiceStatus", arg_257);
          this.autoSolver.ee.on("AutoSolveResponse", async _0x9aac3a => {
            const _0x22349a = _0x49f250;
            console.log(_0x9aac3a);

            let _0x4e63e4 = JSON.parse(_0x9aac3a);

            if (_0x4e63e4.token) {
              if (!this.isV3) {
                this.sender.send(_0x32cff4.jpCjI, arg_258);
                this.tokens = this.tokens.filter(_0x19691b => _0x19691b.timestamp + 110000 > Date.now());
                this.tokens.push(arg_259);
                this.sender.send(_0x32cff4.PIQnv, arg_260);
              } else {
                global[_0x32cff4.TSfZH][_0x32cff4.UnXCb].storeCaptchaToken(arg_261);
              }
            }

            if (!this.isV3) {
              await _0x5fb498(5000);
              this.initWorker();
            }
          });
          this.autoSolver.ee.on("AutoSolveResponse_Cancel", _0x16abb5 => {
            const _0x1857ed = _0x49f250;
            console.log(_0x16abb5);

            if (!this.isV3) {
              this.initWorker();
            }
          });
          this.autoSolver.ee.on("AutoSolveError", async _0x1cac75 => {
            const _0x2cb853 = _0x49f250;
            console.log(_0x1cac75);

            let _0x47d0a0 = JSON.parse(_0x1cac75);

            switch (_0x47d0a0.type) {
              case autoSolve.constants.ERRORS.INVALID_ACCESS_TOKEN:
                this.sender.send(_0x32cff4.jpCjI, {
                  'captchaServiceId': this.id,
                  'statusText': _0x32cff4.RqjBO,
                  'statusCode': 2
                }), this.running = ![];
                break;

              case autoSolve.constants.ERRORS.INVALID_CLIENT_ID:
                this.sender.send(_0x32cff4.jpCjI, {
                  'captchaServiceId': this.id,
                  'statusText': _0x32cff4.BLpHy,
                  'statusCode': 2
                }), this.running = ![];
                break;

              case autoSolve.constants.ERRORS.INVALID_API_OR_ACCESS_TOKEN:
                this.sender.send(_0x32cff4.jpCjI, {
                  'captchaServiceId': this.id,
                  'statusText': _0x32cff4.WYaDo,
                  'statusCode': 2
                }), this.running = ![];
                break;

              case autoSolve.constants.ERRORS.TOO_MANY_REQUESTS:
                this.sender.send(_0x32cff4.jpCjI, {
                  'captchaServiceId': this.id,
                  'statusText': _0x32cff4.cpSnb,
                  'statusCode': 2
                }), await _0x5fb498(15000), this.initWorker();
                break;

              case autoSolve.constants.ERRORS.CONNECTION_ERROR_INIT:
                this.sender.send(_0x32cff4.jpCjI, {
                  'captchaServiceId': this.id,
                  'statusText': _0x32cff4.yfMAH,
                  'statusCode': 2
                }), await _0x5fb498(5000), this.initWorker();
                break;

              case autoSolve.constants.ERRORS.CONNECTION_ERROR:
                this.sender.send(_0x32cff4.jpCjI, {
                  'captchaServiceId': this.id,
                  'statusText': _0x32cff4.yfMAH,
                  'statusCode': 2
                }), await _0x5fb498(5000), this.initWorker();
                break;

              default:
                this.sender.send(_0x32cff4.jpCjI, {
                  'captchaServiceId': this.id,
                  'statusText': _0x47d0a0.type,
                  'statusCode': 2
                }), await _0x5fb498(5000), this.initWorker();
            }
          });
        })["catch"](_0x542a9b => {
          const _0x10070b = _0x1a651b;
          console.log(_0x542a9b);
          this.sender.send("captchaServiceStatus", arg_263);
        });
      }
    }

    async initWorker() {
      const _0x6e8bad = _0x8044f7;
      let _0x406881 = null;

      switch (this.type) {
        case _0x1fc9be.TWO_CAP:
          _0x406881 = await _0x2a8ad3.bind(this)(this.captchaInfo);
          break;

        case _0x1fc9be.ANTI_CAP:
          _0x406881 = await _0x34bfd2.bind(this)(this.captchaInfo);
          break;

        case _0x1fc9be.CAP_MONSTER:
          _0x406881 = await _0x7c46d2.bind(this)(this.captchaInfo);
          break;

        case _0x1fc9be.POSEIDON:
          _0x406881 = await _0x26456f.bind(this)(this.captchaInfo);
          break;

        case _0x1fc9be.AYCD:
          _0x406881 = await _0x3ebcef.bind(this)(this.captchaInfo);
          break;
      }

      return _0x406881;
    }

    requestCapV3(_0x5a0f5d) {
      const _0x422f78 = _0x8044f7;
      return _0x3ebcef.bind(this)(_0x5a0f5d);
    }

    updateService(_0x367356) {
      const _0x224a44 = _0x8044f7;
      let {
        siteKey: _0x42d8a1,
        param1: _0xc38cb0,
        param2: _0x309294
      } = _0x367356;
      this.siteType = _0x42d8a1;
      this.apiKey = _0xc38cb0.trim();
    }

    async grabToken(_0x40e60f) {
      const _0x2a28d5 = _0x8044f7;
      let _0x4c5d2b = null;

      switch (this.type) {
        case _0x1fc9be.TWO_CAP:
          _0x4c5d2b = await _0x5b9884.bind(this)(_0x40e60f);
          break;

        case _0x1fc9be.ANTI_CAP:
          _0x4c5d2b = await _0x15fbcc.bind(this)(_0x40e60f);
          break;

        case _0x1fc9be.CAP_MONSTER:
          _0x4c5d2b = await _0x523bb8.bind(this)(_0x40e60f);
          break;

        case _0x1fc9be.POSEIDON:
          _0x4c5d2b = await _0x117099.bind(this)(_0x40e60f);
          break;
      }

      return _0x4c5d2b;
    }

    async getToken() {
      const _0x3fae51 = _0x8044f7;

      try {
        let _0x13e5a7 = await this.initWorker();

        if (!this.running || !_0x13e5a7) {
          return null;
        }

        await _0x5fb498(10000);

        if (!this.running) {
          return null;
        }

        let _0x464548 = await this.grabToken(_0x13e5a7);

        if (!_0x464548) {
          return this.sender.send("captchaServiceStatus", {
            'captchaServiceId': this.id,
            'statusText': "No Token, Retry",
            'statusCode': 2
          }), null;
        }

        this.sender.send("captchaServiceStatus", arg_266);
        this.tokens = this.tokens.filter(_0x5d0ce1 => _0x5d0ce1.timestamp + 110000 > Date.now());
        this.tokens.push(arg_267);
        this.sender.send("captchaServiceSolved", arg_268);
      } catch (err) {
        return console.log(err), null;
      }
    }

    async start() {
      const _0x3ab1ec = _0x8044f7;

      if (this.apiKey.length == 0 || this.type == _0x1fc9be.AYCD && this.apiToken.length == 0) {
        return;
      }

      this.running = !![];

      while (this.running && !this.isV3) {
        await this.getToken();
        await _0x5fb498(5000);
      }
    }

    stop() {
      const _0x1bb20b = _0x8044f7;
      console.log("stop");
      this.running = ![];
    }

    grabCaptcha() {
      const _0x26043b = _0x8044f7;
      this.tokens = this.tokens.filter(_0x39b242 => _0x39b242.timestamp + 110000 > Date.now());

      if (this.tokens.length > 0) {
        let _0x1e13dd = this.tokens.shift();

        return this.sender.send("captchaServiceSolved", {
          'captchaServiceId': this.id,
          'captchaSolved': this.tokens.length
        }), _0x1e13dd;
      }

      return this.sender.send("captchaServiceSolved", {
        'captchaServiceId': this.id,
        'captchaSolved': this.tokens.length
      }), ![];
    }

    hasToken() {
      const _0x905de1 = _0x8044f7;

      let _0x13fb1a = this.tokens.filter(_0x579510 => _0x579510.timestamp + 110000 > Date.now());

      return _0x13fb1a.length > 0;
    }

  }

  class _0x10e669 {
    constructor() {
      const _0x260611 = _0x8044f7;
      this.capServices = {};
    }

    requestCapV3(_0x5f4589) {
      const _0x740cd4 = _0x8044f7;

      for (let _0x43213a of Object.keys(this.capServices)) {
        if (this.capServices[_0x43213a].isV3 && this.capServices[_0x43213a].running) {
          return this.capServices[_0x43213a].requestCapV3(_0x5f4589);
        }
      }
    }

    startCapService(_0x45f5da) {
      const _0x6f4cd2 = _0x8044f7;

      if (this.capServices[_0x45f5da]) {
        this.capServices[_0x45f5da].start();
      }
    }

    stopCapService(_0x2daeb7) {
      const _0x2f2556 = _0x8044f7;

      if (this.capServices[_0x2daeb7]) {
        this.capServices[_0x2daeb7].stop();
      }
    }

    stopServices() {
      const _0x2fc492 = _0x8044f7;

      for (let _0x5d654b of Object.keys(this.capServices)) {
        this.capServices[_0x5d654b].stop();
      }
    }

    initiateAllCapServices(_0x42a58d, _0x5928df) {
      const _0x19d660 = _0x8044f7;

      _0x42a58d.forEach(_0xce61d7 => {
        const _0x1b588d = _0x19d660;
        this.capServices[_0xce61d7.id] = new _0x33bd44(_0xce61d7, _0x5928df);
      });
    }

    addCapService(_0x2d7f82, _0x5722e2) {
      const _0x3b6ef4 = _0x8044f7;

      if (this.capServices[_0x2d7f82.id]) {
        this.capServices[_0x2d7f82.id].updateService(_0x2d7f82);
      } else {
        this.capServices[_0x2d7f82.id] = new _0x33bd44(_0x2d7f82, _0x5722e2);
      }

      console.log("add cap service");
    }

    removeCapService(_0x49ba1a) {
      const _0x232cc4 = _0x8044f7;

      if (this.capServices[_0x49ba1a]) {
        this.capServices[_0x49ba1a].stop();

        delete this.capServices[_0x49ba1a];
        console.log("remove cap service");
      }
    }

    getToken(_0x21264c) {
      const _0x5b07eb = _0x8044f7;

      let _0x51fce2 = Object.keys(this.capServices);

      let _0x38453b = _0x51fce2.filter(_0x4e0e17 => this.capServices[_0x4e0e17].siteType == _0x21264c);

      if (_0x38453b && _0x38453b.length > 0) {
        for (let _0x42b441 of _0x38453b) {
          if (this.capServices[_0x42b441].hasToken()) {
            return this.capServices[_0x42b441].grabCaptcha();
          }
        }
      }

      return null;
    }

    hasToken(_0x28a076) {
      const _0x491848 = _0x8044f7;

      let _0x564256 = Object.keys(this.capServices);

      let _0x58d95a = _0x564256.filter(_0x3ec745 => this.capServices[_0x3ec745].siteType == _0x28a076 && this.capServices[_0x3ec745].hasToken());

      return _0x58d95a && _0x58d95a.length > 0;
    }

  }

  const _0x232e6d = (_0x471100, _0x5ecae9) => {
    const _0x3a7ab2 = _0x8044f7;
    _0x5ecae9.appInfo.captchaManager = new _0x4f0b67();
    _0x5ecae9.appInfo.capServiceManager = new _0x10e669();

    _0x471100.on("initCaptcha", (_0x29b2b6, _0x5bc1c9) => {
      const _0x26c8cc = _0x3a7ab2;

      _0x5ecae9[_0x49a158.IBcHv][_0x49a158.YasnV].initiateAllHarvesters(_0x5bc1c9);
    });

    _0x471100.on("addCaptcha", (_0x5b646a, _0x2a7ddd) => {
      const _0x4eccbe = _0x3a7ab2;

      _0x5ecae9[_0x49a158.IBcHv][_0x49a158.YasnV].addCaptchaHarvester(_0x2a7ddd);
    });

    _0x471100.on("removeCaptcha", (_0x12c596, _0x22842a) => {
      const _0x379a54 = _0x3a7ab2;

      _0x5ecae9[_0x49a158.IBcHv][_0x49a158.YasnV].removeCaptchaHarvester(_0x22842a);
    });

    _0x471100.on("clearYoutubeSession", (_0x5bb932, _0x54a4e6) => {
      const _0x12335c = _0x3a7ab2;

      _0x5ecae9[_0x49a158.IBcHv][_0x49a158.YasnV].clearHarvesterSession(_0x54a4e6);
    });

    _0x471100.on("openCaptchaWindow", (_0xdaad73, _0x30def8) => {
      const _0x1a33c2 = _0x3a7ab2;
      var arg_280 = JSON.stringify(_0x30def8);
      var arg_279 = JSON.parse(arg_280);

      _0x5ecae9[_0x49a158.IBcHv][_0x49a158.YasnV].openCaptchaHarvesterWindow(arg_279);
    });

    _0x471100.on("openYoutubeWindow", (_0x5201ac, _0x42f532) => {
      const _0x475baf = _0x3a7ab2;

      _0x5ecae9[_0x49a158.IBcHv][_0x49a158.YasnV].openYoutubeWindow(_0x42f532);
    });

    _0x471100.on("loginHcaptcha", (_0x2d2425, _0x2beb35) => {
      const _0x1707f9 = _0x3a7ab2;

      _0x5ecae9[_0x49a158.IBcHv][_0x49a158.YasnV].openHCaptchaWindow(_0x2beb35);
    });

    _0x471100.on("sendCaptcha", (_0x401d10, _0x434e0d) => {
      const _0x2a025d = _0x3a7ab2;

      _0x5ecae9[_0x49a158.IBcHv][_0x49a158.YasnV].storeCaptchaToken(_0x434e0d);
    });

    _0x471100.on("initCapService", (_0x4b6ba6, _0xcf50e8) => {
      const _0x59fbae = _0x3a7ab2;

      _0x5ecae9.appInfo.capServiceManager.initiateAllCapServices(_0xcf50e8, _0x4b6ba6.sender);
    });

    _0x471100.on("addCapService", (_0x4dc6b1, _0x1fea8c) => {
      const _0x2ff62a = _0x3a7ab2;

      _0x5ecae9[_0x49a158.IBcHv][_0x49a158.wZPCZ].addCapService(_0x1fea8c, _0x4dc6b1.sender);
    });

    _0x471100.on("removeCapService", (_0x2a3a1d, _0x4a1fa1) => {
      const _0x5623ae = _0x3a7ab2;

      _0x5ecae9.appInfo.capServiceManager.removeCapService(_0x4a1fa1);
    });

    _0x471100.on("startCapService", (_0x4c1390, _0x546908) => {
      const _0x48a89a = _0x3a7ab2;

      _0x5ecae9.appInfo.capServiceManager.startCapService(_0x546908);
    });

    _0x471100.on("stopCapService", (_0x2f40f1, _0x83c874) => {
      const _0x8ae8f8 = _0x3a7ab2;

      _0x5ecae9.appInfo.capServiceManager.stopCapService(_0x83c874);
    });
  };

  const _0x89a33e = (_0xf9da58, _0x151753, _0x4b9e5a, _0x50e1ff, _0x558355, _0x3df079, _0x66185c = null, _0x32a7f4 = {}, _0xedbdf9 = [], _0x430225 = ![]) => {
    const _0x12f725 = _0x8044f7;
    global.appInfo.captchaManager.requestCaptchaToken(_0xf9da58, _0x151753, _0x4b9e5a, _0x50e1ff, _0x558355, _0x3df079, _0x66185c, _0x32a7f4, _0xedbdf9, _0x430225);
  };

  const _0x7f4309 = async () => {
    const _0x1fbaf2 = _0x8044f7;
    return await global.appInfo.captchaManager.requestGoogleSession();
  };

  const _0x192d3d = (_0x252fce, _0xb2bf53, _0x46e13f, _0x42d8fa, _0x54bf6d, _0x1f8b7f, _0xd984a9 = null, _0x409db1 = {}, _0x333706 = [], _0x51f4fe = ![]) => {
    const _0x507a0f = _0x8044f7;
    return global.appInfo.captchaManager.grabCaptchaToken(_0x252fce, _0xb2bf53, _0x46e13f, _0x42d8fa, _0x54bf6d, _0x1f8b7f, _0xd984a9, _0x409db1, _0x333706, _0x51f4fe);
  };

  const _0xef1270 = (_0x40457a, _0x114849) => {
    const _0x38441b = _0x8044f7;
    return global.appInfo.captchaManager.cancelCaptcha(_0x40457a, _0x114849);
  };

  const _0x368af3 = async function () {
    const _0x4e9bd2 = _0x8044f7;
    let _0x1a6ae9 = this.proxyList[Math.floor(Math.random() * this.proxyList.length)];
    this.proxy = _0x1a6ae9;
    let _0x38cbb5 = null;

    if (_0x1a6ae9 && _0x1a6ae9.split(':').length > 1) {
      _0x38cbb5 = _0x1a6ae9.split(':')[0] + ':' + _0x1a6ae9.split(':')[1];
    } else {
      _0x38cbb5 = '';
    }

    this.proxyUsername = _0x1a6ae9 && _0x1a6ae9.split(':')[2] ? _0x1a6ae9.split(':')[2] : '';
    this.proxyPassword = _0x1a6ae9 && _0x1a6ae9.split(':')[3] ? _0x1a6ae9.split(':')[3] : '';
    await this.session.setProxy({
      'proxyRules': _0x38cbb5
    });
  };

  const _0x467d29 = (_0x42ca33, _0x35025f) => {
    const _0x1f6fc1 = _0x8044f7;

    const _0x341167 = _0x42ca33[Math.floor(Math.random() * _0x42ca33.length)];

    if (_0x35025f[0].name == "random") {
      let _0x18f4b3 = _0x42ca33.filter(_0x480da7 => _0x480da7.available === !![]);

      if (_0x18f4b3.length != 0) {
        return _0x18f4b3[Math.floor(Math.random() * _0x18f4b3.length)];
      }

      return _0x341167;
    }

    let _0x1804d8 = [];

    for (let _0x16dcca of _0x35025f) {
      let _0x172f9d = _0x42ca33.find(_0x4bc15b => {
        const _0x34683a = _0x1f6fc1;

        if (_0x4bc15b.option1) {
          _0x2e6130 = _0x4bc15b.option1.toLowerCase().replace('-', '').replace("women's", '').replace("men's", '').replace('us', '').replace('uk', '').replace("size", '').replace('y', '').replace('c', '').replace('w', '').replace(/ /g, '');
        } else {
          _0x2e6130 = null;
        }

        let _0x3d84f8 = null;
        let _0x2e6130 = null;
        let _0x3d39cf = null;

        let _0x22ea8b = _0x16dcca.name.toLowerCase().replace(/ /g, '');

        if ("SNKR Akamai Gen") {
          _0x3d84f8 = "SNKR Akamai Gen".toLowerCase().replace('-', '').replace("women's", '').replace("men's", '').replace('us', '').replace('uk', '').replace("size", '').replace('y', '').replace('c', '').replace('w', '').replace(/ /g, '');
        } else {
          _0x3d84f8 = null;
        }

        if (_0x4bc15b.option2) {
          _0x3d39cf = _0x4bc15b.option2.toLowerCase().replace('-', '').replace("women's", '').replace("men's", '').replace('us', '').replace('uk', '').replace("size", '').replace('y', '').replace('c', '').replace('w', '').replace(/ /g, '');
        } else {
          _0x3d39cf = null;
        }

        return _0x3d84f8 && _0x3d84f8 == _0x22ea8b || _0x2e6130 && _0x2e6130 == _0x22ea8b || _0x3d39cf && _0x3d39cf == _0x22ea8b;
      });

      if (_0x172f9d) {
        _0x1804d8.push(_0x172f9d);
      }
    }

    const _0x34e72a = _0x1804d8[Math.floor(Math.random() * _0x1804d8.length)];

    return console.log(_0x34e72a), _0x34e72a ? _0x34e72a : null;
  };

  const _0x31615d = async function (_0x4d4ff6 = 200) {
    const _0x8ee296 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_283);

      throw "stopped";
    }

    try {
      const _0x4214d0 = await _0x525073.bind(this)(_0x207e78);

      const _0x3f696f = JSON.parse(_0x4214d0.body);

      let _0x1fb130 = [];

      _0x3f696f.products.forEach(_0x206284 => {
        const _0x4f9d65 = _0x8ee296;

        let _0x3ac34e = _0x206284.variants.filter(_0x2d4053 => _0x2d4053.available === !![] && (!this.siteOrigin.includes("shopnicekicks.com") || parseInt('0') >= 150));

        if (_0x3ac34e.length != 0) {
          _0x1fb130.push(_0x3ac34e[0]);
        }
      });

      _0x1fb130.sort((_0x5cb6da, _0x231083) => parseInt('0') > parseInt('0') ? 1 : -1);

      let _0x2ae019 = _0x1fb130[0];

      for (let _0x1dd083 of _0x1fb130) {
        if ('0' > 0) {
          _0x2ae019 = _0x1dd083;
          break;
        }
      }

      if (!_0x2ae019) {
        if (_0x4d4ff6 == 500) {
          return null;
        }

        return await _0x5fb498(3000), _0x31615d.bind(this)(_0x4d4ff6 + 50);
      }

      return _0x2ae019.id;
    } catch (err) {
      const _0x1607f1 = "1|0|4|2|3".split('|');

      let _0x312602 = 0;
      console.log("getPreload Variant");
      console.log(err.message);

      _0x5a14e3(arg_285);

      await _0x5fb498(this.monitorDelay);
      return _0x31615d.bind(this)(_0x4d4ff6);
    }
  };

  const _0xfb896 = _0x212919 => {
    const _0xc46ab1 = _0x8044f7;

    const _0x3df31e = _0x3066df.load(_0x212919, arg_286);

    return {
      'authToken': _0x3df31e("input[name=authenticity_token]").attr("value"),
      'siteKey': _0x13146d(_0x212919),
      'extraS': _0xeef169(_0x212919)
    };
  };

  const _0x13146d = _0xac1f8f => {
    const _0x4c28dc = _0x8044f7;

    const _0x49b2d5 = _0xac1f8f.indexOf("sitekey: \"");

    if (_0x49b2d5 == -1) {
      return null;
    }

    var arg_287 = _0x49b2d5 + 1;
    var arg_288 = _0x5866ba + 1;

    const _0x5866ba = _0xac1f8f.indexOf('\x22', arg_287);

    const _0xbd5bf1 = _0xac1f8f.indexOf(',', arg_288);

    return _0xac1f8f.substring(_0x5866ba + 1, _0xbd5bf1 - 1);
  };

  const _0xeef169 = _0x2d019b => {
    const _0x31801f = _0x8044f7;

    try {
      const _0x538742 = _0x2d019b.indexOf(" s: '");

      if (_0x538742 == -1) {
        return null;
      }

      var arg_290 = _0x538742 + 1;
      var arg_291 = _0x30d407 + 1;

      const _0x30d407 = _0x2d019b.indexOf('\x27', arg_290);

      const _0x4a2e9b = _0x2d019b.indexOf('\x27', arg_291);

      return _0x2d019b.substring(_0x30d407 + 1, _0x4a2e9b);
    } catch (err) {
      return null;
    }
  };

  const _0x153674 = async function (_0x157cf1, _0x1cfe36, _0x2ec8f8, _0x4f4837, _0x58f4cc, _0x4b1af2 = ![]) {
    const _0x368056 = _0x8044f7;
    this.needCaptcha = _0x1cfe36;

    _0x89a33e(_0x157cf1, _0x1cfe36, this.siteOrigin, _0x2ec8f8, _0x4f4837, this.id, this.proxy, this.modes, _0x58f4cc, _0x4b1af2);

    let _0xf06864 = _0x192d3d(_0x157cf1, _0x1cfe36, this.siteOrigin, _0x2ec8f8, _0x4f4837, this.id, this.proxy, this.modes, _0x58f4cc, _0x4b1af2);

    while (this.running && !_0xf06864) {
      await _0x5fb498(50);
      _0xf06864 = _0x192d3d(_0x157cf1, _0x1cfe36, this.siteOrigin, _0x2ec8f8, _0x4f4837, this.id, this.proxy, this.modes, _0x58f4cc, _0x4b1af2);
    }

    this.needCaptcha = ![];

    if (_0xf06864 && _0xf06864.cancel) {
      return await _0x5fb498(1000), _0x153674.bind(this)(_0x157cf1, _0x1cfe36, _0x2ec8f8, _0x4f4837, _0x58f4cc, _0x4b1af2);
    }

    return _0xf06864;
  };

  const _0x233257 = async function () {
    const _0x47a099 = _0x8044f7;

    _0xef1270(this.needCaptcha, this.id);
  };

  const _0x4bcc70 = (_0x37e85f, _0x5219c9) => {
    const _0x105f85 = _0x8044f7;

    let _0x3428a4 = _0x37e85f.paymentStatus != "Success";

    let _0x88378d = [];
    let _0x267878 = [];
    var arg_292 = new Date().getTimezoneOffset();

    var _0x18ddb0 = arg_292 * 60000;

    var _0x410967 = new Date(Date.now() - 28800000).toISOString().slice(0, -1);

    _0x267878.push(arg_293);

    _0x267878.push(arg_294);

    _0x267878.push(arg_295);

    _0x267878.push(arg_296);

    _0x267878.push(arg_297);

    _0x267878.push(arg_298);

    _0x267878.push(arg_299);

    _0x267878.push(arg_300);

    _0x267878.push(arg_301);

    if (_0x5219c9) {
      _0x267878.push(arg_304);

      _0x267878.push(arg_305);

      _0x267878.push(arg_306);

      _0x267878.push(arg_307);
    }

    _0x267878.push(arg_302);

    _0x267878.push(arg_303);

    return _0x88378d.push(_0x4f471a), _0x160047.embeds = _0x88378d, _0x160047;
  };

  const _0x67e7a4 = async function () {
    const _0x3612e0 = _0x8044f7;

    let _0x1ab4ff = await this.session.cookies.get({
      'url': this.siteOrigin,
      'name': "_queue_replay_data"
    });

    return _0x1ab4ff && _0x1ab4ff.length > 0;
  };

  const _0x4c9ecb = async function (_0x1af03c, _0x4d0244, _0x5c66e9 = ![]) {
    const _0xa6dcd9 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_309);

      throw "stopped";
    }

    try {
      let _0x9d244 = _0x5c66e9 || (await _0x67e7a4.bind(this)());

      if (_0x9d244) {
        _0x5a14e3(arg_310);

        let _0x87056f = "/queue/poll";

        try {
          _0x87056f = /data-poll-url="(.*)">/.exec(_0x4d0244.body)[1];
        } catch (err) {
          _0x87056f = _0x172aa3.QImVm;
        }

        return _0x58c23a.bind(this)(_0x1af03c, _0x87056f);
      }
    } catch (err) {
    }

    _0x5a14e3(arg_308);

    try {
      var arg_311 = '[' + new Date().toISOString() + "]: polling queue: " + this.siteOrigin + "/checkout/poll?js_poll=1";

      _0x2d2bdc(arg_311, this.logFilePath);

      const _0x1f212b = await _0x525073.bind(this)(_0x410305);

      let _0x46b755 = _0x1f212b.statusCode;
      this.currentURL = _0x1f212b.request.uri.href;
      var arg_312 = '[' + new Date().toISOString() + "]: polling queue res: " + _0x46b755 + " with url: " + this.currentURL;

      _0x2d2bdc(arg_312, this.logFilePath);

      console.log("poll old queue");
      console.log(_0x1f212b.headers["set-cookie"]);

      if (_0x46b755 == 202 || _0x46b755 == 200 || _0x46b755 == 400) {
        if (_0x46b755 == 202) {
          return await _0x5fb498(5000), _0x4c9ecb.bind(this)(_0x1af03c, _0x4d0244);
        } else {
          if (_0x46b755 == 400) {
            let _0x2ed9e8 = "/queue/poll";

            try {
              _0x2ed9e8 = /data-poll-url="(.*)">/.exec(_0x4d0244.body)[1];
            } catch (err) {
              _0x2ed9e8 = _0x172aa3.QImVm;
            }

            await _0x58c23a.bind(this)(_0x1af03c, _0x2ed9e8);
          }
        }

        return _0x1f212b;
      } else {
        return _0x2d2bdc('[' + new Date().toISOString() + "]: polling queue failed: " + _0x46b755, this.logFilePath), _0x5a14e3({
          'id': this.id,
          'status': "Poll Queue Failed " + _0x46b755 + ", Retry",
          'statusCode': 4,
          'groupId': this.groupId
        }), await _0x5fb498(_0x56cb88.SHOPIFY), _0x4c9ecb.bind(this)(_0x1af03c, _0x4d0244);
      }
    } catch (err) {
      const _0x26534f = "2|1|0|3|4|5".split('|');

      let _0x1bd1e2 = 0;
      console.log("poll queue");
      console.log(err.message);
      var arg_313 = '[' + new Date().toISOString() + "]: polling queue failed: " + err.message;

      _0x2d2bdc(arg_313, this.logFilePath);

      _0x5a14e3(arg_314);

      await _0x5fb498(_0x56cb88.SHOPIFY);
      return _0x4c9ecb.bind(this)(_0x1af03c, _0x4d0244);
    }
  };

  const _0x418b92 = async function (_0x4475e6) {
    const _0x42316c = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_316);

      throw "stopped";
    }

    _0x5a14e3(arg_315);

    try {
      var arg_317 = '[' + new Date().toISOString() + "]: polling payment queue";
      console.log(arg_317);

      var arg_318 = '[' + new Date().toISOString() + "]: polling payment queue: " + _0x4475e6;

      _0x2d2bdc(arg_318, this.logFilePath);

      const _0x1078be = await _0x525073.bind(this)(_0x44c8c7);

      let _0x271ec = _0x1078be.statusCode;

      var arg_319 = '[' + new Date().toISOString() + "]: payment queue : " + _0x271ec;

      _0x2d2bdc(arg_319, this.logFilePath);

      if (_0x271ec == 200) {
        let _0x505255 = _0x1078be.request.uri.href;

        if (_0x505255.includes("processing") && !_0x505255.includes("validate")) {
          return await _0x5fb498(4000), _0x418b92.bind(this)(_0x4475e6);
        }

        return _0x1078be;
      } else {
        if (_0x271ec == 429) {
          _0x5a14e3(arg_321);
        } else {
          _0x5a14e3(arg_323);
        }

        return await _0x5fb498(this.monitorDelay), _0x418b92.bind(this)(_0x4475e6);
      }
    } catch (err) {
      const _0x273ab3 = "0|2|3|1|4|5".split('|');

      let _0x2b9154 = 0;
      console.log("poll queue");
      console.log(err);
      var arg_324 = '[' + new Date().toISOString() + "]: poll queue failed " + err;

      _0x2d2bdc(arg_324, this.logFilePath);

      _0x5a14e3(arg_325);

      await _0x5fb498(4000);
      return _0x418b92.bind(this)(_0x4475e6);
    }
  };

  const _0x2f7ea1 = async function (_0x39eaa2, _0x1df5dd = !![]) {
    const _0x22a9bb = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_328);

      throw "stopped";
    }

    try {
      const _0x21ca33 = await _0x525073.bind(this)(_0x1f2748);

      const _0x400033 = _0x21ca33.statusCode;

      var arg_329 = '[' + new Date().toISOString() + "]: loading url : " + _0x39eaa2 + " with status " + _0x400033;

      _0x2d2bdc(arg_329, this.logFilePath);

      if (_0x400033 == 200) {
        return this.currentURL = _0x21ca33.request.uri.href, _0x21ca33;
      } else {
        if (_0x400033 == 302 || _0x400033 == 301 || _0x400033 == 307) {
          let _0x925c11 = _0x21ca33.request.uri.href;

          var arg_331 = '[' + new Date().toISOString() + "]: redirect: " + _0x925c11;

          _0x2d2bdc(arg_331, this.logFilePath);

          if (_0x925c11.includes("stock_problems")) {
            return _0x21ca33;
          }

          return _0x2f7ea1.bind(this)(_0x925c11, _0x1df5dd);
        } else {
          if (_0x400033 == 410) {
            return _0x5a14e3({
              'id': this.id,
              'status': "Session Expired, Retry",
              'statusCode': 4,
              'groupId': this.groupId
            }), _0x2d2bdc('[' + new Date().toISOString() + "]: checkout session expired, retrying", this.logFilePath), _0x2f7ea1.bind(this)(this.siteOrigin + "/checkout", _0x1df5dd);
          } else {
            if (_0x400033 == 429) {
              _0x5a14e3(arg_333);
            } else {
              _0x5a14e3(arg_334);
            }

            return _0x2d2bdc('[' + new Date().toISOString() + "]: Loading Page failed: " + _0x400033, this.logFilePath), await _0x5fb498(this.monitorDelay), _0x2f7ea1.bind(this)(_0x39eaa2, _0x1df5dd);
          }
        }
      }
    } catch (err) {
      const _0x564393 = "0|3|2|1|4|6|5".split('|');

      let _0x4bc286 = 0;
      console.log("get load Session");
      console.log(err);

      _0x5a14e3(arg_335);

      var arg_336 = '[' + new Date().toISOString() + "]: Loading Page failed: " + err;

      _0x2d2bdc(arg_336, this.logFilePath);

      await _0x5fb498(this.monitorDelay);

      _0x5a14e3(arg_337);

      return _0x2f7ea1.bind(this)(_0x39eaa2, _0x1df5dd);
    }
  };

  const _0x2bf0c2 = async function () {
    const _0x364989 = _0x8044f7;

    try {
      let _0x5bdbb7 = await this.session.cookies.get({
        'url': this.siteOrigin
      });

      let _0x48bb8c = _0x5bdbb7.find(_0x539fff => _0x539fff.name.includes("checkout_queue_token"));

      return decodeURIComponent(_0x48bb8c.value);
    } catch (err) {
      console.log(err);
    }
  };

  const _0x58c23a = async function (_0x584699, _0x439184) {
    const _0x406f7f = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_340);

      throw "stopped";
    }

    let _0x482ce5 = null;

    if (_0x439184.includes("http")) {
      _0x482ce5 = _0x439184;
    } else {
      _0x482ce5 = '' + this.siteOrigin + _0x439184;
    }

    try {
      var arg_342 = '[' + new Date().toISOString() + "]: polling queue: " + this.siteOrigin + "/queue/poll";

      _0x2d2bdc(arg_342, this.logFilePath);

      const _0x3bc084 = await _0x525073.bind(this)(_0x58da83);

      let _0x1c491c = _0x3bc084.statusCode;
      this.currentURL = _0x3bc084.request.uri.href;

      var arg_343 = '[' + new Date().toISOString() + "]: polling new queue res: " + _0x1c491c + " with url: " + this.currentURL + ", body: " + _0x3bc084.body;

      _0x2d2bdc(arg_343, this.logFilePath);

      if (_0x1c491c == 200) {
        let _0x3f38d8 = JSON.parse(_0x3bc084.body);

        console.log(_0x3f38d8);
        this.queueToken = _0x3f38d8.data.poll.token;
        let _0x5aaccb = _0x3f38d8.data.poll.pollAfter;
        let _0x271ecf = _0x3f38d8.data.poll.__typename;
        let _0x177b77 = _0x3f38d8.data.poll.queueEtaSeconds;

        _0x5a14e3(arg_344);

        if (_0x271ecf == "PollContinue") {
          var arg_345 = new Date(_0x5aaccb).getTime();
          var arg_346 = Date.now();

          let _0x35b5e5 = arg_345 - arg_346;

          return await _0x5fb498(_0x35b5e5 > 0 ? _0x35b5e5 : 500), _0x58c23a.bind(this)(_0x584699, _0x439184);
        } else {
          await this.session.cookies.remove(this.siteOrigin, "_checkout_queue_token");
          await this.session.cookies.set({
            'url': this.siteOrigin,
            'name': "_checkout_queue_token",
            'value': _0x3f38d8.data.poll.token
          });
          console.log("passed queue");
          this.queueToken = null;

          let _0x20875d = await this.session.cookies.get({
            'url': this.siteOrigin
          });

          let _0x5b24fa = _0x20875d.map(_0x314464 => _0x314464.name + '=' + _0x314464.value).join(';');

          var arg_349 = '[' + new Date().toISOString() + "]:passed queue Cookie: " + _0x5b24fa;

          _0x2d2bdc(arg_349, this.logFilePath);

          return;
        }
      } else {
        return _0x2d2bdc('[' + new Date().toISOString() + "]: polling queue failed: " + _0x1c491c, this.logFilePath), _0x5a14e3({
          'id': this.id,
          'status': "Poll Queue Failed " + _0x1c491c + ", Retry",
          'statusCode': 4,
          'groupId': this.groupId
        }), await _0x5fb498(10000), _0x58c23a.bind(this)(_0x584699, _0x439184);
      }
    } catch (err) {
      const _0x2cc2d8 = "5|3|6|2|1|4|0".split('|');

      let _0x5d072c = 0;
      console.log("poll queue");
      console.log(err.message);
      var arg_351 = '[' + new Date().toISOString() + "]: polling queue failed: " + err.message;

      _0x2d2bdc(arg_351, this.logFilePath);

      _0x5a14e3(arg_352);

      await _0x5fb498(_0x56cb88.SHOPIFY);

      _0x5a14e3(arg_353);

      return _0x58c23a.bind(this)(_0x584699, _0x439184);
    }
  };

  var _0x57d583 = require('qs');

  const _0x35026a = async function (_0x29ac1b = !![]) {
    const _0x474238 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_355);

      throw "stopped";
    }

    if (_0x29ac1b) {
      _0x5a14e3(arg_356);
    }

    try {
      if (this.siteOrigin.includes("doverstreetmarket")) {
        var arg_357 = '[' + new Date().toISOString() + "]: remove dummy item";
        console.log(arg_357);

        const _0x47b84d = await _0x525073.bind(this)(_0x24c858);

        let _0x1cf5eb = _0x47b84d.statusCode;

        var arg_358 = '[' + new Date().toISOString() + "]: removing dummy item... " + _0x47b84d.statusCode;

        _0x2d2bdc(arg_358, this.logFilePath);

        if (_0x1cf5eb == 302 || _0x1cf5eb == 200) {
          return _0x2d2bdc('[' + new Date().toISOString() + "]: item removed: " + _0x1cf5eb, this.logFilePath), _0x5a14e3({
            'id': this.id,
            'status': "Item Removed",
            'statusCode': 1,
            'groupId': this.groupId
          }), _0x47b84d;
        } else {
          return _0x1cf5eb == 429 ? _0x5a14e3({
            'id': this.id,
            'status': "Remove Item Failed (429), Retrying",
            'statusCode': 4,
            'groupId': this.groupId
          }) : _0x5a14e3({
            'id': this.id,
            'status': "Remove Item Failed (" + _0x1cf5eb + "), Retrying",
            'statusCode': 4,
            'groupId': this.groupId
          }), _0x2d2bdc('[' + new Date().toISOString() + "]: remove item failed: " + _0x1cf5eb, this.logFilePath), await _0x5fb498(this.monitorDelay), _0x35026a.bind(this)();
        }
      } else {
        var arg_359 = '[' + new Date().toISOString() + "]: remove dummy item";
        console.log(arg_359);

        const _0x37740b = await _0x525073.bind(this)(_0x1fca3d);

        let _0x596ebb = _0x37740b.statusCode;

        if (_0x29ac1b) {
          var arg_360 = '[' + new Date().toISOString() + "]: removing dummy item... " + _0x37740b.statusCode;

          _0x2d2bdc(arg_360, this.logFilePath);
        }

        if (_0x596ebb == 200) {
          return _0x29ac1b && _0x2d2bdc('[' + new Date().toISOString() + "]: item removed: " + _0x596ebb, this.logFilePath), _0x29ac1b && _0x5a14e3({
            'id': this.id,
            'status': "Item Removed",
            'statusCode': 1,
            'groupId': this.groupId
          }), _0x37740b;
        } else {
          if (_0x596ebb == 429) {
            _0x5a14e3(arg_361);
          } else {
            _0x5a14e3(arg_362);
          }

          return _0x2d2bdc('[' + new Date().toISOString() + "]: remove item failed: " + _0x596ebb, this.logFilePath), await _0x5fb498(this.monitorDelay), _0x35026a.bind(this)();
        }
      }
    } catch (err) {
      const _0x14e306 = "1|4|3|2|0".split('|');

      let _0x40faed = 0;
      console.log(err.message);
      var arg_363 = '[' + new Date().toISOString() + "]: removing dummy item... failed " + err.message;

      _0x2d2bdc(arg_363, this.logFilePath);

      _0x5a14e3(arg_364);

      await _0x5fb498(this.monitorDelay);
      return _0x35026a.bind(this)();
    }
  };

  const _0x1af34a = async function (_0x550ffb = ![], _0x138e32 = !![]) {
    const _0x2abcfd = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_367);

      throw "stopped";
    }

    if (_0x138e32) {
      _0x5a14e3(arg_369);
    }

    try {
      let _0x4d29e7 = null;

      if (_0x550ffb) {
        _0x4d29e7 = await _0x31615d.bind(this)();
      } else {
        if (_0x138e32) {
          var arg_371 = '[' + new Date().toISOString() + "]: getting variant by size: " + JSON.stringify(this.size);

          _0x2d2bdc(arg_371, this.logFilePath);
        }

        let _0x1eb4d5 = _0x467d29(this.variants, this.size);

        console.log(_0x1eb4d5);

        if (!_0x1eb4d5 || !_0x1eb4d5.id) {
          return _0x5a14e3({
            'id': this.id,
            'status': "Size Not Found",
            'statusCode': 1,
            'groupId': this.groupId
          }), this.running = ![], null;
        }

        _0x4d29e7 = _0x1eb4d5.id;
        this.checkoutInfo.price = _0x1eb4d5.price;
        this.checkoutInfo.size = _0x1eb4d5.title;
        this.checkoutInfo.sku = _0x4d29e7;
      }

      this.startTime = new Date().getTime();

      var arg_370 = '[' + new Date().toISOString() + "]: adding to cart " + _0x4d29e7;

      console.log(arg_370);

      let _0x493b87 = _0x2dd7a7(_0x4d29e7, this.cartFormInfo);

      if (!_0x550ffb && this.productLink) {
        _0x13d6bc.referer = this.productLink;
      }

      if (_0x138e32) {
        var arg_373 = '[' + new Date().toISOString() + "]: adding to cart " + _0x4d29e7;

        _0x2d2bdc(arg_373, this.logFilePath);
      }

      this.ready = !_0x550ffb && ![];

      const _0x4a50c3 = await _0x525073.bind(this)(_0x5f369d);

      let _0x29a4ce = _0x4a50c3.statusCode;

      if (_0x29a4ce == 200) {
        const _0x313c6b = "2|0|4|3|1".split('|');

        let _0x1f86dd = 0;
        this.ready = !_0x550ffb && !![];
        console.log(this.cartSig);

        if (_0x138e32) {
          var arg_374 = '[' + new Date().toISOString() + "]: item carted: " + _0x29a4ce;

          _0x2d2bdc(arg_374, this.logFilePath);
        }

        this.price = JSON.parse(_0x4a50c3.body).price;
        return _0x4a50c3;
      } else {
        this.ready = !_0x550ffb && !![];

        if (_0x29a4ce == 429 || _0x29a4ce == 430) {
          _0x5a14e3(arg_375);
        } else {
          if (_0x29a4ce == 422) {
            _0x5a14e3(arg_376);
          } else {
            _0x5a14e3(arg_377);
          }
        }

        return _0x2d2bdc('[' + new Date().toISOString() + "]: adding to cart failed: " + _0x29a4ce, this.logFilePath), await _0x5fb498(this.monitorDelay), _0x1af34a.bind(this)(_0x550ffb, _0x138e32);
      }
    } catch (err) {
      const _0x1d0ec2 = "4|0|1|2|3|5".split('|');

      let _0xbea230 = 0;

      _0x5a14e3(arg_392);

      console.log(err);
      this.ready = !_0x550ffb && !![];
      var arg_393 = '[' + new Date().toISOString() + "]: adding to cart failed, " + err;

      _0x2d2bdc(arg_393, this.logFilePath);

      await _0x5fb498(this.monitorDelay);
      return _0x1af34a.bind(this)(_0x550ffb, _0x138e32);
    }
  };

  const _0x4e8b79 = async function () {
    const _0x522c6f = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_397);

      throw "stopped";
    }

    _0x5a14e3(arg_396);

    try {
      if (this.note) {
        _0x5ccce1.note = this.note;
      }

      if (this.productLink) {
        _0x4c3235.referer = this.productLink;
      }

      var arg_398 = '[' + new Date().toISOString() + "]: Creating Checkout";

      _0x2d2bdc(arg_398, this.logFilePath);

      const _0x510328 = await _0x525073.bind(this)(_0x5e1a9b);

      const _0x27fef7 = _0x510328.statusCode;

      if (_0x27fef7 == 200) {
        return _0x510328;
      } else {
        if (_0x27fef7 == 302 || _0x27fef7 == 303 || _0x27fef7 == 307) {
          let _0x58d98f = await _0x2f7ea1.bind(this)(_0x510328.headers.location);

          return _0x58d98f;
        } else {
          if (_0x27fef7 == 429) {
            _0x5a14e3(arg_400);
          } else {
            _0x5a14e3(arg_401);
          }

          return _0x2d2bdc('[' + new Date().toISOString() + "]: Creating Checkout failed: " + _0x27fef7, this.logFilePath), await _0x5fb498(this.monitorDelay), _0x4e8b79.bind(this)();
        }
      }
    } catch (err) {
      const _0x595a96 = "5|1|3|0|4|2".split('|');

      let _0x1c89d5 = 0;
      console.log("update cart");
      console.log(err.message);

      _0x5a14e3(arg_406);

      var arg_407 = '[' + new Date().toISOString() + "]: updating cart failed " + err.message;

      _0x2d2bdc(arg_407, this.logFilePath);

      await _0x5fb498(this.monitorDelay);
      return _0x4e8b79.bind(this)();
    }
  };

  const _0x383d53 = async function (_0x354a51, _0x5c763f, _0x5da56f = {}) {
    const _0x6640c1 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_410);

      throw "stopped";
    }

    try {
      let {
        authToken: _0x10994b
      } = _0x354a51;

      if (!this.running) {
        _0x5a14e3(arg_416);

        throw "stopped";
      }

      _0x5a14e3(arg_411);

      var arg_412 = '[' + new Date().toISOString() + "]: sending checkpoint captcha";
      console.log(arg_412);
      var arg_413 = '[' + new Date().toISOString() + "]: sending checkpoint captcha";

      _0x2d2bdc(arg_413, this.logFilePath);

      if (_0x354a51.formBody) {
        _0x3e8f35.body = _0x354a51.formBody;
      } else {
        _0x3e8f35.form = {
          'authenticity_token': _0x10994b,
          'g-recaptcha-response': _0x5da56f.captchaToken,
          'data_via': "cookie",
          'commit': ''
        };
      }

      const _0x2c6313 = await _0x525073.bind(this)(_0x3e8f35);

      let _0x1b9ea9 = _0x2c6313.statusCode;

      _0x5a14e3(arg_414);

      var arg_415 = '[' + new Date().toISOString() + "]: sending checkpoint captcha status " + _0x1b9ea9;

      _0x2d2bdc(arg_415, this.logFilePath);

      if (_0x1b9ea9 == 200) {
        return _0x2c6313;
      } else {
        if (_0x1b9ea9 == 302 || _0x1b9ea9 == 303 || _0x1b9ea9 == 403) {
          return _0x2c6313;
        } else {
          return _0x5a14e3({
            'id': this.id,
            'status': "Checkpoint Failed " + _0x1b9ea9 + ", Retrying",
            'statusCode': 4,
            'groupId': this.groupId
          }), await _0x5fb498(this.monitorDelay), _0x383d53.bind(this)(_0x354a51, _0x5c763f, _0x5da56f);
        }
      }
    } catch (err) {
      const _0x55496e = "0|3|1|4|2".split('|');

      let _0x508ca0 = 0;
      console.log(err);
      var arg_418 = '[' + new Date().toISOString() + "]: Submitting Checkpoint failed " + err;

      _0x2d2bdc(arg_418, this.logFilePath);

      _0x5a14e3(arg_419);

      await _0x5fb498(this.monitorDelay);
      return _0x383d53.bind(this)(_0x354a51, _0x5c763f, _0x5da56f);
    }
  };

  const _0x2dd7a7 = (_0x57b8a3, _0x1ebbf8) => {
    const _0x531469 = _0x8044f7;

    try {
      if (typeof _0x1ebbf8 == "string") {
        let _0xed6fed = _0x57d583.parse(_0x1ebbf8);

        return _0xed6fed.id = _0x57b8a3, _0xed6fed.quantity = 1, console.log(_0xed6fed), _0xed6fed;
      } else {
        _0x59d6aa.properties = _0x1ebbf8;
      }
    } catch (err) {
    }

    return _0x59d6aa;
  };

  const _0x2f37f4 = (_0xfc8427, _0x4a61f7, _0x35848b = ![], _0x4dabb1 = ![], _0xd4ca32 = null, _0x1ea96a = null) => {
    const _0x249037 = _0x8044f7;
    let _0x2b5c3e = [];

    let _0x5aa8de = -1;

    let _0xab8716 = -1;

    let _0x4d5ecb = _0x254bef(_0xfc8427, _0x35848b);

    let _0xe4a1b1 = ![];

    return _0x4d5ecb.forEach((_0xcebd3, _0x975c0e) => {
      const _0x3dc157 = _0x249037;

      let _0x1154a7 = _0x4b1055(_0xcebd3.attribs.name, _0x4a61f7, _0x4dabb1);

      if (_0xcebd3.attribs.name.includes(_0x1445e2.TsvJr) && !_0x4a61f7[_0x1445e2.BhKHM] && !_0xe4a1b1) {
        const _0x2ecd59 = _0x1445e2.Asmoe.split('|');

        let _0x4d838e = 0;

        while (!![]) {
          switch (_0x2ecd59[_0x4d838e++]) {
            case '0':
              _0x2b5c3e.push(encodeURIComponent(_0x1445e2.xLAkk) + '=' + _0x4a61f7[_0x1445e2.SXgKC][_0x1445e2.yeVlT]);

              continue;

            case '1':
              _0x2b5c3e.push(encodeURIComponent(_0x1445e2.xLAkk) + '=' + _0x4a61f7[_0x1445e2.SXgKC][_0x1445e2.yeVlT]);

              continue;

            case '2':
              _0x2b5c3e.push(encodeURIComponent(_0x1445e2.WiKMh) + '=' + _0x4a61f7[_0x1445e2.SXgKC][_0x1445e2.CjLfs]);

              continue;

            case '3':
              _0x2b5c3e.push(encodeURIComponent(_0x1445e2.bqqkr) + '=' + _0x4a61f7[_0x1445e2.SXgKC][_0x1445e2.yyIKm]);

              continue;

            case '4':
              _0x2b5c3e.push(encodeURIComponent(_0x1445e2.UDktx) + '=' + _0x4a61f7[_0x1445e2.bGaqM]);

              continue;

            case '5':
              _0x2b5c3e.push(encodeURIComponent(_0x1445e2.whPSV) + '=' + _0x4a61f7[_0x1445e2.SXgKC][_0x1445e2.EbiCT][_0x1445e2.wLpFg]);

              continue;

            case '6':
              _0x2b5c3e.push(encodeURIComponent(_0x1445e2.WiKMh) + '=' + _0x4a61f7[_0x1445e2.SXgKC][_0x1445e2.CjLfs]);

              continue;

            case '7':
              _0x2b5c3e.push(encodeURIComponent(_0x1445e2.sDNKe) + '=' + _0x4a61f7[_0x1445e2.SXgKC][_0x1445e2.nFRol]);

              continue;

            case '8':
              _0x2b5c3e.push(encodeURIComponent(_0x1445e2.Zwdba) + '=' + _0x4a61f7[_0x1445e2.SXgKC][_0x1445e2.BVzry]);

              continue;

            case '9':
              _0x2b5c3e.push(encodeURIComponent(_0x1445e2.whPSV) + '=' + _0x4a61f7[_0x1445e2.SXgKC][_0x1445e2.EbiCT][_0x1445e2.wLpFg]);

              continue;

            case '10':
              _0x2b5c3e.push(encodeURIComponent(_0xcebd3.attribs.name) + "=true");

              continue;

            case '11':
              _0x2b5c3e.push(encodeURIComponent(_0x1445e2.MTJpg) + '=' + _0x4a61f7[_0x1445e2.SXgKC][_0x1445e2.NpVaK]);

              continue;

            case '12':
              _0x2b5c3e.push(encodeURIComponent(_0x1445e2.bqqkr) + '=' + _0x4a61f7[_0x1445e2.SXgKC][_0x1445e2.yyIKm]);

              continue;

            case '13':
              _0x2b5c3e.push(encodeURIComponent(_0x1445e2.sDNKe) + '=' + _0x4a61f7[_0x1445e2.SXgKC][_0x1445e2.nFRol]);

              continue;

            case '14':
              _0x2b5c3e.push(encodeURIComponent(_0x1445e2.UbmZx) + '=' + _0x4a61f7[_0x1445e2.SXgKC][_0x1445e2.AFBXS][_0x1445e2.eihdJ]);

              continue;

            case '15':
              _0x2b5c3e.push(encodeURIComponent(_0x1445e2.UbmZx) + '=' + _0x4a61f7[_0x1445e2.SXgKC][_0x1445e2.AFBXS][_0x1445e2.wLpFg]);

              continue;

            case '16':
              return;

            case '17':
              _0xe4a1b1 = !![];
              continue;

            case '18':
              _0x2b5c3e.push(encodeURIComponent(_0x1445e2.MTJpg) + '=' + _0x4a61f7[_0x1445e2.SXgKC][_0x1445e2.NpVaK]);

              continue;

            case '19':
              _0x2b5c3e.push(encodeURIComponent(_0x1445e2.UDktx) + '=' + _0x4a61f7[_0x1445e2.bGaqM]);

              continue;

            case '20':
              _0x2b5c3e.push(encodeURIComponent(_0x1445e2.Zwdba) + '=' + _0x4a61f7[_0x1445e2.SXgKC][_0x1445e2.BVzry]);

              continue;
          }

          break;
        }
      }

      if (_0xa7df8a(_0xcebd3.attribs, _0x2b5c3e)) {
        return;
      }

      if (_0x1154a7 != null) {
        var arg_428 = encodeURIComponent(_0xcebd3.attribs.name) + '=' + encodeURIComponent(_0x1154a7);

        _0x2b5c3e.push(arg_428);
      } else {
        if (_0xcebd3.attribs.name.includes(_0x1445e2.FdKAC)) {
          _0x5aa8de = _0x975c0e;
        } else {
          if (_0xcebd3.attribs.name.includes(_0x1445e2.bSYwg)) {
            _0xab8716 = _0x975c0e;
          } else {
            if (_0xcebd3.attribs.name.includes(_0x1445e2.RbdUJ)) {
              var arg_436 = _0xab8716 - _0x5aa8de;
              var arg_435 = _0xcebd3.attribs.name + '=' + (arg_436 - 1);

              _0x2b5c3e.push(arg_435);
            }

            var arg_434 = null;

            if (_0xcebd3.attribs.value == null) {
              arg_434 = '';
            } else {
              arg_434 = _0xcebd3.attribs.value;
            }

            var arg_433 = encodeURIComponent(_0xcebd3.attribs.name) + '=' + encodeURIComponent(arg_434);

            _0x2b5c3e.push(arg_433);
          }
        }

        if (_0xcebd3.attribs.name == _0x1445e2.XheZf && _0x1ea96a) {
          var arg_437 = encodeURIComponent(_0x1445e2.QOqQm) + '=' + encodeURIComponent(_0x1ea96a);

          _0x2b5c3e.push(arg_437);
        }
      }
    }), _0xd4ca32 != null && _0x2b5c3e.push("g-recaptcha-response=" + _0xd4ca32), _0x2b5c3e.push(encodeURIComponent("checkout[client_details][browser_width]") + "=1222"), _0x2b5c3e.push(encodeURIComponent("checkout[client_details][browser_height]") + "=910"), _0x2b5c3e.push(encodeURIComponent("checkout[client_details][javascript_enabled]") + '=1'), _0x2b5c3e.push(encodeURIComponent("checkout[client_details][color_depth]") + "=24"), _0x2b5c3e.push(encodeURIComponent("checkout[[client_details][java_enabled]") + "=false"), _0x2b5c3e.push(encodeURIComponent("checkout[client_details][browser_tz]") + "=420"), console.log(_0x2b5c3e), _0x2b5c3e.join('&');
  };

  const _0xa7df8a = (_0x22096b, _0x5e6277) => {
    const _0xe5c529 = _0x8044f7;
    return _0x22096b.name.includes("button") || _0x22096b.name.includes("checkout[remember_me]") && _0x22096b.value == 1 || _0x22096b.name.includes("checkout[different_billing_address]") && _0x22096b.value == "true" || _0x22096b.name.includes("hosted_fields_redirect") || _0x22096b.name.includes("button") && _0x5e6277.join('&').includes("button=") || _0x22096b.name.includes("checkout[shipping_rate][id]") && _0x5e6277.join('&').includes(encodeURIComponent("checkout[shipping_rate][id]")) || _0x22096b.name.includes("gateway") && _0x5e6277.join('&').includes("gateway");
  };

  const _0x4610ac = (_0x2b8289, _0x212162) => {
    const _0x231ef8 = _0x8044f7;

    if (_0x212162) {
      return !![];
    }

    while (_0x2b8289 != null) {
      if (_0x2b8289.attribs && _0x2b8289.attribs["data-address-fields"] != null) {
        return ![];
      }

      _0x2b8289 = _0x2b8289.parent;
    }

    return !![];
  };

  const _0x254bef = (_0x5ac405, _0x2ae441) => {
    const _0x2cd2cc = _0x8044f7;
    let _0x478e5e = [];

    if (_0x5ac405 && _0x5ac405.attribs && _0x5ac405.attribs.name != null && _0x4610ac(_0x5ac405, _0x2ae441)) {
      _0x478e5e.push(_0x5ac405);
    }

    if (_0x5ac405 == null || _0x5ac405.children == [] || _0x5ac405.children == null) {
      return _0x478e5e;
    }

    return _0x5ac405.children.forEach(_0x1f47f5 => {
      const _0x407c5a = _0x2cd2cc;

      var arg_441 = _0x254bef(_0x1f47f5, _0x2ae441);

      _0x478e5e = _0x478e5e.concat(arg_441);
    }), _0x478e5e;
  };

  const _0x4b1055 = (_0x328ba4, _0xe3b51a, _0x42490a) => {
    const _0x5951ab = _0x8044f7;

    if (_0x328ba4.includes("email")) {
      return _0xe3b51a.email;
    } else {
      if (_0x328ba4.includes("first")) {
        return _0xe3b51a.shipping.firstName;
      } else {
        if (_0x328ba4.includes("last")) {
          return _0xe3b51a.shipping.lastName;
        } else {
          if (_0x328ba4.includes("address1")) {
            return _0xe3b51a.shipping.address1;
          } else {
            if (_0x328ba4.includes("address2")) {
              return _0xe3b51a.shipping.address2;
            } else {
              if (_0x328ba4.includes("city") && !_0x328ba4.includes("token")) {
                return _0xe3b51a.shipping.city;
              } else {
                if (_0x328ba4.includes("country")) {
                  return _0xe3b51a.shipping.country.long;
                } else {
                  if (_0x328ba4.includes("province")) {
                    return _0xe3b51a.shipping.state.short;
                  } else {
                    if (_0x328ba4.includes("zip")) {
                      return _0xe3b51a.shipping.zip;
                    } else {
                      if (_0x328ba4.includes("phone")) {
                        return _0x42490a ? '+1' + _0xe3b51a.phone : _0xe3b51a.phone;
                      } else {
                        if (_0x328ba4.includes("gateway")) {
                          return _0xe3b51a.gateway;
                        } else {
                          if (_0x328ba4 == 's') {
                            return _0xe3b51a.s;
                          } else {
                            return null;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  };

  const _0x31890c = async function (_0x8cc5d2, _0x4d876b, _0x4efedb = {}, _0x4d1094 = ![]) {
    const _0x44ec14 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_449);

      throw "stopped";
    }

    try {
      let _0x50b7bc = _0xfb896(_0x8cc5d2);

      const _0x1aff71 = _0x3066df.load(_0x8cc5d2, arg_451);

      console.log(_0x4efedb);
      let {
        siteKey: _0x16347c,
        extraS: _0x20b6f4
      } = _0x50b7bc;

      if (_0x16347c != null && (!_0x4efedb.captchaToken || Date.now() > _0x4efedb.ts + 110 * 1000)) {
        const _0xf4bd5d = "2|0|1|4|3".split('|');

        let _0x52c1b7 = 0;

        if (!_0x4d1094) {
          var arg_453 = '[' + new Date().toISOString() + "]: extracted captcha info: sitekey: " + _0x16347c + ", extraS: " + _0x20b6f4 + ", waiting for captcha";

          _0x2d2bdc(arg_453, this.logFilePath);
        }

        var arg_452 = '[' + new Date().toISOString() + "]: waiting for captcha";
        console.log(arg_452);

        if (!_0x4d1094) {
          _0x5a14e3(arg_454);
        }

        _0x4efedb.captchaToken = await _0x153674.bind(this)(_0x4d876b, _0x4802da.SHOPIFY_CHECKOUT, _0x16347c, _0x20b6f4, '');
        _0x4efedb.ts = Date.now();
      }

      if (!this.running) {
        return;
      }

      if (!_0x4d1094) {
        _0x5a14e3(arg_455);
      }

      const _0x4a2308 = await _0x525073.bind(this)(_0x581616);

      let _0x56c28c = _0x4a2308.statusCode;

      if (!_0x4d1094) {
        var arg_456 = '[' + new Date().toISOString() + "]: Submitting Details: " + _0x56c28c + " with " + _0x4a2308.request.uri.href;

        _0x2d2bdc(arg_456, this.logFilePath);
      }

      if (_0x56c28c == 200) {
        if (_0x4a2308.body.includes("Complete the reCAPTCHA to continue")) {
          return !_0x4d1094 && _0x2d2bdc('[' + new Date().toISOString() + "]: Captcha Found", this.logFilePath), _0x31890c.bind(this)(_0x4a2308.body, _0x4d876b, _0x4efedb, _0x4d1094);
        }

        if (_0x4a2308.request.uri.href.includes("throttle")) {
          return await _0x4c9ecb.bind(this)(this.siteOrigin, _0x4a2308), _0x31890c.bind(this)(_0x8cc5d2, _0x4d876b, _0x4efedb, _0x4d1094);
        } else {
          return _0x4a2308;
        }

        return _0x4a2308;
      } else {
        if (_0x56c28c == 302 || _0x56c28c == 301 || _0x56c28c == 307) {
          let _0x47eba7 = _0x4a2308.request.uri.href;
          return !_0x4d1094 && _0x2d2bdc('[' + new Date().toISOString() + "]: submitting detail redirect: " + _0x47eba7, this.logFilePath), _0x2f7ea1.bind(this)(_0x47eba7, ![]);
        } else {
          const _0x25fd00 = "5|0|1|2|3|4".split('|');

          let _0xf862dd = 0;

          if (_0x56c28c == 429) {
            if (!_0x4d1094) {
              _0x5a14e3(arg_484);
            }
          } else {
            if (!_0x4d1094) {
              _0x5a14e3(arg_485);
            }
          }

          if (!_0x4d1094) {
            var arg_486 = '[' + new Date().toISOString() + "]: Submitting Details failed: " + _0x56c28c;

            _0x2d2bdc(arg_486, this.logFilePath);
          }

          await _0x45a98b(this.monitorDelay);
          var arg_483 = "Submitting Details failed: " + _0x56c28c;
          console.log(arg_483);
          console.log(_0x4efedb);
          return _0x31890c.bind(this)(_0x8cc5d2, _0x4d876b, _0x4efedb, _0x4d1094);
        }
      }
    } catch (err) {
      const _0x1f7f06 = "0|2|3|5|1|4".split('|');

      let _0x4dc9c0 = 0;
      console.log("submit billing");
      console.log(err);

      if (!_0x4d1094) {
        var arg_487 = '[' + new Date().toISOString() + "]: Submitting Details failed, " + err;

        _0x2d2bdc(arg_487, this.logFilePath);
      }

      if (!_0x4d1094) {
        _0x5a14e3(arg_488);
      }

      await _0x45a98b(this.monitorDelay);
      return _0x31890c.bind(this)(_0x8cc5d2, _0x4d876b, _0x4efedb, _0x4d1094);
    }
  };

  const _0x4cf152 = async function (_0x2dc605, _0x210ffa = ![]) {
    const _0x2e7f09 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_490);

      throw "stopped";
    }

    if (this.preDefinedShippingRate && !_0x2dc605.body.includes("Your cart has been updated")) {
      this.preloadShippingRate = this.preDefinedShippingRate;

      let _0x534210 = _0x3066df.load(_0x2dc605.body, arg_491);

      let _0x509b46 = _0x2f37f4(_0x534210("[data-shipping-method-form]").get()[0], this.profile, ![], ![], null, this.preDefinedShippingRate);

      return {
        'form': _0x509b46,
        'oos': ![],
        'result': _0x2dc605
      };
    } else {
      try {
        const _0x15f2bf = _0x3066df.load(_0x2dc605.body, arg_492);

        const _0x174233 = _0x2f37f4(_0x15f2bf("[data-shipping-method-form]").get()[0], this.profile, ![], ![]);

        var arg_495 = decodeURI(_0x174233).replace(/"/g, '\x5c\x22').replace(/&/g, "\",\"").replace(/=/g, "\":\"");
        var arg_494 = '{\x22' + arg_495;
        var arg_493 = arg_494 + '\x22}';

        let _0x4815d5 = JSON.parse(arg_493);

        let _0x1a80f6 = _0x4815d5["checkout[shipping_rate][id]"];

        if (_0x1a80f6 && _0x1a80f6.trim().length != 0) {
          return this.preloadShippingRate = _0x1a80f6, !_0x210ffa && _0x2d2bdc('[' + new Date().toISOString() + "]: shipping rate fetched: " + _0x1a80f6, this.logFilePath), {
            'form': _0x174233,
            'oos': ![],
            'result': _0x2dc605
          };
        }
      } catch (err) {
      }
    }

    if (!_0x210ffa) {
      _0x5a14e3(arg_497);
    }

    try {
      if (!_0x210ffa) {
        var arg_499 = '[' + new Date().toISOString() + "]: calculating shippingrate";

        _0x2d2bdc(arg_499, this.logFilePath);
      }

      var arg_498 = '[' + new Date().toISOString() + "]: calculating shippingrate";
      console.log(arg_498);

      const _0x17fade = await _0x525073.bind(this)(_0x368c08);

      let _0x4381bd = _0x17fade.statusCode;

      if (_0x4381bd == 200) {
        if (_0x17fade.request.uri.href.includes("/stock_problems")) {
          return {
            'form': null,
            'oos': !![],
            'result': _0x17fade
          };
        }

        if (_0x17fade.body.includes("Shopify.Checkout.step = \"payment_method\"")) {
          return {
            'form': null,
            'oos': ![],
            'result': _0x17fade
          };
        }

        const _0x592f29 = _0x3066df.load(_0x17fade.body, arg_502);

        const _0x2e2a7e = _0x2f37f4(_0x592f29("[data-shipping-method-form]").get()[0], this.profile, ![], ![]);

        var arg_505 = decodeURI(_0x2e2a7e).replace(/"/g, '\x5c\x22').replace(/&/g, "\",\"").replace(/=/g, "\":\"");
        var arg_504 = '{\x22' + arg_505;
        var arg_503 = arg_504 + '\x22}';

        let _0x4b195a = JSON.parse(arg_503);

        console.log(_0x4b195a);
        let _0xda178a = _0x4b195a["checkout[shipping_rate][id]"];

        if (!_0xda178a || _0xda178a.trim().length == 0) {
          return await _0x45a98b(100), _0x4cf152.bind(this)(_0x2dc605, _0x210ffa);
        }

        return this.preloadShippingRate = _0xda178a, !_0x210ffa && _0x2d2bdc('[' + new Date().toISOString() + "]: shippingRate fetched: " + _0xda178a, this.logFilePath), {
          'form': _0x2e2a7e,
          'oos': ![],
          'result': _0x17fade
        };
      } else {
        if (_0x4381bd == 429) {
          if (!_0x210ffa) {
            _0x5a14e3(arg_507);
          }
        } else {
          if (!_0x210ffa) {
            _0x5a14e3(arg_508);
          }
        }

        return !_0x210ffa && _0x2d2bdc('[' + new Date().toISOString() + "]: fetching shipping failed: " + _0x4381bd, this.logFilePath), await _0x45a98b(this.monitorDelay), _0x4cf152.bind(this)(_0x2dc605, _0x210ffa);
      }
    } catch (err) {
      const _0x29a35a = "1|5|4|2|0|3".split('|');

      let _0x48843c = 0;
      console.log("calculte shipping");
      console.log(err);

      if (!_0x210ffa) {
        var arg_509 = '[' + new Date().toISOString() + "]: Calculate ShippingRate Failed " + err;

        _0x2d2bdc(arg_509, this.logFilePath);
      }

      if (!_0x210ffa) {
        _0x5a14e3(arg_510);
      }

      await _0x45a98b(this.monitorDelay);
      return _0x4cf152.bind(this)(_0x2dc605, _0x210ffa);
    }
  };

  const _0x23eece = async function (_0x455570, _0x1eae7d = ![]) {
    const _0x4f96c5 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_512);

      throw "stopped";
    }

    if (!_0x1eae7d) {
      _0x5a14e3(arg_513);
    }

    try {
      this.checkoutToken = this.currentURL.split('?')[0].split('/').pop();

      const _0x112e30 = await _0x525073.bind(this)(_0x877c69);

      let _0x3085c6 = _0x112e30.statusCode;

      if (!_0x1eae7d) {
        var arg_514 = '[' + new Date().toISOString() + "]: submitting shippingRate: " + _0x3085c6;

        _0x2d2bdc(arg_514, this.logFilePath);
      }

      if (_0x3085c6 == 200) {
        return _0x112e30;
      } else {
        if (_0x3085c6 == 429) {
          if (!_0x1eae7d) {
            _0x5a14e3(arg_515);
          }
        } else {
          if (!_0x1eae7d) {
            _0x5a14e3(arg_516);
          }
        }

        return !_0x1eae7d && _0x2d2bdc('[' + new Date().toISOString() + "]: Submitting ShippingRate failed: " + _0x3085c6, this.logFilePath), await _0x45a98b(this.monitorDelay), _0x23eece.bind(this)(_0x455570, _0x1eae7d);
      }
    } catch (err) {
      return !_0x1eae7d && _0x2d2bdc('[' + new Date().toISOString() + "]: Submitting ShippingRate Failed " + err, this.logFilePath), !_0x1eae7d && _0x5a14e3({
        'id': this.id,
        'status': "Submitting ShippingRate Failed, Retrying",
        'statusCode': 4,
        'groupId': this.groupId
      }), await _0x45a98b(this.monitorDelay), _0x23eece.bind(this)(_0x455570, _0x1eae7d);
    }
  };

  const _0x1ce7c1 = require("querystring");

  const _0x3016c6 = async function (_0x552324, _0x378b92 = ![]) {
    const _0x205aa1 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_519);

      throw "stopped";
    }

    if (!_0x378b92) {
      _0x5a14e3(arg_520);
    }

    try {
      const _0xc6a0ef = await _0x525073.bind(this)(_0x59b189);

      if (_0xc6a0ef.statusCode == 429) {
        return !_0x378b92 && _0x5a14e3({
          'id': this.id,
          'status': "Getting Gateway[429], Retry",
          'statusCode': 4,
          'groupId': this.groupId
        }), await _0x5fb498(this.monitorDelay), !_0x378b92 && _0x5a14e3({
          'id': this.id,
          'status': "Getting Gateway",
          'statusCode': 2,
          'groupId': this.groupId
        }), _0x3016c6.bind(this)(_0x552324, _0x378b92);
      }

      if (!_0x378b92) {
        var arg_522 = '[' + new Date().toISOString() + "]: getting payment gateway status : " + _0xc6a0ef.statusCode;

        _0x2d2bdc(arg_522, this.logFilePath);
      }

      this.currentURL = _0xc6a0ef.request.uri.href;

      if (_0xc6a0ef.request.uri.href.includes("stock_problems")) {
        return _0xc6a0ef;
      }

      const _0x28e394 = _0x3066df.load(_0xc6a0ef.body, arg_521);

      let _0x23208f = _0x28e394(".main").find(".radio-wrapper").attr("data-select-gateway") || _0x28e394(".radio-wrapper").attr("data-select-gateway");

      if (_0x23208f == null && !_0xc6a0ef.request.uri.href.includes("stock_problems")) {
        return !_0x378b92 && _0x2d2bdc('[' + new Date().toISOString() + "]: payment gateway not available, retry", this.logFilePath), await _0x5fb498(100), _0x3016c6.bind(this)(_0x552324, _0x378b92);
      }

      try {
        let _0x4c29ab = _0x28e394("[data-checkout-total-taxes-target]").attr("data-checkout-total-taxes-target");

        var arg_525 = parseInt(_0x4c29ab);
        this.hasTax = arg_525 != 0;
      } catch (err) {
      }

      return _0xc6a0ef;
    } catch (err) {
      const _0x174c1b = "1|0|4|3|2".split('|');

      let _0xc04b06 = 0;
      console.log("get gateway");

      if (!_0x378b92) {
        var arg_527 = '[' + new Date().toISOString() + "]: getting payment gateway failed " + err;

        _0x2d2bdc(arg_527, this.logFilePath);
      }

      _0x5a14e3(arg_526);

      await _0x5fb498(this.monitorDelay);
      return _0x3016c6.bind(this)(_0x552324, _0x378b92);
    }
  };

  const _0x1ecc8c = async function () {
    const _0x371757 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_528);

      throw "stopped";
    }

    try {
      var arg_529 = '[' + new Date().toISOString() + "]: getting session id";
      console.log(arg_529);
      let _0x1a1a99 = "deposit.us.shopifycs.com";

      if (this.checkoutInfo.mode.toLowerCase().includes("fast")) {
        const _0x59f665 = ["deposit.us.shopifycs.com", "elb.deposit.shopifycs.com", "sc.deposit.glb.us.shopifycs.com", "ia.deposit.glb.us.shopifycs.com", "us-east-1.elb.deposit.shopifycs.com", "us-west-2.elb.deposit.shopifycs.com"];
        _0x1a1a99 = _0x59f665[Math.floor(Math.random() * _0x59f665.length)];
      }

      let _0x4cfff6 = this.proxyList[Math.floor(Math.random() * this.proxyList.length)];

      if (_0x4cfff6 != '') {
        let _0x26bced = _0x4cfff6.split(':');

        _0x2401cc.proxy = _0x26bced.length < 4 ? "http://" + _0x26bced[0] + ':' + _0x26bced[1] : "http://" + _0x26bced[2] + ':' + _0x26bced[3] + '@' + _0x26bced[0] + ':' + _0x26bced[1];
      }

      console.log(_0x2401cc.uri);

      const _0x2d041a = await _0x1c3c2d(_0x2401cc);

      console.log("get session id: ", _0x2d041a.statusCode);
      let _0x103dc7 = _0x2d041a.body.id;

      if (_0x103dc7 == null) {
        return _0x2d2bdc('[' + new Date().toISOString() + "]: getting sessionId failed, " + e.message, this.logFilePath), _0x5a14e3({
          'id': this.id,
          'status': "Getting SessionId failed, retry",
          'statusCode': 4,
          'groupId': this.groupId
        }), await _0x5fb498(this.monitorDelay), _0x1ecc8c.bind(this)();
      }

      return this.westId = _0x103dc7, _0x103dc7;
    } catch (err) {
      const _0x3e261f = "5|1|4|3|0|2".split('|');

      let _0x4c773f = 0;
      console.log("get westId");
      console.log(err.message);
      var arg_531 = '[' + new Date().toISOString() + "]: getting sessionId failed, " + err.message;

      _0x2d2bdc(arg_531, this.logFilePath);

      _0x5a14e3(arg_532);

      await _0x5fb498(this.monitorDelay);
      return _0x1ecc8c.bind(this)();
    }
  };

  const _0x190c9d = async function (_0x5afad0, _0x2dc226) {
    const _0x21be0e = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_533);

      throw "stopped";
    }

    try {
      await _0x1ecc8c.bind(this)();

      _0x5a14e3(arg_534);

      if (_0x3b9bb4()) {
        await _0x5fb498(1000);

        _0x5a14e3(arg_538);

        return;
      }

      const _0x21574b = _0x2dc226.split('?')[0];

      const _0x3f6008 = _0x3066df.load(_0x5afad0, arg_535);

      let _0x86ee5b = _0x3f6008(".main").find(".radio-wrapper").attr("data-select-gateway");

      this.profile.gateway = _0x86ee5b;
      this.profile.s = this.westId;
      let _0x473ce8 = null;

      if (_0x2dc226.includes("step=review")) {
        _0x473ce8 = ".step form";
      } else {
        _0x473ce8 = "[data-payment-form]";
      }

      var arg_536 = '[' + new Date().toISOString() + "]: submitting payment: s(" + this.westId + "), gateway(" + this.profile.gateway + ')';

      _0x2d2bdc(arg_536, this.logFilePath);

      const _0x72f047 = await _0x525073.bind(this)(_0x2f6e53);

      let _0x4f99bf = _0x72f047.statusCode;

      var arg_537 = '[' + new Date().toISOString() + "]: submitting payment status: " + _0x4f99bf + ", result body: " + _0x72f047.body;

      _0x2d2bdc(arg_537, this.logFilePath);

      if (_0x4f99bf == 200) {
        return _0x72f047;
      } else {
        return _0x4f99bf == 429 ? (_0x5a14e3({
          'id': this.id,
          'status': "Submit Payment (429), Retry",
          'statusCode': 4,
          'groupId': this.groupId
        }), await _0x5fb498(this.monitorDelay), ![]) : (_0x5a14e3({
          'id': this.id,
          'status': "Submit Payment Failed (" + _0x4f99bf + "), Retry",
          'statusCode': 4,
          'groupId': this.groupId
        }), await _0x5fb498(this.monitorDelay), ![]);
      }
    } catch (err) {
      const _0x24234f = "4|5|2|1|0|3".split('|');

      let _0x3fef9d = 0;
      console.log("checkout");
      console.log(err);
      var arg_539 = '[' + new Date().toISOString() + "]: submitting payment failed " + err;

      _0x2d2bdc(arg_539, this.logFilePath);

      _0x5a14e3(arg_540);

      await _0x5fb498(this.monitorDelay);
      return ![];
    }
  };

  const _0x3f82e3 = function (_0x552842, _0x360065 = ![]) {
    const _0x4eaaaa = _0x8044f7;
    let _0xac8068 = [];

    for (let _0x216b22 of Object.keys(_0x552842)) {
      let _0x405ab6 = _0x552842[_0x216b22];

      if (typeof _0x405ab6 == "object") {
        for (let _0x1a3fac of _0x405ab6) {
          var arg_541 = _0x216b22 + '=' + _0x1a3fac;

          _0xac8068.push(arg_541);
        }
      } else {
        if (_0x360065 && _0x216b22 == "checkout[client_details][browser_width]") {
          _0xac8068.push("complete=1");
        }

        var arg_542 = _0x216b22 + '=' + _0x405ab6;

        _0xac8068.push(arg_542);
      }
    }

    return console.log(_0xac8068), _0xac8068.join('&');
  };

  const _0x438e88 = async function (_0x1c6649, _0x2f3753) {
    const _0x2a8687 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_544);

      throw "stopped";
    }

    try {
      await _0x1ecc8c.bind(this)();

      _0x5a14e3(arg_546);

      const _0x34fa78 = _0x3066df.load(_0x1c6649, arg_547);

      let _0x415947 = _0x34fa78(".main").find(".radio-wrapper").attr("data-select-gateway");

      this.profile.gateway = _0x415947;
      this.profile.s = this.westId;
      let _0x1cfaa0 = null;

      if (_0x2f3753.includes("step=review")) {
        _0x1cfaa0 = ".step form";
      } else {
        _0x1cfaa0 = "[data-payment-form]";
      }

      var arg_548 = _0x2f37f4(_0x34fa78(_0x1cfaa0).get()[0], this.profile, ![], !![]);

      this.checkoutForm = _0x1ce7c1.parse(arg_548);
      await _0x35026a.bind(this)(![]);
      await _0x1af34a.bind(this)(![], ![]);
      await _0x2f7ea1.bind(this)('' + this.checkoutURL, ![]);
      delete this.checkoutForm.complete;
      console.log(this.checkoutForm);
      return;
    } catch (err) {
      const _0x5c5789 = "4|2|3|0|1|5".split('|');

      let _0x194e5c = 0;
      console.log("checkout");
      console.log(err);
      var arg_549 = '[' + new Date().toISOString() + "]: submitting payment failed " + err;

      _0x2d2bdc(arg_549, this.logFilePath);

      _0x5a14e3(arg_550);

      await _0x5fb498(this.monitorDelay);
      return ![];
    }
  };

  const _0x1ba773 = async function (_0x55c393 = ![], _0x5e06b2 = 0) {
    const _0xebd169 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_552);

      throw "stopped";
    }

    try {
      _0x5a14e3(arg_553);

      if (_0x3b9bb4()) {
        await _0x5fb498(1000);

        _0x5a14e3(arg_555);

        this.running = ![];
        return;
      }

      if (!_0x55c393) {
        this.checkoutForm.s = '';
      }

      let _0x2f4e9d = await _0x525073.bind(this)(_0x4253d7);

      let _0x428dd2 = _0x2f4e9d.statusCode;

      var arg_554 = '[' + new Date().toISOString() + "]: submitting payment status: " + _0x428dd2 + ", url: " + _0x2f4e9d.request.uri.href + " result body: " + _0x2f4e9d.body;

      _0x2d2bdc(arg_554, this.logFilePath);

      if (_0x428dd2 == 200) {
        let _0x257c9d = _0x2f4e9d.request.uri.href;

        if (_0x257c9d.includes("stock_problems") && !_0x55c393) {
          return _0x5a14e3({
            'id': this.id,
            'status': "Submit Payment OOS, Retry",
            'statusCode': 2,
            'groupId': this.groupId
          }), await _0x5fb498(this.monitorDelay), _0x1ba773.bind(this)(_0x55c393, _0x5e06b2 + 1);
        } else {
          if (_0x257c9d.includes("checkpoint")) {
            return "checkpoint";
          } else {
            return _0x2f4e9d;
          }
        }
      } else {
        if (_0x428dd2 == 302) {
          let _0x1b18ed = _0x2f4e9d.request.uri.href;

          if (_0x1b18ed.includes("stock_problems") && !_0x55c393) {
            return _0x5a14e3({
              'id': this.id,
              'status': "Submit Payment OOS, Retry",
              'statusCode': 2,
              'groupId': this.groupId
            }), await _0x5fb498(this.monitorDelay), _0x1ba773.bind(this)(_0x55c393, _0x5e06b2 + 1);
          } else {
            if (_0x1b18ed.includes("checkpoint")) {
              return "checkpoint";
            } else {
              if (_0x1b18ed.includes("throttle")) {
                return _0x2f4e9d = await _0x2f7ea1.bind(this)(_0x1b18ed, !![]), await _0x4c9ecb.bind(this)(_0x1b18ed, _0x2f4e9d), _0x1ba773.bind(this)(_0x55c393, _0x5e06b2 + 1);
              } else {
                if (!_0x55c393) {
                  _0x2f4e9d = await _0x2f7ea1.bind(this)(_0x1b18ed, !![]);
                }

                return _0x2f4e9d;
              }
            }
          }
        } else {
          if (_0x428dd2 == 429) {
            return _0x5a14e3({
              'id': this.id,
              'status': "Submit Payment (429), Retry",
              'statusCode': 4,
              'groupId': this.groupId
            }), _0x55c393 && (await _0x1ecc8c.bind(this)(), this.checkoutForm.s = this.westId), await _0x5fb498(this.monitorDelay), _0x1ba773.bind(this)(_0x55c393);
          } else {
            return _0x5a14e3({
              'id': this.id,
              'status': "Submit Payment Failed (" + _0x428dd2 + "), Retry",
              'statusCode': 4,
              'groupId': this.groupId
            }), _0x55c393 && (await _0x1ecc8c.bind(this)(), this.checkoutForm.s = this.westId), await _0x5fb498(this.monitorDelay), _0x1ba773.bind(this)(_0x55c393);
          }
        }
      }
    } catch (err) {
      console.log("checkout");
      console.log(err);
      var arg_562 = '[' + new Date().toISOString() + "]: submitting payment failed " + err;

      _0x2d2bdc(arg_562, this.logFilePath);

      _0x5a14e3(arg_563);

      if (_0x55c393) {
        await _0x1ecc8c.bind(this)();
        this.checkoutForm.s = this.westId;
      }

      return await _0x5fb498(this.monitorDelay), _0x1ba773.bind(this)(_0x55c393);
    }
  };

  const _0x17caf3 = async function () {
    const _0x2e153a = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_566);

      throw "stopped";
    }

    _0x5a14e3(arg_565);

    try {
      var arg_567 = '[' + new Date().toISOString() + "]: Logging in account";
      console.log(arg_567);
      var arg_568 = '[' + new Date().toISOString() + "]: Logging in account " + this.assignedAccount;

      _0x2d2bdc(arg_568, this.logFilePath);

      let _0x5202eb = this.assignedAccount.split(':');

      const _0x5272f2 = await _0x525073.bind(this)(_0x428494);

      let _0x275c4c = _0x5272f2.statusCode;

      var arg_569 = '[' + new Date().toISOString() + "]: Logging in account status " + _0x275c4c;

      _0x2d2bdc(arg_569, this.logFilePath);

      console.log(_0x275c4c);

      if (_0x275c4c == 302) {
        let _0xe60102 = _0x5272f2.headers.location;
        console.log(_0xe60102);

        let _0x5e18e5 = await _0x2f7ea1.bind(this)(_0xe60102);

        if (_0x5e18e5.body.includes("Incorrect email or password")) {
          _0x5a14e3(arg_571);

          var arg_572 = '[' + new Date().toISOString() + "]: Invalid Account";

          _0x2d2bdc(arg_572, this.logFilePath);

          this.running = ![];
        }

        return _0x5e18e5;
      } else {
        if (_0x275c4c == 200) {
          return _0x5272f2;
        } else {
          return _0x5a14e3({
            'id': this.id,
            'status': "Logging in Account Failed, Retrying",
            'statusCode': 4,
            'groupId': this.groupId
          }), await _0x5fb498(this.monitorDelay), _0x17caf3.bind(this)();
        }
      }
    } catch (err) {
      const _0x37578e = "0|1|4|5|3|2".split('|');

      let _0x4580ff = 0;
      console.log("login account");
      console.log(err.message);
      var arg_573 = '[' + new Date().toISOString() + "]: Logging in account failed " + err.message;

      _0x2d2bdc(arg_573, this.logFilePath);

      _0x5a14e3(arg_574);

      await _0x5fb498(this.monitorDelay);
      return _0x17caf3.bind(this)();
    }
  };

  const _0x23d927 = async function (_0x4999f1) {
    const _0x2872aa = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_575);

      throw "stopped";
    }

    try {
      let _0x450a8f = _0xfb896(_0x4999f1.body);

      let {
        authToken: _0x7f4878,
        siteKey: _0x22c751,
        extraS: _0x3a4617
      } = _0x450a8f;
      var arg_576 = '[' + new Date().toISOString() + "]: waiting login account captcha";
      console.log(arg_576);
      var arg_577 = '[' + new Date().toISOString() + "]: waiting login account captcha";

      _0x2d2bdc(arg_577, this.logFilePath);

      _0x5a14e3(arg_578);

      const _0x167dd2 = await _0x153674.bind(this)(_0x4999f1.request.uri.href, _0x4802da.SHOPIFY_CHECKOUT, _0x22c751, _0x3a4617, '');

      _0x5a14e3(arg_579);

      var arg_580 = '[' + new Date().toISOString() + "]: Logging in account";

      _0x2d2bdc(arg_580, this.logFilePath);

      const _0x20d038 = await _0x525073.bind(this)(_0x1b301c);

      let _0x2fff06 = _0x20d038.statusCode;

      var arg_581 = '[' + new Date().toISOString() + "]: solve Logging in account captcha status " + _0x2fff06;

      _0x2d2bdc(arg_581, this.logFilePath);

      if (_0x2fff06 == 302) {
        let _0x3fa6d2 = _0x20d038.headers.location;

        let _0x71fa71 = await _0x2f7ea1.bind(this)(_0x3fa6d2);

        return _0x71fa71;
      } else {
        if (_0x2fff06 == 200) {
          return _0x20d038;
        } else {
          return _0x5a14e3({
            'id': this.id,
            'status': "Logging in Account Failed, Retrying",
            'statusCode': 4,
            'groupId': this.groupId
          }), await _0x5fb498(this.monitorDelay), _0x23d927.bind(this)(_0x4999f1);
        }
      }
    } catch (err) {
      const _0x5c1811 = "2|1|5|3|0|4".split('|');

      let _0x507a3a = 0;
      console.log("login account failed");
      console.log(err.message);
      var arg_582 = '[' + new Date().toISOString() + "]: Logging in account failed " + err.message;

      _0x2d2bdc(arg_582, this.logFilePath);

      _0x5a14e3(arg_583);

      await _0x5fb498(this.monitorDelay);
      return _0x23d927.bind(this)(_0x4999f1);
    }
  };

  const _0x413b52 = require("puppeteer-extra");

  const _0xf06021 = require("puppeteer-extra-plugin-stealth")();

  const _0x3ab558 = async (_0x418a83, _0x108438, _0x37bb22, _0x1d9e54 = null) => {
    const _0x2675fa = _0x8044f7;
    let _0x223e63 = null;
    let _0x43f1ff = null;
    let _0x1d4ae3 = null;
    let _0x4f7435 = null;

    let _0x4c5cf1 = ![];

    if (_0x108438) {
      let _0x4a4848 = _0x108438.split('//')[1].split('@');

      if (_0x4a4848.length == 1) {
        _0x4c5cf1 = !![];
        _0x1d4ae3 = _0x4a4848[0].split(':')[0];
        _0x4f7435 = _0x4a4848[0].split(':')[1];
      } else {
        _0x1d4ae3 = _0x4a4848[1].split(':')[0];
        _0x4f7435 = _0x4a4848[1].split(':')[1];
        _0x223e63 = _0x4a4848[0].split(':')[0];
        _0x43f1ff = _0x4a4848[0].split(':')[1];
      }
    }

    const _0x1d3836 = ["--disable-gpu", "--disable-infobars", "--disable-setuid-sandbox", "--disable-dev-shm-usage", "--disable-setuid-sandbox", "--ignore-certifcate-errors", "--ignore-certifcate-errors-spki-list"];

    if (_0x108438) {
      var arg_586 = _0x1d4ae3 + ':';
      var arg_585 = "--proxy-server=" + (arg_586 + _0x4f7435);

      _0x1d3836.push(arg_585);
    }

    _0x413b52.use(_0xf06021);

    let _0x328d18 = await _0x413b52.launch(_0x2b97a3);

    let _0xdbf4dc = await _0x328d18.newPage();

    let _0x35c9d7 = await _0x328d18.pages();

    await _0x35c9d7[0].close();

    if (_0x37bb22.userAgent) {
      await _0xdbf4dc.setUserAgent(_0x37bb22.userAgent);
    }

    if (_0x108438 && !_0x4c5cf1) {
      await _0xdbf4dc.authenticate({
        'username': _0x223e63,
        'password': _0x43f1ff
      });
    }

    await _0xdbf4dc.setCookie(..._0x37bb22.cookies);

    if (_0x37bb22.type == 'ys' && _0x37bb22.basketId && _0x37bb22.authHeader) {
      await _0xdbf4dc.goto("https://www.yeezysupply.com/cart");
      await _0xdbf4dc.evaluate((_0x3738bb, _0x15de91) => {
        return new Promise(_0x29be52 => {
          const _0x2f1f2e = a0_0x38b5;
          localStorage[_0x21e21e.FiDuu] = _0x3738bb;
          localStorage[_0x21e21e.WnaoP] = _0x15de91;

          _0x29be52(1);
        });
      }, _0x37bb22.basketId, _0x37bb22.authHeader);
      await _0xdbf4dc.reload();
    } else {
      await _0xdbf4dc.goto(_0x418a83);

      if (_0x418a83.includes("paypal.com/checkoutweb")) {
        await _0xdbf4dc.waitForSelector("#cardNumber");
        await _0x4d5bc6(_0xdbf4dc, "#cardNumber", _0x1d9e54.cardNum);
        await _0x4d5bc6(_0xdbf4dc, "#cardExpiry", _0x1d9e54.expmonth + '/' + parseInt(_0x1d9e54.expyear) % 100);
        await _0x4d5bc6(_0xdbf4dc, "#cardCvv", _0x1d9e54.cvv);
      }
    }

    return;
  };

  let _0x4d5bc6 = async function (_0x553fbc, _0x452226, _0xea8d89) {
    const _0x78cef8 = _0x8044f7;

    try {
      await _0x553fbc.waitForSelector(_0x452226, {
        'visible': !![]
      });
      await _0x553fbc.click(_0x452226);
      await _0x553fbc.type(_0x452226, _0xea8d89.toString(), {
        'delay': 40
      });
    } catch (err) {
      console.log(err);
    }

    var arg_591 = _0x19b3b4(_0x452226, _0xea8d89);

    _0x553fbc.evaluate(arg_591);

    return;
  };

  let _0x19b3b4 = (_0x28f747, _0x4f4869) => {
    const _0x3be003 = _0x8044f7;
    return "\n        if (document.querySelector(\"" + _0x28f747 + "\").value !== '" + _0x4f4869 + "') {\n            document.querySelector(\"" + _0x28f747 + "\").value = '" + _0x4f4869 + "'\n        }\n    ";
  };

  var arg_4 = (_0x5b1a41.app || _0x5b1a41.remote.app).getPath("userData");

  const _0x2e779e = async function () {
    const _0x4b26de = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_596);

      throw "stopped";
    }

    _0x5a14e3(arg_594);

    var arg_595 = '[' + new Date().toISOString() + "]: getting api keys";

    _0x2d2bdc(arg_595, this.logFilePath);

    try {
      const _0x2d3cda = await _0x525073.bind(this)(_0x236e5b);

      if (_0x2d3cda.statusCode == 200) {
        this.apiKey = _0x2d3cda.body.paymentInstruments.accessToken;
        var arg_597 = '[' + new Date().toISOString() + "]: apiToken : " + this.apiKey;
        console.log(arg_597);
        return;
      } else {
        return _0x5a14e3({
          'id': this.id,
          'status': "Preparing failed, Retrying ...",
          'statusCode': 4,
          'groupId': this.groupId
        }), _0x2d2bdc('[' + new Date().toISOString() + "]: getting api keys failed, retrying...", this.logFilePath), await _0x5fb498(1000), _0x2e779e.bind(this)();
      }
    } catch (err) {
      const _0x2dd558 = "4|0|2|3|1".split('|');

      let _0x42dc64 = 0;
      console.log(err);

      _0x5a14e3(arg_598);

      var arg_599 = '[' + new Date().toISOString() + "]: getting api keys failed, retrying...: " + err;

      _0x2d2bdc(arg_599, this.logFilePath);

      await _0x5fb498(1000);
      return _0x2e779e.bind(this)();
    }
  };

  const _0xe2f2a2 = async function (_0x2290a3 = ![]) {
    const _0x85781c = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_602);

      throw "stopped";
    }

    _0x5a14e3(arg_600);

    var arg_601 = '[' + new Date().toISOString() + "]: creating checkout";

    _0x2d2bdc(arg_601, this.logFilePath);

    try {
      let _0x24c1ac = null;
      var arg_603 = '[' + new Date().toISOString() + "]: getting variant by size: " + JSON.stringify(this.size);

      _0x2d2bdc(arg_603, this.logFilePath);

      let _0x2357a7 = _0x467d29(this.variants, this.size);

      if (!_0x2357a7 || !_0x2357a7.id) {
        return _0x5a14e3({
          'id': this.id,
          'status': "Size Not Found",
          'statusCode': 1,
          'groupId': this.groupId
        }), this.running = ![], null;
      }

      _0x24c1ac = _0x2357a7.id;
      this.checkoutInfo.price = _0x2357a7.price;
      this.checkoutInfo.size = _0x2357a7.title;
      this.checkoutInfo.sku = _0x24c1ac;
      this.startTime = new Date().getTime();

      _0x5a14e3(arg_604);

      var arg_605 = '[' + new Date().toISOString() + "]: adding to cart " + _0x24c1ac;

      _0x2d2bdc(arg_605, this.logFilePath);

      if (this.siteOrigin.includes("doverstreetmarket")) {
        _0x103b17.properties = this.cartFormInfo;
      }

      const _0x382784 = await _0x525073.bind(this)(_0x6a0ebb);

      const _0x1eeda0 = _0x382784.statusCode;
      console.log(_0x1eeda0);
      console.log(_0x382784.headers);

      if (_0x382784.headers["x-checkout-queue"]) {
        return await _0x4c9ecb.bind(this)(this.siteOrigin, null, !![]), _0xe2f2a2.bind(this)(_0x2290a3);
      }

      if (_0x1eeda0 == 201) {
        console.log(_0x382784.body);
        let _0x5ea078 = JSON.parse(_0x382784.body).checkout.web_url;
        this.checkoutURL = _0x5ea078;
        var arg_609 = '[' + new Date().toISOString() + "]: creating checkout: " + this.checkoutURL;

        _0x2d2bdc(arg_609, this.logFilePath);

        return;
      } else {
        return _0x5a14e3({
          'id': this.id,
          'status': "Creating Checkout failed, Retrying ...",
          'statusCode': 4,
          'groupId': this.groupId
        }), _0x2d2bdc('[' + new Date().toISOString() + "]: creating checkout failed, retrying...", this.logFilePath), await _0x5fb498(this.monitorDelay), _0xe2f2a2.bind(this)(_0x2290a3);
      }
    } catch (err) {
      const _0xa9c300 = "1|2|4|0|3".split('|');

      let _0xab0f5c = 0;
      console.log(err);

      _0x5a14e3(arg_612);

      var arg_613 = '[' + new Date().toISOString() + "]: creating checkout failed, retrying...: " + err;

      _0x2d2bdc(arg_613, this.logFilePath);

      await _0x5fb498(this.monitorDelay);
      return _0xe2f2a2.bind(this)(_0x2290a3);
    }
  };

  const _0x8d02da = async function (_0x3b075a = ![]) {
    const _0x44bc4b = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_617);

      throw "stopped";
    }

    _0x5a14e3(arg_614);

    var arg_615 = '[' + new Date().toISOString() + "]: creating checkout";

    _0x2d2bdc(arg_615, this.logFilePath);

    try {
      const _0x59dd00 = await _0x525073.bind(this)(_0x1b828c);

      const _0x317861 = _0x59dd00.statusCode;

      if (_0x317861 == 302) {
        let _0x246a24 = _0x59dd00.headers.location;
        console.log(_0x246a24);

        if (_0x246a24.includes("checkpoint")) {
          let _0x272596 = await _0x2f7ea1.bind(this)(_0x246a24);

          _0x5a14e3(arg_619);

          let _0x3e5858 = _0xfb896(_0x272596.body);

          return await _0x383d53.bind(this)(_0x3e5858, _0x246a24), _0x8d02da.bind(this)();
        } else {
          if (_0x246a24.includes("throttle")) {
            return await _0x4c9ecb.bind(this)(_0x246a24), await _0x2f7ea1.bind(this)(_0x246a24), _0x8d02da.bind(this)(_0x3b075a);
          } else {
            if (_0x246a24.includes("checkout")) {
              this.checkoutURL = _0x59dd00.headers.location;
              this.currentURL = this.checkoutURL;

              if (_0x3b075a) {
                this.preloadURL = this.checkoutURL;
              }
            }
          }
        }

        console.log(this.checkoutURL);
        var arg_618 = '[' + new Date().toISOString() + "]: creating checkout: " + this.checkoutURL;

        _0x2d2bdc(arg_618, this.logFilePath);

        return;
      } else {
        return _0x5a14e3({
          'id': this.id,
          'status': "Creating Checkout failed, Retrying ...",
          'statusCode': 4,
          'groupId': this.groupId
        }), _0x2d2bdc('[' + new Date().toISOString() + "]: creating checkout failed, retrying...", this.logFilePath), await _0x5fb498(this.monitorDelay), _0x8d02da.bind(this)(_0x3b075a);
      }
    } catch (err) {
      const _0x48932a = "1|2|0|4|3".split('|');

      let _0x2fa10a = 0;
      console.log(err);

      _0x5a14e3(arg_623);

      var arg_624 = '[' + new Date().toISOString() + "]: creating checkout failed, retrying...: " + err;

      _0x2d2bdc(arg_624, this.logFilePath);

      await _0x5fb498(this.monitorDelay);
      return _0x8d02da.bind(this)(_0x3b075a);
    }
  };

  const _0x5a7177 = async function () {
    const _0x68cfcf = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_625);

      throw "stopped";
    }

    try {
      _0x5a14e3(arg_626);

      var arg_627 = '[' + new Date().toISOString() + "]: Calculate ShippingRate ...";

      _0x2d2bdc(arg_627, this.logFilePath);

      let _0x1ef2be = this.checkoutURL.split('?')[0].split('/').pop();

      const _0x123bb0 = await _0x525073.bind(this)(_0x48dea6);

      const _0x236c92 = _0x123bb0.statusCode;

      if (_0x236c92 == 202) {
        return await _0x5fb498(200), _0x5a7177.bind(this)();
      }

      let _0x107601 = _0x123bb0.body.shipping_rates[0].id;
      return console.log('[' + new Date().toISOString() + "]: polling shippingrate : " + _0x107601), _0x2d2bdc('[' + new Date().toISOString() + "]: polling shippingrate : " + _0x107601, this.logFilePath), _0x107601;
    } catch (err) {
      const _0x391582 = "0|4|2|3|1".split('|');

      let _0x56919b = 0;
      console.log(err);

      _0x5a14e3(arg_630);

      var arg_631 = '[' + new Date().toISOString() + "]: Calculate ShippingRate Failed, Retrying " + err;

      _0x2d2bdc(arg_631, this.logFilePath);

      await _0x5fb498(this.monitorDelay);
      return _0x5a7177.bind(this)();
    }
  };

  const _0x5e2c3a = async function (_0x54e427 = null) {
    const _0x2c12a0 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_632);

      throw "stopped";
    }

    try {
      let _0x2f9705 = this.checkoutURL.split('?')[0].split('/').pop();

      if (_0x54e427) {
        _0x4da79c.json = {
          'checkout': {
            'shipping_rate': {
              'id': _0x54e427
            }
          }
        };
      }

      _0x5a14e3(arg_633);

      var arg_634 = '[' + new Date().toISOString() + "]: Submitting " + (_0x54e427 ? "Shipping" : "Billing") + " API";

      _0x2d2bdc(arg_634, this.logFilePath);

      const _0x225544 = await _0x525073.bind(this)(_0x4da79c);

      const _0x203369 = _0x225544.statusCode;
      console.log(_0x203369);
      console.log(_0x225544.request.uri.href);
      console.log(_0x225544.body);

      var arg_635 = '[' + new Date().toISOString() + "]: submitting billing status, " + _0x203369;

      _0x2d2bdc(arg_635, this.logFilePath);

      if (_0x203369 == 202 || _0x203369 == 200) {
        return !![];
      } else {
        if (_0x203369 == 422) {
          return _0x5a14e3({
            'id': this.id,
            'status': "Submitting Billing OOS, Retry",
            'statusCode': 2,
            'groupId': this.groupId
          }), await _0x5fb498(this.monitorDelay), _0x5e2c3a.bind(this)();
        } else {
          return _0x5a14e3({
            'id': this.id,
            'status': "Submitting Billing Failed, Retry",
            'statusCode': 4,
            'groupId': this.groupId
          }), _0x2d2bdc('[' + new Date().toISOString() + "]: Submitting Billing Failed, retry: " + _0x203369, this.logFilePath), await _0x5fb498(this.monitorDelay), _0x5e2c3a.bind(this)();
        }
      }
    } catch (err) {
      const _0x30c456 = "0|3|4|1|2".split('|');

      let _0xc0b2e1 = 0;
      console.log(err);

      _0x5a14e3(arg_662);

      var arg_663 = '[' + new Date().toISOString() + "]: Submitting Billing Failed, retry: " + err;

      _0x2d2bdc(arg_663, this.logFilePath);

      await _0x5fb498(this.monitorDelay);
      return _0x5e2c3a.bind(this)();
    }
  };

  const _0x49a4b7 = async function (_0xbe366d) {
    const _0x2d73b0 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_664);

      throw "stopped";
    }

    try {
      _0x5a14e3(arg_667);

      await _0x1ecc8c.bind(this)(![]);
      this.currentURL = this.checkoutURL;

      const _0x1d6cd2 = await _0x525073.bind(this)(_0xac69e);

      const _0x1900ff = _0x1d6cd2.statusCode;
      console.log("calculating Tax, ", _0x1900ff);

      var arg_668 = '[' + new Date().toISOString() + "]: Calculating Tax statusCode " + _0x1900ff;

      _0x2d2bdc(arg_668, this.logFilePath);

      if (_0x1900ff == 200) {
        if (_0x1d6cd2.body.includes("Shopify.Checkout.step = \"shipping_method\"") || _0x1d6cd2.body.includes("shipping rate isn")) {
          const _0x4e660d = _0x3066df.load(_0x1d6cd2.body, arg_669);

          const _0x2b73d5 = _0x2f37f4(_0x4e660d("[data-shipping-method-form]").get()[0], this.profile, ![], ![]);

          return _0x23eece.bind(this)(_0x2b73d5);
        }

        return _0x1d6cd2;
      } else {
        if (_0x1900ff == 429) {
          return _0x5a14e3({
            'id': this.id,
            'status': "Calculating Tax[429], Retry",
            'statusCode': 4,
            'groupId': this.groupId
          }), await _0x368af3.bind(this)(), await _0x5fb498(this.monitorDelay), _0x49a4b7.bind(this)(_0xbe366d);
        } else {
          const _0x2437ce = "0|1|4|2|3".split('|');

          let _0x5ee652 = 0;

          _0x5a14e3(arg_677);

          var arg_678 = '[' + new Date().toISOString() + "]: Calculating Tax Failed, Retrying " + _0x1900ff;

          _0x2d2bdc(arg_678, this.logFilePath);

          await _0x368af3.bind(this)();
          await _0x5fb498(this.monitorDelay);
          return _0x49a4b7.bind(this)(_0xbe366d);
        }
      }
    } catch (err) {
      const _0x309d37 = "2|1|0|3|4|5".split('|');

      let _0x48c80f = 0;
      console.log(err);

      _0x5a14e3(arg_679);

      var arg_680 = '[' + new Date().toISOString() + "]: Calculating Tax Failed, Retrying " + err;

      _0x2d2bdc(arg_680, this.logFilePath);

      await _0x368af3.bind(this)();
      await _0x5fb498(this.monitorDelay);
      return _0x49a4b7.bind(this)(_0xbe366d);
    }
  };

  const _0x13685d = async function (_0x1fbe4e, _0x426a29 = null) {
    const _0x3ad3fb = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_681);

      throw "stopped";
    }

    try {
      if (!_0x426a29 || !_0x1fbe4e) {
        let _0x4750df = await _0x5cf9ad.bind(this)(this.checkoutURL);

        const _0x31c6fe = _0x3066df.load(_0x4750df.body, arg_686);

        _0x426a29 = _0x31c6fe("input[name=authenticity_token]").attr("value");
        _0x1fbe4e = _0x1fbe4e || _0x31c6fe("[data-checkout-payment-due-target]").attr("data-checkout-payment-due-target");
      }

      this.currentURL = this.checkoutURL;

      _0x5a14e3(arg_682);

      var arg_683 = '[' + new Date().toISOString() + "]: Submitting Order ...";

      _0x2d2bdc(arg_683, this.logFilePath);

      let _0x598a6e = await _0x525073.bind(this)(_0x4c683d);

      const _0x586c24 = _0x598a6e.statusCode;

      var arg_684 = '[' + new Date().toISOString() + "]: Submitting Order statusCode " + _0x586c24 + " with url: " + _0x598a6e.request.uri.href;

      _0x2d2bdc(arg_684, this.logFilePath);

      var arg_685 = "Submitting Order:  " + _0x586c24 + " with url: " + _0x598a6e.request.uri.href;
      console.log(arg_685);

      if (_0x586c24 == 200) {
        let _0x3ba666 = _0x598a6e.request.uri.href;

        if (_0x3ba666.includes("throttle")) {
          await _0x4c9ecb.bind(this)(_0x3ba666, _0x598a6e);
          _0x598a6e = await _0x5cf9ad.bind(this)(_0x3ba666);

          const _0x1cf44d = _0x3066df.load(_0x598a6e.body, arg_687);

          return _0x426a29 = _0x1cf44d("input[name=authenticity_token]").attr("value"), _0x13685d.bind(this)(_0x1fbe4e, _0x426a29);
        } else {
          if (_0x598a6e.body.includes("Shopify.Checkout.step = \"shipping_method\"") || _0x598a6e.body.includes("shipping rate isn")) {
            const _0xced5c7 = _0x3066df.load(_0x598a6e.body, arg_688);

            const _0x867aa4 = _0x2f37f4(_0xced5c7("[data-shipping-method-form]").get()[0], this.profile, ![], ![]);

            let _0x42b24f = await _0x23eece.bind(this)(_0x867aa4);

            const _0x5e129f = _0x3066df.load(_0x42b24f.body, arg_689);

            return _0x426a29 = _0x5e129f("input[name=authenticity_token]").attr("value"), _0x13685d.bind(this)(_0x1fbe4e, _0x426a29);
          } else {
            if (_0x598a6e.body.includes("Complete the reCAPTCHA to continue")) {
              let _0x27054c = await _0x25b5bc.bind(this)(_0x598a6e.body);

              if (_0x27054c.request.uri.href.includes("process")) {
                return _0x27054c;
              }

              const _0x31d914 = _0x3066df.load(_0x27054c.body, arg_691);

              return _0x426a29 = _0x31d914("input[name=authenticity_token]").attr("value"), _0x13685d.bind(this)(_0x1fbe4e, _0x426a29);
            } else {
              if (_0x3ba666.includes("process")) {
                return this.currentURL = _0x598a6e.request.uri.href, _0x598a6e;
              } else {
                if (_0x598a6e.body.includes("Calculating taxes")) {
                  const _0x1661ef = _0x3066df.load(_0x598a6e.body, arg_693);

                  _0x426a29 = _0x1661ef("input[name=authenticity_token]").attr("value");

                  let _0x5c1e49 = await _0x49a4b7.bind(this)(_0x426a29);

                  const _0x43bc60 = _0x3066df.load(_0x5c1e49.body, arg_694);

                  return _0x426a29 = _0x43bc60("input[name=authenticity_token]").attr("value"), _0x13685d.bind(this)(_0x1fbe4e, _0x426a29);
                } else {
                  if (_0x598a6e.body.includes("Shopify.Checkout.step = \"review\"")) {
                    const _0x58813b = _0x3066df.load(_0x598a6e.body, arg_695);

                    return _0x426a29 = _0x58813b("input[name=authenticity_token]").attr("value"), _0x13685d.bind(this)(_0x1fbe4e, _0x426a29);
                  } else {
                    if (_0x3ba666.includes("stock_problems")) {
                      _0x5a14e3(arg_696);

                      var arg_697 = '[' + new Date().toISOString() + "]: Submitting Order OOS, Retrying " + _0x586c24;

                      _0x2d2bdc(arg_697, this.logFilePath);

                      await _0x5fb498(this.monitorDelay);
                      await _0x368af3.bind(this)();

                      const _0x931351 = _0x3066df.load(_0x598a6e.body, arg_698);

                      return _0x426a29 = _0x931351("input[name=authenticity_token]").attr("value"), _0x13685d.bind(this)(_0x1fbe4e, _0x426a29);
                    }
                  }
                }
              }
            }
          }
        }

        return this.currentURL = _0x598a6e.request.uri.href, _0x598a6e;
      } else {
        if (_0x586c24 == 302) {
          let _0x40ebe9 = _0x598a6e.request.uri.href;

          if (_0x40ebe9.includes("throttle")) {
            _0x598a6e = await _0x2f7ea1.bind(this)(_0x40ebe9, !![]);
            await _0x4c9ecb.bind(this)(_0x40ebe9, _0x598a6e);
            _0x598a6e = await _0x5cf9ad.bind(this)(_0x40ebe9);

            const _0x11ada9 = _0x3066df.load(_0x598a6e.body, arg_699);

            return _0x426a29 = _0x11ada9("input[name=authenticity_token]").attr("value"), _0x13685d.bind(this)(_0x1fbe4e, _0x426a29);
          } else {
            if (_0x40ebe9.includes("process")) {
              return this.currentURL = _0x598a6e.request.uri.href, _0x598a6e;
            } else {
              if (_0x40ebe9.includes("stock_problems")) {
                return _0x5a14e3({
                  'id': this.id,
                  'status': " Submitting Order OOS, Retry",
                  'statusCode': 2,
                  'groupId': this.groupId
                }), _0x2d2bdc('[' + new Date().toISOString() + "]: Submitting Order OOS, Retrying " + _0x586c24, this.logFilePath), await _0x5fb498(this.monitorDelay), _0x13685d.bind(this)(_0x1fbe4e, _0x426a29);
              } else {
                _0x598a6e = await _0x2f7ea1.bind(this)(_0x40ebe9, !![]);

                if (_0x598a6e.body.includes("Shopify.Checkout.step = \"shipping_method\"") || _0x598a6e.body.includes("shipping rate isn")) {
                  const _0x4d61b5 = _0x3066df.load(_0x598a6e.body, arg_702);

                  const _0x115321 = _0x2f37f4(_0x4d61b5("[data-shipping-method-form]").get()[0], this.profile, ![], ![]);

                  let _0x5e3bd1 = await _0x23eece.bind(this)(_0x115321);

                  const _0x2418fa = _0x3066df.load(_0x5e3bd1.body, arg_703);

                  return _0x426a29 = _0x2418fa("input[name=authenticity_token]").attr("value"), _0x13685d.bind(this)(_0x1fbe4e, _0x426a29);
                } else {
                  if (_0x598a6e.body.includes("Complete the reCAPTCHA to continue")) {
                    let _0x43b6d6 = await _0x25b5bc.bind(this)(_0x598a6e.body);

                    if (_0x43b6d6.request.uri.href.includes("process")) {
                      return _0x43b6d6;
                    }

                    const _0x13db98 = _0x3066df.load(_0x43b6d6.body, arg_705);

                    return _0x426a29 = _0x13db98("input[name=authenticity_token]").attr("value"), _0x13685d.bind(this)(_0x1fbe4e, _0x426a29);
                  } else {
                    if (_0x598a6e.body.includes("Calculating taxes")) {
                      const _0x522c43 = _0x3066df.load(_0x598a6e.body, arg_706);

                      _0x426a29 = _0x522c43("input[name=authenticity_token]").attr("value");

                      let _0x10e8be = await _0x49a4b7.bind(this)(_0x426a29);

                      const _0x310b19 = _0x3066df.load(_0x10e8be.body, arg_707);

                      return _0x426a29 = _0x310b19("input[name=authenticity_token]").attr("value"), _0x13685d.bind(this)(_0x1fbe4e, _0x426a29);
                    } else {
                      if (_0x598a6e.body.includes("Shopify.Checkout.step = \"review\"")) {
                        const _0x59409b = _0x3066df.load(_0x598a6e.body, arg_709);

                        return _0x426a29 = _0x59409b("input[name=authenticity_token]").attr("value"), _0x13685d.bind(this)(_0x1fbe4e, _0x426a29);
                      }
                    }
                  }
                }

                return _0x598a6e;
              }
            }
          }
        } else {
          if (_0x586c24 == 429) {
            _0x5a14e3(arg_712);

            if (_0x598a6e.body && _0x598a6e.body.includes("<title>Too many attempts</title>")) {
              return await _0x5fb498(this.monitorDelay), "resetAPI";
            } else {
              return await _0x368af3.bind(this)(), await _0x5fb498(this.monitorDelay), _0x13685d.bind(this)(_0x1fbe4e);
            }
          } else {
            return _0x5a14e3({
              'id': this.id,
              'status': "Submitting Order Failed [" + _0x586c24 + "], Retry",
              'statusCode': 4,
              'groupId': this.groupId
            }), _0x2d2bdc('[' + new Date().toISOString() + "]:  Submitting Order Failed, Retrying " + _0x586c24, this.logFilePath), await _0x5fb498(this.monitorDelay), _0x13685d.bind(this)(_0x1fbe4e);
          }
        }
      }
    } catch (err) {
      const _0x3d59c7 = "3|1|4|0|2".split('|');

      let _0x4d99cc = 0;
      console.log(err);

      _0x5a14e3(arg_716);

      var arg_717 = '[' + new Date().toISOString() + "]:  Submitting Order Failed, Retrying " + err;

      _0x2d2bdc(arg_717, this.logFilePath);

      await _0x5fb498(this.monitorDelay);
      return _0x13685d.bind(this)(_0x1fbe4e);
    }
  };

  const _0x25b5bc = async function (_0xe8cda6, _0x123f51 = {}) {
    const _0x424af0 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_718);

      throw "stopped";
    }

    try {
      let _0x2709ce = _0xfb896(_0xe8cda6);

      let {
        siteKey: _0x4c0069,
        extraS: _0xd964d3
      } = _0x2709ce;

      if (_0x4c0069 != null && (!_0x123f51.captchaToken || Date.now() > _0x123f51.ts + 110 * 1000)) {
        const _0xf7d152 = "2|1|0|4|3".split('|');

        let _0x5627f2 = 0;

        var arg_722 = '[' + new Date().toISOString() + "]: extracted captcha info: sitekey: " + _0x4c0069 + ",    extraS: " + _0xd964d3;

        _0x2d2bdc(arg_722, this.logFilePath);

        var arg_723 = '[' + new Date().toISOString() + "]: waiting for captcha";
        console.log(arg_723);

        _0x5a14e3(arg_724);

        _0x123f51.captchaToken = await _0x153674.bind(this)(this.siteOrigin + "/checkout", _0x4802da.SHOPIFY_CHECKOUT, _0x4c0069, _0xd964d3);
        _0x123f51.ts = Date.now();
      }

      if (!this.running) {
        return;
      }

      _0x5a14e3(arg_719);

      var arg_720 = '[' + new Date().toISOString() + "]: Submitting Tax";

      _0x2d2bdc(arg_720, this.logFilePath);

      this.currentURL = this.checkoutURL;

      if (_0x123f51.captchaToken) {
        _0x388a8a.form["g-recaptcha-response"] = _0x123f51.captchaToken;
      }

      const _0x514018 = await _0x525073.bind(this)(_0x388a8a);

      let _0x3ba1ec = _0x514018.statusCode;
      console.log("Submitting Tax ,", _0x3ba1ec);

      var arg_721 = '[' + new Date().toISOString() + "]: Submitting Tax status: " + _0x3ba1ec;

      _0x2d2bdc(arg_721, this.logFilePath);

      if (_0x3ba1ec == 200 || _0x3ba1ec == 302) {
        return _0x514018;
      } else {
        return _0x3ba1ec == 429 ? (_0x5a14e3({
          'id': this.id,
          'status': "Submitting Tax[429], Retry",
          'statusCode': 4,
          'groupId': this.groupId
        }), _0x514018) : (_0x5a14e3({
          'id': this.id,
          'status': "Submitting Tax Failed (" + _0x3ba1ec + "), Retrying",
          'statusCode': 4,
          'groupId': this.groupId
        }), await _0x5fb498(this.monitorDelay), _0x25b5bc.bind(this)(_0xe8cda6, _0x123f51));
      }
    } catch (err) {
      const _0x44bc5c = "4|3|1|2|0".split('|');

      let _0x2c9726 = 0;
      console.log(err);

      _0x5a14e3(arg_725);

      var arg_726 = '[' + new Date().toISOString() + "]: Submitting Tax Failed, Retrying " + err;

      _0x2d2bdc(arg_726, this.logFilePath);

      await _0x5fb498(this.monitorDelay);
      return _0x25b5bc.bind(this)(_0xe8cda6, _0x123f51);
    }
  };

  const _0x5cf9ad = async function (_0x505d86) {
    const _0x266079 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_727);

      throw "stopped";
    }

    try {
      let _0x643ee8 = await _0x525073.bind(this)(_0x340566);

      const _0x363104 = _0x643ee8.statusCode;

      var arg_728 = '[' + new Date().toISOString() + "]: loading url : " + _0x505d86 + " with status " + _0x363104;

      _0x2d2bdc(arg_728, this.logFilePath);

      if (_0x363104 == 200) {
        let _0x519fb5 = _0x643ee8.request.uri.href;
        return _0x519fb5.includes("throttle") && (await _0x4c9ecb.bind(this)(_0x519fb5, _0x643ee8), _0x643ee8 = await _0x5cf9ad.bind(this)(_0x519fb5)), this.currentURL = _0x643ee8.request.uri.href, _0x643ee8;
      } else {
        if (_0x363104 == 410) {
          return _0x5a14e3({
            'id': this.id,
            'status': "Session Expired, Restart",
            'statusCode': 4,
            'groupId': this.groupId
          }), _0x2d2bdc('[' + new Date().toISOString() + "]: checkout session expired, retrying", this.logFilePath), await _0x368af3.bind(this)(), _0x5cf9ad.bind(this)(this.siteOrigin + "/checkout");
        } else {
          if (_0x363104 == 429) {
            _0x5a14e3(arg_730);
          } else {
            _0x5a14e3(arg_731);
          }

          return await _0x368af3.bind(this)(), _0x2d2bdc('[' + new Date().toISOString() + "]: Loading Page failed: " + _0x363104, this.logFilePath), await _0x5fb498(this.monitorDelay), _0x5cf9ad.bind(this)(_0x505d86);
        }
      }
    } catch (err) {
      const _0x32b95a = "3|5|0|6|2|1|4".split('|');

      let _0x311696 = 0;
      console.log("get load Session");
      console.log(err);

      _0x5a14e3(arg_732);

      var arg_733 = '[' + new Date().toISOString() + "]: Loading Page failed: " + err;

      _0x2d2bdc(arg_733, this.logFilePath);

      await _0x368af3.bind(this)();
      await _0x5fb498(this.monitorDelay);
      return _0x5cf9ad.bind(this)(_0x505d86);
    }
  };

  const _0x5c1f79 = async function () {
    const _0xa6a0c7 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_734);

      throw "stopped";
    }

    try {
      let _0x52d109 = this.checkoutURL.split('?')[0].split('/').pop();

      let _0x3c0735 = this.proxyList[Math.floor(Math.random() * this.proxyList.length)];

      if (_0x3c0735 != '') {
        let _0x5a561b = _0x3c0735.split(':');

        _0x2d9bc2.proxy = _0x5a561b.length < 4 ? "http://" + _0x5a561b[0] + ':' + _0x5a561b[1] : "http://" + _0x5a561b[2] + ':' + _0x5a561b[3] + '@' + _0x5a561b[0] + ':' + _0x5a561b[1];
      }

      _0x5a14e3(arg_735);

      const _0x4e8ef1 = await _0x1c3c2d(_0x2d9bc2);

      const _0x59dcd4 = _0x4e8ef1.statusCode;
      return console.log(_0x4e8ef1.body), _0x2d2bdc('[' + new Date().toISOString() + "]: Calculating Tax status, " + _0x59dcd4, this.logFilePath), _0x59dcd4 == 202 || _0x59dcd4 == 200 ? JSON.parse(_0x4e8ef1.body) : (_0x5a14e3({
        'id': this.id,
        'status': "Calculating Tax Failed, Retry",
        'statusCode': 4,
        'groupId': this.groupId
      }), _0x2d2bdc('[' + new Date().toISOString() + "]: Calculating Tax Failed, retry: " + _0x59dcd4, this.logFilePath), await _0x5fb498(this.monitorDelay), _0x5c1f79.bind(this)());
    } catch (err) {
      const _0x471f1a = "1|4|2|0|3".split('|');

      let _0x2aceba = 0;
      console.log(err);

      _0x5a14e3(arg_736);

      var arg_737 = '[' + new Date().toISOString() + "]: Calculating Tax Failed, retry: " + err;

      _0x2d2bdc(arg_737, this.logFilePath);

      await _0x5fb498(this.monitorDelay);
      return _0x5c1f79.bind(this)();
    }
  };

  const _0x51b3a4 = require("puppeteer-extra");

  const _0x2ee830 = require("puppeteer-extra-plugin-stealth")();

  const _0x150fbe = require("chrome-paths");

  const _0xfe855b = async function () {
    const _0x38bfb9 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_738);

      throw "stopped";
    }

    try {
      this.browser = new _0x2b80d5.BrowserWindow(arg_740);

      var arg_741 = function (_0x2ededb) {
        const _0x1ba8f8 = _0x38bfb9;

        _0x2ededb.preventDefault();
      };

      this.browser.on("page-title-updated", arg_741);
      this.browser.webContents.on("login", (_0x35d2bb, _0x4ffada, _0x4ddd32, _0x27e60d) => {
        const _0x9c8652 = _0x38bfb9;

        try {
          _0x35d2bb.preventDefault();

          if (_0x4ddd32.isProxy) {
            var arg_742 = this.proxyUsername || '';
            var arg_743 = this.proxyPassword || '';

            _0x27e60d(arg_742, arg_743);
          }
        } catch (err) {
        }
      });
      await _0x2b80d5.session.fromPartition("checkpoint-" + this.sessionName).setProxy({
        'proxyRules': this.proxyHost
      });
      this.browser.once("closed", () => {
        const _0x495cc5 = _0x38bfb9;
        var arg_744 = "checkpoint-" + this.sessionName;
        var arg_745 = [];

        _0x2b80d5.session.fromPartition(arg_744).clearStorageData(arg_745);

        var arg_746 = "checkpoint-" + this.sessionName;

        _0x2b80d5.session.fromPartition(arg_746).clearCache(() => {
        });
      });

      let _0x52175a = await _0x7f4309();

      for (let _0x5c6895 of _0x52175a) {
        if (_0x5c6895.domain.includes("google") || _0x5c6895.domain.includes("youtube")) {
          if (_0x5c6895.domain.includes("youtube")) {
            _0x5c6895.url = _0x172aa3.EfjPi;
          } else {
            if (_0x5c6895.domain.includes("accounts.google")) {
              _0x5c6895.url = _0x172aa3.kzafV;
            } else {
              if (_0x5c6895.domain.includes("google")) {
                _0x5c6895.url = _0x172aa3.YHvEN;
              }
            }
          }

          await _0x2b80d5.session.fromPartition("checkpoint-" + this.sessionName).cookies.set(_0x5c6895)["catch"](_0x13d5ab => console.log(_0x13d5ab));
        }
      }

      await this.browser.loadURL("https://www.google.com");
      await _0x5fb498(3000);

      try {
        await this.browser.loadURL('' + this.siteOrigin);
      } catch (err) {
      }

      this.browser.show();
      this.browserReady = !![];
    } catch (err) {
      console.log(err);
    }
  };

  const _0x3d69d2 = async function (_0x24a1be, _0x16e101) {
    const _0x2369dd = _0x8044f7;
    return new Promise(async (_0x589461, _0x2a5138) => {
      const _0x1d7485 = _0x2369dd;

      while (this.running && !this.browserReady) {
        await _0x5fb498(100);
      }

      let _0x478ef7 = await this.session.cookies.get({
        'url': this.siteOrigin
      });

      for (let _0x226e65 of _0x478ef7) {
        try {
          if (!_0x226e65.name.includes(_0x18e50b.TdSWM)) {
            await this.browser.webContents.session.cookies.set({
              'url': this.siteOrigin,
              'name': _0x226e65[_0x18e50b.rWOcN],
              'value': _0x226e65[_0x18e50b.jHjkY],
              'domain': _0x226e65[_0x18e50b.BsJHN]
            });
          }
        } catch (err) {
          console.log(_0x18e50b.WPove, _0x226e65.name);
          console.log(err);
        }
      }

      this.browser.webContents.on(_0x18e50b.roKaR, async _0x209ff2 => {
        const _0x2d37a0 = _0x1d7485;
        this.browser.show();
        this.browser.focus();

        let _0x388e4c = await this.browser.webContents.executeJavaScript("\n                new Promise(async (resolve, reject) => {  \n                    document.getElementsByTagName('html')[0].style.height = '100%';\n                    document.body.style.height = '100%'   \n                    document.body.style.opacity = '1'                    \n                    // document.body.style.backgroundColor = 'transparent'      \n                    // document.getElementsByTagName('html')[0].style.backgroundColor = 'transparent'\n                    \n                    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));\n\n                    const solveCaptcha = async () => {\n                        if (document.querySelector('iframe[data-hcaptcha-response]') && document.querySelector('iframe[data-hcaptcha-response]').contentDocument && document.querySelector('iframe[data-hcaptcha-response]').contentDocument.querySelector('#checkbox') || \n                        (document.querySelectorAll('[role=\"presentation\"]').length != 0 && Array.from(document.querySelectorAll('[role=\"presentation\"]')).filter(each => each.contentDocument && each.contentDocument.querySelectorAll('.recaptcha-checkbox-checkmark').length > 0).length > 0)) {\n                            let isHCap = document.querySelector('iframe[data-hcaptcha-response]');\n                            await clickCaptcha(isHCap);\n                        } else {\n                            await sleep(20);\n                            return solveCaptcha();\n                        }\n                    }\n\n                    const clickCaptcha = async (isHCap) => {\n                        try {\n                            let iframeOne = null;\n                            if (isHCap) {\n                                iframeOne = document.querySelector('iframe[data-hcaptcha-response]');\n                            } else {\n                                iframeOne = Array.from(document.querySelectorAll('[role=\"presentation\"]')).filter(each => each.contentDocument && each.contentDocument.querySelectorAll('.recaptcha-checkbox-checkmark').length > 0)[0];\n                            }\t\n                            let iframe = iframeOne.contentDocument || iframeOne.contentWindow.document;\n                            let xInCheck = Math.floor(Math.random() * 38);\n                            let yInCheck = Math.floor(Math.random() * 30);\n                            const xOutside = 1 + 190 + Math.floor(Math.random() * 100);\n                            const yOutside = 1 + 310 + Math.floor(Math.random() * 100);\n                            let simLab = iframe.querySelector('.rc-anchor.rc-anchor-normal.rc-anchor-light') || iframe.querySelector('#checkbox');\n                            for (let i = 0; i < 50; i++) {\n                                await sleep(3);\n                                simulatedClick(simLab, {\n                                    type: 'mousemove',\n                                    clientX: xInCheck + Math.floor(((70 - i) / 2) + Math.floor(Math.random() * 10)),\n                                    clientY: yInCheck + Math.floor(((70 - i) / 2) + Math.floor(Math.random() * 10)),\n                                    screenX: xOutside + Math.floor(((70 - i) / 2) + Math.floor(Math.random() * 10)),\n                                    screenY: yOutside + Math.floor(((70 - i) / 2) + Math.floor(Math.random() * 10))\n                                });\n                            }\n\n                            let arr = ['mousedown', 'mouseup', 'click'];\n                            let clickElement = iframe.querySelector('.recaptcha-checkbox-checkmark') || iframe.querySelector('#checkbox');\n                            for (let entry of arr) {\n                                await sleep(10);\n                                simulatedClick(clickElement, {\n                                    type: entry,\n                                    clientX: xInCheck,\n                                    clientY: yInCheck,\n                                    screenX: xOutside,\n                                    screenY: yOutside\n                                })\n                            }\n                        } catch (e) {\n                            console.log(e)\n                            await sleep(50);\n                            return clickCaptcha();\n                        }\n                    }\n\n                    const simulatedClick = (target, options) => {\n                        //console.log(options.type + ' ' + options.clientX+ ' ' +options.clientY+ ' ' +options.screenX+ ' ' +options.screenY)\n                        var event = target.ownerDocument.createEvent('MouseEvents'),\n                            options = options || {},\n                            opts = { // These are the default values, set up for un-modified left clicks\n                                type: 'click',\n                                canBubble: true,\n                                cancelable: true,\n                                view: target.ownerDocument.defaultView,\n                                detail: 1,\n                                screenX: 0, //The coordinates within the entire page\n                                screenY: 0,\n                                clientX: 0, //The coordinates within the viewport\n                                clientY: 0,\n                                ctrlKey: false,\n                                altKey: false,\n                                shiftKey: false,\n                                metaKey: false, //I *think* 'meta' is 'Cmd/Apple' on Mac, and 'Windows key' on Win. Not sure, though!\n                                button: 0, //0 = left, 1 = middle, 2 = right\n                                relatedTarget: null,\n                            };\n\n                        //Merge the options with the defaults\n                        for (var key in options) {\n                            if (options.hasOwnProperty(key)) {\n                                opts[key] = options[key];\n                            }\n                        }\n\n                        //Pass in the options\n                        event.initMouseEvent(\n                            opts.type,\n                            opts.canBubble,\n                            opts.cancelable,\n                            opts.view,\n                            opts.detail,\n                            opts.screenX,\n                            opts.screenY,\n                            opts.clientX,\n                            opts.clientY,\n                            opts.ctrlKey,\n                            opts.altKey,\n                            opts.shiftKey,\n                            opts.metaKey,\n                            opts.button,\n                            opts.relatedTarget\n                        );\n\n                        //Fire the event\n                        target.dispatchEvent(event);\n                    }\n\n                    solveCaptcha();\n\n                    var serialize = function (form) {\n                        // Setup our serialized data\n                        var serialized = [];\n                        // Loop through each field in the form\n                        for (var i = 0; i < form.elements.length; i++) {\n                            var field = form.elements[i];\n                            // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields\n                            if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;\n                            // If a multi-select, get all selections\n                            if (field.type === 'select-multiple') {\n                                for (var n = 0; n < field.options.length; n++) {\n                                    if (!field.options[n].selected) continue;\n                                    serialized.push(encodeURIComponent(field.name) + \"=\" + encodeURIComponent(field.options[n].value));\n                                }\n                            }\n                            // Convert field data to a query string\n                            else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {\n                                serialized.push(encodeURIComponent(field.name) + \"=\" + encodeURIComponent(field.value));\n                            }\n                        }\n                        return serialized.join('&');\n                    };\n                    \n                    while(true) {\n                        if (document.querySelector('[name=\"g-recaptcha-response\"]') && document.querySelector('[name=\"g-recaptcha-response\"]').value && document.querySelector('[name=\"g-recaptcha-response\"]').value.length > 0\n                         || document.querySelector('[name=\"h-captcha-response\"]') && document.querySelector('[name=\"h-captcha-response\"]').value && document.querySelector('[name=\"h-captcha-response\"]').value.length > 0) {\n                            let formBody = \"\";\n                            try {\n                                formBody = $(\"form[action*='/checkpoint']\").serialize()\n                            } catch(e) {\n                                console.log(e)\n                                formBody = serialize(document.querySelector(\"form[action*='/checkpoint']\"))\n                            }\n\n                            let token = \"\"\n                            try {\n                                token = document.querySelector('[name=\"g-recaptcha-response\"]') ? document.querySelector('[name=\"g-recaptcha-response\"]').value: \"\";\n                            } catch(e) {\n                                token = document.querySelector('[name=\"h-captcha-response\"]') ? document.querySelector('[name=\"h-captcha-response\"]').value : \"\";\n                            }\n                            resolve({\n                                authToken: document.querySelector('input[name=authenticity_token]').value,\n                                checkpointToken: token,\n                                formBody: formBody\n                            });\n                        }\n                        await sleep(50);\n                    }\n\n                })\n            ");

        this.browser.hide();

        if (_0x388e4c && _0x388e4c.formBody.includes(_0x13b76e.LTrWS)) {
          const _0x33bc6d = await this.browser.webContents.session.cookies.get({
            'url': this.siteOrigin
          });

          for (let _0x12bc2e of _0x33bc6d) {
            try {
              if (!_0x12bc2e.name.includes(_0x13b76e.sZwEW)) {
                await this.session.cookies.set({
                  'url': this.siteOrigin,
                  'name': _0x12bc2e[_0x13b76e.KEWva],
                  'value': _0x12bc2e[_0x13b76e.YtjiL],
                  'domain': _0x12bc2e[_0x13b76e.WNcMq]
                });
              }
            } catch (err) {
              console.log(_0x12bc2e);
              console.log(err);
            }
          }
        }

        _0x589461(_0x388e4c);
      });
      var arg_749 = "window.location.href = '" + _0x24a1be + '\x27';
      this.browser.webContents.executeJavaScript(arg_749);
    });
  };

  const _0x58ee1d = async function () {
    const _0x32b1e8 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_806);

      throw "stopped";
    }

    try {
      _0x5a14e3(arg_807);

      var arg_808 = '[' + new Date().toISOString() + "]: getting variant by size: " + JSON.stringify(this.size);

      _0x2d2bdc(arg_808, this.logFilePath);

      let _0x326f2a = _0x467d29(this.variants, this.size);

      if (!_0x326f2a || !_0x326f2a.id) {
        return _0x5a14e3({
          'id': this.id,
          'status': "Size Not Found",
          'statusCode': 2,
          'groupId': this.groupId
        }), this.running = ![], null;
      }

      let _0x244b7b = _0x326f2a.id;
      this.checkoutInfo.price = _0x326f2a.price;
      this.checkoutInfo.size = _0x326f2a.title;
      this.checkoutInfo.sku = _0x244b7b;
      this.startTime = new Date().getTime();

      let _0x49303a = await this.page.evaluate(_0x535914({
        'method': "POST",
        'url': this.siteOrigin + "/cart/add.js",
        'headers': JSON.stringify({
          'accept': "application/json, text/plain, */*",
          'accept-Encoding': "gzip, deflate, br",
          'accept-language': "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6",
          'content-type': "application/json",
          'pragma': "no-cache",
          'sec-fetch-dest': "empty",
          'sec-fetch-mode': "cors",
          'sec-fetch-site': "same-origin",
          'x-requested-with': "XMLHttpRequest"
        }),
        'body': JSON.stringify({
          'id': _0x244b7b,
          'quantity': 1,
          'properties': this.cartFormInfo
        }),
        'timeout': _0x50eed5.SHOPIFY,
        'gzip': !![]
      }));

      let _0x315b27 = _0x49303a.statusCode;
      let _0x23e6c4 = _0x49303a.body;

      if (_0x315b27 == 200) {
        return _0x2d2bdc('[' + new Date().toISOString() + "]: item carted: " + _0x315b27, this.logFilePath), this.price = _0x23e6c4.price, _0x5a14e3({
          'id': this.id,
          'status': "Item Carted!",
          'statusCode': 2,
          'groupId': this.groupId
        }), _0x49303a;
      } else {
        if (_0x315b27 == 429 || _0x315b27 == 430) {
          _0x5a14e3(arg_810);
        } else {
          if (_0x315b27 == 422) {
            _0x5a14e3(arg_811);
          } else {
            _0x5a14e3(arg_812);
          }
        }

        return _0x2d2bdc('[' + new Date().toISOString() + "]: adding to cart failed: " + _0x315b27, this.logFilePath), await _0x5fb498(this.monitorDelay), _0x58ee1d.bind(this)();
      }
    } catch (err) {
      const _0x5e44c7 = "2|1|5|4|0|3".split('|');

      let _0x2b1e52 = 0;

      _0x5a14e3(arg_813);

      console.log(err);
      this.ready = !![];
      var arg_814 = '[' + new Date().toISOString() + "]: adding to cart failed, " + err;

      _0x2d2bdc(arg_814, this.logFilePath);

      await _0x5fb498(this.monitorDelay);
      return _0x58ee1d.bind(this)();
    }
  };

  const _0x2dcfb7 = async function () {
    const _0x59c5d5 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_816);

      throw "stopped";
    }

    _0x5a14e3(arg_815);

    try {
      if (this.note) {
        _0x207c76.note = this.note;
      }

      let _0x5abbbb = await this.page.evaluate(_0x5c0a90({
        'method': "POST",
        'url': this.siteOrigin + "/cart",
        'headers': JSON.stringify({
          'accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
          'accept-language': "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6",
          'accept-encoding': "gzip, deflate, br",
          'cache-Control': "max-age=0",
          'content-Type': "application/x-www-form-urlencoded",
          'Origin': this.siteOrigin,
          'Sec-Fetch-Dest': "document",
          'Sec-Fetch-Site': "same-origin",
          'Sec-Fetch-Mode': "navigate",
          'Sec-Fetch-User': '?1',
          'Upgrade-Insecure-Requests': '1'
        }),
        'body': JSON.stringify(_0x207c76),
        'timeout': _0x50eed5.SHOPIFY
      }));

      let _0x18cb39 = _0x5abbbb.statusCode;
      var arg_817 = '[' + new Date().toISOString() + "]: updating cart";

      _0x2d2bdc(arg_817, this.logFilePath);

      if (_0x5abbbb.ok && _0x18cb39 == 200) {
        return _0x5abbbb;
      } else {
        if (_0x18cb39 == 429) {
          _0x5a14e3(arg_818);
        } else {
          _0x5a14e3(arg_819);
        }

        return _0x2d2bdc('[' + new Date().toISOString() + "]: updating cart failed: " + _0x18cb39, this.logFilePath), await _0x5fb498(this.monitorDelay), _0x2dcfb7.bind(this)();
      }
    } catch (err) {
      const _0x53e6bf = "3|2|1|4|0|5".split('|');

      let _0x4cfe59 = 0;
      console.log("update cart");
      console.log(err.message);

      _0x5a14e3(arg_820);

      var arg_821 = '[' + new Date().toISOString() + "]: updating cart failed " + err.message;

      _0x2d2bdc(arg_821, this.logFilePath);

      await _0x5fb498(this.monitorDelay);
      return _0x2dcfb7.bind(this)();
    }
  };

  const _0x535914 = _0x548eef => {
    const _0x2f0090 = _0x8044f7;
    return "(() => {\n        return new Promise(async (resolve, reject) => {\n            try {\n                let result = await fetch('" + _0x548eef.url + "', {\n                    method: 'POST', \n                    mode: 'cors', \n                    cache: 'no-cache',\n                    credentials: 'same-origin',\n                    headers: JSON.parse('" + _0x548eef.headers + "'),\n                    redirect: 'follow',\n                    referrerPolicy: 'same-origin', \n                    body: '" + _0x548eef.body + "'\n                });\n               \n                let body = await result.json();\n                resolve({\n                    body: body,\n                    statusCode: result.status\n                })\n            } catch(e) {\n                reject(e)\n            }\n        })\n    })();";
  };

  const _0x5c0a90 = _0x48aa5f => {
    const _0x2a8806 = _0x8044f7;
    return "(() => {\n        return new Promise(async (resolve, reject) => {\n            try {\n                let result = await fetch('" + _0x48aa5f.url + "', {\n                    method: 'POST', \n                    mode: 'cors', \n                    cache: 'no-cache',\n                    credentials: 'same-origin',\n                    headers: JSON.parse('" + _0x48aa5f.headers + "'),\n                    redirect: 'follow',\n                    referrerPolicy: 'same-origin', \n                    body: '" + _0x48aa5f.body + "'\n                });\n                let body = await result.text();\n                resolve({\n                    body: body,\n                    redirected: result.redirected,\n                    ok: true,\n                    url: result.url,\n                    statusCode: result.status\n                })\n            } catch(e) {\n                reject(e)\n            }\n        })\n    })();";
  };

  const _0xcb9fea = async function (_0xd34931, _0x441f04 = {}) {
    const _0x22621d = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_824);

      throw "stopped";
    }

    try {
      let _0x244f47 = _0xfb896(_0xd34931);

      let {
        siteKey: _0x1304b2,
        extraS: _0x259e14
      } = _0x244f47;
      await this.page.evaluate(_0x25d6d3(this.profile));

      if (_0x1304b2) {
        _0x5a14e3(arg_830);

        await this.page.evaluate(_0x4ddf92());
        await this.page.evaluate(_0x5461a2());
      }

      _0x5a14e3(arg_827);

      await this.page.waitForSelector("[data-customer-information-form] [type=submit]", {
        'visible': !![]
      });
      await Promise.all([this.page.click("[data-customer-information-form] [type=submit]"), this.page.waitForNavigation()]);
      console.log("finishedLoading");
      return;
    } catch (err) {
      console.log(err);
    }
  };

  const _0xf4c417 = async function (_0x3bf961) {
    const _0x3ba285 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_833);

      throw "stopped";
    }

    try {
      _0x5a14e3(arg_834);

      await this.page.waitForSelector("[data-shipping-method-form]", {
        'visible': !![]
      });

      const _0xc7ad28 = _0x3066df.load(_0x3bf961, arg_835);

      const _0x46e5b5 = _0x2f37f4(_0xc7ad28("[data-shipping-method-form]").get()[0], this.profile, ![], ![]);

      var arg_838 = decodeURI(_0x46e5b5).replace(/"/g, '\x5c\x22').replace(/&/g, "\",\"").replace(/=/g, "\":\"");
      var arg_837 = '{\x22' + arg_838;
      var arg_836 = arg_837 + '\x22}';

      let _0x7b6ce1 = JSON.parse(arg_836);

      console.log(_0x7b6ce1);
      let _0x143b69 = _0x7b6ce1["checkout[shipping_rate][id]"];

      if (!_0x143b69 || _0x143b69.trim().length == 0) {
        console.log("wait for shipping");
        await _0x5fb498(100);
        return;
      } else {
        const _0x366eb6 = "1|2|5|4|3|0".split('|');

        let _0x24bc74 = 0;
        console.log("submit shipping");

        _0x5a14e3(arg_839);

        await _0x5fb498(300);
        await this.page.waitForSelector("[data-shipping-method-form] [type=submit]", {
          'visible': !![]
        });
        await Promise.all([this.page.click("[data-shipping-method-form] [type=submit]"), this.page.waitForNavigation()]);
        console.log("shipping submitted");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const _0x5b80f2 = async function (_0x48e0af) {
    const _0x3001dc = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_867);

      throw "stopped";
    }

    try {
      _0x5a14e3(arg_868);

      await this.page.waitForSelector("[data-payment-form]", {
        'visible': !![]
      });

      const _0x31a5ce = _0x3066df.load(_0x48e0af, arg_869);

      let _0x16c678 = _0x31a5ce(".main").find(".radio-wrapper").attr("data-select-gateway");

      if (_0x16c678 == null) {
        console.log("wait for gateway");
        await _0x5fb498(100);
        return;
      } else {
        const _0x546b57 = "6|1|5|0|3|2|4".split('|');

        let _0x5896b2 = 0;
        await this.page.waitForSelector(".card-fields-iframe", {
          'visible': !![]
        });
        await _0x5fb498(1000);
        console.log("submit payment");

        _0x5a14e3(arg_870);

        await this.page.evaluate(_0x1201a1(this.profile));
        await this.page.waitForSelector("[data-payment-form] [type=submit]", {
          'visible': !![]
        });
        await Promise.all([this.page.click("[data-payment-form] [type=submit]"), this.page.waitForNavigation()]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const _0x3fd056 = async function (_0x2f515f, _0x4594c8 = {}) {
    const _0x47f3f2 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_872);

      throw "stopped";
    }

    try {
      const _0x1eb4c0 = "5|4|1|0|2|3".split('|');

      let _0x174cf6 = 0;

      _0x5a14e3(arg_873);

      await this.page.evaluate(_0x4ddf92());
      await this.page.evaluate(_0x5461a2());

      _0x5a14e3(arg_874);

      await Promise.all([this.page.evaluate(_0x5a41f2()), this.page.waitForNavigation()]);
      return;
    } catch (err) {
      console.log(err);
    }
  };

  const _0x5a41f2 = () => {
    const _0x4dd46c = _0x8044f7;
    return "document.querySelector('[name=\"commit\"]').click();";
  };

  const _0x4ddf92 = () => {
    const _0x43f7f4 = _0x8044f7;
    return "\n        (() => {\n            return new Promise(async (resolve, reject) => {\n                try {       \n                    let sleep = (ms) => {\n                        return new Promise(resolve => setTimeout(resolve, ms));\n                    }\n\n                    var solveCaptcha = async () => {\n                        if (document.querySelectorAll('[role=\"presentation\"]').length != 0 && Array.from(document.querySelectorAll('[role=\"presentation\"]')).filter(each => each.contentDocument && each.contentDocument.querySelectorAll('.recaptcha-checkbox-checkmark').length > 0).length > 0) {\n                            await clickCaptcha();\n                        } else {\n                            await sleep(20);\n                            return solveCaptcha();\n                        }\n                    }\n\n                    var clickCaptcha = async () => {\n                        try {\n                            let iframeOne = Array.from(document.querySelectorAll('[role=\"presentation\"]')).filter(each => each.contentDocument && each.contentDocument.querySelectorAll('.recaptcha-checkbox-checkmark').length > 0)[0];\n                            iframeOne.scrollIntoView(false);\n                            \n                            let iframe = iframeOne.contentDocument || iframeOne.contentWindow.document;\n                            let dimensions = iframe.querySelector('.rc-anchor.rc-anchor-normal.rc-anchor-light').getBoundingClientRect();\n                            let xInFrame = Math.floor(Math.random() * dimensions.width);\n                            let yInFrame = Math.floor(Math.random() * dimensions.height);\n                            let label = iframe.querySelector('.rc-anchor-checkbox-holder.rc-anchor-center-item').getBoundingClientRect();\n                            let xInLabel = Math.floor(Math.random() * label.width);\n                            let yInLabel = Math.floor(Math.random() * label.height);\n                            let xInCheck = Math.floor(Math.random() * 38);\n                            let yInCheck = Math.floor(Math.random() * 30);\n                            const xOutside = 1 + 190 + Math.floor(Math.random() * 100);\n                            const yOutside = 1 + 310 + Math.floor(Math.random() * 100);\n                            let simLab = iframe.querySelector('.rc-anchor.rc-anchor-normal.rc-anchor-light');\n\n                            for (let i = 0; i < 50; i++) {\n                                await sleep(3);\n                                simulatedClick(simLab, {\n                                    type: 'mousemove',\n                                    clientX: xInCheck + Math.floor(((70 - i) / 2) + Math.floor(Math.random() * 10)),\n                                    clientY: yInCheck + Math.floor(((70 - i) / 2) + Math.floor(Math.random() * 10)),\n                                    screenX: xOutside + Math.floor(((70 - i) / 2) + Math.floor(Math.random() * 10)),\n                                    screenY: yOutside + Math.floor(((70 - i) / 2) + Math.floor(Math.random() * 10))\n                                });\n                            }\n\n                            let arr = ['mousedown', 'mouseup', 'click'];\n                            for (let entry of arr) {\n                                await sleep(10);\n                                simulatedClick(iframe.querySelector('.recaptcha-checkbox-checkmark'), {\n                                    type: entry,\n                                    clientX: xInCheck,\n                                    clientY: yInCheck,\n                                    screenX: xOutside,\n                                    screenY: yOutside\n                                })\n                            }\n                        } catch (e) {\n                            await sleep(50);\n                            return clickCaptcha();\n                        }\n                    }\n\n                    var simulatedClick = (target, options) => {\n                        //console.log(options.type + ' ' + options.clientX+ ' ' +options.clientY+ ' ' +options.screenX+ ' ' +options.screenY)\n                        var event = target.ownerDocument.createEvent('MouseEvents'),\n                            options = options || {},\n                            opts = { // These are the default values, set up for un-modified left clicks\n                                type: 'click',\n                                canBubble: true,\n                                cancelable: true,\n                                view: target.ownerDocument.defaultView,\n                                detail: 1,\n                                screenX: 0, //The coordinates within the entire page\n                                screenY: 0,\n                                clientX: 0, //The coordinates within the viewport\n                                clientY: 0,\n                                ctrlKey: false,\n                                altKey: false,\n                                shiftKey: false,\n                                metaKey: false, //I *think* 'meta' is 'Cmd/Apple' on Mac, and 'Windows key' on Win. Not sure, though!\n                                button: 0, //0 = left, 1 = middle, 2 = right\n                                relatedTarget: null,\n                            };\n\n                        //Merge the options with the defaults\n                        for (var key in options) {\n                            if (options.hasOwnProperty(key)) {\n                                opts[key] = options[key];\n                            }\n                        }\n\n                        //Pass in the options\n                        event.initMouseEvent(\n                            opts.type,\n                            opts.canBubble,\n                            opts.cancelable,\n                            opts.view,\n                            opts.detail,\n                            opts.screenX,\n                            opts.screenY,\n                            opts.clientX,\n                            opts.clientY,\n                            opts.ctrlKey,\n                            opts.altKey,\n                            opts.shiftKey,\n                            opts.metaKey,\n                            opts.button,\n                            opts.relatedTarget\n                        );\n\n                        //Fire the event\n                        target.dispatchEvent(event);\n                    }\n\n                    await solveCaptcha();\n                    resolve(1);\n                } catch(e) {\n                    console.log(e)\n                    reject(e)\n                }\n            })\n        })()";
  };

  const _0x5461a2 = () => {
    const _0x225c0e = _0x8044f7;
    return "(() => {\n        return new Promise(async (resolve, reject) => {\n            try {\n                let sleep = (ms) => {\n                    return new Promise(resolve => setTimeout(resolve, ms));\n                }\n\n                while (true)\n                    if (document.querySelector('[name=\"g-recaptcha-response\"]') && document.querySelector('[name=\"g-recaptcha-response\"]').value && document.querySelector('[name=\"g-recaptcha-response\"]').value.length > 0) {\n                        resolve(1);\n                    }\n                    await sleep(50);\n                }\n            } catch(e) {\n                reject(e)\n            }\n        })\n    })();";
  };

  const _0x25d6d3 = _0x2df59c => {
    const _0x569b38 = _0x8044f7;
    return "\n            var fields = {\n                '#checkout_email': '" + _0x2df59c.email + "',\n                '#checkout_email_or_phone':  '" + _0x2df59c.email + "',\n                '#checkout_shipping_address_first_name': '" + _0x2df59c.shipping.firstName + "',\n                '#checkout_shipping_address_last_name': '" + _0x2df59c.shipping.lastName + "',\n                '#checkout_shipping_address_address1': '" + _0x2df59c.shipping.address1 + "',\n                '#checkout_shipping_address_address2': '" + _0x2df59c.shipping.address2 + "',\n                '#checkout_shipping_address_city':  '" + _0x2df59c.shipping.city + "',\n                '#checkout_shipping_address_zip': '" + _0x2df59c.shipping.zip + "',\n                '#checkout_shipping_address_phone': '" + _0x2df59c.phone + "',\n            }\n\n            Object.keys(fields).forEach(id => {\n                fillField(id, fields[id]);\n            });\n\n            let countryElement = Array.from(document.querySelectorAll('[name=\"checkout[shipping_address][country]\"]')).find(each => each.tabIndex != -1);\n            let provinceElement = Array.from(document.querySelectorAll('[name=\"checkout[shipping_address][province]\"]')).find(each => each.tabIndex != -1);\n            \n            selectField(countryElement, '" + _0x2df59c.shipping.country.long + "');\n            selectField(provinceElement, '" + _0x2df59c.shipping.state.short + "');\n\n            function fillField(id, value, select = false) {\n                let element = document.querySelector(id);\n                if (element) {\n                    element.focus();\n                    element.value = value;\n                    element.dispatchEvent(new Event('change'));\n                    element.blur();\n                }\n            }\n\n            function selectField(element, value) {\n                if (element) {\n                    element.focus();\n                    element.value = value;\n                    element.dispatchEvent(new Event('change'));\n                    element.blur();\n                }\n            }\n\n           \n            ";
  };

  const _0x1201a1 = _0x21a45e => {
    const _0x404474 = _0x8044f7;
    return "\n        let iframe = document.querySelector('.card-fields-iframe').contentDocument || document.querySelector('.card-fields-iframe').contentWindow.document;\n        let fields = {\n            'number': '" + _0x21a45e.cardNum + "',\n            'name': '" + _0x21a45e.cardHolder + "',\n            'expiry': '" + _0x21a45e.expmonth + '/' + parseInt(_0x21a45e.expyear) % 100 + "',\n            'verification_value': '" + _0x21a45e.cvv + "',\n        }\n\n        Object.keys(fields).forEach(id => {\n            fillField(id, fields[id]);\n        });\n        \n        function fillField(id, value, select = false) {\n            let element = iframe.getElementById(id);\n            if (element) {\n                element.focus();\n                element.value = value;\n                element.dispatchEvent(new Event('change'));\n                element.blur();\n            }\n        }\n    ";
  };

  const _0x17c747 = async function () {
    const _0x23450c = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_880);

      throw "stopped";
    }

    try {
      while (this.running && !this.browserReady) {
        await _0x5fb498(100);
      }

      let _0x1c4ca3 = await _0x58ee1d.bind(this)();

      if (_0x1c4ca3 == null) {
        return;
      }

      if (this.siteOrigin.includes("palaceskateboards")) {
        await this.page.goto(this.siteOrigin + "/cart");

        let _0x53399c = await this.page.evaluate(_0x5c8db4());

        let _0x5841fe = _0x3066df.load(_0x53399c, arg_881);

        this.note = _0x5841fe("[name='note']").val();
      }

      let _0x40b109 = await _0x2dcfb7.bind(this)();

      return _0x5a14e3({
        'id': this.id,
        'status': "Going to Checkout",
        'statusCode': 2,
        'groupId': this.groupId
      }), await this.page.goto(this.siteOrigin + "/checkout"), await _0x734db5.bind(this)(!![]);
    } catch (err) {
      console.log(err);
    }
  };

  const _0x5c8db4 = () => {
    const _0x579b92 = _0x8044f7;
    return "(() => {\n        return new Promise((resolve,reject) => {\n            resolve(document.querySelector('*').outerHTML);\n        })\n    })();\n    ";
  };

  const _0x734db5 = async function (_0x48ffda = ![]) {
    const _0x3e68de = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_883);

      throw "stopped";
    }

    this.currentURL = this.page.url();

    if (!this.siteOrigin.includes("sneakertrees") && _0x48ffda && !this.currentURL.includes("checkpoint")) {
      return;
    }

    let _0x2490b9 = await this.page.evaluate(_0x5c8db4());

    console.log(this.currentURL);

    if (_0x2490b9.includes("Error - Information")) {
      _0x5a14e3(arg_885);

      var arg_886 = '[' + new Date().toISOString() + "]: Invalid Shipping";

      _0x2d2bdc(arg_886, this.logFilePath);

      return;
    } else {
      if (_0x2490b9.includes("Your cart has been updated")) {
        ;
      } else {
        if (_0x2490b9.includes("Check your card details")) {
          _0x5a14e3(arg_890);

          var arg_891 = '[' + new Date().toISOString() + "]: Card Info Error!";

          _0x2d2bdc(arg_891, this.logFilePath);

          return;
        } else {
          if (_0x2490b9.includes("technical reasons")) {
            _0x5a14e3(arg_892);

            this.checkoutInfo.paymentStatus = _0x172aa3.kMBdS;

            _0x4908e1.bind(this)();

            return;
          } else {
            if (this.currentURL.includes("validate=true")) {
              const _0xfa7c3d = "4|2|0|3|1".split('|');

              let _0x304289 = 0;
              var arg_893 = '[' + new Date().toISOString() + "]: Payment Declined!";

              _0x2d2bdc(arg_893, this.logFilePath);

              _0x5a14e3(arg_894);

              this.checkoutInfo.paymentStatus = _0x172aa3.BnhIJ;

              _0x4908e1.bind(this)();

              return;
            } else {
              if (this.currentURL.includes("process")) {
                return _0x2d2bdc('[' + new Date().toISOString() + "]: Processing", this.logFilePath), _0x5a14e3({
                  'id': this.id,
                  'status': "Processing",
                  'statusCode': 3,
                  'groupId': this.groupId
                }), await this.page.waitForNavigation(), _0x734db5.bind(this)();
              } else {
                if (this.currentURL.includes("thank_you")) {
                  const _0x585f09 = "3|0|2|5|1|4".split('|');

                  let _0x39d742 = 0;
                  var arg_897 = '[' + new Date().toISOString() + "]: Checkout Successfully";

                  _0x2d2bdc(arg_897, this.logFilePath);

                  _0x5a14e3(arg_898);

                  this.sender.send("checkoutSuccess", arg_899);
                  this.checkoutInfo.paymentStatus = _0x172aa3.xiQfa;

                  _0x4908e1.bind(this)();

                  return;
                } else {
                  if (this.currentURL.includes("throttle")) {
                    if (this.modes[_0x8c3d4a.SHOPIFY.PRELOAD] && this.preloadURL != null) {
                      await this.page.goto(this.preloadURL);
                    } else {
                      _0x5a14e3(arg_900);

                      await this.page.waitForNavigation({
                        'timeout': 600000
                      });
                    }

                    return _0x734db5.bind(this)();
                  } else {
                    if (this.currentURL.includes("stock_problems")) {
                      const _0x560d51 = "2|1|4|3|0".split('|');

                      let _0x8a008d = 0;

                      _0x5a14e3(arg_901);

                      await _0x5fb498(this.monitorDelay);
                      await this.page.goto(this.currentURL.split("/stock_problems")[0]);
                      await this.page.waitForNavigation();
                      return _0x734db5.bind(this)();
                    } else {
                      if (this.currentURL.includes("checkpoint")) {
                        await _0x3fd056.bind(this)(_0x2490b9);

                        if (!this.siteOrigin.includes("sneakertrees")) {
                          return;
                        }

                        return _0x734db5.bind(this)();
                      } else {
                        if (this.currentURL.includes("checkout")) {
                          if (this.modes[_0x8c3d4a.SHOPIFY.PRELOAD] && this.preloadURL && !this.currentURL.includes(this.preloadURL.split('?')[0])) {
                            return await this.page.goto(this.preloadURL), _0x734db5.bind(this)();
                          } else {
                            if (_0x2490b9.includes("Shopify.Checkout.step = \"contact_information\"")) {
                              if (this.modes[_0x8c3d4a.SHOPIFY.PRELOAD] && !_0x2490b9.includes('\x22' + '0' + '\x22')) {
                                _0x5a14e3(arg_903);

                                var arg_904 = '[' + new Date().toISOString() + "]: price error";

                                _0x2d2bdc(arg_904, this.logFilePath);

                                this.running = ![];
                                return;
                              }

                              return this.startTime = Date.now(), await _0xcb9fea.bind(this)(_0x2490b9), _0x734db5.bind(this)();
                            } else {
                              if (_0x2490b9.includes("Shopify.Checkout.step = \"shipping_method\"")) {
                                return await _0xf4c417.bind(this)(_0x2490b9), _0x734db5.bind(this)();
                              } else {
                                if (_0x2490b9.includes("Shopify.Checkout.step = \"payment_method\"")) {
                                  const _0x3b7f7d = "4|0|1|3|2".split('|');

                                  let _0x41ed75 = 0;
                                  console.log("paymnt");

                                  if (this.checkoutInfo.productName == "N/A" || this.checkoutInfo.price == '0') {
                                    _0x5a14e3(arg_908);

                                    var arg_909 = '[' + new Date().toISOString() + "]: Wrong Item detected, stop task";

                                    _0x2d2bdc(arg_909, this.logFilePath);

                                    this.running = ![];
                                    return;
                                  }

                                  await _0x5b80f2.bind(this)(_0x2490b9);
                                  var arg_907 = Date.now();
                                  this.checkoutInfo.checkoutSpeed = arg_907 - this.startTime;
                                  return _0x734db5.bind(this)();
                                }
                              }
                            }
                          }
                        } else {
                          if (this.modes[_0x8c3d4a.SHOPIFY.PRELOAD] && this.preloadURL != null) {
                            return await this.page.goto(this.preloadURL), _0x734db5.bind(this)();
                          } else {
                            if (this.currentURL.includes("cart")) {
                              if (_0x2490b9.includes("Your cart is currently empty")) {
                                _0x5a14e3(arg_910);

                                let _0x135c27 = await _0x58ee1d.bind(this)();

                                if (_0x135c27 == null) {
                                  return;
                                }

                                await _0x2dcfb7.bind(this)();
                              }

                              return _0x5a14e3({
                                'id': this.id,
                                'status': "Going to Checkout",
                                'statusCode': 2,
                                'groupId': this.groupId
                              }), await this.page.goto(this.siteOrigin + "/checkout"), _0x734db5.bind(this)();
                            } else {
                              return;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  };

  const _0x4908e1 = function () {
    const _0x507d39 = _0x8044f7;

    try {
      const _0x37c810 = "3|4|0|1|5|2".split('|');

      let _0x25a0b5 = 0;
      this.checkoutInfo.date = new Date().toISOString();
      this.checkoutInfo.timestamp = Date.now();

      _0x27b1e4(this.checkoutInfo);

      var arg_912 = _0x4bcc70(this.checkoutInfo, !![]);

      var arg_913 = this.checkoutInfo.paymentStatus == "Success";

      _0x3ef86a(arg_912, arg_913);

      var arg_914 = _0x4bcc70(this.checkoutInfo, ![]);

      var arg_915 = null;

      if (this.checkoutInfo.paymentStatus == "Success") {
        arg_915 = this.successWebhook;
      } else {
        arg_915 = this.declineWebhook;
      }

      _0x586466(arg_914, arg_915);

      if (this.checkoutInfo.paymentStatus == "Success") {
        var arg_916 = _0x4bcc70(this.checkoutInfo, ![]);

        _0x586466(arg_916, global.successWebhook);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const _0x2c68dc = async function (_0x120fc0 = 0) {
    const _0x4bfcfe = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_917);

      return;
    }

    if (_0x120fc0 >= 2) {
      return await _0x452541.bind(this)(this.searchContent), _0x30775f.bind(this)();
    }

    try {
      _0x5a14e3(arg_920);

      let _0x4a235d = _0x4edeba();

      let _0x292c16 = await _0x525073.bind(this)(_0x373daf);

      let _0x5aaf77 = _0x292c16.statusCode;
      var arg_921 = '[' + new Date().toISOString() + "]: get sizes url: https://www.yeezysupply.com/api/products/" + this.sku + "/availability status: " + _0x5aaf77 + '.';
      console.log(arg_921);

      var arg_922 = '[' + new Date().toISOString() + "]: get sizes " + _0x5aaf77;

      _0x2d2bdc(arg_922, this.logFilePath);

      if (_0x5aaf77 == 200) {
        if (_0x292c16.body.includes("UNABLE TO GIVE YOU ACCESS TO OUR SITE")) {
          return _0x2d2bdc('[' + new Date().toISOString() + "]: get sizes failed: 200", this.logFilePath), _0x5a14e3({
            'id': this.id,
            'status': "Getting Sizes Failed, retrying",
            'statusCode': 4,
            'groupId': this.groupId
          }), _0x2c68dc.bind(this)(_0x120fc0 + 1);
        }

        let _0x5e9f2b = JSON.parse(_0x292c16.body);

        return _0x5e9f2b;
      } else {
        return _0x5aaf77 == 404 ? _0x30775f.bind(this)() : (_0x5a14e3({
          'id': this.id,
          'status': "Getting Sizes Failed " + _0x5aaf77 + ", retrying",
          'statusCode': 4,
          'groupId': this.groupId
        }), await _0x45a98b(this.monitorDelay), _0x2c68dc.bind(this)(_0x120fc0));
      }
    } catch (err) {
      const _0x16ea3f = "3|4|0|2|1".split('|');

      let _0x2530ba = 0;
      console.log(err);
      var arg_924 = '[' + new Date().toISOString() + "]: get sizes failed " + err + '.';

      _0x2d2bdc(arg_924, this.logFilePath);

      _0x5a14e3(arg_925);

      await _0x45a98b(this.monitorDelay);
      return _0x2c68dc.bind(this)(_0x120fc0 + 1);
    }
  };

  const _0x1eb04a = async function (_0x510247 = !![], _0xcf2e50 = 0) {
    const _0x1b1f2a = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_928);

      return;
    }

    this.currentURL = this.searchContent;

    _0x5a14e3(arg_926);

    var arg_927 = '[' + new Date().toISOString() + "]: Carting Item: " + this.product_sku + " size: " + this.size + ", auth token: " + this.authToken;

    _0x2d2bdc(arg_927, this.logFilePath);

    try {
      let _0x56296f = await this.session.cookies.get({
        'url': this.siteOrigin
      });

      let _0x4c908f = _0x56296f.map(_0x2307b9 => _0x2307b9.name + '=' + _0x2307b9.value).join(';');

      var arg_929 = '[' + new Date().toISOString() + "]:atc Cookie: " + _0x4c908f;

      _0x2d2bdc(arg_929, this.logFilePath);

      var arg_930 = [{
        'product_id': this.testSku,
        'product_variation_sku': this.testSku + "_550",
        'productId': this.testSku + "_550",
        'quantity': 1,
        'size': '5',
        'displaySize': '5'
      }];

      let _0x5add3a = JSON.stringify(arg_930);

      if (this.testCart) {
        this.product_sku = this.testSku;
      }

      if (!this.testCart) {
        var arg_936 = [{
          'product_id': this.product_sku.split('_')[0],
          'product_variation_sku': this.product_sku,
          'productId': this.product_sku,
          'quantity': 1,
          'size': this.size,
          'displaySize': this.size
        }];
        _0x5add3a = JSON.stringify(arg_936);
      }

      this.webHookInfo.sku = this.product_sku;
      this.webHookInfo.size = this.size;

      let _0x3489dd = _0x4edeba();

      let _0x4fd6a6 = await _0x525073.bind(this)(_0x237100);

      var arg_931 = '[' + new Date().toISOString() + "]: StatusCode:" + _0x4fd6a6.statusCode + "; Set-Cookie: " + JSON.stringify(_0x4fd6a6.headers["set-cookie"]);

      _0x2d2bdc(arg_931, this.logFilePath);

      var arg_932 = '[' + new Date().toISOString() + "]: ATC Result: " + _0x4fd6a6.body;

      _0x2d2bdc(arg_932, this.logFilePath);

      let _0x562a57 = _0x4fd6a6.statusCode;
      var arg_935 = "retry: " + _0xcf2e50;
      var arg_934 = arg_935 + " status: ";
      var arg_933 = arg_934 + _0x562a57;
      console.log(arg_933);
      console.log(_0x4fd6a6.body);
      console.log(_0x4fd6a6.headers["set-cookie"]);

      if (_0x562a57 == 200) {
        let _0x59f264 = JSON.parse(_0x4fd6a6.body);

        this.webHookInfo.retry = _0xcf2e50;

        if (!this.testCart && (_0x59f264.totalProductCount <= 0 || !_0x59f264.basketId)) {
          return _0x5a14e3({
            'id': this.id,
            'status': "OOS, Retry",
            'statusCode': 1,
            'groupId': this.groupId
          }), _0x2d2bdc('[' + new Date().toISOString() + "]: OOS, Retry", this.logFilePath), null;
        }

        if (_0x59f264.pricing && _0x59f264.pricing.baseTotal) {
          this.webHookInfo.price = _0x59f264.pricing.baseTotal;
        }

        _0x5a14e3(arg_938);

        var arg_939 = '[' + new Date().toISOString() + "]: Item Carted";

        _0x2d2bdc(arg_939, this.logFilePath);

        this.cartTs = _0x59f264.modifiedDate;

        try {
          this.webHookInfo.productName = _0x59f264.shipmentList[0].productLineItemList[0].productName;
          this.webHookInfo.imageURL = _0x59f264.shipmentList[0].productLineItemList[0].productImage;
        } catch (err) {
          this.webHookInfo.productName = this.product_sku;
          this.webHookInfo.imageURL = '';
        }

        if (!this.webHookInfo.productName) {
          this.webHookInfo.productName = this.product_sku;
        }

        return _0x4fd6a6;
      } else {
        if (_0x562a57 == 403) {
          if (_0xcf2e50 >= this.maxAkamaiRetry) {
            return _0x5a14e3({
              'id': this.id,
              'status': "Maximum Retry Reached [ATC]",
              'statusCode': 4,
              'groupId': this.groupId
            }), _0x2d2bdc('[' + new Date().toISOString() + "]: Maximum Retry Reached [ATC] ", this.logFilePath), this.running = ![], null;
          } else {
            const _0x287aa5 = "2|8|7|4|6|5|1|0|3|9".split('|');

            let _0x2b45aa = 0;

            _0x5a14e3(arg_940);

            var arg_941 = '[' + new Date().toISOString() + "]: Invalid Akamai: " + _0x562a57;

            _0x2d2bdc(arg_941, this.logFilePath);

            await _0x45a98b(1000);
            await _0x5797c4.bind(this)();
            _0x3489dd = _0x4edeba();
            await _0x452541.bind(this)("https://www.yeezysupply.com/api/products/" + this.sku, {
              'x-instana-t': _0x3489dd,
              'content-type': "application/json",
              'x-instana-s': _0x3489dd,
              'sec-ch-ua-mobile': '?0',
              'user-agent': this.user_agent,
              'sec-ch-ua': this.secUAHeader,
              'x-instana-l': "1,correlationType=web;correlationId=" + _0x3489dd,
              'accept': "*/*",
              'sec-fetch-site': "same-origin",
              'sec-fetch-mode': "cors",
              'sec-fetch-dest': "empty",
              'referer': this.searchContent,
              'accept-encoding': "gzip, deflate, br",
              'accept-language': "en-US"
            });
            await _0x45a98b(500);
            await _0x1ab13a.bind(this)();
            _0xcf2e50 = _0xcf2e50 + 1;
            await _0x2c68dc.bind(this)();
          }

          return await _0x45a98b(5000), _0x1eb04a.bind(this)(![], _0xcf2e50);
        } else {
          if (_0x562a57 == 409) {
            return _0x5a14e3({
              'id': this.id,
              'status': "Carting Failed: OOS, Retrying",
              'statusCode': 4,
              'groupId': this.groupId
            }), _0x2d2bdc('[' + new Date().toISOString() + "]: Carting Failed: OOS: " + _0x562a57, this.logFilePath), null;
          } else {
            _0x5a14e3(arg_942);

            var arg_943 = '[' + new Date().toISOString() + "]: Carting Failed, Retrying: " + _0x562a57;

            _0x2d2bdc(arg_943, this.logFilePath);

            let _0x39193c = await _0xf26268.bind(this)();

            if (_0x39193c) {
              _0xcf2e50 = _0xcf2e50 + 1;
            }

            return await _0x45a98b(5000), _0x1eb04a.bind(this)(![], _0xcf2e50);
          }
        }
      }
    } catch (err) {
      const _0xc0e4c0 = "2|1|0|3|4".split('|');

      let _0x5f112f = 0;
      console.log(err);
      var arg_944 = '[' + new Date().toISOString() + "]: Add To Cart Error: " + err + '.';

      _0x2d2bdc(arg_944, this.logFilePath);

      _0x5a14e3(arg_945);

      await _0x45a98b(5000);
      return _0x1eb04a.bind(this)(![], _0xcf2e50);
    }
  };

  const _0xf26268 = async function (_0x220ca6 = ![]) {
    const _0x3ad9c3 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_946);

      return;
    }

    try {
      _0x5a14e3(arg_949);

      let _0x54b383 = await _0x52f001.bind(this)(this.user_agent);

      this.akamaiCookie = _0x54b383.cookie;
      this.cookieType = _0x54b383.type;

      if (this.akamaiCookie) {
        return !![];
      }

      return ![];
    } catch (err) {
      return console.log(err), _0x2d2bdc('[' + new Date().toISOString() + "]: Fetching Akamai Error: " + err + '.', this.logFilePath), ![];
    }
  };

  const _0x30775f = function () {
    const _0x3a4284 = _0x8044f7;
    const _0x4e1160 = ['4', "4.5", '5', "5.5", '6', "6.5", '7', "7.5", '8', "8.5", '9', "9.5", '10', "10.5", '11', "11.5", '12', "12.5", '13', "13.5", '14', "14.5", '15'];
    return _0x443a8d;
  };

  const _0x39b7c3 = async function () {
    const _0x1c031a = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_951);

      return;
    }

    try {
      if (this.passSplash) {
        return;
      }

      if (this.modes["Adv-Cap"]) {
        let _0x1b8293 = await _0x29091e.bind(this)();

        if (_0x1b8293 != this.v3Token) {
          _0x5a14e3(arg_952);

          var arg_953 = '[' + new Date().toISOString() + "]: ADV Captcha V3 Token Set: " + _0x1b8293;

          _0x2d2bdc(arg_953, this.logFilePath);

          this.v3Token = _0x1b8293;
        }

        await this.session.cookies.remove(this.siteOrigin, this.captchaCookieName);
        await this.session.cookies.set({
          'url': this.siteOrigin,
          'name': this.captchaCookieName,
          'value': _0x1b8293
        });
      } else {
        var arg_954 = Date.now();
        var arg_956 = 110 * 1000;
        var arg_955 = this.lastCaptchaTs + arg_956;

        if (arg_954 > arg_955) {
          _0x5a14e3(arg_957);

          var arg_958 = '[' + new Date().toISOString() + "]: Waiting for Captcha.";

          _0x2d2bdc(arg_958, this.logFilePath);

          let _0x50dff7 = await _0x29091e.bind(this)();

          this.lastCaptchaTs = Date.now();
          await this.session.cookies.remove(this.siteOrigin, this.captchaCookieName);
          await this.session.cookies.set({
            'url': this.siteOrigin,
            'name': this.captchaCookieName,
            'value': _0x50dff7,
            'expirationDate': Math.floor(Date.now() / 1000) + 110
          });

          var arg_959 = '[' + new Date().toISOString() + "]: Captcha V3 Token Set: " + _0x50dff7;

          _0x2d2bdc(arg_959, this.logFilePath);
        }
      }
    } catch (err) {
      console.log(err);
      var arg_960 = '[' + new Date().toISOString() + "]: Check Cookie Error: " + err + '.';

      _0x2d2bdc(arg_960, this.logFilePath);
    }
  };

  const _0x561c30 = async function () {
    const _0x290cd3 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_961);

      return;
    }

    try {
      _0x5a14e3(arg_962);

      let _0x2f894b = await _0x525073.bind(this)(_0x70c47d);

      let _0x57e423 = _0x2f894b.statusCode;
      var arg_963 = '[' + new Date().toISOString() + "]: Getting Splash " + this.splashURL + " StatusCode:" + _0x57e423 + "; Set-Cookie: " + JSON.stringify(_0x2f894b.headers["set-cookie"]);
      console.log(arg_963);
      var arg_964 = '[' + new Date().toISOString() + "]: Getting Splash " + this.splashURL + " StatusCode:" + _0x57e423 + "; Set-Cookie: " + JSON.stringify(_0x2f894b.headers["set-cookie"]);

      _0x2d2bdc(arg_964, this.logFilePath);

      if (_0x57e423 == 200) {
        if (_0x3b9bb4()) {
          this.passSplash = ![];
        } else {
          await _0x5797c4.bind(this)();
          this.passSplash = await _0x1c6383.bind(this)();

          if (!this.passSplash) {
            return "reset";
          }
        }
      }

      return _0x2f894b;
    } catch (err) {
      const _0x4e503a = "4|2|3|0|1".split('|');

      let _0x2f3035 = 0;
      console.log(err);
      var arg_965 = '[' + new Date().toISOString() + "]: Getting Splash Failed " + err + '.';

      _0x2d2bdc(arg_965, this.logFilePath);

      _0x5a14e3(arg_966);

      await _0x23d840(3000);
      return _0x561c30.bind(this)();
    }
  };

  const _0x105796 = async function () {
    const _0x8e59f5 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_969);

      return;
    }

    try {
      _0x5a14e3(arg_970);

      var arg_971 = '[' + new Date().toISOString() + "]: Getting Home Page";

      _0x2d2bdc(arg_971, this.logFilePath);

      let _0x2f6a8d = await _0x525073.bind(this)(_0x1cd5ee);

      var arg_972 = '[' + new Date().toISOString() + "]: Get Home Page StatusCode:" + _0x2f6a8d.statusCode + "; Set-Cookie: " + JSON.stringify(_0x2f6a8d.headers["set-cookie"]);

      _0x2d2bdc(arg_972, this.logFilePath);

      var arg_973 = '[' + new Date().toISOString() + "]: Get Home Page StatusCode:" + _0x2f6a8d.statusCode;

      console.log(arg_973);

      if (_0x2f6a8d.statusCode == 200 && _0x2f6a8d.body) {
        if (_0x2f6a8d.body.includes("Access Denied")) {
          const _0x1c9a41 = "1|2|4|5|0|3".split('|');

          let _0x54ba58 = 0;

          _0x5a14e3(arg_976);

          var arg_977 = '[' + new Date().toISOString() + "]: Access Denied, Rotate Proxy";

          _0x2d2bdc(arg_977, this.logFilePath);

          await _0x354f98.bind(this)();
          await _0x54ff9c.bind(this)();
          await _0x23d840(this.monitorDelay);
          return _0x105796.bind(this)();
        }

        return _0x3874ac.bind(this)(this.siteOrigin + '/', _0x2f6a8d.body);
      } else {
        return _0x2d2bdc('[' + new Date().toISOString() + "]: Get Home Page Failed: " + _0x2f6a8d.statusCode, this.logFilePath), _0x5a14e3({
          'id': this.id,
          'status': "Getting Home Page Failed [" + _0x2f6a8d.statusCode + "], Retry",
          'statusCode': 4,
          'groupId': this.groupId
        }), await _0x23d840(this.monitorDelay), _0x105796.bind(this)();
      }
    } catch (err) {
      const _0x2a0edb = "2|1|0|4|3".split('|');

      let _0x13248a = 0;
      console.log(err);
      var arg_979 = '[' + new Date().toISOString() + "]: Get Home Page Failed: " + err;

      _0x2d2bdc(arg_979, this.logFilePath);

      _0x5a14e3(arg_980);

      await _0x23d840(this.monitorDelay);
      return _0x105796.bind(this)();
    }
  };

  const _0x5797c4 = async function (_0xe4ff28 = ![]) {
    const _0x2573c6 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_981);

      return;
    }

    try {
      _0x5a14e3(arg_984);

      let _0x20ecb1 = await _0x525073.bind(this)(_0x39dd0d);

      var arg_985 = '[' + new Date().toISOString() + "]: Getting Product Page StatusCode:" + _0x20ecb1.statusCode + "; Set-Cookie: " + JSON.stringify(_0x20ecb1.headers["set-cookie"]);

      _0x2d2bdc(arg_985, this.logFilePath);

      var arg_986 = '[' + new Date().toISOString() + "]: Check Banned: " + _0x20ecb1.body.includes("UNFORTUNATELY WE ARE UNABLE TO GIVE YOU ACCESS TO OUR SITE AT THIS TIME");

      _0x2d2bdc(arg_986, this.logFilePath);

      if (!_0xe4ff28 && _0x20ecb1.statusCode == 200 && _0x20ecb1.body) {
        await _0x3874ac.bind(this)(this.searchContent, _0x20ecb1.body);
      }

      return _0x20ecb1;
    } catch (err) {
      const _0xd53b03 = "4|1|3|0|2".split('|');

      let _0x3eafab = 0;
      console.log(err);
      var arg_988 = '[' + new Date().toISOString() + "]: Getting Product Page Failed " + err + '.';

      _0x2d2bdc(arg_988, this.logFilePath);

      _0x5a14e3(arg_989);

      await _0x23d840(5000);
      return _0x5797c4.bind(this)(_0xe4ff28);
    }
  };

  const _0x452541 = async function (_0x30e735, _0x1c9b13 = null, _0x18f761 = 0) {
    const _0x520a88 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_990);

      return;
    }

    if (_0x18f761 == 3) {
      return null;
    }

    try {
      if (_0x1c9b13) {
        _0x33409e.headers = _0x1c9b13;
      }

      let _0x139974 = await _0x525073.bind(this)(_0x33409e);

      var arg_991 = '[' + new Date().toISOString() + "]: Get Page StatusCode:" + _0x139974.statusCode + ':\x20' + _0x30e735 + '\x20';
      console.log(arg_991);

      if (_0x139974.statusCode == 200) {
        return _0x139974;
      }

      return null;
    } catch (err) {
      const _0x131746 = "3|1|2|0|4".split('|');

      let _0x1f7833 = 0;
      console.log(err);

      _0x5a14e3(arg_992);

      var arg_993 = '[' + new Date().toISOString() + "]: Get Product Page Failed " + err + '.';

      _0x2d2bdc(arg_993, this.logFilePath);

      await _0x23d840(this.monitorDelay);
      return _0x452541.bind(this)(_0x30e735, _0x1c9b13, _0x18f761 + 1);
    }
  };

  const _0x1ab13a = async function (_0x4c8885 = 0) {
    const _0x4084c6 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_994);

      return;
    }

    if (_0x4c8885 == 3) {
      return null;
    }

    if (_0x4c8885 == 0) {
      await _0xf26268.bind(this)();
    }

    try {
      _0x5a14e3(arg_995);

      let _0x252ecb = _0x4edeba();

      let _0x2fe75d = await _0x525073.bind(this)(_0x3ec002);

      let _0x56ab65 = _0x2fe75d.statusCode;

      var arg_996 = '[' + new Date().toISOString() + "]: Get Basket StatusCode:" + _0x56ab65;

      console.log(arg_996);

      var arg_997 = '[' + new Date().toISOString() + "]: Get Basket status: " + _0x56ab65;

      _0x2d2bdc(arg_997, this.logFilePath);

      if (_0x2fe75d.headers.authorization) {
        this.authToken = _0x2fe75d.headers.authorization;
      }

      if (_0x56ab65 == 200 || _0x56ab65 == 404) {
        if (_0x56ab65 == 200 && _0x2fe75d.body.includes("UNFORTUNATELY WE ARE UNABLE TO GIVE YOU ACCESS TO OUR SITE AT THIS TIME")) {
          return await _0x23d840(5000), _0x1ab13a.bind(this)(_0x4c8885 + 1);
        }

        return _0x2fe75d;
      } else {
        if (_0x56ab65 == 400) {
          await _0xf26268.bind(this)();
        }
      }

      return await _0x23d840(5000), _0x1ab13a.bind(this)(_0x4c8885 + 1);
    } catch (err) {
      const _0x505f06 = "3|4|2|0|1".split('|');

      let _0x8328d6 = 0;
      console.log(err);

      _0x5a14e3(arg_998);

      var arg_999 = '[' + new Date().toISOString() + "]: Get Page Session Failed " + err + '.';

      _0x2d2bdc(arg_999, this.logFilePath);

      await _0x23d840(5000);
      return _0x1ab13a.bind(this)(_0x4c8885 + 1);
    }
  };

  const _0x320d6e = [{
    'ap': "true",
    'bt': {
      'charging': !![],
      'chargingTime': 0,
      'dischargingTime': "Infinity",
      'level': 1,
      'onchargingchange': null,
      'onchargingtimechange': null,
      'ondischargingtimechange': null,
      'onlevelchange': null
    },
    'fonts': "4,14,15,16,21,22,23,43,47,48,49,50,51",
    'fh': "cdf3f65934ab41fd05bcf4701c9ac7ab665ba37c",
    'timing': {
      '1': 101,
      '2': 206,
      '3': 307,
      '4': 408,
      '5': 509,
      '6': 611,
      'profile': {
        'bp': 1,
        'sr': 1,
        'dp': 0,
        'lt': 1,
        'ps': 2,
        'cv': 84,
        'fp': 0,
        'sp': 0,
        'br': 0,
        'ieps': 0,
        'av': 0,
        'z1': 9,
        'jsv': 1,
        'nav': 0,
        'nap': 1,
        'crc': 0,
        'z2': 0,
        'z3': 0,
        'z4': 1,
        'z5': 0,
        'z6': 0,
        'fonts': 74
      },
      'main': 441,
      'compute': 101,
      'send': 685
    },
    'bp': "736851762,747649516",
    'sr': {
      'inner': [1270, 980],
      'outer': [1270, 1002],
      'screen': [205, 24],
      'pageOffset': [0, 0],
      'avail': [1680, 1027],
      'size': [1680, 1050],
      'client': [1270, 980],
      'colorDepth': 24,
      'pixelDepth': 24
    },
    'dp': {
      'XDomainRequest': 0,
      'createPopup': 0,
      'removeEventListener': 1,
      'globalStorage': 0,
      'openDatabase': 1,
      'indexedDB': 1,
      'attachEvent': 0,
      'ActiveXObject': 0,
      'dispatchEvent': 1,
      'addBehavior': 0,
      'addEventListener': 1,
      'detachEvent': 0,
      'fireEvent': 0,
      'MutationObserver': 1,
      'HTMLMenuItemElement': 0,
      'Int8Array': 1,
      'postMessage': 1,
      'querySelector': 1,
      'getElementsByClassName': 1,
      'images': 1,
      'compatMode': "CSS1Compat",
      'documentMode': 0,
      'all': 1,
      'now': 1,
      'contextMenu': 0
    },
    'lt': "1608601014035-8",
    'ps': "true,true",
    'cv': "41266ecff8a993036d5d8595a30202ff4f3dda12",
    'fp': "false",
    'sp': "false",
    'br': "Chrome",
    'ieps': "false",
    'av': "false",
    'z': {
      'a': 430108860,
      'b': 1,
      'c': 1
    },
    'zh': '',
    'jsv': "1.7",
    'nav': {
      'userAgent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
      'appName': "Netscape",
      'appCodeName': "Mozilla",
      'appVersion': "5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
      'appMinorVersion': 0,
      'product': "Gecko",
      'productSub': "20030107",
      'vendor': "Google Inc.",
      'vendorSub': '',
      'buildID': 0,
      'platform': "MacIntel",
      'oscpu': 0,
      'hardwareConcurrency': 16,
      'language': "en-US",
      'languages': ["en-US"],
      'systemLanguage': 0,
      'userLanguage': 0,
      'doNotTrack': null,
      'msDoNotTrack': 0,
      'cookieEnabled': !![],
      'geolocation': 1,
      'vibrate': 1,
      'maxTouchPoints': 0,
      'webdriver': 0,
      'plugins': ["Chromium PDF Viewer", "Chromium PDF Viewer"]
    },
    'crc': {
      'window.chrome': {}
    },
    't': "1d9c9570576c03a7a1002a4fd39f70a2a10456c8",
    'u': "fbd5b19c53cd5c11ae2cef6af310971b",
    'nap': "22322244242322243222",
    'fc': "true"
  }];

  const _0x3ef322 = async function (_0x31433d) {
    const _0x18f249 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_1000);

      return;
    }

    try {
      if (!this.gValue) {
        await _0x3921ea.bind(this)(_0x31433d);
      }

      if (this.siteOrigin.includes("yeezysupply")) {
        let _0x59bc2c = await _0x452541.bind(this)("https://www.yeezysupply.com/api/yeezysupply/products/bloom", _0x3bbf57);

        while (this.running && !_0x59bc2c) {
          await _0x5fb498(this.monitorDelay);
          _0x59bc2c = await _0x452541.bind(this)("https://www.yeezysupply.com/api/yeezysupply/products/bloom", _0x3bbf57);
        }

        let _0x502cc0 = JSON.parse(_0x59bc2c.body);

        let _0x33c781 = _0x502cc0.filter(_0x3af509 => _0x3af509.product_id == this.sku);

        if (_0x33c781 && _0x33c781.length > 0) {
          this.productName = _0x33c781.product_name;
        }

        await _0x562265.bind(this)();
      }

      var arg_1001 = '[' + new Date().toISOString() + "]: parsed gVal: " + this.gValue;

      _0x2d2bdc(arg_1001, this.logFilePath);

      let {
        pixelPayLoad: _0x5eef1c,
        deviceId: _0x5c9399
      } = await _0x4541df.bind(this)();
      this.pixelPayLoad = _0x5eef1c;
      await _0x3b3e7f.bind(this)(_0x31433d, _0x5eef1c, _0x5c9399);
    } catch (err) {
    }
  };

  const _0x191203 = function () {
    const _0x570b70 = _0x8044f7;
    var arg_1003 = JSON.stringify(_0x254c3b[this.user_agent]);

    let _0x5971cc = JSON.parse(arg_1003);

    return _0x5971cc.pixelPayLoad = _0x5971cc.pixelPayLoad.replace("updateDate", Date.now()), _0x5971cc;
  };

  const _0x3921ea = async function (_0x272a6d, _0x5a465c = 0) {
    const _0x5bd01e = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_1005);

      return;
    }

    if (_0x5a465c >= 3) {
      return;
    }

    try {
      let _0x243a40 = await _0x525073.bind(this)(_0x1a14f9);

      var arg_1006 = '[' + new Date().toISOString() + "]: Get P Status: " + this.pixelId + ',\x20' + _0x243a40.statusCode + '.';

      _0x2d2bdc(arg_1006, this.logFilePath);

      if (_0x243a40.statusCode != 200) {
        return await _0x5fb498(1000), _0x3921ea.bind(this)(_0x272a6d, _0x5a465c + 1);
      }

      try {
        let _0x37863a = /_=(\[[\"\\\,x0-9a-zA-Z]+\]);/.exec(_0x243a40.body)[1];

        let _0x363048 = eval(_0x37863a);

        const _0x54187b = parseInt(/g=_\[([0-9]+)\]/.exec(_0x243a40.body)[1]);

        this.gValue = _0x363048[_0x54187b];
      } catch (err) {
        console.log(err);
      }

      return;
    } catch (err) {
      return console.log(err), _0x2d2bdc('[' + new Date().toISOString() + "]: Get Product Page Failed " + err + '.', this.logFilePath), await _0x5fb498(1000), _0x3921ea.bind(this)(_0x272a6d, _0x5a465c + 1);
    }
  };

  const _0x3b3e7f = async function (_0x136d09, _0x5d404a, _0x3579e1) {
    const _0x234e69 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_1007);

      return;
    }

    try {
      if (_0x3579e1) {
        this.deviceId = _0x3579e1;
      }

      let _0x2171de = _0x4edeba();

      let _0x49056f = await _0x525073.bind(this)(_0x5176fe);

      this.postedPixel = !![];
      console.log("post pixel status: ", _0x49056f.statusCode);
      var arg_1010 = '[' + new Date().toISOString() + "]: post info StatusCode: " + _0x49056f.statusCode + ';';

      _0x2d2bdc(arg_1010, this.logFilePath);

      return;
    } catch (err) {
      console.log(err);
    }
  };

  const _0x4541df = async function (_0x48b8ba = 0) {
    const _0x4cc5ba = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_1011);

      return;
    }

    if (this.useStaticFp) {
      return _0x4c75eb(this.bazadebezolkohpepadr, this.gValue);
    }

    if (_0x48b8ba >= 3 || !this.bazadebezolkohpepadr || !this.gValue) {
      return _0x191203();
    }

    let _0x5caae0 = null;
    _0x5caae0 = await _0x29d285.bind(this)(this.user_agent, this.bazadebezolkohpepadr, this.gValue, 0);

    if (!_0x5caae0) {
      return _0x191203();
    }

    return _0x5caae0;
  };

  const _0x29d285 = async function (_0xb2a4d5, _0x16a8de, _0x5121e1, _0x34d286 = 0) {
    const _0x1b43d3 = _0x8044f7;

    if (_0x34d286 == 5) {
      return null;
    }

    try {
      let _0x4f3456 = await _0x1c3c2d(_0x418055);

      if (_0x4f3456.statusCode == 200 && _0x4f3456.body && _0x4f3456.body.pixelPayLoad != "Not loaded yet") {
        return this.pixelHash = _0x4f3456.body.split('*')[2], {
          'pixelPayLoad': _0x4f3456.body.split('*')[0],
          'deviceId': _0x254c3b[_0xb2a4d5] ? _0x254c3b[_0xb2a4d5].deviceId : null,
          'userAgent': _0x4f3456.body.split('*')[1]
        };
      }

      return await _0x5fb498(1500), _0x29d285.bind(this)(_0xb2a4d5, _0x16a8de, _0x5121e1, _0x34d286 + 1);
    } catch (err) {
      return console.log(err), await _0x5fb498(1500), _0x29d285.bind(this)(_0xb2a4d5, _0x16a8de, _0x5121e1, _0x34d286 + 1);
    }
  };

  const _0x4c75eb = async function (_0xdd222f, _0x247995) {
    const _0x23ab5d = _0x8044f7;
    var arg_1016 = Math.random();
    var arg_1015 = arg_1016 * 600;
    var arg_1013 = 1000 + arg_1015;
    var arg_1018 = Math.random();
    var arg_1017 = arg_1018 * 200;
    var arg_1014 = 800 + arg_1017;

    let _0x1403e6 = parseInt(arg_1013);

    let _0x525505 = parseInt(arg_1014);

    return {
      'pixelPayLoad': _0x4453e3(_0x15d3fd),
      'deviceId': "DGygn5fxoI0030000000000000LOziC3ZM670089146776cVB94iKzBGDfsGGcG0j3QJWV6m1Lzq0055zgp4q8JSa00000qZkTE00000q6IQbnyNfplgQ6OzVQDG"
    };
  };

  const _0x4453e3 = function (_0x385960) {
    const _0x56f470 = _0x8044f7;
    var _0x2cda8a = '';

    for (var _0x1e3475 in _0x385960) _0x385960.hasOwnProperty(_0x1e3475) && (_0x2cda8a += encodeURIComponent(_0x1e3475) + '=' + encodeURIComponent(_0x385960[_0x1e3475]) + '&');

    return _0x2cda8a.length && (_0x2cda8a = _0x2cda8a.substr(0, _0x2cda8a.length - 1)), _0x2cda8a;
  };

  const _0x2086d1 = function (_0x1ce1e2) {
    const _0x3ee896 = _0x8044f7;

    try {
      return _0x248947.hash = function (_0x4590f0) {
        const _0x48a498 = _0x3ee896;
        _0x4590f0 = _0x4590f0.utf8Encode();
        var _0x24bfca = [1518500249, 1859775393, 2400959708, 3395469782];
        _0x4590f0 += String.fromCharCode(128);

        var _0xfc17a6 = _0x4590f0.length / 4 + 2,
          _0x544579 = Math.ceil(_0xfc17a6 / 16),
          _0x121ba9 = new Array(_0x544579),
          _0x3a0bf2 = 0;

        ;

        for (; _0x3a0bf2 < _0x544579; _0x3a0bf2++) {
          _0x121ba9[_0x3a0bf2] = new Array(16);
          var _0x54e8ae = 0;
          ;

          for (; _0x54e8ae < 16; _0x54e8ae++) {
            var arg_1032 = 64 * _0x3a0bf2;
            var arg_1033 = 4 * _0x54e8ae;
            var arg_1031 = arg_1032 + arg_1033;

            var arg_1030 = _0x4590f0.charCodeAt(arg_1031);

            var arg_1028 = arg_1030 << 24;
            var arg_1037 = 64 * _0x3a0bf2;
            var arg_1038 = 4 * _0x54e8ae;
            var arg_1036 = arg_1037 + arg_1038;
            var arg_1035 = arg_1036 + 1;

            var arg_1034 = _0x4590f0.charCodeAt(arg_1035);

            var arg_1029 = arg_1034 << 16;
            var arg_1026 = arg_1028 | arg_1029;
            var arg_1042 = 64 * _0x3a0bf2;
            var arg_1043 = 4 * _0x54e8ae;
            var arg_1041 = arg_1042 + arg_1043;
            var arg_1040 = arg_1041 + 2;

            var arg_1039 = _0x4590f0.charCodeAt(arg_1040);

            var arg_1027 = arg_1039 << 8;
            var arg_1024 = arg_1026 | arg_1027;
            var arg_1046 = 64 * _0x3a0bf2;
            var arg_1047 = 4 * _0x54e8ae;
            var arg_1045 = arg_1046 + arg_1047;
            var arg_1044 = arg_1045 + 3;

            var arg_1025 = _0x4590f0.charCodeAt(arg_1044);

            _0x121ba9[_0x3a0bf2][_0x54e8ae] = arg_1024 | arg_1025;
          }
        }

        var arg_1021 = _0x4590f0.length - 1;
        var arg_1019 = 8 * arg_1021;
        var arg_1020 = Math.pow(2, 32);
        _0x121ba9[_0x544579 - 1][14] = arg_1019 / arg_1020;
        _0x121ba9[_0x544579 - 1][14] = Math.floor(_0x121ba9[_0x544579 - 1][14]);
        var arg_1023 = _0x4590f0.length - 1;
        var arg_1022 = 8 * arg_1023;
        _0x121ba9[_0x544579 - 1][15] = arg_1022 & 4294967295;

        var _0x199d34,
          _0x188fb7,
          _0x2f8a11,
          _0x3528c2,
          _0x26bc94,
          _0x9aadf4 = 1732584193,
          _0x5dfbe6 = 4023233417,
          _0x153e5a = 2562383102,
          _0x55cfec = 271733878,
          _0x1a9ff1 = 3285377520,
          _0x34887 = new Array(80),
          _0x3a0bf2 = 0;

        ;

        for (; _0x3a0bf2 < _0x544579; _0x3a0bf2++) {
          var _0x62fbc9 = 0;
          ;

          for (; _0x62fbc9 < 16; _0x62fbc9++) {
            _0x34887[_0x62fbc9] = _0x121ba9[_0x3a0bf2][_0x62fbc9];
          }

          var _0x62fbc9 = 16;
          ;

          for (; _0x62fbc9 < 80; _0x62fbc9++) {
            var arg_1056 = _0x34887[_0x62fbc9 - 3] ^ _0x34887[_0x62fbc9 - 8];
            var arg_1055 = arg_1056 ^ _0x34887[_0x62fbc9 - 14];
            var arg_1054 = arg_1055 ^ _0x34887[_0x62fbc9 - 16];
            _0x34887[_0x62fbc9] = _0x248947.ROTL(arg_1054, 1);
          }

          _0x199d34 = _0x9aadf4;
          _0x188fb7 = _0x5dfbe6;
          _0x2f8a11 = _0x153e5a;
          _0x3528c2 = _0x55cfec;
          _0x26bc94 = _0x1a9ff1;
          var _0x62fbc9 = 0;
          ;

          for (; _0x62fbc9 < 80; _0x62fbc9++) {
            var arg_1057 = _0x62fbc9 / 20;

            var arg_1062 = _0x248947.ROTL(_0x199d34, 5);

            var arg_1063 = _0x248947.f(_0x120d6f, _0x188fb7, _0x2f8a11, _0x3528c2);

            var arg_1061 = arg_1062 + arg_1063;
            var arg_1060 = arg_1061 + _0x26bc94;
            var arg_1059 = arg_1060 + _0x24bfca[_0x120d6f];
            var arg_1058 = arg_1059 + _0x34887[_0x62fbc9];

            var _0x120d6f = Math.floor(arg_1057);

            var _0xdb6ba = arg_1058 & 4294967295;

            _0x26bc94 = _0x3528c2;
            _0x3528c2 = _0x2f8a11;
            _0x2f8a11 = _0x248947.ROTL(_0x188fb7, 30);
            _0x188fb7 = _0x199d34;
            _0x199d34 = _0xdb6ba;
          }

          var arg_1049 = _0x9aadf4 + _0x199d34;
          _0x9aadf4 = arg_1049 & 4294967295;
          var arg_1050 = _0x5dfbe6 + _0x188fb7;
          _0x5dfbe6 = arg_1050 & 4294967295;
          var arg_1051 = _0x153e5a + _0x2f8a11;
          _0x153e5a = arg_1051 & 4294967295;
          var arg_1052 = _0x55cfec + _0x3528c2;
          _0x55cfec = arg_1052 & 4294967295;
          var arg_1053 = _0x1a9ff1 + _0x26bc94;
          _0x1a9ff1 = arg_1053 & 4294967295;
        }

        return _0x248947.toHexStr(_0x9aadf4) + _0x248947.toHexStr(_0x5dfbe6) + _0x248947.toHexStr(_0x153e5a) + _0x248947.toHexStr(_0x55cfec) + _0x248947.toHexStr(_0x1a9ff1);
      }, _0x248947.f = function (_0x26c440, _0x2bc836, _0x39e8b7, _0x1e51a9) {
        const _0xf2d25a = _0x3ee896;

        switch (_0x26c440) {
          case 0:
            return _0x2bc836 & _0x39e8b7 ^ ~_0x2bc836 & _0x1e51a9;

          case 1:
            return _0x2bc836 ^ _0x39e8b7 ^ _0x1e51a9;

          case 2:
            return _0x2bc836 & _0x39e8b7 ^ _0x2bc836 & _0x1e51a9 ^ _0x39e8b7 & _0x1e51a9;

          case 3:
            return _0x2bc836 ^ _0x39e8b7 ^ _0x1e51a9;
        }
      }, _0x248947.ROTL = function (_0x399698, _0x1c6125) {
        const _0x5cf76c = _0x3ee896;
        return _0x399698 << _0x1c6125 | _0x399698 >>> 32 - _0x1c6125;
      }, _0x248947.toHexStr = function (_0x5e8f57) {
        const _0x352bad = _0x3ee896;

        var _0x350eec,
          _0x4399c9 = '',
          _0x3a7e99 = 7;

        ;

        for (; _0x3a7e99 >= 0; _0x3a7e99--) {
          var arg_1066 = 4 * _0x3a7e99;
          var arg_1065 = _0x5e8f57 >>> arg_1066;
          _0x350eec = arg_1065 & 15;
          _0x4399c9 += _0x350eec.toString(16);
        }

        return _0x4399c9;
      }, void 0 === String.prototype.utf8Encode && (String.prototype.utf8Encode = function () {
        const _0x45b05f = _0x3ee896;
        return unescape(encodeURIComponent(this));
      }), void 0 === String.prototype.utf8Decode && (String.prototype.utf8Decode = function () {
        const _0x1bd96e = _0x3ee896;

        try {
          return decodeURIComponent(escape(this));
        } catch (err) {
          return this;
        }
      }), _0x248947.hash(_0x1ce1e2);
    } catch (err) {
      return console.log(err), "40b50911b2f68449a9188ada1876b86df966e09a";
    }
  };

  const _0x54ff9c = async function () {
    const _0x55ff34 = _0x8044f7;
    let _0x35b4cc = this.proxyList[Math.floor(Math.random() * this.proxyList.length)];
    this.proxy = _0x35b4cc;
    let _0x1774b3 = null;

    if (_0x35b4cc && _0x35b4cc.split(':').length > 1) {
      _0x1774b3 = _0x35b4cc.split(':')[0] + ':' + _0x35b4cc.split(':')[1];
    } else {
      _0x1774b3 = '';
    }

    this.proxyHost = _0x1774b3;
    this.proxyUsername = _0x35b4cc && _0x35b4cc.split(':')[2] ? _0x35b4cc.split(':')[2] : '';
    this.proxyPassword = _0x35b4cc && _0x35b4cc.split(':')[3] ? _0x35b4cc.split(':')[3] : '';
    await this.session.setProxy({
      'proxyRules': _0x1774b3
    });
  };

  const _0x29091e = async function () {
    const _0x3dfb2f = _0x8044f7;
    let _0x4c4c75 = null;

    if (this.modes["Adv-Cap"]) {
      _0x4c4c75 = _0x4802da.YEEZYSUPPLY_ADVANCE;
    } else {
      _0x4c4c75 = _0x4802da.YEEZYSUPPLY;
    }

    if (this.modes["Adv-Cap"]) {
      if (this.modes.AYCD) {
        _0x4c4c75 = _0x4802da.YEEZYSUPPLY_ADVANCE_AYCD;
      }
    } else {
      if (this.modes.AYCD) {
        _0x4c4c75 = _0x4802da.YEEZYSUPPLY_AYCD;
      }
    }

    this.needCaptcha = _0x4c4c75;

    _0x89a33e(this.searchContent, _0x4c4c75, this.siteOrigin, this.siteKey, this.action, this.id, this.proxy, this.modes, this.groupId);

    let _0x3f5570 = _0x192d3d(this.searchContent, _0x4c4c75, this.siteOrigin, this.siteKey, this.action, this.id, this.proxy, this.modes, this.groupId);

    while (this.running && !_0x3f5570) {
      await _0x23d840(50);
      _0x3f5570 = _0x192d3d(this.searchContent, _0x4c4c75, this.siteOrigin, this.siteKey, this.action, this.id, this.proxy, this.modes, this.groupId);
    }

    return this.needCaptcha = ![], _0x3f5570;
  };

  const _0x30ec40 = function () {
    const _0x591437 = _0x8044f7;
    let _0x46dc37 = null;

    if (this.modes["Adv-Cap"]) {
      _0x46dc37 = _0x4802da.YEEZYSUPPLY_ADVANCE;
    } else {
      _0x46dc37 = _0x4802da.YEEZYSUPPLY;
    }

    if (this.modes["Adv-Cap"]) {
      if (this.modes.AYCD) {
        _0x46dc37 = _0x4802da.YEEZYSUPPLY_ADVANCE_AYCD;
      }
    } else {
      if (this.modes.AYCD) {
        _0x46dc37 = _0x4802da.YEEZYSUPPLY_AYCD;
      }
    }

    global.appInfo.captchaManager.resetV3Token(this.siteOrigin, this.siteKey, this.action, this.id, this.modes, this.searchContent, _0x46dc37, this.groupId);
  };

  const _0x13958c = async function () {
    const _0x21b773 = _0x8044f7;

    _0xef1270(this.needCaptcha, this.id);
  };

  const _0x23d840 = _0x4aed23 => {
    const _0x30b80c = _0x8044f7;
    return new Promise(_0x591a25 => setTimeout(_0x591a25, _0x4aed23));
  };

  const _0xd58baa = (_0x11031d, _0x4ed408, _0x15c9ad, _0xf45673) => {
    const _0x3ec782 = _0x8044f7;

    var arg_1070 = (_0x11031d - 0).toString(16);

    _0x11031d = '' + arg_1070;
    _0xf45673 = '';

    if (_0x4ed408 > _0x11031d.length) {
      _0x15c9ad = 0;

      for (; _0x15c9ad < _0x4ed408 - _0x11031d.length; _0x15c9ad++) {
        _0xf45673 += '0';
      }
    }

    return '' + _0xf45673 + _0x11031d;
  };

  const _0x4c8607 = (_0x302deb, _0x11530e, _0x22817a, _0x1459e8, _0x3fa544) => {
    const _0x4dbfc6 = _0x8044f7;
    var arg_1074 = Math.random();

    let _0x156b28 = Date.now();

    let _0x283f7c = _0xd58baa(_0x156b28, 12);

    let _0x2b55c5 = '' + arg_1074;

    var arg_1075 = _0x2b55c5.substring(2, _0x2b55c5.length);

    _0x283f7c += _0xd58baa(arg_1075, 16);

    try {
      const _0x932e64 = "0|2|3|4|1".split('|');

      let _0x2ce018 = 0;
      var arg_1076 = null;

      if (_0x302deb.length) {
        arg_1076 = _0x302deb.length;
      } else {
        arg_1076 = 0;
      }

      _0x283f7c += _0xd58baa(arg_1076, 2);
      _0x283f7c += _0xd58baa(_0x11530e.length, 3);
      _0x283f7c += _0xd58baa(_0x22817a.length, 4);
      _0x283f7c += _0xd58baa(_0x1459e8.length, 3);
      var arg_1078 = _0x3fa544.inner[0] + _0x3fa544.inner[1];
      var arg_1080 = null;

      if (_0x3fa544.colorDepth) {
        arg_1080 = _0x3fa544.colorDepth;
      } else {
        arg_1080 = _0x3fa544.pixelDepth;
      }

      var arg_1079 = parseInt(arg_1080);
      var arg_1077 = arg_1078 + arg_1079;
      _0x283f7c += _0xd58baa(arg_1077, 5);
    } catch (err) {
    }

    return _0x283f7c;
  };

  const _0xd817af = function (_0x45f596) {
    const _0x28f89b = _0x8044f7;

    try {
      if (!_0x45f596) {
        _0x45f596 = _0x254c3b[this.user_agent].pixelPayLoad;
      }

      var arg_1083 = decodeURIComponent(_0x45f596).replace(/"/g, '\x5c\x22').replace(/&/g, "\",\"").replace(/=/g, "\":\"");
      var arg_1082 = '{\x22' + arg_1083;
      var arg_1081 = arg_1082 + '\x22}';

      let _0x34be36 = JSON.parse(arg_1081);

      return {
        'nav': JSON.parse(_0x34be36.nav),
        'sr': JSON.parse(_0x34be36.sr)
      };
    } catch (err) {
      return JSON.parse(JSON.stringify(_0x320d6e[Math.floor(Math.random() * _0x320d6e.length)]));
    }
  };

  const _0xc3b9a2 = async function (_0xdcba65) {
    const _0x469c06 = _0x8044f7;

    let _0x89d59c = _0xd817af(this.pixelPayLoad);

    let _0x301669 = [];

    let _0x594cb4 = _0x4c8607(_0x89d59c.nav.plugins, _0x89d59c.nav.userAgent, this.currentURL, _0x89d59c.nav.appVersion, _0x89d59c.sr);

    let _0xc0bd5c = Date.now();

    var arg_1085 = "v_id:" + encodeURIComponent(_0x594cb4);

    _0x301669.push(arg_1085);

    _0x301669.push("_sn:1");

    var arg_1086 = "_se:" + _0xdcba65;

    _0x301669.push(arg_1086);

    var arg_1087 = "_ss:" + (_0xdcba65 != 0 ? 0 : 1);

    _0x301669.push(arg_1087);

    var arg_1088 = "_st:" + this.initTs;

    _0x301669.push(arg_1088);

    var arg_1091 = 30 * 60;
    var arg_1090 = arg_1091 * 1000;
    var arg_1089 = "ses_id:" + (_0xc0bd5c + arg_1090) + "%3Bexp-session";

    _0x301669.push(arg_1089);

    _0x301669.push("_pn:1%3Bexp-session");

    var arg_1094 = 60 * 60;
    var arg_1093 = arg_1094 * 1000;

    var arg_1092 = "_prevpage:" + encodeURIComponent(this.pageTitle) + "%3Bexp-" + (_0xc0bd5c + arg_1093);

    _0x301669.push(arg_1092);

    await _0x2e7732.bind(this)("utag_main", _0x301669.join('$'));
  };

  const _0x2e7732 = async function (_0x83a8d5, _0x3f526b) {
    const _0x91b0a6 = _0x8044f7;

    try {
      await this.session.cookies.remove(this.siteOrigin, _0x83a8d5);
      await this.session.cookies.set({
        'url': this.siteOrigin,
        'name': _0x83a8d5,
        'value': _0x3f526b
      });
    } catch (err) {
    }
  };

  const _0x562265 = async function () {
    const _0x595068 = _0x8044f7;

    try {
      const _0x3bd8ae = "2|5|6|4|3|1|0".split('|');

      let _0x446e2b = 0;
      await _0x2e7732.bind(this)("UserSignUpAndSave", '1');
      await _0x2e7732.bind(this)("UserSignUpAndSaveOverlay", '0');
      await _0x2e7732.bind(this)("default_searchTerms_CustomizeSearch", "%5B%5D");
      await _0x2e7732.bind(this)("geoRedirectionAlreadySuggested", "false");
      await _0x2e7732.bind(this)("wishlist", "%5B%5D");
      await _0x2e7732.bind(this)("persistentBasketCount", '0');
      await _0x2e7732.bind(this)("userBasketCount", '0');
    } catch (err) {
    }
  };

  const _0x6149fe = async function () {
    const _0x2128d3 = _0x8044f7;

    try {
      const _0x4615a0 = "0|4|7|3|6|1|5|2".split('|');

      let _0x5d87c9 = 0;
      await _0x1cbf75.bind(this)();
      await _0xc3b9a2.bind(this)(1);
      await _0x2e7732.bind(this)("geo_country", 'US');
      await _0x2e7732.bind(this)("utag_main", 'US');
      await _0x2e7732.bind(this)("AMCVS_7ADA401053CCF9130A490D4C%40AdobeOrg", '1');
      await _0x2e7732.bind(this)("AMCV_7ADA401053CCF9130A490D4C%40AdobeOrg", "-227196251%7CMCIDTS%7C18777%7CMCMID%7C16637092242629872863830248943637256093%7CMCAAMLH-1622895710%7C7%7CMCAAMB-1622895710%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1622298110s%7CNONE");
      await _0x2e7732.bind(this)("_gat_tealium_0", '1');
      await _0x2e7732.bind(this)('RT', "\"z=1&dm=yeezysupply.com&si=" + this.sessionId + "&ss=" + this.ss + "&sl=1&tt=" + this.tt + "&bcn=" + encodeURIComponent(this.beaconURL) + "&nu=f90a9a7f040cbb42875004cf79388867&cl=t15&ul=2za\"");
    } catch (err) {
    }
  };

  const _0x48e5ad = async function () {
    const _0x23c29d = _0x8044f7;

    try {
      this.pageTitle = "\"WAITING ROOM|" + this.productName + '|' + this.productName + '\x20(' + this.sku + ')\x22';

      let _0x1245e3 = Date.now();

      let _0x50e96b = _0x1245e3 % 1000;

      await _0xc3b9a2.bind(this)(2);
      await _0x2e7732.bind(this)("s_cc", "true");
      await _0x2e7732.bind(this)("s_pers", "%20s_vnum%3D1622520000" + _0x50e96b + "%2526vn%253D1%7C1622520000" + _0x50e96b + "%3B%20s_invisit%3Dtrue%7C" + (_0x1245e3 + 30 * 60 * 1000) + "%3B");
      await _0x2e7732.bind(this)(this.splashCookie.split('=')[0], this.splashCookie.split('=')[1]);
    } catch (err) {
    }
  };

  const _0x1d6b25 = async function () {
    const _0x381572 = _0x8044f7;

    try {
      this.pageTitle = "\"PRODUCT|" + this.productName + '\x20(' + this.sku + ')\x22';
      await _0xc3b9a2.bind(this)(3);
      await _0x2e7732.bind(this)('RT', "\"z=1&dm=yeezysupply.com&si=" + this.sessionId + "&ss=" + this.ss + "&sl=1&tt=" + this.tt + "&bcn=" + encodeURIComponent(this.beaconURL) + '\x22');
    } catch (err) {
    }
  };

  const _0x3ebbdb = async function () {
    const _0x4839dd = _0x8044f7;

    try {
      await _0x2e7732.bind(this)("persistentBasketCount", '1');
      await _0x2e7732.bind(this)("userBasketCount", '1');
      await _0x2e7732.bind(this)("UserSignUpAndSaveOverlay", '1');
    } catch (err) {
    }
  };

  const _0x565b1b = async function () {
    const _0x112e10 = _0x8044f7;

    try {
      const _0x16bcad = "4|2|0|5|1|3".split('|');

      let _0x1bd2f8 = 0;
      this.currentURL = _0x172aa3.JFlVC;
      this.pageTitle = _0x172aa3.gvaxn;
      await _0x2e7732.bind(this)("restoreBasketUrl", "/on/demandware.store/Sites-ys-US-Site/en_US/Cart-UpdateItems?pid_0=" + this.sku + "&qty_0=1&");
      await _0x2e7732.bind(this)("arp_scroll_position", '0');
      await _0xc3b9a2.bind(this)(18);
      await _0x2e7732.bind(this)('RT', "\"z=1&dm=yeezysupply.com&si=" + this.sessionId + "&ss=" + this.ss + "&sl=5&tt=" + this.tt + "&bcn=" + encodeURIComponent(this.beaconURL) + "&n&ld=a8zx\"");
    } catch (err) {
    }
  };

  const _0x4abdc1 = () => {
    const _0xb1cc7c = _0x8044f7;
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (_0x19d142) {
      const _0x54d71d = _0xb1cc7c;
      var arg_1117 = Math.random();
      var arg_1116 = 16 * arg_1117;

      var _0x575d36 = arg_1116 | 0;

      return ('x' === _0x19d142 ? _0x575d36 : 3 & _0x575d36 | 8).toString(16);
    });
  };

  const _0x1cbf75 = async function () {
    const _0x4959ef = _0x8044f7;

    try {
      let _0x50e0ae = "1.667.0";

      let _0x24165b = await _0x452541.bind(this)("https://c.go-mpulse.net/boomerang/" + this.soastaApiKey, {
        'User-Agent': this.user_agent,
        'Accept': "*/*",
        'Sec-Fetch-Site': "cross-site",
        'Sec-Fetch-Mode': "no-cors",
        'Sec-Fetch-Dest': "script",
        'Referer': this.siteOrigin,
        'Accept-Encoding': "gzip, deflate, br",
        'Accept-Language': "en-US"
      });

      try {
        _0x50e0ae = /BOOMR.version="([a-zA-Z0-9.]+)";/.exec(_0x24165b.body)[1];
      } catch (err) {
        _0x50e0ae = _0x172aa3.uKOMI;
      }

      let _0x5b7890 = await _0x452541.bind(this)("https://c.go-mpulse.net/api/config.json?key=" + this.soastaApiKey + "&d=www.yeezysupply.com&t=" + Math.round(Date.now() / 300000) + "&v=" + _0x50e0ae + "&if=&sl=1&si=" + Math.random().toString(36).replace(/^0\./, '') + '-' + parseInt(Math.round(this.ss / 1000)).toString(36) + "&plugins=delayBeaconSending%2CConfigOverride%2CContinuity%2CPageParams%2CIFrameDelay%2CAutoXHR%2CSPA%2CAngular%2CBackbone%2CEmber%2CHistory%2CRT%2CCrossDomain%2CBW%2CPaintTiming%2CNavigationTiming%2CResourceTiming%2CMemory%2CCACHE_RELOAD%2CErrors%2CTPAnalytics%2CUserTiming%2CAkamai%2CEarly%2CLOGN&acao=", {
        'User-Agent': this.user_agent,
        'Accept': "*/*",
        'Origin': "https://www.yeezysupply.com",
        'Sec-Fetch-Site': "cross-site",
        'Sec-Fetch-Mode': "no-cors",
        'Sec-Fetch-Dest': "empty",
        'Referer': "https://www.yeezysupply.com/",
        'Accept-Encoding': "gzip, deflate, br",
        'Accept-Language': "en-US"
      });

      let _0x4cc131 = JSON.parse(_0x5b7890.body);

      this.sessionId = _0x4cc131.session_id;
      this.beaconURL = _0x4cc131.beacon_url;
    } catch (err) {
      this.beaconURL = _0x172aa3.sSmjg;
    }
  };

  const _0x1c6383 = async function () {
    const _0x557892 = _0x8044f7;

    let _0x221d5e = await this.session.cookies.get({});

    let _0xf66725 = _0x221d5e.find(_0x2b51b2 => _0x2b51b2.value.includes("hmac") && _0x2b51b2.name != this.captchaCookieName + '_u') || this.testCart;

    if (_0xf66725) {
      if (this.modes["Adv-Cap"] && this.running && !this.testCart) {
        _0x30ec40.bind(this)();
      }

      global.taskStatus.yeezysupply.passedQueueNumber++;
    }

    return _0xf66725;
  };

  const _0x3874ac = async function (_0x124b9d, _0x4e622d) {
    const _0x47a107 = _0x8044f7;

    try {
      var arg_1123 = '' + _0x4e622d;
      this.adyenKey = /adyenPublicKey\\":\\"(.*)\\",\\"aci/.exec(arg_1123)[1];
    } catch (err) {
      this.adyenKey = _0x172aa3.jnkBZ;
    }

    try {
      var arg_1127 = _0x4e622d.replace(/\s+/g, '');

      let _0x1a7864 = /setAu','([a-zA-Z0-9/]+)'\]\)/.exec(arg_1127);

      if (_0x1a7864 && _0x1a7864[1]) {
        this.sensorURL = _0x1a7864[1].includes("http") ? _0x1a7864[1] : '' + this.siteOrigin + _0x1a7864[1];
        await _0x452541.bind(this)(this.sensorURL, {
          'sec-ch-ua': this.secUAHeader,
          'sec-ch-ua-mobile': '?0',
          'user-agent': this.user_agent,
          'accept': "*/*",
          'sec-fetch-site': "same-origin",
          'sec-fetch-mode': "no-cors",
          'sec-fetch-dest': "script",
          'referer': _0x124b9d,
          'accept-encoding': "gzip, deflate, br",
          'accept-language': "en-US"
        });
      } else {
        var arg_1128 = _0x4e622d.lastIndexOf("<script");

        let _0xf0a199 = _0x4e622d.substring(arg_1128).replace(/\s+/g, '');

        _0x1a7864 = /src="(.*)"></.exec(_0xf0a199);

        if (_0x1a7864 && _0x1a7864[1]) {
          this.sensorURL = _0x1a7864[1].includes("http") ? _0x1a7864[1] : '' + this.siteOrigin + _0x1a7864[1];
          await _0x452541.bind(this)(this.sensorURL, {
            'sec-ch-ua': this.secUAHeader,
            'sec-ch-ua-mobile': '?0',
            'user-agent': this.user_agent,
            'accept': "*/*",
            'sec-fetch-site': "same-origin",
            'sec-fetch-mode': "no-cors",
            'sec-fetch-dest': "script",
            'referer': _0x124b9d,
            'accept-encoding': "gzip, deflate, br",
            'accept-language': "en-US"
          });
        }
      }
    } catch (err) {
    }

    try {
      let _0x1b9086 = /yeezysupply.com\/akam\/11\/([a-zA-Z0-9]+)"/.exec(_0x4e622d);

      if (_0x1b9086 && _0x1b9086[1]) {
        this.pixelId = _0x1b9086[1];
      } else {
        let _0x1e2c0d = _0x4e622d.match(/src="(.*\/akam\/[\w/]+)"/)[1];

        this.pixelId = _0x1e2c0d.split('/').pop();
      }

      this.pixelURL = "https://www.yeezysupply.com/akam/11/pixel_" + this.pixelId;
      this.bazadebezolkohpepadr = /bazadebezolkohpepadr="(.*)"<\/script>/.exec(_0x4e622d)[1];

      if (!this.shouldUseBrowser && this.pixelURL && this.bazadebezolkohpepadr) {
        await _0x3ef322.bind(this)(_0x124b9d);
      }
    } catch (err) {
    }

    try {
      var arg_1130 = '' + _0x4e622d;
      this.soastaApiKey = /soastaApiKey\\":\\"(.*)\\",\\"orderT/.exec(arg_1130)[1];
    } catch (err) {
      this.soastaApiKey = _0x172aa3.QAiIT;
    }

    var arg_1121 = '[' + new Date().toISOString() + "]: Parse adyenKey: " + this.adyenKey + ", sensor url: " + this.sensorURL + ", pixelURL: " + this.pixelURL + ", bazVal: " + this.bazadebezolkohpepadr;
    console.log(arg_1121);
    var arg_1122 = '[' + new Date().toISOString() + "]: Parse adyenKey: " + this.adyenKey + ", sensor url: " + this.sensorURL + ", pixelURL: " + this.pixelURL + ", bazVal: " + this.bazadebezolkohpepadr;

    _0x2d2bdc(arg_1122, this.logFilePath);
  };

  const {
    session: _0x31b652,
    app: _0x40f6ac
  } = _0x5b1a41;

  const _0x3d9c7c = arg_4 + "/taskLogs";

  class _0x1ed798 {
    constructor(_0x11b882, _0x363752, _0x49916f, _0x5b5da7, _0x10a10b, _0x49dc0c, _0x1124e2, _0x742e26, _0x577804, _0x137c70, _0x56c557, _0x790f58, _0x2a7d08, _0x500863, _0x34cadc, _0xdba7c6, _0x303270, _0x56327a, _0x30b8f0, _0x3dc08b) {
      const _0x228063 = _0x8044f7;
      this.proxyList = _0x3dc08b;
      this.newQueue = ![];
      this.sessionName = "shopify-" + _0x363752 + '-' + _0x11b882 + '-' + _0x2bda7f();
      this.id = _0x11b882;
      this.groupId = _0x363752;
      this.profile = _0x49916f;
      var arg_1132 = parseInt(this.profile.expyear);
      var arg_1131 = arg_1132 % 10000;
      this.profile.expyear = arg_1131 + '';
      this.size = _0x5b5da7;
      this.modes = _0x10a10b;
      this.assignedAccount = _0x49dc0c;
      this.type = _0x1124e2;
      this.siteOrigin = _0x742e26;
      this.host = _0x742e26.replace("https://", '');
      this.proxy = _0x577804;
      this.searchLink = _0x137c70;
      this.searchContent = _0x56c557;
      this.monitorDelay = _0x790f58;
      this.login = _0x2a7d08;
      this.apiKey = _0x500863;
      this.checkoutMethod = _0x34cadc;
      this.needLogin = _0xdba7c6;
      this.sender = _0x303270;
      this.running = ![];
      this.variants = null;
      this.queueToken = null;
      this.preloaded = ![];
      this.currentURL = this.siteOrigin;
      this.checkoutToken = null;
      this.loggedIn = ![];
      this.preloadURL = null;
      this.ready = ![];
      this.checkpointSolving = ![];
      this.preCheckpointDetected = ![];
      this.checkpointSolvedOnce = ![];
      this.checkpointInfo = null;
      this.checkpointInfoPromise = null;
      this.solveCheckpointPromise = null;
      this.startTime = null;
      this.cartFormInfo = null;
      this.westId = null;
      this.started = ![];
      this.note = null;
      this.needCaptcha = ![];
      this.apiKey = null;
      this.checkoutURL = null;
      this.uniqueToken = null;
      this.visitToken = null;
      this.browserReady = ![];
      this.password = ![];
      this.profile.isBillingSameAsShipping = !![];
      this.needResubmitShippingRate = ![];
      this.successWebhook = _0x172aa3.soisf;
      this.declineWebhook = _0x172aa3.jdUZa;
      this.browser = null;
      this.page = null;
      this.siteName = _0x30b8f0;
      this.preloadReady = ![];
      this.userAgent = (this.modes[_0x8c3d4a.SHOPIFY.SAFE] || this.modes[_0x8c3d4a.SHOPIFY.LAUNCH]) && !this.modes[_0x8c3d4a.SHOPIFY.BROWSER] ? _0x5b1a41.app.userAgentFallback : _0x2b33c7.SHOPIFY;
      this.checkoutInfo = {
        'version': _0x40f6ac.getVersion(),
        'discordId': global.user.userId,
        'key': global.user.key,
        'siteType': this.type,
        'siteName': _0x30b8f0,
        'siteURL': this.searchContent,
        'store': this.siteOrigin,
        'checkoutSpeed': 0,
        'productName': "N/A",
        'size': null,
        'price': '0',
        'profileName': this.profile.name,
        'proxyIp': this.proxy,
        'mode': Object.keys(this.modes).filter(_0x4d79ec => this.modes[_0x4d79ec]).join('-'),
        'imageURL': null,
        'paymentStatus': null,
        'sku': null,
        'date': new Date().toISOString(),
        'timestamp': Date.now(),
        'email': this.profile.email,
        'orderNumber': "N/A",
        'pickupTime': null
      };

      if (!this.modes[_0x8c3d4a.SHOPIFY.LAUNCH] && !this.modes[_0x8c3d4a.SHOPIFY.SAFE] && !this.modes[_0x8c3d4a.SHOPIFY.BROWSER]) {
        this.checkoutInfo.mode = "Fast-" + this.checkoutInfo.mode;
      }

      this.startTime = Date.now();
      this.price = null;
      this.logFilePath = _0x3d9c7c + '/' + _0x56327a + '/' + this.profile.name + '_' + this.id;

      if (_0x49916f.rate && _0x49916f.rate[_0x30b8f0] && this.modes[_0x8c3d4a.SHOPIFY.SHIPPING_RATE]) {
        this.preDefinedShippingRate = _0x49916f.rate[_0x30b8f0].rate.split('\x20').join("%20");
      }

      this.safeRestockMode = this.modes[_0x8c3d4a.SHOPIFY.LAUNCH] && (this.siteOrigin.includes("shoepalace") || this.siteOrigin.includes("shopnicekicks"));
      this.canSafeRestock = this.siteOrigin.includes("kith") || this.siteOrigin.includes("undefeated") || this.siteOrigin.includes("shopnicekicks") || this.siteOrigin.includes("shoepalace");
      this.preloadShippingRate = null;
      this.checkoutForm = null;
      this.shippingForm = null;
      this.hasTax = ![];
      this.finalPrice = null;
      this.safeRestockPreload = ![];
      this.useFastPreload = this.modes[_0x8c3d4a.SHOPIFY.PRELOAD] && Math.random() > 0.65;

      if (this.useFastPreload) {
        this.checkoutInfo.mode += _0x172aa3.UmHQI;
      }

      this.useWalletAPI = ![];
      this.safeRestockMap = {
        'https://kith.com': {
          'apiKey': "08430b96c47dd2ac8e17e305db3b71e8",
          'shippingRate': "shopify-UPS%20GROUND%20(5-7%20business%20days)-10.00"
        },
        'https://undefeated.com': {
          'apiKey': "a0faf54ad7ec6fbbab86cd3f949c3cb9",
          'shippingRate': "shopify-UPS%20Ground-12.00"
        },
        'https://shopnicekicks.com': {
          'apiKey': "9d6556dc3ee20bf6b1a0971ad22f8238",
          'shippingRate': "shopify-UPS%2520Ground-24.95"
        },
        'https://www.shoepalace.com': {
          'apiKey': "8417f5cbfcb3e9747114208dcd8805ce",
          'shippingRate': "shopify-Flat%20Rate-1000.00"
        }
      };
      var arg_1133 = "is restock mode: " + this.safeRestockMode;
      console.log(arg_1133);
    }

    async initSession(_0x2dbee1) {
      const _0x1de329 = _0x8044f7;

      try {
        var arg_1135 = '[' + new Date().toISOString() + "]: init session, special mode: " + this.useFastPreload;

        _0x2d2bdc(arg_1135, this.logFilePath);

        _0x2dbee1 = _0x2dbee1 && _0x2dbee1.replace("http://", '');

        if (_0x2dbee1 && _0x2dbee1.includes('@')) {
          _0x2dbee1 = _0x2dbee1.split('@')[1] + ':' + _0x2dbee1.split('@')[0];
        }

        var arg_1136 = '' + this.sessionName;
        this.session = _0x31b652.fromPartition(arg_1136);
        await _0x354f98.bind(this)();
        let _0x14fe6c = null;

        if (_0x2dbee1) {
          _0x14fe6c = _0x2dbee1.split(':')[0] + ':' + _0x2dbee1.split(':')[1];
        } else {
          _0x14fe6c = '';
        }

        this.proxyHost = _0x14fe6c;
        this.proxyUsername = _0x2dbee1 && _0x2dbee1.split(':')[2] ? _0x2dbee1.split(':')[2] : '';
        this.proxyPassword = _0x2dbee1 && _0x2dbee1.split(':')[3] ? _0x2dbee1.split(':')[3] : '';
        console.log("init session");
        await this.session.setProxy({
          'proxyRules': _0x14fe6c
        });

        var arg_1137 = '[' + new Date().toISOString() + "]: proxy used: " + _0x14fe6c;

        _0x2d2bdc(arg_1137, this.logFilePath);
      } catch (err) {
        const _0x1a2ebd = "1|4|0|2|3".split('|');

        let _0x52139c = 0;
        console.log(err);

        _0x5a14e3(arg_1138);

        var arg_1139 = '[' + new Date().toISOString() + "]: init session failed " + err;

        _0x2d2bdc(arg_1139, this.logFilePath);

        this.running = ![];
        return;
      }
    }

    async variantFound(_0x379c17) {
      const _0x8cea1a = _0x8044f7;
      console.log("variant found");
      var arg_1140 = '[' + new Date().toISOString() + "]: variant found called";

      _0x2d2bdc(arg_1140, this.logFilePath);

      var arg_1141 = '[' + new Date().toISOString() + "]: cartFormInfo: " + JSON.stringify(_0x379c17.cartFormInfo);

      _0x2d2bdc(arg_1141, this.logFilePath);

      console.log(_0x379c17.cartFormInfo);

      let _0x3943fb = this.password || this.siteOrigin.includes("eflash.doverstreetmarket.com") || this.siteOrigin.includes("eflash-us.doverstreetmarket.com") || this.siteOrigin.includes("thepremierstore") || this.siteOrigin.includes("kawsone") || this.modes[_0x8c3d4a.SHOPIFY.BROWSER];

      if (this.running && !this.started && !_0x3943fb) {
        const _0xd9788b = "8|9|4|1|5|10|6|7|3|2|11|0".split('|');

        let _0x1ab46c = 0;

        _0x5a14e3(arg_1142);

        this.started = !![];
        this.checkoutInfo.pickupTime = new Date().toLocaleString();
        this.checkoutInfo.imageURL = _0x379c17.imgLink;
        this.checkoutInfo.productName = _0x379c17.productName;
        this.variants = _0x379c17.variants;
        this.cartFormInfo = _0x379c17.cartFormInfo.properties;
        this.productLink = _0x379c17.handle.includes("http") ? _0x379c17.handle : this.siteOrigin + "/products/" + _0x379c17.handle;
        this.currentURL = this.productLink;
        this.checkoutInfo.siteURL = this.productLink;
        this.loggedIn = this.loggedIn || (await this.loginAccount());
        this.startCheckoutProcess(this.variants);
      }
    }

    async productFound(_0x52df08) {
      const _0x5099a4 = _0x8044f7;
      console.log("product found");
      var arg_1143 = '[' + new Date().toISOString() + "]: product found called";

      _0x2d2bdc(arg_1143, this.logFilePath);

      var arg_1144 = '[' + new Date().toISOString() + "]: cartFormInfo: " + JSON.stringify(_0x52df08.cartFormInfo);

      _0x2d2bdc(arg_1144, this.logFilePath);

      console.log("running: ", this.running);
      console.log("started: ", this.started);
      console.log(_0x52df08.cartFormInfo);

      while (this.running && !this.ready) {
        await _0x45a98b(50);
      }

      if (this.running && !this.started) {
        const _0x226e3d = "8|2|6|9|0|5|10|1|3|4|11|7".split('|');

        let _0x4122b5 = 0;

        _0x5a14e3(arg_1145);

        this.started = !![];
        this.checkoutInfo.pickupTime = this.checkoutInfo.pickupTime ? this.checkoutInfo.pickupTime : new Date().toLocaleString();
        this.checkoutInfo.imageURL = _0x52df08.imgLink;
        this.checkoutInfo.productName = _0x52df08.productName;
        this.variants = _0x52df08.variants;
        this.cartFormInfo = _0x52df08.cartFormInfo.properties;
        this.productLink = _0x52df08.handle.includes("http") ? _0x52df08.handle : this.siteOrigin + "/products/" + _0x52df08.handle;
        this.currentURL = this.productLink;
        this.checkoutInfo.siteURL = this.productLink;
        this.loggedIn = this.loggedIn || (await this.loginAccount());
        this.startCheckoutProcess(this.variants);
      }
    }

    async waitQuestions() {
      const _0x1f46d7 = _0x8044f7;
      await this.waitReady();

      _0x5a14e3(arg_1146);
    }

    async checkpointFound() {
      const _0x1a9af4 = _0x8044f7;

      if (this.siteOrigin.includes("sneakertrees") || this.siteOrigin.includes("shoepalace") && !this.safeRestockMode) {
        return;
      }

      this.preCheckpointDetected = !![];
      var arg_1147 = '[' + new Date().toISOString() + "]: preCheckpoint called";

      _0x2d2bdc(arg_1147, this.logFilePath);

      console.log("preCheckpoint called");

      if (!this.safeRestockMode && !this.modes[_0x8c3d4a.SHOPIFY.SAFE] && !this.modes[_0x8c3d4a.SHOPIFY.BROWSER]) {
        var arg_1150 = '[' + new Date().toISOString() + "]: Checkpoint detected, Stop Task";

        _0x2d2bdc(arg_1150, this.logFilePath);

        _0x5a14e3(arg_1151);

        this.running = ![];
        return;
      }

      while (!this.safeRestockMode && this.running && !this.ready || this.safeRestockMode && !this.safeRestockPreload) {
        await _0x45a98b(50);
      }

      if (this.running && !this.currentURL.includes("stock_problems") && !this.password && !this.checkpointSolving && !this.solveCheckpointPromise && !this.checkpointSolvedOnce) {
        let _0x1f02d0 = this.siteOrigin + "/checkpoint";

        this.solveCheckpointPromise = this.solveCheckpointCaptcha(_0x1f02d0, !![]);
      }
    }

    async runTask(_0x2f2abf = null) {
      const _0x4e8d6d = _0x8044f7;

      if (this.running) {
        return;
      }

      global.taskStatus.shopify.runningNumber++;
      this.running = !![];
      this.profile.isBillingSameAsShipping = _0x1df7bc(this.profile.key);
      var arg_1152 = '[' + new Date().toISOString() + "]: is task running: " + this.running + " task " + this.id + " started...";

      _0x2d2bdc(arg_1152, this.logFilePath);

      var arg_1153 = '[' + new Date().toISOString() + "]: mode: " + this.checkoutInfo.mode + ", size: " + JSON.stringify(this.size);

      _0x2d2bdc(arg_1153, this.logFilePath);

      var arg_1154 = "mode: " + this.checkoutInfo.mode + ", size: " + JSON.stringify(this.size);
      console.log(arg_1154);

      _0x5a14e3(arg_1155);

      await this.initSession(this.proxy);
      console.log("done init session");

      let _0x3ef4b9 = await _0x2f7ea1.bind(this)(this.siteOrigin + "/checkpoint");

      if (_0x3ef4b9.request.uri.href.includes("password")) {
        this.password = !![];
      }

      if (!this.running) {
        return;
      }

      if (!this.modes[_0x8c3d4a.SHOPIFY.SAFE] && !this.modes[_0x8c3d4a.SHOPIFY.BROWSER]) {
        await _0x2e779e.bind(this)();
        this.uniqueToken = _0x28d3a4();
        this.visitToken = _0x28d3a4();
      }

      if (this.modes[_0x8c3d4a.SHOPIFY.BROWSER]) {
        await _0xfe855b.bind(this)();
      }

      if (!this.password) {
        this.loggedIn = await this.loginAccount();
      }

      if (!this.running) {
        return;
      }

      if (this.modes[_0x8c3d4a.SHOPIFY.PRELOAD] && !this.safeRestockMode) {
        await this.preload();
      }

      this.preloadReady = !![];
      console.log("finished init");
      this.ready = !![];

      _0x5a14e3(arg_1156);

      if (_0x2f2abf != null && this.running && !this.started) {
        const _0x55e241 = "5|6|9|0|8|1|2|7|3|4".split('|');

        let _0x2d6926 = 0;
        this.started = !![];
        this.checkoutInfo.imageURL = _0x2f2abf.imgLink;
        this.checkoutInfo.productName = _0x2f2abf.productName;
        this.variants = _0x2f2abf.variants;
        this.cartFormInfo = _0x2f2abf.cartFormInfo.properties;
        this.productLink = _0x2f2abf.handle.includes("http") ? _0x2f2abf.handle : this.siteOrigin + "/products/" + _0x2f2abf.handle;
        this.currentURL = this.productLink;
        this.checkoutInfo.siteURL = this.productLink;
        await _0x54ff9c.bind(this)();
        this.startCheckoutProcess();
      }
    }

    async stopTask() {
      const _0x3d65b8 = _0x8044f7;
      var arg_1159 = '[' + new Date().toISOString() + "]: stopping task";

      _0x2d2bdc(arg_1159, this.logFilePath);

      if (this.needCaptcha) {
        _0x233257.bind(this)();
      }

      global.taskStatus.shopify.runningNumber--;
      this.needResubmitShippingRate = ![];
      this.newQueue = ![];
      this.preloadReady = ![];
      this.running = ![];
      this.queueToken = null;
      this.preloaded = ![];
      this.password = ![];
      this.checkpointSolvedOnce = ![];

      _0x5a14e3(arg_1160);

      this.rp = null;
      this.variants = null;
      this.currentURL = this.siteOrigin;
      this.checkoutToken = null;
      this.loggedIn = ![];
      this.preloadURL = null;
      this.ready = ![];
      this.browserReady = ![];
      this.checkpointSolving = ![];
      this.preCheckpointDetected = ![];
      this.checkpointInfo = null;
      this.checkoutURL = null;
      this.startTime = null;
      this.cartFormInfo = null;
      this.westId = null;
      this.started = ![];
      this.note = null;
      this.apiKey = null;
      this.checkoutURL = null;
      this.uniqueToken = null;
      this.visitToken = null;
      this.solveCheckpointPromise = null;
      this.needCaptcha = ![];
      this.cartSig = null;
      this.checkoutForm = null;
      this.shippingForm = null;
      this.hasTax = ![];
      this.finalPrice = null;
      this.safeRestockPreload = ![];
      this.preloadShippingRate = null;
      await _0x354f98.bind(this)();

      try {
        if (this.browser != null) {
          this.browser.close();
        }
      } catch (err) {
      }

      await _0x45a98b(3000);

      _0x5a14e3(arg_1161);
    }

    async startCheckoutProcess() {
      const _0x77d6de = _0x8044f7;
      await this.waitReady();

      if (this.safeRestockMode) {
        await this.startSafeRestockMode();
      } else {
        if (this.modes[_0x8c3d4a.SHOPIFY.SAFE] || this.modes[_0x8c3d4a.SHOPIFY.BROWSER]) {
          await this.startSafeModeCheckout();
        } else {
          await this.startAPICheckout();
        }
      }
    }

    async submitRestockCheckout() {
      const _0x5a3351 = _0x8044f7;
      this.currentURL = this.checkoutURL;

      if (this.shippingForm) {
        await _0x23eece.bind(this)(this.shippingForm);
      }

      let _0x4d56af = await _0x5c1f79.bind(this)();

      this.finalPrice = _0x4d56af.checkout.payment_due * 100;

      if (this.hasTax) {
        while (_0x4d56af.checkout.tax_lines.length == 0) {
          await _0x45a98b(1000);
          _0x4d56af = await _0x5c1f79.bind(this)();
        }

        this.finalPrice = _0x4d56af.checkout.payment_due * 100;
      }

      this.checkoutForm["checkout[total_price]"] = '' + this.finalPrice;

      let _0x10247a = await _0x1ba773.bind(this)(!![]);

      if (_0x10247a == "checkpoint") {
        return _0x10247a;
      } else {
        if (this.checkoutInfo.productName == "N/A" || this.checkoutInfo.price == '0' || _0x4d56af.checkout.line_items[0].title.trim() != this.checkoutInfo.productName.trim()) {
          _0x5a14e3(arg_1166);

          var arg_1167 = '[' + new Date().toISOString() + "]: Wrong Item detected, stop task";

          _0x2d2bdc(arg_1167, this.logFilePath);

          this.running = ![];
          return;
        } else {
          if (_0x10247a.body && _0x10247a.body.includes("technical reasons")) {
            return _0x10247a;
          }
        }
      }

      return _0x1ba773.bind(this)();
    }

    async startSafeRestockMode() {
      const _0x5c12f6 = _0x8044f7;

      let _0x194b70 = await _0x1af34a.bind(this)(!![]);

      if (_0x194b70 == null) {
        return;
      }

      let _0x3944d7 = await _0x4e8b79.bind(this)();

      await this.handleSafeRestockURL(_0x3944d7, !![]);
      this.safeRestockPreload = !![];

      _0x5a14e3(arg_1168);

      while (this.running && !this.solveCheckpointPromise && !this.checkpointSolvedOnce) {
        await _0x45a98b(1000);
      }

      if (!this.running) {
        return;
      }

      this.checkpointSolvedOnce = !![];
      await this.solveCheckpointPromise;
      this.solveCheckpointPromise = null;

      let _0x16e315 = await _0x2f7ea1.bind(this)(this.checkoutURL);

      await this.handleSafeRestockURL(_0x16e315);

      let _0x45a2f2 = await this.submitRestockCheckout();

      if (_0x45a2f2 == "checkpoint") {
        return await this.initSession(this.proxy), this.startCheckoutProcess(this.variants);
      }

      if (!this.running) {
        return;
      }

      return this.handleProcessing(_0x45a2f2);
    }

    async startAPICheckout() {
      const _0x2a51e8 = _0x8044f7;

      if (this.preloadURL) {
        this.checkoutURL = this.preloadURL;
      } else {
        await _0x8d02da.bind(this)();
      }

      let _0x2d6ab2 = await _0x1af34a.bind(this)();

      if (_0x2d6ab2 == null) {
        return;
      }

      let _0x408d08 = await _0x2f7ea1.bind(this)(this.checkoutURL, !![]);

      let _0x9197b6;

      let _0x4640de;

      try {
        const _0x1ae7fa = _0x3066df.load(_0x408d08.body, arg_1170);

        _0x9197b6 = _0x1ae7fa("input[name=authenticity_token]").attr("value");
      } catch (err) {
      }

      await _0x5e2c3a.bind(this)();

      let _0x4a7411 = await _0x5a7177.bind(this)();

      await _0x5e2c3a.bind(this)(_0x4a7411);

      let _0x178961 = await _0x49a4b7.bind(this)(_0x9197b6);

      try {
        const _0x32afa0 = _0x3066df.load(_0x178961.body, arg_1190);

        _0x9197b6 = _0x32afa0("input[name=authenticity_token]").attr("value");
        _0x4640de = _0x32afa0("[data-checkout-payment-due-target]").attr("data-checkout-payment-due-target");
      } catch (err) {
      }

      let _0x304f92 = await _0x13685d.bind(this)(_0x4640de, _0x9197b6);

      if (_0x304f92 == "resetAPI") {
        const _0x49a9c6 = "0|4|2|3|1".split('|');

        let _0x3a00f5 = 0;
        this.preloadURL = null;
        this.queueToken = null;
        this.sessionName = "shopify-" + groupId + '-' + id + '-' + _0x2bda7f();
        await this.initSession(this.proxy);
        return this.startAPICheckout();
      }

      if (_0x304f92.request.uri.href.includes("process")) {
        return this.handleProcessing(_0x304f92);
      }

      return this.handleCheckoutURL(_0x304f92);
    }

    async startSafeModeCheckout() {
      const _0xd732ca = _0x8044f7;

      if (this.siteOrigin.includes("sneakertrees") && this.modes[_0x8c3d4a.SHOPIFY.BROWSER]) {
        return _0x17c747.bind(this)();
      }

      await this.addTocart(![]);
    }

    async preload() {
      const _0x57f42d = _0x8044f7;
      this.preloadURL = null;

      _0x5a14e3(arg_1192);

      let _0x3921d6 = null;

      if (!this.password && !this.modes[_0x8c3d4a.SHOPIFY.LAUNCH] && !this.modes[_0x8c3d4a.SHOPIFY.SAFE] && !this.modes[_0x8c3d4a.SHOPIFY.BROWSER]) {
        await _0x8d02da.bind(this)(!![]);
      } else {
        const _0x429d85 = "1|2|3|4|5|0".split('|');

        let _0x5b556b = 0;
        _0x3921d6 = await this.addTocart(!![]);
        this.preloadURL = _0x3921d6.request.uri.href.split('?')[0];
        await _0x35026a.bind(this)();

        if (!this.preloadURL.includes("checkout")) {
          return _0x5a14e3({
            'id': this.id,
            'status': "Preload Failed, Retrying",
            'statusCode': 4,
            'groupId': this.groupId
          }), await _0x45a98b(this.monitorDelay), this.preloadURL = null, this.preload();
        }

        this.checkoutURL = this.preloadURL;
        console.log("preload url: ", this.preloadURL);
      }

      var arg_1193 = '[' + new Date().toISOString() + "]: preload url: " + this.preloadURL;

      _0x2d2bdc(arg_1193, this.logFilePath);

      return;
    }

    async waitReady() {
      const _0x58dde0 = _0x8044f7;

      while (this.running && (this.needLogin && !this.loggedIn || !this.ready || !this.preloadReady)) {
        await _0x45a98b(100);
      }

      return;
    }

    async loginAccount() {
      const _0x1bd443 = _0x8044f7;

      if (!this.needLogin) {
        return;
      }

      if (!this.running) {
        _0x5a14e3(arg_1195);

        throw "stopped";
      }

      if (this.assignedAccount == null || this.assignedAccount == '') {
        _0x5a14e3(arg_1196);

        throw "stopped";
      }

      let _0x5c8414 = await _0x17caf3.bind(this)();

      if (!this.running) {
        return;
      }

      if (this.running && _0x5c8414.request.uri.href.includes("challenge")) {
        _0x5c8414 = await _0x23d927.bind(this)(_0x5c8414);
      }

      return this.handleCheckoutURL(_0x5c8414);
    }

    async addTocart(_0x2338b3 = ![]) {
      const _0x2be3e6 = _0x8044f7;

      if (this.useWalletAPI) {
        await _0x2e779e.bind(this)();
        this.uniqueToken = _0x28d3a4();
        this.visitToken = _0x28d3a4();
        await _0xe2f2a2.bind(this)();
      } else {
        let _0x2923ec = await _0x1af34a.bind(this)(_0x2338b3);

        if (_0x2923ec == null) {
          return;
        }

        if (this.siteOrigin.includes("palaceskateboards")) {
          let _0x32624b = await _0x2f7ea1.bind(this)(this.siteOrigin + "/cart");

          let _0x263d85 = _0x3066df.load(_0x32624b.body, arg_1198);

          this.note = _0x263d85("[name='note']").val();
        } else {
          if (this.siteOrigin.includes("culturekings") || this.siteOrigin.includes("jimmyjazz")) {
            let _0x565770 = await _0x2f7ea1.bind(this)(this.siteOrigin + "/cart.js");

            let _0x3badee = JSON.parse(_0x565770.body);

            if ('' && ''.length == 0) {
              return _0x5a14e3({
                'id': this.id,
                'status': "Waiting For Launch, Retry",
                'statusCode': 1,
                'groupId': this.groupId
              }), await _0x45a98b(this.monitorDelay), this.addTocart(![]);
            }
          }
        }
      }

      if (this.solveCheckpointPromise) {
        _0x5a14e3(arg_1203);

        this.checkpointSolvedOnce = !![];
        await this.solveCheckpointPromise;
        this.solveCheckpointPromise = null;
      }

      let _0x1c218b;

      if (this.modes[_0x8c3d4a.SHOPIFY.PRELOAD] && this.preloadURL != null && !this.siteOrigin.includes("palaceskateboards")) {
        _0x1c218b = await _0x2f7ea1.bind(this)(this.preloadURL);
      } else {
        if (this.useWalletAPI) {
          _0x1c218b = await _0x2f7ea1.bind(this)(this.checkoutURL);
        } else {
          _0x1c218b = await _0x4e8b79.bind(this)();
        }
      }

      return this.handleCheckoutURL(_0x1c218b, _0x2338b3);
    }

    async solveCheckpointCaptcha(_0x598eb2, _0x381eb8, _0xe46ce3 = null) {
      const _0x1b53c2 = _0x8044f7;
      this.checkpointSolving = !![];

      let _0x538ad0;

      if (this.modes[_0x8c3d4a.SHOPIFY.BROWSER]) {
        _0x5a14e3(arg_1205);

        _0x538ad0 = await _0x3d69d2.bind(this)(_0x598eb2, _0x381eb8);
      } else {
        if (!_0xe46ce3) {
          let _0x54f133 = await _0x2f7ea1.bind(this)(_0x598eb2, !![]);

          _0xe46ce3 = _0x54f133.body;
        }

        var arg_1207 = _0xe46ce3.substring(_0x2d770f, _0x45d933);

        let _0x2d770f = _0xe46ce3.indexOf("<form action=\"/checkpoint\"");

        let _0x45d933 = _0xe46ce3.indexOf("</form>", _0x2d770f);

        let _0x4f0291 = arg_1207 + "</form>";

        let _0x29de28 = await this.session.cookies.get({
          'url': this.siteOrigin
        });

        let _0x2ac588 = _0x29de28.map(_0xf0b06b => {
          const _0x54051e = _0x1b53c2;
          return _0x1f02b8;
        });

        console.log(_0x2ac588);

        _0x5a14e3(arg_1208);

        _0x538ad0 = await _0x153674.bind(this)(_0x598eb2, _0x4802da.SHOPIFY_CHECKPOINT, _0x4f0291, '', _0x2ac588, _0x381eb8);

        if (!this.running) {
          return;
        }
      }

      return _0x2d2bdc('[' + new Date().toISOString() + "]: solved checkpoint info " + JSON.stringify(_0x538ad0), this.logFilePath), this.checkpointSolving = ![], _0x383d53.bind(this)({
        'authToken': _0x538ad0.authToken,
        'formBody': _0x538ad0.formBody
      }, _0x598eb2, {
        'captchaToken': _0x538ad0.checkpointToken,
        'ts': Date.now()
      });
    }

    async startSafeRestockMode2() {
      const _0x14bf02 = _0x8044f7;
      this.apiKey = this.safeRestockMap[this.siteOrigin].apiKey;
      let _0x363f58 = this.safeRestockMap[this.siteOrigin].shippingRate;
      await _0x35026a.bind(this)(![]);

      let _0x5d99e8 = await _0x1af34a.bind(this)(!![], ![]);

      if (_0x5d99e8 == null || !this.running) {
        return;
      }

      let _0x5b2a2a = await _0x2f7ea1.bind(this)('' + this.checkoutURL, ![]);

      await this.handleSafeRestockURL(_0x5b2a2a);

      if (this.shippingForm) {
        this.shippingForm = this.shippingForm.replace(this.preloadShippingRate, _0x363f58);
      }

      let _0x32357d = await this.submitRestockCheckout();

      if (!this.running) {
        return;
      }

      return this.handleProcessing(_0x32357d);
    }

    async handleCheckoutURL(_0x5769dc, _0x274820 = ![]) {
      const _0x2c653d = _0x8044f7;

      if (!this.running || _0x5769dc == null) {
        _0x5a14e3(arg_1211);

        throw "stopped";
      }

      let _0x52249b = _0x5769dc;
      let _0x2214f9 = _0x52249b.request.uri.href;
      console.log("handle: ", _0x2214f9);

      if (!_0x274820) {
        var arg_1212 = '[' + new Date().toISOString() + "]: handle checkout url " + _0x2214f9;

        _0x2d2bdc(arg_1212, this.logFilePath);
      }

      this.currentURL = _0x2214f9;

      if (_0x2214f9.includes("login")) {
        _0x52249b = await this.loginAccount();
      } else {
        if (_0x2214f9.includes("throttle")) {
          await _0x4c9ecb.bind(this)(_0x2214f9, _0x52249b);
          _0x52249b = await _0x2f7ea1.bind(this)(this.siteOrigin + "/checkout");

          if (!this.useFastPreload && _0x274820 && this.modes[_0x8c3d4a.SHOPIFY.PRELOAD] && !_0x52249b.request.uri.href.includes("throttle") && !_0x52249b.request.uri.href.includes("checkpoint")) {
            return _0x52249b;
          }
        } else {
          if (_0x2214f9.includes("stock_problems")) {
            this.checkoutURL = _0x2214f9.split("/stock_problems")[0];

            _0x5a14e3(arg_1213);

            if (this.canSafeRestock) {
              return this.startSafeRestockMode2();
            }

            await _0x45a98b(this.monitorDelay);
            _0x52249b = await _0x2f7ea1.bind(this)('' + _0x2214f9.split("/stock_problems")[0], ![]);
          } else {
            if (_0x2214f9.includes("checkpoint")) {
              if (!this.modes[_0x8c3d4a.SHOPIFY.SAFE] && !this.modes[_0x8c3d4a.SHOPIFY.BROWSER]) {
                var arg_1219 = '[' + new Date().toISOString() + "]: Checkpoint detected, Stop Task";

                _0x2d2bdc(arg_1219, this.logFilePath);

                _0x5a14e3(arg_1220);

                this.running = ![];
                return;
              }

              _0x5a14e3(arg_1217);

              this.checkpointSolvedOnce = !![];

              if (!this.solveCheckpointPromise) {
                this.solveCheckpointPromise = this.solveCheckpointCaptcha(_0x2214f9, ![], _0x52249b.body);
              }

              _0x52249b = await this.solveCheckpointPromise;
              this.solveCheckpointPromise = null;

              if (this.checkoutURL) {
                _0x52249b = await _0x2f7ea1.bind(this)(this.checkoutURL);
              } else {
                _0x52249b = await _0x2f7ea1.bind(this)(this.siteOrigin + "/checkout");
              }

              var arg_1218 = '[' + new Date().toISOString() + "]: solve checkpoint result url: " + _0x52249b.request.uri.href;

              _0x2d2bdc(arg_1218, this.logFilePath);

              if (_0x52249b.body.includes("captcha validation failed")) {
                _0x5a14e3(arg_1221);
              }
            } else {
              if (_0x2214f9.includes("cart")) {
                if (_0x52249b.body.includes("Your cart is currently empty")) {
                  return _0x5a14e3({
                    'id': this.id,
                    'status': "Empty Cart, Retrying",
                    'statusCode': 1,
                    'groupId': this.groupId
                  }), this.startCheckoutProcess(this.variants);
                } else {
                  if (this.checkoutURL) {
                    _0x52249b = await _0x2f7ea1.bind(this)(this.checkoutURL);
                  } else {
                    _0x52249b = await _0x2f7ea1.bind(this)(this.siteOrigin + "/checkout");

                    if (_0x52249b.request.uri.href.includes("cart")) {
                      _0x5a14e3(arg_1223);

                      this.running = ![];
                      return;
                    }
                  }
                }
              } else {
                if (_0x2214f9.includes("checkout")) {
                  if (this.useFastPreload && _0x274820) {
                    _0x5a14e3(arg_1224);
                  }

                  if (!this.useFastPreload && _0x274820 && this.modes[_0x8c3d4a.SHOPIFY.PRELOAD]) {
                    return _0x52249b;
                  }

                  if (this.modes[_0x8c3d4a.SHOPIFY.PRELOAD] && this.preloadURL && !_0x2214f9.includes(this.preloadURL.split('?')[0])) {
                    _0x52249b = await _0x2f7ea1.bind(this)(this.preloadURL);
                  } else {
                    if (_0x52249b.body.includes("Shopify.Checkout.step = \"contact_information\"")) {
                      if (!_0x274820 && this.modes[_0x8c3d4a.SHOPIFY.PRELOAD] && !_0x52249b.body.includes('\x22' + '0' + '\x22')) {
                        _0x5a14e3(arg_1226);

                        var arg_1227 = '[' + new Date().toISOString() + "]: price error";

                        _0x2d2bdc(arg_1227, this.logFilePath);

                        this.running = ![];
                        return;
                      }

                      this.checkoutURL = _0x2214f9;
                      _0x52249b = await _0x31890c.bind(this)(_0x52249b.body, _0x2214f9, {}, _0x274820);

                      if (_0x52249b.body.includes("Error - Information")) {
                        _0x5a14e3(arg_1228);

                        var arg_1229 = '[' + new Date().toISOString() + "]: Invalid Shipping";

                        _0x2d2bdc(arg_1229, this.logFilePath);

                        this.running = ![];
                        return;
                      }
                    } else {
                      if (_0x52249b.body.includes("Shopify.Checkout.step = \"shipping_method\"")) {
                        let _0x409a13 = await _0x4cf152.bind(this)(_0x52249b, _0x274820);

                        if (_0x409a13.oos || !_0x409a13.form) {
                          _0x52249b = _0x409a13.result;
                        } else {
                          _0x52249b = await _0x23eece.bind(this)(_0x409a13.form, _0x274820);
                        }
                      } else {
                        if (_0x52249b.body.includes("Shopify.Checkout.step = \"payment_method\"")) {
                          if (!_0x274820 && (this.checkoutInfo.productName == "N/A" || this.checkoutInfo.price == '0' || !_0x52249b.body.includes(this.checkoutInfo.sku))) {
                            _0x5a14e3(arg_1232);

                            var arg_1233 = '[' + new Date().toISOString() + "]: Wrong Item detected, stop task";

                            _0x2d2bdc(arg_1233, this.logFilePath);

                            this.running = ![];
                            return;
                          }

                          if (_0x52249b.body.includes("Check your card details")) {
                            _0x5a14e3(arg_1236);

                            var arg_1237 = '[' + new Date().toISOString() + "]: Card Info Error!";

                            _0x2d2bdc(arg_1237, this.logFilePath);

                            this.running = ![];
                            return;
                          }

                          let _0x156a55 = null;

                          try {
                            const _0x1ebbf7 = _0x3066df.load(_0x52249b.body, arg_1238);

                            let _0x1da51e = _0x1ebbf7(".main").find(".radio-wrapper").attr("data-select-gateway") || _0x1ebbf7(".radio-wrapper").attr("data-select-gateway");

                            if (_0x1da51e != null) {
                              let _0x1e5e92 = _0x1ebbf7("[data-checkout-total-taxes-target]").attr("data-checkout-total-taxes-target");

                              var arg_1239 = parseInt(_0x1e5e92);
                              this.hasTax = arg_1239 != 0;
                              _0x156a55 = _0x52249b;
                            }
                          } catch (err) {
                            console.log(err);
                          }

                          if (!_0x156a55) {
                            _0x52249b = await _0x3016c6.bind(this)(_0x2214f9, _0x274820);
                          }

                          if (_0x52249b.request.uri.href.includes("stock_problems")) {
                            return this.handleCheckoutURL(_0x52249b, _0x274820);
                          }

                          if (_0x274820) {
                            return _0x52249b;
                          }

                          let _0x22fd64 = await _0x190c9d.bind(this)(_0x52249b.body, _0x52249b.request.uri.href);

                          if (!_0x22fd64) {
                            return this.handleCheckoutURL(_0x52249b, _0x274820);
                          }

                          return this.handleProcessing(_0x22fd64);
                        } else {
                          if (_0x52249b.body.includes("Shopify.Checkout.step = \"review\"")) {
                            var arg_1241 = '[' + new Date().toISOString() + "]: review page loaded";

                            _0x2d2bdc(arg_1241, this.logFilePath);

                            if (_0x2214f9.includes("step=review")) {
                              let _0x5ceb68 = await _0x190c9d.bind(this)(_0x52249b.body, _0x52249b.request.uri.href);

                              if (!_0x5ceb68) {
                                return _0x52249b = await _0x2f7ea1.bind(this)(_0x2214f9), this.handleCheckoutURL(_0x52249b, _0x274820);
                              }

                              return this.handleProcessing(_0x5ceb68);
                            } else {
                              _0x52249b = await _0x2f7ea1.bind(this)(_0x2214f9);
                            }
                          } else {
                            if (this.modes[_0x8c3d4a.SHOPIFY.PRELOAD] && this.preloadURL != null) {
                              if (_0x2214f9 == this.preloadURL) {
                                _0x52249b = await _0x2f7ea1.bind(this)(this.siteOrigin + "/checkout");
                              } else {
                                _0x52249b = await _0x2f7ea1.bind(this)(this.preloadURL);
                              }
                            } else {
                              return _0x52249b;
                            }
                          }
                        }
                      }
                    }
                  }
                } else {
                  if (this.modes[_0x8c3d4a.SHOPIFY.PRELOAD] && this.preloadURL != null) {
                    _0x52249b = await _0x2f7ea1.bind(this)(this.preloadURL);
                  } else {
                    if (_0x2214f9.includes("account")) {
                      return _0x52249b;
                    } else {
                      if (this.checkoutURL) {
                        _0x52249b = await _0x2f7ea1.bind(this)(this.checkoutURL);
                      } else {
                        _0x52249b = await _0x2f7ea1.bind(this)(this.siteOrigin + "/checkout");
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      return this.handleCheckoutURL(_0x52249b, _0x274820);
    }

    async handleSafeRestockURL(_0x476994, _0x2a8244 = ![]) {
      const _0x5ceac3 = _0x8044f7;

      if (!this.running || _0x476994 == null) {
        _0x5a14e3(arg_1249);

        throw "stopped";
      }

      let _0x5f4084 = _0x476994;
      let _0x4e2f9c = _0x5f4084.request.uri.href;
      console.log("handle: ", _0x4e2f9c);

      var arg_1248 = '[' + new Date().toISOString() + "]: handle checkout url " + _0x4e2f9c;

      _0x2d2bdc(arg_1248, this.logFilePath);

      this.currentURL = _0x4e2f9c;

      if (_0x4e2f9c.includes("throttle")) {
        await _0x4c9ecb.bind(this)(_0x4e2f9c, _0x5f4084);
        _0x5f4084 = await _0x2f7ea1.bind(this)(this.siteOrigin + "/checkout");
        let _0xf3a92 = _0x5f4084.request.uri.href;

        if (_0x2a8244 && _0xf3a92.includes("checkout")) {
          this.checkoutURL = _0xf3a92.split('?')[0];
          return;
        }
      } else {
        if (_0x4e2f9c.includes("stock_problems")) {
          ;
        } else {
          if (_0x4e2f9c.includes("checkpoint")) {
            _0x5a14e3(arg_1250);

            this.checkpointSolvedOnce = !![];

            if (!this.solveCheckpointPromise) {
              this.solveCheckpointPromise = this.solveCheckpointCaptcha(_0x4e2f9c, ![], _0x5f4084.body);
            }

            _0x5f4084 = await this.solveCheckpointPromise;
            this.solveCheckpointPromise = null;

            if (this.checkoutURL) {
              _0x5f4084 = await _0x2f7ea1.bind(this)(this.checkoutURL);
            } else {
              _0x5f4084 = await _0x2f7ea1.bind(this)(this.siteOrigin + "/checkout");
            }

            var arg_1251 = '[' + new Date().toISOString() + "]: solve checkpoint result url: " + _0x5f4084.request.uri.href;

            _0x2d2bdc(arg_1251, this.logFilePath);

            if (_0x5f4084.body.includes("captcha validation failed")) {
              _0x5a14e3(arg_1263);
            }
          } else {
            if (_0x4e2f9c.includes("cart")) {
              if (_0x5f4084.body.includes("Your cart is currently empty")) {
                return _0x5a14e3({
                  'id': this.id,
                  'status': "Empty Cart, Retrying",
                  'statusCode': 1,
                  'groupId': this.groupId
                }), this.startSafeModeCheckout();
              } else {
                if (this.checkoutURL) {
                  _0x5f4084 = await _0x2f7ea1.bind(this)(this.checkoutURL);
                } else {
                  _0x5f4084 = await _0x2f7ea1.bind(this)(this.siteOrigin + "/checkout");

                  if (_0x5f4084.request.uri.href.includes("cart")) {
                    _0x5a14e3(arg_1267);

                    this.running = ![];
                    return;
                  }
                }
              }
            } else {
              if (_0x4e2f9c.includes("checkout")) {
                if (_0x5f4084.body.includes("Shopify.Checkout.step = \"contact_information\"")) {
                  if (_0x2a8244) {
                    this.checkoutURL = _0x4e2f9c.split('?')[0];
                    return;
                  }

                  _0x5f4084 = await _0x31890c.bind(this)(_0x5f4084.body, _0x4e2f9c);

                  if (_0x5f4084.body.includes("Error - Information")) {
                    _0x5a14e3(arg_1271);

                    var arg_1272 = '[' + new Date().toISOString() + "]: Invalid Shipping";

                    _0x2d2bdc(arg_1272, this.logFilePath);

                    this.running = ![];
                    return;
                  }
                } else {
                  if (_0x5f4084.body.includes("Shopify.Checkout.step = \"shipping_method\"")) {
                    let _0xd9fba3 = await _0x4cf152.bind(this)(_0x5f4084);

                    if (_0xd9fba3.oos) {
                      _0x5f4084 = _0xd9fba3.result;
                    } else {
                      this.shippingForm = _0xd9fba3.form;
                      _0x5f4084 = await _0x23eece.bind(this)(_0xd9fba3.form);
                    }
                  } else {
                    if (_0x5f4084.body.includes("Shopify.Checkout.step = \"payment_method\"")) {
                      if (_0x5f4084.body.includes("Check your card details")) {
                        _0x5a14e3(arg_1275);

                        var arg_1276 = '[' + new Date().toISOString() + "]: Card Info Error!";

                        _0x2d2bdc(arg_1276, this.logFilePath);

                        this.running = ![];
                        return;
                      }

                      let _0x152855 = null;

                      try {
                        const _0x13d883 = _0x3066df.load(_0x5f4084.body, arg_1277);

                        let _0x30ca6c = _0x13d883(".main").find(".radio-wrapper").attr("data-select-gateway") || _0x13d883(".radio-wrapper").attr("data-select-gateway");

                        if (_0x30ca6c != null) {
                          let _0x2f6df3 = _0x13d883("[data-checkout-total-taxes-target]").attr("data-checkout-total-taxes-target");

                          var arg_1278 = parseInt(_0x2f6df3);
                          this.hasTax = arg_1278 != 0;
                          _0x152855 = _0x5f4084;
                        }
                      } catch (err) {
                        console.log(err);
                      }

                      if (!_0x152855) {
                        _0x5f4084 = await _0x3016c6.bind(this)(_0x4e2f9c);
                      }

                      if (_0x5f4084.request.uri.href.includes("stock_problems")) {
                        return this.handleSafeRestockURL(_0x5f4084, _0x2a8244);
                      }

                      await _0x438e88.bind(this)(_0x5f4084.body, _0x5f4084.request.uri.href);
                      return;
                    } else {
                      if (_0x5f4084.body.includes("Shopify.Checkout.step = \"review\"")) {
                        var arg_1280 = '[' + new Date().toISOString() + "]: review page loaded";

                        _0x2d2bdc(arg_1280, this.logFilePath);

                        if (_0x4e2f9c.includes("step=review")) {
                          let _0x63e07a = await _0x190c9d.bind(this)(_0x5f4084.body, _0x5f4084.request.uri.href);

                          if (!_0x63e07a) {
                            return _0x5f4084 = await _0x2f7ea1.bind(this)(_0x4e2f9c), this.handleSafeRestockURL(_0x5f4084, _0x2a8244);
                          }

                          return this.handleProcessing(_0x63e07a);
                        } else {
                          _0x5f4084 = await _0x2f7ea1.bind(this)(_0x4e2f9c);
                        }
                      } else {
                        return _0x5f4084;
                      }
                    }
                  }
                }
              } else {
                if (this.checkoutURL) {
                  _0x5f4084 = await _0x2f7ea1.bind(this)(this.checkoutURL);
                } else {
                  _0x5f4084 = await _0x2f7ea1.bind(this)(this.siteOrigin + "/checkout");
                }
              }
            }
          }
        }
      }

      return this.handleSafeRestockURL(_0x5f4084, _0x2a8244);
    }

    async handleProcessing(_0x591f70) {
      const _0x78761 = _0x8044f7;
      let _0x18ae44 = _0x591f70.request.uri.href;
      console.log(_0x18ae44);
      var arg_1282 = Date.now();
      this.checkoutInfo.checkoutSpeed = arg_1282 - this.startTime;

      var arg_1283 = '[' + new Date().toISOString() + "]: Processing url: " + _0x18ae44;

      _0x2d2bdc(arg_1283, this.logFilePath);

      if (_0x18ae44.includes("process")) {
        let _0x2906a1 = await _0x418b92.bind(this)(_0x18ae44);

        let _0x588ec3 = _0x2906a1.request.uri.href;
        console.log(this.checkoutInfo);

        if (_0x2906a1.body && _0x2906a1.body.includes("Shopify.Checkout.step = \"stock_problems\"")) {
          var arg_1285 = '[' + new Date().toISOString() + "]: Out Of Stock";

          _0x2d2bdc(arg_1285, this.logFilePath);

          if (this.canSafeRestock) {
            return this.handleCheckoutURL(_0x2906a1);
          }

          _0x5a14e3(arg_1286);

          this.checkoutInfo.paymentStatus = _0x172aa3.hXdIV;
        } else {
          if (_0x588ec3.includes("validate=true")) {
            var arg_1287 = '[' + new Date().toISOString() + "]: Payment Declined!";

            _0x2d2bdc(arg_1287, this.logFilePath);

            _0x5a14e3(arg_1288);

            this.checkoutInfo.paymentStatus = _0x172aa3.BnhIJ;
            global.taskStatus.shopify.declinedNumber++;
          } else {
            const _0x43ef0e = "3|4|0|1|2|5".split('|');

            let _0x1da1c9 = 0;
            global.taskStatus.shopify.checkedOutNumber++;
            var arg_1292 = '[' + new Date().toISOString() + "]: Successfully Checkedout!";

            _0x2d2bdc(arg_1292, this.logFilePath);

            try {
              this.checkoutInfo.orderNumber = '#' + /Order #([a-zA-Z0-9-=_]+)/.exec(_0x2906a1.body)[1];
            } catch (err) {
            }

            _0x5a14e3(arg_1293);

            this.sender.send("checkoutSuccess", arg_1294);
            this.checkoutInfo.paymentStatus = _0x172aa3.xiQfa;
          }
        }
      } else {
        if (_0x18ae44.includes("/stock_problems")) {
          return this.handleCheckoutURL(_0x591f70);
        } else {
          if (_0x591f70.statusCode == 200) {
            if (_0x591f70.body.includes("technical reasons")) {
              _0x5a14e3(arg_1295);

              global.taskStatus.shopify.paymentErrorNumber++;
              this.checkoutInfo.paymentStatus = _0x172aa3.kMBdS;
            } else {
              if (_0x18ae44.includes("paypal")) {
                return _0x5a14e3({
                  'id': this.id,
                  'status': "Paypal Only, Exported",
                  'statusCode': 3,
                  'groupId': this.groupId
                }), this.exportChrome(_0x18ae44);
              } else {
                return this.handleCheckoutURL(_0x591f70);
              }
            }
          } else {
            if (_0x591f70.statusCode == 429) {
              _0x5a14e3(arg_1297);

              this.checkoutInfo.paymentStatus = _0x172aa3.zGLyD;
            }
          }
        }
      }

      this.checkoutInfo.date = new Date().toISOString();
      this.checkoutInfo.timestamp = Date.now();
      this.checkoutInfo.delay = this.monitorDelay;
      var arg_1284 = parseInt(this.checkoutInfo.price);

      if (arg_1284 > 0) {
        var arg_1299 = _0x4bcc70(this.checkoutInfo, ![]);

        var arg_1300 = null;

        if (this.checkoutInfo.paymentStatus == "Success") {
          arg_1300 = this.successWebhook;
        } else {
          arg_1300 = this.declineWebhook;
        }

        _0x586466(arg_1299, arg_1300);

        _0x27b1e4(this.checkoutInfo);

        var arg_1301 = _0x4bcc70(this.checkoutInfo, !![]);

        var arg_1302 = this.checkoutInfo.paymentStatus == "Success";

        _0x3ef86a(arg_1301, arg_1302);

        if (this.checkoutInfo.paymentStatus == "Success") {
          var arg_1303 = _0x4bcc70(this.checkoutInfo, ![]);

          _0x586466(arg_1303, global.successWebhook);
        }
      }

      return;
    }

    editRunner(_0x45b56d, _0x170a01) {
      const _0x103d94 = _0x8044f7;
      this.monitorDelay = _0x45b56d;
      console.log("edit runner");
      console.log(this.monitorDelay);
      console.log(this.modes);
    }

    async exportChrome(_0x2573bf = this.currentURL, _0x2234ed = ![]) {
      const _0x394aed = _0x8044f7;

      let _0x3bbff3 = await this.session.cookies.get({
        'url': this.siteOrigin
      });

      _0x2573bf = "https://www.paypal.com/checkoutweb/signup?" + _0x2573bf.split('?')[1];

      let _0x4db582 = await _0x3ab558(_0x2573bf, this.proxy, _0x1df022, this.profile);

      return _0x4db582;
    }

  }

  const _0x44851d = async function (_0x3f4445) {
    const _0x26fde7 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_1305);

      return;
    }

    _0x5a14e3(arg_1304);

    try {
      let _0x238dea = /wrgen_orig_assets\/([a-zA-Z0-9]+)\.js/.exec(_0x3f4445);

      if (_0x238dea) {
        return _0x2d2bdc('[' + new Date().toISOString() + "]: Parse Waiting Room Link: https://www.yeezysupply.com/" + _0x238dea[0], this.logFilePath), _0x14a668.bind(this)("https://www.yeezysupply.com/" + _0x238dea[0]);
      }

      return null;
    } catch (err) {
      return console.log(err), _0x5a14e3({
        'id': this.id,
        'status': "Parsing Splash Info Failed, Retrying",
        'statusCode': 4,
        'groupId': this.groupId
      }), await _0x45a98b(3000), _0x44851d.bind(this)();
    }
  };

  const _0x14a668 = async function (_0x409238, _0x4cb623 = 0) {
    const _0x4b4089 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_1307);

      return;
    }

    var arg_1306 = '[' + new Date().toISOString() + "]: Parse Splash Info.";

    _0x2d2bdc(arg_1306, this.logFilePath);

    if (_0x4cb623 >= 3) {
      return {
        'hasSplash': !![],
        'siteKeyCookieName': "xhwUqgFqfW88H50",
        'sitekeyValue': "6Lf34M8ZAAAAANgE72rhfideXH21Lab333mdd2d-",
        'splashCookie': "PH0ENIX=false",
        'splashURL': "https://www.yeezysupply.com/__queue/yzysply",
        'action': "yzysply_wr_pageview"
      };
    }

    try {
      let _0x32ea7e = await _0x525073.bind(this)(_0x16f4ad);

      let _0x37f104 = _0x32ea7e.body;
      let _0x2618a2 = /document.cookie="".concat\("([a-zA-Z0-9]+)",/.exec(_0x37f104)[0].split("concat(")[1].split('\x22')[1];
      let _0x1bc0be = /"6L([a-zA-Z0-9-=_]+)"/.exec(_0x37f104)[0].split('\x22')[1];
      let _0x4f990b = /"([a-zA-Z0-9=]+); max-age=".concat/.exec(_0x37f104)[0].split(';')[0].split('\x22')[1];
      let _0x4c468b = /"\/__queue\/(.*)"\).then/.exec(_0x37f104)[1];
      let _0x3e5a88 = /action:"([_a-zA-Z0-9]+)"\}\)/.exec(_0x37f104)[1];
      return _0x2d2bdc('[' + new Date().toISOString() + "]: Parse Splash Info: cookieName: " + _0x2618a2 + ", sitekey: " + _0x1bc0be + ", splashCookie: " + _0x4f990b + ", splashURL: " + _0x4c468b + ", action: " + _0x3e5a88, this.logFilePath), console.log('[' + new Date().toISOString() + "]: Parse Splash Info: cookieName: " + _0x2618a2 + ", sitekey: " + _0x1bc0be + ", splashCookie: " + _0x4f990b + ", splashURL: " + _0x4c468b + ", action: " + _0x3e5a88), {
        'hasSplash': !![],
        'siteKeyCookieName': _0x2618a2,
        'sitekeyValue': _0x1bc0be,
        'splashCookie': _0x4f990b,
        'splashURL': "https://www.yeezysupply.com/__queue/" + _0x4c468b,
        'action': _0x3e5a88
      };
    } catch (err) {
      const _0x3a8898 = "1|0|4|3|2".split('|');

      let _0x443754 = 0;
      console.log(err);
      var arg_1308 = '[' + new Date().toISOString() + "]: Parse Splash Info Failed " + err + '.';

      _0x2d2bdc(arg_1308, this.logFilePath);

      _0x5a14e3(arg_1309);

      await _0x45a98b(3000);
      return _0x14a668.bind(this)(_0x409238, _0x4cb623 + 1);
    }
  };

  const _0x39ba05 = require("puppeteer-extra");

  const _0x5abcab = require("puppeteer-extra-plugin-stealth")();

  _0x5abcab.enabledEvasions["delete"]("chrome.runtime");

  _0x39ba05.use(_0x5abcab);

  var arg_5 = (_0x5b1a41.app || _0x5b1a41.remote.app).getPath("userData");

  const _0x22d623 = require("chrome-paths");

  const _0x58afbe = require("querystring");

  const _0x31be9a = async function (_0x2544f1, _0x1b0aad, _0x138051, _0x3fdef8, _0x46b3d4, _0xbd1fa8, _0x577c02) {
    const _0x4c13c7 = _0x8044f7;
    return new Promise(async (_0x473cbf, _0x557fdd) => {
      const _0x144fca = _0x4c13c7;
      this.threeDProxyUserName = this.proxyUsername;
      this.threeDProxyPassword = this.proxyPassword;

      if (this.threeDProxy) {
        let _0x662607 = null;
        _0x662607 = this.threeDProxy;
        _0x662607 = _0x662607 && _0x662607.replace(_0x33c90a.tfOdI, '');

        if (_0x662607 && _0x662607.includes('@')) {
          _0x662607 = _0x662607.split('@')[1] + ':' + _0x662607.split('@')[0];
        }

        let _0x28af32 = null;

        if (_0x662607 && _0x662607.split(':').length > 1) {
          _0x28af32 = _0x662607.split(':')[0] + ':' + _0x662607.split(':')[1];
        } else {
          _0x28af32 = '';
        }

        this.threeDProxyUserName = _0x662607 && _0x662607.split(':')[2] ? _0x662607.split(':')[2] : '';
        this.threeDProxyPassword = _0x662607 && _0x662607.split(':')[3] ? _0x662607.split(':')[3] : '';
        await this.session.setProxy({
          'proxyRules': _0x28af32
        });
      }

      this.threeDWindow = new _0x5b1a41.BrowserWindow(arg_1312);
      this.threeDWindow.webContents.on(_0x33c90a.BmNuN, (_0x32861e, _0x4d6cdf, _0x13317e, _0x36f334) => {
        const _0x47b231 = _0x144fca;

        try {
          _0x32861e.preventDefault();

          if (_0x13317e.isProxy) {
            var arg_1315 = this.threeDProxyUserName || '';
            var arg_1316 = this.threeDProxyPassword || '';

            _0x36f334(arg_1315, arg_1316);
          }
        } catch (err) {
        }
      });
      this.threeDWindow.webContents.userAgent = this.user_agent;
      this.threeDWindow.webContents.session.webRequest.onBeforeRequest(_0x5ee8ea, (_0x1cd58b, _0x23a723) => {
        const _0x5da93e = _0x144fca;
        this.threeDWindow.webContents.session.webRequest.onBeforeRequest(_0x5ee8ea, null);
        this.threeDWindow.close();

        var arg_1317 = _0x1cd58b.uploadData[0].bytes.toString();

        let _0xb0c1c1 = _0x58afbe.parse(arg_1317);

        _0x23a723(arg_1325);
      });

      const _0x49a173 = "\n        <html>\n            <body>\n                <form method=\"" + _0x2544f1 + "\" action=\"" + _0x1b0aad + "\" id=\"Cardinal-CCA-Form\">\n                    <input type=\"hidden\" name=\"PaReq\" value=\"" + _0x138051 + "\" />\n                    <input type=\"hidden\" name=\"MD\" value=\"" + _0x3fdef8 + "\" />\n                    <input type=\"hidden\" name=\"TermUrl\" value=\"" + _0x46b3d4 + "\" />\n                </form>\n            </body>\n            <script>\n                document.getElementById(\"Cardinal-CCA-Form\").submit();\n            </script>\n        </html>\n        ";

      var arg_1313 = "data:text/html," + encodeURIComponent(_0x49a173);
      this.threeDWindow.loadURL(arg_1313, arg_1314);
    });
  };

  const _0x38a0e4 = async function (_0x2ed1d6 = 0) {
    const _0x59a319 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_1327);

      return;
    }

    this.currentURL = _0x172aa3.GeBmv;

    try {
      if (_0x2ed1d6 >= this.maxAkamaiRetry) {
        const _0x4e3ece = "3|4|1|0|2".split('|');

        let _0x790724 = 0;

        _0x5a14e3(arg_1332);

        this.webHookInfo.paymentStatus = _0x172aa3.WGSUf;
        this.webHookInfo.status = ![];
        this.running = ![];
        return;
      }

      const _0x17999c = JSON.stringify(arg_1329);

      let _0x55ad5f = _0x4edeba();

      _0x5a14e3(arg_1330);

      let _0x29a4b0 = await _0x525073.bind(this)(_0x3dde3e);

      var arg_1331 = '[' + new Date().toISOString() + "]: Submitting Shipping StatusCode:" + _0x29a4b0.statusCode + "; Set-Cookie: " + JSON.stringify(_0x29a4b0.headers["set-cookie"]) + " \n body: " + _0x29a4b0.body;

      _0x2d2bdc(arg_1331, this.logFilePath);

      if (_0x29a4b0.body && _0x29a4b0.body.toLowerCase().includes("shipping address postal code is blacklisted")) {
        const _0x269313 = "3|1|2|4|0".split('|');

        let _0x1e0965 = 0;
        this.webHookInfo.status = ![];
        this.webHookInfo.paymentStatus = _0x172aa3.BFuZf;

        _0x5a14e3(arg_1333);

        var arg_1334 = '[' + new Date().toISOString() + "]: Zip Banned!";

        _0x2d2bdc(arg_1334, this.logFilePath);

        return "Zip Banned";
      }

      let _0x3d45e8 = _0x29a4b0.statusCode;

      if (_0x3d45e8 == 200) {
        return _0x29a4b0;
      } else {
        if (_0x3d45e8 == 403 || _0x3d45e8 == 501) {
          _0x5a14e3(arg_1338);

          if (_0x2ed1d6 >= this.maxAkamaiRetry) {
            return _0x5a14e3({
              'id': this.id,
              'status': "Maximum Retry Reached [Shipping]",
              'statusCode': 4,
              'groupId': this.groupId
            }), _0x2d2bdc('[' + new Date().toISOString() + "]: Maximum Retry Reached [Shipping] ", this.logFilePath), null;
          }

          if (_0x29a4b0.body && _0x29a4b0.body.includes("Access Denied")) {
            _0x5a14e3(arg_1339);

            var arg_1340 = '[' + new Date().toISOString() + "]: Submitting Shipping Failed(Banned), Retrying: " + _0x3d45e8;

            _0x2d2bdc(arg_1340, this.logFilePath);

            await _0x54ff9c.bind(this)();
          } else {
            _0x5a14e3(arg_1341);

            var arg_1342 = '[' + new Date().toISOString() + "]: Submitting Shipping Failed: Invalid Akamai: " + _0x3d45e8;

            _0x2d2bdc(arg_1342, this.logFilePath);

            let _0x5d0c67 = await _0xf26268.bind(this)(!![]);

            if (_0x5d0c67) {
              _0x2ed1d6 = _0x2ed1d6 + 1;
            }
          }

          return await _0x45a98b(this.monitorDelay), _0x38a0e4.bind(this)(_0x2ed1d6);
        } else {
          _0x5a14e3(arg_1343);

          var arg_1344 = '[' + new Date().toISOString() + "]: Submitting Shipping Failed, Retrying: " + _0x3d45e8;

          _0x2d2bdc(arg_1344, this.logFilePath);

          let _0x4ca713 = await _0xf26268.bind(this)(!![]);

          if (_0x4ca713) {
            _0x2ed1d6 = _0x2ed1d6 + 1;
          }

          return _0x38a0e4.bind(this)(_0x2ed1d6);
        }
      }
    } catch (err) {
      const _0x33a452 = "3|4|0|1|2".split('|');

      let _0x6ced4a = 0;
      console.log(err);
      var arg_1346 = '[' + new Date().toISOString() + "]: Submitting Shipping Error: " + err + '.';

      _0x2d2bdc(arg_1346, this.logFilePath);

      _0x5a14e3(arg_1347);

      await _0x45a98b(this.monitorDelay);
      return _0x38a0e4.bind(this)(_0x2ed1d6);
    }
  };

  const _0x38e670 = async function (_0x354a74 = 0, _0x5c2873 = 0) {
    const _0x857bc2 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_1349);

      return;
    }

    this.currentURL = _0x172aa3.JFlVC;

    if (_0x354a74 >= this.maxAkamaiRetry) {
      const _0x48f623 = "3|4|0|2|1".split('|');

      let _0x17d398 = 0;

      _0x5a14e3(arg_1350);

      this.webHookInfo.paymentStatus = _0x172aa3.MtvwR;
      this.webHookInfo.status = ![];
      this.running = ![];
      return;
    }

    _0x5a14e3(arg_1348);

    try {
      let _0x2e5784 = "VISA";

      if (/^5[1-5][0-9]{5,}|222[1-9][0-9]{3,}|22[3-9][0-9]{4,}|2[3-6][0-9]{5,}|27[01][0-9]{4,}|2720[0-9]{3,}$/.test(this.profile.cardNum)) {
        _0x2e5784 = _0x172aa3.hYEsa;
      }

      if (/^3[47][0-9]{5,}$/.test(this.profile.cardNum)) {
        _0x2e5784 = _0x172aa3.YXIPX;
      }

      if (/^6(?:011|5[0-9]{2})[0-9]{3,}$/.test(this.profile.cardNum)) {
        _0x2e5784 = _0x172aa3.IRUUO;
      }

      var _0x3278fa = _0x5cc2b6(21).createEncryption(this.adyenKey, arg_1351);

      _0x3278fa.validate(_0x87a572);

      var _0x476923 = _0x3278fa.encrypt(_0x87a572);

      const _0x405822 = JSON.stringify(arg_1352);

      let _0x20d2e2 = _0x4edeba();

      let _0x48d64d = await _0x525073.bind(this)(_0x2f964b);

      console.log("submitOrder ================");
      console.log(_0x48d64d.body);

      var arg_1353 = '[' + new Date().toISOString() + "]: Submitting Order StatusCode:" + _0x48d64d.statusCode + "; Set-Cookie: " + JSON.stringify(_0x48d64d.headers["set-cookie"]) + ", body: " + _0x48d64d.body;

      _0x2d2bdc(arg_1353, this.logFilePath);

      let _0x49079c = _0x48d64d.statusCode;

      if (_0x49079c == 201 || _0x49079c == 200) {
        if (this.useStaticFp) {
          this.webHookInfo.mode = this.webHookInfo.mode + "-Exp";
        }

        let _0x58214b = JSON.parse(_0x48d64d.body);

        if (_0x58214b.orderId && _0x58214b.pricing) {
          const _0x8c8de8 = "4|1|2|3|0".split('|');

          let _0x21d585 = 0;
          this.webHookInfo.status = !![];
          this.webHookInfo.orderId = _0x58214b.orderId;
          this.webHookInfo.paymentStatus = _0x172aa3.xiQfa;

          _0x5a14e3(arg_1354);

          var arg_1355 = '[' + new Date().toISOString() + "]: Check Email!";

          _0x2d2bdc(arg_1355, this.logFilePath);
        } else {
          if (_0x58214b.orderId && _0x58214b.paRedirectForm) {
            _0x5a14e3(arg_1356);

            let _0x58c307 = _0x58214b.paRedirectForm;

            let _0x2ecad1 = "https://www.yeezysupply.com/payment/callback/CREDIT_CARD/" + this.basketId + "/adyen?orderId=" + _0x58214b.orderId + "&encodedData=" + _0x58c307.formFields.EncodedData + "&result=AUTHORISED";

            return _0x2d2bdc('[' + new Date().toISOString() + "]: Verify 3D, termURL: " + _0x2ecad1, this.logFilePath), this.threeDHost = "https://" + _0x58c307.formAction.replace("https://", '').split('/')[0], _0x31be9a.bind(this)(_0x58c307.formMethod, _0x58c307.formAction, _0x58c307.formFields.PaReq, _0x58c307.formFields.MD, _0x2ecad1, _0x58c307.formFields.EncodedData, _0x58214b.orderId);
          } else {
            const _0xc6de15 = "3|2|0|4|1".split('|');

            let _0x15f05a = 0;
            global.taskStatus.yeezysupply.declinedNumber++;
            this.webHookInfo.status = ![];
            this.webHookInfo.paymentStatus = _0x172aa3.zgLXN;

            _0x5a14e3(arg_1357);

            var arg_1358 = '[' + new Date().toISOString() + "]: Payment Declined! " + _0x48d64d.body;

            _0x2d2bdc(arg_1358, this.logFilePath);
          }
        }

        return _0x48d64d;
      } else {
        if (_0x49079c == 400) {
          if (_0x48d64d.body && _0x48d64d.body.includes("<TITLE>Invalid URL</TITLE>")) {
            _0x5a14e3(arg_1360);

            await _0x45a98b(this.monitorDelay);

            let _0x54e76c = await _0xf26268.bind(this)(!![]);

            if (_0x54e76c) {
              _0x354a74 = _0x354a74 + 1;
            }

            return _0x38e670.bind(this)(_0x354a74, _0x5c2873);
          }

          this.webHookInfo.status = ![];

          let _0x1c128b = JSON.parse(_0x48d64d.body);

          var arg_1359 = '[' + new Date().toISOString() + "]: Payment Declined: " + _0x49079c + " with " + _0x48d64d.body;

          _0x2d2bdc(arg_1359, this.logFilePath);

          if (_0x1c128b.message.includes("ItemNotAvailable")) {
            this.webHookInfo.paymentStatus = _0x172aa3.yqnQL;

            if (this.useStaticFp) {
              this.webHookInfo.mode = this.webHookInfo.mode + "-Exp";
            }

            return _0x5a14e3({
              'id': this.id,
              'status': "Payment Declined (OOS)",
              'statusCode': 4,
              'groupId': this.groupId
            }), _0x48d64d;
          } else {
            if (_0x1c128b.message.includes("fraud")) {
              const _0x24ebb6 = "4|1|2|0|3".split('|');

              let _0x727ead = 0;
              global.taskStatus.yeezysupply.declinedNumber++;
              this.webHookInfo.paymentStatus = _0x172aa3.zgLXN;

              if (this.useStaticFp) {
                this.webHookInfo.mode = this.webHookInfo.mode + "-Exp";
              }

              _0x5a14e3(arg_1362);

              return _0x48d64d;
            }
          }

          if (!this.testCart && _0x5c2873 < this.maxPaymentRetry) {
            return _0x5a14e3({
              'id': this.id,
              'status': "Payment Declined, Retry",
              'statusCode': 4,
              'groupId': this.groupId
            }), await _0x45a98b(this.monitorDelay), _0x38e670.bind(this)(_0x354a74, _0x5c2873 + 1);
          }

          if (this.useStaticFp) {
            this.webHookInfo.mode = this.webHookInfo.mode + "-Exp";
          }

          return global.taskStatus.yeezysupply.declinedNumber++, this.webHookInfo.paymentStatus = _0x172aa3.zgLXN, _0x5a14e3({
            'id': this.id,
            'status': "Payment Declined",
            'statusCode': 4,
            'groupId': this.groupId
          }), _0x48d64d;
        } else {
          if (_0x49079c == 403) {
            _0x5a14e3(arg_1363);

            if (_0x48d64d.body.includes("InvalidBasket")) {
              _0x5a14e3(arg_1364);

              this.webHookInfo.status = ![];
              this.webHookInfo.paymentStatus = _0x172aa3.sGSjq;
              return;
            }

            if (_0x354a74 >= this.maxAkamaiRetry) {
              const _0x5485c1 = "1|3|0|2|4".split('|');

              let _0x397dd0 = 0;

              _0x5a14e3(arg_1365);

              this.webHookInfo.paymentStatus = _0x172aa3.MtvwR;
              this.webHookInfo.status = ![];
              this.running = ![];
              return;
            } else {
              if (_0x48d64d.body && _0x48d64d.body.includes("Access Denied")) {
                _0x5a14e3(arg_1366);

                var arg_1367 = '[' + new Date().toISOString() + "]: Submitting Order Failed(Banned), Retrying: " + _0x49079c;

                _0x2d2bdc(arg_1367, this.logFilePath);

                await _0x452541.bind(this)(this.searchContent);
              } else {
                const _0x4c2c0d = "3|2|4|5|1|0".split('|');

                let _0x5ca911 = 0;

                _0x5a14e3(arg_1470);

                await _0x452541.bind(this)("https://www.yeezysupply.com/payment", {
                  'sec-ch-ua': this.secUAHeader,
                  'sec-ch-ua-mobile': '?0',
                  'upgrade-insecure-requests': 1,
                  'user-agent': this.user_agent,
                  'accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                  'sec-fetch-site': "same-origin",
                  'sec-fetch-mode': "navigate",
                  'sec-fetch-user': '?1',
                  'sec-fetch-dest': "document",
                  'referer': "https://www.yeezysupply.com/payment",
                  'accept-encoding': "gzip, deflate, br",
                  'accept-language': "en-US"
                });
                await _0x1ab13a.bind(this)();
                _0x20d2e2 = _0x4edeba();
                await _0x452541.bind(this)("https://www.yeezysupply.com/api/checkout/baskets/50e5b620eda678b1e93633eb38/payment_methods", {
                  'sec-ch-ua-mobile': '?0',
                  'user-agent': this.user_agent,
                  'x-instana-l': "1,correlationType=web;correlationId=" + _0x20d2e2,
                  'x-instana-s': _0x20d2e2,
                  'content-type': "application/json",
                  'checkout-authorization': this.authToken,
                  'sec-ch-ua': this.secUAHeader,
                  'accept': '*',
                  'sec-fetch-site': "same-origin",
                  'sec-fetch-mode': "cors",
                  'sec-fetch-dest': "empty",
                  'referer': "https://www.yeezysupply.com/payment",
                  'accept-encoding': "gzip, deflate, br",
                  'accept-language': "en-US"
                });
                _0x354a74 = _0x354a74 + 1;
              }
            }

            return await _0x45a98b(5000), _0x38e670.bind(this)(_0x354a74, _0x5c2873);
          } else {
            if (_0x49079c == 404 && _0x48d64d.body.includes("BasketNotFound")) {
              const _0x841125 = "1|2|0|4|5|3".split('|');

              let _0x223511 = 0;

              if (this.useStaticFp) {
                this.webHookInfo.mode = this.webHookInfo.mode + "-Exp";
              }

              _0x5a14e3(arg_1471);

              var arg_1472 = '[' + new Date().toISOString() + "]: Submitting Order Failed: " + _0x49079c + " with " + _0x48d64d.body;

              _0x2d2bdc(arg_1472, this.logFilePath);

              this.webHookInfo.status = ![];
              this.webHookInfo.paymentStatus = _0x172aa3.sGSjq;
              return;
            } else {
              _0x5a14e3(arg_1473);

              var arg_1474 = '[' + new Date().toISOString() + "]: Submitting Order Failed, " + _0x49079c + " with " + _0x48d64d.body;

              _0x2d2bdc(arg_1474, this.logFilePath);

              await _0x45a98b(5000);

              let _0x2449a0 = await _0xf26268.bind(this)(!![]);

              if (_0x2449a0) {
                _0x354a74 = _0x354a74 + 1;
              }

              return _0x38e670.bind(this)(_0x354a74, _0x5c2873);
            }
          }
        }
      }
    } catch (err) {
      const _0x445152 = "1|4|2|3|5|0".split('|');

      let _0xa85d7b = 0;
      console.log(err);
      var arg_1475 = '[' + new Date().toISOString() + "]: Submitting Order Error: " + err + '.';

      _0x2d2bdc(arg_1475, this.logFilePath);

      if (err.message.includes("400")) {
        return _0x5a14e3({
          'id': this.id,
          'status': "Payment Declined",
          'statusCode': 4,
          'groupId': this.groupId
        }), 400;
      }

      _0x5a14e3(arg_1476);

      await _0x45a98b(5000);
      return _0x38e670.bind(this)(_0x354a74, _0x5c2873);
    }
  };

  const _0x4862d6 = async function (_0x4bad1c, _0x2211f9, _0x2cb01c, _0x31c6e8 = 0) {
    const _0x1add76 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_1478);

      return;
    }

    if (_0x31c6e8 == 0 && this.threeDProxy) {
      console.log(this.proxyHost);
      await this.session.setProxy({
        'proxyRules': this.proxyHost
      });
    }

    if (_0x31c6e8 >= this.maxAkamaiRetry) {
      const _0x248033 = "2|0|4|1|3".split('|');

      let _0x120528 = 0;

      _0x5a14e3(arg_1479);

      this.webHookInfo.paymentStatus = _0x172aa3.vVFIU;
      this.webHookInfo.status = ![];
      this.running = ![];
      return;
    }

    _0x5a14e3(arg_1477);

    try {
      let _0x5e94a9 = await _0x525073.bind(this)(_0x150781);

      var arg_1480 = '[' + new Date().toISOString() + "]: Posting TermURL StatusCode:" + _0x5e94a9.statusCode;

      _0x2d2bdc(arg_1480, this.logFilePath);

      let _0xf0f1be = _0x5e94a9.statusCode;

      if (_0xf0f1be == 201 || _0xf0f1be == 200) {
        if (_0x5e94a9.body) {
          this.postPixelBody = _0x5e94a9.body;

          var arg_1481 = '[' + new Date().toISOString() + "]: Posting TermURL Body: " + (_0x5e94a9.body.includes("bazadebezolkohpepadr=") && _0x5e94a9.body.includes("yeezysupply.com/akam/11"));

          _0x2d2bdc(arg_1481, this.logFilePath);
        }

        return _0x4ce244.bind(this)(_0x2cb01c);
      }

      if (_0x31c6e8 >= this.maxAkamaiRetry) {
        const _0x56789f = "2|3|0|1|4".split('|');

        let _0x52b8e4 = 0;

        _0x5a14e3(arg_1482);

        this.webHookInfo.paymentStatus = _0x172aa3.vVFIU;
        this.webHookInfo.status = ![];
        this.running = ![];
        return;
      }

      let _0xc66055 = await _0xf26268.bind(this)(!![]);

      if (_0xc66055) {
        _0x31c6e8 = _0x31c6e8 + 1;
      }

      return _0x5a14e3({
        'id': this.id,
        'status': "Posting TermURL failed, retrying",
        'statusCode': 4,
        'groupId': this.groupId
      }), await _0x45a98b(this.monitorDelay), _0x4862d6.bind(this)(_0x4bad1c, _0x2211f9, _0x2cb01c, _0x31c6e8);
    } catch (err) {
      const _0x22bfc3 = "1|4|2|0|3".split('|');

      let _0x50f3e4 = 0;
      console.log(err);
      var arg_1484 = '[' + new Date().toISOString() + "]: Posting TermURL error: " + err;

      _0x2d2bdc(arg_1484, this.logFilePath);

      _0x5a14e3(arg_1485);

      await _0x45a98b(this.monitorDelay);
      return _0x4862d6.bind(this)(_0x4bad1c, _0x2211f9, _0x2cb01c, _0x31c6e8);
    }
  };

  const _0x4ce244 = async function (_0x4406ec, _0x54d1e8 = 0) {
    const _0xcad2e = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_1489);

      return;
    }

    if (_0x54d1e8 == 0 && this.threeDProxy) {
      await this.session.setProxy({
        'proxyRules': this.proxyHost
      });
    }

    if (_0x54d1e8 >= this.maxAkamaiRetry) {
      const _0x31e896 = "0|2|3|4|1".split('|');

      let _0x3eded9 = 0;

      _0x5a14e3(arg_1490);

      this.webHookInfo.paymentStatus = _0x172aa3.sBqqH;
      this.webHookInfo.status = ![];
      this.running = ![];
      return;
    }

    _0x5a14e3(arg_1488);

    try {
      const _0x5c5010 = JSON.stringify(arg_1491);

      let _0x49ec4b = _0x4edeba();

      let _0x31c1c3 = await _0x525073.bind(this)(_0x1e9459);

      console.log("verify order ================");
      console.log(_0x31c1c3.body);
      console.log(_0x31c1c3.statusCode);

      var arg_1492 = '[' + new Date().toISOString() + "]: Verifying Order StatusCode:" + _0x31c1c3.statusCode + "; Set-Cookie: " + JSON.stringify(_0x31c1c3.headers["set-cookie"]) + ", body: " + _0x31c1c3.body;

      _0x2d2bdc(arg_1492, this.logFilePath);

      let _0x8ce01e = _0x31c1c3.statusCode;

      if (_0x8ce01e == 201 || _0x8ce01e == 200) {
        let _0x5cc1ac = JSON.parse(_0x31c1c3.body);

        if (_0x5cc1ac.orderId && _0x5cc1ac.pricing) {
          const _0x2c3afc = "0|4|2|1|3".split('|');

          let _0x389749 = 0;
          this.webHookInfo.status = !![];
          this.webHookInfo.orderId = _0x5cc1ac.orderId;
          this.webHookInfo.paymentStatus = _0x172aa3.UKSxe;

          _0x5a14e3(arg_1493);

          var arg_1494 = '[' + new Date().toISOString() + "]: Check Email[3D]!";

          _0x2d2bdc(arg_1494, this.logFilePath);
        } else {
          const _0x5d56f5 = "0|1|4|2|3".split('|');

          let _0x4c0ec7 = 0;
          this.webHookInfo.status = ![];
          global.taskStatus.yeezysupply.declinedNumber++;
          this.webHookInfo.paymentStatus = _0x172aa3.bWOzu;

          _0x5a14e3(arg_1495);

          var arg_1496 = '[' + new Date().toISOString() + "]: Payment Declined[3D]! " + _0x31c1c3.body;

          _0x2d2bdc(arg_1496, this.logFilePath);
        }

        return _0x31c1c3;
      } else {
        if (_0x8ce01e == 400) {
          if (_0x31c1c3.body && _0x31c1c3.body.includes("<TITLE>Invalid URL</TITLE>")) {
            _0x5a14e3(arg_1498);

            var arg_1499 = '[' + new Date().toISOString() + "]: Verifying Order Failed, " + _0x8ce01e + " with " + _0x31c1c3.body;

            _0x2d2bdc(arg_1499, this.logFilePath);

            let _0x18eaa9 = await _0xf26268.bind(this)(!![]);

            await _0x45a98b(this.monitorDelay);

            if (_0x18eaa9) {
              _0x54d1e8 = _0x54d1e8 + 1;
            }

            return _0x4ce244.bind(this)(_0x4406ec, _0x54d1e8);
          }

          this.webHookInfo.status = ![];

          let _0x2c006f = JSON.parse(_0x31c1c3.body);

          var arg_1497 = '[' + new Date().toISOString() + "]: Payment Declined: " + _0x8ce01e + " with " + _0x31c1c3.body;

          _0x2d2bdc(arg_1497, this.logFilePath);

          if (_0x2c006f.message.includes("ItemNotAvailable")) {
            return this.webHookInfo.paymentStatus = _0x172aa3.yqnQL, _0x5a14e3({
              'id': this.id,
              'status': "Payment Declined [3D](OOS)",
              'statusCode': 4,
              'groupId': this.groupId
            }), _0x31c1c3;
          } else {
            if (_0x2c006f.message.includes("fraud")) {
              return this.webHookInfo.paymentStatus = _0x172aa3.bWOzu, global.taskStatus.yeezysupply.declinedNumber++, _0x5a14e3({
                'id': this.id,
                'status': "Payment Declined [3D](Fraud)",
                'statusCode': 4,
                'groupId': this.groupId
              }), _0x31c1c3;
            }
          }

          return _0x5a14e3({
            'id': this.id,
            'status': "Payment Declined",
            'statusCode': 4,
            'groupId': this.groupId
          }), global.taskStatus.yeezysupply.declinedNumber++, this.webHookInfo.paymentStatus = _0x172aa3.bWOzu, _0x31c1c3;
        } else {
          if (_0x8ce01e == 403) {
            _0x5a14e3(arg_1515);

            var arg_1516 = '[' + new Date().toISOString() + "]: Verifying Order Failed: " + _0x8ce01e + " with " + _0x31c1c3.body;

            _0x2d2bdc(arg_1516, this.logFilePath);

            if (_0x31c1c3.body.includes("InvalidBasket")) {
              _0x5a14e3(arg_1517);

              this.webHookInfo.status = ![];
              this.webHookInfo.paymentStatus = _0x172aa3.sGSjq;
              return;
            }

            if (_0x54d1e8 >= this.maxAkamaiRetry) {
              const _0x47a7fc = "1|3|2|0|4".split('|');

              let _0x2dcd2c = 0;

              _0x5a14e3(arg_1519);

              this.webHookInfo.paymentStatus = _0x172aa3.sBqqH;
              this.webHookInfo.status = ![];
              this.running = ![];
              return;
            } else {
              if (_0x31c1c3.body && _0x31c1c3.body.includes("Access Denied")) {
                _0x5a14e3(arg_1520);

                var arg_1521 = '[' + new Date().toISOString() + "]: Verifying Order Failed(Banned), Retrying: " + _0x8ce01e;

                _0x2d2bdc(arg_1521, this.logFilePath);

                await _0x452541.bind(this)(this.searchContent);
              } else {
                if (this.postPixelBody) {
                  await _0x3874ac.bind(this)(_0x4406ec.termUrl, this.postPixelBody);
                  this.postedTermPixel = !![];
                  this.postPixelBody = null;
                }

                _0x5a14e3(arg_1522);

                var arg_1523 = '[' + new Date().toISOString() + "]: Verifying Order Failed: Invalid Akamai: " + _0x8ce01e;

                _0x2d2bdc(arg_1523, this.logFilePath);

                let _0x54a40d = await _0xf26268.bind(this)(!![]);

                if (_0x54a40d) {
                  _0x54d1e8 = _0x54d1e8 + 1;
                }
              }
            }

            return await _0x45a98b(this.monitorDelay), _0x4ce244.bind(this)(_0x4406ec, _0x54d1e8);
          } else {
            if (_0x8ce01e == 404) {
              if (_0x31c1c3.body.includes("BasketNotFound")) {
                _0x5a14e3(arg_1524);

                var arg_1525 = '[' + new Date().toISOString() + "]: Verifying Order Failed: " + _0x8ce01e + " with " + _0x31c1c3.body;

                _0x2d2bdc(arg_1525, this.logFilePath);

                this.webHookInfo.status = ![];
                this.webHookInfo.paymentStatus = _0x172aa3.sGSjq;
              } else {
                if (_0x31c1c3.body.includes("OrderNotFoundException")) {
                  _0x5a14e3(arg_1528);

                  var arg_1529 = '[' + new Date().toISOString() + "]: Order Not Found Error: " + _0x8ce01e + " with " + _0x31c1c3.body;

                  _0x2d2bdc(arg_1529, this.logFilePath);

                  this.webHookInfo.status = ![];
                  this.webHookInfo.paymentStatus = _0x172aa3.rVQhD;
                }
              }

              return;
            } else {
              if (_0x8ce01e == 409 && _0x31c1c3.body && _0x31c1c3.body.includes("resource_state_conflict_exception")) {
                _0x5a14e3(arg_1532);

                this.webHookInfo.status = ![];
                this.webHookInfo.paymentStatus = _0x172aa3.zTseT;
              } else {
                _0x5a14e3(arg_1533);

                var arg_1534 = '[' + new Date().toISOString() + "]: Verifying Order Failed, " + _0x8ce01e + " with " + _0x31c1c3.body;

                _0x2d2bdc(arg_1534, this.logFilePath);

                let _0x557264 = await _0xf26268.bind(this)(!![]);

                if (_0x557264) {
                  _0x54d1e8 = _0x54d1e8 + 1;
                }

                return await _0x45a98b(this.monitorDelay), _0x4ce244.bind(this)(_0x4406ec, _0x54d1e8);
              }
            }
          }
        }
      }
    } catch (err) {
      const _0x172874 = "2|5|3|4|1|0".split('|');

      let _0x1d016e = 0;
      console.log(err);
      var arg_1535 = '[' + new Date().toISOString() + "]: Verifying Order Error: " + err + '.';

      _0x2d2bdc(arg_1535, this.logFilePath);

      if (err.message.includes("400")) {
        return _0x5a14e3({
          'id': this.id,
          'status': "Payment Declined",
          'statusCode': 4,
          'groupId': this.groupId
        }), 400;
      }

      _0x5a14e3(arg_1536);

      await _0x45a98b(this.monitorDelay);
      return _0x4ce244.bind(this)(_0x4406ec, _0x54d1e8);
    }
  };

  const {
    session: _0xa15854,
    app: _0x2866b7
  } = _0x5b1a41;

  const _0x43fb73 = arg_5 + "/taskLogs";

  class _0x2df539 {
    constructor(_0x37ead0, _0x5552b4, _0xd26b5, _0x2fc708, _0x1b0d02, _0x47370c, _0x50edfd, _0x56f232, _0x1ab066, _0x2a735b, _0x122f3e, _0x36dc95, _0x450331, _0x33b7bc, _0x25a5e9, _0x18cddb, _0x166d0e, _0x28a0c4) {
      const _0x48d3cb = _0x8044f7;

      const _0x4fa129 = "44|3|48|68|49|56|76|22|42|20|38|12|62|32|27|4|61|50|60|57|40|29|74|67|8|28|18|10|7|63|26|30|59|47|53|13|31|46|33|65|54|58|14|51|25|1|24|45|71|69|23|39|15|2|36|43|16|6|41|5|72|19|11|17|77|75|21|64|52|70|73|9|34|66|0|35|37|55".split('|');

      let _0x3eae93 = 0;
      this.index = _0x166d0e;
      this.flagged = ![];
      this.sessionName = "yeezy-" + _0x37ead0 + '-' + _0x2bda7f();
      this.id = _0x37ead0;
      this.groupId = _0x5552b4;
      this.profile = _0xd26b5;
      var arg_1538 = parseInt(this.profile.expyear);
      var arg_1537 = arg_1538 % 10000;
      this.profile.expyear = arg_1537 + '';
      this.size = _0x2fc708;
      this.modes = _0x1b0d02;
      this.type = _0x47370c;
      this.siteOrigin = _0x50edfd;
      this.proxy = _0x56f232;
      this.threeDProxy = _0x28a0c4 != "taskProxy" ? _0x28a0c4 : null;
      this.proxyList = _0x18cddb;
      this.searchLink = _0x1ab066;
      this.searchContent = _0x2a735b;
      this.monitorDelay = _0x122f3e;
      this.apiKey = _0x36dc95;
      this.sender = _0x450331;
      this.running = ![];
      this.variants = null;
      this.currentURL = this.siteOrigin;
      this.useStaticFp = ![];
      this.sensorURL = _0x172aa3.ZavZJ;
      this.user_agent = this.useStaticFp ? "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36" : _0x310223(_0x2b33c7.YEEZYSUPPLY);
      this.siteKey = _0x172aa3.lgdbG;
      this.captchaCookieName = _0x172aa3.RZrJi;
      this.splashCookie = _0x172aa3.PdyYP;
      this.action = _0x172aa3.gcDDY;
      this.lastCaptchaTs = 0;
      this.akamaiCookie = null;
      this.product_sku = null;
      this.authToken = null;
      this.basketId = null;
      this.hostName = _0x1ab066;
      this.productName = _0x1ab066;
      this.browser = null;
      this.page = null;
      this.passSplash = ![];
      this.splashURL = _0x172aa3.oOXBK;
      this.pixelURL = null;
      this.imageURL = '';
      this.started = ![];
      this.needCaptcha = ![];
      this.cookieType = _0x172aa3.cFZPm;
      this.maxAkamaiRetry = 5;
      this.cartTs = null;
      this.v3Token = null;
      this.postedPixel = ![];
      this.pixelId = null;
      this.adyenKey = _0x172aa3.jnkBZ;
      this.successWebhook = _0x172aa3.GCjpX;
      this.declineWebhook = _0x172aa3.jdUZa;
      this.sessionId = _0x4abdc1();
      var arg_1542 = Math.random();
      var arg_1541 = arg_1542 * 1000;
      var arg_1540 = Math.floor(arg_1541);
      var arg_1539 = arg_1540 + 800;
      this.tt = parseInt(arg_1539).toString(36);
      this.webHookInfo = {
        'version': _0x2866b7.getVersion(),
        'discordId': global.user.userId,
        'key': global.user.key,
        'siteType': this.type,
        'siteName': _0x25a5e9,
        'siteURL': this.searchContent,
        'store': this.siteOrigin,
        'checkoutSpeed': 0,
        'productName': "N/A",
        'size': "N/A",
        'price': "N/A",
        'profileName': this.profile.name,
        'proxyIp': this.proxy,
        'mode': Object.keys(this.modes).filter(_0x442989 => this.modes[_0x442989]).join('-'),
        'imageURL': null,
        'paymentStatus': "N/A",
        'sku': "N/A",
        'date': new Date().toISOString(),
        'timestamp': Date.now(),
        'email': this.profile.email,
        'useMekApi': ![]
      };

      if (this.webHookInfo.mode.length == 0) {
        this.webHookInfo.mode = _0x172aa3.quEqJ;
      }

      this.maxPaymentRetry = 2;
      this.exportBrowserWindow = null;
      this.logFilePath = _0x43fb73 + '/' + _0x33b7bc + '/' + this.profile.name + '_' + this.id;
      this.shouldUseBrowser = this.modes.Hybrid;
      this.testCart = process.env.NODE_ENV != "production" && ![];
      this.testSku = _0x172aa3.xBgJb;
      this.useMekApi = ![];
      this.webHookInfo.useMekApi = this.useMekApi ? "[0]" : "[1]";
      this.gValue = null;
      this.bazadebezolkohpepadr = null;
      this.deviceId = _0x254c3b[this.user_agent] ? _0x254c3b[this.user_agent].deviceId : _0x28d3a4();
      this.pixelPayLoad = null;
      this.sku = _0x2a735b.endsWith('/') ? _0x2a735b.slice(0, -1).split('/').pop() : _0x2a735b.split('/').pop();
      this.threeDWindow = null;
      this.threeDHost = null;
      this.secUAHeader = _0x1efb6(this.user_agent);
      this.keepSameUA = ![];
      this.pixelHash = null;
      this.pageTitle = _0x172aa3.tPiXC;
      this.postPixelBody = null;
      this.postedTermPixel = ![];
    }

    async resetTask() {
      const _0x36bfb3 = _0x8044f7;

      const _0x5e2fd3 = "1|31|10|13|36|40|9|8|16|15|6|21|5|23|14|12|35|34|24|33|39|26|30|20|32|27|11|4|17|22|18|28|7|25|19|3|38|2|29|0|37".split('|');

      let _0xbcf83b = 0;
      var arg_1543 = '[' + new Date().toISOString() + "]: reset task\n";

      _0x2d2bdc(arg_1543, this.logFilePath);

      this.postedTermPixel = ![];
      this.postPixelBody = null;
      this.lastCaptchaTs = 0;
      this.akamaiCookie = null;
      this.product_sku = null;
      this.authToken = null;
      this.basketId = null;
      this.browser = null;
      this.page = null;
      this.passSplash = ![];
      this.pixelURL = null;
      this.imageURL = '';
      this.started = ![];
      this.needCaptcha = ![];
      this.cookieType = _0x172aa3.cFZPm;
      this.maxAkamaiRetry = 5;
      this.cartTs = null;
      this.v3Token = null;
      this.postedPixel = ![];
      this.pixelId = null;
      this.sessionId = _0x4abdc1();
      var arg_1547 = Math.random();
      var arg_1546 = arg_1547 * 1000;
      var arg_1545 = Math.floor(arg_1546);
      var arg_1544 = arg_1545 + 800;
      this.tt = parseInt(arg_1544).toString(36);
      this.gValue = null;
      this.bazadebezolkohpepadr = null;
      this.deviceId = _0x254c3b[this.user_agent] ? _0x254c3b[this.user_agent].deviceId : _0x28d3a4();
      this.pixelPayLoad = null;
      this.pixelHash = null;
      this.user_agent = _0x310223(_0x2b33c7.YEEZYSUPPLY);
      this.secUAHeader = _0x1efb6(this.user_agent);
      this.pixelHash = null;
      this.pageTitle = _0x172aa3.tPiXC;
      this.currentURL = this.siteOrigin;
      await _0x354f98.bind(this)();

      if (!this.running) {
        return;
      }

      await _0x45a98b(5000 + parseInt(Math.random() * 5000));

      if (!this.running) {
        return;
      }

      global.taskStatus.yeezysupply.runningNumber--;
      this.sessionName = "yeezy-" + this.id + '-' + _0x2bda7f();
      this.running = ![];
      this.runTask();
    }

    async runTask(_0x1b424d = null) {
      const _0x400469 = _0x8044f7;

      const _0x2297b2 = "1|0|6|3|7|2|5|4".split('|');

      let _0x201049 = 0;

      if (this.running) {
        return ![];
      }

      global.taskStatus.yeezysupply.runningNumber++;
      await this.initSession(this.proxy, this.sessionName);

      _0x5a14e3(arg_1548);

      if (_0x1b424d) {
        await _0x54ff9c.bind(this)();
      }

      this.started = !![];
      var arg_1549 = '[' + new Date().toISOString() + "]: productFound\uFF0Cua used, " + this.user_agent;

      _0x2d2bdc(arg_1549, this.logFilePath);

      this.start();
    }

    async initSession(_0x5b0dc5, _0x371a5f) {
      const _0x59dec7 = _0x8044f7;
      _0x5b0dc5 = _0x5b0dc5 && _0x5b0dc5.replace("http://", '');

      if (_0x5b0dc5 && _0x5b0dc5.includes('@')) {
        _0x5b0dc5 = _0x5b0dc5.split('@')[1] + ':' + _0x5b0dc5.split('@')[0];
      }

      var arg_1550 = '' + _0x371a5f;
      this.session = _0xa15854.fromPartition(arg_1550);
      await _0x354f98.bind(this)();
      let _0x81d943 = null;

      if (_0x5b0dc5 && _0x5b0dc5.split(':').length > 1) {
        _0x81d943 = _0x5b0dc5.split(':')[0] + ':' + _0x5b0dc5.split(':')[1];
      } else {
        _0x81d943 = '';
      }

      this.proxyHost = _0x81d943;
      this.proxyUsername = _0x5b0dc5 && _0x5b0dc5.split(':')[2] ? _0x5b0dc5.split(':')[2] : '';
      this.proxyPassword = _0x5b0dc5 && _0x5b0dc5.split(':')[3] ? _0x5b0dc5.split(':')[3] : '';
      await this.session.setProxy({
        'proxyRules': _0x81d943
      });
    }

    async stopTask() {
      const _0x313f9d = _0x8044f7;
      this.postPixelBody = null;
      this.postedTermPixel = ![];
      this.pixelId = null;
      this.postedPixel = ![];
      this.v3Token = null;
      this.flagged = ![];
      this.running = ![];
      this.variants = null;
      this.currentURL = null;
      this.akamaiCookie = null;
      this.product_sku = null;
      this.authToken = null;
      this.basketId = null;
      this.page = null;
      this.passSplash = ![];
      this.started = ![];
      var arg_1551 = '[' + new Date().toISOString() + "]: task stopped\n";

      _0x2d2bdc(arg_1551, this.logFilePath);

      global.taskStatus.yeezysupply.runningNumber--;

      try {
        const _0x24b719 = "1|2|3|4|0".split('|');

        let _0x2f456c = 0;

        if (this.browser != null) {
          await this.browser.close();
          this.browser = null;
        }

        if (this.needCaptcha) {
          _0x13958c.bind(this)();
        }

        if (this.threeDWindow != null) {
          await this.threeDWindow.close();
          this.threeDWindow = null;
        }

        this.needCaptcha = ![];
        await _0x354f98.bind(this)();
      } catch (err) {
      }

      _0x5a14e3(arg_1552);
    }

    async start() {
      const _0x6b2dbb = _0x8044f7;

      try {
        this.running = !![];
        this.passSplash = ![];

        if (this.shouldUseBrowser) {
          await this.startBrowserMode();
          this.initTs = Date.now();
        } else {
          await this.startAPIMode();
        }
      } catch (err) {
        console.log(err);

        _0x5a14e3(arg_1554);

        var arg_1555 = '[' + new Date().toISOString() + "]: task corrupted " + err;

        _0x2d2bdc(arg_1555, this.logFilePath);

        this.stopTask();
      }
    }

    async startBrowserMode() {
      const _0x88ffc4 = _0x8044f7;

      const _0x46e05a = "0|1|5|2|3|4".split('|');

      let _0x54b3c9 = 0;
      await this.prepareSplashBrowser();

      if (!this.running) {
        return;
      }

      await this.waitSplashBrowser();

      if (!this.running) {
        return;
      }

      global.taskStatus.yeezysupply.passedQueueNumber++;
      await this.checkoutWithRequest();
    }

    async startAPIMode() {
      const _0x5cb519 = _0x8044f7;

      let _0x53b4eb = await this.prepareSession();

      if (!this.running) {
        return;
      }

      if (_0x53b4eb == "reset") {
        return this.resetTask();
      }

      _0x5a14e3(arg_1556);

      let _0x354426 = await this.waitSplash();

      if (!this.running) {
        return;
      }

      if (_0x354426 == "reset") {
        return this.resetTask();
      }

      if (!this.running) {
        return;
      }

      await this.checkoutWithRequest();
    }

    async prepareSession() {
      const _0x2cf80a = _0x8044f7;
      await _0x105796.bind(this)();
      var arg_1557 = Date.now();
      this.ss = parseInt(arg_1557).toString(36);
      this.initTs = Date.now();

      if (!this.running) {
        return;
      }

      await _0x6149fe.bind(this)();
      this.currentURL = this.searchContent;

      let _0x4449c1 = await _0x5797c4.bind(this)(!![]);

      if (!this.pixelURL) {
        return _0x5a14e3({
          'id': this.id,
          'status': "Proxy Soft Banned, Retry In 5s",
          'statusCode': 4,
          'groupId': this.groupId
        }), _0x2d2bdc('[' + new Date().toISOString() + "]: no pixel found. proxy soft banned, retry in 5 seconds", this.logFilePath), await _0x45a98b(5000), "reset";
      }

      let _0xf5a8ec = await _0x44851d.bind(this)(_0x4449c1.body);

      if (!this.running) {
        return;
      }

      if (_0xf5a8ec && _0xf5a8ec.hasSplash) {
        const _0x220ced = "2|0|3|1|5|4".split('|');

        let _0x1b074e = 0;
        this.siteKey = _0xf5a8ec.sitekeyValue;
        this.captchaCookieName = _0xf5a8ec.siteKeyCookieName;
        this.splashCookie = _0xf5a8ec.splashCookie;
        this.splashURL = _0xf5a8ec.splashURL;
        this.action = _0xf5a8ec.action;
        var arg_1558 = '[' + new Date().toISOString() + "]: siteKey: " + this.siteKey + ", captchaCookieName: " + this.captchaCookieName + ", splashCookie: " + this.splashCookie;

        _0x2d2bdc(arg_1558, this.logFilePath);
      }

      await _0x48e5ad.bind(this)();
    }

    async prepareSplashBrowser() {
      const _0x574da4 = _0x8044f7;

      if (!this.running) {
        return;
      }

      try {
        _0x5a14e3(arg_1564);

        if (this.browser) {
          await this.browser.close();
        }

        this.browser = new _0x5b1a41.BrowserWindow(arg_1565);
        this.browser.webContents.userAgent = this.user_agent;
        this.browser.webContents.on("login", (_0x4becc7, _0x509339, _0x171972, _0x25df31) => {
          const _0x26b16e = _0x574da4;

          try {
            _0x4becc7.preventDefault();

            if (_0x171972.isProxy) {
              var arg_1567 = this.proxyUsername || '';
              var arg_1568 = this.proxyPassword || '';

              _0x25df31(arg_1567, arg_1568);
            }
          } catch (err) {
            console.log(err);
          }
        });
        this.session.webRequest.onCompleted(arg_1566, _0x5b7ce2 => {
          const _0x5ef1b0 = _0x574da4;

          if (_0x5b7ce2.statusCode == 200) {
            if (!_0x3b9bb4()) {
              this.passSplash = !![];
            }
          }
        });

        let _0x32e0df = await _0x7f4309();

        for (let _0x131531 of _0x32e0df) {
          if (_0x131531.domain.includes("google") || _0x131531.domain.includes("youtube")) {
            if (_0x131531.domain.includes("youtube")) {
              _0x131531.url = _0x172aa3.EfjPi;
            } else {
              if (_0x131531.domain.includes("accounts.google")) {
                _0x131531.url = _0x172aa3.kzafV;
              } else {
                if (_0x131531.domain.includes("google.com.pk")) {
                  _0x131531.url = _0x172aa3.Tqsny;
                } else {
                  if (_0x131531.domain.includes("google")) {
                    _0x131531.url = _0x172aa3.YHvEN;
                  }
                }
              }
            }

            await this.session.cookies.set(_0x131531)["catch"](_0x161c7b => console.log(_0x131531));
          }
        }

        await this.browser.loadURL("https://www.google.com");
        await _0x45a98b(3000);
        await this.browser.loadURL(this.searchContent);
      } catch (err) {
        const _0x54da6a = "4|0|3|1|2".split('|');

        let _0x2dc995 = 0;
        console.log(err);
        var arg_1583 = '[' + new Date().toISOString() + "]: Preparing Session Failed, " + err;

        _0x2d2bdc(arg_1583, this.logFilePath);

        _0x5a14e3(arg_1584);

        await _0x45a98b(this.monitorDelay);
        return this.prepareSplashBrowser();
      }
    }

    async checkoutWithRequest() {
      const _0x5266ed = _0x8044f7;

      if (!this.running) {
        return;
      }

      if (this.shouldUseBrowser) {
        await _0x45a98b(5000);
        await _0x5797c4.bind(this)();
      }

      var arg_1585 = '[' + new Date().toISOString() + "]: bazValue: " + this.bazadebezolkohpepadr + ", gValue: " + this.gValue + ", Pid: " + this.pixelId;

      _0x2d2bdc(arg_1585, this.logFilePath);

      this.sender.send("splashPassed", arg_1586);
      var arg_1587 = Date.now();
      this.ss = parseInt(arg_1587).toString(36);

      if (!this.shouldUseBrowser && this.running) {
        let _0x5ae158 = _0x4edeba();

        await _0x45a98b(500);
        await _0x452541.bind(this)("https://www.yeezysupply.com/api/products/" + this.sku, {
          'x-instana-t': _0x5ae158,
          'content-type': "application/json",
          'x-instana-s': _0x5ae158,
          'sec-ch-ua-mobile': '?0',
          'user-agent': this.user_agent,
          'sec-ch-ua': this.secUAHeader,
          'x-instana-l': "1,correlationType=web;correlationId=" + _0x5ae158,
          'accept': "*/*",
          'sec-fetch-site': "same-origin",
          'sec-fetch-mode': "cors",
          'sec-fetch-dest': "empty",
          'referer': this.searchContent,
          'accept-encoding': "gzip, deflate, br",
          'accept-language': "en-US"
        });
        this.currentURL = this.searchContent;
        await _0x1ab13a.bind(this)();
        await _0x1d6b25.bind(this)();
      }

      let _0x11cd06 = await this.addToCart();

      if (_0x11cd06 == null) {
        try {
          if (this.browser) {
            this.browser.close();
          }
        } catch (err) {
        }

        return;
      }

      if (!this.running) {
        return;
      }

      global.taskStatus.yeezysupply.cartedNumber++;
      await this.submitOrder();

      try {
        if (this.browser) {
          this.browser.close();
        }

        if (this.threeDWindow) {
          this.threeDWindow.close();
        }
      } catch (err) {
      }

      if (!this.running) {
        return;
      }

      if (this.webHookInfo.status) {
        global.taskStatus.yeezysupply.checkedOutNumber++;
        this.sender.send("checkoutSuccess", arg_1591);
      }

      if (this.postedTermPixel) {
        this.webHookInfo.mode += _0x172aa3.CAuLf;
      }

      this.webHookInfo.date = new Date().toISOString();
      this.webHookInfo.timestamp = Date.now();
      this.webHookInfo.delay = this.monitorDelay;

      if (this.webHookInfo.paymentStatus.includes("Payment Declined") || this.webHookInfo.paymentStatus.includes("Success")) {
        _0x27b1e4(this.webHookInfo);

        var arg_1592 = this.getWebhookPayload();
        var arg_1593 = null;

        if (this.webHookInfo.status) {
          arg_1593 = this.successWebhook;
        } else {
          arg_1593 = this.declineWebhook;
        }

        _0x586466(arg_1592, arg_1593);
      }

      var arg_1588 = this.getWebhookPayload(!![]);
      var arg_1589 = this.webHookInfo.paymentStatus.includes("Success");

      _0x3ef86a(arg_1588, arg_1589);

      if (this.webHookInfo.status) {
        var arg_1594 = this.getWebhookPayload();

        _0x586466(arg_1594, global.successWebhook);
      }
    }

    async waitSplash() {
      const _0x211112 = _0x8044f7;
      let _0x1bac8d = 1;

      while (this.running && !this.passSplash) {
        if (!this.testCart) {
          await _0x39b7c3.bind(this)();
        }

        let _0x6d7544 = await _0x561c30.bind(this)();

        if (_0x6d7544 == "reset") {
          return "reset";
        }

        if (this.passSplash || !this.running) {
          return;
        }

        var arg_1596 = _0x1bac8d % 10;

        if (arg_1596 == 0) {
          await _0x5797c4.bind(this)(!![]);
        }

        this.passSplash = await _0x1c6383.bind(this)();

        if (this.passSplash || !this.running) {
          return;
        }

        _0x5a14e3(arg_1597);

        await _0x45a98b(3000);
        _0x1bac8d++;
      }

      return;
    }

    async selectSize(_0x3262b) {
      const _0x2a5bf7 = _0x8044f7;

      if (!this.running) {
        return;
      }

      _0x5a14e3(arg_1598);

      let _0x4fde7c = await _0x2c68dc.bind(this)();

      if (!_0x4fde7c || _0x4fde7c.availability_status == "NOT_AVAILABLE" || _0x4fde7c.availability_status == "PREVIEW") {
        return null;
      }

      let _0x3e4d2c = null;

      if (_0x3262b[0].name == "random") {
        let _0x10c10f = _0x4fde7c.variation_list.filter(_0x4e1751 => {
          const _0xc0746b = _0x2a5bf7;
          return _0x4e1751.availability_status == "IN_STOCK";
        });

        if (_0x10c10f.length > 0) {
          _0x3e4d2c = _0x10c10f[Math.floor(Math.random() * _0x10c10f.length)];
          this.size = _0x3e4d2c.size;
        }
      } else {
        let _0x1d126d = [];

        for (let _0x1a2985 of _0x3262b) {
          let _0x1f31df = _0x4fde7c.variation_list.find(_0x277d5d => _0x277d5d.size == _0x1a2985.name && _0x277d5d.availability_status == "IN_STOCK");

          if (_0x1f31df) {
            _0x1d126d.push(_0x1f31df);
          }
        }

        if (_0x1d126d.length > 0) {
          _0x3e4d2c = _0x1d126d[Math.floor(Math.random() * _0x1d126d.length)];
          this.size = _0x3e4d2c.size;
        }
      }

      return _0x3e4d2c ? _0x3e4d2c.sku : null;
    }

    async addToCart() {
      const _0xc2f1da = _0x8044f7;

      if (!this.running) {
        return;
      }

      var arg_1601 = JSON.stringify(this.size);
      let _0x3d8078 = null;

      let _0x65b2bc = JSON.parse(arg_1601);

      while (_0x3d8078 == null && this.running) {
        await _0x45a98b(1000);
        this.product_sku = await this.selectSize(_0x65b2bc);

        if (this.testCart) {
          _0x3d8078 = await _0x1eb04a.bind(this)(!![]);
          break;
        }

        if (!this.product_sku) {
          _0x5a14e3(arg_1603);

          var arg_1604 = '[' + new Date().toISOString() + "]: Sizes OOS";

          _0x2d2bdc(arg_1604, this.logFilePath);

          this.running = ![];
          return;
        }

        _0x3d8078 = await _0x1eb04a.bind(this)(!![]);
      }

      if (!this.running) {
        return;
      }

      return this.authToken = _0x3d8078.headers.authorization, this.basketId = JSON.parse(_0x3d8078.body).basketId, _0x3d8078;
    }

    async submitOrder() {
      const _0x49a00f = _0x8044f7;

      if (!this.running) {
        return;
      }

      await _0x3ebbdb.bind(this)();

      let _0x12774f = await _0x38a0e4.bind(this)();

      if (_0x12774f == "Zip Banned") {
        return;
      }

      if (!this.running) {
        return;
      }

      await _0x565b1b.bind(this)();

      if (!this.running) {
        return;
      }

      await _0x38e670.bind(this)(0);
      this.webHookInfo.timestamp = Date.now();
    }

    async exportBrowser() {
      const _0x51f7ea = _0x8044f7;

      try {
        _0x5a14e3(arg_1605);

        if (this.exportBrowserWindow) {
          await this.exportBrowserWindow.close();
        }

        this.exportBrowserWindow = new _0x5b1a41.BrowserWindow(arg_1606);
        this.exportBrowserWindow.webContents.userAgent = this.user_agent;
        this.exportBrowserWindow.webContents.on("login", (_0xd61780, _0x46def7, _0x5c8583, _0x57e57d) => {
          const _0x290399 = _0x51f7ea;

          try {
            _0xd61780.preventDefault();

            if (_0x5c8583.isProxy) {
              var arg_1607 = this.proxyUsername || '';
              var arg_1608 = this.proxyPassword || '';

              _0x57e57d(arg_1607, arg_1608);
            }
          } catch (err) {
            console.log(err);
          }
        });
        await this.exportBrowserWindow.loadURL(this.currentURL);
        return;
      } catch (err) {
        const _0x1dc52a = "2|4|0|3|1".split('|');

        let _0x309c59 = 0;
        console.log(err);
        var arg_1613 = '[' + new Date().toISOString() + "]: Preparing Session Failed, " + err;

        _0x2d2bdc(arg_1613, this.logFilePath);

        _0x5a14e3(arg_1614);

        await _0x45a98b(this.monitorDelay);
        return this.exportBrowser();
      }
    }

    async waitSplashBrowser() {
      const _0x4739c1 = _0x8044f7;

      while (!this.passSplash && this.running) {
        await _0x45a98b(2000);

        _0x5a14e3(arg_1615);
      }

      return;
    }

    getWebhookPayload(_0x90c3b8 = ![]) {
      const _0x385f3e = _0x8044f7;
      let _0x2057c0 = [];
      let _0x142595 = [];

      _0x142595.push(arg_1616);

      _0x142595.push(arg_1617);

      _0x142595.push(arg_1618);

      _0x142595.push(arg_1619);

      _0x142595.push(arg_1620);

      _0x142595.push(arg_1621);

      if (_0x90c3b8) {
        _0x142595.push(arg_1624);

        _0x142595.push(arg_1625);

        _0x142595.push(arg_1626);

        _0x142595.push(arg_1627);
      }

      _0x142595.push(arg_1622);

      _0x142595.push(arg_1623);

      return _0x2057c0.push(_0x2a49a3), _0x87d223.embeds = _0x2057c0, _0x87d223;
    }

    editRunner(_0x4a5bed, _0x5ad28c) {
      const _0x4d0ea1 = _0x8044f7;
      this.monitorDelay = _0x4a5bed;
    }

    async exportChrome() {
      const _0x5e5b71 = _0x8044f7;
      this.exportBrowser();
    }

  }

  var arg_6 = (_0x5b1a41.app || _0x5b1a41.remote.app).getPath("userData");

  const _0x36763c = new _0x5860df();

  const _0x2f8b08 = require("querystring");

  const _0x2e8efc = function (_0x5e485d) {
    const _0x37641e = _0x8044f7;

    if (_0x5e485d && _0x5e485d["x-served-by"]) {
      let _0x2a8e77 = null;

      try {
        _0x2a8e77 = _0x5e485d["x-served-by"].split(',')[0].split("cache-")[1].split('-')[0];
      } catch (err) {
        console.log(err);
      }

      if (_0x2a8e77 && !this.cacheNodes.includes(_0x2a8e77)) {
        this.cacheNodes.push(_0x2a8e77);
      }
    }
  };

  const _0xfc2067 = async (_0x359a87, _0x5b94d7, _0x5a1eb7) => {
    const _0x34b180 = _0x8044f7;

    try {
      let _0x5eb2b9 = _0x1c3c2d.jar();

      let _0x4a9900 = _0x5b94d7 && _0x5b94d7.length > 0;

      if (_0x4a9900) {
        let _0x2c25d2 = _0x5b94d7.split(':');

        _0x2796aa.proxy = _0x2c25d2.length > 2 ? "http://" + _0x2c25d2[2] + ':' + _0x2c25d2[3] + '@' + _0x2c25d2[0] + ':' + _0x2c25d2[1] : "http://" + _0x5b94d7;
      }

      let _0x1f7c58 = await _0x1c3c2d(_0x2796aa);

      if (_0x1f7c58.statusCode == 200) {
        let _0x1107f7 = JSON.parse(_0x1f7c58.body);

        if (_0x4a9900) {
          let _0x3e8328 = _0x5b94d7.split(':');

          _0x4b92fb.proxy = _0x3e8328.length > 2 ? "http://" + _0x3e8328[2] + ':' + _0x3e8328[3] + '@' + _0x3e8328[0] + ':' + _0x3e8328[1] : "http://" + _0x5b94d7;
        }

        let _0x1d0e1d = await _0x1c3c2d(_0x4b92fb);

        let _0x494ee6 = JSON.parse(_0x1d0e1d.body).svcAmounts[0].balance;
        return _0x5a1eb7.send("checkBalanceStatus", {
          'card': _0x359a87,
          'status': _0x494ee6 ? '$' + _0x494ee6 : null,
          'statusCode': 3
        }), _0x494ee6;
      }

      return _0x5a1eb7.send("checkBalanceStatus", {
        'card': _0x359a87,
        'status': "check balance error",
        'statusCode': 4
      }), null;
    } catch (err) {
      return _0x5a1eb7.send("checkBalanceStatus", {
        'card': _0x359a87,
        'status': "check balance error",
        'statusCode': 4
      }), null;
    }
  };

  const _0xaa0e22 = function (_0x3c4500) {
    const _0x4bd055 = _0x8044f7;

    if (!global.giftCardsIndex[_0x3c4500]) {
      global.giftCardsIndex[_0x3c4500] = 0;
    }

    let _0x55af0b = null;

    if (_0x36763c.get("giftcards")) {
      _0x55af0b = _0x36763c.get("giftcards");
    } else {
      _0x55af0b = [];
    }

    console.log(_0x55af0b);

    let _0x2af765 = _0x55af0b.find(_0x4156e8 => _0x4156e8.id == _0x3c4500);

    if (_0x2af765) {
      let _0x23b0c0 = _0x2af765.giftcards;
      console.log(_0x23b0c0);
      console.log(global.giftCardsIndex);
      console.log(this.gfCardGroupIndex);

      if (_0x23b0c0.length > 0) {
        let _0x568f5f = global.giftCardsIndex[_0x3c4500] % _0x23b0c0.length;

        global.giftCardsIndex[_0x3c4500]++;

        if (_0x568f5f == _0x23b0c0.length) {
          this.gfCardGroupIndex++;
        }

        return _0x23b0c0[_0x568f5f];
      }
    }

    this.gfCardGroupIndex++;
    return _0xaa0e22.bind(this)(this.gfCardsIds[this.gfCardGroupIndex % this.gfCardsIds.length]);
  };

  const _0x17974b = _0x48a35d => {
    const _0x1e5fd8 = _0x8044f7;
    const _0x4ffaee = "10001|A237060180D24CDEF3E4E27D828BDB6A13E12C6959820770D7F2C1671DD0AEF4729670C20C6C5967C664D18955058B69549FBE8BF3609EF64832D7C033008A818700A9B0458641C5824F5FCBB9FF83D5A83EBDF079E73B81ACA9CA52FDBCAD7CD9D6A337A4511759FA21E34CD166B9BABD512DB7B2293C0FE48B97CAB3DE8F6F1A8E49C08D23A98E986B8A995A8F382220F06338622631435736FA064AEAC5BD223BAF42AF2B66F1FEA34EF3C297F09C10B364B994EA287A5602ACF153D0B4B09A604B987397684D19DBC5E6FE7E4FFE72390D28D6E21CA3391FA3CAADAD80A729FEF4823F6BE9711D4D51BF4DFCB6A3607686B34ACCE18329D415350FD0654D";

    var _0x5c4d46 = _0x5cc2b6(18).createEncryption(_0x4ffaee, arg_1637);

    _0x5c4d46.validate(_0x48a35d);

    var _0x7ff7c6 = _0x5c4d46.encrypt(_0x48a35d);

    return _0x7ff7c6;
  };

  const _0x4327c1 = async function () {
    const _0x1b4d18 = _0x8044f7;
    let _0x35e9f1 = this.proxyList[Math.floor(Math.random() * this.proxyList.length)];

    if (this.usingNet) {
      this.proxy = _0x35e9f1;
      let _0x2f91dc = null;

      if (_0x35e9f1 && _0x35e9f1.split(':').length > 1) {
        _0x2f91dc = _0x35e9f1.split(':')[0] + ':' + _0x35e9f1.split(':')[1];
      } else {
        _0x2f91dc = '';
      }

      this.proxyHost = _0x2f91dc;
      this.proxyUsername = _0x35e9f1 && _0x35e9f1.split(':')[2] ? _0x35e9f1.split(':')[2] : '';
      this.proxyPassword = _0x35e9f1 && _0x35e9f1.split(':')[3] ? _0x35e9f1.split(':')[3] : '';
      await this.session.clearAuthCache();
      await this.session.setProxy({
        'proxyRules': _0x2f91dc
      });
    } else {
      this.proxy = '';

      if (_0x35e9f1 != '') {
        let _0x2d9b5e = _0x35e9f1.split(':');

        this.proxy = _0x2d9b5e.length < 4 ? "http://" + _0x2d9b5e[0] + ':' + _0x2d9b5e[1] : "http://" + _0x2d9b5e[2] + ':' + _0x2d9b5e[3] + '@' + _0x2d9b5e[0] + ':' + _0x2d9b5e[1];
      }
    }
  };

  const _0x4cf7c0 = (_0x1cd13a, _0x592eae) => {
    const _0x1a2cd7 = _0x8044f7;

    let _0x5029bc = _0x1cd13a.paymentStatus != "Success";

    let _0x4d0ff0 = [];
    let _0x9f402d = [];

    _0x9f402d.push(arg_1640);

    _0x9f402d.push(arg_1641);

    _0x9f402d.push(arg_1642);

    _0x9f402d.push(arg_1643);

    _0x9f402d.push(arg_1644);

    _0x9f402d.push(arg_1645);

    _0x9f402d.push(arg_1646);

    _0x9f402d.push(arg_1647);

    _0x9f402d.push(arg_1648);

    if (_0x592eae) {
      _0x9f402d.push(arg_1650);

      _0x9f402d.push(arg_1651);

      _0x9f402d.push(arg_1652);

      _0x9f402d.push(arg_1653);
    }

    _0x9f402d.push(arg_1649);

    return _0x4d0ff0.push(_0x1cc78c), _0x22f534.embeds = _0x4d0ff0, _0x22f534;
  };

  const _0x32fa4c = async function () {
    const _0x33486c = _0x8044f7;
    this.queueWaitTime = 30000;

    let _0x5249fe = await _0x218a0f.bind(this)("waiting_room", this.siteOrigin);

    if (!_0x5249fe) {
      return _0x5a14e3({
        'id': this.id,
        'status': "Waiting Perm Queue",
        'statusCode': 1,
        'groupId': this.groupId
      }), "Perm";
    }

    let _0x47f40e = _0x5249fe.value;
    let _0x485ea8 = null;

    if (_0x47f40e) {
      try {
        let _0x1e162d = Buffer.from(_0x47f40e, "base64").toString();

        const _0x3db40b = _0x2f8b08.parse(_0x1e162d);

        _0x485ea8 = parseInt(_0x3db40b.exp);
        var arg_1654 = '[' + new Date().toISOString() + "]: check queue cookie: " + _0x1e162d + '\x20';

        _0x2d2bdc(arg_1654, this.logFilePath);

        if (_0x1e162d.includes("wait") && _0x485ea8 > 0) {
          const _0x37b4da = "2|5|0|3|1|4|6".split('|');

          let _0x184e16 = 0;
          var arg_1656 = _0x485ea8 * 1000;
          var arg_1657 = Date.now();
          var arg_1655 = arg_1656 - arg_1657;
          this.queueWaitTime = arg_1655 + 1000;

          if (this.queueWaitTime < 0) {
            return _0x5a14e3({
              'id': this.id,
              'status': "Waiting Perm Queue",
              'statusCode': 1,
              'groupId': this.groupId
            }), "Perm";
          }

          this.queueWaitTime = this.queueWaitTime < 30000 ? this.queueWaitTime : 30000;
          this.hasQueue = !![];

          _0x5a14e3(arg_1658);

          var arg_1659 = '[' + new Date().toISOString() + "]: queue waitTime: " + this.queueWaitTime + '\x20';

          _0x2d2bdc(arg_1659, this.logFilePath);

          return !![];
        } else {
          if (_0x3db40b.dec == "allow") {
            return ![];
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const _0x218a0f = async function (_0x6535f7, _0x1dbae7) {
    const _0x191a8d = _0x8044f7;

    if (this.usingNet) {
      let _0x5557a2 = await this.session.cookies.get({
        'url': _0x1dbae7,
        'name': _0x6535f7,
        'domain': this.domain
      });

      if (_0x5557a2.length > 0) {
        return _0x5557a2[0];
      }

      return null;
    } else {
      let _0x2aff41 = this.jar.getCookies(_0x1dbae7);

      return _0x2aff41.find(_0x20f924 => _0x20f924.key.toLowerCase().includes(_0x6535f7));
    }
  };

  const _0x35e74e = async function (_0x2725de, _0x55f1f6 = !![]) {
    const _0x2fe161 = _0x8044f7;

    let _0x210706;

    if (this.usingNet) {
      _0x210706 = await _0x525073.bind(this)(_0x2725de);
    } else {
      _0x2725de.gzip = !![];
      _0x2725de.resolveWithFullResponse = !![];
      _0x2725de.simple = ![];

      if (_0x55f1f6) {
        _0x2725de.jar = this.jar;
      }

      if (this.proxy && this.proxy.length > 0) {
        _0x2725de.proxy = this.proxy;
      }

      _0x210706 = await this.rp(_0x2725de);

      _0x2e8efc.bind(this)(_0x210706.headers);
    }

    return _0x210706;
  };

  const _0x1f7e15 = async function (_0x4fd2d1, _0x5e3a2b, _0x97e25, _0x5a11b8, _0x5e4a67 = ![]) {
    const _0x26d607 = _0x8044f7;

    try {
      if (this.usingNet) {
        await this.session.cookies.remove(this.siteOrigin, _0x4fd2d1);

        if (!_0x5e4a67) {
          await this.session.cookies.set({
            'url': this.siteOrigin,
            'name': _0x4fd2d1,
            'value': _0x5e3a2b,
            'domain': this.domain
          });
        }
      } else {
        if (this.jar._jar.store.idx[_0x97e25]) {
          try {
            delete this.jar._jar.store.idx[_0x97e25]['/'][_0x4fd2d1];
          } catch (err) {
          }
        }

        if (this.jar._jar.store.idx["www." + _0x97e25]) {
          try {
            delete this.jar._jar.store.idx["www." + _0x97e25]['/'][_0x4fd2d1];
          } catch (err) {
          }
        }

        if (!_0x5e4a67) {
          var arg_1666 = _0x4fd2d1 + '=' + _0x5e3a2b + "; domain=" + _0x97e25 + ';';
          this.jar.setCookie(arg_1666, _0x5a11b8);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const _0x4286e0 = new _0x5860df();

  const _0x163554 = function () {
    const _0x5d45af = _0x8044f7;

    let _0x2159b6 = Object.keys(global.footsiteDataDomeCookie);

    console.log(global.footsiteDataDomeCookie);

    for (let _0x29670c of _0x2159b6) {
      if (global.footsiteDataDomeCookie[_0x29670c] >= 30) {
        delete global.footsiteDataDomeCookie[_0x29670c];
      } else {
        return global.footsiteDataDomeCookie[_0x29670c]++, _0x29670c;
      }
    }

    return ![];
  };

  const _0x574f69 = async function (_0x458a1a, _0x517f6d) {
    const _0x1585a5 = _0x8044f7;

    try {
      if (!this.solveCaptcha) {
        await _0x1f7e15.bind(this)("datadome", '', this.domain, this.siteOrigin, !![]);
        await _0x45a98b(3000);
        await _0x4327c1.bind(this)();
        return;
      }

      let _0x1b1f63 = _0x163554();

      console.log("avaliable cookie ", _0x1b1f63);

      if (_0x1b1f63) {
        await _0x45a98b(1500);

        _0x1f7e15.bind(this)("datadome", _0x1b1f63, this.domain, this.siteOrigin);

        return;
      }

      if (global.dataDomeAttepted) {
        await _0x1f7e15.bind(this)("datadome", '', this.domain, this.siteOrigin, !![]);
        await _0x45a98b(this.monitorDelay);
        return;

        _0x5a14e3(arg_1670);

        while (global.dataDomeAttepted && this.running) {
          await _0x45a98b(50);
        }

        let _0x2f5cbd = _0x163554();

        while (_0x2f5cbd) await _0x1f7e15.bind(this)("datadome", global.dataDomeCookie, this.domain, this.siteOrigin);

        _0x5a14e3(arg_1671);

        return;
      }

      let _0x3e44b2 = _0x517f6d.find(_0x163843 => _0x163843.includes("datadome"));

      if (_0x3e44b2) {
        global.dataDomeAttepted = !![];

        let _0x3055ae = await _0x4717b4.bind(this)(_0x458a1a + "&cid=" + _0x3e44b2.split(';')[0].split("datadome=")[1]);

        if (_0x3055ae) {
          await _0x9bb14e.bind(this)(_0x3055ae, _0x458a1a + "&cid=" + _0x3e44b2.split(';')[0].split("datadome=")[1]);
        }
      }

      return;
    } catch (err) {
      return await _0x45a98b(1000), console.log(err), null;
    }
  };

  const _0x4717b4 = async function (_0xcb7201) {
    const _0x3d7a4a = _0x8044f7;

    if (!this.running) {
      global.dataDomeAttepted = ![];
      return;
    }

    try {
      console.log(_0xcb7201);

      const _0xd960a3 = await _0x35e74e.bind(this)(_0x9a5514);

      let _0x1a4f8b = _0xd960a3.statusCode;
      var arg_1673 = "get captcha status " + _0x1a4f8b;
      console.log(arg_1673);

      var arg_1674 = '[' + new Date().toISOString() + "]: get captchPage status: " + _0x1a4f8b;

      _0x2d2bdc(arg_1674, this.logFilePath);

      if (_0x1a4f8b == 200) {
        let _0x45d354 = _0x4802da.FOOTSITE_DATADOME;
        let _0x287940 = "6LccSjEUAAAAANCPhaM2c-WiRxCZ5CzsjR_vd8uX";

        if (_0xd960a3.body.includes("geetest")) {
          let _0x368ea4 = '';
          _0x45d354 = _0x4802da.FOOTSITE_GEETEST;

          try {
            _0x368ea4 = /challenge: '([a-zA-Z0-9-=_]+)'/.exec(_0xd960a3.body)[1];

            var arg_1679 = '[' + new Date().toISOString() + "]: parsed Challenge: " + _0x368ea4;

            _0x2d2bdc(arg_1679, this.logFilePath);

            console.log(_0x368ea4);
          } catch (err) {
            const _0x16d3fb = "3|4|2|0|1".split('|');

            let _0x52a8c6 = 0;

            _0x5a14e3(arg_1680);

            global.dataDomeAttepted = ![];
            await _0x1f7e15.bind(this)("datadome", '', this.domain, this.siteOrigin, !![]);
            await _0x4327c1.bind(this)();
            return;
          }
        } else {
          try {
            _0x287940 = /'sitekey' : '([a-zA-Z0-9-=_]+)'/.exec(_0xd960a3.body)[1];

            var arg_1681 = '[' + new Date().toISOString() + "]: parsed siteKey: " + _0x287940;

            _0x2d2bdc(arg_1681, this.logFilePath);
          } catch (err) {
            _0x287940 = _0x172aa3.Kjodm;
          }

          _0x45d354 = _0x4802da.FOOTSITE_DATADOME;
        }

        _0x5a14e3(arg_1677);
        let _0x3ebcb7 = null;
        if (_0xd960a3.body.includes("geetest")) {
          _0x3ebcb7 = await _0x153674.bind(this)(_0xcb7201, _0x45d354, _0x287940, '');
        } else {
          let _0x268f32 = _0x153674.bind(this)(_0xcb7201, _0x45d354, _0x287940, '');

          let _0xc2d22e = _0x5e67a9.bind(this)(_0x23da2b.FOOTSITE);

          let _0x2b2b1c = await Promise.race([_0xc2d22e, _0x268f32]);

          if (_0x2b2b1c == null) {
            _0x3ebcb7 = await _0x268f32;
          } else {
            if (_0x2b2b1c.type == "capService") {
              _0x3ebcb7 = _0x2b2b1c.token;

              _0x233257.bind(this)();
            } else {
              _0x3ebcb7 = _0x2b2b1c;
            }
          }
        }

        if (!this.running) {
          return global.dataDomeAttepted = ![], null;
        }

        let _0x1c7986 = _0x15d31b(_0xcb7201, arg_1678, "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36", this.siteOrigin);

        return _0x2d2bdc('[' + new Date().toISOString() + "]: parsed verifyURL: " + _0x1c7986, this.logFilePath), _0x1c7986;
      } else {
        return global.dataDomeAttepted = ![], null;
      }
    } catch (err) {
      return global.dataDomeAttepted = ![], console.log(err), null;
    }
  };

  const _0x31aeee = function (_0x161ec5, _0x44e4bc, _0x1b3954) {
    const _0x52a5ce = _0x8044f7;

    function _0x4acd2e(_0x41c8c1, _0x4b01a7, _0x1da009) {
      const _0x4ce693 = _0x52a5ce;
      this.seed = _0x41c8c1;
      this.currentNumber = _0x41c8c1 % _0x4b01a7;
      this.offsetParameter = _0x4b01a7;
      this.multiplier = _0x1da009;

      if (this.currentNumber <= 0) {
        this.currentNumber += _0x4b01a7;
      }
    }

    _0x4acd2e.prototype.getNext = function () {
      const _0x1f28e1 = _0x52a5ce;
      return this.currentNumber = this.multiplier * this.currentNumber % this.offsetParameter, this.currentNumber;
    };

    var _0x256d80 = [function (_0x33deff, _0x327fe1) {
        const _0x327e86 = _0x52a5ce;
        var _0x20ccff = 26157;
        var _0x56e44d = 0;
        var _0x56f30f = "VEc5dmEybHVaeUJtYjNJZ1lTQnFiMkkvSUVOdmJuUmhZM1FnZFhNZ1lYUWdZWEJ3YkhsQVpHRjBZV1J2YldVdVkyOGdkMmwwYUNCMGFHVWdabTlzYkc5M2FXNW5JR052WkdVNklERTJOMlJ6YUdSb01ITnVhSE0";

        if (_0x1b3954) {
          var _0x52b5fb = 0;
          ;

          for (; _0x52b5fb < _0x56f30f.length; _0x52b5fb += 1 % Math.ceil(1 + 3.1425172 / _0x1b3954.length)) {
            var arg_1685 = _0x56f30f.charCodeAt(_0x52b5fb).toString(2);

            var arg_1686 = _0x20ccff ^ _0x327fe1;
            _0x56e44d += arg_1685 | arg_1686;
          }

          return _0x56e44d;
        }

        return _0x56f30f ^ _0x327fe1;
      }, function (_0x10d32a, _0x1125b1) {
        const _0xba23cd = _0x52a5ce;

        var _0x369e9b = ("en-US".length << Math.max(_0x10d32a, 3)).toString(2),
          _0x1ddff1 = -42,
          _0x561fe4 = 0;

        ;

        for (; _0x561fe4 < _0x369e9b.length; _0x561fe4++) {
          var arg_1687 = _0x369e9b.charCodeAt(_0x561fe4);

          var arg_1689 = _0x561fe4 % 3;
          var arg_1688 = _0x1125b1 << arg_1689;
          _0x1ddff1 += arg_1687 ^ arg_1688;
        }

        return _0x1ddff1;
      }, function (_0x177613, _0xaeaab6) {
        const _0x3798d6 = _0x52a5ce;

        var _0x1a7575 = 0,
          _0x10c8dd = "en-US".substr(0, 2).toLocaleLowerCase() + _0xaeaab6,
          _0x5a6d21 = 0;

        ;

        for (; _0x5a6d21 < _0x10c8dd.length; _0x5a6d21++) {
          var arg_1691 = (_0x1a7575 = ((_0x1a7575 += _0x10c8dd.charCodeAt(_0x5a6d21) << Math.min((_0x5a6d21 + _0xaeaab6) % (1 + _0x177613), 2)) << 3) - _0x1a7575 + _0x10c8dd.charCodeAt(_0x5a6d21)) & _0x1a7575;

          _0x1a7575 = arg_1691 >> _0x5a6d21;
        }

        return _0x1a7575;
      }],
      _0x561069 = new _0x4acd2e(function (_0x4d9ea4) {
        const _0x3ecfdd = _0x52a5ce;

        var _0x403464 = 126 ^ _0x4d9ea4.charCodeAt(0),
          _0x3c4189 = 1;

        ;

        for (; _0x3c4189 < _0x4d9ea4.length; _0x3c4189++) {
          var arg_1697 = _0x4d9ea4.charCodeAt(_0x3c4189);

          var arg_1695 = arg_1697 * _0x3c4189;
          var arg_1698 = _0x3c4189 - 1;

          var arg_1696 = _0x4d9ea4.charCodeAt(arg_1698);

          var arg_1693 = arg_1695 ^ arg_1696;
          var arg_1694 = _0x3c4189 % 2;
          _0x403464 += arg_1693 >> arg_1694;
        }

        return _0x403464;
      }(_0x161ec5), 1723, 7532),
      _0x2b8554 = _0x561069.seed,
      _0x329be0 = 0;

    ;

    for (; _0x329be0 < _0x44e4bc; _0x329be0++) {
      0;
      _0x2b8554 ^= _0x256d80[_0x561069.getNext() % _0x256d80.length](_0x329be0, _0x561069.seed);
    }

    return _0x2b8554;
  };

  const _0x15d31b = function (_0x493a88, _0xf0886b, _0x326398, _0x495b8f) {
    const _0x4feb4d = _0x8044f7;

    try {
      var arg_1700 = _0x493a88.split('?')[1];

      const _0x338261 = new URLSearchParams(arg_1700);

      let _0x3ea101 = _0x338261.get("cid");

      let _0x242d91 = _0x338261.get("initialCid");

      let _0x141462 = _0x338261.get("hash");

      let _0x241eed = _0x338261.get('s');

      let _0x1726ff = null;

      if (_0x3ea101 == null) {
        try {
          var arg_1704 = _0x493a88 + '&';
          _0x3ea101 = /cid=(.*)&/.exec(arg_1704)[1].split('&')[0];
          var arg_1705 = _0x493a88 + '&';
          _0x241eed = /s=(.*)&/.exec(arg_1705)[1].split('&')[0];
          var arg_1706 = _0x493a88 + '&';
          _0x141462 = /hash=(.*)&/.exec(arg_1706)[1].split('&')[0];
        } catch (err) {
        }
      }

      _0x1726ff = _0x3ea101;

      let _0xa6068c = _0x31aeee(_0x3ea101, 10, _0x326398);

      var _0x1086d4 = "https://geo.captcha-delivery.com/captcha/check?";
      var arg_1701 = encodeURIComponent(_0x3ea101);
      _0x1086d4 += "cid=" + arg_1701;
      var arg_1702 = encodeURIComponent(_0x242d91);
      _0x1086d4 += "&icid=" + arg_1702;
      var arg_1703 = encodeURIComponent(_0x1726ff);
      _0x1086d4 += "&ccid=" + arg_1703;
      var arg_1708 = encodeURIComponent(_0xf0886b.tokenInfo.geetestResponse.geetest_challenge);
      _0x1086d4 += "&geetest-response-challenge=" + arg_1708;
      var arg_1709 = encodeURIComponent(_0xf0886b.tokenInfo.geetestResponse.geetest_validate);
      _0x1086d4 += "&geetest-response-validate=" + arg_1709;
      var arg_1710 = encodeURIComponent(_0xf0886b.tokenInfo.geetestResponse.geetest_seccode);
      _0x1086d4 += "&geetest-response-seccode=" + arg_1710;
      return _0x1086d4 += "&hash=" + encodeURIComponent(_0x141462), _0x1086d4 += "&ua=" + encodeURIComponent(_0x326398), _0x1086d4 += "&referer=" + encodeURIComponent(_0x495b8f), _0x1086d4 += "&parent_url=" + encodeURIComponent(_0x493a88), _0x1086d4 += _0x172aa3.cEZSA, _0x1086d4 += "&captchaChallenge=" + encodeURIComponent(_0xa6068c), _0x1086d4 += "&s=" + encodeURIComponent(_0x241eed), _0x1086d4;
    } catch (err) {
      global.dataDomeAttepted = ![];
      console.log(err);
    }
  };

  const _0x9bb14e = async function (_0x1c6d72, _0x368a2e) {
    const _0x5e39a7 = _0x8044f7;

    if (!this.running) {
      global.dataDomeAttepted = ![];
      return;
    }

    try {
      console.log("verify captcha");

      _0x5a14e3(arg_1711);

      const _0x5df7e5 = await _0x35e74e.bind(this)(_0x105592);

      let _0x2ac7bb = _0x5df7e5.statusCode;
      var arg_1712 = "verify captcha status " + _0x2ac7bb;
      console.log(arg_1712);

      var arg_1713 = '[' + new Date().toISOString() + "]: verify Captcha status: " + _0x2ac7bb;

      _0x2d2bdc(arg_1713, this.logFilePath);

      if (_0x2ac7bb == 200) {
        _0x5a14e3(arg_1714);

        var arg_1715 = '[' + new Date().toISOString() + "]: verify Captcha Body: " + _0x5df7e5.body;

        _0x2d2bdc(arg_1715, this.logFilePath);

        let _0x43f602 = JSON.parse(_0x5df7e5.body).cookie;

        let _0xaa3d6c = _0x43f602.split(';')[0].split('=')[0];

        let _0x3fe9b6 = _0x43f602.split(';')[0].split('=')[1];

        global.footsiteDataDomeCookie[_0x3fe9b6] = 1;
        global.dataDomeAttepted = ![];
        await _0x1f7e15.bind(this)("datadome", _0x3fe9b6, this.domain, this.siteOrigin);
        return;
      } else {
        global.dataDomeAttepted = ![];
      }

      return;
    } catch (err) {
      global.dataDomeAttepted = ![];
      console.log(err);
      return;
    }
  };

  const _0x37a847 = async function () {
    const _0xc7962d = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_1717);

      throw "stopped";
    }

    try {
      let _0x46378b = 0;

      let _0x18b031 = ![];

      while (this.running && !_0x18b031) {
        _0x18b031 = await _0x3d31af.bind(this)(_0x46378b);

        if (_0x18b031) {
          return !![];
        }

        _0x46378b++;
        await _0x5fb498(this.monitorDelay);
      }

      if (!this.running) {
        return;
      }

      return !![];
    } catch (err) {
      return await _0x5fb498(this.monitorDelay), _0x37a847.bind(this)();
    }
  };

  const _0x3d31af = async function (_0x300c2c = 0) {
    const _0x196ae5 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_1719);

      throw "stopped";
    }

    if (_0x300c2c == 5) {
      await _0x4327c1.bind(this)();
    }

    _0x5a14e3(arg_1718);

    try {
      let _0x4b6cc3 = null;

      if (this.siteOrigin.includes("footlocker.ca")) {
        _0x4b6cc3 = "/v4";
      } else {
        _0x4b6cc3 = '';
      }

      if (this.useExp2) {
        _0x1cab13.uri = this.siteOrigin + "/apigate" + _0x4b6cc3 + "/session?timestamp=" + Date.now();
        _0x1cab13.headers = {
          'host': this.host,
          'accept': "application/json",
          'accept-language': "en-us",
          'accept-encoding': "gzip, deflate, br",
          'x-fl-app-version': this.appVersion,
          'x-flapi-api-identifier': this.apiIdentification,
          'x-api-key': this.apiKey,
          'user-agent': this.user_agent,
          'x-newrelic-id': this.newrelicId,
          'x-fl-device-id': this.deviceId,
          'x-fl-request-id': _0x28d3a4()
        };
        _0x1cab13.rejectUnauthorized = ![];
      }

      const _0xc78548 = await _0x35e74e.bind(this)(_0x1cab13);

      let _0x2025ec = _0xc78548.statusCode;

      if (_0xc78548.request.uri.href.includes("footlocker.eu")) {
        return await _0x4327c1.bind(this)(), ![];
      }

      if (_0xc78548.body && _0xc78548.body.includes("Your chance at sneaker glory is moments away")) {
        return await _0x406044.bind(this)(), ![];
      }

      if (_0x2025ec == 200) {
        let _0x15cff1 = JSON.parse(_0xc78548.body);

        if (_0x15cff1.data && _0x15cff1.data.csrfToken && _0x15cff1.success) {
          return this.ftlSessionId = _0xc78548.headers["x-flapi-session-id"] ? _0xc78548.headers["x-flapi-session-id"] : this.ftlSessionId, this.x_csrf_token = _0x15cff1.data.csrfToken, !![];
        }
      } else {
        if (_0x2025ec == 403) {
          if (_0xc78548.body.includes("geo.captcha-delivery.com")) {
            _0x5a14e3(arg_1721);

            let _0x21b7ae = JSON.parse(_0xc78548.body);

            return await _0x574f69.bind(this)(_0x21b7ae.url, _0xc78548.headers["set-cookie"]), ![];
          } else {
            return _0x5a14e3({
              'id': this.id,
              'status': "Init Session (" + _0x2025ec + "), Retry",
              'statusCode': 4,
              'groupId': this.groupId
            }), await _0x4327c1.bind(this)(), ![];
          }
        } else {
          if (_0x2025ec == 503 || _0x2025ec == 529) {
            return await _0x5fb498(this.monitorDelay), await _0x406044.bind(this)(), ![];
          } else {
            if (_0x2025ec == 429 || _0x2025ec == 430) {
              return _0x5a14e3({
                'id': this.id,
                'status': "Init Session (" + _0x2025ec + "), Retry",
                'statusCode': 4,
                'groupId': this.groupId
              }), ![];
            }
          }
        }
      }

      return _0x5a14e3({
        'id': this.id,
        'status': "Init Session Failed (" + _0x2025ec + ')',
        'statusCode': 4,
        'groupId': this.groupId
      }), _0x2d2bdc('[' + new Date().toISOString() + "]: Init Session Status: " + _0x2025ec, this.logFilePath), ![];
    } catch (err) {
      return _0x2d2bdc('[' + new Date().toISOString() + "]: Init Session Failed " + err, this.logFilePath), _0x5a14e3({
        'id': this.id,
        'status': "Init Session Failed, Retry",
        'statusCode': 4,
        'groupId': this.groupId
      }), await _0x4327c1.bind(this)(), ![];
    }
  };

  const _0x406044 = async function (_0x11abbf = ![]) {
    const _0x486383 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_1724);

      throw "stopped";
    }

    try {
      let _0x3dc561 = ![];

      while (this.running && !_0x3dc561) {
        _0x3dc561 = await _0x4621b9.bind(this)(_0x11abbf);
        await _0x5fb498(0);
      }

      if (!this.running) {
        return;
      }

      return !![];
    } catch (err) {
      return await _0x5fb498(this.monitorDelay), _0x406044.bind(this)(_0x11abbf);
    }
  };

  const _0x4621b9 = async function (_0x166de9 = ![]) {
    const _0xf1a0fb = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_1725);

      throw "stopped";
    }

    try {
      if (this.useExp2) {
        _0x431b82.uri = this.siteOrigin + "/apigate/session?timestamp=" + Date.now();
        _0x431b82.method = _0x172aa3.UJLtQ;
        _0x431b82.headers = {
          'host': this.host,
          'accept': "application/json",
          'accept-language': "en-us",
          'accept-encoding': "gzip, deflate, br",
          'x-fl-app-version': this.appVersion,
          'x-flapi-api-identifier': this.apiIdentification,
          'x-api-key': this.apiKey,
          'user-agent': this.user_agent,
          'x-newrelic-id': this.newrelicId,
          'x-fl-device-id': this.deviceId,
          'x-fl-request-id': _0x28d3a4()
        };
        _0x431b82.rejectUnauthorized = ![];
      }

      const _0x2dfbf4 = await _0x35e74e.bind(this)(_0x431b82);

      let _0x3366fe = _0x2dfbf4.statusCode;

      if (_0x2dfbf4.request.uri.href.includes("footlocker.eu")) {
        return await _0x4327c1.bind(this)(), await _0x5fb498(this.monitorDelay), ![];
      }

      var arg_1726 = '[' + new Date().toISOString() + "]: Poll Queue " + _0x3366fe + ", set-cookie: " + JSON.stringify(_0x2dfbf4.headers["set-cookie"]);

      _0x2d2bdc(arg_1726, this.logFilePath);

      let _0xe5fceb = await _0x32fa4c.bind(this)();

      if (_0xe5fceb) {
        if (_0x166de9 && _0xe5fceb == "Perm") {
          return await _0x5fb498(this.queueWaitTime), !![];
        }

        return await _0x5fb498(this.queueWaitTime), ![];
      } else {
        return !![];
      }
    } catch (err) {
      const _0x5445e1 = "2|1|4|3|0".split('|');

      let _0x29ca9a = 0;
      console.log(err.message);
      var arg_1730 = '[' + new Date().toISOString() + "]: Check Queue Failed " + err;

      _0x2d2bdc(arg_1730, this.logFilePath);

      _0x5a14e3(arg_1731);

      await _0x5fb498(this.errorDelay);
      return ![];
    }
  };

  const _0x12e3f2 = async function () {
    const _0x329069 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_1732);

      throw "stopped";
    }

    try {
      let _0x31563b = ![];

      while (this.running && !_0x31563b) {
        _0x31563b = await _0x39cfc0.bind(this)();

        if (_0x31563b) {
          return !![];
        }

        await _0x5fb498(this.monitorDelay);
      }

      return !![];
    } catch (err) {
      return await _0x5fb498(this.monitorDelay), _0x12e3f2.bind(this)();
    }
  };

  const _0x39cfc0 = async function (_0x274869 = 0) {
    const _0x3511d4 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_1734);

      throw "stopped";
    }

    _0x5a14e3(arg_1733);

    try {
      var arg_1735 = Math.random();

      let _0x32ae52 = arg_1735 > 0.2;

      if (this.useExp2) {
        _0x579ad2.uri = this.siteOrigin + "/apigate/products/pdp/" + this.productPID + "?timestamp=" + Date.now();
        _0x579ad2.headers = {
          'host': this.host,
          'accept': "application/json",
          'accept-language': "en-us",
          'accept-encoding': "gzip, deflate, br",
          'x-fl-app-version': this.appVersion,
          'x-flapi-api-identifier': this.apiIdentification,
          'x-api-key': this.apiKey,
          'user-agent': this.user_agent,
          'x-newrelic-id': this.newrelicId,
          'x-fl-device-id': this.deviceId,
          'x-fl-request-id': _0x28d3a4()
        };
        _0x579ad2.rejectUnauthorized = ![];
      }

      const _0x48d1fa = await _0x35e74e.bind(this)(_0x579ad2);

      let _0x3a7ab1 = _0x48d1fa.statusCode;

      var arg_1736 = '[' + new Date().toISOString() + "]: get size pdp statusCode: " + _0x3a7ab1 + " cache: " + _0x48d1fa.headers["x-cache"];

      _0x2d2bdc(arg_1736, this.logFilePath);

      if (_0x3a7ab1 != 200) {
        if (_0x3a7ab1 == 403) {
          if (_0x48d1fa.body.includes("geo.captcha-delivery.com")) {
            _0x5a14e3(arg_1738);

            let _0x227c92 = JSON.parse(_0x48d1fa.body);

            return await _0x574f69.bind(this)(_0x227c92.url, _0x48d1fa.headers["set-cookie"]), ![];
          } else {
            return _0x5a14e3({
              'id': this.id,
              'status': "Getting Size " + _0x3a7ab1 + ", Retry",
              'statusCode': 4,
              'groupId': this.groupId
            }), await _0x4327c1.bind(this)(), ![];
          }
        } else {
          if (_0x3a7ab1 == 503 || _0x3a7ab1 == 529) {
            return await _0x5fb498(this.monitorDelay), await _0x406044.bind(this)(), ![];
          } else {
            if (_0x3a7ab1 == 400) {
              if (global.footsiteVariants[this.siteName] && global.footsiteVariants[this.siteName][this.productPID] && global.footsiteVariants[this.siteName][this.productPID].variants.length > 0) {
                return this.variants = global.footsiteVariants[this.siteName][this.productPID].variants, this.checkoutInfo.imageURL = global.footsiteVariants[this.siteName][this.productPID].imageURL, this.checkoutInfo.productName = global.footsiteVariants[this.siteName][this.productPID].productName, !![];
              }

              return _0x5a14e3({
                'id': this.id,
                'status': "Waiting For Restock",
                'statusCode': 1,
                'groupId': this.groupId
              }), ![];
            } else {
              if (_0x3a7ab1 == 404) {
                return _0x5a14e3({
                  'id': this.id,
                  'status': "Item Not Found",
                  'statusCode': 4,
                  'groupId': this.groupId
                }), this.running = ![], ![];
              } else {
                if (_0x3a7ab1 == 429 || _0x3a7ab1 == 430 || _0x3a7ab1 == 550) {
                  return _0x5a14e3({
                    'id': this.id,
                    'status': "Getting Size (" + _0x3a7ab1 + "), Retry",
                    'statusCode': 4,
                    'groupId': this.groupId
                  }), ![];
                } else {
                  if (_0x3a7ab1 == 302) {
                    return _0x2d2bdc('[' + new Date().toISOString() + "]: get size status 302: " + _0x48d1fa.headers.request.uri, this.logFilePath), await _0x4327c1.bind(this)(), ![];
                  } else {
                    return _0x5a14e3({
                      'id': this.id,
                      'status': "Getting Size Error (" + _0x3a7ab1 + "), Retry",
                      'statusCode': 4,
                      'groupId': this.groupId
                    }), ![];
                  }
                }
              }
            }
          }
        }
      }

      this.startTime = Date.now();

      const _0x40c507 = JSON.parse(_0x48d1fa.body);

      try {
        let _0x1201c0 = _0x40c507.images[0].variations[0].url;
        this.checkoutInfo.imageURL = _0x40c507.images[0].variations.filter(_0xfb5033 => _0xfb5033.format == "zoom")[0].url || _0x1201c0;
        this.checkoutInfo.productName = _0x40c507.name;
      } catch (err) {
      }

      let _0x1af4a7 = _0x40c507.variantAttributes.find(_0x50d643 => _0x50d643.sku == this.productPID).code;

      this.variants = _0x40c507.sellableUnits.filter(_0x924c9d => _0x1af4a7 === _0x924c9d.attributes[1].id);

      if (!global.userFootsiteVariants[this.siteName]) {
        global.userFootsiteVariants[this.siteName] = {};
      }

      if (!global.userFootsiteVariants[this.siteName][this.productPID]) {
        global.userFootsiteVariants[this.siteName][this.productPID] = {
          'variants': this.variants,
          'imageURL': this.checkoutInfo.imageURL,
          'productName': _0x40c507.name
        };
      }

      let _0x31db26 = new Date(_0x40c507.variantAttributes[0].skuLaunchDate).getTime();

      var arg_1737 = Date.now();

      if (_0x31db26 > arg_1737) {
        _0x5a14e3(arg_1742);

        while (_0x31db26 - Date.now() > 30 * 1000) {
          await _0x5fb498(10000);
          await _0x37a847.bind(this)();
          var arg_1744 = Date.now();

          if (_0x31db26 - arg_1744) {
            _0x5a14e3(arg_1745);
          }
        }

        var arg_1743 = Date.now();

        let _0x4d7e7b = _0x31db26 - arg_1743;

        if (_0x4d7e7b > 0) {
          await _0x5fb498(_0x4d7e7b);
        }
      }

      return !![];
    } catch (err) {
      return console.log(err), _0x5a14e3({
        'id': this.id,
        'status': "Getting Size Error, Retry",
        'statusCode': 4,
        'groupId': this.groupId
      }), ![];
    }
  };

  const _0x3bcf8c = ["dfw18681", "mia11376", "iah17239", "cgh11167", "bwi5162", "mia11379", "wdc5547", "labsjc3923", "sjc10065", "akl10320", "hnd18733", "bos4641", "bos4645", "bos4636", "fty21371", "fty13720", "fty21337", "jax20947", "chi21143", "bom4741", "gru17149", "jax20932", "mel11256", "pdk17840", "mdw17325", "pdk17872", "mdw17378", "wdc5570", "fty21325", "fty13728", "fty13727", "fty13725", "dca17738", "fty13724", "fty13721", "fty21331", "fty21330", "fty21369", "fty21340", "lga21940", "pdk11778", "bos4621", "pdk17834", "pdk11734", "pdk11776", "mia11348", "mia11323", "wdc5543", "labsjc3927", "ewr18158", "qpg1249", "osl6535", "dal21279", "osl6530", "osl6522", "mia11327", "osl6528", "mia11337", "pdk17865", "mdw17354", "mia11372", "pdk11764", "jax20924", "tyo11945", "sin18047", "dfw18662", "den8267", "yul12824", "mci5935", "per12622", "per12620", "mel11262", "sin18035", "mel11245", "iah17220", "mel11257", "pwk4981", "lax10638", "dal21266", "dal21247", "bur17520", "pao17466", "yyz4532", "lax10651", "bwi5129", "fty21381", "pdk17829", "fty21359", "fty21380", "fty21355", "xsp21447", "sna10731", "lax10682", "bwi5060", "syd10130", "maa10238", "dal21259", "maa10237", "maa10248", "cmh21537", "maa10231", "sin18030", "cmh21532", "msp11883", "sin18038", "bwi5043", "sin18048", "dca17769", "sin18041", "dca17760", "sin18025", "bwi5172", "dca17744", "hnd18742", "dca17728", "dca17731", "qpg1231", "dca17722", "fty21352", "mia11354", "pao17463", "wlg10427", "ewr22121", "wlg10421", "mdw17370", "dfw18666", "mdw17365", "wlg10420", "dfw18628", "lax10669", "mia11331", "msp11848", "mia11353", "msp11820", "msp11861", "msp11821", "dca17759", "fty21334", "syd10183", "msp11833", "msp11878", "dca17752", "msp11862", "msp11875", "msp11873", "pwk4980", "pwk4970", "pwk4965", "pwk4926", "pwk4949", "pwk4944", "lim12126", "mdw17353", "sjc10068", "pao12027", "wdc5520", "gru17122", "ord1743", "pwk12242", "mdw17330", "dal21221", "xsp21442", "ord1736", "dal21234", "dal21240", "lax10657", "dal21222", "mdw17379", "mdw17361", "wdc5553", "wdc5528", "pwk12232", "pdk17848", "bwi5135", "wdc5748", "bwi5058", "bwi5040", "bwi5028", "bwi5044", "iah17258", "pwk12251", "pdk17844", "itm18843", "jax20950", "pdk17850", "bwi5177", "wdc5779", "maa10246", "wdc5732", "sea4479", "iah17278", "pdk11754", "qpg1223", "pdk17855", "wdc5575", "wdc5540", "wdc5737", "wdc5762", "iah17275", "bur17582", "wdc5725", "iah17270", "mia11371", "ewr18129", "wdc5554", "mia11378", "lim12122", "dal21257", "tyo11921", "den8237", "lim12121", "tyo11952", "den8229", "xsp21444", "syd10178", "stl4825", "lga21976", "syd10151", "iah17250", "mci5938", "qpg1243", "qpg1245", "pdk11721", "qpg1256", "qpg1283", "pdk11763", "gru17130", "mdw17327", "sin18049", "msp11850", "pao17434", "jax20935", "lax10664", "lax10653", "lga21981", "bwi5078", "den8256", "gru17139", "del21728", "den8276", "chi21182", "syd10162", "wdc5557", "dca17732", "bog6422", "wdc5723", "yul12820", "bwi5125", "bos4665", "yul12826", "yyz4524", "ewr18169", "iah17265", "pao17470", "akl10324", "hnd18741", "bos4668", "lga21935", "osl6524", "xsp21421", "tyo11956", "dal21251", "bos4642", "mel11271", "dfw18678", "cmh21520", "qpg1226", "yyz4535", "bwi5024", "mel11252", "del21725", "mia11332", "den8220", "sna10750", "sin18044", "yvr1520", "del21738", "yyz4550", "lga21967", "del21743", "yvr1531", "pao17439", "syd10159", "del21744", "pao17437", "jnb7022", "pao17438", "wdc5533", "sin18021", "yvr1529", "wdc5573", "cmh21540", "bos4629", "pwk12234", "fty21379", "den8239", "cgh11180", "dca17754", "bos4670", "qpg1253", "dca17746", "syd10143", "den8258", "xsp21448", "fty21382", "bwi5053", "pdk11737", "pdk11769", "pdk11758", "cgh11181", "jax20928", "qpg1265", "dca12921", "ewr18168", "tyo11951", "ewr22125", "mel11248", "ewr18155", "wdc5731", "fty21351", "mia11351", "cgh11122", "dca17772", "wdc5741", "cgh11155", "bwi5149", "ewr18153", "chi21165", "hnd18738", "fty21348", "fty13723", "lax10666", "fty21324", "stl4844", "pwk4978", "stp9226", "bwi5159", "bwi5066", "cgh11145", "den8225", "gig17028", "qpg1233", "qpg1275", "dca17734", "hnd18744", "pdk17835", "itm18844", "maa10251", "lga21979", "labsjc3924", "cwb20526", "cwb20523", "del21730", "bur17525", "mdw17345", "fty21343", "pao17469", "pao17462", "syd10144", "pao17458", "cwb20527", "bur17526", "sea4427", "gru17142", "pwk4964", "iah17260", "pwk4975", "pdx12324", "itm18835", "yyz4540", "pdk17842", "den8282", "bwi5152", "lax10658", "msp11839", "yyz4546", "mci5920", "dca12923", "pao17429", "lga21944", "fty21344", "mel11236", "ewr18132", "pwk12258", "mdw17383", "sna10725", "wdc5583", "bom4749", "qpg1244", "xsp21438", "bur6129", "xsp21441", "bur17558", "mia11360", "tyo11942", "syd10180", "iah17259", "jnb7020", "syd10181", "jnb7023", "lga21966", "mel11250", "jax20925", "wdc5564", "mel11280", "sea4456", "qpg1259", "lga21965", "msp11834", "del21729", "cgh11174", "ewr18126", "fty21321", "ewr22123", "pwk4950", "syd10149", "wdc5780", "wdc5521", "wdc5524", "wdc5781", "wdc5765", "wdc5582", "iah17243", "cwb20525", "pao12022", "wdc5550", "wdc5560", "cpt19521", "den8245", "mel11267", "qpg1236", "qpg1255", "mci5941", "qpg1260", "qpg1239", "qpg1237", "qpg1254", "qpg1241", "wdc5760", "qpg1246", "tyo11970", "qpg1266", "qpg1278", "qpg1221", "wdc5777", "qpg1271", "cwb20524", "dfw18626", "cwb20520", "cwb20521", "hnd18720", "eze19323", "dfw18658", "fty21361", "eze19327", "mci5937", "eze19321", "eze19324", "bwi5048", "eze19326", "mci5944", "bwi5123", "stl4823", "eze19320", "ewr18125", "sjc10020", "bwi5124", "sjc10021", "pwk12252", "mci5943", "pwk4952", "ord1738", "msp11856", "dal21269", "iah17248", "gig17025", "gig17031", "maa10222", "per12623", "per12625", "per12621", "per12628", "pwk4927", "pwk4961", "mel11225", "pdk17874", "cmh21535", "pdk11761", "mel11221", "mel11249", "pdk11720", "bur17537", "chi21142", "mel11276", "pdk11738", "pdk17881", "mel11244", "pwk12253", "pdk17873", "pdk11765", "pdk17852", "ord1725", "syd10124", "pdk11732", "syd10129", "pdk17871", "syd10156", "pdk17828", "pdk11731", "syd10173", "mdw17324", "syd10164", "pdk17845", "mdw17336", "mdw17350", "chi21174", "pdk17821", "pdk17832", "mel11223", "chi21124", "chi21168", "mia11326", "mia11362", "mia11338", "mia11352", "mia11335", "mia11328", "den8269", "mia11369", "lax10623", "dfw18680", "ewr18140", "wdc5773", "den8259", "lga21928", "sea4426", "sea4431", "hkg17920", "sea4443", "sea4477", "mel11240", "mia11321", "mia11347", "bur17563", "dca17761", "akl10322", "hnd18728", "chi21157", "chi21181", "chi21160", "hnd18734", "lax10675", "chi21125", "lax10637", "chi21137", "tyo11930", "lax10676", "dfw18621", "dfw18652", "lax10679", "lax10667", "lax10633", "dal21280", "dal21260", "dal21235", "dal21232", "dal21236", "dal21261", "dal21227", "dal21238", "wdc5739", "wdc5571", "pdk17851", "lim12127", "wdc5728", "wdc5548", "wdc5742", "chi21172", "wdc5569", "wdc5766", "wdc5534", "wdc5768", "wdc5750", "syd10171", "wdc5526", "hnd18740", "sin18040", "sin18031", "mdw17320", "sin18043", "sin18032", "chi21159", "sin18045", "chi21171", "sin18042", "sin18023", "chi21177", "sin18026", "sin18020", "den8242", "tyo11950", "sin18051", "tyo11981", "tyo11975", "bog6421", "tyo11933", "tyo11967", "dal21245", "tyo11923", "tyo11926", "dal21230", "tyo11938", "dal21243", "dal21255", "bwi5082", "bwi5057", "bwi5020", "iah1420", "wdc5770", "lax10650", "lga13627", "lga21929", "lga21922", "lga21945", "lga21931", "lga21974", "lga21970", "lga21975", "bne12527", "lga21932", "lga21968", "lga21934", "lga21977", "lga21983", "lga21926", "lga21941", "lga21933", "lga21927", "lga21921", "syd10175", "pwk4938", "lga21923", "den8230", "pdk17822", "pwk4925", "bos4634", "ord1730", "eze19322", "ord1731", "mia11329", "pdk17878", "dca12929", "mel11263", "bos4664", "bwi5182", "bom4721", "mdw17349", "dca17747", "pwk12230", "ewr22127", "bwi5076", "bwi5073", "maa10244", "pdk17882", "dfw18622", "mia11381", "mia11330", "chi21136", "mel11227", "wdc5563", "cgh11161", "yul12829", "bos4683", "cgh11142", "pwk12272", "mel11277", "pwk12279", "msp11865", "cgh11162", "syd10122", "syd10146", "msp11838", "fty21350", "pwk12235", "ewr18124", "mel11229", "bos4628", "lax10640", "bur17579", "osl6521", "syd10166", "pwk12255", "bom4751", "dal21253", "hnd18730", "den8272", "gig17032", "tyo11927", "mia11380", "dca17730", "del21731", "wdc5759", "bwi5120", "bwi5121", "pao17451", "dal21239", "pwk12246", "fty21360", "mia11333", "lga21972", "den8238", "bwi5047", "iah1422", "bom4740", "sjc10064", "ord1740", "mia11320", "pao17435", "wdc5552", "stl4840", "bur17565", "sna10739", "sna10735", "den8279", "den8240", "hnd18721", "sea4434", "stl4838", "sea4475", "wdc5726", "pwk4931", "xsp21427", "ord1746", "bwi5166", "sna10748", "bur17543", "sjc10042", "dca17764", "hnd18736", "del21745", "sea4474", "gru17125", "chi21152", "iah17225", "itm18822", "itm18847", "bwi5158", "pwk12227", "iah1428", "pao12026", "pao17436", "xsp21432", "stl4829", "bog6432", "stl4831", "dfw18675", "mia11350", "pdx12320", "bwi5169", "iah17262", "sna10744", "tyo11980", "gru17146", "itm18848", "bos4659", "qpg1227", "wdc5783", "lga21957", "fty21378", "den8255", "sjc10038", "sjc10059", "sjc10029", "pdk17880", "wdc5578", "pao17472", "cmh21526", "pao17430", "fty21367", "fty21342", "bos4660", "ord1732", "hnd18746", "ord1726", "ord1724", "bne7723", "bne7721", "bne12529", "bom4734", "mdw17360", "msp11860", "tyo11924", "bom4729", "den8231", "wdc5744", "lax10656", "xsp21449", "sna10746", "lax10648", "bne12528", "bne12522", "syd10170", "lax10636", "chi21158", "den8270", "bwi5148", "labsjc3926", "lax10622", "yyz4530", "yyz4548", "yyz4533", "bur17575", "bur17524", "bos4643", "syd10142", "ewr22122", "mdw17375", "den8247", "maa10236", "den8221", "den8226", "dal21224", "bog6433", "sea4429", "wdc5738", "lax10663", "itm18820", "bur17538", "lax10646", "cgh11146", "mel11272", "den8252", "wdc5747", "den8250", "den8234", "sjc10030", "del21748", "del21721", "dfw18664", "den8253", "bom4724", "itm18836", "lga13624", "lga13623", "dfw18682", "cmh21548", "dca17724", "phx12424", "qpg1276", "dfw18624", "dca17742", "dfw18627", "bom4728", "chi21131", "ewr18164", "pdk11730", "lga21958", "pao17426", "yyz4539", "bog6434", "syd10138", "msp11852", "sjc10062", "mdw17326", "iah17276", "bwi5174", "den8254", "gru17123", "itm18839", "sea4423", "den8233", "cgh11148", "bwi5056", "cgh11166", "bur17560", "chi21170", "pao12023", "bos4649", "lax10670", "bog6431", "bom4745", "lax10644", "lim12128", "lga21949", "lga21964", "bwi5136", "lga21937", "cgh11130", "cgh11149", "bos4663", "bos4655", "mel11228", "bos4669", "lga21960", "pdk11762", "mdw17368", "sjc10052", "pdk17863", "sjc10071", "pdk17825", "syd10123", "yul12821", "den8281", "dfw18638", "bne12520", "itm18829", "pdk11766", "stl4843", "mdw17328", "mel11233", "msp11822", "wlg10424", "sjc10069", "bwi5030", "lax10628", "sjc10024", "sea4483", "stl4836", "pao12028", "ord1727", "yvr1522", "yvr1530", "chi21155", "stp9220", "stl4851", "bos4675", "dca17721", "ewr18145", "chi21120", "ewr18150", "stl4839", "stl4826", "pao12021", "dca17748", "sna10738", "iah17224", "dfw18643", "cmh21528", "dal21275", "mia11365", "mdw17356", "stl4822", "gig17020", "mdw17333", "iah17230", "sna10728", "wdc5546", "iah17234", "fty13726", "iah17223", "bom4736", "lax10627", "cgh11138", "tyo11932", "lga21939", "tyo11954", "tyo11969", "lga13628", "chi21132", "wdc5745", "bur17540", "iah17261", "wdc5523", "bur17581", "dca12928", "mel11242", "pwk4947", "sea4422", "sea4441", "iah17226", "iah17256", "sin18046", "cmh21550", "syd10174", "bos4662", "mdw17344", "bos4620", "bur6122", "bur17580", "den8273", "akl10327", "ewr18152", "den8278", "den8264", "sjc10026", "bos4622", "mel11283", "cgh11151", "maa10245", "qpg1240", "mia11355", "syd10168", "sjc10047", "itm18850", "syd10176", "den8243", "jax20951", "mia11342", "pwk4954", "fty13722", "sjc10051", "fty21323", "ord1739", "dca17745", "del21732", "ord1742", "ord1733", "bog6429", "cmh21541", "pdk11733", "pao17455", "pdk17879", "sjc10070", "sna10720", "mci5923", "sea4470", "xsp21446", "bur17572", "dca17735", "sjc10078", "den8223", "stl4837", "sea4448", "tyo11968", "cgh11132", "pwk12281", "sna10751", "dca17757", "pdk11745", "iah17222", "bur17529", "pwk4977", "bur17583", "mel11237", "iah17266", "den8275", "sin18033", "den8232", "dca17762", "mel11282", "jax20929", "jax20936", "jax20921", "fty21363", "fty21338", "bos4656", "fty21354", "pwk4928", "mdw17346", "fty21349", "pwk4934", "hkg17925", "jax20943", "dfw18635", "jax20945", "wdc5771", "pao17440", "hkg17926", "dfw18660", "bwi5038", "bwi5079", "bur17556", "bur17527", "bos4650", "bom4720", "pdk11771", "msp11879", "pwk12237", "wdc5581", "pdk17849", "cgh11135", "itm18837", "pwk12220", "cgh11147", "iah1423", "cgh11153", "jnb7026", "dfw18631", "dfw18625", "mel11253", "dfw18648", "maa10243", "lax10673", "dfw18657", "lax10626", "msp11872", "msp11826", "sea4450", "sjc10054", "sjc10075", "mci5924", "sjc10074", "ewr18141", "ewr18170", "bwi5145", "dal21268", "gru17128", "gru17137", "wdc5756", "pwk4967", "stl4821", "hkg17922", "tyo11944", "pwk4933", "tyo11965", "bos4644", "scl19423", "mci5945", "ewr18131", "mdw17363", "qpg1251", "akl10333", "dfw18642", "tyo11963", "dca17726", "dfw18669", "bwi5023", "pwk12265", "pwk12223", "ewr18160", "ewr18173", "ewr18128", "ewr22128", "ewr18138", "yyz4522", "yyz4541", "maa10233", "yyz4520", "pdk11739", "wdc5729", "scl19427", "msp11841", "bur17522", "fty21373", "osl6533", "ewr18146", "chi21156", "ewr18148", "eze19325", "fty21335", "ewr22124", "dca17773", "pdk11740", "wdc5555", "pao17456", "tyo11940", "wdc5775", "msp11858", "pao17433", "mci5942", "iah17281", "iah17274", "ewr18130", "pwk12270", "lax10642", "yyz4531", "yyz4545", "mia11346", "sea4464", "mel11238", "mel11222", "pwk4973", "iah17252", "mel11231", "mel11261", "itm18828", "maa10224", "per12627", "itm18823", "cmh21529", "itm18830", "per12626", "mia11361", "itm18846", "mia11370", "pao17428", "stl4824", "per12629", "maa10234", "mci5929", "mci5932", "mci5934", "mci5950", "dal21267", "bwi5071", "dal21271", "chi21149", "pao17467", "mia11345", "mia11377", "pdk11781", "bwi5156", "bwi5065", "cgh11141", "msp11843", "xsp21450", "qpg1232", "iah17251", "syd10141", "cgh11163", "cgh11182", "itm18824", "cgh11168", "ewr18162", "itm18845", "sea4463", "itm18821", "mci5926", "dal21254", "pwk4922", "pdk17861", "dca17749", "pdk17869", "scl19421", "msp11836", "bwi5046", "bwi5035", "bwi5072", "dfw18670", "pao17446", "dfw18671", "pao17431", "dfw18672", "pao17443", "pao17442", "pao17471", "pao12025", "jnb7021", "pao17475", "dfw18673", "dfw18674", "dfw18637", "jnb7027", "dfw18653", "dfw18640", "jax20942", "stp9224", "yul12827", "bwi5127", "stp9225", "stp9221", "sea4447", "cgh11126", "maa10223", "mia11383", "mia11375", "mia11336", "mia11357", "mia11341", "mia11356", "mia11324", "mia11358", "mia11340", "mia11344", "mia11368", "mia11359", "pao17454", "pao17432", "pao17473", "pao17447", "pao17465", "pao12029", "pao12024", "qpg1225", "qpg1258", "pao12020", "lax10668", "lax10625", "bwi5075", "phx12428", "dca17763", "phx12429", "phx12421", "phx12427", "phx12422", "phx12423", "mel11239", "mel11265", "phx12420", "phx12425", "qpg1281", "tyo11960", "bur17523", "cmh21539", "tyo11946", "pwk12259", "ewr18149", "ewr18143", "yvr1534", "chi21179", "chi21178", "chi21141", "chi21147", "gig17023", "chi21130", "chi21167", "gig17035", "chi21145", "gig17033", "chi21154", "chi21128", "chi21180", "chi21164", "chi21148", "chi21134", "chi21162", "chi21183", "chi21146", "chi21139", "chi21123", "chi21176", "chi21173", "chi21129", "chi21126", "chi21151", "chi21161", "mdw17372", "mdw17359", "den8228", "mdw17367", "mdw17376", "mdw17321", "mdw17339", "mdw17355", "mdw17352", "mdw17335", "mdw17351", "mdw17382", "mdw17323", "mdw17343", "mdw17374", "mdw17377", "del21751", "mdw17362", "pdx12329", "sea4436", "mdw17366", "bos4651", "jax20933", "sea4430", "jax20927", "lim12124", "sea4458", "jax20920", "jax20930", "yyz4525", "cgh11124", "mel11278", "bos4631", "qpg1277", "akl10323", "pwk4932", "syd10160", "akl10329", "bwi5074", "pwk4940", "syd10157", "fty21328", "bwi5034", "bur17557", "lax10683", "xsp21439", "jax20931", "wdc5722", "xsp21437", "bom4748", "msp11844", "maa10230", "dca17739", "fty21383", "bwi5161", "pdk11735", "bom4726", "pwk12239", "sea4433", "pdk17833", "gru17141", "gru17140", "bom4744", "mel11247", "wdc5544", "per7620", "pdk11757", "wdc5767", "yyz4538", "syd10135", "dal21277", "maa10242", "wdc5757", "chi21144", "fty21376", "bwi5157", "cmh21547", "bur17578", "chi21135", "bwi5141", "den8235", "pwk4960", "pao17423", "bwi5077", "pwk4971", "qpg1279", "mdw17342", "pao17445", "syd10126", "pdk17868", "bwi5137", "msp11877", "hnd18737", "hnd18747", "pdk17836", "sjc10072", "dfw18679", "mia11363", "cmh21530", "dfw18639", "wdc5721", "mci5948", "bos4658", "dal21233", "wdc5577", "stl4847", "bos4626", "sin18034", "pwk12248", "del21749", "bwi5132", "lck10922", "pwk12229", "sjc10056", "pwk12257", "mci5951", "msp11857", "jnb7024", "mia11339", "pdx12327", "cgh11156", "qpg1248", "bur17570", "bwi5165", "bur17574", "cgh11178", "ewr18172", "pdk11753", "den8257", "cgh11159", "sjc10063", "del21737", "yyz4549", "lga21978", "pwk12263", "mia11349", "qpg1262", "sea4451", "hnd18732", "pwk4923", "sea4478", "itm18838", "pwk12233", "bos4679", "pwk4943", "syd10137", "bwi5133", "pwk12228", "pdk17831", "lga21920", "lga21938", "wdc5538", "sjc10082", "pwk12260", "sea4459", "bur17536", "sna10727", "iah17249", "wdc5572", "del21742", "dca17774", "den8263", "itm18834", "tyo11964", "iah17257", "bwi5055", "bwi5140", "hnd18729", "dal21258", "bur17559", "dfw18683", "sjc10040", "bwi5171", "del21736", "stl4841", "akl10328", "fty21370", "mel11279", "dca17766", "bur17532", "bne12523", "bos4646", "iah17238", "wdc5740", "bwi5176", "dal21281", "iah17221", "lax10624", "hnd18725", "hnd18745", "pwk12276", "syd10150", "sea4440", "hkg17928", "itm18832", "den8283", "cgh11171", "msp11827", "dca17725", "ewr18139", "stl4832", "qpg1242", "lax10655", "dca17777", "dfw18659", "bur6127", "sna10730", "gru17151", "cpt19520", "dal21256", "wdc5734", "bur17531", "bos4673", "pao17453", "sjc10066", "den8246", "mel11254", "bwi5050", "itm18831", "pdk11749", "bos4632", "pwk4948", "hkg17933", "bom4725", "bur17552", "ewr18120", "yyz4529", "lga13622", "iah17233", "bos4652", "dal21242", "bwi5067", "sjc10055", "syd10155", "pdk11770", "dfw18632", "mia11334", "del21750", "labsjc3920", "bwi5126", "den8249", "qpg1264", "wdc5549", "iah17272", "qpg1272", "gru17147", "syd10145", "bos4625", "sjc10041", "pwk12264", "sna10724", "mci5931", "msp11828", "iah17255", "maa10247", "syd10169", "bog6423", "wlg10426", "tyo11974", "dca17779", "dal21276", "gig17026", "yyz4526", "wdc5565", "stp9222", "dal21220", "dfw18633", "pdx12323", "bog6430", "pdx12328", "pwk12238", "mel11230", "bur17555", "pwk12245", "bur17546", "pdk17867", "pdk17876", "sjc10053", "bwi5042", "pwk12278", "scl19424", "cgh11137", "wdc5753", "del21740", "dca17727", "dal21264", "lga21950", "bwi5036", "bwi5031", "sjc10077", "itm18840", "qpg1247", "ewr18166", "lga21959", "bwi5069", "ewr18123", "lax10620", "pdk11727", "sea4446", "mia11322", "bwi5068", "iah17241", "pdk17846", "wdc5537", "pwk4946", "fty21362", "mdw17322", "cgh11120", "pdk11755", "dca17758", "qpg1261", "lax10678", "lax10641", "qpg1273", "bwi5061", "syd10179", "ewr22120", "wdc5527", "dfw18636", "akl10335", "qpg1250", "cmh21521", "iah17280", "gru17127", "pwk12225", "ord1744", "chi21163", "wdc5772", "bos4667", "del21746", "dal21248", "bos4674", "lim12123", "bwi5025", "msp11871", "yyz4527", "mdw17357", "bos4640", "mdw17337", "den8277", "den8271", "wdc5529", "yvr1532", "tyo11934", "iah17229", "gru17134", "bos4623", "bwi5139", "sna10742", "bwi5064", "sea4438", "bwi5027", "den8268", "sjc10060", "fty21377", "xsp21428", "bom4722", "jax20944", "iah17253", "syd10177", "pdk17854", "maa10227", "wdc5579", "sjc10083", "pwk4924", "bur17551", "bwi5175", "pdk11741", "bur17577", "dca17776", "iah17254", "mel11224", "bwi5080", "pwk12274", "dca17775", "bwi5153", "bwi5022", "bwi5163", "dca17755", "sna10729", "bom4723", "den8248", "del21741", "chi21133", "syd10153", "fty21364", "yul12828", "bos4639", "msp11851", "xsp21424", "pwk12256", "mci5930", "cgh11134", "pdk11772", "pwk12277", "mel11268", "dal21231", "sjc10057", "lga13620", "lax10632", "mel11235", "gru17145", "wdc5774", "sna10740", "jax20923", "pdk17856", "bos4671", "sjc10045", "scl19422", "dal21237", "bwi5029", "bwi5160", "msp11849", "jnb7025", "mdw17364", "sjc10076", "wdc5545", "sna10722", "msp11829", "pwk4951", "hnd18722", "pwk4941", "pwk12275", "wdc5778", "msp11824", "lax10649", "pwk12222", "tyo11982", "pdk17864", "wdc5754", "dal21244", "pwk4920", "dal21226", "pwk12273", "pdk11780", "mia11382", "iah17271", "wdc5562", "dca17737", "osl6531", "sea4425", "iah17279", "pdk17870", "pdk17827", "cmh21527", "syd10140", "iah17267", "fty21357", "msp11881", "tyo11941", "mci5927", "pwk4955", "wdc5776", "bne12521", "maa10221", "pdk11767", "mel11232", "syd10165", "del21739", "yyz4521", "bur6125", "bur17528", "bur6128", "mel11246", "del21735", "jax20938", "tyo11958", "sea4469", "fty21327", "yul12823", "stl4834", "xsp21443", "dca17741", "wdc5751", "fty21374", "ord1735", "maa10220", "lga21971", "dal21252", "gru17132", "bog6425", "cmh21536", "mdw17381", "msp11870", "akl10326", "wlg10423", "pwk4945", "mdw17380", "cgh11152", "sea4453", "dfw18629", "mci5936", "del21722", "maa10225", "osl6529", "syd10121", "bwi5144", "den8274", "cmh21523", "lax10635", "lax10645", "wdc5567", "bwi5039", "bos4677", "maa10235", "stl4842", "gig17021", "ewr18127", "bwi5062", "lax10677", "yyz4536", "cgh11158", "tyo11976", "lga21947", "pwk4929", "bwi5037", "qpg1263", "bwi5122", "xsp21423", "dfw18646", "den8241", "cmh21549", "mci5928", "fty21375", "lga21962", "bur6123", "wdc5735", "bwi5059", "wdc5574", "itm18851", "dfw18656", "bwi5134", "lax10630", "sjc10080", "sna10749", "dfw18661", "yyz4551", "msp11847", "fty21372", "wdc5536", "yvr1525", "pao17444", "ewr18135", "pdk17860", "lga21980", "cgh11157", "pdk11744", "iah17232", "lax10634", "chi21138", "msp11854", "bos4648", "lax10621", "wdc5556", "hkg17932", "sna10736", "pdk17862", "del21734", "bwi5033", "qpg1282", "xsp21420", "mci5933", "pdx12326", "qpg1280", "syd10128", "pwk12224", "qpg1230", "dfw18655", "dal21272", "sjc10043", "sjc10028", "syd10125", "tyo11971", "stl4830", "sea4437", "cgh11165", "cgh11154", "sea4472", "bwi5054", "cmh21544", "pwk12244", "mel11273", "akl10332", "pdk17859", "cmh21545", "hkg17921", "mia11374", "wdc5761", "dca17782", "sea4442", "pao17450", "syd10131", "wdc5746", "stp9227", "tyo11948", "labsjc3921", "pdx12321", "bur17542", "stl4828", "scl19420", "pdk17830", "pao17425", "pwk4939", "pdx12322", "cgh11131", "bos4653", "ewr18151", "gru17131", "pdk17841", "mci5925", "mel11260", "ewr18147", "del21723", "lax10665", "jax20934", "pwk12249", "pwk12254", "pdk17866", "sjc10027", "bwi5081", "dal21250", "ewr18122", "pdk11736", "maa10249", "bog6424", "bos4661", "pwk4953", "bne12526", "pwk12250", "pdk11756", "chi21140", "pwk4958", "hkg17929", "dca17729", "tyo11977", "mci5940", "lax10661", "bwi5178", "gru17143", "xsp21430", "pwk12231", "pwk4969", "bom4738", "mia11325", "lax10631", "fty21326", "lax10643", "lax10660", "yyz4544", "qpg1269", "del21733", "dal21228", "cgh11175", "yyz4543", "cmh21538", "dal21229", "pao17420", "gru17124", "cmh21522", "pdk11777", "wdc5558", "iah1421", "lga21954", "wdc5541", "wdc5730", "ewr18161", "sea4420", "den8261", "syd10161", "pao17452", "gru17121", "pwk4930", "dfw18647", "pwk12240", "bwi5167", "pwk12269", "sna10737", "dca17743", "dal21223", "pdk11759", "tyo11925", "xsp21429", "syd10154", "iah17244", "pdk11774", "dca12920", "dca12922", "dca12927", "bwi5151", "qpg1267", "bur17534", "yyz4523", "sea4432", "stl4835", "maa10226", "chi21166", "bos4633", "bwi5155", "yvr1524", "bos4680", "mdw17332", "bom4733", "bos4624", "lax10680", "fty21329", "scl19426", "mel11255", "mel11243", "bos4678", "fty21336", "itm18842", "dca17723", "gig17027", "pwk4972", "pwk4963", "akl10331", "maa10241", "chi21122", "bwi5168", "hnd18727", "bur17548", "sea4421", "gru17133", "maa10239", "osl6534", "fty21322", "lax10659", "bos4627", "cgh11172", "jax20948", "bwi5183", "yvr1535", "pdk11723", "xsp21451", "pdk11775", "wdc5749", "jax20937", "bom4737", "yyz4547", "bos4676", "mel11251", "dal21283", "mel11275", "mel11258", "iah17263", "bom4750", "syd10167", "dal21241", "bom4743", "dal21249", "bom4732", "bom4727", "gru17148", "pwk12247", "pwk12268", "sna10745", "pwk12221", "sea4480", "pwk12243", "sea4457", "ewr18157", "lga21955", "bog6427", "bog6435", "tyo11936", "sin18037", "dca12926", "dfw18623", "dca17756", "gru17144", "gru17138", "cmh21542", "bwi5070", "cmh21534", "gru17135", "wdc5559", "gru17136", "cmh21543", "lim12120", "lax10681", "iah1429", "sna10721", "wdc5727", "qpg1235", "wdc5535", "mel11270", "bur17521", "pdk11773", "pdk11779", "bwi5146", "qpg1252", "chi21127", "chi21121", "sea4449", "lga21969", "iah17283", "pwk12271", "bne7722", "fty21365", "iah17240", "bne7720", "lck10925", "iah17247", "mci5921", "dfw18651", "sjc10032", "chi21169", "lga21956", "ewr18134", "mel11264", "gig17030", "pdk17877", "bne12524", "qpg1229", "bne12525", "dca17750", "pwk12262", "mel11281", "pwk4921", "cgh11183", "yvr1533", "bur6126", "den8260", "bos4682", "bog6426", "iah17268", "sna10734", "dca17771", "bos4654", "ewr22129", "pwk4979", "tyo11955", "tyo11966", "dal21246", "msp11876", "lga21952", "ewr22126", "ord1734", "bwi5147", "ord1741", "cgh11144", "msp11825", "cgh11125", "ewr18156", "dfw18620", "bwi5128", "pwk4983", "chi21153", "den8222", "jax20949", "lga21982", "labsjc3925", "lga21936", "dca17753", "msp11874", "pdk17843", "syd10120", "cgh11140", "yyz4542", "hnd18739", "mel11234", "pdk11768", "yvr1523", "pdk17853", "cgh11123", "pao17474", "bur17539", "dal21225", "pwk4966", "sea4439", "dfw18677", "sjc10058", "sjc10048", "mdw17358", "msp11859", "wdc5720", "mci5949", "iah17264", "iah17242", "ord1720", "bur17530", "syd10136", "bwi5026", "pwk4942", "lga21948", "cgh11160", "fty21368", "wdc5551", "cgh11173", "wdc5532", "pwk12236", "osl6526", "lga21943", "dfw18634", "msp11823", "stl4850", "mia11364", "pwk12241", "ord1728", "dfw18663", "ewr18121", "dfw18644", "sea4452", "msp11831", "sea4424", "bos4638", "xsp21445", "xsp21440", "lga21942", "maa10229", "den8236", "iah17228", "wdc5530", "tyo11947", "msp11835", "itm18827", "del21724", "sjc10039", "itm18849", "dca17733", "hkg17924", "fty21345", "xsp21431", "fty21347", "bur17569", "syd10152", "bom4746", "pao17468", "mel11220", "pdk17837", "cgh11136", "bur17535", "hnd18749", "hnd18723", "iah17235", "sjc10044", "hnd18735", "fty13729", "cpt19523", "wdc5531", "cmh21533", "bwi5045", "bos4681", "mia11367", "yvr1528", "bwi5063", "bwi5083", "sjc10050", "bwi5131", "iah17227", "bos4637", "pdk11751", "mia11343", "yul12822", "dca12925", "dfw18676", "den8244", "hnd18724", "sjc10081", "yyz4537", "wdc5743", "dfw18654", "lck10926", "wdc5763", "mel11259", "dfw18650", "dca17765", "dfw18667", "pdk11742", "ord1722", "dal21282", "tyo11935", "syd10172", "sea4445", "msp11863", "dal21263", "tyo11937", "lga21925", "cgh11139", "lax10662", "mel11266", "cgh11143", "sin18027", "iah1426", "tyo11957", "bwi5164", "itm18825", "tyo11978", "itm18826", "itm18833", "yyz4528", "tyo11920", "pdk11728", "pdk11725", "pdk17858", "pdk11722", "pdk17883", "pdk17838", "pdk17857", "pdk11760", "gig17022", "msp11845", "cmh21524", "gig17034", "pdk17820", "per7621", "osl6520", "akl10325", "iah17277", "iah1425", "iah1427", "iah17246", "iah17269", "pwk12267", "iah17282", "dca17740", "sea4462", "maa10228", "sea4428", "dca17778", "cgh11127", "mdw17340", "ord1721", "pwk12283", "sea4473", "tyo11953", "sea4444", "lck10923", "pao17460", "lga21953", "qpg1270", "sna10743", "bwi5180", "ewr18171", "wdc5733", "sea4471", "fty21356", "pao17427", "lim12125", "dfw18668", "ewr18142", "qpg1222", "qpg1268", "pao17461", "wdc5764", "wdc5576", "bur17547", "per7623", "wdc5522", "wdc5525", "pwk12280", "pwk4968", "pwk12226", "pwk4974", "pwk4982", "pdk11724", "akl10330", "pwk4936", "mdw17334", "pwk12261", "tyo11922", "pao17464", "yul12825", "pwk4962", "cgh11121", "pao17448", "stl4849", "stl4820", "mel11269", "gig17029", "akl10321", "iah17231", "dca12924", "mel11241", "dca17770", "ewr18165", "bos4630", "ord1729", "wdc5566", "ewr18167", "sjc10061", "pwk12266", "wlg10422", "sjc10067", "mdw17348", "sjc10079", "mdw17331", "cgh11176", "bom4730", "syd10134", "hnd18751", "lga21973", "pao17459", "pao17424", "wdc5752", "tyo11961", "tyo11962", "yvr1526", "dal21273", "cgh11179", "tyo11943", "sna10732", "pao17457", "bwi5032", "wdc5736", "wdc5769", "per12624", "tyo11983", "tyo11939", "bwi5052", "wdc5542", "ewr18136", "wdc5561", "mdw17369", "pao17422", "pdk17839", "cpt19522", "lga13625", "lga13626", "bos4657", "lga21946", "lga21930", "lga21963", "lga21961", "lga21924", "iah17237", "lga21951", "bwi5049", "itm18841", "msp11868", "msp11837", "maa10250", "jax20922", "dal21270", "iah17273", "dal21265", "bom4742", "bwi5170", "bwi5041", "dca17781", "dca17720", "mia11366", "mdw17347", "qpg1257", "lax10674", "tyo11949", "del21727", "qpg1234", "tyo11972", "qpg1238", "lax10671", "pdk11747", "lax10652", "den8280", "msp11830", "dfw18645", "msp11855", "lax10672", "msp11869", "mdw17373", "lax10654", "sna10733", "lax10639", "sna10741", "sjc10036", "msp11880", "maa10232", "jax20926", "msp11866", "hnd18731", "mdw17341", "bos4647", "wdc5782", "mia11373", "dfw18630", "bwi5150", "msp11842", "dfw18649", "dfw18641", "wdc5724", "pdk17847", "pdk11750", "hkg17931", "dfw18665", "dca17783", "sin18022", "sea4468", "sin18039", "bwi5138", "bur17544", "den8265", "ewr18163", "sin18028", "msp11832", "msp11882", "msp11846", "msp11840", "bur17550", "msp11867", "pdk11729", "syd10158", "sjc10073", "stl4827", "syd10148", "cgh11170", "sea4467", "cgh11150", "sea4461", "cgh11177", "cgh11169", "sea4481", "sea4466", "sea4482", "tyo11931", "sea4465", "pwk4935", "pdk11752", "pwk4957", "mci5947", "ewr18137", "per7622", "tyo11959", "den8262", "den8227", "den8251", "wdc5539", "dca17767", "wdc5568", "stl4845", "sea4460", "sea4435", "sea4476", "den8266", "sea4455", "bur6124", "hkg17927", "chi21175", "mdw17371", "pwk12282", "bur17545", "bur17568", "fty21339", "fty21341", "fty21366", "bwi5179", "fty21333", "dal21278", "fty21353", "sin18050", "hnd18726", "dca17751", "pdk11746", "dca17768", "mci5939", "hnd18750", "pdk11748", "pdk11743", "pdx12325", "bwi5173", "bwi5181", "bwi5130", "bwi5021", "cgh11129", "pwk4959", "hkg17930", "bur17553", "bur17567", "bur17571", "pwk4956", "syd10127", "syd10182", "hkg17923", "bur17576", "gru17150", "dal21274", "lax10647", "fty21358", "sjc10037", "fty21332", "bos4672", "bos4635", "ord1745", "yvr1521", "mci5922", "mci5946", "tyo11929", "xsp21422", "gru17129", "sjc10023", "yvr1527", "xsp21434"];
  const _0x53bf15 = ["151.101.9.161", "151.101.9.80", "151.101.9.81", "151.101.9.83", "151.101.9.84", "151.101.9.85", "151.101.9.86", "151.101.9.87", "151.101.9.90", "151.101.9.92", "151.101.9.94", "151.101.9.95", "151.101.9.97", "151.101.9.98", "151.101.10.91", "151.101.10.93", "151.101.10.95", "151.101.10.99", "151.101.10.200", "151.101.10.201", "151.101.10.202", "151.101.10.204", "151.101.10.205", "151.101.10.206", "151.101.10.207", "151.101.10.209", "151.101.10.211", "151.101.10.212", "151.101.10.213", "151.101.10.214", "151.101.10.215", "151.101.10.216", "151.101.10.217", "151.101.10.219", "151.101.10.220", "151.101.10.222", "151.101.9.155", "151.101.9.156", "151.101.9.157", "151.101.9.158", "151.101.9.160", "151.101.9.161", "151.101.9.162", "151.101.9.163", "151.101.9.164", "151.101.9.165", "151.101.9.167", "151.101.9.168", "151.101.9.169", "151.101.9.170", "151.101.9.171", "151.101.9.172", "151.101.9.174", "151.101.9.175", "151.101.9.176", "151.101.9.177", "151.101.9.178", "151.101.9.180", "151.101.9.181", "151.101.9.182", "151.101.9.183", "151.101.9.184", "151.101.9.185", "151.101.9.186", "151.101.9.187", "151.101.9.188", "151.101.9.189", "151.101.9.190", "151.101.9.192", "151.101.9.193", "151.101.9.194", "151.101.9.197", "151.101.9.197", "151.101.9.198", "151.101.9.199", "151.101.9.200", "151.101.9.201", "151.101.9.202", "151.101.9.203", "151.101.9.204", "151.101.9.205", "151.101.9.208", "151.101.9.209", "151.101.9.210", "151.101.9.213", "151.101.9.214", "151.101.9.215", "151.101.9.216", "151.101.9.217", "151.101.9.218", "151.101.9.219", "151.101.9.220", "151.101.9.221", "151.101.9.222", "151.101.9.224", "151.101.9.225", "151.101.9.227", "151.101.9.228", "151.101.9.229", "151.101.9.230", "151.101.9.231", "151.101.9.238", "151.101.9.239", "151.101.9.242", "151.101.9.244", "151.101.9.247", "151.101.9.248", "151.101.9.249", "151.101.9.251", "151.101.9.252", "151.101.9.253", "151.101.9.254", "151.101.9.255", "151.101.10.145", "151.101.9.216", "151.101.8.203", "151.101.9.103", "151.101.9.104", "151.101.9.108", "151.101.9.109", "151.101.9.111", "151.101.9.112", "151.101.9.113", "151.101.9.114", "151.101.9.115", "151.101.9.124", "151.101.10.58", "151.101.10.128", "151.101.9.252", "151.101.9.209", "151.101.8.81", "151.101.9.224", "151.101.10.122", "151.101.9.137", "151.101.10.133", "151.101.9.185", "151.101.9.168", "151.101.8.172", "151.101.10.51", "151.101.10.146", "151.101.10.226", "151.101.10.223", "151.101.10.57", "151.101.10.58", "151.101.10.202", "151.101.10.216", "151.101.10.170", "151.101.10.26", "151.101.10.187", "151.101.9.253", "151.101.10.46", "151.101.10.64", "151.101.8.228", "151.101.8.205", "151.101.11.9", "151.101.9.29", "151.101.9.134", "151.101.8.174", "151.101.10.182", "151.101.9.210", "151.101.9.201", "151.101.10.88", "151.101.9.22", "151.101.8.200", "151.101.10.37", "151.101.10.27", "151.101.9.221", "151.101.10.28", "151.101.10.29", "151.101.10.30", "151.101.10.32", "151.101.10.211", "151.101.10.212", "151.101.10.213", "151.101.10.214", "151.101.8.223", "151.101.9.125", "151.101.9.126", "151.101.9.127", "151.101.9.128", "151.101.9.129", "151.101.9.130", "151.101.10.59", "151.101.10.60", "151.101.10.61", "151.101.10.62", "151.101.10.63", "151.101.10.162", "151.101.10.163", "151.101.10.164", "151.101.10.165", "151.101.10.166", "151.101.10.167", "151.101.10.168", "151.101.10.169", "151.101.10.170", "151.101.10.171", "151.101.9.31", "151.101.9.32", "151.101.9.33", "151.101.9.34", "151.101.9.35", "151.101.9.36", "151.101.10.156", "151.101.10.95", "151.101.10.71", "151.101.10.72", "151.101.10.73", "151.101.10.74", "151.101.10.75", "151.101.10.76", "151.101.10.77", "151.101.10.78", "151.101.10.79", "151.101.10.80", "151.101.10.18", "151.101.10.169", "151.101.8.241", "151.101.8.242", "151.101.10.147", "151.101.9.23", "151.101.10.184", "151.101.10.185", "151.101.10.186", "151.101.10.187", "151.101.9.213", "151.101.9.214", "151.101.9.215", "151.101.9.216", "151.101.9.217", "151.101.9.218", "151.101.8.138", "151.101.8.139", "151.101.9.10", "151.101.9.12", "151.101.9.13", "151.101.9.14", "151.101.9.15", "151.101.9.16", "151.101.9.17", "151.101.9.18", "151.101.9.19", "151.101.9.21", "151.101.9.22", "151.101.9.23", "151.101.9.26", "151.101.9.27", "151.101.9.29", "151.101.9.30", "151.101.9.31", "151.101.9.32", "151.101.9.33", "151.101.9.35", "151.101.9.36", "151.101.9.38", "151.101.9.39", "151.101.9.40", "151.101.9.41", "151.101.9.42", "151.101.9.43", "151.101.9.44", "151.101.9.46", "151.101.9.47", "151.101.9.48", "151.101.9.49", "151.101.9.50", "151.101.8.238", "151.101.8.138", "151.101.8.240"];

  const _0xa52164 = async function () {
    const _0xcaf580 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_1746);

      throw "stopped";
    }

    try {
      let _0x3dc304 = ![];

      while (this.running && !_0x3dc304) {
        _0x3dc304 = await _0x1473d3.bind(this)();

        if (_0x3dc304) {
          return !![];
        }

        await _0x45a98b(this.monitorDelay);
      }

      return !![];
    } catch (err) {
      return await _0x45a98b(this.monitorDelay), _0xa52164.bind(this)();
    }
  };

  const _0x1473d3 = async function () {
    const _0x15da2f = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_1747);

      throw "stopped";
    }

    try {
      if (this.variants && this.variants.length > 0) {
        var arg_1753 = this.size[0].name.toLowerCase();

        if (arg_1753 == "random") {
          this.pickedSize = this.variants[Math.floor(Math.random() * this.variants.length) % this.variants.length];
        } else {
          let _0x12ffcf = [];

          for (let _0xfd96d5 of this.size) {
            let _0x21df20 = null;

            try {
              _0x21df20 = this.variants.find(_0xbd54a2 => {
                const _0x1cddad = _0x15da2f;

                let _0x15e159;

                let _0x4e2ee4 = _0xbd54a2.attributes[0].value;
                return !isNaN(Number(_0x4e2ee4)) ? _0x15e159 = _0x4e2ee4 ? parseFloat(_0x4e2ee4) : null : _0x15e159 = _0x4e2ee4 ? _0x4e2ee4 : null, _0x15e159 && _0x15e159 == _0xfd96d5.name;
              });
            } catch (err) {
              _0x21df20 = this.variants.find(_0x4fd503 => {
                const _0x144049 = _0x15da2f;

                let _0xc84d90 = parseFloat(_0x4fd503.name);

                return _0x4fd503.code && _0xc84d90 && _0xc84d90 == _0xfd96d5.name;
              });
            }

            if (_0x21df20) {
              _0x12ffcf.push(_0x21df20);
            }
          }

          if (_0x12ffcf.length > 0) {
            this.pickedSize = _0x12ffcf[Math.floor(Math.random() * _0x12ffcf.length)];
          }
        }

        if (!this.pickedSize) {
          return _0x5a14e3({
            'id': this.id,
            'status': "Size Not Found",
            'statusCode': 4,
            'groupId': this.groupId
          }), this.running = ![], ![];
        }

        this.checkoutInfo.sku = this.productPID;
        this.checkoutInfo.variant = this.pickedSize.code;
        this.checkoutInfo.size = this.pickedSize.attributes ? this.pickedSize.attributes[0].value : this.pickedSize.name;
      }

      let _0x27caa8 = this.cacheNodes[Math.floor(Math.random() * this.cacheNodes.length)];
      var arg_1750 = Math.random();
      var arg_1749 = arg_1750 * 10000;
      var arg_1748 = parseInt(arg_1749);
      _0x27caa8 = _0x27caa8.replace(/\d{4}$/, arg_1748);

      let _0x142254 = _0x53bf15[Math.floor(Math.random() * _0x53bf15.length)];

      if (this.ddHardBan) {
        _0x3cad62.uri = "https://" + _0x142254 + "/api/users/carts/current/entries?timestamp=" + Date.now();
      }

      _0x5a14e3(arg_1751);

      if (this.useExp2) {
        _0x3cad62.uri = this.siteOrigin + "/apigate/users/carts/current/entries?timestamp=" + Date.now();
        _0x3cad62.headers = {
          'host': this.host,
          'accept': "application/json",
          'accept-language': "en-us",
          'accept-encoding': "gzip, deflate, br",
          'content-type': "application/json",
          'connection': "close",
          'x-fl-app-version': this.appVersion,
          'x-flapi-api-identifier': this.apiIdentification,
          'x-api-key': this.apiKey,
          'user-agent': this.user_agent,
          'x-newrelic-id': this.newrelicId,
          'x-fl-device-id': this.deviceId,
          'x-fl-request-id': _0x28d3a4(),
          'x-csrf-token': this.x_csrf_token,
          'x-fl-productid': this.pickedSize.code,
          'x-flapi-session-id': this.ftlSessionId,
          'cache-control': "no-cache, no-store, private, must-revalidate",
          'fastly-ff': "!BWI!cache-" + _0x27caa8 + "-BWI"
        };
        _0x3cad62.rejectUnauthorized = ![];

        if (this.ddHardBan) {
          _0x3cad62.uri = "https://" + _0x142254 + "/apigate/users/carts/current/entries?timestamp=" + Date.now();
        }
      }

      const _0x2cbbeb = await _0x35e74e.bind(this)(_0x3cad62);

      let _0x37228a = _0x2cbbeb.statusCode;

      if (_0x2cbbeb.request.uri.href.includes("footlocker.eu")) {
        return await _0x4327c1.bind(this)(), ![];
      }

      var arg_1752 = '[' + new Date().toISOString() + "]: adding to cart status: " + _0x37228a + ", cache: " + _0x2cbbeb.headers["x-cache"] + ", body: " + _0x2cbbeb.body;

      _0x2d2bdc(arg_1752, this.logFilePath);

      if (_0x2cbbeb.body && _0x2cbbeb.body.includes("Your chance at sneaker glory is moments away")) {
        return await _0x406044.bind(this)(!![]), ![];
      }

      if (_0x37228a != 200) {
        if (_0x37228a == 403) {
          if (_0x2cbbeb.body.includes("geo.captcha-delivery.com")) {
            if (_0x2cbbeb.body.includes("&t=bv")) {
              return this.ddHardBan = !![], await _0x1f7e15.bind(this)("datadome", '', this.domain, this.siteOrigin, !![]), _0x5a14e3({
                'id': this.id,
                'status': "DataDome Banned, Rotating Proxy",
                'statusCode': 4,
                'groupId': this.groupId
              }), ![];
            }

            _0x5a14e3(arg_1754);

            let _0x3e630c = JSON.parse(_0x2cbbeb.body);

            await _0x574f69.bind(this)(_0x3e630c.url, _0x2cbbeb.headers["set-cookie"]);
          } else {
            _0x5a14e3(arg_1756);
          }
        } else {
          if (_0x37228a == 503 || _0x37228a == 529) {
            if (_0x2cbbeb.body.includes("Your chance at sneaker glory is moments away")) {
              await _0x406044.bind(this)(!![]);
            }
          } else {
            if (_0x37228a == 531 || _0x37228a == 400) {
              _0x5a14e3(arg_1757);
            } else {
              if (_0x37228a == 429) {
                _0x5a14e3(arg_1758);
              } else {
                if (_0x37228a == 550) {
                  _0x5a14e3(arg_1759);
                } else {
                  if (_0x2cbbeb.body && _0x2cbbeb.body.includes("Existing Session is Required and Not Found")) {
                    await _0x37a847.bind(this)();
                  } else {
                    _0x5a14e3(arg_1760);
                  }
                }
              }
            }
          }
        }

        return ![];
      }

      let _0x5d2cb7 = JSON.parse(_0x2cbbeb.body);

      if (_0x5d2cb7.totalUnitCount > 0) {
        const _0x16e881 = "2|4|1|0|3".split('|');

        let _0x48f88d = 0;
        this.cartId = _0x5d2cb7.guid;
        this.price = _0x5d2cb7.subTotal.value;
        this.checkoutInfo.price = _0x5d2cb7.subTotal.value;
        this.ddHardBan = ![];
        return !![];
      }

      return _0x5a14e3({
        'id': this.id,
        'status': "ATC Failed (" + _0x37228a + "), Retry",
        'statusCode': 4,
        'groupId': this.groupId
      }), ![];
    } catch (err) {
      return _0x5a14e3({
        'id': this.id,
        'status': "ATC Failed, Retry",
        'statusCode': 4,
        'groupId': this.groupId
      }), _0x2d2bdc('[' + new Date().toISOString() + "]: adding to cart failed, " + err, this.logFilePath), ![];
    }
  };

  const _0x3e04a3 = async function () {
    const _0x23596a = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_1762);

      throw "stopped";
    }

    try {
      let _0x29fa64 = ![];

      while (this.running && !_0x29fa64) {
        _0x29fa64 = await _0x2082a8.bind(this)();

        if (_0x29fa64) {
          return !![];
        }

        await _0x45a98b(this.monitorDelay);
      }

      return !![];
    } catch (err) {
      return await _0x45a98b(this.monitorDelay), _0x3e04a3.bind(this)();
    }
  };

  const _0x2082a8 = async function (_0x35fba2 = 0) {
    const _0xc2cd7b = _0x8044f7;

    try {
      _0x5a14e3(arg_1767);

      let _0xc22b6b = _0x53bf15[Math.floor(Math.random() * _0x53bf15.length)];

      if (this.ddHardBan) {
        _0x40d415.uri = "https://" + _0xc22b6b + "/api/users/carts/current/paypal?timestamp=" + Date.now();
      }

      if (this.useExp2) {
        _0x40d415.uri = this.siteOrigin + "/apigate/users/carts/current/paypal?timestamp=" + Date.now();
        _0x40d415.headers = {
          'host': this.host,
          'accept': "application/json",
          'accept-language': "en-us",
          'accept-encoding': "gzip, deflate, br",
          'content-type': "application/json",
          'x-fl-app-version': this.appVersion,
          'x-flapi-cart-guid': this.cartId,
          'x-flapi-api-identifier': this.apiIdentification,
          'x-api-key': this.apiKey,
          'user-agent': this.user_agent,
          'x-newrelic-id': this.newrelicId,
          'x-fl-device-id': this.deviceId,
          'x-fl-request-id': _0x28d3a4(),
          'x-csrf-token': this.x_csrf_token,
          'x-fl-productid': this.pickedSize.code,
          'x-flapi-session-id': this.ftlSessionId
        };
        _0x40d415.rejectUnauthorized = ![];

        if (this.ddHardBan) {
          _0x40d415.uri = "https://" + _0xc22b6b + "/apigate/users/carts/current/paypal?timestamp=" + Date.now();
        }
      }

      const _0x2d351b = await _0x35e74e.bind(this)(_0x40d415);

      let _0x351cc8 = _0x2d351b.statusCode;
      var arg_1768 = "submit Detail " + _0x351cc8;
      console.log(arg_1768);
      console.log(_0x2d351b.body);
      var arg_1769 = '[' + new Date().toISOString() + "]: Submitting Details Status (" + _0x351cc8 + ") body (" + _0x2d351b.body + ')';

      _0x2d2bdc(arg_1769, this.logFilePath);

      if (_0x2d351b.request.uri.href.includes("footlocker.eu")) {
        return await _0x4327c1.bind(this)(), ![];
      }

      if (_0x351cc8 >= 300) {
        if (_0x351cc8 == 403) {
          if (_0x2d351b.body.includes("geo.captcha-delivery.com")) {
            if (_0x2d351b.body.includes("&t=bv")) {
              return this.ddHardBan = !![], _0x5a14e3({
                'id': this.id,
                'status': "DataDome Banned, Rotating Proxy",
                'statusCode': 4,
                'groupId': this.groupId
              }), ![];
            }

            _0x5a14e3(arg_1771);

            let _0x4091bb = JSON.parse(_0x2d351b.body);

            await _0x574f69.bind(this)(_0x4091bb.url, _0x2d351b.headers["set-cookie"]);
          } else {
            if (_0x2d351b.body.includes("appId")) {
              return _0x5a14e3({
                'id': this.id,
                'status': "PX Blocked",
                'statusCode': 4,
                'groupId': this.groupId
              }), _0x2d2bdc('[' + new Date().toISOString() + "]: PX Blocked, " + _0x351cc8, this.logFilePath), this.running = ![], ![];
            } else {
              _0x5a14e3(arg_1776);

              var arg_1777 = '[' + new Date().toISOString() + "]: Submitting Details Failed (Akamai Banned), Retrying, " + _0x351cc8;

              _0x2d2bdc(arg_1777, this.logFilePath);

              await _0x4327c1.bind(this)();
            }
          }
        } else {
          if (_0x351cc8 == 503 || _0x351cc8 == 529) {
            if (_0x2d351b.body.includes("Your chance at sneaker glory is moments away")) {
              await _0x406044.bind(this)(!![]);
            }
          } else {
            if (_0x351cc8 == 429 || _0x351cc8 == 550 || _0x351cc8 == 430) {
              _0x5a14e3(arg_1779);

              await _0x45a98b(this.monitorDelay);
            } else {
              if (_0x351cc8 == 400) {
                _0x5a14e3(arg_1780);

                await _0x45a98b(this.errorDelay);
                await _0x37a847.bind(this)();
              } else {
                _0x5a14e3(arg_1781);
              }
            }
          }
        }

        return ![];
      }

      return this.ddHardBan = ![], !![];
    } catch (err) {
      return _0x5a14e3({
        'id': this.id,
        'status': "Submitting Details Error, Retry",
        'statusCode': 4,
        'groupId': this.groupId
      }), _0x2d2bdc('[' + new Date().toISOString() + "]: Submitting Details Failed, Error: " + err, this.logFilePath), ![];
    }
  };

  const _0x48c7e8 = async function () {
    const _0x2601ec = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_1782);

      throw "stopped";
    }

    try {
      let _0x1fe97b = ![];

      while (this.running && !_0x1fe97b) {
        _0x1fe97b = await _0x16dc60.bind(this)();

        if (_0x1fe97b) {
          return !![];
        }

        await _0x45a98b(this.monitorDelay);
      }

      return !![];
    } catch (err) {
      return await _0x45a98b(this.monitorDelay), _0x48c7e8.bind(this)();
    }
  };

  const _0x16dc60 = async function (_0x49b125 = 0) {
    const _0x207d2c = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_1784);

      throw "stopped";
    }

    try {
      let _0x23e7e8 = _0x53bf15[Math.floor(Math.random() * _0x53bf15.length)];

      _0x5a14e3(arg_1785);

      const _0x45ca49 = _0x17974b(arg_1786);

      const _0x3b93ce = _0x17974b(arg_1787);

      const _0x113600 = _0x17974b(arg_1788);

      const _0x129392 = _0x17974b(arg_1789);

      _0x5a14e3(arg_1790);

      if (this.ddHardBan) {
        _0x329a1e.uri = "https://" + _0x23e7e8 + "/api/v2/users/orders?timestamp=" + Date.now();
      }

      if (this.useExp2) {
        _0x329a1e.uri = this.siteOrigin + "/apigate/v2/users/orders?timestamp=" + Date.now();
        _0x329a1e.headers = {
          'host': this.host,
          'accept': "application/json",
          'accept-language': "en-us",
          'accept-encoding': "gzip, deflate, br",
          'content-type': "application/json",
          'x-flapi-cart-guid': this.cartId,
          'x-fl-app-version': this.appVersion,
          'x-flapi-api-identifier': this.apiIdentification,
          'x-api-key': this.apiKey,
          'user-agent': this.user_agent,
          'x-newrelic-id': this.newrelicId,
          'x-fl-device-id': this.deviceId,
          'x-fl-request-id': _0x28d3a4(),
          'x-csrf-token': this.x_csrf_token,
          'x-fl-productid': this.pickedSize.code,
          'x-flapi-session-id': this.ftlSessionId
        };
        _0x329a1e.rejectUnauthorized = ![];

        if (this.ddHardBan) {
          _0x329a1e.uri = "https://" + _0x23e7e8 + "/apigate/v2/users/orders?timestamp=" + Date.now();
        }
      }

      const _0x2d443 = await _0x35e74e.bind(this)(_0x329a1e);

      let _0x51263d = _0x2d443.statusCode;
      var arg_1791 = "submitOrder " + _0x51263d;
      console.log(arg_1791);
      console.log(_0x2d443.body);

      if (_0x2d443.request.uri.href.includes("footlocker.eu")) {
        return await _0x4327c1.bind(this)(), ![];
      }

      var arg_1792 = '[' + new Date().toISOString() + "]: submitOrder status " + _0x51263d + " body " + _0x2d443.body;

      _0x2d2bdc(arg_1792, this.logFilePath);

      if (_0x51263d == 200 || _0x51263d == 201) {
        if (_0x2d443.body && _0x2d443.body.includes("Foot Locker Europe")) {
          return _0x5a14e3({
            'id': this.id,
            'status': "SubmitOrder Failed (proxy region)",
            'statusCode': 2,
            'groupId': this.groupId
          }), await _0x4327c1.bind(this)(), ![];
        }

        this.checkoutInfo.paymentStatus = _0x172aa3.xiQfa;

        try {
          let _0x482188 = JSON.parse(_0x2d443.body);

          this.checkoutInfo.orderNumber = '#' + _0x482188.order.code;
        } catch (err) {
        }

        var arg_1794 = '[' + new Date().toISOString() + "]: Successfully Checked out!";

        _0x2d2bdc(arg_1794, this.logFilePath);

        _0x5a14e3(arg_1795);

        this.sender.send("checkoutSuccess", arg_1796);
      } else {
        if (_0x51263d == 403) {
          if (_0x2d443.body.includes("geo.captcha-delivery.com")) {
            if (_0x2d443.body.includes("&t=bv")) {
              return this.ddHardBan = !![], _0x5a14e3({
                'id': this.id,
                'status': "DataDome Banned, Rotating Proxy",
                'statusCode': 4,
                'groupId': this.groupId
              }), ![];
            }

            _0x5a14e3(arg_1800);

            let _0x35fbc3 = JSON.parse(_0x2d443.body);

            await _0x574f69.bind(this)(_0x35fbc3.url, _0x2d443.headers["set-cookie"]);
          } else {
            if (_0x2d443.body.includes("appId")) {
              return _0x5a14e3({
                'id': this.id,
                'status': "PX Blocked",
                'statusCode': 4,
                'groupId': this.groupId
              }), _0x2d2bdc('[' + new Date().toISOString() + "]: PX Blocked, " + _0x51263d, this.logFilePath), this.running = ![], ![];
            } else {
              _0x5a14e3(arg_1806);

              var arg_1807 = '[' + new Date().toISOString() + "]: Submit Order Failed (Proxy Banned), Retrying, " + _0x51263d;

              _0x2d2bdc(arg_1807, this.logFilePath);

              await _0x4327c1.bind(this)();
            }
          }

          return ![], _0x16dc60.bind(this)(!![], _0x49b125);
        } else {
          if (_0x51263d == 503 || _0x51263d == 529) {
            if (_0x2d443.body.includes("Your chance at sneaker glory is moments away")) {
              await _0x406044.bind(this)(!![]);
            }

            return ![];
          } else {
            if (_0x51263d == 429 || _0x51263d == 430 || _0x51263d == 550) {
              return _0x5a14e3({
                'id': this.id,
                'status': "Submit Order[" + _0x51263d + "], Retry",
                'statusCode': 4,
                'groupId': this.groupId
              }), ![];
            } else {
              if (_0x2d443.body.includes("Something isn't right. We suggest you check again or try another card") || _0x2d443.body.includes("Something isn't right. Could you check again or use a different card") || _0x2d443.body.includes("Something isn't right. We suggest you try again or use another payment method") || _0x2d443.body.includes("declined")) {
                this.checkoutInfo.paymentStatus = _0x172aa3.BnhIJ;

                _0x5a14e3(arg_1816);
              } else {
                if (_0x2d443.body.includes("limited to 1 per Customer")) {
                  this.checkoutInfo.paymentStatus = _0x172aa3.AUVZv;

                  _0x5a14e3(arg_1817);
                } else {
                  if (_0x2d443.body.includes("Cart is empty") || _0x2d443.body.includes("Reservation has expired")) {
                    this.checkoutInfo.paymentStatus = _0x172aa3.bqRDE;

                    _0x5a14e3(arg_1818);
                  } else {
                    if (_0x2d443.body.includes("ZIP Code don't match")) {
                      this.checkoutInfo.paymentStatus = _0x172aa3.QeQir;

                      _0x5a14e3(arg_1819);
                    } else {
                      if (_0x2d443.body.includes("international shipping")) {
                        this.checkoutInfo.paymentStatus = _0x172aa3.EABZd;

                        _0x5a14e3(arg_1820);
                      } else {
                        return _0x2d443.body.includes("Validation error") ? (_0x5a14e3({
                          'id': this.id,
                          'status': "Session Expired, Retry",
                          'statusCode': 4,
                          'groupId': this.groupId
                        }), await _0x45a98b(this.errorDelay), await _0x37a847.bind(this)(), ![]) : (_0x2d2bdc('[' + new Date().toISOString() + "]: Submit Order Failed (" + _0x51263d + "), Retry", this.logFilePath), _0x5a14e3({
                          'id': this.id,
                          'status': "Submit Order Failed (" + _0x51263d + "), Retry",
                          'statusCode': 4,
                          'groupId': this.groupId
                        }), ![]);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      return !![];
    } catch (err) {
      return console.log(err), _0x2d2bdc('[' + new Date().toISOString() + "]: Submit Order Failed (" + err + "), retrying", this.logFilePath), _0x5a14e3({
        'id': this.id,
        'status': "submitOrder Failed\uFF0C Retrying",
        'statusCode': 4,
        'groupId': this.groupId
      }), ![];
    }
  };

  const _0xf568ba = async function () {
    const _0x4fd42d = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_1821);

      throw "stopped";
    }

    try {
      let _0x2d360a = ![];

      while (this.running && !_0x2d360a) {
        _0x2d360a = await _0x2284a6.bind(this)();

        if (_0x2d360a) {
          return !![];
        }

        await _0x45a98b(this.monitorDelay);
      }

      return !![];
    } catch (err) {
      return await _0x45a98b(this.monitorDelay), _0xf568ba.bind(this)();
    }
  };

  const _0x2284a6 = async function (_0x3d43cb = 0) {
    const _0x597c3c = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_1824);

      throw "stopped";
    }

    try {
      _0x5a14e3(arg_1825);

      if (this.useExp2) {
        _0x3c56d3.uri = this.siteOrigin + "/apigate/v2/users/orders?timestamp=" + Date.now();
        _0x3c56d3.headers = {
          'host': this.host,
          'accept': "application/json",
          'accept-language': "en-us",
          'accept-encoding': "gzip, deflate, br",
          'content-type': "application/json",
          'x-flapi-cart-guid': this.cartId,
          'x-fl-app-version': this.appVersion,
          'x-flapi-api-identifier': this.apiIdentification,
          'x-api-key': this.apiKey,
          'user-agent': this.user_agent,
          'x-newrelic-id': this.newrelicId,
          'x-fl-device-id': this.deviceId,
          'x-fl-request-id': _0x28d3a4(),
          'x-csrf-token': this.x_csrf_token,
          'x-fl-productid': this.pickedSize.code,
          'x-flapi-session-id': this.ftlSessionId
        };
        _0x3c56d3.rejectUnauthorized = ![];
      }

      const _0x1854cd = await _0x35e74e.bind(this)(_0x3c56d3);

      let _0x5ae2f7 = _0x1854cd.statusCode;
      var arg_1826 = "submitOrder " + _0x5ae2f7;
      console.log(arg_1826);
      console.log(_0x1854cd.body);

      if (_0x1854cd.request.uri.href.includes("footlocker.eu")) {
        return await _0x4327c1.bind(this)(), ![];
      }

      var arg_1827 = '[' + new Date().toISOString() + "]: submitOrder[gift] status " + _0x5ae2f7 + " body: " + _0x1854cd.body;

      _0x2d2bdc(arg_1827, this.logFilePath);

      if (_0x5ae2f7 == 200 || _0x5ae2f7 == 201) {
        if (_0x1854cd.body && _0x1854cd.body.includes("Foot Locker Europe")) {
          return _0x5a14e3({
            'id': this.id,
            'status': "SubmitOrder Failed (proxy region)",
            'statusCode': 2,
            'groupId': this.groupId
          }), await _0x4327c1.bind(this)(), ![];
        }

        this.checkoutInfo.paymentStatus = _0x172aa3.xiQfa;

        try {
          let _0x3415e1 = JSON.parse(_0x1854cd.body);

          this.checkoutInfo.orderNumber = '#' + _0x3415e1.order.code;
        } catch (err) {
        }

        var arg_1829 = '[' + new Date().toISOString() + "]: Successfully Checked out!";

        _0x2d2bdc(arg_1829, this.logFilePath);

        _0x5a14e3(arg_1830);

        this.sender.send("checkoutSuccess", arg_1831);
      } else {
        if (_0x5ae2f7 == 403) {
          if (_0x1854cd.body.includes("geo.captcha-delivery.com")) {
            if (_0x1854cd.body.includes("&t=bv")) {
              return this.user_agent = _0x172aa3.DAhck, _0x5a14e3({
                'id': this.id,
                'status': "DataDome Banned, Rotating Proxy",
                'statusCode': 4,
                'groupId': this.groupId
              }), ![];
            }

            _0x5a14e3(arg_1833);

            let _0x12d6bf = JSON.parse(_0x1854cd.body);

            await _0x574f69.bind(this)(_0x12d6bf.url, _0x1854cd.headers["set-cookie"]);
          } else {
            if (_0x1854cd.body.includes("appId")) {
              return _0x5a14e3({
                'id': this.id,
                'status': "PX Blocked",
                'statusCode': 4,
                'groupId': this.groupId
              }), _0x2d2bdc('[' + new Date().toISOString() + "]: PX Blocked, " + _0x5ae2f7, this.logFilePath), this.running = ![], ![];
            } else {
              _0x5a14e3(arg_1834);

              var arg_1835 = '[' + new Date().toISOString() + "]: Submit Order[gift] Failed (Proxy Banned), Retrying, " + _0x5ae2f7;

              _0x2d2bdc(arg_1835, this.logFilePath);

              await _0x4327c1.bind(this)();
            }
          }

          return ![];
        } else {
          if (_0x5ae2f7 == 503 || _0x5ae2f7 == 529) {
            return await _0x406044.bind(this)(!![]), ![];
          } else {
            if (_0x5ae2f7 == 429 || _0x5ae2f7 == 430 || _0x5ae2f7 == 550) {
              return _0x5a14e3({
                'id': this.id,
                'status': "Submit Order[gift] [" + _0x5ae2f7 + "], Retry",
                'statusCode': 4,
                'groupId': this.groupId
              }), ![];
            } else {
              if (_0x1854cd.body.includes("Something isn't right. We suggest you check again or try another card") || _0x1854cd.body.includes("Something isn't right. Could you check again or use a different card") || _0x1854cd.body.includes("Something isn't right. We suggest you try again or use another payment method") || _0x1854cd.body.includes("declined")) {
                this.checkoutInfo.paymentStatus = _0x172aa3.BnhIJ;

                _0x5a14e3(arg_1837);
              } else {
                if (_0x1854cd.body.includes("limited to 1 per Customer")) {
                  this.checkoutInfo.paymentStatus = _0x172aa3.AUVZv;

                  _0x5a14e3(arg_1838);
                } else {
                  if (_0x1854cd.body.includes("Cart is empty") || _0x1854cd.body.includes("Reservation has expired")) {
                    this.checkoutInfo.paymentStatus = _0x172aa3.bqRDE;

                    _0x5a14e3(arg_1839);
                  } else {
                    if (_0x1854cd.body.includes("ZIP Code don't match")) {
                      this.checkoutInfo.paymentStatus = _0x172aa3.QeQir;

                      _0x5a14e3(arg_1840);
                    } else {
                      if (_0x1854cd.body.includes("international shipping")) {
                        this.checkoutInfo.paymentStatus = _0x172aa3.EABZd;

                        _0x5a14e3(arg_1841);
                      } else {
                        return _0x1854cd.body.includes("Validation error") ? (_0x5a14e3({
                          'id': this.id,
                          'status': "Session Expired, Retry",
                          'statusCode': 4,
                          'groupId': this.groupId
                        }), await _0x45a98b(this.errorDelay), await _0x37a847.bind(this)(), ![]) : (_0x2d2bdc('[' + new Date().toISOString() + "]: Submit Order[gift] Failed (" + _0x5ae2f7 + "), Retry", this.logFilePath), _0x5a14e3({
                          'id': this.id,
                          'status': "Submit Order[gift] Failed (" + _0x5ae2f7 + "), Retry",
                          'statusCode': 4,
                          'groupId': this.groupId
                        }), ![]);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      return !![];
    } catch (err) {
      return console.log(err), _0x2d2bdc('[' + new Date().toISOString() + "]: Submit Order[gift] Failed (" + err + "), retrying", this.logFilePath), _0x5a14e3({
        'id': this.id,
        'status': "submitOrder[gift] Failed\uFF0C Retry",
        'statusCode': 4,
        'groupId': this.groupId
      }), ![];
    }
  };

  const _0x28946e = async function () {
    const _0x28707e = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_1842);

      throw "stopped";
    }

    let _0x1df241 = ![];

    while (!_0x1df241) {
      let _0x2ec5f7 = await _0x23d02f.bind(this)();

      if (!_0x2ec5f7) {
        return null;
      }

      _0x1df241 = await _0x5746de.bind(this)();
      await _0x45a98b(1000);
    }

    return _0x1df241;
  };

  const _0x5746de = async function (_0x3ec1ba = 0) {
    const _0x434c30 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_1845);

      throw "stopped";
    }

    _0x5a14e3(arg_1844);

    try {
      if (this.useExp2) {
        _0x4b0ec1.uri = this.siteOrigin + "/apigate/users/carts/current?timestamp=" + Date.now();
        _0x4b0ec1.headers = {
          'host': this.host,
          'accept': "application/json",
          'accept-language': "en-us",
          'accept-encoding': "gzip, deflate, br",
          'x-flapi-cart-guid': this.cartId,
          'x-fl-app-version': this.appVersion,
          'x-flapi-api-identifier': this.apiIdentification,
          'x-api-key': this.apiKey,
          'user-agent': this.user_agent,
          'x-newrelic-id': this.newrelicId,
          'x-fl-device-id': this.deviceId,
          'x-fl-request-id': _0x28d3a4(),
          'x-csrf-token': this.x_csrf_token,
          'x-fl-productid': this.pickedSize.code,
          'x-flapi-session-id': this.ftlSessionId
        };
        _0x4b0ec1.rejectUnauthorized = ![];
      }

      const _0x12881e = await _0x35e74e.bind(this)(_0x4b0ec1);

      let _0x11188d = _0x12881e.statusCode;

      var arg_1846 = '[' + new Date().toISOString() + "]: Get Cart Status: " + _0x11188d + " with Body: " + _0x12881e.body;

      _0x2d2bdc(arg_1846, this.logFilePath);

      var arg_1847 = '[' + new Date().toISOString() + "]: Get Cart Status: " + _0x11188d + " with Body: " + _0x12881e.body;

      console.log(arg_1847);

      if (_0x12881e.request.uri.href.includes("footlocker.eu")) {
        await _0x4327c1.bind(this)();
      }

      if (_0x11188d == 200) {
        let _0x3fb007 = JSON.parse(_0x12881e.body);

        let _0x381091 = _0x3fb007.gfPaymentInfo;

        if (_0x381091.length == 0) {
          return ![];
        } else {
          let _0x75c3bb = _0x3fb007.totalPriceWithTax;
          return console.log(_0x75c3bb), _0x75c3bb && parseFloat(_0x75c3bb.value) == 0;
        }
      } else {
        if (_0x11188d == 403) {
          if (_0x12881e.body.includes("geo.captcha-delivery.com")) {
            _0x5a14e3(arg_1848);

            let _0x26858f = JSON.parse(_0x12881e.body);

            return await _0x574f69.bind(this)(_0x26858f.url, _0x12881e.headers["set-cookie"]), _0x5746de.bind(this)(_0x3ec1ba + 1);
          }

          if (_0x12881e.body.includes("appId")) {
            return _0x5a14e3({
              'id': this.id,
              'status': "PX Blocked",
              'statusCode': 4,
              'groupId': this.groupId
            }), _0x2d2bdc('[' + new Date().toISOString() + "]: PX Blocked, " + _0x11188d, this.logFilePath), this.running = ![], ![];
          } else {
            return _0x5a14e3({
              'id': this.id,
              'status': "Check Cart [" + _0x11188d + "], Retry",
              'statusCode': 4,
              'groupId': this.groupId
            }), await _0x4327c1.bind(this)(), await _0x45a98b(this.errorDelay), _0x5746de.bind(this)(_0x3ec1ba + 1);
          }
        } else {
          if (_0x11188d == 503 || _0x11188d == 529) {
            await _0x406044.bind(this)(!![]);
          } else {
            if (_0x11188d == 429 || _0x11188d == 430) {
              return _0x5a14e3({
                'id': this.id,
                'status': "Check Cart [" + _0x11188d + "], Retry",
                'statusCode': 4,
                'groupId': this.groupId
              }), await _0x45a98b(this.monitorDelay), _0x5746de.bind(this)(_0x3ec1ba + 1);
            }
          }
        }
      }

      return _0x5a14e3({
        'id': this.id,
        'status': "Check Cart Failed [" + _0x11188d + ']',
        'statusCode': 4,
        'groupId': this.groupId
      }), await _0x45a98b(this.errorDelay), _0x5746de.bind(this)(_0x3ec1ba + 1);
    } catch (err) {
      const _0x4e42e8 = "3|2|4|0|1".split('|');

      let _0x5f5a77 = 0;
      console.log(err);
      var arg_1853 = '[' + new Date().toISOString() + "]: Check Cart Failed " + err;

      _0x2d2bdc(arg_1853, this.logFilePath);

      _0x5a14e3(arg_1854);

      await _0x45a98b(this.errorDelay);
      return _0x5746de.bind(this)(_0x3ec1ba + 1);
    }
  };

  const _0x23d02f = async function () {
    const _0x23383b = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_1855);

      throw "stopped";
    }

    try {
      let _0x3d89b5 = _0xaa0e22.bind(this)(this.gfCardsIds[this.gfCardGroupIndex % this.gfCardsIds.length]);

      if (!_0x3d89b5) {
        return _0x5a14e3({
          'id': this.id,
          'status': "No Cards Available",
          'statusCode': 2,
          'groupId': this.groupId
        }), _0x2d2bdc('[' + new Date().toISOString() + "]: No Cards Available", this.logFilePath), null;
      }

      _0x5a14e3(arg_1857);

      if (this.useExp2) {
        _0x1ce202.uri = this.siteOrigin + "/apigate/users/carts/current/add-giftcard?timestamp=" + Date.now();
        _0x1ce202.headers = {
          'host': this.host,
          'accept': "application/json",
          'accept-language': "en-us",
          'accept-encoding': "gzip, deflate, br",
          'content-type': "application/json",
          'x-flapi-cart-guid': this.cartId,
          'x-fl-app-version': this.appVersion,
          'x-flapi-api-identifier': this.apiIdentification,
          'x-api-key': this.apiKey,
          'user-agent': this.user_agent,
          'x-newrelic-id': this.newrelicId,
          'x-fl-device-id': this.deviceId,
          'x-fl-request-id': _0x28d3a4(),
          'x-csrf-token': this.x_csrf_token,
          'x-fl-productid': this.pickedSize.code,
          'x-flapi-session-id': this.ftlSessionId
        };
        _0x1ce202.rejectUnauthorized = ![];
      }

      const _0x41a3ab = await _0x35e74e.bind(this)(_0x1ce202);

      let _0x25e795 = _0x41a3ab.statusCode;
      var arg_1858 = "Adding GiftCard " + _0x25e795;
      console.log(arg_1858);
      console.log(_0x41a3ab.body);

      var arg_1859 = '[' + new Date().toISOString() + "]: Adding GiftCard Status: " + _0x25e795 + " with Body: " + _0x41a3ab.body;

      _0x2d2bdc(arg_1859, this.logFilePath);

      if (_0x41a3ab.request.uri.href.includes("footlocker.eu")) {
        await _0x4327c1.bind(this)();
      }

      if (_0x25e795 >= 300) {
        if (_0x25e795 == 403) {
          if (_0x41a3ab.body.includes("geo.captcha-delivery.com")) {
            _0x5a14e3(arg_1860);

            let _0x21d2d9 = JSON.parse(_0x41a3ab.body);

            await _0x574f69.bind(this)(_0x21d2d9.url, _0x41a3ab.headers["set-cookie"]);
          } else {
            if (_0x41a3ab.body.includes("appId")) {
              return _0x5a14e3({
                'id': this.id,
                'status': "PX Blocked",
                'statusCode': 4,
                'groupId': this.groupId
              }), _0x2d2bdc('[' + new Date().toISOString() + "]: PX Blocked, " + _0x25e795, this.logFilePath), this.running = ![], ![];
            } else {
              _0x5a14e3(arg_1863);

              var arg_1864 = '[' + new Date().toISOString() + "]: Adding GiftCard Failed (Akamai Banned), Retry, " + _0x25e795;

              _0x2d2bdc(arg_1864, this.logFilePath);

              await _0x4327c1.bind(this)();
              await _0x45a98b(this.errorDelay);
            }
          }
        } else {
          if (_0x25e795 == 503 || _0x25e795 == 529) {
            await _0x406044.bind(this)(!![]);
          } else {
            if (_0x25e795 == 400) {
              if (_0x41a3ab.body && _0x41a3ab.body.includes("already added")) {
                _0x5a14e3(arg_1865);

                var arg_1866 = '[' + new Date().toISOString() + "]: Gift Card Already Added, Retry";

                _0x2d2bdc(arg_1866, this.logFilePath);
              } else {
                _0x5a14e3(arg_1867);

                var arg_1868 = '[' + new Date().toISOString() + "]: Incorrect Gift Card Info, Retry";

                _0x2d2bdc(arg_1868, this.logFilePath);
              }

              await _0x45a98b(this.errorDelay);
            } else {
              _0x5a14e3(arg_1869);

              await _0x45a98b(this.errorDelay);
            }
          }
        }

        return _0x23d02f.bind(this)();
      }

      return !![];
    } catch (err) {
      const _0x3f36e8 = "3|4|1|0|2".split('|');

      let _0x2f3290 = 0;
      console.log(err);

      _0x5a14e3(arg_1870);

      var arg_1871 = '[' + new Date().toISOString() + "]: Adding GiftCard Failed, Error: " + err;

      _0x2d2bdc(arg_1871, this.logFilePath);

      await _0x45a98b(this.errorDelay);
      return _0x23d02f.bind(this)();
    }
  };

  const {
    session: _0x1a60b9,
    app: _0x38e50b
  } = _0x5b1a41;

  const _0x33b54d = arg_6 + "/taskLogs";

  class _0x369a5d {
    constructor(_0x20c92a, _0x369d3d, _0x3f549a, _0x150c1c, _0x16a99d, _0x2c2b1d, _0x56d5fa, _0x4c6985, _0xdf45b4, _0xbf14ee, _0x40a1a1, _0x398a12, _0x3ea579, _0x4924df, _0x5d7b8d, _0x5283bf, _0x41cd1f, _0x20f75b) {
      const _0x24e639 = _0x8044f7;
      this.sessionName = "footsite-" + _0x369d3d + '-' + _0x20c92a + '-' + _0x2bda7f();
      this.id = _0x20c92a;
      this.groupId = _0x369d3d;
      this.clientIp = null;
      this.profile = _0x3f549a;
      var arg_1873 = parseInt(this.profile.expyear);
      var arg_1872 = arg_1873 % 10000;
      this.profile.expyear = arg_1872 + '';
      this.size = _0x150c1c;
      this.modes = _0x16a99d;
      this.type = _0x2c2b1d;
      this.siteOrigin = _0x56d5fa;
      this.siteName = _0x5283bf;
      this.host = _0x56d5fa.replace("https://", '');
      this.proxy = _0x4c6985;
      this.proxyList = _0x41cd1f;
      this.searchLink = _0xdf45b4;
      this.productPID = _0xbf14ee.trim();
      this.searchContent = _0xbf14ee;
      this.monitorDelay = _0x40a1a1;
      this.login = _0x398a12;
      this.needLogin = _0x3ea579;
      this.sender = _0x4924df;
      this.running = ![];
      this.currentURL = this.siteOrigin;
      this.productLink = this.siteOrigin + "/product/~/" + this.productPID + ".html";
      this.ready = ![];
      this.started = ![];
      this.oKey = null;
      this.needCaptcha = ![];
      this.apiKey = null;
      this.x_csrf_token = null;
      this.billingid = null;
      this.cartId = null;
      this.pickedSize = null;
      this.errorDelay = 5000;
      this.retryaddcart = 0;
      this.user_agent = _0x310223(_0x2b33c7.FOOTSITE);
      this.successWebhook = _0x172aa3.OiUPE;
      this.declineWebhook = _0x172aa3.jdUZa;
      this.variants = null;
      this.rp = null;
      this.domain = this.siteOrigin.replace("https://", '').replace("www.", '');
      this.queueWaitTime = null;
      this.ftlSessionId = null;
      this.usingNet = ![];
      this.checkoutInfo = {
        'version': _0x38e50b.getVersion(),
        'discordId': global.user.userId,
        'key': global.user.key,
        'siteType': this.type,
        'siteName': _0x5283bf,
        'siteURL': this.searchContent,
        'store': this.siteOrigin,
        'checkoutSpeed': 0,
        'productName': "N/A",
        'size': null,
        'price': "N/A",
        'profileName': this.profile.name,
        'orderNumber': "N/A",
        'proxyIp': this.proxy,
        'mode': Object.keys(this.modes).filter(_0x95f0dc => this.modes[_0x95f0dc]).join('-'),
        'imageURL': null,
        'paymentStatus': null,
        'sku': null,
        'date': new Date().toISOString(),
        'timestamp': Date.now(),
        'email': this.profile.email
      };
      this.solveCaptcha = this.modes.Captcha;
      this.addedPassingQueueCount = ![];
      this.startTime = Date.now();
      this.price = null;
      this.options = {
        'jar': !![],
        'gzip': !![]
      };

      if (this.proxy) {
        this.options.proxy = this.proxy;
      }

      this.logFilePath = _0x33b54d + '/' + _0x5d7b8d + '/' + this.profile.name + '_' + this.id;
      this.isQueueIt = !![];
      this.fastQueue = ![];
      this.customerId = null;
      this.eventId = null;
      this.queueDomain = null;
      this.xQueueit = null;
      this.hasQueue = ![];
      this.authUserId = null;
      this.gfCardsIds = _0x20f75b;
      this.useGiftCard = this.modes.giftCard && this.gfCardsIds && this.gfCardsIds.length > 0;
      this.gfCardGroupIndex = 0;
      this.queueItURL = null;
      this.powUserId = null;
      this.layoutName = null;
      this.layoutVersion = null;
      this.timingURL = _0x172aa3.UBdtx;
      this.timeQueueId = _0x172aa3.ldubT;
      this.timeQueueTag = _0x172aa3.zsnxS;
      this.useExp2 = this.modes.Exp2 && global.enabledExp2;
      this.cacheNodes = _0x3bcf8c;
      this.cacheNodeIndex = 0;
      this.deviceId = _0x28d3a4();

      if (this.useExp2) {
        const _0x169070 = "1|5|0|3|4|2".split('|');

        let _0x1d767d = 0;
        this.apiKey = _0x39aa8c[_0x56d5fa].apiKey;
        this.user_agent = _0x39aa8c[_0x56d5fa].ua;
        this.apiIdentification = _0x172aa3.CsXCq;
        this.newrelicId = _0x172aa3.hsBXz;
        this.appVersion = _0x172aa3.YfsbS;
        var arg_1874 = Math.random();
        this.setWRCookie = arg_1874 > 0.5;
      }

      if (this.useExp2 && this.setWRCookie) {
        this.checkoutInfo.mode += _0x172aa3.WbmjF;
      }

      this.ddHardBan = ![];
    }

    async initSession(_0x18eb2f) {
      const _0x2707d9 = _0x8044f7;

      if (!this.usingNet) {
        this.rp = require("request-promise");
        this.jar = this.rp.jar();
      } else {
        _0x18eb2f = _0x18eb2f && _0x18eb2f.replace("http://", '');

        if (_0x18eb2f && _0x18eb2f.includes('@')) {
          _0x18eb2f = _0x18eb2f.split('@')[1] + ':' + _0x18eb2f.split('@')[0];
        }

        var arg_1875 = '' + this.sessionName;
        this.session = _0x1a60b9.fromPartition(arg_1875);
        await _0x354f98.bind(this)();
        let _0x2dc905 = null;

        if (_0x18eb2f) {
          _0x2dc905 = _0x18eb2f.split(':')[0] + ':' + _0x18eb2f.split(':')[1];
        } else {
          _0x2dc905 = '';
        }

        this.proxyHost = _0x2dc905;
        this.proxyUsername = _0x18eb2f && _0x18eb2f.split(':')[2] ? _0x18eb2f.split(':')[2] : '';
        this.proxyPassword = _0x18eb2f && _0x18eb2f.split(':')[3] ? _0x18eb2f.split(':')[3] : '';
        await this.session.setProxy({
          'proxyRules': _0x2dc905
        });
      }
    }

    async productFound() {
      const _0x1066b8 = _0x8044f7;

      while (this.running && !this.ready) {
        await _0x45a98b(100);
      }

      if (this.running && !this.started) {
        this.started = !![];
        this.startCheckoutProcess();
      }
    }

    isProductFound() {
      const _0x1afa6d = _0x8044f7;

      let _0x18ddc5 = this.checkoutInfo && this.checkoutInfo.productName != "N/A";

      if (_0x18ddc5) {
        return {
          'imgLink': this.checkoutInfo.imageURL,
          'productName': this.checkoutInfo.productName
        };
      }

      return ![];
    }

    async runTask(_0x3242a9 = ![]) {
      const _0x33572c = _0x8044f7;

      if (this.running) {
        return;
      }

      this.running = !![];
      await this.initSession(this.proxy);
      var arg_1879 = '[' + new Date().toISOString() + "]: is task running: " + this.running + " task " + this.id + " started...";

      _0x2d2bdc(arg_1879, this.logFilePath);

      console.log("update");

      _0x5a14e3(arg_1880);

      if (!this.running) {
        return;
      }

      this.ready = !![];

      _0x5a14e3(arg_1881);

      if (this.running && !this.started && _0x3242a9) {
        await _0x4327c1.bind(this)();
        this.startCheckoutProcess();
      }
    }

    async startCheckoutProcess() {
      const _0x48536f = _0x8044f7;
      this.ddHardBan = ![];
      global.taskStatus.footsites.runningNumber++;

      _0x5a14e3(arg_1883);

      await _0x37a847.bind(this)();

      if (!this.running) {
        return;
      }

      await _0x12e3f2.bind(this)();

      if (!this.running) {
        return;
      }

      if (this.hasQueue && global.taskStatus.footsites.passedQueueNumber++) {
        this.addedPassingQueueCount = !![];
      }

      let _0x12f8ee = await _0xa52164.bind(this)();

      if (!_0x12f8ee || !this.running) {
        return;
      }

      global.taskStatus.footsites.cartedNumber++;

      let _0x2f46f1 = await _0x3e04a3.bind(this)();

      if (!_0x2f46f1 || !this.running) {
        return;
      }

      let _0x2f8b84 = null;

      if (this.useGiftCard) {
        let _0x163a2b = await _0x28946e.bind(this)();

        if (!_0x163a2b) {
          _0x2f8b84 = await _0x48c7e8.bind(this)();
        } else {
          _0x2f8b84 = await _0xf568ba.bind(this)();
        }
      } else {
        _0x2f8b84 = await _0x48c7e8.bind(this)();
      }

      if (!_0x2f8b84 || !this.running) {
        return;
      }

      await this.sendToWebhook();
    }

    async sendToWebhook() {
      const _0x19c074 = _0x8044f7;

      const _0x20a31e = "5|8|9|1|3|6|0|7|4|2".split('|');

      let _0x2b4085 = 0;
      var arg_1885 = Date.now();
      this.checkoutInfo.checkoutSpeed = arg_1885 - this.startTime;
      this.checkoutInfo.date = new Date().toISOString();
      this.checkoutInfo.timestamp = Date.now();
      this.checkoutInfo.delay = this.monitorDelay;

      if (this.checkoutInfo.paymentStatus == "Success") {
        global.taskStatus.footsites.checkedOutNumber++;
      } else {
        global.taskStatus.footsites.declinedNumber++;
      }

      _0x27b1e4(this.checkoutInfo);

      var arg_1886 = _0x4cf7c0(this.checkoutInfo, !![]);

      var arg_1887 = this.checkoutInfo.paymentStatus == "Success";

      _0x3ef86a(arg_1886, arg_1887);

      var arg_1888 = _0x4cf7c0(this.checkoutInfo, ![]);

      var arg_1889 = null;

      if (this.checkoutInfo.paymentStatus == "Success") {
        arg_1889 = this.successWebhook;
      } else {
        arg_1889 = this.declineWebhook;
      }

      _0x586466(arg_1888, arg_1889);

      if (this.checkoutInfo.paymentStatus == "Success") {
        var arg_1890 = _0x4cf7c0(this.checkoutInfo, ![]);

        _0x586466(arg_1890, global.successWebhook);
      }

      return;
    }

    editRunner(_0x2214ff) {
      const _0x239504 = _0x8044f7;
      this.monitorDelay = parseInt(_0x2214ff);
    }

    async stopTask() {
      const _0xab036d = _0x8044f7;
      global.taskStatus.footsites.runningNumber--;

      if (this.hasQueue && this.addedPassingQueueCount) {
        global.taskStatus.footsites.passedQueueNumber--;
      }

      this.addedPassingQueueCount = ![];
      this.hasQueue = ![];
      this.running = ![];
      this.variants = null;
      this.ftlSessionId = null;
      this.rp = null;
      this.jar = null;
      this.currentURL = null;
      this.akamaiCookie = null;
      this.authToken = null;
      this.started = ![];
      this.pickedSize = null;
      this.checkoutInfo = null;
      this.clientIp = null;
      this.fastQueue = ![];
      this.queueWaitTime = null;
      this.authUserId = null;
      this.gfCardsIds = null;
      this.useGiftCard = ![];
      console.log("stop task");

      if (this.needCaptcha) {
        _0x233257.bind(this)();

        global.dataDomeAttepted = ![];
      }

      await _0x354f98.bind(this)();

      _0x5a14e3(arg_1892);

      var arg_1893 = '[' + new Date().toISOString() + "]: Stopped";

      _0x2d2bdc(arg_1893, this.logFilePath);
    }

  }

  const _0x33fa73 = new _0x5860df();

  const _0x3c6c09 = require("ntpsync");

  const _0x1e09e7 = require("get-random-values");

  const _0x34b06a = async function (_0x1ef25a) {
    const _0x5919e9 = _0x8044f7;

    let _0x2c77f0 = _0x33fa73.get("accounttoken");

    if (!_0x2c77f0) {
      _0x2c77f0 = [];
    }

    let _0x45f85b = !![];

    for (let _0x51a329 of _0x2c77f0) {
    }

    if (_0x45f85b) {
      _0x2c77f0.push(_0x2b579f);
    }

    _0x33fa73.set("accounttoken", _0x2c77f0);
  };

  const _0x1841d2 = async function () {
    const _0x1bdcce = _0x8044f7;
    let _0x2354ca = this.proxyList[Math.floor(Math.random() * this.proxyList.length)];
    let _0x4ed6f5 = null;

    if (_0x2354ca && _0x2354ca.split(':').length > 1) {
      _0x4ed6f5 = _0x2354ca.split(':')[0] + ':' + _0x2354ca.split(':')[1];
    } else {
      _0x4ed6f5 = '';
    }

    this.proxyUsername = _0x2354ca && _0x2354ca.split(':')[2] ? _0x2354ca.split(':')[2] : '';
    this.proxyPassword = _0x2354ca && _0x2354ca.split(':')[3] ? _0x2354ca.split(':')[3] : '';

    if (_0x2354ca != '') {
      let _0x3840e1 = _0x2354ca.split(':');

      this.proxy = _0x3840e1.length < 4 ? "http://" + _0x3840e1[0] + ':' + _0x3840e1[1] : "http://" + _0x3840e1[2] + ':' + _0x3840e1[3] + '@' + _0x3840e1[0] + ':' + _0x3840e1[1];
    }

    await this.session.setProxy({
      'proxyRules': _0x4ed6f5
    });
  };

  const _0x1976f8 = (_0x9d7e26, _0x1175bc) => {
    const _0x2952d5 = _0x8044f7;

    try {
      let _0x46eba6 = _0x9d7e26.paymentStatus != "Success";

      let _0x1ab3a4 = [];
      let _0xcacf0d = [];

      _0xcacf0d.push(arg_1896);

      _0xcacf0d.push(arg_1897);

      _0xcacf0d.push(arg_1898);

      _0xcacf0d.push(arg_1899);

      _0xcacf0d.push(arg_1900);

      _0xcacf0d.push(arg_1901);

      _0xcacf0d.push(arg_1902);

      if (_0x1175bc) {
        _0xcacf0d.push(arg_1905);

        _0xcacf0d.push(arg_1906);

        _0xcacf0d.push(arg_1907);

        _0xcacf0d.push(arg_1908);
      }

      _0xcacf0d.push(arg_1903);

      _0xcacf0d.push(arg_1904);

      return _0x1ab3a4.push(_0x2d3045), _0x1c4bdc.embeds = _0x1ab3a4, _0x1c4bdc;
    } catch (err) {
      console.log(err);
    }
  };

  let _0x309b60 = function () {
    const _0x57b7fb = _0x8044f7;

    let _0x1a182a = ![];

    if (global.snkrsBrowser >= 1) {
      this.isCanRelease = !![];
      global.snkrsBrowser -= 1;
      console.log("global.snkrsBrowser", global.snkrsBrowser);
      _0x1a182a = !![];
    }

    return _0x1a182a;
  };

  let _0x51259d = function () {
    const _0x485e83 = _0x8044f7;

    if (this.isCanRelease) {
      this.isCanRelease = ![];
      global.snkrsBrowser += 1;
      console.log("global.snkrsBrowser", global.snkrsBrowser);
    }
  };

  let _0x352b78 = function () {
    const _0x200a18 = _0x8044f7;

    let _0x2fb4ef = ![];

    if (global.submitLimit >= 1) {
      this.isSubmitDone = !![];
      global.submitLimit -= 1;
      console.log("global.submitLimit", global.submitLimit);
      _0x2fb4ef = !![];
    }

    return _0x2fb4ef;
  };

  let _0x3f4c07 = function () {
    const _0x5e1b48 = _0x8044f7;

    if (this.isSubmitDone) {
      this.isSubmitDone = ![];
      global.submitLimit += 1;
      console.log("global.submitLimit", global.submitLimit);
    }
  };

  let _0x19184a = async function (_0x4dd4c3, _0x43390f, _0x506bd1 = ![], _0x2d7c22, _0x20d1e1 = !![], _0xbc5fa1 = ![], _0x577ede = null, _0x9a506 = ![], _0x4a38e1 = ![]) {
    const _0x58f9a3 = _0x8044f7;

    try {
      if (_0x506bd1) {
        let _0x32757b = await _0x2d7c22.waitForSelector(_0x4dd4c3);

        await _0x32757b.type(_0x43390f.toString());
      } else {
        var _0x2d55fa;

        if (_0x4a38e1) {
          _0x2d55fa = await _0x2d7c22.waitForXPath(_0x4dd4c3, {
            'visible': !![]
          });
          await _0x2d55fa.click();
        } else {
          _0x2d55fa = await _0x2d7c22.waitForSelector(_0x4dd4c3, {
            'visible': !![]
          });
          await _0x2d7c22.click(_0x4dd4c3);
        }

        if (_0x20d1e1) {
          const _0x50b1a0 = "4|3|0|2|1".split('|');

          let _0x13b89b = 0;
          console.log("isBackspace", _0x20d1e1);
          await _0x45a98b(500);
          await _0x2d55fa.click({
            'clickCount': 3
          });
          await _0x2d55fa.press("Backspace");
          await _0x2d55fa.type(_0x43390f.toString(), {
            'delay': 30
          });
        } else {
          await _0x2d7c22.type(_0x4dd4c3, _0x43390f.toString(), {
            'delay': 40
          });
        }

        if (_0x4a38e1) {
          return;
        }

        console.log('1', await _0x2d7c22.evaluate("document.querySelector(\"" + _0x4dd4c3 + "\").value"), "|||");

        if (_0x577ede == null) {
          _0x577ede = _0x43390f.toString().trim();
        } else {
          _0x577ede = _0x577ede.trim();
        }

        let _0x2c2b45 = await _0x2d7c22.evaluate("document.querySelector(\"" + _0x4dd4c3 + "\").value");

        console.log('2', _0x2c2b45, "|||inputValue");
        console.log('2', _0x577ede, "|||checkValue");

        let _0x5e1313 = _0x2c2b45.replace(/\s+/g, '');

        let _0x3e1bb7 = _0x577ede.replace(/\s+/g, '');

        console.log('3', _0x5e1313, "|||inputValue2");
        console.log('3', _0x3e1bb7, "|||checkValue2");

        if (_0x9a506) {
          return await _0x45a98b(500), _0x19184a.bind(this)(_0x4dd4c3, _0x43390f, _0x506bd1, _0x2d7c22, !![], _0xbc5fa1, _0x577ede, _0x9a506);
        }

        if (_0x3e1bb7 != _0x5e1313) {
          return await _0x45a98b(500), _0x19184a.bind(this)(_0x4dd4c3, _0x43390f, _0x506bd1, _0x2d7c22, !![], _0xbc5fa1, _0x577ede, _0x9a506);
        }

        if (_0xbc5fa1) {
          var arg_1917 = _0x53f53d(_0x4dd4c3, _0x2c2b45);

          _0x2d7c22.evaluate(arg_1917);
        }

        console.log('4', await _0x2d7c22.evaluate("document.querySelector(\"" + _0x4dd4c3 + "\").value"), "|||");
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  let _0x53f53d = (_0x3a8ffb, _0x4d6a74) => {
    const _0x57980c = _0x8044f7;
    return "\n        if (document.querySelector(\"" + _0x3a8ffb + "\").value !== '" + _0x4d6a74 + "') {\n            document.querySelector(\"" + _0x3a8ffb + "\").value = '" + _0x4d6a74 + "'\n        }\n    ";
  };

  const _0x5f5a20 = async function () {
    const _0x10b5e5 = _0x8044f7;

    try {
      if (global.cookies.snkrs && global.cookies.snkrs.length > 0) {
        let _0xe16391 = global.cookies.snkrs.pop();

        return {
          'cookie': _0xe16391,
          'type': "LOCAL"
        };
      }

      return {
        'cookie': null,
        'type': "N/A"
      };
    } catch (err) {
      return {
        'cookie': null,
        'type': "N/A"
      };
    }
  };

  const _0x438b58 = async (_0x449b89, _0x4e7c82, _0x53fec9) => {
    const _0x17990d = _0x8044f7;

    try {
      let _0x8d4117 = _0x1c3c2d.jar();

      console.log("proxy", _0x4e7c82);

      let _0x4cae54 = _0x4e7c82 && _0x4e7c82.length > 0;

      console.log("useProxy", _0x4cae54);

      if (_0x4cae54) {
        let _0x618509 = _0x4e7c82.split(':');

        _0x2d318e.proxy = _0x618509.length > 2 ? "http://" + _0x618509[2] + ':' + _0x618509[3] + '@' + _0x618509[0] + ':' + _0x618509[1] : "http://" + _0x4e7c82;
      }

      var _0x8f2967 = await _0x1c3c2d(_0x2d318e);

      var _0x52d31e = _0x8f2967.statusCode;
      console.log("statusCode", _0x52d31e);

      if (_0x52d31e == 200) {
        var arg_1918 = _0x17a2e7 + 28;

        let _0x17a2e7 = _0x8f2967.body.indexOf("window.__PRELOADED_STATE__ =");

        let _0xf491e8 = _0x8f2967.body.indexOf(";window.initilizeAppWithHandoffState");

        let _0x523246 = _0x8f2967.body.substring(arg_1918, _0xf491e8);

        let _0x3f5945 = JSON.parse(_0x523246);

        let _0x3012c0 = '';

        for (let _0x3a2fea in _0x3012c0) {
          _0x1d4751[_0x3012c0[_0x3a2fea].id] = _0x3012c0[_0x3a2fea].subtitle + '-' + _0x3012c0[_0x3a2fea].styleColor;
        }

        console.log(_0x1d4751);

        _0x53fec9.send("fetchSnkrsProductStatus", arg_1919);
      } else {
        _0x53fec9.send("fetchSnkrsProductStatus", arg_1920);
      }
    } catch (err) {
      return _0x53fec9.send("fetchSnkrsProductStatus", {
        'productLink': _0x449b89,
        'fetchresult': null,
        'statusCode': 4
      }), console.log(err), null;
    }
  };

  var _0x55d499 = "input is invalid type";

  var _0x1e5855 = "object" == typeof window;

  var _0x2705c0 = null;
  var _0x25718c = [-2147483648, 8388608, 32768, 128];

  var _0x33664c = "0123456789abcdef".split('');

  var _0x5d4bfd = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

  var _0x238ac6 = !_0x2705c0.JS_SHA256_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer;

  var _0x1144d1 = [24, 16, 8, 0];

  if (_0x1e5855) {
    _0x2705c0 = window;
  } else {
    _0x2705c0 = {};
  }

  function _0x4b05b0() {
    const _0x41146c = _0x8044f7;
    var _0x5a5616 = '',
      _0x10eab3 = 0;
    ;

    for (; _0x10eab3 < 32; _0x10eab3 += 1) {
      _0x5a5616 += "0123456789abcdef"[Math.floor(16 * Math.random())];
    }

    return _0x5a5616;
  }

  function _0x2c1c19(_0x304feb, _0x307f06) {
    const _0x4db05b = _0x8044f7;
    let _0x5ab4b8 = [];

    if (_0x307f06) {
      _0x5ab4b8[0] = _0x5ab4b8[16] = _0x5ab4b8[1] = _0x5ab4b8[2] = _0x5ab4b8[3] = _0x5ab4b8[4] = _0x5ab4b8[5] = _0x5ab4b8[6] = _0x5ab4b8[7] = _0x5ab4b8[8] = _0x5ab4b8[9] = _0x5ab4b8[10] = _0x5ab4b8[11] = _0x5ab4b8[12] = _0x5ab4b8[13] = _0x5ab4b8[14] = _0x5ab4b8[15] = 0;
      this.blocks = _0x5ab4b8;
    } else {
      this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    if (_0x304feb) {
      this.h0 = 3238371032;
      this.h1 = 914150663;
      this.h2 = 812702999;
      this.h3 = 4144912697;
      this.h4 = 4290775857;
      this.h5 = 1750603025;
      this.h6 = 1694076839;
      this.h7 = 3204075428;
    } else {
      this.h0 = 1779033703;
      this.h1 = 3144134277;
      this.h2 = 1013904242;
      this.h3 = 2773480762;
      this.h4 = 1359893119;
      this.h5 = 2600822924;
      this.h6 = 528734635;
      this.h7 = 1541459225;
    }

    this.block = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = !1;
    this.first = !0;
    this.is224 = _0x304feb;
  }

  _0x2c1c19.prototype.hash = function () {
    const _0x2478ac = _0x8044f7;

    var _0x17de4f;

    var _0x29ee36;

    var _0x12d9a0;

    var _0x341d26;

    var _0x4ce153;

    var _0x5cbc0e;

    var _0x291f7b;

    var _0x183cd9;

    var _0x46c9b0;

    var _0x597983 = this.h0;
    var _0x443d19 = this.h1;
    var _0x1e3db9 = this.h2;
    var _0xd61ca8 = this.h3;
    var _0x222558 = this.h4;
    var _0x2f52f5 = this.h5;
    var _0x480075 = this.h6;
    var _0x5406aa = this.h7;
    var _0x468cbc = this.blocks;
    _0x17de4f = 16;

    for (; _0x17de4f < 64; ++_0x17de4f) {
      var arg_1934 = (_0x4ce153 = _0x468cbc[_0x17de4f - 15]) >>> 7;
      var arg_1935 = _0x4ce153 << 25;
      var arg_1932 = arg_1934 | arg_1935;
      var arg_1936 = _0x4ce153 >>> 18;
      var arg_1937 = _0x4ce153 << 14;
      var arg_1933 = arg_1936 | arg_1937;
      var arg_1930 = arg_1932 ^ arg_1933;
      var arg_1931 = _0x4ce153 >>> 3;
      _0x29ee36 = arg_1930 ^ arg_1931;
      var arg_1942 = (_0x4ce153 = _0x468cbc[_0x17de4f - 2]) >>> 17;
      var arg_1943 = _0x4ce153 << 15;
      var arg_1940 = arg_1942 | arg_1943;
      var arg_1944 = _0x4ce153 >>> 19;
      var arg_1945 = _0x4ce153 << 13;
      var arg_1941 = arg_1944 | arg_1945;
      var arg_1938 = arg_1940 ^ arg_1941;
      var arg_1939 = _0x4ce153 >>> 10;
      _0x12d9a0 = arg_1938 ^ arg_1939;
      var arg_1948 = _0x468cbc[_0x17de4f - 16] + _0x29ee36;
      var arg_1947 = arg_1948 + _0x468cbc[_0x17de4f - 7];
      var arg_1946 = arg_1947 + _0x12d9a0;
      _0x468cbc[_0x17de4f] = arg_1946 << 0;
    }

    _0x46c9b0 = _0x443d19 & _0x1e3db9;
    _0x17de4f = 0;

    for (; _0x17de4f < 64; _0x17de4f += 4) {
      if (this.first) {
        if (this.is224) {
          _0x5cbc0e = 300032;
          var arg_1990 = (_0x4ce153 = _0x468cbc[0] - 1413257819) - 150054599;
          _0x5406aa = arg_1990 << 0;
          var arg_1991 = _0x4ce153 + 24177077;
          _0xd61ca8 = arg_1991 << 0;
        } else {
          _0x5cbc0e = 704751109;
          var arg_1992 = (_0x4ce153 = _0x468cbc[0] - 210244248) - 1521486534;
          _0x5406aa = arg_1992 << 0;
          var arg_1993 = _0x4ce153 + 143694565;
          _0xd61ca8 = arg_1993 << 0;
        }

        this.first = !1;
      } else {
        var arg_1998 = _0x597983 >>> 2;
        var arg_1999 = _0x597983 << 30;
        var arg_1996 = arg_1998 | arg_1999;
        var arg_2000 = _0x597983 >>> 13;
        var arg_2001 = _0x597983 << 19;
        var arg_1997 = arg_2000 | arg_2001;
        var arg_1994 = arg_1996 ^ arg_1997;
        var arg_2002 = _0x597983 >>> 22;
        var arg_2003 = _0x597983 << 10;
        var arg_1995 = arg_2002 | arg_2003;
        _0x29ee36 = arg_1994 ^ arg_1995;
        var arg_2005 = _0x597983 & _0x1e3db9;
        var arg_2004 = (_0x5cbc0e = _0x597983 & _0x443d19) ^ arg_2005;
        _0x341d26 = arg_2004 ^ _0x46c9b0;
        var arg_2006 = _0xd61ca8 + (_0x4ce153 = _0x5406aa + (_0x12d9a0 = (_0x222558 >>> 6 | _0x222558 << 26) ^ (_0x222558 >>> 11 | _0x222558 << 21) ^ (_0x222558 >>> 25 | _0x222558 << 7)) + (_0x222558 & _0x2f52f5 ^ ~_0x222558 & _0x480075) + _0x5d4bfd[_0x17de4f] + _0x468cbc[_0x17de4f]);
        _0x5406aa = arg_2006 << 0;
        var arg_2008 = _0x29ee36 + _0x341d26;
        var arg_2007 = _0x4ce153 + arg_2008;
        _0xd61ca8 = arg_2007 << 0;
      }

      var arg_1953 = _0xd61ca8 >>> 2;
      var arg_1954 = _0xd61ca8 << 30;
      var arg_1951 = arg_1953 | arg_1954;
      var arg_1955 = _0xd61ca8 >>> 13;
      var arg_1956 = _0xd61ca8 << 19;
      var arg_1952 = arg_1955 | arg_1956;
      var arg_1949 = arg_1951 ^ arg_1952;
      var arg_1957 = _0xd61ca8 >>> 22;
      var arg_1958 = _0xd61ca8 << 10;
      var arg_1950 = arg_1957 | arg_1958;
      _0x29ee36 = arg_1949 ^ arg_1950;
      var arg_1960 = _0xd61ca8 & _0x443d19;
      var arg_1959 = (_0x291f7b = _0xd61ca8 & _0x597983) ^ arg_1960;
      _0x341d26 = arg_1959 ^ _0x5cbc0e;
      var arg_1961 = _0x1e3db9 + (_0x4ce153 = _0x480075 + (_0x12d9a0 = (_0x5406aa >>> 6 | _0x5406aa << 26) ^ (_0x5406aa >>> 11 | _0x5406aa << 21) ^ (_0x5406aa >>> 25 | _0x5406aa << 7)) + (_0x5406aa & _0x222558 ^ ~_0x5406aa & _0x2f52f5) + _0x5d4bfd[_0x17de4f + 1] + _0x468cbc[_0x17de4f + 1]);
      _0x480075 = arg_1961 << 0;
      var arg_1966 = (_0x1e3db9 = _0x4ce153 + (_0x29ee36 + _0x341d26) << 0) >>> 2;
      var arg_1967 = _0x1e3db9 << 30;
      var arg_1964 = arg_1966 | arg_1967;
      var arg_1968 = _0x1e3db9 >>> 13;
      var arg_1969 = _0x1e3db9 << 19;
      var arg_1965 = arg_1968 | arg_1969;
      var arg_1962 = arg_1964 ^ arg_1965;
      var arg_1970 = _0x1e3db9 >>> 22;
      var arg_1971 = _0x1e3db9 << 10;
      var arg_1963 = arg_1970 | arg_1971;
      _0x29ee36 = arg_1962 ^ arg_1963;
      var arg_1973 = _0x1e3db9 & _0x597983;
      var arg_1972 = (_0x183cd9 = _0x1e3db9 & _0xd61ca8) ^ arg_1973;
      _0x341d26 = arg_1972 ^ _0x291f7b;
      var arg_1974 = _0x443d19 + (_0x4ce153 = _0x2f52f5 + (_0x12d9a0 = (_0x480075 >>> 6 | _0x480075 << 26) ^ (_0x480075 >>> 11 | _0x480075 << 21) ^ (_0x480075 >>> 25 | _0x480075 << 7)) + (_0x480075 & _0x5406aa ^ ~_0x480075 & _0x222558) + _0x5d4bfd[_0x17de4f + 2] + _0x468cbc[_0x17de4f + 2]);
      _0x2f52f5 = arg_1974 << 0;
      var arg_1979 = (_0x443d19 = _0x4ce153 + (_0x29ee36 + _0x341d26) << 0) >>> 2;
      var arg_1980 = _0x443d19 << 30;
      var arg_1977 = arg_1979 | arg_1980;
      var arg_1981 = _0x443d19 >>> 13;
      var arg_1982 = _0x443d19 << 19;
      var arg_1978 = arg_1981 | arg_1982;
      var arg_1975 = arg_1977 ^ arg_1978;
      var arg_1983 = _0x443d19 >>> 22;
      var arg_1984 = _0x443d19 << 10;
      var arg_1976 = arg_1983 | arg_1984;
      _0x29ee36 = arg_1975 ^ arg_1976;
      var arg_1986 = _0x443d19 & _0xd61ca8;
      var arg_1985 = (_0x46c9b0 = _0x443d19 & _0x1e3db9) ^ arg_1986;
      _0x341d26 = arg_1985 ^ _0x183cd9;
      var arg_1987 = _0x597983 + (_0x4ce153 = _0x222558 + (_0x12d9a0 = (_0x2f52f5 >>> 6 | _0x2f52f5 << 26) ^ (_0x2f52f5 >>> 11 | _0x2f52f5 << 21) ^ (_0x2f52f5 >>> 25 | _0x2f52f5 << 7)) + (_0x2f52f5 & _0x480075 ^ ~_0x2f52f5 & _0x5406aa) + _0x5d4bfd[_0x17de4f + 3] + _0x468cbc[_0x17de4f + 3]);
      _0x222558 = arg_1987 << 0;
      var arg_1989 = _0x29ee36 + _0x341d26;
      var arg_1988 = _0x4ce153 + arg_1989;
      _0x597983 = arg_1988 << 0;
    }

    var arg_1922 = this.h0 + _0x597983;
    this.h0 = arg_1922 << 0;
    var arg_1923 = this.h1 + _0x443d19;
    this.h1 = arg_1923 << 0;
    var arg_1924 = this.h2 + _0x1e3db9;
    this.h2 = arg_1924 << 0;
    var arg_1925 = this.h3 + _0xd61ca8;
    this.h3 = arg_1925 << 0;
    var arg_1926 = this.h4 + _0x222558;
    this.h4 = arg_1926 << 0;
    var arg_1927 = this.h5 + _0x2f52f5;
    this.h5 = arg_1927 << 0;
    var arg_1928 = this.h6 + _0x480075;
    this.h6 = arg_1928 << 0;
    var arg_1929 = this.h7 + _0x5406aa;
    this.h7 = arg_1929 << 0;
  };

  _0x2c1c19.prototype.hex = function () {
    const _0x43cf77 = _0x8044f7;
    this.finalize();
    var arg_2062 = _0x33664c[_0x7b321 >> 28 & 15] + _0x33664c[_0x7b321 >> 24 & 15];
    var arg_2061 = arg_2062 + _0x33664c[_0x7b321 >> 20 & 15];
    var arg_2060 = arg_2061 + _0x33664c[_0x7b321 >> 16 & 15];
    var arg_2059 = arg_2060 + _0x33664c[_0x7b321 >> 12 & 15];
    var arg_2058 = arg_2059 + _0x33664c[_0x7b321 >> 8 & 15];
    var arg_2057 = arg_2058 + _0x33664c[_0x7b321 >> 4 & 15];
    var arg_2056 = arg_2057 + _0x33664c[15 & _0x7b321];
    var arg_2055 = arg_2056 + _0x33664c[_0x12a0b0 >> 28 & 15];
    var arg_2054 = arg_2055 + _0x33664c[_0x12a0b0 >> 24 & 15];
    var arg_2053 = arg_2054 + _0x33664c[_0x12a0b0 >> 20 & 15];
    var arg_2052 = arg_2053 + _0x33664c[_0x12a0b0 >> 16 & 15];
    var arg_2051 = arg_2052 + _0x33664c[_0x12a0b0 >> 12 & 15];
    var arg_2050 = arg_2051 + _0x33664c[_0x12a0b0 >> 8 & 15];
    var arg_2049 = arg_2050 + _0x33664c[_0x12a0b0 >> 4 & 15];
    var arg_2048 = arg_2049 + _0x33664c[15 & _0x12a0b0];
    var arg_2047 = arg_2048 + _0x33664c[_0x1320c0 >> 28 & 15];
    var arg_2046 = arg_2047 + _0x33664c[_0x1320c0 >> 24 & 15];
    var arg_2045 = arg_2046 + _0x33664c[_0x1320c0 >> 20 & 15];
    var arg_2044 = arg_2045 + _0x33664c[_0x1320c0 >> 16 & 15];
    var arg_2043 = arg_2044 + _0x33664c[_0x1320c0 >> 12 & 15];
    var arg_2042 = arg_2043 + _0x33664c[_0x1320c0 >> 8 & 15];
    var arg_2041 = arg_2042 + _0x33664c[_0x1320c0 >> 4 & 15];
    var arg_2040 = arg_2041 + _0x33664c[15 & _0x1320c0];
    var arg_2039 = arg_2040 + _0x33664c[_0x23c40b >> 28 & 15];
    var arg_2038 = arg_2039 + _0x33664c[_0x23c40b >> 24 & 15];
    var arg_2037 = arg_2038 + _0x33664c[_0x23c40b >> 20 & 15];
    var arg_2036 = arg_2037 + _0x33664c[_0x23c40b >> 16 & 15];
    var arg_2035 = arg_2036 + _0x33664c[_0x23c40b >> 12 & 15];
    var arg_2034 = arg_2035 + _0x33664c[_0x23c40b >> 8 & 15];
    var arg_2033 = arg_2034 + _0x33664c[_0x23c40b >> 4 & 15];
    var arg_2032 = arg_2033 + _0x33664c[15 & _0x23c40b];
    var arg_2031 = arg_2032 + _0x33664c[_0x5b9b54 >> 28 & 15];
    var arg_2030 = arg_2031 + _0x33664c[_0x5b9b54 >> 24 & 15];
    var arg_2029 = arg_2030 + _0x33664c[_0x5b9b54 >> 20 & 15];
    var arg_2028 = arg_2029 + _0x33664c[_0x5b9b54 >> 16 & 15];
    var arg_2027 = arg_2028 + _0x33664c[_0x5b9b54 >> 12 & 15];
    var arg_2026 = arg_2027 + _0x33664c[_0x5b9b54 >> 8 & 15];
    var arg_2025 = arg_2026 + _0x33664c[_0x5b9b54 >> 4 & 15];
    var arg_2024 = arg_2025 + _0x33664c[15 & _0x5b9b54];
    var arg_2023 = arg_2024 + _0x33664c[_0x2c740a >> 28 & 15];
    var arg_2022 = arg_2023 + _0x33664c[_0x2c740a >> 24 & 15];
    var arg_2021 = arg_2022 + _0x33664c[_0x2c740a >> 20 & 15];
    var arg_2020 = arg_2021 + _0x33664c[_0x2c740a >> 16 & 15];
    var arg_2019 = arg_2020 + _0x33664c[_0x2c740a >> 12 & 15];
    var arg_2018 = arg_2019 + _0x33664c[_0x2c740a >> 8 & 15];
    var arg_2017 = arg_2018 + _0x33664c[_0x2c740a >> 4 & 15];
    var arg_2016 = arg_2017 + _0x33664c[15 & _0x2c740a];
    var arg_2015 = arg_2016 + _0x33664c[_0x3e90b4 >> 28 & 15];
    var arg_2014 = arg_2015 + _0x33664c[_0x3e90b4 >> 24 & 15];
    var arg_2013 = arg_2014 + _0x33664c[_0x3e90b4 >> 20 & 15];
    var arg_2012 = arg_2013 + _0x33664c[_0x3e90b4 >> 16 & 15];
    var arg_2011 = arg_2012 + _0x33664c[_0x3e90b4 >> 12 & 15];
    var arg_2010 = arg_2011 + _0x33664c[_0x3e90b4 >> 8 & 15];
    var arg_2009 = arg_2010 + _0x33664c[_0x3e90b4 >> 4 & 15];
    var _0x7b321 = this.h0;
    var _0x12a0b0 = this.h1;
    var _0x1320c0 = this.h2;
    var _0x23c40b = this.h3;
    var _0x5b9b54 = this.h4;
    var _0x2c740a = this.h5;
    var _0x3e90b4 = this.h6;
    var _0x49dde4 = this.h7;

    var _0x4e5145 = arg_2009 + _0x33664c[15 & _0x3e90b4];

    return this.is224 || (_0x4e5145 += _0x33664c[_0x49dde4 >> 28 & 15] + _0x33664c[_0x49dde4 >> 24 & 15] + _0x33664c[_0x49dde4 >> 20 & 15] + _0x33664c[_0x49dde4 >> 16 & 15] + _0x33664c[_0x49dde4 >> 12 & 15] + _0x33664c[_0x49dde4 >> 8 & 15] + _0x33664c[_0x49dde4 >> 4 & 15] + _0x33664c[15 & _0x49dde4]), _0x4e5145;
  };

  _0x2c1c19.prototype.finalize = function () {
    const _0x2149fb = _0x8044f7;

    if (!this.finalized) {
      this.finalized = !0;
      var _0x15dcf9 = this.blocks;
      var _0x272ed6 = this.lastByteIndex;
      _0x15dcf9[16] = this.block;
      _0x15dcf9[_0x272ed6 >> 2] |= _0x25718c[3 & _0x272ed6];
      this.block = _0x15dcf9[16];

      if (_0x272ed6 >= 56) {
        if (!this.hashed) {
          this.hash();
        }

        _0x15dcf9[0] = this.block;
        _0x15dcf9[16] = _0x15dcf9[1] = _0x15dcf9[2] = _0x15dcf9[3] = _0x15dcf9[4] = _0x15dcf9[5] = _0x15dcf9[6] = _0x15dcf9[7] = _0x15dcf9[8] = _0x15dcf9[9] = _0x15dcf9[10] = _0x15dcf9[11] = _0x15dcf9[12] = _0x15dcf9[13] = _0x15dcf9[14] = _0x15dcf9[15] = 0;
      }

      var arg_2064 = this.hBytes << 3;
      var arg_2065 = this.bytes >>> 29;
      _0x15dcf9[14] = arg_2064 | arg_2065;
      _0x15dcf9[15] = this.bytes << 3;
      this.hash();
    }
  };

  _0x2c1c19.prototype.update = function (_0x452bc0) {
    const _0x483cb4 = _0x8044f7;

    if (!this.finalized) {
      var _0x2f022f;

      var _0x3101a7 = typeof _0x452bc0;

      if ("string" !== _0x3101a7) {
        if ("object" !== _0x3101a7) {
          throw new Error(_0x55d499);
        }

        if (null === _0x452bc0) {
          throw new Error(_0x55d499);
        }

        if (_0x238ac6 && _0x452bc0.constructor === ArrayBuffer) {
          _0x452bc0 = new Uint8Array(_0x452bc0);
        } else {
          if (!(Array.isArray(_0x452bc0) || _0x238ac6 && ArrayBuffer.isView(_0x452bc0))) {
            throw new Error(_0x55d499);
          }
        }

        _0x2f022f = !0;
      }

      var _0x3ec130,
        _0x5af49b,
        _0x2f9c7d = 0,
        _0x350d15 = _0x452bc0.length,
        _0x327dc4 = this.blocks;

      ;

      for (; _0x2f9c7d < _0x350d15;) {
        if (this.hashed) {
          this.hashed = !1;
          _0x327dc4[0] = this.block;
          _0x327dc4[16] = _0x327dc4[1] = _0x327dc4[2] = _0x327dc4[3] = _0x327dc4[4] = _0x327dc4[5] = _0x327dc4[6] = _0x327dc4[7] = _0x327dc4[8] = _0x327dc4[9] = _0x327dc4[10] = _0x327dc4[11] = _0x327dc4[12] = _0x327dc4[13] = _0x327dc4[14] = _0x327dc4[15] = 0;
        }

        if (_0x2f022f) {
          _0x5af49b = this.start;

          for (; _0x2f9c7d < _0x350d15 && _0x5af49b < 64; ++_0x2f9c7d) {
            _0x327dc4[_0x5af49b >> 2] |= _0x452bc0[_0x2f9c7d] << _0x1144d1[3 & _0x5af49b++];
          }
        } else {
          _0x5af49b = this.start;

          for (; _0x2f9c7d < _0x350d15 && _0x5af49b < 64; ++_0x2f9c7d) {
            if ((_0x3ec130 = _0x452bc0.charCodeAt(_0x2f9c7d)) < 128) {
              _0x327dc4[_0x5af49b >> 2] |= _0x3ec130 << _0x1144d1[3 & _0x5af49b++];
            } else {
              if (_0x3ec130 < 2048) {
                var arg_2071 = _0x3ec130 >> 6;
                var arg_2070 = 192 | arg_2071;
                _0x327dc4[_0x5af49b >> 2] |= arg_2070 << _0x1144d1[3 & _0x5af49b++];
                var arg_2073 = 63 & _0x3ec130;
                var arg_2072 = 128 | arg_2073;
                _0x327dc4[_0x5af49b >> 2] |= arg_2072 << _0x1144d1[3 & _0x5af49b++];
              } else {
                if (_0x3ec130 < 55296 || _0x3ec130 >= 57344) {
                  var arg_2075 = _0x3ec130 >> 12;
                  var arg_2074 = 224 | arg_2075;
                  _0x327dc4[_0x5af49b >> 2] |= arg_2074 << _0x1144d1[3 & _0x5af49b++];
                  var arg_2078 = _0x3ec130 >> 6;
                  var arg_2077 = arg_2078 & 63;
                  var arg_2076 = 128 | arg_2077;
                  _0x327dc4[_0x5af49b >> 2] |= arg_2076 << _0x1144d1[3 & _0x5af49b++];
                  var arg_2080 = 63 & _0x3ec130;
                  var arg_2079 = 128 | arg_2080;
                  _0x327dc4[_0x5af49b >> 2] |= arg_2079 << _0x1144d1[3 & _0x5af49b++];
                } else {
                  var arg_2084 = 1023 & _0x3ec130;
                  var arg_2082 = arg_2084 << 10;

                  var arg_2085 = _0x452bc0.charCodeAt(++_0x2f9c7d);

                  var arg_2083 = 1023 & arg_2085;
                  var arg_2081 = arg_2082 | arg_2083;
                  _0x3ec130 = 65536 + arg_2081;
                  var arg_2087 = _0x3ec130 >> 18;
                  var arg_2086 = 240 | arg_2087;
                  _0x327dc4[_0x5af49b >> 2] |= arg_2086 << _0x1144d1[3 & _0x5af49b++];
                  var arg_2090 = _0x3ec130 >> 12;
                  var arg_2089 = arg_2090 & 63;
                  var arg_2088 = 128 | arg_2089;
                  _0x327dc4[_0x5af49b >> 2] |= arg_2088 << _0x1144d1[3 & _0x5af49b++];
                  var arg_2093 = _0x3ec130 >> 6;
                  var arg_2092 = arg_2093 & 63;
                  var arg_2091 = 128 | arg_2092;
                  _0x327dc4[_0x5af49b >> 2] |= arg_2091 << _0x1144d1[3 & _0x5af49b++];
                  var arg_2095 = 63 & _0x3ec130;
                  var arg_2094 = 128 | arg_2095;
                  _0x327dc4[_0x5af49b >> 2] |= arg_2094 << _0x1144d1[3 & _0x5af49b++];
                }
              }
            }
          }
        }

        this.lastByteIndex = _0x5af49b;
        this.bytes += _0x5af49b - this.start;

        if (_0x5af49b >= 64) {
          this.block = _0x327dc4[16];
          this.start = _0x5af49b - 64;
          this.hash();
          this.hashed = !0;
        } else {
          this.start = _0x5af49b;
        }
      }

      return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
    }
  };

  function _0x529a85(_0x5a1717) {
    const _0x280e25 = _0x8044f7;
    let _0x108dd9 = null;
    return new _0x2c1c19(_0x108dd9, !0).update(_0x5a1717).hex();
  }

  function _0x16416b(_0x377ed6) {
    const _0x1f7339 = _0x8044f7;
    return 4503599627370496 / (Number('0x' + _0x377ed6.slice(0, 13)) + 1);
  }

  function _0x107425(_0x33db98, _0x43ef9b, _0x40b0d0) {
    const _0x300de0 = _0x8044f7;

    var _0x3bb4ea = _0x529a85(_0x33db98.platformInputs + ',\x20' + _0x43ef9b + ',\x20' + _0x40b0d0),
      _0x553056 = _0x33db98.difficulty / _0x33db98.subchallengeCount,
      _0x46f087 = [],
      _0x5d7afb = 0;

    ;

    for (; _0x5d7afb < _0x33db98.subchallengeCount; _0x5d7afb += 1) {
      var _0x38fa7b = 1;
      ;

      for (; ;) {
        var arg_2098 = _0x38fa7b + ',\x20';
        var arg_2097 = arg_2098 + _0x3bb4ea;

        var _0x5f4fe9 = _0x529a85(arg_2097);

        var arg_2099 = _0x16416b(_0x5f4fe9);

        if (arg_2099 >= _0x553056) {
          _0x46f087.push(_0x38fa7b);

          _0x3bb4ea = _0x5f4fe9;
          break;
        }

        _0x38fa7b += 1;
      }
    }

    return {
      'answers': _0x46f087,
      'finalHash': _0x3bb4ea
    };
  }

  const _0x3b17e9 = function () {
    const _0x34fe14 = _0x8044f7;

    let _0x1cf397 = _0x4b05b0();

    let _0x30ca57 = Date.now();

    let _0x11cac1 = _0x107425(_0x8a7d81, _0x30ca57, _0x1cf397);

    console.log("result['answers']", _0x11cac1.answers);
    this.answers = _0x11cac1.answers;
    this.workTime = _0x30ca57;
    this.x_kpsdk_cdid = _0x1cf397;
  };

  function _0x49ac59(_0x37dd59, _0x3b17e5) {
    const _0x248201 = _0x8044f7;
    return _0x3b17e5 *= 8, [_0x37dd59[_0x3b17e5++] << 24 | _0x37dd59[_0x3b17e5++] << 16 | _0x37dd59[_0x3b17e5++] << 8 | _0x37dd59[_0x3b17e5++] << 0, _0x37dd59[_0x3b17e5++] << 24 | _0x37dd59[_0x3b17e5++] << 16 | _0x37dd59[_0x3b17e5++] << 8 | _0x37dd59[_0x3b17e5++] << 0];
  }

  function _0x57542c(_0x6e5b72, _0x2c2ed3, _0x26de4d, _0x292abc, _0x5f5762) {
    const _0x142079 = _0x8044f7;

    var _0x441f9b;

    var _0x5ea1f0 = _0x2c2ed3[0];
    var _0x29e9f2 = _0x2c2ed3[1];
    var _0x4242ac = _0x26de4d[0];
    var _0x5549ca = _0x26de4d[1];
    return (_0x441f9b = function (_0x1fb67a, _0xa06b15) {
      const _0x28f312 = _0x142079;
      var _0x1de668 = _0xa06b15[0];
      var _0x147c6c = _0xa06b15[1];
      var _0x10db03 = 0;
      var _0x447417 = 0;
      ;

      for (; _0x447417 < 32; _0x447417++) {
        var arg_2108 = _0x147c6c << 4;
        var arg_2109 = _0x147c6c >> 5;
        var arg_2107 = arg_2108 ^ arg_2109;
        var arg_2105 = arg_2107 + _0x147c6c;
        var arg_2106 = _0x10db03 + _0x1fb67a[3 & _0x10db03];
        var arg_2104 = arg_2105 ^ arg_2106;
        var arg_2103 = _0x1de668 + arg_2104;
        _0x1de668 = arg_2103 | 0;
        var arg_2110 = _0x10db03 + 2654435769;
        _0x10db03 = arg_2110 | 0;
        var arg_2116 = _0x1de668 << 4;
        var arg_2117 = _0x1de668 >> 5;
        var arg_2115 = arg_2116 ^ arg_2117;
        var arg_2113 = arg_2115 + _0x1de668;
        var arg_2114 = _0x10db03 + _0x1fb67a[_0x10db03 >> 11 & 3];
        var arg_2112 = arg_2113 ^ arg_2114;
        var arg_2111 = _0x147c6c + arg_2112;
        _0x147c6c = arg_2111 | 0;
      }

      return [_0x1de668, _0x147c6c];
    }(_0x6e5b72, [_0x4242ac ^ _0x5ea1f0, _0x5549ca ^ _0x29e9f2]), _0x4242ac = _0x441f9b[0], _0x5549ca = _0x441f9b[1], _0x441f9b), function (_0x42eb02, _0x39de55, _0x274d3b) {
      const _0x3a403b = _0x142079;
      var _0x91044e = _0x274d3b[0];
      var _0x297b93 = _0x274d3b[1];
      _0x39de55 *= 8;
      var arg_2118 = _0x91044e >> 24;
      _0x42eb02[_0x39de55++] = arg_2118 & 255;
      var arg_2119 = _0x91044e >> 16;
      _0x42eb02[_0x39de55++] = arg_2119 & 255;
      var arg_2120 = _0x91044e >> 8;
      _0x42eb02[_0x39de55++] = arg_2120 & 255;
      _0x42eb02[_0x39de55++] = 255 & _0x91044e;
      var arg_2121 = _0x297b93 >> 24;
      _0x42eb02[_0x39de55++] = arg_2121 & 255;
      var arg_2122 = _0x297b93 >> 16;
      _0x42eb02[_0x39de55++] = arg_2122 & 255;
      var arg_2123 = _0x297b93 >> 8;
      _0x42eb02[_0x39de55++] = arg_2123 & 255;
      _0x42eb02[_0x39de55++] = 255 & _0x297b93;
    }(_0x292abc, _0x5f5762, [_0x4242ac, _0x5549ca]), [_0x4242ac, _0x5549ca];
  }

  function _0x7e7441(_0x860715) {
    const _0x3a8302 = _0x8044f7;

    var _0x34ccfc = _0x3ad3bc.L,
      _0x39c0a9 = _0x34ccfc.T,
      _0x49c4a7 = _0x34ccfc.U,
      _0x5a207e = _0x39c0a9.length - _0x49c4a7,
      _0x5513e4 = [],
      _0xc477a2 = 0;

    ;

    for (; _0xc477a2 < _0x860715.length;) {
      var _0x27fdaa = 0,
        _0x4392d0 = 1;
      ;

      for (; ;) {
        var _0x2e4b54 = _0x39c0a9.indexOf(_0x860715[_0xc477a2++]);

        var arg_2124 = _0x2e4b54 % _0x49c4a7;
        _0x27fdaa += _0x4392d0 * arg_2124;

        if (_0x2e4b54 < _0x49c4a7) {
          var arg_2125 = 0 | _0x27fdaa;

          _0x5513e4.push(arg_2125);

          break;
        }

        _0x27fdaa += _0x49c4a7 * _0x4392d0;
        _0x4392d0 *= _0x5a207e;
      }
    }

    return _0x5513e4;
  }

  function _0x3f357d(_0x538037) {
    const _0x35ca87 = _0x8044f7;
    let _0x348bcf = 0;
    let _0x19a9af = [0, 1];
    let _0x2ade69 = [];

    let _0x41e81e = ![];

    let _0x454c75 = ![];

    let _0x174e8a = 0;
    ;

    for (; _0x174e8a < _0x538037.length; _0x174e8a++) {
      if (_0x538037[_0x174e8a] == 1) {
        let _0x2da2d5 = !![];

        _0x348bcf = _0x174e8a + 1;
        let _0xd5e291 = _0x174e8a;
        let _0x5c23a7 = 0;
        ;

        for (; _0x5c23a7 < 16; _0x5c23a7++) {
          var arg_2126 = _0x538037[_0xd5e291] >> 1;

          if (arg_2126 != _0x5c23a7) {
            _0x2da2d5 = ![];
            break;
          }

          if (_0x5c23a7 == 7) {
            var arg_2127 = _0x538037[_0xd5e291 + 4] >> 1;
            var arg_2128 = _0x5c23a7 + 1;

            if (arg_2127 != arg_2128) {
              let _0x9f85 = 0;
              ;

              for (; _0x9f85 < 8; _0x9f85++) {
                var arg_2129 = _0x538037[_0x348bcf] >> 1;

                _0x19a9af.push(arg_2129);

                _0x348bcf += 4;
              }

              _0x41e81e = !![];
              _0x2da2d5 = ![];
            }
          }

          _0xd5e291 += 4;
        }

        if (_0x2da2d5 && !_0x454c75) {
          let _0x45adea = 0;
          ;

          for (; _0x45adea < 16; _0x45adea++) {
            var arg_2130 = _0x538037[_0x348bcf] >> 1;

            _0x2ade69.push(arg_2130);

            _0x348bcf += 4;
          }

          _0x454c75 = !![];
        }
      }

      if (_0x41e81e && _0x454c75) {
        break;
      }
    }

    return [_0x19a9af, _0x2ade69];
  }

  function _0x539f2a() {
    const _0x1d37e9 = _0x8044f7;

    function _0x57a2a2(_0x247410, _0x5d7c3a) {
      const _0xbd0b66 = _0x1d37e9;
      let _0x74dce = '0.';
      let _0x1e67ac = 0;
      ;

      for (; _0x1e67ac < 4; _0x1e67ac++) {
        var arg_2140 = Math.random();
        var arg_2139 = arg_2140 * 10;
        var arg_2138 = Math.floor(arg_2139);
        _0x74dce = _0x74dce + arg_2138;
      }

      _0x74dce = parseFloat(_0x74dce);
      let _0x44ea4b = '0.';
      let _0xb6a294 = 0;
      ;

      for (; _0xb6a294 < 4; _0xb6a294++) {
        var arg_2144 = Math.random();
        var arg_2143 = arg_2144 * 10;
        var arg_2142 = Math.floor(arg_2143);
        _0x44ea4b = _0x44ea4b + arg_2142;
      }

      _0x44ea4b = parseFloat(_0x44ea4b);
      var arg_2135 = Math.random();
      var arg_2137 = _0x5d7c3a - _0x247410;
      var arg_2136 = arg_2137 + 1;
      var arg_2134 = arg_2135 * arg_2136;
      var arg_2133 = arg_2134 + _0x247410;

      let _0x16f869 = Math.floor(arg_2133);

      return _0x74dce = _0x74dce + 4000 + _0x16f869, _0x44ea4b = _0x44ea4b + 4000, _0x74dce > _0x44ea4b ? _0x74dce - _0x44ea4b : _0x44ea4b - _0x74dce;
    }

    let _0x4b4128 = [];
    _0x148c1b.duration = _0x57a2a2(76, 83);
    _0x148c1b.results[5].duration = _0x57a2a2(78, 82);
    _0x148c1b.results[7].duration = 0.035000000934815034;
    _0x148c1b.results[10].duration = _0x57a2a2(19, 20);
    _0x148c1b.results[15].duration = _0x57a2a2(1, 2);
    _0x148c1b.results[18].duration = _0x57a2a2(53, 58);
    _0x148c1b.results[21].duration = 0.30499999957100954;
    _0x148c1b.results[23].duration = _0x57a2a2(7, 7);
    _0x148c1b.results[24].duration = 0.28500000007625204;
    _0x148c1b.results[26].duration = _0x57a2a2(0, 0);
    _0x148c1b.results[27].duration = _0x57a2a2(1, 1);
    _0x148c1b.results[29].duration = _0x57a2a2(39, 44);

    var _0x59f979 = JSON.stringify(_0x148c1b);

    let _0x3a0869 = 0;
    ;

    for (; _0x3a0869 < _0x59f979.length; _0x3a0869++) {
      var arg_2145 = _0x59f979.charCodeAt(_0x3a0869);

      _0x4b4128.push(arg_2145);
    }

    return _0x4b4128;
  }

  var arg_7 = (_0x5b1a41.app || _0x5b1a41.remote.app).getPath("userData");

  const _0x2f34e7 = function (_0x4b36ce) {
    const _0x4f973a = _0x8044f7;
    var arg_2146 = new Uint8Array(8);

    var _0x1680bf = _0x539f2a();

    var _0x555b61 = _0x1e09e7(arg_2146);

    var arg_2147 = _0x7e7441(_0x4b36ce);

    var arg_2148 = _0x1680bf.length / 8;

    let _0x34a122 = _0x3f357d(arg_2147);

    let _0x339af7 = _0x34a122[0];
    let _0x3c5f25 = _0x34a122[1];

    let _0x314797 = arg_2148 + 2;

    var _0x3964d7 = [[0, _0x1680bf.length]];
    var _0x3efc92 = [];
    let _0x5a4392 = 0;
    ;

    for (; _0x5a4392 < 2; _0x5a4392++) {
      let _0x414d16 = _0x49ac59(_0x3c5f25, _0x5a4392);

      _0x3efc92.push(_0x414d16[0]);

      _0x3efc92.push(_0x414d16[1]);
    }

    var _0x5acf60 = [0, 0];
    var _0x398d48 = [];
    var _0x55c4ff = [];
    var _0x5d5369 = 0;
    let _0x3985ee = 0;
    _0x398d48 = _0x49ac59(_0x555b61, 0);
    _0x5acf60 = _0x57542c(_0x3efc92, _0x5acf60, _0x398d48, _0x55c4ff, _0x5d5369);
    _0x5d5369++;
    var _0xc3f317 = 0;

    var arg_2149 = _0x49ac59(_0x1680bf, _0xc3f317);

    _0x3964d7.push(arg_2149);

    _0xc3f317++;

    var arg_2150 = _0x49ac59(_0x1680bf, _0xc3f317);

    _0x3964d7.push(arg_2150);

    _0xc3f317++;

    var arg_2151 = _0x49ac59(_0x1680bf, _0xc3f317);

    _0x3964d7.push(arg_2151);

    _0xc3f317++;

    var arg_2152 = _0x49ac59(_0x1680bf, _0xc3f317);

    _0x3964d7.push(arg_2152);

    _0xc3f317++;
    let _0x4e6a3b = 0;
    ;

    for (; _0x4e6a3b < _0x314797 - 1; _0x4e6a3b++) {
      var arg_2153 = _0x5acf60[0] + _0x3985ee;

      let _0x3d2625 = arg_2153 % _0x3964d7.length;

      if (_0x3d2625 < 0) {
        _0x3d2625 += _0x3964d7.length;
      }

      _0x398d48 = _0x3964d7[_0x3d2625];
      _0x5acf60 = _0x57542c(_0x3efc92, _0x5acf60, _0x398d48, _0x55c4ff, _0x5d5369);
      let _0x4d9795 = 0;
      ;

      for (; _0x4d9795 < _0x3964d7.length; _0x4d9795++) {
        if (_0x3964d7[_0x4d9795] == _0x398d48) {
          var arg_2154 = _0x314797 - 2;

          if (_0xc3f317 < arg_2154) {
            let _0x401f62 = _0x49ac59(_0x1680bf, _0xc3f317);

            _0x3964d7[_0x4d9795] = _0x401f62;
          } else {
            _0x3964d7 = _0x3964d7.filter(_0x10a07a => _0x10a07a != _0x398d48);
          }

          _0x3985ee = _0x4d9795;
          break;
        }
      }

      _0xc3f317++;
      _0x5d5369++;
    }

    let _0x52e9a2 = _0x339af7.concat(_0x55c4ff);

    let _0x23e4b5 = '';
    let _0x1c6dbf = 0;
    ;

    for (; _0x1c6dbf < _0x52e9a2.length; _0x1c6dbf++) {
      _0x23e4b5 += String.fromCharCode(_0x52e9a2[_0x1c6dbf]);
    }

    return new Uint8Array(_0x339af7.concat(_0x55c4ff));
  };

  const _0x12599f = async function (_0x2f79cd = ![]) {
    const _0x5f38f9 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2159);

      throw "stopped";
    }

    try {
      let _0x465b94 = null;

      let _0xdd8989 = "https://" + _0x465b94 + ".nike.com/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/fp";

      if (_0x2f79cd) {
        _0x465b94 = "unite";
      } else {
        _0x465b94 = "api";
      }

      _0x5a14e3(arg_2160);

      let _0x318b52 = await _0x525073.bind(this)(_0xcb5fe);

      let _0x56e3d0 = _0x318b52.statusCode;
      console.log("getfp", _0x56e3d0);
      this.x_kpsdk_ct = _0x318b52.headers["x-kpsdk-ct"];
      console.log("this.x_kpsdk_ct", this.x_kpsdk_ct);
    } catch (err) {
      return console.log(err), _0x5a14e3({
        'id': this.id,
        'status': "Generate Encryption Data Error, Retry",
        'statusCode': 4,
        'groupId': this.groupId
      }), await _0x45a98b(this.errorDelay), _0x12599f.bind(this)();
    }
  };

  const _0x29b0e3 = async function (_0x331760 = ![]) {
    const _0x36ed82 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2162);

      throw "stopped";
    }

    try {
      let _0x3c2456 = null;

      let _0x31b678 = "https://" + _0x3c2456 + ".nike.com/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/tl";

      if (_0x331760) {
        _0x3c2456 = "unite";
      } else {
        _0x3c2456 = "api";
      }

      _0x5a14e3(arg_2163);

      let _0x1c8f3b = await _0x525073.bind(this)(_0x2b1f68);

      let _0x5e80ba = _0x1c8f3b.statusCode;
      console.log("gen_x_kpsdk_ct", _0x1c8f3b);
      console.log("gen_x_kpsdk_ct", _0x5e80ba);
      console.log("gen_x_kpsdk_ct", _0x1c8f3b.body);
      this.x_kpsdk_st = _0x1c8f3b.headers["x-kpsdk-st"];
      this.x_kpsdk_ct = _0x1c8f3b.headers["x-kpsdk-ct"];
      console.log("this.x_kpsdk_ct", this.x_kpsdk_ct);
    } catch (err) {
      return console.log(err), _0x5a14e3({
        'id': this.id,
        'status': "Generate Encryption Data Error, Retry",
        'statusCode': 4,
        'groupId': this.groupId
      }), await _0x45a98b(this.errorDelay), _0x29b0e3.bind(this)();
    }
  };

  const _0x2e15fe = async function () {
    const _0x446b1a = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2165);

      throw "stopped";
    }

    try {
      this.posttldata = _0x2f34e7.bind(this)(this.ipsdata);
      console.log("this.posttldata");
      console.log(this.posttldata);
    } catch (err) {
      return console.log(err), _0x5a14e3({
        'id': this.id,
        'status': "Generate Encryption Error, Retry",
        'statusCode': 4,
        'groupId': this.groupId
      }), await _0x45a98b(this.errorDelay), _0x2e15fe.bind(this)();
    }
  };

  const _0x350fe2 = async function (_0x3f36d6 = ![]) {
    const _0x197770 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2167);

      throw "stopped";
    }

    try {
      _0x5a14e3(arg_2168);

      let _0x59ae41 = null;

      let _0x4ab7fb = "https://" + _0x59ae41 + ".nike.com/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/ips.js";

      if (_0x3f36d6) {
        _0x59ae41 = "unite";
      } else {
        _0x59ae41 = "api";
      }

      let _0x51a38f = await _0x525073.bind(this)(_0x27d42e);

      let _0x4c7854 = _0x51a38f.statusCode;
      let _0x1c7194 = _0x51a38f.body;

      let _0x56e591 = _0x1c7194.indexOf(",window,'");

      let _0x183c5f = _0x1c7194.indexOf("');})();");

      var arg_2169 = _0x56e591 + 9;
      this.ipsdata = _0x1c7194.substring(arg_2169, _0x183c5f);
      this.x_kpsdk_ct = _0x51a38f.headers["x-kpsdk-ct"];
      console.log("this.x_kpsdk_ct", this.x_kpsdk_ct);
      console.log("get_pjs", _0x4c7854);
    } catch (err) {
      return console.log(err), _0x5a14e3({
        'id': this.id,
        'status': "Generate Encryption Error, Retry",
        'statusCode': 4,
        'groupId': this.groupId
      }), await _0x45a98b(this.errorDelay), _0x350fe2.bind(this)();
    }
  };

  const _0x17cdcd = async function () {
    const _0x3a8e10 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2170);

      throw "stopped";
    }

    try {
      _0x5a14e3(arg_2171);

      let _0x25c62e = await _0x525073.bind(this)(_0x1d6c7c);

      let _0x299bfc = _0x25c62e.statusCode;

      var arg_2172 = '[' + new Date().toISOString() + "]: Get Size status: " + _0x299bfc;

      _0x2d2bdc(arg_2172, this.logFilePath);

      if (_0x299bfc == 200) {
        let _0x77b859 = JSON.parse(_0x25c62e.body);

        var _0x2a7ad3 = _0x77b859.objects;
        var arg_2173 = this.size[0].name.toLowerCase();

        if (arg_2173 == "random") {
          this.pickedSize = _0x2a7ad3[Math.floor(Math.random() * _0x2a7ad3.length)];
        } else {
          let _0x4c5e80 = [];

          for (let _0x31583b of this.size) {
            let _0x2c3ad4 = _0x2a7ad3.find(_0x1a31ff => {
              const _0x1d92b2 = _0x3a8e10;
              return _0x1a31ff.nikeSize == _0x31583b.name;
            });

            if (_0x2c3ad4) {
              _0x4c5e80.push(_0x2c3ad4);
            }
          }

          if (_0x4c5e80.length > 0) {
            this.pickedSize = _0x4c5e80[Math.floor(Math.random() * _0x4c5e80.length)];
          }
        }
      } else {
        _0x5a14e3(arg_2176);

        var arg_2177 = '[' + new Date().toISOString() + "]: Get Size " + _0x299bfc + ", Retry";

        _0x2d2bdc(arg_2177, this.logFilePath);

        await _0x45a98b(this.errorDelay);
        await _0x17cdcd.bind(this)();
      }

      console.log(this.pickedSize);
      this.checkoutInfo.size = this.pickedSize.nikeSize;
      this.skuId = this.pickedSize.id;
      console.log(this.checkoutInfo.size);
      console.log("this.pickedSize['id']", this.pickedSize.id);
    } catch (err) {
      return console.log(err), _0x5a14e3({
        'id': this.id,
        'status': "Getting Size Error, Retry",
        'statusCode': 4,
        'groupId': this.groupId
      }), await _0x45a98b(this.errorDelay), _0x17cdcd.bind(this)();
    }
  };

  const _0x494dd3 = async function (_0x536116 = ![]) {
    const _0x307db5 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2178);

      throw "stopped";
    }

    try {
      while (!![]) {
        if (!this.running) {
          return;
        }

        _0x5a14e3(arg_2179);

        let _0x4c1a13 = await _0x5f5a20.bind(this)();

        this.akamaiCookie = _0x4c1a13.cookie;
        var arg_2180 = '[' + new Date().toISOString() + "]: Fetched Akamai: " + this.akamaiCookie;

        _0x2d2bdc(arg_2180, this.logFilePath);

        if (_0x4c1a13.cookie) {
          if (_0x536116) {
            let _0x3b14a6 = await this.page.cookies();

            var arg_2181 = _0x3b14a6.filter(_0x268129 => _0x268129.name == "_abck");

            console.log(arg_2181);
            await this.page.setCookie({
              'name': "_abck",
              'domain': ".nike.com",
              'value': _0x4c1a13.cookie,
              'expires': (Date.now() + 86400000) / 1000,
              'session': ![]
            });
            _0x3b14a6 = await this.page.cookies();

            var arg_2182 = _0x3b14a6.filter(_0x8c90ec => _0x8c90ec.name == "_abck");

            console.log(arg_2182);
          } else {
            console.log("injectAkamai cookie", _0x4c1a13.cookie);
            await this.session.cookies.remove(this.siteOrigin, "_abck");
            await this.session.cookies.set({
              'url': this.siteOrigin,
              'name': "_abck",
              'value': _0x4c1a13.cookie,
              'domain': this.siteOrigin.replace("https://www.", ''),
              'path': '/'
            });
          }

          return;
        } else {
          if (this.checkAccount) {
            this.sender.send("checkAccountStatus", arg_2186);
          } else {
            _0x5a14e3(arg_2187);
          }

          var arg_2185 = '[' + new Date().toISOString() + "]: No Cookie Avaliable";

          _0x2d2bdc(arg_2185, this.logFilePath);

          await _0x45a98b(5000);
        }
      }
    } catch (err) {
      console.log(err);
      var arg_2188 = '[' + new Date().toISOString() + "]: Fetching Akamai Error: " + err + '.';

      _0x2d2bdc(arg_2188, this.logFilePath);

      _0x51259d.bind(this)();

      this.running = ![];
    }
  };

  const _0x421587 = async function () {
    const _0x351abc = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2189);

      throw "stopped";
    }

    try {
      let _0xc38175 = await _0x525073.bind(this)(_0x2adeaf);

      let _0x34e13d = _0xc38175.statusCode;
      console.log("unite_session_cookies", _0x34e13d);

      if (_0x34e13d != 200) {
        return await _0x45a98b(this.errorDelay), _0x421587.bind(this)();
      }
    } catch (err) {
      return await _0x45a98b(this.errorDelay), _0x421587.bind(this)();
    }
  };

  const _0x41f534 = async function () {
    const _0x3c7163 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2191);

      throw "stopped";
    }

    try {
      let _0x204553 = await _0x525073.bind(this)(_0x4f9cb5);

      let _0x1769c6 = _0x204553.statusCode;
      console.log("slcheck_cookies", _0x1769c6);

      if (_0x1769c6 != 200) {
        return await _0x45a98b(this.errorDelay), _0x41f534.bind(this)();
      }

      let _0x5975f6 = await this.session.cookies.get({});

      return _0x5975f6;
    } catch (err) {
      return await _0x45a98b(this.errorDelay), _0x41f534.bind(this)();
    }
  };

  const _0x14658b = async function () {
    const _0xf40efb = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2193);

      throw "stopped";
    }

    try {
      _0x5a14e3(arg_2194);

      const _0xcd8822 = "https://unite.nike.com/tokenRefresh?appVersion=889&experienceVersion=889&uxid=com.nike.commerce.snkrs.ios&locale=en_US&backendEnvironment=identity&browser=Apple%20Computer%2C%20Inc.&os=undefined&mobile=true&native=true&visit=1&visitor=" + this.visitor;

      let _0x39eb3e = await _0x525073.bind(this)(_0x376bb5);

      let _0xe869c6 = _0x39eb3e.statusCode;
      let _0x23495e = _0x39eb3e.body;
      var arg_2195 = '[' + new Date().toISOString() + "]: refresh token " + this.refresh_token;

      _0x2d2bdc(arg_2195, this.logFilePath);

      var arg_2196 = '[' + new Date().toISOString() + "]: Refresh Token status " + _0xe869c6;

      _0x2d2bdc(arg_2196, this.logFilePath);

      if (_0xe869c6 == 200) {
        let _0x2667b5 = JSON.parse(_0x23495e);

        return console.log(_0x2667b5), this.accounttoken = _0x2667b5.access_token, this.user_id = _0x2667b5.user_id, _0x5a14e3({
          'id': this.id,
          'status': "Refresh Token Success",
          'statusCode': 1,
          'groupId': this.groupId
        }), ![];
      } else {
        _0x5a14e3(arg_2197);

        if (_0x23495e.includes("error")) {
        }

        return !![];
      }
    } catch (err) {
      _0x5a14e3(arg_2200);

      var arg_2201 = '[' + new Date().toISOString() + "]: Refresh Token Error " + err;

      _0x2d2bdc(arg_2201, this.logFilePath);
    }
  };

  const _0x1b72d4 = async function (_0x6e46b2 = 0) {
    const _0x2214b6 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2203);

      throw "stopped";
    }

    if (this.checkAccount) {
      this.sender.send("checkAccountStatus", arg_2204);
    } else {
      _0x5a14e3(arg_2205);
    }

    if (_0x6e46b2 > 3) {
      _0x51259d.bind(this)();

      this.running = ![];

      _0x5a14e3(arg_2206);
    }

    this.visitor = _0x5ce51f();
    console.log("this.visitor", this.visitor);

    const _0x35c716 = "https://unite.nike.com/login?appVersion=889&experienceVersion=889&uxid=com.nike.commerce.snkrs.web&locale=" + _0x5bfcb7[this.siteName].locale + "&backendEnvironment=identity&browser=Google%20Inc.&os=undefined&mobile=false&native=false&visit=1&visitor=" + this.visitor;

    console.log(_0x35c716);
    console.log(this.x_kpsdk_ct);

    let _0x2639e0 = JSON.stringify(arg_2202);

    console.log("cdheader", _0x2639e0);
    await _0x494dd3.bind(this)(![]);

    try {
      let _0x25f81a = await _0x525073.bind(this)(_0x1db9bd);

      let _0x725a1e = _0x25f81a.statusCode;
      let _0x38347d = _0x25f81a.body;
      console.log(_0x25f81a);
      console.log(_0x725a1e);
      console.log(_0x38347d);

      var arg_2207 = '[' + new Date().toISOString() + "]: Login Account " + this.accountname + " status " + _0x725a1e;

      _0x2d2bdc(arg_2207, this.logFilePath);

      var arg_2208 = '[' + new Date().toISOString() + "]: Login Account body " + _0x38347d;

      _0x2d2bdc(arg_2208, this.logFilePath);

      if (_0x725a1e == 200) {
        let _0x1fcbd6 = JSON.parse(_0x38347d);

        this.accounttoken = _0x1fcbd6.access_token;
        this.user_id = _0x1fcbd6.user_id;
        console.log("this.accounttoken", this.accounttoken);
        var arg_2209 = '[' + new Date().toISOString() + "]: access token: " + this.accounttoken;

        _0x2d2bdc(arg_2209, this.logFilePath);

        if (this.checkAccount) {
          this.sender.send("checkAccountStatus", arg_2210);
        } else {
          _0x5a14e3(arg_2213);
        }

        this.loggedIn = !![];

        _0x34b06a.bind(this)(_0x1fcbd6);
      } else {
        var arg_2214 = _0x38347d.indexOf("entered incorrectly");

        if (arg_2214 != -1) {
          if (this.checkAccount) {
            this.sender.send("checkAccountStatus", arg_2215);
          } else {
            _0x5a14e3(arg_2216);
          }

          this.running = ![];

          _0x51259d.bind(this)();

          return;
        }

        await _0x45a98b(this.errorDelay);

        if (_0x725a1e == 403) {
          if (this.checkAccount) {
            this.sender.send("checkAccountStatus", arg_2217);
          } else {
            _0x5a14e3(arg_2218);
          }
        } else {
          if (_0x725a1e == 429) {
            if (this.checkAccount) {
              this.sender.send("checkAccountStatus", arg_2221);
            } else {
              _0x5a14e3(arg_2222);
            }
          }
        }

        return _0x1b72d4.bind(this)(_0x6e46b2 + 1);
      }
    } catch (err) {
      const _0x43c50b = "1|0|4|3|2".split('|');

      let _0x3d9282 = 0;
      console.log(err);
      await _0x45a98b(this.errorDelay);
      var arg_2223 = '[' + new Date().toISOString() + "]: Login Account Error, Retry " + err;

      _0x2d2bdc(arg_2223, this.logFilePath);

      _0x5a14e3(arg_2224);

      return _0x1b72d4.bind(this)(_0x6e46b2 + 1);
    }
  };

  const _0x3f0644 = function (_0x574a58, _0xd0d20, _0x3f717f) {
    const _0x19da65 = _0x8044f7;

    try {
      return _0x574a58.substring(0, _0xd0d20) + _0x3f717f + _0x574a58.substring(_0xd0d20 + 1);
    } catch (err) {
      console.log(err);
    }
  };

  const _0x5ce51f = function () {
    const _0x1e2903 = _0x8044f7;

    try {
      var _0x145dfc = '' + _0x12b840.v1();

      return _0x145dfc = _0x3f0644(_0x145dfc, 14, '4'), _0x145dfc = _0x3f0644(_0x145dfc, 19, '8'), _0x145dfc;
    } catch (err) {
      console.log(err);
    }
  };

  const _0xa2c6da = async function (_0x1a837a = 0) {
    const _0x16f083 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2228);

      throw "stopped";
    }

    try {
      if (_0x1a837a > 3) {
        _0x51259d.bind(this)();

        this.running = ![];

        if (this.checkAccount) {
          this.sender.send("checkAccountStatus", arg_2235);
        } else {
          _0x5a14e3(arg_2236);
        }

        return;
      }

      const _0x366604 = await this.page.$(".checkout-modal");

      if (_0x366604) {
        return;
      }

      await this.page.goto('' + this.productLink, {
        'timeout': 20000
      });
      await _0x45a98b(1000);

      _0x5a14e3(arg_2229);

      var arg_2230 = '[' + new Date().toISOString() + "]: Login Account " + this.accountname;

      _0x2d2bdc(arg_2230, this.logFilePath);

      await this.page.waitForSelector(".join-log-in", {
        'timeout': 20000
      });
      await _0x45a98b(2500);

      if (this.checkAccount) {
        this.sender.send("checkAccountStatus", arg_2237);
      } else {
        _0x5a14e3(arg_2238);
      }

      this.visitor = _0x5ce51f();
      console.log("this.visitor", this.visitor);
      await _0x494dd3.bind(this)(!![]);

      let _0x321ead = await this.page.evaluate("\n            (() => {\n                return new Promise((resolve,reject) => {\n                    var xhr = new XMLHttpRequest();\n                    xhr.withCredentials = true;\n                    xhr.withCredentials;\n                    xhr.open(\"POST\", 'https://unite.nike.com/login?appVersion=889&experienceVersion=889&uxid=com.nike.commerce.snkrs.web&locale=en_US&backendEnvironment=identity&browser=Google%20Inc.&os=undefined&mobile=false&native=false&visit=1&visitor=" + this.visitor + "', false);\n                    xhr.setRequestHeader(\"Accept\", \"*/*\");\n                    xhr.setRequestHeader(\"Accept-Language\", \"en-US, en; q=0.9\");\n                    xhr.setRequestHeader(\"Content-Type\", \"application/json\");\n                    var strSensorData = JSON.stringify({\n                        \"client_id\": \"PbCREuPr3iaFANEDjtiEzXooFl7mXGQ7\",\n                        \"grant_type\": \"password\",\n                        \"username\": '" + this.accountname + "',\n                        \"password\": '" + this.accountpasswod + "',\n                        \"ux_id\": \"com.nike.commerce.snkrs.web\"\n                    });\n                    xhr.send(strSensorData);\n                    console.log(xhr.response)\n                    resolve(xhr.response)\n                })\n            })();\n            ");

      console.log(_0x321ead);

      var arg_2231 = '[' + new Date().toISOString() + "]: Login Body " + _0x321ead;

      _0x2d2bdc(arg_2231, this.logFilePath);

      var arg_2232 = _0x321ead.indexOf("entered incorrectly");

      if (arg_2232 != -1) {
        if (this.checkAccount) {
          this.sender.send("checkAccountStatus", arg_2239);
        } else {
          _0x5a14e3(arg_2240);
        }

        this.running = ![];

        _0x51259d.bind(this)();

        return;
      }

      var arg_2233 = _0x321ead.indexOf("token");

      if (arg_2233 == -1) {
        if (this.checkAccount) {
          this.sender.send("checkAccountStatus", arg_2242);
        } else {
          _0x5a14e3(arg_2243);
        }

        return await _0x45a98b(10000), _0xa2c6da.bind(this)(_0x1a837a + 1);
      } else {
        let _0xf53c8d = JSON.parse(_0x321ead);

        this.accounttoken = _0xf53c8d.access_token;
        this.user_id = _0xf53c8d.user_id;
        console.log("this.accounttoken", this.accounttoken);
        var arg_2244 = '[' + new Date().toISOString() + "]: access token: " + this.accounttoken;

        _0x2d2bdc(arg_2244, this.logFilePath);

        this.loggedIn = !![];

        _0x34b06a.bind(this)(_0xf53c8d);
      }

      if (!this.running) {
        if (this.browser) {
          this.browser.close();
        }

        return;
      }

      await _0x45a98b(1500);
      var arg_2234 = '[' + new Date().toISOString() + "]: Login Success ";

      _0x2d2bdc(arg_2234, this.logFilePath);

      if (this.checkAccount) {
        this.sender.send("checkAccountStatus", arg_2245);
      } else {
        _0x5a14e3(arg_2246);
      }
    } catch (err) {
      const _0x6981e7 = "0|4|2|1|3".split('|');

      let _0x29026d = 0;
      console.log(err);
      await _0x45a98b(2000);
      var arg_2247 = '[' + new Date().toISOString() + "]: Login Account Error, Retry " + err;

      _0x2d2bdc(arg_2247, this.logFilePath);

      _0x5a14e3(arg_2248);

      return _0xa2c6da.bind(this)(_0x1a837a + 1);
    }
  };

  const _0x30d09f = require("puppeteer-extra");

  const _0x4c08ec = require("puppeteer-extra-plugin-stealth");

  const _0x5b1006 = require("chrome-launcher");

  const _0x1acadb = require("util");

  const _0x5d4952 = require("request");

  const _0x3c4080 = require("chrome-paths");

  const _0x15522b = async function () {
    const _0x5aaf4e = _0x8044f7;

    try {
      var arg_2252 = Math.random();
      var arg_2251 = arg_2252 * 50;
      var arg_2249 = Math.floor(arg_2251);
      var arg_2254 = Math.random();
      var arg_2253 = arg_2254 * 50;
      var arg_2250 = Math.floor(arg_2253);

      let _0x2459df = 500 + arg_2249;

      let _0x559ac3 = 850 + arg_2250;

      let _0x3bacbf = ["--no-sandbox", "--disable-gpu", "--disable-infobars", "--disable-setuid-sandbox", "--disable-dev-shm-usage", "--disable-accelerated-2d-canvas", "--no-first-run", "--window-size=" + _0x2459df + ',' + _0x559ac3];

      var arg_2255 = _0x4c08ec();

      _0x30d09f.use(arg_2255);

      let _0x4d1128 = await _0x30d09f.launch({
        'args': _0x3bacbf,
        'headless': ![],
        'ignoreHTTPSErrors': !![],
        'defaultViewport': null,
        'executablePath': _0x3c4080.chrome
      });

      return global.localChromeUA = await _0x4d1128.userAgent(), console.log(global.localChromeUA), _0x4d1128.close();
    } catch (err) {
      console.log(err);
    }
  };

  const _0x31fd58 = async function (_0xf791aa = ![], _0x4f2c7c, _0x5104d1) {
    const _0x4f7d0e = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2259);

      throw "stopped";
    }

    try {
      _0x5a14e3(arg_2261);

      let _0x3410cc = null;
      let _0x575283 = null;
      let _0x3fb140 = null;
      let _0x3b66c0 = null;

      let _0x17c3cf = ![];

      console.log(_0x4f2c7c);

      if (_0x4f2c7c) {
        let _0x1b4c87 = _0x4f2c7c.split('//')[1].split('@');

        if (_0x1b4c87.length == 1) {
          _0x17c3cf = !![];
          _0x3fb140 = _0x1b4c87[0].split(':')[0];
          _0x3b66c0 = _0x1b4c87[0].split(':')[1];
        } else {
          _0x3fb140 = _0x1b4c87[1].split(':')[0];
          _0x3b66c0 = _0x1b4c87[1].split(':')[1];
          _0x3410cc = _0x1b4c87[0].split(':')[0];
          _0x575283 = _0x1b4c87[0].split(':')[1];
        }
      }

      var arg_2265 = Math.random();
      var arg_2264 = arg_2265 * 50;
      var arg_2262 = Math.floor(arg_2264);
      var arg_2267 = Math.random();
      var arg_2266 = arg_2267 * 50;
      var arg_2263 = Math.floor(arg_2266);

      let _0x2f6ec2 = 500 + arg_2262;

      let _0x3fed9f = 850 + arg_2263;

      let _0x2f7cb4 = ["--no-sandbox", "--disable-gpu", "--disable-infobars", "--disable-setuid-sandbox", "--disable-dev-shm-usage", "--disable-accelerated-2d-canvas", "--disable-web-security", "--no-first-run", "--disable-blink-features=AutomationControlled", "--ignore-certificate-errors", "--ignore-certificate-errors-spki-list", "--window-size=" + _0x2f6ec2 + ',' + _0x3fed9f, "--allow-running-insecure-content"];

      if (_0x4f2c7c && _0x4f2c7c.trim().length > 0) {
        var arg_2291 = "--proxy-server=" + _0x3fb140 + ':' + _0x3b66c0;

        _0x2f7cb4.push(arg_2291);
      }

      console.log(_0x2f7cb4);

      const _0x2a917d = _0x4c08ec();

      this.browser = await _0x30d09f.launch({
        'args': _0x2f7cb4,
        'headless': _0xf791aa,
        'ignoreHTTPSErrors': !![],
        'acceptInsecureCerts': !![],
        'ignoreDefaultArgs': ["--enable-automation"],
        'defaultViewport': null,
        'executablePath': _0x3c4080.chrome
      });

      let _0xa60e46 = await this.browser.pages();

      this.page = _0xa60e46[0];

      if (_0x4f2c7c && _0x3fb140 && !_0x17c3cf) {
        await this.page.authenticate({
          'username': _0x3410cc,
          'password': _0x575283
        });
      }

      this.page.setUserAgent(this.user_agent);

      if (_0x5104d1 != null) {
        await this.page.setCookie(..._0x5104d1);
      }

      console.log("done init Browser");
      var arg_2268 = '[' + new Date().toISOString() + "]: done init Browser";

      _0x2d2bdc(arg_2268, this.logFilePath);

      return;
      await this.page.setRequestInterception(!![]);
      this.page.on("request", async _0x4e8664 => {
        const _0x578ae0 = _0x4f7d0e;

        if (_0x4e8664.resourceType().includes(_0x2f6734.DKhxw)) {
          _0x4e8664.abort();
        } else {
          _0x4e8664["continue"]();
        }
      });
      this.page.on("response", async _0x1603c0 => {
        const _0x113028 = _0x4f7d0e;

        if (_0x1603c0.url().includes("unite.nike.com/account/user/v1") && _0x1603c0.request().method() == "POST") {
          try {
            let _0xdde850 = await _0x1603c0.text();

            var arg_2293 = '[' + new Date().toISOString() + "]: user/v1: , body: " + _0xdde850;

            _0x2d2bdc(arg_2293, this.logFilePath);

            let _0x492c68 = JSON.parse(_0xdde850);

            if (!("sms" in _0x492c68.user.contact)) {
              _0x5a14e3(arg_2295);

              this.running = ![];

              _0x51259d.bind(this)();

              return;
            }
          } catch (err) {
            console.log(err);
          }
        }

        if (_0x1603c0.url().includes("api.nike.com/payment/preview/v2") && _0x1603c0.request().method() == "POST") {
          try {
            let _0x4ae863 = await _0x1603c0.text();

            let _0xfe2f96 = JSON.parse(_0x4ae863);

            if ('id' in _0xfe2f96) {
              this.paymentId = _0xfe2f96.id;
              console.log("this.paymentId", this.paymentId);
            }
          } catch (err) {
            console.log(err);
          }
        }

        if (_0x1603c0.url().includes("api.nike.com/buy/checkout_previews/v2") && _0x1603c0.request().method() == "PUT") {
          var arg_2310 = "url: " + _0x1603c0.url() + ", status: " + _0x1603c0.status();

          console.log(arg_2310);

          let _0x1b18a5 = _0x1603c0.url();

          this.checkoutId = _0x1b18a5.split('/').pop();
          console.log("this.checkoutId", this.checkoutId);
        }

        if (_0x1603c0.url().includes("api.nike.com/buy/checkouts/v2/jobs") && _0x1603c0.request().method() == "GET") {
          var arg_2311 = "url: " + _0x1603c0.url() + ", status: " + _0x1603c0.status();

          console.log(arg_2311);

          try {
            let _0x162ba8 = await _0x1603c0.text();

            var arg_2312 = "body: " + _0x162ba8;
            console.log(arg_2312);

            var arg_2313 = '[' + new Date().toISOString() + "]: checkout v2 jobs: " + _0x1603c0.url() + ", statusCode: " + _0x1603c0.status() + ", body: " + _0x162ba8;

            _0x2d2bdc(arg_2313, this.logFilePath);

            var arg_2314 = _0x162ba8.indexOf("error");

            if (arg_2314 != -1) {
              this.sumbiterror = !![];
            }
          } catch (err) {
            console.log(err);

            var arg_2317 = '[' + new Date().toISOString() + "]: entry url: " + _0x1603c0.url() + ", statusCode: " + _0x1603c0.status();

            _0x2d2bdc(arg_2317, this.logFilePath);
          }
        }

        if (_0x1603c0.url().includes("api.nike.com/buy/checkout_previews/v2/jobs") && _0x1603c0.request().method() == "GET") {
          var arg_2319 = "url: " + _0x1603c0.url() + ", status: " + _0x1603c0.status();

          console.log(arg_2319);

          try {
            let _0x32a756 = await _0x1603c0.text();

            var arg_2320 = "body: " + _0x32a756;
            console.log(arg_2320);

            var arg_2321 = '[' + new Date().toISOString() + "]: checkout_previews: " + _0x1603c0.url() + ", statusCode: " + _0x1603c0.status() + ", body: " + _0x32a756;

            _0x2d2bdc(arg_2321, this.logFilePath);

            let _0x3a6f27 = JSON.parse(_0x32a756);

            this.priceChecksum = _0x3a6f27.response.priceChecksum;
            console.log("this.priceChecksum", this.priceChecksum);
          } catch (err) {
            console.log(err);

            var arg_2322 = '[' + new Date().toISOString() + "]: entry url: " + _0x1603c0.url() + ", statusCode: " + _0x1603c0.status();

            _0x2d2bdc(arg_2322, this.logFilePath);
          }
        }

        if (_0x1603c0.url().includes("api.nike.com/launch/entries/v2/")) {
          let _0x4a1bd7 = _0x1603c0.request();

          console.log("--------------");

          var arg_2325 = _0x1603c0.url();

          console.log("response", arg_2325);

          var arg_2326 = _0x1603c0.status();

          console.log("response", arg_2326);

          var arg_2327 = _0x4a1bd7.method();

          console.log("response", arg_2327);

          var arg_2328 = '[' + new Date().toISOString() + "]: entry url: " + _0x1603c0.url() + ", statusCode: " + _0x1603c0.status() + ", method: " + _0x4a1bd7.method();

          _0x2d2bdc(arg_2328, this.logFilePath);

          var arg_2329 = _0x4a1bd7.method();

          if (arg_2329 == "GET") {
            var arg_2331 = _0x1603c0.status();

            if (arg_2331 == 200) {
              let _0x214ab3 = await _0x1603c0.text();

              var arg_2332 = '[' + new Date().toISOString() + "]: entry response {" + _0x214ab3 + '}';

              _0x2d2bdc(arg_2332, this.logFilePath);

              let _0x50cd06 = JSON.parse(_0x214ab3);

              if ('id' in _0x50cd06) {
                this.entriesId = _0x50cd06.id;
                console.log("this.entriesId", this.entriesId);
              }
            }
          }

          var arg_2330 = _0x4a1bd7.method();

          if (arg_2330 == "POST" && this.siteName == "snkrs-ca") {
            var arg_2333 = _0x1603c0.status();

            if (arg_2333 == 201) {
              let _0x316350 = await _0x1603c0.text();

              var arg_2334 = '[' + new Date().toISOString() + "]: entry response {" + _0x316350 + '}';

              _0x2d2bdc(arg_2334, this.logFilePath);

              let _0x14e660 = JSON.parse(_0x316350);

              if ('id' in _0x14e660) {
                this.entriesId = _0x14e660.id;
                console.log("this.entriesId", this.entriesId);
              }
            }
          }
        }

        if (_0x1603c0.url().includes("unite.nike.com/login")) {
          let _0x5b02a0 = _0x1603c0.request();

          console.log("--------------");

          var arg_2335 = _0x5b02a0.method();

          console.log("response", arg_2335);

          var arg_2336 = _0x1603c0.url();

          console.log("response", arg_2336);

          var arg_2337 = _0x1603c0.status();

          console.log("response", arg_2337);

          var arg_2338 = '[' + new Date().toISOString() + "]: login account method: " + _0x5b02a0.method();

          _0x2d2bdc(arg_2338, this.logFilePath);

          var arg_2339 = '[' + new Date().toISOString() + "]: login account url: " + _0x1603c0.url();

          _0x2d2bdc(arg_2339, this.logFilePath);

          var arg_2340 = '[' + new Date().toISOString() + "]: login account statusCode: " + _0x1603c0.status();

          _0x2d2bdc(arg_2340, this.logFilePath);

          var arg_2341 = _0x5b02a0.method();

          if (arg_2341 == "POST") {
            let _0x432ac2 = await _0x1603c0.text();

            var _0x5683dd;

            var arg_2342 = '[' + new Date().toISOString() + "]: login account statusCode: " + _0x1603c0.status() + " with body: " + _0x5683dd;

            _0x2d2bdc(arg_2342, this.logFilePath);

            var arg_2343 = _0x1603c0.status();

            if (arg_2343 == 200) {
              _0x5683dd = JSON.parse(_0x432ac2);

              if ("access_token" in _0x5683dd) {
                const _0x3c5a8d = "2|3|4|1|0".split('|');

                let _0x426a65 = 0;
                this.accounttoken = _0x5683dd.access_token;
                console.log("this.accounttoken", this.accounttoken);
                var arg_2344 = '[' + new Date().toISOString() + "]: access token: " + this.accounttoken;

                _0x2d2bdc(arg_2344, this.logFilePath);

                this.loggedIn = !![];

                _0x34b06a.bind(this)(_0x5683dd);
              }
            } else {
              var arg_2347 = _0x1603c0.status();

              if (arg_2347 == 403) {
                this.login403 = !![];
              }

              _0x5683dd = JSON.parse(_0x432ac2);

              if ("error_description" in _0x5683dd) {
                var arg_2348 = '[' + new Date().toISOString() + "]: login error_description: " + _0x5683dd.error_description;

                _0x2d2bdc(arg_2348, this.logFilePath);

                this.errormsg = _0x5683dd.error_description;
                this.accounterror = !![];

                if (_0x5683dd.error_description.includes("password was entered incorrectly")) {
                  _0x5a14e3(arg_2350);

                  this.running = ![];

                  _0x51259d.bind(this)();

                  return;
                }

                _0x5a14e3(arg_2349);

                await _0xa2c6da.bind(this)();
              }
            }
          }
        }
      });
    } catch (err) {
      return console.log("init browser"), console.log(err.message), null;
    }
  };

  const _0x48c096 = async function () {
    const _0x9e87b5 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2354);

      throw "stopped";
    }

    try {
      this.page = await this.browser.newPage();

      let _0x5c3600 = await this.browser.pages();

      await _0x5c3600[0].close();
      await this.page.goto(this.productLink + "?size=" + this.pickedSize.nikeSize + "&productId=" + this.productId);
    } catch (err) {
      return console.log(err), await _0x45a98b(1500), _0x48c096.bind(this)();
    }
  };

  const _0x33f6f8 = async function () {
    const _0x31579b = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2355);

      throw "stopped";
    }

    try {
      await _0x19184a.bind(this)("#firstName", this.profile.shipping.firstName, ![], this.page);

      if (this.siteName == "snkrs-ru") {
        await _0x19184a.bind(this)("#middleName", this.profile.shipping.lastName, ![], this.page);
      } else {
        await _0x19184a.bind(this)("#lastName", this.profile.shipping.lastName, ![], this.page);
      }

      await _0x19184a.bind(this)("#lastName", this.profile.shipping.lastName, ![], this.page);
      await _0x19184a.bind(this)("#addressLine1", this.profile.shipping.address1, ![], this.page);
      await _0x19184a.bind(this)("#addressLine2", this.profile.shipping.address2, ![], this.page);
      await _0x19184a.bind(this)("#city", this.profile.shipping.city, ![], this.page);

      if (this.siteName == "snkrs-ru") {
        await _0x19184a.bind(this)("#postCode", this.profile.shipping.zip, ![], this.page);
      } else {
        await _0x19184a.bind(this)("#postalCode", this.profile.shipping.zip.split('-')[0], ![], this.page);
      }

      await _0x19184a.bind(this)("#email", this.profile.email, ![], this.page);

      if (this.siteName == "snkrs-ru") {
        await _0x19184a.bind(this)("//input[@placeholder=\"\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430\"]", this.profile.phone, ![], this.page, !![], ![], null, ![], !![]);
      } else {
        await _0x19184a.bind(this)("//input[@placeholder=\"Phone number\"]", this.profile.phone, ![], this.page, !![], ![], null, ![], !![]);
      }

      await _0x19184a.bind(this)("#region", this.profile.shipping.state.long, !![], this.page);
    } catch (err) {
      const _0x541f9b = "1|0|4|3|2".split('|');

      let _0x59418c = 0;
      console.log(err);
      var arg_2356 = '[' + new Date().toISOString() + "]: Fill info Error, Retry " + err;

      _0x2d2bdc(arg_2356, this.logFilePath);

      _0x5a14e3(arg_2357);

      await _0x45a98b(2500);
      return _0x4c2353.bind(this)(!![]);
    }
  };

  const _0x40117b = async function () {
    const _0x336699 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2358);

      throw "stopped";
    }

    try {
      await _0x19184a.bind(this)("#first-name-shipping", this.profile.shipping.firstName, ![], this.page);
      await _0x19184a.bind(this)("#last-name-shipping", this.profile.shipping.lastName, ![], this.page);
      await _0x19184a.bind(this)("#shipping-address-1", this.profile.shipping.address1, ![], this.page);
      await _0x19184a.bind(this)("#shipping-address-2", this.profile.shipping.address2, ![], this.page);
      await _0x19184a.bind(this)("#city", this.profile.shipping.city, ![], this.page);

      if (this.siteName == "snkrs") {
        await _0x19184a.bind(this)("#state", this.profile.shipping.state.short, ![], this.page);
      }

      await _0x19184a.bind(this)("#zipcode", this.profile.shipping.zip.split('-')[0], ![], this.page);
      await _0x19184a.bind(this)("#phone-number", this.profile.phone, ![], this.page);
    } catch (err) {
      const _0x3aeae7 = "0|2|4|1|3".split('|');

      let _0x500e2c = 0;
      console.log(err);
      var arg_2360 = '[' + new Date().toISOString() + "]: Fill info Error, Retry " + err;

      _0x2d2bdc(arg_2360, this.logFilePath);

      _0x5a14e3(arg_2361);

      await _0x45a98b(2500);
      return _0x16dd7b.bind(this)(!![]);
    }
  };

  const _0x4c2353 = async function (_0x54cf94 = ![]) {
    const _0x20ccc6 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2363);

      throw "stopped";
    }

    try {
      _0x5a14e3(arg_2364);

      var arg_2365 = this.productLink + "?size=" + this.pickedSize.nikeSize + "&productId=" + this.productId;
      console.log(arg_2365);
      await this.page.goto(this.productLink + "?size=" + this.pickedSize.nikeSize + "&productId=" + this.productId, {
        'timeout': 25000
      });
      await _0x45a98b(3000);

      if (this.method == "DAN") {
        if (!this.isclickcta) {
          const _0x28fbd8 = "0|3|2|4|1".split('|');

          let _0x42fe68 = 0;
          this.isclickcta = !![];
          await this.page.waitForSelector(".cta-btn", {
            'visible': !![],
            'timeout': 20000
          });
          await _0x45a98b(1000);
          await this.page.click(".cta-btn");
          await this.page.goto(this.productLink + "?size=" + this.pickedSize.nikeSize + "&productId=" + this.productId);
        }
      }

      await this.page.waitForSelector("#checkout", {
        'visible': !![],
        'timeout': 30000
      });

      let _0x2c712b = await this.page.$("#firstName");

      var _0x2fdfbe;

      if (_0x2c712b != null) {
        const _0x3c6bd5 = "1|3|0|2|4".split('|');

        let _0x34b01c = 0;
        await _0x33f6f8.bind(this)();
        _0x2fdfbe = await this.page.$$(".button-continue");
        await _0x2fdfbe[0].click();
        await _0x45a98b(1000);
        _0x54cf94 = ![];
      }

      if (_0x54cf94) {
        await this.page.waitForSelector(".expand-collapse", {
          'visible': !![],
          'timeout': 15000
        });

        let _0x63ae76 = await this.page.$(".expand-collapse");

        _0x63ae76.click();

        await this.page.waitForSelector(".edit-address-link", {
          'visible': !![]
        });
        await this.page.evaluate("document.getElementsByClassName(\"edit-address-link\")[0].click();");
        await _0x33f6f8.bind(this)();
        _0x2fdfbe = await this.page.$$(".button-continue");
        await _0x2fdfbe[0].click();
        await _0x45a98b(1000);
      }

      console.log("refillinfo done");
      var arg_2366 = '[' + new Date().toISOString() + "]: ReFill info done";

      _0x2d2bdc(arg_2366, this.logFilePath);
    } catch (err) {
      let _0x4ad302 = await this.page.$(".phoneNumber");

      if (_0x4ad302) {
        _0x51259d.bind(this)();

        this.running = ![];

        _0x5a14e3(arg_2369);

        return;
      }

      return console.log(err), _0x2d2bdc('[' + new Date().toISOString() + "]: ReFill info Error, Retry " + err, this.logFilePath), _0x5a14e3({
        'id': this.id,
        'status': "ReFill info Error, Retry",
        'statusCode': 4,
        'groupId': this.groupId
      }), await _0x45a98b(2500), _0x4c2353.bind(this)(_0x54cf94);
    }
  };

  const _0x16dd7b = async function (_0x5d8a07 = ![]) {
    const _0x1d6280 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2373);

      throw "stopped";
    }

    try {
      _0x5a14e3(arg_2374);

      var arg_2375 = this.productLink + "?size=" + this.pickedSize.nikeSize + "&productId=" + this.productId;
      console.log(arg_2375);
      await this.page.goto(this.productLink + "?size=" + this.pickedSize.nikeSize + "&productId=" + this.productId, {
        'timeout': 25000
      });

      if (this.method == "DAN") {
        if (!this.isclickcta) {
          const _0x20594f = "1|0|4|3|2".split('|');

          let _0x4d91ef = 0;
          this.isclickcta = !![];
          await this.page.waitForSelector(".cta-btn", {
            'visible': !![],
            'timeout': 20000
          });
          await _0x45a98b(1000);
          await this.page.click(".cta-btn");
          await this.page.goto(this.productLink + "?size=" + this.pickedSize.nikeSize + "&productId=" + this.productId);
        }
      }

      await this.page.waitForSelector(".checkout-modal", {
        'visible': !![],
        'timeout': 20000
      });
      await _0x45a98b(2000);

      let _0x20d8d3 = await this.page.$("#first-name-shipping");

      var _0x49a4e0;

      if (_0x20d8d3 != null) {
        const _0x4197f8 = "1|0|2|4|3|6|5".split('|');

        let _0x4b9c19 = 0;
        await _0x40117b.bind(this)();
        _0x49a4e0 = await this.page.$x("//button[@data-qa=\"save-button\"]");
        await _0x49a4e0[0].click();
        await _0x45a98b(1000);
        _0x49a4e0 = await this.page.$x("//button[@data-qa=\"save-button\"]");
        await _0x49a4e0[0].click();
        _0x5d8a07 = ![];
      }

      if (_0x5d8a07) {
        await this.page.waitForSelector(".shipping-component", {
          'visible': !![],
          'timeout': 15000
        });

        let _0x3bae03 = await this.page.$(".shipping-component");

        _0x3bae03.click();

        await this.page.waitForSelector("[data-qa=\"edit-address\"]", {
          'visible': !![]
        });
        await this.page.evaluate("document.getElementsByClassName('fl-sm-r ncss-cta-primary-dark underline no-outline')[0].click()");
        await _0x40117b.bind(this)();
        _0x49a4e0 = await this.page.$x("//button[@data-qa=\"save-button\"]");
        await _0x49a4e0[0].click();
        await _0x45a98b(500);
        await this.page.waitForSelector("[data-qa=\"shipping-method-label\"]", {
          'visible': !![]
        });
        _0x49a4e0 = await this.page.$x("//button[@data-qa=\"save-button\"]");
        await _0x49a4e0[0].click();
      }

      console.log("refillinfo done");
      var arg_2376 = '[' + new Date().toISOString() + "]: ReFill info done";

      _0x2d2bdc(arg_2376, this.logFilePath);
    } catch (err) {
      let _0x597a0b = await this.page.$(".phoneNumber");

      if (_0x597a0b) {
        _0x51259d.bind(this)();

        this.running = ![];

        _0x5a14e3(arg_2378);

        return;
      }

      return console.log(err), _0x2d2bdc('[' + new Date().toISOString() + "]: ReFill info Error, Retry " + err, this.logFilePath), _0x5a14e3({
        'id': this.id,
        'status': "ReFill info Error, Retry",
        'statusCode': 4,
        'groupId': this.groupId
      }), await _0x45a98b(2500), _0x16dd7b.bind(this)(_0x5d8a07);
    }
  };

  const _0x95695d = async function (_0x7a4c9e) {
    const _0x1ddb5f = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2380);

      throw "stopped";
    }

    try {
      await _0x19184a.bind(this)("#creditCardNumber", this.profile.cardNum, ![], _0x7a4c9e, !![], ![], null, !![]);
      await _0x19184a.bind(this)("#expirationDate", '' + this.profile.expmonth + this.profile.expyear.substr(2, 2), ![], _0x7a4c9e, !![], !![], this.profile.expmonth + '/' + this.profile.expyear.substr(2, 2));
      await _0x19184a.bind(this)("#cvNumber", this.profile.cvv, ![], _0x7a4c9e, !![], !![]);

      if (this.siteName == "snkrs-uk") {
        await this.page.evaluate("document.getElementById('Save credit card').click()");
      }

      if (this.siteName == "snkrs-nl") {
        await this.page.evaluate("document.getElementById('Sla creditcard op').click()");
      }

      if (this.siteName == "snkrs-fr") {
        await this.page.evaluate("document.getElementById('Enregistrer la carte de cr\xE9dit').click()");
      }

      if (this.siteName == "snkrs-de") {
        await this.page.evaluate("document.getElementById('Kreditkarte speichern').click()");
      } else {
        await this.page.evaluate("document.getElementById('Save Credit Card').click()");
      }

      let _0x1666d8 = await this.page.evaluate("(() => { \n            return new Promise(resolve => {\n                resolve(document.querySelectorAll('button[data-qa=\"save-button\"]')[1].className)\n            })})()");

      while (_0x1666d8.includes("disabled")) {
        await _0x45a98b(1000);
        _0x1666d8 = await this.page.evaluate("(() => { \n                return new Promise(resolve => {\n                    resolve(document.querySelectorAll('button[data-qa=\"save-button\"]')[1].className)\n                })})()");
      }

      await this.page.waitForSelector("[data-qa=\"save-button\"]", {
        'visible': !![]
      });

      let _0x525e97 = await this.page.$x("//button[@data-qa=\"save-button\"]");

      await _0x525e97[1].click();
    } catch (err) {
      const _0x584343 = "1|0|2|4|3|5".split('|');

      let _0x1039e9 = 0;
      console.log(err);
      var arg_2381 = '[' + new Date().toISOString() + "]: Fill Checkout Info Error, Retry " + err;

      _0x2d2bdc(arg_2381, this.logFilePath);

      _0x5a14e3(arg_2382);

      await _0x45a98b(1000);
      await _0x48c096.bind(this)();
      return _0x5a5a60.bind(this)();
    }
  };

  const _0x1bd5c0 = async function () {
    const _0x20c982 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2384);

      throw "stopped";
    }

    try {
      _0x5a14e3(arg_2385);

      await this.page.waitForSelector("iframe", {
        'timeout': 15000
      });
      const _0x322b59 = "https://gs-payments.nike.com/details";

      let _0x4c5fe8 = await this.page.frames().find(_0x2c2005 => _0x2c2005.url().includes(_0x322b59));

      var _0xcd91ff = 0;

      while (!_0x4c5fe8) {
        await _0x45a98b(500);
        _0x4c5fe8 = await this.page.frames().find(_0x5981d9 => _0x5981d9.url().includes(_0x322b59));
        _0xcd91ff += 1;

        if (_0xcd91ff > 30) {
          throw "stopped";
        }
      }

      await _0x19184a.bind(this)("#cardNumber-input", this.profile.cardNum, ![], _0x4c5fe8, !![], ![], null, !![]);
      await _0x19184a.bind(this)("#cardExpiry-input", '' + this.profile.expmonth + this.profile.expyear.substr(2, 2), ![], _0x4c5fe8, !![], !![], this.profile.expmonth + '/' + this.profile.expyear.substr(2, 2));
      await _0x19184a.bind(this)("#cardCvc-input", this.profile.cvv, ![], _0x4c5fe8, !![], !![]);
      await this.page.waitForSelector(".button-continue", {
        'visible': !![]
      });

      let _0x384ab0 = await this.page.$(".button-continue");

      await _0x45a98b(1000);
      await _0x384ab0.click();

      let _0x407454 = await this.page.evaluate("document.querySelector(\".gdprConsentCheckbox label\").getAttribute(\"class\")");

      console.log(_0x407454);

      if (!_0x407454.includes("isChecked")) {
        await this.page.evaluate("document.querySelector(\".gdprConsentCheckbox label input\").click();");
      }

      console.log("gotocheckout done");
      var arg_2386 = '[' + new Date().toISOString() + "]: Fill Checkout Info done";

      _0x2d2bdc(arg_2386, this.logFilePath);
    } catch (err) {
      const _0x5d4b87 = "2|4|3|5|1|0".split('|');

      let _0x59e5bc = 0;
      console.log(err);
      await _0x45a98b(1000);
      var arg_2389 = '[' + new Date().toISOString() + "]: gotocheckout Fill Checkout Info Error, Retry " + err;

      _0x2d2bdc(arg_2389, this.logFilePath);

      _0x5a14e3(arg_2390);

      await _0x48c096.bind(this)();
      return _0x1bd5c0.bind(this)();
    }
  };

  const _0x5a5a60 = async function () {
    const _0xdf3679 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2391);

      throw "stopped";
    }

    try {
      _0x5a14e3(arg_2392);

      await this.page.waitForSelector("[name=\"newCard\"]", {
        'visible': !![],
        'timeout': 15000
      });
      await _0x45a98b(500);
      await this.page.evaluate("document.getElementsByName(\"newCard\")[0].click()");
      await this.page.waitForSelector("iframe", {
        'timeout': 15000
      });
      const _0x4ad790 = "https://paymentcc.nike.com/services";

      let _0x555b19 = await this.page.frames().find(_0x1344b9 => _0x1344b9.url().includes(_0x4ad790));

      var _0x411112 = 0;

      while (!_0x555b19) {
        await _0x45a98b(500);
        _0x555b19 = await this.page.frames().find(_0x5734a2 => _0x5734a2.url().includes(_0x4ad790));
        _0x411112 += 1;

        if (_0x411112 > 30) {
          throw "stopped";
        }
      }

      await _0x555b19.waitForSelector("#creditCardNumber", {
        'visible': !![],
        'timeout': 15000
      });
      await _0x95695d.bind(this)(_0x555b19);
      console.log("gotocheckout done");
      var arg_2393 = '[' + new Date().toISOString() + "]: Fill Checkout Info done";

      _0x2d2bdc(arg_2393, this.logFilePath);
    } catch (err) {
      const _0x38d5e0 = "0|2|4|3|5|1".split('|');

      let _0x4c0a47 = 0;
      console.log(err);
      await _0x45a98b(1000);
      var arg_2394 = '[' + new Date().toISOString() + "]: gotocheckout Fill Checkout Info Error, Retry " + err;

      _0x2d2bdc(arg_2394, this.logFilePath);

      _0x5a14e3(arg_2395);

      await _0x48c096.bind(this)();
      return _0x5a5a60.bind(this)();
    }
  };

  const _0x39a239 = async function () {
    const _0xdfad0c = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2396);

      return;
    }

    try {
      _0x5a14e3(arg_2397);

      let _0x5e902f = await _0x525073.bind(this)(_0x5624fb);

      let _0x5ba42a = _0x5e902f.statusCode;
      console.log("getProductPage", _0x5ba42a);

      var arg_2398 = '[' + new Date().toISOString() + "]: Get Product Page status " + _0x5ba42a;

      _0x2d2bdc(arg_2398, this.logFilePath);

      if (_0x5ba42a == 200) {
      } else {
        return await _0x45a98b(2500), _0x39a239.bind(this)();
      }
    } catch (err) {
      const _0x3663a1 = "4|0|2|1|3".split('|');

      let _0x55bb99 = 0;
      console.log(err);
      var arg_2399 = '[' + new Date().toISOString() + "]: Get Product Page Error, Retry " + err;

      _0x2d2bdc(arg_2399, this.logFilePath);

      _0x5a14e3(arg_2400);

      await _0x45a98b(2500);
      return _0x39a239.bind(this)();
    }
  };

  const _0x38f0b2 = async function () {
    const _0x24941d = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2403);

      return;
    }

    try {
      let _0x1f8db0 = await _0x525073.bind(this)(_0x24d346);

      let _0x245f71 = _0x1f8db0.statusCode;

      var arg_2404 = '[' + new Date().toISOString() + "]: exclusive_offers status " + _0x245f71;

      _0x2d2bdc(arg_2404, this.logFilePath);

      var arg_2405 = '[' + new Date().toISOString() + "]: exclusive_offers body " + _0x1f8db0.body;

      _0x2d2bdc(arg_2405, this.logFilePath);

      if (_0x245f71 == 200) {
      } else {
        if (_0x245f71 == 403) {
          await _0x494dd3.bind(this)(![]);
        }

        return await _0x45a98b(2500), _0x38f0b2.bind(this)();
      }
    } catch (err) {
      const _0x308c5d = "3|2|1|4|0".split('|');

      let _0x5affe8 = 0;
      console.log(err);
      var arg_2406 = '[' + new Date().toISOString() + "]: exclusive_offers Error, Retry " + err;

      _0x2d2bdc(arg_2406, this.logFilePath);

      _0x5a14e3(arg_2407);

      await _0x45a98b(2500);
      return _0x38f0b2.bind(this)();
    }
  };

  const _0x11ef23 = async function () {
    const _0x2577de = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2410);

      return;
    }

    try {
      let _0x127fed = await _0x525073.bind(this)(_0x1a604a);

      let _0x20d2aa = _0x127fed.statusCode;

      var arg_2411 = '[' + new Date().toISOString() + "]: entries status " + _0x20d2aa;

      _0x2d2bdc(arg_2411, this.logFilePath);

      var arg_2412 = '[' + new Date().toISOString() + "]: entries body " + _0x127fed.body;

      _0x2d2bdc(arg_2412, this.logFilePath);

      if (_0x20d2aa == 200) {
        let _0x5770fb = JSON.parse(_0x127fed.body);

        let _0x2547fc = _0x5770fb.objects.filter(_0x320710 => _0x320710.launchId == this.launchId);

        if (_0x2547fc.length > 0) {
          this.entriesId = _0x2547fc[0].id;
        }
      } else {
        return _0x20d2aa == 403 && (await _0x494dd3.bind(this)(![])), await _0x45a98b(3000), _0x11ef23.bind(this)();
      }
    } catch (err) {
      const _0x4b9802 = "2|1|0|4|3".split('|');

      let _0x1a629d = 0;
      console.log(err);
      var arg_2414 = '[' + new Date().toISOString() + "]: entries Error, Retry " + err;

      _0x2d2bdc(arg_2414, this.logFilePath);

      _0x5a14e3(arg_2415);

      await _0x45a98b(3000);
      return _0x11ef23.bind(this)();
    }
  };

  const _0x2ea77d = async function () {
    const _0x377c78 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2416);

      return;
    }

    try {
      _0x5a14e3(arg_2417);

      var arg_2418 = '[' + new Date().toISOString() + "]: Payment options";

      _0x2d2bdc(arg_2418, this.logFilePath);

      let _0x2d8ce0 = JSON.stringify(arg_2419);

      let _0x2418ba = await _0x525073.bind(this)(_0x53dbd5);

      let _0x149e72 = _0x2418ba.statusCode;

      var arg_2420 = '[' + new Date().toISOString() + "]: payment options status " + _0x149e72;

      _0x2d2bdc(arg_2420, this.logFilePath);

      var arg_2421 = '[' + new Date().toISOString() + "]: payment options body " + _0x2418ba.body;

      _0x2d2bdc(arg_2421, this.logFilePath);

      if (_0x149e72 == 200) {
      } else {
        if (_0x149e72 == 403) {
          await _0x494dd3.bind(this)(![]);
        }

        return await _0x45a98b(2500), _0x2ea77d.bind(this)();
      }
    } catch (err) {
      const _0x10e4df = "1|0|4|3|2".split('|');

      let _0x56bc00 = 0;
      console.log(err);
      var arg_2422 = '[' + new Date().toISOString() + "]: payment options Error, Retry " + err;

      _0x2d2bdc(arg_2422, this.logFilePath);

      _0x5a14e3(arg_2423);

      await _0x45a98b(2500);
      return _0x2ea77d.bind(this)();
    }
  };

  const _0x298bef = async function () {
    const _0x13eceb = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2426);

      return;
    }

    try {
      _0x5a14e3(arg_2427);

      var arg_2428 = '[' + new Date().toISOString() + "]: Shipping Options";

      _0x2d2bdc(arg_2428, this.logFilePath);

      this.itemsId = _0x28d3a4();

      let _0x4a701e = JSON.stringify(arg_2429);

      let _0x590c2c = await _0x525073.bind(this)(_0x587071);

      let _0xe9e0 = _0x590c2c.statusCode;

      var arg_2430 = '[' + new Date().toISOString() + "]: Shipping Options status " + _0xe9e0;

      _0x2d2bdc(arg_2430, this.logFilePath);

      var arg_2431 = '[' + new Date().toISOString() + "]: Shipping Options body " + _0x590c2c.body;

      _0x2d2bdc(arg_2431, this.logFilePath);

      if (_0xe9e0 == 200) {
      } else {
        return _0xe9e0 == 403 && (await _0x494dd3.bind(this)(![])), await _0x45a98b(2500), _0x298bef.bind(this)();
      }
    } catch (err) {
      const _0x4e64fb = "0|4|3|1|2".split('|');

      let _0x46bda3 = 0;
      console.log(err);
      var arg_2433 = '[' + new Date().toISOString() + "]: shipping options Error, Retry " + err;

      _0x2d2bdc(arg_2433, this.logFilePath);

      _0x5a14e3(arg_2434);

      await _0x45a98b(2500);
      return _0x298bef.bind(this)();
    }
  };

  const _0xfb86a7 = async function () {
    const _0x163a3c = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2435);

      return;
    }

    try {
      let _0x55d7b4 = JSON.stringify(arg_2436);

      let _0x3c1d14 = await _0x525073.bind(this)(_0x2d458a);

      let _0x204407 = _0x3c1d14.statusCode;

      var arg_2437 = '[' + new Date().toISOString() + "]: payments 1 status " + _0x204407;

      _0x2d2bdc(arg_2437, this.logFilePath);

      var arg_2438 = '[' + new Date().toISOString() + "]: payments 1 body " + _0x3c1d14.body;

      _0x2d2bdc(arg_2438, this.logFilePath);

      if (_0x204407 == 200) {
      } else {
        return _0x204407 == 403 && (await _0x494dd3.bind(this)(![])), await _0x45a98b(2500), _0xfb86a7.bind(this)();
      }
    } catch (err) {
      const _0x284d0b = "3|4|1|0|2".split('|');

      let _0x7239c = 0;
      console.log(err);
      var arg_2439 = '[' + new Date().toISOString() + "]: payments 1 Error, Retry " + err;

      _0x2d2bdc(arg_2439, this.logFilePath);

      _0x5a14e3(arg_2440);

      await _0x45a98b(2500);
      return _0xfb86a7.bind(this)();
    }
  };

  const _0x2d283a = async function () {
    const _0x4ee0c0 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2441);

      return;
    }

    try {
      this.creditCardInfoId = uuidv1();
      let _0x463169 = "VISA";

      if (/^5[1-5][0-9]{5,}|222[1-9][0-9]{3,}|22[3-9][0-9]{4,}|2[3-6][0-9]{5,}|27[01][0-9]{4,}|2720[0-9]{3,}$/.test(this.profile.cardNum)) {
        _0x463169 = _0x172aa3.hYEsa;
      }

      if (/^3[47][0-9]{5,}$/.test(this.profile.cardNum)) {
        _0x463169 = _0x172aa3.YXIPX;
      }

      if (/^6(?:011|5[0-9]{2})[0-9]{3,}$/.test(this.profile.cardNum)) {
        _0x463169 = _0x172aa3.IRUUO;
      }

      let _0x1c20b9 = JSON.stringify(arg_2443);

      var arg_2444 = "https://paymentcc.nike.com/creditcardsubmit/" + this.creditCardInfoId + "/store";
      console.log(arg_2444);

      let _0x5d1463 = await _0x525073.bind(this)(_0x243bb2);

      let _0x286488 = _0x5d1463.statusCode;
      console.log("creditcardsubmit", _0x286488);

      var arg_2445 = '[' + new Date().toISOString() + "]: payment 3 status " + _0x286488;

      _0x2d2bdc(arg_2445, this.logFilePath);

      var arg_2446 = '[' + new Date().toISOString() + "]: payment 3 body " + _0x5d1463.body;

      _0x2d2bdc(arg_2446, this.logFilePath);

      if (_0x286488 == 201) {
      } else {
        if (_0x286488 == 403) {
          await _0x494dd3.bind(this)(![]);
        }

        return await _0x45a98b(2500), _0x2d283a.bind(this)();
      }
    } catch (err) {
      const _0x419a43 = "2|0|3|1|4".split('|');

      let _0x133220 = 0;
      console.log(err);
      var arg_2447 = '[' + new Date().toISOString() + "]: paymentcc Error, Retry " + err;

      _0x2d2bdc(arg_2447, this.logFilePath);

      _0x5a14e3(arg_2448);

      await _0x45a98b(2500);
      return _0x2d283a.bind(this)();
    }
  };

  const _0x7a7df0 = async function (_0xf0d44d = 0) {
    const _0x1a0d45 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2449);

      return;
    }

    try {
      if (this.browser) {
        await this.browser.close();
        this.browser = null;
      }

      console.log("trytime", _0xf0d44d);

      _0x5a14e3(arg_2450);

      var arg_2451 = '[' + new Date().toISOString() + "]: Submiting Order";

      _0x2d2bdc(arg_2451, this.logFilePath);

      let _0x19c96e = JSON.stringify(arg_2452);

      console.log("launch_entries_V2", _0x19c96e);

      let _0x563dba = await _0x525073.bind(this)(_0x7be13c);

      let _0x6f5e93 = _0x563dba.statusCode;
      console.log("launch_entries_V2", _0x6f5e93);
      console.log("launch_entries_V2", _0x563dba.body);

      var arg_2453 = '[' + new Date().toISOString() + "]: Submiting Entry statusCode " + _0x6f5e93;

      _0x2d2bdc(arg_2453, this.logFilePath);

      var arg_2454 = '[' + new Date().toISOString() + "]: Submiting Entry body " + _0x563dba.body;

      _0x2d2bdc(arg_2454, this.logFilePath);

      if (_0x6f5e93 == 201) {
        let _0x150ced = JSON.parse(_0x563dba.body);

        return this.issubmitraffle = !![], this.entriesId = _0x150ced.id, _0x5a14e3({
          'id': this.id,
          'status': "Submiting Entry Success",
          'statusCode': 2,
          'groupId': this.groupId
        }), _0x2d2bdc('[' + new Date().toISOString() + "]: this.entriesId " + this.entriesId, this.logFilePath), _0x7a7df0.bind(this)(_0xf0d44d + 1);
      } else {
        if (_0x6f5e93 == 409) {
          let _0x1736a4 = JSON.parse(_0x563dba.body);

          _0x5a14e3(arg_2456);

          var arg_2457 = '[' + new Date().toISOString() + "]: Submiting Entry, " + _0x1736a4.message;

          _0x2d2bdc(arg_2457, this.logFilePath);

          if (_0x1736a4.message.includes("already exists")) {
            this.issubmitraffle = !![];
          }
        } else {
          if (_0x6f5e93 == 403) {
            _0x5a14e3(arg_2459);

            var arg_2460 = '[' + new Date().toISOString() + "]: Submiting Entry Error, Retry " + _0xf0d44d;

            _0x2d2bdc(arg_2460, this.logFilePath);

            await _0x494dd3.bind(this)(![]);
          } else {
            _0x5a14e3(arg_2461);

            var arg_2462 = '[' + new Date().toISOString() + "]: Submiting Entry Error, Retry " + _0xf0d44d;

            _0x2d2bdc(arg_2462, this.logFilePath);
          }
        }

        if (_0xf0d44d <= 3) {
          return await _0x45a98b(1500), _0x7a7df0.bind(this)(_0xf0d44d + 1);
        }

        if (_0xf0d44d >= 10) {
          _0x5a14e3(arg_2463);

          this.running = ![];
          return;
        }
      }

      console.log("this.issubmitraffle", this.issubmitraffle);

      if (!this.issubmitraffle) {
        return _0x5a14e3({
          'id': this.id,
          'status': "Submiting Entry Error, Retry",
          'statusCode': 4,
          'groupId': this.groupId
        }), _0x2d2bdc('[' + new Date().toISOString() + "]: Submiting Entry Error, Retry " + _0xf0d44d, this.logFilePath), await _0x45a98b(1500), _0x7a7df0.bind(this)(_0xf0d44d + 1);
      }

      var arg_2455 = '[' + new Date().toISOString() + "]: Go to Submit Entry done";

      _0x2d2bdc(arg_2455, this.logFilePath);

      var _0x55d342;

      var _0x49ff25;

      if (this.method == "DAN") {
        _0x55d342 = Date.now();
        _0x49ff25 = this.stopEntryDate - _0x55d342;

        _0x5a14e3(arg_2464);

        await _0x45a98b(_0x49ff25 + 120000);
      } else {
        _0x5a14e3(arg_2467);

        await _0x45a98b(120000);
      }
    } catch (err) {
      const _0x3f187f = "0|1|3|4|2".split('|');

      let _0x580191 = 0;
      console.log(err);
      var arg_2468 = '[' + new Date().toISOString() + "]: Submiting Entry Error, Retry " + err;

      _0x2d2bdc(arg_2468, this.logFilePath);

      _0x5a14e3(arg_2469);

      await _0x45a98b(2500);
      return _0x7a7df0.bind(this)(_0xf0d44d + 1);
    }
  };

  const _0x5ca67d = async function () {
    const _0x415fb5 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2473);

      return;
    }

    try {
      await _0x45a98b(2000);
      var arg_2474 = "https://api.nike.com/payment/preview/v2/jobs/" + this.paymentId;
      console.log(arg_2474);

      let _0x5995b2 = await _0x525073.bind(this)(_0x48b212);

      let _0x4cb851 = _0x5995b2.statusCode;
      console.log("payment/preview/v2/jobs", _0x4cb851);
      console.log("payment/preview/v2/jobs", _0x5995b2.body);

      if (_0x4cb851 == 200) {
        let _0x13a2f1 = JSON.parse(_0x5995b2.body);

        if (_0x13a2f1.status != "COMPLETED") {
          return await _0x45a98b(2500), _0x5ca67d.bind(this)();
        }
      } else {
        return _0x4cb851 == 403 && (await _0x494dd3.bind(this)(![])), await _0x45a98b(2500), _0x5ca67d.bind(this)();
      }
    } catch (err) {
      const _0x1101e0 = "2|0|3|1|4".split('|');

      let _0x224fd0 = 0;
      console.log(err);
      var arg_2476 = '[' + new Date().toISOString() + "]: Payment Previews V2 Error, Retry " + err;

      _0x2d2bdc(arg_2476, this.logFilePath);

      _0x5a14e3(arg_2477);

      await _0x45a98b(2500);
      return _0x5ca67d.bind(this)();
    }
  };

  const _0x132a0e = async function () {
    const _0x201e6e = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2478);

      return;
    }

    try {
      _0x5a14e3(arg_2479);

      var arg_2480 = '[' + new Date().toISOString() + "]: Submit Payment Options";

      _0x2d2bdc(arg_2480, this.logFilePath);

      this.paymentInfoId = _0x28d3a4();

      let _0x2ad994 = JSON.stringify(arg_2481);

      console.log("payment_preview", _0x2ad994);

      let _0x35c0ca = await _0x525073.bind(this)(_0x2f7878);

      let _0x52b115 = _0x35c0ca.statusCode;
      console.log("payment/preview/v2", _0x52b115);
      console.log("payment/preview/v2", _0x35c0ca.body);

      if (_0x52b115 == 200) {
      } else {
        if (_0x52b115 == 403) {
          await _0x494dd3.bind(this)(![]);
        }

        return await _0x45a98b(2500), _0x132a0e.bind(this)();
      }
    } catch (err) {
      const _0x32930e = "3|4|2|0|1".split('|');

      let _0x3fc37d = 0;
      console.log(err);
      var arg_2482 = '[' + new Date().toISOString() + "]: Submit Payment Options Error, Retry " + err;

      _0x2d2bdc(arg_2482, this.logFilePath);

      _0x5a14e3(arg_2483);

      await _0x45a98b(2500);
      return _0x132a0e.bind(this)();
    }
  };

  const _0x19e134 = async function () {
    const _0x12d1f5 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2484);

      return;
    }

    try {
      var arg_2485 = '[' + new Date().toISOString() + "]: Submit Payment Preview";

      _0x2d2bdc(arg_2485, this.logFilePath);

      this.paymentInfoId = _0x28d3a4();

      let _0x7d27c0 = JSON.stringify(arg_2486);

      console.log("payment_preview", _0x7d27c0);

      let _0x3e8613 = await _0x525073.bind(this)(_0x58e87f);

      let _0x447bcd = _0x3e8613.statusCode;
      console.log("payment/preview/v2", _0x447bcd);
      console.log("payment/preview/v2", _0x3e8613.body);

      if (_0x447bcd == 202) {
        let _0x4c9c28 = JSON.parse(_0x3e8613.body);

        this.paymentId = _0x4c9c28.id;
        console.log("this.paymentId", this.paymentId);
      } else {
        if (_0x447bcd == 403) {
          await _0x494dd3.bind(this)(![]);
        }

        return await _0x45a98b(2500), _0x19e134.bind(this)();
      }
    } catch (err) {
      const _0x883a52 = "3|1|2|4|0".split('|');

      let _0x414a3d = 0;
      console.log(err);
      var arg_2487 = '[' + new Date().toISOString() + "]:  Submit Payment PreviewError, Retry " + err;

      _0x2d2bdc(arg_2487, this.logFilePath);

      _0x5a14e3(arg_2488);

      await _0x45a98b(2500);
      return _0x19e134.bind(this)();
    }
  };

  const _0x13235c = async function () {
    const _0x168e2e = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2490);

      return;
    }

    try {
      await _0x45a98b(2000);

      let _0x4613ae = await _0x525073.bind(this)(_0xf91faf);

      let _0x3ac626 = _0x4613ae.statusCode;
      console.log("checkout_previews/v2/jobs", _0x3ac626);
      console.log("checkout_previews/v2/jobs", _0x4613ae.body);

      var arg_2491 = '[' + new Date().toISOString() + "]: paymentcc status " + _0x3ac626;

      _0x2d2bdc(arg_2491, this.logFilePath);

      var arg_2492 = '[' + new Date().toISOString() + "]: paymentcc body " + _0x4613ae.body;

      _0x2d2bdc(arg_2492, this.logFilePath);

      if (_0x3ac626 == 200) {
        let _0x1fa64a = JSON.parse(_0x4613ae.body);

        if (_0x1fa64a.status != "COMPLETED") {
          return await _0x45a98b(2500), _0x13235c.bind(this)();
        } else {
          this.priceChecksum = _0x1fa64a.response.priceChecksum;
          this.total = _0x1fa64a.response.totals.total;
          console.log("this.priceChecksum", this.priceChecksum);
          console.log("this.total", this.total);
        }
      } else {
        if (_0x3ac626 == 403) {
          await _0x494dd3.bind(this)(![]);
        }

        return await _0x45a98b(2500), _0x13235c.bind(this)();
      }
    } catch (err) {
      const _0x2e8a23 = "3|2|1|4|0".split('|');

      let _0x3fe3c1 = 0;
      console.log(err);
      var arg_2502 = '[' + new Date().toISOString() + "]: CheckOut Preview V2 Error, Retry " + err;

      _0x2d2bdc(arg_2502, this.logFilePath);

      _0x5a14e3(arg_2503);

      await _0x45a98b(2500);
      return _0x13235c.bind(this)();
    }
  };

  const _0x467231 = async function () {
    const _0x137b6e = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2504);

      return;
    }

    try {
      _0x5a14e3(arg_2505);

      var _0x22b93a = Date.now();

      var _0x1b2ad6;

      if (this.launchDate > _0x22b93a) {
        const _0x264049 = "0|1|3|4|2".split('|');

        let _0x241ea8 = 0;
        global.taskStatus.snkrs.countDownNumber++;
        var arg_2510 = this.launchDate - _0x22b93a;
        _0x1b2ad6 = arg_2510 + 4000;

        _0x5a14e3(arg_2511);

        _0x51259d.bind(this)();

        await _0x45a98b(_0x1b2ad6);
      } else {
        await _0x45a98b(1500);
      }

      _0x5a14e3(arg_2506);

      if (_0x3b9bb4()) {
        return;
      }

      var arg_2507 = '[' + new Date().toISOString() + "]: CheckOut Preview";

      _0x2d2bdc(arg_2507, this.logFilePath);

      if (this.deviceId) {
        _0x68d6c9.request.clientInfo = {
          'deviceId': this.deviceId
        };
      }

      console.log("dictpayload", _0x68d6c9);

      let _0x8e1dc8 = JSON.stringify(_0x68d6c9);

      this.checkoutId = _0x28d3a4();
      console.log("checkout_preview", _0x8e1dc8);
      console.log("this.checkoutId", this.checkoutId);

      let _0xbf49e6 = await _0x525073.bind(this)(_0x2e3bc2);

      let _0x15c196 = _0xbf49e6.statusCode;

      var arg_2508 = '[' + new Date().toISOString() + "]: CheckOut Preview status " + _0x15c196;

      _0x2d2bdc(arg_2508, this.logFilePath);

      var arg_2509 = '[' + new Date().toISOString() + "]: CheckOut Preview body " + _0xbf49e6.body;

      _0x2d2bdc(arg_2509, this.logFilePath);

      if (_0x15c196 == 202) {
      } else {
        return _0x15c196 == 403 && (await _0x494dd3.bind(this)(![])), await _0x45a98b(2500), _0x467231.bind(this)();
      }
    } catch (err) {
      const _0x3a6df9 = "1|3|0|4|2".split('|');

      let _0x237de9 = 0;
      console.log(err);
      var arg_2513 = '[' + new Date().toISOString() + "]: CheckOut Preview Error, Retry " + err;

      _0x2d2bdc(arg_2513, this.logFilePath);

      _0x5a14e3(arg_2514);

      await _0x45a98b(2500);
      return _0x467231.bind(this)();
    }
  };

  const _0x352fbf = async function () {
    const _0x198c21 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2515);

      return;
    }

    try {
      _0x5a14e3(arg_2516);

      var _0x2ff4c3 = Date.now();

      var _0x2d99f0;

      if (this.launchDate > _0x2ff4c3) {
        const _0x152f94 = "2|0|1|3|4".split('|');

        let _0x517b77 = 0;
        global.taskStatus.snkrs.countDownNumber++;
        var arg_2520 = this.launchDate - _0x2ff4c3;
        _0x2d99f0 = arg_2520 + 5000;

        _0x5a14e3(arg_2521);

        _0x51259d.bind(this)();

        await _0x45a98b(_0x2d99f0);
      } else {
        _0x51259d.bind(this)();

        await _0x45a98b(1000);
      }

      _0x5a14e3(arg_2517);

      if (_0x3b9bb4()) {
        return;
      }

      var arg_2518 = '[' + new Date().toISOString() + "]: Submitting Entry";

      _0x2d2bdc(arg_2518, this.logFilePath);

      await this.page.waitForSelector(".button-submit", {
        'visible': !![]
      });

      let _0x347b01 = await this.page.$(".button-submit");

      await _0x347b01.click();
      var _0x547c1b = 0;

      while (!![]) {
        if (this.entriesId != null) {
          await _0x537bc0.bind(this)();

          _0x5a14e3(arg_2522);

          var arg_2523 = '[' + new Date().toISOString() + "]: this.entriesId " + this.entriesId;

          _0x2d2bdc(arg_2523, this.logFilePath);

          break;
        } else {
          await _0x45a98b(5000);
          _0x547c1b += 1;
          await _0x537bc0.bind(this)();
          await _0x11ef23.bind(this)();

          if (_0x547c1b > 5 || this.sumbiterror) {
            this.sumbiterror = ![];

            _0x5a14e3(arg_2524);

            var arg_2525 = '[' + new Date().toISOString() + "]: Submiting Entry Error, Retry " + _0x547c1b;

            _0x2d2bdc(arg_2525, this.logFilePath);

            await _0x11ef23.bind(this)();

            if (this.entriesId != null) {
              await _0x537bc0.bind(this)();

              _0x5a14e3(arg_2526);

              var arg_2527 = '[' + new Date().toISOString() + "]: this.entriesId " + this.entriesId;

              _0x2d2bdc(arg_2527, this.logFilePath);

              break;
            }

            return await _0x48c096.bind(this)(), await _0x1bd5c0.bind(this)(), _0x352fbf.bind(this)();
          }
        }
      }

      this.issubmitraffle = !![];
      var arg_2519 = '[' + new Date().toISOString() + "]: Go to Submit Entry done";

      _0x2d2bdc(arg_2519, this.logFilePath);

      if (this.method == "DAN") {
        const _0x2fe33d = "1|2|4|5|0|3".split('|');

        let _0x1f8374 = 0;
        _0x2ff4c3 = Date.now();
        _0x2d99f0 = this.stopEntryDate - _0x2ff4c3;

        _0x5a14e3(arg_2528);

        await _0x45a98b(15000);

        if (this.browser) {
          await this.browser.close();
          this.browser = null;
        }

        await _0x45a98b(_0x2d99f0 + 105000);
      } else {
        _0x5a14e3(arg_2529);

        await _0x45a98b(15000);

        if (this.browser) {
          await this.browser.close();
          this.browser = null;
        }

        await _0x45a98b(105000);
      }
    } catch (err) {
      const _0x87003b = "5|3|1|0|2|6|4".split('|');

      let _0x46c0d7 = 0;
      console.log(err);
      var arg_2530 = '[' + new Date().toISOString() + "]: Submiting Entry Error, Retry " + err;

      _0x2d2bdc(arg_2530, this.logFilePath);

      _0x5a14e3(arg_2531);

      await _0x48c096.bind(this)();
      await _0x45a98b(2500);
      await _0x1bd5c0.bind(this)();
      return _0x352fbf.bind(this)();
    }
  };

  const _0x234889 = async function () {
    const _0xc854d0 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2532);

      return;
    }

    try {
      _0x5a14e3(arg_2533);

      var arg_2534 = '[' + new Date().toISOString() + "]: Submiting Order";

      _0x2d2bdc(arg_2534, this.logFilePath);

      var _0x322dd9 = Date.now();

      var _0x2c7cca;

      if (this.launchDate > _0x322dd9) {
        const _0x25f471 = "2|4|1|3|0".split('|');

        let _0x1892bc = 0;
        global.taskStatus.snkrs.countDownNumber++;
        var arg_2538 = this.launchDate - _0x322dd9;
        _0x2c7cca = arg_2538 + 5000;

        _0x5a14e3(arg_2539);

        _0x51259d.bind(this)();

        await _0x45a98b(_0x2c7cca);
      } else {
        _0x51259d.bind(this)();

        await _0x45a98b(1000);
      }

      _0x5a14e3(arg_2535);

      if (_0x3b9bb4()) {
        return;
      }

      while (!![]) {
        if (!this.running) {
          _0x5a14e3(arg_2541);

          return;
        }

        if (_0x352b78.bind(this)()) {
          break;
        }

        var arg_2540 = '[' + new Date().toISOString() + "]: Waiting Submit";

        _0x2d2bdc(arg_2540, this.logFilePath);

        await _0x45a98b(4000);
      }

      var arg_2536 = '[' + new Date().toISOString() + "]: Submitting Entry";

      _0x2d2bdc(arg_2536, this.logFilePath);

      await this.page.waitForSelector("[data-qa=\"save-button\"]", {
        'visible': !![]
      });

      let _0x33f316 = await this.page.$x("//button[@data-qa=\"save-button\"]");

      await _0x33f316[2].click();

      if (this.method == "DAN") {
        await _0x45a98b(1500);
        await this.page.waitForSelector("[data-qa=\"presubmit-confirm\"]", {
          'visible': !![],
          'timeout': 20000
        });

        let _0x10b34f = await this.page.$x("//button[@data-qa=\"presubmit-confirm\"]");

        await _0x10b34f[0].click();
      }

      _0x3f4c07.bind(this)();

      var _0x3db372 = 0;

      while (!![]) {
        if (this.entriesId != null) {
          await _0x537bc0.bind(this)();

          _0x5a14e3(arg_2542);

          var arg_2543 = '[' + new Date().toISOString() + "]: this.entriesId " + this.entriesId;

          _0x2d2bdc(arg_2543, this.logFilePath);

          break;
        } else {
          await _0x45a98b(5000);
          await _0x537bc0.bind(this)();
          await _0x11ef23.bind(this)();
          _0x3db372 += 1;

          if (_0x3db372 > 5 || this.sumbiterror) {
            this.sumbiterror = ![];

            _0x5a14e3(arg_2544);

            var arg_2545 = '[' + new Date().toISOString() + "]: Submiting Entry Error, Retry " + _0x3db372;

            _0x2d2bdc(arg_2545, this.logFilePath);

            await _0x11ef23.bind(this)();

            if (this.entriesId != null) {
              await _0x537bc0.bind(this)();

              _0x5a14e3(arg_2546);

              var arg_2547 = '[' + new Date().toISOString() + "]: this.entriesId " + this.entriesId;

              _0x2d2bdc(arg_2547, this.logFilePath);

              break;
            }

            return await _0x48c096.bind(this)(), await _0x5a5a60.bind(this)(), _0x234889.bind(this)();
          }
        }
      }

      this.issubmitraffle = !![];
      var arg_2537 = '[' + new Date().toISOString() + "]: Go to Submit Entry done";

      _0x2d2bdc(arg_2537, this.logFilePath);

      if (this.method == "DAN") {
        _0x322dd9 = Date.now();
        _0x2c7cca = this.stopEntryDate - _0x322dd9;

        _0x5a14e3(arg_2548);

        await _0x45a98b(5000);

        if (this.browser) {
          await this.browser.close();
          this.browser = null;
        }

        await _0x45a98b(_0x2c7cca + 11000);
      } else {
        _0x5a14e3(arg_2549);

        await _0x45a98b(5000);

        if (this.browser) {
          await this.browser.close();
          this.browser = null;
        }

        await _0x45a98b(115000);
      }
    } catch (err) {
      const _0x4c4478 = "5|0|4|1|2|6|3".split('|');

      let _0x253786 = 0;
      console.log(err);
      var arg_2550 = '[' + new Date().toISOString() + "]: Submiting Entry Error, Retry " + err;

      _0x2d2bdc(arg_2550, this.logFilePath);

      _0x5a14e3(arg_2551);

      await _0x48c096.bind(this)();
      await _0x45a98b(2500);
      await _0x5a5a60.bind(this)();
      return _0x234889.bind(this)();
    }
  };

  const _0x537bc0 = async function () {
    const _0x41f364 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2553);

      throw "stopped";
    }

    try {
      if (this.browser) {
        this.cookiesList = await this.page.cookies();
      }

      if (this.cookiesList) {
        for (var _0x4d1769 in this.cookiesList) {
          await this.session.cookies.set({
            'url': "https://www.nike.com",
            'name': this.cookiesList[_0x4d1769].name,
            'value': this.cookiesList[_0x4d1769].value
          });
        }
      }
    } catch (err) {
      console.log(err);
      var arg_2555 = '[' + new Date().toISOString() + "]: Set Cookie Error: " + err + '.';

      _0x2d2bdc(arg_2555, this.logFilePath);

      throw "stop";
    }
  };

  const _0x565304 = async function () {
    const _0x2eaeb7 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2556);

      throw "stopped";
    }

    try {
      var arg_2557 = '[' + new Date().toISOString() + "]: this.entriesId " + this.entriesId;

      _0x2d2bdc(arg_2557, this.logFilePath);

      var arg_2558 = '[' + new Date().toISOString() + "]: this.accounttoken " + this.accounttoken;

      _0x2d2bdc(arg_2558, this.logFilePath);

      if (this.browser) {
        await this.browser.close();
        this.browser = null;
      }

      if (!this.issubmitraffle) {
        return;
      }

      if (this.entriesId && this.accounttoken) {
        _0x5a14e3(arg_2559);

        let _0x1147c1 = await _0x525073.bind(this)(_0x4e4211);

        let _0x3ad701 = _0x1147c1.statusCode;

        var arg_2560 = '[' + new Date().toISOString() + "]: checkOrder statusCode " + _0x3ad701;

        _0x2d2bdc(arg_2560, this.logFilePath);

        var arg_2561 = '[' + new Date().toISOString() + "]: checkOrder body " + _0x1147c1.body;

        _0x2d2bdc(arg_2561, this.logFilePath);

        if (_0x3ad701 == 200) {
          let _0x21c4b8 = JSON.parse(_0x1147c1.body);

          if ("result" in _0x21c4b8) {
            if (_0x21c4b8.result.status == "WINNER") {
              const _0x26fa40 = "5|4|3|2|1|0".split('|');

              let _0x5887e9 = 0;
              global.taskStatus.snkrs.winnerNumber++;

              _0x5a14e3(arg_2564);

              this.checkoutInfo.paymentStatus = _0x172aa3.xiQfa;
              var arg_2565 = '[' + new Date().toISOString() + "]: Successfully Checkedout!";

              _0x2d2bdc(arg_2565, this.logFilePath);

              this.sender.send("checkoutSuccess", arg_2566);
              return !![];
            } else {
              global.taskStatus.snkrs.noWinnerNumber++;

              _0x5a14e3(arg_2567);
            }
          } else {
            return _0x5a14e3({
              'id': this.id,
              'status': "WAITING FOR ENTRY RESULT",
              'statusCode': 2,
              'groupId': this.groupId
            }), await _0x45a98b(5000), _0x565304.bind(this)();
          }
        } else {
          const _0x1bb21f = "4|1|0|3|2".split('|');

          let _0x5c7c8e = 0;

          _0x5a14e3(arg_2569);

          var arg_2570 = '[' + new Date().toISOString() + "]: Checking Order " + _0x3ad701 + ", Retry";

          _0x2d2bdc(arg_2570, this.logFilePath);

          if (_0x3ad701 == 403) {
            await _0x494dd3.bind(this)(![]);
          }

          await _0x45a98b(5000);
          await _0x565304.bind(this)();
        }
      }
    } catch (err) {
      return console.log(err), _0x5a14e3({
        'id': this.id,
        'status': "Checking Order Error, Retry",
        'statusCode': 4,
        'groupId': this.groupId
      }), await _0x45a98b(5000), _0x565304.bind(this)();
    }
  };

  const _0x1aec83 = new _0x5860df();

  const {
    session: _0x1d725a,
    app: _0x67695f
  } = _0x5b1a41;

  const _0x404ee1 = arg_7 + "/taskLogs";

  class _0x188e8f {
    constructor(_0x1b8589, _0x36036a, _0x1d3312, _0x2cb62f, _0x28770d, _0x2f43d5, _0x58028b, _0x5e418e, _0x5cab38, _0x54629c, _0x3a7362, _0x24a874, _0xce8ed6, _0x5d8984, _0x3356d9, _0x19a395) {
      const _0xe69f14 = _0x8044f7;

      const _0xe06469 = "17|20|38|5|71|68|10|0|58|12|56|53|44|15|11|64|14|35|27|55|37|7|50|25|21|62|6|16|4|69|40|39|34|47|51|49|33|1|3|72|30|41|43|24|48|67|9|46|2|22|28|19|74|31|13|23|61|36|32|54|8|52|66|65|70|57|29|18|73|42|45|63|60|59|26".split('|');

      let _0x5d150b = 0;
      this.id = _0x1b8589;
      this.groupId = _0x36036a;
      this.profile = _0x1d3312;
      var arg_2572 = parseInt(this.profile.expyear);
      var arg_2571 = arg_2572 % 10000;
      this.profile.expyear = arg_2571 + '';
      this.size = _0x2cb62f;
      this.modes = _0x28770d;
      this.type = _0x2f43d5;
      this.siteOrigin = _0x58028b;
      this.siteName = _0x5d8984;
      this.sessionName = "snkr-" + _0x1b8589 + '-' + _0x2bda7f();
      this.host = _0x58028b.replace("https://", '');
      console.log("siteName", _0x5d8984);
      this.proxy = _0x5e418e;
      this.proxyList = _0x3356d9;
      this.searchLink = _0x5cab38;
      this.productPID = _0x54629c.trim();
      this.productLink = _0x54629c;
      this.monitorDelay = _0x3a7362;
      this.productId = null;
      this.user_id = null;
      this.visitor = null;
      this.refresh_token = null;
      this.sender = _0x24a874;
      this.running = ![];
      this.answers = null;
      this.workTime = null;
      this.isCanRelease = ![];
      this.isSubmitDone = ![];
      this.priceChecksum = null;
      this.variants = null;
      this.errorDelay = 3500;
      this.browser = null;
      this.page = null;
      this.pickedSize = null;
      this.paymentInfoId = null;
      this.skuId = null;
      this.creditCardInfoId = null;
      this.offSetTime = null;
      this.styleColor = null;
      this.launchDate = null;
      this.method = null;
      this.stopEntryDate = null;
      this.launchId = null;
      this.issubmitraffle = ![];
      this.paymentId = null;
      this.ready = ![];
      this.deviceId = null;
      this.itemsid = null;
      this.started = ![];
      this.entriesId = null;
      this.isclickcta = ![];
      this.accounttoken = null;
      this.cookiesList = null;
      this.total = null;
      this.login403 = ![];
      this.accounterror = ![];
      this.checkordertime = null;
      this.errormsg = null;
      this.checkoutId = null;
      this.loggedIn = ![];
      this.sumbiterror = ![];
      this.checkAccount = ![];
      this.x_kpsdk_ct = null;
      this.x_kpsdk_st = null;
      this.x_kpsdk_cdid = null;
      this.posttldata = null;
      this.ipsdata = null;
      this.accountname = _0x19a395.split(':')[0];
      this.accountpasswod = _0x19a395.split(':')[1];
      console.log(this.accountname);
      this.user_agent = global.localChromeUA || _0x310223(_0x2b33c7.SNKRS);
      this.logFilePath = _0x404ee1 + '/' + _0xce8ed6 + '/' + this.profile.name + '_' + this.id;
      this.startTime = Date.now();
      this.checkoutInfo = {
        'version': _0x67695f.getVersion(),
        'discordId': global.user.userId,
        'key': global.user.key,
        'siteType': this.type,
        'siteName': _0x5d8984,
        'siteURL': this.productPID,
        'store': this.siteOrigin,
        'checkoutSpeed': 0,
        'productName': "N/A",
        'size': null,
        'profileName': this.profile.name,
        'orderNumber': "N/A",
        'proxyIp': this.proxy,
        'mode': Object.keys(this.modes).filter(_0x368d05 => this.modes[_0x368d05]).join('-'),
        'imageURL': null,
        'paymentStatus': null,
        'sku': null,
        'date': new Date().toISOString(),
        'timestamp': Date.now(),
        'email': this.profile.email
      };
      this.successWebhook = _0x172aa3.wrZmv;
      this.declineWebhook = _0x172aa3.jdUZa;
    }

    async productFound(_0x474d11) {
      const _0x11b4f2 = _0x8044f7;

      while (this.running && !this.ready) {
        await _0x45a98b(1000);
      }

      if (this.running && !this.started) {
        const _0x2c0213 = "2|4|1|0|6|3|8|7|5|9".split('|');

        let _0x34d343 = 0;
        this.started = !![];
        this.productId = _0x474d11.productId;
        this.styleColor = _0x474d11.styleColor;
        this.styleColor = _0x474d11.styleColor;
        this.imgLink = _0x474d11.imgLink;
        this.launchDate = _0x474d11.launchDate;
        this.method = _0x474d11.method;
        this.stopEntryDate = _0x474d11.stopEntryDate;
        this.launchId = _0x474d11.launchId;
        this.startCheckoutProcess();
      }
    }

    isProductFound() {
      const _0x45c9af = _0x8044f7;

      let _0x777912 = this.checkoutInfo && this.checkoutInfo.imageURL != null;

      if (_0x777912) {
        return {
          'imgLink': this.checkoutInfo.imageURL,
          'productName': this.checkoutInfo.productName
        };
      }

      return ![];
    }

    async initSession(_0x445ebf) {
      const _0x325084 = _0x8044f7;
      _0x445ebf = _0x445ebf && _0x445ebf.replace("http://", '');

      if (_0x445ebf && _0x445ebf.includes('@')) {
        _0x445ebf = _0x445ebf.split('@')[1] + ':' + _0x445ebf.split('@')[0];
      }

      var arg_2575 = '' + this.sessionName;
      this.session = _0x1d725a.fromPartition(arg_2575);
      let _0x26545d = null;

      if (_0x445ebf) {
        _0x26545d = _0x445ebf.split(':')[0] + ':' + _0x445ebf.split(':')[1];
      } else {
        _0x26545d = '';
      }

      this.proxyUsername = _0x445ebf && _0x445ebf.split(':')[2] ? _0x445ebf.split(':')[2] : '';
      this.proxyPassword = _0x445ebf && _0x445ebf.split(':')[3] ? _0x445ebf.split(':')[3] : '';
      await this.session.setProxy({
        'proxyRules': _0x26545d
      });
    }

    async runTask(_0xca80cb = null) {
      const _0x10c53e = _0x8044f7;

      try {
        if (this.running) {
          return;
        }

        this.running = !![];
        global.taskStatus.snkrs.runningNumber++;
        await this.initSession(this.proxy);
        var arg_2576 = '[' + new Date().toISOString() + "]: is task running: " + this.running + " task " + this.id + " started...";

        _0x2d2bdc(arg_2576, this.logFilePath);

        _0x5a14e3(arg_2577);

        if (!this.running) {
          return;
        }

        while (!![]) {
          if (!this.running) {
            _0x5a14e3(arg_2579);

            return;
          }

          if (_0x309b60.bind(this)()) {
            break;
          }

          await _0x45a98b(1000);
        }

        this.ready = !![];

        _0x5a14e3(arg_2578);

        if (_0xca80cb != null && this.running && !this.started) {
          const _0x2b79da = "9|3|4|1|10|8|2|7|6|0|5".split('|');

          let _0x15b74c = 0;
          this.started = !![];
          console.log(_0xca80cb);
          this.productId = _0xca80cb.productId;
          this.styleColor = _0xca80cb.styleColor;
          this.imgLink = _0xca80cb.imgLink;
          this.launchDate = _0xca80cb.launchDate;
          this.method = _0xca80cb.method;
          this.stopEntryDate = _0xca80cb.stopEntryDate;
          this.launchId = _0xca80cb.launchId;
          await _0x1841d2.bind(this)();
          this.startCheckoutProcess();
        }
      } catch (err) {
        console.log(err);
      }
    }

    async startCheckoutProcess() {
      const _0x3004cd = _0x8044f7;

      _0x5a14e3(arg_2582);

      await _0x17cdcd.bind(this)();
      let _0x5dc336 = this.modes[_0x8c3d4a.SNKRS.HEADLESS];

      let _0x710ecb = _0x1aec83.get("accounttoken");

      let _0xca2489 = ![];

      let _0x40d7d1 = !![];

      if (_0x710ecb) {
        for (let _0x1c35b4 of _0x710ecb) {
        }
      }

      if (_0xca2489) {
        _0x40d7d1 = await _0x14658b.bind(this)();
      }

      console.log("isneedLogin", _0x40d7d1);

      if (this.modes[_0x8c3d4a.SNKRS.REQUEST]) {
        if (_0x40d7d1) {
          const _0x5a5e82 = "0|3|2|5|1|4".split('|');

          let _0x126c2d = 0;
          await _0x350fe2.bind(this)();
          await _0x2e15fe.bind(this)();
          await _0x29b0e3.bind(this)();

          _0x3b17e9.bind(this)();

          await _0x1b72d4.bind(this)();

          if (!this.running) {
            return;
          }
        }

        await _0x421587.bind(this)();
        await _0x41f534.bind(this)();
        await _0x39a239.bind(this)();
        await _0x38f0b2.bind(this)();
        await _0xfb86a7.bind(this)();
        await _0x2ea77d.bind(this)();
        await _0x298bef.bind(this)();
        await _0x2d283a.bind(this)();
        await _0x467231.bind(this)();
        await _0x13235c.bind(this)();
        await _0x132a0e.bind(this)();
        await _0x19e134.bind(this)();
        await _0x5ca67d.bind(this)();
        await _0x7a7df0.bind(this)();
      } else {
        if (_0x40d7d1) {
          const _0x9dd887 = "1|4|0|3|2".split('|');

          let _0x5b2be5 = 0;
          await _0x350fe2.bind(this)();
          await _0x2e15fe.bind(this)();
          await _0x29b0e3.bind(this)();

          _0x3b17e9.bind(this)();

          await _0x1b72d4.bind(this)();
        }

        if (!this.running) {
          return;
        }

        await _0x421587.bind(this)();

        let _0x487fb5 = await _0x41f534.bind(this)();

        await _0x31fd58.bind(this)(this.modes[_0x8c3d4a.SNKRS.HEADLESS], this.proxy, _0x487fb5);

        if (!this.running) {
          return this.resetTask();
        }

        if (this.siteName == "snkrs-ca" || this.siteName == "snkrs-ru") {
          const _0x222178 = "2|1|3|4|0".split('|');

          let _0x45b1d9 = 0;
          await _0x4c2353.bind(this)(this.modes[_0x8c3d4a.SNKRS.Refill]);

          if (!this.running) {
            return this.resetTask();
          }

          await _0x1bd5c0.bind(this)();

          if (!this.running) {
            return this.resetTask();
          }

          await _0x352fbf.bind(this)();
        } else {
          const _0x3cf3cc = "2|0|3|1|4".split('|');

          let _0x16f371 = 0;
          await _0x16dd7b.bind(this)(this.modes[_0x8c3d4a.SNKRS.Refill]);

          if (!this.running) {
            return this.resetTask();
          }

          await _0x5a5a60.bind(this)();

          if (!this.running) {
            return this.resetTask();
          }

          await _0x234889.bind(this)();
        }
      }

      if (!this.running) {
        return this.resetTask();
      }

      global.taskStatus.snkrs.entrySubmittedNumber++;

      let _0x2ef9db = await _0x565304.bind(this)();

      if (!_0x2ef9db || !this.running) {
        return this.resetTask();
      }

      await this.sendToWebhook();
    }

    async resetTask() {
      const _0x185690 = _0x8044f7;
      this.loggedIn = ![];
      this.running = ![];
      this.variants = null;
      this.started = ![];
      this.pickedSize = null;
      this.checkoutInfo = null;
      console.log("stop task");
      await _0x354f98.bind(this)();

      try {
        if (this.browser != null) {
          await this.browser.close();
          this.browser = null;
        }
      } catch (err) {
      }
    }

    async sendToWebhook() {
      const _0x55cce5 = _0x8044f7;

      const _0x12510e = "11|1|8|3|9|7|6|5|10|4|0|2".split('|');

      let _0x2d3487 = 0;
      this.checkoutInfo.productName = this.styleColor;
      this.checkoutInfo.sku = this.styleColor;
      this.checkoutInfo.imageURL = this.imgLink;
      var arg_2593 = Date.now();
      this.checkoutInfo.checkoutSpeed = arg_2593 - this.startTime;
      this.checkoutInfo.date = new Date().toISOString();
      this.checkoutInfo.timestamp = Date.now();
      this.checkoutInfo.delay = this.monitorDelay;

      _0x27b1e4(this.checkoutInfo);

      var arg_2594 = _0x1976f8(this.checkoutInfo, !![]);

      var arg_2595 = this.checkoutInfo.paymentStatus == "Success";

      _0x3ef86a(arg_2594, arg_2595);

      var arg_2596 = _0x1976f8(this.checkoutInfo, ![]);

      var arg_2597 = null;

      if (this.checkoutInfo.paymentStatus == "Success") {
        arg_2597 = this.successWebhook;
      } else {
        arg_2597 = this.declineWebhook;
      }

      _0x586466(arg_2596, arg_2597);

      if (this.checkoutInfo.paymentStatus == "Success") {
        var arg_2598 = _0x1976f8(this.checkoutInfo, ![]);

        _0x586466(arg_2598, global.successWebhook);
      }

      return;
    }

    async stopTask() {
      const _0x44c38b = _0x8044f7;
      global.taskStatus.snkrs.runningNumber--;

      _0x51259d.bind(this)();

      _0x3f4c07.bind(this)();

      this.loggedIn = ![];
      this.running = ![];
      this.variants = null;
      this.started = ![];
      this.pickedSize = null;
      this.checkoutInfo = null;
      console.log("stop task");
      await _0x354f98.bind(this)();

      _0x5a14e3(arg_2599);

      var arg_2600 = '[' + new Date().toISOString() + "]: Stopped";

      _0x2d2bdc(arg_2600, this.logFilePath);

      try {
        if (this.browser != null) {
          await this.browser.close();
          this.browser = null;
        }
      } catch (err) {
      }
    }

  }

  var arg_8 = (_0x5b1a41.app || _0x5b1a41.remote.app).getPath("userData");

  const _0x1f60cf = async function () {
    const _0x4a7a93 = _0x8044f7;
    let _0x27a660 = this.proxyList[Math.floor(Math.random() * this.proxyList.length)];
    this.proxy = _0x27a660;
    console.log(_0x27a660);
    let _0x1e9179 = null;

    if (_0x27a660 && _0x27a660.split(':').length > 1) {
      _0x1e9179 = _0x27a660.split(':')[0] + ':' + _0x27a660.split(':')[1];
    } else {
      _0x1e9179 = '';
    }

    this.proxyUsername = _0x27a660 && _0x27a660.split(':')[2] ? _0x27a660.split(':')[2] : '';
    this.proxyPassword = _0x27a660 && _0x27a660.split(':')[3] ? _0x27a660.split(':')[3] : '';
    await this.session.setProxy({
      'proxyRules': _0x1e9179
    });
  };

  const _0x2621b2 = _0x5aa7a3 => {
    const _0x25b5f6 = _0x8044f7;
    return _0x5aa7a3.headers && _0x5aa7a3.headers["set-cookie"] && _0x5aa7a3.headers["set-cookie"].find(_0x3a5568 => _0x3a5568.includes("akavpwr")) || _0x5aa7a3.body && _0x5aa7a3.body.includes("<title>WAITING</title>");
  };

  const _0x48dc32 = _0x1d1fae => {
    const _0x298eb3 = _0x8044f7;
    return _0x1d1fae.statusCode == 403 || _0x1d1fae.body && (_0x1d1fae.body.includes("<TITLE>Access Denied</TITLE>") || _0x1d1fae.body.includes("Your Access Has Been Denied"));
  };

  const _0x530cda = (_0xc2edc, _0x3c93cc) => {
    const _0x170642 = _0x8044f7;

    let _0x570d7c = _0xc2edc.paymentStatus != "Success";

    let _0x370f88 = [];
    let _0x4d1175 = [];

    _0x4d1175.push(arg_2604);

    _0x4d1175.push(arg_2605);

    _0x4d1175.push(arg_2606);

    _0x4d1175.push(arg_2607);

    _0x4d1175.push(arg_2608);

    _0x4d1175.push(arg_2609);

    _0x4d1175.push(arg_2610);

    _0x4d1175.push(arg_2611);

    if (_0x3c93cc) {
      _0x4d1175.push(arg_2613);

      _0x4d1175.push(arg_2614);

      _0x4d1175.push(arg_2615);

      _0x4d1175.push(arg_2616);
    }

    _0x4d1175.push(arg_2612);

    return _0x370f88.push(_0x5b1e92), _0x2b42a9.embeds = _0x370f88, _0x2b42a9;
  };

  const _0x507706 = async function (_0x75ac0f, _0x475b41) {
    const _0x42c6dc = _0x8044f7;

    try {
      var arg_2619 = _0x475b41.replace(/\s+/g, '');

      let _0x1e2dc1 = /setAu','([a-zA-Z0-9/]+)'\]\)/.exec(arg_2619);

      if (_0x1e2dc1 && _0x1e2dc1[1]) {
        this.sensorURL = _0x1e2dc1[1].includes("http") ? _0x1e2dc1[1] : '' + this.siteOrigin + _0x1e2dc1[1];
        var arg_2621 = '[' + new Date().toISOString() + "]: parsed sensor url: " + this.sensorURL;

        _0x2d2bdc(arg_2621, this.logFilePath);

        if (this.sensorURL && !this.gotSensorURL) {
          await _0x29e91e.bind(this)(this.sensorURL, {
            'user-agent': this.user_agent,
            'accept': "*/*",
            'sec-fetch-site': "same-origin",
            'sec-fetch-mode': "no-cors",
            'sec-fetch-dest': "script",
            'referer': _0x75ac0f,
            'accept-encoding': "gzip, deflate, br",
            'accept-language': "en-US"
          });
          this.gotSensorURL = !![];
        }
      } else {
        _0x475b41 = _0x475b41.replace(/\s+/g, '');

        var arg_2622 = _0x475b41.lastIndexOf("<scripttype=\"text/javascript");

        let _0x5d51d9 = _0x475b41.substring(arg_2622);

        _0x1e2dc1 = /src="(.*)"></.exec(_0x5d51d9);

        if (_0x1e2dc1 && _0x1e2dc1[1] && !_0x1e2dc1[1].includes('><')) {
          this.sensorURL = _0x1e2dc1[1].includes("http") ? _0x1e2dc1[1] : '' + this.siteOrigin + _0x1e2dc1[1];
          var arg_2623 = '[' + new Date().toISOString() + "]: parsed sensor url: " + this.sensorURL;

          _0x2d2bdc(arg_2623, this.logFilePath);

          if (this.sensorURL && !this.gotSensorURL) {
            await _0x29e91e.bind(this)(this.sensorURL, {
              'user-agent': this.user_agent,
              'accept': "*/*",
              'sec-fetch-site': "same-origin",
              'sec-fetch-mode': "no-cors",
              'sec-fetch-dest': "script",
              'referer': _0x75ac0f,
              'accept-encoding': "gzip, deflate, br",
              'accept-language': "en-US"
            });
            this.gotSensorURL = !![];
          }
        }
      }
    } catch (err) {
    }

    try {
      let _0x155fa8 = /akam\/11\/([a-zA-Z0-9]+)"/.exec(_0x475b41);

      if (_0x155fa8 && _0x155fa8[1]) {
        this.pixelId = _0x155fa8[1];
      } else {
        let _0x29658d = _0x475b41.match(/src="(.*\/akam\/[\w/]+)"/)[1];

        this.pixelId = _0x29658d.split('/').pop();
      }

      this.pixelURL = this.siteOrigin + "/akam/11/pixel_" + this.pixelId;
      this.bazadebezolkohpepadr = /bazadebezolkohpepadr="(.*)"<\/script>/.exec(_0x475b41)[1];
      var arg_2625 = '[' + new Date().toISOString() + "]: parsed pixelURL: " + this.pixelURL + ", bazVal: " + this.bazadebezolkohpepadr;

      _0x2d2bdc(arg_2625, this.logFilePath);

      if (this.pixelURL && this.bazadebezolkohpepadr) {
        await _0x3ef322.bind(this)(_0x75ac0f);
      }
    } catch (err) {
    }

    var arg_2617 = '[' + new Date().toISOString() + "]: sensor url: " + this.sensorURL + ", pixelURL: " + this.pixelURL + ", bazVal: " + this.bazadebezolkohpepadr;
    console.log(arg_2617);
  };

  const _0x29e91e = async function (_0xe5eb78, _0x459de6, _0x3756ca = null, _0x37b742 = 0) {
    const _0x16388f = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2627);

      return;
    }

    if (_0x37b742 == 3) {
      return null;
    }

    try {
      if (_0x3756ca) {
        _0x1d4081.headers = _0x3756ca;
      }

      let _0x4cf1d2 = await _0x525073.bind(this)(_0x1d4081);

      var arg_2628 = '[' + new Date().toISOString() + "]: Get Page StatusCode:" + _0x4cf1d2.statusCode + ':\x20' + _0xe5eb78 + '\x20';
      console.log(arg_2628);

      if (_0x4cf1d2.statusCode == 200) {
        return _0x4cf1d2;
      }

      return null;
    } catch (err) {
      const _0x1dc944 = "2|4|0|1|3".split('|');

      let _0x21b7ca = 0;
      console.log(err);

      _0x5a14e3(arg_2630);

      var arg_2631 = '[' + new Date().toISOString() + "]: Get Product Page Failed " + err + '.';

      _0x2d2bdc(arg_2631, this.logFilePath);

      await _0x45a98b(this.monitorDelay);
      return _0x29e91e.bind(this)(_0xe5eb78, _0x459de6, _0x3756ca, _0x37b742);
    }
  };

  const _0x361d1a = async function (_0x3b0c4, _0x1830de) {
    const _0x37050c = _0x8044f7;
    let _0x33e627 = null;

    if (this.siteOrigin.includes("finishline")) {
      _0x33e627 = _0x4802da.FINISHLINE;
    } else {
      _0x33e627 = _0x4802da.JDSPORTS;
    }

    if (this.modes.AYCD) {
      _0x33e627 = _0x33e627 + "-aycd";
    }

    this.needCaptcha = _0x33e627;

    _0x5a14e3(arg_2632);

    _0x89a33e('', _0x33e627, this.siteOrigin, _0x3b0c4, _0x1830de, this.id, null, this.modes);

    let _0x35606c = _0x192d3d('', _0x33e627, this.siteOrigin, _0x3b0c4, _0x1830de, this.id, null, this.modes);

    while (this.running && !_0x35606c) {
      await _0x45a98b(50);
      _0x35606c = _0x192d3d('', _0x33e627, this.siteOrigin, _0x3b0c4, _0x1830de, this.id, null, this.modes);
    }

    return this.needCaptcha = ![], _0x35606c;
  };

  const _0x37c830 = async function () {
    const _0x26d505 = _0x8044f7;

    if (!this.running) {
      throw "stopped";
    }

    try {
      _0x5a14e3(arg_2650);

      let _0x3cd772 = await _0x52f001.bind(this)(null);

      this.akamaiCookie = _0x3cd772.cookie;
      var arg_2651 = '[' + new Date().toISOString() + "]: Fetched Akamai: " + this.akamaiCookie;

      _0x2d2bdc(arg_2651, this.logFilePath);

      if (this.akamaiCookie) {
        return !![];
      }

      return ![];
    } catch (err) {
      return console.log(err), _0x5a14e3({
        'id': this.id,
        'status': "Fetching Akamai Failed",
        'statusCode': 4,
        'groupId': this.groupId
      }), _0x2d2bdc('[' + new Date().toISOString() + "]: Fetching Akamai Error: " + err + '.', this.logFilePath), ![];
    }
  };

  const _0x943f86 = async function (_0x2ca248 = 0) {
    const _0x97a63f = _0x8044f7;

    if (!this.running) {
      throw "stopped";
    }

    try {
      _0x5a14e3(arg_2655);

      const _0x1282f4 = await _0x525073.bind(this)(_0x2a41c9);

      let _0x79b1ae = _0x1282f4.statusCode;
      var arg_2656 = "submit Shipping " + _0x79b1ae;
      console.log(arg_2656);
      var arg_2657 = "submit Shipping location " + _0x1282f4.request.uri.href;
      console.log(arg_2657);

      var arg_2658 = '[' + new Date().toISOString() + "]: submit Shipping statusCode: " + _0x79b1ae + ", location " + _0x1282f4.request.uri.href;

      _0x2d2bdc(arg_2658, this.logFilePath);

      if (_0x2621b2(_0x1282f4)) {
        return _0x5a14e3({
          'id': this.id,
          'status': "In Queue",
          'statusCode': 2,
          'groupId': this.groupId
        }), await _0x4c9ecb.bind(this)(), _0x943f86.bind(this)(_0x2ca248);
      } else {
        if (_0x79b1ae == 403) {
          if (_0x2ca248 >= this.maxRetry) {
            _0x5a14e3(arg_2662);

            var arg_2663 = '[' + new Date().toISOString() + "]: Maximum Retry Reached";

            _0x2d2bdc(arg_2663, this.logFilePath);

            this.hitMaxRetry = !![];
            return;
          }

          return _0x5a14e3({
            'id': this.id,
            'status': "Submitting Shipping (403)",
            'statusCode': 4,
            'groupId': this.groupId
          }), await _0x37c830.bind(this)(), await _0x5fb498(1000), _0x943f86.bind(this)(_0x2ca248 + 1);
        } else {
          if (_0x79b1ae == 200) {
            if (_0x1282f4.request.uri.href.includes("otherCheckoutError=true")) {
              return _0x5a14e3({
                'id': this.id,
                'status': "Submitting Shipping Failed, Retry",
                'statusCode': 4,
                'groupId': this.groupId
              }), _0x2d2bdc('[' + new Date().toISOString() + "]: Submitting Shipping Failed", this.logFilePath), await _0x5fb498(this.errorDelay), _0x943f86.bind(this)(_0x2ca248);
            }

            try {
              return this.securityCode = /id="securityCode" type="hidden" value="([a-zA-Z0-9-]+)"/.exec(_0x1282f4.body)[1], this.currentURL = _0x1282f4.request.uri.href, _0x2d2bdc('[' + new Date().toISOString() + "]: security code: " + this.securityCode, this.logFilePath), _0x42ae04.bind(this)();
            } catch (err) {
              const _0x1433dd = "4|3|1|2|0".split('|');

              let _0x4f57f2 = 0;
              var arg_2665 = '[' + new Date().toISOString() + "]: Submitting Shipping Failed, Error: " + err;

              _0x2d2bdc(arg_2665, this.logFilePath);

              _0x5a14e3(arg_2666);

              var arg_2667 = '[' + new Date().toISOString() + "]: Waiting For Restock";

              _0x2d2bdc(arg_2667, this.logFilePath);

              await _0x5fb498(this.monitorDelay);
              return _0x32ab6c.bind(this)();
            }

            return;
          } else {
            return _0x5a14e3({
              'id': this.id,
              'status': "Submitting Shipping (" + _0x79b1ae + ')',
              'statusCode': 4,
              'groupId': this.groupId
            }), await _0x5fb498(this.errorDelay), _0x943f86.bind(this)(_0x2ca248);
          }
        }
      }
    } catch (err) {
      return _0x5a14e3({
        'id': this.id,
        'status': "Submitting Shipping Error, Retry",
        'statusCode': 4,
        'groupId': this.groupId
      }), _0x2d2bdc('[' + new Date().toISOString() + "]: Submitting Shipping Error: " + err, this.logFilePath), await _0x5fb498(this.errorDelay), _0x943f86.bind(this)(_0x2ca248);
    }
  };

  const _0x42ae04 = async function (_0x235e2e = 0) {
    const _0x3f0a45 = _0x8044f7;

    if (!this.running) {
      throw "stopped";
    }

    try {
      global.taskStatus["fnl/jd"].cartedNumber++;
      let _0x452f30 = "VISA";

      if (/^5[1-5][0-9]{5,}|222[1-9][0-9]{3,}|22[3-9][0-9]{4,}|2[3-6][0-9]{5,}|27[01][0-9]{4,}|2720[0-9]{3,}$/.test(this.profile.cardNum)) {
        _0x452f30 = _0x172aa3.npkwj;
      }

      if (/^3[47][0-9]{5,}$/.test(this.profile.cardNum)) {
        _0x452f30 = _0x172aa3.YXIPX;
      }

      if (/^6(?:011|5[0-9]{2})[0-9]{3,}$/.test(this.profile.cardNum)) {
        _0x452f30 = _0x172aa3.IRUUO;
      }

      _0x5a14e3(arg_2668);

      console.log(this.profile.expyear);

      const _0x11fcc9 = await _0x525073.bind(this)(_0x2971b3);

      let _0x3f8f0c = _0x11fcc9.statusCode;
      var arg_2669 = "submit Billing " + _0x3f8f0c;
      console.log(arg_2669);
      var arg_2670 = "submit Billing location " + _0x11fcc9.request.uri.href;
      console.log(arg_2670);

      var arg_2671 = '[' + new Date().toISOString() + "]: submit Billing statusCode: " + _0x3f8f0c + ", location " + _0x11fcc9.request.uri.href;

      _0x2d2bdc(arg_2671, this.logFilePath);

      if (_0x2621b2(_0x11fcc9)) {
        return _0x5a14e3({
          'id': this.id,
          'status': "In Queue",
          'statusCode': 2,
          'groupId': this.groupId
        }), await _0x4c9ecb.bind(this)(), _0x42ae04.bind(this)();
      } else {
        if (_0x3f8f0c == 403) {
          if (_0x235e2e >= this.maxRetry) {
            _0x5a14e3(arg_2673);

            var arg_2674 = '[' + new Date().toISOString() + "]: Maximum Retry Reached";

            _0x2d2bdc(arg_2674, this.logFilePath);

            this.hitMaxRetry = !![];
            return;
          }

          _0x5a14e3(arg_2672);

          let _0x299e2f = await _0x37c830.bind(this)();

          if (_0x299e2f) {
            _0x235e2e = _0x235e2e + 1;
          }

          return await _0x5fb498(1000), _0x42ae04.bind(this)(_0x235e2e);
        } else {
          if (_0x3f8f0c == 200) {
            if (_0x11fcc9.request.uri.href.includes("otherCheckoutError=true")) {
              return _0x5a14e3({
                'id': this.id,
                'status': "Submitting Billing Failed, Retry",
                'statusCode': 4,
                'groupId': this.groupId
              }), _0x2d2bdc('[' + new Date().toISOString() + "]: Submitting Billing Failed", this.logFilePath), await _0x5fb498(this.errorDelay), _0x42ae04.bind(this)(_0x235e2e);
            }

            try {
              this.dynSessConf = /name="_dynSessConf" type="hidden" value="([a-zA-Z0-9-]+)"/.exec(_0x11fcc9.body)[1];
              this.securityCode = /id="securityCode" type="hidden" value="([a-zA-Z0-9-]+)"/.exec(_0x11fcc9.body)[1];
              this.currentURL = _0x11fcc9.request.uri.href;
            } catch (err) {
              const _0x7d4f1 = "4|3|1|0|2".split('|');

              let _0x198ac9 = 0;
              var arg_2675 = '[' + new Date().toISOString() + "]: Submitting Billing Failed, Error: " + err;

              _0x2d2bdc(arg_2675, this.logFilePath);

              _0x5a14e3(arg_2676);

              var arg_2677 = '[' + new Date().toISOString() + "]: Waiting For Restock";

              _0x2d2bdc(arg_2677, this.logFilePath);

              await _0x5fb498(this.monitorDelay);
              return _0x32ab6c.bind(this)();
            }

            try {
              this.orderSiteKey = /execute\('([a-zA-Z0-9-=_]+)', {action/.exec(_0x11fcc9.body)[1];
              this.orderV3Action = /{action: '([a-zA-Z0-9-=_]+)'}\)/.exec(_0x11fcc9.body)[1];
              var arg_2678 = '[' + new Date().toISOString() + "]: review sitekey: " + this.orderSiteKey + ", order action: " + this.orderV3Action;

              _0x2d2bdc(arg_2678, this.logFilePath);
            } catch (err) {
              this.orderSiteKey = _0x172aa3.hjqGn;
              this.orderV3Action = _0x172aa3.uTifY;
            }

            return _0x2d2bdc('[' + new Date().toISOString() + "]: session: " + this.dynSessConf + ", security code: " + this.securityCode, this.logFilePath), _0x2d5e1f.bind(this)();
          } else {
            return _0x5a14e3({
              'id': this.id,
              'status': "Submitting Billing (" + _0x3f8f0c + ')',
              'statusCode': 4,
              'groupId': this.groupId
            }), await _0x5fb498(this.errorDelay), _0x42ae04.bind(this)(_0x235e2e);
          }
        }
      }
    } catch (err) {
      return _0x5a14e3({
        'id': this.id,
        'status': "Submitting Billing Error, Retry",
        'statusCode': 4,
        'groupId': this.groupId
      }), _0x2d2bdc('[' + new Date().toISOString() + "]: Submitting Billing Error: " + err, this.logFilePath), await _0x5fb498(this.errorDelay), _0x42ae04.bind(this)(_0x235e2e);
    }
  };

  const _0x2d5e1f = async function (_0x378501 = 0) {
    const _0x26be8f = _0x8044f7;

    if (!this.running) {
      throw "stopped";
    }

    try {
      if (this.enabledV3 && (!this.captchaInfo.CHECKOUT.token || this.captchaInfo.CHECKOUT.timestamp && Date.now() > this.captchaInfo.CHECKOUT.timestamp + 110 * 1000)) {
        this.captchaInfo.CHECKOUT.token = await _0x361d1a.bind(this)(this.orderSiteKey, this.orderV3Action);
        this.captchaInfo.CHECKOUT.timestamp = Date.now();
      }

      _0x5a14e3(arg_2679);

      const _0x5d7fa9 = await _0x525073.bind(this)(_0x270340);

      let _0x5e118d = _0x5d7fa9.statusCode;
      let _0x341d80 = _0x5d7fa9.request.uri.href;
      var arg_2680 = "submitOrder " + _0x5e118d;
      console.log(arg_2680);
      var arg_2681 = "submitOrder location " + _0x5d7fa9.request.uri.href;
      console.log(arg_2681);

      var arg_2682 = '[' + new Date().toISOString() + "]: submitOrder statusCode: " + _0x5e118d + ", location " + _0x5d7fa9.request.uri.href;

      _0x2d2bdc(arg_2682, this.logFilePath);

      if (_0x2621b2(_0x5d7fa9)) {
        return _0x5a14e3({
          'id': this.id,
          'status': "In Queue",
          'statusCode': 2,
          'groupId': this.groupId
        }), await _0x4c9ecb.bind(this)(), _0x2d5e1f.bind(this)();
      } else {
        if (_0x5e118d == 403) {
          if (_0x378501 >= this.maxRetry) {
            _0x5a14e3(arg_2686);

            var arg_2687 = '[' + new Date().toISOString() + "]: Maximum Retry Reached";

            _0x2d2bdc(arg_2687, this.logFilePath);

            this.hitMaxRetry = !![];
            return;
          }

          _0x5a14e3(arg_2685);

          let _0x136ecc = await _0x37c830.bind(this)();

          if (_0x136ecc) {
            _0x378501 = _0x378501 + 1;
          }

          return await _0x5fb498(1000), _0x2d5e1f.bind(this)(_0x378501);
        } else {
          if (_0x5e118d == 200) {
            if (_0x341d80.includes("otherCheckoutError=true")) {
              return _0x5a14e3({
                'id': this.id,
                'status': "Submitting Order Failed, Retry",
                'statusCode': 4,
                'groupId': this.groupId
              }), _0x2d2bdc('[' + new Date().toISOString() + "]: Submitting Order Failed", this.logFilePath), await _0x5fb498(this.errorDelay), _0x2d5e1f.bind(this)(_0x378501);
            }

            if (_0x341d80.includes("confirm") && (_0x5d7fa9.body.includes("Thank You") || _0x5d7fa9.body.includes("Pending"))) {
              try {
                const _0x23737a = _0x3066df.load(_0x5d7fa9.body, arg_2690);

                this.checkoutInfo.orderNumber = _0x23737a("small.text-dark-gray").eq(0).text().trim();
              } catch (err) {
              }

              this.checkoutInfo.paymentStatus = _0x172aa3.xiQfa;
              var arg_2688 = '[' + new Date().toISOString() + "]: Successfully Checkedout!";

              _0x2d2bdc(arg_2688, this.logFilePath);

              _0x5a14e3(arg_2689);
            } else {
              if (_0x5d7fa9.body.includes("One or more items in your cart are no longer available")) {
                this.checkoutInfo.paymentStatus = _0x172aa3.JZmRU;
                var arg_2691 = '[' + new Date().toISOString() + "]: Payment Declined (OOS)!";

                _0x2d2bdc(arg_2691, this.logFilePath);

                _0x5a14e3(arg_2692);
              } else {
                this.checkoutInfo.paymentStatus = _0x172aa3.BnhIJ;
                var arg_2693 = '[' + new Date().toISOString() + "]: Payment Declined!";

                _0x2d2bdc(arg_2693, this.logFilePath);

                _0x5a14e3(arg_2694);
              }
            }
          } else {
            return _0x5a14e3({
              'id': this.id,
              'status': "Submitting Order (" + _0x5e118d + "), Retry",
              'statusCode': 4,
              'groupId': this.groupId
            }), await _0x5fb498(this.errorDelay), _0x2d5e1f.bind(this)(_0x378501);
          }
        }
      }
    } catch (err) {
      const _0x21554f = "3|1|4|0|2".split('|');

      let _0x38a0f4 = 0;
      console.log(err);

      _0x5a14e3(arg_2696);

      var arg_2697 = '[' + new Date().toISOString() + "]: Submitting Order Error: " + err;

      _0x2d2bdc(arg_2697, this.logFilePath);

      await _0x5fb498(this.errorDelay);
      return _0x2d5e1f.bind(this)(_0x378501);
    }
  };

  const _0x29c48c = async function (_0x403923 = 0) {
    const _0x10133b = _0x8044f7;

    if (!this.running) {
      throw "stopped";
    }

    try {
      if (this.enabledV3 && (!this.captchaInfo.ATC.token || this.captchaInfo.ATC.timestamp && Date.now() > this.captchaInfo.ATC.timestamp + 110 * 1000)) {
        this.captchaInfo.ATC.token = await _0x361d1a.bind(this)(this.atcSiteKey, this.atcV3Action);
        this.captchaInfo.ATC.timestamp = Date.now();
      }

      _0x5a14e3(arg_2698);

      let _0xb52d2b = await _0x525073.bind(this)(_0xf03ff2);

      let _0x40371b = _0xb52d2b.statusCode;
      console.log(_0x40371b);
      var arg_2699 = '[' + new Date().toISOString() + "]: adding to cart statusCode " + _0x40371b + ", set-cookie: " + JSON.stringify(_0xb52d2b.headers["set-cookie"]);

      _0x2d2bdc(arg_2699, this.logFilePath);

      if (_0x2621b2(_0xb52d2b)) {
        return _0x5a14e3({
          'id': this.id,
          'status': "In Queue",
          'statusCode': 1,
          'groupId': this.groupId
        }), await _0x556bb0.bind(this)(), _0x29c48c.bind(this)(_0x403923);
      } else {
        if (_0x40371b == 403) {
          if (_0x403923 >= this.maxRetry) {
            _0x5a14e3(arg_2703);

            var arg_2704 = '[' + new Date().toISOString() + "]: Maximum Retry Reached";

            _0x2d2bdc(arg_2704, this.logFilePath);

            this.hitMaxRetry = !![];
            return;
          }

          await _0x556bb0.bind(this)(!![]);

          _0x5a14e3(arg_2700);

          var arg_2701 = '[' + new Date().toISOString() + "]: ATC Failed Failed (Akamai Blocked), Retrying, " + _0x40371b;

          _0x2d2bdc(arg_2701, this.logFilePath);

          let _0x4fe0a2 = await _0x37c830.bind(this)();

          if (_0x4fe0a2) {
            _0x403923 = _0x403923 + 1;
          }

          return await _0x45a98b(1000), _0x29c48c.bind(this)(_0x403923);
        } else {
          if (_0x40371b == 200) {
            this.currentURL = _0xb52d2b.request.uri.href;
            return _0x50989c.bind(this)();
            return;
          } else {
            return _0x5a14e3({
              'id': this.id,
              'status': "ATC Failed (" + _0x40371b + "), Retry",
              'statusCode': 4,
              'groupId': this.groupId
            }), await _0x45a98b(this.errorDelay), _0x29c48c.bind(this)(_0x403923);
          }
        }
      }
    } catch (err) {
      const _0x6b0e4e = "3|2|0|1|4".split('|');

      let _0x5c9f24 = 0;
      console.log(err);

      _0x5a14e3(arg_2706);

      var arg_2707 = '[' + new Date().toISOString() + "]: adding to cart failed, " + err;

      _0x2d2bdc(arg_2707, this.logFilePath);

      await _0x45a98b(this.errorDelay);
      return _0x29c48c.bind(this)(_0x403923);
    }
  };

  const _0x50989c = async function () {
    const _0x15187d = _0x8044f7;

    if (!this.running) {
      throw "stopped";
    }

    try {
      let _0x234089 = await _0x525073.bind(this)(_0x54e80d);

      let _0x3fc24c = _0x234089.statusCode;
      var arg_2709 = "get cart session status " + _0x3fc24c;
      console.log(arg_2709);
      console.log(_0x234089.headers["set-cookie"]);

      var arg_2710 = '[' + new Date().toISOString() + "]: get cart session statusCode " + _0x3fc24c;

      _0x2d2bdc(arg_2710, this.logFilePath);

      if (_0x2621b2(_0x234089)) {
        return _0x5a14e3({
          'id': this.id,
          'status': "In Queue",
          'statusCode': 1,
          'groupId': this.groupId
        }), await _0x556bb0.bind(this)(), _0x50989c.bind(this)();
      } else {
        if (_0x3fc24c == 200) {
          try {
            return this.dynSessConf = /name="_dynSessConf" type="hidden" value="([a-zA-Z0-9-]+)"/.exec(_0x234089.body)[1], _0x2d2bdc('[' + new Date().toISOString() + "]: cart session: " + this.dynSessConf, this.logFilePath), console.log("cart session get: " + this.dynSessConf), _0x4676a4.bind(this)();
          } catch (err) {
            return _0x2d2bdc('[' + new Date().toISOString() + "]: cart session error: " + err, this.logFilePath), _0x5a14e3({
              'id': this.id,
              'status': "Waiting For Restock",
              'statusCode': 1,
              'groupId': this.groupId
            }), await _0x45a98b(this.monitorDelay), _0x32ab6c.bind(this)();
          }
        } else {
          return _0x3fc24c == 403 ? (_0x5a14e3({
            'id': this.id,
            'status': "Session Failed(403), Retrying",
            'statusCode': 4,
            'groupId': this.groupId
          }), await _0x37c830.bind(this)(), await _0x45a98b(1000), _0x50989c.bind(this)()) : (_0x5a14e3({
            'id': this.id,
            'status': "Session Failed(" + _0x3fc24c + "), Retrying",
            'statusCode': 4,
            'groupId': this.groupId
          }), await _0x45a98b(this.errorDelay), _0x50989c.bind(this)());
        }
      }
    } catch (err) {
      const _0x47f8ee = "4|1|3|0|2".split('|');

      let _0x1f51b2 = 0;
      console.log(err);

      _0x5a14e3(arg_2711);

      var arg_2712 = '[' + new Date().toISOString() + "]: getCartSession  failed, " + err;

      _0x2d2bdc(arg_2712, this.logFilePath);

      await _0x45a98b(this.errorDelay);
      return _0x50989c.bind(this)();
    }
  };

  const _0x4676a4 = async function (_0x529203 = 0) {
    const _0x436b86 = _0x8044f7;

    if (!this.running) {
      throw "stopped";
    }

    try {
      if (this.enabledV3 && (!this.captchaInfo.CART.token || this.captchaInfo.CART.timestamp && Date.now() > this.captchaInfo.CART.timestamp + 110 * 1000)) {
        this.captchaInfo.CART.token = await _0x361d1a.bind(this)(this.atcSiteKey, "MOVE_TO_CHECKOUT_EVENT");
        this.captchaInfo.CART.timestamp = Date.now();
      }

      _0x5a14e3(arg_2714);

      _0x817624['' + this.sku] = '1';

      let _0x52ed2e = await _0x525073.bind(this)(_0x3aa3f9);

      let _0x50d122 = _0x52ed2e.statusCode;
      var arg_2715 = "postCartForm status " + _0x50d122;
      console.log(arg_2715);
      var arg_2716 = "postCartForm location " + _0x52ed2e.request.uri.href;
      console.log(arg_2716);
      console.log(_0x52ed2e.headers["set-cookie"]);

      var arg_2717 = '[' + new Date().toISOString() + "]: postCartForm statusCode " + _0x50d122 + ", location " + _0x52ed2e.request.uri.href;

      _0x2d2bdc(arg_2717, this.logFilePath);

      if (_0x2621b2(_0x52ed2e)) {
        return _0x5a14e3({
          'id': this.id,
          'status': "In Queue",
          'statusCode': 1,
          'groupId': this.groupId
        }), await _0x556bb0.bind(this)(), _0x4676a4.bind(this)();
      } else {
        if (_0x50d122 == 200) {
          try {
            const _0x5e4bc2 = "4|0|2|1|3".split('|');

            let _0x4ba2db = 0;
            this.dynSessConf = /name="_dynSessConf" type="hidden" value="([a-zA-Z0-9-]+)"/.exec(_0x52ed2e.body)[1];
            this.securityCode = /id="securityCode" type="hidden" value="([a-zA-Z0-9-]+)"/.exec(_0x52ed2e.body)[1];
            this.currentURL = _0x52ed2e.request.uri.href;
            var arg_2718 = '[' + new Date().toISOString() + "]: session: " + this.dynSessConf + ", security code: " + this.securityCode;

            _0x2d2bdc(arg_2718, this.logFilePath);

            return _0x943f86.bind(this)(_0x529203);
          } catch (err) {
            return _0x2d2bdc('[' + new Date().toISOString() + "]: post cart form error: " + err, this.logFilePath), _0x5a14e3({
              'id': this.id,
              'status': "Waiting For Restock",
              'statusCode': 1,
              'groupId': this.groupId
            }), await _0x45a98b(this.monitorDelay), _0x32ab6c.bind(this)();
          }
        } else {
          if (_0x50d122 == 403) {
            if (_0x529203 >= this.maxRetry) {
              _0x5a14e3(arg_2720);

              var arg_2721 = '[' + new Date().toISOString() + "]: Maximum Retry Reached";

              _0x2d2bdc(arg_2721, this.logFilePath);

              this.hitMaxRetry = !![];
              return;
            }

            _0x5a14e3(arg_2719);

            let _0x5b49de = await _0x37c830.bind(this)();

            if (_0x5b49de) {
              _0x529203 = _0x529203 + 1;
            }

            return await _0x45a98b(1000), _0x4676a4.bind(this)(_0x529203);
          } else {
            return _0x50d122 == 409 ? (_0x5a14e3({
              'id': this.id,
              'status': "Waiting For Restock",
              'statusCode': 1,
              'groupId': this.groupId
            }), _0x2d2bdc('[' + new Date().toISOString() + "]: Item OOS", this.logFilePath), _0x32ab6c.bind(this)()) : (_0x5a14e3({
              'id': this.id,
              'status': "Carting Failed(" + _0x50d122 + "), Retrying",
              'statusCode': 4,
              'groupId': this.groupId
            }), await _0x45a98b(this.errorDelay), _0x4676a4.bind(this)(_0x529203));
          }
        }
      }
    } catch (err) {
      const _0x41dbf4 = "3|1|4|0|2".split('|');

      let _0x13d61f = 0;
      console.log(err);

      _0x5a14e3(arg_2722);

      var arg_2723 = '[' + new Date().toISOString() + "]: Carting  failed, " + err;

      _0x2d2bdc(arg_2723, this.logFilePath);

      await _0x45a98b(this.errorDelay);
      return _0x4676a4.bind(this)(_0x529203);
    }
  };

  const _0x556bb0 = async function (_0x51dde2 = ![]) {
    const _0x17e314 = _0x8044f7;

    if (!this.running) {
      throw "stopped";
    }

    _0x5a14e3(arg_2724);

    this.currentURL = this.siteOrigin + "/store/browse/productDetail.jsp?productId=" + this.productPID + "&styleId=" + this.styleId + "&colorId=" + this.colorId;

    let _0x40a557 = this.siteOrigin + "/store/browse/productDetail.jsp?productId=" + this.productPID + "&styleId=" + this.styleId + "&colorId=" + this.colorId;

    if (this.productPID == "prod1380688" && this.styleId == "CT8527" && this.colorId == "400") {
      this.currentURL = _0x172aa3.BMgGW;
      _0x40a557 = _0x172aa3.BMgGW;
    }

    try {
      const _0x155a74 = await _0x525073.bind(this)(_0x48104f);

      let _0x2237a7 = _0x155a74.statusCode;
      var arg_2725 = '[' + new Date().toISOString() + "]: Queue Status: " + _0x2237a7 + ", Set-Cookie: " + JSON.stringify(_0x155a74.headers["set-cookie"]);

      _0x2d2bdc(arg_2725, this.logFilePath);

      if (_0x48dc32(_0x155a74)) {
        const _0x14d6c7 = "3|4|1|2|0".split('|');

        let _0x598c50 = 0;

        _0x5a14e3(arg_2728);

        var arg_2729 = '[' + new Date().toISOString() + "]: Access Denied, Retrying";

        _0x2d2bdc(arg_2729, this.logFilePath);

        await this.session.clearStorageData();
        await _0x5fb498(this.monitorDelay);
        return _0x556bb0.bind(this)();
      }

      const _0x3a5c74 = await this.session.cookies.get({
        'url': this.siteOrigin
      });

      let _0x51354a = _0x3a5c74.some(({
                                        name: _0x248d08
                                      }) => _0x248d08.includes("akavpau"));

      let _0x4d97ea = _0x3a5c74.some(({
                                        name: _0x326b6e
                                      }) => _0x326b6e.includes("akavpwr"));

      if (_0x2237a7 == 200 && _0x155a74.body) {
        await _0x507706.bind(this)(_0x40a557, _0x155a74.body);

        if (!_0x155a74.body.includes("<title>WAITING") && (_0x51354a || !_0x51354a && !_0x4d97ea)) {
          var arg_2731 = '[' + new Date().toISOString() + "]: passed queue";

          _0x2d2bdc(arg_2731, this.logFilePath);

          return;
        }
      }

      return _0x5a14e3({
        'id': this.id,
        'status': "In Queue",
        'statusCode': 1,
        'groupId': this.groupId
      }), await _0x5fb498(_0x56cb88.FINISHLINE), _0x556bb0.bind(this)();
    } catch (err) {
      return console.log(err), _0x5a14e3({
        'id': this.id,
        'status': "Poll Queue Failed, Retry",
        'statusCode': 4,
        'groupId': this.groupId
      }), await _0x5fb498(this.monitorDelay), _0x556bb0.bind(this)();
    }
  };

  const _0x32ab6c = async function (_0x14b97a = 0) {
    const _0xbfc339 = _0x8044f7;

    if (!this.running) {
      throw "stopped";
    }

    _0x5a14e3(arg_2732);

    let _0x2bff84 = this.siteOrigin + "/store/browse/productDetail.jsp?productId=" + this.productPID + "&styleId=" + this.styleId + "&colorId=" + this.colorId;

    if (this.productPID == "prod1110578" && this.styleId == "575441" && this.colorId == "035") {
      let _0x38841f = "big-kids-air-jordan-retro-1-high-og-casual-shoes";
      this.currentURL = this.siteOrigin + "/store/product/" + _0x38841f + '/' + this.productPID + "?styleId=" + this.styleId + "&colorId=" + this.colorId;
      _0x2bff84 = this.siteOrigin + "/store/product/" + _0x38841f + '/' + this.productPID + "?styleId=" + this.styleId + "&colorId=" + this.colorId;
    } else {
      if (this.productPID == "prod1360195" && this.styleId == "555088" && this.colorId == "035") {
        let _0x489f23 = "air-jordan-retro-1-high-og-casual-shoes";
        this.currentURL = this.siteOrigin + "/store/product/" + _0x489f23 + '/' + this.productPID + "?styleId=" + this.styleId + "&colorId=" + this.colorId;
        _0x2bff84 = this.siteOrigin + "/store/product/" + _0x489f23 + '/' + this.productPID + "?styleId=" + this.styleId + "&colorId=" + this.colorId;
      }
    }

    try {
      const _0x10c06a = await _0x525073.bind(this)(_0xab3a31);

      let _0x24dc46 = _0x10c06a.statusCode;

      var arg_2733 = '[' + new Date().toISOString() + "]: Getting Sizes statusCode: " + _0x24dc46 + "\uFF0C body: " + _0x10c06a.body;

      _0x2d2bdc(arg_2733, this.logFilePath);

      if (_0x48dc32(_0x10c06a)) {
        const _0x59723a = "0|2|1|3|4".split('|');

        let _0x450a7a = 0;

        _0x5a14e3(arg_2734);

        var arg_2735 = '[' + new Date().toISOString() + "]: Access Denied, Retrying";

        _0x2d2bdc(arg_2735, this.logFilePath);

        await this.session.clearStorageData();
        await _0x5fb498(this.monitorDelay);
        return _0x32ab6c.bind(this)();
      }

      if (_0x2621b2(_0x10c06a)) {
        return await _0x556bb0.bind(this)(), _0x32ab6c.bind(this)();
      }

      if (_0x24dc46 == 200 && _0x10c06a.body) {
        await _0x507706.bind(this)(_0x2bff84, _0x10c06a.body);

        const _0x51ca49 = _0x3066df.load(_0x10c06a.body, arg_2736);

        this.dynSessConf = _0x51ca49("input[name=_dynSessConf]").attr("value");

        try {
          this.checkoutInfo.productName = _0x51ca49("#titleDesk").eq(0).text().trim();
          this.checkoutInfo.imageURL = _0x51ca49(".selected img").get()[0].attribs["data-src"] + "&w=400&h=400";
        } catch (err) {
          console.log(err);
        }

        try {
          let _0x35ab43 = /setAu', '([a-zA-Z0-9/]+)'\]\)/.exec(_0x10c06a.body);

          this.sensorURL = _0x35ab43 && _0x35ab43[1] ? _0x35ab43[1] : this.sensorURL;
          this.sensorURL = this.sensorURL.includes("http") ? this.sensorURL : '' + this.siteOrigin + this.sensorURL;
        } catch (err) {
        }

        var arg_2737 = '[' + new Date().toISOString() + "]: sensor url: " + this.sensorURL;

        _0x2d2bdc(arg_2737, this.logFilePath);

        try {
          const _0x282a63 = "2|6|5|0|1|3|4".split('|');

          let _0x44e4b8 = 0;
          this.atcSiteKey = /execute\('([a-zA-Z0-9-=_]+)', {action/.exec(_0x10c06a.body)[1];
          this.atcV3Action = /{action: '([a-zA-Z0-9-=_]+)'}\)/.exec(_0x10c06a.body)[1];
          this.price = /"product_price" : \["(.+)"\]/.exec(_0x10c06a.body)[1];
          console.log("parsed");
          console.log(this.atcSiteKey);
          console.log(this.atcV3Action);
          var arg_2740 = '[' + new Date().toISOString() + "]: atc site key: " + this.atcSiteKey + ", action: " + this.atcV3Action;

          _0x2d2bdc(arg_2740, this.logFilePath);
        } catch (err) {
          this.atcSiteKey = _0x172aa3.hjqGn;
          this.atcV3Action = _0x172aa3.qedyf;
          this.price = _0x172aa3.vFsjK;
        }

        let _0x102a5a = [];

        var arg_2738 = function () {
          const _0x3c31aa = _0xbfc339;

          if (!_0x51ca49(this).attr(_0x1fef67.rNdkt).includes(_0x1fef67.ubPci)) {
            _0x102a5a.push(arg_2741);
          }
        };

        _0x51ca49("#productSizes").children().children().each(arg_2738);

        var arg_2739 = '[' + new Date().toISOString() + "]: Getting Sizes : " + JSON.stringify(_0x102a5a);

        _0x2d2bdc(arg_2739, this.logFilePath);

        this.pickedSize = _0x10fe96.bind(this)(_0x102a5a);

        if (!this.pickedSize) {
          return _0x5a14e3({
            'id': this.id,
            'status': "Waiting For Restock",
            'statusCode': 1,
            'groupId': this.groupId
          }), await _0x5fb498(this.monitorDelay), _0x32ab6c.bind(this)();
        }

        return this.checkoutInfo.size = this.pickedSize.size, this.sku = this.pickedSize.sku, this.checkoutInfo.sku = this.productPID, this.checkoutInfo.price = this.price, console.log('[' + new Date().toISOString() + "]: imgURL: " + this.checkoutInfo.imageURL + ", productName: " + this.checkoutInfo.productName + ", sensor url: " + this.sensorURL + ", dynSessConf: " + this.dynSessConf), _0x2d2bdc('[' + new Date().toISOString() + "]: imgURL: " + this.checkoutInfo.imageURL + ", productName: " + this.checkoutInfo.productName + ", sensor url: " + this.sensorURL + ", dynSessConf: " + this.dynSessConf, this.logFilePath), await _0x1f4d03.bind(this)(), _0x15d5aa.bind(this)();
      } else {
        if (_0x24dc46 == 403) {
          return _0x5a14e3({
            'id': this.id,
            'status': "Getting Sizes (Proxy Banned), Retry",
            'statusCode': 4,
            'groupId': this.groupId
          }), _0x2d2bdc('[' + new Date().toISOString() + "]: Getting Sizes (Proxy Banned), Retrying, " + _0x24dc46, this.logFilePath), await _0x54ff9c.bind(this)(), _0x32ab6c.bind(this)(_0x14b97a + 1);
        } else {
          return _0x5a14e3({
            'id': this.id,
            'status': "Getting Sizes " + _0x24dc46 + ", Retry",
            'statusCode': 4,
            'groupId': this.groupId
          }), await _0x5fb498(this.errorDelay), _0x32ab6c.bind(this)(_0x14b97a + 1);
        }
      }
    } catch (err) {
      const _0x3f6786 = "4|3|0|1|2".split('|');

      let _0x190e4d = 0;
      console.log(err.message);
      var arg_2787 = '[' + new Date().toISOString() + "]: Getting Sizes failed " + err.message;

      _0x2d2bdc(arg_2787, this.logFilePath);

      _0x5a14e3(arg_2788);

      await _0x5fb498(this.errorDelay);
      return _0x32ab6c.bind(this)(_0x14b97a + 1);
    }
  };

  const _0x1f4d03 = async function () {
    const _0x4d3e5a = _0x8044f7;

    if (!this.running) {
      throw "stopped";
    }

    _0x5a14e3(arg_2790);

    try {
      const _0x1078aa = await _0x525073.bind(this)(_0x56bd54);

      let _0x52c863 = _0x1078aa.statusCode;
      var arg_2795 = '[' + new Date().toISOString() + "]: get cart session status: " + _0x52c863 + ", Set-Cookie: " + JSON.stringify(_0x1078aa.headers["set-cookie"]);

      _0x2d2bdc(arg_2795, this.logFilePath);

      if (_0x52c863 != 200) {
        return _0x5a14e3({
          'id': this.id,
          'status': "Get Session(" + _0x52c863 + "), Retry",
          'statusCode': 4,
          'groupId': this.groupId
        }), await _0x5fb498(this.monitorDelay), _0x1f4d03.bind(this)();
      }

      return;
    } catch (err) {
      return console.log(err), _0x5a14e3({
        'id': this.id,
        'status': "Get Session Failed, Retry",
        'statusCode': 4,
        'groupId': this.groupId
      }), await _0x5fb498(this.monitorDelay), _0x1f4d03.bind(this)();
    }
  };

  const _0x15d5aa = async function () {
    const _0x2bf211 = _0x8044f7;

    if (!this.running) {
      throw "stopped";
    }

    _0x5a14e3(arg_2800);

    try {
      const _0xe78244 = await _0x525073.bind(this)(_0xa20db6);

      let _0x26b72c = _0xe78244.statusCode;
      var arg_2801 = '[' + new Date().toISOString() + "]: get session status: " + _0x26b72c + ", Set-Cookie: " + JSON.stringify(_0xe78244.headers["set-cookie"]);

      _0x2d2bdc(arg_2801, this.logFilePath);

      if (_0x2621b2(_0xe78244)) {
        return _0x5a14e3({
          'id': this.id,
          'status': "In Queue",
          'statusCode': 1,
          'groupId': this.groupId
        }), _0x32ab6c.bind(this)();
      } else {
        return _0x26b72c != 200 ? (_0x5a14e3({
          'id': this.id,
          'status': "Init Session(" + _0x26b72c + "), Retry",
          'statusCode': 4,
          'groupId': this.groupId
        }), await _0x5fb498(this.monitorDelay), _0x15d5aa.bind(this)()) : (await _0x537bc0.bind(this)(), _0x29c48c.bind(this)());
      }
    } catch (err) {
      return console.log(err), _0x5a14e3({
        'id': this.id,
        'status': "Init Session Failed, Retry",
        'statusCode': 4,
        'groupId': this.groupId
      }), await _0x5fb498(this.monitorDelay), _0x15d5aa.bind(this)();
    }
  };

  const _0x10fe96 = function (_0x52cece) {
    const _0x290673 = _0x8044f7;

    try {
      let _0xfa0f32 = null;

      if (_0x52cece.length > 0) {
        var arg_2804 = this.size[0].name.toLowerCase();

        if (arg_2804 == "random") {
          _0xfa0f32 = _0x52cece[Math.floor(Math.random() * _0x52cece.length)];
        } else {
          let _0x4e10e1 = [];

          for (let _0x2b1a89 of this.size) {
            let _0x37bd9b = _0x52cece.find(_0x289de2 => parseFloat(_0x289de2.size) == parseFloat(_0x2b1a89.name));

            if (_0x37bd9b) {
              _0x4e10e1.push(_0x37bd9b);
            }
          }

          if (_0x4e10e1.length > 0) {
            _0xfa0f32 = _0x4e10e1[Math.floor(Math.random() * _0x4e10e1.length)];
          }
        }
      }

      return _0xfa0f32;
    } catch (err) {
      return console.log(err), null;
    }
  };

  const {
    session: _0xaccbd3,
    app: _0x209050
  } = _0x5b1a41;

  const _0x27d31e = arg_8 + "/taskLogs";

  class _0x306421 {
    constructor(_0x5cd31c, _0x13b304, _0x29adc4, _0x263282, _0x27b64e, _0x18b0e6, _0x121a4e, _0x2e72fd, _0x56a8b2, _0x388bf0, _0x31be3f, _0x2f8650, _0x985dd7, _0x15193b, _0x4f29d8, _0x33de76, _0x14968c) {
      const _0x4d35e6 = _0x8044f7;

      const _0x5dd437 = "38|44|59|31|18|1|62|53|25|29|51|10|2|65|43|27|17|40|63|0|48|37|28|14|39|22|34|46|9|58|42|30|47|52|57|11|64|3|20|15|66|7|56|8|5|21|19|49|23|4|24|13|32|60|12|16|41|54|36|26|45|50|33|61|6|35|55".split('|');

      let _0x1aa085 = 0;
      this.sessionName = _0x33de76 + '-' + _0x13b304 + '-' + _0x5cd31c + '-' + _0x2bda7f();
      this.id = _0x5cd31c;
      this.groupId = _0x13b304;
      this.profile = _0x29adc4;
      var arg_2809 = parseInt(this.profile.expyear);
      var arg_2808 = arg_2809 % 10000;
      this.profile.expyear = arg_2808 + '';
      this.size = _0x263282;
      this.modes = _0x27b64e;
      this.type = _0x18b0e6;
      this.siteOrigin = _0x121a4e;
      this.siteName = _0x33de76;
      this.host = _0x121a4e.replace("https://", '');
      var arg_2810 = Math.random();
      this.useStaticFp = arg_2810 > 0.5;
      this.user_agent = this.useStaticFp ? "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36" : _0x310223(_0x2b33c7.FINISHLINE);
      this.bbField = this.useStaticFp ? "0400R9HVeoYv1gsNf94lis1ztgi4TsbVzqZIa7Skn4XdD+65Cq7hg+/SwUvT3WD6LO0NV7w2EWD/v+XUfYtmpE0yO5yVcCcfb5s115362ubh5w8CPmO9x9i9jnVLKa5eUqvJ5dzgojLfFGvNZhMeU+JzHlH5jQLRdD2wbp2bekT0t3ANczN14q3lywh3sf2PehRXfz47G4TZok3xwUJvdekrQtebRcG2+TZFbazR87feXj4F7PqEEHOtLa6xraOOHRWf5NAePLsfleEscIcAZjcnSOkupWtJXOwjUsHozl+XYSgwQCgSK0S20VSjUNGRS08YUd/ggdk8g95svMmrJ0J7SnhVKFtj4RUEPq6kyzHx77hrRjLkmcdik7q2C+tZfIod1B2gUwrmg5lBzy9vdZEiTs/pkRprH5GGkjy4EhNk+rpLzqt3f4yjx3fEF80+AcQHzXBSdYwXrBImd2Sb2hs+srVSIIa/wIKCpYfeRJUFkiOfLVxpoq/Yow7L6LiMberVt9+HkIompHmmIif/iDuMCcLUB69g4E97xS9GTGQ/PXHFcKic/4VRYwkH+zgzCnlueiZ+2DQq5o4WB2DhZRehJjrpCw0ihliJYg8CuMOt5MJPjdHmP6jzDq1I2tbVySAR8nYYiJ5UTLhLMrPrMVvJlvLE8xAy/thn2bG0spfZB+dxKzY0c1nMAlHf4IHZPIPeqWPYXa8CGKpAR27Zdi+vjqJygRQgGX10lcABhHdx+C+HElF3mDpJdXepGZOJwi4qi5S1a4pRTwzou5GL7lS1H1ZF8F3eNdu2AfOPjzqyODJQ74Aiel35TKTOWG8pq1WO6yzJ1GNmMuMWZBamlGXoG/imnjwHY9HQtQzpGfcm0cR8X2Fd1ngNFGLDGZlWOX0jZ2rrPmgdCwuxOJXVjVlaa7uvNvEfRkJupBy3Z8hSEMHL9kaL85lzU9YPUST3gTYnG+8gClZWFN+P1XHbFbWdu9IgF8s35HQzv0w6dFMy2EviowOTkzaKUULZ3B5njwvtUsHozl+XYShmK7Ltd63OEQm68rvRvAGkcYv1IEAR88cFJGkaA+tmVbBFMRDqiBDWpZ0yiGX10Tr67593CS8Nr25EIaX4nLb2Jn3kr9C804qyU5QDXQ5TPYyQcckGHNWYES94nUeQ8xjoOoKIqmDk/36mAJ3ZTHu2D1rmSUBJQH5DBt/yo191gEoizwIC00fVFFAN6Q1x80UdCdGdyqwwbekDud5uWuFSNOZcrdb3mKRzbr+7IIVjhHoqCGUZ5gtFvqHIUM4s+37WSQmisMpsUtcH5mc6Z6PNaYzBrdiYuJlq3GlUlTAPigXojk4bF91Pui/Hnq/dZy86hX31+nlcYD+0qa9h46ToH3RduePjg2gaz4oDdbZwh//k86YFDyMf4XFdSXlWYQKqQza8HhCqjObHa83CDZB6AdIcZ1Zp9QYdTqExQilXRfccb0Gps4ksWPWODwEMow31EjqY9CpV478+w0KwW/HDe6Gdft1F0wKVT31SgfbGSQeRarSPVYZ9zjacZpiwaSQJuue4gfcMVw9nxo4wEfY5riRGafAyUqJ2EJEKt3g5+CIu0qFHrzkap6MTJkKRX3cps/aTCvHIhtZk2wpltLI5Hh3lr6FNpoPTw7QjYjMwmOqziMMdm33i" : _0x28d3a4();
      this.sensorURL = _0x121a4e.includes("finishline") ? "https://www.finishline.com/libraries/6c0cf2fa4no20708f7da4f1c69bf350" : "https://www.jdsports.com/libraries/608d4e640no26327cd508187714c6ac";
      this.proxy = _0x2e72fd;
      this.proxyList = _0x14968c;
      this.searchLink = _0x56a8b2;
      this.productPID = _0x388bf0.split(',')[0].trim();
      this.styleId = _0x388bf0.split(',')[1].trim();
      this.colorId = _0x388bf0.split(',')[2].trim();
      this.searchContent = _0x388bf0;
      this.monitorDelay = _0x31be3f;
      this.login = _0x2f8650;
      this.needLogin = _0x985dd7;
      this.sender = _0x15193b;
      this.running = ![];
      this.variants = null;
      this.ready = ![];
      this.startTime = null;
      this.started = ![];
      this.pickedSize = null;
      this.errorDelay = 3000;
      this.addToCartExecutionToken = null;
      this.catalogRefIds = null;
      this.dynSessConf = null;
      this.securityCode = null;
      this.sku = null;
      this.requestid = null;
      this.getsecurityCodeUrl = null;
      this.bb_field = null;
      this.currentURL = this.siteOrigin;
      this.atcSiteKey = _0x121a4e.includes("finishline") ? "6LcPD74ZAAAAAFtuJvnpIV5VjKE16Ma7oRCcENIN" : "6LdpAb4ZAAAAAKTaBdqCW12WwD3BWp63gKQtNMcC";
      this.atcV3Action = _0x172aa3.LyCyI;
      this.orderSiteKey = _0x121a4e.includes("finishline") ? "6LcPD74ZAAAAAFtuJvnpIV5VjKE16Ma7oRCcENIN" : "6LdpAb4ZAAAAAKTaBdqCW12WwD3BWp63gKQtNMcC";
      this.orderV3Action = _0x172aa3.uTifY;
      this.maxRetry = 10;
      this.captchaInfo = {
        'ATC': {
          'token': null,
          'timestamp': null
        },
        'CART': {
          'token': null,
          'timestamp': null
        },
        'CHECKOUT': {
          'token': null,
          'timestamp': null
        }
      };
      this.currentV3Token = null;
      this.lastV3TimeStamp = null;
      this.currentURL = '';
      this.successWebhook = _0x172aa3.NJbxb;
      this.declineWebhook = _0x172aa3.jdUZa;
      this.startTime = Date.now();
      this.checkoutInfo = {
        'version': _0x209050.getVersion(),
        'discordId': global.user.userId,
        'key': global.user.key,
        'siteType': this.type,
        'siteName': _0x33de76,
        'siteURL': this.searchContent,
        'store': this.siteOrigin,
        'checkoutSpeed': 0,
        'productName': "N/A",
        'size': null,
        'price': "N/A",
        'profileName': this.profile.name,
        'orderNumber': null,
        'proxyIp': this.proxy,
        'mode': Object.keys(this.modes).filter(_0xf9d71c => this.modes[_0xf9d71c]).join('-') + ('[' + (this.useStaticFp ? 1 : 0) + ']'),
        'imageURL': null,
        'paymentStatus': null,
        'sku': null,
        'date': new Date().toISOString(),
        'timestamp': Date.now(),
        'email': this.profile.email
      };
      this.hitMaxRetry = ![];
      this.startTime = Date.now();
      this.price = null;
      this.enabledV3 = this.modes.Captcha;
      this.pixelId = null;
      this.pixelURL = null;
      this.bazadebezolkohpepadr = null;
      this.useMekApi = ![];
      this.options = {
        'jar': !![],
        'gzip': !![]
      };
      this.solvedPixel = ![];
      this.gotSensorURL = ![];

      if (this.proxy) {
        this.options.proxy = this.proxy;
      }

      this.logFilePath = _0x27d31e + '/' + _0x4f29d8 + '/' + this.profile.name + '_' + this.id;
    }

    async initSession(_0x7a8fa8) {
      const _0x4077ba = _0x8044f7;
      _0x7a8fa8 = _0x7a8fa8 && _0x7a8fa8.replace("http://", '');

      if (_0x7a8fa8 && _0x7a8fa8.includes('@')) {
        _0x7a8fa8 = _0x7a8fa8.split('@')[1] + ':' + _0x7a8fa8.split('@')[0];
      }

      var arg_2811 = '' + this.sessionName;
      this.session = _0xaccbd3.fromPartition(arg_2811);
      await _0x354f98.bind(this)();
      let _0x1a15ac = null;

      if (_0x7a8fa8) {
        _0x1a15ac = _0x7a8fa8.split(':')[0] + ':' + _0x7a8fa8.split(':')[1];
      } else {
        _0x1a15ac = '';
      }

      this.proxyUsername = _0x7a8fa8 && _0x7a8fa8.split(':')[2] ? _0x7a8fa8.split(':')[2] : '';
      this.proxyPassword = _0x7a8fa8 && _0x7a8fa8.split(':')[3] ? _0x7a8fa8.split(':')[3] : '';
      await this.session.setProxy({
        'proxyRules': _0x1a15ac
      });
    }

    async productFound() {
      const _0x57da32 = _0x8044f7;

      while (this.running && !this.ready) {
        await _0x45a98b(100);
      }

      if (this.running && !this.started) {
        this.started = !![];
        this.startCheckoutProcess();
      }
    }

    isProductFound() {
      const _0x46d311 = _0x8044f7;

      let _0x59a1af = this.checkoutInfo && this.checkoutInfo.productName != "N/A";

      if (_0x59a1af) {
        return console.log("isProducrFound"), console.log(this.checkoutInfo.imageURL), {
          'imgLink': this.checkoutInfo.imageURL,
          'productName': this.checkoutInfo.productName
        };
      }

      return ![];
    }

    async runTask(_0x594a32 = ![]) {
      const _0x238cce = _0x8044f7;

      const _0x115e17 = "9|3|1|6|8|10|0|7|5|2|4".split('|');

      let _0x409265 = 0;

      if (this.running) {
        return;
      }

      global.taskStatus["fnl/jd"].runningNumber++;
      this.running = !![];
      await this.initSession(this.proxy);
      var arg_2813 = '[' + new Date().toISOString() + "]: ua: " + this.user_agent;

      _0x2d2bdc(arg_2813, this.logFilePath);

      var arg_2814 = '[' + new Date().toISOString() + "]: is task running: " + this.running + " task " + this.id + " started...";

      _0x2d2bdc(arg_2814, this.logFilePath);

      _0x5a14e3(arg_2815);

      if (!this.running) {
        return;
      }

      this.ready = !![];

      _0x5a14e3(arg_2816);

      if (this.running && !this.started && _0x594a32) {
        await _0x1f60cf.bin(this)();
        this.startCheckoutProcess();
      }
    }

    async startCheckoutProcess() {
      const _0x139855 = _0x8044f7;

      const _0x45888c = "3|0|5|2|6|1|4".split('|');

      let _0x34e590 = 0;

      _0x5a14e3(arg_2818);

      await _0x556bb0.bind(this)(!![]);

      if (_0x3b9bb4()) {
        return;
      }

      if (!this.running) {
        return;
      }

      await _0x32ab6c.bind(this)();

      if (!this.running || this.hitMaxRetry) {
        return;
      }

      await this.sendToWebhook();
    }

    async sendToWebhook() {
      const _0x5d51c4 = _0x8044f7;
      var arg_2819 = Date.now();
      this.checkoutInfo.checkoutSpeed = arg_2819 - this.startTime;
      this.checkoutInfo.date = new Date().toISOString();
      this.checkoutInfo.timestamp = Date.now();
      this.checkoutInfo.delay = this.monitorDelay;

      _0x27b1e4(this.checkoutInfo);

      console.log("webhook");
      console.log(this.checkoutInfo);

      if (this.checkoutInfo.paymentStatus == "Success") {
        global.taskStatus["fnl/jd"].checkedOutNumber++;
      } else {
        global.taskStatus["fnl/jd"].declinedNumber++;
      }

      var arg_2820 = _0x530cda(this.checkoutInfo, !![]);

      _0x3ef86a(arg_2820);

      var arg_2821 = _0x530cda(this.checkoutInfo, ![]);

      var arg_2822 = null;

      if (this.checkoutInfo.paymentStatus == "Success") {
        arg_2822 = this.successWebhook;
      } else {
        arg_2822 = this.declineWebhook;
      }

      _0x586466(arg_2821, arg_2822);

      if (this.checkoutInfo.paymentStatus == "Success") {
        var arg_2823 = _0x530cda(this.checkoutInfo, ![]);

        _0x586466(arg_2823, global.successWebhook);
      }

      return;
    }

    editRunner(_0xba8be9) {
      const _0x48b33c = _0x8044f7;
      this.monitorDelay = _0xba8be9;
    }

    async stopTask() {
      const _0x39bdd3 = _0x8044f7;

      const _0x123e62 = "17|0|8|11|1|9|19|5|18|14|4|13|10|6|12|15|16|3|2|7".split('|');

      let _0x2a8fe1 = 0;
      global.taskStatus["fnl/jd"].runningNumber--;
      this.currentURL = null;
      this.running = ![];
      this.variants = null;
      this.started = ![];
      this.pickedSize = null;
      this.siteKey = null;
      this.atcV3Action = null;
      this.orderV3Action = null;
      this.currentV3Token = null;
      this.currentURL = '';
      this.pixelId = null;
      this.pixelURL = null;
      this.bazadebezolkohpepadr = null;
      this.solvedPixel = ![];

      if (this.needCaptcha) {
        _0x233257.bind(this)();
      }

      await _0x354f98.bind(this)();
      console.log("stop task");

      _0x5a14e3(arg_2824);

      var arg_2825 = '[' + new Date().toISOString() + "]: Stopped";

      _0x2d2bdc(arg_2825, this.logFilePath);
    }

  }

  var arg_9 = (_0x5b1a41.app || _0x5b1a41.remote.app).getPath("userData");

  const _0x2c82b8 = async function () {
    const _0x32d946 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2826);

      throw "stopped";
    }

    try {
      let _0x400a9b = "https://api.nike.com/commerce/storedpayments/consumer/storedpayments";

      let _0x178690 = await _0x525073.bind(this)(_0x5f7c04);

      let _0x491829 = _0x178690.statusCode;
      let _0x63bb5e = _0x178690.body;
      console.log("storedpayments", _0x491829);
      console.log("storedpayments", _0x63bb5e);
    } catch (err) {
      console.log(err);
      await _0x45a98b(this.monitorDelay);
    }
  };

  const _0x278f92 = async function () {
    const _0x59d954 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2827);

      throw "stopped";
    }

    try {
      this.fulfillmentId = _0x28d3a4();
      this.addressId = _0x28d3a4();

      let _0x3c06f0 = JSON.stringify(arg_2828);

      console.log("fulfillment_offerings_jobs", _0x3c06f0);

      let _0x3dd1f8 = "https://api.nike.com/buy/fulfillment_offerings_jobs/v1/" + this.fulfillmentId;

      let _0xf1f8f0 = await _0x525073.bind(this)(_0x17d830);

      let _0x61b42 = _0xf1f8f0.statusCode;
      let _0x4d56a5 = _0xf1f8f0.body;
      console.log("fulfillment_offerings_jobs", _0x61b42);
      console.log("fulfillment_offerings_jobs", _0x4d56a5);
    } catch (err) {
      console.log(err);
      await _0x45a98b(this.monitorDelay);
    }
  };

  const _0x307be6 = async function () {
    const _0x1a1a10 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2829);

      throw "stopped";
    }

    try {
      this.cart_reviewsId = _0x28d3a4();

      let _0xa2c2fa = "https://api.nike.com/buy/cart_reviews/v2/" + this.cart_reviewsId;

      let _0x35c822 = JSON.stringify(arg_2830);

      let _0x391fd3 = await _0x525073.bind(this)(_0x1b5b00);

      let _0x325188 = _0x391fd3.statusCode;
      let _0x18a48b = _0x391fd3.body;
      console.log("cart_reviews", _0x325188);
      console.log("cart_reviews", _0x18a48b);
    } catch (err) {
      console.log(err);
      await _0x45a98b(this.monitorDelay);
    }
  };

  const _0x32c3ed = async function () {
    const _0x4309a5 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2831);

      throw "stopped";
    }

    try {
      let _0xd8d5e4 = "https://paymentcc.nike.com/creditcardsubmit/" + this.creditCardInfoId + "/isValid?mode=1";

      console.log(_0xd8d5e4);

      let _0xfab867 = await _0x525073.bind(this)(_0x35a167);

      let _0x54d8ac = _0xfab867.statusCode;
      let _0x12088e = _0xfab867.body;
      console.log("paymentccisValid", _0x54d8ac);
      console.log("paymentccisValid", _0x12088e);
    } catch (err) {
      console.log(err);
      await _0x45a98b(this.monitorDelay);
    }
  };

  const _0x3e8758 = async function () {
    const _0x4a62ed = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2835);

      return;
    }

    try {
      this.creditCardInfoId = _0x28d3a4();
      let _0x5d908a = "VISA";

      if (/^5[1-5][0-9]{5,}|222[1-9][0-9]{3,}|22[3-9][0-9]{4,}|2[3-6][0-9]{5,}|27[01][0-9]{4,}|2720[0-9]{3,}$/.test(this.profile.cardNum)) {
        _0x5d908a = _0x172aa3.hYEsa;
      }

      if (/^3[47][0-9]{5,}$/.test(this.profile.cardNum)) {
        _0x5d908a = _0x172aa3.YXIPX;
      }

      if (/^6(?:011|5[0-9]{2})[0-9]{3,}$/.test(this.profile.cardNum)) {
        _0x5d908a = _0x172aa3.IRUUO;
      }

      let _0x2e4bb1 = JSON.stringify(arg_2836);

      console.log("paymentcc", _0x2e4bb1);
      var arg_2837 = "https://paymentcc.nike.com/creditcardsubmit/" + this.creditCardInfoId + "/store";
      console.log(arg_2837);

      let _0x2f1fc2 = await _0x525073.bind(this)(_0x5bcd26);

      let _0x589ce8 = _0x2f1fc2.statusCode;
      console.log("creditcardsubmit", _0x589ce8);
      console.log("creditcardsubmit", _0x2f1fc2.body);

      var arg_2838 = '[' + new Date().toISOString() + "]: payment 3 status " + _0x589ce8;

      _0x2d2bdc(arg_2838, this.logFilePath);

      var arg_2839 = '[' + new Date().toISOString() + "]: payment 3 body " + _0x2f1fc2.body;

      _0x2d2bdc(arg_2839, this.logFilePath);

      if (_0x589ce8 == 201) {
      } else {
        return _0x589ce8 == 403 && (await _0xf26268.bind(this)(![])), await _0x45a98b(2500), _0x3e8758.bind(this)();
      }
    } catch (err) {
      const _0x535655 = "0|1|4|3|2".split('|');

      let _0x365916 = 0;
      console.log(err);
      var arg_2840 = '[' + new Date().toISOString() + "]: paymentcc Error, Retry " + err;

      _0x2d2bdc(arg_2840, this.logFilePath);

      _0x5a14e3(arg_2841);

      await _0x45a98b(2500);
      return _0x3e8758.bind(this)();
    }
  };

  const _0x5af34f = async function () {
    const _0x29d704 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2842);

      throw "stopped";
    }

    try {
      let _0xe84dfb = "https://api.nike.com/buy/checkouts_jobs/v3/" + this.checkoutId;

      console.log("checkouts_jobs_v3", _0xe84dfb);

      let _0x2e7fcf = await _0x525073.bind(this)(_0x58cc09);

      let _0x229767 = _0x2e7fcf.statusCode;
      let _0xa39854 = _0x2e7fcf.body;
      console.log("checkouts_jobs_v3", _0x229767);
      console.log("checkouts_jobs_v3", _0xa39854);

      if (_0x229767 == 200) {
        let _0x27ee87 = JSON.parse(_0xa39854);

        if (_0x27ee87.status != "COMPLETED") {
          return await _0x45a98b(1500), _0x5af34f.bind(this)();
        }
      }
    } catch (err) {
      console.log(err);
      await _0x45a98b(this.monitorDelay);
    }
  };

  const _0x2c0f12 = async function () {
    const _0xa0792 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2845);

      throw "stopped";
    }

    try {
      let _0x49f655 = _0x28d3a4();

      this.sensorURL = _0x172aa3.xiOBr;
      this.currentURL = _0x172aa3.kzjxC;
      console.log("this.currentURL", this.currentURL);
      await _0xf26268.bind(this)();

      let _0x3d1c59 = "https://api.nike.com/buy/checkouts/v3/" + this.checkoutId;

      console.log(_0x3d1c59);
      console.log(this.x_kpsdk_ct);

      let _0x1f6774 = JSON.stringify(arg_2846);

      console.log("cdheader", _0x1f6774);
      console.log("putheaders", _0x21331f);

      let _0x2a2524 = JSON.stringify(arg_2847);

      console.log("postbody", _0x2a2524);

      let _0x5d54bf = await _0x525073.bind(this)(_0x2ae599);

      let _0x3d554a = _0x5d54bf.statusCode;
      let _0x2dbb55 = _0x5d54bf.body;
      console.log("checkouts_v3", _0x3d554a);
      console.log("checkouts_v3", _0x2dbb55);

      if (_0x3d554a != 202) {
        return await _0x45a98b(4000), _0x2c0f12.bind(this)();
      }
    } catch (err) {
      console.log(err);
      await _0x45a98b(this.monitorDelay);
    }
  };

  const _0x279601 = async function () {
    const _0x1c6876 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2848);

      throw "stopped";
    }

    try {
      let _0x1797cf = "https://api.nike.com/payment/preview/v3/jobs/" + this.paymentId;

      let _0x237ded = await _0x525073.bind(this)(_0x2d3c27);

      let _0x3b276e = _0x237ded.statusCode;
      let _0x5cb612 = _0x237ded.body;
      console.log("payment_preview_v3_jobs", _0x3b276e);
      console.log("payment_preview_v3_jobs", _0x5cb612);

      if (_0x3b276e == 200) {
        let _0x4cf48c = JSON.parse(_0x5cb612);

        if (_0x4cf48c.status != "COMPLETED") {
          return await _0x45a98b(1500), _0x279601.bind(this)();
        }
      }
    } catch (err) {
      console.log(err);
      await _0x45a98b(this.monitorDelay);
    }
  };

  const _0x11f114 = async function () {
    const _0x453de3 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2849);

      throw "stopped";
    }

    try {
      this.checkoutId = _0x28d3a4();
      let _0x4b5f15 = "VISA";

      if (/^5[1-5][0-9]{5,}|222[1-9][0-9]{3,}|22[3-9][0-9]{4,}|2[3-6][0-9]{5,}|27[01][0-9]{4,}|2720[0-9]{3,}$/.test(this.profile.cardNum)) {
        _0x4b5f15 = _0x172aa3.hYEsa;
      }

      if (/^3[47][0-9]{5,}$/.test(this.profile.cardNum)) {
        _0x4b5f15 = _0x172aa3.YXIPX;
      }

      if (/^6(?:011|5[0-9]{2})[0-9]{3,}$/.test(this.profile.cardNum)) {
        _0x4b5f15 = _0x172aa3.IRUUO;
      }

      let _0x3251b4 = "https://api.nike.com/payment/preview/v3";

      let _0x54d452 = JSON.stringify(arg_2850);

      console.log("paymentpreviewV3 postbody", _0x54d452);

      let _0x31cf4f = await _0x525073.bind(this)(_0x13c1bc);

      let _0x1d8ec7 = _0x31cf4f.statusCode;
      let _0x156aa9 = _0x31cf4f.body;
      console.log("paymentpreviewV3", _0x1d8ec7);
      console.log("paymentpreviewV3", _0x156aa9);

      let _0x33e8bf = JSON.parse(_0x156aa9);

      this.paymentId = _0x33e8bf.id;
      console.log("this.paymentId", this.paymentId);
    } catch (err) {
      console.log(err);
      await _0x45a98b(this.monitorDelay);
    }
  };

  const _0x448745 = async function () {
    const _0x319ed8 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2851);

      throw "stopped";
    }

    try {
      let _0x2a3ec9 = "https://api.nike.com/payment/options/v3";

      let _0x3f670f = JSON.stringify(arg_2853);

      console.log("paymentoptionsV3 body", _0x3f670f);

      let _0x5e25b5 = await _0x525073.bind(this)(_0x50359f);

      let _0xa42be = _0x5e25b5.statusCode;
      let _0x4974ed = _0x5e25b5.body;
      console.log("paymentoptionsV3", _0xa42be);
      console.log("paymentoptionsV3", _0x4974ed);
    } catch (err) {
      console.log(err);
      await _0x45a98b(this.monitorDelay);
    }
  };

  const _0x262002 = async function () {
    const _0x476ce8 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2854);

      throw "stopped";
    }

    try {
      let _0x427b38 = "https://api.nike.com/buy/cart_reviews/v2/" + this.cart_reviewsId;

      let _0x41e627 = await _0x525073.bind(this)(_0x33629a);

      let _0x10885b = _0x41e627.statusCode;
      let _0x36ed9d = _0x41e627.body;
      console.log("getcart_reviews", _0x10885b);
      console.log("getcart_reviews", _0x36ed9d);

      if (_0x10885b == 200) {
        let _0x617652 = JSON.parse(_0x36ed9d);

        if (_0x617652.status != "COMPLETED") {
          return await _0x45a98b(1500), _0x262002.bind(this)();
        } else {
          const _0x548237 = "2|5|4|0|10|8|11|9|7|3|6|1".split('|');

          let _0x46b434 = 0;
          this.total = _0x617652.response.totals.total;
          this.taxTotal = ''[0].itemCosts.taxes[0].total;
          this.taxesrate = ''[0].itemCosts.taxes[0].rate;
          this.price = ''[0].itemCosts.priceInfo.price;
          this.priceInfosubtotal = ''[0].itemCosts.priceInfo.subtotal;
          this.priceInfototal = ''[0].itemCosts.priceInfo.total;
          console.log("this.total", this.total);
          console.log("this.taxTotal", this.taxTotal);
          console.log("this.taxesrate", this.taxesrate);
          console.log("this.price", '0');
          console.log("this.priceInfosubtotal", this.priceInfosubtotal);
          console.log("this.priceInfototal", this.priceInfototal);
        }
      }
    } catch (err) {
      console.log(err);
      await _0x45a98b(this.monitorDelay);
    }
  };

  const _0x4c873a = async function () {
    const _0x59ad17 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2855);

      throw "stopped";
    }

    try {
      let _0x46ce3f = "https://api.nike.com/buy/fulfillment_offerings_jobs/v1/" + this.fulfillmentId;

      let _0x58c29c = await _0x525073.bind(this)(_0x569893);

      let _0x3c5214 = _0x58c29c.statusCode;
      let _0x583359 = _0x58c29c.body;
      console.log("getfulfillment_offerings_jobs", _0x3c5214);
      console.log("getfulfillment_offerings_jobs", _0x583359);

      if (_0x3c5214 == 200) {
        let _0x23a94d = JSON.parse(_0x583359);

        if (_0x23a94d.status != "COMPLETED") {
          return await _0x45a98b(1500), _0x4c873a.bind(this)();
        } else {
          this.addressId = _0x23a94d.locations[0].id;
          console.log("this.addressId ", this.addressId);

          for (let _0x52846c of ''[0].fulfillmentOfferings) {
            if ("getBy" in _0x52846c) {
              this.maxDatedateTime = _0x52846c.getBy.maxDate.dateTime;
              console.log("this.maxDatedateTime", this.maxDatedateTime);
              break;
            }
          }
        }
      }
    } catch (err) {
      console.log(err);
      await _0x45a98b(this.monitorDelay);
    }
  };

  const _0x383486 = async function () {
    const _0x44ba26 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2857);

      throw "stopped";
    }

    try {
      var arg_2858 = [{
        'op': "add",
        'path': "/items",
        'value': {
          'itemData': {
            'url': "/t/" + this.slug + '/' + this.sku
          },
          'skuId': this.skuId,
          'quantity': 1
        }
      }];
      let _0x2eeb2b = "https://api.nike.com/buy/carts/v2/US/NIKE/NIKECOM?modifiers=VALIDATELIMITS,VALIDATEAVAILABILITY";

      let _0x1ba8c9 = JSON.stringify(arg_2858);

      console.log(_0x1ba8c9);
      console.log("this.user_agent", this.user_agent);

      let _0x8099d7 = JSON.stringify(arg_2859);

      let _0xd1990 = await _0x525073.bind(this)(_0x1ada59);

      let _0x4ab5ea = _0xd1990.statusCode;
      let _0x2dc560 = _0xd1990.body;
      console.log("addToCart", _0x4ab5ea);
      console.log("addToCart", _0x2dc560);

      let _0x3b0ec9 = JSON.parse(_0x2dc560);

      this.itemId = ''[0].id;
      this.productId = ''[0].productId;
      console.log("this.itemId", this.itemId);
    } catch (err) {
      const _0x54645f = "2|3|1|0|4".split('|');

      let _0x3804db = 0;
      console.log(err);

      _0x5a14e3(arg_2860);

      var arg_2861 = '[' + new Date().toISOString() + "]: adding to cart failed, " + err;

      _0x2d2bdc(arg_2861, this.logFilePath);

      await _0x45a98b(this.monitorDelay);
      return _0x383486.bind(this)();
    }
  };

  const _0x2c5224 = async function (_0x1f9057) {
    const _0x1cddc5 = _0x8044f7;

    try {
      let _0x16ee8d = /setAu', '([a-zA-Z0-9/]+)'\]\)/.exec(_0x1f9057);

      this.sensorURL = _0x16ee8d && _0x16ee8d[1] ? _0x16ee8d[1] : this.sensorURL;
      this.sensorURL = this.sensorURL.includes("http") ? this.sensorURL : '' + this.siteOrigin + this.sensorURL;
    } catch (err) {
      console.log(err);
      this.sensorURL = _0x172aa3.OSXUx;
    }

    try {
      let _0x28ccf3 = /nike.com\/akam\/11\/([a-zA-Z0-9]+)"/.exec(_0x1f9057);

      if (_0x28ccf3 && _0x28ccf3[1]) {
        this.pixelId = _0x28ccf3[1];
      } else {
        let _0x2a5b45 = _0x1f9057.match(/src="(.*\/akam\/[\w/]+)"/)[1];

        this.pixelId = _0x2a5b45.split('/').pop();
      }

      console.log("this.pixelId", this.pixelId);
      this.pixelURL = "https://www.nike.com/akam/11/pixel_" + this.pixelId;
      this.bazadebezolkohpepadr = /bazadebezolkohpepadr="(.*)"<\/script>/.exec(_0x1f9057)[1];
    } catch (err) {
      console.log(err);
    }

    console.log("this.sensorURL", this.sensorURL);
    console.log("this.pixelURL", this.pixelURL);
    console.log("this.bazadebezolkohpepadr", this.bazadebezolkohpepadr);
    var arg_2862 = '[' + new Date().toISOString() + "]: Parse sensor url: " + this.sensorURL;

    _0x2d2bdc(arg_2862, this.logFilePath);
  };

  const _0x2fb398 = function (_0x18dc51) {
    const _0xee731b = _0x8044f7;

    for (let _0x2db87d in this.skuidandsize) {
      if (this.skuidandsize[_0x2db87d] == _0x18dc51) {
        return _0x2db87d;
      }
    }
  };

  const _0x4750e9 = async function () {
    const _0x5c2db2 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2866);

      throw "stopped";
    }

    try {
      var arg_2867 = this.size[0].name.toLowerCase();

      if (arg_2867 == "random") {
        this.pickedSize = this.shoesize[Math.floor(Math.random() * this.shoesize.length)];
      } else {
        let _0x42642d = [];

        for (let _0x10e8e3 of this.size) {
          let _0x59dde6 = this.shoesize.find(_0x5b5661 => {
            const _0x5a76b3 = _0x5c2db2;
            return _0x5b5661 == _0x10e8e3.name;
          });

          if (_0x59dde6) {
            _0x42642d.push(_0x59dde6);
          }
        }

        if (_0x42642d.length > 0) {
          this.pickedSize = _0x42642d[Math.floor(Math.random() * _0x42642d.length)];
        }
      }

      console.log("this.pickedSize", this.pickedSize);
      this.checkoutInfo.size = this.pickedSize;
      this.skuId = _0x2fb398.bind(this)(this.pickedSize);
      console.log("this.skuId", this.skuId);
    } catch (err) {
      return console.log(err), _0x5a14e3({
        'id': this.id,
        'status': "Getting Size Error, Retry",
        'statusCode': 4,
        'groupId': this.groupId
      }), await _0x45a98b(this.errorDelay), _0x4750e9.bind(this)();
    }
  };

  const _0x45e326 = async function () {
    const _0x39e205 = _0x8044f7;

    if (!this.running) {
      _0x5a14e3(arg_2871);

      return;
    }

    try {
      _0x5a14e3(arg_2873);

      var arg_2874 = '[' + new Date().toISOString() + "]: Get Product Page.";

      _0x2d2bdc(arg_2874, this.logFilePath);

      let _0x769bd = await _0x525073.bind(this)(_0x40b507);

      return console.log("getProductPage", _0x769bd.statusCode), _0x769bd.statusCode == 200 && _0x769bd.body && _0x2c5224.bind(this)(_0x769bd.body), _0x769bd;
    } catch (err) {
      const _0x2525a5 = "4|0|3|2|1".split('|');

      let _0x4f1683 = 0;
      console.log(err);
      var arg_2876 = '[' + new Date().toISOString() + "]: Get Product Page Failed " + err + '.';

      _0x2d2bdc(arg_2876, this.logFilePath);

      _0x5a14e3(arg_2877);

      await _0x45a98b(3000);
      return _0x45e326.bind(this)();
    }
  };

  const _0x4a1bed = new _0x5860df();

  const {
    session: _0x5df33e,
    app: _0xb16dde
  } = _0x5b1a41;

  const _0x43d59e = arg_9 + "/taskLogs";

  class _0x3ffc2d {
    constructor(_0xb66389, _0x332a61, _0x5a7771, _0x36f066, _0x194d27, _0x5c3e5e, _0x1baa58, _0x203220, _0x51e085, _0x42a66a, _0x4b418f, _0x45a350, _0xd708d7, _0x47a45b, _0x5598f2, _0x50eab3) {
      const _0x5c088a = _0x8044f7;

      const _0x159180 = "14|13|38|30|32|18|26|43|33|52|15|9|27|2|24|55|25|37|49|36|17|1|7|0|58|11|6|47|31|28|57|40|56|20|50|35|53|48|34|8|41|5|21|39|42|4|23|16|60|44|59|29|46|22|61|54|51|3|45|10|62|19|12".split('|');

      let _0x5d454 = 0;
      this.id = _0xb66389;
      this.groupId = _0x332a61;
      this.profile = _0x5a7771;
      this.size = _0x36f066;
      this.modes = _0x194d27;
      this.type = _0x5c3e5e;
      this.siteOrigin = _0x1baa58;
      console.log(this.siteOrigin);
      this.siteName = _0x47a45b;
      this.proxy = _0x203220;
      this.proxyList = _0x5598f2;
      this.searchLink = _0x51e085;
      this.sku = _0x42a66a;
      this.total = null;
      this.taxesrate = null;
      this.price = null;
      this.priceInfosubtotal = null;
      this.priceInfototal = null;
      this.shoesize = null;
      this.skuidandsize = null;
      this.skuId = null;
      this.imgLink = null;
      this.productName = null;
      this.productId = null;
      this.slug = null;
      this.checkout_V3 = !![];
      this.monitorDelay = _0x4b418f;
      this.sender = _0x45a350;
      this.fulfillmentId = null;
      this.currentURL = null;
      this.pixelHash = null;
      this.maxDatedateTime = null;
      this.accounttoken = null;
      this.pickedSize = null;
      this.pixelPayLoad = null;
      this.itemId = null;
      this.sensorURL = _0x172aa3.OSXUx;
      this.user_id = null;
      this.pixelId = null;
      this.bazadebezolkohpepadr = null;
      this.gValue = null;
      this.pixelURL = null;
      this.paymentId = null;
      this.creditCardInfoId = null;
      this.akamaiCookie = null;
      this.useMekApi = ![];
      this.x_kpsdk_ct = null;
      this.x_kpsdk_st = null;
      this.x_kpsdk_cdid = null;
      this.posttldata = null;
      this.errorDelay = 3500;
      this.keepSameUA = !![];
      this.ipsdata = null;
      this.answers = null;
      this.workTime = null;
      this.logFilePath = _0x43d59e + '/' + _0xd708d7 + '/' + this.profile.name + '_' + this.id;
      this.accountname = '';
      this.accountpasswod = '';
      this.useStaticFp = ![];
      this.user_agent = this.useStaticFp ? "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36" : _0x310223(_0x2b33c7.NIKE);
      this.startTime = Date.now();
      this.checkoutInfo = {
        'version': _0xb16dde.getVersion(),
        'discordId': global.user.userId,
        'key': global.user.key,
        'siteType': this.type,
        'siteName': _0x47a45b,
        'siteURL': this.productPID,
        'store': this.siteOrigin,
        'checkoutSpeed': 0,
        'productName': "N/A",
        'size': null,
        'profileName': this.profile.name,
        'orderNumber': "N/A",
        'proxyIp': this.proxy,
        'mode': Object.keys(this.modes).filter(_0x368185 => this.modes[_0x368185]).join('-'),
        'imageURL': null,
        'paymentStatus': null,
        'sku': null,
        'date': new Date().toISOString(),
        'timestamp': Date.now(),
        'email': this.profile.email
      };
      this.successWebhook = _0x172aa3.wrZmv;
      this.declineWebhook = _0x172aa3.jdUZa;
    }

    async productFound(_0x5217c4) {
      const _0x2d02ae = _0x8044f7;

      while (this.running && !this.ready) {
        await _0x45a98b(1000);
      }

      if (this.running && !this.started) {
        const _0x56f89c = "2|0|6|5|4|3|1".split('|');

        let _0x3b2e19 = 0;
        this.started = !![];
        this.shoesize = _0x5217c4.shoesize;
        this.skuidandsize = _0x5217c4.skuidandsize;
        this.imgLink = _0x5217c4.imgLink;
        this.productName = _0x5217c4.productName;
        this.slug = _0x5217c4.slug;
        this.startCheckoutProcess();
      }
    }

    isProductFound() {
      const _0xf5ab82 = _0x8044f7;

      let _0x3d5862 = this.checkoutInfo && this.checkoutInfo.imageURL != null;

      if (_0x3d5862) {
        return {
          'imgLink': this.checkoutInfo.imageURL,
          'productName': this.checkoutInfo.productName
        };
      }

      return ![];
    }

    async initSession(_0x1ebcce) {
      const _0x46f701 = _0x8044f7;
      _0x1ebcce = _0x1ebcce && _0x1ebcce.replace("http://", '');

      if (_0x1ebcce && _0x1ebcce.includes('@')) {
        _0x1ebcce = _0x1ebcce.split('@')[1] + ':' + _0x1ebcce.split('@')[0];
      }

      var arg_2878 = '' + this.sessionName;
      this.session = _0x5df33e.fromPartition(arg_2878);
      let _0x2a45c5 = null;

      if (_0x1ebcce) {
        _0x2a45c5 = _0x1ebcce.split(':')[0] + ':' + _0x1ebcce.split(':')[1];
      } else {
        _0x2a45c5 = '';
      }

      this.proxyUsername = _0x1ebcce && _0x1ebcce.split(':')[2] ? _0x1ebcce.split(':')[2] : '';
      this.proxyPassword = _0x1ebcce && _0x1ebcce.split(':')[3] ? _0x1ebcce.split(':')[3] : '';
      await this.session.setProxy({
        'proxyRules': _0x2a45c5
      });
    }

    async runTask(_0x536991 = null) {
      const _0x291266 = _0x8044f7;

      try {
        if (this.running) {
          return;
        }

        this.running = !![];
        await this.initSession(this.proxy);
        var arg_2880 = '[' + new Date().toISOString() + "]: is task running: " + this.running + " task " + this.id + " started...";

        _0x2d2bdc(arg_2880, this.logFilePath);

        _0x5a14e3(arg_2881);

        if (!this.running) {
          return;
        }

        this.ready = !![];

        if (_0x536991 != null && this.running && !this.started) {
          const _0x73bb11 = "0|3|6|5|1|8|7|2|4".split('|');

          let _0x3c482d = 0;
          this.started = !![];
          console.log(_0x536991);
          this.shoesize = _0x536991.shoesize;
          this.skuidandsize = _0x536991.skuidandsize;
          this.imgLink = _0x536991.imgLink;
          this.productName = _0x536991.productName;
          this.slug = _0x536991.slug;
          await rotateProxy.bind(this)();
          this.startCheckoutProcess();
        }
      } catch (err) {
        console.log(err);
      }
    }

    async startCheckoutProcess() {
      const _0x316504 = _0x8044f7;

      _0x5a14e3(arg_2882);

      await _0x45e326.bind(this)();
      await _0x3ef322.bind(this)(this.siteOrigin);
      await _0x350fe2.bind(this)(!![]);
      await _0x2e15fe.bind(this)();
      await _0x29b0e3.bind(this)(!![]);

      let _0x493d2d = _0x4a1bed.get("accounttoken");

      let _0x4a27aa = ![];

      let _0x548a26 = !![];

      this.accountname = _0x172aa3.bDALj;

      if (_0x493d2d) {
        for (let _0x351857 of _0x493d2d) {
        }
      }

      if (_0x4a27aa) {
        _0x548a26 = await _0x14658b.bind(this)();
      }

      if (_0x548a26) {
        const _0x2951e7 = "4|3|0|2|1".split('|');

        let _0xa6f9e7 = 0;
        await _0x350fe2.bind(this)();
        await _0x2e15fe.bind(this)();
        await _0x29b0e3.bind(this)();

        _0x3b17e9.bind(this)();

        await _0x1b72d4.bind(this)();
      }

      await _0x421587.bind(this)();
      await _0x41f534.bind(this)();

      if (this.checkout_V3 == !![]) {
        const _0x371859 = "10|7|12|2|3|15|11|4|14|1|8|9|5|6|13|0".split('|');

        let _0x171605 = 0;
        await _0x4750e9.bind(this)();

        _0x3b17e9.bind(this)();

        await _0x12599f.bind(this)(!![]);
        await _0x383486.bind(this)();
        await _0x278f92.bind(this)();
        await _0x4c873a.bind(this)();
        await _0x2c82b8.bind(this)();
        await _0x307be6.bind(this)();
        await _0x262002.bind(this)();
        await _0x448745.bind(this)();
        await _0x3e8758.bind(this)();
        await _0x32c3ed.bind(this)();
        await _0x11f114.bind(this)();
        await _0x279601.bind(this)();
        await _0x11f114.bind(this)();
        await _0x279601.bind(this)();
      }

      await _0x12599f.bind(this)(!![]);
      await _0x2c0f12.bind(this)();
      await _0x5af34f.bind(this)();
      return;
    }

    async stopTask() {
      const _0x24d036 = _0x8044f7;
      this.loggedIn = ![];
      this.running = ![];
      this.variants = null;
      this.started = ![];
      this.pickedSize = null;
      this.checkoutInfo = null;
      console.log("stop task");
      await _0x354f98.bind(this)();

      _0x5a14e3(arg_2887);

      var arg_2888 = '[' + new Date().toISOString() + "]: Stopped";

      _0x2d2bdc(arg_2888, this.logFilePath);

      try {
        if (this.browser != null) {
          await this.browser.close();
          this.browser = null;
        }
      } catch (err) {
      }
    }

  }

  class _0x324ecb {
    constructor(_0x481adf) {
      const _0x1395d8 = _0x8044f7;
      this.index = _0x481adf.index;
      this.id = _0x481adf.id;
      this.groupId = _0x481adf.groupId;
      this.profile = _0x481adf.profile;
      this.size = _0x481adf.size;
      this.modes = _0x481adf.modes;
      this.assignedAccount = _0x481adf.assignedAccount;
      this.type = _0x481adf.type;
      this.proxyList = _0x481adf.proxyList;

      if (_0x481adf.siteOrigin.includes("https://")) {
        this.siteOrigin = _0x481adf.siteOrigin.split('/').splice(0, 3).join('/');
      } else {
        this.siteOrigin = _0x481adf.siteOrigin.split('/')[0];
      }

      this.proxy = _0x481adf.proxy;
      this.searchLink = this.siteOrigin + "/products.json";
      this.searchContent = _0x481adf.searchContent;
      this.monitorDelay = _0x481adf.monitorDelay;
      this.login = _0x481adf.login;
      this.apiKey = _0x481adf.apiKey;
      this.checkoutMethod = _0x481adf.checkoutMethod;
      this.needLogin = _0x481adf.needLogin;
      this.sender = _0x481adf.sender;
      this.runner = null;
      this.logPath = _0x481adf.logPath;
      this.siteName = _0x481adf.siteName;
      this.gfCardsIds = _0x481adf.gfCardsIds;
      this.threeDProxy = _0x481adf.threeDProxy;
    }

    startRunner(_0xc9c0f1 = null) {
      const _0x565ef6 = _0x8044f7;

      try {
        switch (this.type) {
          case _0x23da2b.SHOPIFY:
            this.runner = new _0x1ed798(this.id, this.groupId, this.profile, this.size, this.modes, this.assignedAccount, this.type, this.siteOrigin, this.proxy, this.searchLink, this.searchContent, this.monitorDelay, this.login, this.apiKey, this.checkoutMethod, this.needLogin, this.sender, this.logPath, this.siteName, this.proxyList, this.index), this.runner.runTask(_0xc9c0f1);
            break;

          case _0x23da2b.YEEZYSUPPLY:
            this.runner = new _0x2df539(this.id, this.groupId, this.profile, this.size, this.modes, this.type, this.siteOrigin, this.proxy, this.searchLink, this.searchContent, this.monitorDelay, this.apiKey, this.sender, this.logPath, this.siteName, this.proxyList, this.index, this.threeDProxy), this.runner.runTask(_0xc9c0f1);
            break;

          case _0x23da2b.ADIDAS:
            break;

          case _0x23da2b.FOOTSITE:
            this.runner = new _0x369a5d(this.id, this.groupId, this.profile, this.size, this.modes, this.type, this.siteOrigin, this.proxy, this.searchLink, this.searchContent, this.monitorDelay, this.login, this.needLogin, this.sender, this.logPath, this.siteName, this.proxyList, this.gfCardsIds, this.index), this.runner.runTask(_0xc9c0f1);
            break;

          case _0x23da2b.FINISHLINE:
            this.runner = new _0x306421(this.id, this.groupId, this.profile, this.size, this.modes, this.type, this.siteOrigin, this.proxy, this.searchLink, this.searchContent, this.monitorDelay, this.login, this.needLogin, this.sender, this.logPath, this.siteName, this.proxyList, this.index), this.runner.runTask(_0xc9c0f1);
            break;

          case _0x23da2b.SNKRS:
            this.runner = new _0x188e8f(this.id, this.groupId, this.profile, this.size, this.modes, this.type, this.siteOrigin, this.proxy, this.searchLink, this.searchContent, this.monitorDelay, this.sender, this.logPath, this.siteName, this.proxyList, this.assignedAccount, this.index), this.runner.runTask(_0xc9c0f1);
            break;

          case _0x23da2b.NIKE:
            this.runner = new _0x3ffc2d(this.id, this.groupId, this.profile, this.size, this.modes, this.type, this.siteOrigin, this.proxy, this.searchLink, this.searchContent, this.monitorDelay, this.sender, this.logPath, this.siteName, this.proxyList, this.assignedAccount, this.index), this.runner.runTask(_0xc9c0f1);
            break;
        }
      } catch (err) {
        console.log(err);
      }
    }

    productFound(_0xefa490) {
      const _0x39ee54 = _0x8044f7;

      try {
        this.runner.productFound(_0xefa490);
      } catch (err) {
      }
    }

    variantFound(_0x5d21f9) {
      const _0x2ef069 = _0x8044f7;

      try {
        this.runner.variantFound(_0x5d21f9);
      } catch (err) {
      }
    }

    checkpointFound() {
      const _0x59d1cd = _0x8044f7;

      try {
        this.runner.checkpointFound();
      } catch (err) {
      }
    }

    waitQuestions() {
      const _0xf3af9b = _0x8044f7;

      try {
        this.runner.waitQuestions();
      } catch (err) {
      }
    }

    stopRunner() {
      const _0x76c1b1 = _0x8044f7;

      if (this.runner) {
        this.runner.stopTask();
      }

      this.runner = null;
    }

    isProductFound() {
      const _0x2a1d6a = _0x8044f7;

      try {
        return this.runner.isProductFound();
      } catch (err) {
        return ![];
      }
    }

    editTask(_0x551772, _0x46b60b) {
      const _0x561cdd = _0x8044f7;

      try {
        if (this.runner) {
          this.monitorDelay = _0x551772;
          this.modes = _0x46b60b;

          switch (this.type) {
            case _0x23da2b.SHOPIFY:
              this.runner.editRunner(_0x551772, _0x46b60b);
              break;

            case _0x23da2b.YEEZYSUPPLY:
              this.runner.editRunner(_0x551772, _0x46b60b);
              break;

            case _0x23da2b.ADIDAS:
              break;

            case _0x23da2b.FOOTSITE:
              this.runner.editRunner(_0x551772, _0x46b60b);
              break;
          }
        }
      } catch (err) {
      }
    }

    exportChrome() {
      const _0x51ce19 = _0x8044f7;

      if (this.runner) {
        this.runner.exportChrome();
      }
    }

  }

  const _0x39e394 = function (_0x49fe75, _0x1a28d3) {
    const _0x322b41 = _0x8044f7;

    try {
      _0x49fe75 = _0x49fe75.split('?')[0];

      if (_0x1a28d3.includes("checkout.funko.com")) {
        _0x49fe75 = "https://checkout.funko.com/products/" + _0x49fe75.split('?')[0].split('/').pop();
      }

      let _0x503f86 = _0x49fe75;

      if (!_0x49fe75.includes("collections")) {
        _0x503f86 = _0x49fe75.split("products")[0] + "collections/~/products" + _0x49fe75.split("products").pop();
      }

      let _0x2873f1 = _0x503f86.split("collections")[0] + "collections";

      let _0x221675 = "products" + _0x503f86.split("products").pop();

      return _0x503f86 = _0x2873f1 + '/' + _0x3feb4f() + '/' + _0x221675, _0x503f86;
    } catch (err) {
      return _0x49fe75;
    }
  };

  const _0x47c876 = async function (_0x4bfe2d, _0x566e00, _0x45acc6, _0x2ae3a9) {
    const _0x2c5ff3 = _0x8044f7;

    if (_0x45acc6.includes("https://")) {
      let _0x4d43e2 = _0x39e394(_0x45acc6, _0x4bfe2d);

      if (_0x4bfe2d.includes("doverstreetmarket")) {
        return _0x3d8f3.bind(this)(_0x4d43e2);
      }

      let _0x5a25f8 = null;

      if (_0x4bfe2d.includes("kith")) {
        return _0x376732.bind(this)(_0x45acc6.split('?')[0], _0x4bfe2d, _0x2ae3a9);
      } else {
        let _0x3a2e41 = await Promise.all([_0x57866d.bind(this)(_0x4bfe2d, _0x4d43e2), _0x476741.bind(this)(_0x4bfe2d, _0x45acc6.split('?')[0], _0x2ae3a9)]);

        _0x5a25f8 = _0x3a2e41.find(_0x19fcda => _0x19fcda != null);
      }

      return _0x5a25f8;
    } else {
      return _0x2bb780.bind(this)(_0x45acc6, _0x4bfe2d, _0x2ae3a9);
    }
  };

  const _0x3d8f3 = async function (_0x11e7cb) {
    const _0x13f97b = _0x8044f7;

    try {
      let _0x4a667a = await _0x525073.bind(this)(_0x468424, ![]);

      if (_0x4a667a.statusCode != 200 || _0x4a667a.body && _0x4a667a.body.includes("404 Not Found")) {
        return null;
      }

      const _0x29d94c = /script type="application\/json" id="ProductJson-product-template">(\s+)(.*?)(\s+)<\/script/.exec(_0x4a667a.body)[2];

      let _0x3605e0 = JSON.parse(_0x29d94c);

      return {
        'handle': _0x3605e0.handle,
        'productName': "SNKR Akamai Gen",
        'variants': _0x3605e0.variants,
        'imgLink': _0x3605e0.images[0].includes("http") ? _0x3605e0.images[0] : "https:" + _0x3605e0.images[0]
      };
    } catch (err) {
      return console.log(err.message), null;
    }
  };

  const _0x476741 = async function (_0x3e2151, _0x2f2399, _0x3b0cbe) {
    const _0x88f2cd = _0x8044f7;

    try {
      if (_0x3e2151.includes("checkout.funko.com")) {
        return null;
      }

      let _0x2719f2 = await _0x525073.bind(this)(_0x3a9735, ![]);

      let _0x30c640 = _0x2719f2.statusCode;

      if (_0x30c640 != 200) {
        return null;
      }

      let _0x5f182e = _0x3066df.load(_0x2719f2.body, arg_2902);

      let _0x273bc5 = _0x5f182e("script[type=\"application/json\"]").get().find(_0x26d98c => JSON.parse(_0x26d98c.children[0].data.trim()).variants);

      let _0x10c342 = _0x273bc5.children[0].data.trim();

      let _0xdcc67b = JSON.parse(_0x10c342);

      return {
        'productName': "SNKR Akamai Gen",
        'variants': _0xdcc67b.variants,
        'imgLink': _0xdcc67b.featured_image.includes("http") ? _0xdcc67b.featured_image : "https:" + _0xdcc67b.featured_image,
        'handle': _0xdcc67b.handle
      };
    } catch (err) {
      return console.log(err.message), null;
    }
  };

  const _0x57866d = async function (_0x195863, _0x4c2303) {
    const _0x47db54 = _0x8044f7;

    try {
      let _0xac00e3 = await _0x525073.bind(this)(_0x35fe8c, ![]);

      let _0x238d97 = _0xac00e3.statusCode;

      if (_0x238d97 != 200) {
        return null;
      }

      const _0x180a3e = JSON.parse(_0xac00e3.body);

      return {
        'productName': "SNKR Akamai Gen",
        'variants': _0x180a3e.variants,
        'imgLink': _0x180a3e.featured_image.includes("http") ? _0x180a3e.featured_image : "https:" + _0x180a3e.featured_image,
        'handle': _0x180a3e.handle
      };
    } catch (err) {
      return console.log(err.message), null;
    }
  };

  const _0x376732 = async function (_0x3d3126, _0x156e54, _0x6342bc) {
    const _0x270962 = _0x8044f7;

    try {
      if (_0x156e54.includes("https://")) {
        _0x156e54 = _0x156e54.split('/').splice(0, 3).join('/');
      } else {
        _0x156e54 = _0x156e54.split('/')[0];
      }

      let _0x3c19df = await _0x525073.bind(this)(_0x207da2, ![]);

      let _0x2cbef9 = _0x3c19df.statusCode;

      if (_0x2cbef9 != 200) {
        return null;
      }

      const _0x44946e = JSON.parse(_0x3c19df.body);

      let _0x44f4b1 = _0x44946e.products.find(_0x2a745d => {
        const _0x55f8df = _0x270962;

        let _0x20b19d = _0x3d3126.split("products/")[1].replaceAll('/', '');

        return _0x20b19d.toLowerCase() == _0x2a745d.handle.toLowerCase();
      });

      return _0x44f4b1 ? {
        'productName': "SNKR Akamai Gen",
        'variants': _0x44f4b1.variants,
        'imgLink': _0x44f4b1.images[0].src,
        'handle': _0x44f4b1.handle
      } : null;
    } catch (err) {
      return console.log(err.message), null;
    }
  };

  const _0x2bb780 = async function (_0x2de7b2, _0x4d1a06, _0x179451) {
    const _0x4c3986 = _0x8044f7;

    try {
      if (_0x4d1a06.includes("https://")) {
        _0x4d1a06 = _0x4d1a06.split('/').splice(0, 3).join('/');
      } else {
        _0x4d1a06 = _0x4d1a06.split('/')[0];
      }

      const _0x37fc67 = _0x2de7b2.replace(/\s/g, '').trim().split(',').filter(_0x15dc5a => !_0x15dc5a.startsWith('-'));

      const _0x3fea6a = _0x2de7b2.replace(/\s/g, '').trim().split(',').filter(_0x1fca39 => _0x1fca39.startsWith('-')).map(_0x26efc7 => _0x26efc7.slice(1));

      let _0x5972a = await _0x525073.bind(this)(_0x3ef0ea, ![]);

      let _0x23a426 = _0x5972a.statusCode;

      if (_0x23a426 != 200) {
        return null;
      }

      const _0xa63000 = JSON.parse(_0x5972a.body);

      let _0x564576 = _0xa63000.products.find(_0x3f7a30 => {
        const _0x42c076 = _0x4c3986;

        const _0x49e0f8 = "SNKR Akamai Gen".toLowerCase().split('.').join('');

        const _0x1a9f22 = _0x37fc67.filter(_0x4324a6 => _0x49e0f8.indexOf(_0x4324a6.toLowerCase()) !== -1);

        const _0x39e5fd = _0x3fea6a.filter(_0xac7119 => _0x49e0f8.indexOf(_0xac7119.toLowerCase()) !== -1);

        if (_0x1a9f22.length == _0x37fc67.length && _0x39e5fd.length == 0) {
          return !![];
        }

        const _0x1290bc = _0x3f7a30.handle.toLowerCase().split('.').join('');

        const _0x36ebfb = _0x37fc67.filter(_0x3ebdfc => _0x1290bc.indexOf(_0x3ebdfc.toLowerCase()) !== -1);

        const _0xf228c2 = _0x3fea6a.filter(_0xa04c70 => _0x1290bc.indexOf(_0xa04c70.toLowerCase()) !== -1);

        return _0x36ebfb.length == _0x37fc67.length && _0xf228c2.length == 0;
      });

      return _0x564576 ? {
        'productName': "SNKR Akamai Gen",
        'variants': _0x564576.variants,
        'imgLink': _0x564576.images[0].src,
        'handle': _0x564576.handle
      } : null;
    } catch (err) {
      return console.log(err.message), null;
    }
  };

  const _0x5e11ea = async function (_0x32985d, _0x12bf5c) {
    const _0x3564b4 = _0x8044f7;

    try {
      let _0x26e542 = await _0x525073.bind(this)(_0x3acd29, ![]);

      console.log(_0x26e542.statusCode);
      let _0x2d25d9 = _0x26e542.body;

      if (_0x26e542.statusCode != 200 || _0x2d25d9 && _0x2d25d9.includes("404 Not Found")) {
        return null;
      }

      let _0x3bb1bb = null;

      try {
        let _0x127263 = _0x3066df.load(_0x2d25d9, arg_2912);

        if (_0x127263("form[action*='/cart/add']").serializeArray().length > 0 && _0x2d25d9.includes("/cart/add")) {
          _0x4d17f5.hasQuestion = _0x127263("input[name*=\"properties\"][type=\"text\"]:not([type=\"hidden\"])").attr("name") || _0x2d25d9.includes("_hkey") || _0x127263("form[action*='/cart/add'] input[name*='properties']input[name*='answer']").attr("name");

          _0x127263("form[action*='/cart/add']").serializeArray().filter(_0x2f39a0 => _0x2f39a0.name.includes("properties") && !_0x2f39a0.name.toLowerCase().includes("size")).map(_0x1eee95 => {
            const _0x67cdd8 = _0x3564b4;
            let _0x20455d = /properties\[(.*)\]/.exec(_0x1eee95.name)[1];
            return _0x37ed39.name = _0x20455d, _0x37ed39.value = _0x1eee95.value, _0x37ed39;
          }).forEach(_0x2050ce => {
            const _0x2a4921 = _0x3564b4;
            _0x4d17f5.properties[_0x2050ce[_0x5b1076.tZoGA]] = _0x2050ce.value;
          });
        } else {
          if (!_0x2d25d9.includes("/cart/add")) {
            _0x4d17f5.hasQuestion = !![];
          }
        }
      } catch (err) {
      }

      if (_0x32985d.includes("eflash.doverstreetmarket.com") || _0x32985d.includes("eflash-us.doverstreetmarket.com")) {
        if (_0x32985d.includes("-us")) {
          var arg_2917 = _0x2d25d9.indexOf("val(", _0x169a59);

          var arg_2918 = _0x2d25d9.indexOf(')', _0x5707a1);

          let _0x169a59 = _0x2d25d9.indexOf("atob");

          let _0x5707a1 = arg_2917 + 5;

          let _0xd30717 = arg_2918 - 1;

          _0x3bb1bb = _0x2d25d9.substring(_0x5707a1, _0xd30717);
          _0x4d17f5.properties._HASH = _0x3bb1bb;
        } else {
          const _0x4ff219 = /cdn.shopify.com\/(.*)custom.js\?/.exec(_0x2d25d9)[0];
          _0x3bb1bb = await _0x31a74a.bind(this)(_0x4ff219);
          _0x4d17f5.properties._hash = _0x3bb1bb;
        }
      }

      return console.log(_0x4d17f5), _0x4d17f5;
    } catch (err) {
      return console.log(err), null;
    }
  };

  const _0x31a74a = async function (_0x739cfb) {
    const _0x5569a8 = _0x8044f7;

    let _0x2691e6 = await _0x525073.bind(this)(_0x4a29f1, ![]);

    const _0x34b3f0 = _0x2691e6.body;
    return /value="(.*)" name="properties\[_hash\]/.exec(_0x34b3f0)[1];
  };

  const _0xf98ed = async function (_0x258777) {
    const _0x43a796 = _0x8044f7;

    try {
      let _0x1b9bf2 = await _0x525073.bind(this)(_0x4472f8, ![]);

      if (_0x1b9bf2.statusCode == 200 && (_0x1b9bf2.body.includes("hcaptcha") || _0x1b9bf2.body.includes("The `content_checkpoint` tag has to exist somewhere in this template"))) {
        return !![];
      }

      return null;
    } catch (err) {
      return console.log("monitor checkpoint ", err.message), null;
    }
  };

  const _0x3feb4f = () => {
    const _0x4552d6 = _0x8044f7;
    var _0x8cce43 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var _0x5a3646 = '';
    var _0x5174d5 = 0;
    ;

    for (; _0x5174d5 < 32; _0x5174d5++) {
      _0x5a3646 += _0x8cce43[Math.floor(Math.random() * _0x8cce43.length)];
    }

    return _0x5a3646;
  };

  const _0x458d54 = (_0x107933, _0x448b8c) => {
    const _0xf2c239 = _0x8044f7;

    var arg_2921 = (_0x493f02, _0x2884ea) => {
      const _0x22adc0 = _0xf2c239;

      let _0xefa34b = setTimeout(() => {
        const _0x4f0857 = _0x22adc0;
        clearTimeout(_0xefa34b);

        if (_0x448b8c.abort) {
          _0x448b8c.abort();
        }

        var arg_2923 = _0x3cd115.ODKLn + _0x107933;
        var arg_2922 = arg_2923 + _0x3cd115.yyNij;

        _0x2884ea(arg_2922);
      }, _0x107933);
    };

    let _0xe47beb = new Promise(arg_2921);

    return Promise.race([_0x448b8c, _0xe47beb]);
  };

  const _0x36ce5a = async (_0x2354ae, _0xc441bc, _0x16e4e4) => {
    const _0x30c122 = _0x8044f7;

    try {
      let _0x418386 = null;
      var arg_2925 = _0x16e4e4 % 2;

      if (arg_2925 == 0) {
        _0x418386 = "https://www.yeezysupply.com/api/products/" + _0x2354ae;
      } else {
        _0x418386 = "https://www.yeezysupply.com/hpl/content/yeezy-supply/releases/" + _0x2354ae + "/shared.json";
      }

      if (_0xc441bc) {
        _0x4b583f.proxy = _0xc441bc;
      }

      const _0xd059bd = await _0x458d54(10000, _0x1c3c2d(_0x4b583f));

      if (_0xd059bd.body.includes("Forbidden")) {
        return null;
      }

      const _0x173bce = JSON.parse(_0xd059bd.body);

      return {
        'imgLink': _0x16e4e4 % 2 == 0 ? _0x173bce.view_list ? _0x173bce.view_list[0].image_url : '' : _0x173bce.imageUrls ? _0x173bce.imageUrls[0] : '',
        'productName': _0x16e4e4 % 2 == 0 ? _0x173bce.name : _0x173bce.trackingName,
        'sku': _0x2354ae
      };
    } catch (err) {
      return console.log(err.message), null;
    }
  };

  const _0x33d111 = async function (_0x45843b, _0x401b96, _0x3ba2cf) {
    const _0x4e1bd9 = _0x8044f7;

    try {
      if (_0x401b96) {
        _0x27b6d4.proxy = _0x401b96;
      }

      var _0x50c356 = await _0x525073.bind(this)(_0x27b6d4, ![]);

      var _0x3a30c2 = _0x50c356.statusCode;
      console.log("statusCode", _0x3a30c2);

      if (_0x3a30c2 == 200) {
        let _0x103c36 = _0x3066df.load(_0x50c356.body, arg_2928);

        var _0x447644;

        var _0x24b648;

        if (_0x3ba2cf) {
          _0x447644 = _0x3ba2cf.id;
          let _0xa029b1 = _0x3ba2cf.title;
          _0x24b648 = _0xa029b1.split('-').slice(-2)[0] + '-' + _0xa029b1.split('-').slice(-1)[0];
        } else {
          _0x447644 = _0x103c36("meta[name=\"branch:deeplink:productId\"]").attr("content");
          _0x24b648 = _0x103c36("meta[name=\"branch:deeplink:styleColor\"]").attr("content");
        }

        var _0x332c25 = _0x103c36("meta[name=\"twitter:image\"]").attr("content");

        var arg_2929 = _0x103c36("meta[name=\"twitter:image\"]").attr("content");

        console.log(arg_2929);
        console.log(_0x447644);
        console.log(_0x24b648);
      } else {
        return null;
      }

      var arg_2926 = "https://api.nike.com/launch/launch_views/v2/?filter=productId(" + _0x447644 + ')';
      console.log(arg_2926);
      _0x27b6d4 = {
        'method': "GET",
        'uri': "https://api.nike.com/launch/launch_views/v2/?filter=productId(" + _0x447644 + ')',
        'headers': {
          'accept': "*/*",
          'accept-encoding': "gzip, deflate, br",
          'accept-language': "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6",
          'cache-control': "max-age=0",
          'upgrade-insecure-requests': '1',
          'user-agent': _0x310223(_0x2b33c7.SNKRS)
        },
        'timeout': _0x50eed5.SNKRS,
        'resolveWithFullResponse': !![],
        'followAllRedirects': !![]
      };
      _0x50c356 = await _0x525073.bind(this)(_0x27b6d4, ![]);
      _0x3a30c2 = _0x50c356.statusCode;

      if (_0x3a30c2 == 200) {
        const _0x5c5437 = "2|5|0|1|3|4".split('|');

        let _0x7ec48c = 0;

        var _0x46d660 = JSON.parse(_0x50c356.body);

        console.log(_0x46d660.objects[0].startEntryDate);

        var _0x4b3cf5 = new Date(_0x46d660.objects[0].startEntryDate).getTime();

        var _0x1ff512 = new Date(_0x46d660.objects[0].stopEntryDate).getTime();

        var _0x12b54d = _0x46d660.objects[0].method;
        var _0x3bbac8 = _0x46d660.objects[0].id;
      } else {
        return null;
      }

      return console.log({
        'productId': _0x447644,
        'styleColor': _0x24b648,
        'launchDate': _0x4b3cf5,
        'imgLink': _0x332c25,
        'productName': _0x24b648,
        'method': _0x12b54d,
        'stopEntryDate': _0x1ff512,
        'launchId': _0x3bbac8
      }), {
        'productId': _0x447644,
        'styleColor': _0x24b648,
        'launchDate': _0x4b3cf5,
        'imgLink': _0x332c25,
        'productName': _0x24b648,
        'method': _0x12b54d,
        'stopEntryDate': _0x1ff512,
        'launchId': _0x3bbac8
      };
    } catch (err) {
      return console.log(err.message), null;
    }
  };

  const _0x44ddef = async function (_0x115a17, _0x546e2d) {
    const _0x3093c6 = _0x8044f7;

    try {
      let _0x1bcd50 = "https://api.nike.com/product_feed/threads/v2/?filter=marketplace%28US%29&filter=language%28en%29&filter=channelId%28008be467-6c78-4079-94f0-70e2d6cc4003,%20010794e5-35fe-4e32-aaff-cd2c74f89d61,%20d9a5bc42-4b9c-4976-858a-f159cf99c647,%208fac54d0-ed4f-4cf5-b829-e04d3d6008f8%29&filter=publishedContent.properties.products.styleColor%28" + _0x115a17 + "%29&filter=exclusiveAccess%28true,false%29";

      if (_0x546e2d) {
        _0x14175d.proxy = _0x546e2d;
      }

      let _0x490ebe = await _0x525073.bind(this)(_0x14175d, ![]);

      let _0x1105b9 = _0x490ebe.body;
      let _0x2fd952 = _0x490ebe.statusCode;
      console.log("getNikeProductInfo statusCode", _0x2fd952);

      if (_0x2fd952 == 200) {
        let _0x4edaed = JSON.parse(_0x1105b9);

        let _0x3f6b60 = [];

        let _0x2af924 = ![];

        let _0x55448b = '';
        let _0x3421af = '';
        let _0x290c03 = '';
        let _0x331a04 = '';

        for (let _0x5e6a1d in _0x4edaed.objects) {
          let _0xcdc58b = _0x4edaed.objects[_0x5e6a1d];

          for (let _0x2bc708 of _0xcdc58b.productInfo) {
            if (_0x2bc708.merchProduct.styleColor == _0x115a17 && (_0x2bc708.merchProduct.status == "ACTIVE" || _0x2bc708.merchProduct.status == "CLOSEOUT")) {
              if ("skus" in _0x2bc708) {
                for (let _0x6afa6 of _0x2bc708.skus) {
                  _0x5d8a8c[_0x6afa6.id] = _0x6afa6.countrySpecifications[0].localizedSize;
                }
              }

              if ("availableSkus" in _0x2bc708) {
                for (let _0x5cbb9a of _0x2bc708.availableSkus) {
                  if (_0x5cbb9a.available) {
                    _0x3f6b60.push(_0x5d8a8c[_0x5cbb9a.id]);
                  }
                }
              }

              if ("imageUrls" in _0x2bc708) {
                _0x55448b = _0x2bc708.imageUrls.productImageUrl;
              }

              _0x3421af = _0x2bc708.productContent.title;
              _0x290c03 = _0x2bc708.merchProduct.id;
              _0x331a04 = _0x2bc708.productContent.slug;
              _0x2af924 = !![];
              break;
            }
          }

          if (_0x2af924) {
            return {
              'shoesize': _0x3f6b60,
              'skuidandsize': _0x5d8a8c,
              'imgLink': _0x55448b,
              'productName': _0x3421af,
              'productId': _0x290c03,
              'slug': _0x331a04
            };
          }
        }
      } else {
        return null;
      }

      return null;
    } catch (err) {
      return console.log(err), null;
    }
  };

  const _0x3d23dc = new _0x5860df();

  const {
    session: _0x2b0ca3,
    BrowserWindow: _0xfe42fe
  } = _0x5b1a41;

  class _0x8c25cb {
    constructor(_0x3815f9, _0x4c9d78, _0x30351c) {
      const _0x356f0c = _0x8044f7;
      this.release = _0x4c9d78;
      this.groupId = _0x3815f9;

      if (_0x4c9d78.selectedProxyId == "localhost") {
        this.proxyList = [''];
      } else {
        this.proxyList = _0x3d23dc.get("testproxy")[_0x4c9d78.selectedProxyId].proxyList.split('\x0a');
      }

      this.imgLink = null;
      this.started = ![];
      this.tasks = {};
      this.productInfo = null;
      this.schedulaleEvent = null;
      this.sender = _0x30351c;
      this.proxyIndex = 0;
      this.sessionName = "group-monitor-" + _0x3815f9;
      this.proxyUsername = '';
      this.proxyPassword = '';
      this.proxyHost = null;
      this.cookieJar = null;
      this.questionBrowser = null;
      this.properties = null;
      this.browserLimit = null;
      this.threeDProxyList = null;
    }

    removeAllListener() {
    }

    createAllTasksFromRelease() {
      const _0x447896 = _0x8044f7;

      if (this.release.selected3DProxyId && this.release.selected3DProxyId != "taskProxy" && this.release.selected3DProxyId != "localhost") {
        this.threeDProxyList = _0x3d23dc.get("testproxy")[this.release.selected3DProxyId].proxyList.split('\x0a');
      }

      let _0xe2a597 = _0x3d23dc.get("profile");

      let _0x2fe22b = this.release.tasks;
      let {
        ["tasks"]: _0x16361b,
        ..._0x22b98e
      } = this.release;
      this.browserLimit = this.release.browserLimit == '' ? 5 : this.release.browserLimit;
      global.snkrsBrowser = this.browserLimit;
      var _0x26b154 = null;

      if ("selectedSnkrProductCode" in this.release) {
        _0x26b154 = this.release.selectedSnkrProductCode;
      }

      _0x2fe22b.forEach((_0x49164e, _0x28258a) => {
        const _0x11f21a = _0x447896;
        this.tasks[_0x49164e.id] = new _0x324ecb(arg_2933);
      });
    }

    async clearSessionCookie() {
      const _0x99e404 = _0x8044f7;

      try {
        let _0x24b04a = await this.session.cookies.get({});

        for (let _0x2a6be8 of _0x24b04a) {
          await this.session.cookies.remove(_0x2a6be8.url || "https://" + _0x2a6be8.domain || this.release.url, _0x2a6be8.name);
        }

        await this.session.clearAuthCache();
        await this.session.clearStorageData([]);
        await this.session.clearCache();
      } catch (err) {
        console.log(err);
      }
    }

    async stopTasks() {
      const _0x35644b = _0x8044f7;
      delete global[this.groupId];
      this.schedulaleEvent = null;
      this.started = ![];
      this.productInfo = null;
      this.imgLink = null;
      this.proxyIndex = 0;

      let _0x294470 = Object.keys(this.tasks);

      _0x294470.forEach(_0x42c1f7 => {
        const _0x25f7b7 = _0x35644b;

        this.tasks[_0x42c1f7].stopRunner();
      });

      try {
        const _0x5f2ff9 = "1|0|2|3|4".split('|');

        let _0x2603bd = 0;
        await this.session.clearStorageData([]);
        await this.session.clearCache(() => {
        });
        this.properties = null;
        this.tasks = {};

        if (this.questionBrowser) {
          this.questionBrowser.close();
        }
      } catch (err) {
      }
    }

    initSession() {
      const _0x1248e7 = _0x8044f7;
      this.cookieJar = require("request-promise").jar();
      var arg_2935 = '' + this.sessionName;
      this.session = _0x2b0ca3.fromPartition(arg_2935);
    }

    async startTasks(_0x2c4c65) {
      const _0x3c3334 = _0x8044f7;

      if (this.release.type == _0x23da2b.SNKRS && !global.localChromeUA) {
        await _0x15522b();
      }

      this.started = !![];
      this.properties = null;
      this.initSession();
      this.editTaskGroup(_0x2c4c65);
      await this.rotateProxy();
      this.createAllTasksFromRelease();
      const _0x491064 = this.tasks;

      const _0x29d472 = Object.keys(this.tasks);

      _0x29d472.forEach(_0x55492a => {
        const _0x957d01 = _0x3c3334;

        _0x491064[_0x55492a].startRunner();
      });

      this.startMonitor();
    }

    editTaskGroup(_0x5dda5d) {
      const _0x4e5a01 = _0x8044f7;
      this.release = _0x5dda5d;
      var arg_2936 = global.snkrsBrowser + this.release.browserLimit;
      global.snkrsBrowser = arg_2936 - this.browserLimit;
      this.browserLimit = this.release.browserLimit;

      if (_0x5dda5d.selectedProxyId == "localhost") {
        this.proxyList = [''];
      } else {
        this.proxyList = _0x3d23dc.get("testproxy")[_0x5dda5d.selectedProxyId].proxyList.split('\x0a');
      }

      this.editTasks();
    }

    async startMonitor() {
      const _0x373d7f = _0x8044f7;

      let _0x209318 = !![];

      let _0x22a887 = Object.keys(this.tasks);

      if (this.release.type == _0x23da2b.FOOTSITE || this.release.type == _0x23da2b.FINISHLINE) {
        _0x22a887.forEach(_0x2307b7 => {
          const _0x2d2546 = _0x373d7f;

          this.tasks[_0x2307b7].productFound();
        });

        let _0x4780f5 = ![];

        while (!_0x4780f5 && this.started) {
          for (let _0x1e1a15 of _0x22a887) {
            let _0xd182d4 = this.tasks[_0x1e1a15].isProductFound();

            if (_0xd182d4) {
              _0x4780f5 = !![];
              this.sender.send("productFound", arg_2938);
              return;
            }
          }

          await _0x45a98b(parseInt(this.release.monitorDelay));
        }

        return;
      }

      let _0xba7c91 = 0;

      while ((!this.productInfo || this.productInfo.variants && this.productInfo.variants.length == 0) && this.started) {
        _0xba7c91++;

        let _0x5e76ee = await this.rotateProxy();

        if (!_0x209318) {
          await _0x45a98b(parseInt(this.release.monitorDelay));
        }

        _0x209318 = ![];

        switch (this.release.type) {
          case _0x23da2b.SHOPIFY:
            this.productInfo = await _0x47c876.bind(this)(this.release.url, this.release.selectedSearchMethod, this.release.searchContent, _0x5e76ee);
            break;

          case _0x23da2b.YEEZYSUPPLY:
            this.productInfo = await _0x36ce5a(this.release.searchContent.endsWith('/') ? this.release.searchContent.slice(0, -1).split('/').pop() : this.release.searchContent.split('/').pop(), _0x5e76ee, _0xba7c91);
            break;

          case _0x23da2b.SNKRS:
            this.productInfo = await _0x33d111.bind(this)(this.release.searchContent.trim(), _0x5e76ee, this.release.selectedSnkrProductCode);
            break;

          case _0x23da2b.NIKE:
            this.productInfo = await _0x44ddef.bind(this)(this.release.searchContent.trim(), _0x5e76ee);
            break;
        }

        this.proxyIndex += 1;
      }

      if (this.started) {
        this.sender.send("productFound", arg_2939);

        _0x22a887.forEach(_0x2dde67 => {
          const _0x248640 = _0x373d7f;

          this.tasks[_0x2dde67].productFound(this.productInfo);
        });
      }

      return;
    }

    async getPageAnswer() {
      const _0x451988 = _0x8044f7;
      this.questionBrowser = new _0xfe42fe(arg_2943);
      this.questionBrowser.setMenu(null);
      this.questionBrowser.once("closed", () => {
        const _0x3f3f97 = _0x451988;
        this.questionBrowser = null;
      });
      this.questionBrowser.show();
      let _0x45a1ea = null;

      if (this.productInfo.handle.includes("http")) {
        _0x45a1ea = this.productInfo.handle;
      } else {
        _0x45a1ea = this.release.url + "/products/" + this.productInfo.handle;
      }

      this.questionBrowser.webContents.on("did-finish-load", async () => {
        const _0x7d6c5f = _0x451988;
        var arg_2945 = "\n\t\t\ttry {\n\t\t\t\tlet properties = {};\n\t\t\t\t$('button').attr('disabled', false);\n\t\t\t\t//$('input').attr('disabled', false);\n\t\t\t\t// let realForm = $(\"form[action*='/cart/add']\").toArray().filter(each => each.offsetHeight > 0)[0];\n\t\t\t\t// realForm.scrollIntoView(false);\n\n\t\t\t\t// $('form[action*=\"/cart/add\"] :submit').click(e => {\n\t\t\t\t// \te.preventDefault();\n\t\t\t\t\t\n\t\t\t\t// \t$(realForm).serializeArray().filter(each => each.name.includes('properties') && !each.name.toLowerCase().includes('size')).map(each => {\n\t\t\t\t// \t\tlet name = /properties\\[(.*)\\]/.exec(each.name)[1];\n\t\t\t\t// \t\tlet obj = {}\n\t\t\t\t// \t\tobj['name'] = name;\n\t\t\t\t// \t\tobj['value'] = each.value;\n\t\t\t\t// \t\treturn obj;\n\t\t\t\t// \t}).forEach(each => {\n\t\t\t\t// \t\tproperties[each['name']] = each.value;\n\t\t\t\t// \t})\n\t\n\t\t\t\t// \twindow.ipcRenderer.send('sendAnswer', {\n\t\t\t\t// \t\tanswer: JSON.stringify(properties),\n\t\t\t\t// \t\tgroupId: '" + this.groupId + "',\n\t\t\t\t// \t\tsiteOrigin: '" + this.release[_0x16978e.CkvbA] + "'\n\t\t\t\t// \t}); \n\t\t\t\t// })\n\t\t\t} catch(e){\n\t\t\t\tconsole.log(e)\n\t\t\t}\n\t\t\t";
        this.questionBrowser.webContents.executeJavaScript(arg_2945);
      });
      this.session.webRequest.onBeforeRequest((_0x2bba9e, _0x5a8bd5) => {
        const _0x468984 = _0x451988;

        if (_0x2bba9e.url.includes("/cart/add")) {
          if (_0x2bba9e.method == "GET") {
            this.properties = _0x2bba9e.url.split('?')[1];
          } else {
            this.properties = Buffer.from(_0x2bba9e.uploadData[0].bytes).toString();

            if (this.properties.includes("WebKitFormBoundary")) {
              try {
                let _0x5bb168 = this.properties.replace(/[\r]/g, '').split('\x0a-').filter(_0x106589 => _0x106589.includes("name=")).map(_0x440308 => {
                  const _0x385bdb = _0x468984;
                  let _0x11d599 = /name="(.*)"/.exec(_0x440308)[1];

                  let _0x396085 = _0x440308.split('\x0a\x0a')[1];

                  return _0x11d599 + '=' + _0x396085;
                });

                this.properties = _0x5bb168.join('&');
              } catch (err) {
                console.log(err);
              }
            }
          }

          console.log(this.properties);
          this.questionBrowser.close();

          _0x5a8bd5(arg_2947);
        } else {
          _0x5a8bd5(arg_2950);
        }
      });
      await this.questionBrowser.loadURL(_0x45a1ea);
    }

    sendAnswer(_0x4fb6b4) {
      const _0x18c71f = _0x8044f7;
      this.questionBrowser.close();
      this.properties = _0x4fb6b4;
    }

    async getCartFormInfo() {
      const _0x33f4f6 = _0x8044f7;

      let _0x2c46a2 = await this.rotateProxy();

      let _0x6c8ebc = null;

      let _0x53de72 = await _0x5e11ea.bind(this)(this.release.url, _0x6c8ebc, _0x2c46a2);

      if (this.productInfo.handle.includes("http")) {
        _0x6c8ebc = this.productInfo.handle;
      } else {
        _0x6c8ebc = this.release.url + "/products/" + this.productInfo.handle;
      }

      while (_0x53de72 == null && this.started) {
        _0x2c46a2 = await this.rotateProxy();
        await _0x45a98b(1000);
        _0x53de72 = await _0x5e11ea.bind(this)(this.release.url, _0x6c8ebc, _0x2c46a2);
      }

      return _0x53de72;
    }

    async startMonitorCheckpoint() {
      const _0x5f3770 = _0x8044f7;

      let _0xc9a9d5 = await _0xf98ed.bind(this)(this.release.url);

      while (_0xc9a9d5 == null && this.started) {
        await _0x45a98b(parseInt(this.release.monitorDelay));
        _0xc9a9d5 = await _0xf98ed.bind(this)(this.release.url);
      }

      if (this.started) {
        let _0x272558 = Object.keys(this.tasks);

        _0x272558.forEach(_0x696e84 => {
          const _0xe187e8 = _0x5f3770;

          this.tasks[_0x696e84].checkpointFound();
        });
      }
    }

    formatProxy(_0x338996) {
      const _0x106425 = _0x8044f7;

      if (_0x338996 != '') {
        let _0xdf7b14 = _0x338996.split(':');

        return _0xdf7b14.length < 4 ? "http://" + _0xdf7b14[0] + ':' + _0xdf7b14[1] : "http://" + _0xdf7b14[2] + ':' + _0xdf7b14[3] + '@' + _0xdf7b14[0] + ':' + _0xdf7b14[1];
      }

      return null;
    }

    async rotateProxy() {
      const _0x246037 = _0x8044f7;

      let _0x555567 = this.proxyList[this.proxyIndex % this.proxyList.length].trim();

      let _0x4c09c7 = null;

      if (_0x555567 && _0x555567.split(':').length > 1) {
        _0x4c09c7 = _0x555567.split(':')[0] + ':' + _0x555567.split(':')[1];
      } else {
        _0x4c09c7 = '';
      }

      return this.proxyHost = _0x4c09c7, this.proxyUsername = _0x555567 && _0x555567.split(':')[2] ? _0x555567.split(':')[2] : '', this.proxyPassword = _0x555567 && _0x555567.split(':')[3] ? _0x555567.split(':')[3] : '', await this.session.setProxy({
        'proxyRules': _0x4c09c7
      }), this.formatProxy(_0x555567);
    }

    editTasks() {
      const _0x47bdb9 = _0x8044f7;
      let _0xe4d323 = this.release.tasks;
      let {
        ["tasks"]: _0xc81ed1,
        ..._0x313045
      } = this.release;

      _0xe4d323.forEach((_0x57b892, _0x19d595) => {
        const _0x232a04 = _0x47bdb9;

        if (this.tasks[_0x57b892.id]) {
          this.tasks[_0x57b892.id].editTask(this.release[_0x362041.vPBqO], _0x57b892[_0x362041.pgCBd]);
        }
      });
    }

    startSingleTask(_0x20b018) {
      const _0x24d227 = _0x8044f7;
      let _0x363cae = this.release.tasks;

      _0x363cae.forEach(_0x2ad1bf => {
        const _0x48c2e7 = _0x24d227;

        if (_0x2ad1bf.id == _0x20b018) {
          let _0x5d0672 = null;

          if (this.productInfo) {
            var arg_2954 = JSON.stringify(this.productInfo);
            _0x5d0672 = JSON.parse(arg_2954);
          } else {
            _0x5d0672 = null;
          }

          if (this.release.type == _0x23da2b.FOOTSITE || this.release.type == _0x23da2b.FINISHLINE || this.release.type == _0x23da2b.YEEZYSUPPLY) {
            _0x5d0672 = !![];
          }

          this.tasks[_0x2ad1bf.id].startRunner(_0x5d0672);
        }
      });
    }

    stopSingleTask(_0x4c18d8) {
      const _0x3e7f8e = _0x8044f7;
      let _0x14eca6 = this.release.tasks;
      console.log("stopSIngleTask");

      _0x14eca6.forEach(_0xcd3f70 => {
        const _0x4a6bc5 = _0x3e7f8e;

        if (_0xcd3f70.id == _0x4c18d8) {
          this.tasks[_0xcd3f70.id].stopRunner();
        }
      });
    }

    removeSingleTask(_0x3b8634) {
      const _0x2539c7 = _0x8044f7;
      let _0x1fdf54 = this.release.tasks;

      _0x1fdf54.forEach(_0x155e73 => {
        const _0x1fe690 = _0x2539c7;

        if (_0x155e73.id == _0x3b8634) {
          this.tasks[_0x3b8634].stopRunner();
        }
      });

      delete this.tasks[_0x3b8634];
    }

    exportChromeTask(_0x32ebb5) {
      const _0x1aa2c1 = _0x8044f7;

      this.tasks[_0x32ebb5].exportChrome();
    }

  }

  var arg_10 = (_0x5b1a41.app || _0x5b1a41.remote.app).getPath("userData");

  const _0x218700 = arg_10 + "/taskLogs";

  class _0x2c0cdc {
    constructor() {
      const _0x424190 = _0x8044f7;
      this.taskGroups = {};
    }

    addTaskGroup(_0x187695, _0x37a47a, _0x40a856, _0x484266) {
      const _0x2efe60 = _0x8044f7;

      if (this.taskGroups[_0x187695] == null) {
        this.taskGroups[_0x187695] = {};
      }

      this.taskGroups[_0x187695][_0x37a47a] = new _0x8c25cb(_0x37a47a, _0x40a856, _0x484266);
      var arg_2959 = _0x40a856.releaseName + '-';
      var arg_2958 = arg_2959 + _0x37a47a;
      this.addGroupLogFolder(_0x40a856.siteName, arg_2958);
    }

    answerQuestion(_0x2bd73c) {
      const _0x5693af = _0x8044f7;
      let {
        groupId: _0x4f5e29,
        siteOrigin: _0x820c68,
        atcPayload: _0x1b5d36
      } = _0x2bd73c;

      this.taskGroups[_0x820c68][_0x4f5e29].sendAnswer(_0x1b5d36);
    }

    addGroupLogFolder(_0xcd09db, _0x13a4ed) {
      const _0x24d482 = _0x8044f7;

      try {
        let _0x36469d = _0x218700 + '/' + _0xcd09db;

        if (!_0xd3e51f.existsSync(_0x36469d)) {
          _0xd3e51f.mkdirSync(_0x36469d);
        }

        var arg_2960 = _0x36469d + '/' + _0x13a4ed;

        _0xd3e51f.mkdirSync(arg_2960);
      } catch (err) {
      }
    }

    removeGroupLogFolder(_0x5c1fa1, _0x48d0a9) {
      const _0x387b50 = _0x8044f7;

      try {
        let _0x539c8f = _0x218700 + '/' + _0x5c1fa1 + '/' + _0x48d0a9;

        if (_0xd3e51f.existsSync(_0x539c8f)) {
          _0xef59c6(_0x539c8f);
        }
      } catch (err) {
      }
    }

    removeTaskGroup(_0x1f99ec, _0x48f6fe, _0x3fc0b3, _0x3a5065) {
      const _0x2d9047 = _0x8044f7;
      var arg_2966 = _0x3a5065 + '-';
      var arg_2965 = arg_2966 + _0x1f99ec;
      this.removeGroupLogFolder(_0x3fc0b3, arg_2965);

      if (this.taskGroups[_0x48f6fe] && this.taskGroups[_0x48f6fe][_0x1f99ec]) {
        if (this.taskGroups[_0x48f6fe][_0x1f99ec].started) {
          this.taskGroups[_0x48f6fe][_0x1f99ec].stopTasks();
        }

        delete this.taskGroups[_0x48f6fe][_0x1f99ec];
      }
    }

    editTaskGroup(_0x42fda2, _0x3ed076) {
      const _0x2528a8 = _0x8044f7;
      let _0x18d0d6 = _0x3ed076.url;

      if (this.taskGroups[_0x18d0d6] != null && this.taskGroups[_0x18d0d6][_0x42fda2] != null && this.taskGroups[_0x18d0d6][_0x42fda2].started) {
        this.taskGroups[_0x18d0d6][_0x42fda2].editTaskGroup(_0x3ed076);
      }
    }

    startAllTasks(_0x552a7d, _0x3013d2, _0x2fffb1) {
      const _0x46325a = _0x8044f7;
      let _0x5372ad = _0x3013d2.url;

      if (this.taskGroups[_0x5372ad] == null || this.taskGroups[_0x5372ad][_0x552a7d] == null) {
        this.addTaskGroup(_0x5372ad, _0x552a7d, _0x3013d2, _0x2fffb1);
      }

      this.taskGroups[_0x5372ad][_0x552a7d].startTasks(_0x3013d2);
    }

    stopAllTasks(_0x32e3d5, _0x4a1094) {
      const _0xcfd159 = _0x8044f7;
      let _0x1d2742 = _0x4a1094.url;

      this.taskGroups[_0x1d2742][_0x32e3d5].stopTasks();

      this.taskGroups[_0x1d2742][_0x32e3d5].started = ![];

      this.taskGroups[_0x1d2742][_0x32e3d5].removeAllListener();
    }

    startSingleTask(_0x1c1d86, _0x137f05, _0x58e558) {
      const _0x560e20 = _0x8044f7;
      let _0x4e9e32 = _0x137f05.url;

      if (this.taskGroups[_0x4e9e32] != null && this.taskGroups[_0x4e9e32][_0x1c1d86] != null && this.taskGroups[_0x4e9e32][_0x1c1d86].started) {
        this.taskGroups[_0x4e9e32][_0x1c1d86].startSingleTask(_0x58e558);
      }
    }

    stopSingleTask(_0x43ce78, _0x18b03f, _0x227f58) {
      const _0x41ae6a = _0x8044f7;
      let _0x21e89c = _0x18b03f.url;

      if (this.taskGroups[_0x21e89c] != null && this.taskGroups[_0x21e89c][_0x43ce78] != null && this.taskGroups[_0x21e89c][_0x43ce78].started) {
        this.taskGroups[_0x21e89c][_0x43ce78].stopSingleTask(_0x227f58);
      }
    }

    removeSingleTask(_0x315402, _0x2357d5, _0x398e20) {
      const _0x1720a7 = _0x8044f7;

      if (this.taskGroups[_0x2357d5] != null && this.taskGroups[_0x2357d5][_0x315402] != null && this.taskGroups[_0x2357d5][_0x315402].started) {
        this.taskGroups[_0x2357d5][_0x315402].removeSingleTask(_0x398e20);
      }
    }

    exportChromeOneTask(_0x2d81c4, _0x39464c, _0x17c3e2) {
      const _0x3afec3 = _0x8044f7;
      console.log("export");
      console.log(_0x2d81c4, _0x39464c);
      console.log(_0x17c3e2);

      if (this.taskGroups[_0x17c3e2] != null && this.taskGroups[_0x17c3e2][_0x2d81c4] != null && this.taskGroups[_0x17c3e2][_0x2d81c4].started) {
        this.taskGroups[_0x17c3e2][_0x2d81c4].exportChromeTask(_0x39464c);
      }
    }

  }

  const _0x1051b2 = new _0x5860df();

  const _0x2c6383 = (_0xe7cc5d, _0x181620) => {
    const _0x3e8153 = _0x8044f7;
    console.log("load server task module");
    _0x181620.appInfo.taskManager = new _0x2c0cdc();

    _0xe7cc5d.on("startAllTask", (_0x2292ea, _0x52e4fc) => {
      const _0x2bfa31 = _0x3e8153;
      var arg_2978 = JSON.stringify(_0x52e4fc);
      const {
        groupId: _0x10ff52
      } = JSON.parse(arg_2978);

      let _0x326383 = _0x1051b2.get(_0x2aceb1.oovjA)[_0x10ff52];

      _0x181620.eventSender = _0x2292ea.sender;

      _0x181620[_0x2aceb1.WumtK][_0x2aceb1.lTwSx].startAllTasks(_0x10ff52, _0x326383, _0x2292ea.sender);
    });

    _0xe7cc5d.on("stopAllTask", (_0x4918a0, _0x145996) => {
      var arg_2979 = JSON.stringify(_0x145996);
      const _0x51a56d = _0x3e8153;
      const {
        groupId: _0x579e45
      } = JSON.parse(arg_2979);

      let _0x57a281 = _0x1051b2.get(_0x2aceb1.oovjA)[_0x579e45];

      _0x181620[_0x2aceb1.WumtK][_0x2aceb1.lTwSx].stopAllTasks(_0x579e45, _0x57a281);
    });

    _0xe7cc5d.on("removeRelease", (_0xc347ba, _0x483101) => {
      const _0x2128c9 = _0x3e8153;
      var arg_2981 = JSON.stringify(_0x483101);
      const {
        groupId: _0x226058,
        siteOrigin: _0x118d42,
        siteName: _0x1681c8,
        releaseName: _0x103c30
      } = JSON.parse(arg_2981);

      _0x181620[_0x2aceb1.WumtK][_0x2aceb1.lTwSx].removeTaskGroup(_0x226058, _0x118d42, _0x1681c8, _0x103c30);
    });

    _0xe7cc5d.on("editRelease", (_0x324516, _0x411593) => {
      const _0x5b5dae = _0x3e8153;
      var arg_2982 = JSON.stringify(_0x411593);
      const {
        groupId: _0x5290d5
      } = JSON.parse(arg_2982);

      let _0x3dc017 = _0x1051b2.get(_0x2aceb1.oovjA)[_0x5290d5];

      _0x181620[_0x2aceb1.WumtK][_0x2aceb1.lTwSx].editTaskGroup(_0x5290d5, _0x3dc017);
    });

    _0xe7cc5d.on("startSingleTask", (_0x1a5ba8, _0x35b5a1) => {
      var arg_2983 = JSON.stringify(_0x35b5a1);
      const _0x5213f7 = _0x3e8153;
      const {
        groupId: _0x37aa99,
        taskId: _0x5cb8c0
      } = JSON.parse(arg_2983);

      let _0x32a944 = _0x1051b2.get(_0x2aceb1.oovjA)[_0x37aa99];

      _0x181620[_0x2aceb1.WumtK][_0x2aceb1.lTwSx].startSingleTask(_0x37aa99, _0x32a944, _0x5cb8c0);
    });

    _0xe7cc5d.on("stopSingleTask", (_0x4d6d1d, _0x1c60c8) => {
      var arg_2984 = JSON.stringify(_0x1c60c8);
      const _0x2a0bbd = _0x3e8153;
      const {
        groupId: _0x56c9d1,
        taskId: _0x5cfb42
      } = JSON.parse(arg_2984);

      let _0x480a1e = _0x1051b2.get(_0x2aceb1.oovjA)[_0x56c9d1];

      _0x181620[_0x2aceb1.WumtK][_0x2aceb1.lTwSx].stopSingleTask(_0x56c9d1, _0x480a1e, _0x5cfb42);
    });

    _0xe7cc5d.on("removeSingleTask", (_0x1f3028, _0x412463) => {
      const _0x11e509 = _0x3e8153;
      var arg_2985 = JSON.stringify(_0x412463);
      const {
        groupId: _0x3077ab,
        siteOrigin: _0x3fcff9,
        taskId: _0x50fb7e
      } = JSON.parse(arg_2985);

      _0x181620[_0x2aceb1.WumtK][_0x2aceb1.lTwSx].removeSingleTask(_0x3077ab, _0x3fcff9, _0x50fb7e);
    });

    _0xe7cc5d.on("exportChrome", (_0x300345, _0x3162ea) => {
      var arg_2986 = JSON.stringify(_0x3162ea);
      const _0x3014e4 = _0x3e8153;
      const {
        groupId: _0x4dfa33,
        taskId: _0x47e5b0,
        siteOrigin: _0x5b5038
      } = JSON.parse(arg_2986);

      _0x181620.appInfo.taskManager.exportChromeOneTask(_0x4dfa33, _0x47e5b0, _0x5b5038);
    });

    _0xe7cc5d.on("sendAnswer", (_0x4967f1, _0x3a3abe) => {
      const _0x11d9fd = _0x3e8153;

      _0x181620[_0x2aceb1.WumtK][_0x2aceb1.lTwSx].answerQuestion(_0x3a3abe);
    });
  };

  const _0x308d06 = require("puppeteer-extra");

  const _0x35276d = require("puppeteer-extra-plugin-stealth")();

  const _0x5517ad = require("chrome-paths");

  _0x35276d.enabledEvasions["delete"]("chrome.runtime");

  _0x35276d.enabledEvasions["delete"]("webgl.vendor");

  const _0x42ef65 = async function () {
    const _0x42bf30 = _0x8044f7;

    if (!this.running) {
      return null;
    }

    try {
      let _0x38259d = await this.session.cookies.get({
        'url': "https://www.nike.com"
      });

      for (let _0x25db87 of _0x38259d) {
        await this.session.cookies.remove(_0x25db87.url || "https://www.nike.com", _0x25db87.name);
      }

      var arg_2990 = Math.random();
      var arg_2989 = arg_2990 * 300;
      var arg_2987 = Math.floor(arg_2989);
      var arg_2992 = Math.random();
      var arg_2991 = arg_2992 * 400;
      var arg_2988 = Math.floor(arg_2991);

      let _0x8220c0 = 800 + arg_2987;

      let _0x39baa1 = 600 + arg_2988;

      this.browser = new _0x2b80d5.BrowserWindow(arg_2993);
      this.browser.webContents.userAgent = this.user_agent;

      var arg_2994 = function (_0x3bdbfb) {
        const _0x14f4c0 = _0x42bf30;

        _0x3bdbfb.preventDefault();
      };

      this.browser.on("page-title-updated", arg_2994);
      this.browser.webContents.on("login", (_0x42f9ac, _0x2e9a63, _0x43cd02, _0x5d3673) => {
        const _0xd8fc41 = _0x42bf30;

        try {
          _0x42f9ac.preventDefault();

          if (_0x43cd02.isProxy) {
            var arg_2995 = this.proxyUsername || '';
            var arg_2996 = this.proxyPassword || '';

            _0x5d3673(arg_2995, arg_2996);
          }
        } catch (err) {
        }
      });
      this.session.webRequest.onBeforeRequest(async (_0x2c35bd, _0x19fd27) => {
        const _0xf9f6d9 = _0x42bf30;

        try {
          if (_0x2c35bd.url.includes(this.sensorURL)) {
            if (_0x2c35bd.method == _0x2b3678.fvnES && !_0x2c35bd.referrer.includes(_0x2b3678.FDajO)) {
              if (this.validCookie) {
                _0x19fd27(arg_2999);

                return;
              }

              let _0x395ada = Buffer.from(_0x2c35bd.uploadData[0][_0x2b3678.tvFdW]).toString();

              let _0x5a5a8d = await _0x3f1a56.bind(this)(_0x395ada, _0x2c35bd.referrer);

              _0x19fd27(arg_2998);

              if (!_0x5a5a8d[_0x2b3678.oZTrN].includes(_0x2b3678.pFogF) && !_0x5a5a8d[_0x2b3678.VMwjU].includes('||')) {
                let _0xbe91f9 = _0x5a5a8d[_0x2b3678.VMwjU];

                if (!_0x5d264a(this.abck, _0xbe91f9)) {
                  this.abck = _0xbe91f9;
                  this.validCookie = !![];
                  console.log(_0x5a5a8d);

                  if (!global.cookies[this.siteInfo[_0x2b3678.fRwYr]]) {
                    global.cookies[this.siteInfo[_0x2b3678.fRwYr]] = [];
                  }

                  global.cookies[this.siteInfo[_0x2b3678.fRwYr]].push(_0xbe91f9);

                  let _0x28d19 = await this.session.cookies.get({
                    'url': _0x2b3678.ZJfZi
                  });

                  for (let _0x5badb8 of _0x28d19) {
                    await this.session.cookies.remove(_0x5badb8.url || _0x2b3678.ZJfZi, _0x5badb8.name);
                  }

                  this.sensorTry = 0;
                  this.validCookie = ![];

                  let _0x1a50e2 = "https://www.nike.com/launch?" + _0x2bda7f() + '=' + _0x2bda7f();

                  this.browser.loadURL(_0x1a50e2);
                }
              } else {
                if (this.sensorTry == 20) {
                  this.needNewSession = !![];
                  return;
                } else {
                  if (this.sensorTry < 20) {
                    this.sensorTry += 1;
                    await _0x29633b.bind(this)();
                  }
                }
              }
            } else {
              _0x19fd27(arg_3004);
            }
          } else {
            if (_0x2c35bd.resourceType.includes(_0x2b3678.LMWVV) || _0x2c35bd.resourceType.includes(_0x2b3678.mWjcv) || _0x2c35bd.url.includes(_0x2b3678.GstvN) || _0x2c35bd.url.includes(_0x2b3678.DibxY) || _0x2c35bd.url.includes(_0x2b3678.VoKmW) || _0x2c35bd.url.includes(_0x2b3678.VWVIk) || _0x2c35bd.url.includes(_0x2b3678.MRszc)) {
              _0x19fd27(arg_3005);
            } else {
              _0x19fd27(arg_3008);
            }
          }
        } catch (err) {
        }
      });
      this.browser.once("closed", () => {
        const _0xc71cc7 = _0x42bf30;
        var arg_3009 = [];
        this.session.clearStorageData(arg_3009);
        this.session.clearCache(() => {
        });
      });
    } catch (err) {
      console.log(err);
    }
  };

  const _0x5d264a = (_0x18c2e6, _0x74eb7a) => {
    const _0x5e1f02 = _0x8044f7;

    try {
      if (!_0x18c2e6) {
        return ![];
      }

      return _0x18c2e6.split('~')[0] == _0x74eb7a.split('~')[0];
    } catch (err) {
      return console.log(err), ![];
    }
  };

  const _0x29633b = async function () {
    const _0x189605 = _0x8044f7;

    try {
      if (this.browser) {
        const _0x35b13b = _0x2b4694.path(_0x2c8ba0, _0x1b8222);

        for (let _0x152014 of _0x35b13b) {
          await _0x45a98b(Math.floor(Math.random() * 10 + 3));
          this.browser.webContents.sendInputEvent(arg_3011);
        }

        await _0x45a98b(100);
        let _0x1272a6 = ["mousedown", "mouseup"];

        for (let _0x4043fd of _0x1272a6) {
          await _0x45a98b(10);
          this.browser.webContents.sendInputEvent(arg_3012);
        }
      }
    } catch (err) {
    }
  };

  const _0x3f1a56 = async function (_0x5651f5, _0x48685a) {
    const _0x19ddc3 = _0x8044f7;

    if (!this.running) {
      return null;
    }

    try {
      let _0x5bf274 = await _0x525073.bind(this)(_0x3a0209);

      if (_0x5bf274.headers["set-cookie"]) {
        let _0x534ace = _0x5bf274.headers["set-cookie"].find(_0x5c26c3 => _0x5c26c3.includes("abck"));

        if (_0x534ace) {
          return {
            'cookie': _0x534ace.split(';')[0].split("abck=")[1],
            'body': _0x5bf274.body
          };
        }
      }

      return null;
    } catch (err) {
      return console.log(err), null;
    }
  };

  class _0x553c8f {
    constructor(_0x26a7c0, _0x5c3661, _0x38a58a) {
      const _0x381c55 = _0x8044f7;

      const _0x4238e1 = "12|8|2|6|19|5|14|7|9|0|10|18|17|13|4|11|16|15|20|3|1".split('|');

      let _0x48b194 = 0;
      this.id = "akamaiGen-" + _0x26a7c0 + '-' + _0x2bda7f();
      this.site = _0x26a7c0;
      this.proxyList = _0x5c3661 ? _0x5c3661.proxyList.split('\x0a') : null;
      this.proxyList = this.proxyList ? this.proxyList.sort(() => Math.random() - 0.5) : null;
      this.proxyIndex = 0;
      this.proxy = _0x5c3661 ? this.proxyList[this.proxyIndex] : null;
      this.siteInfo = _0x2dd9db[_0x26a7c0];
      this.running = !![];
      this.assetsid = null;
      this.postnum = 0;
      this.vaildcount = 0;
      this.sender = _0x38a58a.sender;
      this.page = null;
      this.browser = null;
      this.siteOrigin = this.siteInfo.siteURL.replace("/launch", '');
      this.sensorURL = _0x172aa3.CeQOI;
      this.needNewSession = ![];
      this.htmlBody = null;
      this.abck = null;
      this.puptBrowser = null;
      this.user_agent = _0x310223(_0x2b33c7.SNKRS);
    }

    async initSession() {
      const _0x5a8257 = _0x8044f7;
      var arg_3015 = '' + this.id;
      this.session = _0x2b80d5.session.fromPartition(arg_3015);
      await this.rotateProxy();
      this.ready = !![];
    }

    async stop() {
      const _0x586949 = _0x8044f7;
      this.running = ![];
      await this.session.clearStorageData([]);
      await this.session.clearCache(() => {
      });

      try {
        if (this.browser != null) {
          await this.browser.close();
          this.browser = null;
        }
      } catch (err) {
      }
    }

    async rotateProxy() {
      const _0x390aca = _0x8044f7;
      var arg_3018 = this.proxyList.length - 1;

      if (this.proxyIndex == arg_3018) {
        this.proxyIndex = 0;
      } else {
        this.proxyIndex = 1 + this.proxyIndex;
      }

      this.proxy = this.proxy ? this.proxyList[this.proxyIndex % this.proxyList.length] : null;
      this.proxyHost = this.proxy ? this.proxy.split(':')[0] + ':' + this.proxy.split(':')[1] : '';
      this.proxyUsername = this.proxy && this.proxy.split(':')[2] ? this.proxy.split(':')[2] : '';
      this.proxyPassword = this.proxy && this.proxy.split(':')[3] ? this.proxy.split(':')[3] : '';
      await this.session.setProxy({
        'proxyRules': this.proxyHost
      });
    }

    async start(_0x2db432 = ![]) {
      const _0x2a2d96 = _0x8044f7;
      await this.initSession();

      if (!this.running) {
        return null;
      }

      if (_0x2db432) {
        await this.initAkamai();
        await _0x42ef65.bind(this)();
        await this.startSnkrGen();
      } else {
        await this.startgenAkamaiCookie();
      }

      return await this.session.clearStorageData([]), await this.session.clearCache(() => {
      }), this.start(_0x2db432);
    }

    async startSnkrGen() {
      const _0x556660 = _0x8044f7;

      try {
        const _0x1c3690 = "0|6|5|2|3|7|8|4|1".split('|');

        let _0x541dbb = 0;

        if (!this.running) {
          return null;
        }

        this.sensorTry = 0;
        this.needNewSession = ![];
        this.abck = null;
        var arg_3024 = "https://www.nike.com/launch?timestamp=" + Date.now();
        this.browser.loadURL(arg_3024);

        while (!this.needNewSession) {
          await _0x5fb498(100);
        }

        this.needNewSession = ![];
        await this.browser.close();
        return;
      } catch (err) {
        console.log("start snkr gen");
        console.log(err);
      }
    }

    async startgenAkamaiCookie() {
      const _0x265c7f = _0x8044f7;

      if (!this.running) {
        return null;
      }

      let _0x70b108 = await this.initAkamai();

      let _0x4a7f9d = await _0x5c4262(_0x70b108, this.siteInfo.siteURL);

      let _0xc15d43 = await this.genAkamaiCookie(_0x4a7f9d);

      let _0x11099a = 0;

      while (_0xc15d43 && _0xc15d43.abck.includes('||')) {
        const _0x303394 = "4|3|2|0|1".split('|');

        let _0x311911 = 0;

        if (_0x11099a == 25) {
          return;
        }

        if (_0xc15d43.abck.includes('||')) {
          _0x11099a++;
        }

        _0x4a7f9d = await _0x5c4262(_0x70b108, this.siteInfo.siteURL);

        while (!_0x4a7f9d) {
          await _0x5fb498(500);
          _0x4a7f9d = await _0x5c4262(_0x70b108, this.siteInfo.siteURL);
        }

        _0xc15d43 = await this.genAkamaiCookie(_0x4a7f9d);
      }

      console.log(_0xc15d43);

      if (this.site == "snkrs") {
        if (!global.cookies.snkrs) {
          global.cookies.snkrs = [];
        }

        if (_0xc15d43 && _0xc15d43.abck) {
          global.cookies.snkrs.push(_0xc15d43.abck);
        }
      } else {
        if (!global.cookies[this.siteInfo.sitename]) {
          global.cookies[this.siteInfo.sitename] = [];
        }

        if (_0xc15d43 && _0xc15d43.abck) {
          global.cookies[this.siteInfo.sitename].push(_0xc15d43.abck);
        }
      }
    }

    isChallenge(_0x4d619c) {
      const _0x4a4365 = _0x8044f7;

      if (!_0x4d619c) {
        return ![];
      }

      return _0x4d619c.indexOf('||') != -1 && _0x4d619c.indexOf("~-1~||-1||~-1") == -1;
    }

    isValid(_0x45e20b) {
      const _0x31116f = _0x8044f7;

      if (!this.running || !_0x45e20b) {
        return null;
      }

      if (this.isChallenge(_0x45e20b)) {
        return ![];
      }

      const _0x533215 = this.siteInfo.origin;
      const _0x36499c = _0x45e20b;

      if (_0x533215 && _0x533215.includes("yeezysupply")) {
        return _0x36499c.indexOf('=') == -1;
      } else {
        if (_0x533215 && _0x533215.includes("nike")) {
          return _0x36499c.indexOf('=') == -1 && _0x36499c.length == 525;
        } else {
          if (_0x533215 && _0x533215.includes("jdsports.com")) {
            return _0x36499c.indexOf('==') > -1;
          } else {
            if (_0x533215 && _0x533215.includes("finishline")) {
              return _0x36499c.indexOf("==~") != -1;
            } else {
              if (_0x533215 && _0x533215.includes("size")) {
                return _0x36499c.indexOf("=~-1") > -1;
              } else {
                if (_0x533215 && _0x533215.includes("adidas")) {
                  return _0x36499c.indexOf("=~-1") > -1;
                } else {
                  if (_0x533215 && (_0x533215.includes("footpatrol") || _0x533215.includes("hipstore") || _0x533215.includes("jdsports.co.uk"))) {
                    return _0x36499c.indexOf('==') == -1;
                  } else {
                    if (_0x533215 && _0x533215.includes("nike")) {
                      return _0x36499c.indexOf("=~-1~-1~-1") > -1 && _0x36499c.indexOf('==') == -1;
                    } else {
                      if (_0x533215.includes("footlocker.ca") || _0x533215.includes("champssports")) {
                        return _0x36499c.indexOf("=~-1~-1~-1") > -1;
                      }

                      if (_0x533215.includes("kidsfootlocker")) {
                        return _0x36499c.indexOf("==~-1~-1~-1") > -1;
                      }

                      if (_0x533215.includes("eastbay") || _0x533215.includes("footaction") || _0x533215.includes("footlocker")) {
                        return _0x36499c.indexOf('==') === -1;
                      }

                      return _0x36499c.indexOf("~0~") > -1;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    async initAkamai() {
      const _0x27e79c = _0x8044f7;

      if (!this.running) {
        return null;
      }

      try {
        let _0x854ade = await _0x525073.bind(this)(_0x507197);

        if (_0x854ade.headers["set-cookie"]) {
          let _0x157053 = _0x854ade.headers["set-cookie"].find(_0x120c01 => _0x120c01.includes("abck"));

          if (_0x157053) {
            let _0x1a998f = _0x157053.split(';')[0].split("abck=")[1];

            return console.log("this.sensorURL", this.sensorURL), _0x1a998f;
          }
        }

        return null;
      } catch (err) {
        return console.log("initAkamai", err), null;
      }
    }

    async genAkamaiCookie(_0x55a6b8) {
      const _0x4ff0e4 = _0x8044f7;

      if (!this.running || !_0x55a6b8) {
        return null;
      }

      try {
        let _0x18b35d = JSON.stringify(arg_3032);

        let _0x51bda7 = await _0x525073.bind(this)(_0x4efa94);

        console.log(_0x51bda7.body);

        if (_0x51bda7.headers["set-cookie"]) {
          let _0x495da7 = _0x51bda7.headers["set-cookie"].find(_0x16bc2a => _0x16bc2a.includes("abck"));

          if (_0x495da7) {
            let _0x25eff2 = _0x495da7.split(';')[0].split("abck=")[1];

            this.postnum += 1;

            if (_0x25eff2) {
              return {
                'body': _0x51bda7.body,
                'abck': _0x25eff2
              };
            }
          }
        }

        return null;
      } catch (err) {
        return console.log("genAkamaiCookie", err), null;
      }
    }

    async getCookies() {
      const _0x88a465 = _0x8044f7;
      return this.session.cookies.get({
        'url': this.siteInfo.siteURL
      });
    }

  }

  class _0x35df20 {
    constructor(_0x505eec, _0x49975b) {
      const _0x2a98e3 = _0x8044f7;

      const _0x4934e9 = "3|4|2|0|1".split('|');

      let _0x41b47e = 0;
      this.id = "shopify-helper-" + _0x2bda7f();
      this.productURL = _0x505eec.producturl.split('?')[0];
      this.siteOrigin = _0x505eec.siteOrigin;
      this.profile = _0x505eec.activeProfile;
      this.sender = _0x49975b;
    }

    async initSession() {
      const _0x172e97 = _0x8044f7;
      var arg_3033 = '' + this.id;
      this.session = _0x2b80d5.session.fromPartition(arg_3033);
    }

    async addToCart(_0x2e4b14, _0x4b08d4) {
      const _0xc859f2 = _0x8044f7;

      const _0x4e0835 = await _0x525073.bind(this)(_0x41cc12);

      return _0x4e0835.statusCode == 200;
    }

    async fetchRate() {
      const _0x1ca45f = _0x8044f7;

      const _0x59242a = await _0x525073.bind(this)({
        'method': "GET",
        'uri': this.siteOrigin + "/cart/shipping_rates.json?shipping_address[zip]=" + this.profile.shipping.zip + "&shipping_address[country]=" + this.profile.shipping.country.long + "&shipping_address[province]=" + this.profile.shipping.state.long,
        'followAllRedirects': !![],
        'headers': {
          'accept-language': "en-US,en;q=0.9",
          'user-agent': _0x2b33c7.SHOPIFY
        },
        'timeout': 10000
      });

      if (_0x59242a.statusCode == 200) {
        let _0x141242 = JSON.parse(_0x59242a.body);

        let _0x4c55ce = _0x141242.shipping_rates[0].code;
        let _0x4fb62f = _0x141242.shipping_rates[0].price;
        let _0x495d44 = _0x141242.shipping_rates[0].source;
        this.sender.send("receiveShippingRate", arg_3034);
      } else {
        this.sender.send("receiveShippingRate", arg_3035);
      }
    }

    async fetchShippingRate() {
      const _0x4e93d9 = _0x8044f7;

      try {
        await this.initSession();
        let _0x406eae = null;

        if (this.productURL.includes("doverstreetmarket")) {
          _0x406eae = await _0x3d8f3.bind(this)(this.productURL);
        } else {
          _0x406eae = await _0x57866d.bind(this)(this.siteOrigin, this.productURL);
        }

        if (!_0x406eae) {
          return this.sender.send("receiveShippingRate", {
            'rate': "Fetching Shipping Error"
          }), _0x354f98.bind(this)();
        }

        let _0x2b91fa = _0x406eae.variants[Math.floor(Math.random() * _0x406eae.variants.length)].id;
        let _0x40070b = null;
        if (this.productURL.includes("doverstreetmarket")) {
          let _0x175a07 = await _0x5e11ea.bind(this)(this.siteOrigin, this.productURL);

          _0x40070b = _0x175a07.properties;
        }

        let _0x4fe3bf = await this.addToCart(_0x2b91fa, _0x40070b);

        if (!_0x4fe3bf) {
          return this.sender.send("receiveShippingRate", {
            'rate': "Fetching Shipping Error"
          }), _0x354f98.bind(this)();
        }

        await this.fetchRate();
        await _0x354f98.bind(this)();
      } catch (err) {
        console.log(err);
      }
    }

  }

  var arg_11 = (_0x5b1a41.app || _0x5b1a41.remote.app).getPath("userData");

  const _0xde9dbb = new _0x5860df();

  const {
    session: _0x139c72,
    app: _0x5c236c
  } = _0x5b1a41;

  const _0x9773b9 = arg_11 + "/taskLogs";

  class _0x29408e {
    constructor(_0x567a61, _0x37c249, _0x4f91bc) {
      const _0x174dc5 = _0x8044f7;
      console.log("proxy", _0x37c249);
      this.proxyList = _0x37c249.proxyList != '' ? _0x37c249.proxyList.split('\x0a') : null;
      console.log("this.proxyList", this.proxyList);

      if (_0xfd2413) {
        _0xac16e2 = _0xfd2413.split(':');
      } else {
        _0xac16e2 = null;
      }

      let _0xfd2413 = null;
      let _0xac16e2 = null;

      if (this.proxyList) {
        _0xfd2413 = this.proxyList[Math.floor(Math.random() * this.proxyList.length)];
      } else {
        _0xfd2413 = null;
      }

      if (_0xac16e2) {
        this.proxy = _0xac16e2.length > 2 ? "http://" + _0xac16e2[2] + ':' + _0xac16e2[3] + '@' + _0xac16e2[0] + ':' + _0xac16e2[1] : "http://" + _0xfd2413;
      } else {
        this.proxy = null;
      }

      console.log(this.proxy);
      this.running = !![];
      this.refresh_token = null;
      this.sender = _0x4f91bc.sender;
      this.accountname = _0x567a61.split(':')[0];
      this.accountpasswod = _0x567a61.split(':')[1];
      this.visitor = null;
      this.errorDelay = 3000;
      this.user_agent = _0x310223(_0x2b33c7.SNKRS);
      this.visitor = _0x12b840.v1();
      this.siteOrigin = _0x172aa3.rktDb;
      this.checkAccount = !![];
      this.siteName = _0x172aa3.WgGQO;
      this.productLink = _0x172aa3.YnZaw;
      this.logFilePath = _0x9773b9 + "/checkaccount/" + this.accountname;
      this.browser = null;
      this.isCanRelease = ![];
      global.snkrsBrowser = 5;
    }

    async rotateProxy() {
      const _0x3a53c3 = _0x8044f7;
      let _0x4897dd = this.proxyList[Math.floor(Math.random() * this.proxyList.length)];
      let _0x3160a2 = null;

      if (_0x4897dd && _0x4897dd.split(':').length > 1) {
        _0x3160a2 = _0x4897dd.split(':')[0] + ':' + _0x4897dd.split(':')[1];
      } else {
        _0x3160a2 = '';
      }

      this.proxyUsername = _0x4897dd && _0x4897dd.split(':')[2] ? _0x4897dd.split(':')[2] : '';
      this.proxyPassword = _0x4897dd && _0x4897dd.split(':')[3] ? _0x4897dd.split(':')[3] : '';

      if (_0x4897dd != '') {
        let _0x362431 = _0x4897dd.split(':');

        this.proxy = _0x362431.length < 4 ? "http://" + _0x362431[0] + ':' + _0x362431[1] : "http://" + _0x362431[2] + ':' + _0x362431[3] + '@' + _0x362431[0] + ':' + _0x362431[1];
      }

      await this.session.setProxy({
        'proxyRules': _0x3160a2
      });
    }

    async initSession(_0x3da01a) {
      const _0x375b2b = _0x8044f7;
      _0x3da01a = _0x3da01a && _0x3da01a.replace("http://", '');

      if (_0x3da01a && _0x3da01a.includes('@')) {
        _0x3da01a = _0x3da01a.split('@')[1] + ':' + _0x3da01a.split('@')[0];
      }

      var arg_3036 = '' + _0x2bda7f();

      this.session = _0x139c72.fromPartition(arg_3036);
      let _0x37e868 = null;

      if (_0x3da01a) {
        _0x37e868 = _0x3da01a.split(':')[0] + ':' + _0x3da01a.split(':')[1];
      } else {
        _0x37e868 = '';
      }

      this.proxyUsername = _0x3da01a && _0x3da01a.split(':')[2] ? _0x3da01a.split(':')[2] : '';
      this.proxyPassword = _0x3da01a && _0x3da01a.split(':')[3] ? _0x3da01a.split(':')[3] : '';
      await this.session.setProxy({
        'proxyRules': _0x37e868
      });
    }

    async initCookie(_0x18b7c8 = 0) {
      const _0x43bdc1 = _0x8044f7;

      if (!this.running) {
        this.sender.send("checkAccountStatus", arg_3037);
        return;
      }

      if (_0x18b7c8 > 3) {
        this.sender.send("checkAccountStatus", arg_3038);
        this.running = ![];
        return;
      }

      try {
        this.sender.send("checkAccountStatus", arg_3039);

        let _0x55351b = await _0x525073.bind(this)(_0x5a1911);

        let _0x342b65 = _0x55351b.statusCode;
        console.log("init launch: ", _0x342b65);

        if (_0x342b65 != 200) {
          return this.sender.send("checkAccountStatus", {
            'account': this.accountname,
            'status': "Init Error",
            'statusCode': 4
          }), await _0x45a98b(this.errorDelay), this.initCookie(_0x18b7c8 + 1);
        }
      } catch (err) {
        return console.log(err), this.sender.send("checkAccountStatus", {
          'account': this.accountname,
          'status': "Init Error",
          'statusCode': 4
        }), await _0x45a98b(this.errorDelay), this.initCookie(_0x18b7c8 + 1);
      }
    }

    async stop() {
      const _0x18c055 = _0x8044f7;
      this.running = ![];
      await this.session.clearStorageData([]);
      await this.session.clearCache(() => {
      });
    }

    async start() {
      const _0x630c42 = _0x8044f7;
      await this.initSession(this.proxy);

      while (!![]) {
        if (!this.running) {
          this.sender.send("checkAccountStatus", arg_3040);
          return;
        }

        if (_0x309b60.bind(this)()) {
          break;
        }

        await _0x45a98b(1000);
      }

      let _0xb12aa0 = ![];

      let _0x408c11 = _0xde9dbb.get("accounttoken");

      if (_0x408c11) {
        for (let _0x38d45c of _0x408c11) {
        }
      }

      let _0x2a454d = !![];

      console.log(_0xb12aa0);
      await this.initCookie();

      if (_0xb12aa0) {
        _0x2a454d = await _0x14658b.bind(this)();

        if (!_0x2a454d) {
          await _0x421587.bind(this)();
          await _0x41f534.bind(this)();
        }
      }

      if (_0x2a454d) {
        const _0x28cdfa = "2|4|6|0|3|1|5".split('|');

        let _0x1fead7 = 0;
        await _0x350fe2.bind(this)();
        await _0x2e15fe.bind(this)();
        await _0x29b0e3.bind(this)();

        _0x3b17e9.bind(this)();

        await _0x1b72d4.bind(this)();
        await _0x421587.bind(this)();
        await _0x41f534.bind(this)();
      }

      if (!this.running) {
        return;
      }

      await this.checkUser();

      _0x51259d.bind(this)();
    }

    async checkUser(_0x34c7e0 = 0) {
      const _0x31f230 = _0x8044f7;

      if (!this.running) {
        this.sender.send("checkAccountStatus", arg_3041);
        return;
      }

      if (_0x34c7e0 > 3) {
        this.sender.send("checkAccountStatus", arg_3042);
        this.running = ![];
        return;
      }

      const _0x152b15 = "https://unite.nike.com/account/user/v1?appVersion=881&experienceVersion=881&uxid=com.nike.commerce.snkrs.web&locale=en_US&backendEnvironment=identity&browser=Google%20Inc.&os=undefined&mobile=false&native=false&visit=1&visitor=" + this.visitor + "&upmId=" + this.user_id;

      console.log(_0x152b15);
      console.log(this.accounttoken);

      try {
        let _0x389644 = await _0x525073.bind(this)(_0x26c420);

        let _0x150d5c = _0x389644.statusCode;
        let _0x3376ef = _0x389644.body;
        console.log("checkUser: ", _0x150d5c);
        console.log("checkUser: ", _0x3376ef);

        if (_0x150d5c == 200) {
          let _0x3bdeb0 = JSON.parse(_0x3376ef);

          if ("sms" in _0x3bdeb0.user.contact) {
            this.sender.send("checkAccountStatus", arg_3043);
          } else {
            this.sender.send("checkAccountStatus", arg_3044);
          }
        } else {
          return _0x150d5c == 403 && _0x389644.headers && _0x389644.headers["set-cookie"] && JSON.stringify(_0x389644.headers["set-cookie"]).includes("_abck=") ? (this.sender.send("checkAccountStatus", {
            'account': this.accountname,
            'status': "InValid Cookie, Retry",
            'statusCode': 4
          }), await injectAkamai.bind(this)(![]), await _0x45a98b(this.errorDelay), this.checkUser(_0x34c7e0 + 1)) : (this.sender.send("checkAccountStatus", {
            'account': this.accountname,
            'status': "Check Error",
            'statusCode': 4
          }), await _0x45a98b(this.errorDelay), this.checkUser(_0x34c7e0 + 1));
        }
      } catch (err) {
        return console.log(err), await _0x45a98b(this.errorDelay), this.checkUser(_0x34c7e0 + 1);
      }
    }

    async requestLoginAccout(_0x709084 = 0) {
      const _0x265ec6 = _0x8044f7;
      console.log("requestLoginAccout");

      if (!this.running) {
        this.sender.send("checkAccountStatus", arg_3045);
        return;
      }

      if (_0x709084 > 3) {
        this.sender.send("checkAccountStatus", arg_3046);
        this.running = ![];
        return;
      }

      const _0x22d2f8 = "https://unite.nike.com/login?appVersion=881&experienceVersion=881&uxid=com.nike.commerce.snkrs.web&locale=en_US&backendEnvironment=identity&browser=Google%20Inc.&os=undefined&mobile=false&native=false&visit=1&visitor=" + this.visitor;

      console.log(_0x22d2f8);
      await this.injectAkamai();

      if (!this.running) {
        return;
      }

      try {
        this.sender.send("checkAccountStatus", arg_3047);

        let _0x2b699c = await _0x525073.bind(this)(_0x513dfc);

        let _0x5e7a17 = _0x2b699c.statusCode;
        let _0x29311b = _0x2b699c.body;
        console.log("requestLoginAccout", _0x29311b);
        console.log("requestLoginAccout", _0x5e7a17);

        if (_0x5e7a17 == 200) {
          let _0x233534 = JSON.parse(_0x29311b);

          this.upmId = _0x233534.user_id;
          this.accounttoken = _0x233534.access_token;

          _0x34b06a.bind(this)(_0x233534);
        } else {
          if (_0x5e7a17 == 403 && _0x2b699c.headers && _0x2b699c.headers["set-cookie"] && JSON.stringify(_0x2b699c.headers["set-cookie"]).includes("_abck=")) {
            return this.sender.send("checkAccountStatus", {
              'account': this.accountname,
              'status': "InValid Cookie, Retry",
              'statusCode': 4
            }), await _0x45a98b(this.errorDelay), this.requestLoginAccout(_0x709084 + 1);
          } else {
            var arg_3048 = _0x29311b.indexOf("entered incorrectly");

            if (arg_3048 != -1) {
              this.sender.send("checkAccountStatus", arg_3049);
              this.running = ![];
              return;
            }

            return this.sender.send("checkAccountStatus", {
              'account': this.accountname,
              'status': "Login Error",
              'statusCode': 4
            }), await _0x45a98b(this.errorDelay), this.requestLoginAccout(_0x709084 + 1);
          }
        }
      } catch (err) {
        return console.log(err), await _0x45a98b(this.errorDelay), this.sender.send("checkAccountStatus", {
          'account': this.accountname,
          'status': "Login Error",
          'statusCode': 4
        }), this.requestLoginAccout(_0x709084 + 1);
      }
    }

  }

  const _0x3e4ba0 = (_0x332499, _0x1a2964, _0x55c2d6 = '') => {
    const _0xb11354 = _0x8044f7;
    let _0x250372 = null;
    return _0x250372 = {
      'uri': _0x332499,
      'method': "POST",
      'headers': {
        'Accept': "application/json, text/plain, */*",
        'Content-Type': "application/json;charset=utf-8"
      },
      'agent': new _0xdb2d92.Agent({
        'maxCachedSessions': 0
      }),
      'strictSSL': !![],
      'body': _0x1a2964,
      'json': !![]
    }, _0x250372;
  };

  const _0xef558c = async (_0x21706c, _0x1fe171) => {
    const _0x3981db = _0x8044f7;
    return new Promise((_0x2fc85d, _0x180093) => {
      const _0x5736f1 = _0x3981db;

      try {
        var _0x9bec32 = _0x1c3c2d(_0x21706c, (_0x5481bc, _0x54aa5a, _0xe93f21) => {
          const _0x570cc8 = _0x5736f1;

          if (_0x5481bc) {
            _0x5481bc = _0x5481bc + '\x20';

            if (_0x5481bc.includes(_0x5b1625.QvyWH)) {
              _0x2fc85d("Fingerprint does not match");
            } else {
              _0x2fc85d(null);
            }
          } else {
            _0x2fc85d(_0xe93f21);
          }
        });

        _0x9bec32.on("socket", _0x209ba4 => {
          const _0x4d23e9 = _0x5736f1;

          _0x209ba4.on(_0x5b1625.cWguF, () => {
            const _0x569e8a = _0x4d23e9;

            var _0x2036a2 = _0x209ba4.getPeerCertificate().fingerprint;

            var arg_3050 = _0x1fe171.trim();

            var arg_3051 = _0x2036a2.trim();

            if (arg_3050 != arg_3051) {
              return _0x9bec32.emit(_0x139102.jNZDv, new Error("Fingerprint does not match mekaio" + _0x2036a2 + "mekaio ")), _0x9bec32.abort();
            }
          });
        });
      } catch (err) {
        _0x2fc85d(null);
      }
    });
  };

  async function _0x5a8f61() {
    const _0x230932 = _0x8044f7;

    if (global.eventSender) {
      global.eventSender.send("status", arg_3052);
    }

    return setTimeout(() => {
      const _0x74f9f6 = _0x230932;

      _0x5a8f61();
    }, 500);
  }

  async function _0x56361a() {
    const _0x1b1e94 = _0x8044f7;

    try {
      let _0x5c84d8 = _0x3e4ba0("https://pooky-api-lzlmike.herokuapp.com/logTaskStatusAIO", arg_3053);

      const _0xd686b7 = await _0xef558c(_0x5c84d8, "E1:87:83:58:FE:6B:0E:DF:61:F2:12:AE:D2:F2:C3:7F:A2:70:6C:5C");

      if (_0xd686b7 && typeof _0xd686b7 == "string" && _0xd686b7.includes("Fingerprint does not match")) {
        console.log("finger prints app quitting");

        _0x2b80d5.app.quit();
      }

      if (_0xd686b7 && _0xd686b7.statusCode == 401) {
        _0x2b80d5.app.quit();
      }

      if (_0xd686b7 && _0xd686b7.statusCode == 200) {
        const _0x5c9b16 = "1|4|0|2|3".split('|');

        let _0x2f0a7b = 0;

        if (_0xd686b7.products) {
          global.footsiteVariants = _0xd686b7.products;
        }

        global.alternateURL = _0xd686b7.url;
        global.enabledExp2 = _0xd686b7.exp2;
        global.exp2WaitingRoomCookie = _0xd686b7.cookie;

        if (global.ws) {
          console.log("global enabled sending footsiteVariants");
          var arg_3054 = JSON.stringify(arg_3055);
          global.ws.send(arg_3054);
        }
      }
    } catch (err) {
      console.log(err);
    }

    return setTimeout(() => {
      const _0x3f457a = _0x1b1e94;

      _0x56361a();
    }, 30000);
  }

  async function _0x4098db() {
    const _0x5aa015 = _0x8044f7;
    const _0x3994c5 = global.user;
    const {
      key: _0xd022fe,
      currentDeviceId: _0x4d6c2a,
      deviceId: _0x52a303,
      userId: _0x2c2652
    } = _0x3994c5;

    try {
      let _0xccc7fe = _0x3e4ba0("https://mekaio-api-server.herokuapp.com/userKey", arg_3056);

      const _0x558a90 = await _0xef558c(_0xccc7fe, "39:A9:C4:FE:B1:7E:23:9E:2F:4D:BB:AC:E8:D7:A3:4F:CE:43:0E:7B");

      const _0x3095e0 = _0x3113c9.machineIdSync();

      if (_0x558a90 && typeof _0x558a90 == "string" && _0x558a90.includes("Fingerprint does not match")) {
        console.log("finger prints app quitting");

        _0xc66414(arg_3057);

        _0x2b80d5.app.quit();
      }

      if (_0x558a90.errored) {
        _0xc66414(arg_3058);
      }

      if (_0x558a90.key && _0x558a90.userId && _0x558a90.keyType != "founder") {
        const {
          isActive: _0x20ab51,
          deviceId: _0x2e9827,
          deviceId2: _0x2f1148
        } = _0x558a90;

        if (_0x2e9827 && !_0x2f1148 && _0x2e9827.split('+')[0] !== _0x3095e0) {
          console.log("db device id 1 not matching runTimeDevice Id, quitting");

          _0xc66414(arg_3059);

          _0x2b80d5.app.quit();
        } else {
          if (!_0x2e9827 && _0x2f1148 && _0x2f1148.split('+')[0] !== _0x3095e0) {
            console.log("db device id 2 not matching runTimeDevice Id, quitting");

            _0xc66414(arg_3060);

            _0x2b80d5.app.quit();
          } else {
            if (_0x2e9827 && _0x2f1148 && _0x2e9827.split('+')[0] !== _0x3095e0 && _0x2f1148.split('+')[0] !== _0x3095e0) {
              console.log("db device id not matching runTimeDevice Id, quitting");

              _0xc66414(arg_3061);

              _0x2b80d5.app.quit();
            }
          }
        }

        if (!_0x20ab51) {
          console.log("key not active quitting");

          _0xc66414(arg_3062);

          _0x2b80d5.app.quit();
        }
      }
    } catch (err) {
      console.log('e', err.message);
    }

    setTimeout(() => {
      const _0x10a1c0 = _0x5aa015;

      _0x4098db();
    }, 20000);
  }

  async function _0xc66414({
                             userId: _0x784172,
                             key: _0x1a7376,
                             report: _0xfe76d0
                           }) {
    const _0x3dbd98 = _0x8044f7;

    _0x1c3c2d(arg_3063);
  }

  const _0x421b84 = (_0x52cff2, _0x5add06) => {
    const _0x3a0bb3 = _0x8044f7;
    console.log("before server");
    let _0x40fce9 = [];

    _0x56361a();

    _0x4098db();

    _0x5a8f61();

    _0x52cff2.on("checkGiftCardBalance", async (_0x907026, _0x3c561e) => {
      const _0x44b639 = _0x3a0bb3;
      const {
        cardList: _0x2eb241,
        proxyList: _0x168a5c
      } = _0x3c561e;
      let _0x2dcdec = 0;
      ;

      for (; _0x2dcdec < _0x2eb241.length; _0x2dcdec++) {
        _0xfc2067(_0x2eb241[_0x2dcdec], _0x168a5c[_0x2dcdec % _0x168a5c.length], _0x907026.sender);
      }
    });

    _0x52cff2.on("checkSnkrsAccount", async (_0xa705e3, _0x331b98) => {
      const _0x27883e = _0x3a0bb3;
      const {
        accountList: _0x564bcd,
        proxyList: _0x24885c
      } = _0x331b98;

      for (const _0x27d273 of _0x564bcd) {
        let _0x4ba4fb = new _0x29408e(_0x27d273, _0x24885c, _0xa705e3);

        _0x40fce9.push(_0x4ba4fb);

        _0x4ba4fb.start();
      }
    });

    _0x52cff2.on("fetchSnkrsProduct", async (_0x58448a, _0x50d8cf) => {
      const _0x7ebea3 = _0x3a0bb3;
      const {
        productLink: _0x23a889,
        proxyList: _0x380083
      } = _0x50d8cf;
      console.log("proxyList", _0x380083);
      let _0x4cd9aa = null;

      if (_0x380083.proxyList != '') {
        _0x4cd9aa = _0x380083.proxyList.split('\x0a');
      } else {
        _0x4cd9aa = null;
      }

      var arg_3064 = null;

      if (_0x4cd9aa) {
        arg_3064 = _0x4cd9aa[Math.floor(Math.random() * _0x4cd9aa.length)];
      } else {
        arg_3064 = null;
      }

      _0x438b58(_0x23a889, arg_3064, _0x58448a.sender);
    });

    _0x52cff2.on("stopSnkrsAccount", async (_0x1ddd59, _0x4a684a) => {
      const _0x5ef1cc = _0x3a0bb3;

      for (let _0x31ee4e of _0x40fce9) {
        await _0x31ee4e.stop();
      }

      _0x40fce9 = [];
    });

    _0x52cff2.on("fetchCookie", async (_0x2afd55, _0x280ccb) => {
      const _0x4e821b = _0x3a0bb3;
      const {
        proxy: _0x15eb38,
        site: _0x322cfd
      } = _0x280ccb;

      if (_0x322cfd == "snkrs") {
        let _0x5dcd55 = 0;
        ;

        for (; _0x5dcd55 < 4; _0x5dcd55++) {
          let _0x4036d6 = new _0x553c8f(_0x322cfd, _0x15eb38, _0x2afd55);

          _0x1f7a47[_0x322cfd].push(_0x4036d6);

          _0x4036d6.start();
        }
      } else {
        _0x1f7a47[_0x322cfd] = new _0x553c8f(_0x322cfd, _0x15eb38, _0x2afd55);

        if (_0x1f7a47[_0x322cfd] && _0x1f7a47[_0x322cfd].running) {
          await _0x1f7a47[_0x322cfd].start();
        }
      }
    });

    _0x52cff2.on("stopFetchCookie", async (_0x52e0ee, _0x816a46) => {
      const _0x31596f = _0x3a0bb3;
      const {
        site: _0x46c54a
      } = _0x816a46;

      if (_0x46c54a == _0x54b984.QBGVc) {
        for (let _0x28af8b of _0x1f7a47[_0x46c54a]) {
          await _0x28af8b.stop();
        }

        _0x1f7a47[_0x46c54a] = [];
      } else {
        if (_0x1f7a47[_0x46c54a]) {
          await _0x1f7a47[_0x46c54a].stop();
          _0x1f7a47[_0x46c54a] = null;
        }
      }
    });

    _0x52cff2.on("fetchShippingRate", async (_0x29aca7, _0x104dd8) => {
      const _0x3d6c31 = _0x3a0bb3;
      const {
        sender: _0x4f9eef
      } = _0x29aca7;

      let _0x5ca8a6 = new _0x35df20(_0x104dd8, _0x4f9eef);

      return _0x5ca8a6.fetchShippingRate();
    });

    _0x52cff2.on("testWebhook", async (_0x4e1f2f, _0x12e5bc) => {
      const _0x9fca69 = _0x3a0bb3;
      const {
        webhook: _0x2c5e93
      } = _0x12e5bc;
      await _0x586466({
        'embeds': [{
          'description': _0x54b984.UTzSB,
          'color': _0x54b984.YZHnc,
          'thumbnail': {
            'url': _0x54b984.sLryO
          },
          'fields': [{
            'name': _0x54b984.zgbRh,
            'value': _0x54b984.HExno
          }],
          'footer': {
            'text': "MEKAIO - [" + new Date().toISOString() + ']'
          }
        }]
      }, _0x2c5e93);
    });
  };

  const _0x2032c4 = [{
    'key': "twocap",
    'name': "2 Captcha",
    'params': [{
      'key': "twocaptoken",
      'label': "2Captcha Token"
    }]
  }, {
    'key': "anticap",
    'name': "Anti Captcha",
    'params': [{
      'key': "anticaptoken",
      'label': "Anti Token"
    }]
  }, {
    'key': "aycd",
    'name': "AYCD",
    'params': [{
      'key': "aycdApiKey",
      'label': "AYCD Api Token"
    }, {
      'key': "aycdToken",
      'label': "AYCD Token"
    }]
  }, {
    'key': "capmonster",
    'name': "Captcha Monster",
    'params': [{
      'key': "capmonstertoken",
      'label': "Captcha Monster Token"
    }]
  }];
  console.log(_0x2b80d5.app.userAgentFallback);
  global.footsiteVariants = {};
  global.userFootsiteVariants = {};
  global.giftCardsIndex = {};
  global.footsiteDataDomeCookie = {};

  const _0x106dcd = async (_0x197257, _0x4e8a95) => {
    const _0x4580ec = _0x8044f7;

    const _0x4483b7 = "13|0|8|2|12|1|15|9|14|6|7|11|10|5|3|4|16".split('|');

    let _0x5bddef = 0;
    console.log("init module");
    _0x4e8a95.taskStatus = {
      'yeezysupply': {
        'runningNumber': 0,
        'passedQueueNumber': 0,
        'cartedNumber': 0,
        'checkedOutNumber': 0,
        'declinedNumber': 0
      },
      'footsites': {
        'runningNumber': 0,
        'passedQueueNumber': 0,
        'cartedNumber': 0,
        'checkedOutNumber': 0,
        'declinedNumber': 0
      },
      'shopify': {
        'runningNumber': 0,
        'checkedOutNumber': 0,
        'declinedNumber': 0,
        'paymentErrorNumber': 0
      },
      'snkrs': {
        'runningNumber': 0,
        'countDownNumber': 0,
        'entrySubmittedNumber': 0,
        'winnerNumber': 0,
        'noWinnerNumber': 0
      },
      'fnl/jd': {
        'runningNumber': 0,
        'cartedNumber': 0,
        'checkedOutNumber': 0,
        'declinedNumber': 0
      }
    };

    _0x2b80d5.app.commandLine.appendSwitch("disable-http-cache");

    _0x4e8a95.taskState = {};
    _0x4e8a95.dataDomeAttepted = ![];
    _0x4e8a95.dataDomeCookie = null;
    _0x4e8a95.footsiteQueueCookie = [];
    _0x4e8a95.successWebhook = _0x172aa3.qhkfk;
    _0x4e8a95.siteConfig = _0x2a7b64;
    _0x4e8a95.capServiceConfig = _0x2032c4;
    _0x4e8a95.hCaptchaAnswers = {};
    _0x4e8a95.submitLimit = 15;
    _0x4e8a95.getCapFromService = _0x5e67a9;
    _0x4e8a95.parseVerifyURL = _0x15d31b;

    _0x232e6d(_0x197257, _0x4e8a95);

    _0x2c6383(_0x197257, _0x4e8a95);

    _0x421b84(_0x197257);
  };

  return _0x124540.initIpcModule = _0x106dcd, _0x124540;
})({}, electron, fs, rp, Store, jimp, pixelmatch, opencvWasm, crypto, AutoSolve, cheerio, uuidv4, adyenEncrypt, uuid, ghostCursor, nodeMachineId, https);