import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './home'
import Search from './search'

Vue.use(VueRouter)

// Construct a new VueRouter instance.
export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/search', component: Search }
  ]
})
