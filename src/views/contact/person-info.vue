<template>
    <div class="_full_router component-xxx">
        <div class="_full_inner">
            <top-handle
                :back-text="topModel.backText"
                :cur-text="topModel.curText"
                :decline="decline"
                :next-path="topModel.nextPath"
                :next-icon="topModel.nextIcon"
                >
            </top-handle>
            <div class="_cover-content _effect"
                :class="{'_effect--30':decline}">
                <div>详细资料</div>
            </div>
        </div>
        <!-- router -->
        <router-view  transition="cover"></router-view>
    </div>
</template>
<script>
import {person_info} from 'getters'

import topHandle from 'topHandle'
export default {
    vuex:{
        getters:{
            person_info
        },
        action:{

        }
    },
    route:{
        activate({from,to,next}) {
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
                curText:'详细资料',
                nextPath:{path:'person-info-set',append:true},
                nextIcon:'icon-more'
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
        console.log(this.person_info);
    },
    ready(){

    },
    components: {
        topHandle
    },
}
</script>
<style scoped>
    
</style>
