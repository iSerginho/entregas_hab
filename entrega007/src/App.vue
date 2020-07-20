<template>
  <div id="app">
    <div id="nav">
      <!-- 3er paso: Registrar componentes -->
      <menucustom />
      <router-view />

      <footercustom />
    </div>
  </div>
</template>

<script>
// 1er paso: Importar componentes
import menucustom from "@/components/MenuCustom.vue";
import footercustom from "@/components/FooterCustom.vue";

export default {
  name: "App",
  //2o paso: Registrar el componentes
  components: {
    menucustom,
    footercustom,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
