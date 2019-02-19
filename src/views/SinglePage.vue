<template>
  <div v-if="post.id != null" class="container">
    <div v-bind:class="{ show: confirmDelete }" class="confirm-delete-msg"><DeletePostMessage v-bind:post="this.post" v-on:del-post="deleteOrCloseBox" /></div>
    <div>
      <div class="title">
        <h1>{{post.title}}</h1>
        <div>
          <router-link tag="button" class="btn" :to="{ name: 'edit-post', params: { id: this.post.id } }">Edit</router-link>
          <button class="btn" @click="toggleDeleteMessage()">Delete</button>
        </div>
      </div>
      <p class="body">{{post.body}}</p>
    </div>
  </div>
  <div v-else></div>
</template>

<script>
  import axios from 'axios'
  import DeletePostMessage from "../components/DeletePostMessage.vue"

  export default {
    name: "PostItem",
    components: {
      DeletePostMessage
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
        console.log(this.post)
        if(bool) {
          this.deleteMessage(this.post)
        } else {
          this.toggleDeleteMessage()
        }
      },
      deleteMessage(postToDelete) {
        console.log(postToDelete)
        axios.post('http://localhost:9000/posts/delete', {
          id: postToDelete.id,
          title: postToDelete.title,
          body: postToDelete.body
        })
        .catch(err => console.log(err.response.data))
        .then(this.$router.push({ name: 'home'}))
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
  .title h1 {
    flex: 8;
    word-break: break-all;
  }
  .title div {
    flex: 4;
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
</style>

