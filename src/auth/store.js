const defaults = {
    isLoggedIn: false,
    user: {
      name: '',
      id: ''
    }
  }
  
  const auth = {
    namespaced: true,
  
    state: Object.assign({}, defaults),
  
    mutations: {
      login (state, data) {
        state.user.name = data.name;
        state.user.id = data.id;
        state.isLoggedIn = true
      },
      clear (state) {
        state = Object.assign(state, defaults)
      }
    },
  
    actions: {
      clear ({ commit }) {
        commit('clear')
      },
      login ({ commit }, data) {
        commit('login', data)
      }
    }
  }
  
  export default auth