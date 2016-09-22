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
        "id": 2,
        "name": "微信群01",
        "wxid": "wxid_group01",
        "qq": "00002",
        "email": null,
        "type": "group",
        "iconSrc": "//ww1.sinaimg.cn/mw690/d0d07035jw1f7f2n7cawhj202q02qglk.jpg",
        "qrCode": "",
        "signature": "个性签名",
    },
    "chatBaseModel": {
        "newsUnreadCount": 1, //未读
        "endTimeStr": 1472632586443,
        "endChatAuth": "杨涛",
        "endChatTxt": "晚上打球",
        "chatBackground": null, //聊天背景
        "newsMute": true
    }
}
