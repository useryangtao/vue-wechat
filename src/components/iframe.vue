<template>
    <div class="_full_router component-iframe">
        <div class="_full_inner">
            <top-handle
                :back-text="topModel.backText"
                :cur-text="iframe_title"
                :decline="decline"
                :next-path="topModel.nextPath"
                :next-icon="topModel.nextIcon"
                >
            </top-handle>
            <div class="_cover-content _effect"
                :class="{'_effect--30':decline}" >
                <div class="_full" style="overflow:hidden;">
                    <iframe class="iframe-wrap _full" style="overflow:hidden;" :src='iframe_url' frameborder="0"></iframe>
                </div>
                    
            </div>
        </div>
    </div>
</template>
<script>
import {
    iframe_url,
    iframe_title
} from 'getters'

// import {} from 'actions'

import topHandle from 'topHandle'


export default {
    vuex:{
        getters:{
            iframe_url,
            iframe_title

        },
        actions:{

        }
    },
    route:{
        activate({from,to,next}) {
            //do something...
            this.$parent.$emit('route-pipe',true)
            next()
        },
        deactivate({from,to,next}){
            this.$parent.$emit('route-pipe',false)
            next()
        }
    },
    data() {
        return {
            decline:false,
            topModel:{
                backText:'返回',
                curText:'new Page',
                nextPath:{path:''},
                nextIcon:''
            }
        }
    },
    methods:{
        
    },
    events:{
        'route-pipe'(_decline){
            this.decline = _decline
            this.$parent.$emit('route-pipe',_decline)
        }
    },
    created(){
    },
    ready(){

    },
    components: {
        topHandle
    },
}
</script>
<style scoped>
    .iframe-wrap{
    }
</style>
