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
        typeButton: String,
        confirm: Boolean,
    },

    computed: {
      styleButton(){
        if(this.typeButton == 'default' || !this.typeButton) return 'default';
        if(this.typeButton == 'save') return 'save';
        if(this.typeButton == 'danger') return 'danger';
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
    width: 100%;
    height: 40px;
    margin: 0 auto;
    color: #fff;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-weight: bold;
  }

  .default {
    background: #3498db;
  }

  .default:hover {
    background: #2980b9;
    transition: .2s;
  }

  .save {
    background: #149414;
  }

  .save:hover {
    background: #0e6b0e;
    transition: .2s;
  }

  .danger {
    background: #e74c3c;
  }

  .danger:hover {
    background: #c0392b;
    transition: .2s;
  }
</style>
