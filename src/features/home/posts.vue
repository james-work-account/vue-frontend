<template lang="pug">
  .container
    Loading(v-if="loading")
    div(v-else)
      div(v-if="posts && posts.length")
        div(v-bind:key="post.id" v-for="post in posts")
          Post(v-bind:post="post")
      div(v-else)
        p No posts found
</template>

<script>
import Post from './post-item.vue'
import Loading from '@/components/loading.vue'

export default {
  name: 'Posts',
  components: {
    Post, Loading
  },
  props: {
    posts: {
      type: Array,
      default: []
    },
    loading: Boolean
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p {
    width: var(--maxWidth);
    margin: 0 auto;
  }
</style>
