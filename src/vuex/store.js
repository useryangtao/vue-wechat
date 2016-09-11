import Vue from 'vue'
import Vuex from 'vuex'

//基本
import base from './modules/base'
//聊天
import chat from './modules/chat'
//联系人
import contacts from './modules/contacts'

Vue.use(Vuex)


export default new Vuex.Store({
    modules:{
        base,       
        chat,
        contacts
    },
    strict: true
})
