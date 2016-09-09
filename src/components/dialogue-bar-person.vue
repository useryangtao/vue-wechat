<template>
    <div class="component-dialogue-bar-person">
        <span class="iconfont icon-dialogue-jianpan" hidden></span>
        <span class="iconfont icon-dialogue-voice" ></span>
        <div class="chat-way"><input type="text"></div>
        <span class="expression iconfont icon-dialogue-smile"></span>
        <span class="more iconfont icon-dialogue-jia"></span>
    </div>

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
        
    }
}
</script>
<style scoped>
    .component-dialogue-bar-person{
        padding: 5px 0;
        height: 100%;
        flex-grow: 1;
        flex-basis: 200px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .component-dialogue-bar-person .iconfont{
        color: #7d7e83;
        flex-basis:40px;
        width: 40px;
        padding: 0 3px;
        font-size: 30px;
        flex-grow: 0;
        vertical-align: middle;
        line-height: 40px;
        padding: 0 4px;
    }
    .chat-way{
        vertical-align: middle;
        padding: 4px 0px;
        height: 100%;
        flex-grow: 1;
        flex-basis: 200px;
    }
    .chat-way input{
        border-radius: 6px;
        overflow: hidden;
        padding: 0 10px;
        width: 200%;
        height: 200%;
        border: 1px solid #7d7e83;
        transform: scale(.5);
        transform-origin: 0 0; 
        font-size: 30px;
    }
    
</style>
