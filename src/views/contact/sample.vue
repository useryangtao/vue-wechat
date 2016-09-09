<template>
    <div class="_full_router">
        <div class="_full_inner">
            <top-handle
            :back-path="backPath"
            :back-text="'返回'"></top-handle>
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
    data() {
        return {
            
        }
    },
    methods:{
        
    },
    components:{
        topHandle
    }
}
</script>
<style scoped>
    
</style>
