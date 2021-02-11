<template>
  <div class="body">
    <v-menu/>
    <router-view></router-view>
  </div>
</template>

<script>
  import Menu from './components/menu/Menu.vue';

  export default {
    name: 'app',

    components: {
      'v-menu': Menu
    }
  }
</script>

<style scoped>
  .body{
    margin: 0;
    padding: 0;
  }
</style>
