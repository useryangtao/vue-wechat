<template>
    <div class="_full_router component-xxx">
        <div class="_full_inner">
            <top-handle
                :back-text="topModel.backText"
                :cur-text="'返回'"
                :decline="decline"
                :next-path="topModel.nextPath"
                :next-icon="topModel.nextIcon"
                >
            </top-handle>
            <div class="_cover-content _effect"
                :class="{'_effect--30':decline}">
                <div></div>
            </div>
        </div>
        <!-- router -->
        <router-view  transition="cover"></router-view>
    </div>
</template>
<script>
// import {} from 'getters'

import topHandle from 'topHandle'
export default {
    vuex:{
        getters:{

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
                backText:'',
                curText:'',
                nextPath:{poth:''},
                nextIcon:''
            }
        }
    },
    methods:{
        
    },
    events:{
        'route-pipe'(_decline){
            this.decline = _decline
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
    
</style>
