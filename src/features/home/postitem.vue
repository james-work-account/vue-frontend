<template>
    <router-link tag="div" :to="{ name: 'view-post', params: { id: this.post.id }}" class="post-item">
        <div class="left">
          <p class="title">{{post.title}}</p>
          <p class="body-preview">{{post.minBody}}</p>
        </div>
        <div class="right">
          <p class="time">{{post.time}}</p>
        </div>
    </router-link>
</template>

<script>
import moment from 'moment'

export default {
    name: "PostItem",
    props: ["post"]
}
</script>

<style scoped>
  .post-item {
    padding: 10px 15px 10px;
    border-bottom: 2px solid #E1E6EA;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .post-item:hover {
    background-color: rgb(234, 234, 234)
  }
  .title {
    font-size: 18px;
    margin-bottom: 5px;
    display: flex;
    flex-flow: row nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .body-preview, .time {
    font-size: 14px;
    color: rgb(102, 102, 102)
  }
  .right {
    text-align: right;
    display: flex;
    align-items: center
  }
  @media(max-width: 800px) {
    .post-item {
      flex-direction: column-reverse
    }
    .right {
      text-align: left
    }
  }
</style>
