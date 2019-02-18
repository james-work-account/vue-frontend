<template>
<router-link tag="header" :to="{ name: 'home' }">
  <div class="header-title"><h1>James's Blog</h1></div>
  <div class="header-middle-area"></div>
  <div class="header-create-blogpost">
    <button @click="$emit('create-post')" class="create-blogpost">Create new blog post</button>
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
  }
  .header-middle-area {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
  .create-blogpost {
    color: #fff;
    background-color: blue;
    border: none;
    border-color: #07c;
    padding: .8em;
    border-radius: 3px;
    outline: none;
    font-family: inherit;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.15384615;
    text-decoration: none;
    cursor: pointer;
    margin-right: 15px;
  }
</style>
