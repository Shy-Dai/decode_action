//Sun Dec 28 2025 12:20:58 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
/**
/* 注册链接: http://jigjei484.yyshbc.cn/#/Register?activityId=1002&invitationCode=z0h5ycgpU */

// 环境变量配置（多号用换行分隔，单号格式：Authorization令牌#完整User-Agent）
// 变量名：ZXSH
// 示例（2号）：
//eyJxxx1#GZHealth/1.2.9 (cn.yyzqsh.android; build:124; Android 14.2.0) okhttp/4.10.
//eyJxxx2#GZHealth/1.3.1 (cn.yyzqsh.ios; build:125; iOS 17.1.0) okhttp/4.10.
// 安卓的仅需变更ua里1.2.9版本号（按抓包参数），ios直接复制ua即可
//✅代瓜头子卡密版说明：ZJSH_KM 环境变量填卡密 或者在代码里直接填卡密 如果有新号，建议你下载cs版 卡密购买链接：http://w.kami.vip/s/AjeRa1CM
//✅卡密验证出错的话换线路
// 一、广告时长控制说明（关键！）
// 1. 控制模式：脚本默认启用"fixed"模式，固定时长为10秒
//    - auto模式：通过请求广告视频文件头信息，按"1MB≈8秒"估算播放时长（如2MB视频≈16秒），模拟真实观看 自动适配模式，无需手动设置固定时长(这种模式比较稳定)
//    - fixed模式：需手动将WATCH_DURATION_MODE改为"fixed"，并设置FIXED_WATCH_SEC（单位：秒）
// 2. 时长调整：若需固定观看（如强制看15秒），直接修改下方的FIXED_WATCH_SEC字段
// 3. 注意：时长过短（<5秒）可能被判定为无效观看，建议auto模式或fixed≥10秒

// 【免责声明】
// 脚本都是从github里找的 或者都是ai写的 
// 所发布的内容仅供学习，禁止用于其他用途，您必须在下载后的24小时内从计算机或手机中完全删除以上内容.严禁产生利益链！
// 作者对任何问题概不负责，包括但不限于由任何脚本错误导致的任何损失或损害. 间接使用脚本的任何用户，包括但不限于建立VPS或在某些行为违反国家/地区法律或相关法规的情况下进行传播。
// 作者对于由此引起的任何隐私泄漏或其他后果概不负责. 如果任何单位或个人认为该项目的脚本可能涉嫌侵犯其权利，则应及时通知并提供身份证明，所有权证明，我们将在收到认证文件后删除相关脚本.
// 任何以任何方式查看此项目的人或直接或间接使用该项目的任何脚本的使用者都应仔细阅读此声明。
// 请遵守相关法律法规，尊重目标平台的服务条款。
// 若您不同意本声明，请立即停止使用并删除本脚本。

// 🔴 1. 线路配配
const LINE_URL = 1; // 1: 线路1；2: 线路2；3: 线路3；其他值默认线路1
//===== 卡密配置=====
// 🔴 2. 卡密配置（前置，优先级：环境变量ZJSH_KM > 硬编码）
const CARD = process.env.ZJSH_KM || "km"; // 直接修改"里面的内容"为卡密，或配置环境变量ZJSH_KM
//૧(●´৺`●)૭
// ===================== 核心参数配置（前置便于修改）=====================
const TASK_CONFIG = {
  COUNTDOWN_REFRESH_INTERVAL: 1000,
  // 倒计时刷新频率（毫秒）：1000=1秒/次
  WATCH_DURATION_MODE: "fixed",
  // 观看时长模式（fixed=固定，auto=适配）
  FIXED_WATCH_SEC: 10,
  // 固定观看秒数（fixed模式用）
  INTERVAL_SEC: 5,
  // 广告间间隔秒数
  RETRY_COUNT: 3,
  // 接口重试次数
  TIMEOUT: 30000,
  // 请求超时时间（30秒）
  ACCOUNT_INTERVAL_SEC: 1,
  // 多号切换间隔（防风控）
  APP_VERSION: "v1.2.9",
  // 提交广告版本号
  SUBMIT_METHOD: "POST",
  // 提交广告请求方法
  PROFIT_WAIT_SEC: 4 // 收益同步等待时间（秒）
};
var _0x1sh = "safekodo.com.V8.2.8";
var __sk_Bt = __sk_o;
(function (B, z, E, o) {
  var __sk_zE = {
      B: 573,
      z: 510,
      E: 392
    },
    BA = __sk_o,
    Q = function () {
      return arguments[11298 + -11298]["split"](" ")["pop"]()["split"]("]")[6704 + 1340 + -8044];
    }(Object["prototype"]["toString"]["call"]((typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : this)[Symbol["toStringTag"]]));
  ;
  var G = W(),
    j = B(E);
  _0x1F0(j, j[-8759 + -203 * 42 + -43 * -405 >>> -9630 + -2759 * -1 + 7131], j[-7548 + -799 * -7 + -395 * -5 >>> -1 * -8561 + 6073 * -1 + -4 * 557]);
  var c = _0x1ir,
    H = _0x1ir_,
    q = c(H[-1 * -7955 + -1719 + -6224]),
    x = c(H[-1 * -2897 + 789 + -3679]);
  for (;;) {
    try {
      var D = -parseInt(BA(487)) / (-1 * 7043 + -2182 + 9226) + parseInt(BA(481)) / (255 + -3 * -1784 + -5 * 1121) * (-parseInt(BA(__sk_zE.B)) / (-4908 + 6031 + 1120 * -1)) + parseInt(BA(496)) / (-884 + -2892 + 3780) * (-parseInt(BA(426)) / (-5203 + 293 * -28 + -958 * -14)) + parseInt(BA(__sk_zE.z)) / (3510 + 7647 + 1593 * -7) + parseInt(BA(471)) / (-1727 * 4 + 4999 + 1916) + -parseInt(BA(__sk_zE.E)) / (-2 * 2434 + 7250 + -2374) + parseInt(BA(468)) / (-648 * 1 + 9480 + 3 * -2941);
      if (D === z) break;
      ;
      throw "";
    } catch (T) {
      j[q](j[x](8849 + -8982 + 133 >>> -9908 + -5552 + 16460, 9590 + -8133 * -1 + -17323 >>> -49 * -115 + 8235 + 13670 * -1)[139 * -39 + 2804 + 2618 >>> 1 * -19579 + 2195 + 27384]);
    }
    ;
  }
  ;
  function W() {
    var P = !!(3 * -695 + -122 * -22 + -599 * 1),
      C = k[`${(683028 + 721987 + -951068)["toString"](2671 * -3 + -2563 + 10610)}`]({
        x: [[`${(9531 + 1 * -1931 + -7171)["toString"](-3462 * -2 + -5 * -1091 + -12350)}u${(-2620634068 * -3 + -16285466 * -1393 + 70827 * -242209)["toString"](8998 + 8941 * -1 + 1 * -28)}`, P], [`w${(-33936295823 * -1 + 7 * -1985510521 + 15571113826)["toString"](455 + -5043 + 4621)}`, !P], [`${(-740012652831480 + 713110261616137 + -50719 * -9391157894)["toString"](7832 + -2 * 4213 + 626)}${(-566 + 9127 + 5 * -1575)["toString"](6837 + -6805)}`, P]],
        F: `v${(-3727 + 6789 * -1 + 10827)["toString"](9545 + -3 * 2351 + -2463)}u${(6232 + -6218)["toString"](6957 + 4046 + -10974)}`
      });
    C(E, E["String"], E["Array"]);
  }
  ;
  function k() {
    var P = Object["fromEntries"](this["x"]),
      [C, L, F] = arguments[-8585 + 9217 + -630][`${(-62 * -3720 + -487266 + 607768)["toString"](8282 + 8915 + -17169)}`](arguments);
    Object["defineProperty"](F["prototype"], `${(-1 * -1630034803 + 2 * -911590828 + 1158936947)["toString"](-931 * -1 + 6684 + -7583 * 1)}`, {
      [this["F"]]: function () {
        if (this["length"] === -1821 + 2699 + -877 && this[-349 + -1 * 9454 + 9803] === -461 * -5 + -13 * 101 + -991) {
          var n = new W(),
            f = ["[", "|", ",", "^", "\"", " ", "]", ">>>", "]]", "==", "[[", "$"];
          return f[(1298 + 282 + -1558)["toString"](5591 + -5520 + 45 * -1) + "a" + "p"]((w, b) => {
            b % (6307 + -4893 + -706 * 2) == -4 * 397 + -824 + 2412 && (n[w] = f[b + (-147 * 56 + -1 * 1307 + 9540)]);
          }), n;
        }
      },
      ...P
    }), Object["defineProperty"](L["prototype"], `isW${(-2342 * 4 + 8144 + 4825)["toString"](-3845 * 1 + 4 * -1481 + 9785)}Form${(10806 + -13 * 813)["toString"](-1 * 5471 + -1 * -1926 + -1 * -3561)}`, {
      [this["F"]]: function (n, f) {
        if (this["toString"]() === "l") {
          var w = "",
            b = ".",
            J = f ? n + "" + f : n,
            I = f ? 12595 + -12592 : "^";
          J[`sp${(-2 * -1101 + -1 * -3403 + -299 * 17)["toString"](4732 + 12 * -745 + -4 * -1058)}t`](I)["m" + (361 * -3 + -96 * 56 + -6469 * -1)["toString"](5900 + 55 * -75 + -1759) + "p"](A => {
            if (!A) return;
            w += L[fromCharCode](A);
          });
          ;
          var l = (A, M) => {
              var g = [`r${(3208 + -3194)["toString"](238 + 37 * -239 + -37 * -233)}pl${(-1 * -1035 + -21 * 316 + 8367)["toString"](-1 * -3522 + 7636 + -619 * 18)}`],
                t = parseInt(A[g](/./g, X => "\u200C\u200D\u2060\u2061\u2062\u2063\u2064"[`${(5222977 + -15149338 * 4 + 86697936)["toString"](227 * -26 + -7783 * 1 + 13721)}${(3365 + -3341 * 1)["toString"](3060 + 5329 + -1 * 8353)["toUpperCase"]()}${(-3 * 2922 + -3102 + 11883)["toString"](10174 + -10138)}`](X)), -788 * 8 + -1 * -2543 + 3768)["toString"](-4 * -1597 + 19 * -14 + 34 * -179) + "\u2062";
              return t[g](M, "");
            },
            N = l("\u2060\u2060\u2064\u200D\u2060\u2064\u2062\u200C\u2061", "")[`r${(3182 + 1 * -7706 + 4538)["toString"](-2622 + 7745 + -5101)}pl${(-73 + -1 * -5886 + -139 * 5)["toString"](4990 + -4968)}`](/[a-z]/g, ".")[`sli${(-4127 * 1 + -6320 + 10677)["toString"](-29 * -31 + 3193 + -194 * 21)}`](-3236 + 1137 + 2099, -(-7237 + -4058 * -2 + -878)),
            y = l("\u2061\u200D\u2064\u200D\u200D\u200C\u2063\u200D\u2062\u200D\u200C\u2060\u2062\u2064\u200D", "")[`s${(-646479 + 465405 + -983 * -721)["toString"](1 * -1510 + 4147 + 1 * -2608)}`](-1662 * -5 + -6623 + 7 * -241, -(-6614 + -1 * 4733 + -2 * -5674)),
            a = l("\u2064\u2063\u2064\u2061\u2060", "")[`${(-7389758 + -1473322 * 1 + -720929 * -54)["toString"](1 * -7690 + 777 * -7 + 13161)}`](-9 * -74 + -2771 * 1 + 2105, -(9608 + 2490 + -12097)),
            p = "v"[toUpperCase](),
            v = C[`_0x${(7102 + -4764 + 779 * -3)["toString"](-1 * 9903 + -51 * -139 + 2840)}s${(1548 + -2192 + -661 * -1)["toString"](-4460 + -1537 * 1 + -317 * -19)}`];
          return v && v === y + b + a + b + p + N ? w + this : w;
        }
      },
      ...P
    });
  }
})(__sk_E, -1 * -93224 + -63 * -1229 + 176 * -321, typeof window !== "undefined" ? window : global);
var __sk_z = function () {
    var __sk_zc = {
        B: 405
      },
      __sk_zj = {
        B: 518
      },
      BM = __sk_o,
      z = {};
    z["aZNGJ"] = "IfcLw", z["VCmdo"] = BM(__sk_zc.B);
    var E = z,
      o = !![];
    return function (Q, G) {
      var Bg = BM,
        j = {
          "tUzKL": function (H, q, x) {
            return H(q, x);
          }
        },
        c;
      if (o) c = function () {
        if (G) {
          var H = G["apply"](Q, arguments);
          return G = null, H;
        }
      };else {
        if (E["aZNGJ"] === E[Bg(__sk_zj.B)]) {
          var q = Q["slice"](-45 * 10 + 2474 * -2 + 5398, 313 + 3283 + -1796 * 2)["match"](/^ZH(\d{2})$/);
          return !q || (q = j["tUzKL"](G, q[4202 + -1 * 4201], 18747 + 18737 * -1), j(q)) ? -2497 + -9343 + 11845 : c[Bg(400)](q, 7 * -1327 + 9311 * -1 + 18601);
        } else c = function () {};
      }
      return o = ![], c;
    };
  }(),
  _0x51p = _0x1ir,
  _0x5Zq = _0x1ir_,
  _0x5OE = _0x51p(_0x5Zq[6042 + -6026]),
  _0x5xR = _0x51p(_0x5Zq[10 * -709 + -1562 + 8663]),
  _0x5BM = _0x51p(_0x5Zq[-8200 + -1446 + 9667]),
  __sk_B = __sk_z(this, function () {
    var B = {
      "LvAbl": function (z, E) {
        return z(E);
      }
    };
    return __sk_B[_0x5OE]()[_0x5xR](_0x5BM)[_0x5OE]()[B["LvAbl"](_0x51p, _0x5Zq[9571 + -9568])](__sk_B)[_0x5xR](_0x5BM);
  });
