<template lang="pug">
  .container.justify-center
    .login-title
      h1 Login
    .login-container
      form(@submit.prevent="submitLogin")
        input.btn(type="submit" value="Log me in!")

</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('auth')
import auth from '@/auth/helpers'

export default {
  name: 'login',
  data() {
    return {
      name: ''
    }
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    submitLogin(e) {
      e.preventDefault();
      auth.login({
        name: "James",
        id: "1"
      })
    }
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    padding-bottom: 7vh;
    background-color: #2196ce;
  }
  .justify-center {
    justify-content: center;
    align-items: center
  }
  .login-title {
    width: 100%;
    display: flex
  }
  .login-container {
    height: 400px;
    width: 400px;
    max-width: 100vw;
    background-color: #fff;
  }
  form {
    padding: 15px;
    display: flex;
    flex-direction: column
  }
  .btn {
    justify-content: center
  }
</style>