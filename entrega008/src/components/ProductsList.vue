<template>
  <div>
    <ul class="lista">
      <li v-for="(producto, index) in productos" :key="producto.id">
        <img class="imagen" :src="producto.imagen" alt="Imagen cliente" />

        <p>
          Nombre:
          {{producto.nombre}}
        </p>
        <p>
          stock:
          {{producto.stock}}
        </p>
        <p>
          disponibilidad:
          {{producto.disponibilidad}}
        </p>

        <button @click="comprarProducto()">Comprar</button>
        <button @click="reservarProducto()">Reservar</button>
      </li>
    </ul>
  </div>
</template>

<script>
//IMPORTANDO SWEETALERT
import Swal from "sweetalert2";

export default {
  name: "Productos",
  props: {
    productos: Array
  },
  methods: {
    reservarProducto() {
      Swal.fire({
        title: "Producto reservado",
        text: "Enhorabuena",
        icon: "success",
        confirmButtonText: "OK",
        showCancelButton: false,
        timer: 3000,

        onClose: () => {
          location.reload();
        }
      });
    },
    comprarProducto() {
      Swal.fire({
        title: "Producto comprado",
        text: "Enhorabuena",
        icon: "success",
        confirmButtonText: "OK",
        showCancelButton: false,
        timer: 3000,
        onClose: () => {
          location.reload();
        }
      });
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