//Sat Nov 22 2025 12:51:46 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const REQUIRED_SECOND_LINE = "/* 注册链接: http://jigjei484.yyshbc.cn/#/Register?activityId=1002&invitationCode=nC0kbFnYU */",
  fs = require("fs"),
  path = require("path");
function checkSecondLine() {
  try {
    const _0x37c1ff = path.resolve(__filename),
      _0x1c2ec7 = fs.readFileSync(_0x37c1ff, "utf-8"),
      _0x5844d5 = _0x1c2ec7.split(/\r?\n/);
    if (_0x5844d5.length < 2) throw new Error("脚本文件行数不足，缺少注册链接配置");
    const _0x2946cd = _0x5844d5[1].trim();
    _0x2946cd !== REQUIRED_SECOND_LINE && (console.log("[❌ ERROR] 注册链接不可修改！"), console.log("[❌ ERROR] 唯一合法第二行代码：" + REQUIRED_SECOND_LINE), process.exit(1));
    console.log("[✅ SUCCESS] 第二行注册链接校验通过（未修改，符合要求）");
  } catch (_0x4dd63f) {
    console.log("[❌ ERROR] 注册链接检测失败：" + _0x4dd63f.message);
    console.log("[❌ ERROR] 合法第二行代码必须为：" + REQUIRED_SECOND_LINE);
    process.exit(1);
  }
}
checkSecondLine();
const axios = require("axios"),
  CONFIG = {
    "API": {
      "GET_AD": "http://gw.yyzqsh.cn/api/web/member/get/internalAdvertisement",
      "RECEIVE_WELFARE": "http://gw.yyzqsh.cn/api/web/newPeopleUnlock/receiveWelfareNineteen",
      "MEMBER_CENTER": "http://gw.yyzqsh.cn/api/web/member/getMemberCenterInfo"
    },
    "TASK": {
      "WATCH_DURATION_MODE": "fixed",
      "FIXED_WATCH_SEC": 100,
      "INTERVAL_SEC": 5,
      "RETRY_COUNT": 3,
      "TIMEOUT": 30000,
      "ACCOUNT_INTERVAL_SEC": 30
    }
  };
