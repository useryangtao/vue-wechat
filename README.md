# vue-wechat
> 用vue.js开发微信app(ios版)界面的demo

vue-cli vue vuex vue-router vue-toutch zepto weui



### 安装

``` bash
# install dependencies
cnpm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```

### 开发约定
``` bash
所有变量名 统一小写
所有方法   统一驼峰
常量    全部大写+下划线
所有组件.vue名 都统一 《短横线》 命名
引入时,components选项改为驼峰
减少使用分号( ; )  大括号后面不加,var 命名要加,return 要加
单引号优先
css内下划线( _ )开始的为通用类
js中内下划线( _ )开头的为私有属性
所有events均使用短横线 命名
所有组件(.vue)里template标签包含的元素必须是component-xx 开头
所有state统一下划线 命名
所有 action统一下划线命名
```

### 参考
蘑菇街
zhihu
cnodejs
qq-demo