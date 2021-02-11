<template>
  <div>
    <h1 class="title">{{ title }}</h1>

    <input type="search" class="filter" v-on:input="filter = $event.target.value" placeholder="Filtre pelo título">

    <ul class="list">
      <li class="list-item" v-for="image of imagesFilter" :key="image.titulo">
        <v-card :title="image.titulo">
          <v-image :url="image.url" :title="image.titulo" />
        </v-card>
      </li>
    </ul>
  </div>
</template>

<script>
  import Card from '../card/Card.vue';
  import Imagem from '../imagem/Imagem.vue';

  export default {
    name: 'app',

    components:{
      'v-card': Card,
      'v-image': Imagem
    },

    data () {
      return {
        title: 'AluraPic',
        images: [],
        filter: []
      }
    },

    computed: {
      imagesFilter(){
        if(this.filter){
          const exp = new RegExp(this.filter, 'i');
          return this.images.filter(image => exp.test(image.titulo));
        }else{
          return this.images;
        }
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

  .filter{
    display: block;
    width: 80%;
    margin: 0 auto;
  }
</style>
