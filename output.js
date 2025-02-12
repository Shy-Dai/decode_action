//Wed Feb 12 2025 01:11:42 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const r = require("axios");
class Z {
  constructor(G = null, o = null, U = null) {
    const Q = {
      token: G,
      deviceid: o,
      uid: U
    };
    this.data = Q;
  }
  get(t, G = null) {
    return this.data.hasOwnProperty(t) ? this.data[t] : G;
  }
  set(t, G) {
    this.data[t] = G;
  }
}
const R = new Z(),
  W = {
    "User-Agent": "okhttp/4.12.0",
    "Accept-Encoding": "gzip",
    "cache-control": "no-cache",
    token: null,
    deviceid: null,
    client: "app",
    devicetype: "Android"
  };
function f1() {
  const Q = {
      ...W
    },
    l = Q;
  l.token = R.get("token");
  l.deviceid = R.get("deviceid");
  return l;
}
const f2 = {
  "User-Agent": "okhttp/4.12.0",
  "Accept-Encoding": "gzip",
  "cache-control": "no-cache",
  token: null,
  deviceid: null,
  client: "app",
  devicetype: "Android",
  "content-type": "application/json; charset=UTF-8"
};
function f4() {
  const Q = {
      ...f2
    },
    l = Q;
  l.token = R.get("token");
  l.deviceid = R.get("deviceid");
  return l;
}
function f7() {
  const Q = {
      ...W
    },
    l = Q;
  l.token = R.get("token");
  l.deviceid = R.get("deviceid");
  return l;
}
let f8 = null;
async function f9(t) {
  const o = t.isDone || 0;
  console.log("----新用户每天可领0.3现金----");
  const U = true;
  if (U === o) {
    console.log("任务已完成✅");
  } else {
    console.log("任务未完成❌");
    console.log("去完成任务");
    const l = Math.floor(Math.random() * 26) + 45;
    console.log("随机延迟" + l + "秒后完成任务");
    await fG(l * 1000);
    await ff();
  }
}
async function ff() {
  const G = "https://new.tianjinzhitongdaohe.com/api/v1/app/welfare/newUserSeven";
  const o = f1();
  try {
    const U = await fetch(G, {
        method: "POST",
        headers: o
      }),
      Q = await U.json();
    if (Q.code === 200) {
      const d = Q.data;
      console.log("领取成功✅，获得" + d + "元");
    } else {
      console.log("领取失败❌，错误信息:", Q.msg || "未知错误");
    }
  } catch (F) {
    console.error("请求失败❌，错误信息:", F.message);
  }
}
async function fb(t) {
  let o = t.extraProgress === 0 ? 7 : t.extraProgress,
    U = t.taskList || [];
  let Q = U.find(F => F.number === o) || {},
    l = Q.isDone || false,
    q = Q.rewardNum || 0,
    A = true;
  console.log("----每日签到----");
  console.log("进度: 周" + o + " 奖励: " + q + "金币");
  if (l === A) {
    console.log("任务已完成✅");
  } else {
    console.log("任务未完成❌");
    console.log("去完成任务");
    const k = Math.floor(Math.random() * 26) + 45;
    console.log("随机延迟" + k + "秒后完成任务");
    await fG(k * 1000);
    await fe();
  }
}
async function fe() {
  const G = "https://new.tianjinzhitongdaohe.com/api/v1/app/welfare/sign",
    o = f1();
  try {
    const U = await fetch(G, {
        method: "POST",
        headers: o
      }),
      Q = await U.json();
    if (Q.code === 200) {
      const d = Q.data;
      console.log("签到成功✅，获得" + d + "金币");
    } else {
      console.log("签到失败❌，错误信息:", Q.msg);
    }
  } catch (F) {
    console.error("请求失败:", F);
  }
}
function fj(G) {
  const Q = G.extraProgress || 0,
    l = G.taskList || [],
    q = l.find(A => A.number === Q) || null;
  if (q) {
    const F = q.isDone || 0,
      T = q.rewardNum || 0,
      k = true;
    console.log("----每周福利----");
    console.log("进度: 周" + Q + " 奖励: " + T + "金币");
    if (k === F) {
      console.log("任务已完成✅");
    } else {
      console.log("任务未完成❌");
    }
  }
}
async function fO(t) {
  const o = t.extraProgress || 0;
  const U = t.extraReached || 0;
  const Q = t.taskNum || 0;
  console.log("----看视频领金币----");
  console.log("进度: " + o + "/" + U);
  if (U === o) {
    console.log("任务已完成✅");
  } else {
    console.log("任务未完成❌");
    console.log("去完成任务");
    const d = U - o;
    for (let q = 0; q < d; q++) {
      fP(Q);
      const F = Math.floor(Math.random() * 26) + 45;
      console.log("随机延迟" + F + "秒后继续");
      await fG(F * 1000);
    }
  }
}
async function fP(G) {
  const U = "https://new.tianjinzhitongdaohe.com/api/v1/app/welfare/watchAd",
    Q = {
      adId: G
    };
  const d = f4();
  try {
    const q = await fetch(U, {
        method: "POST",
        headers: d,
        body: JSON.stringify(Q)
      }),
      A = await q.json();
    if (A.code === 200) {
      const F = A.data;
      console.log("看视频领金币成功✅，获得" + F + "金币");
    } else {
      console.log("看视频领金币失败❌，错误信息:", A.msg);
      process.exit();
    }
  } catch (M) {
    console.error("请求失败:", M);
  }
}
async function ft(t) {
  const o = t.extraProgress || 0;
  const U = t.extraReached || 0;
  console.log("----看短剧领金币----");
  console.log("进度: " + o + "/" + U + "分钟");
  if (o >= U) {
    console.log("任务已完成✅");
  } else {
    console.log("任务未完成❌");
    console.log("去完成任务");
    await fJ();
    kid = fu[0];
    const q = await fv(kid);
    let A = kid,
      F = q[0],
      T = U - o,
      v = T * 60,
      M = 1,
      L = 0,
      x = 0,
      u = 0;
    while (L < v) {
      const J = Math.floor(Math.random() * 21) + 40;
      if (L + J >= v) {
        console.log("----模拟看剧中----");
      }
      await fk(J, A, M);
      L += J;
      const w = v - L;
      console.log("进度: 总观看时长: " + L + " 秒, 剩余观看时长: " + w + " 秒");
      const c = Math.floor(Math.random() * 15) + 70;
      console.log("等待 " + c + " 秒后继续看剧");
      await fG(c * 1000);
      M += 1;
      x += 1;
      u += 1;
      if (F === u) {
        M = 1;
        u = 0;
        await fJ();
        let N = 0;
        N += 1;
        if (N < fu.length) {
          kid = fu[N];
        } else {
          console.log("没有更多的短剧ID可供切换");
          break;
        }
        const B = fv(kid);
        F = B[0];
        A = kid;
      }
      if (x === 20) {
        x = 0;
        const I = Math.floor(Math.random() * 31) + 300;
        console.log("----⚠️防止IP被封置顶⚠️----");
        console.log("已观看" + L + "秒,随机延迟" + I + "秒后继续");
        await fG(I * 1000);
      }
      if (L >= v) {
        console.log("看剧完成✅");
        break;
      }
    }
  }
}
function fG(t) {
  return new Promise(G => setTimeout(G, t));
}
function fo(G) {
  const Q = G.taskList || [],
    l = Q.find(q => q.number !== undefined) || null;
  if (l) {
    const q = l.isDone || 0,
      A = true;
    console.log("----吃饭看剧补贴----");
    if (A === q) {
      console.log("任务已完成✅");
    } else {
      console.log("任务未完成❌");
    }
  }
}
async function fU(t) {
  const o = t.extraProgress || 0;
  const U = t.extraReached || 0;
  const Q = t.isDone || 0;
  console.log("----点赞剧集----");
  console.log("进度: " + o + "/" + U);
  const l = true;
  if (l === Q) {
    console.log("任务已完成✅");
  } else {
    console.log("任务未完成❌");
    console.log("去完成任务");
    await fJ();
    const A = Math.floor(Math.random() * 40);
    kid = fu[A];
    const F = await fv(kid),
      T = U - o;
    d1 = F[1];
    for (let v = 0; v < T; v++) {
      const m = "点赞",
        L = 1;
      await fQ(d1, L, m);
      const x = Math.floor(Math.random() * 26) + 45;
      console.log("随机延迟" + x + "秒后继续");
      await fG(x * 1000);
      d1 += 1;
    }
    d1 = F[1];
    for (let u = 0; u < T; u++) {
      const w = "取消点赞",
        s = 0;
      await fQ(d1, s, w);
      const N = Math.floor(Math.random() * 26) + 45;
      console.log("随机延迟" + N + "秒后继续");
      await fG(N * 1000);
      d1 += 1;
    }
  }
}
async function fQ(G, o, U) {
  const l = "https://new.tianjinzhitongdaohe.com/api/v1/app/play/praiseMovie";
  const d = {
    action: o,
    episodeIndex: 0,
    movieId: G,
    source: 0,
    typeId: "S1"
  };
  const A = f4();
  try {
    const T = await fetch(l, {
        method: "POST",
        headers: A,
        body: JSON.stringify(d)
      }),
      k = await T.json();
    k.code === 200 ? console.log(U + "成功✅") : console.log(U + "失败❌，错误信息:", k.msg);
  } catch (m) {
    console.error("请求失败:", m);
  }
}
async function fl(t) {
  const o = t.extraProgress || 0;
  const U = t.extraReached || 0,
    Q = t.isDone || 0;
  console.log("----收藏剧集----");
  console.log("进度: " + o + "/" + U);
  const l = true;
  if (l === Q) {
    console.log("任务已完成✅");
  } else {
    console.log("任务未完成❌");
    console.log("去完成任务");
    await fJ();
    const A = Math.floor(Math.random() * 40);
    kid = fu[A];
    const F = await fv(kid),
      T = U - o;
    d1 = F[1];
    for (let v = 0; v < T; v++) {
      const M = "收藏",
        m = 1;
      fd(d1, m, M);
      const L = Math.floor(Math.random() * 26) + 45;
      console.log("随机延迟" + L + "秒后继续");
      await fG(L * 1000);
      d1 += 1;
    }
    d1 = F[1];
    for (let u = 0; u < T; u++) {
      const w = "取消收藏",
        s = 0;
      await fd(d1, s, w);
      const N = Math.floor(Math.random() * 26) + 45;
      console.log("随机延迟" + N + "秒后继续");
      await fG(N * 1000);
      d1 += 1;
    }
  }
}
async function fd(G, o, U) {
  const l = "https://new.tianjinzhitongdaohe.com/api/v1/app/play/collectMovie",
    d = {
      action: o,
      id: G,
      source: 0,
      typeId: "S1"
    };
  const A = f4();
  try {
    const T = await fetch(l, {
        method: "POST",
        headers: A,
        body: JSON.stringify(d)
      }),
      k = await T.json();
    if (k.code === 200) {
      console.log(U + "成功✅");
    } else {
      console.log(U + "失败❌，错误信息:", k.msg);
    }
  } catch (m) {
    console.error("请求失败:", m);
  }
}
async function fq(t) {
  const o = t.extraProgress || 0;
  const U = t.extraReached || 0;
  const Q = t.isDone || 0;
  console.log("----分享剧集----");
  console.log("进度: " + o + "/" + U);
  const l = true;
  if (l === Q) {
    console.log("任务已完成✅");
  } else {
    console.log("任务未完成❌");
    console.log("去完成任务");
    await fJ();
    const A = Math.floor(Math.random() * 40);
    kid = fu[A];
    const F = await fv(kid),
      T = U - o;
    d1 = F[1];
    for (let v = 0; v < T; v++) {
      fA(d1);
      const M = Math.floor(Math.random() * 26) + 45;
      console.log("随机延迟" + M + "秒后继续");
      await fG(M * 1000);
      d1 += 1;
    }
  }
}
async function fA(G) {
  const U = "https://new.tianjinzhitongdaohe.com/api/v1/app/welfare/addShare";
  const Q = {
    typeId: "S1",
    movieId: "" + G
  };
  const d = f1();
  try {
    const A = await fetch(U, {
        method: "POST",
        headers: d,
        body: new URLSearchParams(Q)
      }),
      F = await A.json();
    F.code === 200 ? console.log("分享成功✅") : console.log("分享失败❌，错误信息:", F.msg);
  } catch (v) {
    console.error("请求失败:", v);
  }
}
function fF(G) {
  const Q = G.isDone || 0;
  console.log("----首次完善个人资料----");
  const l = true;
  if (l === Q) {
    console.log("任务已完成✅");
  } else {
    console.log("任务未完成❌");
  }
}
async function fT(t) {
  const o = t.extraProgress || 0;
  const U = t.extraReached || 0;
  const Q = t.shortList || [],
    d = Q.length > 0 ? Q[0].id : null;
  console.log("----热播好剧领金币----");
  console.log("进度: " + o + "/" + U + "分钟");
  if (U === o) {
    console.log("任务已完成✅");
  } else {
    console.log("任务未完成❌");
    console.log("去完成任务");
    const A = U - o,
      F = A * 60;
    let T = 1,
      k = 0,
      v = 0;
    while (k < F) {
      const M = Math.floor(Math.random() * 21) + 40;
      k + M >= F && console.log("----模拟看剧中----");
      await fk(M, d, T);
      k += M;
      const m = F - k;
      console.log("进度: 总观看时长: " + k + " 秒, 剩余观看时长: " + m + " 秒");
      const L = Math.floor(Math.random() * 11) + 70;
      console.log("等待 " + L + " 秒后继续看剧");
      await fG(L * 1000);
      v += 1;
      T += 1;
      if (k >= F) {
        console.log("看剧完成✅");
        break;
      }
      if (v === 9) {
        v = 0;
        const J = Math.floor(Math.random() * 11) + 600;
        console.log("----⚠️防止IP被封置顶⚠️----");
        console.log("已观看" + k + "秒,随机延迟" + J + "秒后继续");
        await fG(J * 1000);
      }
    }
  }
}
async function fk(G, o, U) {
  const l = "https://new.tianjinzhitongdaohe.com/api/v1/app/play/historyMovie",
    d = {
      episode: "第" + U + "集",
      id: o,
      playerId: 0,
      typeId: "S1",
      watchDuration: G
    };
  const A = f4();
  try {
    const T = await fetch(l, {
        method: "POST",
        headers: A,
        body: JSON.stringify(d)
      }),
      k = await T.json();
    if (k.code === 200) {
      console.log("看剧成功✅,模拟观看" + G + "秒");
    } else {
      console.log("看剧失败❌，错误信息:", k.msg);
      process.exit();
    }
  } catch (m) {
    console.error("请求失败:", m);
  }
}
async function fv(G) {
  f8 = R.get("uid");
  const U = "https://new.tianjinzhitongdaohe.com/api/v1/app/play/movieDetails",
    Q = {
      id: G,
      source: 0,
      typeId: "S1",
      userId: f8
    };
  const d = f4();
  try {
    const A = await fetch(U, {
        method: "POST",
        headers: d,
        body: JSON.stringify(Q)
      }),
      F = await A.json();
    if (F.code === 200) {
      const k = F.data || {},
        v = k.totalEpisode || 0,
        M = k.currentEpisode || {},
        m = M.id || 0;
      return [v, m];
    } else {
      console.log("获取短剧详细信息失败❌，错误信息:", F.msg);
      return [0, 0];
    }
  } catch (x) {
    console.error("请求失败:", x);
    return [0, 0];
  }
}
const fM = {
  "2": f9,
  "3": fb,
  "4": fj,
  "5": fO,
  "6": ft,
  "7": fo,
  "8": fU,
  "9": fl,
  "10": fq,
  "11": fF,
  "14": fT
};
async function fL() {
  const G = "https://new.tianjinzhitongdaohe.com/api/v1/app/user/userInfo";
  const o = f1();
  const U = await fetch(G, {
    method: "GET",
    headers: o
  });
  if (!U.ok) {
    throw new Error("HTTP error! Status: " + U.status);
  }
  const Q = await U.json();
  if (Q.code === 200) {
    console.log("登录成功✅");
    const d = Q.data || {},
      q = d.id || 0;
    R.set("uid", q);
    await fx();
    console.log("----资产查询----");
    await fw();
  } else {
    console.log("登录失败❌，token已失效 消息:", Q.msg);
    process.exit();
  }
}
async function fx() {
  const o = "https://new.tianjinzhitongdaohe.com/api/v1/app/welfare/list",
    U = f7(),
    Q = {
      headers: U
    };
  const l = await r.post(o, {}, Q);
  const d = l.data;
  if (d.code === 200) {
    for (const A of d.data) {
      const T = A.id;
      if (fM[T]) {
        await fM[T](A);
      }
    }
  } else {
    console.log("请求失败，错误信息:", d.msg);
  }
}
let fu = [];
async function fJ() {
  const U = "https://new.tianjinzhitongdaohe.com/api/v1/app/screen/screenMovie",
    Q = {
      typeId: "S1"
    };
  const l = {
    condition: Q,
    pageNum: 1,
    pageSize: 40
  };
  const q = f4();
  try {
    const A = await fetch(U, {
        method: "POST",
        headers: q,
        body: JSON.stringify(l)
      }),
      F = await A.json();
    if (F.code === 200) {
      const k = F.data && F.data.records || [];
      fu.length = 0;
      k.forEach(v => {
        const L = v.id;
        if (L != null) {
          fu.push(L);
        } else {
          console.log("当前记录没有id:", v);
        }
      });
    } else {
      console.log("剧集列表获取失败❌，错误信息:", F.msg);
      process.exit();
    }
  } catch (m) {
    console.error("请求失败:", m);
  }
}
async function fw() {
  const G = "https://new.tianjinzhitongdaohe.com/api/v1/app/user/userInfo",
    o = f1();
  try {
    const U = await fetch(G, {
      method: "GET",
      headers: o
    });
    if (!U.ok) {
      throw new Error("HTTP error! Status: " + U.status);
    }
    const Q = await U.json();
    if (Q.code === 200) {
      const d = Q.data || {},
        q = d.goldBalance || 0,
        A = d.balance || 0;
      console.log("今日金币: " + q);
      console.log("总余额: " + A);
      process.exit();
    } else {
      console.log("资产查询失败❌，token已失效 消息:", Q.msg);
      process.exit();
    }
  } catch (k) {
    console.log("请求发生错误:", k);
  }
}
async function fc() {
  console.log("--------------------------------------");
  const G = "http://182.43.26.148:527/view";
  try {
    const o = await fetch(G);
    if (!o.ok) {
      throw new Error("HTTP error! Status: " + o.status);
    }
    const U = await o.json();
    if (U.gb === "false") {
      const Q = U.requestCount || "公告内容未设置";
      console.log("🌟系统通知：");
      console.log("全网启动次数已达 " + Q + " 次");
      return Q;
    } else {
      console.log("该脚本已停用，请更新至最新版本");
    }
  } catch (l) {
    l.name === "TypeError" ? console.log("无法连接服务器") : console.log("响应内容无法解析为JSON");
  }
}
async function fs() {
  const G = new Date();
  const o = G.getFullYear(),
    U = String(G.getMonth() + 1).padStart(2, "0"),
    Q = String(G.getDate()).padStart(2, "0"),
    l = String(G.getHours()).padStart(2, "0"),
    d = String(G.getMinutes()).padStart(2, "0"),
    q = String(G.getSeconds()).padStart(2, "0"),
    A = o + "-" + U + "-" + Q + " " + l + ":" + d + ":" + q,
    F = await fc();
  if (F) {
    console.log("当前时间：" + A);
    console.log("如有bug反馈 请联系作者");
    console.log("QQ：3620651465");
    console.log("电报：https://t.me/ByteCody");
    console.log("--------------------------------------");
  } else {
    console.log("当前时间：" + A);
    console.log("如有bug反馈 请联系作者");
    console.log("QQ：3620651465");
    console.log("电报：https://t.me/ByteCody");
    console.log("--------------------------------------");
    process.exit();
  }
  const T = process.env.nnck;
  !T && (console.log("请设置 nnck 环境变量"), process.exit());
  const k = T.split("@");
  k.length === 0 && (console.log("nnck 环境变量为空或格式错误"), process.exit());
  k.forEach((x, u) => {
    const J = "账号" + (u + 1);
    !x.includes("&") && (console.log("账号" + (u + 1) + "格式错误，缺少 '&' 分隔符"), process.exit());
    const [w, c] = x.split("&");
    (!w || !c) && (console.log("账号" + (u + 1) + "缺少 token 或 deviceid，请检查格式"), process.exit());
    R.set("token", w);
    R.set("deviceid", c);
    console.log("\n开始运行 " + J + " 使用的 token: " + w + "，deviceid: " + c);
    fL();
  });
}
fs();