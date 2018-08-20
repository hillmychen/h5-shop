import App from '../App'

// 首页
const index = r => require.ensure([], () => r(require('../page/index/index')), 'index')
// 首页分类
const catagories = r => require.ensure([], () => r(require('../page/catagories/catagories')), 'catagories')
// 商品展示组件
const productsCard = r => require.ensure([], () => r(require('../components/productsCard')), 'productsCard')

export default [{
    path:'/',
    //顶层路由，对应index.html
    component: App, 
    //二级路由。对应App.vue
    children: [ 
        // 地址为空，跳转index
        {
            path: '',
            redirect: '/index'
        },
        // index页面
        {
            path: '/index',
            component: index,
            children:[
                // 首页分类子路由
                {
                    path:'catagories/:id',
                    component:catagories,
                    name:"catagories",
                    children:[
                        {
                            path:'sort',
                            component:productsCard,
                            name:"productsCard",
                        }
                    ]
                }
            ]
        }
    ]

}]