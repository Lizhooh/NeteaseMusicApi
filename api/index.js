const { get, post } = require('./http');
const fetch = require('node-fetch');

/**
 * 获取音乐 url
 * 例如：
 *      - musicURL(id1, id2)
 *      - musicURL([id1, id2])
 * @param{Array} args ids 歌曲 id，可以写成数组形式或参数列表形式
 * @returns{Promise}
 */
module.exports.musicURL = function musicURL(...args) {
    return post('/weapi/song/enhance/player/url', {
        data: {
            ids: args.length === 1 && Array.isArray(args[0]) ? args[0] : args,
            br: 999000,
            csrf_token: ''
        }
    });
}

/**
 * 获取精品歌单
 * @param{String} cat: 标签，比如 "华语"、"古风" 、"欧美"、"流行",默认为"全部"
 * @param{Number} limit: 分页数量
 * @param{Number} offset: 分页偏移量
 * @returns{Promise}
 */
module.exports.songListHighquality = function songListHighquality(cat = '全部', limit = 20, offset = 0) {
    return post('/weapi/playlist/highquality/list', {
        data: {
            cat,
            offset,
            limit,
        }
    })
}

/**
 * 获取歌单详情
 * @param{Number} id: 歌单 id
 * @returns{Promise}
 */
module.exports.songListDetail = function songListDetail(id) {
    return post('/weapi/v3/playlist/detail', {
        data: {
            id: id,
            offset: 0,
            total: true,
            limit: 1000,
            n: 1000,
            csrf_token: ''
        }
    })
}

/**
 * 搜索
 * @param{String} keywords: 关键字
 * @param{Number} limit: 分页数量
 * @param{Number} offset: 分页偏移量
 * @param{Number} type: 类型 - 搜索单曲(1)，歌手(100)，专辑(10)，歌单(1000)，用户(1002)
 * @returns{Promise}
 */
module.exports.search = function search(keywords = '', limit = 20, offset = 0, type = 1) {
    return post('/weapi/search/get', {
        data: {
            csrf_token: '',
            limit,
            type,
            offset,
            s: keywords
        }
    })
}

/**
 * 搜索建议词
 * @param{String} keywords: 关键字
 * @returns{Promise}
 */
module.exports.searchSuggest = function searchSuggest(keywords = '') {
    return post('/weapi/search/suggest/web', {
        data: {
            csrf_token: '',
            s: keywords,
        }
    })
}

/**
 * 获取歌词
 * @param{Number} id: 音乐 id
 * @returns{Promise}
 */
module.exports.lyric = function lyric(id) {
    return post('/weapi/song/lyric', {
        query: {
            os: 'osx',
            id: id,
            lv: -1,
            tv: -1,
        }
    })
}

/**
 * 歌曲评论
 * @param{Number} id: 歌曲 id
 * @param{Number} limit: 分页数量
 * @param{Number} offset: 分页偏移量
 * @returns{Promise}
 */
module.exports.commentMusic = function commentMusic(id, limit = 30, offset = 0) {
    return post(`/weapi/v1/resource/comments/R_SO_4_${rid}/?csrf_token=`, {
        data: {
            rid: id,
            limit,
            offset,
            csrf_token: ''
        }
    })
}

/**
 * 专辑评论
 * @param{Number} id: 专辑 id
 * @param{Number} limit: 分页数量
 * @param{Number} offset: 分页偏移量
 * @returns{Promise}
 */
module.exports.commentAlbum = function commentAlbum(id, limit = 30, offset = 0) {
    return post(`/weapi/v1/resource/comments/R_AL_3_${id}`, {
        data: {
            rid: id,
            offset,
            limit,
            csrf_token: ''
        }
    })
}

/**
 * 歌单评论
 * @param{Number} id: 歌单 id
 * @param{Number} limit: 分页数量
 * @param{Number} offset: 分页偏移量
 * @returns{Promise}
 */
