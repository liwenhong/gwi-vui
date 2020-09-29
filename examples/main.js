import Vue from 'vue'
import App from './App.vue'
import router from './router'

//  测试组件
import gwiui from '../src/index'
Vue.config.productionTip = false

//  注册组件
Vue.use(gwiui)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
