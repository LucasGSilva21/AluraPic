<template>
  <div class="body">
    <my-title>{{ title }}</my-title>

    <input type="search" class="filter" @input="filter = $event.target.value" placeholder="Filtre pelo título">

    <span class="error">{{ error }}</span>

    <ul class="list">
      <li class="list-item" v-for="image of imagesFilter" :key="image.titulo">
        <my-card :title="image.titulo">
          <template v-slot:image>
            <my-image :url="image.url" :title="image.titulo" />
          </template>
          <template v-slot:button>
            <div class="container-button">
              <router-link :to="{name: 'edit', params: { id: image._id } }">
                <my-button text="ALTERAR" />
              </router-link>
              <my-button text="EXCLUIR" typeButton="danger" @active="remove($event, image)" :confirm="true" />
            </div>
          </template>
        </my-card>
      </li>
    </ul>
  </div>
</template>

<script>
  import Card from '../../components/card/Card.vue';
  import Imagem from '../../components/imagem/Imagem.vue';
  import Button from '../../components/button/Button.vue';
  import Title from '../../components/title/Title.vue';

  export default {
    name: 'Home',

    components:{
      'my-card': Card,
      'my-image': Imagem,
      'my-button': Button,
      'my-title': Title,
    },

    data () {
      return {
        title: 'AluraPic',
        images: [],
        filter: [],
        error: ''
      }
    },

    methods: {
      remove($event, image){
        this.$http.delete(`v1/fotos/${image._id}`)
          .then(() => {
              const index = this.images.indexOf(image);
              this.images.splice(index, 1);
              alert(`${$event} \n ${image.titulo} removido!!!`)
            }, err => {
              console.log(err);
              alert(`${image.titulo} não foi removido!!!`);
            });
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
      this.$http.get('v1/fotos')
        .then(res => res.json(), err => this.error = 'Não foi possível carregar as fotos. Tente novamente mais tarde.')
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

  .error {
    color: red;
    text-align: center;
    font-size: 18px;
    margin-top: 20px;
  }

  .list{
    list-style: none;
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    padding-top: 30px;
  }

  .list .list-item{
    padding: 10px;
  }

  .container-button{
    width: 90%;
    margin: 0 auto;
  }

  .container-button button{
    margin-top: 10px;
  }
</style>
