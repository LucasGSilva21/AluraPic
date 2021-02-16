<template>
  <img class="image" :src="url" :alt="title">
</template>

<script>
export default {
  props: ['url', 'title']
}
</script>

<style scoped>
  .image{
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 10px 10px 0px 0px;
  }
</style>
