import App from '../App'

const index = r => require.ensure([], () => r(require('../page/index/index')), 'index')


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
            component: index
        }
    ]

}]