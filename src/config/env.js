/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * 
 */

let baseUrl = ''; 
let routerMode = 'hash';
let imgBaseUrl = '';


if (process.env.NODE_ENV == 'development') {
	// 开发环境
    imgBaseUrl = '/img/';
	baseUrl = ' https://easy-mock.com/mock/5b6bbedcbcf8ac211031f9dc/index'

}else if(process.env.NODE_ENV == 'production'){
	// 生产环境
	baseUrl = '//elm.cangdu.org';
    imgBaseUrl = '//elm.cangdu.org/img/';
}

export {
	baseUrl,
	routerMode,
	imgBaseUrl,
}