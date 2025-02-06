//Thu Feb 06 2025 06:11:28 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x427d08 = function () {
  let _0x1e124e = true;
  return function (_0x155db8, _0x355b96) {
    const _0x1295c5 = _0x1e124e ? function () {
      if (_0x355b96) {
        const _0x4a1f9b = _0x355b96.apply(_0x155db8, arguments);
        return _0x355b96 = null, _0x4a1f9b;
      }
    } : function () {};
    return _0x1e124e = false, _0x1295c5;
  };
}();
(function () {
  _0x427d08(this, function () {
    const _0x434728 = new RegExp("function *\\( *\\)"),
      _0x5e20d6 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i"),
      _0x466142 = _0x5c44a6("init");
    if (!_0x434728.test(_0x466142 + "chain") || !_0x5e20d6.test(_0x466142 + "input")) {
      _0x466142("0");
    } else _0x5c44a6();
  })();
})();
DS = 80;
XHCS = 100;
NAME = "中国联通";
VALY = ["ltck"];
VER = "1.1.2";
CK = "";
LOGS = 0;
usid = 0;
Notify = 1;
nowhour = Math.round(new Date().getHours()).toString();
crypto = require("crypto-js");
const request = require("request"),
  axios = require("axios"),
  {
    Console
  } = require("console"),
  fs = require("fs"),
  LT_KM = process.env.LT_KM || "";
