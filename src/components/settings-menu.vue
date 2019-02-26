<template lang="pug">
  .container
    font-awesome-icon.cog(icon="cog" size="2x" v-on:click="toggleMenu()")/
    .dropdown(v-bind:class="{ expanded: expanded }")
      p(v-on:click="logOut()") Log out
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('auth')
import auth from '@/auth/helpers'

export default {
  name: 'settings-menu',
  data() {
    return {
      expanded: false
    }
  },
  methods: {
    ...mapActions([
      'logout'
    ]),
    toggleMenu() {
      this.expanded = !this.expanded
    },
    logOut() {
      auth.logout()
    }
  }
}
</script>

<style scoped>
  .container {
    all: unset
  }
  .cog {
    cursor: pointer;
    color: #fff;
    vertical-align: middle
  }
  .dropdown {
    z-index: 9999;
    position: fixed;
    background: #100e17;
    color: white;
    padding: 0;
    height: 0;
    display: none;
  }
  .expanded {
    height: auto;
    right: 0;
    padding: 25px 40px 15px 40px;
    display: block;
    cursor: pointer;
  }
</style>

