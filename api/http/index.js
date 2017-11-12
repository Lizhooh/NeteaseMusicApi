const fetch = require('node-fetch');
const qs = require('qs');
const encrypt = require('../util/crypto');                   // 加密函数
const randomUserAgent = require('../util/randomUserAgent');  // 随机 userAgent
const URL = require('url');

const HOST = 'http://music.163.com';

let _cookie = '';

/**
 * 自定义的 http 请求
 * @param{String} method: http method
 * @param{String} path: 请求路径，不包括 hostname
 * @param{Object} options: 配置
 * @returns{Promise}
 */
const _http = (method, path, { query = {}, data = {} }) => {


    const cryptoreq = encrypt(data);
    let _path = path;

    _path += '?' + qs.stringify(Object.assign(query, {
        params: cryptoreq.params,
        encSecKey: cryptoreq.encSecKey,
    }));

    // console.log(URL.resolve(HOST, _path));

    return fetch(URL.resolve(HOST, _path), {
        method: method,
        headers: {
            'Accept': '*/*',
            'Accept-Language': 'zh-CN,zh;q=0.8,gl;q=0.6,zh-TW;q=0.4',
            'Connection': 'keep-alive',
            'Content-Type': 'application/x-www-form-urlencoded',      // from 形式
            'Referer': HOST,
            'Host': URL.parse(HOST).host,
            'Cookie': _cookie,
            'User-Agent': randomUserAgent(),
        },
        data: JSON.stringify(data),
    })
        .then(res => res.json())
        .catch(err => {
            console.error(err);
            console.log(`${method} error: ${HOST}${path}`);
        })
        ;
}


let config = {};

Object.defineProperty(config, 'cookie', {
    get: function () {
        return _cookie;
    },
    set: function (newValue) {
        _cookie = newValue;
    }
});

module.exports = {
    config: config,
    get: (...args) => _http('GET', ...args),
    post: (...args) => _http('POST', ...args),
}
