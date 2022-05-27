// 配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';

// 使用插件
Vue.use(VueRouter);

// 引入路由组件
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Search from '@/pages/Search';

// 备份VueRouter原型对象的push|replace
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 重写push|replace
// 解决编程式路由跳转到当前路由（参数不变），多次执行会抛出NavigationDuplicated的警告错误
// 参数：location（往哪里跳转） resolve（成功） rejecte（失败）
VueRouter.prototype.push = function (location,resolve,reject) {
    if(resolve&&reject) {
        // call|apply
        // 相同点：都可以调用函数一次
        // 不同点：两者都可以传递参数，call传递参数用逗号隔开，apply方法，传递数组
        originPush.call(this,location,reject)
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}
VueRouter.prototype.replace = function (location,resolve,reject) {
    if(resolve&&reject) {
        // call|apply
        // 相同点：都可以调用函数一次
        // 不同点：两者都可以传递参数，call传递参数用逗号隔开，apply方法，传递数组
        originReplace.call(this,location,reject)
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}
// 配置路由
export default new VueRouter({
    routes:[
        // 重定向
        {
            path:'*',
            redirect:"/home",
            meta:{show:true}
        },
        {
        path: "/home",
        component: Home,
        meta:{show:true}

    }, 
        {
        path: "/login",
        component: Login,
        meta:{show:false}

    }, 
        {
        path: "/register",
        component: Register,
        meta:{show:false}

    }, 
        {
        name:"search",
        path: "/search/:keyword",
        component: Search,
        meta:{show:false}

    }, 
]
})