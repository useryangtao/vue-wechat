<template>
    <div class="component-dialogue-bar">
        <div class="dialogue-item" :class="dialogue_bar_type==='dialogueBarPerson'?'transition-dialogue-down':''">
            <div class="left-slide-type iconfont icon-dialogue-bar-jianpan" v-touch:tap='switch_bar("dialogueBarPerson")'></div>
            <dialogue-bar-public></dialogue-bar-public>
        </div>
        <div class="dialogue-item" :class="dialogue_bar_type==='dialogueBarPublic'?'transition-dialogue-down':''">
            <div class="left-slide-type iconfont icon-dialogue-bar-menu" v-touch:tap='switch_bar("dialogueBarPublic")'></div>
            <dialogue-bar-person></dialogue-bar-person>
        </div>
    </div>
</template>
<script>
import dialogueBarPerson from './dialogue-bar-person.vue'
import dialogueBarPublic from './dialogue-bar-public.vue'

export default {
    vuex: {
        getters: {
        },
        actions: {

        }
    },
    props: {},
    data() {
        return {
            dialogue_bar_type: 'dialogueBarPublic'
        }
    },
    methods: {
        switch_bar(name) {
            this.dialogue_bar_type = name
        }
    },
    create() {
        console.log(this.dialogue_bar_type)
    },
    components: {
        dialogueBarPerson,
        dialogueBarPublic
    }
}
</script>
