<template>
    <div class="_full_router component-new-friends" class="">
        <div class="_full_inner">            
            <top-handle
            :back-path="backPath"
            :back-text="'返回'"
            :cur-text="'新的朋友'"
            :class="animatiion_out?'_effect--50':''"></top-handle>
            <div class="_cover-content _effect"
            :class='animatiion_out?"_effect--30":""'>
                
            </div>
        </div>

        <router-view></router-view>
    </div>
</template>
<script>
import topHandle from 'topHandle'
export default {
    vuex:{
        getters:{
            backPath:state=>state.back_path,
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
            
        }
    },
    methods:{
        
    },
    events:{
        'route-pipe'(_out){
            console.log('dialogue pipe-chat')
            this.animatiion_out = _out
        }
    },
    components:{
        topHandle
    }
}
</script>
<style scoped>
    
</style>
