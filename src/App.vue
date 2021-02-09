<template>
  <div id="app">
    <h1>{{ title }}</h1>

    <ul>
      <li v-for="image of images" :key="image.description">
        <img :src="image.url" :alt="image.description" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',

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

<style lang="scss">

</style>
