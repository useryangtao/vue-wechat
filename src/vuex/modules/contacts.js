import {
    PERSON_INFO,
    CONTACT_FRIENDS,
    FRIEND_ID
} from '../mutation-types'

let state = {
    person_info: {
        base: {}
    },
    contact_friends: []
}
const mutations = {
    [PERSON_INFO](state, infoObj) {
        state.person_info = infoObj
    },
    [CONTACT_FRIENDS](state, arr) {
        state.contact_friends = arr;
    },
    [FRIEND_ID](state, id) {

    }
}

export default {
    state,
    mutations
}
