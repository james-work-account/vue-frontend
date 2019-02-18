<template>
  <div>
    <div v-bind:key="post.id" v-for="post in posts">
      <Post v-bind:post="post" />
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
  props: ["posts"]
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
