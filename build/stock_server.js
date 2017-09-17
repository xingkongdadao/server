"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/', function (request, response) { return response.send('这里是首页'); });
app.get('/stock', function (request, response) { return response.send('接收到股票查询请求'); });
var server = app.listen(8080, 'localhost', function () {
    console.log('服务器已经启动，地址是http://localhost:8080');
});
