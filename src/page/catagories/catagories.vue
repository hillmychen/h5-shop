<template>
    <div class="catagory-container">
        <!-- 图片轮播 -->
        <photo-slider :list="sliderList" v-if="sliderList.length" imgWidth="7.5rem" :speed="speed" :loop="true" sliderHeight="3.4rem"></photo-slider>      

        <a href="javascript:;" class="today-container">
            <img src="https://y.gtimg.cn/music/photo_new/T003R720x288M000002n0L9H3Bf8F0.jpg?max_age=2592000" alt="" >
        </a>

        <!-- 按钮分类组 -->
        <species-tab :speciesList="speciesList"></species-tab>

        <!-- 商品按标签排序 -->
        <sort-list :sortList="sortList"></sort-list>

    </div>
</template>
<script>
    import photoSlider from '../../components/slider'
    import speciesTab from '../../components/species'
    import sortList from '../../components/sortList'

    export default {
        name:"catagories",
        data(){
            return{
                sliderList:[
                    {
                        linkUrl:'http://y.qq.com/w/album.html?albummid=001RsOK33No4Sz&ADTAG=myqq&from=myqq&channel=10007100',
                        picUrl:'https://y.gtimg.cn/music/photo_new/T003R720x288M000001EwfWs4QSIl6.jpg?max_age=2592000'
                    },
                    {
                        linkUrl:'https://y.qq.com/msa/270/0_5102.html?ADTAG=myqq&from=myqq&channel=10007100',
                        picUrl:'https://y.gtimg.cn/music/photo_new/T003R720x288M000001CV9tc1xK59w.jpg?max_age=2592000'
                    },
                    {
                        linkUrl:'https://y.qq.com/m/client/music_headline/index.html?_hidehd=1&_button=2&zid=689728&ADTAG=myqq&from=myqq&channel=10007100',
                        picUrl:'https://y.gtimg.cn/music/photo_new/T003R720x288M000002n0L9H3Bf8F0.jpg?max_age=2592000'
                    },
                    {
                        linkUrl:'http://y.qq.com/w/album.html?albummid=001cTmxl1t64WK&ADTAG=myqq&from=myqq&channel=10007100',
                        picUrl:'https://y.gtimg.cn/music/photo_new/T003R720x288M000001pf9Sy13Evav.jpg?max_age=2592000'
                    },
                    {
                        linkUrl:'https://y.qq.com/msa/324/0_5116.html?ADTAG=myqq&from=myqq&channel=10007100',
                        picUrl:'https://y.gtimg.cn/music/photo_new/T003R720x288M000002QkMgs2GfWgL.jpg?max_age=2592000'
                    }
                ],
                speed:5000,
                speciesList:[
                    {
                        linkUrl:'http://y.qq.com/w/album.html?albummid=001RsOK33No4Sz&ADTAG=myqq&from=myqq&channel=10007100',
                        picUrl:'https://y.gtimg.cn/music/photo_new/T003R720x288M000001EwfWs4QSIl6.jpg?max_age=2592000',
                        title:6666
                    },
                    {
                        linkUrl:'https://y.qq.com/msa/270/0_5102.html?ADTAG=myqq&from=myqq&channel=10007100',
                        picUrl:'https://y.gtimg.cn/music/photo_new/T003R720x288M000001CV9tc1xK59w.jpg?max_age=2592000',
                        title:6666

                    },
                    {
                        linkUrl:'https://y.qq.com/m/client/music_headline/index.html?_hidehd=1&_button=2&zid=689728&ADTAG=myqq&from=myqq&channel=10007100',
                        picUrl:'https://y.gtimg.cn/music/photo_new/T003R720x288M000002n0L9H3Bf8F0.jpg?max_age=2592000',
                        title:6666

                    },
                    {
                        linkUrl:'http://y.qq.com/w/album.html?albummid=001cTmxl1t64WK&ADTAG=myqq&from=myqq&channel=10007100',
                        picUrl:'https://y.gtimg.cn/music/photo_new/T003R720x288M000001pf9Sy13Evav.jpg?max_age=2592000',
                        title:6666

                    },
                    {
                        linkUrl:'https://y.qq.com/msa/324/0_5116.html?ADTAG=myqq&from=myqq&channel=10007100',
                        picUrl:'https://y.gtimg.cn/music/photo_new/T003R720x288M000002QkMgs2GfWgL.jpg?max_age=2592000',
                        title:6666

                    }
                ],
                sortList:[
                    {
                        title:"综合",
                        name:"complex"
                    },
                    {
                        title:"上新",
                        name:"brandNew"                  
                    },
                    {
                        title:"价格", 
                        name:"price"                       
                    }
                ]
            }
        },
        components:{
            photoSlider,
            speciesTab,
            sortList
        },
        computed:{
            tabId(){
                return this.$route.params.id
            }
        },
        async mounted(){

        },  
    }
</script>
<style lang="scss" scoped>
@import '../../style/mixin';

.catagory-container{
    margin-bottom: .1rem;
    .today-container{
        @include wh(100%, 2.45rem);
        display: block;
        padding:.16rem;
        img{
            display: block;
            @include wh(100%,100%);
            @include borderRadius(.1rem);

        }
    }
}
</style>
