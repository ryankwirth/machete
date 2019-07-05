import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import App from './App.vue'
import { createRouter } from './router'
import { createStore } from './store'

import {
  CoreDataPlugin,
  CoreServicePlugin,
  KeyboardShortcutsPlugin
} from './plugins'

Vue.config.productionTip = false

// Install Vuex and VueRouter
Vue.use(Vuex)
Vue.use(VueRouter)

// Install plugins
Vue.use(CoreDataPlugin)
Vue.use(CoreServicePlugin)
Vue.use(KeyboardShortcutsPlugin)

// Instantiate Vue and mount the application
new Vue({
  render: h => h(App),
  router: createRouter(VueRouter),
  store: createStore(Vuex)
}).$mount('#app')
