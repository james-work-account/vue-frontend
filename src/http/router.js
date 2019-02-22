import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/features/home/main.vue'
// import SinglePage from '@/views/SinglePage.vue'
// import CreatePost from '@/views/CreatePost.vue'
// import EditPost from '@/views/EditPost.vue'
import routes from './routes'

Vue.use(Router)

export default new Router({
  routes,
  mode: 'history'
})