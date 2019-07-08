import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import {
  CoreDataPlugin,
  CoreHistoryPlugin,
  CoreServicePlugin,
  KeyboardShortcutsPlugin
} from './plugins'

Vue.config.productionTip = false

// Install plugins
Vue.use(CoreDataPlugin)
Vue.use(CoreHistoryPlugin)
Vue.use(CoreServicePlugin)
Vue.use(KeyboardShortcutsPlugin)

// Instantiate Vue and mount the application
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
