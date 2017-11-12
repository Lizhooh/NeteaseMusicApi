## 网易云音乐 Web API for Nodejs
提供网易云音乐 api，可以轻易在任何 javascript （不存在同源限制）环境下使用，包括 nodejs, react-native, weex, electron 等。

参考至：https://binaryify.github.io/NeteaseCloudMusicApi

**特点：**
- 提供基本的 api
- 支持 ES6 Promise：每个 api 都以 Promise 形式返回
- 纯函数编程：每个 api 都是一个纯函数，无副作用，单一输入，单一输出。

### 引入

```bash
npm install --save netease-music-api@https://github.com/Lizhooh/NeteaseMusicApi.git
```

### 测试

```bash
git clone @https://github.com/Lizhooh/NeteaseMusicApi.git
npm install
npm test
```

### 使用

```js
const api = require('netease-music-api');

(async () => {
    console.time('run');
    // const res = await api.musicURL([347230, 347231]);
    const res = await api.topList(0);

    console.log(JSON.stringify(res, null, 3));
    console.timeEnd('run');
})();
```

具体 api 参数，查阅 `/api/index.js` 文件。

### cookie
cookie 可以使用全局配置方式：

```js
const api = require('netease-music-api');
const { config } = require('netease-music-api/http');

console.log(config.cookie);       // ''
config.cookie = 'abc';
console.log(config.cookie);       // 'abc'

// 全局配置后，每个 api 都会携带相同的 cookie
api.musicURL([347230, 347231]);   // cookie = 'abc'
```

由于 cookie 提供**长期用户验证的密钥**，推荐把 cookie 存储在文件里，在应用启动时，从文件里读取 cookie。

```js
const fs = require('fs');
const { config } = require('netease-music-api/http');
// 通过文件来，设置 cookie
config.cookie = fs.readFileSync('./cookie.txt');
```

### 说明
- 301 错误基本都是没登录就调用了需要登录的接口。
- 部分接口如登录接口不能调用太频繁,否则可能会触发 503 错误或者 ip 高频错误，若需频繁调用,需要准备 IP 代理池。

### 暂时提供的 API：（持续补充）

name | api
--- | ---
登录 | 待定
刷新登录 | 待定
获取用户信息,歌单，收藏，mv, dj 数量 | 待定
获取用户歌单 | 待定
获取用户电台 | 待定
获取用户关注列表 | 待定
获取用户粉丝列表 | 待定
获取用户动态 | 待定
获取用户播放记录 | 待定
获取精品歌单 | api.songListHighquality('全部')
获取歌单详情 | api.songListDetail(100023)
搜索 | api.search('时间')
搜索建议 | api.searchSuggest('时间');
获取歌词 | api.lyric(347230);
歌曲评论 | api.commentMusic(347230);
收藏单曲到歌单 | 待定
专辑评论 | api.commentAlbum(32311)
歌单评论 | api.commentPlaylist(705123491)
mv 评论 | api.commentMv(5436712)
电台节目评论 | 待定
banner | 待定
获取歌曲详情 | api.songDetail(347230)
获取音乐 url | api.musicURL(347230)
获取专辑内容 | api.album(32311)
获取歌手单曲 | api.artists(6452)
获取歌手 mv | api.artistMV(6452)
获取歌手专辑 | api.artistAlbum(6452)
获取歌手描述 | api.artistDesc(6452)
获取相似歌手 | api.simiArtist(6452)
获取相似歌单 | api.simiPlaylist(347230)
相似 mv  | api.simiMV(5436712)
获取相似音乐 | api.simiSong(347230)
获取相似用户 | api.simiUser(347230)
获取每日推荐歌单 | 待定
获取每日推荐歌曲 | 待定
私人 FM | 待定
签到 | 待定
喜欢音乐 | 待定
垃圾桶 | 待定
歌单(网友精选碟) | api.topPlaylist()
新碟上架 | api.topAlbum()
热门歌手 | api.topArtists()
最新 mv | api.mvFirst()
推荐 mv | api.personalizedMv()
推荐歌单 | api.personalized()
推荐新音乐 | api.personalizedNewsong()
推荐电台 | api.personalizedDjprogram()
推荐节目 | api.programRecommend()
独家放送 | api.personalizedPrivatecontent()
mv 排行 | api.topMv()
获取 mv 数据 | api.mv(5436712)
播放 mv | api.mvUrl(url);
排行榜 | api.topList(0)
云盘 | 待定
电台-推荐 | 待定
电台-分类 | 待定
电台-分类推荐 | 待定
电台-订阅 | 待定
电台-详情 | 待定
电台-节目 | 待定
给评论点赞 | 待定

