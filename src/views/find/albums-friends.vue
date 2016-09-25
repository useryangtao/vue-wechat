<template>
    <div class="_full_router component-albums-friends" @touchmove.prevent="">
        <div class="_full_inner" @touchmove.stop="">
            <top-handle :back-text="topModel.backText" :cur-text="topModel.curText" :decline="decline" :next-path="topModel.nextPath" :next-icon="topModel.nextIcon">
            </top-handle>
            <div class="_cover-content _effect" :class="{'_effect--30':decline}">
                <div class="drag-reflash" :style="reflashPosition"></div>
                <div class="drag-wrap" id="drag-wrap">
                    <div class="drag-inner" id="drag-inner" :style="contentPosition"  @touchstart="startDrag" @touchmove="onDrag" @touchend="stopDrag" @touchcancel="stopDrag">
                        <header class="home-pic">
                            <div class="home-pic-base">
                                <div class="top-pic">
                                    <div class="top-pic-inner" style="background-image:url(//images2015.cnblogs.com/blog/528573/201609/528573-20160925131410373-516492873.jpg) ">
                                    </div>
                                </div>
                                <div class="top-name _ellipsis">yangtao</div>
                            </div>
                        </header>
                        <section class="home-content">

                        </section>
                    </div>
                </div>
            </div>
        </div>
        <!-- router -->
        <router-view transition="cover"></router-view>
    </div>
</template>
<script>
// import {} from 'getters'
// import {} from ''

import dynamics from '../../assets/js/dynamics'
import topHandle from 'topHandle'

export default {
    vuex: {
        getters: {

        },
        actions: {

        }
    },
    route: {
        activate({
            from,
            to,
            next
        }) {
            //do something...
            this.$parent.$emit('route-pipe', true)
            next()
        },
        deactivate({
            from,
            to,
            next
        }) {
            this.$parent.$emit('route-pipe', false)
            next()
        }
    },
    data() {
        return {
            dragging: false,
            isDragging: false,
            start: {
                y: 0
            },
            c: {
                y: 0
            },
            reflash: {
                top: '-40px',
                transform: 'rotate(0deg)'
            },
            //
            decline: false,
            topModel: {
                backText: '返回',
                curText: '朋友圈',
                nextPath: {
                    path: ''
                },
                nextIcon: ''
            }
        }
    },
    methods: {
        startDrag: function(e) {
            e = e.changedTouches ? e.changedTouches[0] : e
            this.isDragging = document.getElementById("drag-wrap").scrollTop === 0
            if (this.isDragging) {
                this.dragging = true
                this.start.y = e.pageY
                // console.log('start', this.start.y)
            }
        },
        onDrag: function(e) {
            e = e.changedTouches ? e.changedTouches[0] : e
            if (!this.isDragging) {
                this.isDragging = document.getElementById("drag-wrap").scrollTop === 0;
                if (this.isDragging) {
                    this.dragging = true
                    this.start.y = e.pageY
                }
            }
            if (this.isDragging) {
                this.c.y = (e.pageY - this.start.y) / 3
            }
        },
        stopDrag: function() {
            // e.cancelable = false;
            if (this.dragging) {
                this.dragging = false
                dynamics.animate(this.c, {
                    y: 0
                }, {
                    type: dynamics.easeOut,
                    duration: 350,
                })
            }
        }
    },
    computed: {
        reflashPosition: function() {
            var cy = this.c.y;
            cy = cy > 68 ? 68 : cy
            return {
                top: (-40 + cy) + 'px',
                transform: 'rotate(' + (-this.c.y * 3) + 'deg)'
            }
        },
        contentPosition: function() {
            var cy = this.c.y;
            this.c.y = cy > 0 ? cy : 0
            return {
                transform: 'translate3d(0,' + this.c.y + 'px,0)'
            }
        }
    },
    events: {
        'route-pipe' (_decline) {
            this.decline = _decline
            this.$parent.$emit('route-pipe', _decline)
        }
    },
    created() {
    },
    ready() {
    },
    components: {
        topHandle
    },
}
</script>
<style scoped>
._cover-content{
    width: 100%;
    padding-top: 0;
    overflow: hidden;
}
.drag-wrap {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: auto;
    background-color: #2e3132;
}

.drag-inner {
    width: 100%;
    /* height: 1000px; */
    box-shadow: 0px 4px 16px rgba(0, 0, 0, .15);
    background-color: #ffffff;
}

.home-pic {
    width: 100%;
    margin-top: -90px;
    position: relative;
    height: 370px;
    background: url(../../assets/images/find-bg.png) no-repeat center center;
    background-size: cover;
}
.home-pic-base{
    position: absolute;
    left: 0;
    bottom: -22px;
    width: 100%;
    height: 70px;
    padding: 0 15px;
}
.home-pic-base .top-pic{
    width: 140px;
    height: 140px;
    padding: 3px;
    transform: scale(.5);
    transform-origin: 100% 0%;
    background-color: #ffffff;
    border: 1px solid #cccccc;
    float:right;
}
.home-pic-base .top-name{
    position: absolute;
    left: 20px;
    right: 105px;
    top:10px;
    font-size: 20px;
    text-align: right;
    color: #ffffff;
    overflow: hidden;
}
.top-pic-inner{
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat:no-repeat;
    background-position:center center;
}
.drag-reflash {
    position: absolute;
    left: 20px;
    top: -40px;
    z-index: 2;
    width: 30px;
    height: 30px;
    background: url(../../assets/images/find-album-reflash-icon.png) no-repeat 0 0;
    background-size: contain;
}
.home-content{
    padding-top: 45px;
    min-height: 500px;
}
</style>
