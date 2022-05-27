import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'
// 引入仓库
import store from '@/store'

// 三级联动组件（注册为全局组件）
import TypeNav from '@/components/TypeNav'

// 测试
import {reqCategoryList} from '@/api';
reqCategoryList();

Vue.component(TypeNav.name, TypeNav)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注册路由 kv一直省略v
  router,
  // 注册仓库：组件实例对象身上会多一个属性$store属性
  store,
}).$mount('#app')
