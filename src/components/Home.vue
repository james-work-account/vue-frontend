<template>
  <div>
    <h1>Blog Entries</h1>
    <Posts v-bind:posts="posts" />
  </div>
</template>

<script>
import Posts from './Posts.vue'
import Header from './Header.vue'
import axios from 'axios'

export default {
  name: 'home',
  components: {
    Header, Posts
  },
  data() {
    return {
      posts: null
    }
  },
  created() {
    axios.get('http://localhost:9000/posts')
      .then(res => this.posts = res.data)
      .catch(err => console.log(err))
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  h1 {
    max-width: var(--maxWidth);
    margin: 15px auto;
  }
</style>
