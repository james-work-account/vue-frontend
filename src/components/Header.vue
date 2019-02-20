<template>
<router-link tag="header" :to="{ name: 'home', cache: false }">
  <div class="header-title"><h1>James's Blog</h1></div>
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
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    background: #100e17;
    border-bottom: 1px solid #201c29;
  }
  .header-title {
    padding: 5px 15px;
    color: #fff;
    cursor: pointer;
    transition: 0.2s;
  }
  .header-title:hover {
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
</style>
