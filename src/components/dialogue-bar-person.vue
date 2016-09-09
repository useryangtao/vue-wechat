<template>
    <div class="component-dialogue-bar-person">
        <span class="iconfont icon-dialogue-jianpan"
        v-show="way==='say'"
        v-touch:tap="switch_way('txt')"
        ></span>
        <span class="iconfont icon-dialogue-voice"
        v-show="way==='txt'"
        v-touch:tap="switch_way('say')"></span>

        <!--say-->
        <div class="chat-way"
            v-show="way==='say'">
            <div class="chat-say" 
                :class="!!state_say?'chat-say_touched':''"
                v-touch:press="switch_way_say(true)"
                @touchend="switch_way_say(false)">
                <span class="one">按住 说话</span>
                <span class="two">松开 结束</span>
            </div>
        </div>
        <!--txt-->
        <div class="chat-way" v-show="way==='txt'">
            <input class="chat-txt" type="text">
        </div>
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
            way:'txt',
            state_say:false,//'chat-say_touched'
        }
    },
    methods:{
        switch_way(way){
            //say,txt
            console.log(way)
            this.way = way;
        },
        switch_way_say(boo){
            this.state_say = boo;
        }
    }
}
</script>

