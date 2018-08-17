<template>
    <section class="products-sort-container flex">

        <router-link v-for="(item , index) in sortList" :key="index" :to="index" class="flex-1 sort-item">{{item.title}}</router-link>

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
    }
}
</style>
