## 网易云音乐 API for nodejs
提供网易云音乐 api，可以轻易在任何 javascript （不存在同源限制）环境下使用，包括 nodejs, react-native, weex, electron 等。


特点：
- 提供基本的 api
- 支持 Promise：每个 api 都以 Promise 形式返回
- 纯函数编程：每个 api 都是一个纯函数，无副作用，单一输入，单一输出。

暂时提供的 API：

name | api
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
获取专辑内容 | api.album(32311)
获取歌手单曲 |
获取歌手 mv |
获取歌手专辑 |
获取歌手描述 |
获取相似歌手 |
获取相似歌单 |
相似 mv  |
获取相似音乐 |
获取相似用户 |
获取每日推荐歌单 |
获取每日推荐歌曲 |
私人 FM |
签到 |
喜欢音乐 |
垃圾桶 |
歌单(网友精选碟) |
新碟上架 |
热门歌手 |
最新 mv |
推荐 mv |
推荐歌单 |
推荐新音乐 |
推荐电台 |
推荐节目 |
独家放送 |
mv 排行 |
获取 mv 数据 |
播放 mv |
排行榜 |
云盘 |
电台-推荐 |
电台-分类 |
电台-分类推荐 |
电台-订阅 |
电台-详情 |
电台-节目 |
给评论点赞 |

### 使用

```bash

```

