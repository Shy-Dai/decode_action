//Thu Nov 27 2025 07:56:18 GMT+0000 (Coordinated Universal Time)
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
//✅cs版说明：必须要走我的链接 不走我的链接，账号运行不了 如果没走 请下载卡密版
// 一、广告时长控制说明（关键！）
// 1. 控制模式：脚本默认启用"fixed"模式，固定时长为100秒
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

// ===================== 核心参数配置（前置便于修改）=====================
const TASK_CONFIG = {
  COUNTDOWN_REFRESH_INTERVAL: 1000,
  // 倒计时刷新频率（毫秒）：1000=1秒/次
  WATCH_DURATION_MODE: "auto",
  // 观看时长模式（fixed=固定，auto=适配）
  FIXED_WATCH_SEC: 100,
  // 固定观看秒数（fixed模式用）
  INTERVAL_SEC: 5,
  // 广告间间隔秒数
  RETRY_COUNT: 3,
  // 接口重试次数
  TIMEOUT: 30000,
  // 请求超时时间（30秒）
  ACCOUNT_INTERVAL_SEC: 30,
  // 多号切换间隔（防风控）
  APP_VERSION: "v1.2.9",
  // 提交广告版本号
  SUBMIT_METHOD: "POST",
  // 提交广告请求方法
  PROFIT_WAIT_SEC: 4 // 收益同步等待时间（秒）
};
var _0x1td = "safekodo.com.V8.2.8";
var __sk_RW = __sk_g;
(function (R, f, i, g) {
  var __sk_RU = {
      R: 472,
      f: 296,
      i: 422,
      g: 411,
      w: 351,
      h: 329,
      y: 371,
      e: 424
    },
    Rr = __sk_g,
    w = function () {
      return arguments[-542 * -2 + -2021 * 3 + 4979]["split"](" ")["pop"]()["split"]("]")[-3602 * -1 + 3955 + -7557];
    }(Object["prototype"]["toString"]["call"]((typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : this)[Symbol["toStringTag"]]));
  ;
  var h = W(),
    y = R(i);
  _0x1Hp(y, y[-1817 + -5275 + -157 * -46 >>> 2465 + -35 * 63], y[-3024 + -823 + 3867 >>> -167 * 1 + -3037 * 1 + 3464]);
  var e = _0x1BS,
    S = _0x1BS_,
    B = e(S[-6382 * -1 + -5 * 1629 + 1765]),
    a = e(S[-6880 + 1355 + -5 * -1109]);
  for (;;) {
    try {
      var r = -parseInt(Rr(433)) / (9580 + -9579) * (-parseInt(Rr(__sk_RU.R)) / (-5891 + -7593 + 13486)) + parseInt(Rr(__sk_RU.f)) / (4717 + -6497 * -1 + 37 * -303) * (parseInt(Rr(__sk_RU.i)) / (-1 * 7715 + -31 * 233 + 14942)) + -parseInt(Rr(340)) / (-1 * -1720 + 1673 + -11 * 308) * (parseInt(Rr(430)) / (-9 * -929 + 1 * -9827 + 1472)) + -parseInt(Rr(__sk_RU.g)) / (9394 + -7254 + -2133) * (parseInt(Rr(409)) / (-1 * 3797 + 1260 + 2545)) + -parseInt(Rr(__sk_RU.w)) / (-1974 * 4 + -1884 + 9789) * (-parseInt(Rr(__sk_RU.h)) / (7384 + -1 * 9511 + 2137)) + parseInt(Rr(__sk_RU.y)) / (4175 + 1125 * -4 + 336) + parseInt(Rr(__sk_RU.e)) / (-6507 * -1 + -31 + -404 * 16);
      if (r === f) break;
      ;
      throw "";
    } catch (J) {
      y[B](y[a](3983 * -2 + -3787 + -11753 * -1 >>> -1 * 18 + -2834 + 3852, 1093 + 271 * -15 + 3372 >>> -7 * 58 + -633 * 9 + 6303)[-1325 + 7106 + -289 * 20 >>> 2972 + -11818 + 18846]);
    }
    ;
  }
  ;
  function W() {
    var d = !!(8799 + -3485 + 1 * -5314),
      H = Y[`${(24263 + 4806 * -83 + 630876)["toString"](9485 + -7727 * 1 + -2 * 865)}`]({
        x: [[`${(1819 + -6354 + 4936)["toString"](-9 * 314 + 1053 + 1800)}u${(1 * -2251 + 6596 + -1 * 3737)["toString"](-1 * -8565 + -133 * 43 + -2819)}r${(-29 * 6370 + 302006 + 88154)["toString"](3868 + -1691 * 1 + 5 * -430)}`, d], [`writ${(-9541 + 1 * -4909 + 14651)["toString"](-9073 * 1 + 6194 + 2898)}l${(1 * -724 + -3 * -2627 + 2381 * -3)["toString"](-3345 * -1 + -973 * -7 + -10137)}`, !d], [`${(-1 * 5727 + 5692 + -1 * -47)["toString"](-71 * -86 + -2916 + -3168)}on${(-7984 + 257 * -1 + 15913)["toString"](2322 + -4555 + -205 * -11)}ur${(101 * -2193 + -2 * 106654 + -229 * -2389)["toString"](983 + -347 * -4 + -27 * 87)}`, d]],
        F: `v${(5067 + -4105 + 681 * -1)["toString"](-1369 * 2 + 441 + 2323)}u${(-6949 * -1 + 4 * -1631 + -411)["toString"](6212 + -5087 + -1099)}`
      });
    H(i, i["String"], i["Array"]);
  }
  ;
  function Y() {
    var d = Object["fromEntries"](this["x"]),
      [H, q, u] = arguments[976 * -6 + -6 * -1543 + -3400][`${(5333 + -9035 + 3717)["toString"](6759 + 2764 + -9497)}r${(3928 + -3282)["toString"](-3391 + -124 * 24 + 6393)}`](arguments);
    Object["defineProperty"](u["prototype"], `${(-409312225 * 1 + 572178886 + 661885067)["toString"](8655 + -3 * -1906 + -14342)}`, {
      [this["F"]]: function () {
        if (this["length"] === 3 * -2999 + 5904 + 3094 && this[-78 * 60 + 4018 + 662] === -9284 + 1957 + 7328) {
          var Z = new W(),
            K = ["[", "|", ",", "^", "\"", " ", "]", ">>>", "]]", "==", "[[", "$"];
          return K[(-879 * 6 + 7047 + -1751)["toString"](-1829 * 3 + 4941 + 571) + "a" + "p"]((k, O) => {
            O % (9930 + 589 * -16 + 8 * -63) == 7746 + -6041 * -1 + -13787 * 1 && (Z[k] = K[O + (-8839 + 1664 + 7176)]);
          }), Z;
        }
      },
      ...d
    }), Object["defineProperty"](q["prototype"], `isWe${(3074 + -3496 + 436)["toString"](-41 * 233 + -5 * -1129 + -3921 * -1)}Formed`, {
      [this["F"]]: function (Z, K) {
        if (this["toString"]() === "l") {
          var k = "",
            O = ".",
            G = K ? Z + "" + K : Z,
            p = K ? -8335 + 1288 + 7050 : "^";
          G[`${(-47278936 + 402 * -144428 + 143763917)["toString"](-9217 + -4828 + 14079)}`](p)[(-1 * -369 + 6691 + -7038)["toString"](7407 + 6025 * -1 + -1347) + "a" + "p"](b => {
            if (!b) return;
            k += q[fromCharCode](b);
          });
          ;
          var E = (b, N) => {
              var T = [`r${(6992 + 6761 + 1249 * -11)["toString"](9657 + 9638 * -1)}pl${(7139 + -7716 + 4429)["toString"](-3880 * 1 + -9412 + -1 * -13311)}`],
                Q = parseInt(b[T](/./g, z => "\u200C\u200D\u2060\u2061\u2062\u2063\u2064"[`${(-4586 * -1 + -3752 + -816)["toString"](1155 + 3216 + -4350)}n${(-2 * -2464 + -5 * 160 + 3841 * -1)["toString"](-2088 + 1 * -6686 + 8795)}xO${(3024 + -3009)["toString"](-5286 * -1 + 1813 + 3539 * -2)}`](z)), 9353 + 3844 + -1 * 13190)["toString"](-158 * -4 + -9221 * 1 + 8625) + "\u2062";
              return Q[T](N, "");
            },
            j = E("\u2060\u2060\u2064\u200D\u2060\u2064\u2062\u200C\u2061", "")[`r${(-5964 + 11 * -512 + -129 * -90)["toString"](-761 + -1 * -1455 + -674)}pl${(8709 + 2414 + -6869)["toString"](8973 + -3208 + 5 * -1149)}`](/[a-z]/g, ".")[`sli${(7614 + 5125 + -12509 * 1)["toString"](-4 * 2342 + 9341 + -9 * -5)}`](4877 + -8764 + 3887, -(2384 + -29 + 2354 * -1)),
            L = E("\u2061\u200D\u2064\u200D\u200D\u200C\u2063\u200D\u2062\u200D\u200C\u2060\u2062\u2064\u200D", "")[`sl${(1091 * -4 + -217 * 63 + 25489)["toString"](3973 + -7221 + 3268)}`](31 * -189 + 7249 + -1390, -(-6972 + -1 * -3237 + 3736)),
            C = E("\u2064\u2063\u2064\u2061\u2060", "")[`sl${(-4111 * -2 + -6713 + 6695)["toString"](9161 + -7287 + -1853)}`](-118 * -43 + -9603 + 4529, -(34 * -7 + -5854 + 6093)),
            V = "v"[toUpperCase](),
            P = H[`_0x${(4978 + -7717 + -2740 * -1)["toString"](-9799 * 1 + 4472 + -2 * -2667)}td`];
          return P && P === L + O + C + O + V + j ? k + this : k;
        }
      },
      ...d
    });
  }
})(__sk_i, -18722 * 17 + 248167 + 245471, typeof window !== "undefined" ? window : global);
var __sk_D = {};
__sk_D["GET_AD"] = __sk_RW(381), __sk_D["RECEIVE_WELFARE"] = "https://gw.yyzqsh.cn/api/web/newPeopleUnlock/receiveWelfareNineteen", __sk_D[__sk_RW(369)] = __sk_RW(477), __sk_D["MEMBER_INFO"] = __sk_RW(315);
const VALID_UPSHARD_CODE = "z0h5ycgpU",
  axios = require("axios"),
  API_CONFIG = (console[__sk_RW(304)](__sk_RW(400)), console["log"](__sk_RW(437)), __sk_D),
  REQUIRED_SECOND_LINE = __sk_RW(327),
  fs = require("fs"),
  path = require(__sk_RW(479)),
  crypto = require("crypto"),
  querystring = require(__sk_RW(438));
