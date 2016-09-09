const _menu = [{
    index: 0,
    path: {
        path: '/chat'
    },
    hint: { type: "count", count: 999 }, //count,dot
    iconClass: 'icon-wechat',
    text: '微信'
}, {
    index: 1,
    path: {
        path: '/contact'
    },

    hint: { type: "count", count: 999 }, //count,dot
    iconClass: 'icon-contact',
    text: '通讯录'
}, {
    index: 2,
    path: {
        path: '/find'
    },
    hint: { type: "dot", count: true }, //count,dot
    iconClass: 'icon-find',
    text: '发现'
}, {
    index: 3,
    path: {
        path: '/me'
    },
    hint: { type: null, count: 0 }, //count,dot
    iconClass: 'icon-me',
    text: '我'
}]
const _contact = [{
    text: "新的朋友",
    pic: "../assets/images/contact-new-friends.png"
}]
/*
base.type:[friends:好友/group:群/service:服务号/sub:订阅号]
        关于头像右上角提示
            订阅号永远是dot
            [group,friends,service]   消息正常 -> count
            [group,friends,service] 消息免打扰 -> dot
        isStick  是否置顶
        newsUnreadCount 未读消息数量
        chatTitle
        newsMute 消息免打扰
        endChatAuth 最后一条消息作者
        endChatTxt 最后一条消息内容

公众号分为 订阅号和服务号,服务号出现在消息列表

假数据 头像链接
friends : http://ww1.sinaimg.cn/mw690/d0d07035jw1f7f2n6w1j1j20e60e6wg4.jpg
group : http://ww1.sinaimg.cn/mw690/d0d07035jw1f7f2n7cawhj202q02qglk.jpg
service : http://ww1.sinaimg.cn/mw690/d0d07035jw1f7f2n80l8ij202q02qmx2.jpg
sub : http://ww4.sinaimg.cn/mw690/d0d07035jw1f7f2n8ruarj202q02qdfp.jpg
*/
const _wechat_list = [
  {
    "base": {
      "id": 1,
      "type": "friends",
      "newsUnreadCount": 9,
      "newsMute": false,
      "chatTitle": "小明",
      "isStick": false,
      "iconSrc": "http://ww1.sinaimg.cn/mw690/d0d07035jw1f7f2n6w1j1j20e60e6wg4.jpg",
      "endTimeStr": 1472632586443,
      "endChatAuth": "杨涛",
      "endChatTxt": "未屏蔽",
    },
    "friendModel": {},
    "groupModel": {},
    "serviceModel": {},
    "subModel": {}
  },
  {
    "base": {
      "id": 2,
      "type": "group",
      "newsUnreadCount": 1,
      "newsMute": true,
      "chatTitle": "公司群 | HOME",
      "iconSrc": "http://ww1.sinaimg.cn/mw690/d0d07035jw1f7f2n7cawhj202q02qglk.jpg",
      "endTimeStr": 1472632586443,
      "endChatAuth": "东东",
      "endChatTxt": "今天天气不错",
      "isStick": false
    },
    "friendModel": {},
    "groupModel": {},
    "serviceModel": {},
    "subModel": {}
  },{
    "base": {
      "id": 2,
      "type": "group",
      "newsUnreadCount": 5,
      "newsMute": false,
      "chatTitle": "研发",
      "iconSrc": "http://ww1.sinaimg.cn/mw690/d0d07035jw1f7f2n7cawhj202q02qglk.jpg",
      "endTimeStr": 1472632586443,
      "endChatAuth": "漆羽斌",
      "endChatTxt": "服务器线上有个bug",
      "isStick": false
    },
    "friendModel": {},
    "groupModel": {},
    "serviceModel": {},
    "subModel": {}
  },
  {
    "base": {
      "id": 3,
      "type": "service",
      "newsUnreadCount": 1,
      "newsMute": false,
      "chatTitle": "京东JD.COM",
      "iconSrc": "http://ww1.sinaimg.cn/mw690/d0d07035jw1f7f2n80l8ij202q02qmx2.jpg",
      "endTimeStr": 1472632586443,
      "endChatAuth": "",
      "endChatTxt": "【750元福利来袭 | 中秋满199减100】",
      "isStick": false
    },
    "friendModel": {},
    "groupModel": {},
    "serviceModel": {},
    "subModel": {}
  },
  {
    "base": {
      "id": 4,
      "type": "sub",
      "newsUnreadCount": 1,
      "newsMute": false,
      "chatTitle": "订阅号",
      "iconSrc": "http://ww4.sinaimg.cn/mw690/d0d07035jw1f7f2n8ruarj202q02qdfp.jpg",
      "endTimeStr": 1472632586443,
      "endChatAuth": "前端那些事",
      "endChatTxt": "技术团队风格指南",
      "isStick": false
    },
    "friendModel": {},
    "groupModel": {},
    "serviceModel": {},
    "subModel": {}
  },
  {
    "base": {
      "id": 6,
      "type": "friends",
      "newsUnreadCount": 0,
      "newsMute": false,
      "chatTitle": "小亮",
      "iconSrc": "http://ww1.sinaimg.cn/mw690/d0d07035jw1f7f2n6w1j1j20e60e6wg4.jpg",
      "endTimeStr": 1472632586443,
      "endChatAuth": "小亮",
      "endChatTxt": "123",
      "isStick": false
    },
    "friendModel": {},
    "groupModel": {},
    "serviceModel": {},
    "subModel": {}
  },
  {
    "base": {
      "id": 55,
      "type": "group",
      "newsUnreadCount": 1,
      "newsMute": false,
      "chatTitle": "校友,小旭",
      "iconSrc": "http://ww1.sinaimg.cn/mw690/d0d07035jw1f7f2n7cawhj202q02qglk.jpg",
      "endTimeStr": 1472632586443,
      "endChatAuth": "杨涛",
      "endChatTxt": "苹果秋季发布会在9月7号",
      "isStick": false
    },
    "friendModel": {},
    "groupModel": {},
    "serviceModel": {},
    "subModel": {}
  },
  {
    "base": {
      "id": 56,
      "type": "friends",
      "newsUnreadCount": 9,
      "newsMute": true,
      "chatTitle": "校友,小旭",
      "iconSrc": "http://ww1.sinaimg.cn/mw690/d0d07035jw1f7f2n6w1j1j20e60e6wg4.jpg",
      "endTimeStr": 1472632586443,
      "endChatAuth": "杨涛",
      "endChatTxt": "苹果秋季发布会在9月7号",
      "isStick": false
    },
    "friendModel": {},
    "groupModel": {},
    "serviceModel": {},
    "subModel": {}
  },
  {
    "base": {
      "id": 3,
      "type": "friends",
      "newsUnreadCount": 9,
      "newsMute": true,
      "chatTitle": "校友,小旭",
      "iconSrc": "http://ww1.sinaimg.cn/mw690/d0d07035jw1f7f2n6w1j1j20e60e6wg4.jpg",
      "endTimeStr": 1472632586443,
      "endChatAuth": "杨涛",
      "endChatTxt": "苹果秋季发布会在9月7号",
      "isStick": false
    },
    "friendModel": {},
    "groupModel": {},
    "serviceModel": {},
    "subModel": {}
  },
  {
    "base": {
      "id": 4,
      "type": "friends",
      "newsUnreadCount": 1,
      "newsMute": true,
      "chatTitle": "校友,小旭",
      "iconSrc": "http://ww1.sinaimg.cn/mw690/d0d07035jw1f7f2n6w1j1j20e60e6wg4.jpg",
      "endTimeStr": 1472632586443,
      "endChatAuth": "杨涛",
      "endChatTxt": "苹果秋季发布会在9月7号",
      "isStick": false
    },
    "friendModel": {},
    "groupModel": {},
    "serviceModel": {},
    "subModel": {}
  },
  {
    "base": {
      "id": 1,
      "type": "friends",
      "newsUnreadCount": 9,
      "newsMute": true,
      "chatTitle": "校友,小旭",
      "iconSrc": "http://ww1.sinaimg.cn/mw690/d0d07035jw1f7f2n6w1j1j20e60e6wg4.jpg",
      "endTimeStr": 1472632586443,
      "endChatAuth": "杨涛",
      "endChatTxt": "苹果秋季发布会在9月7号",
      "isStick": false
    },
    "friendModel": {},
    "groupModel": {},
    "serviceModel": {},
    "subModel": {}
  },
  {
    "base": {
      "id": 2,
      "type": "friends",
      "newsUnreadCount": 1,
      "newsMute": true,
      "chatTitle": "校友,小旭",
      "iconSrc": "http://ww1.sinaimg.cn/mw690/d0d07035jw1f7f2n6w1j1j20e60e6wg4.jpg",
      "endTimeStr": 1472632586443,
      "endChatAuth": "杨涛",
      "endChatTxt": "苹果秋季发布会在9月7号",
      "isStick": false
    },
    "friendModel": {},
    "groupModel": {},
    "serviceModel": {},
    "subModel": {}
  }
]


export default {
    getMenu(cb) {
            cb(_menu)
        },
        getContact(cb) {
            cb(_contact)
        },
        getWechatList(cb) {
            cb(_wechat_list)
        }
}
