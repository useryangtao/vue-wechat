<template>
    <div class="_full_router person-info">
        <div class="_full_inner">
            <div class="_cover-top" :title="backPath">
                <top-handle
                    :back-path='backPath'
                    :back-text='topModel.backText'
                    :cur-text='"详细资料"'
                    :next-path='topModel.nextPath'
                    :next-icon='topModel.nextIcon'
                    >
                </top-handle>
            </div>
            <div class="_cover-content">
                123
            </div>
        </div>
        <router-view transition="cover"></router-view>
    </div>
</template>
<script>
import topHandle from 'topHandle'
export default {
    router:{
        activate({from,to,next}){
            // console.log("chat详情","激活",transition);
            //this.topModel.backPath.path = transition.from.path;
            console.log('person-info',from)
            next()
        },
    },
    vuex:{
        getters:{
            backPath:state=>state.back_path
        }
    },
    data() {
        return {
            topModel:{
                backText:'聊天详情'
            }
        }
    },
    methods:{
        
    },
    components:{
        topHandle
    },
}
</script>
<style scoped>
    .person-info{
        z-index: 10;
    }
</style>
