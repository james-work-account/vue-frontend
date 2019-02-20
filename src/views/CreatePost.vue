<template>
  <div>
    <CreatePostBody v-on:add-post="addPost" />
  </div>
</template>

<script>
import CreatePostBody from '../components/CreatePostBody.vue'
import axios from 'axios'
import moment from 'moment'

export default {
  name: "CreatePost",
  components: {
    CreatePostBody
  },
  methods: {
    addPost(newPost) {
      axios.post("http://localhost:9000/posts", {
        id: newPost.id,
        time: moment().format('Do MMMM YYYY, h:mm:ss a'),
        title: newPost.title,
        body: newPost.body
      })
      .then(_ => {
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

