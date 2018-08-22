// 引入封装请求
import fetch from '../config/fetch'

// 获取缓存方法
import {getStore} from '../config/mUtils'

// 获取商品轮播数据
export const productsBanner = (catagory) => fetch('/catagory', {catagory}, 'GET');
