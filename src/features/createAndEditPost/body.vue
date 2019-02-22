<template>
  <div>
    <h1 v-if="this.id !== ''">Update post</h1>
    <h1 v-else>Create a new post</h1>
    <form @submit.prevent="addPost">
      <div class="form-title">
        <label for="post-title">Title</label>
        <div class="error-msg" v-if="!$v.title.required && this.submitError">Field is required</div>
        <input v-bind:class="{ error : !$v.title.required && this.submitError }" type="text" v-model="title" name="post-title" id="post-title" placeholder="Title goes here..." >
      </div>
      <div class="form-body">
        <label for="body">Body</label>
        <div class="error-msg" v-if="!$v.body.required && this.submitError">Field is required</div>
        <textarea v-bind:class="{ error : !$v.body.required && this.submitError }" v-model="body" id="body" name="body" cols="50" rows="3"></textarea>
      </div>
      <div class="submit">
        <input type="submit" value="Submit" class="btn">
        <router-link v-if="this.id == ''" tag="button" :to="{ name: 'home' }" class="btn">Cancel</router-link>
        <router-link v-else tag="button" :to="{ name: 'view-post', params: { id: this.id } }" class="btn">Cancel</router-link>
      </div>
    </form>
  </div>
</template>

<script>
  import uuid from 'uuid';
  import { required } from 'vuelidate/lib/validators';
  import axios from 'axios';

  export default {
    name: "CreatePost",
    data() {
      return {
        submitError: false,
        id: '',
        time: new Date(),
        title: '',
        body: ''
      }
    },
    validations: {
      title: {
        required
      },
      body: {
        required
      }
    },
    methods: {
      addPost(e) {
        e.preventDefault();
        const newId = this.id == '' ? uuid.v4() : this.id
        const newPost = {
          id: newId,
          time: this.time,
          title: this.title,
          body: this.body
        }
        this.$v.$touch()
        if (this.$v.$invalid) {
          this.submitError = true;
        } else {
          this.$emit('add-post', newPost);
        }
      }
    },
    created() {
      axios.get('http://localhost:9000/posts/' + this.$route.params.id)
        .then(res => {
          if(res.status === 200) {
            this.id = res.data.id
            this.time = res.data.time
            this.title = res.data.title
            this.body = res.data.body
          }
        })
        .catch(err => console.log(err))
    }
  }
</script>

<style scoped>
  form {
    width: var(--maxWidth);
    margin: 0 auto;
    display: flex;
    flex-direction: column
  }
  @media (max-width:1284px) {
    form {
      width: 100%
    }
  }
  .form-title, .form-body {
    padding: 10px 0 15px;
  }
  input[type="text"] {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: .6em .7em;
    border: 1px solid #bbc0c4;
    border-radius: 3px;
    box-shadow: 0 0 0 rgba(255,255,255,0);
    font-size: 13px;
    font-family: inherit;
    line-height: 1.15384615;
    flex: 1 auto;
  }
  textarea {
    height: 200px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    margin: -1px 0 0;
    line-height: 1.3;
    font-size: 14px;
    border: 1px solid #bbc0c4;
    border-radius: 3px;
    resize: vertical
  }
  label {
    display: block;
    padding: 0 2px;
    color: #0C0D0E;
    font-family: inherit;
    font-size: 1.15384615rem;
    font-weight: 700;
    cursor: pointer;
    margin-bottom: 4px;
  }
  .submit {
    flex-direction: row;
  }
  .submit button {
    background-color: #999;
  }
  input[type="submit"] {
    padding-right: 1.2em;
    padding-left: 1.2em;
  }
  .error-msg {
    padding-bottom: 5px;
    color: red;
  }
  input[type="text"].error, textarea.error {
    border-color: red;
    background: #FDD;
  }
  input[type="text"].error:focus, textarea.error:focus {
    outline-color: #F99;
  }
  .error-msg {
    font-size: 15px
  }
</style>