function log(_0x2deb09) {
  fs.appendFile("1.log", _0x2deb09 + "\n", _0x36c4bd => {
    _0x36c4bd && console.error(_0x36c4bd);
  });
}
class User {
  constructor(_0x1fe5fa) {
    const [_0x61d3f4, _0xced094] = _0x1fe5fa.split("#");
    this.phone = _0x61d3f4;
    this.remark = _0xced094 || _0x61d3f4;
    this._ = ++usid;
    this.f = "[" + this._ + "]" + this.remark;
    this.message = "";
    this.logs = true;
  }
  async ["login"]() {
    let _0x7360ab = $.getFormattedDate(),
      _0x17e373 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "" + this.phone, "woreadst^&*12345", "16-Bytes--String"),
      _0x327a73 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"phone\":\"" + _0x17e373 + "\",\"timestamp\":\"" + _0x7360ab + "\"}", "woreadst^&*12345", "16-Bytes--String"),
      _0x4af71f = {
        "accesstoken": "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
      },
      _0x5c698d = "{\"sign\":\"" + _0x327a73 + "\"}",
      _0x35b635 = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/account/login", _0x4af71f, _0x5c698d);
    if (_0x35b635.code === "0000") {
      console.log("📱 " + this.f + " | ✅ 登录成功");
      log("📱 " + this.f + " | ✅ 登录成功");
      this.userindex = _0x35b635.data.userindex;
      this.verifycode = _0x35b635.data.verifycode;
      this.userid = _0x35b635.data.userid;
      this.token = _0x35b635.data.token;
      this.logs = true;
    } else {
      this.logs = false;
    }
  }
  async ["hqtoken"]() {
    let _0x5ddb76 = $.getFormattedDate(),
      _0x2274a7 = {
        "userid": this.userid,
        "token": this.token,
        "timestamp": _0x5ddb76
      },
      _0x1a9ba2 = {
        "timestamp": _0x5ddb76,
        "signtimestamp": Date.now(),
        "source": "9",
        "token": this.token,
        "userData": Buffer.from(JSON.stringify(_0x2274a7), "utf-8").toString("base64")
      };
    delete _0x1a9ba2.token;
    let _0x5234be = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", JSON.stringify(_0x1a9ba2), "QzUzOUM2QTQ2MTc4", "16-Bytes--String"),
      _0x14dc45 = {
        "accesstoken": "NTI4RDdGMUU0NUM2QzUzOUM2QTQ2MTc4"
      },
      _0x1eae6a = "{\"sign\":\"" + _0x5234be + "\"}",
      _0x8143ba = await $.task("post", "https://m.woread.com.cn/api/union/user/thirdPartyFreeLogin", _0x14dc45, _0x1eae6a);
    if (_0x8143ba.code === "0000") {
      console.log("📱 " + this.f + " | ✅ token获取成功");
      this.userindex = _0x8143ba.data.userindex;
      this.verifycode = _0x8143ba.data.verifycode;
      this.userid = _0x8143ba.data.userid;
      this.token = _0x8143ba.data.token;
      this.logs = true;
    } else {
      this.logs = false;
    }
  }
  async ["taskinfo"]() {
    let _0x3b271f = $.getFormattedDate(),
      _0x41f873 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"timestamp\":\"" + _0x3b271f + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String"),
      _0x299ed8 = {
        "accesstoken": "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
      },
      _0x238208 = "{\"sign\":\"" + _0x41f873 + "\"}",
      _0x28d608 = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryActiveInfo", _0x299ed8, _0x238208);
    _0x28d608.code === "0000" && (this.activeId = _0x28d608.data.activeId);
  }
  async ["tasklist"]() {
    let _0x5910e0 = $.getFormattedDate(),
      _0x157b18 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"activeIndex\":" + this.activeId + ",\"timestamp\":\"" + _0x5910e0 + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String"),
      _0x5ef805 = {
        "accesstoken": "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
      },
      _0x4548d5 = "{\"sign\":\"" + _0x157b18 + "\"}",
      _0x32904a = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryActiveTaskList", _0x5ef805, _0x4548d5);
    if (_0x32904a.code === "0000") {
      let _0x226c2e = _0x32904a.data.filter(_0x311a10 => {
        const _0x51595c = _0x311a10.taskDetail.taskName;
        return _0x51595c === "阅读120分钟";
      });
      _0x226c2e.sort((_0x20d3f2, _0x16496e) => _0x16496e.secondTaskId - _0x20d3f2.secondTaskId);
      if (nextDayTimestamp !== "请在规定时间段内抢任务") {
        let _0x4f6627 = $.time(13);
        if (_0x4f6627 <= nextDayTimestamp) {
          console.log("📱 " + this.f + " | ⏳ 抢任务倒计时: " + waitTime / 1000 + "秒");
          log("📱 " + this.f + " | ⏳ 抢任务倒计时: " + waitTime / 1000 + "秒");
          await $.wait(waitTime);
          for (let _0x4a0856 = 0; _0x4a0856 < XHCS; _0x4a0856++) {
            await this.receivetask(_0x226c2e);
          }
        } else console.log("【" + this.f + "】" + nextDayTimestamp), log("【" + this.f + "】" + nextDayTimestamp);
      }
    }
  }
  async ["receivetask"](_0x547b2e) {
    for (let _0x44d86c of _0x547b2e) {
      let _0xa92d1d = _0x44d86c.secondTaskId,
        _0x4c9032 = _0x44d86c.taskDetail.materialGroup.bindActiveName,
        _0x45e63e = $.getFormattedDate(),
        _0x5194b5 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"activeId\":" + this.activeId + ",\"taskId\":" + _0xa92d1d + ",\"timestamp\":\"" + _0x45e63e + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String"),
        _0xf78ee8 = {
          "accesstoken": "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
        },
        _0x1f6a87 = "{\"sign\":\"" + _0x5194b5 + "\"}",
        _0x4ce928 = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/activity423/receiveActiveTask", _0xf78ee8, _0x1f6a87);
      if (_0x4ce928.code === "0000") {
        console.log("📱 " + this.f + " | 🎯 抢任务: " + _0x4c9032);
        console.log("✅ 结果: " + _0x4ce928.data + " | ⏰ " + $.CurrentTime());
        log("📱 " + this.f + " | 🎯 抢任务: " + _0x4c9032);
        log("✅ 结果: " + _0x4ce928.data + " | ⏰ " + $.CurrentTime());
        this.message += "\n" + this.f + " 抢任务: " + _0x4c9032 + ", 结果: " + _0x4ce928.data;
      } else {
        console.log("📱 " + this.f + " | ❌ 抢任务失败: " + _0x4c9032);
        console.log("⚠️ 原因: " + _0x4ce928.message + " | ⏰ " + $.CurrentTime());
        log("📱 " + this.f + " | ❌ 抢任务失败: " + _0x4c9032);
        log("⚠️ 原因: " + _0x4ce928.message + " | ⏰ " + $.CurrentTime());
        this.message += "\n" + this.f + " 抢任务失败: " + _0x4c9032 + ", 原因: " + _0x4ce928.message;
      }
    }
  }
  async ["taskstatus"]() {
    let _0x1395b5 = $.getFormattedDate(),
      _0xe3899 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"activeIndex\":" + this.activeId + ",\"timestamp\":\"" + _0x1395b5 + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String"),
      _0x2ea649 = {
        "accesstoken": "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
      },
      _0x1fdd4c = "{\"sign\":\"" + _0xe3899 + "\"}",
      _0x225a38 = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryCurTaskStatus", _0x2ea649, _0x1fdd4c);
    if (_0x225a38.code === "0000" && _0x225a38.data.length >= 1) {
      this.taskProgress = _0x225a38.data.map(_0x10aa2f => {
        const _0xf7bb2e = _0x10aa2f.taskDetail.currentValue + "/" + _0x10aa2f.taskDetail.taskValue;
        return "【" + _0x10aa2f.taskDetail.materialGroup.bindActiveName + "】任务完成进度: " + _0xf7bb2e;
      }).join("\n");
      for (let _0x2c4d4a of _0x225a38.data) {
        console.log("📱 " + this.f + " | 📋 " + _0x2c4d4a.taskDetail.materialGroup.bindActiveName);
        console.log("✨ 进度: " + _0x2c4d4a.taskDetail.currentValue + "/" + _0x2c4d4a.taskDetail.taskValue);
        log("📱 " + this.f + " | 📋 " + _0x2c4d4a.taskDetail.materialGroup.bindActiveName);
        log("✨ 进度: " + _0x2c4d4a.taskDetail.currentValue + "/" + _0x2c4d4a.taskDetail.taskValue);
        if (_0x2c4d4a.taskDetail.currentValue < _0x2c4d4a.taskDetail.taskValue) await this.doread();else {
          if (_0x2c4d4a.taskDetail.currentValue >= _0x2c4d4a.taskDetail.taskValue) {
            console.log("📱 " + this.f + " | 🎉 任务完成: " + _0x2c4d4a.taskDetail.materialGroup.bindActiveName);
            console.log("🎁 获得奖励: " + _0x2c4d4a.taskDetail.materialGroup.bindActiveName);
            log("📱 " + this.f + " | 🎉 任务完成: " + _0x2c4d4a.taskDetail.materialGroup.bindActiveName);
            log("🎁 获得奖励: " + _0x2c4d4a.taskDetail.materialGroup.bindActiveName);
            await this.getreward(_0x2c4d4a.taskDetail.materialGroup.bindActiveName, _0x2c4d4a.id);
          }
        }
      }
    }
  }
  async ["doread"]() {
    console.log("📱 " + this.f + " | 📚 开始阅读...");
    log("📱 " + this.f + " | 📚 开始阅读...");
    let _0x1fd47b = $.getFormattedDate(),
      _0x42e123 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"signtimestamp\":\"" + Date.now() + "\",\"source\":\"9\",\"readTime\":\"240\",\"cntindex\":\"409672\",\"cntIndex\":409672,\"cnttype\":\"1\",\"cntType\":1,\"cardid\":\"11891\",\"catid\":\"118411\",\"pageIndex\":\"10683\",\"chapterseno\":1,\"channelid\":\"\",\"chapterid\":\"-1\",\"readtype\":1,\"isend\":\"0\",\"timestamp\":\"" + _0x1fd47b + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "QzUzOUM2QTQ2MTc4", "16-Bytes--String"),
      _0x48da06 = {
        "accesstoken": "NTI4RDdGMUU0NUM2QzUzOUM2QTQ2MTc4"
      },
      _0x66f230 = "{\"sign\":\"" + _0x42e123 + "\"}",
      _0x1ae97f = await $.task("post", "https://m.woread.com.cn/api/union/history/addReadTime", _0x48da06, _0x66f230);
    if (_0x1ae97f.code === "0000") {
      console.log("📱 " + this.f + " | ⏱️ 阅读时长上传: " + _0x1ae97f.message);
      log("📱 " + this.f + " | ⏱️ 阅读时长上传: " + _0x1ae97f.message);
      console.log("╰─────────────────╯");
      log("╰─────────────────╯");
      await $.wait(121000, 128000);
      await this.taskstatus();
    } else {
      await $.wait(121000, 128000);
    }
  }
  async ["getreward"](_0x459047, _0xd3f508) {
    let _0x354475 = $.getFormattedDate(),
      _0x9cf0d8 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"taskId\":" + _0xd3f508 + ",\"timestamp\":\"" + _0x354475 + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String"),
      _0x1f718c = {
        "accesstoken": "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
      },
      _0x5f4b2b = "{\"sign\":\"" + _0x9cf0d8 + "\"}",
      _0x734032 = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/activity423/completeActiveTask", _0x1f718c, _0x5f4b2b);
    if (_0x734032.code === "0000") {
      console.log("📱 " + this.f + " | 🎉 任务完成: " + _0x734032.data.taskDetail.taskName);
      console.log("🎁 获得奖励: " + _0x734032.data.exchangeResult.materialGroupInfo.groupName);
      log("📱 " + this.f + " | 🎉 任务完成: " + _0x734032.data.taskDetail.taskName);
      log("🎁 获得奖励: " + _0x734032.data.exchangeResult.materialGroupInfo.groupName);
      this.message += "\n" + this.f + " 完成任务: " + _0x734032.data.taskDetail.taskName + ", 获得奖励: " + _0x734032.data.exchangeResult.materialGroupInfo.groupName;
    } else console.log("📱 " + this.f + " | ❌ 任务失败: " + _0x459047), console.log("⚠️ 原因: " + _0x734032.message), log("📱 " + this.f + " | ❌ 任务失败: " + _0x459047), log("⚠️ 原因: " + _0x734032.message);
  }
  async ["lotterystatus"]() {
    let _0x270a78 = $.getFormattedDate(),
      _0x35ccd0 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"activeIndex\":" + this.activeId + ",\"timestamp\":\"" + _0x270a78 + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String"),
      _0x4ddf0f = {
        "accesstoken": "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
      },
      _0x295ce9 = "{\"sign\":\"" + _0x35ccd0 + "\"}",
      _0x1b5c24 = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryReadStatus", _0x4ddf0f, _0x295ce9);
    if (_0x1b5c24.code === "0000") {
      if (_0x1b5c24.data === "4") await this.lottery();else {
        if (_0x1b5c24.data === "3") {
          console.log("📱 " + this.f + " | 🔔 暂无阅读抽奖机会,明天再来试试运气吧");
          log("📱 " + this.f + " | 🔔 暂无阅读抽奖机会,明天再来试试运气吧");
          this.message += "\n📱 " + this.f + " 暂无阅读抽奖机会,明天再来试试运气吧";
        }
      }
    }
  }
  async ["lottery"]() {
    let _0x4b72c1 = $.getFormattedDate(),
      _0x10df52 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"activeIndex\":" + this.activeId + ",\"timestamp\":\"" + _0x4b72c1 + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String"),
      _0x51ded2 = {
        "accesstoken": "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
      },
      _0x38520c = "{\"sign\":\"" + _0x10df52 + "\"}",
      _0x21fc13 = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/activity423/drawReadActivePrize", _0x51ded2, _0x38520c);
    if (_0x21fc13.code === "0000") {
      console.log("📱 " + this.f + " | 🎲 阅读抽奖完成");
      console.log("🎁 获得奖励: " + _0x21fc13.data.prizedesc);
      log("📱 " + this.f + " | 🎲 阅读抽奖完成");
      log("🎁 获得奖励: " + _0x21fc13.data.prizedesc);
      this.message += "\n📱 " + this.f + " 完成阅读任务抽奖成功,获得: " + _0x21fc13.data.prizedesc;
      await $.wait(2000, 4000);
      await this.lotterystatus();
    }
  }
  async ["addDrawTimes"]() {
    let _0x5b432a = $.getFormattedDate(),
      _0x3a58a8 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"userid\":\"" + this.userid + "\",\"activetyindex\":6640,\"timestamp\":\"" + _0x5b432a + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String"),
      _0x1a7d00 = {
        "accesstoken": "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
      },
      _0x4126b7 = "{\"sign\":\"" + _0x3a58a8 + "\"}",
      _0x4e6444 = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/basics/addDrawTimes", _0x1a7d00, _0x4126b7);
    _0x4e6444.code === "0000" && (console.log("📱 " + this.f + " | 🎉 完成阅读打卡任务成功,获得抽奖机会"), log("📱 " + this.f + " | 🎉 完成阅读打卡任务成功,获得抽奖机会"), this.message += "\n📱 " + this.f + " 完成阅读打卡任务成功,获得抽奖机会");
  }
  async ["checkUserTakeActive"]() {
    let _0x241670 = $.getFormattedDate(),
      _0x5a119f = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"activeIndex\":6640,\"timestamp\":\"" + _0x241670 + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String"),
      _0x50f337 = {
        "accesstoken": "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
      },
      _0x5afb8e = "{\"sign\":\"" + _0x5a119f + "\"}",
      _0x7b23aa = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/activity/checkUserTakeActive", _0x50f337, _0x5afb8e);
    _0x7b23aa.code === "0000" && (_0x7b23aa.data > 0 ? await this.dodraw() : (console.log("📱 " + this.f + " | 🔔 暂无打卡抽奖机会,明天再来试试运气吧"), log("📱 " + this.f + " | 🔔 暂无打卡抽奖机会,明天再来试试运气吧"), this.message += "\n📱 " + this.f + " 暂无打卡抽奖机会,明天再来试试运气吧"));
  }
  async ["dodraw"]() {
    let _0x387351 = $.getFormattedDate(),
      _0x9c4144 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"activeindex\":6640,\"timestamp\":\"" + _0x387351 + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String"),
      _0x2fe4c6 = {
        "accesstoken": "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
      },
      _0x50ebb2 = "{\"sign\":\"" + _0x9c4144 + "\"}",
      _0x2037f7 = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/basics/doDraw", _0x2fe4c6, _0x50ebb2);
    _0x2037f7.code === "0000" && (console.log("📱 " + this.f + " | 🎉 完成打卡任务抽奖成功,获得: " + _0x2037f7.data.prizedesc), log("📱 " + this.f + " | 🎉 完成打卡任务抽奖成功,获得: " + _0x2037f7.data.prizedesc), await $.wait(2000, 4000), await this.checkUserTakeActive());
  }
  async ["userinfo"]() {
    let _0x1682d5 = $.getFormattedDate(),
      _0x5ce491 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"timestamp\":\"" + _0x1682d5 + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String"),
      _0x79ec55 = {
        "accesstoken": "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
      },
      _0x53889b = "{\"sign\":\"" + _0x5ce491 + "\"}",
      _0x242ccf = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/phone/vouchers/queryTicketAccount", _0x79ec55, _0x53889b);
    if (_0x242ccf.code === "0000") {
      this.totalNum = _0x242ccf.data.totalNum;
      this.usableNum = _0x242ccf.data.usableNum;
      console.log("📱 " + this.f + " | 💰 总收益: " + _0x242ccf.data.totalNum / 100 + "元");
      console.log("💳 当前余额: " + _0x242ccf.data.usableNum / 100 + "元");
      log("📱 " + this.f + " | 💰 总收益: " + _0x242ccf.data.totalNum / 100 + "元");
      log("💳 当前余额: " + _0x242ccf.data.usableNum / 100 + "元");
      this.message += "\n📱 " + this.f + " 已赚取: " + _0x242ccf.data.totalNum / 100 + "元话费券，当前余额: " + _0x242ccf.data.usableNum / 100 + "元话费券";
    }
  }
}
(function () {
  const _0x243837 = function () {
      let _0x5535f0;
      try {
        _0x5535f0 = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (_0x39b0be) {
        _0x5535f0 = window;
      }
      return _0x5535f0;
    },
    _0xd3980e = _0x243837();
  _0xd3980e.setInterval(_0x5c44a6, 2000);
})();
$ = (() => {
  return new class {
    constructor() {
      this.cookie_list = [];
      this.message = "";
      this.CryptoJS = require("crypto-js");
      this.NodeRSA = require("node-rsa");
      this.request = require("request");
      this.Sha_Rsa = require("jsrsasign");
    }
    async ["fetchCKFromFile"](_0x579552) {
      return new Promise((_0x50518c, _0x4defc6) => {
        request(_0x579552, (_0x5e2cc9, _0x5606bf, _0xf7ec5d) => {
          if (_0x5e2cc9) {
            _0x4defc6(_0x5e2cc9);
            return;
          }
          if (_0x5606bf && _0x5606bf.statusCode === 200) _0x50518c(_0xf7ec5d.trim());else {
            _0x4defc6(new Error("请求失败，状态码：" + _0x5606bf.statusCode));
          }
        });
      });
    }
    async ["Multithreading"](_0x10b3c5, _0x31ff1e, _0x661f3d) {
      let _0x4eaa55 = [];
      if (!_0x661f3d) _0x661f3d = 1;
      while (_0x661f3d--) {
        for (let _0x166c87 of this.cookie_list) {
          _0x4eaa55.push(_0x166c87[_0x10b3c5](_0x31ff1e));
        }
      }
      await Promise.allSettled(_0x4eaa55);
    }
    ["ExamineCookie"]() {
      let _0x1eee34 = process.env[VALY] || CK,
        _0x569f42 = 0;
      if (_0x1eee34) {
        for (let _0x1d5662 of _0x1eee34.split("\n").filter(_0x57a566 => !!_0x57a566)) {
          this.cookie_list.push(new User(_0x1d5662));
        }
        _0x569f42 = this.cookie_list.length;
      } else console.log("\n📱 " + NAME + "：未填写变量: " + VALY), log("\n📱 " + NAME + "：未填写变量: " + VALY);
      return console.log("共找到" + _0x569f42 + "个账号"), log("共找到" + _0x569f42 + "个账号"), this.cookie_list;
    }
    ["task"](_0x50bd39, _0x58bd32, _0x56529a, _0x513012, _0x3aacef) {
      _0x50bd39 === "delete" && (_0x50bd39 = _0x50bd39.toUpperCase());
      if (_0x50bd39 === "post") {
        delete _0x56529a["content-type"];
        delete _0x56529a["Content-type"];
        delete _0x56529a["content-Type"];
        this.safeGet(_0x513012) ? _0x56529a["Content-Type"] = "application/json;charset=UTF-8" : _0x56529a["Content-Type"] = "application/x-www-form-urlencoded";
        if (_0x513012) _0x56529a["Content-Length"] = this.lengthInUtf8Bytes(_0x513012);
      }
      return _0x50bd39 === "get" && (delete _0x56529a["content-type"], delete _0x56529a["Content-type"], delete _0x56529a["content-Type"], delete _0x56529a["Content-Length"]), _0x56529a.Host = _0x58bd32.replace("//", "/").split("/")[1], new Promise(async _0x1fcb30 => {
        let _0xb4b5e = {
          "url": _0x58bd32,
          "headers": _0x56529a,
          "body": _0x513012,
          "proxy": "http://" + _0x3aacef
        };
        if (!_0x3aacef) delete _0xb4b5e.proxy;
        this.request[_0x50bd39.toLowerCase()](_0xb4b5e, (_0xe51a50, _0x40254b, _0x83a9db) => {
          try {
            _0x83a9db && LOGS === 1 && (console.log("================ 请求 ================"), console.log(_0xb4b5e), console.log("================ 返回 ================"), this.safeGet(_0x83a9db) ? console.log(JSON.parse(_0x83a9db)) : console.log(_0x83a9db));
          } catch (_0x25c031) {
            console.log(_0x25c031, _0x58bd32 + "\n" + _0x56529a);
          } finally {
            let _0x1b1976 = "";
            if (!_0xe51a50) {
              if (this.safeGet(_0x83a9db)) {
                _0x1b1976 = JSON.parse(_0x83a9db);
              } else _0x83a9db.includes("/") && _0x83a9db.includes("+") ? _0x1b1976 = _0x83a9db : _0x1b1976 = _0x83a9db;
            } else _0x1b1976 = _0x58bd32 + " API请求失败，请检查网络重试\n" + _0xe51a50;
            _0x1fcb30(_0x1b1976);
          }
        });
      });
    }
    async ["readUUID"]() {
      const _0xa26841 = "uuid.txt";
      await this.generateUUID(_0xa26841);
      try {
        const _0x33bd66 = fs.readFileSync(_0xa26841, "utf8").trim();
        return _0x33bd66;
      } catch (_0x328d53) {
        return null;
      }
    }
    ["generateUUID"](_0x3748d1) {
      if (fs.existsSync(_0x3748d1)) return;
      const _0x1a2eaf = uuidv4();
      fs.writeFile(_0x3748d1, _0x1a2eaf, "utf8", _0x51b395 => {
        _0x51b395 && console.error("写入文件出错: " + _0x51b395.message);
      });
    }
    async ["getkami"]() {
      let _0x1097c0 = await this.readUUID();
      await this.getCurrentIP();
      await this.getIPCITY();
      let _0x26ea60 = await this.task("get", "http://" + DCFHOST + "/querys?DCFKEY=" + dcfkey + "&MAC=" + _0x1097c0 + "&JSHOST=" + IP + "&JSCITY=" + IPCITY, {});
      return _0x26ea60;
    }
    async ["getIPCITY"]() {
      let _0x2add40 = await this.task("get", "http://ip-api.com/json/" + IP + "?lang=zh-CN", {}),
        _0x58a7b7 = "" + _0x2add40.regionName + _0x2add40.city;
      IPCITY = encodeURIComponent(_0x58a7b7);
    }
    async ["getCurrentIP"]() {
      let _0x3f7f49 = await this.task("get", "https://httpbin.org/ip", {});
      IP = _0x3f7f49.origin;
    }
    async ["SendMsg"](_0x11f913) {
      if (!_0x11f913) {
        return;
      }
      if (Notify === 1) {
        var _0x9beb5 = require("./sendNotify");
        await _0x9beb5.sendNotify(NAME, NOTIFY + "\n\n" + _0x11f913);
      }
    }
    ["lengthInUtf8Bytes"](_0x1a3bfe) {
      let _0x399c2c = encodeURIComponent(_0x1a3bfe).match(/%[89ABab]/g);
      return _0x1a3bfe.length + (_0x399c2c ? _0x399c2c.length : 0);
    }
    ["randomArr"](_0x5c854e) {
      return _0x5c854e[parseInt(Math.random() * _0x5c854e.length, 10)];
    }
    ["wait"](_0x484656) {
      return new Promise(_0x2eb78d => setTimeout(_0x2eb78d, _0x484656));
    }
    ["time"](_0x15e6bc) {
      if (_0x15e6bc === 10) {
        return Math.round(+new Date() / 1000);
      } else return +new Date();
    }
    ["getNextDayTimestamp"]() {
      const _0x454d65 = new Date();
      if (nowhour === "23") return _0x454d65.setDate(_0x454d65.getDate() + 1), _0x454d65.setHours(0, 0, 0, 0), _0x454d65.getTime();else return nowhour === "0" ? (_0x454d65.setDate(_0x454d65.getDate()), _0x454d65.setHours(0, 0, 0, 0), _0x454d65.getTime()) : "请在规定时间段内抢任务";
    }
    ["CurrentTime"]() {
      const _0x1b3525 = new Date(),
        _0x27aa2d = String(_0x1b3525.getHours()).padStart(2, "0"),
        _0x327b69 = String(_0x1b3525.getMinutes()).padStart(2, "0"),
        _0x2dfb93 = String(_0x1b3525.getSeconds()).padStart(2, "0"),
        _0x5567d8 = String(_0x1b3525.getMilliseconds()).padStart(3, "0");
      return _0x27aa2d + ":" + _0x327b69 + ":" + _0x2dfb93 + "." + _0x5567d8;
    }
    ["getFormattedDate"]() {
      const _0x2bfcf7 = new Date(),
        _0x3b4c84 = _0x2bfcf7.getFullYear(),
        _0x401868 = (_0x2bfcf7.getMonth() + 1).toString().padStart(2, "0"),
        _0x2e768f = _0x2bfcf7.getDate().toString().padStart(2, "0"),
        _0x33ef1b = _0x2bfcf7.getHours().toString().padStart(2, "0"),
        _0x4cf42e = _0x2bfcf7.getMinutes().toString().padStart(2, "0"),
        _0xc883bd = _0x2bfcf7.getSeconds().toString().padStart(2, "0");
      return "" + _0x3b4c84 + _0x401868 + _0x2e768f + _0x33ef1b + _0x4cf42e + _0xc883bd;
    }
    ["safeGet"](_0x2f2cf7) {
      try {
        if (typeof JSON.parse(_0x2f2cf7) === "object") return true;
      } catch (_0x564c0f) {
        return false;
      }
    }
    ["SJS"](_0x183d62, _0x37616e) {
      if (_0x37616e === 0) {
        const _0x5279ff = "QWERTYUIOPASDFGHJKLZXCVBNM01234567890123456789",
          _0x21c338 = _0x5279ff.length;
        let _0x4e5440 = "";
        for (let _0x21d14e = 0; _0x21d14e < _0x183d62; _0x21d14e++) {
          _0x4e5440 += _0x5279ff.charAt(Math.floor(Math.random() * _0x21c338));
        }
        return _0x4e5440;
      } else {
        if (_0x37616e === 1) {
          const _0x24e429 = "qwertyuiopasdfghjklzxcvbnm0123456789",
            _0x1a37a3 = _0x24e429.length;
          let _0x57ab78 = "";
          for (let _0x3b70d9 = 0; _0x3b70d9 < _0x183d62; _0x3b70d9++) {
            _0x57ab78 += _0x24e429.charAt(Math.floor(Math.random() * _0x1a37a3));
          }
          return _0x57ab78;
        } else {
          const _0x3a954c = "0123456789",
            _0x3893e1 = _0x3a954c.length;
          let _0x12d7c6 = "";
          for (let _0x481b8b = 0; _0x481b8b < _0x183d62; _0x481b8b++) {
            _0x12d7c6 += _0x3a954c.charAt(Math.floor(Math.random() * _0x3893e1));
          }
          return _0x12d7c6;
        }
      }
    }
    ["encodeUnicode"](_0x209b56) {
      const _0x4bca4a = [];
      for (let _0x5adcd9 = 0; _0x5adcd9 < _0x209b56.length; _0x5adcd9++) {
        _0x4bca4a[_0x5adcd9] = ("00" + _0x209b56.charCodeAt(_0x5adcd9).toString(16)).slice(-4);
      }
      return "\\u" + _0x4bca4a.join("\\u");
    }
    ["base64ToHex"](_0x1101c3) {
      const _0xcc564a = atob(_0x1101c3);
      let _0x10cbd2 = "";
      for (let _0xc40f91 = 0; _0xc40f91 < _0xcc564a.length; _0xc40f91++) {
        const _0x20b7df = _0xcc564a.charCodeAt(_0xc40f91).toString(16).padStart(2, "0");
        _0x10cbd2 += _0x20b7df;
      }
      return _0x10cbd2;
    }
    ["decodeUnicode"](_0x44d7b9) {
      return unescape(unescape(_0x44d7b9.replace(/\\u/g, "%u")));
    }
    ["RT"](_0x209319, _0x6dd807) {
      return Math.round(Math.random() * (_0x6dd807 - _0x209319) + _0x209319);
    }
    ["arrNull"](_0x4bbcb5) {
      return _0x4bbcb5.filter(_0x564f3f => _0x564f3f && _0x564f3f.trim());
    }
    ["nowtime"]() {
      return new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 28800000);
    }
    ["timecs"]() {
      let _0xf3f0a3 = this.nowtime();
      return JSON.stringify(_0xf3f0a3).indexOf(" ") >= 0 && (_0xf3f0a3 = _0xf3f0a3.replace(" ", "T")), new Date(_0xf3f0a3).getTime() - 28800000;
    }
    ["rtjson"](_0x2bbdf8, _0x5dee9d, _0x379e2e, _0x27084d) {
      return _0x27084d === 0 ? JSON.stringify(_0x2bbdf8.split(_0x5dee9d).reduce((_0x3c79a2, _0x440de2) => {
        const [_0x1460a4, _0xacc212] = _0x440de2.split(_0x379e2e);
        return _0x3c79a2[_0x1460a4.trim()] = _0xacc212.trim(), _0x3c79a2;
      }, {})) : _0x2bbdf8.split(_0x5dee9d).reduce((_0x29bf45, _0x253ebe) => {
        const [_0x5eb5b3, _0x2df295] = _0x253ebe.split(_0x379e2e);
        return _0x29bf45[_0x5eb5b3.trim()] = _0x2df295.trim(), _0x29bf45;
      }, {});
    }
    ["MD5Encrypt"](_0x5591f0, _0x31431c) {
      if (_0x5591f0 === 0) {
        return this.CryptoJS.MD5(_0x31431c).toString().toLowerCase();
      } else {
        if (_0x5591f0 === 1) return this.CryptoJS.MD5(_0x31431c).toString().toUpperCase();else {
          if (_0x5591f0 === 2) {
            return this.CryptoJS.MD5(_0x31431c).toString().substring(8, 24).toLowerCase();
          } else {
            if (_0x5591f0 === 3) return this.CryptoJS.MD5(_0x31431c).toString().substring(8, 24).toUpperCase();
          }
        }
      }
    }
    ["SHA_Encrypt"](_0x3d4282, _0x4ff4e8, _0x586b6c) {
      if (_0x3d4282 === 0) return this.CryptoJS[_0x4ff4e8](_0x586b6c).toString(this.CryptoJS.enc.Base64);else {
        return this.CryptoJS[_0x4ff4e8](_0x586b6c).toString();
      }
    }
    ["HmacSHA_Encrypt"](_0x2df8e0, _0x160b34, _0x3befa4, _0x86fe86) {
      return _0x2df8e0 === 0 ? this.CryptoJS[_0x160b34](_0x3befa4, _0x86fe86).toString(this.CryptoJS.enc.Base64) : this.CryptoJS[_0x160b34](_0x3befa4, _0x86fe86).toString();
    }
    ["Base64"](_0x527a07, _0xdd3ec9) {
      return _0x527a07 === 0 ? this.CryptoJS.enc.Base64.stringify(this.CryptoJS.enc.Utf8.parse(_0xdd3ec9)) : this.CryptoJS.enc.Utf8.stringify(this.CryptoJS.enc.Base64.parse(_0xdd3ec9));
    }
    ["DecryptCrypto"](_0x4464cc, _0x456152, _0x3f8f18, _0x43fb30, _0x57e7a9, _0x5b9f51, _0xe8253f) {
      if (_0x4464cc == 0) {
        const _0x5ce4dc = this.CryptoJS[_0x456152].encrypt(this.CryptoJS.enc.Utf8.parse(_0x57e7a9), this.CryptoJS.enc.Utf8.parse(_0x5b9f51), {
            "iv": this.CryptoJS.enc.Utf8.parse(_0xe8253f),
            "mode": this.CryptoJS.mode[_0x3f8f18],
            "padding": this.CryptoJS.pad[_0x43fb30]
          }),
          _0x540c86 = _0x5ce4dc.ciphertext.toString();
        return Buffer.from(_0x540c86, "utf-8").toString("base64");
      } else {
        const _0x21e933 = this.CryptoJS[_0x456152].decrypt(_0x57e7a9, this.CryptoJS.enc.Utf8.parse(_0x5b9f51), {
          "iv": this.CryptoJS.enc.Utf8.parse(_0xe8253f),
          "mode": this.CryptoJS.mode[_0x3f8f18],
          "padding": this.CryptoJS.pad[_0x43fb30]
        });
        return _0x21e933.toString(this.CryptoJS.enc.Utf8);
      }
    }
    ["RSA"](_0x484ffb, _0x82b53a) {
      const _0x425432 = require("node-rsa"),
        _0x3a0bc0 = new _0x425432("-----BEGIN PUBLIC KEY-----\n" + _0x82b53a + "\n-----END PUBLIC KEY-----");
      return _0x3a0bc0.setOptions({
        "encryptionScheme": "pkcs1"
      }), _0x3a0bc0.encrypt(_0x484ffb, "base64", "utf8");
    }
    ["getSHA1withRSA"](_0x1c70f3) {
      const _0x528ca9 = rs.KEYUTIL.getKey(privateKeyString),
        _0xeb7500 = new rs.KJUR.crypto.Signature({
          "alg": "SHA1withRSA"
        });
      _0xeb7500.init(_0x528ca9);
      _0xeb7500.updateString(_0x1c70f3);
      const _0x3370d5 = _0xeb7500.sign(),
        _0x2c71e3 = rs.hextob64u(_0x3370d5);
      return _0x2c71e3;
    }
    ["hexToBase64"](_0x15ab01) {
      const _0x10f0e4 = [];
      for (let _0x33f3c4 = 0; _0x33f3c4 < _0x15ab01.length; _0x33f3c4 += 2) {
        _0x10f0e4.push(parseInt(_0x15ab01.substr(_0x33f3c4, 2), 16));
      }
      const _0x2cbc9f = btoa(String.fromCharCode(..._0x10f0e4));
      return _0x2cbc9f;
    }
    ["Sha1withRsa"](_0x2b0f1f) {
      const {
          KEYUTIL: _0x31c8bb,
          KJUR: _0x3fb9fb,
          b64utoutf8: _0x4ef8d5,
          utf8tob64: _0x2e759d
        } = require("jsrsasign"),
        _0x2f43b8 = _0x31c8bb.getKey(Key),
        _0x34ffd6 = new _0x3fb9fb.crypto.Signature({
          "alg": "SHA1withRSA"
        });
      _0x34ffd6.init(_0x2f43b8);
      _0x34ffd6.updateString(_0x2b0f1f);
      const _0x7fc2c9 = _0x34ffd6.sign();
      let _0x4a86a0 = this.hexToBase64(_0x7fc2c9);
      return _0x4a86a0;
    }
  }();
})();
async function verifyKM() {
  try {
    const _0x3cac40 = await axios.post("http://118.31.47.65:8635/verify", {
      "km": LT_KM
    });
    if (_0x3cac40.data.success) {
      return console.log("✅ 卡密验证成功"), log("✅ 卡密验证成功"), true;
    } else {
      return console.log("❌ 卡密验证失败:", _0x3cac40.data.message), log("❌ 卡密验证失败:" + _0x3cac40.data.message), false;
    }
  } catch (_0x213550) {
    return console.error("❌ 卡密验证请求失败:", _0x213550.response?.["data"]?.["message"] || _0x213550.message), log("❌ 卡密验证请求失败:" + (_0x213550.response?.["data"]?.["message"] || _0x213550.message)), false;
  }
}
async function sendPushNotification(_0x13a14e) {
  const _0x3a72db = "https://wxpusher.zjiecode.com/api/send/message",
    _0x3fb2b5 = new Date(),
    _0x1c1d55 = _0x3fb2b5.toLocaleDateString("zh-CN", {
      "year": "numeric",
      "month": "2-digit",
      "day": "2-digit"
    }),
    _0x9a8bd8 = _0x3fb2b5.toLocaleTimeString("zh-CN", {
      "hour": "2-digit",
      "minute": "2-digit"
    });
  let _0x40e530 = "";
  _0x40e530 += "╔══════════════════╗\n";
  _0x40e530 += "║   📱 联通阅读日报   ║\n";
  _0x40e530 += "╚══════════════════╝\n\n";
  _0x40e530 += "🗓️ " + _0x1c1d55 + " " + _0x9a8bd8 + "\n";
  _0x40e530 += "📊 共" + _0x13a14e.length + "个账号\n";
  _0x40e530 += "✨✨✨✨✨✨✨✨✨✨\n\n";
  let _0x1e39b8 = 0,
    _0x2fd27a = 0,
    _0x5448af = 0;
  _0x13a14e.forEach((_0x19d83d, _0x304e78) => {
    const _0x4c6817 = _0x19d83d.totalNum / 100,
      _0x1aee5c = _0x19d83d.usableNum / 100,
      _0x533cfb = _0x1aee5c >= 5;
    if (_0x533cfb) _0x1e39b8++;
    if (_0x19d83d.taskProgress) {
      const _0x20424c = _0x19d83d.taskProgress.split("\n");
      _0x20424c.forEach(_0x332faa => {
        if (_0x332faa.includes("120分钟")) _0x2fd27a++;
        if (_0x332faa.includes("240分钟")) _0x5448af++;
      });
    }
    _0x40e530 += "╭────── 账号 " + (_0x304e78 + 1) + " ──────╮\n";
    _0x40e530 += "│ 📱 账号: " + _0x19d83d.remark + "\n";
    _0x40e530 += "│ 💰 总收益: " + _0x4c6817.toFixed(2) + "元\n";
    _0x40e530 += "│ 💳 余额: " + _0x1aee5c.toFixed(2) + "元\n";
    if (_0x19d83d.taskProgress) {
      _0x40e530 += "│ 📋 任务进度:\n";
      const _0x13f634 = _0x19d83d.taskProgress.split("\n");
      _0x13f634.forEach(_0x5da67e => {
        if (_0x5da67e.trim()) {
          const _0x5d55f1 = _0x5da67e.match(/【(.+?)】.*?(\d+)\/(\d+)/);
          if (_0x5d55f1) {
            const [_0x342997, _0x40a3a5, _0x5147a1, _0x18e50c] = _0x5d55f1,
              _0x33e8db = makeProgressBar(parseInt(_0x5147a1) / parseInt(_0x18e50c));
            _0x40e530 += "│ " + _0x40a3a5 + ":\n";
            _0x40e530 += "│    " + _0x33e8db + " " + _0x5147a1 + "/" + _0x18e50c + "\n";
          }
        }
      });
    }
    _0x40e530 += "│ " + (_0x533cfb ? "🌟 可以兑换啦！" : "⏳ 继续努力哦~") + "\n";
    _0x40e530 += "╰─────────────────╯\n\n";
  });
  _0x40e530 += "╔══════ 统计信息 ══════╗\n";
  _0x40e530 += "║ 🎯 可兑换账号: " + _0x1e39b8 + "/" + _0x13a14e.length + "\n";
  _0x40e530 += "║ 📖 120分钟任务: " + _0x2fd27a + "个\n";
  _0x40e530 += "║ 📚 240分钟任务: " + _0x5448af + "个\n";
  _0x40e530 += "║ ⏰ 刷新时间: " + _0x9a8bd8 + "\n";
  _0x40e530 += "╚════════════════════╝\n\n";
  _0x40e530 += "╭────── 温馨提示 ──────╮\n";
  _0x40e530 += "│ 🔔 余额≥5元可以兑换\n";
  _0x40e530 += "│ 💫 记得及时兑换哦！\n";
  _0x40e530 += "╰─────────────────╯\n";
  _0x40e530 += "\n⚡ Powered by WxPusher";
  const _0x4370d2 = {
    "appToken": "AT_VqUjrzZRSMa291xarGc3ndO42OnFpOFB",
    "content": _0x40e530,
    "contentType": 1,
    "topicIds": [],
    "summary": "📱 联通阅读任务日报",
    "uids": UIDS
  };
  try {
    const _0x8ca1af = await axios.post(_0x3a72db, _0x4370d2);
    return console.log("✅ 推送通知成功"), _0x8ca1af.data;
  } catch (_0x4c6c7f) {
    console.error("❌ 推送通知失败:", _0x4c6c7f);
  }
}
function makeProgressBar(_0x5a5f7b) {
  const _0x31f3fa = 10,
    _0x57458b = Math.round(_0x5a5f7b * _0x31f3fa),
    _0xddb5b8 = _0x31f3fa - _0x57458b;
  return "▰".repeat(_0x57458b) + "▱".repeat(_0xddb5b8);
}
!(async () => {
  if (VALY.length) try {
    const _0x252aa2 = await verifyKM();
    if (!_0x252aa2) {
      console.log("⚠️ 卡密验证失败，程序退出");
      log("⚠️ 卡密验证失败，程序退出");
      return;
    }
    let _0x2486ee = process.env[VALY] || CK;
    _0x2486ee && (process.env[VALY] = _0x2486ee.replace(/&/g, "\n"));
    $.ExamineCookie();
    await $.Multithreading("login");
    await $.Multithreading("hqtoken");
    await $.Multithreading("taskinfo");
    await $.Multithreading("tasklist");
    await $.Multithreading("taskstatus");
    await $.Multithreading("lotterystatus");
    await $.Multithreading("addDrawTimes");
    await $.Multithreading("checkUserTakeActive");
    await $.Multithreading("userinfo");
    if (Notify === 1) {
      for (let _0x5589fb of $.cookie_list) {
        console.log(_0x5589fb.message);
      }
      await sendPushNotification($.cookie_list);
    }
  } catch (_0x23d693) {
    console.error("获取 CK 变量内容失败:", _0x23d693);
  }
})();
function _0x5c44a6(_0x4220d2) {
  function _0x237e15(_0x302516) {
    if (typeof _0x302516 === "string") return function (_0xb1f170) {}.constructor("while (true) {}").apply("counter");else ("" + _0x302516 / _0x302516).length !== 1 || _0x302516 % 20 === 0 ? function () {
      return true;
    }.constructor("debugger").call("action") : function () {
      return false;
    }.constructor("debugger").apply("stateObject");
    _0x237e15(++_0x302516);
  }
  try {
    if (_0x4220d2) return _0x237e15;else _0x237e15(0);
  } catch (_0x146f36) {}
}