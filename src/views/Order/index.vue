<template>
  <div>
    <list></list>
    <submitbar></submitbar>
  </div>
</template>

<script>
  import submitbar from './base/submitbar.vue'
  import list from './base/list.vue'
  export default {
    components: {
      submitbar,
      list
    }
  }
</script>

<style>
</style>
