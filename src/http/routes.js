const routes = [
  {
    path: '/',
    name: 'home',
    component: require('@/features/home/main.vue').default
  },
  {
    path: '/view-post/:id',
    name: 'view-post',
    component: require('@/features/singlePage/main.vue').default
  },
  {
    path: '/new-post',
    name: 'create-post',
    component: require('@/features/createAndEditPost/create/main.vue').default
  },
  {
    path: '/edit-post/:id',
    name: 'edit-post',
    component: require('@/features/createAndEditPost/edit/main.vue').default
  }
]

export default routes