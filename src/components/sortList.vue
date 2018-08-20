<template>
    <section class="products-sort-container ">
        <div class="flex">
            <router-link v-for="(item , index) in sortList" :key="index" :to="{name:'productsCard'}" class="flex-1 sort-item" :class="{active:sortActive}">{{item.title}}</router-link>
        </div>

        <keep-alive>
            <router-view></router-view>
        </keep-alive>

    </section>    

</template>
<script>
export default {
    props:{
        
        sortList:{
            type:Array,
            default:[]
        }
    },
    computed:{
        sortActive(){
            return 1
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../style/mixin';

.products-sort-container{
    @include wh(100%, auto);
    margin-top:.1rem;
    .sort-item{
        text-align: center;
        @include sc(.3rem,rgb(60,60,60));
        height:.75rem;
        line-height: .75rem;
        &.active{
            color:rgb(181,110,123);
        }
    }
}
</style>
