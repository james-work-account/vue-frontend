const defaults = {
  loading: false
}

export default {
  namespaced: true,
  state: Object.assign({}, defaults),
  mutations: {
    updateLoading(state, loading) {
      state.loading = loading
    }
  },
  actions: {
    updateLoading({ commit }, loading) {
      commit('updateLoading', loading)
    }
  }
}