import router from '@/http/router'
import store from '@/store'

function clearAll() {
  store.dispatch('common/clear');
  store.dispatch('auth/clear');
  localStorage.clear();
}

export default {
  logout () {
    clearAll();
    router.push({ name: 'login' })
  },

  login(user) {
    store.dispatch('auth/login', user)
    router.push({ name: 'home' })
  }
}