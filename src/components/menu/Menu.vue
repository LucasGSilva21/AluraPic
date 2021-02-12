<template>
  <nav>
    <ul>
      <li v-for="route in routes" :key="route.title">
        <router-link :to="route.path ? route.path : '/'">
          {{ route.title }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    props: {
      routes: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped>
  nav {
    width: 100%;
    margin-top: 0;
    background: #16a085;
    padding: 10px;
  }

  nav ul {
    display: flex;
  }

  nav ul li{
    list-style: none;
    padding: 10px;
  }

  nav ul li a{
    text-decoration: none;
    color: #ffffff;
    font-size: 18px;
  }
</style>
