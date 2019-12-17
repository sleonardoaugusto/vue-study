import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.mixin({
  filters: {
    wordCount(word) {
      return word.split(' ').map(word => `${word} (${word.length})`).join(' ')
    }
  }
})

new Vue({
	render: h => h(App),
}).$mount('#app')
