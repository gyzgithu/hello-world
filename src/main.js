import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import HeyWorld from '@/components/HeyWorld.vue'
Vue.component("HeyWorld",HeyWorld)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