__sk_B();
var __sk_u = {};
__sk_u[__sk_Bt(516)] = ".jyfsaved.so", __sk_u[__sk_Bt(534)] = "6V7E8X0I8E9X1H8Z", __sk_u["ERROR_CODE_URL"] = "https://gitee.com/wanbian/123/raw/master/note1.json";
const CARD_CONFIG = __sk_u,
  MAX_ACCOUNT_COUNT = (() => {
    var BX = __sk_Bt,
      B = CARD["slice"](22 * -103 + 12 * -682 + 10450, 9765 + -8819 + -471 * 2)[BX(552)](/^ZH(\d{2})$/);
    return !B || (B = parseInt(B[1879 + -1 * 9437 + -7559 * -1], 1 * -6398 + -1 * 7445 + 13853), isNaN(B)) ? -3937 + -3992 + -2 * -3967 : Math["max"](B, 15872 + -1 * 15871);
  })(),
  fs = (console[__sk_Bt(559)](__sk_Bt(437)), console["log"](__sk_Bt(393)), console[__sk_Bt(559)]("\u3010\u5361\u5BC6\u4FE1\u606F\u3011\u5F53\u524D\u4F7F\u7528\u5361\u5BC6\uFF1A" + CARD + __sk_Bt(512) + (process[__sk_Bt(411)][__sk_Bt(429)] ? __sk_Bt(544) : __sk_Bt(446)) + "\uFF09"), console[__sk_Bt(559)]("\u3010\u8D26\u53F7\u9650\u5236\u3011\u6700\u5927\u8D26\u53F7\u6570\uFF1A" + MAX_ACCOUNT_COUNT + "\u4E2A"), console["log"](__sk_Bt(437)), require("fs")),
  path = require("path"),
  crypto = require("crypto"),
  querystring = require(__sk_Bt(577)),
  axios = require(__sk_Bt(561));
