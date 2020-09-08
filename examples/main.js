import Vue from 'vue'
import App from './App.vue'

//  测试组件
import gwiui from '../packages'
Vue.config.productionTip = false

//  注册组件
Vue.use(gwiui)

new Vue({
  render: h => h(App),
}).$mount('#app')
