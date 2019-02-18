<template>
<router-link tag="header" :to="{ name: 'home', cache: false }">
  <div class="header-title"><h1>James's Blog</h1></div>
  <div class="header-middle-area"></div>
  <div class="header-create-blogpost">
    <router-link tag="button" :to="{ name: 'create-post' }" class="btn">Create new blog post</router-link>
  </div>
</router-link>
</template>

<script>
export default {
  name: "Header"
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
    -webkit-box-align: center;
    align-items: center;
    background: #100e17;
    border-bottom: 1px solid #201c29;
  }
  .header-title {
    justify-content: center;
    padding: 5px 15px;
    color: #fff;
    cursor: pointer;
    transition: 0.2s;
  }
  .header-title:hover {
    color: #bbb;
  }
  .header-middle-area {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
</style>
