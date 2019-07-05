import Home from './home'
import Search from './search'

// Construct a new VueRouter instance.
export const createRouter = (VueRouter) => (
  new VueRouter({
    routes: [
      { path: '/', component: Home },
      { path: '/search', component: Search }
    ]
  })
)
