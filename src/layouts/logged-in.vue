<template lang="pug">
  .container
    Header/
    router-view/
</template>

<script>
import Header from '@/components/header.vue'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>
<!-- styling for the component -->
<style>
</style>