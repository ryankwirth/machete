import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import routes from './routes'

import {
  CoreDataPlugin,
  CoreServicePlugin,
  KeyboardShortcutsPlugin
} from './plugins'

Vue.config.productionTip = false

// Install plugins
Vue.use(CoreDataPlugin)
Vue.use(CoreServicePlugin)
Vue.use(KeyboardShortcutsPlugin)

// Set up router
Vue.use(VueRouter)

// Configure routes
const router = new VueRouter({
  routes
})

// Instantiate Vue and mount the application
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
