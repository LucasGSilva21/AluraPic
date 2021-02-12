<template>
    <button :class="styleButton" type="submit" @click="action()">
      {{ text }}
    </button>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true,
        },
        typeButton: {
            type: String,
            required: true,
        },
        confirm: Boolean,
    },

    computed: {
      styleButton(){
        if(this.typeButton == 'default' || !this.typeButton) return 'default';
        if(this.typeButton == 'danger')return 'danger'
      }
    },

    methods:{
      action(){
        if(this.confirm){
          if(confirm('Confirma operação?')){
            this.$emit('active', new Date());
          }
          return;
        }
        this.$emit('active', new Date());
      }
    }
}
</script>

<style scoped>
  button {
    width: 80%;
    height: 40px;
    margin: 0 auto;
    color: #fff;
    border-radius: 10px;
    border: none;
  }

  .default{
    background: #3498db;
  }

  .danger{
    background: #e74c3c;
  }
</style>
