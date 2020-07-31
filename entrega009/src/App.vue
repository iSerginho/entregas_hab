<template>
  <div id="app">
    <div id="nav">
      <menucustom />
    </div>
    <router-view />
    <footercustom />
  </div>
</template>

<script>
import menucustom from "@/components/MenuCustom.vue";
import footercustom from "@/components/FooterCustom.vue";

export default {
  components: {
    footercustom,
    menucustom
  }
};
</script>

<style>
@media (min-width: 320px) {
  * {
    font-size: 35px;
  }
}
@media (min-width: 768px) {
  * {
    font-size: 35px;
  }
}

body {
  background-image: url("https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1855&q=80");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
input {
  padding: 0.3rem;
  margin: 0.3rem;
  border: none;
  border-bottom: 2px solid rgba(5, 54, 133, 0.829);
  border-top: 2px solid transparent;
  border-right: 2px solid transparent;
  border-left: 2px solid transparent;
  transition: all 0.4s;
}

input:hover {
  border: 2px solid rgba(5, 54, 133, 0.829);
  cursor: pointer;
}

button {
  border-radius: 15px;
  background: rgba(5, 54, 133, 0.829);
  color: wheat;
  padding: 0.5rem;
  margin: 1.2rem;
  border: none;
  display: inline-block;
  transition: all 0.4s;
}

button:hover {
  cursor: pointer;
  transform: translateY(-6px);
}

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
  color: rgba(5, 54, 133, 0.829);
}
</style>
