import index from './base/index'

export const get_menu = ({ dispatch }, menu) => {
    index.getMenu(menu => {
        dispatch('SET_MENU', menu)
    })
}
export const set_menu_active = ({ dispatch }, _index) => {
    dispatch('SET_MENU_ACTIVE', _index)
}
export const get_menu_wechat_list = ({ dispatch }, list) => {
    index.getWechatList(list => {
        dispatch('SET_MENU_WECHAT_LIST', list)
    })
}

export const menu_shift = ({dispatch})=>{
    dispatch('SHIFT_MENU')
}
export const set_dialogue_bar = ({dispatch},componentName)=>{
    dispatch('DIALOGUE_BAR',componentName)
}
export const set_dialogue_id = ({dispatch},id)=>{
    dispatch('DIALOGUE_ID',id)
}
export const set_dialogue_type = ({dispatch},type)=>{
    dispatch('DIALOGUE_TYPE',type)
}


