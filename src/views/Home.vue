<template>
  <div>
    <h1>Blog Entries</h1>
    <Posts v-bind:posts="posts" v-bind:loading="loading" />
  </div>
</template>

<script>
import Posts from '../components/Posts.vue'
import axios from 'axios'

export default {
  name: 'home',
  components: {
    Posts
  },
  data() {
    return {
      posts: null,
      loading: false
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getData();
      next()
    })
  },
  beforeRouteUpdate (to, from, next) {
    this.posts = null;
    next(vm => {
      vm.getData();
      next()
    })
  },
  methods: {
    getData() {
      this.loading = true;
      setTimeout(() => {
        this.searchInitialized = true;
        axios.get('http://localhost:9000/posts')
          .then(res => {
            this.posts = res.data;
            this.loading = false;
          })
          .catch(err => {
            console.log(err)
            this.loading = false;
          })
      }, 1000)
    }
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
