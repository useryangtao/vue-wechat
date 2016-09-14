// import { } from '../mutation-types'
let state = {
    person_info:{},
}
const mutations = {
    ['PERSON_INFO'](state,infoObj){
        state.person_info = infoObj
    }
}

export default {
  state,
  mutations
}