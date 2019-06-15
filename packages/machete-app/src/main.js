import Vue from 'vue'
import App from './App.vue'
import {CoreServicePlugin} from './plugins'

Vue.config.productionTip = false

// Install plugins
Vue.use(CoreServicePlugin)

// Instantiate Vue and mount the application
new Vue({
  render: h => h(App),
}).$mount('#app')
