import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import SinglePage from './components/SinglePage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/post/:id',
      name: 'view-post',
      component: SinglePage
    }
  ],
  mode: 'history'
})