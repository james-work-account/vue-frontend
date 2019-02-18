import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SinglePage from './views/SinglePage.vue'
import CreatePost from './views/CreatePost.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'home'
      }
    },
    {
      path: '/blog',
      name: 'home',
      component: Home
    },
    {
      path: '/blog/post/:id',
      name: 'view-post',
      component: SinglePage
    },
    {
      path: '/blog/new',
      name: 'create-post',
      component: CreatePost
    }
  ],
  mode: 'history'
})