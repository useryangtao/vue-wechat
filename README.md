# vue-wechat
> 用vue.js开发微信app界面的demo

vue-cli vue vuex vue-router vue-toutch zepto weui

vue-resource ?

通过XHR来请求mock数据,本地调试使用express路由是可以返回数据;
不过考虑线上(github.io)预览也要请求到mock数据,服务端的能力就逊色点就暂未使用;
所以 vue-resource 的数据请求方式 在代码中以require('mock/xxx')的方式实现;

### 安装

``` bash
# install dependencies
cnpm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```