<template>
    <div class="_full_inner _effect">
        <h1>{{ content }}</h1>
        <a href="javascript:;" class="weui_btn weui_btn_primary">按钮</a>
        <!-- <button @click="menu_shift">del</button> -->
    </div>
    <router-view></router-view>
</template>
<script>
import { menu_shift } from '../vuex/action'
export default {
    route:{
        data(transition){
            console.log('通讯录','data:',transition)
            console.log("")
            // transition.next()
        },
        activate(transition){
            console.log("通讯录","激活",transition);
            transition.next()
        },
        deactivate(transition){
            console.log("通讯录","销毁",transition);
            transition.next();

        }
    },
    vuex:{
        actions:{
            menu_shift
        }
    },
    data() {
        return {
            content: 'contact'
        }
    }
}
</script>
<style scoped>
</style>
