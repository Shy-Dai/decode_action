//Thu Feb 06 2025 05:25:12 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
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
  UIDS = ["UID_nC8eCmd6337nRFkqaeGETkIv5gh5"];
function log(_0x472ccd) {
  fs.appendFile("1.log", _0x472ccd + "\n", _0x111a7c => {
    _0x111a7c && console.error(_0x111a7c);
  });
}
DCFHOST = process.env.DCFHOST;
dcfkey = encodeURIComponent(process.env.dcfkey);
IP = "";
IPCITY = "";
class User {
  constructor(_0x31ee5f) {
    const [_0x4b86f6, _0x4971cd] = _0x31ee5f.split("#");
    this.phone = _0x4b86f6;
    this.remark = _0x4971cd || _0x4b86f6;
    this._ = ++usid;
    this.f = "[" + this._ + "]" + this.remark;
    this.message = "";
    this.logs = true;
  }
  async login() {
    let _0x53200a = $.getFormattedDate(),
      _0x2c1527 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "" + this.phone, "woreadst^&*12345", "16-Bytes--String");
    let _0x1f3bfc = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"phone\":\"" + _0x2c1527 + "\",\"timestamp\":\"" + _0x53200a + "\"}", "woreadst^&*12345", "16-Bytes--String");
    const _0x2dc400 = {
      accesstoken: "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
    };
    let _0x36232c = "{\"sign\":\"" + _0x1f3bfc + "\"}";
    let _0x533cc2 = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/account/login", _0x2dc400, _0x36232c);
    if (_0x533cc2.code === "0000") {
      console.log("📱 " + this.f + " | ✅ 登录成功");
      log("📱 " + this.f + " | ✅ 登录成功");
      this.userindex = _0x533cc2.data.userindex;
      this.verifycode = _0x533cc2.data.verifycode;
      this.userid = _0x533cc2.data.userid;
      this.token = _0x533cc2.data.token;
      this.logs = true;
    } else {
      this.logs = false;
    }
  }
  async hqtoken() {
    let _0x4e49a6 = $.getFormattedDate();
    const _0x119c7a = {
      userid: this.userid,
      token: this.token,
      timestamp: _0x4e49a6
    };
    let _0x384a2a = {
      timestamp: _0x4e49a6,
      signtimestamp: Date.now(),
      source: "9",
      token: this.token,
      userData: Buffer.from(JSON.stringify(_0x119c7a), "utf-8").toString("base64")
    };
    delete _0x384a2a.token;
    let _0x557318 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", JSON.stringify(_0x384a2a), "QzUzOUM2QTQ2MTc4", "16-Bytes--String");
    const _0x21b9fb = {
      accesstoken: "NTI4RDdGMUU0NUM2QzUzOUM2QTQ2MTc4"
    };
    let _0x4959ba = "{\"sign\":\"" + _0x557318 + "\"}",
      _0x20cd84 = await $.task("post", "https://m.woread.com.cn/api/union/user/thirdPartyFreeLogin", _0x21b9fb, _0x4959ba);
    if (_0x20cd84.code === "0000") {
      console.log("📱 " + this.f + " | ✅ token获取成功");
      this.userindex = _0x20cd84.data.userindex;
      this.verifycode = _0x20cd84.data.verifycode;
      this.userid = _0x20cd84.data.userid;
      this.token = _0x20cd84.data.token;
      this.logs = true;
    } else {
      this.logs = false;
    }
  }
  async taskinfo() {
    let _0x25a72e = $.getFormattedDate(),
      _0x3ad43b = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"timestamp\":\"" + _0x25a72e + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String");
    const _0x45da93 = {
      accesstoken: "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
    };
    let _0x17a98f = "{\"sign\":\"" + _0x3ad43b + "\"}",
      _0x2c423b = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryActiveInfo", _0x45da93, _0x17a98f);
    if (_0x2c423b.code === "0000") {
      this.activeId = _0x2c423b.data.activeId;
    }
  }
  async tasklist() {
    let _0x229f26 = $.getFormattedDate();
    let _0x1d88ef = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"activeIndex\":" + this.activeId + ",\"timestamp\":\"" + _0x229f26 + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String");
    const _0x3fcb8b = {
      accesstoken: "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
    };
    let _0x1a3693 = "{\"sign\":\"" + _0x1d88ef + "\"}",
      _0x226004 = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryActiveTaskList", _0x3fcb8b, _0x1a3693);
    if (_0x226004.code === "0000") {
      let _0x31d36f = _0x226004.data.filter(_0x56cfbe => {
        const _0x1dda69 = _0x56cfbe.taskDetail.taskName;
        return _0x1dda69 === "阅读120分钟";
      });
      _0x31d36f.sort((_0x27b19f, _0xf91db7) => _0xf91db7.secondTaskId - _0x27b19f.secondTaskId);
      if (nextDayTimestamp !== "请在规定时间段内抢任务") {
        let _0x402b9a = $.time(13);
        if (_0x402b9a <= nextDayTimestamp) {
          console.log("📱 " + this.f + " | ⏳ 抢任务倒计时: " + waitTime / 1000 + "秒");
          log("📱 " + this.f + " | ⏳ 抢任务倒计时: " + waitTime / 1000 + "秒");
          await $.wait(waitTime);
          for (let _0x369ad9 = 0; _0x369ad9 < XHCS; _0x369ad9++) {
            await this.receivetask(_0x31d36f);
          }
        } else {
          console.log("【" + this.f + "】" + nextDayTimestamp);
          log("【" + this.f + "】" + nextDayTimestamp);
        }
      }
    }
  }
  async receivetask(_0x2173ea) {
    for (let _0x21d5d8 of _0x2173ea) {
      let _0x104e59 = _0x21d5d8.secondTaskId,
        _0xa07df2 = _0x21d5d8.taskDetail.materialGroup.bindActiveName,
        _0x415830 = $.getFormattedDate(),
        _0x8a833a = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"activeId\":" + this.activeId + ",\"taskId\":" + _0x104e59 + ",\"timestamp\":\"" + _0x415830 + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String");
      const _0x113825 = {
        accesstoken: "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
      };
      let _0x467e12 = "{\"sign\":\"" + _0x8a833a + "\"}",
        _0x102ec8 = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/activity423/receiveActiveTask", _0x113825, _0x467e12);
      if (_0x102ec8.code === "0000") {
        console.log("📱 " + this.f + " | 🎯 抢任务: " + _0xa07df2);
        console.log("✅ 结果: " + _0x102ec8.data + " | ⏰ " + $.CurrentTime());
        log("📱 " + this.f + " | 🎯 抢任务: " + _0xa07df2);
        log("✅ 结果: " + _0x102ec8.data + " | ⏰ " + $.CurrentTime());
        this.message += "\n" + this.f + " 抢任务: " + _0xa07df2 + ", 结果: " + _0x102ec8.data;
      } else {
        console.log("📱 " + this.f + " | ❌ 抢任务失败: " + _0xa07df2);
        console.log("⚠️ 原因: " + _0x102ec8.message + " | ⏰ " + $.CurrentTime());
        log("📱 " + this.f + " | ❌ 抢任务失败: " + _0xa07df2);
        log("⚠️ 原因: " + _0x102ec8.message + " | ⏰ " + $.CurrentTime());
        this.message += "\n" + this.f + " 抢任务失败: " + _0xa07df2 + ", 原因: " + _0x102ec8.message;
      }
    }
  }
  async taskstatus() {
    let _0x2f8604 = $.getFormattedDate(),
      _0x1ff169 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"activeIndex\":" + this.activeId + ",\"timestamp\":\"" + _0x2f8604 + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String");
    const _0x337a89 = {
      accesstoken: "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
    };
    let _0x4057e0 = "{\"sign\":\"" + _0x1ff169 + "\"}",
      _0xa3df55 = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryCurTaskStatus", _0x337a89, _0x4057e0);
    if (_0xa3df55.code === "0000" && _0xa3df55.data.length >= 1) {
      this.taskProgress = _0xa3df55.data.map(_0x4b3f36 => {
        const _0x4e612c = _0x4b3f36.taskDetail.currentValue + "/" + _0x4b3f36.taskDetail.taskValue;
        return "【" + _0x4b3f36.taskDetail.materialGroup.bindActiveName + "】任务完成进度: " + _0x4e612c;
      }).join("\n");
      for (let _0x1af647 of _0xa3df55.data) {
        console.log("📱 " + this.f + " | 📋 " + _0x1af647.taskDetail.materialGroup.bindActiveName);
        console.log("✨ 进度: " + _0x1af647.taskDetail.currentValue + "/" + _0x1af647.taskDetail.taskValue);
        log("📱 " + this.f + " | 📋 " + _0x1af647.taskDetail.materialGroup.bindActiveName);
        log("✨ 进度: " + _0x1af647.taskDetail.currentValue + "/" + _0x1af647.taskDetail.taskValue);
        if (_0x1af647.taskDetail.currentValue < _0x1af647.taskDetail.taskValue) {
          await this.doread();
        } else {
          if (_0x1af647.taskDetail.currentValue >= _0x1af647.taskDetail.taskValue) {
            console.log("📱 " + this.f + " | 🎉 任务完成: " + _0x1af647.taskDetail.materialGroup.bindActiveName);
            console.log("🎁 获得奖励: " + _0x1af647.taskDetail.materialGroup.bindActiveName);
            log("📱 " + this.f + " | 🎉 任务完成: " + _0x1af647.taskDetail.materialGroup.bindActiveName);
            log("🎁 获得奖励: " + _0x1af647.taskDetail.materialGroup.bindActiveName);
            await this.getreward(_0x1af647.taskDetail.materialGroup.bindActiveName, _0x1af647.id);
          }
        }
      }
    }
  }
  async doread() {
    console.log("📱 " + this.f + " | �� 开始阅读...");
    log("📱 " + this.f + " | 📚 开始阅读...");
    let _0xf98347 = $.getFormattedDate();
    let _0x2b50a2 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"signtimestamp\":\"" + Date.now() + "\",\"source\":\"9\",\"readTime\":\"240\",\"cntindex\":\"409672\",\"cntIndex\":409672,\"cnttype\":\"1\",\"cntType\":1,\"cardid\":\"11891\",\"catid\":\"118411\",\"pageIndex\":\"10683\",\"chapterseno\":1,\"channelid\":\"\",\"chapterid\":\"-1\",\"readtype\":1,\"isend\":\"0\",\"timestamp\":\"" + _0xf98347 + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "QzUzOUM2QTQ2MTc4", "16-Bytes--String");
    const _0x5e290d = {
      accesstoken: "NTI4RDdGMUU0NUM2QzUzOUM2QTQ2MTc4"
    };
    let _0x4f622a = "{\"sign\":\"" + _0x2b50a2 + "\"}",
      _0x2594c9 = await $.task("post", "https://m.woread.com.cn/api/union/history/addReadTime", _0x5e290d, _0x4f622a);
    if (_0x2594c9.code === "0000") {
      console.log("📱 " + this.f + " | ⏱️ 阅读时长上传: " + _0x2594c9.message);
      log("📱 " + this.f + " | ⏱️ 阅读时长上传: " + _0x2594c9.message);
      console.log("╰─────────────────╯");
      log("╰─────────────────╯");
      await $.wait(121000, 128000);
      await this.taskstatus();
    } else {
      await $.wait(121000, 128000);
    }
  }
  async getreward(_0x3e51e0, _0xfdecb3) {
    let _0xa835f7 = $.getFormattedDate(),
      _0x815c4 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"taskId\":" + _0xfdecb3 + ",\"timestamp\":\"" + _0xa835f7 + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String");
    const _0x1c977d = {
      accesstoken: "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
    };
    let _0x3cd95e = "{\"sign\":\"" + _0x815c4 + "\"}",
      _0x19b2c1 = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/activity423/completeActiveTask", _0x1c977d, _0x3cd95e);
    if (_0x19b2c1.code === "0000") {
      console.log("📱 " + this.f + " | 🎉 任务完成: " + _0x19b2c1.data.taskDetail.taskName);
      console.log("🎁 获得奖励: " + _0x19b2c1.data.exchangeResult.materialGroupInfo.groupName);
      log("📱 " + this.f + " | 🎉 任务完成: " + _0x19b2c1.data.taskDetail.taskName);
      log("🎁 获得奖励: " + _0x19b2c1.data.exchangeResult.materialGroupInfo.groupName);
      this.message += "\n" + this.f + " 完成任务: " + _0x19b2c1.data.taskDetail.taskName + ", 获得奖励: " + _0x19b2c1.data.exchangeResult.materialGroupInfo.groupName;
    } else {
      console.log("📱 " + this.f + " | ❌ 任务失败: " + _0x3e51e0);
      console.log("⚠️ 原因: " + _0x19b2c1.message);
      log("📱 " + this.f + " | ❌ 任务失败: " + _0x3e51e0);
      log("⚠️ 原因: " + _0x19b2c1.message);
    }
  }
  async lotterystatus() {
    let _0x28c7a3 = $.getFormattedDate();
    let _0x4f3220 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"activeIndex\":" + this.activeId + ",\"timestamp\":\"" + _0x28c7a3 + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String");
    const _0xc6b8fe = {
      accesstoken: "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
    };
    let _0x145900 = "{\"sign\":\"" + _0x4f3220 + "\"}",
      _0x3dc587 = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryReadStatus", _0xc6b8fe, _0x145900);
    if (_0x3dc587.code === "0000") {
      if (_0x3dc587.data === "4") {
        await this.lottery();
      } else {
        if (_0x3dc587.data === "3") {
          console.log("📱 " + this.f + " | 🔔 暂无阅读抽奖机会,明天再来试试运气吧");
          log("📱 " + this.f + " | 🔔 暂无阅读抽奖机会,明天再来试试运气吧");
          this.message += "\n📱 " + this.f + " 暂无阅读抽奖机会,明天再来试试运气吧";
        }
      }
    }
  }
  async lottery() {
    let _0x2f9e7a = $.getFormattedDate(),
      _0x329819 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"activeIndex\":" + this.activeId + ",\"timestamp\":\"" + _0x2f9e7a + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String");
    const _0x48545e = {
      accesstoken: "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
    };
    let _0x10178c = "{\"sign\":\"" + _0x329819 + "\"}",
      _0x3bac69 = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/activity423/drawReadActivePrize", _0x48545e, _0x10178c);
    if (_0x3bac69.code === "0000") {
      console.log("📱 " + this.f + " | 🎲 阅读抽奖完成");
      console.log("🎁 获得奖励: " + _0x3bac69.data.prizedesc);
      log("📱 " + this.f + " | 🎲 阅读抽奖完成");
      log("🎁 获得奖励: " + _0x3bac69.data.prizedesc);
      this.message += "\n📱 " + this.f + " 完成阅读任务抽奖成功,获得: " + _0x3bac69.data.prizedesc;
      await $.wait(2000, 4000);
      await this.lotterystatus();
    }
  }
  async addDrawTimes() {
    let _0x17a527 = $.getFormattedDate(),
      _0x4a2b86 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"userid\":\"" + this.userid + "\",\"activetyindex\":6640,\"timestamp\":\"" + _0x17a527 + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String");
    const _0x135c81 = {
      accesstoken: "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
    };
    let _0x518827 = "{\"sign\":\"" + _0x4a2b86 + "\"}",
      _0x60a377 = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/basics/addDrawTimes", _0x135c81, _0x518827);
    if (_0x60a377.code === "0000") {
      console.log("📱 " + this.f + " | 🎉 完成阅读打卡任务成功,获得抽奖机会");
      log("📱 " + this.f + " | 🎉 完成阅读打卡任务成功,获得抽奖机会");
      this.message += "\n📱 " + this.f + " 完成阅读打卡任务成功,获得抽奖机会";
    }
  }
  async checkUserTakeActive() {
    let _0x3563b2 = $.getFormattedDate(),
      _0x5b36a4 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"activeIndex\":6640,\"timestamp\":\"" + _0x3563b2 + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String");
    const _0x56722f = {
      accesstoken: "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
    };
    let _0x1baa02 = "{\"sign\":\"" + _0x5b36a4 + "\"}",
      _0x28f88a = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/activity/checkUserTakeActive", _0x56722f, _0x1baa02);
    _0x28f88a.code === "0000" && (_0x28f88a.data > 0 ? await this.dodraw() : (console.log("📱 " + this.f + " | 🔔 暂无打卡抽奖机会,明天再来试试运气吧"), log("📱 " + this.f + " | 🔔 暂无打卡抽奖机会,明天再来试试运气吧"), this.message += "\n📱 " + this.f + " 暂无打卡抽奖机会,明天再来试试运气吧"));
  }
  async dodraw() {
    let _0x3f27de = $.getFormattedDate();
    let _0x36e048 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"activeindex\":6640,\"timestamp\":\"" + _0x3f27de + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String");
    const _0x4d720f = {
      accesstoken: "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
    };
    let _0x4ee129 = "{\"sign\":\"" + _0x36e048 + "\"}",
      _0x360b76 = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/basics/doDraw", _0x4d720f, _0x4ee129);
    _0x360b76.code === "0000" && (console.log("📱 " + this.f + " | 🎉 完成打卡任务抽奖成功,获得: " + _0x360b76.data.prizedesc), log("📱 " + this.f + " | 🎉 完成打卡任务抽奖成功,获得: " + _0x360b76.data.prizedesc), await $.wait(2000, 4000), await this.checkUserTakeActive());
  }
  async userinfo() {
    let _0x77abfe = $.getFormattedDate(),
      _0xc1e52c = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"timestamp\":\"" + _0x77abfe + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String");
    const _0x41d185 = {
      accesstoken: "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
    };
    let _0x412225 = "{\"sign\":\"" + _0xc1e52c + "\"}";
    let _0x4b528f = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/phone/vouchers/queryTicketAccount", _0x41d185, _0x412225);
    if (_0x4b528f.code === "0000") {
      this.totalNum = _0x4b528f.data.totalNum;
      this.usableNum = _0x4b528f.data.usableNum;
      console.log("📱 " + this.f + " | 💰 总收益: " + _0x4b528f.data.totalNum / 100 + "元");
      console.log("💳 当前余额: " + _0x4b528f.data.usableNum / 100 + "元");
      log("📱 " + this.f + " | 💰 总收益: " + _0x4b528f.data.totalNum / 100 + "元");
      log("💳 当前余额: " + _0x4b528f.data.usableNum / 100 + "元");
      this.message += "\n📱 " + this.f + " 已赚取: " + _0x4b528f.data.totalNum / 100 + "元话费券，当前余额: " + _0x4b528f.data.usableNum / 100 + "元话费券";
    }
  }
}
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
    async fetchCKFromFile(_0x4bc91d) {
      return new Promise((_0x15d549, _0x31b7c5) => {
        request(_0x4bc91d, (_0x172068, _0x329515, _0x31f5db) => {
          if (_0x172068) {
            _0x31b7c5(_0x172068);
            return;
          }
          if (_0x329515 && _0x329515.statusCode === 200) {
            _0x15d549(_0x31f5db.trim());
          } else {
            _0x31b7c5(new Error("请求失败，状态码：" + _0x329515.statusCode));
          }
        });
      });
    }
    async Multithreading(_0x869284, _0x262d33, _0x3f65b4) {
      let _0x501ad7 = [];
      if (!_0x3f65b4) {
        _0x3f65b4 = 1;
      }
      while (_0x3f65b4--) {
        for (let _0x5d28e2 of this.cookie_list) {
          _0x501ad7.push(_0x5d28e2[_0x869284](_0x262d33));
        }
      }
      await Promise.allSettled(_0x501ad7);
    }
    ExamineCookie() {
      let _0x2b985b = process.env[VALY] || CK;
      let _0x260443 = 0;
      if (_0x2b985b) {
        for (let _0x55ae00 of _0x2b985b.split("\n").filter(_0x2c2c3f => !!_0x2c2c3f)) {
          this.cookie_list.push(new User(_0x55ae00));
        }
        _0x260443 = this.cookie_list.length;
      } else {
        console.log("\n📱 " + NAME + "：未填写变量: " + VALY);
        log("\n📱 " + NAME + "：未填写变量: " + VALY);
      }
      console.log("共找到" + _0x260443 + "个账号");
      log("共找到" + _0x260443 + "个账号");
      return this.cookie_list;
    }
    task(_0x1ebc4f, _0x2f4df7, _0x2c3c6d, _0x44ce87, _0x24472f) {
      _0x1ebc4f === "delete" && (_0x1ebc4f = _0x1ebc4f.toUpperCase());
      if (_0x1ebc4f === "post") {
        delete _0x2c3c6d["content-type"];
        delete _0x2c3c6d["Content-type"];
        delete _0x2c3c6d["content-Type"];
        this.safeGet(_0x44ce87) ? _0x2c3c6d["Content-Type"] = "application/json;charset=UTF-8" : _0x2c3c6d["Content-Type"] = "application/x-www-form-urlencoded";
        if (_0x44ce87) {
          _0x2c3c6d["Content-Length"] = this.lengthInUtf8Bytes(_0x44ce87);
        }
      }
      _0x1ebc4f === "get" && (delete _0x2c3c6d["content-type"], delete _0x2c3c6d["Content-type"], delete _0x2c3c6d["content-Type"], delete _0x2c3c6d["Content-Length"]);
      _0x2c3c6d.Host = _0x2f4df7.replace("//", "/").split("/")[1];
      return new Promise(async _0x3dac81 => {
        let _0x213577 = {
          url: _0x2f4df7,
          headers: _0x2c3c6d,
          body: _0x44ce87,
          proxy: "http://" + _0x24472f
        };
        if (!_0x24472f) {
          delete _0x213577.proxy;
        }
        this.request[_0x1ebc4f.toLowerCase()](_0x213577, (_0xd0faa8, _0x398dde, _0x4f2997) => {
          try {
            _0x4f2997 && LOGS === 1 && (console.log("================ 请求 ================"), console.log(_0x213577), console.log("================ 返回 ================"), this.safeGet(_0x4f2997) ? console.log(JSON.parse(_0x4f2997)) : console.log(_0x4f2997));
          } catch (_0x6881f7) {
            console.log(_0x6881f7, _0x2f4df7 + "\n" + _0x2c3c6d);
          } finally {
            let _0x5d8211 = "";
            !_0xd0faa8 ? this.safeGet(_0x4f2997) ? _0x5d8211 = JSON.parse(_0x4f2997) : _0x4f2997.includes("/") && _0x4f2997.includes("+") ? _0x5d8211 = _0x4f2997 : _0x5d8211 = _0x4f2997 : _0x5d8211 = _0x2f4df7 + " API请求失败，请检查网络重试\n" + _0xd0faa8;
            _0x3dac81(_0x5d8211);
          }
        });
      });
    }
    async readUUID() {
      const _0x23a838 = "uuid.txt";
      await this.generateUUID(_0x23a838);
      try {
        const _0xe3ffba = fs.readFileSync(_0x23a838, "utf8").trim();
        return _0xe3ffba;
      } catch (_0x465bb0) {
        return null;
      }
    }
    generateUUID(_0x3e0632) {
      if (fs.existsSync(_0x3e0632)) {
        return;
      }
      const _0x1fc3a4 = uuidv4();
      fs.writeFile(_0x3e0632, _0x1fc3a4, "utf8", _0x3f4a11 => {
        _0x3f4a11 && console.error("写入文件出错: " + _0x3f4a11.message);
      });
    }
    async getkami() {
      let _0x3cb1b6 = await this.readUUID();
      await this.getCurrentIP();
      await this.getIPCITY();
      let _0x221d2d = await this.task("get", "http://" + DCFHOST + "/querys?DCFKEY=" + dcfkey + "&MAC=" + _0x3cb1b6 + "&JSHOST=" + IP + "&JSCITY=" + IPCITY, {});
      return _0x221d2d;
    }
    async getIPCITY() {
      let _0x409250 = await this.task("get", "http://ip-api.com/json/" + IP + "?lang=zh-CN", {}),
        _0x46c098 = "" + _0x409250.regionName + _0x409250.city;
      IPCITY = encodeURIComponent(_0x46c098);
    }
    async getCurrentIP() {
      let _0x12bf9e = await this.task("get", "https://httpbin.org/ip", {});
      IP = _0x12bf9e.origin;
    }
    async SendMsg(_0x994f2e) {
      if (!_0x994f2e) {
        return;
      }
      if (Notify === 1) {
        var _0x8f885 = require("./sendNotify");
        await _0x8f885.sendNotify(NAME, NOTIFY + "\n\n" + _0x994f2e);
      }
    }
    lengthInUtf8Bytes(_0x47bd61) {
      let _0x163381 = encodeURIComponent(_0x47bd61).match(/%[89ABab]/g);
      return _0x47bd61.length + (_0x163381 ? _0x163381.length : 0);
    }
    randomArr(_0x57014c) {
      return _0x57014c[parseInt(Math.random() * _0x57014c.length, 10)];
    }
    wait(_0x40c210) {
      return new Promise(_0x20b970 => setTimeout(_0x20b970, _0x40c210));
    }
    time(_0x12f213) {
      if (_0x12f213 === 10) {
        return Math.round(+new Date() / 1000);
      } else {
        return +new Date();
      }
    }
    getNextDayTimestamp() {
      const _0x1daa64 = new Date();
      if (nowhour === "23") {
        _0x1daa64.setDate(_0x1daa64.getDate() + 1);
        _0x1daa64.setHours(0, 0, 0, 0);
        return _0x1daa64.getTime();
      } else {
        if (nowhour === "0") {
          _0x1daa64.setDate(_0x1daa64.getDate());
          _0x1daa64.setHours(0, 0, 0, 0);
          return _0x1daa64.getTime();
        } else {
          return "请在规定时间段内抢任务";
        }
      }
    }
    CurrentTime() {
      const _0x100529 = new Date(),
        _0x20d120 = String(_0x100529.getHours()).padStart(2, "0"),
        _0x21a313 = String(_0x100529.getMinutes()).padStart(2, "0"),
        _0x4e3234 = String(_0x100529.getSeconds()).padStart(2, "0"),
        _0x5a02bf = String(_0x100529.getMilliseconds()).padStart(3, "0");
      return _0x20d120 + ":" + _0x21a313 + ":" + _0x4e3234 + "." + _0x5a02bf;
    }
    getFormattedDate() {
      const _0x2b882b = new Date();
      const _0x35d0c8 = _0x2b882b.getFullYear(),
        _0x510600 = (_0x2b882b.getMonth() + 1).toString().padStart(2, "0"),
        _0x1399b4 = _0x2b882b.getDate().toString().padStart(2, "0"),
        _0x44f638 = _0x2b882b.getHours().toString().padStart(2, "0"),
        _0x151154 = _0x2b882b.getMinutes().toString().padStart(2, "0"),
        _0xeea61 = _0x2b882b.getSeconds().toString().padStart(2, "0");
      return "" + _0x35d0c8 + _0x510600 + _0x1399b4 + _0x44f638 + _0x151154 + _0xeea61;
    }
    safeGet(_0x36e4a9) {
      try {
        if (typeof JSON.parse(_0x36e4a9) === "object") {
          return true;
        }
      } catch (_0x29daaf) {
        return false;
      }
    }
    SJS(_0xbbf9ff, _0x29cfa4) {
      if (_0x29cfa4 === 0) {
        const _0x479db1 = "QWERTYUIOPASDFGHJKLZXCVBNM01234567890123456789",
          _0x19710f = _0x479db1.length;
        let _0x1a7be9 = "";
        for (let _0x41bd12 = 0; _0x41bd12 < _0xbbf9ff; _0x41bd12++) {
          _0x1a7be9 += _0x479db1.charAt(Math.floor(Math.random() * _0x19710f));
        }
        return _0x1a7be9;
      } else {
        if (_0x29cfa4 === 1) {
          const _0x1a5197 = "qwertyuiopasdfghjklzxcvbnm0123456789",
            _0x53cbb1 = _0x1a5197.length;
          let _0x6edf5 = "";
          for (let _0x395d78 = 0; _0x395d78 < _0xbbf9ff; _0x395d78++) {
            _0x6edf5 += _0x1a5197.charAt(Math.floor(Math.random() * _0x53cbb1));
          }
          return _0x6edf5;
        } else {
          const _0x277a12 = "0123456789",
            _0x19d497 = _0x277a12.length;
          let _0x3bbfc0 = "";
          for (let _0x4ab484 = 0; _0x4ab484 < _0xbbf9ff; _0x4ab484++) {
            _0x3bbfc0 += _0x277a12.charAt(Math.floor(Math.random() * _0x19d497));
          }
          return _0x3bbfc0;
        }
      }
    }
    encodeUnicode(_0x2bcac7) {
      const _0x2ed3d1 = [];
      for (let _0x26557c = 0; _0x26557c < _0x2bcac7.length; _0x26557c++) {
        _0x2ed3d1[_0x26557c] = ("00" + _0x2bcac7.charCodeAt(_0x26557c).toString(16)).slice(-4);
      }
      return "\\u" + _0x2ed3d1.join("\\u");
    }
    base64ToHex(_0x4cfb83) {
      const _0x568ecd = atob(_0x4cfb83);
      let _0x1a3d14 = "";
      for (let _0x3ccaae = 0; _0x3ccaae < _0x568ecd.length; _0x3ccaae++) {
        const _0x1aa308 = _0x568ecd.charCodeAt(_0x3ccaae).toString(16).padStart(2, "0");
        _0x1a3d14 += _0x1aa308;
      }
      return _0x1a3d14;
    }
    decodeUnicode(_0x2f6914) {
      return unescape(unescape(_0x2f6914.replace(/\\u/g, "%u")));
    }
    RT(_0x36a562, _0x51dff3) {
      return Math.round(Math.random() * (_0x51dff3 - _0x36a562) + _0x36a562);
    }
    arrNull(_0x3c03db) {
      return _0x3c03db.filter(_0x387e65 => _0x387e65 && _0x387e65.trim());
    }
    nowtime() {
      return new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 28800000);
    }
    timecs() {
      let _0x158321 = this.nowtime();
      JSON.stringify(_0x158321).indexOf(" ") >= 0 && (_0x158321 = _0x158321.replace(" ", "T"));
      return new Date(_0x158321).getTime() - 28800000;
    }
    rtjson(_0x362bc1, _0x10face, _0x22b8b4, _0xe8d723) {
      if (_0xe8d723 === 0) {
        return JSON.stringify(_0x362bc1.split(_0x10face).reduce((_0x4cbd10, _0x312bfa) => {
          const [_0x35aae0, _0x326585] = _0x312bfa.split(_0x22b8b4);
          _0x4cbd10[_0x35aae0.trim()] = _0x326585.trim();
          return _0x4cbd10;
        }, {}));
      } else {
        return _0x362bc1.split(_0x10face).reduce((_0x2e1000, _0x392d53) => {
          const [_0x2f35e8, _0x40745] = _0x392d53.split(_0x22b8b4);
          _0x2e1000[_0x2f35e8.trim()] = _0x40745.trim();
          return _0x2e1000;
        }, {});
      }
    }
    MD5Encrypt(_0x730b87, _0x4cd7b8) {
      if (_0x730b87 === 0) {
        return this.CryptoJS.MD5(_0x4cd7b8).toString().toLowerCase();
      } else {
        if (_0x730b87 === 1) {
          return this.CryptoJS.MD5(_0x4cd7b8).toString().toUpperCase();
        } else {
          if (_0x730b87 === 2) {
            return this.CryptoJS.MD5(_0x4cd7b8).toString().substring(8, 24).toLowerCase();
          } else {
            if (_0x730b87 === 3) {
              return this.CryptoJS.MD5(_0x4cd7b8).toString().substring(8, 24).toUpperCase();
            }
          }
        }
      }
    }
    SHA_Encrypt(_0x5c39c3, _0x52d44a, _0x109874) {
      if (_0x5c39c3 === 0) {
        return this.CryptoJS[_0x52d44a](_0x109874).toString(this.CryptoJS.enc.Base64);
      } else {
        return this.CryptoJS[_0x52d44a](_0x109874).toString();
      }
    }
    HmacSHA_Encrypt(_0x5528c5, _0x5c73a2, _0x166f4c, _0x36fb3f) {
      return _0x5528c5 === 0 ? this.CryptoJS[_0x5c73a2](_0x166f4c, _0x36fb3f).toString(this.CryptoJS.enc.Base64) : this.CryptoJS[_0x5c73a2](_0x166f4c, _0x36fb3f).toString();
    }
    Base64(_0x3644bd, _0x390add) {
      if (_0x3644bd === 0) {
        return this.CryptoJS.enc.Base64.stringify(this.CryptoJS.enc.Utf8.parse(_0x390add));
      } else {
        return this.CryptoJS.enc.Utf8.stringify(this.CryptoJS.enc.Base64.parse(_0x390add));
      }
    }
    DecryptCrypto(_0x5c1cd3, _0x5e9385, _0xe5565f, _0x452669, _0x1ab71f, _0x31a870, _0x316154) {
      if (_0x5c1cd3 == 0) {
        const _0x4d0748 = this.CryptoJS[_0x5e9385].encrypt(this.CryptoJS.enc.Utf8.parse(_0x1ab71f), this.CryptoJS.enc.Utf8.parse(_0x31a870), {
            iv: this.CryptoJS.enc.Utf8.parse(_0x316154),
            mode: this.CryptoJS.mode[_0xe5565f],
            padding: this.CryptoJS.pad[_0x452669]
          }),
          _0x5e6c45 = _0x4d0748.ciphertext.toString();
        return Buffer.from(_0x5e6c45, "utf-8").toString("base64");
      } else {
        const _0x58d387 = this.CryptoJS[_0x5e9385].decrypt(_0x1ab71f, this.CryptoJS.enc.Utf8.parse(_0x31a870), {
          iv: this.CryptoJS.enc.Utf8.parse(_0x316154),
          mode: this.CryptoJS.mode[_0xe5565f],
          padding: this.CryptoJS.pad[_0x452669]
        });
        return _0x58d387.toString(this.CryptoJS.enc.Utf8);
      }
    }
    RSA(_0x18370c, _0x39a64b) {
      const _0x57368 = require("node-rsa"),
        _0x5674f9 = new _0x57368("-----BEGIN PUBLIC KEY-----\n" + _0x39a64b + "\n-----END PUBLIC KEY-----"),
        _0x4058b2 = {
          encryptionScheme: "pkcs1"
        };
      _0x5674f9.setOptions(_0x4058b2);
      return _0x5674f9.encrypt(_0x18370c, "base64", "utf8");
    }
    getSHA1withRSA(_0x31c4b9) {
      const _0x12cc46 = rs.KEYUTIL.getKey(privateKeyString),
        _0x2bf0e3 = {
          alg: "SHA1withRSA"
        };
      const _0x5f422a = new rs.KJUR.crypto.Signature(_0x2bf0e3);
      _0x5f422a.init(_0x12cc46);
      _0x5f422a.updateString(_0x31c4b9);
      const _0x515763 = _0x5f422a.sign(),
        _0x3c73a3 = rs.hextob64u(_0x515763);
      return _0x3c73a3;
    }
    hexToBase64(_0x526775) {
      const _0x23ab6f = [];
      for (let _0x342b8f = 0; _0x342b8f < _0x526775.length; _0x342b8f += 2) {
        _0x23ab6f.push(parseInt(_0x526775.substr(_0x342b8f, 2), 16));
      }
      const _0x45cc60 = btoa(String.fromCharCode(..._0x23ab6f));
      return _0x45cc60;
    }
    Sha1withRsa(_0x2b32b4) {
      const {
          KEYUTIL: _0x3b3e0e,
          KJUR: _0x10d6c2,
          b64utoutf8: _0x42b451,
          utf8tob64: _0x23494c
        } = require("jsrsasign"),
        _0x3ea89f = _0x3b3e0e.getKey(Key),
        _0x5040da = {
          alg: "SHA1withRSA"
        };
      const _0x3964ba = new _0x10d6c2.crypto.Signature(_0x5040da);
      _0x3964ba.init(_0x3ea89f);
      _0x3964ba.updateString(_0x2b32b4);
      const _0x367614 = _0x3964ba.sign();
      let _0x248626 = this.hexToBase64(_0x367614);
      return _0x248626;
    }
  }();
})();
async function sendPushNotification(_0x3fba78) {
  const _0x364dbf = "https://wxpusher.zjiecode.com/api/send/message",
    _0x1b11f3 = new Date(),
    _0x15130b = _0x1b11f3.toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }),
    _0x5f27e7 = _0x1b11f3.toLocaleTimeString("zh-CN", {
      hour: "2-digit",
      minute: "2-digit"
    });
  let _0x6d7853 = "";
  _0x6d7853 += "╔══════════════════╗\n";
  _0x6d7853 += "║   📱 联通阅读日报   ║\n";
  _0x6d7853 += "╚══════════════════╝\n\n";
  _0x6d7853 += "🗓️ " + _0x15130b + " " + _0x5f27e7 + "\n";
  _0x6d7853 += "📊 共" + _0x3fba78.length + "个账号\n";
  _0x6d7853 += "✨✨✨✨✨✨✨✨✨✨\n\n";
  let _0x19ec36 = 0,
    _0xb67e94 = 0,
    _0x4aa6c1 = 0;
  _0x3fba78.forEach((_0x5db5e7, _0x1945a1) => {
    const _0x17f6ab = _0x5db5e7.totalNum / 100,
      _0x324917 = _0x5db5e7.usableNum / 100,
      _0x58e56e = _0x324917 >= 5;
    if (_0x58e56e) {
      _0x19ec36++;
    }
    if (_0x5db5e7.taskProgress) {
      const _0x445f26 = _0x5db5e7.taskProgress.split("\n");
      _0x445f26.forEach(_0x1df12c => {
        if (_0x1df12c.includes("120分钟")) {
          _0xb67e94++;
        }
        if (_0x1df12c.includes("240分钟")) {
          _0x4aa6c1++;
        }
      });
    }
    _0x6d7853 += "╭────── 账号 " + (_0x1945a1 + 1) + " ──────╮\n";
    _0x6d7853 += "│ 📱 账号: " + _0x5db5e7.remark + "\n";
    _0x6d7853 += "│ 💰 总收益: " + _0x17f6ab.toFixed(2) + "元\n";
    _0x6d7853 += "│ 💳 余额: " + _0x324917.toFixed(2) + "元\n";
    if (_0x5db5e7.taskProgress) {
      _0x6d7853 += "│ 📋 任务进度:\n";
      const _0x253c72 = _0x5db5e7.taskProgress.split("\n");
      _0x253c72.forEach(_0x39ba5c => {
        if (_0x39ba5c.trim()) {
          const _0xae8164 = _0x39ba5c.match(/【(.+?)】.*?(\d+)\/(\d+)/);
          if (_0xae8164) {
            const [_0x4e0746, _0x28426d, _0x323720, _0x4f39ea] = _0xae8164,
              _0x41d4b6 = makeProgressBar(parseInt(_0x323720) / parseInt(_0x4f39ea));
            _0x6d7853 += "│ " + _0x28426d + ":\n";
            _0x6d7853 += "│    " + _0x41d4b6 + " " + _0x323720 + "/" + _0x4f39ea + "\n";
          }
        }
      });
    }
    _0x6d7853 += "│ " + (_0x58e56e ? "🌟 可以兑换啦！" : "⏳ 继续努力哦~") + "\n";
    _0x6d7853 += "╰─────────────────╯\n\n";
  });
  _0x6d7853 += "╔══════ 统计信息 ══════╗\n";
  _0x6d7853 += "║ 🎯 可兑换账号: " + _0x19ec36 + "/" + _0x3fba78.length + "\n";
  _0x6d7853 += "║ 📖 120分钟任务: " + _0xb67e94 + "个\n";
  _0x6d7853 += "║ 📚 240分钟任务: " + _0x4aa6c1 + "个\n";
  _0x6d7853 += "║ ⏰ 刷新时间: " + _0x5f27e7 + "\n";
  _0x6d7853 += "╚════════════════════╝\n\n";
  _0x6d7853 += "╭────── 温馨提示 ──────╮\n";
  _0x6d7853 += "│ 🔔 余额≥5元可以兑换\n";
  _0x6d7853 += "│ 💫 记得及时兑换哦！\n";
  _0x6d7853 += "╰─────────────────╯\n";
  _0x6d7853 += "\n⚡ Powered by WxPusher";
  const _0x2ec954 = {
    appToken: "AT_VqUjrzZRSMa291xarGc3ndO42OnFpOFB",
    content: _0x6d7853,
    contentType: 1,
    topicIds: [],
    summary: "📱 联通阅读任务日报",
    uids: UIDS
  };
  try {
    const _0x6cab60 = await axios.post(_0x364dbf, _0x2ec954);
    console.log("✅ 推送通知成功");
    return _0x6cab60.data;
  } catch (_0x413863) {
    console.error("❌ 推送通知失败:", _0x413863);
  }
}
function makeProgressBar(_0x3fff20) {
  const _0x48ef1a = 10,
    _0xeaf365 = Math.round(_0x3fff20 * _0x48ef1a),
    _0x97158f = _0x48ef1a - _0xeaf365;
  return "▰".repeat(_0xeaf365) + "▱".repeat(_0x97158f);
}
!(async () => {
  if (VALY.length) {
    try {
      let _0x20b81f = process.env[VALY] || CK;
      _0x20b81f && (process.env[VALY] = _0x20b81f.replace(/&/g, "\n"));
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
        for (let _0x3e9446 of $.cookie_list) {
          console.log(_0x3e9446.message);
        }
        await sendPushNotification($.cookie_list);
      }
    } catch (_0x1454c5) {
      console.error("获取 CK 变量内容失败:", _0x1454c5);
    }
  }
})();