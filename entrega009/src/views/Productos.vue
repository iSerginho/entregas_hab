<template>
  <div class="Home">
    <vue-headful title="Productos | HackaMarket" />

    <h1>Lista de productos:</h1>

    <productos :productos="productos" />
  </div>
</template> 

<script>
//IMPORTANDO VUEHEADFUL Y RESTO DE COMPONENTES NECESARIOS
import vueHeadful from "vue-headful";

import axios from "axios";
import productos from "@/components/ProductsList.vue";

export default {
  name: "Home",
  components: { productos },
  data() {
    return {
      productos: [],
      idProducto: ""
    };
  },
  methods: {
    //FUNCION PARA CONSEGUIR PRODUCTOS
    getProducts() {
      var self = this;
      axios
        .get("http://localhost:3308/productos")
        .then(function(response) {
          self.productos = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },

  //CREAMOS EL HUB
  created() {
    this.getProducts();
  }
};
</script>

<style scoped>
div h1 {
  color: #5878ca;
}
</style>>

