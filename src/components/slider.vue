<template>
    <!-- slider整体的容器 -->
    <div class="slider" ref="slider">

        <!-- slider-group 是 slider-item 的容器 -->
        <div class="slider-group" ref="sliderGroup">
            <div class="slider-item" v-for="(item,index) in list" :key="index" >
                <a :href="item.linkUrl">
                    <img :src="item.picUrl" :alt="item.linkUrl" :style="`width:${width}`" ref="sliderItemImg">
                </a>
            </div>
        </div>

        <!-- dots 是 dot 的容器 -->
        <div class="dots" v-if="this.dots">
            <span :class="`dot ${index === currentPageIndex ? 'active' :'' }`" v-for="(item,index) in list.length" :key="index"></span>
        </div>
  </div>
</template>
<script>
export default {
    props:{
        // width -> 图片宽度 默认 100%
        // list -> 数据列表 对象数组，格式 [{linkUrl:'url',picUrl:'url'}]
        // loop -> 是否循环轮播 默认 true
        // autoPlay -> 是否自动轮播 默认 true
        // speed -> 自动轮播速度 默认 3000
        // dots -> 是否显示 dots 默认 true
        
        // 图片宽度
        width:{
            default:'100%',
        },
        // 数据列表
        list:{
            default:[],
            type:Array
        },
        // 否循环轮播
        loop:{
            default:true,
            type:Boolean
        },
        // 是否自动轮播
        autoPlay:{
            default:true,
            type:Boolean,
        },
        // 自动轮播速度
        speed:{
            type:Number,
            default:3000
        },
        // 是否显示 dots
        dots:{
            default:true,
            type:Boolean,
        }
    },
    data(){
        return{}
    },
    methods:{
        // 初始化 slider 宽度
        async _initSliderWidth() {
            // 获取图片的 clientWidth，（因为设置的时候可能使用 100% 设置图片宽度，因此 props width 不能直接使用）
            const imgWidth = this.$refs.sliderItemImg[0].clientWidth;

            // 通过图片的 clientWidth 设置 slider 容器的宽度 , 
            let sliderWidth = imgWidth * this.list.length;
            // 如果是 loop = true，无缝轮播的时候根据 better-scroll 的原理，需要多加两个 图片的 clientWidth
            if (this.loop) {
                // 循环轮播需要添加两个img DOM 的宽度
                sliderWidth += imgWidth * 2;
            }
            this.$refs.sliderGroup.style.width = sliderWidth + "px";

            // 设置图片的宽度为 clientWidth 因为设置完 slider 容器宽度之后，如果图片还使用 100% 控制宽度，图片就无法再做到 100% 的样式，需要手动去指定图片的宽度
            this.$refs.sliderItemImg.forEach(item => {
                item.style.width = imgWidth + "px";
            });

        },
    }
}
</script>
<style lang="scss" scoped>
.slider {
    position: relative;
    min-height: 1px;
    .slider-group {
        position: relative;
        overflow: hidden;
        white-space: nowrap;
        .slider-item{
            float: left;
            overflow: hidden;
            text-align: center;
            a{
                display: block;
                width: 100%;
                overflow: hidden;
                text-decoration: none;
            }
            img {
                display: block;
                width: 100%;
            }
        }
    }
    .dots {
        position: absolute;
        right: 0;
        left: 0;
        bottom: 12px;
        text-align: center;
        font-size: 0;
    }
    .dot {
        display: inline-block;
        margin: 0 4px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #dfdfdf;
        &:active{
            width: 20px;
            border-radius: 5px;
            background: #dfdfdf;
        }
    }
}

</style>
