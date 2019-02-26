<template lang="pug">
  .container
    h1 Blog Entries
    Posts(v-bind:posts="posts" v-bind:loading="this.$store.state.common.loading")/
</template>

<script>
import Posts from './posts.vue'
import axios from 'axios'
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('common')

export default {
  name: 'home',
  components: {
    Posts
  },
  data() {
    return {
      posts: null
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getData();
      next()
    })
  },
  beforeEnter (to, from, next) {
    this.posts = null;
    next(vm => {
      vm.getData();
      next()
    })
  },
  methods: {
    ...mapActions([
      'updateLoading'
    ]),
    getData() {
      this.updateLoading(true);
        axios.get('http://localhost:9000/posts')
          .then(res => {
            this.posts = res.data;
            this.updateLoading(false);
          })
          .catch(err => {
            console.log(err)
            this.updateLoading(false);
          })
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
