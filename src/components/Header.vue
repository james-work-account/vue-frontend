<template lang="pug">
header
  .header-title
    router-link(tag="h1" :to="{ name: 'home', cache: false }") James's Blog
  .header-create-blogpost
    router-link.btn(tag="button" :to="{ name: 'create-post' }") Create new blog post
    settings
</template>

<script>
import settings from './settings-menu.vue'
export default {
  name: "Header",
  components: { settings }
}
</script>

<style scoped>
  header {
    background-color: #f5f9fa;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    background: #100e17;
    border-bottom: 1px solid #201c29;
    position: sticky
  }
  .header-title {
    padding: 5px 15px;
    color: #fff;
  }
  h1:hover {
    color: rgb(214, 214, 214);
  }
  .header-create-blogpost {
    display: inline-block;
    text-align: right;
    margin-right: 20px
  }
  header * {
    flex-grow: 1
  }
  h1 {
    transition: 0.2s;
    margin-left: 20px;
    display: inline-block;
    cursor: pointer;
  }
</style>
