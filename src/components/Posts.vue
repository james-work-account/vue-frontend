<template>
  <div>
    <div v-if="posts && posts.length">
      <div v-bind:key="post.id" v-for="post in posts">
        <Post v-bind:post="post" />
      </div>
    </div>
    <div v-else>
      <p>No posts found</p>
    </div>
  </div>
</template>

<script>
import Post from './PostItem.vue'

export default {
  name: 'Posts',
  components: {
    Post
  },
  props: {
    posts: Array,
    default: []
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
