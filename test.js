// import * as api from './api';
const api = require('./api');


(async () => {
    console.time('run');
    // const res = await api.musicURL([347230, 347231]);
    // const res = await api.search('时间');
    // const res = await api.searchSuggest('时间');
    // const res = await api.songListHighquality();
    // const res = await api.songListDetail(100023);
    // const res = await api.lyric(347230);
    // const res = await api.commentMusic(347230);
    // const res = await api.commentPlaylist(705123491);
    // const res = await api.commentMv(5436712);
    // const res = await api.commentAlbum(32311);
    // const res = await api.songDetail(347230);
    // const res = await api.album(32311);
    // const res = await api.artists(6452);
    // const res = await api.artistMV(6452);
    // const res = await api.artistAlbum(6452);
    // const res = await api.artistDesc(6452);
    // const res = await api.simiArtist(6452);          // 301
    // const res = await api.simiPlaylist(347230);      // 301
    // const res  = await api.simiMV(5436712);
    // const res = await api.simiSong(347230);          // 301
    // const res = await api.simiUser(347230);          // 301
    // const res = await api.topPlaylist();
    // const res = await api.topAlbum();
    // const res = await api.topArtists();
    // const res = await api.mvFirst();
    // const res = await api.personalizedMv();
    // const res = await api.personalized();
    // const res = await api.personalizedNewsong();
    // const res = await api.personalizedDjprogram();
    // const res = await api.programRecommend();
    // const res = await api.personalizedPrivatecontent();
    // const res = await api.topMv();
    // const res = await api.mv(5436712);
    // const res = await api.topList(0);

    console.log(JSON.stringify(res, null, 3));
    console.timeEnd('run');
})();

