//Sat Jul 19 2025 16:19:40 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {
  const _0x4b03b1 = "1f401ed20ded1a7dbc9843f9bc5339b41154258351edb1c5218cc24666b835f9",
    _0x1a58de = 1752941435213,
    _0x16f11f = () => {
      const _0xcadf38 = Date.now(),
        _0x25d410 = 10000;
      if (_0xcadf38 - _0x1a58de > _0x25d410) {
        console.error("时间戳过期");
        throw new Error("时间戳过期");
      }
      const _0x33670f = "1f401ed20ded1a7dbc9843f9bc5339b41154258351edb1c5218cc24666b835f9";
    };
  _0x16f11f();
})();
NAME = "喜番免费短剧";
VALY = ["xfmfdjapp"];
LOGS = 0;
CK = "\n";
let ckk = require("./zjxl"),
  dldz = process.env.xfmfdjdldz;
var userList = [];
let bfs = 20;
usid = 0;
let msg = "",
  logsCollection = {};
const CryptoJS = require("crypto-js"),
  NodeRSA = require("node-rsa"),
  zlib = require("zlib"),
  JSONbig = require("json-bigint");
class Bar {
  constructor(_0x3cd032) {
    this.jm = JSON.parse(gzipde(AESECB(1, _0x3cd032.body.message, "GWL8jXHLnzp63QDH")));
    this.jm1 = JSON.parse(gzipde(AESECB(1, _0x3cd032.body.message, "GWL8jXHLnzp63QDH")));
    _0x3cd032.devid && (this.jm.deviceInfo.deviceId = _0x3cd032.devid);
    this.txje = _0x3cd032.txje;
    this.bz = _0x3cd032.bz;
    this.xt = _0x3cd032.xt;
    this.aad = 0;
    this.num = ++usid;
    this.logs = [];
    this.bz ? (this.num = this.bz, logsCollection[this.num] = this.logs) : logsCollection[this.num] = this.logs;
    this.headers = {
      cookie: _0x3cd032.header.cookie,
      "Ks-Encoding": _0x3cd032.header["Ks-Encoding"],
      BrowserUa: _0x3cd032.header.BrowserUa,
      "User-Agent": _0x3cd032.header["User-Agent"],
      SystemUa: _0x3cd032.header.SystemUa,
      "Ks-PkgId": _0x3cd032.header["Ks-PkgId"]
    };
    this.headers1 = {
      Host: "www.kuaishoupay.com",
      Connection: "keep-alive",
      "User-Agent": "Mozilla/5.0 (Linux; Android 15; 23013RK75C Build/AQ3A.240912.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/130.0.6723.86 Mobile Safari/537.36kwai-xifan",
      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "X-Requested-With": "com.kwai.theater",
      "Sec-Fetch-Site": "none",
      "Sec-Fetch-Mode": "navigate",
      "Sec-Fetch-User": "?1",
      "Sec-Fetch-Dest": "document",
      "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      Cookie: "playlet.api_st=" + _0x3cd032.header.cookie.split("playlet.api_st=")[1].split(";")[0] + "; userId=" + _0x3cd032.header.cookie.split("userId=")[1].split(";")[0] + "; did=" + _0x3cd032.header.cookie.split("did=")[1].split(";")[0] + "; country_code=cn; appver=" + this.jm.appVersion + "; lat=0.0; lon=0.0; kpn=XIFAN; kpf=ANDROID_PHONE; language=zh-cn; net=LTE; Kspay-Client-SDK=3.4.1; os=android; kspay_encode=true"
    };
  }
  async hqdl() {
    let _0x1c29a2 = await task("get", dldz, {
      "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36"
    });
    this.dlip = _0x1c29a2.split("\n")[0];
    console.log("账号" + this.num + "：获取代理IP成功：" + this.dlip);
  }
  log(_0x75f630) {
    console.log(_0x75f630);
    this.logs.push(_0x75f630);
  }
  async start() {
    if (dldz == undefined) {
      await this.hqsjh();
      await wait(getRandomNumber(1, 2));
      await this.rwlb();
      await wait(getRandomNumber(1, 2));
      await this.cxbx();
    } else {
      await this.hqdl();
      await this.hqsjh();
      await wait(getRandomNumber(1, 2));
      await this.rwlb();
      await wait(getRandomNumber(1, 2));
      await this.cxbx();
      await wait(getRandomNumber(1, 2));
      await this.hqdjid();
      await wait(getRandomNumber(1, 2));
      await this.hqdjid1();
      await wait(getRandomNumber(1, 2));
      this.jm.deviceInfo.deviceId = this.jm1.deviceInfo.deviceId;
      await this.djcx();
    }
  }
  async sig(_0x30ce77, _0x3d4bd8, _0x3ebd33) {
    delete this.headers["Ks-Sig3"];
    delete this.headers["Ks-Sig1"];
    let _0x4e687f = {
        str: _0x30ce77,
        str2: JSON.stringify(_0x3d4bd8),
        map: {
          cookie: this.headers.cookie,
          "Ks-Encoding": this.headers["Ks-Encoding"],
          BrowserUa: this.headers.BrowserUa,
          "User-Agent": this.headers["User-Agent"],
          SystemUa: this.headers.SystemUa,
          "Ks-PkgId": this.headers["Ks-PkgId"]
        },
        sigType: _0x3ebd33
      },
      _0x463735 = await this.task("post", "http://103.36.206.143:22134/getSig", {}, JSON.stringify(_0x4e687f));
    return _0x463735.success ? _0x463735.Sig : false;
  }
  async ksaes(_0x58d6cd) {
    let _0x5a537f = {
        str: _0x58d6cd
      },
      _0x2ccb44 = await this.task("post", "http://103.36.206.143:22134/ksaes", {}, JSON.stringify(_0x5a537f));
    return _0x2ccb44.success ? _0x2ccb44.result : false;
  }
  async rwlb() {
    try {
      let _0x5b907c = {
          appVersion: this.jm.appVersion,
          kpn: this.jm.kpn,
          channel: this.jm.channel,
          originChannel: this.jm.originChannel,
          protocolVersion: this.jm.protocolVersion,
          kwaiMerchantSdkVersion: this.jm.kwaiMerchantSdkVersion,
          SDKVersion: this.jm.SDKVersion,
          SDKVersionCode: this.jm.SDKVersionCode,
          sdkApiVersion: this.jm.sdkApiVersion,
          sdkApiVersionCode: this.jm.sdkApiVersionCode,
          sdkType: this.jm.sdkType,
          deviceInfo: this.jm.deviceInfo,
          clientFunction: this.jm.clientFunction,
          appInfo: this.jm.appInfo,
          tkVersion: this.jm.tkVersion,
          adSdkVersion: this.jm.adSdkVersion,
          networkInfo: this.jm.networkInfo,
          clientDynamicType: this.jm.clientDynamicType,
          abi: this.jm.abi,
          socName: this.jm.socName,
          boardPlatform: this.jm.boardPlatform,
          kGeoInfo: {},
          ext: {
            modeInfo: {
              cpuCount: this.jm.ext.modeInfo?.["cpuCount"] || "",
              cpuAbi: this.jm.ext.modeInfo?.["cpuAbi"] || "",
              batteryPercent: Math.round(randomInt(50, 100)),
              totalMemorySize: Math.round(randomInt(10702063104, 12702063104)),
              availableMemorySize: Math.round(randomInt(2211751424, 3211751424)),
              totalDiskSize: Math.round(randomInt(230089280512, 270089280512)),
              availableDiskSize: Math.round(randomInt(171774987264, 191774987264)),
              imsi: "",
              iccid: "",
              bootTime: Math.round(randomInt(7231, 16964)),
              romName: this.jm.ext.modeInfo?.["romName"] || "",
              romVersion: this.jm.ext.modeInfo?.["romVersion"] || "",
              romBuildTimestamp: this.jm.ext.modeInfo?.["romBuildTimestamp"] || "",
              ringerMode: 2,
              audioStreamInfo: this.jm.ext.modeInfo?.["audioStreamInfo"] || "",
              baseBandVersion: this.jm.ext.modeInfo?.["baseBandVersion"] || "",
              fingerPrint: this.jm.ext.modeInfo?.["fingerPrint"] || "",
              screenBrightness: -1,
              isCharging: false,
              chargeType: 0,
              simCardInfo: {
                phoneCount: 2,
                activePhoneCount: 0
              },
              environmentInfo: {
                isRoot: 2,
                isXPosed: 2,
                isFrameworkHooked: 2,
                isVirtual: 0,
                isAdbEnabled: 2,
                isEmulator: 2,
                isGroupControl: 2
              }
            }
          },
          appUserInfo: {
            userRecoBit: 1
          },
          timestamp: timestamp(13),
          inspireHomeParam: {
            widgetStatus: 1,
            pushPermissionStatus: 2
          }
        },
        _0x34b96b = await this.ksaes(JSON.stringify(_0x5b907c));
      if (_0x34b96b) {
        let _0x99dece = {
            version: this.jm.SDKVersion,
            appVersion: this.jm.appVersion,
            appId: "1091400011",
            message: _0x34b96b
          },
          _0x35c4fb = "https://tube.e.kuaishou.com/rest/e/tube/inspire/home",
          _0x1e365c = await this.sig(_0x35c4fb, _0x99dece, "sig3");
        if (_0x1e365c) {
          this.headers["Ks-Sig3"] = _0x1e365c;
          let _0x2cd778 = await this.task("post", _0x35c4fb, this.headers, JSON.stringify(_0x99dece));
          if (_0x2cd778.result == 1) {
            let _0x109a81 = JSON.parse(gzipde(AESECB(1, _0x2cd778.data, "GWL8jXHLnzp63QDH")));
            this.log("账号[" + this.num + "]：余额：" + _0x109a81.accountInfoV2.cashAccount.amountDisplay + "，金币：" + _0x109a81.accountInfoV2.coinAccount.amount);
            _0x109a81.accountInfoV2.cashAccount.amountDisplay >= this.txje && (await wait(getRandomNumber(1, 2)), await this.txlb());
            for (let _0x122f6c of _0x109a81.dailyTaskInfo.tasks) {
              if (_0x122f6c.id == 6005 && _0x122f6c.taskStatus == 10) {
                this.log("账号[" + this.num + "]：" + _0x122f6c.title + "：" + _0x122f6c.subtitle + "，" + _0x122f6c.process + "/" + _0x122f6c.dailyUserLimit);
                await wait(getRandomNumber(1, 2));
                await this.ad("10914000012");
                _0x122f6c.buttonInfo.linkUrl && (this.ttk = JSON.parse(Buffer.from(_0x122f6c.buttonInfo.linkUrl, "base64").toString("utf-8")).extParams);
                await wait(getRandomNumber(15, 20));
                await this.kgg();
                await wait(getRandomNumber(1, 2));
                if (!(this.aad == 9)) {
                  this.aad++;
                  await wait(getRandomNumber(1, 2));
                  await this.rwlb1();
                }
              }
              if (_0x122f6c.id == 6002 && _0x122f6c.taskStatus == 13) {
                for (let _0x46208d of _0x122f6c.popupInfo.stages) {
                  _0x46208d.status == 10 && (await wait(getRandomNumber(1, 2)), await this.qd(_0x46208d.stageIndex, _0x122f6c.popupInfo.taskId, _0x122f6c.popupInfo.taskToken));
                }
              }
            }
            for (let _0x4dc980 of _0x109a81.watchTubeTaskInfo.tasks) {
              if (_0x4dc980.id == 6004 && _0x4dc980.taskStatus == 13) {
                for (let _0xb3f42b of _0x4dc980.stages) {
                  if (_0xb3f42b.status == 13) {
                    await wait(getRandomNumber(1, 2));
                    await this.lqdjjl(_0xb3f42b.stageIndex, 6004, _0x4dc980.extParam.taskToken);
                    break;
                  }
                }
              }
            }
          } else {
            this.log("账号[" + this.num + "]：" + _0x2cd778.errorMsg);
          }
        } else {
          this.log("账号[" + this.num + "]：获取sig失败");
        }
      } else {
        this.log("账号[" + this.num + "]：获取aes加密失败");
      }
    } catch (_0x370669) {
      this.log("账号[" + this.num + "]", _0x370669);
    }
  }
  async rwlb1() {
    try {
      let _0x3bf9e2 = {
          appVersion: this.jm.appVersion,
          kpn: this.jm.kpn,
          channel: this.jm.channel,
          originChannel: this.jm.originChannel,
          protocolVersion: this.jm.protocolVersion,
          kwaiMerchantSdkVersion: this.jm.kwaiMerchantSdkVersion,
          SDKVersion: this.jm.SDKVersion,
          SDKVersionCode: this.jm.SDKVersionCode,
          sdkApiVersion: this.jm.sdkApiVersion,
          sdkApiVersionCode: this.jm.sdkApiVersionCode,
          sdkType: this.jm.sdkType,
          deviceInfo: this.jm.deviceInfo,
          clientFunction: this.jm.clientFunction,
          appInfo: this.jm.appInfo,
          tkVersion: this.jm.tkVersion,
          adSdkVersion: this.jm.adSdkVersion,
          networkInfo: this.jm.networkInfo,
          clientDynamicType: this.jm.clientDynamicType,
          abi: this.jm.abi,
          socName: this.jm.socName,
          boardPlatform: this.jm.boardPlatform,
          kGeoInfo: {},
          ext: {
            modeInfo: {
              cpuCount: this.jm.ext.modeInfo?.["cpuCount"] || "",
              cpuAbi: this.jm.ext.modeInfo?.["cpuAbi"] || "",
              batteryPercent: Math.round(randomInt(50, 100)),
              totalMemorySize: Math.round(randomInt(10702063104, 12702063104)),
              availableMemorySize: Math.round(randomInt(2211751424, 3211751424)),
              totalDiskSize: Math.round(randomInt(230089280512, 270089280512)),
              availableDiskSize: Math.round(randomInt(171774987264, 191774987264)),
              imsi: "",
              iccid: "",
              bootTime: Math.round(randomInt(7231, 16964)),
              romName: this.jm.ext.modeInfo?.["romName"] || "",
              romVersion: this.jm.ext.modeInfo?.["romVersion"] || "",
              romBuildTimestamp: this.jm.ext.modeInfo?.["romBuildTimestamp"] || "",
              ringerMode: 2,
              audioStreamInfo: this.jm.ext.modeInfo?.["audioStreamInfo"] || "",
              baseBandVersion: this.jm.ext.modeInfo?.["baseBandVersion"] || "",
              fingerPrint: this.jm.ext.modeInfo?.["fingerPrint"] || "",
              screenBrightness: -1,
              isCharging: false,
              chargeType: 0,
              simCardInfo: {
                phoneCount: 2,
                activePhoneCount: 0
              },
              environmentInfo: {
                isRoot: 2,
                isXPosed: 2,
                isFrameworkHooked: 2,
                isVirtual: 0,
                isAdbEnabled: 2,
                isEmulator: 2,
                isGroupControl: 2
              }
            }
          },
          appUserInfo: {
            userRecoBit: 1
          },
          timestamp: timestamp(13),
          inspireHomeParam: {
            widgetStatus: 1,
            pushPermissionStatus: 2
          }
        },
        _0x3d5850 = await this.ksaes(JSON.stringify(_0x3bf9e2));
      if (_0x3d5850) {
        let _0x3ff45c = {
            version: this.jm.SDKVersion,
            appVersion: this.jm.appVersion,
            appId: "1091400011",
            message: _0x3d5850
          },
          _0x44cc1c = "https://tube.e.kuaishou.com/rest/e/tube/inspire/home",
          _0x527331 = await this.sig(_0x44cc1c, _0x3ff45c, "sig3");
        if (_0x527331) {
          this.headers["Ks-Sig3"] = _0x527331;
          let _0x104aaf = await this.task("post", _0x44cc1c, this.headers, JSON.stringify(_0x3ff45c));
          if (_0x104aaf.result == 1) {
            let _0x40961e = JSON.parse(gzipde(AESECB(1, _0x104aaf.data, "GWL8jXHLnzp63QDH")));
            for (let _0x233172 of _0x40961e.dailyTaskInfo.tasks) {
              if (_0x233172.id == 6005 && _0x233172.taskStatus == 10) {
                this.log("账号[" + this.num + "]：" + _0x233172.title + "：" + _0x233172.subtitle);
                await wait(getRandomNumber(1, 2));
                await this.ad("10914000012");
                _0x233172.buttonInfo.linkUrl && (this.ttk = JSON.parse(Buffer.from(_0x233172.buttonInfo.linkUrl, "base64").toString("utf-8")).extParams);
                await wait(getRandomNumber(15, 20));
                await this.kgg();
                await wait(getRandomNumber(1, 2));
                if (!(this.aad == 9)) {
                  this.aad++;
                  await wait(getRandomNumber(1, 2));
                  await this.rwlb1();
                }
              }
            }
          } else {
            this.log("账号[" + this.num + "]：" + _0x104aaf.errorMsg);
          }
        } else {
          this.log("账号[" + this.num + "]：获取sig失败");
        }
      } else {
        this.log("账号[" + this.num + "]：获取aes加密失败");
      }
    } catch (_0x74d4d2) {
      this.log("账号[" + this.num + "]", _0x74d4d2);
    }
  }
  async txlb() {
    try {
      let _0x365d6a = {
          appVersion: this.jm.appVersion,
          kpn: this.jm.kpn,
          channel: this.jm.channel,
          originChannel: this.jm.originChannel,
          protocolVersion: this.jm.protocolVersion,
          kwaiMerchantSdkVersion: this.jm.kwaiMerchantSdkVersion,
          SDKVersion: this.jm.SDKVersion,
          SDKVersionCode: this.jm.SDKVersionCode,
          sdkApiVersion: this.jm.sdkApiVersion,
          sdkApiVersionCode: this.jm.sdkApiVersionCode,
          sdkType: this.jm.sdkType,
          deviceInfo: this.jm.deviceInfo,
          clientFunction: this.jm.clientFunction,
          appInfo: this.jm.appInfo,
          tkVersion: this.jm.tkVersion,
          adSdkVersion: this.jm.adSdkVersion,
          networkInfo: this.jm.networkInfo,
          clientDynamicType: this.jm.clientDynamicType,
          abi: this.jm.abi,
          socName: this.jm.socName,
          boardPlatform: this.jm.boardPlatform,
          kGeoInfo: {},
          ext: {
            modeInfo: {
              cpuCount: this.jm.ext.modeInfo?.["cpuCount"] || "",
              cpuAbi: this.jm.ext.modeInfo?.["cpuAbi"] || "",
              batteryPercent: Math.round(randomInt(50, 100)),
              totalMemorySize: Math.round(randomInt(10702063104, 12702063104)),
              availableMemorySize: Math.round(randomInt(2211751424, 3211751424)),
              totalDiskSize: Math.round(randomInt(230089280512, 270089280512)),
              availableDiskSize: Math.round(randomInt(171774987264, 191774987264)),
              imsi: "",
              iccid: "",
              bootTime: Math.round(randomInt(7231, 16964)),
              romName: this.jm.ext.modeInfo?.["romName"] || "",
              romVersion: this.jm.ext.modeInfo?.["romVersion"] || "",
              romBuildTimestamp: this.jm.ext.modeInfo?.["romBuildTimestamp"] || "",
              ringerMode: 2,
              audioStreamInfo: this.jm.ext.modeInfo?.["audioStreamInfo"] || "",
              baseBandVersion: this.jm.ext.modeInfo?.["baseBandVersion"] || "",
              fingerPrint: this.jm.ext.modeInfo?.["fingerPrint"] || "",
              screenBrightness: -1,
              isCharging: false,
              chargeType: 0,
              simCardInfo: {
                phoneCount: 2,
                activePhoneCount: 0
              },
              environmentInfo: {
                isRoot: 2,
                isXPosed: 2,
                isFrameworkHooked: 2,
                isVirtual: 0,
                isAdbEnabled: 2,
                isEmulator: 2,
                isGroupControl: 2
              }
            }
          },
          appUserInfo: {
            userRecoBit: 1
          },
          timestamp: timestamp(13)
        },
        _0x19a2c7 = await this.ksaes(JSON.stringify(_0x365d6a));
      if (_0x19a2c7) {
        let _0x4b6baa = {
            version: this.jm.SDKVersion,
            appVersion: this.jm.appVersion,
            appId: "1091400011",
            message: _0x19a2c7
          },
          _0xe62f60 = "https://tube.e.kuaishou.com/rest/e/tube/inspire/account/withdraw/info",
          _0x177594 = await this.sig(_0xe62f60, _0x4b6baa, "sig3");
        if (_0x177594) {
          this.headers["Ks-Sig3"] = _0x177594;
          let _0x223c5d = await this.task("post", _0xe62f60, this.headers, JSON.stringify(_0x4b6baa));
          if (_0x223c5d.result == 1) {
            let _0xc471fa = JSON.parse(gzipde(AESECB(1, _0x223c5d.data, "GWL8jXHLnzp63QDH")));
            if (_0xc471fa.withdrawInfo.disableAnchor == false) {
              for (let _0x2aeda8 of _0xc471fa.withdrawInfo.withdrawSteps) {
                _0x2aeda8.cashAmountDisplay == this.txje && _0x2aeda8.status == 1 && (this.biz = _0x2aeda8.bizContent, await wait(getRandomNumber(1, 2)), await this.txfxjc(), await wait(getRandomNumber(1, 2)), await this.txks());
              }
            }
          } else {
            this.log("账号[" + this.num + "]：" + _0x223c5d.errorMsg);
          }
        } else {
          this.log("账号[" + this.num + "]：获取sig失败");
        }
      } else {
        this.log("账号[" + this.num + "]：获取aes加密失败");
      }
    } catch (_0x458d04) {
      this.log("账号[" + this.num + "]", _0x458d04);
    }
  }
  async txfxjc() {
    try {
      let _0x3933b0 = {
          appVersion: this.jm.appVersion,
          kpn: this.jm.kpn,
          channel: this.jm.channel,
          originChannel: this.jm.originChannel,
          protocolVersion: this.jm.protocolVersion,
          kwaiMerchantSdkVersion: this.jm.kwaiMerchantSdkVersion,
          SDKVersion: this.jm.SDKVersion,
          SDKVersionCode: this.jm.SDKVersionCode,
          sdkApiVersion: this.jm.sdkApiVersion,
          sdkApiVersionCode: this.jm.sdkApiVersionCode,
          sdkType: this.jm.sdkType,
          deviceInfo: this.jm.deviceInfo,
          clientFunction: this.jm.clientFunction,
          appInfo: this.jm.appInfo,
          tkVersion: this.jm.tkVersion,
          adSdkVersion: this.jm.adSdkVersion,
          networkInfo: this.jm.networkInfo,
          clientDynamicType: this.jm.clientDynamicType,
          abi: this.jm.abi,
          socName: this.jm.socName,
          boardPlatform: this.jm.boardPlatform,
          kGeoInfo: {},
          ext: {
            modeInfo: {
              cpuCount: this.jm.ext.modeInfo?.["cpuCount"] || "",
              cpuAbi: this.jm.ext.modeInfo?.["cpuAbi"] || "",
              batteryPercent: Math.round(randomInt(50, 100)),
              totalMemorySize: Math.round(randomInt(10702063104, 12702063104)),
              availableMemorySize: Math.round(randomInt(2211751424, 3211751424)),
              totalDiskSize: Math.round(randomInt(230089280512, 270089280512)),
              availableDiskSize: Math.round(randomInt(171774987264, 191774987264)),
              imsi: "",
              iccid: "",
              bootTime: Math.round(randomInt(7231, 16964)),
              romName: this.jm.ext.modeInfo?.["romName"] || "",
              romVersion: this.jm.ext.modeInfo?.["romVersion"] || "",
              romBuildTimestamp: this.jm.ext.modeInfo?.["romBuildTimestamp"] || "",
              ringerMode: 2,
              audioStreamInfo: this.jm.ext.modeInfo?.["audioStreamInfo"] || "",
              baseBandVersion: this.jm.ext.modeInfo?.["baseBandVersion"] || "",
              fingerPrint: this.jm.ext.modeInfo?.["fingerPrint"] || "",
              screenBrightness: -1,
              isCharging: false,
              chargeType: 0,
              simCardInfo: {
                phoneCount: 2,
                activePhoneCount: 0
              },
              environmentInfo: {
                isRoot: 2,
                isXPosed: 2,
                isFrameworkHooked: 2,
                isVirtual: 0,
                isAdbEnabled: 2,
                isEmulator: 2,
                isGroupControl: 2
              }
            }
          },
          appUserInfo: {
            userRecoBit: 1
          },
          timestamp: timestamp(13)
        },
        _0x382364 = await this.ksaes(JSON.stringify(_0x3933b0));
      this.bxsj = timestamp(13);
      if (_0x382364) {
        let _0x34ad61 = {
            version: this.jm.SDKVersion,
            appVersion: this.jm.appVersion,
            appId: "1091400011",
            message: _0x382364
          },
          _0x3e434d = "https://tube.e.kuaishou.com/rest/e/tube/inspire/account/withdraw/shareDialog",
          _0x256d0c = await this.sig(_0x3e434d, _0x34ad61, "sig3");
        if (_0x256d0c) {
          this.headers["Ks-Sig3"] = _0x256d0c;
          let _0x32d52a = await this.task("post", _0x3e434d, this.headers, JSON.stringify(_0x34ad61));
          if (_0x32d52a.result == 1) {
            let _0x1e2818 = JSON.parse(gzipde(AESECB(1, _0x32d52a.data, "GWL8jXHLnzp63QDH")));
            _0x1e2818.taskStatus == 10 && (await wait(getRandomNumber(2, 3)), await this.txfx(_0x1e2818.taskId));
          } else {
            this.log("账号[" + this.num + "]：" + _0x32d52a.errorMsg);
          }
        } else {
          this.log("账号[" + this.num + "]：获取sig失败");
        }
      } else {
        this.log("账号[" + this.num + "]：获取aes加密失败");
      }
    } catch (_0x5dec17) {
      this.log("账号[" + this.num + "]", _0x5dec17);
    }
  }
  async txfx(_0x2aeffe) {
    try {
      let _0x5ac486 = {
          appVersion: this.jm.appVersion,
          kpn: this.jm.kpn,
          channel: this.jm.channel,
          originChannel: this.jm.originChannel,
          protocolVersion: this.jm.protocolVersion,
          kwaiMerchantSdkVersion: this.jm.kwaiMerchantSdkVersion,
          SDKVersion: this.jm.SDKVersion,
          SDKVersionCode: this.jm.SDKVersionCode,
          sdkApiVersion: this.jm.sdkApiVersion,
          sdkApiVersionCode: this.jm.sdkApiVersionCode,
          sdkType: this.jm.sdkType,
          deviceInfo: this.jm.deviceInfo,
          clientFunction: this.jm.clientFunction,
          appInfo: this.jm.appInfo,
          tkVersion: this.jm.tkVersion,
          adSdkVersion: this.jm.adSdkVersion,
          networkInfo: this.jm.networkInfo,
          clientDynamicType: this.jm.clientDynamicType,
          abi: this.jm.abi,
          socName: this.jm.socName,
          boardPlatform: this.jm.boardPlatform,
          kGeoInfo: {},
          ext: {
            modeInfo: {
              cpuCount: this.jm.ext.modeInfo?.["cpuCount"] || "",
              cpuAbi: this.jm.ext.modeInfo?.["cpuAbi"] || "",
              batteryPercent: Math.round(randomInt(50, 100)),
              totalMemorySize: Math.round(randomInt(10702063104, 12702063104)),
              availableMemorySize: Math.round(randomInt(2211751424, 3211751424)),
              totalDiskSize: Math.round(randomInt(230089280512, 270089280512)),
              availableDiskSize: Math.round(randomInt(171774987264, 191774987264)),
              imsi: "",
              iccid: "",
              bootTime: Math.round(randomInt(7231, 16964)),
              romName: this.jm.ext.modeInfo?.["romName"] || "",
              romVersion: this.jm.ext.modeInfo?.["romVersion"] || "",
              romBuildTimestamp: this.jm.ext.modeInfo?.["romBuildTimestamp"] || "",
              ringerMode: 2,
              audioStreamInfo: this.jm.ext.modeInfo?.["audioStreamInfo"] || "",
              baseBandVersion: this.jm.ext.modeInfo?.["baseBandVersion"] || "",
              fingerPrint: this.jm.ext.modeInfo?.["fingerPrint"] || "",
              screenBrightness: -1,
              isCharging: false,
              chargeType: 0,
              simCardInfo: {
                phoneCount: 2,
                activePhoneCount: 0
              },
              environmentInfo: {
                isRoot: 2,
                isXPosed: 2,
                isFrameworkHooked: 2,
                isVirtual: 0,
                isAdbEnabled: 2,
                isEmulator: 2,
                isGroupControl: 2
              }
            }
          },
          appUserInfo: {
            userRecoBit: 1
          },
          timestamp: timestamp(13),
          inspireTaskReportParam: {
            neoInfos: [{
              idempotentId: "0"
            }],
            taskId: _0x2aeffe
          }
        },
        _0xe8dfaf = await this.ksaes(JSON.stringify(_0x5ac486));
      if (_0xe8dfaf) {
        let _0xccae0d = {
            version: this.jm.SDKVersion,
            appVersion: this.jm.appVersion,
            appId: "1091400011",
            message: _0xe8dfaf
          },
          _0x2d7ac0 = "https://tube.e.kuaishou.com/rest/e/tube/inspire/task/report",
          _0x63cab8 = await this.sig(_0x2d7ac0, _0xccae0d, "sig3");
        if (_0x63cab8) {
          this.headers["Ks-Sig3"] = _0x63cab8;
          let _0x5c7961 = await this.task("post", _0x2d7ac0, this.headers, JSON.stringify(_0xccae0d));
          if (_0x5c7961.result == 1) {
            this.log("账号[" + this.num + "]：提现分享成功");
          } else {
            this.log("账号[" + this.num + "]：" + _0x5c7961.errorMsg);
          }
        } else {
          this.log("账号[" + this.num + "]：获取sig失败");
        }
      } else {
        this.log("账号[" + this.num + "]：获取aes加密失败");
      }
    } catch (_0x2d93d9) {
      this.log("账号[" + this.num + "]", _0x2d93d9);
    }
  }
  async ad(_0x130aeb) {
    try {
      let _0x424a74 = {
          appVersion: this.jm.appVersion,
          kpn: this.jm.kpn,
          channel: this.jm.channel,
          originChannel: this.jm.originChannel,
          protocolVersion: this.jm.protocolVersion,
          kwaiMerchantSdkVersion: this.jm.kwaiMerchantSdkVersion,
          SDKVersion: this.jm.SDKVersion,
          SDKVersionCode: this.jm.SDKVersionCode,
          sdkApiVersion: this.jm.sdkApiVersion,
          sdkApiVersionCode: this.jm.sdkApiVersionCode,
          sdkType: this.jm.sdkType,
          deviceInfo: this.jm.deviceInfo,
          clientFunction: this.jm.clientFunction,
          appInfo: this.jm.appInfo,
          tkVersion: this.jm.tkVersion,
          adSdkVersion: this.jm.adSdkVersion,
          networkInfo: this.jm.networkInfo,
          clientDynamicType: this.jm.clientDynamicType,
          abi: this.jm.abi,
          socName: this.jm.socName,
          boardPlatform: this.jm.boardPlatform,
          kGeoInfo: {},
          ext: {
            modeInfo: {
              cpuCount: this.jm.ext.modeInfo?.["cpuCount"] || "",
              cpuAbi: this.jm.ext.modeInfo?.["cpuAbi"] || "",
              batteryPercent: Math.round(randomInt(50, 100)),
              totalMemorySize: Math.round(randomInt(10702063104, 12702063104)),
              availableMemorySize: Math.round(randomInt(2211751424, 3211751424)),
              totalDiskSize: Math.round(randomInt(230089280512, 270089280512)),
              availableDiskSize: Math.round(randomInt(171774987264, 191774987264)),
              imsi: "",
              iccid: "",
              bootTime: Math.round(randomInt(7231, 16964)),
              romName: this.jm.ext.modeInfo?.["romName"] || "",
              romVersion: this.jm.ext.modeInfo?.["romVersion"] || "",
              romBuildTimestamp: this.jm.ext.modeInfo?.["romBuildTimestamp"] || "",
              ringerMode: 2,
              audioStreamInfo: this.jm.ext.modeInfo?.["audioStreamInfo"] || "",
              baseBandVersion: this.jm.ext.modeInfo?.["baseBandVersion"] || "",
              fingerPrint: this.jm.ext.modeInfo?.["fingerPrint"] || "",
              screenBrightness: -1,
              isCharging: false,
              chargeType: 0,
              simCardInfo: {
                phoneCount: 2,
                activePhoneCount: 0
              },
              environmentInfo: {
                isRoot: 2,
                isXPosed: 2,
                isFrameworkHooked: 2,
                isVirtual: 0,
                isAdbEnabled: 2,
                isEmulator: 2,
                isGroupControl: 2
              },
              sensorEventInfoList: [{
                sensorType: 1,
                timestamp: timestamp(10),
                values: [-1 * randomInt(0.810846489946, 0.850846489946), randomInt(4.372384834289551, 4.772384834289551), randomInt(8.35056182861328, 8.40056182861328)]
              }]
            }
          },
          appUserInfo: {
            userRecoBit: 1
          },
          timestamp: timestamp(13),
          adParam: {
            adNum: 1,
            inspireAdSource: _0x130aeb
          }
        },
        _0xb4bbb5 = await this.ksaes(JSON.stringify(_0x424a74));
      this.bxsj = timestamp(13);
      if (_0xb4bbb5) {
        let _0x4e53b2 = {
            version: this.jm.SDKVersion,
            appVersion: this.jm.appVersion,
            appId: "1091400011",
            message: _0xb4bbb5
          },
          _0x241e53 = "https://tube.e.kuaishou.com/rest/e/tube/app/ad/inspire",
          _0x3fdd4a = await this.sig(_0x241e53, _0x4e53b2, "sig1");
        if (_0x3fdd4a) {
          this.headers["Ks-Sig1"] = _0x3fdd4a;
          let _0x454fd6 = await this.task("post", _0x241e53, this.headers, JSON.stringify(_0x4e53b2));
          if (_0x454fd6.result == 1) {
            if (_0x454fd6.data) {
              let _0x5c13fd = JSONbig.parse(gzipde(AESECB(1, _0x454fd6.data, "GWL8jXHLnzp63QDH")));
              this.log("账号[" + this.num + "]：获取广告 id 成功");
              this.llsid = _0x5c13fd.adBaseInfo.llsid;
              this.adid = _0x5c13fd.adBaseInfo.creativeId;
              this.pid = _0x5c13fd.adBaseInfo.photoId;
            } else {
              this.log("账号[" + this.num + "]：获取广告 id 失败");
              this.pid = Math.round(randomInt(154474819517, 154474819817));
              this.llsid = Math.round(randomInt(2004196145988140800, 2004196145988541000));
              this.adid = Math.round(randomInt(96465654083, 96465654383));
            }
          } else {
            this.log("账号[" + this.num + "]：" + _0x454fd6.errorMsg);
          }
        } else {
          this.log("账号[" + this.num + "]：获取sig失败");
        }
      } else {
        this.log("账号[" + this.num + "]：获取aes加密失败");
      }
    } catch (_0x2375f9) {
      this.log("账号[" + this.num + "]", _0x2375f9);
    }
  }
  async kgg() {
    try {
      let _0x33e2e4 = {
          appVersion: this.jm.appVersion,
          kpn: this.jm.kpn,
          channel: this.jm.channel,
          originChannel: this.jm.originChannel,
          protocolVersion: this.jm.protocolVersion,
          kwaiMerchantSdkVersion: this.jm.kwaiMerchantSdkVersion,
          SDKVersion: this.jm.SDKVersion,
          SDKVersionCode: this.jm.SDKVersionCode,
          sdkApiVersion: this.jm.sdkApiVersion,
          sdkApiVersionCode: this.jm.sdkApiVersionCode,
          sdkType: this.jm.sdkType,
          deviceInfo: this.jm.deviceInfo,
          clientFunction: this.jm.clientFunction,
          appInfo: this.jm.appInfo,
          tkVersion: this.jm.tkVersion,
          adSdkVersion: this.jm.adSdkVersion,
          networkInfo: this.jm.networkInfo,
          clientDynamicType: this.jm.clientDynamicType,
          abi: this.jm.abi,
          socName: this.jm.socName,
          boardPlatform: this.jm.boardPlatform,
          kGeoInfo: {},
          ext: {
            modeInfo: {
              cpuCount: this.jm.ext.modeInfo?.["cpuCount"] || "",
              cpuAbi: this.jm.ext.modeInfo?.["cpuAbi"] || "",
              batteryPercent: Math.round(randomInt(50, 100)),
              totalMemorySize: Math.round(randomInt(10702063104, 12702063104)),
              availableMemorySize: Math.round(randomInt(2211751424, 3211751424)),
              totalDiskSize: Math.round(randomInt(230089280512, 270089280512)),
              availableDiskSize: Math.round(randomInt(171774987264, 191774987264)),
              imsi: "",
              iccid: "",
              bootTime: Math.round(randomInt(7231, 16964)),
              romName: this.jm.ext.modeInfo?.["romName"] || "",
              romVersion: this.jm.ext.modeInfo?.["romVersion"] || "",
              romBuildTimestamp: this.jm.ext.modeInfo?.["romBuildTimestamp"] || "",
              ringerMode: 2,
              audioStreamInfo: this.jm.ext.modeInfo?.["audioStreamInfo"] || "",
              baseBandVersion: this.jm.ext.modeInfo?.["baseBandVersion"] || "",
              fingerPrint: this.jm.ext.modeInfo?.["fingerPrint"] || "",
              screenBrightness: -1,
              isCharging: false,
              chargeType: 0,
              simCardInfo: {
                phoneCount: 2,
                activePhoneCount: 0
              },
              environmentInfo: {
                isRoot: 2,
                isXPosed: 2,
                isFrameworkHooked: 2,
                isVirtual: 0,
                isAdbEnabled: 2,
                isEmulator: 2,
                isGroupControl: 2
              },
              sensorEventInfoList: [{
                sensorType: 1,
                timestamp: timestamp(10),
                values: [randomInt(0.8677372145652771, 0.8977372145652771), randomInt(4.020390605926514, 4.370390605926514), randomInt(8.527521896362305, 8.927521896362306)]
              }, {
                sensorType: 4,
                timestamp: timestamp(10),
                values: [randomInt(0.03578991305828094, 0.04178991305828095), -1 * randomInt(0.10087486684322357, 0.15087486684322357), -1 * randomInt(-0.011838415414094925, 0.12183841541409493)]
              }, {
                sensorType: 9,
                timestamp: timestamp(10),
                values: [randomInt(0.40329672932624816, 0.4332967293262482), randomInt(3.8631939697265625, 3.8931939697265623), randomInt(8.895574951171875, 9.005574951171875)]
              }]
            }
          },
          appUserInfo: {
            userRecoBit: 1
          },
          timestamp: timestamp(13),
          inspireTaskReportParam: {
            neoInfos: [{
              taskType: 1,
              extParam: {
                llsid: this.llsid,
                creativeId: this.adid,
                taskToken: this.ttk || ""
              },
              idempotentId: this.pid
            }],
            ecpm: randomInt(30000, 50000),
            posId: 10914000012,
            taskId: 6005
          }
        },
        _0x1de334 = await this.ksaes(JSON.stringify(_0x33e2e4));
      if (_0x1de334) {
        let _0x2853fe = {
            version: this.jm.SDKVersion,
            appVersion: this.jm.appVersion,
            appId: "1091400011",
            message: _0x1de334
          },
          _0x5c5829 = "https://tube.e.kuaishou.com/rest/e/tube/inspire/task/report",
          _0x5ed2e7 = await this.sig(_0x5c5829, _0x2853fe, "sig3");
        if (_0x5ed2e7) {
          this.headers["Ks-Sig3"] = _0x5ed2e7;
          let _0x2a545a = await this.task("post", _0x5c5829, this.headers, JSON.stringify(_0x2853fe));
          if (_0x2a545a.result == 1) {
            let _0x4fb92d = JSON.parse(gzipde(AESECB(1, _0x2a545a.data, "GWL8jXHLnzp63QDH")));
            this.log("账号[" + this.num + "]：" + _0x4fb92d.toast);
          } else {
            this.log("账号[" + this.num + "]：" + _0x2a545a.errorMsg);
          }
        } else {
          this.log("账号[" + this.num + "]：获取sig失败");
        }
      } else {
        this.log("账号[" + this.num + "]：获取aes加密失败");
      }
    } catch (_0x2b416b) {
      this.log("账号[" + this.num + "]", _0x2b416b);
    }
  }
  async cxbx() {
    try {
      let _0x2638a3 = {
          appVersion: this.jm.appVersion,
          kpn: this.jm.kpn,
          channel: this.jm.channel,
          originChannel: this.jm.originChannel,
          protocolVersion: this.jm.protocolVersion,
          kwaiMerchantSdkVersion: this.jm.kwaiMerchantSdkVersion,
          SDKVersion: this.jm.SDKVersion,
          SDKVersionCode: this.jm.SDKVersionCode,
          sdkApiVersion: this.jm.sdkApiVersion,
          sdkApiVersionCode: this.jm.sdkApiVersionCode,
          sdkType: this.jm.sdkType,
          deviceInfo: this.jm.deviceInfo,
          clientFunction: this.jm.clientFunction,
          appInfo: this.jm.appInfo,
          tkVersion: this.jm.tkVersion,
          adSdkVersion: this.jm.adSdkVersion,
          networkInfo: this.jm.networkInfo,
          clientDynamicType: this.jm.clientDynamicType,
          abi: this.jm.abi,
          socName: this.jm.socName,
          boardPlatform: this.jm.boardPlatform,
          kGeoInfo: {},
          ext: {
            modeInfo: {
              cpuCount: this.jm.ext.modeInfo?.["cpuCount"] || "",
              cpuAbi: this.jm.ext.modeInfo?.["cpuAbi"] || "",
              batteryPercent: Math.round(randomInt(50, 100)),
              totalMemorySize: Math.round(randomInt(10702063104, 12702063104)),
              availableMemorySize: Math.round(randomInt(2211751424, 3211751424)),
              totalDiskSize: Math.round(randomInt(230089280512, 270089280512)),
              availableDiskSize: Math.round(randomInt(171774987264, 191774987264)),
              imsi: "",
              iccid: "",
              bootTime: Math.round(randomInt(7231, 16964)),
              romName: this.jm.ext.modeInfo?.["romName"] || "",
              romVersion: this.jm.ext.modeInfo?.["romVersion"] || "",
              romBuildTimestamp: this.jm.ext.modeInfo?.["romBuildTimestamp"] || "",
              ringerMode: 2,
              audioStreamInfo: this.jm.ext.modeInfo?.["audioStreamInfo"] || "",
              baseBandVersion: this.jm.ext.modeInfo?.["baseBandVersion"] || "",
              fingerPrint: this.jm.ext.modeInfo?.["fingerPrint"] || "",
              screenBrightness: -1,
              isCharging: false,
              chargeType: 0,
              simCardInfo: {
                phoneCount: 2,
                activePhoneCount: 0
              },
              environmentInfo: {
                isRoot: 2,
                isXPosed: 2,
                isFrameworkHooked: 2,
                isVirtual: 0,
                isAdbEnabled: 2,
                isEmulator: 2,
                isGroupControl: 2
              }
            }
          },
          appUserInfo: {
            userRecoBit: 1
          },
          timestamp: timestamp(13)
        },
        _0x44fb36 = await this.ksaes(JSON.stringify(_0x2638a3));
      if (_0x44fb36) {
        let _0x29bc65 = {
            version: this.jm.SDKVersion,
            appVersion: this.jm.appVersion,
            appId: "1091400011",
            message: _0x44fb36
          },
          _0x2bfa0c = "https://tube.e.kuaishou.com/rest/e/tube/inspire/treasureBox",
          _0x5c0514 = await this.sig(_0x2bfa0c, _0x29bc65, "sig3");
        if (_0x5c0514) {
          this.headers["Ks-Sig3"] = _0x5c0514;
          let _0x58af7a = await this.task("post", _0x2bfa0c, this.headers, JSON.stringify(_0x29bc65));
          if (_0x58af7a.result == 1) {
            let _0x2a76a4 = JSON.parse(gzipde(AESECB(1, _0x58af7a.data, "GWL8jXHLnzp63QDH")));
            if (_0x2a76a4.status == 13) {
              for (let _0x47b22e of _0x2a76a4.popupInfo.stages) {
                _0x47b22e.status == 13 && (await wait(getRandomNumber(1, 2)), await this.kbx(_0x47b22e.stageIndex, _0x2a76a4.popupInfo.taskId, _0x2a76a4.popupInfo.taskToken));
              }
            } else {
              if (_0x2a76a4.status == 10) {
                let _0x43c9ca = _0x2a76a4.countdown / 1000;
                this.log("账号[" + this.num + "]：宝箱还需等待" + cfz(_0x2a76a4.countdown / 1000).minutes + "分" + (cfz(_0x2a76a4.countdown / 1000).remainingSeconds | 0) + "秒");
                if (_0x2a76a4.countdown > 600000) {
                  if (_0x2a76a4.popupInfo.buttonInfo && _0x2a76a4.popupInfo.buttonInfo.linkType == 4) {
                    let _0x536934 = JSON.parse(Buffer.from(_0x2a76a4.popupInfo.buttonInfo.linkUrl, "base64").toString("utf-8"));
                    await wait(getRandomNumber(1, 2));
                    await this.ad("10914000035");
                    await wait(getRandomNumber(15, 20));
                    await this.bxgg(_0x536934);
                  } else {
                    _0x43c9ca <= 180 && (await wait(_0x43c9ca), await wait(getRandomNumber(1, 2)), await this.cxbx());
                  }
                } else {
                  _0x43c9ca <= 180 && (await wait(_0x43c9ca), await wait(getRandomNumber(1, 2)), await this.cxbx());
                }
              }
            }
          } else {
            this.log("账号[" + this.num + "]：" + _0x58af7a.errorMsg);
          }
        } else {
          this.log("账号[" + this.num + "]：获取sig失败");
        }
      } else {
        this.log("账号[" + this.num + "]：获取aes加密失败");
      }
    } catch (_0x153286) {
      this.log("账号[" + this.num + "]", _0x153286);
    }
  }
  async djcx() {
    try {
      let _0x38f425 = {
          appVersion: this.jm.appVersion,
          kpn: this.jm.kpn,
          channel: this.jm.channel,
          originChannel: this.jm.originChannel,
          protocolVersion: this.jm.protocolVersion,
          kwaiMerchantSdkVersion: this.jm.kwaiMerchantSdkVersion,
          SDKVersion: this.jm.SDKVersion,
          SDKVersionCode: this.jm.SDKVersionCode,
          sdkApiVersion: this.jm.sdkApiVersion,
          sdkApiVersionCode: this.jm.sdkApiVersionCode,
          sdkType: this.jm.sdkType,
          deviceInfo: this.jm.deviceInfo,
          clientFunction: this.jm.clientFunction,
          appInfo: this.jm.appInfo,
          tkVersion: this.jm.tkVersion,
          adSdkVersion: this.jm.adSdkVersion,
          networkInfo: this.jm.networkInfo,
          clientDynamicType: this.jm.clientDynamicType,
          abi: this.jm.abi,
          socName: this.jm.socName,
          boardPlatform: this.jm.boardPlatform,
          kGeoInfo: {},
          ext: {
            modeInfo: {
              cpuCount: this.jm.ext.modeInfo?.["cpuCount"] || "",
              cpuAbi: this.jm.ext.modeInfo?.["cpuAbi"] || "",
              batteryPercent: Math.round(randomInt(50, 100)),
              totalMemorySize: Math.round(randomInt(10702063104, 12702063104)),
              availableMemorySize: Math.round(randomInt(2211751424, 3211751424)),
              totalDiskSize: Math.round(randomInt(230089280512, 270089280512)),
              availableDiskSize: Math.round(randomInt(171774987264, 191774987264)),
              imsi: "",
              iccid: "",
              bootTime: Math.round(randomInt(7231, 16964)),
              romName: this.jm.ext.modeInfo?.["romName"] || "",
              romVersion: this.jm.ext.modeInfo?.["romVersion"] || "",
              romBuildTimestamp: this.jm.ext.modeInfo?.["romBuildTimestamp"] || "",
              ringerMode: 2,
              audioStreamInfo: this.jm.ext.modeInfo?.["audioStreamInfo"] || "",
              baseBandVersion: this.jm.ext.modeInfo?.["baseBandVersion"] || "",
              fingerPrint: this.jm.ext.modeInfo?.["fingerPrint"] || "",
              screenBrightness: -1,
              isCharging: false,
              chargeType: 0,
              simCardInfo: {
                phoneCount: 2,
                activePhoneCount: 0
              },
              environmentInfo: {
                isRoot: 2,
                isXPosed: 2,
                isFrameworkHooked: 2,
                isVirtual: 0,
                isAdbEnabled: 2,
                isEmulator: 2,
                isGroupControl: 2
              }
            }
          },
          appUserInfo: {
            userRecoBit: 1
          },
          timestamp: timestamp(13),
          inspirePendantTaskParam: {
            feedId: "26307623"
          }
        },
        _0x4bcbde = await this.ksaes(JSON.stringify(_0x38f425));
      if (_0x4bcbde) {
        let _0xe13a72 = {
            version: this.jm.SDKVersion,
            appVersion: this.jm.appVersion,
            appId: "1091400011",
            message: _0x4bcbde
          },
          _0x4b9b37 = "https://tube.e.kuaishou.com/rest/e/tube/inspire/pendant/info",
          _0x293cb4 = await this.sig(_0x4b9b37, _0xe13a72, "sig3");
        if (_0x293cb4) {
          this.headers["Ks-Sig3"] = _0x293cb4;
          let _0x2bb908 = await this.task("post", _0x4b9b37, this.headers, JSON.stringify(_0xe13a72));
          if (_0x2bb908.result == 1) {
            let _0x3884e4 = JSON.parse(gzipde(AESECB(1, _0x2bb908.data, "GWL8jXHLnzp63QDH")));
            if (_0x3884e4.taskStatus == 13 || _0x3884e4.taskStatus == 10) {
              for (let _0xa2b5f3 = 0; _0xa2b5f3 < 20; _0xa2b5f3++) {
                await wait(30);
                await this.kdj();
              }
            }
          } else {
            this.log("账号[" + this.num + "]：" + _0x2bb908.errorMsg);
          }
        } else {
          this.log("账号[" + this.num + "]：获取sig失败");
        }
      } else {
        this.log("账号[" + this.num + "]：获取aes加密失败");
      }
    } catch (_0xe7ff55) {
      this.log("账号[" + this.num + "]", _0xe7ff55);
    }
  }
  async cjcx() {
    try {
      let _0x1b4434 = {
          appVersion: this.jm.appVersion,
          kpn: this.jm.kpn,
          channel: this.jm.channel,
          originChannel: this.jm.originChannel,
          protocolVersion: this.jm.protocolVersion,
          kwaiMerchantSdkVersion: this.jm.kwaiMerchantSdkVersion,
          SDKVersion: this.jm.SDKVersion,
          SDKVersionCode: this.jm.SDKVersionCode,
          sdkApiVersion: this.jm.sdkApiVersion,
          sdkApiVersionCode: this.jm.sdkApiVersionCode,
          sdkType: this.jm.sdkType,
          deviceInfo: this.jm.deviceInfo,
          clientFunction: this.jm.clientFunction,
          appInfo: this.jm.appInfo,
          tkVersion: this.jm.tkVersion,
          adSdkVersion: this.jm.adSdkVersion,
          networkInfo: this.jm.networkInfo,
          clientDynamicType: this.jm.clientDynamicType,
          abi: this.jm.abi,
          socName: this.jm.socName,
          boardPlatform: this.jm.boardPlatform,
          kGeoInfo: {},
          ext: {
            modeInfo: {
              cpuCount: this.jm.ext.modeInfo?.["cpuCount"] || "",
              cpuAbi: this.jm.ext.modeInfo?.["cpuAbi"] || "",
              batteryPercent: Math.round(randomInt(50, 100)),
              totalMemorySize: Math.round(randomInt(10702063104, 12702063104)),
              availableMemorySize: Math.round(randomInt(2211751424, 3211751424)),
              totalDiskSize: Math.round(randomInt(230089280512, 270089280512)),
              availableDiskSize: Math.round(randomInt(171774987264, 191774987264)),
              imsi: "",
              iccid: "",
              bootTime: Math.round(randomInt(7231, 16964)),
              romName: this.jm.ext.modeInfo?.["romName"] || "",
              romVersion: this.jm.ext.modeInfo?.["romVersion"] || "",
              romBuildTimestamp: this.jm.ext.modeInfo?.["romBuildTimestamp"] || "",
              ringerMode: 2,
              audioStreamInfo: this.jm.ext.modeInfo?.["audioStreamInfo"] || "",
              baseBandVersion: this.jm.ext.modeInfo?.["baseBandVersion"] || "",
              fingerPrint: this.jm.ext.modeInfo?.["fingerPrint"] || "",
              screenBrightness: -1,
              isCharging: false,
              chargeType: 0,
              simCardInfo: {
                phoneCount: 2,
                activePhoneCount: 0
              },
              environmentInfo: {
                isRoot: 2,
                isXPosed: 2,
                isFrameworkHooked: 2,
                isVirtual: 0,
                isAdbEnabled: 2,
                isEmulator: 2,
                isGroupControl: 2
              }
            }
          },
          appUserInfo: {
            userRecoBit: 1
          },
          timestamp: timestamp(13)
        },
        _0x521750 = await this.ksaes(JSON.stringify(_0x1b4434));
      if (_0x521750) {
        let _0x341b99 = {
            version: this.jm.SDKVersion,
            appVersion: this.jm.appVersion,
            appId: "1091400011",
            message: _0x521750
          },
          _0x14500b = "https://tube.e.kuaishou.com/rest/e/tube/inspire/lotteryInfo",
          _0x3c514a = await this.sig(_0x14500b, _0x341b99, "sig3");
        if (_0x3c514a) {
          this.headers["Ks-Sig3"] = _0x3c514a;
          let _0x1b01e8 = await this.task("post", _0x14500b, this.headers, JSON.stringify(_0x341b99));
          if (_0x1b01e8.result == 1) {
            let _0x13d2d1 = JSON.parse(gzipde(AESECB(1, _0x1b01e8.data, "GWL8jXHLnzp63QDH")));
            if (_0x13d2d1.lotteryWheel.extParam.buttonInfo.linkType == 4) {
              await wait(getRandomNumber(1, 2));
              await this.ad("10914000043");
              await wait(getRandomNumber(15, 20));
              await this.hqcjcs(_0x13d2d1.lotteryWheel.extParam.taskToken, _0x13d2d1.lotteryWheel.extParam.buttonInfo.taskId);
            } else {
              _0x13d2d1.lotteryWheel.extParam.buttonInfo.linkType == 11 && (await wait(getRandomNumber(2, 3)), await this.cj(_0x13d2d1.lotteryWheel.extParam.taskToken, _0x13d2d1.lotteryWheel.extParam.buttonInfo.taskId));
            }
          } else {
            this.log("账号[" + this.num + "]：" + _0x1b01e8.errorMsg);
          }
        } else {
          this.log("账号[" + this.num + "]：获取sig失败");
        }
      } else {
        this.log("账号[" + this.num + "]：获取aes加密失败");
      }
    } catch (_0x700253) {
      this.log("账号[" + this.num + "]", _0x700253);
    }
  }
  async kbx(_0x238f15, _0x47a647, _0x142049) {
    try {
      let _0x1c5db6 = {
          appVersion: this.jm.appVersion,
          kpn: this.jm.kpn,
          channel: this.jm.channel,
          originChannel: this.jm.originChannel,
          protocolVersion: this.jm.protocolVersion,
          kwaiMerchantSdkVersion: this.jm.kwaiMerchantSdkVersion,
          SDKVersion: this.jm.SDKVersion,
          SDKVersionCode: this.jm.SDKVersionCode,
          sdkApiVersion: this.jm.sdkApiVersion,
          sdkApiVersionCode: this.jm.sdkApiVersionCode,
          sdkType: this.jm.sdkType,
          deviceInfo: this.jm.deviceInfo,
          clientFunction: this.jm.clientFunction,
          appInfo: this.jm.appInfo,
          tkVersion: this.jm.tkVersion,
          adSdkVersion: this.jm.adSdkVersion,
          networkInfo: this.jm.networkInfo,
          clientDynamicType: this.jm.clientDynamicType,
          abi: this.jm.abi,
          socName: this.jm.socName,
          boardPlatform: this.jm.boardPlatform,
          kGeoInfo: {},
          ext: {
            modeInfo: {
              cpuCount: this.jm.ext.modeInfo?.["cpuCount"] || "",
              cpuAbi: this.jm.ext.modeInfo?.["cpuAbi"] || "",
              batteryPercent: Math.round(randomInt(50, 100)),
              totalMemorySize: Math.round(randomInt(10702063104, 12702063104)),
              availableMemorySize: Math.round(randomInt(2211751424, 3211751424)),
              totalDiskSize: Math.round(randomInt(230089280512, 270089280512)),
              availableDiskSize: Math.round(randomInt(171774987264, 191774987264)),
              imsi: "",
              iccid: "",
              bootTime: Math.round(randomInt(7231, 16964)),
              romName: this.jm.ext.modeInfo?.["romName"] || "",
              romVersion: this.jm.ext.modeInfo?.["romVersion"] || "",
              romBuildTimestamp: this.jm.ext.modeInfo?.["romBuildTimestamp"] || "",
              ringerMode: 2,
              audioStreamInfo: this.jm.ext.modeInfo?.["audioStreamInfo"] || "",
              baseBandVersion: this.jm.ext.modeInfo?.["baseBandVersion"] || "",
              fingerPrint: this.jm.ext.modeInfo?.["fingerPrint"] || "",
              screenBrightness: -1,
              isCharging: false,
              chargeType: 0,
              simCardInfo: {
                phoneCount: 2,
                activePhoneCount: 0
              },
              environmentInfo: {
                isRoot: 2,
                isXPosed: 2,
                isFrameworkHooked: 2,
                isVirtual: 0,
                isAdbEnabled: 2,
                isEmulator: 2,
                isGroupControl: 2
              },
              sensorEventInfoList: [{
                sensorType: 1,
                timestamp: timestamp(10),
                values: [randomInt(0.8677372145652771, 0.8977372145652771), randomInt(4.020390605926514, 4.370390605926514), randomInt(8.527521896362305, 8.927521896362306)]
              }, {
                sensorType: 4,
                timestamp: timestamp(10),
                values: [randomInt(0.03578991305828094, 0.04178991305828095), -1 * randomInt(0.10087486684322357, 0.15087486684322357), -1 * randomInt(-0.011838415414094925, 0.12183841541409493)]
              }, {
                sensorType: 9,
                timestamp: timestamp(10),
                values: [randomInt(0.40329672932624816, 0.4332967293262482), randomInt(3.8631939697265625, 3.8931939697265623), randomInt(8.895574951171875, 9.005574951171875)]
              }]
            }
          },
          appUserInfo: {
            userRecoBit: 1
          },
          timestamp: timestamp(13),
          inspireTaskReportParam: {
            taskId: _0x47a647,
            neoInfos: [{
              idempotentId: _0x238f15,
              taskType: 1,
              extParam: {
                taskToken: _0x142049,
                llsid: 0,
                creativeId: 0
              }
            }]
          }
        },
        _0x315686 = await this.ksaes(JSON.stringify(_0x1c5db6));
      if (_0x315686) {
        let _0x38b55a = {
            version: this.jm.SDKVersion,
            appVersion: this.jm.appVersion,
            appId: "1091400011",
            message: _0x315686
          },
          _0x5de76b = "https://tube.e.kuaishou.com/rest/e/tube/inspire/task/report",
          _0x34c101 = await this.sig(_0x5de76b, _0x38b55a, "sig3");
        if (_0x34c101) {
          this.headers["Ks-Sig3"] = _0x34c101;
          let _0x10110b = await this.task("post", _0x5de76b, this.headers, JSON.stringify(_0x38b55a));
          if (_0x10110b.result == 1) {
            let _0x40e95e = JSON.parse(gzipde(AESECB(1, _0x10110b.data, "GWL8jXHLnzp63QDH")));
            this.log("账号[" + this.num + "]：开宝箱获得" + _0x40e95e.amount + "金币");
            if (_0x40e95e.nextStage.popupInfo.buttonInfo) {
              let _0x178222 = JSON.parse(Buffer.from(_0x40e95e.nextStage.popupInfo.buttonInfo.linkUrl, "base64").toString("utf-8"));
              await wait(getRandomNumber(1, 2));
              await this.ad("10914000035");
              await wait(getRandomNumber(15, 20));
              await this.bxgg(_0x178222);
            }
          } else {
            this.log("账号[" + this.num + "]：" + _0x10110b.errorMsg);
          }
        } else {
          this.log("账号[" + this.num + "]：获取sig失败");
        }
      } else {
        this.log("账号[" + this.num + "]：获取aes加密失败");
      }
    } catch (_0x493b26) {
      this.log("账号[" + this.num + "]", _0x493b26);
    }
  }
  async lqdjjl(_0x3f7332, _0x35bb2c, _0x5bcfc3) {
    try {
      let _0x1ae06f = {
          appVersion: this.jm.appVersion,
          kpn: this.jm.kpn,
          channel: this.jm.channel,
          originChannel: this.jm.originChannel,
          protocolVersion: this.jm.protocolVersion,
          kwaiMerchantSdkVersion: this.jm.kwaiMerchantSdkVersion,
          SDKVersion: this.jm.SDKVersion,
          SDKVersionCode: this.jm.SDKVersionCode,
          sdkApiVersion: this.jm.sdkApiVersion,
          sdkApiVersionCode: this.jm.sdkApiVersionCode,
          sdkType: this.jm.sdkType,
          deviceInfo: this.jm.deviceInfo,
          clientFunction: this.jm.clientFunction,
          appInfo: this.jm.appInfo,
          tkVersion: this.jm.tkVersion,
          adSdkVersion: this.jm.adSdkVersion,
          networkInfo: this.jm.networkInfo,
          clientDynamicType: this.jm.clientDynamicType,
          abi: this.jm.abi,
          socName: this.jm.socName,
          boardPlatform: this.jm.boardPlatform,
          kGeoInfo: {},
          ext: {
            modeInfo: {
              cpuCount: this.jm.ext.modeInfo?.["cpuCount"] || "",
              cpuAbi: this.jm.ext.modeInfo?.["cpuAbi"] || "",
              batteryPercent: Math.round(randomInt(50, 100)),
              totalMemorySize: Math.round(randomInt(10702063104, 12702063104)),
              availableMemorySize: Math.round(randomInt(2211751424, 3211751424)),
              totalDiskSize: Math.round(randomInt(230089280512, 270089280512)),
              availableDiskSize: Math.round(randomInt(171774987264, 191774987264)),
              imsi: "",
              iccid: "",
              bootTime: Math.round(randomInt(7231, 16964)),
              romName: this.jm.ext.modeInfo?.["romName"] || "",
              romVersion: this.jm.ext.modeInfo?.["romVersion"] || "",
              romBuildTimestamp: this.jm.ext.modeInfo?.["romBuildTimestamp"] || "",
              ringerMode: 2,
              audioStreamInfo: this.jm.ext.modeInfo?.["audioStreamInfo"] || "",
              baseBandVersion: this.jm.ext.modeInfo?.["baseBandVersion"] || "",
              fingerPrint: this.jm.ext.modeInfo?.["fingerPrint"] || "",
              screenBrightness: -1,
              isCharging: false,
              chargeType: 0,
              simCardInfo: {
                phoneCount: 2,
                activePhoneCount: 0
              },
              environmentInfo: {
                isRoot: 2,
                isXPosed: 2,
                isFrameworkHooked: 2,
                isVirtual: 0,
                isAdbEnabled: 2,
                isEmulator: 2,
                isGroupControl: 2
              }
            }
          },
          appUserInfo: {
            userRecoBit: 1
          },
          timestamp: timestamp(13),
          inspireTaskReportParam: {
            taskId: _0x35bb2c,
            neoInfos: [{
              idempotentId: _0x3f7332,
              taskType: 1,
              extParam: {
                taskToken: _0x5bcfc3,
                llsid: 0,
                creativeId: 0
              }
            }]
          }
        },
        _0x2d7b02 = await this.ksaes(JSON.stringify(_0x1ae06f));
      if (_0x2d7b02) {
        let _0x4ce97a = {
            version: this.jm.SDKVersion,
            appVersion: this.jm.appVersion,
            appId: "1091400011",
            message: _0x2d7b02
          },
          _0x264ab3 = "https://tube.e.kuaishou.com/rest/e/tube/inspire/task/report",
          _0x30f303 = await this.sig(_0x264ab3, _0x4ce97a, "sig3");
        if (_0x30f303) {
          this.headers["Ks-Sig3"] = _0x30f303;
          let _0x4e766b = await this.task("post", _0x264ab3, this.headers, JSON.stringify(_0x4ce97a));
          if (_0x4e766b.result == 1) {
            let _0x49fd7c = JSON.parse(gzipde(AESECB(1, _0x4e766b.data, "GWL8jXHLnzp63QDH")));
            this.log("账号[" + this.num + "]：领取看短剧奖励获得" + _0x49fd7c.amount + "金币");
            if (_0x49fd7c.popUp.data.buttonInfo) {
              let _0xc295b4 = JSON.parse(Buffer.from(_0x49fd7c.popUp.data.buttonInfo.linkUrl, "base64").toString("utf-8"));
              await wait(getRandomNumber(1, 2));
              await this.ad("10914000039");
              await wait(getRandomNumber(15, 20));
              await this.kdjgg(_0xc295b4);
            }
          } else {
            this.log("账号[" + this.num + "]：" + _0x4e766b.errorMsg);
          }
        } else {
          this.log("账号[" + this.num + "]：获取sig失败");
        }
      } else {
        this.log("账号[" + this.num + "]：获取aes加密失败");
      }
    } catch (_0x4ed718) {
      this.log("账号[" + this.num + "]", _0x4ed718);
    }
  }
  async cj(_0x4030cf, _0x1828e7) {
    try {
      let _0x409d74 = {
          appVersion: this.jm.appVersion,
          kpn: this.jm.kpn,
          channel: this.jm.channel,
          originChannel: this.jm.originChannel,
          protocolVersion: this.jm.protocolVersion,
          kwaiMerchantSdkVersion: this.jm.kwaiMerchantSdkVersion,
          SDKVersion: this.jm.SDKVersion,
          SDKVersionCode: this.jm.SDKVersionCode,
          sdkApiVersion: this.jm.sdkApiVersion,
          sdkApiVersionCode: this.jm.sdkApiVersionCode,
          sdkType: this.jm.sdkType,
          deviceInfo: this.jm.deviceInfo,
          clientFunction: this.jm.clientFunction,
          appInfo: this.jm.appInfo,
          tkVersion: this.jm.tkVersion,
          adSdkVersion: this.jm.adSdkVersion,
          networkInfo: this.jm.networkInfo,
          clientDynamicType: this.jm.clientDynamicType,
          abi: this.jm.abi,
          socName: this.jm.socName,
          boardPlatform: this.jm.boardPlatform,
          kGeoInfo: {},
          ext: {
            modeInfo: {
              cpuCount: this.jm.ext.modeInfo?.["cpuCount"] || "",
              cpuAbi: this.jm.ext.modeInfo?.["cpuAbi"] || "",
              batteryPercent: Math.round(randomInt(50, 100)),
              totalMemorySize: Math.round(randomInt(10702063104, 12702063104)),
              availableMemorySize: Math.round(randomInt(2211751424, 3211751424)),
              totalDiskSize: Math.round(randomInt(230089280512, 270089280512)),
              availableDiskSize: Math.round(randomInt(171774987264, 191774987264)),
              imsi: "",
              iccid: "",
              bootTime: Math.round(randomInt(7231, 16964)),
              romName: this.jm.ext.modeInfo?.["romName"] || "",
              romVersion: this.jm.ext.modeInfo?.["romVersion"] || "",
              romBuildTimestamp: this.jm.ext.modeInfo?.["romBuildTimestamp"] || "",
              ringerMode: 2,
              audioStreamInfo: this.jm.ext.modeInfo?.["audioStreamInfo"] || "",
              baseBandVersion: this.jm.ext.modeInfo?.["baseBandVersion"] || "",
              fingerPrint: this.jm.ext.modeInfo?.["fingerPrint"] || "",
              screenBrightness: -1,
              isCharging: false,
              chargeType: 0,
              simCardInfo: {
                phoneCount: 2,
                activePhoneCount: 0
              },
              environmentInfo: {
                isRoot: 2,
                isXPosed: 2,
                isFrameworkHooked: 2,
                isVirtual: 0,
                isAdbEnabled: 2,
                isEmulator: 2,
                isGroupControl: 2
              },
              sensorEventInfoList: [{
                sensorType: 1,
                timestamp: timestamp(10),
                values: [randomInt(0.8677372145652771, 0.8977372145652771), randomInt(4.020390605926514, 4.370390605926514), randomInt(8.527521896362305, 8.927521896362306)]
              }, {
                sensorType: 4,
                timestamp: timestamp(10),
                values: [randomInt(0.03578991305828094, 0.04178991305828095), -1 * randomInt(0.10087486684322357, 0.15087486684322357), -1 * randomInt(-0.011838415414094925, 0.12183841541409493)]
              }, {
                sensorType: 9,
                timestamp: timestamp(10),
                values: [randomInt(0.40329672932624816, 0.4332967293262482), randomInt(3.8631939697265625, 3.8931939697265623), randomInt(8.895574951171875, 9.005574951171875)]
              }]
            }
          },
          appUserInfo: {
            userRecoBit: 1
          },
          timestamp: timestamp(13),
          inspireTaskReportParam: {
            neoInfos: [{
              idempotentId: "0",
              extParam: {
                taskToken: _0x4030cf
              }
            }],
            taskId: _0x1828e7
          }
        },
        _0x3f4dd6 = await this.ksaes(JSON.stringify(_0x409d74));
      if (_0x3f4dd6) {
        let _0x1cbb5a = {
            version: this.jm.SDKVersion,
            appVersion: this.jm.appVersion,
            appId: "1091400011",
            message: _0x3f4dd6
          },
          _0x40bc34 = "https://tube.e.kuaishou.com/rest/e/tube/inspire/task/report",
          _0x12cc37 = await this.sig(_0x40bc34, _0x1cbb5a, "sig3");
        if (_0x12cc37) {
          this.headers["Ks-Sig3"] = _0x12cc37;
          let _0x51b892 = await this.task("post", _0x40bc34, this.headers, JSON.stringify(_0x1cbb5a));
          if (_0x51b892.result == 1) {
            let _0x270528 = JSON.parse(gzipde(AESECB(1, _0x51b892.data, "GWL8jXHLnzp63QDH")));
            this.log("账号[" + this.num + "]：抽奖获得" + _0x270528.amount + "金币");
          } else {
            this.log("账号[" + this.num + "]：" + _0x51b892.errorMsg);
          }
        } else {
          this.log("账号[" + this.num + "]：获取sig失败");
        }
      } else {
        this.log("账号[" + this.num + "]：获取aes加密失败");
      }
    } catch (_0x29dca6) {
      this.log("账号[" + this.num + "]", _0x29dca6);
    }
  }
  async bxgg(_0x8a7dcd) {
    try {
      let _0x565548 = {
          appVersion: this.jm.appVersion,
          kpn: this.jm.kpn,
          channel: this.jm.channel,
          originChannel: this.jm.originChannel,
          protocolVersion: this.jm.protocolVersion,
          kwaiMerchantSdkVersion: this.jm.kwaiMerchantSdkVersion,
          SDKVersion: this.jm.SDKVersion,
          SDKVersionCode: this.jm.SDKVersionCode,
          sdkApiVersion: this.jm.sdkApiVersion,
          sdkApiVersionCode: this.jm.sdkApiVersionCode,
          sdkType: this.jm.sdkType,
          deviceInfo: this.jm.deviceInfo,
          clientFunction: this.jm.clientFunction,
          appInfo: this.jm.appInfo,
          tkVersion: this.jm.tkVersion,
          adSdkVersion: this.jm.adSdkVersion,
          networkInfo: this.jm.networkInfo,
          clientDynamicType: this.jm.clientDynamicType,
          abi: this.jm.abi,
          socName: this.jm.socName,
          boardPlatform: this.jm.boardPlatform,
          kGeoInfo: {},
          ext: {
            modeInfo: {
              cpuCount: this.jm.ext.modeInfo?.["cpuCount"] || "",
              cpuAbi: this.jm.ext.modeInfo?.["cpuAbi"] || "",
              batteryPercent: Math.round(randomInt(50, 100)),
              totalMemorySize: Math.round(randomInt(10702063104, 12702063104)),
              availableMemorySize: Math.round(randomInt(2211751424, 3211751424)),
              totalDiskSize: Math.round(randomInt(230089280512, 270089280512)),
              availableDiskSize: Math.round(randomInt(171774987264, 191774987264)),
              imsi: "",
              iccid: "",
              bootTime: Math.round(randomInt(7231, 16964)),
              romName: this.jm.ext.modeInfo?.["romName"] || "",
              romVersion: this.jm.ext.modeInfo?.["romVersion"] || "",
              romBuildTimestamp: this.jm.ext.modeInfo?.["romBuildTimestamp"] || "",
              ringerMode: 2,
              audioStreamInfo: this.jm.ext.modeInfo?.["audioStreamInfo"] || "",
              baseBandVersion: this.jm.ext.modeInfo?.["baseBandVersion"] || "",
              fingerPrint: this.jm.ext.modeInfo?.["fingerPrint"] || "",
              screenBrightness: -1,
              isCharging: false,
              chargeType: 0,
              simCardInfo: {
                phoneCount: 2,
                activePhoneCount: 0
              },
              environmentInfo: {
                isRoot: 2,
                isXPosed: 2,
                isFrameworkHooked: 2,
                isVirtual: 0,
                isAdbEnabled: 2,
                isEmulator: 2,
                isGroupControl: 2
              },
              sensorEventInfoList: [{
                sensorType: 1,
                timestamp: timestamp(10),
                values: [randomInt(0.8677372145652771, 0.8977372145652771), randomInt(4.020390605926514, 4.370390605926514), randomInt(8.527521896362305, 8.927521896362306)]
              }, {
                sensorType: 4,
                timestamp: timestamp(10),
                values: [randomInt(0.03578991305828094, 0.04178991305828095), -1 * randomInt(0.10087486684322357, 0.15087486684322357), -1 * randomInt(-0.011838415414094925, 0.12183841541409493)]
              }, {
                sensorType: 9,
                timestamp: timestamp(10),
                values: [randomInt(0.40329672932624816, 0.4332967293262482), randomInt(3.8631939697265625, 3.8931939697265623), randomInt(8.895574951171875, 9.005574951171875)]
              }]
            }
          },
          appUserInfo: {
            userRecoBit: 1
          },
          timestamp: timestamp(13),
          inspireTaskReportParam: {
            taskId: _0x8a7dcd.businessId,
            posId: _0x8a7dcd.posId,
            taskSessionId: this.bxsj,
            ecpm: randomInt(30000, 50000),
            neoInfos: [{
              idempotentId: this.llsid + "_" + this.adid,
              taskType: 1,
              extParam: {
                taskToken: _0x8a7dcd.extParams,
                llsid: this.llsid,
                creativeId: this.adid
              }
            }]
          }
        },
        _0x554c6a = await this.ksaes(JSON.stringify(_0x565548));
      if (_0x554c6a) {
        let _0x5ce82b = {
            version: this.jm.SDKVersion,
            appVersion: this.jm.appVersion,
            appId: "1091400011",
            message: _0x554c6a
          },
          _0x2257e5 = "https://tube.e.kuaishou.com/rest/e/tube/inspire/task/report",
          _0x40fac2 = await this.sig(_0x2257e5, _0x5ce82b, "sig3");
        if (_0x40fac2) {
          this.headers["Ks-Sig3"] = _0x40fac2;
          let _0x15902b = await this.task("post", _0x2257e5, this.headers, JSON.stringify(_0x5ce82b));
          if (_0x15902b.result == 1) {
            let _0x5db4f4 = JSON.parse(gzipde(AESECB(1, _0x15902b.data, "GWL8jXHLnzp63QDH")));
            this.log("账号[" + this.num + "]：看宝箱广告获得" + _0x5db4f4.amount + "金币");
            if (_0x5db4f4.popUp) {
              if (_0x5db4f4.popUp.data.buttonInfo) {
                if (_0x5db4f4.popUp.data.buttonInfo.linkType == 4) {
                  let _0x383208 = JSON.parse(Buffer.from(_0x5db4f4.popUp.data.buttonInfo.linkUrl, "base64").toString("utf-8"));
                  await wait(getRandomNumber(1, 2));
                  await this.ad(_0x383208.posId);
                  await wait(getRandomNumber(15, 20));
                  await this.bxgg(_0x383208);
                }
              }
            }
          } else {
            this.log("账号[" + this.num + "]：" + _0x15902b.errorMsg);
          }
        } else {
          this.log("账号[" + this.num + "]：获取sig失败");
        }
      } else {
        this.log("账号[" + this.num + "]：获取aes加密失败");
      }
    } catch (_0x3e26cc) {
      this.log("账号[" + this.num + "]", _0x3e26cc);
    }
  }
  async qdgg(_0x59eae6) {
    try {
      let _0x3fb39b = {
          appVersion: this.jm.appVersion,
          kpn: this.jm.kpn,
          channel: this.jm.channel,
          originChannel: this.jm.originChannel,
          protocolVersion: this.jm.protocolVersion,
          kwaiMerchantSdkVersion: this.jm.kwaiMerchantSdkVersion,
          SDKVersion: this.jm.SDKVersion,
          SDKVersionCode: this.jm.SDKVersionCode,
          sdkApiVersion: this.jm.sdkApiVersion,
          sdkApiVersionCode: this.jm.sdkApiVersionCode,
          sdkType: this.jm.sdkType,
          deviceInfo: this.jm.deviceInfo,
          clientFunction: this.jm.clientFunction,
          appInfo: this.jm.appInfo,
          tkVersion: this.jm.tkVersion,
          adSdkVersion: this.jm.adSdkVersion,
          networkInfo: this.jm.networkInfo,
          clientDynamicType: this.jm.clientDynamicType,
          abi: this.jm.abi,
          socName: this.jm.socName,
          boardPlatform: this.jm.boardPlatform,
          kGeoInfo: {},
          ext: {
            modeInfo: {
              cpuCount: this.jm.ext.modeInfo?.["cpuCount"] || "",
              cpuAbi: this.jm.ext.modeInfo?.["cpuAbi"] || "",
              batteryPercent: Math.round(randomInt(50, 100)),
              totalMemorySize: Math.round(randomInt(10702063104, 12702063104)),
              availableMemorySize: Math.round(randomInt(2211751424, 3211751424)),
              totalDiskSize: Math.round(randomInt(230089280512, 270089280512)),
              availableDiskSize: Math.round(randomInt(171774987264, 191774987264)),
              imsi: "",
              iccid: "",
              bootTime: Math.round(randomInt(7231, 16964)),
              romName: this.jm.ext.modeInfo?.["romName"] || "",
              romVersion: this.jm.ext.modeInfo?.["romVersion"] || "",
              romBuildTimestamp: this.jm.ext.modeInfo?.["romBuildTimestamp"] || "",
              ringerMode: 2,
              audioStreamInfo: this.jm.ext.modeInfo?.["audioStreamInfo"] || "",
              baseBandVersion: this.jm.ext.modeInfo?.["baseBandVersion"] || "",
              fingerPrint: this.jm.ext.modeInfo?.["fingerPrint"] || "",
              screenBrightness: -1,
              isCharging: false,
              chargeType: 0,
              simCardInfo: {
                phoneCount: 2,
                activePhoneCount: 0
              },
              environmentInfo: {
                isRoot: 2,
                isXPosed: 2,
                isFrameworkHooked: 2,
                isVirtual: 0,
                isAdbEnabled: 2,
                isEmulator: 2,
                isGroupControl: 2
              },
              sensorEventInfoList: [{
                sensorType: 1,
                timestamp: timestamp(10),
                values: [randomInt(0.8677372145652771, 0.8977372145652771), randomInt(4.020390605926514, 4.370390605926514), randomInt(8.527521896362305, 8.927521896362306)]
              }, {
                sensorType: 4,
                timestamp: timestamp(10),
                values: [randomInt(0.03578991305828094, 0.04178991305828095), -1 * randomInt(0.10087486684322357, 0.15087486684322357), -1 * randomInt(-0.011838415414094925, 0.12183841541409493)]
              }, {
                sensorType: 9,
                timestamp: timestamp(10),
                values: [randomInt(0.40329672932624816, 0.4332967293262482), randomInt(3.8631939697265625, 3.8931939697265623), randomInt(8.895574951171875, 9.005574951171875)]
              }]
            }
          },
          appUserInfo: {
            userRecoBit: 1
          },
          timestamp: timestamp(13),
          inspireTaskReportParam: {
            taskId: _0x59eae6.businessId,
            posId: _0x59eae6.posId,
            taskSessionId: this.bxsj,
            ecpm: randomInt(30000, 50000),
            neoInfos: [{
              idempotentId: this.llsid + "_" + this.adid,
              taskType: 1,
              extParam: {
                taskToken: _0x59eae6.extParams,
                llsid: this.llsid,
                creativeId: this.adid
              }
            }]
          }
        },
        _0x13f728 = await this.ksaes(JSON.stringify(_0x3fb39b));
      if (_0x13f728) {
        let _0x3af1b2 = {
            version: this.jm.SDKVersion,
            appVersion: this.jm.appVersion,
            appId: "1091400011",
            message: _0x13f728
          },
          _0x5abb33 = "https://tube.e.kuaishou.com/rest/e/tube/inspire/task/report",
          _0x10ee05 = await this.sig(_0x5abb33, _0x3af1b2, "sig3");
        if (_0x10ee05) {
          this.headers["Ks-Sig3"] = _0x10ee05;
          let _0x365d99 = await this.task("post", _0x5abb33, this.headers, JSON.stringify(_0x3af1b2));
          if (_0x365d99.result == 1) {
            let _0x19e8a8 = JSON.parse(gzipde(AESECB(1, _0x365d99.data, "GWL8jXHLnzp63QDH")));
            this.log("账号[" + this.num + "]：看签到广告获得" + _0x19e8a8.amount + "金币");
            if (_0x19e8a8.popUp) {
              if (_0x19e8a8.popUp.data.buttonInfo) {
                if (_0x19e8a8.popUp.data.buttonInfo.linkType == 4) {
                  let _0x303f56 = JSON.parse(Buffer.from(_0x19e8a8.popUp.data.buttonInfo.linkUrl, "base64").toString("utf-8"));
                  await wait(getRandomNumber(1, 2));
                  await this.ad(_0x303f56.posId);
                  await wait(getRandomNumber(15, 20));
                  await this.qdgg(_0x303f56);
                }
              }
            }
          } else {
            this.log("账号[" + this.num + "]：" + _0x365d99.errorMsg);
          }
        } else {
          this.log("账号[" + this.num + "]：获取sig失败");
        }
      } else {
        this.log("账号[" + this.num + "]：获取aes加密失败");
      }
    } catch (_0x47733c) {
      this.log("账号[" + this.num + "]", _0x47733c);
    }
  }
  async hqcjcs(_0x14a203, _0x19f238) {
    try {
      let _0x5e3e1f = {
          appVersion: this.jm.appVersion,
          kpn: this.jm.kpn,
          channel: this.jm.channel,
          originChannel: this.jm.originChannel,
          protocolVersion: this.jm.protocolVersion,
          kwaiMerchantSdkVersion: this.jm.kwaiMerchantSdkVersion,
          SDKVersion: this.jm.SDKVersion,
          SDKVersionCode: this.jm.SDKVersionCode,
          sdkApiVersion: this.jm.sdkApiVersion,
          sdkApiVersionCode: this.jm.sdkApiVersionCode,
          sdkType: this.jm.sdkType,
          deviceInfo: this.jm.deviceInfo,
          clientFunction: this.jm.clientFunction,
          appInfo: this.jm.appInfo,
          tkVersion: this.jm.tkVersion,
          adSdkVersion: this.jm.adSdkVersion,
          networkInfo: this.jm.networkInfo,
          clientDynamicType: this.jm.clientDynamicType,
          abi: this.jm.abi,
          socName: this.jm.socName,
          boardPlatform: this.jm.boardPlatform,
          kGeoInfo: {},
          ext: {
            modeInfo: {
              cpuCount: this.jm.ext.modeInfo?.["cpuCount"] || "",
              cpuAbi: this.jm.ext.modeInfo?.["cpuAbi"] || "",
              batteryPercent: Math.round(randomInt(50, 100)),
              totalMemorySize: Math.round(randomInt(10702063104, 12702063104)),
              availableMemorySize: Math.round(randomInt(2211751424, 3211751424)),
              totalDiskSize: Math.round(randomInt(230089280512, 270089280512)),
              availableDiskSize: Math.round(randomInt(171774987264, 191774987264)),
              imsi: "",
              iccid: "",
              bootTime: Math.round(randomInt(7231, 16964)),
              romName: this.jm.ext.modeInfo?.["romName"] || "",
              romVersion: this.jm.ext.modeInfo?.["romVersion"] || "",
              romBuildTimestamp: this.jm.ext.modeInfo?.["romBuildTimestamp"] || "",
              ringerMode: 2,
              audioStreamInfo: this.jm.ext.modeInfo?.["audioStreamInfo"] || "",
              baseBandVersion: this.jm.ext.modeInfo?.["baseBandVersion"] || "",
              fingerPrint: this.jm.ext.modeInfo?.["fingerPrint"] || "",
              screenBrightness: -1,
              isCharging: false,
              chargeType: 0,
              simCardInfo: {
                phoneCount: 2,
                activePhoneCount: 0
              },
              environmentInfo: {
                isRoot: 2,
                isXPosed: 2,
                isFrameworkHooked: 2,
                isVirtual: 0,
                isAdbEnabled: 2,
                isEmulator: 2,
                isGroupControl: 2
              },
              sensorEventInfoList: [{
                sensorType: 1,
                timestamp: timestamp(10),
                values: [randomInt(0.8677372145652771, 0.8977372145652771), randomInt(4.020390605926514, 4.370390605926514), randomInt(8.527521896362305, 8.927521896362306)]
              }, {
                sensorType: 4,
                timestamp: timestamp(10),
                values: [randomInt(0.03578991305828094, 0.04178991305828095), -1 * randomInt(0.10087486684322357, 0.15087486684322357), -1 * randomInt(-0.011838415414094925, 0.12183841541409493)]
              }, {
                sensorType: 9,
                timestamp: timestamp(10),
                values: [randomInt(0.40329672932624816, 0.4332967293262482), randomInt(3.8631939697265625, 3.8931939697265623), randomInt(8.895574951171875, 9.005574951171875)]
              }]
            }
          },
          appUserInfo: {
            userRecoBit: 1
          },
          timestamp: timestamp(13),
          inspireTaskReportParam: {
            neoInfos: [{
              idempotentId: this.pid,
              extParam: {
                creativeId: this.adid,
                llsid: this.llsid,
                taskToken: _0x14a203
              },
              taskType: 1
            }],
            ecpm: randomInt(30000, 50000),
            taskId: _0x19f238
          }
        },
        _0x576020 = await this.ksaes(JSON.stringify(_0x5e3e1f));
      if (_0x576020) {
        let _0x4ad2ed = {
            version: this.jm.SDKVersion,
            appVersion: this.jm.appVersion,
            appId: "1091400011",
            message: _0x576020
          },
          _0x3f7e6c = "https://tube.e.kuaishou.com/rest/e/tube/inspire/task/report",
          _0x4cb82c = await this.sig(_0x3f7e6c, _0x4ad2ed, "sig3");
        if (_0x4cb82c) {
          this.headers["Ks-Sig3"] = _0x4cb82c;
          let _0x2303fc = await this.task("post", _0x3f7e6c, this.headers, JSON.stringify(_0x4ad2ed));
          if (_0x2303fc.result == 1) {
            let _0xa6921 = JSON.parse(gzipde(AESECB(1, _0x2303fc.data, "GWL8jXHLnzp63QDH")));
            this.log("账号[" + this.num + "]：" + _0xa6921.toast);
          } else {
            this.log("账号[" + this.num + "]：" + _0x2303fc.errorMsg);
          }
        } else {
          this.log("账号[" + this.num + "]：获取sig失败");
        }
      } else {
        this.log("账号[" + this.num + "]：获取aes加密失败");
      }
    } catch (_0x34d49a) {
      this.log("账号[" + this.num + "]", _0x34d49a);
    }
  }
  async qd(_0x859588, _0x3f46f4, _0x5d9bd4) {
    try {
      let _0x5ae98b = {
          appVersion: this.jm.appVersion,
          kpn: this.jm.kpn,
          channel: this.jm.channel,
          originChannel: this.jm.originChannel,
          protocolVersion: this.jm.protocolVersion,
          kwaiMerchantSdkVersion: this.jm.kwaiMerchantSdkVersion,
          SDKVersion: this.jm.SDKVersion,
          SDKVersionCode: this.jm.SDKVersionCode,
          sdkApiVersion: this.jm.sdkApiVersion,
          sdkApiVersionCode: this.jm.sdkApiVersionCode,
          sdkType: this.jm.sdkType,
          deviceInfo: this.jm.deviceInfo,
          clientFunction: this.jm.clientFunction,
          appInfo: this.jm.appInfo,
          tkVersion: this.jm.tkVersion,
          adSdkVersion: this.jm.adSdkVersion,
          networkInfo: this.jm.networkInfo,
          clientDynamicType: this.jm.clientDynamicType,
          abi: this.jm.abi,
          socName: this.jm.socName,
          boardPlatform: this.jm.boardPlatform,
          kGeoInfo: {},
          ext: {
            modeInfo: {
              cpuCount: this.jm.ext.modeInfo?.["cpuCount"] || "",
              cpuAbi: this.jm.ext.modeInfo?.["cpuAbi"] || "",
              batteryPercent: Math.round(randomInt(50, 100)),
              totalMemorySize: Math.round(randomInt(10702063104, 12702063104)),
              availableMemorySize: Math.round(randomInt(2211751424, 3211751424)),
              totalDiskSize: Math.round(randomInt(230089280512, 270089280512)),
              availableDiskSize: Math.round(randomInt(171774987264, 191774987264)),
              imsi: "",
              iccid: "",
              bootTime: Math.round(randomInt(7231, 16964)),
              romName: this.jm.ext.modeInfo?.["romName"] || "",
              romVersion: this.jm.ext.modeInfo?.["romVersion"] || "",
              romBuildTimestamp: this.jm.ext.modeInfo?.["romBuildTimestamp"] || "",
              ringerMode: 2,
              audioStreamInfo: this.jm.ext.modeInfo?.["audioStreamInfo"] || "",
              baseBandVersion: this.jm.ext.modeInfo?.["baseBandVersion"] || "",
              fingerPrint: this.jm.ext.modeInfo?.["fingerPrint"] || "",
              screenBrightness: -1,
              isCharging: false,
              chargeType: 0,
              simCardInfo: {
                phoneCount: 2,
                activePhoneCount: 0
              },
              environmentInfo: {
                isRoot: 2,
                isXPosed: 2,
                isFrameworkHooked: 2,
                isVirtual: 0,
                isAdbEnabled: 2,
                isEmulator: 2,
                isGroupControl: 2
              },
              sensorEventInfoList: [{
                sensorType: 1,
                timestamp: timestamp(10),
                values: [randomInt(0.8677372145652771, 0.8977372145652771), randomInt(4.020390605926514, 4.370390605926514), randomInt(8.527521896362305, 8.927521896362306)]
              }, {
                sensorType: 4,
                timestamp: timestamp(10),
                values: [randomInt(0.03578991305828094, 0.04178991305828095), -1 * randomInt(0.10087486684322357, 0.15087486684322357), -1 * randomInt(-0.011838415414094925, 0.12183841541409493)]
              }, {
                sensorType: 9,
                timestamp: timestamp(10),
                values: [randomInt(0.40329672932624816, 0.4332967293262482), randomInt(3.8631939697265625, 3.8931939697265623), randomInt(8.895574951171875, 9.005574951171875)]
              }]
            }
          },
          appUserInfo: {
            userRecoBit: 1
          },
          timestamp: timestamp(13),
          inspireTaskReportParam: {
            taskId: _0x3f46f4,
            ecpm: randomInt(30000, 50000),
            neoInfos: [{
              idempotentId: _0x859588,
              taskType: 1,
              extParam: {
                taskToken: _0x5d9bd4,
                llsid: 0,
                creativeId: 0
              }
            }]
          }
        },
        _0x20683e = await this.ksaes(JSON.stringify(_0x5ae98b));
      if (_0x20683e) {
        let _0x435bdd = {
            version: this.jm.SDKVersion,
            appVersion: this.jm.appVersion,
            appId: "1091400011",
            message: _0x20683e
          },
          _0x15c57d = "https://tube.e.kuaishou.com/rest/e/tube/inspire/task/report",
          _0x2bb261 = await this.sig(_0x15c57d, _0x435bdd, "sig3");
        if (_0x2bb261) {
          this.headers["Ks-Sig3"] = _0x2bb261;
          let _0x158803 = await this.task("post", _0x15c57d, this.headers, JSON.stringify(_0x435bdd));
          if (_0x158803.result == 1) {
            let _0x399a2e = JSON.parse(gzipde(AESECB(1, _0x158803.data, "GWL8jXHLnzp63QDH")));
            this.log("账号[" + this.num + "]：" + _0x399a2e.toast);
            if (_0x399a2e.nextStage.popupInfo.buttonInfo) {
              let _0x596f89 = JSON.parse(Buffer.from(_0x399a2e.nextStage.popupInfo.buttonInfo.linkUrl, "base64").toString("utf-8"));
              await wait(getRandomNumber(1, 2));
              await this.ad("10914000033");
              await wait(getRandomNumber(15, 20));
              await this.qdgg(_0x596f89);
            }
          } else {
            this.log("账号[" + this.num + "]：" + _0x158803.errorMsg);
          }
        } else {
          this.log("账号[" + this.num + "]：获取sig失败");
        }
      } else {
        this.log("账号[" + this.num + "]：获取aes加密失败");
      }
    } catch (_0x47c9e5) {
      this.log("账号[" + this.num + "]", _0x47c9e5);
    }
  }
  async hqdjid() {
    try {
      let _0x52df92 = {
          appVersion: this.jm.appVersion,
          kpn: this.jm.kpn,
          channel: this.jm.channel,
          originChannel: this.jm.originChannel,
          protocolVersion: this.jm.protocolVersion,
          kwaiMerchantSdkVersion: this.jm.kwaiMerchantSdkVersion,
          SDKVersion: this.jm.SDKVersion,
          SDKVersionCode: this.jm.SDKVersionCode,
          sdkApiVersion: this.jm.sdkApiVersion,
          sdkApiVersionCode: this.jm.sdkApiVersionCode,
          sdkType: this.jm.sdkType,
          deviceInfo: this.jm.deviceInfo,
          clientFunction: this.jm.clientFunction,
          appInfo: this.jm.appInfo,
          tkVersion: this.jm.tkVersion,
          adSdkVersion: this.jm.adSdkVersion,
          networkInfo: this.jm.networkInfo,
          clientDynamicType: this.jm.clientDynamicType,
          abi: this.jm.abi,
          socName: this.jm.socName,
          boardPlatform: this.jm.boardPlatform,
          kGeoInfo: {},
          ext: {
            modeInfo: {
              cpuCount: this.jm.ext.modeInfo?.["cpuCount"] || "",
              cpuAbi: this.jm.ext.modeInfo?.["cpuAbi"] || "",
              batteryPercent: Math.round(randomInt(50, 100)),
              totalMemorySize: Math.round(randomInt(10702063104, 12702063104)),
              availableMemorySize: Math.round(randomInt(2211751424, 3211751424)),
              totalDiskSize: Math.round(randomInt(230089280512, 270089280512)),
              availableDiskSize: Math.round(randomInt(171774987264, 191774987264)),
              imsi: "",
              iccid: "",
              bootTime: Math.round(randomInt(7231, 16964)),
              romName: this.jm.ext.modeInfo?.["romName"] || "",
              romVersion: this.jm.ext.modeInfo?.["romVersion"] || "",
              romBuildTimestamp: this.jm.ext.modeInfo?.["romBuildTimestamp"] || "",
              ringerMode: 2,
              audioStreamInfo: this.jm.ext.modeInfo?.["audioStreamInfo"] || "",
              baseBandVersion: this.jm.ext.modeInfo?.["baseBandVersion"] || "",
              fingerPrint: this.jm.ext.modeInfo?.["fingerPrint"] || "",
              screenBrightness: -1,
              isCharging: false,
              chargeType: 0,
              simCardInfo: {
                phoneCount: 2,
                activePhoneCount: 0
              },
              environmentInfo: {
                isRoot: 2,
                isXPosed: 2,
                isFrameworkHooked: 2,
                isVirtual: 0,
                isAdbEnabled: 2,
                isEmulator: 2,
                isGroupControl: 2
              }
            }
          },
          appUserInfo: {
            userRecoBit: 1
          },
          timestamp: timestamp(13),
          tubeParam: {
            feedJumpSource: 4,
            jumpSource: 4,
            pcount: 30,
            watchEpisodeNum: 1,
            tubeIdList: ["2615726"],
            isAd: false,
            favorite: false
          }
        },
        _0x14a3d4 = await this.ksaes(JSON.stringify(_0x52df92));
      if (_0x14a3d4) {
        let _0x5de3c1 = {
            version: this.jm.SDKVersion,
            appVersion: this.jm.appVersion,
            appId: "1091400011",
            message: _0x14a3d4
          },
          _0xb90fb1 = "https://tube.e.kuaishou.com/rest/e/tube/app/homepage",
          _0x19ad7d = await this.sig(_0xb90fb1, _0x5de3c1, "sig1");
        if (_0x19ad7d) {
          this.headers["Ks-Sig1"] = _0x19ad7d;
          let _0x288b7d = await this.task("post", _0xb90fb1, this.headers, JSON.stringify(_0x5de3c1));
          if (_0x288b7d.result == 1) {
            let _0x17ce97 = JSON.parse(gzipde(AESECB(1, _0x288b7d.data, "GWL8jXHLnzp63QDH")));
            this.djid = _0x17ce97.tubeInfoList[0].tubeId;
          } else {
            this.log("账号[" + this.num + "]：" + _0x288b7d.errorMsg);
          }
        } else {
          this.log("账号[" + this.num + "]：获取sig失败");
        }
      } else {
        this.log("账号[" + this.num + "]：获取aes加密失败");
      }
    } catch (_0x929ebb) {
      this.log("账号[" + this.num + "]", _0x929ebb);
    }
  }
  async kdjgg(_0x55af09) {
    try {
      let _0x5ca57c = {
          appVersion: this.jm.appVersion,
          kpn: this.jm.kpn,
          channel: this.jm.channel,
          originChannel: this.jm.originChannel,
          protocolVersion: this.jm.protocolVersion,
          kwaiMerchantSdkVersion: this.jm.kwaiMerchantSdkVersion,
          SDKVersion: this.jm.SDKVersion,
          SDKVersionCode: this.jm.SDKVersionCode,
          sdkApiVersion: this.jm.sdkApiVersion,
          sdkApiVersionCode: this.jm.sdkApiVersionCode,
          sdkType: this.jm.sdkType,
          deviceInfo: this.jm.deviceInfo,
          clientFunction: this.jm.clientFunction,
          appInfo: this.jm.appInfo,
          tkVersion: this.jm.tkVersion,
          adSdkVersion: this.jm.adSdkVersion,
          networkInfo: this.jm.networkInfo,
          clientDynamicType: this.jm.clientDynamicType,
          abi: this.jm.abi,
          socName: this.jm.socName,
          boardPlatform: this.jm.boardPlatform,
          kGeoInfo: {},
          ext: {
            modeInfo: {
              cpuCount: this.jm.ext.modeInfo?.["cpuCount"] || "",
              cpuAbi: this.jm.ext.modeInfo?.["cpuAbi"] || "",
              batteryPercent: Math.round(randomInt(50, 100)),
              totalMemorySize: Math.round(randomInt(10702063104, 12702063104)),
              availableMemorySize: Math.round(randomInt(2211751424, 3211751424)),
              totalDiskSize: Math.round(randomInt(230089280512, 270089280512)),
              availableDiskSize: Math.round(randomInt(171774987264, 191774987264)),
              imsi: "",
              iccid: "",
              bootTime: Math.round(randomInt(7231, 16964)),
              romName: this.jm.ext.modeInfo?.["romName"] || "",
              romVersion: this.jm.ext.modeInfo?.["romVersion"] || "",
              romBuildTimestamp: this.jm.ext.modeInfo?.["romBuildTimestamp"] || "",
              ringerMode: 2,
              audioStreamInfo: this.jm.ext.modeInfo?.["audioStreamInfo"] || "",
              baseBandVersion: this.jm.ext.modeInfo?.["baseBandVersion"] || "",
              fingerPrint: this.jm.ext.modeInfo?.["fingerPrint"] || "",
              screenBrightness: -1,
              isCharging: false,
              chargeType: 0,
              simCardInfo: {
                phoneCount: 2,
                activePhoneCount: 0
              },
              environmentInfo: {
                isRoot: 2,
                isXPosed: 2,
                isFrameworkHooked: 2,
                isVirtual: 0,
                isAdbEnabled: 2,
                isEmulator: 2,
                isGroupControl: 2
              },
              sensorEventInfoList: [{
                sensorType: 1,
                timestamp: timestamp(10),
                values: [randomInt(0.8677372145652771, 0.8977372145652771), randomInt(4.020390605926514, 4.370390605926514), randomInt(8.527521896362305, 8.927521896362306)]
              }, {
                sensorType: 4,
                timestamp: timestamp(10),
                values: [randomInt(0.03578991305828094, 0.04178991305828095), -1 * randomInt(0.10087486684322357, 0.15087486684322357), -1 * randomInt(-0.011838415414094925, 0.12183841541409493)]
              }, {
                sensorType: 9,
                timestamp: timestamp(10),
                values: [randomInt(0.40329672932624816, 0.4332967293262482), randomInt(3.8631939697265625, 3.8931939697265623), randomInt(8.895574951171875, 9.005574951171875)]
              }]
            }
          },
          appUserInfo: {
            userRecoBit: 1
          },
          timestamp: timestamp(13),
          inspireTaskReportParam: {
            taskId: _0x55af09.businessId,
            posId: _0x55af09.posId,
            taskSessionId: this.bxsj,
            ecpm: randomInt(30000, 50000),
            neoInfos: [{
              idempotentId: this.llsid + "_" + this.adid,
              taskType: 1,
              extParam: {
                taskToken: _0x55af09.extParams,
                llsid: this.llsid,
                creativeId: this.adid
              }
            }]
          }
        },
        _0x1c51e9 = await this.ksaes(JSON.stringify(_0x5ca57c));
      if (_0x1c51e9) {
        let _0x4f99df = {
            version: this.jm.SDKVersion,
            appVersion: this.jm.appVersion,
            appId: "1091400011",
            message: _0x1c51e9
          },
          _0x1ca869 = "https://tube.e.kuaishou.com/rest/e/tube/inspire/task/report",
          _0x585845 = await this.sig(_0x1ca869, _0x4f99df, "sig3");
        if (_0x585845) {
          this.headers["Ks-Sig3"] = _0x585845;
          let _0x4ee200 = await this.task("post", _0x1ca869, this.headers, JSON.stringify(_0x4f99df));
          if (_0x4ee200.result == 1) {
            let _0x55e227 = JSON.parse(gzipde(AESECB(1, _0x4ee200.data, "GWL8jXHLnzp63QDH")));
            this.log("账号[" + this.num + "]：看短剧广告获得" + _0x55e227.amount + "金币");
            if (_0x55e227.popUp) {
              if (_0x55e227.popUp.data.buttonInfo) {
                if (_0x55e227.popUp.data.buttonInfo.linkType == 4) {
                  let _0x312a21 = JSON.parse(Buffer.from(_0x55e227.popUp.data.buttonInfo.linkUrl, "base64").toString("utf-8"));
                  await wait(getRandomNumber(1, 2));
                  await this.ad(_0x312a21.posId);
                  await wait(getRandomNumber(15, 20));
                  await this.kdjgg(_0x312a21);
                }
              }
            }
          } else {
            this.log("账号[" + this.num + "]：" + _0x4ee200.errorMsg);
          }
        } else {
          this.log("账号[" + this.num + "]：获取sig失败");
        }
      } else {
        this.log("账号[" + this.num + "]：获取aes加密失败");
      }
    } catch (_0x25c815) {
      this.log("账号[" + this.num + "]", _0x25c815);
    }
  }
  async hqdjid1() {
    try {
      let _0x581b48 = {
          appVersion: this.jm.appVersion,
          kpn: this.jm.kpn,
          channel: this.jm.channel,
          originChannel: this.jm.originChannel,
          protocolVersion: this.jm.protocolVersion,
          kwaiMerchantSdkVersion: this.jm.kwaiMerchantSdkVersion,
          SDKVersion: this.jm.SDKVersion,
          SDKVersionCode: this.jm.SDKVersionCode,
          sdkApiVersion: this.jm.sdkApiVersion,
          sdkApiVersionCode: this.jm.sdkApiVersionCode,
          sdkType: this.jm.sdkType,
          deviceInfo: this.jm.deviceInfo,
          clientFunction: this.jm.clientFunction,
          appInfo: this.jm.appInfo,
          tkVersion: this.jm.tkVersion,
          adSdkVersion: this.jm.adSdkVersion,
          networkInfo: this.jm.networkInfo,
          clientDynamicType: this.jm.clientDynamicType,
          abi: this.jm.abi,
          socName: this.jm.socName,
          boardPlatform: this.jm.boardPlatform,
          kGeoInfo: {},
          ext: {
            modeInfo: {
              cpuCount: this.jm.ext.modeInfo?.["cpuCount"] || "",
              cpuAbi: this.jm.ext.modeInfo?.["cpuAbi"] || "",
              batteryPercent: Math.round(randomInt(50, 100)),
              totalMemorySize: Math.round(randomInt(10702063104, 12702063104)),
              availableMemorySize: Math.round(randomInt(2211751424, 3211751424)),
              totalDiskSize: Math.round(randomInt(230089280512, 270089280512)),
              availableDiskSize: Math.round(randomInt(171774987264, 191774987264)),
              imsi: "",
              iccid: "",
              bootTime: Math.round(randomInt(7231, 16964)),
              romName: this.jm.ext.modeInfo?.["romName"] || "",
              romVersion: this.jm.ext.modeInfo?.["romVersion"] || "",
              romBuildTimestamp: this.jm.ext.modeInfo?.["romBuildTimestamp"] || "",
              ringerMode: 2,
              audioStreamInfo: this.jm.ext.modeInfo?.["audioStreamInfo"] || "",
              baseBandVersion: this.jm.ext.modeInfo?.["baseBandVersion"] || "",
              fingerPrint: this.jm.ext.modeInfo?.["fingerPrint"] || "",
              screenBrightness: -1,
              isCharging: false,
              chargeType: 0,
              simCardInfo: {
                phoneCount: 2,
                activePhoneCount: 0
              },
              environmentInfo: {
                isRoot: 2,
                isXPosed: 2,
                isFrameworkHooked: 2,
                isVirtual: 0,
                isAdbEnabled: 2,
                isEmulator: 2,
                isGroupControl: 2
              }
            }
          },
          appUserInfo: {
            userRecoBit: 1
          },
          timestamp: timestamp(13),
          tubeParam: {
            feedJumpSource: 1,
            jumpSource: 1,
            tubeId: this.djid,
            pcount: 30,
            pcursor: 1,
            isAd: false,
            favorite: false
          }
        },
        _0x5ba9e8 = await this.ksaes(JSON.stringify(_0x581b48));
      if (_0x5ba9e8) {
        let _0x303a89 = {
            version: this.jm.SDKVersion,
            appVersion: this.jm.appVersion,
            appId: "1091400011",
            message: _0x5ba9e8
          },
          _0x27e2ee = "https://tube.e.kuaishou.com/rest/e/tube/app/feed",
          _0x3e5c18 = await this.sig(_0x27e2ee, _0x303a89, "sig1");
        if (_0x3e5c18) {
          this.headers["Ks-Sig1"] = _0x3e5c18;
          let _0x21e1fa = await this.task("post", _0x27e2ee, this.headers, JSON.stringify(_0x303a89));
          if (_0x21e1fa.result == 1) {
            let _0x21e6a6 = JSON.parse(gzipde(AESECB(1, _0x21e1fa.data, "GWL8jXHLnzp63QDH")));
            this.djid1 = _0x21e6a6.tubeAppFeedDetailList[0].photoInfo.baseInfo.photoId;
          } else {
            this.log("账号[" + this.num + "]：" + _0x21e1fa.errorMsg);
          }
        } else {
          this.log("账号[" + this.num + "]：获取sig失败");
        }
      } else {
        this.log("账号[" + this.num + "]：获取aes加密失败");
      }
    } catch (_0x3e1690) {
      this.log("账号[" + this.num + "]", _0x3e1690);
    }
  }
  async kdj() {
    try {
      let _0x59a5c4 = {
          appVersion: this.jm.appVersion,
          kpn: this.jm.kpn,
          channel: this.jm.channel,
          originChannel: this.jm.originChannel,
          protocolVersion: this.jm.protocolVersion,
          kwaiMerchantSdkVersion: this.jm.kwaiMerchantSdkVersion,
          SDKVersion: this.jm.SDKVersion,
          SDKVersionCode: this.jm.SDKVersionCode,
          sdkApiVersion: this.jm.sdkApiVersion,
          sdkApiVersionCode: this.jm.sdkApiVersionCode,
          sdkType: this.jm.sdkType,
          deviceInfo: this.jm.deviceInfo,
          clientFunction: this.jm.clientFunction,
          appInfo: this.jm.appInfo,
          tkVersion: this.jm.tkVersion,
          adSdkVersion: this.jm.adSdkVersion,
          networkInfo: this.jm.networkInfo,
          clientDynamicType: this.jm.clientDynamicType,
          abi: this.jm.abi,
          socName: this.jm.socName,
          boardPlatform: this.jm.boardPlatform,
          kGeoInfo: {},
          ext: {
            modeInfo: {
              cpuCount: this.jm.ext.modeInfo?.["cpuCount"] || "",
              cpuAbi: this.jm.ext.modeInfo?.["cpuAbi"] || "",
              batteryPercent: Math.round(randomInt(50, 100)),
              totalMemorySize: Math.round(randomInt(10702063104, 12702063104)),
              availableMemorySize: Math.round(randomInt(2211751424, 3211751424)),
              totalDiskSize: Math.round(randomInt(230089280512, 270089280512)),
              availableDiskSize: Math.round(randomInt(171774987264, 191774987264)),
              imsi: "",
              iccid: "",
              bootTime: Math.round(randomInt(7231, 16964)),
              romName: this.jm.ext.modeInfo?.["romName"] || "",
              romVersion: this.jm.ext.modeInfo?.["romVersion"] || "",
              romBuildTimestamp: this.jm.ext.modeInfo?.["romBuildTimestamp"] || "",
              ringerMode: 2,
              audioStreamInfo: this.jm.ext.modeInfo?.["audioStreamInfo"] || "",
              baseBandVersion: this.jm.ext.modeInfo?.["baseBandVersion"] || "",
              fingerPrint: this.jm.ext.modeInfo?.["fingerPrint"] || "",
              screenBrightness: -1,
              isCharging: false,
              chargeType: 0,
              simCardInfo: {
                phoneCount: 2,
                activePhoneCount: 0
              },
              environmentInfo: {
                isRoot: 2,
                isXPosed: 2,
                isFrameworkHooked: 2,
                isVirtual: 0,
                isAdbEnabled: 2,
                isEmulator: 2,
                isGroupControl: 2
              }
            }
          },
          appUserInfo: {
            userRecoBit: 1
          },
          timestamp: timestamp(13),
          inspireEventReportParam: {
            eventType: "WATCH_TUBE",
            eventTime: timestamp(13),
            data: "{\"tubeId\":\"" + this.djid + "\",\"episodeNumber\":1,\"photoId\":\"" + this.djid1 + "\",\"watchTime\":30}"
          }
        },
        _0x30ee0c = await this.ksaes(JSON.stringify(_0x59a5c4));
      if (_0x30ee0c) {
        let _0x63f64 = {
            version: this.jm.SDKVersion,
            appVersion: this.jm.appVersion,
            appId: "1091400011",
            message: _0x30ee0c
          },
          _0x1763d9 = "https://tube.e.kuaishou.com/rest/e/tube/inspire/event/report",
          _0x561479 = await this.sig(_0x1763d9, _0x63f64, "sig3");
        if (_0x561479) {
          this.headers["Ks-Sig3"] = _0x561479;
          let _0x483413 = await this.task("post", _0x1763d9, this.headers, JSON.stringify(_0x63f64));
          _0x483413.result == 1 ? console.log("账号[" + this.num + "]：看短剧：" + _0x483413.errorMsg) : this.log("账号[" + this.num + "]：" + _0x483413.errorMsg);
        } else {
          this.log("账号[" + this.num + "]：获取sig失败");
        }
      } else {
        this.log("账号[" + this.num + "]：获取aes加密失败");
      }
    } catch (_0x54b054) {
      this.log("账号[" + this.num + "]", _0x54b054);
    }
  }
  async txks() {
    try {
      await wait(getRandomNumber(1, 2));
      this.headers1.Referer = "https://www.kuaishoupay.com/page/kspay-wallet-c-withdraw-h5/withdraw?accountGroupKey=XIFAN_CASH&withdrawAmount=" + JSON.parse(this.biz).fen + "&bizContent=" + encodeURIComponent(this.biz);
      let _0x514b72 = await this.task("post", "https://www.kuaishoupay.com/pay/account/h5/withdraw/withdraw_info", this.headers1, "account_group_key=XIFAN_CASH&providers=&bind_page_type=3&source=COMMON_WITHDRAW_PAGE&amount=" + JSON.parse(this.biz).fen);
      if (_0x514b72.code == "SUCCESS") {
        for (let _0x153df3 of _0x514b72.withdraw_provider_infos) {
          if (_0x153df3.has_bind) {
            this.log("账号[" + this.num + "]：已绑定账号：" + _0x153df3.nickname + "，绑定方式：" + _0x153df3.provider);
            msg += "账号[" + this.num + "]：已绑定账号：" + _0x153df3.nickname + "，绑定方式：" + _0x153df3.provider + "\n";
            await wait(getRandomNumber(1, 2));
            await this.txzb(_0x153df3.provider);
            break;
          }
        }
      } else {
        this.log("账号[" + this.num + "]：" + _0x514b72.msg);
      }
    } catch (_0x2a775a) {
      this.log("账号[" + this.num + "]", _0x2a775a);
    }
  }
  async hqsjh() {
    try {
      let _0x5ab25f = await this.task("post", "https://www.kuaishoupay.com/pay/account/h5/account_mask_phone", this.headers1, "");
      _0x5ab25f.code == "SUCCESS" ? this.log("账号[" + this.num + "]：绑定手机号：" + _0x5ab25f.mask_phone_number) : this.log("账号[" + this.num + "]：" + _0x5ab25f.msg);
    } catch (_0x4427cb) {
      this.log("账号[" + this.num + "]", _0x4427cb);
    }
  }
  async txzb(_0x50cda4) {
    try {
      let _0x1db6ca = await this.task("post", "https://www.kuaishoupay.com/pay/account/h5/withdraw/apply", this.headers1, "account_group_key=XIFAN_CASH&mobile_code=&fen=" + JSON.parse(this.biz).fen + "&provider=" + _0x50cda4 + "&total_fen=" + JSON.parse(this.biz).fen + "&commission_fen=0&third_account=" + _0x50cda4 + "&attach=&biz_content=" + encodeURIComponent(this.biz) + "&session_id=&bank_id=&pop_window_types=&bank_token=&skip_show_third_bind_info=false&agree_sign_policy=false");
      _0x1db6ca.code == "WITHDRAW_IN_APP_SHOW_THIRD_BIND_INFO" ? (this.log("账号[" + this.num + "]：本次提现账号：" + _0x1db6ca.nick_name), msg += "账号[" + this.num + "]：本次提现账号：" + _0x1db6ca.nick_name + "\n") : (this.log("账号[" + this.num + "]：" + _0x1db6ca.msg), msg += "账号[" + this.num + "]：" + _0x1db6ca.msg + "\n");
    } catch (_0x46c44e) {
      this.log("账号[" + this.num + "]", _0x46c44e);
    }
  }
  async txjs(_0xa01b04) {
    try {
      let _0x36fe55 = await this.task("post", "https://www.kuaishoupay.com/pay/account/h5/withdraw/apply", this.headers1, "account_group_key=XIFAN_CASH&mobile_code=&fen=" + JSON.parse(this.biz).fen + "&provider=" + _0xa01b04 + "&total_fen=" + JSON.parse(this.biz).fen + "&commission_fen=0&third_account=" + _0xa01b04 + "&attach=&biz_content=" + encodeURIComponent(this.biz) + "&session_id=&bank_id=&pop_window_types=&bank_token=&skip_show_third_bind_info=true&agree_sign_policy=false");
      _0x36fe55.code == "SUCCESS" ? (this.log("账号[" + this.num + "]：" + _0x36fe55.msg), msg += "账号[" + this.num + "]：" + _0x36fe55.msg + "\n") : (this.log("账号[" + this.num + "]：" + _0x36fe55.msg), msg += "账号[" + this.num + "]：" + _0x36fe55.msg + "\n");
    } catch (_0x338bef) {
      this.log("账号[" + this.num + "]", _0x338bef);
    }
  }
  async task(_0x26ff42, taskurl, taskheader, taskbody, _0x2deee5 = 3) {
    _0x26ff42 == "delete" ? _0x26ff42 = _0x26ff42.toUpperCase() : _0x26ff42 = _0x26ff42;
    const request = require("request");
    if (_0x26ff42 == "post") {
      delete taskheader["Content-Type"];
      delete taskheader["content-type"];
      delete taskheader["Content-Length"];
      delete taskheader["content-length"];
      safeGet(taskbody) ? taskheader["Content-Type"] = "application/json" : taskheader["Content-Type"] = "application/x-www-form-urlencoded";
      taskbody && (taskheader["Content-Length"] = lengthInUtf8Bytes(taskbody));
    }
    _0x26ff42 == "get" && (delete taskheader["Content-Type"], delete taskheader["content-length"], delete taskheader["content-type"], delete taskheader["Content-Length"]);
    taskheader.Host = taskurl.replace("//", "/").split("/")[1];
    if (_0x26ff42.indexOf("T") < 0) {
      var _0x268ff6 = {
        url: taskurl,
        headers: taskheader,
        body: taskbody,
        followRedirect: false,
        timeout: 20000
      };
    } else {
      var _0x268ff6 = {
        url: taskurl,
        headers: taskheader,
        form: JSON.parse(taskbody),
        followRedirect: false,
        timeout: 20000
      };
    }
    dldz !== undefined && (_0x268ff6.proxy = "http://" + this.dlip);
    return new Promise(async _0x1f36ee => {
      request[_0x26ff42.toLowerCase()](_0x268ff6, async (_0x187bca, _0x416079, _0x3884cd) => {
        try {
          LOGS == 1 && (console.log("==================请求=================="), console.log(JSON.stringify(_0x268ff6)), console.log("==================返回=================="), console.log(_0x3884cd));
        } catch (_0x276a3f) {} finally {
          !_0x187bca ? safeGet(_0x3884cd) ? _0x3884cd = JSONbig.parse(_0x3884cd) : _0x3884cd = _0x3884cd : _0x2deee5 > 0 ? dldz == undefined ? (await wait(5), _0x3884cd = await this.task(_0x26ff42, taskurl, taskheader, taskbody, _0x2deee5 - 1)) : (await this.hqdl(), _0x3884cd = await this.task(_0x26ff42, taskurl, taskheader, taskbody, _0x2deee5 - 1)) : _0x3884cd = {
            result: false
          };
          return _0x1f36ee(_0x3884cd);
        }
      });
    });
  }
}
(async () => {
  const _0x3d7dbb = Date.now();
  console.log(NAME);
  console.log("北京时间：" + formatDate());
  checkEnv();
  dldz === undefined ? console.log("当前使用本地网络运行脚本") : console.log("当前使用代理网络运行脚本");
  const _0x2fd7ef = bfs;
  await startWithConcurrency(userList, _0x2fd7ef);
  await SendMsg(msg);
  const _0x31fdb9 = Date.now();
  done(_0x3d7dbb, _0x31fdb9);
})().catch(_0x43e40c => {
  console.log(_0x43e40c);
});
async function SendMsg(_0x53ee5c) {
  if (!_0x53ee5c) {
    return;
  }
  var _0x1619f0 = require("./sendNotify");
  await _0x1619f0.sendNotify(NAME, _0x53ee5c);
}
async function startWithConcurrency(_0x32ae6a, _0x3d9d1a) {
  const taskQueue = [..._0x32ae6a];
  async function _0x469d9e() {
    if (taskQueue.length === 0) {
      return;
    }
    const _0x223325 = taskQueue.shift();
    try {
      await _0x223325.start();
    } catch (_0x2aa6e0) {
      console.log(_0x2aa6e0);
    }
    taskQueue.length > 0 && (await _0x469d9e());
  }
  const _0x47eacc = Array.from({
    length: _0x3d9d1a
  }, _0x469d9e);
  await Promise.all(_0x47eacc);
  console.log("\n\n任务完成，整理日志\n\n");
  for (let _0x55b555 in logsCollection) {
    console.log("----------账号[" + _0x55b555 + "]------------");
    logsCollection[_0x55b555].forEach(_0x1a20cd => console.log(_0x1a20cd));
  }
}
function task(_0x10d0b4, taskurl, taskheader, taskbody) {
  _0x10d0b4 == "delete" ? _0x10d0b4 = _0x10d0b4.toUpperCase() : _0x10d0b4 = _0x10d0b4;
  const request = require("request");
  if (_0x10d0b4 == "post") {
    delete taskheader["Content-Type"];
    delete taskheader["content-type"];
    delete taskheader["Content-Length"];
    delete taskheader["content-length"];
    safeGet(taskbody) ? taskheader["Content-Type"] = "application/json" : taskheader["Content-Type"] = "application/x-www-form-urlencoded";
    taskbody && (taskheader["Content-Length"] = lengthInUtf8Bytes(taskbody));
  }
  _0x10d0b4 == "get" && (delete taskheader["Content-Type"], delete taskheader["content-length"], delete taskheader["content-type"], delete taskheader["Content-Length"]);
  taskheader.Host = taskurl.replace("//", "/").split("/")[1];
  if (_0x10d0b4.indexOf("T") < 0) {
    var _0x14f79d = {
      url: taskurl,
      headers: taskheader,
      body: taskbody,
      followRedirect: false,
      timeout: 20000
    };
  } else {
    var _0x14f79d = {
      url: taskurl,
      headers: taskheader,
      form: JSON.parse(taskbody),
      followRedirect: false,
      timeout: 20000
    };
  }
  return new Promise(async _0x3c4bd5 => {
    request[_0x10d0b4.toLowerCase()](_0x14f79d, async (_0x5cf0bf, _0x20dc38, _0x25b82f) => {
      try {
        if (LOGS == 1) {
          console.log("==================请求==================");
          console.log(JSON.stringify(_0x14f79d));
          console.log("==================返回==================");
          console.log(_0x5cf0bf);
          console.log(JSON.stringify(_0x20dc38));
        }
      } catch (_0x4b7b53) {} finally {
        !_0x5cf0bf ? safeGet(_0x25b82f) ? _0x25b82f = JSON.parse(_0x25b82f) : _0x25b82f = _0x25b82f : (await wait(2), _0x25b82f = await task(_0x10d0b4, taskurl, taskheader, taskbody));
        return _0x3c4bd5(_0x25b82f);
      }
    });
  });
}
function safeGet(_0x39ce91) {
  try {
    if (typeof JSON.parse(_0x39ce91) == "object") {
      return true;
    }
  } catch (_0x410bc9) {
    return false;
  }
}
function cfz(_0x246b9a) {
  const _0x347e6a = Math.floor(_0x246b9a / 60),
    _0x2068fe = _0x246b9a % 60;
  return {
    minutes: _0x347e6a,
    remainingSeconds: _0x2068fe
  };
}
function lengthInUtf8Bytes(_0x5bbd22) {
  let _0x23c20d = encodeURIComponent(_0x5bbd22).match(/%[89ABab]/g);
  return _0x5bbd22.length + (_0x23c20d ? _0x23c20d.length : 0);
}
async function checkEnv() {
  let _0x353982 = ckk[VALY] || CK,
    _0x4cc7c6 = 0;
  if (_0x353982) {
    for (let _0x3618bd of _0x353982) {
      userList.push(new Bar(_0x3618bd));
    }
    _0x4cc7c6 = userList.length;
  } else {
    console.log("\n【" + NAME + "】：未填写变量: " + VALY);
    process.exit();
  }
  console.log("共找到" + _0x4cc7c6 + "个账号");
  return userList;
}
function timestamp(_0x28d712) {
  const _0x1dafad = new Date().getTime();
  return Math.round(_0x1dafad / 10 ** (13 - _0x28d712)).toString();
}
function base64pjjm(_0x2a21c8) {
  const _0x2bb68f = Buffer.from(_0x2a21c8, "base64"),
    _0x3ada4b = _0x2bb68f.slice(0, 16).toString("base64"),
    _0x14ef91 = _0x2bb68f.slice(16, _0x2bb68f.length).toString("base64");
  return [_0x3ada4b, _0x14ef91];
}
function wait(_0x4f2515) {
  return new Promise(function (_0x4406cb) {
    setTimeout(_0x4406cb, _0x4f2515 * 1000);
  });
}
function base64pj(_0x2250ed, _0x13c868) {
  const _0x1518e5 = Buffer.from(_0x2250ed, "base64"),
    _0x2025e9 = Buffer.from(_0x13c868, "base64"),
    _0x1dbb3d = Buffer.concat([_0x1518e5, _0x2025e9]);
  return _0x1dbb3d.toString("base64");
}
function extractCaptcha(_0x21dbf4) {
  const _0x5ebc8b = /\b\d{4,8}\b/,
    _0xad39a0 = _0x21dbf4.match(_0x5ebc8b);
  return _0xad39a0 ? _0xad39a0[0] : null;
}
function randomString(_0x2841bd, _0x4aac2f) {
  _0x2841bd = _0x2841bd || 32;
  let _0x452b9f = "";
  if (_0x4aac2f == 0) {
    _0x452b9f += "0123456789";
  } else {
    if (_0x4aac2f == 1) {
      _0x452b9f += "0123456789";
      _0x452b9f += "abcdef";
    } else {
      if (_0x4aac2f == 2) {
        _0x452b9f += "abcdefghijklmnopqrstuvwxyz";
        _0x452b9f += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      } else {
        if (_0x4aac2f == 3) {
          _0x452b9f += "0123456789";
          _0x452b9f += "abcdefghijklmnopqrstuvwxyz";
          _0x452b9f += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        } else {
          if (_0x4aac2f == 4) {
            _0x452b9f += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          } else {
            _0x4aac2f == 5 && (_0x452b9f += "123456789");
          }
        }
      }
    }
  }
  const _0x113de4 = _0x452b9f.length;
  let _0x115c3d = "";
  for (let _0x13c007 = 0; _0x13c007 < _0x2841bd; _0x13c007++) {
    _0x115c3d += _0x452b9f.charAt(Math.floor(Math.random() * _0x113de4));
  }
  return _0x115c3d;
}
function randomUUID() {
  return randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
}
function randomPattern(_0xb65401, _0x59ec12 = "abcdef0123456789") {
  let _0x298257 = "";
  for (let _0x1d0da9 of _0xb65401) {
    if (_0x1d0da9 == "x") {
      _0x298257 += _0x59ec12.charAt(Math.floor(Math.random() * _0x59ec12.length));
    } else {
      _0x1d0da9 == "X" ? _0x298257 += _0x59ec12.charAt(Math.floor(Math.random() * _0x59ec12.length)).toUpperCase() : _0x298257 += _0x1d0da9;
    }
  }
  return _0x298257;
}
function formatDate() {
  let _0x46b039 = new Date();
  const _0x2e01dd = _0x46b039.getFullYear(),
    _0x54577b = padZero(_0x46b039.getMonth() + 1),
    _0x712711 = padZero(_0x46b039.getDate()),
    _0x42ba1d = padZero(_0x46b039.getHours()),
    _0x4a5295 = padZero(_0x46b039.getMinutes()),
    _0x4df57a = padZero(_0x46b039.getSeconds());
  return _0x2e01dd + "-" + _0x54577b + "-" + _0x712711 + " " + _0x42ba1d + ":" + _0x4a5295 + ":" + _0x4df57a;
}
function padZero(_0x22aa58) {
  return _0x22aa58.toString().padStart(2, "0");
}
function getRandomNumber(_0x19d1ec, _0x430973) {
  var _0x31175c = Math.floor(Math.random() * (_0x430973 - _0x19d1ec + 1) + _0x19d1ec),
    _0x53e031 = Math.random() < 0.5 ? Math.floor(Math.random() * 100) : Math.floor(Math.random() * 101);
  return _0x31175c + "." + _0x53e031.toString().padStart(2, "0");
}
function done(_0x12fe63, _0x58f572) {
  const _0x573477 = (_0x58f572 - _0x12fe63) / 1000;
  console.log("\n[任务执行完毕 " + NAME + "] 耗时：" + _0x573477.toFixed(2) + "秒");
  process.exit(0);
}
function MD5(_0x5dcd69) {
  return CryptoJS.MD5(_0x5dcd69).toString();
}
function SHA1(_0x5c1397) {
  return CryptoJS.SHA1(_0x5c1397).toString();
}
function SHA256(_0x45c82f) {
  return CryptoJS.SHA256(_0x45c82f).toString();
}
function base64(_0x2ebb00, _0x34c0b0) {
  if (_0x2ebb00 == 0) {
    return Buffer.from(_0x34c0b0).toString("base64");
  }
  if (_0x2ebb00 == 1) {
    return Buffer.from(_0x34c0b0, "base64").toString("utf-8");
  }
}
function AESECB(_0x500d55, _0x588ea4, _0x56d2b0) {
  const _0x27a09c = CryptoJS.enc.Utf8.parse(_0x56d2b0);
  if (_0x500d55 == 0) {
    let _0x3ef773 = CryptoJS.enc.Utf8.parse(_0x588ea4),
      _0x43c010 = CryptoJS.AES.encrypt(_0x3ef773, _0x27a09c, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      }).toString();
    return _0x43c010;
  }
  if (_0x500d55 == 1) {
    let _0x244e9e = CryptoJS.AES.decrypt(_0x588ea4, _0x27a09c, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Base64);
    return _0x244e9e;
  }
}
function AESCBC(_0x5c6341, _0x2a1f9e, _0x34cc9b, _0xd00c64) {
  const _0x428b5e = CryptoJS.enc.Utf8.parse(_0x34cc9b);
  let _0x53d776 = CryptoJS.enc.Utf8.parse(_0xd00c64);
  if (_0x5c6341 == 0) {
    let _0x26dcf0 = CryptoJS.enc.Utf8.parse(_0x2a1f9e),
      _0x1e0df9 = CryptoJS.AES.encrypt(_0x26dcf0, _0x428b5e, {
        iv: _0x53d776,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      }).toString();
    return _0x1e0df9;
  }
  if (_0x5c6341 == 1) {
    let _0x81c8be = CryptoJS.AES.decrypt(_0x2a1f9e, _0x428b5e, {
      iv: _0x53d776,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);
    return _0x81c8be;
  }
}
function AESCBCHEX(_0x43bc05, _0x5f11e7, _0x484ee9, _0x58b613) {
  const _0x121fb5 = CryptoJS.enc.Hex.parse(_0x484ee9);
  let _0x230939 = CryptoJS.enc.Hex.parse(_0x58b613);
  if (_0x43bc05 == 0) {
    let _0x16aef1 = CryptoJS.enc.Utf8.parse(_0x5f11e7),
      _0x4fcc93 = CryptoJS.AES.encrypt(_0x16aef1, _0x121fb5, {
        iv: _0x230939,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      }).toString();
    return _0x4fcc93;
  }
  if (_0x43bc05 == 1) {
    let _0x557185 = CryptoJS.AES.decrypt(_0x5f11e7, _0x121fb5, {
      iv: _0x230939,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);
    return _0x557185;
  }
}
function DESCBC(_0x1f5f04, _0x45a62b, _0x3754be, _0x1ac2e2) {
  const _0x24c1f2 = CryptoJS.enc.Utf8.parse(_0x3754be);
  let _0x41940e = CryptoJS.enc.Utf8.parse(_0x1ac2e2);
  if (_0x1f5f04 == 0) {
    let _0x11203a = CryptoJS.enc.Utf8.parse(_0x45a62b),
      _0x215d70 = CryptoJS.DES.encrypt(_0x11203a, _0x24c1f2, {
        iv: _0x41940e,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      }).toString();
    return _0x215d70;
  }
  if (_0x1f5f04 == 1) {
    let _0x18fd7c = CryptoJS.DES.decrypt(_0x45a62b, _0x24c1f2, {
      iv: _0x41940e,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);
    return _0x18fd7c;
  }
}
function AESECBb64(_0x1e4c75, _0x25954e, _0x44bfa) {
  const _0x5c5731 = CryptoJS.enc.Base64.parse(_0x44bfa);
  if (_0x1e4c75 == 0) {
    let _0x430f19 = CryptoJS.enc.Utf8.parse(_0x25954e),
      _0x4ca0a9 = CryptoJS.AES.encrypt(_0x430f19, _0x5c5731, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      }).toString();
    return _0x4ca0a9;
  }
  if (_0x1e4c75 == 1) {
    let _0x482fe6 = CryptoJS.AES.decrypt(_0x25954e, _0x5c5731, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);
    return _0x482fe6;
  }
}
function AESCBCb64(_0x20aeee, _0x2cda3b, _0x5f5a79, _0x523da1) {
  const _0x4d5b62 = CryptoJS.enc.Base64.parse(_0x5f5a79);
  let _0x1e73fc = CryptoJS.enc.Base64.parse(_0x523da1);
  if (_0x20aeee == 0) {
    let _0x302993 = CryptoJS.enc.Utf8.parse(_0x2cda3b),
      _0x5ef1c0 = CryptoJS.AES.encrypt(_0x302993, _0x4d5b62, {
        iv: _0x1e73fc,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      }).toString();
    return _0x5ef1c0;
  }
  if (_0x20aeee == 1) {
    let _0x5c23d1 = CryptoJS.AES.decrypt(_0x2cda3b, _0x4d5b62, {
      iv: _0x1e73fc,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);
    return _0x5c23d1;
  }
}
function RSAJM(_0x3b31ff, _0xc57738) {
  const _0x4c00ba = "-----BEGIN PUBLIC KEY-----" + _0xc57738 + "-----END PUBLIC KEY-----",
    _0x4d88b2 = new NodeRSA(_0x4c00ba);
  _0x4d88b2.setOptions({
    encryptionScheme: "pkcs1"
  });
  const _0xf04540 = _0x4d88b2.encrypt(_0x3b31ff, "base64");
  return _0xf04540;
}
function RSAJEM(_0x31b2a3, _0x3f76bf) {
  const _0x9d964d = "-----BEGIN PRIVATE KEY-----" + _0x3f76bf + "-----END PRIVATE KEY-----",
    _0x54e3aa = new NodeRSA(_0x9d964d);
  _0x54e3aa.setOptions({
    encryptionScheme: "pkcs1"
  });
  const _0x5b24d7 = _0x54e3aa.decrypt(_0x31b2a3, "utf8");
  return _0x5b24d7;
}
async function replaceCurrentScript(_0x2a7cfe) {
  const _0x60e7be = require("fs").promises,
    _0x40b8e3 = process.argv[1];
  await _0x60e7be.writeFile(_0x40b8e3, _0x2a7cfe);
  console.log("脚本更新完成，请重新运行脚本");
  process.exit();
}
function hmacsha256(_0x4beede, _0x4e3598) {
  return CryptoJS.HmacSHA256(_0x4beede, _0x4e3598).toString();
}
function pxzh(_0x5b966d) {
  for (var _0x147f9b = {}, _0x5d7cf5 = Object.keys(_0x5b966d).sort(), _0x376e01 = 0; _0x376e01 < _0x5d7cf5.length; _0x376e01++) {
    _0x147f9b[_0x5d7cf5[_0x376e01]] = _0x5b966d[_0x5d7cf5[_0x376e01]];
  }
  return _0x147f9b;
}
function zhjdz(_0x102b82) {
  let _0x3854c4 = "";
  for (const [_0x55c489, _0x3f0967] of Object.entries(_0x102b82)) {
    _0x3854c4 += _0x55c489 + "=" + _0x3f0967 + "&";
  }
  return _0x3854c4 = _0x3854c4.slice(0, -1);
}
function zfcpx(_0x24b7fb) {
  const _0x4cf719 = new URLSearchParams(_0x24b7fb),
    _0x236f38 = Array.from(_0x4cf719.entries()).sort((_0xa756be, _0x50b694) => _0xa756be[0].localeCompare(_0x50b694[0])),
    _0x1b34a7 = _0x236f38.map(_0x37b5ec => _0x37b5ec[0] + "=" + _0x37b5ec[1]).join("&");
  return _0x1b34a7;
}
function randomInt(_0x114350, _0x23e137) {
  return Math.random() * (_0x23e137 - _0x114350) + _0x114350;
}
function DES3ECB(_0x537019, _0x66180b, _0x5924b3) {
  const _0x55d4f1 = CryptoJS.enc.Utf8.parse(_0x5924b3);
  if (_0x537019 == 0) {
    let _0x2bb405 = CryptoJS.enc.Utf8.parse(_0x66180b),
      _0x4fd83d = CryptoJS.TripleDES.encrypt(_0x2bb405, _0x55d4f1, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      }).toString();
    return _0x4fd83d;
  }
  if (_0x537019 == 1) {
    let _0x7d69cb = CryptoJS.TripleDES.decrypt(_0x66180b, _0x55d4f1, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);
    return _0x7d69cb;
  }
}
function gzipen(_0x3f96fa) {
  const _0x40d00e = Buffer.from(_0x3f96fa, "utf8"),
    _0x57fdce = zlib.gzipSync(_0x40d00e),
    _0xd034ad = _0x57fdce.toString("base64");
  return _0xd034ad;
}
function gzipde(_0xda49ad) {
  const _0x45adf1 = Buffer.from(_0xda49ad, "base64"),
    _0x44f2de = zlib.gunzipSync(_0x45adf1).toString("utf8");
  return _0x44f2de;
}