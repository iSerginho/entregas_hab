<template>
  <div>
    <div id="formulario">
      <h1>Añadir nuevo cliente:</h1>

      <p v-show="errorMsg">Tienes campos vacios.</p>

      <input type="text" v-model="nombre" placeholder="Nombre" />
      <br />
      <input type="text" v-model="usuario" placeholder="usuario" />
      <br />
      <input type="text" v-model="password" placeholder="password" />
      <br />
      <input type="text" v-model="email" placeholder="email" />
      <br />
      <input type="text" v-model="foto" placeholder="foto" />
      <br />
      <button @click="validatingData()">Añadir nuevo cliente</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import vueHeadful from "vue-headful";

import axios from "axios";
//IMPORTANDO SWEETALERT
import Swal from "sweetalert2";

export default {
  name: "AddClients",
  data() {
    return {
      nombre: "",
      usuario: "",
      password: "",
      email: "",
      foto: "",
      createClient: false,
      errorMsg: false
    };
  },
  methods: {
    validatingData() {
      Swal.fire({
        title: "Cliente creado correctamente",
        text: "Enhorabuena",
        icon: "success",
        confirmButtonText: "OK",
        showCancelButton: false,
        timer: 3000,
        onClose: () => {
          location.reload();
        }
      });
      if (
        this.nombre === "" ||
        this.usuario === "" ||
        this.password === "" ||
        this.email === "" ||
        this.foto === ""
      ) {
        // alert("No puedes dejar campos vacios");
        this.errorMsg = true;
        this.createClient = false;
      } else {
        this.errorMsg = false;
        this.createClient = true;
        this.addNewClient();
      }
    },
    addNewClient() {
      if (this.createClient === true) {
        var self = this;
        axios
          .post("http://localhost:3308/add", {
            nombre: self.nombre,
            usuario: self.usuario,
            password: self.password,
            email: self.email,
            foto: self.foto
          })
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
        this.createClient = false;
        this.nombre = "";
        this.usuario = "";
        this.password = "";
        this.email = "";
        this.foto = "";
      } else {
        console.log("Yo no deberia estar aqui.");
      }
    }
  }
};
</script>

<style scoped>
div h1 {
  color: #5878ca;
}
input {
  font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
  color: #5878ca;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  background: #d1e0ff;
  margin: 0 0 25px;
  overflow: hidden;
  padding: 20px;

  border: 2px solid #5878ca;
}
button {
  font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
  color: #ffffff;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  background: #889ccf;
  margin: 0 0 25px;
  overflow: hidden;
  padding: 20px;

  border: 2px solid #5878ca;
}
</style>