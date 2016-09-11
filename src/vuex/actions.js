//index-nav
export const get_index_nav = ({ dispatch }) => {
    let index_nav = require('../mock/index-nav')
    dispatch('SET_MENU', index_nav)
}
export const set_menu_active = ({ dispatch }, _index) => {
    dispatch('SET_MENU_ACTIVE', _index)
}

//
export const get_menu_wechat_list = ({ dispatch }) => {
    let list = require('../mock/chat');
    dispatch('SET_MENU_WECHAT_LIST', list)
}

export const set_dialogue_bar = ({ dispatch }, componentName) => {
    dispatch('DIALOGUE_BAR', componentName)
}
export const set_dialogue_id = ({ dispatch }, id) => {
    dispatch('DIALOGUE_ID', id)
}
export const set_dialogue_type = ({ dispatch }, type) => {
    //设置对话框右侧图标
    dispatch('DIALOGUE_TYPE', type)
}
export const set_dialogue = ({ dispatch }, obj) => {
    dispatch('DIALOGUE', obj)
}
export const set_chat_member = ({ dispatch }, arr) => {
    dispatch('CHAT_MEMBER', arr)
}
export const set_chat_config = ({ dispatch }, obj) => {
    dispatch('CHAT_CONFIG'.obj)
}





// export const deleteTodo = makeAction('DELETE_TODO')
// export const toggleTodo = makeAction('TOGGLE_TODO')
// export const editTodo = makeAction('EDIT_TODO')
// export const toggleAll = makeAction('TOGGLE_ALL')
// export const clearCompleted = makeAction('CLEAR_COMPLETED')

// function makeAction (type) {
//   return ({ dispatch }, ...args) => dispatch(type, ...args)
// }</div>
