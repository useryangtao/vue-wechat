<template>
    <div class="_full_inner _effect component-contact" 
        :class="{'_effect--30':decline}">

        <search-bar :search-id='""'></search-bar>
        <div class="weui_cells_contact-head weui_cells weui_cells_access" style="margin-top:-1px;">
            <a class="weui_cell" href="javascript:;"
            v-link="{path:'/contact/new-friends'}">

            <div class="weui_cell_hd">
                <img class="img-obj-cover" src="//picabstract.preview.ftn.qq.com:8080/ftn_pic_abs_v2/443e909f2a1246949ca0b84f2e8f0b7466a52dc1774548b13b80e8509f8f7950c8cf44a77eda2af2f67be038d1cc01c1?pictype=scale&from=30013&version=2.0.0.2&uin=541103315&fname=plugins_FriendNotify.png&size=1024*1024" >

            </div>
                <div class="weui_cell_bd weui_cell_primary">
                    <p>新的朋友</p>
                </div>
            </a>
            <a class="weui_cell" href="javascript:;"
            v-link="{path:'/contact/new-friends'}">
            <div class="weui_cell_hd">
                <img class="img-obj-cover" src="//picabstract.preview.ftn.qq.com:8080/ftn_pic_abs_v2/85bfb5940805daebb956f749a917db97aa05319428b32098a2ad461960fb8f6b4a25c84119cdfef7aa29dff7154239b7?pictype=scale&from=30013&version=2.0.0.2&uin=541103315&fname=add_friend_icon_addgroup.png&size=1024*1024" >
            </div>
                <div class="weui_cell_bd weui_cell_primary">
                    <p>群聊</p>
                </div>
            </a>
            <a class="weui_cell" href="javascript:;"
            v-link="{path:'/contact/new-friends'}">
            <div class="weui_cell_hd">
                <img class="img-obj-cover" src="//picabstract.preview.ftn.qq.com:8080/ftn_pic_abs_v2/b4cdc12aab6440e5efa04755dcc4b4dd688c11e7cd7c2ba872acda21651b2152aff56816343874e8f1bff7b1d0426e61?pictype=scale&from=30013&version=2.0.0.2&uin=541103315&fname=Contact_icon_ContactTag.png&size=1024*1024" >
            </div>
                <div class="weui_cell_bd weui_cell_primary">
                    <p>标签</p>
                </div>
            </a>
            <a class="weui_cell" href="javascript:;"
            v-link="{path:'/contact/new-friends'}">
            <div class="weui_cell_hd"><img class="img-obj-cover" src="//picabstract.preview.ftn.qq.com:8080/ftn_pic_abs_v2/57f2fe2365f311f6f9063430feac7e5cbd608ecb7a4f02a3a7fb417d08315b61efb51fe7c76455c7ed5024a3f2981f8a?pictype=scale&from=30013&version=2.0.0.2&uin=541103315&fname=add_friend_icon_offical.png&size=1024*1024" ></div>
                <div class="weui_cell_bd weui_cell_primary">
                    <p>公众号</p>
                </div>
            </a>
        </div>
        <div class="contact-friends">
            <template v-for="grouping in contact_friends"> 
                <p class="contact-alpha" v-text="grouping.alpha"></p>
                <div class="weui_cells weui_cells_access">
                    <div class="weui_cell"
                    v-touch:tap="go_personInfo(item.id)"
                    v-for="item in grouping.list">
                        <div class="weui_cell_hd">
                            <img :src="item.iconSrc"></div>
                        <div class="weui_cell_bd weui_cell_primary">
                            <p v-text="item.remark"></p>
                        </div>
                    </div>
                </div>
            </template>
        </div>

    </div>
    <router-view transition="cover" ></router-view>
</template>
<script>
import { contact_friends } from 'getters'
import { 
    set_menu_active,
    get_friends_list,
    set_friends_id,
    get_person_info } from 'actions'
import searchBar from '../components/search-bar.vue'
export default {
    route:{
        // activate({from,to,next}) {
        //     next()
        // },
    },
    vuex:{
        getters:{
            contact_friends
        },
        actions:{
            set_menu_active,
            get_friends_list,
            get_person_info
        }
    },

    data() {
        return {
            decline:false
        }
    },
    methods:{
        go_personInfo(id){
            this.get_person_info(id,()=>{
                this.$router.go({'path':'/contact/person-info'})
            })
        }
        
    },
    created(){
        this.get_friends_list()
        this.set_menu_active(1)
    },
    events:{
        'route-pipe'(_decline){
            this.decline = _decline
            this.$parent.$emit('route-pipe',_decline)
        }
    },
    components:{
        searchBar
    }
}
</script>
<style scoped>
</style>
