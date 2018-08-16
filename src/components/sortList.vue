<template>
    <section>
        <router-link ></router-link>
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

</style>
