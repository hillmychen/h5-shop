<template>
    <div>
        <!-- 标签导航栏 -->
        <nav>
            <div class="wrapper" ref="wrapper">
                <ul class="content flex-ver" ref="slideWrapper">
                    <router-link 
                        tag="li"
                        v-for="(item,index) in navList" 
                        :key="index" 
                        :to="{ name: 'catagories', params:{ id: index }}"
                        ref="slideItem" :class="`${index === currentPageIndex ? 'active' :'' }`">
                                {{item.title}}
                    </router-link>
                </ul>
            </div>
        </nav>

        <keep-alive>
            <router-view></router-view>
        </keep-alive>

    </div>
</template>
<script>
import BScroll from 'better-scroll'

export default {
    props:["navList"],
    data(){
        return{

        }
    },
    computed:{
        currentPageIndex(){
            return Number(this.$route.params.id)
        }
    },
    async mounted() {
        // 等待dom渲染完成
        await this.$nextTick()
        console.log(Number(this.$route.params.id))
        
        // 初始化BSscroll
        await this.initBScoll()
    },
    methods:{
        // 初始化BSscroll
        async initBScoll(){
            // 设置滑动标签的宽度
            let width=0
            // console.log(this.$refs.slideItem[0])
            for (let  i = 0; i <this.navList.length; i++) {
                width+=this.$refs.slideItem[0].$el.getBoundingClientRect().width; 
                //getBoundingClientRect() 返回元素的大小及其相对于视口的位置
            }
            this.$refs.slideWrapper.style.width=width+'px'

            await this.$nextTick(() => {
                // 初始化滑动标签
                if(!this.scroll){

                    this.scroll = new BScroll(this.$refs.wrapper, {
                        startX:0,
                        click:true,
                        scrollX:true,
                        scrollY:false,
                        eventPassthrough:'vertical'
                    })

                }else{
                    // 刷新
                    this.scroll.refresh()
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
// 标签导航
nav{
    // 滚动标签
    .wrapper{
        width: 100%;
        height: .7rem;
        overflow: hidden;
        .content{
            display: flex;
            width:100%;
            height: 100%;
            li{
                flex:0 0 1.7rem;
                font-size: .3rem;
                text-align: center;
                white-space: nowrap;
                &.active{
                    color:rgba(186,67,92, 1.0);
                    border-bottom: 5px solid rgba(186,67,92, 1.0);
                }
            }
        }
    }
}
</style>
