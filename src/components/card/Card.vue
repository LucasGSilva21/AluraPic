<template>
  <div class="card">
    <transition name="card-fade">
      <div class="image" v-show="visible">
        <slot name="image"></slot>
      </div>
    </transition>
    <h2 class="card-title" @dblclick="visible = !visible">{{ title }}</h2>
    <div class="card-text">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <slot name="button"></slot>
  </div>
</template>

<script>
  export default {
    props: ['title'],

    data(){
      return {
        visible: true
      }
    }
  }
</script>

<style>
  .card{
    background: white;
    border-radius: 10px;
    width: 300px;
    text-align: center;
    color: #333;
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    box-shadow: 9px 7px 5px #bdbdbd;
  }

  .card .card-title{
    text-align: center;
    text-transform: uppercase;
  }
  .card .card-text{
    width: 90%;
    margin: 0 auto;
  }
  .card .card-text p{
    padding-left: 10px;
    padding-right: 10px;
  }

  .card-fade-enter, .card-fade-leave-active{
    opacity: 0;
  }

  .card-fade-enter-active, .card-fade-leave-active{
    transition: opacity .5s;
  }

  .image{
    width: 100%;
    height: 200px;
  }
</style>
