<template lang="pug">
  .container(v-if="post.id != null")
    .confirm-delete-msg(v-bind:class="{ show: confirmDelete }")
      DeleteMessage(v-bind:post="this.post" v-on:del-post="deleteOrCloseBox")/
    div
      .title
        .title-text
          h1 {{post.title}}
          p Created on: {{this.post.time}}
        .title-buttons
          router-link.btn(tag="button" :to="{ name: 'edit-post', params: { id: this.post.id } }") Edit
          button.btn(@click="toggleDeleteMessage()") Delete
      p.body {{post.body}}
  div(v-else)/
</template>

<script>
  import axios from 'axios'
  import DeleteMessage from "./delete-message.vue"

  export default {
    name: "PostItem",
    components: {
      DeleteMessage
    },
    data() {
      return {
        post: {},
        confirmDelete: false
      }
    },
    methods: {
      toggleDeleteMessage() {
        this.confirmDelete = !this.confirmDelete
      },
      deleteOrCloseBox(bool) {
        if(bool) {
          this.deleteMessage(this.post)
        } else {
          this.toggleDeleteMessage()
        }
      },
      deleteMessage(postToDelete) {
        axios.post('http://localhost:9000/posts/delete', {
          id: postToDelete.id,
          time: postToDelete.time,
          title: postToDelete.title,
          body: postToDelete.body
        })
        .then()
        .catch(err => console.log(err.response.data))
        .finally(this.$router.push({ name: 'home' }))
      }
    },
    created() {
      axios.get('http://localhost:9000/posts/' + this.$route.params.id)
        .then(res => this.post = res.data)
        .catch(err => console.log(err))
    }
  }
</script>

<style scoped>
  .container {
    max-width: var(--maxWidth);
    margin: 15px auto;
    margin-top: 15px;
  }
  .confirm-delete-msg {
    display: none;
  }
  .show {
    width: 100%;
    height: 100%;
    top: 5px;
    left: 0px;
    background-color: rgb(0, 0, 0, 0.5);
    overflow: hidden;
    visibility: visible;
    display: block;
    z-index: 500;
    position: fixed;

  }
  .title{
    margin: auto 0;
    line-height: 1.35;
    font-weight: normal;
    padding-bottom: .25em;
    margin-bottom: .25em;
    border-bottom: 1px #ccc dotted;
    display: flex;
    flex-direction: row;
  }
  .title .title-text {
    flex: 9;
    word-break: break-all;
    margin-left: 1rem;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between
  }
  .title .title-buttons {
    flex: 3;
    display: flex;
    justify-content: flex-end;
    align-items: center
  }
  .btn {
    padding-left: 1rem;
    padding-right: 1rem
  }
  .body {
    margin: 15px 30px;
    white-space:pre-wrap;
  }
  h1 {
    margin: 15px 0;
  }
</style>

