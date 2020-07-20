<template>
  <div>
    <div id="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link>|
      <router-link :to="{ name: 'TopArtists' }">Top Artists</router-link>|
      <router-link :to="{ name: 'TopTracks' }">Top Tracks</router-link>|
      <router-link :to="{ name: 'About' }">About</router-link>|
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
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
}
</style>
