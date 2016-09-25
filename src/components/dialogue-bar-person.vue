<template>
    <div class="component-dialogue-bar-person">
        <span class="iconfont icon-dialogue-jianpan" v-show="way==='say'" v-touch:tap="switch_way('txt')"></span>
        <span class="iconfont icon-dialogue-voice" v-show='way==="txt"' v-touch:tap='switch_way("say")'></span>
        <!--say-->
        <div class="chat-way" v-show="way==='say'">
            <div class="chat-say" :class='!!state_say?"chat-say_touched":""' v-touch:press='switch_way_say(true)' @touchend='switch_way_say(false)' @touchmove='switch_say_cancel(true)'>
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
        <!--tips-->
        <div class="recording" v-show="state_say">
            <div class="recording-voice" v-show='!say_cancel&&state_say'>
                <div class="voice-inner">
                    <div class="voice-icon"></div>
                    <div class="voice-volume">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <p>手指上划,取消发送</p>
            </div>
            <div class="recording-cancel" v-show='say_cancel&&state_say'>
                <div class="cancel-inner"></div>
                <p >松开手指,取消发送</p>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    replace: true,
    props: {

    },
    data() {
        return {
            way: 'txt',
            state_say: false, //'chat-say_touched'
            say_cancel:false,
        }
    },
    methods: {
        switch_way(way) {
            //say,txt
            // console.log(way)
            this.way = way;
        },
        switch_way_say(boo) {
            this.state_say = boo;
            this.say_cancel = false;
        },
        switch_say_cancel(){
            this.say_cancel = true;
        }
    }
}
</script>