function get32BitUUID() {
  var __sk_zW = {
      B: 579,
      z: 382
    },
    BZ = __sk_Bt,
    z = {};
  z["uvQiR"] = "utf-8", z["piFOy"] = function (G, j) {
    return G + j;
  };
  var E = z,
    o,
    Q = path["resolve"](CARD_CONFIG["UUID_FILE"]);
  return fs[BZ(407)](Q) ? fs["readFileSync"](Q, BZ(__sk_zW.B))["trim"]() : (o = crypto["randomUUID"]()["replace"](/-/g, ""), fs[BZ(553)](Q, o, E["uvQiR"]), console["log"](E["piFOy"](BZ(__sk_zW.z), o)), o);
}
async function readErrorCodes() {
  var __sk_zT = {
      B: 535,
      z: 447,
      E: 403
    },
    BK = __sk_Bt,
    E = {};
  E[BK(616)] = "ImobZ", E["zQLaH"] = "iaQAD";
  var o = E;
  try {
    var Q = {};
    Q[BK(__sk_zT.B)] = 10000;
    var G = await axios[BK(__sk_zT.z)](CARD_CONFIG["ERROR_CODE_URL"], Q);
    const j = {};
    return (G[BK(403)]?.[BK(__sk_zT.E)] || [])["forEach"](c => {
      var BU = BK;
      j[c["cuowid"]] = c[BU(459)];
    }), j;
  } catch (c) {
    if (o["nfAxN"] !== o["zQLaH"]) return console["log"](BK(567) + c[BK(383)]), {};else o[Q[BK(379)]] = G[BK(459)];
  }
}
function __sk_E(_0x1ky) {
  _0x1ky["_0x1sh"] = _0x1sh;
  var _0x6Ci = [1][`sp${24494 .toString(24)}`]();
  var _0x6gJ = "$ 164 ^ 157 ^ 114 ^ 157 ^ 167 ^ 145 ^ 162 ^ 103 ^ 141 ^ 163 ^ 145 >>>^| 146 ^ 151 ^ 154 ^ 164 ^ 145 ^ 162 >>>^| 155 ^ 141 ^ 160 >>>^| 143 ^ 157 ^ 156 ^ 163 ^ 164 ^ 162 ^ 165 ^ 143 ^ 164 ^ 157 ^ 162 >>>^| 61 ^ 62 ^ 63 ^ 64 ^ 61 ^ 62 ^ 63 ^ 64 ^ 61 ^ 62 ^ 101 ^ 102 ^ 103 ^ 104 ^ 105 ^ 101 >>>^| 151 ^ 156 ^ 144 ^ 145 ^ 170 ^ 117 ^ 146 >>>^| 160 ^ 162 ^ 157 ^ 164 ^ 157 ^ 164 ^ 171 ^ 160 ^ 145 >>>^| 163 ^ 160 ^ 154 ^ 151 ^ 143 ^ 145 >>>^| 163 ^ 160 ^ 154 ^ 151 ^ 164 >>>^| 162 ^ 145 ^ 160 ^ 154 ^ 141 ^ 143 ^ 145 >>>^| 163 ^ 154 ^ 151 ^ 143 ^ 145 >>>^| 163 ^ 145 ^ 141 ^ 162 ^ 143 ^ 150 >>>^| 160 ^ 165 ^ 163 ^ 150 >>>^| 157 ^ 156 ^ 153 ^ 145 ^ 171 ^ 144 ^ 157 ^ 167 ^ 156 >>>^| 153 ^ 145 ^ 171 ^ 103 ^ 157 ^ 144 ^ 145 >>>^| 143 ^ 141 ^ 154 ^ 154 >>>^| 164 ^ 157 ^ 123 ^ 164 ^ 162 ^ 151 ^ 156 ^ 147 >>>^| 101 ^ 102 ^ 103 ^ 104 ^ 105 ^ 101 ^ 61 ^ 62 ^ 63 ^ 64 ^ 61 ^ 62 ^ 63 ^ 64 ^ 61 ^ 62 >>>^| 146 ^ 162 ^ 157 ^ 155 ^ 103 ^ 150 ^ 141 ^ 162 ^ 103 ^ 157 ^ 144 ^ 145 >>>^| 143 ^ 150 ^ 141 ^ 162 ^ 103 ^ 157 ^ 144 ^ 145 ^ 101 ^ 164 >>>^| 164 ^ 145 ^ 163 ^ 164 >>>^| 50 ^ 50 ^ 50 ^ 56 ^ 53 ^ 51 ^ 53 ^ 51 ^ 53 ^ 51 ^ 53 ^ 44 ==";
  var _0x6SE = 10131123108397;
  var _0x6l6 = 39931013653108;
  var _0x6To = "l"[`${622 .toString(33)}W${15280 .toString(33)}${15 .toString(33).toUpperCase()}${29456836 .toString(33)}`](_0x6SE, _0x6l6);
  for (var _0x6RP in _0x6Ci) {
    _0x6gJ = _0x6gJ["r" + _0x6To](_0x6Ci[_0x6RP], _0x6RP);
  }
  ;
  function _0x6zL() {
    while (_0x6gJ[_0x6Wj] === " " || _0x6gJ[_0x6Wj] === "\n" || _0x6gJ[_0x6Wj] === "\r" || _0x6gJ[_0x6Wj] === "\t") {
      _0x6Wj++;
    }
  }
  ;
  function _0x6TU() {
    _0x6zL();
    if (_0x6gJ[_0x6Wj] === "\"") {
      _0x6Wj++;
      var _0x6EM = "";
      while (_0x6gJ[_0x6Wj] !== "\"") {
        _0x6EM += _0x6gJ[_0x6Wj];
        _0x6Wj++;
      }
      _0x6Wj++;
      return _0x6EM;
    }
  }
  ;
  function _0x6k7() {
    _0x6zL();
    if (_0x6gJ[_0x6Wj] === "{") {
      _0x6Wj++;
      _0x6zL();
      var _0x6q0 = {};
      while (_0x6gJ[_0x6Wj] !== "}") {
        var _0x6RP = _0x6TU();
        _0x6zL();
        var value = _0x6hQ();
        _0x6q0[_0x6RP] = value;
      }
      _0x6Wj++;
      return _0x6q0;
    }
  }
  ;
  function _0x6KW() {
    if (_0x6gJ[_0x6Wj] === "[") {
      _0x6Wj++;
      _0x6zL();
      var _0x6q0 = [];
      var _0x6lt = true;
      while (_0x6gJ[_0x6Wj] !== "]") {
        if (!_0x6lt) {
          _0x6X5();
          _0x6zL();
        }
        ;
        var value = _0x6hQ();
        _0x6q0.push(value);
        _0x6lt = false;
      }
      ;
      _0x6Wj++;
      return _0x6q0;
    }
  }
  ;
  function _0x6Kb() {
    var _0x6Bf = _0x6Wj;
    if (_0x6gJ[_0x6Wj] === "-") _0x6Wj++;
    if (_0x6gJ[_0x6Wj] === "0") {
      _0x6Wj++;
    } else if (_0x6gJ[_0x6Wj] >= "1" && _0x6gJ[_0x6Wj] <= "9") {
      _0x6Wj++;
      while (_0x6gJ[_0x6Wj] >= "0" && _0x6gJ[_0x6Wj] <= "9") {
        _0x6Wj++;
      }
    }
    if (_0x6gJ[_0x6Wj] === ".") {
      _0x6Wj++;
      while (_0x6gJ[_0x6Wj] >= "0" && _0x6gJ[_0x6Wj] <= "9") {
        _0x6Wj++;
      }
    }
    if (_0x6gJ[_0x6Wj] === "e" || _0x6gJ[_0x6Wj] === "E") {
      _0x6Wj++;
      if (_0x6gJ[_0x6Wj] === "-" || _0x6gJ[_0x6Wj] === "+") {
        _0x6Wj++;
      }
      while (_0x6gJ[_0x6Wj] >= "0" && _0x6gJ[_0x6Wj] <= "9") {
        _0x6Wj++;
      }
    }
    if (_0x6Wj > _0x6Bf) {
      return _0x6gJ.slice(_0x6Bf, _0x6Wj);
    }
  }
  ;
  function _0x6X5() {
    if (_0x6gJ[_0x6Wj] !== ",") {}
    _0x6Wj++;
  }
  ;
  var _0x6Wj = 0;
  function _0x6hQ() {
    _0x6zL();
    return _0x6TU() || _0x6k7() || _0x6KW() || _0x6Kb() || _0x6zL();
  }
  var _0x1ir_ = _0x6hQ();
  ;
  function _0x1ir(_0x6SL) {
    var _0x6F9 = {
      "6": "_0x6za",
      "16": "_0x6WK",
      "-2": "B",
      "15": "_0x6Eu",
      "4": "o",
      "13": "_0x6l4",
      "12": "X",
      "2": "_0x6z1"
    };
    var _0x6Cv = "";
    _0x6SL[22 .toString(24) + "a" + "p"](item => {
      _0x6Cv += String[fromCharCode](Number(0 + _0x6F9[8 - (2 + 1 + 1)] + item));
    });
    return _0x6Cv;
  }
  ;
  var _0x60Q = _0x1ky;
  _0x60Q["_0x1ir_"] = _0x1ir_;
  _0x60Q["_0x1ir"] = _0x1ir;
  var _0x6do = "0x61O0o142O0o143O0o144O0x65O0o146O0x67O0x68O0o151O0x6aO0o153O0o154O0x6dO0x6eO0o157O0x70O0x71O0o162O0o163O0o164O0x75O0o166O0o167O0x78O0x79O0o172O0o101O0x42O0o103O0x44O0o105O0x46O0o107O0x48O0o111O0x4aO0x4bO0x4cO0o115O0x4eO0o117O0x50O0x51O0x52O0x53O0x54O0x55O0x56O0o127O0x58O0x59O0x5aO0o60O0x31O0x32O0o63O0x34O0x35O0o66O0x37O0o70O0x39O0x2bO0o57O0x3dO";
  function _0x6jJ() {}
  ;
  _0x6jJ[_0x1ir(_0x1ir_[16])] = _0x6pS => {
    return String[_0x1ir(_0x1ir_[18])](_0x6pS);
  };
  var _0x6Iy = _0x6do[_0x1ir(_0x1ir_[8])](String[_0x1ir(_0x1ir_[18])](150 / 2 + 4));
  var _0x6TL = "";
  _0x6Iy[_0x1ir(_0x1ir_[2])](item => {
    _0x6TL += _0x6jJ[_0x1ir(_0x1ir_[16])](item);
  });
  _0x60Q["_0x1ho"] = _0x6TL;
  var _0x1pC = function _0x1pC(_0x6jF) {
    this._0x6jF = _0x6jF;
  };
  _0x60Q._0x1F0 = function (t, i, n) {
    var o,
      b = [],
      _0x2c14x1 = n || "_0x3Nbob2mbo";
    for (o in this[385642 .toString(26) + "t" + 12815 .toString(26)] || {}) _0x2c14x1 === o ? b.push(t !== o) : b.push(t === o);
  }.bind(_0x1ky);
  _0x1pC[_0x1ir(_0x1ir_[6])][_0x1ir(_0x1ir_[16])] = function () {
    return this._0x6jF[_0x1ir(_0x1ir_[16])]()[_0x1ir(_0x1ir_[9])](/,/g, "");
  };
  ;
  _0x1ky[_0x1ir(_0x1ir_[13])] = function () {
    var v = _0x1ky[`${14 .toString(21)}v${14 .toString(21)}nt`] || arguments[-5860 + 13 * -427 + 11411];
    if (v[_0x1ir(_0x1ir_[14])] == 41 * -50 + -29 * -188 + -3279) return ![];
  };
  ;
  var _0x7N6 = _0x1ho;
  var _0x7pj = ["char", "th", "a", "ll", "c", "har", "wn", "ring", "t", "P", "ode", "h", "s", "type", "leng", "O", "pr", "S", "C", "A", "has", "to", "f", "app", "index", "roperty", "ly", "from", "oto", "pu"];
  var _0x70T = _0x70T || function (_) {
    function E() {}
    var D = {},
      B = D._0x7OM = {},
      A = B._0x7jb = {
        _0x7f1: function (D) {
          E[_0x7pj[16] + _0x7pj[28] + _0x7pj[13]] = this;
          var B = new E();
          return D && B._0x77i(D), B[_0x7pj[20] + _0x7pj[15] + _0x7pj[6] + _0x7pj[9] + _0x7pj[25]]("_0x7Mq") || (B._0x7Mq = function () {
            B._0x7Mg._0x7Mq[_0x7pj[23] + _0x7pj[26]](this, arguments);
          }), (B._0x7Mq[_0x7pj[16] + _0x7pj[28] + _0x7pj[13]] = B)._0x7Mg = this, B;
        },
        _0x7K9: function () {
          var D = this._0x7f1();
          return D._0x7Mq[_0x7pj[23] + _0x7pj[26]](D, arguments), D;
        },
        _0x7Mq: function () {},
        _0x77i: function (D) {
          for (var B in D) D[_0x7pj[20] + _0x7pj[15] + _0x7pj[6] + _0x7pj[9] + _0x7pj[25]](B) && (this[B] = D[B]);
          D[_0x7pj[20] + _0x7pj[15] + _0x7pj[6] + _0x7pj[9] + _0x7pj[25]](_0x7pj[21] + _0x7pj[17] + _0x7pj[7]) && (this[_0x7pj[21] + _0x7pj[17] + _0x7pj[7]] = D[_0x7pj[21] + _0x7pj[17] + _0x7pj[7]]);
        }
      },
      t = B._0x7U2 = A._0x7f1({
        _0x7Mq: function (D, B) {
          D = this._0x7fo = D || [], this._0x7sH = null != B ? B : 4 * D[_0x7pj[14] + _0x7pj[1]];
        },
        [_0x7pj[21] + _0x7pj[17] + _0x7pj[7]]: function (D) {
          return (D || F)._0x7PY(this);
        },
        _0x7pG: function (D) {
          var B = this._0x7fo,
            E = D._0x7fo,
            A = this._0x7sH;
          if (D = D._0x7sH, this._0x7TD(), A % 4) for (var C = 0; C < D; C++) B[A + C >>> 2] |= (E[C >>> 2] >>> 24 - C % 4 * 8 & 255) << 24 - (A + C) % 4 * 8;else if (65535 < E[_0x7pj[14] + _0x7pj[1]]) for (C = 0; C < D; C += 4) B[A + C >>> 2] = E[C >>> 2];else B[_0x7pj[29] + _0x7pj[12] + _0x7pj[11]][_0x7pj[23] + _0x7pj[26]](B, E);
          return this._0x7sH += D, this;
        },
        _0x7TD: function () {
          var D = this._0x7fo,
            B = this._0x7sH;
          D[B >>> 2] &= 4294967295 << 32 - B % 4 * 8, D[_0x7pj[14] + _0x7pj[1]] = _.ceil(B / 4);
        }
      }),
      C = D._0x7gh = {},
      F = C._0x7KK = {
        _0x7si: function () {
          for (var D = "C7989F384EE6DDF7D72B5F3662846280FFA966663A296125E17D5448638AF5AAE6E16F5DB73698C4966C9871A94EFAE93B44F38FB10CBD11718926F540E4ADAA69FC6502ED74BB498C84C49394D1161D00115F8EF000827D6A32059A9A713828383271DDBCF972E13FE2E2009E14E04243E96CD959CD7C30845CEA228D73CE5C53C758344EE5BB382913A124B286948674D0E16FC2BA96A5C2F9FF61D9A8AABCC0F97D9B5E852E3801E3E37F190276775730E93871CCE029EEA545DC522879ED92A82969AFD677AA2920A6E8831EA60BFFCC6FE592A7E459894C9666A5A26DF5A5036C6F057C9E65130DB44B29AA1B6094C13DFE93EA611425E767E99F738B141992A0C905DF80B3CB1161EE396A50FC907EB51080E50AC1F3ACEE71A71F0CB31C1CC2624EBDBE18D864CAABC1B443F7EF73E1D08A87EFE59C6B558AEDF24BD703515325BF29B84319BCA2E04D10A12BBADB9E1B4E962315ABDA8C3AA9FC938854371AE0A1DABEC13A4C444FFABF88734B38A858BA2F6EEA2E50E0861818DC4AB52D8EB82CE892AFE011E9CC558849DF70E8E2B1D1E3439974AC067FD746B13A3A66379F018035ED99472A8F82F30327943B06C7BA21EBDF29736BA45CDD1E3709EE5E1C41D3543AC965B3FAE998D9187B98ECDE322A3AFA5DEAF047A4663FB33A0DBAF838E8CEFCD605A2C770D9BBC6C7337679013C0783A77068D17E927893B94348B0E929823F967794D9B459F88F16E84AB8A45B3681EC3B94B9CB77C7CDFBA49B6E5CD75799580B2FB4CAB4BC9DD813B7295B11D8B73B7029628F7C3F5CF29750FB02F031011B118D6A7B8DF277E21CB45A0A12F61CE88DC44C370EA421A421532EA5667DC4A38704D2CC13518100845065DD5F99FAD898376E6510362756D798B2BF237E6F90DE00CF1B9BEBBA5C5755BFDC8AB8244B7ECCE334AD907429C1D6452C1B3EDE04B1221A5D72B87A127E177E0845563C7D8F849C12F05020D0E5F6F6CB94ADF5538F95640F3B439B091683C2FCF6E0D8B103292A8B8894E4E9307A77E12C396D6ECC613C65A024C39A6619DFCA9028985AF807F11DBA3F6DD0C5D0C1BC07DC5A58EE25E4BAE71C72238C94819631B818CE11046D2EF10710984690E6B3D9D4BDE5097C1C216E03473CB6D4D5B2A3EF3E2C8FD4F34F7C01B4265708BF4A6AB13E2FEA3382D314B614E336E5A6C8E072FDA74D4083A20E649CA099DCB4D6944D776FB8F18633B969D67B3892B82C6086BDF010C6477DA3F19582F3FCE2C032E84267477C91DAC2595404F04107911DA8D287C7AEC3A556631BCCD2C7B7F360C71F8F0578E787A1AE489A9EEE324EB09CE26CA104D77D2D6BFC2E17C0C5BD723B0277446E6D738D62D0A3A88702D7309330E9E55BB7ABA410C2A287FA7BB288A668C0CFEBFB96658E1D3F5AC3C99E3E933AF3D57B7F540045794AE466E352B434F8993D514DA72713A87714A0DAB4A8144315EE66823447ECFD61463F4E8DACE6EC4754C279A54D0BE9214664CECCF36A8FF1165A104D478AC4CA8C0F9D2A7EA7045851C20B17882CB51CD91BBE03301119448C88A644A2A6767D355C4592B8360830DA49868E4F35184D1CD3A46E1413127EC78247FB1C0943513C72C57FE99815C70C8234AA774B51F2D0AB03A6F8E47CC05CE4498D1CC71E0523447CF6E8EED554C4A4C1603AC699F29573264AC37245F50D0BC4559944C9C7EFC13DF6455A44A3E804305425E89EAA3B076E4BD548BB6D2852D415D4BF4BEDAAE13073B93BF26BE4DAE2C9939B0F520E56705A3C4E027F75B49912E534C10C6A72FA2C73740DB8C15A5055701445017732363251A67DEBAC4AFD0357F72D2A53E7BD395632BA9C9CF1ED8E98E93F96E6E88A9739756994377F1E48AF1FA0A3F4626FA48CEA90246E673387B4D5D7B819620DDE726D8CE5D118F4CDDE3826B40D616383A17B18181860B67BF587D4F7890B9330D4A612DF0243F290B4ED7D6FC40777E7139EAD478968473ABFB5D1B386A9B54F60596E9278C0CFB7D3AF9B5673FA93E128B6648FB3B1CC5E16A0BB8E1B5251F674D7B917F90EC2136850B70886F030D5C21F8CC02E61C12C7F475E90A7D0A702FCB8E39F3FBF31E93858CF30C49BA8A36DAA33FC66D48DA799F17E56A32DDF5BC2D7F5A61850758A52743CA45676DC7929EC8F1325D0C4C44773F39A53901C41A39531D76BEFC416BAA3C115144F35114531A52C6F6428A1F2A3F3EB922CB926A24837AC8C457EB2F03D66A9CE60F497731CCCB2BA50A5EC20B23F5110BD72F8A0E708BC842D85B4E48FE868663570DB2EBE66FE6CE50980C90B7EA1E0E0D13881F8D9DD4AA3E8C9D622B1CD18E784004DB7B9BCEC2BA089840C4DA15604214BB22A16A6A3C4A873F65C5A3BA1D07C8C5DFD677A685DA654FEFB55C507BD479EEC72883CF1AFC87C2D90E964025BDE6434DB2B20F417346B100F8D4B595507020339AA3DB849F9D85A1F213A36744515DC35FD59745BBBEF9FE6AAFACBD52A91054FB982C1F3634AB01D2541685DFE1285AB28F22FB23DC07A2E886A6DC21A2BD6BC67D68D8914DD8FCF9B50661477E5BF75F21498BB39D47ED5A52566D643D479B35A1E42612664CF8D5BA3958A22C66B0EBC9C47C507D9B37D0DFD6B1437AC8AF12AA7AAB681396E4368895CD4D0BC496DB67032F76FF4EBA4AA3DA3772742E9A95337B9294B76F24C5D2BAE77E847867838665CD73DA74B53C55F7D1AB34B8E5B189835377B371EAA2CBC49886139DF1A57A30D0549234677EFAFD00933EE2BE5B494BB2F1F603E073E2172D406D9469D47AAF888DDE4FF73BB8D64EF7EDB5184CE100C51FF2AD6DF8245F85F3C9C3FEA3108BF98DA1DB41C252F60A3B48C168F9EC02CDFB1AA540A81F5E0FB55B428B2D9E26DA7157E9129E8092EF7C77234971477A8E7A7CDDA8762DB67704B506D0D41E2DD3E4598C34A5F629A266CE47BDA755E2889595A443E9DDD69D06C4AB514B52095ADC24752625F8C310DC8A832D027319F1EB9859452490E3C3BCD601CDE26FDC5FFC9BD88E368E86F2968E29A4501B842E9FF042142D14CE70868FCCD10DAFD54A3687CDE7BD140382994903A58F1ED24273E35DD4782A2CEF6AFDF8C4F41D4BCC1E104C17C608454DD6A6185C251E975A4FB54A7A7171DF66D84A1C43231F980F08F7B308C7606CEE88681E38E02F8B9C1AB17239FAA427557AEC7D4A434304D0B8349167F1462BB1B769439A1F77818168A702D8A07B090E6AFB630E4933958EEC16D3F9361329F2D8FEBF1027225EA06509E45CDAD1CDA999CC515958436B38DE46EFB5346622419121D8D297088CDBB3BEBC03A9B72BAE258BF4238D18C062DADD437709E623C5829D7E51A807810195D65E58A165611B9DB26CE75A41A0A68623FFB96F17DCC7962B886AD78179AF31FFBDDCE4B57670BFCE346EC31E7A0ED14C33D4F9A10314D30B3468A4E04ACEFD7DF4700BD39024E904EAEA518096BABCF9A307A1D5D40DDF988D649F4AAE0B96E7ED74EA848FA3425A223BB36450E0510A6B8BD57145480FBA6C75D43F6705282000D90E5505037B028FCBA90FD7FF626B7B22D0B6AC0E2F8A7A791F85382B480E95C12499162DC911D823E4295B5764552F132E84448A395560BC78DBE387234FDEE3BD0DF9687E101AE386CFC600D49A757153FD6828A89C1D5F24468AB6CE0689C2BC8716D3DBFE8AB4431E41BC22A25E508D8802E331CC978A27C215431D51D3D2368055CC6C981F71FB549EBCBEF2837864FB6E3587AB4DFA72463B3FAEF683D79E597A307E6C28A9E6F8C7FC32540F2305D12B96618BA37AE39A0ADB167688C96F59B01FF7A1B1D3EA93BE13DC6E962158AD7F620FC1A51A3B5FEB89ADC95C40D82B4C9A2CCF5764D46E6B5401DF76F3087883114304608C640D6027E82D71C4C4BA7A188DE008C0D15CE8722F3A5FEA7AD5C135668A1C4C687FA42C114017E1D193B279DE93CB0B879C65F2D39D34FEAEE3DAD7DEBAC7144AB26F0F281A9C35B2919B35DB0242213273430CF7DF1AE0E5B7244C3BC62916BEFEB49A25AADD6D92A2652CC56034BF7A3E511820A4BDFB4308A1DDE7F6EAF56554106C6B91908A91E1FA753A16ADFCD95EEF62222DD92931305663CCC51132DF7B324057CCF6BD4C00E500AEC039272B9893450AD743BFD2B3A24E71FA32371FB77BA570B12FEA2F115476911006B08EB4D517D879DDF016878E221CF4B478E6B07942373B2B9BBDE234958568329AF770488BCE225E3D0756A7EB118C30FB53FD1ABBD089796412CE7542DEBB448B98E28E2DC250BDFD5759D6CB81A09119F8F91613E8CAA0444EE888AF47CA446159D225FD7DDCA7748B18DEEA1B01A9D201D3AA8C2E2589AE3586B41A1339E844A27D64CB1EE4DE39203EC7AC2C433C65992862F97AF22C61A4B583EB7B3F38B27FE62F3C82015732981697BE32FE767D1FEBE9A290C5119709EE0B103D28975E7FAD5D707EDF9C4AA1F5CE33F65B2338F73D5F690E93AEC46FE5172C9541F6615FA2C66320F825A4AFCE37D06B0FD68F5CD60D5537FD71F1E3179DDAFB2D24FEC01B2F3A291ABD011D4E6139670888FAA551A12A6502DC7FD46CC4ABA6738926D66A1D22144A01E08CC2C19255D3899E5B31F962785084008C4D8BF007289FF7EC12190DADDA4701DA7531BED3C613182FA9896776ED1EDF1B8AB619F970AB5F176CDB55F0ABF513EFB40A77629112224E4A8C526370B23E3AD82C6DACFA718350356E2DCCCAA97BF269CC74F7CD53647AF3B4EAD61806AAFE7EC18F6EB8E27B9E1D37F9015BE0678C0B9CAE19E0E1609A096A8647D1B0A5F0EB30928A9286B84601CFDBCEFE51E57747F6156CDB105290BE1419887E078BB84A3308C0D01E9C05792276B91F808FDECCDD334CB0FE58FD051F64A1D71B88454374E8DE5511794E3A21802DF48A9E920BE9188484C4538CB043C1AC0F65C857450266FDEFD1A895A595547C3086C6EEE2EB7EA44B014F4061B1FED1986F8960DB953E7ACEB599CA764A4ABC183C0D5E0C9B4F8509577A3B8DA3D81B6F9C17260472BBC275EA51A0778CB943525F9E628463D73965A854F312C651E37585C9CF70B9DF85B19A076320063441B677D2F02D5F9999AA3069BC2D9A3C6C92F60FB6C5C8BD667C6FAD4240DCAFCE82FB1F517C5FCFB381525433A236D42024FB12831710F2BF73CCA1C61764B881ABADB59D6E0929DBD06F56701B6AE3BF82F34BC218FB7645BE0849B5E0CCF3EDAEA7612400F20C1E673092E14D2BAF2FB49EF23976BC382BDA415A7138AED0605C2632F50763666F0961B9FFC2ECB3E750D2641A4175CB865AFA6BA5DDDF2ADA9C755F1D5FC3D8BC0EB55E1AD0DEC97711A16562B2D82329E2F3A3B0835CAED956EFB9A32A6527D796C2677A87A5D42D62AA2D211B41093C0999EB11A0256A14B9E6C0F4CE194A3D3689F170885CE5B27FBE0B7B18980755CE1B75DB964607C2B34D30E1271E841E0AC519FCB10C213F9B12356974ACDBE036F033A4D77A7D0B78A5771A22B79603F452B4242C667D22169F230E90B37235295CC1079AD9152939C35F4E090E01C5282AA2C39AE24A07BC990C5F91D65039735179E4B6B65F50ED50321D386B8D95EB17510F15F5FBFE6FC15BB7BCEBB1D82467C9D9BF149972BCF41EDBBC8389149DD2CD4530A750BF36623E3B5F94F21DA19BA5F2CE826434E398F22F8A134415C4657DC6AA49B7DD0C3A8799E21756711081AE07E77DB9BCBD192129D646216F2385FA7FFF8B85DD8C4E38BE51D6534D3A3CC214B7D57C40724B577D543786A33743D127CD79B64B0DFD6366A03B0025EB9B1ADB1E358F5B126F6BFA48C148E957FA4B68466C19CFF0DF60AF9F60B27F639AB1FCA098E5BBBBBE7CA6EECD017905BA18E1FD6F1C49F14CD93CF4B3BCD24BB535DC57B5BF436DD5CE5794175CADD0B9193D8814B0C3E9A24E765B2113DC4CD855F85B9AF5B6D3318E5D0CBD5C0EFAD675F30C986613433613E926612BA96AE8D58C4B6C0896CADA3866E3C963EFA7E2D8698F3F68EB5DBD99D5578658812A043260F6A4E889FCB757BDBB5991B0B06D8038D18665BD2828A3563846F3AC6E50815DC1BE5F20EEDAD164482F89CE881E714513FFCD08E91F0DB0857BE482786A30917EA05B0C6DCE123E5323BE741C81914B47BB858A515E2185FC82954FA8B027E89860911509745405AB00027EBDE069F0F9C04D0BF6046A40BC628D4393B815FEA00D51B69A9EBBD64DD5E4EBCE25E43981F085CE8082C34C37DA4115C33D268F9C2A046D9ADD85F47D215F5139125BDDFA92D5A9E12241A8565F9BFD9E370A021339A432F4F5EEA0F69F5B66E65E8E7BC316CEDFCC59BA2A558B3AA61CA3D5B8684D1F521BC433ED9D561A92F19101DF3CC5659357F91291EC189696CB3A36BA25EBDC0EBC66A818AC16364ABC46C2B0D04EC5B97A40EA166BD80A20BBDD1D2F0B32B621FCD646FF622F8E01AAE8F1FA3C9352FE54172EFE696B522986B583FEEA5A948F9AA1B57950CBE1B25E550575B3897BE1AF929547434038FC029BE9528FC13DA136C2483449C7B40368B70D6BFD1810F5F72B096F1D4BB461163F109A34A852188B6D2B0519CA864DC4A494D274084D4FE5EB2969FF014E4B9050795AD9B423716C5B91C60FE05EE061C15164810E15B080324DC6729E331DC6715527A1D88512F92DA4F918C8F000DD4E93509F351D3AF25C9B039FDFD7957C45270E4E07860BB16A010A10EDB5A28E39671B3ED95F1410C07970102F1D233351E1B5C857C7DDE0621562AC35DEE819EE20631DF1407753EB218C9044C2158902029A659DF4AD42AB3E0BD145BC1028EEE30406E416295063CCEBBAD6ED4157B1D2D9A017EE6E6A18DD41C407BAB01EB35F01796FCC9E0647A6D0AC6D5E187DB4CE6B2A463DE264E2C96DDA47D0518E5781ABE614DCCF5210D59626DE7BF39A4443886DFEB33818EE40806839FD21616870ED09B9BB13358266AA566C471ECCE3B08B7CE1C9A2FC9637C6BF14F624AC7679AC517F9CC61C3EC27FDB33ED535FB099C00AC1FA3976E5A96F0F39B130C22D0808783C116CC2901C3BF71051D2E2161AE49080073EC4FE8998F30AEDB502E2A4C121AD0E6A1F54C256923FE0AEB99ED0A9A93415209B9542C8B314D6BC75C0697FD800FF89DCDCD222E9038539009D162220BE00F9E5D942771", B = D[_0x7pj[14] + _0x7pj[1]], E = [], A = 0; A < B; A += 2) E[A >>> 3] |= parseInt(D.substr(A, 2), 16) << 24 - A % 8 * 4;
          return new t._0x7Mq(E, B / 2);
        }
      },
      x = C._0x7K7 = {
        _0x7PY: function (D) {
          var B = D._0x7fo;
          D = D._0x7sH;
          for (var E = [], A = 0; A < D; A++) E[_0x7pj[29] + _0x7pj[12] + _0x7pj[11]](String[_0x7pj[27] + _0x7pj[18] + _0x7pj[5] + _0x7pj[18] + _0x7pj[10]](B[A >>> 2] >>> 24 - A % 4 * 8 & 255));
          return E.join("");
        },
        _0x7si: function (D) {
          for (var B = D[_0x7pj[14] + _0x7pj[1]], E = [], A = 0; A < B; A++) E[A >>> 2] |= (255 & D[_0x7pj[0] + _0x7pj[18] + _0x7pj[10] + _0x7pj[19] + _0x7pj[8]](A)) << 24 - A % 4 * 8;
          return new t._0x7Mq(E, B);
        }
      },
      i = C._0x7Cs = {
        _0x7PY: function (D) {
          try {
            return decodeURIComponent(escape(x._0x7PY(D)));
          } catch (D) {}
        }
      };
    return B._0x7v0 = A._0x7f1({
      _0x7sv: function () {
        this._0x7nv = new t._0x7Mq(), this._0x7VJ = 0;
      },
      _0x7nZ: function (D) {
        "string" == typeof D && (D = i._0x7si(D)), this._0x7nv._0x7pG(D), this._0x7VJ += D._0x7sH;
      },
      _0x77q: function (D) {
        var B = this._0x7nv,
          E = B._0x7fo,
          A = B._0x7sH,
          C = this._0x7ru,
          F = A / (4 * C),
          F = D ? _.ceil(F) : _.max((0 | F) - this._0x7cc, 0),
          A = _.min(4 * (D = F * C), A);
        if (D) {
          for (var x = 0; x < D; x += C) this._0x72J(E, x);
          x = E.splice(0, D), B._0x7sH -= A;
        }
        return new t._0x7Mq(x, A);
      },
      _0x7cc: 0
    }), D._0x76e = {}, D;
  }(Math);
  !function () {
    var _ = _0x70T,
      t = _._0x7OM._0x7U2;
    _._0x7gh._0x76D = {
      _0x7PY: function () {
        var D = _._0x7gh._0x7KK._0x7si();
        var B = D._0x7fo,
          E = D._0x7sH,
          A = this._0x7wg;
        D._0x7TD(), D = [];
        for (var C = 0; C < E; C += 3) for (var F = (B[C >>> 2] >>> 24 - C % 4 * 8 & 255) << 16 | (B[C + 1 >>> 2] >>> 24 - (C + 1) % 4 * 8 & 255) << 8 | B[C + 2 >>> 2] >>> 24 - (C + 2) % 4 * 8 & 255, x = 0; x < 4 && C + 0.75 * x < E; x++) D[_0x7pj[29] + _0x7pj[12] + _0x7pj[11]](A[_0x7pj[0] + _0x7pj[19] + _0x7pj[8]](F >>> 6 * (3 - x) & 63));
        if (B = A[_0x7pj[0] + _0x7pj[19] + _0x7pj[8]](64)) for (; D[_0x7pj[14] + _0x7pj[1]] % 4;) D[_0x7pj[29] + _0x7pj[12] + _0x7pj[11]](B);
        return D.join("");
      },
      _0x7si: function (D) {
        var B = D[_0x7pj[14] + _0x7pj[1]],
          E = this._0x7wg;
        (F = E[_0x7pj[0] + _0x7pj[19] + _0x7pj[8]](64)) && -1 != (F = D[_0x7pj[24] + _0x7pj[15] + _0x7pj[22]](F)) && (B = F);
        for (var A, C, F = [], x = 0, _ = 0; _ < B; _++) _ % 4 && (A = E[_0x7pj[24] + _0x7pj[15] + _0x7pj[22]](D[_0x7pj[0] + _0x7pj[19] + _0x7pj[8]](_ - 1)) << _ % 4 * 2, C = E[_0x7pj[24] + _0x7pj[15] + _0x7pj[22]](D[_0x7pj[0] + _0x7pj[19] + _0x7pj[8]](_)) >>> 6 - _ % 4 * 2, F[x >>> 2] |= (A | C) << 24 - x % 4 * 8, x++);
        return t._0x7K9(F, x);
      },
      _0x7wg: _0x7N6
    };
  }(), _0x70T._0x7OM._0x7wT || function () {
    var D = _0x70T,
      B = D._0x7OM,
      E = B._0x7jb,
      A = B._0x7U2,
      C = B._0x7v0,
      F = D._0x7gh._0x76D,
      x = (D._0x7gh._0x7Cs._0x7si, B._0x7wT = C._0x7f1({
        _0x74D: E._0x7f1(),
        _0x7LW: function (D, B) {
          return this._0x7K9(2, D, B);
        },
        _0x7Mq: function (D, B, E) {
          this._0x74D = this._0x74D._0x7f1(E), this._0x7Jh = D, this._0x7Vt = B, this._0x7sv();
        },
        _0x7sv: function () {
          C._0x7sv[_0x7pj[4] + _0x7pj[2] + _0x7pj[3]](this), this._0x7Ux();
        },
        _0x7eu: function (D) {
          return D && this._0x7nZ(D), this._0x71L();
        },
        _0x7ep: function (A) {
          return {
            _0x7tr: function () {
              var [D, B, E] = [F._0x7PY(), {
                _0x7fo: [825373492, 825373492, 825377090, 1128547649],
                _0x7sH: 16
              }, {
                _0x7Mf: {
                  _0x7fo: [1094861636, 1161900338, 859058482, 859058482],
                  _0x7sH: 16
                },
                _0x70I: _0x70T._0x70I._0x7ct,
                padding: _0x70T._0x7Xx._0x7Gm
              }];
              return ("string" == typeof B ? c : n)._0x7tr(A, D, B, E)[_0x7pj[21] + _0x7pj[17] + _0x7pj[7]](_0x70T._0x7gh._0x7Cs).split("$");
            }
          };
        }
      })),
      _ = D._0x70I = {},
      t = (B._0x77h = E._0x7f1({
        _0x7LW: function (D, B) {
          return this._0x72R._0x7K9(D, B);
        },
        _0x7Mq: function (D, B) {
          this._0x739 = D, this._0x7nJ = B;
        }
      }))._0x7f1(),
      i = (t._0x72R = t._0x7f1({
        _0x7j9: function (D, B) {
          var E = this._0x739,
            A = E._0x7ru,
            C = D.slice(B, B + A);
          E._0x7ln(D, B), function (D, B, E) {
            var A = this._0x7nJ;
            A ? this._0x7nJ = void 0 : A = this._0x7hY;
            for (var C = 0; C < E; C++) D[B + C] ^= A[C];
          }[_0x7pj[4] + _0x7pj[2] + _0x7pj[3]](this, D, B, A), this._0x7hY = C;
        }
      }), _ = _._0x7ct = t, t = (D._0x7Xx = {})._0x7Gm = {
        _0x7Gs: function (D) {
          D._0x7sH -= 255 & D._0x7fo[D._0x7sH - 1 >>> 2];
        }
      }, B._0x7NY = x._0x7f1({
        _0x7sv: function () {
          x._0x7sv[_0x7pj[4] + _0x7pj[2] + _0x7pj[3]](this);
          var D = this._0x74D,
            B = D._0x7Mf,
            E = (D = D._0x70I)._0x7LW;
          this._0x7cc = 1, this._0x7Kh = E[_0x7pj[4] + _0x7pj[2] + _0x7pj[3]](D, this, B && B._0x7fo);
        },
        _0x72J: function (D, B) {
          this._0x7Kh._0x7j9(D, B);
        },
        _0x71L: function () {
          var D,
            B = this._0x74D.padding;
          return 1 == this._0x7Jh ? (B._0x7Xx(this._0x7nv, this._0x7ru), D = this._0x77q(!0)) : (D = this._0x77q(!0), B._0x7Gs(D)), D;
        },
        _0x7ru: 4
      }), B._0x7rF = E._0x7f1({
        _0x7Mq: function (D) {
          this._0x77i(D);
        }
      })),
      _ = (D._0x7Wp = {})._0x7he = {
        _0x7si: function (D) {
          var B,
            E = (D = F._0x7si(D))._0x7fo;
          return 1398893684 == E[0] && 1701076831 == E[1] && (B = A._0x7K9(E.slice(2, 4)), E.splice(0, 4), D._0x7sH -= 16), i._0x7K9({
            _0x7Zz: D,
            salt: B
          });
        }
      },
      n = B._0x7ly = E._0x7f1({
        _0x74D: E._0x7f1({
          _0x7Wp: _
        }),
        _0x7tr: function (D, B, E, A) {
          return A = this._0x74D._0x7f1(A), B = this._0x7pV(B, A._0x7Wp), D._0x7LW(E, A)._0x7eu(B._0x7Zz);
        },
        _0x7pV: function (D, B) {
          return "string" == typeof D ? B._0x7si(D, this) : D;
        }
      });
  }(), function () {
    for (var D = _0x70T, B = D._0x7OM._0x7NY, E = D._0x76e, x = [], A = [], _ = [], t = [], i = [], n = [], C = [], F = 0; F < 256; F++) C[F] = F < 128 ? F << 1 : F << 1 ^ 283;
    for (var p = 0, j = 0, F = 0; F < 256; F++) {
      var s = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4,
        r = C[A[x[p] = s = s >>> 8 ^ 255 & s ^ 99] = p],
        f = C[r],
        h = C[f];
      p, p, p, p, _[s] = (f = 16843009 * h ^ 65537 * f ^ 257 * r ^ 16843008 * p) << 24 | f >>> 8, t[s] = f << 16 | f >>> 16, i[s] = f << 8 | f >>> 24, n[s] = f, p ? (p = r ^ C[C[C[h ^ r]]], j ^= C[C[j]]) : p = j = 1;
    }
    var o = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
      E = E._0x7pH = B._0x7f1({
        _0x7Ux: function () {
          for (var D, B = (A = this._0x7Vt)._0x7fo, E = A._0x7sH / 4, A = 4 * ((this._0x7Mr = E + 6) + 1), C = this._0x7hK = [], F = 0; F < A; F++) F < E ? C[F] = B[F] : (D = C[F - 1], F % E ? 6 < E && 4 == F % E && (D = x[D >>> 24] << 24 | x[D >>> 16 & 255] << 16 | x[D >>> 8 & 255] << 8 | x[255 & D]) : (D = x[(D = D << 8 | D >>> 24) >>> 24] << 24 | x[D >>> 16 & 255] << 16 | x[D >>> 8 & 255] << 8 | x[255 & D], D ^= o[F / E | 0] << 24), C[F] = C[F - E] ^ D);
          for (B = this._0x76C = [], E = 0; E < A; E++) F = A - E, D = E % 4 ? C[F] : C[F - 4], B[E] = E < 4 || F <= 4 ? D : _[x[D >>> 24]] ^ t[x[D >>> 16 & 255]] ^ i[x[D >>> 8 & 255]] ^ n[x[255 & D]];
        },
        _0x7ln: function (D, B) {
          var E = D[B + 1];
          D[B + 1] = D[B + 3], D[B + 3] = E, this._0x7j8(D, B, this._0x76C, _, t, i, n, A), E = D[B + 1], D[B + 1] = D[B + 3], D[B + 3] = E;
        },
        _0x7j8: function (D, B, E, A, C, F, x, _) {
          for (var t = this._0x7Mr, i = D[B] ^ E[0], n = D[B + 1] ^ E[1], p = D[B + 2] ^ E[2], j = D[B + 3] ^ E[3], s = 4, r = 1; r < t; r++) var f = A[i >>> 24] ^ C[n >>> 16 & 255] ^ F[p >>> 8 & 255] ^ x[255 & j] ^ E[s++], h = A[n >>> 24] ^ C[p >>> 16 & 255] ^ F[j >>> 8 & 255] ^ x[255 & i] ^ E[s++], o = A[p >>> 24] ^ C[j >>> 16 & 255] ^ F[i >>> 8 & 255] ^ x[255 & n] ^ E[s++], j = A[j >>> 24] ^ C[i >>> 16 & 255] ^ F[n >>> 8 & 255] ^ x[255 & p] ^ E[s++], i = f, n = h, p = o;
          f = (_[i >>> 24] << 24 | _[n >>> 16 & 255] << 16 | _[p >>> 8 & 255] << 8 | _[255 & j]) ^ E[s++], h = (_[n >>> 24] << 24 | _[p >>> 16 & 255] << 16 | _[j >>> 8 & 255] << 8 | _[255 & i]) ^ E[s++], o = (_[p >>> 24] << 24 | _[j >>> 16 & 255] << 16 | _[i >>> 8 & 255] << 8 | _[255 & n]) ^ E[s++], j = (_[j >>> 24] << 24 | _[i >>> 16 & 255] << 16 | _[n >>> 8 & 255] << 8 | _[255 & p]) ^ E[s++], D[B] = f, D[B + 1] = h, D[B + 2] = o, D[B + 3] = j;
        }
      });
    D._0x7pH = B._0x7ep(E);
  }();
  var Eg = _0x70T["_0x7pH"]["_0x7tr"]();
  var _0x7Np = function _0x4wB() {
    return 10 === 10;
  };
  var _0x7G1 = _0x7Vy(Eg, _0x7U9, !_0x7Np());
  function _0x7Vy(_0x7di, _0x721, _0x7Rr) {
    return _0x7di[_0x1ir(_0x1ir_[2])](_0x7ki => {
      if (typeof _0x721 === "function") {
        return _0x721(_0x7ki, _0x7Rr);
      } else {
        return _0x7ki[_0x721];
      }
    }).reduce((_0x7Rl, _0x7a7, _0x7Va) => {
      if (!_0x7Rl[_0x7a7]) {
        _0x7Rl[_0x7a7] = [_0x7di[_0x7Va]];
      } else {
        _0x7Rl[_0x7a7] = _0x7Rl[_0x7a7].concat(_0x7di[_0x7Va]);
      }
      return _0x7Rl;
    }, {});
  }
  ;
  function _0x7U9(_0x7ki, _0x7Rr) {
    return _0x7Rr ? !~_0x7ki[_0x1ir(_0x1ir_[5])]("/x28") : !!~_0x7ki[_0x1ir(_0x1ir_[5])]("/x28");
  }
  __sk_E = function () {
    return _0x7G1[![]];
  };
  return __sk_E();
}
function formatDateTime(B) {
  var __sk_zF = {
      B: 489,
      z: 551,
      E: 592
    },
    Be = __sk_Bt,
    z = {
      "fTgQX": function (E, o) {
        return E + o;
      },
      "uhcrP": function (E, o) {
        return E(o);
      },
      "BiwxZ": function (E, o) {
        return E(o);
      }
    };
  return B[Be(__sk_zF.B)]() + ("-" + String(z["fTgQX"](B["getMonth"](), -3507 + -919 * -3 + 751))[Be(592)](1936 + -283 * -9 + -4481, "0") + "-" + String(B[Be(__sk_zF.z)]())[Be(__sk_zF.E)](-1906 * -1 + 7632 + -2384 * 4, "0") + " " + String(B["getHours"]())[Be(592)](104 * -37 + 6410 + -2560, "0") + ":" + z["uhcrP"](String, B["getMinutes"]())[Be(__sk_zF.E)](7654 + -4 * 1913, "0") + ":") + z[Be(537)](String, B[Be(505)]())["padStart"](-3746 + -3339 + 7087, "0");
}
async function cardValidation() {
  var __sk_zI = {
      B: 490,
      z: 492,
      E: 376,
      o: 386,
      Q: 626,
      G: 517,
      j: 457,
      c: 507,
      H: 536,
      q: 394,
      x: 403,
      D: 559,
      W: 615,
      k: 559,
      T: 525,
      P: 511,
      C: 457,
      L: 460
    },
    Bi = __sk_Bt,
    H = {
      "dRFGD": function (p, v, A) {
        return p(v, A);
      },
      "vaFWc": function (p, v) {
        return p + v;
      },
      "kraDz": Bi(587),
      "IcIKk": Bi(__sk_zI.B),
      "CKoxy": "http://api2.1wxyun.com/?type=17",
      "etetO": Bi(608),
      "lgHop": "http://apiw1.1wxyun.com/?type=17",
      "OPVWR": Bi(488),
      "zZqix": Bi(__sk_zI.z),
      "QlLOc": "http://api.1wxyun.com/?type=24",
      "yWxFL": "nEABq",
      "CwIsB": Bi(390),
      "XYFje": Bi(__sk_zI.E),
      "Kxamw": function (p, v) {
        return p(v);
      },
      "yigvJ": function (p, v) {
        return p + v;
      },
      "ouXmX": Bi(485),
      "UQhJT": "-83006",
      "DTgDA": Bi(__sk_zI.o),
      "gSZLp": Bi(408),
      "ZrZQu": Bi(__sk_zI.Q),
      "LvalJ": Bi(__sk_zI.G),
      "FBpmB": Bi(416),
      "zzAvk": function (p, v) {
        return p(v);
      },
      "tuScU": "==================================================\n",
      "vVhgq": Bi(__sk_zI.j)
    };
  console["log"](H["IcIKk"] + CARD);
  var q = get32BitUUID(),
    x = (console["log"]("[\u2139\uFE0F INFO] \u4F7F\u7528UUID\uFF1A" + q + "\n"), await readErrorCodes());
  let D, W;
  switch (LINE_URL) {
    case 39 * -137 + 5299 + 46:
      D = H["CKoxy"], W = H["etetO"];
      break;
    case 5683 + 8 * -710:
      D = H["lgHop"], W = H[Bi(450)];
      break;
    default:
      D = H[Bi(__sk_zI.c)], W = H[Bi(__sk_zI.H)];
  }
  let k;
  try {
    if (H["yWxFL"] !== "JIwcX") {
      var T = {};
      T[Bi(__sk_zI.q)] = CARD_CONFIG[Bi(534)], T["Card"] = CARD, T["Version"] = H["CwIsB"], T[Bi(603)] = q;
      var P = {};
      P[Bi(590)] = H["XYFje"];
      var C = {};
      C[Bi(509)] = P, C["timeout"] = 10000;
      var L = await axios["post"](D, querystring["stringify"](T), C);
      k = H["Kxamw"](String, L[Bi(__sk_zI.x)])[Bi(571)]();
    } else H["dRFGD"](C, Bi(470), Bi(596)), D["exit"](4933 + -4933 * 1);
  } catch (v) {
    if (false) return x[D]()[W](k)[T]()[P(C[8443 + 4 * -2110])](L)[F](n);else console[Bi(559)](H["yigvJ"](H["ouXmX"], v[Bi(383)])), process["exit"](-1 * 9179 + -8776 + 17956);
  }
  x[k] ? (console[Bi(__sk_zI.D)](Bi(615) + x[k] + Bi(594) + k + "\uFF09"), process[Bi(501)](1 * -5065 + 73 * -1 + 5139)) : H[Bi(529)] === k ? (console["log"](H[Bi(444)]), process[Bi(501)](5701 + -143 * 57 + 2451)) : 9908 + 6486 + 38 * -431 !== k["length"] && (console[Bi(__sk_zI.D)](Bi(__sk_zI.W) + k + "\uFF08\u672A\u77E5\u9519\u8BEF\u7801\uFF09"), process["exit"](-41 * 118 + 2499 + -390 * -6)), console[Bi(559)](Bi(454));
  let F;
  try {
    var f = {};
    f["Softid"] = CARD_CONFIG["SOFTID"], f["UserName"] = CARD;
    var w = {};
    w[Bi(590)] = H[Bi(593)];
    var b = {};
    b["headers"] = w, b[Bi(535)] = 10000;
    var J = await axios["post"](W, querystring["stringify"](f), b);
    F = String(J[Bi(__sk_zI.x)])["trim"]();
  } catch (M) {
    console[Bi(559)](H["vaFWc"](H["gSZLp"], M["message"])), process["exit"](8142 + -8779 + 638);
  }
  try {
    var I,
      N = new Date(F),
      y = new Date();
    if (console[Bi(559)](H["ZrZQu"]), console[Bi(__sk_zI.k)](H["LvalJ"] + H[Bi(__sk_zI.T)](formatDateTime, y)), console["log"](H["FBpmB"] + formatDateTime(N)), H["zzAvk"](isNaN, N["getTime"]())) throw new Error(Bi(__sk_zI.P));
    N < y ? (console[Bi(559)](Bi(498)), process[Bi(501)](-31 * -240 + 114 + -7553)) : (I = Math[Bi(427)]((N - y) / (2321802 + -5348262 + 6626460)), console["log"]("[\u2705 SUCCESS] \u5269\u4F59\u7EA6\uFF1A" + I + "\u5C0F\u65F6"), console[Bi(559)](Bi(406)), console["log"](H[Bi(565)]));
  } catch (g) {
    Bi(__sk_zI.C) === H[Bi(540)] ? (console[Bi(559)](Bi(__sk_zI.L) + g[Bi(383)]), process["exit"](-8482 + -15 * -37 + -1 * -7928)) : (D["log"](H["vaFWc"](H[Bi(549)], f[Bi(383)])), w[Bi(501)](9588 + -3117 + -6470));
  }
}
function __sk_o(B, z) {
  var E = __sk_E();
  return __sk_o = function (o, Q) {
    o = o - (-11 * -578 + -1527 + -4457 * 1);
    var G = E[o];
    var j = _0x1ir,
      c = _0x1ir_,
      H = j(c[-6387 + 3851 + -11 * -232]),
      q = j(c[-6040 + -1075 * -8 + -2545]),
      x = j(c[-25 * -183 + -241 * 5 + -3360]),
      D = j(c[17840 + -17840]);
    ;
    ;
    var W = f => {
      var w = {},
        b = w[H][q](f)[x](-1080 + 7461 + -6373, -(-4955 + 3314 + 1642))[D]();
      try {
        return String(w["_0x8unH"]) === b;
      } catch (J) {
        return ![];
      }
    };
    var k = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : this;
    if (W(__sk_o["OXQpzN"])) {
      var f = _0x1ir,
        w = _0x1ir_;
      var T = function (b, J) {
        var [I, l] = function* (A) {
            while (!![]) yield A;
          }(String()),
          N = I + T;
        var y = f(w[9986 + 1 * -6612 + 839 * -4]);
        for (var [A, M] = function* (X) {
            while (!![]) yield X;
          }(-1 * -877 + -2816 + 1940 - (-11 * -142 + 251 + -1812)), [g, t] = function* (X) {
            while (!![]) yield X;
          }(undefined); t = b["charAt"](M++); ~t && (g = A % (-8990 + 8941 + -53 * -1) ? g * (6085 + -8168 * -1 + -14189) + t : t, A++ % (-2 * 2679 + -3071 + 8433)) ? I += N[f(w[5281 * -1 + 1277 + 4023])](M + (-4736 * 2 + -859 + 10341)) - (-241 * -21 + 6493 + -3 * 3848) !== -6 * 77 + 471 * -4 + 2346 ? String[y](-1981 + -6769 + 9005 & g >> (-(4 * -2021 + -1 * -8339 + -253) * A & 2 * -3722 + 4933 * -2 + 17316)) : A : 17 * -397 + 6402 + 347) {
          t = J[f(w[7080 + -1 * 1471 + -5604])](t);
        }
        var a = f(w[-63 * 137 + -6590 + 15240]),
          p = f(w[1314 + -1233 + -65]),
          v = f(w[-9008 + 2109 * -2 + 13236]);
        for (var X = -8657 * -1 + 3 * -3323 + 1312, Z = I[(271674 + 526481 + -418981)["toString"](-5252 + -9 * -505 + -733 * -1) + "t" + (-5131 * -1 + 6036 + -11150)["toString"](6796 + -2009 + -4761)]; X < Z; X++) {
          l += "%" + ("00" + I[a](X)[p](9492 + -5 * -753 + -13241))[v](-(-1 * 7187 + -1997 * 1 + 9186));
        }
        return decodeURIComponent(l);
      };
      __sk_o["jLWRma"] = T, B = arguments, __sk_o["OXQpzN"] = !![];
    }
    ;
    ;
    var P = k["_0x1ho"];
    var C = E[-372 * 5 + 9497 + -1 * 7637],
      L = o + C,
      F = B[L];
    if (!F) {
      var b = _0x1ir,
        J = _0x1ir_,
        I = b(J[5649 + -5643]),
        l = b(J[6320 + -32 * 197]),
        N = "\\w+ *\\(\\) *{\\w+ *",
        y = "['|\"].+['|\"];? *}",
        a = "" + (16424027 * -1 + 61381553 + -317 * -6364)["toString"](-9936 + 8143 * -1 + 18114),
        p = function () {
          return typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : this;
          ;
        }()["R" + (9 * -983 + -2610 + 11865)["toString"](224 * -23 + 2368 + 2812) + (101 * -7 + 5 * -302 + 2231)["toString"](-211 * -37 + 8429 + -16 * 1013)["toUpperCase"]() + "x" + (-1213 * 5 + 191 + 5899)["toString"](3 * -2613 + 670 * -13 + 16577)],
        v = function () {
          return "O";
        },
        A = function () {
          return this[a]++;
        };
      var n = {
        [a]: 10149 + -10148,
        [a + v() + "f"]: A,
        [l]: A,
        "_0x8LOJ": []
      };
      var M = function (g) {
        for (var t = -1 * 4870 + 2 * -1279 + 7428, X = n[_0x8LOJ][(1338921 + 1 * -959747)["toString"](-3498 + -1746 * -3 + -1714) + "t" + (8033 + -3990 * -1 + 138 * -87)["toString"](6466 + 5 * -1288)] + (-5205 + -8543 * 1 + 13751); t < X; t++) {
          n[_0x8LOJ][b(J[3064 + 9110 + -12162])](Math["round"](Math["random"]())), X = n[_0x8LOJ]["length"];
        }
        return g(n[_0x8LOJ][-3224 + 8431 + -5207]);
      };
      n == -2 * 1772 + -8377 * 1 + 11922 && n == 4288 + -1492 + -2794 && !p(N + y)[b(J[-80 + -4 * 2119 + -16 * -536])](v[l]()) && M(__sk_o), G = __sk_o["jLWRma"](G, P), B[L] = G;
    } else G = F;
    return G;
  }, __sk_o(B, z);
}
var __sk_V = {};
__sk_V[__sk_Bt(535)] = 10000, axios["get"]("http://hn216.api.yesapi.cn/?s=App.Guest_Counter.SmartRefresh&return_data=0&type=forever&name=JD_HOLIDAY&other_uuid=5f4dcc3b5aa765d61d8327deb882cf99&value=1&app_key=4580F36023BE16625A0511258F421DD4&sign=5B97273F5CE2E2736BC02B60B3426C73", __sk_V)[__sk_Bt(547)](B => console[__sk_Bt(559)]("===== \u811A\u672C\u8BA1\u6570 =====\n\uD83D\uDD25 \u7D2F\u8BA1\u8FD0\u884C\uFF1A" + (B["data"]?.[__sk_Bt(403)]?.["after_value"] || __sk_Bt(415)) + "\n\n===== \u516C\u544A\u4FE1\u606F =====\n\uD83D\uDCBB \u9752\u9F99\u811A\u672C\uFF1A\uD83D\uDCBB \u9752\u9F99\u811A\u672C\uFF1Ahttps://pan.quark.cn/s/a40df35868e3\n\n\uD83D\uDCAC QQ\u7FA4\u804A\uFF1Ahttps://qm.qq.com/q/ut7YMmoKYw\n\n\u2708\uFE0F \u98DE\u673A\u7FA4\u804A\uFF1Ahttps://pd.qq.com/s/c3uhwlhun"))["catch"](() => console[__sk_Bt(559)]("===== \u811A\u672C\u8BA1\u6570 =====\n\uD83D\uDD25 \u7D2F\u8BA1\u8FD0\u884C\uFF1A\u83B7\u53D6\u5931\u8D25\n\n===== \u516C\u544A\u4FE1\u606F =====\n\uD83D\uDCBB \u9752\u9F99\u811A\u672C\uFF1Ahttps://pan.quark.cn/s/a40df35868e3\n\n\uD83D\uDCAC QQ\u7FA4\u804A\uFF1Ahttps://qm.qq.com/q/ut7YMmoKYw\n\n\u2708\uFE0F \u98DE\u673A\u7FA4\u804A\uFF1Ahttps://pd.qq.com/s/c3uhwlhun")), (async () => {
  var __sk_EM = {
      B: 441,
      z: 445,
      E: 483,
      o: 412,
      Q: 598,
      G: 513,
      j: 517,
      c: 406,
      H: 618,
      q: 467,
      x: 437,
      D: 484,
      W: 469,
      k: 404,
      T: 605,
      P: 587,
      C: 501,
      L: 418,
      F: 625
    },
    __sk_EA = {
      B: 479,
      z: 461,
      E: 456,
      o: 622,
      Q: 585,
      G: 501,
      j: 374,
      c: 596,
      H: 503,
      q: 466,
      x: 383,
      D: 543
    },
    __sk_Ea = {
      B: 482,
      z: 576,
      E: 522,
      o: 621,
      Q: 606,
      G: 493,
      j: 456,
      c: 624,
      H: 452,
      q: 566,
      x: 472,
      D: 533,
      W: 583,
      k: 439,
      T: 381,
      P: 528,
      C: 396,
      L: 584,
      F: 535,
      n: 463,
      f: 506,
      w: 486,
      b: 427,
      J: 428,
      I: 530,
      l: 620,
      N: 464,
      y: 495,
      a: 383,
      p: 442,
      v: 523,
      A: 380,
      M: 500,
      g: 391,
      t: 422,
      X: 387,
      Z: 581
    },
    __sk_El = {
      B: 560,
      z: 582,
      E: 515
    },
    __sk_EL = {
      B: 552
    },
    __sk_EW = {
      B: 576
    },
    __sk_Ex = {
      B: 575,
      z: 601,
      E: 403
    },
    __sk_Eq = {
      B: 456,
      z: 409,
      E: 559
    },
    __sk_EH = {
      B: 463,
      z: 541,
      E: 423
    },
    Bm = __sk_Bt,
    E = {
      "IjNzu": function (f, w) {
        return f / w;
      },
      "CrWrg": function (f, w) {
        return f <= w;
      },
      "shdhS": function (f, w) {
        return f(w);
      },
      "CbMLh": function (f, w) {
        return f + w;
      },
      "XUXZa": "uindH",
      "oFfeT": "IeVHE",
      "RPHLR": function (f, w) {
        return f === w;
      },
      "wXZvU": Bm(596),
      "eZqVi": "IHFOk",
      "ikcyx": function (f, w, b) {
        return f(w, b);
      },
      "kOrjJ": function (f, w) {
        return f || w;
      },
      "SWovk": function (f, w) {
        return f + w;
      },
      "wnxKE": Bm(__sk_EM.B),
      "AOJCN": function (f, w) {
        return f !== w;
      },
      "ueXmQ": Bm(520),
      "FOqct": function (f, w, b) {
        return f(w, b);
      },
      "DJkrv": function (f, w) {
        return f * w;
      },
      "VnAFX": function (f, w) {
        return f === w;
      },
      "IqJrx": Bm(599),
      "CyrZW": function (f, w, b) {
        return f(w, b);
      },
      "nmEft": "*/*",
      "TMjUg": "SUCCESS",
      "PYDKv": function (f, w, b) {
        return f(w, b);
      },
      "KExBE": Bm(478),
      "VLjus": Bm(417),
      "oANHp": function (f, w) {
        return f - w;
      },
      "GRdLL": Bm(__sk_EM.z),
      "NGUyS": function (f, w, b) {
        return f(w, b);
      },
      "zxvRD": Bm(451),
      "ALXqj": function (f, w, b) {
        return f(w, b);
      },
      "bSmQB": function (f, w) {
        return f <= w;
      },
      "DZnff": Bm(550),
      "kUfrJ": "uuqkY",
      "OEzgm": function (f, w) {
        return f - w;
      },
      "ClPvi": function (f, w) {
        return f < w;
      },
      "jHAmr": function (f, w) {
        return f === w;
      },
      "hJzjW": function (f, w) {
        return f + w;
      },
      "GxMBO": Bm(623),
      "mFqbi": Bm(555),
      "YFKTl": Bm(617),
      "BUUoe": Bm(538),
      "PvPZP": "- ID\uFF1A",
      "xIwXE": function (f, w, b) {
        return f(w, b);
      },
      "tqiqH": Bm(__sk_EM.E),
      "NXyuo": Bm(476),
      "kyzdv": function (f, w, b) {
        return f(w, b);
      },
      "rochC": function (f, w, b) {
        return f(w, b);
      },
      "aWtEZ": function (f, w) {
        return f + w;
      },
      "jVTFp": Bm(564),
      "WXwPS": "child_process",
      "EbtKu": "exec",
      "djSOc": Bm(__sk_EM.o),
      "tTEJz": function (f, w) {
        return f * w;
      },
      "UYxlF": function (f, w, b) {
        return f(w, b);
      },
      "qeimO": function (f, w, b) {
        return f(w, b);
      },
      "FyVtu": Bm(__sk_EM.Q),
      "NTXLd": "gzip",
      "FkICL": Bm(588),
      "sRLry": Bm(453),
      "jIGuH": Bm(__sk_EM.G),
      "dgRZm": function (f, w) {
        return f + w;
      },
      "qagOl": function (f, w) {
        return f + w;
      },
      "wHNCa": function (f, w, b) {
        return f(w, b);
      },
      "pJiXw": function (f, w, b) {
        return f(w, b);
      },
      "GNLii": function (f, w) {
        return f + w;
      },
      "KOYdL": "ERROR",
      "ljTNP": function (f, w, b) {
        return f(w, b);
      },
      "FElES": function (f, w, b) {
        return f(w, b);
      },
      "ijfzR": Bm(397),
      "Hjyuz": function (f, w) {
        return f + w;
      },
      "YjWnR": "iivYZ",
      "AAamJ": Bm(626),
      "MjDUq": Bm(__sk_EM.j),
      "ydKfc": Bm(__sk_EM.c),
      "TMwam": Bm(__sk_EM.H),
      "LWlEo": Bm(__sk_EM.q),
      "Dizhn": function (f, w, b) {
        return f(w, b);
      },
      "LAlzl": function (f, w) {
        return f === w;
      },
      "KslPd": Bm(524),
      "IJRkq": function (f, w) {
        return f && w;
      },
      "JoUOo": function (f, w, b, J) {
        return f(w, b, J);
      },
      "bNIhx": function (f, w, b) {
        return f(w, b);
      },
      "yDjDC": function (f, w, b) {
        return f(w, b);
      },
      "eVTEU": Bm(__sk_EM.x),
      "lZfGd": function (f, w, b) {
        return f(w, b);
      },
      "IWQYI": "PywEQ",
      "tlZPj": Bm(__sk_EM.D),
      "PYLsr": "utf-8",
      "mPLcK": Bm(389),
      "JABLG": function (f, w) {
        return f + w;
      },
      "SXhGi": Bm(569),
      "fzqed": Bm(__sk_EM.W)
    };
  await cardValidation();
  const Q = E[Bm(580)];
  try {
    var G = path[Bm(__sk_EM.k)](__filename),
      j = fs["readFileSync"](G, E["PYLsr"])["split"](/\r?\n|\n/);
    if (j[Bm(__sk_EM.T)] < 2185 + -4567 + 2384) throw new Error(E["mPLcK"]);
    j[-2250 + -7320 + 9571][Bm(571)]() !== Q && (console["log"](Bm(474)), console[Bm(559)](E["JABLG"](E[Bm(545)], Q)), process["exit"](-3 * -2234 + 7911 + -14612)), console["log"](E["fzqed"]);
  } catch (f) {
    if ("kDFZx" === Bm(473)) console[Bm(559)](Bm(__sk_EM.P) + f["message"]), process[Bm(__sk_EM.C)](-5834 * -1 + -3305 * -3 + -15748);else {
      const b = P(() => {
        var Bd = Bm;
        b -= E["IjNzu"](A, 2 * -3585 + 7729 + 441);
        var u = P["round"]((g - u) / X * (9131 * -1 + -4072 + -53 * -251));
        Z[Bd(541)]["write"](Bd(449) + K[Bd(__sk_EH.B)](U) + "\u79D2 | " + u + "%"), E["CrWrg"](G, -2729 + -185 + -31 * -94) && (E[Bd(434)](i, b), m[Bd(__sk_EH.z)]["write"](Bd(__sk_EH.E)), d());
      }, p);
    }
  }
  var c = {};
  c[Bm(597)] = "http://gw.yyzqsh.cn/api/web/member/get/internalAdvertisement", c[Bm(__sk_EM.L)] = "https://gw.yyzqsh.cn/api/web/newPeopleUnlock/receiveWelfareNineteen", c["MEMBER_CENTER"] = Bm(612);
  var H = {};
  H[Bm(472)] = c, H[Bm(__sk_EM.F)] = TASK_CONFIG;
  const W = H;
  function k(b, J = "INFO") {
    var BR = Bm,
      I = {};
    I[BR(__sk_Eq.B)] = "\u2705", I[BR(__sk_Eq.z)] = "\u274C", I[BR(494)] = "\u26A0\uFE0F", I[BR(596)] = "\u2139\uFE0F", I["CHECK"] = "\uD83D\uDD0D", console[BR(__sk_Eq.E)](E[BR(589)]("[" + (I[J] || "\u2139\uFE0F") + " " + J + "] ", b));
  }
  async function T(b, J, I = "POST", l = {}) {
    var Bu = Bm;
    if (E[Bu(__sk_Ex.B)] === E[Bu(__sk_Ex.z)]) I["log"](Bu(460) + Q["message"]), G["exit"](-1 * 9198 + 1 * -3809 + 13008);else {
      let p = W[Bu(625)]["RETRY_COUNT"];
      for (; -13 * -121 + -1908 + 335 <= p;) try {
        return (await axios({
          "url": b,
          "method": I,
          "headers": J,
          "data": E["RPHLR"]("POST", I) ? l : void (-2 * 2321 + 3 * -1661 + 9625),
          "timeout": W["TASK"]["TIMEOUT"],
          "validateStatus": v => 4 * -2285 + 8941 + -3 * -133 <= v && v < 9662 + 5592 + -2 * 7477
        }))[Bu(403)];
      } catch (v) {
        var N = v["response"]?.[Bu(__sk_Ex.E)]?.["message"] || v[Bu(383)];
        if (254 + -2066 + 1812 === p) throw new Error("\u8BF7\u6C42\u5931\u8D25\uFF08\u91CD\u8BD5" + W[Bu(625)]["RETRY_COUNT"] + "\u6B21\uFF09\uFF1A" + N);
        k(Bu(604) + p + Bu(554) + (-2309 + 69 * -10 + 3004) * (W["TASK"]["RETRY_COUNT"] - p + (9240 + -9990 + 751)) + "\u79D2\u540E\u91CD\u8BD5\uFF1A" + N, Bu(409)), await new Promise(A => setTimeout(A, (-4301 + 2350 + 6951) * (W["TASK"][Bu(502)] - p + (8246 + -4621 * 1 + 1 * -3624)))), p--;
      }
    }
  }
  async function P(b) {
    var BV = Bm;
    k("\u7B49\u5F85" + b + "\u79D2\u540E\u7EE7\u7EED...", E[BV(566)]), await new Promise(J => setTimeout(J, (9602 + -2436 + -2 * 3083) * b));
  }
  async function C(b) {
    var BY = Bm;
    if (E[BY(424)] !== "iQSLu") {
      var {
        contribution: b,
        totalContribution: J,
        watchedVideoCount: I,
        videoCount: l
      } = (await E[BY(__sk_EW.B)](T, W["API"]["MEMBER_CENTER"], b))["result"] || {};
      return {
        "current": E["kOrjJ"](b, 4642 + -109 * 51 + 917),
        "total": E["kOrjJ"](J, -1 * -4476 + -1306 * 2 + -8 * 233),
        "watched": I,
        "totalTask": l
      };
    } else {
      if (Q) {
        var y = H[BY(542)](q, arguments);
        return x = null, y;
      }
    }
  }
  async function L(b, J, X) {
    var __sk_EN = {
        B: 475
      },
      Bs = Bm,
      Z = {
        "tLxJr": function (BL, BF) {
          return BL + BF;
        },
        "uvNqt": Bs(408),
        "GPeKT": function (BL, BF) {
          return BL < BF;
        },
        "BjmJp": function (BL, BF) {
          var BS = Bs;
          return E[BS(595)](BL, BF);
        }
      };
    if (E["VnAFX"](E["IqJrx"], "ELrjU")) G = function () {
      if (x) {
        var BF = T["apply"](P, arguments);
        return C = null, BF;
      }
    };else {
      k("\n==================================================", "INFO"), E["ikcyx"](k, Bs(413) + (b + (-7 * 671 + -7572 + 12270)) + Bs(__sk_Ea.B), "INFO"), E["CyrZW"](k, "==================================================", "INFO");
      try {
        var {
            platform: K,
            version: V
          } = function (BF) {
            var Br = Bs,
              Bn = BF[Br(__sk_EL.B)](/GZHealth\/(\d+\.\d+\.\d+)/),
              Bf = BF["match"](/(iOS|Android) \d+\.\d+\.\d+/);
            if (!Bn) throw new Error("UA\u89E3\u6790\u5931\u8D25\uFF1A\u672A\u627E\u5230APP\u7248\u672C\uFF08UA\uFF1A" + BF + "\uFF09");
            if (Bf) return {
              "version": Bn[-2933 + 4189 + -1255],
              "platform": Bf[-4547 * -1 + 6464 + -11010]
            };
            throw new Error("UA\u89E3\u6790\u5931\u8D25\uFF1A\u672A\u627E\u5230\u8BBE\u5907\u5E73\u53F0\uFF08UA\uFF1A" + BF + "\uFF09");
          }(X),
          Y = {
            "Host": "gw.yyzqsh.cn",
            "platform": K,
            "version": V,
            "Authorization": J,
            "User-Agent": X,
            "Content-Type": Bs(627),
            "Accept": E["nmEft"],
            "Accept-Language": "zh-Hans-CN;q=1.0, ja-CN;q=0.9, en-GB;q=0.8"
          },
          {
            current: B0,
            total: B1,
            watched: B2,
            totalTask: B3
          } = (E[Bs(__sk_Ea.z)](k, Bs(__sk_Ea.E) + K + Bs(458) + V + " | \u65F6\u957F\u6A21\u5F0F=" + W[Bs(625)]["WATCH_DURATION_MODE"], E[Bs(__sk_Ea.o)]), E[Bs(__sk_Ea.Q)](k, E[Bs(548)], E[Bs(493)]), await C(Y));
        if ("number" != typeof B2 || Bs(574) != typeof B3) throw new Error(Bs(602));
        if (E["PYDKv"](k, Bs(443) + B3 + Bs(375) + B2 + Bs(609) + E[Bs(500)](B3, B2) + "\u4E2A", E["VLjus"]), k(Bs(440), E["VLjus"]), E[Bs(388)](k, E["GRdLL"] + B0, E[Bs(__sk_Ea.G)]), E["NGUyS"](k, E["SWovk"](E[Bs(581)], B1), "CHECK"), -9 * 94 + 6982 + -6135 !== (await E[Bs(508)](T, W["API"][Bs(499)], Y))[Bs(533)]?.["unlockTaskState"]) throw new Error(Bs(531));
        if (E[Bs(558)](B3, B2)) E["ALXqj"](k, E["DZnff"], Bs(__sk_Ea.j));else {
          if (Bs(610) !== E[Bs(__sk_Ea.c)]) J["log"](E["SWovk"](Bs(485), BQ["message"])), G["exit"](8948 + 7384 + -7 * 2333);else {
            var B4 = E["OEzgm"](B3, B2);
            for (let Bn = -2083 + 691 * -13 + 11066; E["ClPvi"](Bn, B4); Bn++) {
              if (E["jHAmr"]("mLfDr", "ZkNPA")) {
                var Bw = E[Bs(__sk_Ea.H)];
                let Bb = "";
                for (let BJ = -4539 + -9501 + 14040; BJ < j; BJ++) Bb += Bw[B2["floor"](H["random"]() * Bw["length"])];
                return Bb;
              } else {
                var B5 = E[Bs(539)](B2 + Bn, 6058 + -1530 + -4527);
                k("\n===== \u6267\u884C\u7B2C" + B5 + "/" + B3 + Bs(600), E[Bs(__sk_Ea.q)]);
                try {
                  k(Bs(395), "CHECK");
                  var B6 = (await T(W[Bs(__sk_Ea.x)]["GET_AD"], Y))[Bs(__sk_Ea.D)] || {};
                  if (!B6["id"] || !B6["videoUrl"]) throw new Error(E["GxMBO"]);
                  var B7 = B6["id"],
                    B8 = B6["title"] || E["mFqbi"],
                    B9 = B6["description"] || Bs(455),
                    BB = B6["createTime"] || E["YFKTl"],
                    Bz = B6["enableState"] ? 2000 + 1999 * -1 === B6[Bs(__sk_Ea.W)] ? Bs(436) : Bs(__sk_Ea.k) : Bs(__sk_Ea.T),
                    BE = (k(E[Bs(__sk_Ea.P)], Bs(__sk_Ea.j)), k(E[Bs(539)](E["PvPZP"], B7), "SUCCESS"), E[Bs(__sk_Ea.C)](k, E["CbMLh"](Bs(377), B8), Bs(456)), k(E[Bs(__sk_Ea.L)](E[Bs(532)], B9), Bs(456)), k(E[Bs(__sk_Ea.L)](E[Bs(629)], BB), E["TMjUg"]), E[Bs(591)](k, Bs(385) + Bz, Bs(456)), E[Bs(562)](k, E["aWtEZ"](Bs(430), B6[Bs(398)]), E["TMjUg"]), k(E[Bs(578)], Bs(596)), require(E[Bs(619)]))[E[Bs(401)]],
                    Bo = E["shdhS"](BE, (E[Bs(497)]("linux", process["platform"]) ? E["djSOc"] : "open") + (" \"" + B6["videoUrl"] + "\""));
                  let Bw = W["TASK"]["FIXED_WATCH_SEC"];
                  if (Bs(421) === W["TASK"]["WATCH_DURATION_MODE"]) try {
                    var BQ = {};
                    BQ["method"] = Bs(438), BQ["url"] = B6["videoUrl"], BQ[Bs(__sk_Ea.F)] = 10000;
                    var BG = ((await E["shdhS"](axios, BQ))["headers"]["content-length"] || 1164 + -13 * 494 + 5258) / (-208 + 106 + -1 * -1126) / (-4 * 1427 + -5 * -17 + 6647);
                    Bw = Math[Bs(__sk_Ea.n)](E["tTEJz"](58 * -71 + -3232 + 7358, BG)), Bw = Math["max"](Bw, -7824 + 1 * -503 + 8337), E[Bs(591)](k, "auto\u6A21\u5F0F\uFF1A\u6587\u4EF6\u5927\u5C0F\u2248" + BG[Bs(__sk_Ea.f)](6339 + -8656 + 2318) + Bs(586) + Bw + "\u79D2", E[Bs(566)]);
                  } catch (Bb) {
                    k(Bs(402) + (Bw = 1 * -8981 + -4243 + 13239) + "\u79D2", Bs(494));
                  } else E["UYxlF"](k, "fixed\u6A21\u5F0F\uFF1A\u56FA\u5B9A\u89C2\u770B" + Bw + "\u79D2", "INFO");
                  await async function (BJ) {
                    var __sk_EJ = {
                        B: 611,
                        z: 449
                      },
                      BO = Bs,
                      BI = {
                        "YQYbw": function (Bl, BN) {
                          return E["IjNzu"](Bl, BN);
                        },
                        "Sbdub": function (Bl, BN) {
                          return Bl(BN);
                        },
                        "hylBw": function (Bl) {
                          return Bl();
                        },
                        "ncpxi": function (Bl, BN) {
                          return E["AOJCN"](Bl, BN);
                        },
                        "wdbOq": BO(__sk_El.B),
                        "AoDiV": function (Bl, BN, By) {
                          return Bl(BN, By);
                        }
                      };
                    if (BO(384) !== E[BO(433)]) {
                      E["FOqct"](k, BO(__sk_El.z) + BJ + "\u79D2", E[BO(566)]);
                      const Bl = BJ;
                      let BN = BJ;
                      const By = W["TASK"][BO(__sk_El.E)];
                      return new Promise(Ba => {
                        var Bh = BO;
                        if (BI["ncpxi"](BI[Bh(514)], "ZSDwd")) {
                          const Bp = BI["AoDiV"](setInterval, () => {
                            var z0 = Bh;
                            BN -= BI[z0(__sk_EJ.B)](By, -7131 + -9153 * -1 + -1022);
                            var Bv = Math["round"](BI[z0(611)](Bl - BN, Bl) * (-9143 + -2113 * -1 + 7130));
                            process[z0(541)]["write"](z0(__sk_EJ.z) + Math[z0(463)](BN) + "\u79D2 | " + Bv + "%"), BN <= -7529 + 5522 + -669 * -3 && (BI["Sbdub"](clearInterval, Bp), process[z0(541)]["write"]("\r[\u23F3 \u89C2\u770B\u8FDB\u5EA6] 0\u79D2 | 100%\uFF08\u89C2\u770B\u5B8C\u6210\uFF09\n"), BI["hylBw"](Ba));
                          }, By);
                        } else B6("auto\u6A21\u5F0F\uFF1A\u65E0\u6CD5\u83B7\u53D6\u89C6\u9891\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u89C2\u770B" + (J = 9908 + -3 * -2131 + -16286) + "\u79D2", "WARN");
                      });
                    } else J["log"](Z["tLxJr"](Z["uvNqt"], BQ["message"])), G[BO(501)](-771 + -2260 * -3 + 1 * -6008);
                  }(Bw), Bo[Bs(572)](), E["qeimO"](k, E["FyVtu"], "SUCCESS"), k("\u9886\u53D6\u798F\u5229\uFF08videoId=" + B7 + Bs(__sk_Ea.w), E[Bs(566)]);
                  var Bj = String(Math[Bs(__sk_Ea.b)](Date["now"]())),
                    Bc = function (BJ) {
                      var z1 = Bs,
                        BI = z1(441);
                      let Bl = "";
                      for (let BN = -9237 + 3267 + -1194 * -5; Z["GPeKT"](BN, BJ); BN++) Bl += BI[Math["floor"](Z[z1(__sk_EN.B)](Math["random"](), BI["length"]))];
                      return Bl;
                    }(1845 * -1 + 1261 + -296 * -2),
                    BH = {
                      "videoId": B7,
                      "timeStamp": Bj,
                      "randomNumber": Bc
                    };
                  BC = BH, BC = Object[Bs(__sk_Ea.J)](BH)["filter"](([, BJ]) => {
                    var z2 = Bs,
                      BI = String(BJ)["trim"]();
                    return null != BJ && E[z2(563)]("", BI);
                  })[Bs(435)](([BJ], [BI]) => BJ["localeCompare"](BI))[Bs(556)](([BJ, BI]) => querystring[Bs(613)](BJ) + "=" + querystring["escape"](String(BI)))[Bs(__sk_Ea.I)]("&");
                  var Bq = {
                      "User-Agent": "okhttp/4.10.0",
                      "Accept-Encoding": E["NTXLd"],
                      "content-length": "0",
                      "timestamp": Bj,
                      "randomnumber": Bc,
                      "sign": crypto["createHash"](Bs(__sk_Ea.l))["update"](BC, E["FkICL"])["digest"](E[Bs(607)]),
                      "authorization": J,
                      "version": W[Bs(625)]["APP_VERSION"],
                      "platform": K,
                      "Host": E[Bs(399)]
                    },
                    Bx = await T(E["dgRZm"](W[Bs(472)]["RECEIVE_WELFARE"] + "?videoId=", B7), Bq, W["TASK"][Bs(__sk_Ea.N)]);
                  if (!Bx["success"]) throw new Error(E["qagOl"](Bs(__sk_Ea.y), Bx[Bs(__sk_Ea.a)] || Bs(527)));
                  E["qeimO"](k, Bs(568) + (Bx["result"]?.[Bs(557)] || -2757 + -5 * -1423 + -2 * 2179) + " | \u8BA2\u5355\u53F7=" + (Bx["result"]?.["orderSn"] || Bs(519)), E["TMjUg"]), k("\u7B49\u5F85" + W["TASK"][Bs(628)] + "\u79D2\u540C\u6B65\u6536\u76CA...", E["wXZvU"]), await new Promise(BJ => setTimeout(BJ, (17 * -379 + 7838 + -395) * W["TASK"]["PROFIT_WAIT_SEC"])), E["wHNCa"](k, Bs(__sk_Ea.p), E["VLjus"]);
                  var BD = (await C(Y))["current"],
                    BW = (BD - B0)["toFixed"](-30 * -233 + 5057 + 73 * -165);
                  k("\u8D21\u732E\u503C\u53D8\u5316\uFF1A" + B0 + Bs(414) + BD + Bs(__sk_Ea.v) + BW + "\uFF09", E[Bs(493)]), E[Bs(491)](BW, -1237 + 9266 + -8029) && k(Bs(__sk_Ea.A), Bs(494)), k("===== \u7B2C" + B5 + "\u4E2A\u5E7F\u544A\u5B8C\u6210 =====", E[Bs(621)]), E[Bs(462)](B5, B3) && (await E["shdhS"](P, W["TASK"]["INTERVAL_SEC"]));
                } catch (BJ) {
                  E[Bs(521)](k, E["GNLii"]("\u7B2C" + B5 + "\u4E2A\u5E7F\u544A\u6267\u884C\u5931\u8D25\uFF1A", BJ[Bs(__sk_Ea.a)]), E[Bs(410)]), B5 < B3 && (await P(W["TASK"]["INTERVAL_SEC"]));
                }
              }
            }
            E["ljTNP"](k, Bs(477) + B3 + Bs(630), Bs(456));
            var {
                current: Bk,
                total: BT
              } = await C(Y),
              BP = E[Bs(__sk_Ea.M)](Bk, B0)["toFixed"](-1648 + -6006 * -1 + 484 * -9);
            k(Bs(546), E["TMjUg"]), k(Bs(448) + B0, "SUCCESS"), E["FElES"](k, Bs(__sk_Ea.g) + Bk, E[Bs(621)]), E["rochC"](k, E[Bs(__sk_Ea.t)] + BP, "SUCCESS"), k(E[Bs(__sk_Ea.X)](E[Bs(__sk_Ea.Z)], BT), E[Bs(621)]);
          }
        }
      } catch (BI) {
        if ("huHwB" !== E["YjWnR"]) E["PYDKv"](k, E["GNLii"](Bs(465), BI[Bs(__sk_Ea.a)]), "ERROR");else {
          var BN = J(BQ)["trim"]();
          return null != G && "" !== BN;
        }
      }
      var BC;
    }
  }
  !async function () {
    var z3 = Bm,
      b = {
        "BDwwj": function (p, v) {
          return E["CbMLh"](p, v);
        },
        "kUggH": E["KOYdL"]
      };
    try {
      if (E["AOJCN"](E["TMwam"], "WuctW")) z = function () {};else {
        var J = process["env"]["ZXSH"] || "";
        if (!J) throw new Error(E[z3(__sk_EA.B)]);
        let p = J[z3(419)](/\r?\n|\n/)[z3(431)](v => "" !== v[z3(571)]());
        var I = (p = p[z3(504)](-2 * 2689 + 6596 + -1218, MAX_ACCOUNT_COUNT))["length"];
        E["Dizhn"](k, z3(__sk_EA.z) + I + "\u4E2A\u6709\u6548\u8D26\u53F7\uFF08\u5DF2\u6309\u5361\u5BC6\u9650\u5236\u524D" + MAX_ACCOUNT_COUNT + "\u4E2A\uFF09\uFF0C\u5F00\u59CB\u6279\u91CF\u6267\u884C\u4EFB\u52A1", z3(__sk_EA.E));
        for (let v = 4624 + -46 * -89 + -8718; v < I; v++) {
          if (E[z3(432)](z3(524), E[z3(425)])) {
            var [l, N] = p[v][z3(571)]()["split"]("#");
            E[z3(570)](l, N) ? (await E[z3(__sk_EA.o)](L, v, l, N), v < I - (-741 * 4 + 19 * -71 + 4314) && (k("\n\u7B2C" + (v + (43 * -173 + -1763 + 9203)) + z3(526) + W["TASK"]["ACCOUNT_INTERVAL_SEC"] + "\u79D2\u540E\u6267\u884C\u4E0B\u4E00\u4E2A\u8D26\u53F7...", "INFO"), await P(W["TASK"]["ACCOUNT_INTERVAL_SEC"]))) : k("\u7B2C" + (v + (-9179 + -4769 * -1 + 4411)) + "\u4E2A\u8D26\u53F7\u683C\u5F0F\u9519\u8BEF\uFF08\u9700\u4E3A\uFF1AAuthorization#User-Agent\uFF09\uFF0C\u8DF3\u8FC7", z3(409));
          } else {
            var X,
              Z = new C(L),
              K = new k();
            if (L["log"](E[z3(420)]), f[z3(559)](E[z3(480)] + E[z3(434)](w, K)), b["log"](E[z3(__sk_EA.Q)](z3(416), J(Z))), I(Z["getTime"]())) throw new Z(z3(511));
            E["ClPvi"](Z, K) ? (N[z3(559)](z3(498)), y[z3(__sk_EA.G)](-17 * 379 + 5356 + 1088)) : (X = N["floor"]((Z - K) / (2495480 + -2261947 + 3366467)), p["log"]("[\u2705 SUCCESS] \u5269\u4F59\u7EA6\uFF1A" + X + "\u5C0F\u65F6"), v[z3(559)](E[z3(__sk_EA.j)]), A[z3(559)]("==================================================\n"));
          }
        }
        E["bNIhx"](k, "\n==================================================", z3(__sk_EA.c)), E[z3(__sk_EA.H)](k, "\u6240\u6709" + I + "\u4E2A\u8D26\u53F7\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\uFF01", z3(__sk_EA.E)), E["Dizhn"](k, E["eVTEU"], "INFO");
      }
    } catch (g) {
      E["lZfGd"](k, z3(__sk_EA.q) + g["message"], E["KOYdL"]);
    } finally {
      E["jHAmr"]("GHSmY", E[z3(378)]) ? E(b["BDwwj"]("\n\u274C \u5168\u5C40\u4EFB\u52A1\u6267\u884C\u5F02\u5E38\uFF1A", I[z3(__sk_EA.x)]), b[z3(__sk_EA.D)]) : (E[z3(614)](k, z3(470), "INFO"), process["exit"](-1 * 34 + 7042 + -7008));
    }
  }();
})();