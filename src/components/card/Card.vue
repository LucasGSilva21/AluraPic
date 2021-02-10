<template>
  <div class="card">
    <slot></slot>
    <h2 class="card-title">{{ title }}</h2>
    <div class="card-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title']
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
  .card .card-body{
    width: 100%;
  }
  .card .card-body p{
    margin-left: 10px;
    margin-right: 10px;
  }
</style>
