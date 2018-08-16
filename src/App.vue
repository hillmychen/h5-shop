<template>
    <div class="app">
        <!-- 使用keep-alive标签后部分安卓机返回缓存页位置不精确问题 -->
        <transition name="router-fade" mode="out-in">
			<keep-alive>
			    <router-view v-if="$route.meta.keepAlive"></router-view>
			</keep-alive>
    	</transition>
    	<transition name="router-fade" mode="out-in">
			<router-view v-if="!$route.meta.keepAlive"></router-view>
		</transition>
    </div>
</template>
<script>
    export default {
        data(){
            return{

            }
        },
        
    }
</script>
<style lang="scss">
  	@import './style/common';

</style>
