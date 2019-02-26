<template lang="pug">
  .container
    .body
      p Are you sure you want to delete this post?
      .buttons
        button.btn(@click="$emit('del-post', true)") Yes
        button.btn(@click="$emit('del-post', false, post)") No
</template>

<script>
export default {
  name: "DeletePostMessage",
  props:["post"]
}
</script>

<style scoped>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%
  }
  .body {
    max-width: 40rem;
    padding: 1.5rem;
    border-radius: 0.33rem;
    background-color: white;
    line-height: 1.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .body p {
    border-bottom: 2px solid #E1E6EA;
    padding-bottom: 15px;
  }
  .buttons {
    width: 100%;
    display: flex;
    margin-top: 1rem
  }
  .buttons button {
    flex: 6;
    margin: 0.25rem 0.25rem;
  }
</style>

