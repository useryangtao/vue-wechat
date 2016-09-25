<template>
    <div class="_full_inner _effect component-me" :class="{'_effect--30':decline}">
        <div class="weui_cells weui_cells_access me-line">
            <a class="weui_cell " href="javascript:;">
                <div class="weui_cell_hd">
                    <img src="//images2015.cnblogs.com/blog/528573/201609/528573-20160925223248967-1344840692.jpg">
                </div>
                <div class="weui_cell_bd weui_cell_primary">
                    <p>yangtao</p>
                    <p><span>微信号:&nbsp;&nbsp;</span><span>wxid_yangtao</span></p>
                </div>
                <div class="weui_cell_ft">
                    <img class="_align-middle" style="height:25px;" src="../assets/images/chat-info-qr.png">
                </div>
            </a>
        </div>
        <!-- flag -->
        <div class="weui_cells weui_cells_access">
            <a class="weui_cell" href="javascript:;">
                <div class="weui_cell_hd"><img src="../assets/images/me_more-my-album.png" alt="" style="width:20px;margin-right:5px;display:block"></div>
                <div class="weui_cell_bd weui_cell_primary">
                    <p>相册</p>
                </div>
                <div class="weui_cell_ft"></div>
            </a>
            <a class="weui_cell" href="javascript:;">
                <div class="weui_cell_hd"><img src="../assets/images/me_more-my-favorites.png" alt="" style="width:20px;margin-right:5px;display:block"></div>
                <div class="weui_cell_bd weui_cell_primary">
                    <p>收藏</p>
                </div>
                <div class="weui_cell_ft"></div>
            </a>
            <a class="weui_cell" href="javascript:;">
                <div class="weui_cell_hd"><img src="../assets/images/me_more-my-bank-card.png" alt="" style="width:20px;margin-right:5px;display:block"></div>
                <div class="weui_cell_bd weui_cell_primary">
                    <p>钱包</p>
                </div>
                <div class="weui_cell_ft"></div>
            </a>
            <a class="weui_cell" href="javascript:;">
                <div class="weui_cell_hd"><img src="../assets/images/me_my-card-package-icon.png" alt="" style="width:20px;margin-right:5px;display:block"></div>
                <div class="weui_cell_bd weui_cell_primary">
                    <p>卡包</p>
                </div>
                <div class="weui_cell_ft"></div>
            </a>
        </div>
        <!-- flag -->
        <div class="weui_cells weui_cells_access">
            <a class="weui_cell" href="javascript:;">
                <div class="weui_cell_hd"><img src="../assets/images/me_more-expression.png" alt="" style="width:20px;margin-right:5px;display:block"></div>
                <div class="weui_cell_bd weui_cell_primary">
                    <p>表情</p>
                </div>
                <div class="weui_cell_ft"></div>
            </a>
        </div>
        <!-- flag -->
        <div class="weui_cells weui_cells_access">
            <a class="weui_cell" href="javascript:;">
                <div class="weui_cell_hd"><img src="../assets/images/me_more-setting.png" alt="" style="width:20px;margin-right:5px;display:block"></div>
                <div class="weui_cell_bd weui_cell_primary">
                    <p>设置</p>
                </div>
                <div class="weui_cell_ft"></div>
            </a>
        </div>
    </div>
    <router-view transition="cover"></router-view>
</template>
<script>
export default {
    data() {
            return {
                decline: false
            }
        },
        events: {
            'route-pipe' (_decline) {
                this.decline = _decline
                this.$parent.$emit('route-pipe', _decline)
            }
        }
}
</script>
<style scoped>
.component-me {
    padding-top: 1px;
    background-color: #efeff4;
}
</style>
