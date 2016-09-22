// import { } from '../mutation-types'
let state = {
    iframe_url:'',
    iframe_title:''
}
const mutations = {
    ['SET_IFRAME_URL'](state,urlObj){
        state.iframe_url = urlObj.url
        state.iframe_title = urlObj.title
    }
}

export default {
  state,
  mutations
}