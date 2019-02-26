const routes = [
  {
    name: 'login',
    path: '/login',
    component: require('@/features/login/main.vue').default,
    isPublic: true
  },
  {
    path: '/',
    name: 'home',
    component: require('@/features/home/main.vue').default,
    isPublic: false
  },
  {
    path: '/view-post/:id',
    name: 'view-post',
    component: require('@/features/single-page/main.vue').default,
    isPublic: false
  },
  {
    path: '/new-post',
    name: 'create-post',
    component: require('@/features/create-and-edit-post/create/main.vue').default,
    isPublic: false
  },
  {
    path: '/edit-post/:id',
    name: 'edit-post',
    component: require('@/features/create-and-edit-post/edit/main.vue').default,
    isPublic: false
  }
]

export default routes