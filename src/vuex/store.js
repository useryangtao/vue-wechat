import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//状态
const state = {
    back_path:'',
    is_back:false,//是否是下一页
    menu: [],
    menu_active:{text:"",index:0},
    wechat_list:[],
    //dialogue
    dialogue_bar:'dialogueBar',//dialogueBarPerson dialogueBar
    dialogue_id:'',
    dialogue_type:'' //对话框右侧图标
}

const mutations = {
    ['SET_MENU'](state,menu){
        state.menu = menu;
    },
    ['SET_MENU_ACTIVE'](state, _index) {
        state.menu_active = state.menu[_index]
    },
    ['SET_MENU_WECHAT_LIST'](state,list){
        state.wechat_list = list
    },
    ['SHIFT_MENU'](state){
        // console.log(state.wechat_list)
        // state.wechat_list.shift();
        // console.log(state.wechat_list)
    },
    ['BACK_PATH'](state,_path){
        //设置返回按钮跳转路径
        state.back_path = {path:_path};
    },
    //dialogue
    ['DIALOGUE_BAR'](state,componentName){
        console.log(componentName)
        state.dialogue_bar = componentName;
    },
    ['DIALOGUE_ID'](state,id){
        state.dialogue_id = id;
    },
    ['DIALOGUE_TYPE'](state,type){
        state.dialogue_type = type;
    }

}

export default new Vuex.Store({
    state,
    mutations,
    strict: true
})
