var path = require('path')
var express = require('express')
var webpack = require('webpack')
var config = require('../config')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')


var mockapp = express()
mockapp.use(express.static(path.join(__dirname, '../src/')));

mockapp.all('*', function(req, res, next) {
    // console.log(req)
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

mockapp.get('/', function(req, res){
  res.send('hello world');
});


module.exports = mockapp.listen(6625,function (err) {

  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + 6625 + '\n')
});
