//Wed Feb 05 2025 16:30:12 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {})();
DS = 80;
XHCS = 100;
NAME = "中国联通";
VALY = ["zgltck1"];
VER = "1.1.2";
CK = "";
LOGS = 0;
usid = 0;
Notify = 1;
nowhour = Math.round(new Date().getHours()).toString();
crypto = require("crypto-js");
const _0x293e24 = require("request"),
  _0x43fcd1 = require("axios"),
  {
    Console: _0x88d065
  } = require("console"),
  _0x4c8aca = require("fs");
function _0x4a0ac4(_0x1ceed4) {
  _0x4c8aca.appendFile("1.log", _0x1ceed4 + "\n", _0x3e21f5 => {
    _0x3e21f5 && console.error(_0x3e21f5);
  });
}
DCFHOST = process.env.DCFHOST;
dcfkey = encodeURIComponent(process.env.dcfkey);
IP = "";
IPCITY = "";
class _0xb32eeb {
  constructor(_0x377912) {
    const [_0x4318e7, _0x19d17d] = _0x377912.split("#");
    this.phone = _0x4318e7;
    this.remark = _0x19d17d || _0x4318e7;
    this._ = ++usid;
    this.f = "[" + this._ + "]" + this.remark;
    this.message = "";
    this.logs = true;
  }
  async ["login"]() {
    let _0x1eccfb = $.getFormattedDate(),
      _0x2a1b9d = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "" + this.phone, "woreadst^&*12345", "16-Bytes--String"),
      _0x4b4141 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"phone\":\"" + _0x2a1b9d + "\",\"timestamp\":\"" + _0x1eccfb + "\"}", "woreadst^&*12345", "16-Bytes--String"),
      _0x1a56f4 = {
        "accesstoken": "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
      },
      _0x565008 = "{\"sign\":\"" + _0x4b4141 + "\"}",
      _0x4f5961 = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/account/login", _0x1a56f4, _0x565008);
    if (_0x4f5961.code === "0000") {
      console.log("📱 " + this.f + " | ✅ 登录成功");
      _0x4a0ac4("📱 " + this.f + " | ✅ 登录成功");
      this.userindex = _0x4f5961.data.userindex;
      this.verifycode = _0x4f5961.data.verifycode;
      this.userid = _0x4f5961.data.userid;
      this.token = _0x4f5961.data.token;
      this.logs = true;
    } else this.logs = false;
  }
  async ["hqtoken"]() {
    let _0x564c9a = $.getFormattedDate(),
      _0xf82015 = {
        "userid": this.userid,
        "token": this.token,
        "timestamp": _0x564c9a
      },
      _0x2bdadd = {
        "timestamp": _0x564c9a,
        "signtimestamp": Date.now(),
        "source": "9",
        "token": this.token,
        "userData": Buffer.from(JSON.stringify(_0xf82015), "utf-8").toString("base64")
      };
    delete _0x2bdadd.token;
    let _0x428d9a = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", JSON.stringify(_0x2bdadd), "QzUzOUM2QTQ2MTc4", "16-Bytes--String"),
      _0x11b1c1 = {
        "accesstoken": "NTI4RDdGMUU0NUM2QzUzOUM2QTQ2MTc4"
      },
      _0x18f4fa = "{\"sign\":\"" + _0x428d9a + "\"}",
      _0x22f4ee = await $.task("post", "https://m.woread.com.cn/api/union/user/thirdPartyFreeLogin", _0x11b1c1, _0x18f4fa);
    if (_0x22f4ee.code === "0000") {
      console.log("📱 " + this.f + " | ✅ token获取成功");
      this.userindex = _0x22f4ee.data.userindex;
      this.verifycode = _0x22f4ee.data.verifycode;
      this.userid = _0x22f4ee.data.userid;
      this.token = _0x22f4ee.data.token;
      this.logs = true;
    } else this.logs = false;
  }
  async ["taskinfo"]() {
    let _0x56c3ea = $.getFormattedDate(),
      _0x4e3391 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"timestamp\":\"" + _0x56c3ea + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String"),
      _0x23f528 = {
        "accesstoken": "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
      },
      _0x3cadd9 = "{\"sign\":\"" + _0x4e3391 + "\"}",
      _0x5e4c63 = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryActiveInfo", _0x23f528, _0x3cadd9);
    _0x5e4c63.code === "0000" && (this.activeId = _0x5e4c63.data.activeId);
  }
  async ["tasklist"]() {
    let _0x3d9f65 = $.getFormattedDate(),
      _0x5e67a1 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"activeIndex\":" + this.activeId + ",\"timestamp\":\"" + _0x3d9f65 + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String"),
      _0x3e9194 = {
        "accesstoken": "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
      },
      _0x5a56ef = "{\"sign\":\"" + _0x5e67a1 + "\"}",
      _0x45866d = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryActiveTaskList", _0x3e9194, _0x5a56ef);
    if (_0x45866d.code === "0000") {
      let _0x3246ff = _0x45866d.data.filter(_0x5d2d25 => {
        const _0x24d689 = _0x5d2d25.taskDetail.taskName;
        return _0x24d689 === "阅读120分钟";
      });
      _0x3246ff.sort((_0x39af4d, _0xf10df7) => _0xf10df7.secondTaskId - _0x39af4d.secondTaskId);
      if (nextDayTimestamp !== "请在规定时间段内抢任务") {
        let _0x401b81 = $.time(13);
        if (_0x401b81 <= nextDayTimestamp) {
          console.log("📱 " + this.f + " | ⏳ 抢任务倒计时: " + waitTime / 1000 + "秒");
          _0x4a0ac4("📱 " + this.f + " | ⏳ 抢任务倒计时: " + waitTime / 1000 + "秒");
          await $.wait(waitTime);
          for (let _0x2e62ff = 0; _0x2e62ff < XHCS; _0x2e62ff++) {
            await this.receivetask(_0x3246ff);
          }
        } else console.log("【" + this.f + "】" + nextDayTimestamp), _0x4a0ac4("【" + this.f + "】" + nextDayTimestamp);
      }
    }
  }
  async ["receivetask"](_0x10c663) {
    for (let _0x4959e9 of _0x10c663) {
      let _0x5f3d4 = _0x4959e9.secondTaskId,
        _0x8bafee = _0x4959e9.taskDetail.materialGroup.bindActiveName,
        _0x2b81f3 = $.getFormattedDate(),
        _0x21cf62 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"activeId\":" + this.activeId + ",\"taskId\":" + _0x5f3d4 + ",\"timestamp\":\"" + _0x2b81f3 + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String"),
        _0x5f0fac = {
          "accesstoken": "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
        },
        _0x163e05 = "{\"sign\":\"" + _0x21cf62 + "\"}",
        _0x2c3ff5 = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/activity423/receiveActiveTask", _0x5f0fac, _0x163e05);
      if (_0x2c3ff5.code === "0000") {
        console.log("📱 " + this.f + " | 🎯 抢任务: " + _0x8bafee);
        console.log("✅ 结果: " + _0x2c3ff5.data + " | ⏰ " + $.CurrentTime());
        _0x4a0ac4("📱 " + this.f + " | 🎯 抢任务: " + _0x8bafee);
        _0x4a0ac4("✅ 结果: " + _0x2c3ff5.data + " | ⏰ " + $.CurrentTime());
        this.message += "\n" + this.f + " 抢任务: " + _0x8bafee + ", 结果: " + _0x2c3ff5.data;
      } else {
        console.log("📱 " + this.f + " | ❌ 抢任务失败: " + _0x8bafee);
        console.log("⚠️ 原因: " + _0x2c3ff5.message + " | ⏰ " + $.CurrentTime());
        _0x4a0ac4("📱 " + this.f + " | ❌ 抢任务失败: " + _0x8bafee);
        _0x4a0ac4("⚠️ 原因: " + _0x2c3ff5.message + " | ⏰ " + $.CurrentTime());
        this.message += "\n" + this.f + " 抢任务失败: " + _0x8bafee + ", 原因: " + _0x2c3ff5.message;
      }
    }
  }
  async ["taskstatus"]() {
    let _0x11d44f = $.getFormattedDate(),
      _0x37362a = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"activeIndex\":" + this.activeId + ",\"timestamp\":\"" + _0x11d44f + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String"),
      _0x48c37e = {
        "accesstoken": "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
      },
      _0x423da9 = "{\"sign\":\"" + _0x37362a + "\"}",
      _0x3c190f = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryCurTaskStatus", _0x48c37e, _0x423da9);
    if (_0x3c190f.code === "0000" && _0x3c190f.data.length >= 1) {
      this.taskProgress = _0x3c190f.data.map(_0x4eb8fd => {
        const _0x5d6dff = _0x4eb8fd.taskDetail.currentValue + "/" + _0x4eb8fd.taskDetail.taskValue;
        return "【" + _0x4eb8fd.taskDetail.materialGroup.bindActiveName + "】任务完成进度: " + _0x5d6dff;
      }).join("\n");
      for (let _0x3e0c14 of _0x3c190f.data) {
        console.log("📱 " + this.f + " | 📋 " + _0x3e0c14.taskDetail.materialGroup.bindActiveName);
        console.log("✨ 进度: " + _0x3e0c14.taskDetail.currentValue + "/" + _0x3e0c14.taskDetail.taskValue);
        _0x4a0ac4("📱 " + this.f + " | 📋 " + _0x3e0c14.taskDetail.materialGroup.bindActiveName);
        _0x4a0ac4("✨ 进度: " + _0x3e0c14.taskDetail.currentValue + "/" + _0x3e0c14.taskDetail.taskValue);
        if (_0x3e0c14.taskDetail.currentValue < _0x3e0c14.taskDetail.taskValue) await this.doread();else {
          if (_0x3e0c14.taskDetail.currentValue >= _0x3e0c14.taskDetail.taskValue) {
            console.log("📱 " + this.f + " | 🎉 任务完成: " + _0x3e0c14.taskDetail.materialGroup.bindActiveName);
            console.log("🎁 获得奖励: " + _0x3e0c14.taskDetail.materialGroup.bindActiveName);
            _0x4a0ac4("📱 " + this.f + " | 🎉 任务完成: " + _0x3e0c14.taskDetail.materialGroup.bindActiveName);
            _0x4a0ac4("🎁 获得奖励: " + _0x3e0c14.taskDetail.materialGroup.bindActiveName);
            await this.getreward(_0x3e0c14.taskDetail.materialGroup.bindActiveName, _0x3e0c14.id);
          }
        }
      }
    }
  }
  async ["doread"]() {
    console.log("📱 " + this.f + " | 📚 开始阅读...");
    _0x4a0ac4("📱 " + this.f + " | 📚 开始阅读...");
    let _0x21cf1b = $.getFormattedDate(),
      _0x21cde8 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"signtimestamp\":\"" + Date.now() + "\",\"source\":\"9\",\"readTime\":\"240\",\"cntindex\":\"409672\",\"cntIndex\":409672,\"cnttype\":\"1\",\"cntType\":1,\"cardid\":\"11891\",\"catid\":\"118411\",\"pageIndex\":\"10683\",\"chapterseno\":1,\"channelid\":\"\",\"chapterid\":\"-1\",\"readtype\":1,\"isend\":\"0\",\"timestamp\":\"" + _0x21cf1b + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "QzUzOUM2QTQ2MTc4", "16-Bytes--String"),
      _0x17b8ec = {
        "accesstoken": "NTI4RDdGMUU0NUM2QzUzOUM2QTQ2MTc4"
      },
      _0x48ffa8 = "{\"sign\":\"" + _0x21cde8 + "\"}",
      _0x518515 = await $.task("post", "https://m.woread.com.cn/api/union/history/addReadTime", _0x17b8ec, _0x48ffa8);
    if (_0x518515.code === "0000") {
      console.log("📱 " + this.f + " | ⏱️ 阅读时长上传: " + _0x518515.message);
      _0x4a0ac4("📱 " + this.f + " | ⏱️ 阅读时长上传: " + _0x518515.message);
      console.log("╰─────────────────╯");
      _0x4a0ac4("╰─────────────────╯");
      await $.wait(121000, 128000);
      await this.taskstatus();
    } else await $.wait(121000, 128000);
  }
  async ["getreward"](_0x2834db, _0x55d87d) {
    let _0x514b85 = $.getFormattedDate(),
      _0x29fef7 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"taskId\":" + _0x55d87d + ",\"timestamp\":\"" + _0x514b85 + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String"),
      _0x268e01 = {
        "accesstoken": "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
      },
      _0x573968 = "{\"sign\":\"" + _0x29fef7 + "\"}",
      _0x69cba4 = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/activity423/completeActiveTask", _0x268e01, _0x573968);
    if (_0x69cba4.code === "0000") {
      console.log("📱 " + this.f + " | 🎉 任务完成: " + _0x69cba4.data.taskDetail.taskName);
      console.log("🎁 获得奖励: " + _0x69cba4.data.exchangeResult.materialGroupInfo.groupName);
      _0x4a0ac4("📱 " + this.f + " | 🎉 任务完成: " + _0x69cba4.data.taskDetail.taskName);
      _0x4a0ac4("🎁 获得奖励: " + _0x69cba4.data.exchangeResult.materialGroupInfo.groupName);
      this.message += "\n" + this.f + " 完成任务: " + _0x69cba4.data.taskDetail.taskName + ", 获得奖励: " + _0x69cba4.data.exchangeResult.materialGroupInfo.groupName;
    } else console.log("📱 " + this.f + " | ❌ 任务失败: " + _0x2834db), console.log("⚠️ 原因: " + _0x69cba4.message), _0x4a0ac4("📱 " + this.f + " | ❌ 任务失败: " + _0x2834db), _0x4a0ac4("⚠️ 原因: " + _0x69cba4.message);
  }
  async ["lotterystatus"]() {
    let _0x15e9c6 = $.getFormattedDate(),
      _0x54e2fa = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"activeIndex\":" + this.activeId + ",\"timestamp\":\"" + _0x15e9c6 + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String"),
      _0x48e4cb = {
        "accesstoken": "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
      },
      _0x48466d = "{\"sign\":\"" + _0x54e2fa + "\"}",
      _0x3af89f = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryReadStatus", _0x48e4cb, _0x48466d);
    if (_0x3af89f.code === "0000") {
      if (_0x3af89f.data === "4") {
        await this.lottery();
      } else _0x3af89f.data === "3" && (console.log("📱 " + this.f + " | 🔔 暂无阅读抽奖机会,明天再来试试运气吧"), _0x4a0ac4("📱 " + this.f + " | 🔔 暂无阅读抽奖机会,明天再来试试运气吧"), this.message += "\n📱 " + this.f + " 暂无阅读抽奖机会,明天再来试试运气吧");
    }
  }
  async ["lottery"]() {
    let _0x3b609d = $.getFormattedDate(),
      _0x5862b8 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"activeIndex\":" + this.activeId + ",\"timestamp\":\"" + _0x3b609d + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String"),
      _0x53889a = {
        "accesstoken": "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
      },
      _0x473195 = "{\"sign\":\"" + _0x5862b8 + "\"}",
      _0x2efd39 = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/activity423/drawReadActivePrize", _0x53889a, _0x473195);
    if (_0x2efd39.code === "0000") {
      console.log("📱 " + this.f + " | 🎲 阅读抽奖完成");
      console.log("🎁 获得奖励: " + _0x2efd39.data.prizedesc);
      _0x4a0ac4("📱 " + this.f + " | 🎲 阅读抽奖完成");
      _0x4a0ac4("🎁 获得奖励: " + _0x2efd39.data.prizedesc);
      this.message += "\n📱 " + this.f + " 完成阅读任务抽奖成功,获得: " + _0x2efd39.data.prizedesc;
      await $.wait(2000, 4000);
      await this.lotterystatus();
    }
  }
  async ["addDrawTimes"]() {
    let _0xd91794 = $.getFormattedDate(),
      _0x3b5006 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"userid\":\"" + this.userid + "\",\"activetyindex\":6640,\"timestamp\":\"" + _0xd91794 + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String"),
      _0x4f518e = {
        "accesstoken": "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
      },
      _0x165edd = "{\"sign\":\"" + _0x3b5006 + "\"}",
      _0x553ca8 = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/basics/addDrawTimes", _0x4f518e, _0x165edd);
    _0x553ca8.code === "0000" && (console.log("📱 " + this.f + " | 🎉 完成阅读打卡任务成功,获得抽奖机会"), _0x4a0ac4("📱 " + this.f + " | 🎉 完成阅读打卡任务成功,获得抽奖机会"), this.message += "\n📱 " + this.f + " 完成阅读打卡任务成功,获得抽奖机会");
  }
  async ["checkUserTakeActive"]() {
    let _0x16fc11 = $.getFormattedDate(),
      _0xe7adf8 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"activeIndex\":6640,\"timestamp\":\"" + _0x16fc11 + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String"),
      _0xc34060 = {
        "accesstoken": "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
      },
      _0x39c6ab = "{\"sign\":\"" + _0xe7adf8 + "\"}",
      _0xb6f08f = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/activity/checkUserTakeActive", _0xc34060, _0x39c6ab);
    if (_0xb6f08f.code === "0000") {
      _0xb6f08f.data > 0 ? await this.dodraw() : (console.log("📱 " + this.f + " | 🔔 暂无打卡抽奖机会,明天再来试试运气吧"), _0x4a0ac4("📱 " + this.f + " | 🔔 暂无打卡抽奖机会,明天再来试试运气吧"), this.message += "\n📱 " + this.f + " 暂无打卡抽奖机会,明天再来试试运气吧");
    }
  }
  async ["dodraw"]() {
    let _0x37f5b8 = $.getFormattedDate(),
      _0x5cdf7c = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"activeindex\":6640,\"timestamp\":\"" + _0x37f5b8 + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String"),
      _0x3e154f = {
        "accesstoken": "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
      },
      _0x221fb4 = "{\"sign\":\"" + _0x5cdf7c + "\"}",
      _0x4ea83e = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/basics/doDraw", _0x3e154f, _0x221fb4);
    _0x4ea83e.code === "0000" && (console.log("📱 " + this.f + " | 🎉 完成打卡任务抽奖成功,获得: " + _0x4ea83e.data.prizedesc), _0x4a0ac4("📱 " + this.f + " | 🎉 完成打卡任务抽奖成功,获得: " + _0x4ea83e.data.prizedesc), await $.wait(2000, 4000), await this.checkUserTakeActive());
  }
  async ["userinfo"]() {
    let _0x3d05a6 = $.getFormattedDate(),
      _0x3202be = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"timestamp\":\"" + _0x3d05a6 + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String"),
      _0x7585ea = {
        "accesstoken": "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
      },
      _0x4c3f75 = "{\"sign\":\"" + _0x3202be + "\"}",
      _0x522e82 = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/phone/vouchers/queryTicketAccount", _0x7585ea, _0x4c3f75);
    if (_0x522e82.code === "0000") {
      this.totalNum = _0x522e82.data.totalNum;
      this.usableNum = _0x522e82.data.usableNum;
      console.log("📱 " + this.f + " | 💰 总收益: " + _0x522e82.data.totalNum / 100 + "元");
      console.log("💳 当前余额: " + _0x522e82.data.usableNum / 100 + "元");
      _0x4a0ac4("📱 " + this.f + " | 💰 总收益: " + _0x522e82.data.totalNum / 100 + "元");
      _0x4a0ac4("💳 当前余额: " + _0x522e82.data.usableNum / 100 + "元");
      this.message += "\n📱 " + this.f + " 已赚取: " + _0x522e82.data.totalNum / 100 + "元话费券，当前余额: " + _0x522e82.data.usableNum / 100 + "元话费券";
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
    async ["fetchCKFromFile"](_0x4e7d77) {
      return new Promise((_0x5d6463, _0x5551ff) => {
        _0x293e24(_0x4e7d77, (_0x1ba797, _0x3125b0, _0x464595) => {
          if (_0x1ba797) {
            _0x5551ff(_0x1ba797);
            return;
          }
          if (_0x3125b0 && _0x3125b0.statusCode === 200) _0x5d6463(_0x464595.trim());else {
            _0x5551ff(new Error("请求失败，状态码：" + _0x3125b0.statusCode));
          }
        });
      });
    }
    async ["Multithreading"](_0x4ddf33, _0x22dd62, _0x1eb37f) {
      let _0x367627 = [];
      if (!_0x1eb37f) _0x1eb37f = 1;
      while (_0x1eb37f--) {
        for (let _0x4e4b6a of this.cookie_list) {
          _0x367627.push(_0x4e4b6a[_0x4ddf33](_0x22dd62));
        }
      }
      await Promise.allSettled(_0x367627);
    }
    ["ExamineCookie"]() {
      let _0x49a5a4 = process.env[VALY] || CK,
        _0x5cca51 = 0;
      if (_0x49a5a4) {
        for (let _0xd8119e of _0x49a5a4.split("\n").filter(_0x557663 => !!_0x557663)) {
          this.cookie_list.push(new _0xb32eeb(_0xd8119e));
        }
        _0x5cca51 = this.cookie_list.length;
      } else console.log("\n📱 " + NAME + "：未填写变量: " + VALY), _0x4a0ac4("\n📱 " + NAME + "：未填写变量: " + VALY);
      return console.log("共找到" + _0x5cca51 + "个账号"), _0x4a0ac4("共找到" + _0x5cca51 + "个账号"), this.cookie_list;
    }
    ["task"](_0x30f631, _0xbef425, _0x274e10, _0x6315a0, _0x12eadc) {
      _0x30f631 === "delete" && (_0x30f631 = _0x30f631.toUpperCase());
      if (_0x30f631 === "post") {
        delete _0x274e10["content-type"];
        delete _0x274e10["Content-type"];
        delete _0x274e10["content-Type"];
        this.safeGet(_0x6315a0) ? _0x274e10["Content-Type"] = "application/json;charset=UTF-8" : _0x274e10["Content-Type"] = "application/x-www-form-urlencoded";
        if (_0x6315a0) _0x274e10["Content-Length"] = this.lengthInUtf8Bytes(_0x6315a0);
      }
      return _0x30f631 === "get" && (delete _0x274e10["content-type"], delete _0x274e10["Content-type"], delete _0x274e10["content-Type"], delete _0x274e10["Content-Length"]), _0x274e10.Host = _0xbef425.replace("//", "/").split("/")[1], new Promise(async _0xf463ff => {
        let _0x41274f = {
          "url": _0xbef425,
          "headers": _0x274e10,
          "body": _0x6315a0,
          "proxy": "http://" + _0x12eadc
        };
        if (!_0x12eadc) delete _0x41274f.proxy;
        this.request[_0x30f631.toLowerCase()](_0x41274f, (_0x1686ac, _0x11ba60, _0xac29a2) => {
          try {
            _0xac29a2 && LOGS === 1 && (console.log("================ 请求 ================"), console.log(_0x41274f), console.log("================ 返回 ================"), this.safeGet(_0xac29a2) ? console.log(JSON.parse(_0xac29a2)) : console.log(_0xac29a2));
          } catch (_0x204a73) {
            console.log(_0x204a73, _0xbef425 + "\n" + _0x274e10);
          } finally {
            let _0x27867d = "";
            if (!_0x1686ac) {
              this.safeGet(_0xac29a2) ? _0x27867d = JSON.parse(_0xac29a2) : _0xac29a2.includes("/") && _0xac29a2.includes("+") ? _0x27867d = _0xac29a2 : _0x27867d = _0xac29a2;
            } else {
              _0x27867d = _0xbef425 + " API请求失败，请检查网络重试\n" + _0x1686ac;
            }
            _0xf463ff(_0x27867d);
          }
        });
      });
    }
    async ["readUUID"]() {
      const _0x2faec0 = "uuid.txt";
      await this.generateUUID(_0x2faec0);
      try {
        const _0xa268b1 = _0x4c8aca.readFileSync(_0x2faec0, "utf8").trim();
        return _0xa268b1;
      } catch (_0x9ac83a) {
        return null;
      }
    }
    ["generateUUID"](_0x1c630d) {
      if (_0x4c8aca.existsSync(_0x1c630d)) {
        return;
      }
      const _0x20ff10 = uuidv4();
      _0x4c8aca.writeFile(_0x1c630d, _0x20ff10, "utf8", _0x5d0e36 => {
        if (_0x5d0e36) {
          console.error("写入文件出错: " + _0x5d0e36.message);
        }
      });
    }
    async ["getkami"]() {
      let _0x4d3d6e = await this.readUUID();
      await this.getCurrentIP();
      await this.getIPCITY();
      let _0x1d1e18 = await this.task("get", "http://" + DCFHOST + "/querys?DCFKEY=" + dcfkey + "&MAC=" + _0x4d3d6e + "&JSHOST=" + IP + "&JSCITY=" + IPCITY, {});
      return _0x1d1e18;
    }
    async ["getIPCITY"]() {
      let _0x86562d = await this.task("get", "http://ip-api.com/json/" + IP + "?lang=zh-CN", {}),
        _0x30b72b = "" + _0x86562d.regionName + _0x86562d.city;
      IPCITY = encodeURIComponent(_0x30b72b);
    }
    async ["getCurrentIP"]() {
      let _0x34d835 = await this.task("get", "https://httpbin.org/ip", {});
      IP = _0x34d835.origin;
    }
    async ["SendMsg"](_0x328fcf) {
      if (!_0x328fcf) return;
      if (Notify === 1) {
        var _0x32aa01 = require("./sendNotify");
        await _0x32aa01.sendNotify(NAME, NOTIFY + "\n\n" + _0x328fcf);
      }
    }
    ["lengthInUtf8Bytes"](_0x2bc26b) {
      let _0x22a2ed = encodeURIComponent(_0x2bc26b).match(/%[89ABab]/g);
      return _0x2bc26b.length + (_0x22a2ed ? _0x22a2ed.length : 0);
    }
    ["randomArr"](_0x33da33) {
      return _0x33da33[parseInt(Math.random() * _0x33da33.length, 10)];
    }
    ["wait"](_0x4080c2) {
      return new Promise(_0x2499ab => setTimeout(_0x2499ab, _0x4080c2));
    }
    ["time"](_0x5eecb2) {
      if (_0x5eecb2 === 10) {
        return Math.round(+new Date() / 1000);
      } else return +new Date();
    }
    ["getNextDayTimestamp"]() {
      const _0x10a474 = new Date();
      if (nowhour === "23") return _0x10a474.setDate(_0x10a474.getDate() + 1), _0x10a474.setHours(0, 0, 0, 0), _0x10a474.getTime();else return nowhour === "0" ? (_0x10a474.setDate(_0x10a474.getDate()), _0x10a474.setHours(0, 0, 0, 0), _0x10a474.getTime()) : "请在规定时间段内抢任务";
    }
    ["CurrentTime"]() {
      const _0x179c6e = new Date(),
        _0x20c2c5 = String(_0x179c6e.getHours()).padStart(2, "0"),
        _0x5bf024 = String(_0x179c6e.getMinutes()).padStart(2, "0"),
        _0x1b3f3e = String(_0x179c6e.getSeconds()).padStart(2, "0"),
        _0x565fc1 = String(_0x179c6e.getMilliseconds()).padStart(3, "0");
      return _0x20c2c5 + ":" + _0x5bf024 + ":" + _0x1b3f3e + "." + _0x565fc1;
    }
    ["getFormattedDate"]() {
      const _0x2a036c = new Date(),
        _0x398674 = _0x2a036c.getFullYear(),
        _0x3ee516 = (_0x2a036c.getMonth() + 1).toString().padStart(2, "0"),
        _0x339274 = _0x2a036c.getDate().toString().padStart(2, "0"),
        _0x42b7da = _0x2a036c.getHours().toString().padStart(2, "0"),
        _0x505fe1 = _0x2a036c.getMinutes().toString().padStart(2, "0"),
        _0x1db6cb = _0x2a036c.getSeconds().toString().padStart(2, "0");
      return "" + _0x398674 + _0x3ee516 + _0x339274 + _0x42b7da + _0x505fe1 + _0x1db6cb;
    }
    ["safeGet"](_0x510fea) {
      try {
        if (typeof JSON.parse(_0x510fea) === "object") {
          return true;
        }
      } catch (_0xfea258) {
        return false;
      }
    }
    ["SJS"](_0x8c3725, _0x5b432a) {
      if (_0x5b432a === 0) {
        const _0x3d09d4 = "QWERTYUIOPASDFGHJKLZXCVBNM01234567890123456789",
          _0x1ed8d0 = _0x3d09d4.length;
        let _0x389b31 = "";
        for (let _0xf51853 = 0; _0xf51853 < _0x8c3725; _0xf51853++) {
          _0x389b31 += _0x3d09d4.charAt(Math.floor(Math.random() * _0x1ed8d0));
        }
        return _0x389b31;
      } else {
        if (_0x5b432a === 1) {
          const _0x42cb98 = "qwertyuiopasdfghjklzxcvbnm0123456789",
            _0x11561b = _0x42cb98.length;
          let _0x316d14 = "";
          for (let _0x431171 = 0; _0x431171 < _0x8c3725; _0x431171++) {
            _0x316d14 += _0x42cb98.charAt(Math.floor(Math.random() * _0x11561b));
          }
          return _0x316d14;
        } else {
          const _0xfc2197 = "0123456789",
            _0x3933b6 = _0xfc2197.length;
          let _0x44c7da = "";
          for (let _0x42e189 = 0; _0x42e189 < _0x8c3725; _0x42e189++) {
            _0x44c7da += _0xfc2197.charAt(Math.floor(Math.random() * _0x3933b6));
          }
          return _0x44c7da;
        }
      }
    }
    ["encodeUnicode"](_0x5f03dc) {
      const _0x186e6c = [];
      for (let _0x58917b = 0; _0x58917b < _0x5f03dc.length; _0x58917b++) {
        _0x186e6c[_0x58917b] = ("00" + _0x5f03dc.charCodeAt(_0x58917b).toString(16)).slice(-4);
      }
      return "\\u" + _0x186e6c.join("\\u");
    }
    ["base64ToHex"](_0x42656b) {
      const _0x26191a = atob(_0x42656b);
      let _0x5dbf28 = "";
      for (let _0x5be7fa = 0; _0x5be7fa < _0x26191a.length; _0x5be7fa++) {
        const _0x56b7a3 = _0x26191a.charCodeAt(_0x5be7fa).toString(16).padStart(2, "0");
        _0x5dbf28 += _0x56b7a3;
      }
      return _0x5dbf28;
    }
    ["decodeUnicode"](_0x3fcd3b) {
      return unescape(unescape(_0x3fcd3b.replace(/\\u/g, "%u")));
    }
    ["RT"](_0x461da9, _0x4d1e24) {
      return Math.round(Math.random() * (_0x4d1e24 - _0x461da9) + _0x461da9);
    }
    ["arrNull"](_0x5a71fd) {
      return _0x5a71fd.filter(_0x15e5b3 => _0x15e5b3 && _0x15e5b3.trim());
    }
    ["nowtime"]() {
      return new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 28800000);
    }
    ["timecs"]() {
      let _0x1d45f1 = this.nowtime();
      return JSON.stringify(_0x1d45f1).indexOf(" ") >= 0 && (_0x1d45f1 = _0x1d45f1.replace(" ", "T")), new Date(_0x1d45f1).getTime() - 28800000;
    }
    ["rtjson"](_0x173bd9, _0x214a63, _0xa249f0, _0x20ae20) {
      if (_0x20ae20 === 0) {
        return JSON.stringify(_0x173bd9.split(_0x214a63).reduce((_0x524a5d, _0x167aca) => {
          const [_0x1d9ce7, _0xcb862b] = _0x167aca.split(_0xa249f0);
          return _0x524a5d[_0x1d9ce7.trim()] = _0xcb862b.trim(), _0x524a5d;
        }, {}));
      } else {
        return _0x173bd9.split(_0x214a63).reduce((_0x147f7f, _0x824134) => {
          const [_0x1d7bca, _0x130f4d] = _0x824134.split(_0xa249f0);
          return _0x147f7f[_0x1d7bca.trim()] = _0x130f4d.trim(), _0x147f7f;
        }, {});
      }
    }
    ["MD5Encrypt"](_0x4ed218, _0x126529) {
      if (_0x4ed218 === 0) return this.CryptoJS.MD5(_0x126529).toString().toLowerCase();else {
        if (_0x4ed218 === 1) {
          return this.CryptoJS.MD5(_0x126529).toString().toUpperCase();
        } else {
          if (_0x4ed218 === 2) return this.CryptoJS.MD5(_0x126529).toString().substring(8, 24).toLowerCase();else {
            if (_0x4ed218 === 3) return this.CryptoJS.MD5(_0x126529).toString().substring(8, 24).toUpperCase();
          }
        }
      }
    }
    ["SHA_Encrypt"](_0x36adf2, _0x58e92a, _0x2dc6db) {
      return _0x36adf2 === 0 ? this.CryptoJS[_0x58e92a](_0x2dc6db).toString(this.CryptoJS.enc.Base64) : this.CryptoJS[_0x58e92a](_0x2dc6db).toString();
    }
    ["HmacSHA_Encrypt"](_0x377428, _0x350293, _0x4c10c4, _0x19e18d) {
      return _0x377428 === 0 ? this.CryptoJS[_0x350293](_0x4c10c4, _0x19e18d).toString(this.CryptoJS.enc.Base64) : this.CryptoJS[_0x350293](_0x4c10c4, _0x19e18d).toString();
    }
    ["Base64"](_0x1f6604, _0x1bc6be) {
      return _0x1f6604 === 0 ? this.CryptoJS.enc.Base64.stringify(this.CryptoJS.enc.Utf8.parse(_0x1bc6be)) : this.CryptoJS.enc.Utf8.stringify(this.CryptoJS.enc.Base64.parse(_0x1bc6be));
    }
    ["DecryptCrypto"](_0x5c2e75, _0x37219c, _0x1df429, _0xa45169, _0x1c473d, _0x2585a6, _0x348e68) {
      if (_0x5c2e75 == 0) {
        const _0x58d353 = this.CryptoJS[_0x37219c].encrypt(this.CryptoJS.enc.Utf8.parse(_0x1c473d), this.CryptoJS.enc.Utf8.parse(_0x2585a6), {
            "iv": this.CryptoJS.enc.Utf8.parse(_0x348e68),
            "mode": this.CryptoJS.mode[_0x1df429],
            "padding": this.CryptoJS.pad[_0xa45169]
          }),
          _0x313ae4 = _0x58d353.ciphertext.toString();
        return Buffer.from(_0x313ae4, "utf-8").toString("base64");
      } else {
        const _0x5c8f7c = this.CryptoJS[_0x37219c].decrypt(_0x1c473d, this.CryptoJS.enc.Utf8.parse(_0x2585a6), {
          "iv": this.CryptoJS.enc.Utf8.parse(_0x348e68),
          "mode": this.CryptoJS.mode[_0x1df429],
          "padding": this.CryptoJS.pad[_0xa45169]
        });
        return _0x5c8f7c.toString(this.CryptoJS.enc.Utf8);
      }
    }
    ["RSA"](_0x5e0075, _0x2231ae) {
      const _0x5d49b6 = require("node-rsa"),
        _0x2939c0 = new _0x5d49b6("-----BEGIN PUBLIC KEY-----\n" + _0x2231ae + "\n-----END PUBLIC KEY-----");
      return _0x2939c0.setOptions({
        "encryptionScheme": "pkcs1"
      }), _0x2939c0.encrypt(_0x5e0075, "base64", "utf8");
    }
    ["getSHA1withRSA"](_0x11688f) {
      const _0xb40c9 = rs.KEYUTIL.getKey(privateKeyString),
        _0x4a3434 = new rs.KJUR.crypto.Signature({
          "alg": "SHA1withRSA"
        });
      _0x4a3434.init(_0xb40c9);
      _0x4a3434.updateString(_0x11688f);
      const _0x56fd8b = _0x4a3434.sign(),
        _0xf207f = rs.hextob64u(_0x56fd8b);
      return _0xf207f;
    }
    ["hexToBase64"](_0xb23c32) {
      const _0x2615cd = [];
      for (let _0x533c4d = 0; _0x533c4d < _0xb23c32.length; _0x533c4d += 2) {
        _0x2615cd.push(parseInt(_0xb23c32.substr(_0x533c4d, 2), 16));
      }
      const _0x2ea023 = btoa(String.fromCharCode(..._0x2615cd));
      return _0x2ea023;
    }
    ["Sha1withRsa"](_0x435d55) {
      const {
          KEYUTIL: _0x17e38a,
          KJUR: _0x433fbd,
          b64utoutf8: _0x99fa14,
          utf8tob64: _0x1ccabc
        } = require("jsrsasign"),
        _0x30f141 = _0x17e38a.getKey(Key),
        _0x39a6a1 = new _0x433fbd.crypto.Signature({
          "alg": "SHA1withRSA"
        });
      _0x39a6a1.init(_0x30f141);
      _0x39a6a1.updateString(_0x435d55);
      const _0x3779e4 = _0x39a6a1.sign();
      let _0xf8d612 = this.hexToBase64(_0x3779e4);
      return _0xf8d612;
    }
  }();
})();
async function _0x4c1449(_0x20eb6c) {
  const _0x31a453 = "https://wxpusher.zjiecode.com/api/send/message",
    _0x2de56b = new Date(),
    _0x2ac52e = _0x2de56b.toLocaleDateString("zh-CN", {
      "year": "numeric",
      "month": "2-digit",
      "day": "2-digit"
    }),
    _0x51c79c = _0x2de56b.toLocaleTimeString("zh-CN", {
      "hour": "2-digit",
      "minute": "2-digit"
    });
  let _0x1d4486 = "";
  _0x1d4486 += "╔══════════════════╗\n";
  _0x1d4486 += "║   📱 联通阅读日报   ║\n";
  _0x1d4486 += "╚══════════════════╝\n\n";
  _0x1d4486 += "🗓️ " + _0x2ac52e + " " + _0x51c79c + "\n";
  _0x1d4486 += "📊 共" + _0x20eb6c.length + "个账号\n";
  _0x1d4486 += "✨✨✨✨✨✨✨✨✨✨\n\n";
  let _0x58046c = 0,
    _0x2ddb25 = 0,
    _0x2304ea = 0;
  _0x20eb6c.forEach((_0x387f2a, _0x4c4ef3) => {
    const _0x147a23 = _0x387f2a.totalNum / 100,
      _0xcd9d70 = _0x387f2a.usableNum / 100,
      _0x534d8d = _0xcd9d70 >= 5;
    if (_0x534d8d) _0x58046c++;
    if (_0x387f2a.taskProgress) {
      const _0x4c218e = _0x387f2a.taskProgress.split("\n");
      _0x4c218e.forEach(_0x3a9a43 => {
        if (_0x3a9a43.includes("120分钟")) _0x2ddb25++;
        if (_0x3a9a43.includes("240分钟")) _0x2304ea++;
      });
    }
    _0x1d4486 += "╭────── 账号 " + (_0x4c4ef3 + 1) + " ──────╮\n";
    _0x1d4486 += "│ 📱 账号: " + _0x387f2a.remark + "\n";
    _0x1d4486 += "│ 💰 总收益: " + _0x147a23.toFixed(2) + "元\n";
    _0x1d4486 += "│ 💳 余额: " + _0xcd9d70.toFixed(2) + "元\n";
    if (_0x387f2a.taskProgress) {
      _0x1d4486 += "│ 📋 任务进度:\n";
      const _0x517b58 = _0x387f2a.taskProgress.split("\n");
      _0x517b58.forEach(_0x19c08a => {
        if (_0x19c08a.trim()) {
          const _0x1720db = _0x19c08a.match(/【(.+?)】.*?(\d+)\/(\d+)/);
          if (_0x1720db) {
            const [_0x1166c8, _0x2dd477, _0x1f6295, _0x1cf80b] = _0x1720db,
              _0x93086f = _0x205d0d(parseInt(_0x1f6295) / parseInt(_0x1cf80b));
            _0x1d4486 += "│ " + _0x2dd477 + ":\n";
            _0x1d4486 += "│    " + _0x93086f + " " + _0x1f6295 + "/" + _0x1cf80b + "\n";
          }
        }
      });
    }
    _0x1d4486 += "│ " + (_0x534d8d ? "🌟 可以兑换啦！" : "⏳ 继续努力哦~") + "\n";
    _0x1d4486 += "╰─────────────────╯\n\n";
  });
  _0x1d4486 += "╔══════ 统计信息 ══════╗\n";
  _0x1d4486 += "║ 🎯 可兑换账号: " + _0x58046c + "/" + _0x20eb6c.length + "\n";
  _0x1d4486 += "║ 📖 120分钟任务: " + _0x2ddb25 + "个\n";
  _0x1d4486 += "║ 📚 240分钟任务: " + _0x2304ea + "个\n";
  _0x1d4486 += "║ ⏰ 刷新时间: " + _0x51c79c + "\n";
  _0x1d4486 += "╚════════════════════╝\n\n";
  _0x1d4486 += "╭────── 温馨提示 ──────╮\n";
  _0x1d4486 += "│ 🔔 余额≥5元可以兑换\n";
  _0x1d4486 += "│ 💫 记得及时兑换哦！\n";
  _0x1d4486 += "╰─────────────────╯\n";
  _0x1d4486 += "\n⚡ Powered by WxPusher";
  const _0x443138 = {
    "appToken": "AT_VqUjrzZRSMa291xarGc3ndO42OnFpOFB",
    "content": _0x1d4486,
    "contentType": 1,
    "topicIds": [34212],
    "summary": "📱 联通阅读任务日报",
    "uids": []
  };
  try {
    const _0x12f885 = await _0x43fcd1.post(_0x31a453, _0x443138);
    return console.log("✅ 推送通知成功"), _0x12f885.data;
  } catch (_0x54d841) {
    console.error("❌ 推送通知失败:", _0x54d841);
  }
}
function _0x205d0d(_0xe6db5c) {
  const _0x50f8eb = 10,
    _0x5de246 = Math.round(_0xe6db5c * _0x50f8eb),
    _0x3009fb = _0x50f8eb - _0x5de246;
  return "▰".repeat(_0x5de246) + "▱".repeat(_0x3009fb);
}
!(async () => {
  if (VALY.length) {
    try {
      let _0x2b7e04 = "15347353805#3805\n13147341318#1318\n15347359860#9860\n15347358013#8013\n18229322942#2942\n18566560516#0516\n13414379288#9288\n15561880013#0013\n18574396876#6876";
      process.env.zgltck1 = _0x2b7e04;
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
        for (let _0x3df851 of $.cookie_list) {
          console.log(_0x3df851.message);
        }
        await _0x4c1449($.cookie_list);
      }
    } catch (_0x921021) {
      console.error("获取 CK 变量内容失败:", _0x921021);
    }
  }
})();