function checkSecondLine() {
  var __sk_Rs = {
      R: 423,
      f: 311,
      i: 326,
      g: 442,
      w: 363,
      h: 460,
      y: 304
    },
    RY = __sk_RW,
    f = {};
  f["ceOrY"] = RY(__sk_Rs.R), f["GIXdc"] = RY(__sk_Rs.f), f["xYYBt"] = RY(__sk_Rs.i), f["rzyPu"] = function (h, S) {
    return h + S;
  }, f[RY(__sk_Rs.g)] = RY(__sk_Rs.w);
  var i = f;
  try {
    var g = path["resolve"](__filename),
      w = fs["readFileSync"](g, RY(410))["split"](/\r?\n/);
    if (w["length"] < 9467 + 6921 + -16386) throw new Error(i["ceOrY"]);
    w[-2 * 274 + -4 * 2491 + 10513][RY(__sk_Rs.h)]() !== REQUIRED_SECOND_LINE && (console[RY(__sk_Rs.y)](i[RY(388)]), console[RY(304)](i["xYYBt"] + REQUIRED_SECOND_LINE), process[RY(445)](-9 * 242 + -2819 + -49 * -102)), console["log"](RY(387));
  } catch (h) {
    console["log"](i[RY(421)](i["IenWe"], h["message"])), process["exit"](-36 * 160 + 6857 * -1 + 12618);
  }
}
function __sk_i(_0x1ip) {
  _0x1ip["_0x1td"] = _0x1td;
  var _0x6vT = [1][`${1305660806 .toString(34)}`]();
  var _0x6l9 = "$ 74 ^ 65 ^ 73 ^ 74 >>>^| 31 ^ 32 ^ 33 ^ 34 ^ 31 ^ 32 ^ 33 ^ 34 ^ 31 ^ 32 ^ 41 ^ 42 ^ 43 ^ 44 ^ 45 ^ 41 >>>^| 70 ^ 75 ^ 73 ^ 68 >>>^| 74 ^ 6f ^ 4c ^ 6f ^ 77 ^ 65 ^ 72 ^ 43 ^ 61 ^ 73 ^ 65 >>>^| 6d ^ 61 ^ 70 >>>^| 63 ^ 6f ^ 6e ^ 73 ^ 74 ^ 72 ^ 75 ^ 63 ^ 74 ^ 6f ^ 72 >>>^| 73 ^ 6c ^ 69 ^ 63 ^ 65 >>>^| 66 ^ 69 ^ 6c ^ 74 ^ 65 ^ 72 >>>^| 6f ^ 6e ^ 6b ^ 65 ^ 79 ^ 64 ^ 6f ^ 77 ^ 6e >>>^| 41 ^ 42 ^ 43 ^ 44 ^ 45 ^ 41 ^ 31 ^ 32 ^ 33 ^ 34 ^ 31 ^ 32 ^ 33 ^ 34 ^ 31 ^ 32 >>>^| 66 ^ 72 ^ 6f ^ 6d ^ 43 ^ 68 ^ 61 ^ 72 ^ 43 ^ 6f ^ 64 ^ 65 >>>^| 63 ^ 61 ^ 6c ^ 6c >>>^| 73 ^ 65 ^ 61 ^ 72 ^ 63 ^ 68 >>>^| 72 ^ 65 ^ 70 ^ 6c ^ 61 ^ 63 ^ 65 >>>^| 28 ^ 28 ^ 28 ^ 2e ^ 2b ^ 29 ^ 2b ^ 29 ^ 2b ^ 29 ^ 2b ^ 24 >>>^| 6b ^ 65 ^ 79 ^ 43 ^ 6f ^ 64 ^ 65 >>>^| 70 ^ 72 ^ 6f ^ 74 ^ 6f ^ 74 ^ 79 ^ 70 ^ 65 >>>^| 63 ^ 68 ^ 61 ^ 72 ^ 43 ^ 6f ^ 64 ^ 65 ^ 41 ^ 74 >>>^| 69 ^ 6e ^ 64 ^ 65 ^ 78 ^ 4f ^ 66 >>>^| 73 ^ 70 ^ 6c ^ 69 ^ 74 >>>^| 73 ^ 70 ^ 6c ^ 69 ^ 63 ^ 65 >>>^| 74 ^ 6f ^ 53 ^ 74 ^ 72 ^ 69 ^ 6e ^ 67 ==";
  var _0x6aR = 10131123108397;
  var _0x676 = 39931013653108;
  var _0x666 = "l"[`${568 .toString(30)}W${12631 .toString(30)}${15 .toString(30).toUpperCase()}${20189233 .toString(30)}`](_0x6aR, _0x676);
  for (var _0x6KK in _0x6vT) {
    _0x6l9 = _0x6l9["r" + _0x666](_0x6vT[_0x6KK], _0x6KK);
  }
  ;
  function _0x6r8() {
    while (_0x6l9[_0x6wW] === " " || _0x6l9[_0x6wW] === "\n" || _0x6l9[_0x6wW] === "\r" || _0x6l9[_0x6wW] === "\t") {
      _0x6wW++;
    }
  }
  ;
  function _0x6Ex() {
    _0x6r8();
    if (_0x6l9[_0x6wW] === "\"") {
      _0x6wW++;
      var _0x6St = "";
      while (_0x6l9[_0x6wW] !== "\"") {
        _0x6St += _0x6l9[_0x6wW];
        _0x6wW++;
      }
      _0x6wW++;
      return _0x6St;
    }
  }
  ;
  function _0x6TC() {
    _0x6r8();
    if (_0x6l9[_0x6wW] === "{") {
      _0x6wW++;
      _0x6r8();
      var _0x6LZ = {};
      while (_0x6l9[_0x6wW] !== "}") {
        var _0x6KK = _0x6Ex();
        _0x6r8();
        var value = _0x6zW();
        _0x6LZ[_0x6KK] = value;
      }
      _0x6wW++;
      return _0x6LZ;
    }
  }
  ;
  function _0x6W5() {
    if (_0x6l9[_0x6wW] === "[") {
      _0x6wW++;
      _0x6r8();
      var _0x6LZ = [];
      var _0x6YN = true;
      while (_0x6l9[_0x6wW] !== "]") {
        if (!_0x6YN) {
          _0x63m();
          _0x6r8();
        }
        ;
        var value = _0x6zW();
        _0x6LZ.push(value);
        _0x6YN = false;
      }
      ;
      _0x6wW++;
      return _0x6LZ;
    }
  }
  ;
  function _0x6FE() {
    var _0x68W = _0x6wW;
    if (_0x6l9[_0x6wW] === "-") _0x6wW++;
    if (_0x6l9[_0x6wW] === "0") {
      _0x6wW++;
    } else if (_0x6l9[_0x6wW] >= "1" && _0x6l9[_0x6wW] <= "9") {
      _0x6wW++;
      while (_0x6l9[_0x6wW] >= "0" && _0x6l9[_0x6wW] <= "9") {
        _0x6wW++;
      }
    }
    if (_0x6l9[_0x6wW] === ".") {
      _0x6wW++;
      while (_0x6l9[_0x6wW] >= "0" && _0x6l9[_0x6wW] <= "9") {
        _0x6wW++;
      }
    }
    if (_0x6l9[_0x6wW] === "e" || _0x6l9[_0x6wW] === "E") {
      _0x6wW++;
      if (_0x6l9[_0x6wW] === "-" || _0x6l9[_0x6wW] === "+") {
        _0x6wW++;
      }
      while (_0x6l9[_0x6wW] >= "0" && _0x6l9[_0x6wW] <= "9") {
        _0x6wW++;
      }
    }
    if (_0x6wW > _0x68W) {
      return _0x6l9.slice(_0x68W, _0x6wW);
    }
  }
  ;
  function _0x63m() {
    if (_0x6l9[_0x6wW] !== ",") {}
    _0x6wW++;
  }
  ;
  var _0x6wW = 0;
  function _0x6zW() {
    _0x6r8();
    return _0x6Ex() || _0x6TC() || _0x6W5() || _0x6FE() || _0x6r8();
  }
  var _0x1BS_ = _0x6zW();
  ;
  function _0x1BS(_0x6tz) {
    var _0x6SR = {
      "9": "_0x6H5",
      "9": "_0x6wr",
      "-4": "B",
      "13": "_0x6r6",
      "2": "o",
      "5": "_0x6GN",
      "10": "X",
      "1": "_0x6Nm"
    };
    var _0x60q = "";
    _0x6tz[22 .toString(35) + "a" + "p"](item => {
      _0x60q += String[fromCharCode](Number(0 + _0x6SR[16 - 6] + item));
    });
    return _0x60q;
  }
  ;
  var _0x6hK = _0x1ip;
  _0x6hK["_0x1BS_"] = _0x1BS_;
  _0x6hK["_0x1BS"] = _0x1BS;
  var _0x6Bu = "0x61O0o142O0x63O0o144O0o145O0x66O0o147O0x68O0x69O0o152O0o153O0x6cO0o155O0o156O0x6fO0o160O0x71O0x72O0x73O0x74O0x75O0o166O0x77O0x78O0x79O0o172O0o101O0x42O0x43O0o104O0o105O0x46O0o107O0o110O0o111O0x4aO0x4bO0o114O0x4dO0o116O0o117O0o120O0x51O0o122O0o123O0o124O0o125O0x56O0x57O0o130O0o131O0o132O0o60O0x31O0o62O0o63O0x34O0o65O0o66O0o67O0o70O0o71O0x2bO0x2fO0o75O";
  function _0x6i1() {}
  ;
  _0x6i1[_0x1BS(_0x1BS_[21])] = _0x6MK => {
    return String[_0x1BS(_0x1BS_[10])](_0x6MK);
  };
  var _0x6EX = _0x6Bu[_0x1BS(_0x1BS_[19])](String[_0x1BS(_0x1BS_[10])](150 / 2 + 4));
  var _0x65W = "";
  _0x6EX[_0x1BS(_0x1BS_[4])](item => {
    _0x65W += _0x6i1[_0x1BS(_0x1BS_[21])](item);
  });
  _0x6hK["_0x1sj"] = _0x65W;
  var _0x1P8 = function _0x1P8(_0x69h) {
    this._0x69h = _0x69h;
  };
  _0x6hK._0x1Hp = function (i, n, o) {
    var t,
      h = [],
      _0x2c14x1 = o || "_0x3HzAWrZQF";
    for (t in this[`lo${202 .toString(16)}tion`] || {}) _0x2c14x1 === t ? h.push(i !== t) : h.push(i === t);
  }.bind(_0x1ip);
  _0x1P8[_0x1BS(_0x1BS_[16])][_0x1BS(_0x1BS_[21])] = function () {
    return this._0x69h[_0x1BS(_0x1BS_[21])]()[_0x1BS(_0x1BS_[13])](/,/g, "");
  };
  ;
  _0x1ip[_0x1BS(_0x1BS_[8])] = function () {
    var v = _0x1ip[`${14 .toString(28)}v${415 .toString(28)}t`] || arguments[-5860 + 13 * -427 + 11411];
    if (v[_0x1BS(_0x1BS_[15])] == 41 * -50 + -29 * -188 + -3279) return ![];
  };
  ;
  var _0x7Oj = _0x1sj;
  var _0x73a = ["pu", "s", "oto", "ode", "index", "f", "char", "a", "pr", "O", "A", "wn", "h", "ly", "has", "ll", "har", "type", "ring", "c", "th", "leng", "P", "to", "C", "roperty", "app", "S", "from", "t"];
  var _0x7e1 = _0x7e1 || function (_) {
    function B() {}
    var D = {},
      F = D._0x73n = {},
      E = F._0x708 = {
        _0x7HO: function (D) {
          B[_0x73a[8] + _0x73a[2] + _0x73a[17]] = this;
          var F = new B();
          return D && F._0x7Y7(D), F[_0x73a[14] + _0x73a[9] + _0x73a[11] + _0x73a[22] + _0x73a[25]]("_0x70E") || (F._0x70E = function () {
            F._0x7u8._0x70E[_0x73a[26] + _0x73a[13]](this, arguments);
          }), (F._0x70E[_0x73a[8] + _0x73a[2] + _0x73a[17]] = F)._0x7u8 = this, F;
        },
        _0x7dc: function () {
          var D = this._0x7HO();
          return D._0x70E[_0x73a[26] + _0x73a[13]](D, arguments), D;
        },
        _0x70E: function () {},
        _0x7Y7: function (D) {
          for (var F in D) D[_0x73a[14] + _0x73a[9] + _0x73a[11] + _0x73a[22] + _0x73a[25]](F) && (this[F] = D[F]);
          D[_0x73a[14] + _0x73a[9] + _0x73a[11] + _0x73a[22] + _0x73a[25]](_0x73a[23] + _0x73a[27] + _0x73a[18]) && (this[_0x73a[23] + _0x73a[27] + _0x73a[18]] = D[_0x73a[23] + _0x73a[27] + _0x73a[18]]);
        }
      },
      t = F._0x7VG = E._0x7HO({
        _0x70E: function (D, F) {
          D = this._0x7U1 = D || [], this._0x7ot = null != F ? F : 4 * D[_0x73a[21] + _0x73a[20]];
        },
        [_0x73a[23] + _0x73a[27] + _0x73a[18]]: function (D) {
          return (D || A)._0x7oS(this);
        },
        _0x73Y: function (D) {
          var F = this._0x7U1,
            B = D._0x7U1,
            E = this._0x7ot;
          if (D = D._0x7ot, this._0x7jm(), E % 4) for (var C = 0; C < D; C++) F[E + C >>> 2] |= (B[C >>> 2] >>> 24 - C % 4 * 8 & 255) << 24 - (E + C) % 4 * 8;else if (65535 < B[_0x73a[21] + _0x73a[20]]) for (C = 0; C < D; C += 4) F[E + C >>> 2] = B[C >>> 2];else F[_0x73a[0] + _0x73a[1] + _0x73a[12]][_0x73a[26] + _0x73a[13]](F, B);
          return this._0x7ot += D, this;
        },
        _0x7jm: function () {
          var D = this._0x7U1,
            F = this._0x7ot;
          D[F >>> 2] &= 4294967295 << 32 - F % 4 * 8, D[_0x73a[21] + _0x73a[20]] = _.ceil(F / 4);
        }
      }),
      C = D._0x7bR = {},
      A = C._0x7px = {
        _0x7kH: function () {
          for (var D = "61213581DCB61962A99273C026F0AF51C440A1542DC4362480345CB9E90E264729F52BEBA9E6504654213B90764C218DD20ECA9B1B13B93474F2447A2DF5979DA4D0AAECEEEFC8CA2DDF84818B65419DBF4622CE17E61C1B5DB89CD5ADBFF7B4C8782C49D5575AC5917AB8DD74ACD30559E23AC17B3BBFE831C746419C106CF83C468C5E82301E2DC37E06AF997C849856BEA969C13C7EE6E3245BC959B6C7F0A2E06E3220EAFD95A46E1BB590B167AF7C8FECD2C4D3BB4FEBA58C2C0F6DD078970896321C95730DA2AB80360AFA140BFB9D924172BDCE02910C0F36D686B28A90D4B0E13E0BA19EAD033744383B483409CDB92911DAB440C6D2A0255FD3E4E7D34159A34C61FA75B8180BC615C30FB0E0D0D8469F2B1EDD8A74D54A67A5C8D72816928F74513C6409732F675677FC5C9ECD31771FDF0C9355D1D48820C358800FEBC1CEF316F6D5280ED8F1B67086D99AECE19A0B04090C7AD91FDC456E5D14553197BB4D82932D9CF5B0B7288F9E0BC8A401694C1673FEA33AF389B0D3A34AC4949709351191013ACEB3E6DD130DDAA05DCAC9291F864992EC6086B04D09DF7C1DEB846EB1DC57D8ED7FE3453A2390A43E8AD12DD5027F9493B91895359E981189DD3B6C00016BEA13DDB11AA600B504D7356CE4FFAF9469AAA175AA9092EBA5109A2EF8DCF4C2CDE805DEED4F8159F1EB32EC4BB1A37FA67EF8EBD470363B946DE503A824C695103B1A24767A266BD253056C552C5374F4AD74F3A1DA8847E39823DC965CD3AE7D66B76CE76DC3C3B0F95A9A262E458C22417872879372C85F9D1476AEAD99BEF6E6EC902FAF8D12B0FB4C6E448FD7D16332A7C109055A4688EBEA43E47B56B7DBC8DBA534356004F576C174F335E24DA5B4005EE92CD23A97326868ADDC943D764716037D83ABD03126F64135D53E3F0D93BC8CE43B34F66E4966F80163CB7F21A8E3C6F0C024548956CAFBF4134C388C9C15058DEF2FF2DD29627478046351E0C4E7A38D0D7DD7DFDF0B850DF7AE78BF84E3E5201DF9B8AF846F33FC7B48B402D6621F852CEC4C1446EED3B54F1314C60D8C00BCBA8281871755F140D9496FD7D4A93B81B12D3B9EC4F1CDE1DA825DCE0A9E98491A0287AA2B18271B6A5BDA99E2D22BE75BBB6094404325A14397E9068B8E4C66DEE83218772205822D06D4E5BBF37715DC22B50E04DE759CA00FB73C9D67E5DA4551F097B3F5BD5B3F1DEB28AABDB9A41D17381A412A75DD6F8346812849762D0EB91FA8D14499C0739861D6511343E431A3B3D103E312FC8EA07B84B1D4CACDF1E35411E1D3CDDE1DCA51926485C769A6C64F48AF5F3A01999C6179414099AF52CDCF9CCF96897DB867075D07C5033973A589B12677373F051F662C7F6B58B88AA7799D6B9BC51DA6131EDFCA008B1DED12A75DE4D38B4FDD712FFF3BDE3957B9111FDD2AB21B44B52F2A389582FE751F127519119188A8752B16265ADFAD13D0947AA68449F431A16E9F0F7DD98B1EFB3B033FB22CA2645E25D8FA4B76509151FA159769C349B6F33436B9D5A7530C849E412A5732AEE1AA6D9C7FBAA354233DA527781D79DD4A139AB403AF89861F1D3137D70F3939FE20EB224D9CF76F1BCFC1CF95D77AF9F9BC4DFEF6093E2E9CA135B991A5F673BAE241366D417903AA5167DC7E5199022B0A6B52A708E82E995B0BEAFAC96CD4624B7E744508FDB69A763C852AF32DA8F5F997E0D6D86D29FC074872022379285B710CB0D31AFA989BCD94FF125A643F4D09B713CEE5BCFE27DEE1811A0A27D9FF5CC9B33C7CC470A555DEE48B8ABB7DEBFC3E7E8778A9B058B3D70B5B1C7DE64C30A4B86FBE61B01FC337BB7336FF6D254FA6C6A2DE6CF2001F39EA8DF8CC730BB6B9DFAAD2A86F44352702932B73C51D181218E911569BD681A022D35F3ECD1E9FDFD4A6081DC137A81C4A8F8BD87A21B0A307447C63405D43269F34FF39099353BB96E8DD0EC7802305443693520368E5A47D6DB19725E52F6B6EBF14956B29B192F57E445FE6785E424107B0D348A31354F3C32E27698D3719132042500D46963A9E455D069B83085D96E34A3B84A4B6FDB08A4CB92AD157EE3433828268011E096852EA772C9F5CB36D7C02798C93A44DFFA5695E4E00540A8E5415AF2BFB3C2AA49DCC63167C7A2A826DFC34BD767D8B9F9AA7A1679D5EFD8D5DE519F25C177CB8EFE1A1B0879BBC8E618038797C22E52D969E46142F4374EF8265A2C9B7577EB342B47C7C3717CD14F502245A84EA4A2540E213E09893A1586DCE80002CEF617F136244552858E1A464EF2E8082F756FF658539DA51E0C290F4BA895303A2C5215156FF15D1C543BA7F5205F1C2E1CCB6E56E9197D230B47D5C1864B84514F3A8F05743171C1C68FEB0575771906C953F1057AF0203599D59BC276D7D46B5749D750B72A71DB07620BA6ACA177B0CFB29902774DFC1D96A5AC9F44023EE68B76406744BF61FCAF163EB15AD34147E5294AA06051290CD9A2B5746C46229E4754228AA5D2AE24684BA4256F637052CC001644131FF0DAF111EB257DC5B8438D768CE26D614E3FC78B09862BC87937A33F70380055E82B6D6028B5F35EEA8C80A645E8265CA63FFD5E2303FB03840340878A0030E33FF46B6DB7AD2367400E2B2F2FC6BA0223B052E01879D1D84BCF0C72B7FF67BADDB9DB8AF87FEF917F3A814E0B5574EBA998ECA5F47B4433908108256C49ECE789372C1EC2773BA655CB9D20DB9C6E7DF79032B383859AF9749BFA749E0086F523D2EDF944CF016EEB3E4F8BA7F1E3D9BFE7149144B53CDBF4AE4E486FA0DEBD8379BD8867514710AE096072AD25DD6B928E5D6A3878D4B5871AA98C65888950AEB28B6ED814858F173E783D8A8C4A481874708A73724FA98C0EFFAB147C4A85F960D2717E876BF64FA245C325C75F16C3550A2D61135E1BE3C3C83B12DC896622469CB7B4E89DF29FB543DA58F77117601CD7885AE522956EC433D35DA310CC2640921CBEB77B2B7A3F218B78106BE8544536BC0CD431EF8603084E63439687DA1DF05BD42AE37FCA8A2C3FAFE88DD56578069383B42E51D9A77AE8C256A44B2945C646B625116187B59C63B7583435CAD0BAA0B81CD8D0BE32A679A978A5D3523195D9ABBE2868BEE510298FE95093DB9CFF584714896FB1B0B2D610424D2D3ED2AA4B1FC7D4C49598BB160E12B0C36130FE1C631B9FE21726BE5486A12EDA83BCE6419F85D3ED8C2E1AE3B42A67D2CDB91BEB74D583E2B4B15DA554A989968C0A252EFDEFD6B1E202B0701F3F20B26A2D1CAE959EB0F6123C865AE26DE665AE35DDEBA4FBA80260D6325496D892E103D63C8462BFD59BE231651246BB82ED3F3D3A0ACF781385F11E5122975258CD0F93205DB65054FFCEFFF10D2B58DC69A6E0E44231F7DF2878D8D87B89E79D299FC9B65F022F80D4684F7A8BC0C8C7797FCF3CAACDA3B1668EC4F2A0C7DE8FD83592FCD4F65364E8746C0C158EEFA965EFAB8EE18422AF304AF83C7D5D087CD7415FE423527C3D42FEB4459509B0B9041F35E1990570DF86F5F03C3408F313C7B046215A17B9733CC09D35D949CD8103158D7EBD88683C70524BD8E8896ED1C82D9DC57F2DF6E7366D3955DFDBE857EAFF8BD421B42B2821673B0AC249AB8D47F8835D4C5E733EF2EDBF20EA2A11FEB51F11D8C8C53FCC5D42627B7B10A4E1B60CB9564BF77A580C02EACBF84817EE34AEB4FFD92F72F74E45F1275E338CF1D6AB01C112AB95859E7A8A094BB7DCA0CC7D4CF02D0B9CC923EE1C7577AB1E6BD0BFC83B652F5C2581DBC107E0AEFB0505C21FC27594E7EBFD8DA63D871D7C486C98EAA2D9F3C5C742FE3FE7DDE7709B1A025890ED7931C56F55DD43F72CDABAED764A034E1C316043FDA0A9BED8C35EA9DDF2DF9AE9E5063A9F4D1497EE9328BC11ED7672D5A9F0BCDCF0AC8A9E6042E77E7EE9F9B02D9C1083C2BBF9E9097C29A7BA1B2CB50F1E404874985093B16A48AF2FD632DBFE8BD00535A0A6BC1FCCD085B112503C110B4839EE0EA7EF25A5605E6AB766A7974E7B1D4E6659CA50A4E93E9694794689223D961A3A9D0BB15E92A4C6A2359585FBE762B3BFC671833401EE51AEC1CE215BAE1ACE15FB9C170FE331483B5DA1FBF1F26AD049B4ACFE3BA8C25C9FF3337E7825A0D1F7EACF840EF50A86482D0918B69DB389A0CCF15F0441A7A4B9EC54F5C566CFFF95808566D5F17434F1F23F57EE3A6DA147485378B7B6402217AF5DF9DCC5BEADFC2C5A63F44DCADA08B36141DFCAF66C99CECE3CCFB670868E8634A8C2EB648FF6FDA3B7A4EC7C2E272FFD2FC403CE7683B3E7EB0C4EA8B9695481AC447FE5A6C100B543FB099703219833D1BFFF8316393D0175DC62115A11CC6D4545AE3DCFCAD1EF0145A3365020C46D2367F4FDB992C76095197E0BFB87FDE7561E462428EDC59C160C76A64D827009F3589A9049DD0A675C996DB350DC9CBFD4C407BC7895AD6F443D1B2177C3774EDA9EB3F3E6321DED5CDAC3E20429CF65D88751BB648AD7BB691CCE2FDEF5FF073289EC4033C2B94DD765601D7380BA1D17012300068829C1E640ED466ADD1CB24E84042BF515C183EC7C5D5DD8527250E605048F54D565F34FAD1976DD9DDF3F2D65F4AB2A18285609DB2761631CACE1A6C957FF0DC2120153388CCB62EA22D1BD801D94B0AF11A7EFE172425AFD4F4C41F2A2DDCDE7480756AFF1ED8297963B904E482D4C92A36652BAB606415526F432BA5BA48F8D61FD66E4F0599B0FA80519CA3A62427151830F0CE5301011C97B73B31B1B8CB2FA0C8EBBBBF80A9F30BEE7DE0015B94134B5049E474E8693C175B9C8D934E24859693817024C2A705E7E679C63D0092123FA7D9BCFEA0D6B573887A0CE26BFDC718E6C08EE818D07D7FB8F83D6272116563A90DD49AB6B024E03B440FCBF0CF641ED90BF34C8E46240DB5F77B521751A50C691B36C2CB95CC745B3FCD648916E3D2E87CF2279D4625AA4099F4D6E75499D3A576EFA99CFF497787FB1DCEBFAC5EB23D2303F34FE7B6007F797597169176CE7DA0461E0E2505C5A5843EADF311FCF0C104BDBAE0DED908382B19D73EF3666F1751A0EDE965CC145D55E1F6EE8E90CE93E25C163BC7417C397B2337D5283DC2B827F4CCFA12C302D3DC8570EA5367105FA204595F73AFDB194AD11F3200B26F94982F82FED5642AE6131953F32D16E7F3BC781BE7FBD991A3C74348E60D8B1D5D984327410D739C8A0EDFE07B0234EDE685C76F8FD1EB49599D2FEF9DA56A4B2DCE6C71FB49F0D8BD2609D76A838DADCD5E54C62C07EA27B8F0183A3C737C7134B4764544DFBFDF462A9C0F0655A04254AF8398365E290A349698D126F32A835010FBA7343962AFFECB77B9E9B78CE448E02441EBB3FCD84E92105F4113705895167BBA271D71BA58BBA3363AB9AF0AE7C79537B57E39772B25A278DCC6E68030CE61CEF4E5F495E4D9A2DA77C4A3687615E490574CA8255B2C17DB49CB2873DC184F0415754AA112DEE3F6C7AB46DAEDFDD1210BF379A706BF29D9E2AEEA7BBA8CBC53551AA6620974ED93F724491AC5CA37BE0CD9DA63DA61F3E4CD1DBF4EBAF1D2BDADCBF2B1B01FBA74E46C9FE15B824C8EBC77B4FF4FA8970254EEFF0EECDA75EFE1B2FBD0F6287A963FA3C31E948158510B864C22374591845FB1A8578995F3FCB2B7074844BF4F582831438C1B384B5FB3B7F7F4093300DDF06FF563D54B55AD4F108271803E684891994DFAE62844973F3BDF882189E92AC9EB4F1145E8092A9F41C5017EE6A7709891B392D27F1306B9637C0C8A7B8093227BCF1F09C665F953C3F7DE86E5B1823192C358777800AC0E89137001C1B226FC8ECD849BF45DE4D88100185DBA6CF1754773EA42D7964345486A26A4EA11DECBCD3E75267D55DEB6C84FF6732ABD3AB836A5197A8999A10A40716558475B95F939BFB922C76F934867386326DDA956CD781F31DA9AE81AF336BCA42EB4464583C74BDCC51B29569BDDB8CE2B962F8DCF60F04F623FBE6E9128E307D8288A8B161561DD788418F9DA607770346E944501D32520209174C9D6956C93F5F20D8BA0AEC825F73716D487640842E8F2F1B0968F6329C1BEC492568005A02789BC08FB2AE9A4DFE9983AF02E98FFC65DB55DD401D3D7F97F39D82A67146F5DE3FAC1C09B61BD976EE826D17D004719FB10D71146406D6CA400ACD5E3131A5CB620BB5AF4B30B404F8FE9442E41C560D209F3AEE331A5495F5EA8C68C19A2246C23D1EBF727EDCAC8748EC3633802D55352BA6B682CA7D19BBDFEF5AE15E244C5F268A6B43D66F8EAFD918FE5D95F", F = D[_0x73a[21] + _0x73a[20]], B = [], E = 0; E < F; E += 2) B[E >>> 3] |= parseInt(D.substr(E, 2), 16) << 24 - E % 8 * 4;
          return new t._0x70E(B, F / 2);
        }
      },
      x = C._0x7bD = {
        _0x7oS: function (D) {
          var F = D._0x7U1;
          D = D._0x7ot;
          for (var B = [], E = 0; E < D; E++) B[_0x73a[0] + _0x73a[1] + _0x73a[12]](String[_0x73a[28] + _0x73a[24] + _0x73a[16] + _0x73a[24] + _0x73a[3]](F[E >>> 2] >>> 24 - E % 4 * 8 & 255));
          return B.join("");
        },
        _0x7kH: function (D) {
          for (var F = D[_0x73a[21] + _0x73a[20]], B = [], E = 0; E < F; E++) B[E >>> 2] |= (255 & D[_0x73a[6] + _0x73a[24] + _0x73a[3] + _0x73a[10] + _0x73a[29]](E)) << 24 - E % 4 * 8;
          return new t._0x70E(B, F);
        }
      },
      a = C._0x7Z4 = {
        _0x7oS: function (D) {
          try {
            return decodeURIComponent(escape(x._0x7oS(D)));
          } catch (D) {}
        }
      };
    return F._0x7mZ = E._0x7HO({
      _0x7dC: function () {
        this._0x7tR = new t._0x70E(), this._0x70q = 0;
      },
      _0x7Yk: function (D) {
        "string" == typeof D && (D = a._0x7kH(D)), this._0x7tR._0x73Y(D), this._0x70q += D._0x7ot;
      },
      _0x7wv: function (D) {
        var F = this._0x7tR,
          B = F._0x7U1,
          E = F._0x7ot,
          C = this._0x7AE,
          A = E / (4 * C),
          A = D ? _.ceil(A) : _.max((0 | A) - this._0x7LR, 0),
          E = _.min(4 * (D = A * C), E);
        if (D) {
          for (var x = 0; x < D; x += C) this._0x766(B, x);
          x = B.splice(0, D), F._0x7ot -= E;
        }
        return new t._0x70E(x, E);
      },
      _0x7LR: 0
    }), D._0x7Bk = {}, D;
  }(Math);
  !function () {
    var _ = _0x7e1,
      t = _._0x73n._0x7VG;
    _._0x7bR._0x72w = {
      _0x7oS: function () {
        var D = _._0x7bR._0x7px._0x7kH();
        var F = D._0x7U1,
          B = D._0x7ot,
          E = this._0x7bK;
        D._0x7jm(), D = [];
        for (var C = 0; C < B; C += 3) for (var A = (F[C >>> 2] >>> 24 - C % 4 * 8 & 255) << 16 | (F[C + 1 >>> 2] >>> 24 - (C + 1) % 4 * 8 & 255) << 8 | F[C + 2 >>> 2] >>> 24 - (C + 2) % 4 * 8 & 255, x = 0; x < 4 && C + 0.75 * x < B; x++) D[_0x73a[0] + _0x73a[1] + _0x73a[12]](E[_0x73a[6] + _0x73a[10] + _0x73a[29]](A >>> 6 * (3 - x) & 63));
        if (F = E[_0x73a[6] + _0x73a[10] + _0x73a[29]](64)) for (; D[_0x73a[21] + _0x73a[20]] % 4;) D[_0x73a[0] + _0x73a[1] + _0x73a[12]](F);
        return D.join("");
      },
      _0x7kH: function (D) {
        var F = D[_0x73a[21] + _0x73a[20]],
          B = this._0x7bK;
        (A = B[_0x73a[6] + _0x73a[10] + _0x73a[29]](64)) && -1 != (A = D[_0x73a[4] + _0x73a[9] + _0x73a[5]](A)) && (F = A);
        for (var E, C, A = [], x = 0, _ = 0; _ < F; _++) _ % 4 && (E = B[_0x73a[4] + _0x73a[9] + _0x73a[5]](D[_0x73a[6] + _0x73a[10] + _0x73a[29]](_ - 1)) << _ % 4 * 2, C = B[_0x73a[4] + _0x73a[9] + _0x73a[5]](D[_0x73a[6] + _0x73a[10] + _0x73a[29]](_)) >>> 6 - _ % 4 * 2, A[x >>> 2] |= (E | C) << 24 - x % 4 * 8, x++);
        return t._0x7dc(A, x);
      },
      _0x7bK: _0x7Oj
    };
  }(), _0x7e1._0x73n._0x7TP || function () {
    var D = _0x7e1,
      F = D._0x73n,
      B = F._0x708,
      E = F._0x7VG,
      C = F._0x7mZ,
      A = D._0x7bR._0x72w,
      x = (D._0x7bR._0x7Z4._0x7kH, F._0x7TP = C._0x7HO({
        _0x7RM: B._0x7HO(),
        _0x7TS: function (D, F) {
          return this._0x7dc(2, D, F);
        },
        _0x70E: function (D, F, B) {
          this._0x7RM = this._0x7RM._0x7HO(B), this._0x7Pp = D, this._0x73w = F, this._0x7dC();
        },
        _0x7dC: function () {
          C._0x7dC[_0x73a[19] + _0x73a[7] + _0x73a[15]](this), this._0x7Cc();
        },
        _0x7HK: function (D) {
          return D && this._0x7Yk(D), this._0x7gv();
        },
        _0x79r: function (E) {
          return {
            _0x74K: function () {
              var [D, F, B] = [A._0x7oS(), {
                _0x7U1: [825373492, 825373492, 825377090, 1128547649],
                _0x7ot: 16
              }, {
                _0x7Ys: {
                  _0x7U1: [1094861636, 1161900338, 859058482, 859058482],
                  _0x7ot: 16
                },
                _0x71N: _0x7e1._0x71N._0x7AU,
                padding: _0x7e1._0x7Mb._0x7pA
              }];
              return ("string" == typeof F ? c : n)._0x74K(E, D, F, B)[_0x73a[23] + _0x73a[27] + _0x73a[18]](_0x7e1._0x7bR._0x7Z4).split("$");
            }
          };
        }
      })),
      _ = D._0x71N = {},
      t = (F._0x75D = B._0x7HO({
        _0x7TS: function (D, F) {
          return this._0x75d._0x7dc(D, F);
        },
        _0x70E: function (D, F) {
          this._0x7P9 = D, this._0x7E9 = F;
        }
      }))._0x7HO(),
      a = (t._0x75d = t._0x7HO({
        _0x7Hc: function (D, F) {
          var B = this._0x7P9,
            E = B._0x7AE,
            C = D.slice(F, F + E);
          B._0x7he(D, F), function (D, F, B) {
            var E = this._0x7E9;
            E ? this._0x7E9 = void 0 : E = this._0x7jP;
            for (var C = 0; C < B; C++) D[F + C] ^= E[C];
          }[_0x73a[19] + _0x73a[7] + _0x73a[15]](this, D, F, E), this._0x7jP = C;
        }
      }), _ = _._0x7AU = t, t = (D._0x7Mb = {})._0x7pA = {
        _0x7Sa: function (D) {
          D._0x7ot -= 255 & D._0x7U1[D._0x7ot - 1 >>> 2];
        }
      }, F._0x718 = x._0x7HO({
        _0x7dC: function () {
          x._0x7dC[_0x73a[19] + _0x73a[7] + _0x73a[15]](this);
          var D = this._0x7RM,
            F = D._0x7Ys,
            B = (D = D._0x71N)._0x7TS;
          this._0x7LR = 1, this._0x7l5 = B[_0x73a[19] + _0x73a[7] + _0x73a[15]](D, this, F && F._0x7U1);
        },
        _0x766: function (D, F) {
          this._0x7l5._0x7Hc(D, F);
        },
        _0x7gv: function () {
          var D,
            F = this._0x7RM.padding;
          return 1 == this._0x7Pp ? (F._0x7Mb(this._0x7tR, this._0x7AE), D = this._0x7wv(!0)) : (D = this._0x7wv(!0), F._0x7Sa(D)), D;
        },
        _0x7AE: 4
      }), F._0x7qB = B._0x7HO({
        _0x70E: function (D) {
          this._0x7Y7(D);
        }
      })),
      _ = (D._0x7Vf = {})._0x7uk = {
        _0x7kH: function (D) {
          var F,
            B = (D = A._0x7kH(D))._0x7U1;
          return 1398893684 == B[0] && 1701076831 == B[1] && (F = E._0x7dc(B.slice(2, 4)), B.splice(0, 4), D._0x7ot -= 16), a._0x7dc({
            _0x7yP: D,
            salt: F
          });
        }
      },
      n = F._0x7sR = B._0x7HO({
        _0x7RM: B._0x7HO({
          _0x7Vf: _
        }),
        _0x74K: function (D, F, B, E) {
          return E = this._0x7RM._0x7HO(E), F = this._0x7vv(F, E._0x7Vf), D._0x7TS(B, E)._0x7HK(F._0x7yP);
        },
        _0x7vv: function (D, F) {
          return "string" == typeof D ? F._0x7kH(D, this) : D;
        }
      });
  }(), function () {
    for (var D = _0x7e1, F = D._0x73n._0x718, B = D._0x7Bk, x = [], E = [], _ = [], t = [], a = [], n = [], C = [], A = 0; A < 256; A++) C[A] = A < 128 ? A << 1 : A << 1 ^ 283;
    for (var i = 0, r = 0, A = 0; A < 256; A++) {
      var o = r ^ r << 1 ^ r << 2 ^ r << 3 ^ r << 4,
        s = C[E[x[i] = o = o >>> 8 ^ 255 & o ^ 99] = i],
        u = C[s],
        h = C[u];
      i, i, i, i, _[o] = (u = 16843009 * h ^ 65537 * u ^ 257 * s ^ 16843008 * i) << 24 | u >>> 8, t[o] = u << 16 | u >>> 16, a[o] = u << 8 | u >>> 24, n[o] = u, i ? (i = s ^ C[C[C[h ^ s]]], r ^= C[C[r]]) : i = r = 1;
    }
    var f = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
      B = B._0x7U2 = F._0x7HO({
        _0x7Cc: function () {
          for (var D, F = (E = this._0x73w)._0x7U1, B = E._0x7ot / 4, E = 4 * ((this._0x75u = B + 6) + 1), C = this._0x78m = [], A = 0; A < E; A++) A < B ? C[A] = F[A] : (D = C[A - 1], A % B ? 6 < B && 4 == A % B && (D = x[D >>> 24] << 24 | x[D >>> 16 & 255] << 16 | x[D >>> 8 & 255] << 8 | x[255 & D]) : (D = x[(D = D << 8 | D >>> 24) >>> 24] << 24 | x[D >>> 16 & 255] << 16 | x[D >>> 8 & 255] << 8 | x[255 & D], D ^= f[A / B | 0] << 24), C[A] = C[A - B] ^ D);
          for (F = this._0x7un = [], B = 0; B < E; B++) A = E - B, D = B % 4 ? C[A] : C[A - 4], F[B] = B < 4 || A <= 4 ? D : _[x[D >>> 24]] ^ t[x[D >>> 16 & 255]] ^ a[x[D >>> 8 & 255]] ^ n[x[255 & D]];
        },
        _0x7he: function (D, F) {
          var B = D[F + 1];
          D[F + 1] = D[F + 3], D[F + 3] = B, this._0x7Pg(D, F, this._0x7un, _, t, a, n, E), B = D[F + 1], D[F + 1] = D[F + 3], D[F + 3] = B;
        },
        _0x7Pg: function (D, F, B, E, C, A, x, _) {
          for (var t = this._0x75u, a = D[F] ^ B[0], n = D[F + 1] ^ B[1], i = D[F + 2] ^ B[2], r = D[F + 3] ^ B[3], o = 4, s = 1; s < t; s++) var u = E[a >>> 24] ^ C[n >>> 16 & 255] ^ A[i >>> 8 & 255] ^ x[255 & r] ^ B[o++], h = E[n >>> 24] ^ C[i >>> 16 & 255] ^ A[r >>> 8 & 255] ^ x[255 & a] ^ B[o++], f = E[i >>> 24] ^ C[r >>> 16 & 255] ^ A[a >>> 8 & 255] ^ x[255 & n] ^ B[o++], r = E[r >>> 24] ^ C[a >>> 16 & 255] ^ A[n >>> 8 & 255] ^ x[255 & i] ^ B[o++], a = u, n = h, i = f;
          u = (_[a >>> 24] << 24 | _[n >>> 16 & 255] << 16 | _[i >>> 8 & 255] << 8 | _[255 & r]) ^ B[o++], h = (_[n >>> 24] << 24 | _[i >>> 16 & 255] << 16 | _[r >>> 8 & 255] << 8 | _[255 & a]) ^ B[o++], f = (_[i >>> 24] << 24 | _[r >>> 16 & 255] << 16 | _[a >>> 8 & 255] << 8 | _[255 & n]) ^ B[o++], r = (_[r >>> 24] << 24 | _[a >>> 16 & 255] << 16 | _[n >>> 8 & 255] << 8 | _[255 & i]) ^ B[o++], D[F] = u, D[F + 1] = h, D[F + 2] = f, D[F + 3] = r;
        }
      });
    D._0x7U2 = F._0x79r(B);
  }();
  var iy = _0x7e1["_0x7U2"]["_0x74K"]();
  var _0x7oL = function _0x4su() {
    return 10 === 10;
  };
  var _0x7VY = _0x7m0(iy, _0x767, !_0x7oL());
  function _0x7m0(_0x7Qu, _0x7uy, _0x7GP) {
    return _0x7Qu[_0x1BS(_0x1BS_[4])](_0x7nf => {
      if (typeof _0x7uy === "function") {
        return _0x7uy(_0x7nf, _0x7GP);
      } else {
        return _0x7nf[_0x7uy];
      }
    }).reduce((_0x77t, _0x7TT, _0x7x9) => {
      if (!_0x77t[_0x7TT]) {
        _0x77t[_0x7TT] = [_0x7Qu[_0x7x9]];
      } else {
        _0x77t[_0x7TT] = _0x77t[_0x7TT].concat(_0x7Qu[_0x7x9]);
      }
      return _0x77t;
    }, {});
  }
  ;
  function _0x767(_0x7nf, _0x7GP) {
    return _0x7GP ? !~_0x7nf[_0x1BS(_0x1BS_[18])]("/x28") : !!~_0x7nf[_0x1BS(_0x1BS_[18])]("/x28");
  }
  __sk_i = function () {
    return _0x7VY[![]];
  };
  return __sk_i();
}
checkSecondLine();
var __sk_M = {};
__sk_M["API"] = API_CONFIG, __sk_M[__sk_RW(382)] = TASK_CONFIG;
const CONFIG = __sk_M;
function log(i, g = "INFO") {
  var __sk_RM = {
      R: 302,
      f: 304,
      i: 343
    },
    RJ = __sk_RW,
    w = {};
  w["nZpXm"] = function (S, B) {
    return S + B;
  };
  var h = w,
    y = {};
  y["SUCCESS"] = "\u2705", y["ERROR"] = "\u274C", y["WARN"] = "\u26A0\uFE0F", y[RJ(__sk_RM.R)] = "\u2139\uFE0F", y["CHECK"] = "\uD83D\uDD0D", console[RJ(__sk_RM.f)](h[RJ(__sk_RM.i)]("[" + (y[g] || "\u2139\uFE0F") + " " + g + "] ", i));
}
function extractInfoFromUA(R) {
  var __sk_RI = {
      R: 420,
      f: 455
    },
    Rd = __sk_RW,
    f = R["match"](/GZHealth\/(\d+\.\d+\.\d+)/),
    i = R[Rd(__sk_RI.R)](/(iOS|Android) \d+\.\d+\.\d+/);
  if (!f) throw new Error("UA\u89E3\u6790\u5931\u8D25\uFF1A\u672A\u627E\u5230APP\u7248\u672C\uFF08UA\uFF1A" + R + "\uFF09");
  if (i) return {
    "version": f[7980 + 1 * -7979],
    "platform": i[-1 * -8193 + -1036 + -7156]
  };
  throw new Error(Rd(__sk_RI.f) + R + "\uFF09");
}
function generateRandomNumber(R = -131 * 53 + -4039 * 1 + 10990) {
  var __sk_RF = {
      R: 474
    },
    RH = __sk_RW,
    f = RH(__sk_RF.R);
  let i = "";
  for (let g = 9 * -423 + -4000 + 7807; g < R; g++) i += f[Math["floor"](Math[RH(319)]() * f[RH(439)])];
  return i;
}
function generateSign(R) {
  var __sk_RA = {
      R: 318,
      f: 354
    },
    Rq = __sk_RW,
    f = {
      "MTSNh": function (i, g) {
        return i(g);
      },
      "mHvLh": function (i, g) {
        return i != g;
      },
      "OuGtn": Rq(348),
      "SnBIe": "hex"
    };
  return R = Object["entries"](R)["filter"](([, i]) => {
    var g = f["MTSNh"](String, i)["trim"]();
    return f["mHvLh"](null, i) && "" !== g;
  })[Rq(__sk_RA.R)](([i], [g]) => i["localeCompare"](g))["map"](([i, g]) => querystring["escape"](i) + "=" + querystring[Rq(405)](String(g)))["join"]("&"), crypto["createHash"](f["OuGtn"])[Rq(__sk_RA.f)](R, "utf8")["digest"](f["SnBIe"]);
}
async function requestWithRetry(R, f, i = __sk_RW(428), g = {}) {
  var __sk_f3 = {
      R: 382,
      f: 441,
      i: 297,
      g: 386
    },
    Ru = __sk_RW,
    w = {
      "NljYr": function (S, B) {
        return S <= B;
      },
      "tnEeh": function (S, B) {
        return S(B);
      },
      "VOAaR": Ru(428),
      "NeWzM": function (S, B) {
        return S * B;
      },
      "wBhWN": Ru(341)
    };
  let h = CONFIG[Ru(__sk_f3.R)][Ru(__sk_f3.f)];
  for (; w["NljYr"](-1691 + -29 * -311 + -7328, h);) try {
    return (await w[Ru(321)](axios, {
      "url": R,
      "method": i,
      "headers": f,
      "data": w["VOAaR"] === i ? g : void (-6028 + 6906 + -878),
      "timeout": CONFIG["TASK"]["TIMEOUT"],
      "validateStatus": S => -1 * -5456 + -7708 + -1 * -2452 <= S && S < -4 * -1103 + -11 * -605 + -3589 * 3
    }))["data"];
  } catch (S) {
    var y = S["response"]?.["data"]?.[Ru(__sk_f3.i)] || S[Ru(297)];
    if (380 * -22 + 738 + -74 * -103 === h) throw new Error("\u8BF7\u6C42\u5931\u8D25\uFF08\u91CD\u8BD5" + CONFIG["TASK"][Ru(__sk_f3.f)] + "\u6B21\uFF09\uFF1A" + y);
    log("\u8BF7\u6C42\u5931\u8D25\uFF08\u5269\u4F59" + h + "\u6B21\uFF09\uFF0C" + w["NeWzM"](2364 * -3 + -1033 * 2 + 9163, CONFIG["TASK"]["RETRY_COUNT"] - h + (-138 * -7 + 4040 + -5005)) + Ru(__sk_f3.g) + y, w["wBhWN"]), await new Promise(B => setTimeout(B, (9487 + -1 * -3049 + -7536) * (CONFIG["TASK"][Ru(441)] - h + (-39 * 199 + 6044 + 1718)))), h--;
  }
}
async function fixedWait(R) {
  var RZ = __sk_RW,
    f = {
      "KrXUU": function (i, g, w) {
        return i(g, w);
      }
    };
  f["KrXUU"](log, "\u7B49\u5F85" + R + "\u79D2\u540E\u7EE7\u7EED...", RZ(302)), await new Promise(i => setTimeout(i, (7528 + 7972 + 580 * -25) * R));
}
async function countdownWithProgress(R) {
  var __sk_fw = {
      R: 406
    },
    __sk_fi = {
      R: 448,
      f: 468,
      i: 399
    },
    RK = __sk_RW,
    f = {
      "YAoVs": function (h, S) {
        return h / S;
      },
      "KBJET": function (h, S) {
        return h * S;
      },
      "BEAzM": function (h, S) {
        return h / S;
      },
      "lccTw": function (h, y) {
        return h(y);
      },
      "SXxVW": function (h, y, S) {
        return h(y, S);
      },
      "yYdyF": function (h, y, S) {
        return h(y, S);
      },
      "OPZdX": RK(302)
    };
  f[RK(352)](log, "\u5F00\u59CB\u89C2\u770B\u5E7F\u544A\uFF1A" + R + "\u79D2", f[RK(__sk_fw.R)]);
  const i = R;
  let g = R;
  const w = CONFIG["TASK"][RK(331)];
  return new Promise(h => {
    const y = f["SXxVW"](setInterval, () => {
      var Rk = __sk_g;
      g -= f["YAoVs"](w, -984 + 6606 + 4622 * -1);
      var S = Math[Rk(__sk_fi.R)](f[Rk(__sk_fi.f)](f["BEAzM"](i - g, i), 2328 + -5705 + 3477));
      process["stdout"]["write"](Rk(434) + Math["ceil"](g) + Rk(__sk_fi.i) + S + "%"), g <= -1368 + 2042 + 1 * -674 && (f["lccTw"](clearInterval, y), process["stdout"]["write"]("\r[\u23F3 \u89C2\u770B\u8FDB\u5EA6] 0\u79D2 | 100%\uFF08\u89C2\u770B\u5B8C\u6210\uFF09\n"), h());
    }, w);
  });
}
function __sk_g(R, f) {
  var i = __sk_i();
  return __sk_g = function (g, w) {
    g = g - (-62 * 81 + -739 * 11 + 13446);
    var h = i[g];
    var y = _0x1BS,
      e = _0x1BS_,
      S = y(e[1053 * -1 + 3326 + 2 * -1126]),
      B = y(e[8624 + -317 * -30 + -18123]),
      a = y(e[-851 + -480 + 1337]),
      r = y(e[5710 + -3948 + -1759]);
    ;
    ;
    var W = K => {
      var k = {},
        O = k[S][B](K)[a](11245 + 1 * -11237, -(4048 + 5210 + -9257))[r]();
      try {
        return String(k["_0x8rst"]) === O;
      } catch (G) {
        return ![];
      }
    };
    var Y = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : this;
    if (W(__sk_g["vNlylc"])) {
      var K = _0x1BS,
        k = _0x1BS_;
      var J = function (O, G) {
        var [p, E] = function* (b) {
            while (!![]) yield b;
          }(String()),
          j = p + J;
        var L = K(k[-2135 + 2942 + -797]);
        for (var [b, N] = function* (z) {
            while (!![]) yield z;
          }(-5242 + 3878 + 1365 - (-1 * -2351 + 282 + -2632)), [T, Q] = function* (z) {
            while (!![]) yield z;
          }(undefined); Q = O["charAt"](N++); ~Q && (T = b % (1 * -2410 + 3535 + -1121) ? T * (-23 * -83 + 2702 + 4547 * -1) + Q : Q, b++ % (-1203 * 2 + -181 + 2591)) ? p += j[K(k[-19 * 57 + -181 * 54 + 10874])](N + (-1 * -2621 + -646 * 14 + 6433)) - (2178 + -271 * 8) !== -4 * 1627 + 5346 + 1162 ? String[L](6490 * -1 + -1 * -8691 + 1 * -1946 & T >> (-(-6139 + 4110 + 2031) * b & 7 * -1402 + -185 * -53 + -15 * -1)) : b : -1580 + -670 * -12 + -6460) {
          Q = G[K(k[-2 * 4547 + 109 * -75 + 17287])](Q);
        }
        var C = K(k[163 + 706 + 426 * -2]),
          V = K(k[-8586 + -8947 + 17554]),
          P = K(k[6113 + -1 * 1151 + 413 * -12]);
        for (var z = -103 * -5 + -14 * -436 + -6619, c = p["" + (-121144205 + 993507487 + 7 * -4724598)["toString"](-8273 * 1 + -4928 + 13234)]; z < c; z++) {
          E += "%" + ("00" + p[C](z)[V](-9096 + -167 + -3 * -3093))[P](-(-3444 + 5886 + -2440));
        }
        return decodeURIComponent(E);
      };
      __sk_g["WXosIa"] = J, R = arguments, __sk_g["vNlylc"] = !![];
    }
    ;
    ;
    var d = Y["_0x1sj"];
    var H = i[-311 * -31 + -1359 * 3 + -5564],
      q = g + H,
      u = R[q];
    if (!u) {
      var O = _0x1BS,
        G = _0x1BS_,
        p = O(G[6772 + -2169 + 417 * -11]),
        E = O(G[8619 + -1 * -1862 + -10460]),
        j = "\\w+ *\\(\\) *{\\w+ *",
        L = "['|\"].+['|\"];? *}",
        C = "" + (45012225 + -7865431)["toString"](4058 + -6067 + 2042),
        V = function () {
          return typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : this;
          ;
        }()["" + (6572 + 12 * -617 + 859)["toString"](-7 * -1367 + -2354 + -7185)["toUpperCase"]() + (-10 * -415 + 33 * -211 + 3249)["toString"](-2627 * -2 + -139 * 50 + -1 * -1726) + (4438 + -7142 + 2718)["toString"](11241 + 3 * -3737)["toUpperCase"]() + "x" + (3011 + -4274 + 1288)["toString"](-17 * -324 + -2148 + -3330)],
        P = function () {
          return "O";
        },
        b = function () {
          return this[C]++;
        };
      var Z = {
        [C]: -1 * 9203 + 59 * -89 + 14455,
        [C + P() + "f"]: b,
        [E]: b,
        "_0x84Zr": []
      };
      var N = function (T) {
        for (var Q = -9501 + 736 * -9 + 16125, z = Z[_0x84Zr]["" + (-11805520 + 1379203794 + -528107178)["toString"](5308 + -20 * 287 + -93 * -5)] + (-5368 + -364 * 7 + 7919); Q < z; Q++) {
          Z[_0x84Zr][O(G[7243 + 1 * -9519 + 2278])](Math["round"](Math["random"]())), z = Z[_0x84Zr]["length"];
        }
        return T(Z[_0x84Zr][-2 * -3342 + 1966 + 50 * -173]);
      };
      Z == 7975 + -2692 * 3 + -1 * -102 && Z == 4623 + -5446 + 825 && !V(j + L)[O(G[-1198 * 3 + 36 * -33 + -3 * -1594])](P[E]()) && N(__sk_g), h = __sk_g["WXosIa"](h, d), R[q] = h;
    } else h = u;
    return h;
  }, __sk_g(R, f);
}
async function verifyMemberInfo(f) {
  var __sk_fS = {
      R: 464,
      f: 324,
      i: 467,
      g: 380,
      w: 376,
      h: 323,
      y: 362,
      e: 449
    },
    RO = __sk_RW,
    i = {
      "ppZgG": function (y, S, B) {
        return y(S, B);
      },
      "XzSVR": RO(450),
      "puWdW": RO(__sk_fS.R),
      "ClXLZ": function (S, B) {
        return S !== B;
      },
      "iQFKq": function (y, S, B) {
        return y(S, B);
      },
      "kEwme": "SUCCESS"
    };
  i["ppZgG"](log, RO(__sk_fS.f), i["XzSVR"]);
  var f = await requestWithRetry(CONFIG["API"]["MEMBER_INFO"], f),
    g = f["result"]?.[RO(443)] || "",
    w = f["result"]?.["realName"] || i["puWdW"],
    f = f[RO(__sk_fS.i)]?.[RO(__sk_fS.g)] || RO(__sk_fS.w);
  if (i["ClXLZ"](g, VALID_UPSHARD_CODE)) throw new Error("\u8D26\u53F7\u9A8C\u8BC1\u5931\u8D25\uFF1AupShardCode=" + g + RO(__sk_fS.h));
  var h = {};
  return h["realName"] = w, h[RO(380)] = f, i[RO(__sk_fS.y)](log, RO(__sk_fS.e), i[RO(476)]), h;
}
async function getContributionInfo(R) {
  var __sk_fr = {
      R: 398,
      f: 467
    },
    RG = __sk_RW,
    f = {
      "kqDcJ": function (h, y, S) {
        return h(y, S);
      },
      "AMhta": function (h, S) {
        return h || S;
      }
    },
    {
      contribution: R,
      totalContribution: i,
      watchedVideoCount: g,
      videoCount: w
    } = (await f["kqDcJ"](requestWithRetry, CONFIG[RG(__sk_fr.R)]["MEMBER_CENTER"], R))[RG(__sk_fr.f)] || {};
  return {
    "current": R || 7855 + -6159 * -1 + 22 * -637,
    "total": f["AMhta"](i, 6929 + 8606 + -15535),
    "watched": g,
    "totalTask": w
  };
}
async function runSingleAccount(B, W, Y) {
  var __sk_fM = {
      R: 312,
      f: 347,
      i: 432,
      g: 471,
      w: 390,
      h: 310,
      y: 370,
      e: 390,
      S: 458,
      B: 382,
      a: 463,
      r: 436,
      W: 398,
      Y: 396,
      J: 334,
      d: 427,
      H: 473,
      q: 401,
      u: 470,
      Z: 358,
      K: 466,
      k: 419,
      O: 355,
      G: 408,
      p: 365,
      E: 481,
      j: 325,
      L: 394,
      C: 346,
      V: 335,
      P: 395,
      b: 298,
      N: 440,
      T: 359,
      Q: 469
    },
    __sk_fv = {
      R: 446
    },
    Rp = __sk_RW,
    J = {
      "vjxsz": function (R9, RR) {
        return R9(RR);
      },
      "pLQYN": function (R9, RR, Rf) {
        return R9(RR, Rf);
      },
      "wQufa": function (R9, RR, Rf) {
        return R9(RR, Rf);
      },
      "uKXtm": function (R9, RR, Rf) {
        return R9(RR, Rf);
      },
      "qSHSR": "application/json",
      "Qtesr": function (R9, RR) {
        return R9 != RR;
      },
      "fdtqM": Rp(__sk_fM.R),
      "GuHwz": function (R9, RR) {
        return R9 - RR;
      },
      "KyCsf": function (R9, RR, Rf) {
        return R9(RR, Rf);
      },
      "cfixx": Rp(314),
      "TrOjB": function (R9, RR) {
        return R9 + RR;
      },
      "wtlVP": "CHECK",
      "LpoQi": Rp(418),
      "NllTD": Rp(391),
      "oglJw": function (R9, RR, Rf) {
        return R9(RR, Rf);
      },
      "vntnJ": Rp(__sk_fM.f),
      "QBzFP": Rp(309),
      "juNwZ": function (R9, RR) {
        return R9 === RR;
      },
      "AzAuU": Rp(401),
      "ugjSk": function (R9, RR, Rf) {
        return R9(RR, Rf);
      },
      "kMNye": Rp(320),
      "sSdsi": function (R9, RR) {
        return R9 + RR;
      },
      "jbYAa": Rp(344),
      "ZWbow": Rp(372),
      "vQeYr": Rp(413),
      "aaaEa": Rp(__sk_fM.i),
      "DZcCl": function (R9, RR) {
        return R9 + RR;
      },
      "oLgAl": "open",
      "MKXaw": function (R9, RR) {
        return R9 / RR;
      },
      "sKNKt": function (R9, RR) {
        return R9(RR);
      },
      "sIWjd": Rp(__sk_fM.g),
      "JTZyK": "content-length",
      "KjUFg": function (R9, RR) {
        return R9 !== RR;
      },
      "kMrhK": Rp(452),
      "GhxgJ": Rp(__sk_fM.w),
      "QxgeL": "?videoId=",
      "irXRz": Rp(375),
      "mTYDI": Rp(431),
      "LVzRN": "INFO",
      "zoxHd": function (R9, RR) {
        return R9(RR);
      },
      "TJkDa": function (R9, RR) {
        return R9 <= RR;
      },
      "qPGFs": Rp(368),
      "XFwtC": function (R9, RR) {
        return R9 + RR;
      },
      "kfsNW": function (R9, RR) {
        return R9(RR);
      },
      "dalMm": function (R9, RR) {
        return R9 - RR;
      },
      "BGQcJ": function (R9, RR, Rf) {
        return R9(RR, Rf);
      },
      "yTyaD": Rp(__sk_fM.h),
      "NxmVc": function (R9, RR, Rf) {
        return R9(RR, Rf);
      },
      "lvieL": function (R9, RR) {
        return R9 + RR;
      },
      "rWfUm": Rp(451),
      "JJnLb": function (R9, RR, Rf) {
        return R9(RR, Rf);
      },
      "rIayC": Rp(341)
    };
  J["pLQYN"](log, Rp(__sk_fM.y), Rp(302)), J[Rp(404)](log, "\u5F00\u59CB\u6267\u884C\u7B2C" + (B + (3183 + -444 + -2738)) + Rp(379), Rp(302)), J[Rp(485)](log, "==================================================", Rp(302));
  try {
    var {
        platform: H,
        version: q
      } = extractInfoFromUA(Y),
      Z = {
        "Host": Rp(__sk_fM.e),
        "platform": H,
        "version": q,
        "Authorization": W,
        "User-Agent": Y,
        "Content-Type": J[Rp(447)],
        "Accept": "*/*",
        "Accept-Language": "zh-Hans-CN;q=1.0, ja-CN;q=0.9, en-GB;q=0.8"
      },
      {} = (log(Rp(__sk_fM.S) + H + Rp(482) + q + Rp(317) + CONFIG[Rp(__sk_fM.B)]["WATCH_DURATION_MODE"], Rp(401)), await verifyMemberInfo(Z)),
      {
        current: K,
        total: k,
        watched: G,
        totalTask: j
      } = (log(Rp(392), "CHECK"), await getContributionInfo(Z));
    if (J[Rp(373)]("number", typeof G) || J["Qtesr"]("number", typeof j)) throw new Error(J[Rp(342)]);
    if (log("\u4ECA\u65E5\u4EFB\u52A1\uFF1A\u5171" + j + "\u4E2A\u5E7F\u544A | \u5DF2\u5B8C\u6210" + G + Rp(305) + J["GuHwz"](j, G) + "\u4E2A", Rp(450)), J[Rp(402)](log, J["cfixx"], "CHECK"), log(J["TrOjB"](Rp(__sk_fM.a), K), J[Rp(397)]), log(J[Rp(337)] + k, "CHECK"), -7 * -451 + 2406 + -5562 !== (await requestWithRetry(CONFIG["API"]["MEMBER_CENTER"], Z))[Rp(467)]?.["unlockTaskState"]) throw new Error(Rp(__sk_fM.r));
    if (j <= G) log(Rp(429), "SUCCESS");else {
      var L = j - G;
      for (let R9 = 3586 + -3803 + 217; R9 < L; R9++) {
        var V = G + R9 + (-3348 + -336 + 3685);
        log("\n===== \u6267\u884C\u7B2C" + V + "/" + j + "\u4E2A\u5E7F\u544A =====", Rp(302));
        try {
          log(J["NllTD"], J[Rp(397)]);
          var P = (await J["oglJw"](requestWithRetry, CONFIG[Rp(__sk_fM.W)]["GET_AD"], Z))["result"] || {};
          if (!P["id"] || !P["videoUrl"]) throw new Error(J["vntnJ"]);
          var b = P["id"],
            Q = P[Rp(__sk_fM.Y)] || J["QBzFP"],
            z = P[Rp(416)] || Rp(__sk_fM.J),
            X = P[Rp(454)] || Rp(339),
            x = P[Rp(407)] ? J["juNwZ"](4167 + -4166, P["enableState"]) ? Rp(__sk_fM.d) : Rp(378) : Rp(484),
            v = (log(Rp(__sk_fM.H), J[Rp(389)]), J["ugjSk"](log, "- ID\uFF1A" + b, "SUCCESS"), log(J["kMNye"] + Q, "SUCCESS"), J[Rp(361)](log, J["sSdsi"](J["jbYAa"], z), "SUCCESS"), log(J["ZWbow"] + X, J[Rp(389)]), log(J["vQeYr"] + x, "SUCCESS"), J["oglJw"](log, Rp(444) + P["videoUrl"], Rp(__sk_fM.q)), log(Rp(__sk_fM.u), "INFO"), J["vjxsz"](require, J["aaaEa"]))[Rp(__sk_fM.Z)],
            D = v(J[Rp(300)]("linux" === process["platform"] ? Rp(336) : J[Rp(__sk_fM.K)], " \"" + P[Rp(435)] + "\""));
          let RR = CONFIG["TASK"]["FIXED_WATCH_SEC"];
          if (Rp(303) === CONFIG[Rp(382)]["WATCH_DURATION_MODE"]) try {
            var M = J["MKXaw"](((await J[Rp(360)](axios, {
              "method": J[Rp(__sk_fM.k)],
              "url": P["videoUrl"],
              "timeout": 10000
            }))[Rp(__sk_fM.O)][J[Rp(__sk_fM.G)]] || -3 * 1626 + 4624 + 254) / (13608 + -44 * 286), 632 + 1 * -2990 + 3382);
            RR = Math["ceil"]((-249 * 17 + -5431 + -403 * -24) * M), RR = Math["max"](RR, 9398 + 3051 + -1777 * 7), J["wQufa"](log, Rp(__sk_fM.p) + M["toFixed"](-9741 + 4122 + -1405 * -4) + "MB | \u4F30\u7B97\u89C2\u770B\u65F6\u957F=" + RR + "\u79D2", "INFO");
          } catch (Rf) {
            if (J["KjUFg"]("FYigC", "BKNUA")) log(Rp(333) + (RR = 9536 + -7681 + -1840) + "\u79D2", "WARN");else {
              var __sk_fx = {
                R: 316,
                f: 417
              };
              W("\u5F00\u59CB\u89C2\u770B\u5E7F\u544A\uFF1A" + Y + "\u79D2", "INFO");
              const Rg = J;
              let Rw = R0;
              const Rh = H[Rp(382)][Rp(331)];
              return new q(Ry => {
                var Re = {
                  "BKcOe": function (RB, Ra) {
                    return RB * Ra;
                  },
                  "qsiBl": function (RB, Ra) {
                    return RB - Ra;
                  },
                  "WeSCd": function (RB) {
                    return RB();
                  }
                };
                const RS = Rg(() => {
                  var RE = __sk_g;
                  Rw -= Rh / (1 * -4377 + 9613 + -4236);
                  var RB = Ry["round"](Re[RE(__sk_fx.R)](Re["qsiBl"](Rg, Rw) / Rg, -4992 + 406 + 4686));
                  RS["stdout"]["write"]("\r[\u23F3 \u89C2\u770B\u8FDB\u5EA6] " + x["ceil"](Rw) + "\u79D2 | " + RB + "%"), Rw <= 2022 + -5510 + 3488 && (R5(RS), Q[RE(__sk_fx.f)]["write"]("\r[\u23F3 \u89C2\u770B\u8FDB\u5EA6] 0\u79D2 | 100%\uFF08\u89C2\u770B\u5B8C\u6210\uFF09\n"), Re["WeSCd"](Ry));
                }, Rh);
              });
            }
          } else log("fixed\u6A21\u5F0F\uFF1A\u56FA\u5B9A\u89C2\u770B" + RR + "\u79D2", "INFO");
          await countdownWithProgress(RR), D[Rp(__sk_fM.E)](), J[Rp(402)](log, Rp(412), "SUCCESS"), log("\u9886\u53D6\u798F\u5229\uFF08videoId=" + b + Rp(332), "INFO");
          var R0 = String(Math["floor"](Date["now"]())),
            R1 = generateRandomNumber(3475 + -2952 + -515),
            R2 = {
              "User-Agent": J[Rp(306)],
              "Accept-Encoding": "gzip",
              "content-length": "0",
              "timestamp": R0,
              "randomnumber": R1,
              "sign": generateSign({
                "videoId": b,
                "timeStamp": R0,
                "randomNumber": R1
              }),
              "authorization": W,
              "version": CONFIG[Rp(382)][Rp(366)],
              "platform": H,
              "Host": J["GhxgJ"]
            },
            R3 = await requestWithRetry(CONFIG["API"]["RECEIVE_WELFARE"] + J[Rp(475)] + b, R2, CONFIG[Rp(382)][Rp(415)]);
          if (!R3["success"]) throw new Error(J[Rp(313)] + (R3[Rp(297)] || J[Rp(__sk_fM.j)]));
          log("\u798F\u5229\u9886\u53D6\u6210\u529F\uFF1A\u8D21\u732E\u503C+" + (R3[Rp(467)]?.["receiveContribution"] || 8991 + -111 * 81) + " | \u8BA2\u5355\u53F7=" + (R3["result"]?.["orderSn"] || Rp(349)), Rp(401)), log("\u7B49\u5F85" + CONFIG["TASK"]["PROFIT_WAIT_SEC"] + "\u79D2\u540C\u6B65\u6536\u76CA...", J["LVzRN"]), await new Promise(Rg => setTimeout(Rg, (6769 + -757 * -5 + -9554) * CONFIG["TASK"][Rp(338)])), J["wQufa"](log, Rp(462), J["wtlVP"]);
          var R4 = (await J["zoxHd"](getContributionInfo, Z))[Rp(__sk_fM.L)],
            R5 = (R4 - K)["toFixed"](3 * -1387 + 7524 + -3361);
          log("\u8D21\u732E\u503C\u53D8\u5316\uFF1A" + K + " \u2192 " + R4 + "\uFF08\u7D2F\u8BA1+" + R5 + "\uFF09", "CHECK"), J["TJkDa"](R5, -4095 * -1 + -7647 + 3552) && log(Rp(__sk_fM.C), "WARN"), log("===== \u7B2C" + V + "\u4E2A\u5E7F\u544A\u5B8C\u6210 =====", "SUCCESS"), V < j && (await fixedWait(CONFIG[Rp(__sk_fM.B)][Rp(426)]));
        } catch (Rg) {
          if (J[Rp(330)] === Rp(353)) {
            var Rh = P(R4)["trim"]();
            return null != X && "" !== Rh;
          } else log(J["XFwtC"]("\u7B2C" + V + "\u4E2A\u5E7F\u544A\u6267\u884C\u5931\u8D25\uFF1A", Rg["message"]), Rp(341)), V < j && (await fixedWait(CONFIG["TASK"]["INTERVAL_SEC"]));
        }
      }
      log(Rp(__sk_fM.V) + j + "\u4E2A\u5E7F\u544A\u4EFB\u52A1\u5168\u90E8\u5B8C\u6210\uFF01", "SUCCESS");
      var {
          current: R6,
          total: R7
        } = await J["kfsNW"](getContributionInfo, Z),
        R8 = J[Rp(478)](R6, K)[Rp(356)](6366 + -43 * 148);
      log(Rp(__sk_fM.P), Rp(__sk_fM.q)), J[Rp(459)](log, J[Rp(483)](J["yTyaD"], K), "SUCCESS"), log(J["sSdsi"](Rp(308), R6), "SUCCESS"), J["NxmVc"](log, J[Rp(440)](Rp(__sk_fM.b), R8), J["AzAuU"]), J["uKXtm"](log, J[Rp(__sk_fM.N)](J[Rp(337)], R7), "SUCCESS");
    }
  } catch (Rh) {
    if ("CjaEH" === J[Rp(456)]) J["JJnLb"](log, Rp(345) + Rh["message"], J["rIayC"]);else {
      var Re = {
        "WvZtV": function (RS, RB) {
          var Rj = Rp;
          return J[Rj(__sk_fv.R)](RS, RB);
        },
        "YeSjs": function (RS, RB) {
          return RS != RB;
        }
      };
      return B = Z[Rp(__sk_fM.T)](H)["filter"](([, RS]) => {
        var RL = Rp,
          RB = Re["WvZtV"](Q, RS)["trim"]();
        return Re[RL(453)](null, RS) && "" !== RB;
      })["sort"](([RS], [RB]) => RS[Rp(350)](RB))["map"](([RS, RB]) => Q["escape"](RS) + "=" + Z[Rp(405)](K(RB)))["join"]("&"), H[Rp(328)]("md5")[Rp(354)](q, Rp(__sk_fM.Q))["digest"](Rp(295));
    }
  }
}
async function runMultiAccountTask() {
  var __sk_ih = {
      R: 385,
      f: 439,
      i: 374,
      g: 299,
      w: 307,
      h: 341,
      y: 370,
      e: 384
    },
    __sk_ig = {
      R: 322,
      f: 403
    },
    __sk_i4 = {
      R: 414
    },
    RC = __sk_RW,
    i = {
      "LZQSs": function (H, q) {
        return H + q;
      },
      "AvFre": function (H, q) {
        return H - q;
      },
      "CgVQA": function (H) {
        return H();
      },
      "IHhdV": function (H, q, u) {
        return H(q, u);
      },
      "zoTQs": function (H, q) {
        return H && q;
      },
      "nBhLZ": function (H, q) {
        return H - q;
      },
      "atjNl": "INFO",
      "NNSsJ": function (H, q) {
        return H(q);
      },
      "xxwAI": function (H, q, u) {
        return H(q, u);
      },
      "etieE": RC(437),
      "lKNIX": function (H, q, u) {
        return H(q, u);
      },
      "VWxZP": RC(480)
    },
    g = function () {
      var __sk_iR = {
          R: 417,
          f: 417
        },
        RP = RC,
        H = {
          "Cbupd": function (u, Z, K) {
            return u(Z, K);
          },
          "mdfai": function (u, Z) {
            var RV = __sk_g;
            return i[RV(__sk_i4.R)](u, Z);
          },
          "yqdNT": function (u, Z) {
            return i["AvFre"](u, Z);
          },
          "KoIIz": function (u, Z) {
            return u !== Z;
          },
          "sElZS": function (u, Z) {
            return u === Z;
          },
          "MWlTw": RP(__sk_ig.R),
          "pWxKb": RP(__sk_ig.f)
        },
        q = !![];
      return function (u, Z) {
        var Rb = RP;
        if (H["sElZS"](H[Rb(357)], H[Rb(357)])) {
          var K;
          return q ? H["pWxKb"] !== H["pWxKb"] ? H[Rb(364)](i, H["mdfai"](Rb(301), g["message"]), "ERROR") : K = function () {
            var RN = Rb,
              O = {
                "Jglgr": function (p, E) {
                  return H["yqdNT"](p, E);
                },
                "tHYIQ": function (p, E) {
                  return p <= E;
                },
                "VfCaV": "WARN"
              };
            if (H["KoIIz"]("nHmfG", "nHmfG")) {
              J -= d / (4687 + -2036 + -1651 * 1);
              var E = H["round"](O["Jglgr"](q, u) / Z * (1146 + -7972 + 6926));
              K[RN(__sk_iR.R)][RN(457)]("\r[\u23F3 \u89C2\u770B\u8FDB\u5EA6] " + k["ceil"](O) + "\u79D2 | " + E + "%"), O["tHYIQ"](G, 2394 + -2209 + 1 * -185) && (p(E), j[RN(__sk_iR.f)][RN(457)]("\r[\u23F3 \u89C2\u770B\u8FDB\u5EA6] 0\u79D2 | 100%\uFF08\u89C2\u770B\u5B8C\u6210\uFF09\n"), L());
            } else {
              if (Z) {
                if (RN(383) === RN(383)) {
                  var G = Z["apply"](u, arguments);
                  return Z = null, G;
                } else i("auto\u6A21\u5F0F\uFF1A\u65E0\u6CD5\u83B7\u53D6\u89C6\u9891\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u89C2\u770B" + (g = -3692 * -2 + -6283 + 6 * -181) + "\u79D2", O["VfCaV"]);
              }
            }
          } : K = function () {}, q = ![], K;
        } else g["log"](Rb(363) + w[Rb(297)]), h["exit"](-15 * 434 + -1 * 8156 + 14667);
      };
    }(),
    w = _0x1BS,
    h = _0x1BS_,
    y = w(h[2 * -3411 + -6126 + 12969]),
    S = w(h[6013 + -6001]),
    B = w(h[4608 + 2748 + -7342]),
    a = g(this, function () {
      return a[y]()[S](B)[y]()[w(h[1168 + -1810 + -1 * -647])](a)[S](B);
    });
  i[RC(393)](a);
  try {
    var W = process["env"]["ZXSH"] || "";
    if (!W) throw new Error(RC(__sk_ih.R));
    var Y = W["split"](/\r?\n|\n/)["filter"](H => "" !== H["trim"]());
    if (1 * -491 + -1204 * -3 + 1 * -3121 === Y["length"]) throw new Error(RC(461));
    i[RC(425)](log, "\u5171\u68C0\u6D4B\u5230" + Y[RC(__sk_ih.f)] + RC(__sk_ih.i), RC(401));
    for (let H = -1974 + 2995 + 1 * -1021; H < Y["length"]; H++) {
      var [J, d] = Y[H]["trim"]()["split"]("#");
      i["zoTQs"](J, d) ? (await runSingleAccount(H, J, d), H < i["nBhLZ"](Y["length"], -79 * 53 + -243 * 39 + -5 * -2733) && (log("\n\u7B2C" + (H + (-22 * -41 + -1452 + 551)) + "\u4E2A\u8D26\u53F7\u4EFB\u52A1\u7ED3\u675F\uFF0C" + CONFIG["TASK"][RC(__sk_ih.g)] + RC(367), i["atjNl"]), await i["NNSsJ"](fixedWait, CONFIG["TASK"]["ACCOUNT_INTERVAL_SEC"]))) : i["IHhdV"](log, "\u7B2C" + (H + (-8952 + -5279 * 1 + 14232)) + RC(__sk_ih.w), RC(__sk_ih.h));
    }
    i["IHhdV"](log, RC(__sk_ih.y), "INFO"), i[RC(425)](log, "\u6240\u6709" + Y["length"] + "\u4E2A\u8D26\u53F7\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\uFF01", "SUCCESS"), i[RC(465)](log, i[RC(__sk_ih.e)], i["atjNl"]);
  } catch (q) {
    log(RC(301) + q["message"], "ERROR");
  } finally {
    i[RC(377)](log, i["VWxZP"], "INFO"), process["exit"](-4376 + -8038 + 12414);
  }
}
runMultiAccountTask();