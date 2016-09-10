//index-nav
module.exports = [{
    index: 0,
    path: {
        path: '/chat'
    },
    hint: { type: "count", count: 999 }, //count,dot
    iconClass: 'icon-wechat',
    text: '微信'
}, {
    index: 1,
    path: {
        path: '/contact'
    },

    hint: { type: "count", count: 999 }, //count,dot
    iconClass: 'icon-contact',
    text: '通讯录'
}, {
    index: 2,
    path: {
        path: '/find'
    },
    hint: { type: "dot", count: true }, //count,dot
    iconClass: 'icon-find',
    text: '发现'
}, {
    index: 3,
    path: {
        path: '/me'
    },
    hint: { type: null, count: 0 }, //count,dot
    iconClass: 'icon-me',
    text: '我'
}]
