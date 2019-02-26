<template lang="pug">
  router-link.post-item(
    tag="div"
    :to="{ name: 'view-post', params: { id: this.post.id }}"
  )
    .left
      p.title {{post.title}}
      p.body-preview {{post.minBody}}
    .right
      p.time {{post.time}}
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
