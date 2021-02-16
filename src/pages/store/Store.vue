<template>
  <div>
    <my-title>Cadastro</my-title>
    <form>
      <div class="container">
        <label for="titulo">TÍTULO</label>
        <input class="item" id="titulo" autocomplete="off">
      </div>

      <div class="container">
        <label for="url">URL</label>
        <input class="item" id="url" autocomplete="off">
        <my-imagem/>
      </div>

      <div class="container">
        <label class="label-description" for="descricao">DESCRIÇÃO</label>
        <textarea class="item" id="descricao" autocomplete="off"></textarea>
      </div>

      <div class="container-buttons">
        <div class="button">
          <router-link to="/"><my-botton text="VOLTAR" typeButton="default"/></router-link>
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
  }
</script>

<style scoped>
  form {
    width: 80%;
    margin: 0 auto;
  }

  label {
    font-weight: bold;
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
    min-width: 300px;
  }
</style>
