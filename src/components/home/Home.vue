<template>
  <div class="body">
    <h1 class="title">{{ title }}</h1>

    <input type="search" class="filter" @input="filter = $event.target.value" placeholder="Filtre pelo título">

    <ul class="list">
      <li class="list-item" v-for="image of imagesFilter" :key="image.titulo">
        <v-card :title="image.titulo">
          <template v-slot:image>
            <v-image :url="image.url" :title="image.titulo" />
          </template>
          <template v-slot:button>
            <v-button text="Excluir" typeButton="danger" @active="remove($event, image)" :confirm="true" />
          </template>
        </v-card>
      </li>
    </ul>
  </div>
</template>

<script>
  import Card from '../card/Card.vue';
  import Imagem from '../imagem/Imagem.vue';
  import Button from '../button/Button.vue';

  export default {
    name: 'app',

    components:{
      'v-card': Card,
      'v-image': Imagem,
      'v-button': Button
    },

    data () {
      return {
        title: 'AluraPic',
        images: [],
        filter: []
      }
    },

    methods: {
      remove($event, image){
        alert(`${$event} \n ${image.titulo} removido!!!`);
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
  ul {
    padding: 0;
    list-style-type: none;
  }

  .body{
    display: flex;
    flex-direction: column;
  }

  .title{
    width: 100%;
    text-align: center;
    color: #333;
  }

  .filter{
    display: flex;
    width: 80%;
    margin: 0 auto;
    padding: 20px;
    font-size: 18px;
    border-radius: 10px;
    border: none;
    border: 1px solid #333;
  }

  .list{
    list-style: none;
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: stretch;
    padding-top: 30px;
  }

  .list .list-item{
    padding: 10px;
  }
</style>
