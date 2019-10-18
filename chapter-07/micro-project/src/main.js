import Vue from 'vue'
import App from './App.vue'
import Contador from '@/components/Contador'

Vue.config.productionTip = false
Vue.component(Contador)

new Vue({
  render: h => h(App)
}).$mount('#app')
