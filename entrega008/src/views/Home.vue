<template>
  <div class="home">
    <vue-headful title="Home | HackaMarket" />

    <h1>
      <p>Welcome to HackaMarket</p>
    </h1>
    <img
      class="image"
      alt="Welcome"
      src="https://images.unsplash.com/photo-1520694146360-85079777e456?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    />
  </div>
</template>

<script>
//IMPORTANDO vueheadful
import vueHeadful from "vue-headful";

export default {
  name: "Home",
  components: {}
};
</script>

<style scoped>
body {
  background-image: url("https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1855&q=80");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
div h1 p {
  color: #5878ca;
}

@media (min-width: 100px) {
  .image {
    max-width: 100%;
  }
}
@media (min-width: 768px) {
  .image {
    max-width: 100%;
  }
}
</style>