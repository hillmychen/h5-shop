<template>
    <section class="products-card-container flex flex-wrap">
        <div class="products-card-item ">
            <span class="products-img flex flex-ver">
                <img :src="productImg" alt="">
            </span>
            <h1 class="products-title">新品新品新品新品新品新品新品新品</h1>
            <span class="products-tag">
                <span>新品</span>
                <span>特卖</span>
            </span>
            <span class="products-price">
                <strong class="products-new-price">￥999</strong>
                <span class="products-old-price">￥998</span>
            </span>
        </div>

        <div class="products-card-item ">
            <span class="products-img">
                <img :src="productImg" alt="">
            </span>
            <h1 class="products-title">新品新品新品新品新品新品新品新品</h1>
            <span class="products-tag">
                <span>新品</span>
                <span>特卖</span>
            </span>
            <span class="products-price">
                <strong class="products-new-price">￥999</strong>
                <span class="products-old-price">￥998</span>
            </span>
        </div>
    </section>
</template>
<script>
export default {
    name:'productsCard',
    props:[],
    data(){
        return{
            productImg:require('../images/natarlie_portman.jpg')
        }
    },

}
</script>
<style lang="scss" scoped>
@import '../style/mixin';

.products-card-container{
    padding:0;
    @include wh(100%,auto);    
    .products-card-item{

        padding:.2rem;

        @include wh(50%,auto);
        .products-img{
            display: block;
            @include wh(100%,3.26rem);
            img{
                @include wh(100%,100%);
            }
        }

        .products-title{
            margin:.23rem 0;
            @include sc(.25rem,black);
        }

        .products-tag{
            display: block;
            span{
                @include sc(.22rem,rgb(208,42,81));

            }
        }

        .products-price {
            .products-new-price{
                @include sc(.22rem,rgb(208,42,81));                
            }
            .products-old-price{
                @include sc(.22rem,rgb(165, 165, 165));    
                text-decoration:line-through;            
            }
        }

    }
}
</style>
