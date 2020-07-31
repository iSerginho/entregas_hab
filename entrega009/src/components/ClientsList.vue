<template>
  <div>
    <ul class="lista">
      <li v-for="(cliente, index) in clientes" :key="cliente.id">
        <img class="imagen" :src="cliente.foto" alt="Imagen cliente" />

        <p>
          Nombre:
          {{cliente.nombre}}
        </p>
        <p>
          usuario:
          {{cliente.usuario}}
        </p>
        <p>
          password:
          {{cliente.password}}
        </p>
        <p>
          email:
          {{cliente.email}}
        </p>
        <button @click="enviarIndiceCliente(index)">Borrar</button>
        <button @click="enviarDatosCliente(index)">Editar</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Clientes",
  props: {
    clientes: Array
  },
  methods: {
    enviarDatosCliente(index) {
      let datosCliente = this.clientes[index];
      this.$emit("datos", datosCliente);
    },
    enviarIndiceCliente(index) {
      let indiceCliente = this.clientes[index].id;
      this.$emit("borrar", indiceCliente);
    }
  }
};
</script>

<style>
body {
  background-image: url("https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1855&q=80");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
.lista {
  border-radius: 40px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-around;
}
.lista p {
  font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
  color: #ffffff;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  background: #889ccf;
  margin: 0 0 25px;
  overflow: hidden;
  padding: 20px;
  border-radius: 35px 0px 35px 0px;
  -moz-border-radius: 35px 0px 35px 0px;
  -webkit-border-radius: 35px 0px 35px 0px;
  border: 2px solid #5878ca;
}
.imagen {
  width: 200px;
  height: 200px;
  border-radius: 40%;
  border-style: solid;
  border-color: #5878ca;
}
div ul li button {
  font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
  color: #ffffff;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  background: #434852;
  margin: 0 0 25px;
  overflow: hidden;
  padding: 20px;

  border: 2px solid #5878ca;
}
</style>