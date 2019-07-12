import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './home';
import Liked from './liked';
import RecentlyPlayed from './recently-played';
import Search from './search';

Vue.use(VueRouter);

// Construct a new VueRouter instance.
export default new VueRouter({
  routes: [
    {path: '/', component: Home},
    {path: '/liked', component: Liked},
    {path: '/recently-played', component: RecentlyPlayed},
    {path: '/search', component: Search},
  ],
});
