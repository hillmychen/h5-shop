<template>
    <div>
        {{content}}

    </div>
</template>
<script>
    export default {
        name:"catagories",
        data(){
            return{
                
            }
        },
        computed:{
            content(){
                return this.$route.params.id
            }
        },
        mounted() {
        },
    }
</script>
<style lang="scss" scoped>

</style>
