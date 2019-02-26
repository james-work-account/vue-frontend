import Vue from 'vue'
import Vuex from 'vuex'
import common from './common'
import auth from '@/auth/store'
import VuexPersist from 'vuex-persist'

const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: sessionStorage
})

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: { common, auth },
  plugins: [vuexPersist.plugin]
})

export default store