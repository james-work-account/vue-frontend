<template lang="pug">
  #app
    LoggedIn(v-if="this.$store.state.auth.isLoggedIn")/
    LoggedOut(v-else)/
</template>

<script>
import Header from '@/components/header.vue'
import router from '@/http/router'
import LoggedIn from '@/layouts/logged-in.vue'
import LoggedOut from '@/layouts/logged-out.vue'

export default {
  name: 'app',
  components: {
    LoggedIn, LoggedOut
  }
}
</script>
<!-- styling for the component -->
<style>
  .post-item {
    padding: 10px 15px 10px;
    border-bottom: 1px #ccc dotted;
    display: flex;
    flex-direction: column;
    max-width: var(--maxHomePostWidth);
    margin: 0 auto;
  }
  html {
    --maxWidth: 90%;
    --maxHomePostWidth: var(--maxWidth);
  }
  @media(max-width: 800px) {
    html {
      --maxWidth: 100%
    }
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }
  .btn {
    color: #fff;
    background-color: #5f95ff;
    border: none;
    border-color: #07c;
    padding: .8em;
    border-radius: 3px;
    outline: none;
    font-family: inherit;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.15384615;
    text-decoration: none;
    cursor: pointer;
    margin-right: 15px;
    transition: 0.2s;
  }
  .btn:hover {
    background-color: #2054bb;
  }
  #app > div > *:not(header) {
    padding: 0 20px
  }
</style>