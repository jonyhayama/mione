import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    { path: '/', component: () => import('./views/dashboard.vue'), name: 'root_path' },
    { path: '/about', component: () => import('./views/about.vue'), name: 'about_path' },
    { path: '/timetracker', component: () => import('./views/timetracker.vue'), name: 'timetracker_path' },
    { path: '/timesheets', component: () => import('./views/timesheets.vue'), name: 'timesheets_path' },
  ]
});

export default router;