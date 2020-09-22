import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi)

Vue.config.productionTip = false // 阻止生产模式的消息

new Vue({
  router,
  store,
  render: h => h(App) // vue 实例化
}).$mount('#app') // 挂载元素

// 渲染函数, 参数: createElement, 上面 h 缩写
// function render (createElement) {
//   return createElement(App)
// }
