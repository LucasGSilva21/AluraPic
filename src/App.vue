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
    margin-top: 0;
  }

  .page-enter, .page-leave-to{
    opacity: 0;
  }

  .page-enter-active, .page-leave-to{
    transition: opacity .5s;
  }
</style>