module.exports.commentPlaylist = function commentPlaylist(id, limit = 30, offset = 0) {
    return post(`/weapi/v1/resource/comments/A_PL_0_${id}/?csrf_token=`, {
        data: {
            rid: id,
            offset,
            limit,
            csrf_token: ''
        }
    })
}

/**
 * mv 评论
 * @param{Number} id: mv id
 * @param{Number} limit: 分页数量
 * @param{Number} offset: 分页偏移量
 * @returns{Promise}
 */
module.exports.commentMv = function commentMv(id, limit = 30, offset = 0) {
    return post(`/weapi/v1/resource/comments/R_MV_5_${id}/?csrf_token=`, {
        data: {
            rid: id,
            offset,
            limit,
            csrf_token: ''
        }
    })
}

/**
 * 获取歌曲详情
 * @param{Number} id: 音乐 id
 * @returns{Promise}
 */
module.exports.songDetail = function songDetail(id) {
    return post('/weapi/v3/song/detail', {
        data: {
            c: JSON.stringify([{ id: id }]),
            ids: '[' + id + ']',
            csrf_token: ''
        }
    })
}

/**
 * 获取专辑内容
 * @param{Number} id: 专辑 id
 * @returns{Promise}
 */
module.exports.album = function album(id) {
    return post(`/weapi/v1/album/${id}`, {
        data: {
            csrf_token: ''
        }
    })
}

/**
 * 获取歌手单曲
 * @param{Number} id: 歌手 id（可由搜索接口获得）
 * @param{Number} limit: 分页数量
 * @param{Number} offset: 分页偏移量
 * @returns{Promise}
 */
module.exports.artists = function artists(id, limit = 20, offset = 0) {
    return post(`/weapi/v1/artist/${id}?offset=${offset}&limit=${limit}`, {
        data: {
            csrf_token: ''
        }
    });
}

/**
 * 获取歌手 mv
 * @param{Number} id: 歌手 id（可由搜索接口获得）
 * @param{Number} limit: 分页数量
 * @param{Number} offset: 分页偏移量
 * @returns{Promise}
 */
module.exports.artistMV = function artistMV(id, limit = 20, offset = 0) {
    return post('/weapi/artist/mvs', {
        data: {
            artistId: id,
            total: true,
            offset,
            limit,
            csrf_token: ''
        }
    })
}

/**
 * 获取歌手专辑
 * @param{Number} id: 歌手 id（可由搜索接口获得）
 * @param{Number} limit: 分页数量
 * @param{Number} offset: 分页偏移量
 * @returns{Promise}
 */
module.exports.artistAlbum = function artistAlbum(id, limit = 20, offset = 0) {
    return post(`/weapi/artist/albums/${id}`, {
        data: {
            total: true,
            offset,
            limit,
            csrf_token: ''
        }
    })
}

/**
 * 获取歌手描述
 * @param{Number} id: 歌手 id（可由搜索接口获得）
 * @returns{Promise}
 */
module.exports.artistDesc = function artistDesc(id) {
    return post('/weapi/artist/introduction', {
        data: {
            id,
            csrf_token: ''
        }
    })
}


/**
 * 获取相似歌手
 * @param{Number} id: 歌手 id（可由搜索接口获得）
 * @returns{Promise}
 */
module.exports.simiArtist = function simiArtist(id) {
    return post('/weapi/discovery/simiArtist', {
        data: {
            artistid: id,
            csrf_token: ''
        }
    })
}

/**
 * 获取相似歌单
 * @param{Number} id: 歌单 id
 * @param{Number} limit: 分页数量
 * @param{Number} offset: 分页偏移量
 */
module.exports.simiPlaylist = function simiPlaylist(id, limit = 20, offset = 0) {
    return post('/weapi/discovery/simiPlaylist', {
        data: {
            songid: id,
            offset,
            limit,
            csrf_token: ''
        }
    })
}

/**
 * 相似 mv
 * @param{Number} id: mv id
 * @returns{Promise}
 */
