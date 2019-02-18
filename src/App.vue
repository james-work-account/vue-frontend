<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Header
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
    max-width: var(--maxWidth);
    margin: 0 auto;
  }
  html {
    --maxWidth: 1284px;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }
</style>