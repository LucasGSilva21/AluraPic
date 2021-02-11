<template>
  <div class="card">
    <transition name="card-fade">
      <div v-show="visible">
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
    padding: 0 auto;
    background-color: #f3f3f3;
    border-radius: 10px;
    width: 300px;
    height: 400px;
    vertical-align: top;
    text-align: center;
    display: inline-block;
    margin: 10px;
    color: #333;
  }

  .card .card-title{
    text-align: center;
    margin: 0;
    padding-top: 10px;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  .card .card-text{
    width: 100%;
  }
  .card .card-text p{
    margin-left: 10px;
    margin-right: 10px;
  }

  .card-fade-enter, .card-fade-leave-active{
    opacity: 0;
  }

  .card-fade-enter-active, .card-fade-leave-active{
    transition: opacity .5s;
  }
</style>
