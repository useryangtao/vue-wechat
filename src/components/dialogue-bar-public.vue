<template>
    <ul class="component-dialogue-bar-public">
        <li>
            <span class="iconfont icon-chat-detail-add"></span>
            <div class="_ellipsis">
                收单收单收单
            </div>
        </li>
        <li>
            <span class="iconfont icon-chat-detail-add"></span>
            <div class="_ellipsis">
                收单
            </div>
        </li>
        <li>
            <span class="iconfont icon-chat-detail-add"></span>
            <div class="_ellipsis">
                收单
            </div>
        </li>
    </ul>

</template>
<script>
export default {
    replace:true,
    props:{
    },
    data() {
        return {
        }
    },
    methods:{
    },
    components:{
    }
}
</script>
<style scoped>
.component-dialogue-bar-public{
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
}

.component-dialogue-bar-public li{
    padding: 0 2px;
    overflow: hidden;
    flex-grow: 1;
    flex-shrink: 0;
    line-height: 50px;
    flex-basis: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.component-dialogue-bar-public li .iconfont{
    font-size: 12px;
}
.component-dialogue-bar-public li:not(:last-child)::before{
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    transform-origin: 0 0;
    transform: scale(.5);
    height: 200%;
    border-right: 1px solid #b7b7b7;


}
</style>
