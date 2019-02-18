<template>
  <div>
    <CreatePostBody v-on:add-post="addPost" />
  </div>
</template>

<script>
import CreatePostBody from '../components/CreatePostBody.vue'
import axios from 'axios'

export default {
  name: "CreatePost",
  components: {
    CreatePostBody
  },
  methods: {
    addPost(newPost) {
      axios.post("http://localhost:9000/posts", {
        id: newPost.id,
        title: newPost.title,
        body: newPost.body
      })
      .then(res => {
        const id = newPost.id
        this.$router.push({ name: 'view-post', params: { id }})
      })
      .catch(err => console.log(err.response.data))
    }
  }
}
</script>

<style scoped>

</style>

