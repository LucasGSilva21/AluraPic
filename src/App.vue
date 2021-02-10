<template>
  <div id="app" class="body">
    <h1 class="title">{{ title }}</h1>

    <ul class="list">
      <li class="list-item" v-for="image of images" :key="image.titulo">
        <v-card :title="image.titulo">
           <img class="image" :src="image.url" :alt="image.titulo">
        </v-card>
      </li>
    </ul>
  </div>
</template>

<script>

import Card from './components/card/Card.vue';

export default {
  name: 'app',

  components:{
    'v-card': Card
  },

  data () {
    return {
      title: 'AluraPic',
      images: []
    }
  },

  created() {
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(images => this.images = images);
  }
}
</script>

<style scoped>
  #app {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .body{
    color: #fff;
    background: #333;
    font-family: Helvetica, sans-serif;
    min-height: 100vh;
  }

  .title{
    text-align: center;
  }

  .list{
    list-style: none;
  }

  .list .list-item{
    display: inline-block;
  }

  .image{
    width: 100%;
    height: 180px;
    border-radius: 10px;
  }
</style>
