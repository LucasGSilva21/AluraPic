<template>
  <div>
    <my-title>Cadastro</my-title>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in imperdiet augue. Ut vulputate ultricies commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi suscipit orci arcu, ac tincidunt lectus cursus sed. Phasellus tristique dapibus odio in convallis. Duis eu velit eu ante pharetra porta et sed massa. Vestibulum tempus justo sed nisl vulputate convallis. Mauris in sapien sit amet nisl vestibulum iaculis nec ac metus. Suspendisse consectetur sem arcu, a gravida odio feugiat a. Proin pretium velit sed mollis dignissim. Mauris suscipit felis eget risus efficitur mattis. In porta urna vel consectetur ullamcorper. Etiam laoreet velit sit amet risus ultricies suscipit. Maecenas non augue placerat, posuere elit sit amet, eleifend urna. Vivamus accumsan laoreet gravida.
    </p>
    <p>
      Phasellus commodo rhoncus nibh sed dignissim. Sed hendrerit metus id ipsum cursus congue. In porttitor elementum lectus, vitae viverra nibh auctor convallis. Sed dui leo, laoreet in dolor a, facilisis aliquam lacus. Ut posuere odio et tortor pharetra, sed volutpat leo viverra. Nulla vel libero diam. Suspendisse potenti. Duis vestibulum urna et ante ullamcorper ornare. Quisque iaculis sollicitudin mi ut placerat. Integer sodales libero enim, et elementum massa porta a. Mauris dui tortor, eleifend et vestibulum in, cursus ac elit. Maecenas enim magna, luctus non lectus at, molestie porta libero. Phasellus efficitur, ligula non ultrices blandit, erat urna lobortis nulla, ut auctor ligula sem quis libero. Curabitur arcu magna, aliquet sed elit id, lobortis dignissim nulla. Nulla vehicula in dolor sed lacinia.
    </p>
  </div>
</template>

<script>
  import Title from '../../components/title/Title.vue';

  export default {
    name: 'Cadastro',

    components:{
      'my-title': Title,
    },
  }
</script>

<style scoped>
  p{
    margin: 0 auto;
    width: 80%;
  }
</style>
