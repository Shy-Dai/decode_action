//Wed Dec 17 2025 09:17:51 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("发送验证码");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(S) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (U) {
      return typeof U;
    } : function (U) {
      return U && "function" == typeof Symbol && U.constructor === Symbol && U !== Symbol.prototype ? "symbol" : typeof U;
    };
    return b(S);
  }
  function c() {
    'use strict';

    c = function () {
      return X;
    };
    var W,
      X = {},
      Y = Object.prototype,
      Z = Y.hasOwnProperty,
      a0 = Object.defineProperty || function (as, at, au) {
        as[at] = au.value;
      },
      a1 = "function" == typeof Symbol ? Symbol : {},
      a2 = a1.iterator || "@@iterator",
      a3 = a1.asyncIterator || "@@asyncIterator",
      a4 = a1.toStringTag || "@@toStringTag";
    function a5(as, at, au) {
      var av = {
        value: au,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(as, at, av);
      return as[at];
    }
    try {
      a5({}, "");
    } catch (at) {
      a5 = function (av, aw, ax) {
        return av[aw] = ax;
      };
    }
    function a6(av, aw, ax, ay) {
      var az = aw && aw.prototype instanceof ad ? aw : ad,
        aA = Object.create(az.prototype),
        aB = new aq(ay || []);
      a0(aA, "_invoke", {
        value: am(av, ax, aB)
      });
      return aA;
    }
    function a7(av, aw, ax) {
      try {
        return {
          type: "normal",
          arg: av.call(aw, ax)
        };
      } catch (aB) {
        var ay = {};
        ay.type = "throw";
        ay.arg = aB;
        return ay;
      }
    }
    X.wrap = a6;
    var a8 = "suspendedStart",
      a9 = "suspendedYield",
      aa = "executing",
      ab = "completed",
      ac = {};
    function ad() {}
    function ae() {}
    function af() {}
    var ag = {};
    a5(ag, a2, function () {
      return this;
    });
    var ah = Object.getPrototypeOf,
      ai = ah && ah(ah(ar([])));
    ai && ai !== Y && Z.call(ai, a2) && (ag = ai);
    af.prototype = ad.prototype = Object.create(ag);
    var aj = af.prototype;
    function ak(av) {
      ["next", "throw", "return"].forEach(function (az) {
        a5(av, az, function (aB) {
          return this._invoke(az, aB);
        });
      });
    }
    function al(av, aw) {
      function aA(aB, aC, aD, aE) {
        var aG = a7(av[aB], av, aC);
        if ("throw" !== aG.type) {
          var aH = aG.arg,
            aI = aH.value;
          return aI && "object" == b(aI) && Z.call(aI, "__await") ? aw.resolve(aI.__await).then(function (aK) {
            aA("next", aK, aD, aE);
          }, function (aK) {
            aA("throw", aK, aD, aE);
          }) : aw.resolve(aI).then(function (aK) {
            aH.value = aK;
            aD(aH);
          }, function (aK) {
            return aA("throw", aK, aD, aE);
          });
        }
        aE(aG.arg);
      }
      var ay;
      a0(this, "_invoke", {
        value: function (aB, aC) {
          function aD() {
            return new aw(function (aF, aG) {
              aA(aB, aC, aF, aG);
            });
          }
          return ay = ay ? ay.then(aD, aD) : aD();
        }
      });
    }
    function am(av, aw, ax) {
      var az = a8;
      return function (aB, aC) {
        if (az === aa) {
          throw Error("Generator is already running");
        }
        if (az === ab) {
          if ("throw" === aB) {
            throw aC;
          }
          var aE = {
            value: W,
            done: !0
          };
          return aE;
        }
        for (ax.method = aB, ax.arg = aC;;) {
          var aF = ax.delegate;
          if (aF) {
            var aG = an(aF, ax);
            if (aG) {
              if (aG === ac) {
                continue;
              }
              return aG;
            }
          }
          if ("next" === ax.method) {
            ax.sent = ax._sent = ax.arg;
          } else {
            if ("throw" === ax.method) {
              if (az === a8) {
                throw az = ab, ax.arg;
              }
              ax.dispatchException(ax.arg);
            } else {
              "return" === ax.method && ax.abrupt("return", ax.arg);
            }
          }
          az = aa;
          var aH = a7(av, aw, ax);
          if ("normal" === aH.type) {
            if (az = ax.done ? ab : a9, aH.arg === ac) {
              continue;
            }
            var aI = {};
            aI.value = aH.arg;
            aI.done = ax.done;
            return aI;
          }
          "throw" === aH.type && (az = ab, ax.method = "throw", ax.arg = aH.arg);
        }
      };
    }
    function an(av, aw) {
      var ax = aw.method,
        ay = av.iterator[ax];
      if (ay === W) {
        aw.delegate = null;
        "throw" === ax && av.iterator.return && (aw.method = "return", aw.arg = W, an(av, aw), "throw" === aw.method) || "return" !== ax && (aw.method = "throw", aw.arg = new TypeError("The iterator does not provide a '" + ax + "' method"));
        return ac;
      }
      var az = a7(ay, av.iterator, aw.arg);
      if ("throw" === az.type) {
        aw.method = "throw";
        aw.arg = az.arg;
        aw.delegate = null;
        return ac;
      }
      var aA = az.arg;
      return aA ? aA.done ? (aw[av.resultName] = aA.value, aw.next = av.nextLoc, "return" !== aw.method && (aw.method = "next", aw.arg = W), aw.delegate = null, ac) : aA : (aw.method = "throw", aw.arg = new TypeError("iterator result is not an object"), aw.delegate = null, ac);
    }
    function ao(av) {
      var aw = {
        tryLoc: av[0]
      };
      var ax = aw;
      1 in av && (ax.catchLoc = av[1]);
      2 in av && (ax.finallyLoc = av[2], ax.afterLoc = av[3]);
      this.tryEntries.push(ax);
    }
    function ap(av) {
      var aw = av.completion || {};
      aw.type = "normal";
      delete aw.arg;
      av.completion = aw;
    }
    function aq(av) {
      var aw = {
        tryLoc: "root"
      };
      this.tryEntries = [aw];
      av.forEach(ao, this);
      this.reset(!0);
    }
    function ar(av) {
      if (av || "" === av) {
        var ax = av[a2];
        if (ax) {
          return ax.call(av);
        }
        if ("function" == typeof av.next) {
          return av;
        }
        if (!isNaN(av.length)) {
          var ay = -1,
            az = function aB() {
              for (; ++ay < av.length;) {
                if (Z.call(av, ay)) {
                  aB.value = av[ay];
                  aB.done = !1;
                  return aB;
                }
              }
              aB.value = W;
              aB.done = !0;
              return aB;
            };
          return az.next = az;
        }
      }
      throw new TypeError(b(av) + " is not iterable");
    }
    ae.prototype = af;
    a0(aj, "constructor", {
      value: af,
      configurable: !0
    });
    a0(af, "constructor", {
      value: ae,
      configurable: !0
    });
    ae.displayName = a5(af, a4, "GeneratorFunction");
    X.isGeneratorFunction = function (av) {
      var aw = "function" == typeof av && av.constructor;
      return !!aw && (aw === ae || "GeneratorFunction" === (aw.displayName || aw.name));
    };
    X.mark = function (av) {
      Object.setPrototypeOf ? Object.setPrototypeOf(av, af) : (av.__proto__ = af, a5(av, a4, "GeneratorFunction"));
      av.prototype = Object.create(aj);
      return av;
    };
    X.awrap = function (av) {
      var ax = {
        __await: av
      };
      return ax;
    };
    ak(al.prototype);
    a5(al.prototype, a3, function () {
      return this;
    });
    X.AsyncIterator = al;
    X.async = function (av, aw, ax, ay, az) {
      void 0 === az && (az = Promise);
      var aA = new al(a6(av, aw, ax, ay), az);
      return X.isGeneratorFunction(aw) ? aA : aA.next().then(function (aC) {
        return aC.done ? aC.value : aA.next();
      });
    };
    ak(aj);
    a5(aj, a4, "Generator");
    a5(aj, a2, function () {
      return this;
    });
    a5(aj, "toString", function () {
      return "[object Generator]";
    });
    X.keys = function (av) {
      var ax = Object(av),
        ay = [];
      for (var az in ax) ay.push(az);
      ay.reverse();
      return function aB() {
        for (; ay.length;) {
          var aC = ay.pop();
          if (aC in ax) {
            aB.value = aC;
            aB.done = !1;
            return aB;
          }
        }
        aB.done = !0;
        return aB;
      };
    };
    X.values = ar;
    aq.prototype = {
      constructor: aq,
      reset: function (av) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = W, this.done = !1, this.delegate = null, this.method = "next", this.arg = W, this.tryEntries.forEach(ap), !av) {
          for (var aw in this) "t" === aw.charAt(0) && Z.call(this, aw) && !isNaN(+aw.slice(1)) && (this[aw] = W);
        }
      },
      stop: function () {
        this.done = !0;
        var av = this.tryEntries[0].completion;
        if ("throw" === av.type) {
          throw av.arg;
        }
        return this.rval;
      },
      dispatchException: function (av) {
        if (this.done) {
          throw av;
        }
        var ax = this;
        function aD(aE, aF) {
          aA.type = "throw";
          aA.arg = av;
          ax.next = aE;
          aF && (ax.method = "next", ax.arg = W);
          return !!aF;
        }
        for (var ay = this.tryEntries.length - 1; ay >= 0; --ay) {
          var az = this.tryEntries[ay],
            aA = az.completion;
          if ("root" === az.tryLoc) {
            return aD("end");
          }
          if (az.tryLoc <= this.prev) {
            var aB = Z.call(az, "catchLoc"),
              aC = Z.call(az, "finallyLoc");
            if (aB && aC) {
              if (this.prev < az.catchLoc) {
                return aD(az.catchLoc, !0);
              }
              if (this.prev < az.finallyLoc) {
                return aD(az.finallyLoc);
              }
            } else {
              if (aB) {
                if (this.prev < az.catchLoc) {
                  return aD(az.catchLoc, !0);
                }
              } else {
                if (!aC) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < az.finallyLoc) {
                  return aD(az.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (av, aw) {
        for (var ay = this.tryEntries.length - 1; ay >= 0; --ay) {
          var az = this.tryEntries[ay];
          if (az.tryLoc <= this.prev && Z.call(az, "finallyLoc") && this.prev < az.finallyLoc) {
            var aA = az;
            break;
          }
        }
        aA && ("break" === av || "continue" === av) && aA.tryLoc <= aw && aw <= aA.finallyLoc && (aA = null);
        var aB = aA ? aA.completion : {};
        aB.type = av;
        aB.arg = aw;
        return aA ? (this.method = "next", this.next = aA.finallyLoc, ac) : this.complete(aB);
      },
      complete: function (av, aw) {
        if ("throw" === av.type) {
          throw av.arg;
        }
        "break" === av.type || "continue" === av.type ? this.next = av.arg : "return" === av.type ? (this.rval = this.arg = av.arg, this.method = "return", this.next = "end") : "normal" === av.type && aw && (this.next = aw);
        return ac;
      },
      finish: function (av) {
        for (var ax = this.tryEntries.length - 1; ax >= 0; --ax) {
          var ay = this.tryEntries[ax];
          if (ay.finallyLoc === av) {
            this.complete(ay.completion, ay.afterLoc);
            ap(ay);
            return ac;
          }
        }
      },
      catch: function (av) {
        for (var ax = this.tryEntries.length - 1; ax >= 0; --ax) {
          var ay = this.tryEntries[ax];
          if (ay.tryLoc === av) {
            var az = ay.completion;
            if ("throw" === az.type) {
              var aA = az.arg;
              ap(ay);
            }
            return aA;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (av, aw, ax) {
        this.delegate = {
          iterator: ar(av),
          resultName: aw,
          nextLoc: ax
        };
        "next" === this.method && (this.arg = W);
        return ac;
      }
    };
    return X;
  }
  function d(S, T, U, V, W, X, Y) {
    try {
      var a0 = S[X](Y),
        a1 = a0.value;
    } catch (a3) {
      return void U(a3);
    }
    a0.done ? T(a1) : Promise.resolve(a1).then(V, W);
  }
  function e(S) {
    return function () {
      var V = this,
        W = arguments;
      return new Promise(function (X, Y) {
        var a0 = S.apply(V, W);
        function a1(a3) {
          d(a0, X, Y, a1, a2, "next", a3);
        }
        function a2(a3) {
          d(a0, X, Y, a1, a2, "throw", a3);
        }
        a1(void 0);
      });
    };
  }
  var f = ($.isNode() ? process.env.Common_Phone : $.getdata("Common_Phone")) || "",
    g = ($.isNode() ? process.env.Common_Type : $.getdata("Common_Type")) || "",
    h = ($.isNode() ? process.env.OCR_SERVER : $.getdata("OCR_SERVER")) || "https://ddddocr.xzxxn7.live",
    i = void 0,
    j = "",
    k = "",
    l = "",
    m = "",
    n = "",
    o = "",
    p = "",
    r = "";
  function u() {
    return v.apply(this, arguments);
  }
  function v() {
    v = e(c().mark(function U() {
      var W, X, Y, Z, a0, a1;
      return c().wrap(function (a3) {
        for (;;) {
          switch (a3.prev = a3.next) {
            case 0:
              console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n");
              "XiShiYan" == g ? (k = "34", p = "50") : "WangChao" == g ? (k = "64", p = "10019") : "XinJiangBei" == g ? (k = "102", p = "10050") : "TongLu" == g ? (k = "59", p = "10017") : "ZSWY" == g ? (k = "73", p = "10024") : "SHPJ" == g ? (k = "14", p = "12") : "YueCheng" == g ? (k = "31", p = "48") : "DaChao" == g ? (k = "94", p = "10048") : "RongPanAn" == g ? (k = "30", p = "45") : "LanJingLing" == g ? (k = "72", p = "10026") : "AiHaiYan" == g ? (k = "60", p = "10018") : "QingJiao" == g ? (k = "23", p = "34") : "JingZhou" == g && (k = "92", p = "10046");
              a3.next = 4;
              return O();
            case 4:
              i = a3.sent;
              console.log("随机生成UA");
              W = J();
              l = W.ua;
              m = W.commonUa;
              console.log(l);
              console.log(m);
              console.log("用户：".concat(f, "开始任务"));
              console.log("获取sessionId");
              a3.next = 15;
              return w("/api/account/init");
            case 15:
              X = a3.sent;
              r = X.data.session.id;
              console.log(r);
              console.log("获取signature_key");
              a3.next = 21;
              return y("/web/init?client_id=".concat(p));
            case 21:
              Y = a3.sent;
              console.log(o);
              j = Y.data.client.signature_key;
              console.log(j);
              console.log("发送验证码");
              a3.next = 28;
              return C("/web/security/send_security_code", "client_id=".concat(p, "&phone_number=").concat(f));
            case 28:
              if (Z = a3.sent, 0 != Z.code) {
                a3.next = 33;
                break;
              }
              console.log("发送成功");
              a3.next = 50;
              break;
            case 33:
              console.log(Z.message);
              a3.next = 36;
              return A("/web/security/captcha_image");
            case 36:
              a0 = a3.sent;
              a3.next = 39;
              return E({
                image: a0
              });
            case 39:
              if (a1 = a3.sent, a1) {
                a3.next = 45;
                break;
              }
              console.log("ddddocr服务异常");
              a3.next = 44;
              return Q("ddddocr服务异常");
            case 44:
              return a3.abrupt("return");
            case 45:
              console.log(a1);
              a3.next = 48;
              return C("/web/security/send_security_code", "captcha=".concat(a1.result, "&client_id=").concat(p, "&phone_number=").concat(f));
            case 48:
              Z = a3.sent;
              0 == Z.code ? console.log("发送成功") : console.log(JSON.stringify(Z));
            case 50:
            case "end":
              return a3.stop();
          }
        }
      }, U);
    }));
    return v.apply(this, arguments);
  }
  function w(S, T) {
    return x.apply(this, arguments);
  }
  function x() {
    x = e(c().mark(function T(U, V) {
      var X;
      return c().wrap(function (Y) {
        for (;;) {
          switch (Y.prev = Y.next) {
            case 0:
              X = H(U);
              return Y.abrupt("return", new Promise(function (a0) {
                var a2 = {
                  Connection: "Keep-Alive",
                  "X-TIMESTAMP": X.time,
                  "X-SESSION-ID": r,
                  "X-REQUEST-ID": X.uuid,
                  "X-SIGNATURE": X.signature,
                  "X-TENANT-ID": k,
                  "X-ACCOUNT-ID": n,
                  "Cache-Control": "no-cache",
                  "Accept-Encoding": "gzip",
                  "user-agent": m
                };
                var a3 = {
                  url: "https://vapp.tmuyun.com".concat(U),
                  headers: a2,
                  body: V
                };
                $.post(a3, function () {
                  var a5 = e(c().mark(function a6(a7, a8, a9) {
                    return c().wrap(function (ab) {
                      for (;;) {
                        switch (ab.prev = ab.next) {
                          case 0:
                            if (ab.prev = 0, !a7) {
                              ab.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a7)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ab.next = 9;
                            break;
                          case 6:
                            ab.next = 8;
                            return $.wait(2000);
                          case 8:
                            a0(JSON.parse(a9));
                          case 9:
                            ab.next = 14;
                            break;
                          case 11:
                            ab.prev = 11;
                            ab.t0 = ab.catch(0);
                            $.logErr(ab.t0, a8);
                          case 14:
                            ab.prev = 14;
                            a0();
                            return ab.finish(14);
                          case 17:
                          case "end":
                            return ab.stop();
                        }
                      }
                    }, a6, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a7, a8, a9) {
                    return a5.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return Y.stop();
          }
        }
      }, T);
    }));
    return x.apply(this, arguments);
  }
  function y(S) {
    return z.apply(this, arguments);
  }
  function z() {
    z = e(c().mark(function U(V) {
      return c().wrap(function (Y) {
        for (;;) {
          switch (Y.prev = Y.next) {
            case 0:
              return Y.abrupt("return", new Promise(function (a0) {
                var a2 = {
                  url: "https://passport.tmuyun.com".concat(V),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": I(),
                    "Accept-Encoding": "gzip",
                    "user-agent": l
                  }
                };
                $.get(a2, function () {
                  var a5 = e(c().mark(function a6(a7, a8, a9) {
                    var ab, ac;
                    return c().wrap(function (ad) {
                      for (;;) {
                        switch (ad.prev = ad.next) {
                          case 0:
                            try {
                              if (a7) {
                                console.log("".concat(JSON.stringify(a7)));
                                console.log("".concat($.name, " API请求失败，请检查网路重试"));
                              } else {
                                if ($.isNode()) {
                                  for (ab = a8.headers["set-cookie"] || a8.headers["Set-Cookie"], ac = 0; ac < ab.length; ac++) {
                                    o += ab[ac].split(";")[0] + ";";
                                  }
                                } else {
                                  o = a8.headers["set-cookie"] || a8.headers["Set-Cookie"];
                                  o = N(o);
                                }
                                a0(JSON.parse(a9));
                              }
                            } catch (ah) {
                              $.logErr(ah, a8);
                            } finally {
                              a0();
                            }
                          case 1:
                          case "end":
                            return ad.stop();
                        }
                      }
                    }, a6);
                  }));
                  return function (a7, a8, a9) {
                    return a5.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return Y.stop();
          }
        }
      }, U);
    }));
    return z.apply(this, arguments);
  }
  function A(S) {
    return B.apply(this, arguments);
  }
  function B() {
    B = e(c().mark(function T(U) {
      return c().wrap(function (V) {
        for (;;) {
          switch (V.prev = V.next) {
            case 0:
              return V.abrupt("return", new Promise(function (X) {
                var Z = {
                  url: "https://passport.tmuyun.com".concat(U),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": I(),
                    "Accept-Encoding": "gzip",
                    "user-agent": l,
                    Cookie: o
                  },
                  "binary-mode": !0
                };
                $.get(Z, function () {
                  var a0 = e(c().mark(function a1(a2, a3, a4) {
                    var a6;
                    return c().wrap(function (a7) {
                      for (;;) {
                        switch (a7.prev = a7.next) {
                          case 0:
                            try {
                              a2 ? (console.log("".concat(JSON.stringify(a2))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : (a6 = "", a6 = $.isNode() ? a3.rawBody.toString("base64") : $.isQuanX() ? M(new Uint8Array(a3.bodyBytes)) : L(a4), X(a6));
                            } catch (aa) {
                              $.logErr(aa, a3);
                            } finally {
                              X();
                            }
                          case 1:
                          case "end":
                            return a7.stop();
                        }
                      }
                    }, a1);
                  }));
                  return function (a2, a3, a4) {
                    return a0.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return V.stop();
          }
        }
      }, T);
    }));
    return B.apply(this, arguments);
  }
  function C(S, T) {
    return D.apply(this, arguments);
  }
  function D() {
    D = e(c().mark(function T(U, V) {
      var X;
      return c().wrap(function (Y) {
        for (;;) {
          switch (Y.prev = Y.next) {
            case 0:
              X = G(U, V);
              return Y.abrupt("return", new Promise(function (a0) {
                var a1 = {
                  Connection: "Keep-Alive",
                  "X-REQUEST-ID": X.uuid,
                  "X-SIGNATURE": X.signature,
                  "Cache-Control": "no-cache",
                  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                  "Accept-Encoding": "gzip",
                  "user-agent": l,
                  Cookie: o
                };
                var a2 = {
                  url: "https://passport.tmuyun.com".concat(U),
                  headers: a1,
                  body: V
                };
                $.post(a2, function () {
                  var a4 = e(c().mark(function a5(a6, a7, a8) {
                    return c().wrap(function (a9) {
                      for (;;) {
                        switch (a9.prev = a9.next) {
                          case 0:
                            try {
                              a6 ? (console.log("".concat(JSON.stringify(a6))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : a0(JSON.parse(a8));
                            } catch (aa) {
                              $.logErr(aa, a7);
                            } finally {
                              a0();
                            }
                          case 1:
                          case "end":
                            return a9.stop();
                        }
                      }
                    }, a5);
                  }));
                  return function (a6, a7, a8) {
                    return a4.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return Y.stop();
          }
        }
      }, T);
    }));
    return D.apply(this, arguments);
  }
  function E(S) {
    return F.apply(this, arguments);
  }
  function F() {
    F = e(c().mark(function T(U) {
      return c().wrap(function (V) {
        for (;;) {
          switch (V.prev = V.next) {
            case 0:
              return V.abrupt("return", new Promise(function (X) {
                var Z = {
                  url: "".concat(h, "/classification"),
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(U)
                };
                $.post(Z, function (a0, a1, a2) {
                  try {
                    a0 ? (console.log("".concat(JSON.stringify(a0))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : X(JSON.parse(a2));
                  } catch (a3) {
                    $.logErr(a3, a1);
                  } finally {
                    X();
                  }
                });
              }));
            case 1:
            case "end":
              return V.stop();
          }
        }
      }, T);
    }));
    return F.apply(this, arguments);
  }
  function G(S, T) {
    var U = I(),
      V = "post%%".concat(S, "?").concat(T, "%%").concat(U, "%%");
    CryptoJS = i.createCryptoJS();
    var W = CryptoJS.HmacSHA256(V, j),
      X = CryptoJS.enc.Hex.stringify(W),
      Y = {
        uuid: U,
        signature: X
      };
    return Y;
  }
  function H(S) {
    var T = I(),
      U = Date.now();
    S.indexOf("?") > 0 && (S = S.substring(0, S.indexOf("?")));
    CryptoJS = i.createCryptoJS();
    var V = CryptoJS.SHA256("".concat(S, "&&").concat(r, "&&").concat(T, "&&").concat(U, "&&FR*r!isE5W&&").concat(k)).toString(),
      W = {
        uuid: T,
        time: U,
        signature: V
      };
    return W;
  }
  function I() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (S) {
      var T = 16 * Math.random() | 0,
        U = "x" === S ? T : 3 & T | 8;
      return U.toString(16);
    });
  }
  function J() {
    var S = "6.0.2",
      T = I(),
      U = K(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]),
      V = "Xiaomi " + U,
      W = "Android",
      X = "".concat(W.toUpperCase(), ";").concat("11", ";").concat(p, ";").concat(S, ";1.0;null;").concat(U),
      Y = "".concat(S, ";").concat(T, ";").concat(V, ";").concat(W, ";").concat("11", ";").concat("Release", ";").concat("6.10.0"),
      Z = {
        ua: X,
        commonUa: Y,
        uuid: T
      };
    return Z;
  }
  function K(S) {
    return S[Math.floor(Math.random() * S.length)];
  }
  function L(S) {
    for (var T = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", U = "", V = S.length, W = 0; W < V; W += 3) {
      var X = S[W] << 16 | S[W + 1] << 8 | S[W + 2];
      U += T[X >> 18 & 63];
      U += T[X >> 12 & 63];
      U += T[X >> 6 & 63];
      U += T[63 & X];
    }
    V % 3 == 1 ? U = U.slice(0, -2) + "==" : V % 3 == 2 && (U = U.slice(0, -1) + "=");
    return U;
  }
  function M(S) {
    for (var T = "", U = 0; U < S.length; U++) {
      T += String.fromCharCode(S[U]);
    }
    var V = btoa(T);
    return V;
  }
  function N(S) {
    var T = S.split(", "),
      U = T.map(function (V) {
        var W = V.split(";")[0];
        return W.trim();
      });
    return U.join(";");
  }
  function O() {
    return P.apply(this, arguments);
  }
  function P() {
    P = e(c().mark(function T() {
      var U;
      return c().wrap(function V(W) {
        for (;;) {
          switch (W.prev = W.next) {
            case 0:
              if (U = $.getdata("Utils_Code") || "", !U || !Object.keys(U).length) {
                W.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(U);
              return W.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return W.abrupt("return", new Promise(function () {
                var Z = e(c().mark(function a0(a1) {
                  return c().wrap(function a2(a3) {
                    for (;;) {
                      switch (a3.prev = a3.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (a5) {
                            $.setdata(a5, "Utils_Code");
                            eval(a5);
                            console.log("✅ Utils加载成功, 请继续");
                            a1(creatUtils());
                          });
                        case 1:
                        case "end":
                          return a3.stop();
                      }
                    }
                  }, a0);
                }));
                return function (a1) {
                  return Z.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return W.stop();
          }
        }
      }, T);
    }));
    return P.apply(this, arguments);
  }
  function Q(S) {
    return R.apply(this, arguments);
  }
  function R() {
    R = e(c().mark(function U(V) {
      return c().wrap(function (Y) {
        for (;;) {
          switch (Y.prev = Y.next) {
            case 0:
              if (!$.isNode()) {
                Y.next = 5;
                break;
              }
              Y.next = 3;
              return notify.sendNotify($.name, V);
            case 3:
              Y.next = 6;
              break;
            case 5:
              $.msg($.name, "", V);
            case 6:
            case "end":
              return Y.stop();
          }
        }
      }, U);
    }));
    return R.apply(this, arguments);
  }
  e(c().mark(function S() {
    return c().wrap(function (U) {
      for (;;) {
        switch (U.prev = U.next) {
          case 0:
            if ("" !== f && "" != g) {
              U.next = 4;
              break;
            }
            console.log("请输入手机号和选择app");
            U.next = 6;
            break;
          case 4:
            U.next = 6;
            return u();
          case 6:
          case "end":
            return U.stop();
        }
      }
    }, S);
  }))().catch(function (T) {
    $.log(T);
  }).finally(function () {
    $.done({});
  });
})();
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, o) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        o = o ? 1 * o : 20;
        o = e && e.timeout ? e.timeout : o;
        const [r, a] = i.split("@"),
          n = {
            url: `http://${a}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: o
            },
            headers: {
              "X-Key": r,
              Accept: "*/*"
            },
            timeout: o
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], void 0 === o) {
        return s;
      }
      return o;
    }
    lodash_set(t, e, s) {
      Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          o = s ? this.getval(s) : "";
        if (o) {
          try {
            const t = JSON.parse(o);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e),
          r = this.getval(i),
          a = i ? "null" === r ? null : r || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, o, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const r = {};
          this.lodash_set(r, o, t);
          s = this.setval(JSON.stringify(r), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return !0;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.cookie && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient.get(t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
                statusCode: i,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = s.decode(a, this.encoding);
            e(null, {
              status: i,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: i,
              response: o
            } = t;
            e(i, o, o && s.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient[s](t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let i = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: o,
            ...r
          } = t;
          this.got[s](o, r).then(t => {
            const {
                statusCode: s,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = i.decode(a, this.encoding);
            e(null, {
              status: s,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: o
            } = t;
            e(s, o, o && i.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let i = t[s];
        null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), e += `${s}=${i}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", i = "", o = {}) {
      const r = t => {
        const {
          $open: e,
          $copy: s,
          $media: i,
          $mediaMime: o
        } = t;
        switch (typeof t) {
          case void 0:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const r = {};
                  let a = t.openUrl || t.url || t["open-url"] || e;
                  a && Object.assign(r, {
                    action: "open-url",
                    url: a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  if (n && Object.assign(r, {
                    action: "clipboard",
                    text: n
                  }), i) {
                    let t, e, s;
                    if (i.startsWith("http")) {
                      t = i;
                    } else {
                      if (i.startsWith("data:")) {
                        const [t] = i.split(";"),
                          [, o] = i.split(",");
                        e = o;
                        s = t.replace("data:", "");
                      } else {
                        e = i;
                        s = (t => {
                          const e = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var s in e) if (0 === t.indexOf(s)) {
                            return e[s];
                          }
                          return null;
                        })(i);
                      }
                    }
                    Object.assign(r, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": o ?? s
                    });
                  }
                  Object.assign(r, {
                    "auto-dismiss": t["auto-dismiss"],
                    sound: t.sound
                  });
                  return r;
                }
              case "Loon":
                {
                  const s = {};
                  let o = t.openUrl || t.url || t["open-url"] || e;
                  o && Object.assign(s, {
                    openUrl: o
                  });
                  let r = t.mediaUrl || t["media-url"];
                  i?.startsWith("http") && (r = i);
                  r && Object.assign(s, {
                    mediaUrl: r
                  });
                  console.log(JSON.stringify(s));
                  return s;
                }
              case "Quantumult X":
                {
                  const o = {};
                  let r = t["open-url"] || t.url || t.openUrl || e;
                  r && Object.assign(o, {
                    "open-url": r
                  });
                  let a = t["media-url"] || t.mediaUrl;
                  i?.startsWith("http") && (a = i);
                  a && Object.assign(o, {
                    "media-url": a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  n && Object.assign(o, {
                    "update-pasteboard": n
                  });
                  console.log(JSON.stringify(o));
                  return o;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(e, s, i, r(o));
            break;
          case "Quantumult X":
            $notify(e, s, i, r(o));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.debug}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.info}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.warn}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.error}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, e, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, e, void 0 !== t.message ? t.message : t, t.stack);
          break;
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}