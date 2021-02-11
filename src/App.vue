<template>
  <div class="body">
    <v-menu :routes="routes"/>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import Menu from './components/menu/Menu.vue';
  import { routes } from './routes';

  export default {
    name: 'app',

    components: {
      'v-menu': Menu
    },

    data() {
      return {
        routes
      }
    }
  }
</script>

<style scoped>
  .body{
    margin: 0;
    padding: 0;
  }

  .page-enter, .page-leave-active{
    opacity: 0;
  }

  .page-enter-active, .page-leave-active{
    transition: opacity .5s;
  }
</style>
