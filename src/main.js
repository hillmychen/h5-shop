import Vue from 'vue'
import App from './App.vue'
import store from './store/'

// 引入路由
import routes from './router/router'

// 引入路由模式
import {routerMode} from './config/env'

// 引入路由
import VueRouter from 'vue-router'


// 引入rem
import './config/rem'
require('./assets/css/base.css'); //全局引入

import VueLazyload from 'vue-lazyload'
import Loading from './components/loading'
// 加载动画
Vue.use(Loading);
// 懒加载
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: require('./images/err.png'),
    loading: require('./images/loading.gif'),
    attempt: 1,
    listenEvents: ['scroll']
});


import FastClick from 'fastclick'
// 解决移动端点击穿透
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
	}, false);
	
	// Chrome浏览器报错
	document.addEventListener('touchstart', function(event) {
		// 判断默认行为是否可以被禁用
		if (event.cancelable) {
			// 判断默认行为是否已经被禁用
			if (!event.defaultPrevented) {
				event.preventDefault();
			}
		}
	}, false);
}
// 处理刷新的时候vuex被清空但是用户已经登录的情况
if (window.sessionStorage.userInfo) {
    store.dispatch('setUserInfo', JSON.parse(window.sessionStorage.userInfo));
}

// 挂载路由
Vue.use(VueRouter)
// 路由分发
const router = new VueRouter({
	routes,
	mode: routerMode,
    strict: process.env.NODE_ENV !== 'production',
    // 自定义路由切换时页面如何滚动
	scrollBehavior (to, from, savedPosition) {
	    if (savedPosition) {
		    return savedPosition
		} else {
			if (from.meta.keepAlive) {
				from.meta.savedPosition = document.body.scrollTop;
			}
		    return { x: 0, y: to.meta.savedPosition || 0 }
		}
	}
})


// 挂载vue实例
new Vue({
    el: '#app',
	router,
	store,
    render:h=>h(App)
})