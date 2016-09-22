//个人,群 公众号 基本　数据模型
/*
  id
  name
  wxid
  qq
  email
  type  [friends:好友/group:群/service:服务号/sub:订阅号]
  iconSrc
  qrCode
  signature   //签名
  newsUnreadCount {Number} //未读
  endTimeStr    //最后消息
  endChatAuth   //最后消息作者
  endChatTxt    //最后消息内容
  chatBackground //聊天背景
  newsMute  {Boolean} //消息免打扰

 */
 module.exports = {
    "base": {
        "id": 3,
        "name": "服务号——JD",
        "wxid": "wx_00003",
        "qq": "00003",
        "email": "00003@qq.com",
        "type": "service",
        "iconSrc": "//ww1.sinaimg.cn/mw690/d0d07035jw1f7f2n80l8ij202q02qmx2.jpg",
        "qrCode": null,
        "signature": "我是服务号",
    },
    "chatPrevivw": {
        "newsUnreadCount": 1, //未读
        "endTimeStr": 1472632586443,
        "endChatAuth": "杨涛",
        "endChatTxt": "服务号消息",
        "chatBackground": null, //聊天背景
        "newsMute": false
    }
}