<template lang="pug">
    div/
</template>

<script>
export default {
    
}
</script>

<style scoped>
  div {
    border: 5px solid #f3f3f3;
    animation: spin 0.75s linear infinite;
    border-top: 5px solid #555;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin: auto
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
</style>
