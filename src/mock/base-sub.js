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
        "id": 4,
        "name": "订阅号",
        "wxid": "wxid_sub",
        "qq": "00004",
        "email": "0004@qq.com",
        "type": "sub", //关系:朋友
        "iconSrc": "http://ww4.sinaimg.cn/mw690/d0d07035jw1f7f2n8ruarj202q02qdfp.jpg",
        "qrCode": null,
        "signature": "订阅号签名",
    },
    "chatPrevivw": {
        "newsUnreadCount": 10, //未读
        "endTimeStr": 1472632586443,
        "endChatAuth": "订阅号",
        "endChatTxt": "订阅号消息",
        "chatBackground": null, //聊天背景
        "newsMute": false
    }
}
