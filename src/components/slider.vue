<template>
    <!-- slider整体的容器 -->
    <div class="slider" ref="slider" :style="`height:${sliderHeight};`" >

        <!-- slider-group 是 slider-item 的容器 -->
        <div class="slider-group flex" ref="sliderGroup">
            <div class="slider-item" v-for="(item,index) in list" :key="index" >
                <a :href="item.linkUrl">
                    <img :src="item.picUrl" :alt="item.linkUrl" ref="sliderItemImg">
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
import BScroll from 'better-scroll'
export default {
    props:{
        // width -> 图片宽度 默认 100%
        // list -> 数据列表 对象数组，格式 [{linkUrl:'url',picUrl:'url'}]
        // loop -> 是否循环轮播 默认 true
        // autoPlay -> 是否自动轮播 默认 true
        // speed -> 自动轮播速度 默认 3000
        // dots -> 是否显示 dots 默认 true
        
        // 容器高度
        sliderHeight:{
            type:String,
            default:'auto'
        },
        // 图片宽度
        imgWidth:{
            default:'100%',
        },
        // 数据列表
        list:{
            default:[],
            type:Array
        },
        // 否循环轮播
        loop:{
            type:Boolean,
            default:true,
        },
        // 是否自动轮播
        autoPlay:{
            default:false,
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
        return{
            currentPageIndex:0
        }
    },
    methods:{
        // 初始化 slider 宽度
        _initSliderWidth() {
            // 获取图片的 clientWidth，（因为设置的时候可能使用 100% 设置图片宽度，因此 props width 不能直接使用）
            //getBoundingClientRect() 返回元素的大小及其相对于视口的位置
            // const imgWidth = this.$refs.sliderItemImg[0].getBoundingClientRect().width;
            const imgWidth = this.imgWidth
            console.log(imgWidth)
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
        // 初始化 better-slider 
        _initSlider(){
            const _this = this;
            // 初始化BScroll
            _this._slider = new BScroll(_this.$refs.slider, {
                scrollX: true,
                scrollY: false,
                momentum: false,
                click:true,
                snap: {
                    loop: _this.loop, // 循环
                    threshold: 0.3
                }
            });
            // 获取当前页
            _this._getCurrentPageIndex();
            // 滚动之前 清除timer
            _this._slider.on('beforeScrollStart',()=>{
                clearInterval(_this._timer);
            });
        },
        // 获取滚动的当前页
        _getCurrentPageIndex() {
            const _this = this
            _this._slider.on("scrollEnd", () => {
                let index = _this._slider.getCurrentPage().pageX;
                console.log(index)
                _this.currentPageIndex = index;
                // 如果自动播放 则重新开启自动播放
                if(_this.autoPlay){
                    _this._play()
                }
            })
        },

        // 控制自动轮播
        _play(){
            const _this =this;
            let pageIndex = _this.currentPageIndex;
            _this._timer = setInterval(() => {
                pageIndex++;
                if(pageIndex >= _this.list.length){
                    pageIndex = 0;
                }
                // 通过定时器进行 goToPage() 方法的调用
                _this._slider.goToPage(pageIndex);
            }, this.speed);
        }
    },
    // 组件的挂载钩子
    mounted() {

        // $nextTick() 是 vue 提供的钩子，主要是确保 DOM 已经全部挂载完在调用下面的方法
        // await this.$nextTick()
        const _this = this;
        _this.tmpTimer = setTimeout(() => {
            // 初始化 slider 宽度
            _this._initSliderWidth();
            // 初始化slider
            _this._initSlider();
            // 自动轮播
            if (_this.autoPlay) {
                _this._play();
            }

        }, 20)
    },
}
</script>
<style lang="scss" scoped>
.slider {
    position: relative;
    min-height: 1px;
    overflow: hidden;
    .slider-group {
        position: relative;
        overflow: hidden;
        white-space: nowrap;
        height:100%;
        .slider-item{
            height:100%;
            overflow: hidden;
            text-align: center;
            a{
                height:100%;
                display: block;
                width: 100%;
                overflow: hidden;
                text-decoration: none;
            }
            img {
                height:100%;
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
        &.active{
            width: 20px;
            border-radius: 5px;
            background: #dfdfdf;
        }
    }
}

</style>
