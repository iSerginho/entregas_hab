<template>
  <div>
    <div id="nav">
      <router-link :to="{ name: 'Home'}">Home</router-link>|
      <router-link :to="{ name: 'Productos'}">Productos</router-link>|
      <router-link :to="{ name: 'Clientes'}">Clientes</router-link>|
      <router-link :to="{ name: 'Registro'}">Registro</router-link>|
      <router-link :to="{ name: 'About'}">About</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuCustom",
  props: {
    username: String
  }
};
</script>

<style scoped>
/*con scoped obligamos a que los estilos solo se muestren en esta pagina*/

* {
  margin: 0;
  padding: 0;
  font-size: 18px;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #5878ca;
}

@media (min-width: 320px) {
  * {
    font-size: 30px;
  }
}
@media (min-width: 768px) {
  * {
    font-size: 35px;
  }
}
</style>
