const api = require('../index');

describe('API', () => {

    test('musicURL - 获取音乐 url', async () => {
        const res = await api.musicURL([347230, 347231]);
        expect(res.code).toBe(200);
    });

    test('search - 搜索', async () => {
        const res = await api.search('时间');
        expect(res.code).toBe(200);
    });

    test('searchSuggest - 搜索建议词', async () => {
        const res = await api.searchSuggest('时间');
        expect(res.code).toBe(200);
    });

    test('songListHighquality - 获取精品歌单', async () => {
        const res = await api.songListHighquality();
        expect(res.code).toBe(200);
    });

    test('songListDetail - 获取歌单详情', async () => {
        const res = await api.songListDetail(100023);
        expect(res.code).toBe(200);
    });

    test('lyric - 获取歌词', async () => {
        const res = await api.lyric(347230);
        expect(res.code).toBe(200);
    });

    test('commentMusic - 歌曲评论', async () => {
        const res = await api.commentMusic(347230);
        expect(res.code).toBe(200);
    });

    test('commentPlaylist - 歌单评论', async () => {
        const res = await api.commentPlaylist(705123491);
        expect(res.code).toBe(200);
    });

    test('commentMv - mv 评论', async () => {
        const res = await api.commentMv(5436712);
        expect(res.code).toBe(200);
    });

    test('commentAlbum - 专辑评论', async () => {
        const res = await api.commentAlbum(32311);
        expect(res.code).toBe(200);
    });

    test('songDetail - 获取歌曲详情', async () => {
        const res = await api.songDetail(347230);
        expect(res.code).toBe(200);
    });

    test('album - 获取专辑内容', async () => {
        const res = await api.album(32311);
        expect(res.code).toBe(200);
    });

    test('artists - 获取歌手单曲', async () => {
        const res = await api.artists(6452);
        expect(res.code).toBe(200);
    });

    test('artistMV - 获取歌手 mv', async () => {
        const res = await api.artistMV(6452);
        expect(res.code).toBe(200);
    });

    test('artistAlbum - 获取歌手专辑', async () => {
        const res = await api.artistAlbum(6452);
        expect(res.code).toBe(200);
    });

    test('artistDesc - 获取歌手描述', async () => {
        const res = await api.artistDesc(6452);
        expect(res.code).toBe(200);
    });

    test('simiArtist - 获取相似歌手', async () => {
        const res = await api.simiArtist(6452);
        expect(res.code).toBe(200);
    });

    test('simiPlaylist - 获取相似歌单', async () => {
        const res = await api.simiPlaylist(986891753);
        expect(res.code).toBe(200);
    });

    test('simiMV - 相似 mv', async () => {
        const res = await api.simiMV(5436712);
        expect(res.code).toBe(200);
    });

    test('simiSong - 相似歌曲', async () => {
        const res = await api.simiSong(347230);
        expect(res.code).toBe(200);
    });

    test('simiUser - 获取最近 5 个听了这首歌的用户', async () => {
        const res = await api.simiUser(347230);
        expect(res.code).toBe(200);
    });

    test('topPlaylist - 歌单(网友精选碟)', async () => {
        const res = await api.topPlaylist();
        expect(res.code).toBe(200);
    });

    test('topAlbum - 新碟上架', async () => {
        const res = await api.topAlbum();
        expect(res.code).toBe(200);
    });

    test('topArtists - 热门歌手', async () => {
        const res = await api.topArtists();
        expect(res.code).toBe(200);
    });

    test('mvFirst - 最新 mv', async () => {
        const res = await api.mvFirst();
        expect(res.code).toBe(200);
    });

    test('personalizedMv - 推荐 mv', async () => {
        const res = await api.personalizedMv();
        expect(res.code).toBe(200);
    });

    test('personalized - 推荐歌单', async () => {
        const res = await api.personalized();
        expect(res.code).toBe(200);
    });

    test('personalizedNewsong - 推荐新音乐', async () => {
        const res = await api.personalizedNewsong();
        expect(res.code).toBe(200);
    });

    test('personalizedDjprogram - 推荐电台', async () => {
        const res = await api.personalizedDjprogram();
        expect(res.code).toBe(200);
    });

    test('programRecommend - 推荐节目', async () => {
        const res = await api.programRecommend();
        expect(res.code).toBe(200);
    });

    test('personalizedPrivatecontent - 独家放送', async () => {
        const res = await api.personalizedPrivatecontent();
        expect(res.code).toBe(200);
    });

    test('topMv - mv 排行', async () => {
        const res = await api.topMv();
        expect(res.code).toBe(200);
    });

    test('mv - 获取 mv 数据', async () => {
        const res = await api.mv(5436712);
        expect(res.code).toBe(200);
    });

    test('topList - 音乐排行榜', async () => {
        const res = await api.topList(0);
        expect(res.code).toBe(200);
    });

});