function log(_0x4597cf, _0x1cb2be = "INFO") {
  const _0x14ac4f = {
      "SUCCESS": "✅",
      "ERROR": "❌",
      "WARN": "⚠️",
      "INFO": "ℹ️",
      "CHECK": "🔍"
    },
    _0x43396f = _0x14ac4f[_0x1cb2be] || "ℹ️";
  console.log("[" + _0x43396f + " " + _0x1cb2be + "] " + _0x4597cf);
}
function generateAndroidUA(_0x14a348) {
  const _0x4072b1 = Math.floor(Math.random() * 101) + 100,
    _0x520ee3 = Math.floor(Math.random() * 4) + 12 + "." + (Math.floor(Math.random() * 1) + 0) + ".0";
  return "GZHealth/" + _0x14a348 + " (cn.yyzqsh.android; build:" + _0x4072b1 + "; Android " + _0x520ee3 + ") okhttp/4.10.";
}
function extractInfoFromUA(_0x3418d6) {
  const _0x57ad1b = _0x3418d6.match(/GZHealth\/(\d+\.\d+\.\d+)/),
    _0x5308a9 = _0x3418d6.match(/(iOS|Android) \d+\.\d+\.\d+/);
  if (!_0x57ad1b) throw new Error("从UA提取APP版本失败：" + _0x3418d6);
  if (!_0x5308a9) throw new Error("从UA提取设备平台失败：" + _0x3418d6);
  return {
    "version": _0x57ad1b[1],
    "platform": _0x5308a9[1]
  };
}
async function requestWithRetry(_0x3c3b8e, _0x46d1b8, _0x59fd84 = "POST", _0x3ab01f = {}) {
  let _0x1bc891 = CONFIG.TASK.RETRY_COUNT;
  while (_0x1bc891 >= 0) {
    try {
      const _0x58cced = await axios({
        "url": _0x3c3b8e,
        "method": _0x59fd84,
        "headers": _0x46d1b8,
        "data": _0x59fd84 === "POST" ? _0x3ab01f : undefined,
        "timeout": CONFIG.TASK.TIMEOUT
      });
      if (_0x58cced.data.success && _0x58cced.data.code === 200) return _0x58cced.data.result;
      throw new Error("接口异常：" + (_0x58cced.data.message || "未知错误"));
    } catch (_0x3b7556) {
      if (_0x1bc891 === 0) throw new Error("请求失败（已重试" + CONFIG.TASK.RETRY_COUNT + "次）：" + _0x3b7556.message);
      const _0x5b6508 = (CONFIG.TASK.RETRY_COUNT - _0x1bc891 + 1) * 5;
      log("请求失败（剩余" + _0x1bc891 + "次），" + _0x5b6508 + "秒后重试", "ERROR");
      await new Promise(_0x28cf1f => setTimeout(_0x28cf1f, _0x5b6508 * 1000));
      _0x1bc891--;
    }
  }
}
async function fixedWait(_0x4228bf) {
  log("等待" + _0x4228bf + "秒后继续...", "INFO");
  await new Promise(_0x40208b => setTimeout(_0x40208b, _0x4228bf * 1000));
}
function parseAccountConfig(_0x3a9028) {
  const [_0x32185b, _0x22b395] = _0x3a9028.split("#");
  if (!_0x32185b || !_0x22b395) throw new Error("格式错误（正确格式：Authorization#版本号 或 Authorization#完整UA）");
  if (/^\d+\.\d+\.\d+$/.test(_0x22b395)) {
    const _0x4e4235 = generateAndroidUA(_0x22b395);
    return {
      "auth": _0x32185b,
      "ua": _0x4e4235
    };
  } else {
    if (_0x22b395.includes("GZHealth/") && (_0x22b395.includes("Android") || _0x22b395.includes("iOS"))) return {
      "auth": _0x32185b,
      "ua": _0x22b395
    };else throw new Error("第二部分格式非法（应为版本号或完整UA）");
  }
}
async function runSingleAccount(_0xb4e83e, _0x4e173b, _0x252331) {
  log("\n==================================================", "INFO");
  log("开始执行第" + (_0xb4e83e + 1) + "个账号任务", "INFO");
  log("==================================================", "INFO");
  try {
    const {
        version: _0x47204f,
        platform: _0xff1a91
      } = extractInfoFromUA(_0x252331),
      _0x192d99 = {
        "Host": "gw.yyzqsh.cn",
        "platform": _0xff1a91,
        "version": _0x47204f,
        "Authorization": _0x4e173b,
        "User-Agent": _0x252331,
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Accept-Language": "zh-Hans-CN;q=1.0, ja-CN;q=0.9, en-GB;q=0.8"
      };
    log("账号环境：" + _0xff1a91 + " | APP版本：" + _0x47204f + " | 时长模式：" + CONFIG.TASK.WATCH_DURATION_MODE + " | 固定时长：" + CONFIG.TASK.FIXED_WATCH_SEC + "秒", "SUCCESS");
    log("自动检测今日广告任务数量...", "CHECK");
    const _0x4754a5 = await requestWithRetry(CONFIG.API.MEMBER_CENTER, _0x192d99),
      _0x4e93ca = _0x4754a5.watchedVideoCount,
      _0x15f018 = _0x4754a5.videoCount;
    let _0x28988a = _0x4754a5.contribution;
    log("=== 今日任务信息 ===", "CHECK");
    log("每日需看：" + _0x15f018 + "个 | 已看：" + _0x4e93ca + "个 | 剩余：" + (_0x15f018 - _0x4e93ca) + "个");
    if (_0x4754a5.unlockTaskState !== 1) throw new Error("任务状态异常（非进行中）");
    if (_0x4e93ca >= _0x15f018) {
      log("🎉 该账号今日任务已完成（" + _0x15f018 + "个）", "SUCCESS");
      return;
    }
    const _0x4a7f97 = _0x15f018 - _0x4e93ca;
    for (let _0x56746f = 0; _0x56746f < _0x4a7f97; _0x56746f++) {
      const _0x20c3c8 = _0x4e93ca + _0x56746f + 1;
      log("\n===== 执行第" + _0x20c3c8 + "/" + _0x15f018 + "个广告 =====", "INFO");
      try {
        log("获取广告并播放...", "INFO");
        const _0x456c95 = await requestWithRetry(CONFIG.API.GET_AD, _0x192d99);
        log("广告信息：ID=" + _0x456c95.id + " | 描述=" + _0x456c95.description, "SUCCESS");
        if (!_0x456c95.videoUrl) throw new Error("无广告视频地址，跳过该广告");
        const {
            exec: _0x46472e
          } = require("child_process"),
          _0x5d5af3 = process.platform === "linux" ? "xdg-open" : "open",
          _0x46f7a2 = _0x46472e(_0x5d5af3 + " \"" + _0x456c95.videoUrl + "\"");
        log("fixed模式：固定观看" + CONFIG.TASK.FIXED_WATCH_SEC + "秒", "INFO");
        await new Promise(_0x324506 => setTimeout(_0x324506, CONFIG.TASK.FIXED_WATCH_SEC * 1000));
        _0x46f7a2.kill();
        log("广告播放完成", "SUCCESS");
        log("领取福利（videoId=" + _0x456c95.id + "）...", "INFO");
        const _0x5eb007 = CONFIG.API.RECEIVE_WELFARE + "?videoId=" + _0x456c95.id,
          _0x4596fb = await requestWithRetry(_0x5eb007, _0x192d99);
        log("福利领取成功：贡献值+" + _0x4596fb.receiveContribution + " | 订单号=" + _0x4596fb.orderSn, "SUCCESS");
        log("校验收益到账情况...", "CHECK");
        const _0x183462 = await requestWithRetry(CONFIG.API.MEMBER_CENTER, _0x192d99),
          _0x3ec317 = (_0x183462.contribution - _0x28988a).toFixed(2);
        log("贡献值变化：" + _0x28988a + " → " + _0x183462.contribution + "（+" + _0x3ec317 + "）", "CHECK");
        _0x28988a = _0x183462.contribution;
        if (_0x3ec317 <= 0) log("⚠️  未检测到收益新增，请注意到账情况", "WARN");
        log("===== 第" + _0x20c3c8 + "个广告完成 =====", "SUCCESS");
        if (_0x20c3c8 < _0x15f018) await fixedWait(CONFIG.TASK.INTERVAL_SEC);
      } catch (_0x3655b2) {
        log("第" + _0x20c3c8 + "个广告失败：" + _0x3655b2.message, "ERROR");
        if (_0x20c3c8 < _0x15f018) await fixedWait(CONFIG.TASK.INTERVAL_SEC);
      }
    }
    log("\n🎉 该账号今日" + _0x15f018 + "个广告任务全部完成！", "SUCCESS");
    const _0x2b1aed = await requestWithRetry(CONFIG.API.MEMBER_CENTER, _0x192d99);
    log("最终贡献值：" + _0x2b1aed.contribution + "（今日总新增：" + (_0x2b1aed.contribution - _0x28988a).toFixed(2) + "）", "CHECK");
  } catch (_0x5e4ecf) {
    log("❌ 该账号任务执行失败：" + _0x5e4ecf.message, "ERROR");
  }
}
async function runMultiAccountTask() {
  try {
    const _0xff24b9 = process.env.ZXSH || "";
    !_0xff24b9 && (log("请在青龙环境变量添加ZXSH，多号用换行分隔，支持格式：Authorization#版本号 或 Authorization#完整UA", "ERROR"), process.exit(1));
    const _0x2c0f08 = _0xff24b9.split(/\r?\n|\n/).map(_0x1662f3 => _0x1662f3.trim()).filter(_0x57c211 => _0x57c211 !== "");
    _0x2c0f08.length === 0 && (log("ZXSH环境变量无有效账号配置", "ERROR"), process.exit(1));
    log("共检测到" + _0x2c0f08.length + "个账号，开始批量执行任务", "SUCCESS");
    for (let _0x1f5e24 = 0; _0x1f5e24 < _0x2c0f08.length; _0x1f5e24++) {
      const _0x39a551 = _0x2c0f08[_0x1f5e24];
      try {
        const {
          auth: _0x480d65,
          ua: _0xc20d77
        } = parseAccountConfig(_0x39a551);
        await runSingleAccount(_0x1f5e24, _0x480d65, _0xc20d77);
      } catch (_0x482ebe) {
        log("第" + (_0x1f5e24 + 1) + "个账号解析失败，跳过该账号：" + _0x482ebe.message, "ERROR");
        continue;
      }
      _0x1f5e24 < _0x2c0f08.length - 1 && (log("\n第" + (_0x1f5e24 + 1) + "个账号任务结束，" + CONFIG.TASK.ACCOUNT_INTERVAL_SEC + "秒后执行下一个账号...", "INFO"), await fixedWait(CONFIG.TASK.ACCOUNT_INTERVAL_SEC));
    }
    log("\n==================================================", "INFO");
    log("所有" + _0x2c0f08.length + "个账号任务执行完毕！", "SUCCESS");
    log("==================================================", "INFO");
  } catch (_0x5881f3) {
    log("\n❌ 全局任务执行异常：" + _0x5881f3.message, "ERROR");
  } finally {
    log("\n任务结束，退出脚本", "INFO");
    process.exit(0);
  }
}
runMultiAccountTask();