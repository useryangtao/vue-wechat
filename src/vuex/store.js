import Vue from 'vue'
import Vuex from 'vuex'

//基本通用
import base from './modules/base'
//聊天
import chat from './modules/chat'
//联系人
import contacts from './modules/contacts'
//发现
import find from './modules/find'

Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        base,
        chat,
        contacts,
        find
    },
    strict: true
})
