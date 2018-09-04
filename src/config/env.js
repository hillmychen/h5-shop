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
	baseUrl = 'http://4546.iiio.top/app/index.php?i=10&c=entry&method=shop&p=xingyun&m=sz_yi&do=plugin'

}else if(process.env.NODE_ENV == 'production'){
	// 生产环境
	baseUrl = 'http://4546.iiio.top/app/index.php?i=10&c=entry&method=shop&p=xingyun&m=sz_yi&do=plugin';
    imgBaseUrl = 'http://4546.iiio.top/app/index.php?i=10&c=entry&method=shop&p=xingyun&m=sz_yi&do=plugin';
}

export {
	baseUrl,
	routerMode,
	imgBaseUrl,
}