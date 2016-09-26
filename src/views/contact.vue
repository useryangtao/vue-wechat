<template>
    <div class="_full_inner _effect component-contact" 
        :class="{'_effect--30':decline}">

        <search-bar :search-id='""'></search-bar>
        <div class="weui_cells_contact-head weui_cells weui_cells_access" style="margin-top:-1px;">
            <a class="weui_cell" href="javascript:;"
            v-link="{path:'/contact/new-friends'}">

            <div class="weui_cell_hd">
                <img class="img-obj-cover" src="../assets/images/contact_top-friend-notify.png" >

            </div>
                <div class="weui_cell_bd weui_cell_primary">
                    <p>新的朋友</p>
                </div>
            </a>
            <a class="weui_cell" href="javascript:;"
            v-link="{path:'/contact/group-chat'}">
            <div class="weui_cell_hd">
                <img class="img-obj-cover" src="../assets/images/contact_top-addgroup.png" >
            </div>
                <div class="weui_cell_bd weui_cell_primary">
                    <p>群聊</p>
                </div>
            </a>
            <a class="weui_cell" href="javascript:;"
            v-link="{path:'/contact/new-friends'}">
            <div class="weui_cell_hd">
                <img class="img-obj-cover" src="../assets/images/contact_top-tag.png" >
            </div>
                <div class="weui_cell_bd weui_cell_primary">
                    <p>标签</p>
                </div>
            </a>
            <a class="weui_cell" href="javascript:;"
            v-link="{path:'/contact/new-friends'}">
            <div class="weui_cell_hd"><img class="img-obj-cover" src="../assets/images/contact_top-offical.png" ></div>
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