module.exports.simiMV = function simiMV(id) {
    return post('/weapi/discovery/simiMV', {
        data: {
            mvid: id,
            csrf_token: ''
        }
    })
}

/**
 * 相似歌曲
 * @param{Number} id: 歌曲 id
 * @param{Number} limit: 分页数量
 * @param{Number} offset: 分页偏移量
 * @returns{Promise}
 */
module.exports.simiSong = function simiSong(id, limit = 30, offset = 0) {
    return post('/weapi/v1/discovery/simiSong', {
        data: {
            songid: id,
            offset,
            limit
        }
    })
}


/**
 * 获取最近 5 个听了这首歌的用户
 * @param{Number} id: 歌曲 id
 * @param{Number} limit: 分页数量
 * @param{Number} offset: 分页偏移量
 * @returns{Promise}
 */
module.exports.simiUser = function simiUser(id, limit = 30, offset = 0) {
    return post('/weapi/discovery/simiUser', {
        data: {
            songid: id,
            offset: offset,
            limit: limit
        }
    })
}

/**
 * 喜欢音乐
 * @param{Number} id: 歌曲 id
 * @returns{Promise}
 */
module.exports.like = function like(id, alg = 'itembased', time = 25, like = true) {
    return post(`/weapi/radio/like?alg=${alg}&trackId=${id}&like=${like}&time=${time}`, {
        data: {
            csrf_token: '',
            id,
            like
        }
    });
}


/**
 * 歌单(网友精选碟)
 * @param{String} cat: 标签，比如 "华语"、"古风" 、"欧美"、"流行",默认为"全部"
 * @param{String} order: 可选值为 'new' 和 'hot', 分别对应最新和最热，默认为 'hot'
 * @param{Number} limit: 分页数量
 * @param{Number} offset: 分页偏移量
 * @returns{Promise}
 */
module.exports.topPlaylist = function topPlaylist(cat = '全部', order = 'hot', limit = 30, offset = 0, total = '') {
    return post('/weapi/playlist/list', {
        data: {
            cat,
            order,
            limit,
            offset,
            total: total === '' ? 'true' : 'false',
        }
    })
}

/**
 * 新碟上架
 * @param{String} type: 类型，有几种 ALL, ZH, EA, KR, JP
 * @param{Number} limit: 分页数量
 * @param{Number} offset: 分页偏移量
 * @returns{Promise}
 */
module.exports.topAlbum = function topAlbum(type = 'ALL', limit = 30, offset = 0) {
    return post('/weapi/album/new', {
        data: {
            area: type,
            limit,
            offset,
            total: true,
            csrf_token: ''
        }
    })
}

/**
 * 热门歌手
 * @param{Number} limit: 分页数量
 * @param{Number} offset: 分页偏移量
 * @returns{Promise}
 */
module.exports.topArtists = function topArtists(limit = 30, offset = 0) {
    return post('/weapi/artist/top', {
        data: {
            limit,
            offset,
            total: true,
            csrf_token: ''
        }
    })
}

/**
 * 最新 mv
 * @param{Number} limit: 分页数量
 * @param{Number} offset: 分页偏移量
 * @returns{Promise}
 */
module.exports.mvFirst = function mvFirst(limit = 30, offset = 0) {
    return post('/weapi/mv/first', {
        data: {
            total: true,
            limit,
            offset,
            csrf_token: ''
        }
    })
}

/**
 * 推荐 mv
 * @returns{Promise}
 */
module.exports.personalizedMv = function personalizedMv() {
    return post('/weapi/personalized/mv', {});
}


/**
 * 推荐歌单
 * @returns{Promise}
 */
module.exports.personalized = function personalized() {
    return post('/weapi/personalized/playlist', {});
}

/**
 * 推荐新音乐
 * @returns{Promise}
 */
module.exports.personalizedNewsong = function personalizedNewsong() {
    return post('/weapi/personalized/newsong', {
        type: 'recommend'
    });
}

