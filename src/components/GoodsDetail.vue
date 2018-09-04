<template>
	<div class="goods_detail">
		<header class="top_bar flex flex-between flex-ver">
            <div class="flex flex-ver justify-content-center">
                <svg class="icon " aria-hidden="true">
                    <use xlink:href="#icon-icon-test"></use>
                </svg>
            </div>
            <h3 class="cartname">商品详情</h3>
            <a href="#" class="icon_menu"></a>
        </header>
        <main class="detail_box">
            <section class="banner_box">
                <!-- <ul class="banner_child_box flex">
                    <li class="banner_item" v-for="(item,index) in goodsImages" :key="index" ref="bannerItem">
                        <img v-lazy="item.image_url" alt="" class="banner_pic">
                    </li>
                
                </ul> -->

                <banner-slide 
                    :dots="false" 
                    :list="goodsImages" 
                    v-if="goodsImages.length" 
                    :imgWidth="bannerWidth" 
                    :loop="true" 
                    sliderHeight="8rem">
                </banner-slide>

                <div class="banner_count flex flex-ver justify-content-center">
                        <em id="slide-nub" class="fz18">1</em>
                        <em class="nub-bg">/</em>
                        <em id="slide-sum" class="fz12">5</em>
                </div>

            </section>
            <section class="product_info clearfix">
                <div class="product_left">
                    <p class="p_name">{{goodsData[0].product_name}}</p>
                    <div class="product_pric">
                        <span>￥</span>
                        <span class="rel_price">{{goodsData[0].product_price}}</span>
                        <span>.00</span>
                    </div>
                    <div class="product_right">
                        降价通知
                    </div>
                </div>

            </section>
            <section class="product_intro">
                <p class="pro_det">
                    {{goodsData[0].product_detail}}
                </p>
           </section>
          
        </main>
        <footer class="cart_d_footer">
            <div class="m">
                <ul class="m_box">
                    <li class="m_item">
                        <a href="" class="m_item_link">
                            <em class="m_item_pic"></em>
                            <span class="m_item_name">卖家</span>
                        </a>
                        <a href="" class="m_item_link">
                            <em class="m_item_pic two"></em>
                            <span class="m_item_name">关注</span>
                        </a>
                        <a href="" class="m_item_link">
                            <em class="m_item_pic three"></em>
                            <span class="m_item_name">购物车</span>
                        </a>
                    </li>
                </ul>
                <div class="btn_box clearfix" >
                    <a href="#" class="buy_now">加入购物车</a>
                    <a href="#" class="buybuy">立即购买</a>
                </div>
            </div>
        </footer>
	</div>
</template>
<script>
    import bannerSlide from './slider'
    export default {
        components:{
            bannerSlide
        },
        mounted(){


            this.fetchData(this.$route.params.id);
            // // 遍历循环改变图片宽度
            // this.$refs.bannerItem.forEach(item => {
            //     item.style.width = this.bannerWidth + "px";
            // });

        },

        data(){
            return {
                cateGoodsAllData:[],
                goodsImages:[
                    // {
                    //     image_url:'https://y.gtimg.cn/music/photo_new/T003R720x288M000002QkMgs2GfWgL.jpg?max_age=2592000'
                    // },
                    // {
                    //     image_url:'https://y.gtimg.cn/music/photo_new/T003R720x288M000002QkMgs2GfWgL.jpg?max_age=2592000'
                    // },
                    // {
                    //     image_url:'https://y.gtimg.cn/music/photo_new/T003R720x288M000002QkMgs2GfWgL.jpg?max_age=2592000'
                    // }
                    {
                        linkUrl:'',
                        picUrl:'https://y.gtimg.cn/music/photo_new/T003R720x288M000001EwfWs4QSIl6.jpg?max_age=2592000',
                        title:6666,
                        product_id:0
                    },
                    {
                        linkUrl:'',
                        picUrl:'https://y.gtimg.cn/music/photo_new/T003R720x288M000001EwfWs4QSIl6.jpg?max_age=2592000',
                        title:6666,
                        product_id:1
                    }
                    
                ],
                goodsData:[
                    {
                        product_name:'默认名称',
                        product_price:'价格66',
                        product_detail:'描述的点点滴滴'

                    }
                ]
                
            }
        },
        computed:{
            bannerWidth(){
                return document.documentElement.clientWidth
            }
        },
        watch:{
            $route(to){
                //console.log(to);
                var reg=/detail\/\d+/;
                if(reg.test(to.path)){
                    var categotyId=this.$route.params.id || 0;
                    this.fetchData(categotyId);
                }
            }
        },
        methods:{
            fetchData(id){
                var _this=this;
                
                // _this.$http.get('/detail',{
                //     params: {
                //         mId: id
                //     }
                // }).then((res)=>{
                //     _this.goodsImages = res.data[0];
                //     _this.goodsData = res.data[1];

                // },(err)=>{
                //     console.log(err);
                // })

            }
        }
    }
</script>
<style>
@import '../assets/css/detail.css';
</style>