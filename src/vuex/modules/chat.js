import {
    SET_MENU_WECHAT_LIST,
    CHAT,
    SET_NEWS_STATE,
    DELETE_NEWS
} from '../mutation-types'

let state = {
    wechat_list: [/*{
        "base": {
            "id": 0,
            "name": "",
            "wxid": "",
            "qq": "",
            "email": "",
            "type": "firends",
            "iconSrc": "",
            "qrCode": "",
            "signature": ""
        },
        "chatBaseModel": {
            "newsUnreadCount": null,
            "endTimeStr": null,
            "endChatAuth": "",
            "endChatTxt": "",
        },
        "chatConfigModel": {
            "chatBackground": null, //背景
            "groupNotice": null, //群公告
            "isStick": null, //置顶
            "newsMute": true, //消息免打扰
            "contactsSave": null,
            "showGroupNickname": null //显示群聊天昵称
        }
    }*/],
    //base
    chat_base: {
        "id": 1,
        "name": "聊天中",
        "wxid": "",
        "qq": "",
        "email": "",
        "type": "friends",
        "iconSrc": "",
        "qrCode": "",
        "signature": ""
    },
    //dialogue
    dialogue_type: 'friends',
    //聊天内容
    dialogue: [],
    //聊天bar
    dialogue_bar: {
        menu: [{
            title: '',
            link: '',
            subMenu: [{
                title: '',
                link: ''
            }, {
                title: '',
                link: ''
            }]
        }]
    },
    //聊天人员
    chat_member: [{"id": 1,iconSrc:"",name:""}],
    //聊天配置
    chat_config: {
        "chatBackground": null, //背景
        "groupNotice": "", //群公告
        "isStick": false, //置顶
        "newsMute": true, //消息免打扰
        "contactsSave": false,
        "showGroupNickname": true, //显示群聊天昵称
    }
}
const mutations = {
    [SET_MENU_WECHAT_LIST](state, list) {
        state.wechat_list = list
    },
    [CHAT](state, {
        base,
        // chatBaseModel,
        chatDialogueModel,
        chatDialogueBarModel,
        chatMemberModel,
        chatConfigModel
    }) {
        state.dialogue_type = base.type;
        state.chat_base = base;
        state.dialogue = chatDialogueModel
        state.dialogue_bar = chatDialogueBarModel;
        state.chat_member = chatMemberModel;
        state.chat_config = chatConfigModel;
    },
    [SET_NEWS_STATE](state,index,val){
        state.wechat_list[index].chatBaseModel.newsUnreadCount = val
    },
    [DELETE_NEWS](state,index){
        state.wechat_list.splice(index,1);
    }

}

export default {
    state,
    mutations
}
