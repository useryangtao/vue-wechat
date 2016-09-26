<template>
    <div class="_full_inner _effect component-find" :class="{'_effect--30':decline}">
        <div class="_full component-find-content">
            <div class="weui_cells weui_cells_access">
                <div class="weui_cell" href="javascript:;" v-link='{path:"albums-friends",append:true}'>
                    <div class="weui_cell_hd"><img src="../assets/images/find_icon-circle.png"></div>
                    <div class="weui_cell_bd weui_cell_primary">
                        <p>朋友圈</p>
                    </div>
                    <div class="weui_cell_ft">
                        <div class="find-circle-cell">
                        </div>
                    </div>
                </div>
            </div>
            <!-- flag -->
            <div class="weui_cells weui_cells_access">
                <div class="weui_cell" href="javascript:;" v-link='{path:"sao-yi-sao",append:true}'>
                    <div class="weui_cell_hd"><img src="../assets/images/find_icon-qrcode.png"></div>
                    <div class="weui_cell_bd weui_cell_primary">
                        <p>扫一扫</p>
                    </div>
                    <div class="weui_cell_ft">
                        <div class="find-circle-cell">
                        </div>
                    </div>
                </div>
                <div class="weui_cell" href="javascript:;" v-link='{path:"yao-yi-yao",append:true}'>
                    <div class="weui_cell_hd"><img src="../assets/images/find_icon-shake.png"></div>
                    <div class="weui_cell_bd weui_cell_primary">
                        <p>摇一摇</p>
                    </div>
                    <div class="weui_cell_ft">
                        <div class="find-circle-cell">
                        </div>
                    </div>
                </div>
            </div>
            <!-- flag -->
            <div class="weui_cells weui_cells_access">
                <div class="weui_cell" href="javascript:;" v-link='{path:"drift-bottle",append:true}'>
                    <div class="weui_cell_hd"><img src="../assets/images/find_icon-bottle.png"></div>
                    <div class="weui_cell_bd weui_cell_primary">
                        <p>漂流瓶</p>
                    </div>
                    <div class="weui_cell_ft">
                        <div class="find-circle-cell">
                        </div>
                    </div>
                </div>
            </div>
            <!-- flag -->
            <div class="weui_cells weui_cells_access">
                <div class="weui_cell" href="javascript:;" v-touch:tap='hrefShopping()'>
                    <div class="weui_cell_hd"><img src="../assets/images/find_icon-shopping.png"></div>
                    <div class="weui_cell_bd weui_cell_primary">
                        <p>购物</p>
                    </div>
                    <div class="weui_cell_ft">
                        <div class="find-circle-cell">
                        </div>
                    </div>
                </div>
                <div class="weui_cell" href="javascript:;">
                    <div class="weui_cell_hd"><img src="../assets/images/find_icon-moregame.png"></div>
                    <div class="weui_cell_bd weui_cell_primary">
                        <p>游戏</p>
                    </div>
                    <div class="weui_cell_ft">
                        <div class="find-circle-cell">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <router-view transition="cover" ></router-view>
</template>
<script>
// import {} from 'getters'
import {
    set_iframe_url,
    set_menu_active
} from 'actions'

import topHandle from 'topHandle'

export default {
    vuex: {
        getters: {

        },
        actions: {
            set_iframe_url,
            set_menu_active
        }
    },
    route: {
        activate({
            from,
            to,
            next
        }) {
            this.set_menu_active(2)
            next()
        },
    },
    data() {
        return {
            decline: false,
        }
    },
    methods: {
        hrefShopping(){
            this.set_iframe_url({title:"京东购物",url:"//wqs.jd.com"},()=>{
                this.$router.go({
                    path: "/find/shopping"
                })    
            });
        }

    },
    events: {
        'route-pipe' (_decline) {
            this.decline = _decline
            this.$parent.$emit('route-pipe', _decline)
        }
    },
    created() {

    },
    components: {
        topHandle
    }
}
</script>
<style scoped>
</style>
