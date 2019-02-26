const defaults = {
  loading: true
}

export default {
  namespaced: true,
  state: Object.assign({}, defaults),
  mutations: {
    updateLoading(state, loading) {
      state.loading = loading
    },
    clear(state) {
      Object.assign({}, defaults)
    }
  },
  actions: {
    updateLoading({ commit }, loading) {
      commit('updateLoading', loading)
    },
    clear({ commit }) {
      commit('clear')
    }
  }
}