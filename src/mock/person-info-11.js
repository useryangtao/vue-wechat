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
  area
  selfPhotos
  telphone
 */
module.exports = {
    "base": {
        "id": 11,
        "name":"小明",
        "nickname": "小明",
        "remark":"小明",
        "wxid": "wxid_xiaoming",
        "qq": "000011",
        "email": "00002@qq.com",
        "type": "firends",
        "iconSrc": "//images2015.cnblogs.com/blog/528573/201609/528573-20160925131419593-1613633261.jpg",
        "qrCode": "",
        "telphone":18812345678,
        "signature": "个性签名",
        "area":["中国","北京","海淀"],
        "selfPhotos":[{imgSrc:""}]
    },
    "chatPrevivw": {
        "newsUnreadCount": 11, //未读
        "endTimeStr": 1472632586443,
        "endChatAuth": "杨涛",
        "endChatTxt": "晚上打球",
        "chatBackground": null, //聊天背景
        "newsMute": false
    }
}
