import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api/index.js'
import {
  Tabbar,
  TabbarItem
} from 'vant'

Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.config.productionTip = false
Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
