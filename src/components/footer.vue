<template>

    <section class="footer flex ">
        <router-link :to="tab.tabUrl" v-for="(tab,index) in tabList" :key="index" class="flex-1 tab-item">
            <svg class="icon" aria-hidden="true">
                <use :xlink:href="tab.icon"></use>
            </svg>
            <h5 :class="{'active':tabIndex===index}">{{tab.nav}}</h5>
        </router-link>
    </section>

</template>

<script>

export default {

    name:"footTab",

    data(){

        return {

            tabList:[
                {
                    nav:"首页",
                    tabUrl:'/index',
                    icon:'#icon-shouye'
                },

                {
                    nav:"购物车",
                    tabUrl:'/cart',
                    icon:'#icon-gouwuche1'

                },

                {
                    nav:"我的",
                    tabUrl:'',
                    icon:'#icon-gerenzhongxin'

                }
            ],
            tabIndex:0
        }

    },

    props:[]   

}

</script>

<style lang="scss" scoped>
@import '../style/mixin';

.footer{
    position: fixed;
    bottom: 0;
    left:0;
    padding: .1rem;
    width: 100%;
    background: white;

    .tab-item{
        text-align: center;
        @include sc(.4rem ,rgb(144,144,144));
        border-top: 1px solid grey;
        h5{
            font-size: .25rem;
            &.active{
                color:rgb(190,40,70);
            }
        }
        .icon{
            width:2em;
            height:2em;
        }
    }
}
</style>
