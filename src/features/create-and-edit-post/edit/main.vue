<template lang="pug">
  .container
    Body(v-on:add-post="addPost")/
</template>

<script>
  import Body from '@/features/create-and-edit-post/body.vue'
  import axios from 'axios'

  export default {
    name: "CreatePost",
    components: {
      Body
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

