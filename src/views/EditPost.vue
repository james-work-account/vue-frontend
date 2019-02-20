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
    addPost(postToEdit) {
      axios.post("http://localhost:9000/posts", {
        id: postToEdit.id,
        time: postToEdit.time,
        title: postToEdit.title,
        body: postToEdit.body
      })
      .then(_ => {
        const id = postToEdit.id
        this.$router.push({ name: 'view-post', params: { id }})
      })
      .catch(err => console.log(err.response.data))
    }
  }
}
</script>

<style scoped>

</style>

