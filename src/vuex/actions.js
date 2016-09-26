//index-nav
export const get_index_nav = ({ dispatch }) => {
    let index_nav = require('../mock/index-nav')
    dispatch('SET_MENU', index_nav)
}
export const set_menu_active = ({ dispatch }, _index) => {
    dispatch('SET_MENU_ACTIVE', _index)
}
export const set_chat_count = ({ dispatch }, count) => {
    dispatch('SET_CHAT_COUNT', count)
}

//chat
export const set_news_state = ({ dispatch }, index, val, fn) => {
    dispatch('SET_NEWS_STATE', index, val)
    !!fn && fn()
}
export const delete_news = ({ dispatch }, index, fn) => {
    dispatch('DELETE_NEWS', index)
    !!fn && fn()
}
export const get_menu_wechat_list = ({ dispatch }, fn) => {
    let list = require('../mock/chat')
    dispatch('SET_MENU_WECHAT_LIST', list)
    !!fn && fn()
}
export const set_chat = ({ dispatch }, model) => {
    dispatch('CHAT', model)
}

//contact
export const get_person_info = ({ dispatch }, id, fn) => {
    let info = require('../mock/person-info-' + id)
    dispatch('PERSON_INFO', info)
    !!fn && fn()
}
export const get_friends_list = ({ dispatch }, id) => {
    let friends = require('../mock/contact')
    dispatch('CONTACT_FRIENDS', friends)
}

//find
export const set_iframe_url = ({ dispatch }, urlObj, fn) => {
    dispatch('SET_IFRAME_URL', urlObj)
    !!fn && fn()
}



//优雅结构,可读性略差
// export const deleteTodo = makeAction('DELETE_TODO')
// export const toggleTodo = makeAction('TOGGLE_TODO')
// export const editTodo = makeAction('EDIT_TODO')
// export const toggleAll = makeAction('TOGGLE_ALL')
// export const clearCompleted = makeAction('CLEAR_COMPLETED')

// function makeAction (type) {
//   return ({ dispatch }, ...args) => dispatch(type, ...args)
// }
