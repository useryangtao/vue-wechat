<template>
    <div class="component-dialogue-bar">
    <div class="dialogue-item" :class="dialogue_bar_type!=='dialogueBarPublic'?'transition-dialogue-down':''">
        <div class="left-slide-type iconfont icon-dialogue-bar-jianpan"
        @tap=''></div>
        <div class="" style="overflow:hidden;">
            <dialogue-bar-public></dialogue-bar-public>
        </div>
    </div>
    <div class="dialogue-item" :class="dialogue_bar_type!=='dialogueBarPerson'?'transition-dialogue-down':''">
        <div class="left-slide-type iconfont icon-dialogue-bar-menu"
        @tap=''></div>
        <div class="" style="overflow:hidden;">
            <dialogue-bar-person></dialogue-bar-person>
        </div>
    </div>

    </div>

</template>
<script>
import dialogueBarPerson from './dialogue-bar-person.vue'
import dialogueBarPublic from './dialogue-bar-public.vue'
export default {
    vuex:{
        getters:{

        },
        actions:{

        }
    },
    props:{
    },
    data() {
        return {
            dialogue_bar_type:'dialogueBarPublic'
        }
    },
    methods:{
        switch_bar(){

        }
    },
    components:{
        dialogueBarPerson,dialogueBarPublic
    }
}
</script>
<style scoped>
.component-dialogue-bar{
    position: relative;
    display: flex;
    height: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    /* padding: 5px 0; */
}
.component-dialogue-bar::before{
    content: "";
    position: absolute;
    left: 50px;
    top: 0px;
    border-right: 1px solid #b7b7b7;
    height: 200%;
    transform: scale(.5);
    transform-origin:0 0;
}
.component-dialogue-bar .hanlde{
    display: flex;
}
.dialogue-item{
    position: absolute;
    height: 50px;
    bottom:0;
    left: 0;
    width: 100%;
    transition: .2s all ease;
}
.transition-dialogue-down{bottom:-50px;}
.left-slide-type{
    min-width: 50px;
    width: 50px;
    height: 100%;
    flex-basis: 50px;
    padding: 5px 0;
    text-align: center;
    flex-grow: 0;
    font-size: 30px;
    line-height: 40px;
    color: #7d7e83;
}
</style>
