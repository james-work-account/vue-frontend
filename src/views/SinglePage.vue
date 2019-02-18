<template>
  <div v-if="post.id != null" class="container">
    <h1 class="title">{{post.title}}</h1>
    <p class="body">{{post.body}}</p>
  </div>
  <div v-else></div>
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
  .container {
    max-width: var(--maxWidth);
    margin: 15px auto;
    margin-top: 15px;
  }
  .title{
    margin: auto 0;
    line-height: 1.35;
    font-weight: normal;
    padding-bottom: .25em;
    margin-bottom: .25em;
    border-bottom: 1px #ccc dotted;;
  }
  .body {
    margin: 15px 30px;
    white-space:pre-wrap;
  }
</style>

