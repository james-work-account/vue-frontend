<template>
    <router-link tag="div" :to="{ name: 'view-post', params: { id: this.post.id }}" class="post-item">
        <p class="title">{{post.title}}</p>
        <p class="body-preview">{{post.minBody}}</p>
        <p>{{$route.params.id}}</p>
    </router-link>
</template>

<script>
export default {
    name: "PostItem",
    props: ["post"]
}
</script>

<style scoped>
  .post-item {
    background: #f4f4f4;
    padding: 10px 15px 10px;
    border-bottom: 1px #ccc dotted;
    cursor: pointer;
  }
  .title {
    font-size: 18px;
    margin-bottom: 5px;
  }
  .body-preview {
    font-size: 12px
  }
  .psot-item:hover {
    background: #666;
  }
</style>
