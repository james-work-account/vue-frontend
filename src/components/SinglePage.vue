<template>
  <div v-if="post.id != null" class="post-item">
    <h1 class="title">{{post.title}}</h1>
    <p class="body-preview">{{post.body}}</p>
  </div>
  <div v-else>nothing to see here</div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "PostItem",
    data() {
      return {
        post: {}
      }
    },
    created() {
      axios.get('http://localhost:9000/posts/' + this.$route.params.id)
        .then(res => this.post = res.data)
        .catch(err => console.log(err))
    }
  }
</script>

<style scoped>
  .body-preview {
    font-size: 12px
  }
</style>

