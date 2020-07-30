<template>
  <div>
    <!-- DECLARAMOS VUEHEADFUL -->
    <vue-headful title="Error :(" />
    <h1>Uppss ¡Página no encontrada!</h1>
    <img
      class="image"
      src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1015&q=80"
    />
  </div>
</template>

<script>
//IMPORTAMOS COMPONENTE VUEHEADFUL
import vueHeadful from "vue-headful";

export default {
  name: "Error"
};
</script>

<style scoped>
div h1 {
  color: #5878ca;
}
@media (min-width: 320px) {
  .image {
    width: 300px;
    height: 200px;
  }
}
@media (min-width: 768px) {
  .image {
    width: 600px;
    height: 500px;
  }
}
</style>
