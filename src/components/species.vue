<template>
    <section class="species-container flex flex-wrap">
        <!-- 分类按钮组 -->
        <a :href="item.linkUrl" class="species-tab" v-for="(item,index) in speciesList" :key="index">
            <span class="species-img flex flex-center">
                <img :src="item.picUrl" alt="">
            </span>
            <span class="species-decription">
                {{item.title}}
            </span>
        </a>

        
    </section>
</template>
<script>
export default {
    props:{
        // 种类数组
        speciesList:{
            type:Array,
            default:[]
        }
    }
    
}
</script>
<style lang="scss" scoped>
@import '../style/mixin';
.species-container{
    @include wh(100%,auto);
    .species-tab{
        @include wh(25%,2rem);
        padding: .3rem .45rem;
        .species-img{
            @include wh(1rem , .8rem);
            img{
                @include wh(.65rem , .8rem);
            }
        }
        .species-decription{
            @include sc(.3rem ,rgb(144,144,144));
        }
    }
}
</style>