/**
 * 推荐电台
 * @returns{Promise}
 */
module.exports.personalizedDjprogram = function personalizedDjprogram() {
    return post('/weapi/personalized/djprogram', {});
}

/**
 * 推荐节目
 * @param{String} type: 类别
 * @returns{Promise}
 */
module.exports.programRecommend = function programRecommend(type = '') {
    return post('/weapi/program/recommend/v1', {
        data: {
            cateId: type,
            csrf_token: ''
        }
    });
}

/**
 * 独家放送
 * @returns{Promise}
 */
module.exports.personalizedPrivatecontent = function personalizedPrivatecontent() {
    return post('/weapi/personalized/privatecontent', {});
}

/**
 * mv 排行
 * @param{Number} limit: 分页数量
 * @param{Number} offset: 分页偏移量
 * @returns{Promise}
 */
module.exports.topMv = function topMv(limit = 30, offset = 0) {
    return post('/weapi/mv/toplist', {
        data: {
            limit,
            offset,
            total: true,
            csrf_token: ''
        }
    })
}

/**
 * 获取 mv 数据
 * @param{Number} id: mv id
 * @returns{Promise}
 */
module.exports.mv = function mv(id) {
    return post('/weapi/mv/detail', {
        data: { id }
    });
}

/**
 * 播放 mv
 * @param{Number} url: mv url
 * @returns{Promise}
 */
module.exports.mvUrl = function myUrl(url) {
    return fetch(url, {
        headers: {
            'Referer': 'http://music.163.com/',
            'Cookie': 'appver=1.5.0.75771;',
            'Content-Type': 'video/mp4',
            'Location': url
        }
    });
}

/**
 * 音乐排行榜
 * @param{Number} idx: 对应以下排行榜
 * @returns{Promise}
 */
module.exports.topList = function topList(idx) {

    const top_list_all = {
        '0': ['云音乐新歌榜', '/api/playlist/detail?id=3779629'],
        '1': ['云音乐热歌榜', '/api/playlist/detail?id=3778678'],
        '2': ['网易原创歌曲榜', '/api/playlist/detail?id=2884035'],
        '3': ['云音乐飙升榜', '/api/playlist/detail?id=19723756'],
        '4': ['云音乐电音榜', '/api/playlist/detail?id=10520166'],
        '5': ['UK排行榜周榜', '/api/playlist/detail?id=180106'],
        '6': ['美国Billboard周榜', '/api/playlist/detail?id=60198'],
        '7': ['KTV嗨榜', '/api/playlist/detail?id=21845217'],
        '8': ['iTunes榜', '/api/playlist/detail?id=11641012'],
        '9': ['Hit FM Top榜', '/api/playlist/detail?id=120001'],
        '10': ['日本Oricon周榜', '/api/playlist/detail?id=60131'],
        '11': ['韩国Melon排行榜周榜', '/api/playlist/detail?id=3733003'],
        '12': ['韩国Mnet排行榜周榜', '/api/playlist/detail?id=60255'],
        '13': ['韩国Melon原声周榜', '/api/playlist/detail?id=46772709'],
        '14': ['中国TOP排行榜(港台榜)', '/api/playlist/detail?id=112504'],
        '15': ['中国TOP排行榜(内地榜)', '/api/playlist/detail?id=64016'],
        '16': ['香港电台中文歌曲龙虎榜', '/api/playlist/detail?id=10169002'],
        '17': ['华语金曲榜', '/api/playlist/detail?id=4395559'],
        '18': ['中国嘻哈榜', '/api/playlist/detail?id=1899724'],
        '19': ['法国 NRJ EuroHot 30周榜', '/api/playlist/detail?id=27135204'],
        '20': ['台湾Hito排行榜', '/api/playlist/detail?id=112463'],
        '21': ['Beatport全球电子舞曲榜', '/api/playlist/detail?id=3812895']
    }

    return fetch('http://music.163.com' + top_list_all[idx][1])
        .then(res => res.json());
}
