import { SET_MENU_WECHAT_LIST, DIALOGUE_BAR, DIALOGUE_ID, 
    DIALOGUE_TYPE,
    DIALOGUE,
    CHAT_MEMBER,
    CHAT_CONFIG } from '../mutation-types'

let state = {
    wechat_list: [],
    //dialogue
    dialogue_bar: 'dialogueBar', //dialogueBarPerson dialogueBar
    dialogue_id: '',
    dialogue_type: '', //对话框右侧图标
    //聊天内容
    dialogue_content:[],
    //聊天人员
    chat_member:[],
    //聊天配置
    chat_config:{

    }
}
const mutations = {
    [SET_MENU_WECHAT_LIST](state, list) {
        state.wechat_list = list
    },
    [DIALOGUE_BAR](state, componentName) {
        state.dialogue_bar = componentName;
    },
    [DIALOGUE_ID](state, id) {
        state.dialogue_id = id;
    },
    [DIALOGUE_TYPE](state, type) {
        state.dialogue_type = type;
    },
    [DIALOGUE](state,obj){
        state.dialogue_content = obj;
    },
    [CHAT_MEMBER](state,arr){
        state.chat_member = arr;
    },
    [CHAT_CONFIG](state,obj){
        state.chat_config = obj;

    }

}

export default {
    state,
    mutations
}
