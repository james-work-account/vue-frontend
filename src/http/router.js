import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router = new Router({
  routes: routes.map(route => ({
    name: route.name,
    path: route.path,
    component: route.component
  })),
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => !record.isPublic)) {
    const auth = router.app.$options.store.state.auth
    if (!auth.isLoggedIn && to.path !== '/login') {
      next({path: '/login', params: { nextUrl: to.fullPath }});
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router