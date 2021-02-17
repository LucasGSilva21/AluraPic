<template>
  <div>
    <my-title v-if="image._id">Edição</my-title>
    <my-title v-else >Cadastro</my-title>
    <form @submit.prevent="store()">
      <div class="container">
        <label for="titulo">TÍTULO</label>
        <input class="item" id="titulo" autocomplete="off" v-model="image.titulo">
      </div>

      <div class="container">
        <label for="url">URL</label>
        <input class="item" id="url" autocomplete="off" v-model.lazy="image.url">
        <div class="image">
          <my-imagem :url="image.url" :title="image.titulo" />
        </div>
      </div>

      <div class="container">
        <label class="label-description" for="descricao">DESCRIÇÃO</label>
        <textarea class="item" id="descricao" autocomplete="off" v-model="image.descricao"></textarea>
      </div>

      <div class="container-buttons">
        <div class="button">
          <router-link :to="{name: 'home'}"><my-botton text="VOLTAR" typeButton="default"/></router-link>
        </div>
        <div class="button">
          <my-botton text="GRAVAR" typeButton="save"/>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import Title from '../../components/title/Title.vue';
  import Imagem from '../../components/imagem/Imagem.vue';
  import Botton from '../../components/button/Button.vue';

  export default {
    name: 'Cadastro',

    components:{
      'my-title': Title,
      'my-imagem': Imagem,
      'my-botton': Botton
    },

    data(){
      return {
        image: {
          titulo: '',
          url: '',
          descricao: ''
        },
        id: this.$route.params.id
      }
    },

    methods: {
      store(){
        if(this.id){
          this.$http
            .put(`v1/fotos/${this.id}`, this.image)
            .then(() => {
              this.image = {
                titulo: '',
                url: '',
                descricao: ''
              };
              this.$router.push({ name: 'home' });
            }, err => console.log(err));
        }else{
          this.$http
            .post('v1/fotos', this.image)
            .then(() => this.image = {
              titulo: '',
              url: '',
              descricao: ''
            }, err => console.log(err));
        }
      }
    },

    created(){
      if(this.id){
        this.$http
          .get(`v1/fotos/${this.id}`)
          .then(image => this.image = image.data, err => console.log(err));
      }
    }
  }
</script>

<style scoped>
  form {
    width: 80%;
    margin: 0 auto;
  }

  label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .item {
    width: 100%;
    padding: 10px;
    font-size: 18px;
    border-radius: 10px;
    border: 1px solid #333;
    box-sizing: border-box;
    margin-bottom: 20px;
  }

  .image {
    margin: 0 auto;
    width: 300px;
    height: auto;
  }

  .label-description {
    margin-top: 20px;
  }

  textarea {
    min-height: 150px;
  }

  .container-buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }

  .button {
    padding: 10px;
    min-width: 270px;
  }
</style>
