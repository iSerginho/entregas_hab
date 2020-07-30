<template>
  <div class="Home">
    <vue-headful title="Clientes | HackaMarket" />

    <h1>Lista de clientes:</h1>

    <clientes v-on:datos="mostrarCliente" v-on:borrar="borrandoCliente" :clientes="clientes" />

    <div v-show="seeModal" class="modal">
      <div class="modalBox">
        <h3>Actualiza los datos de tu cliente</h3>
        <p>ID del cliente: {{idCliente}}</p>

        <input type="text" placeholder="Nombre del cliente" v-model="nombreActualizado" />
        <br />
        <input type="text" placeholder="usuario del cliente" v-model="apellidoActualizado" />
        <br />
        <input type="text" placeholder="password del cliente" v-model="passwordActualizada" />
        <br />
        <input type="text" placeholder="email del cliente" v-model="emailActualizada" />
        <br />
        <input type="text" placeholder="imagen del cliente" v-model="imagenActualizada" />
        <br />
        <button @click="seeModal =! seeModal">Cancelar</button>
        <button @click="actualizarCliente()">Actualizar cliente</button>
      </div>
    </div>
  </div>
</template> 

<script>
// @ is an alias to /src
import vueHeadful from "vue-headful";

import axios from "axios";
import clientes from "@/components/ClientsList.vue";
//IMPORTANDO SWEETALERT
import Swal from "sweetalert2";

export default {
  name: "Home",
  components: { clientes },
  data() {
    return {
      clientes: [],
      idCliente: "",
      nombreActualizado: "",
      apellidoActualizado: "",
      passwordActualizada: "",
      passwordActualizada: "",
      emailActualizada: "",
      imagenActualizada: "",
      seeModal: false
    };
  },
  methods: {
    borrandoCliente(indiceCliente) {
      Swal.fire({
        title: "Estas a punto de borrar la nota",
        text: "¿Estas seguro?",
        icon: "success",
        confirmButtonText: "OK",
        showCancelButton: true,
        timer: 3000,
        onClose: () => {
          location.reload();
        }
      });
      var self = this;
      axios
        .delete("http://localhost:3308/delete/" + indiceCliente)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
      location.reload();
    },
    actualizarCliente() {
      var self = this;
      axios
        .put("http://localhost:3308/update/" + self.idCliente, {
          nombre: self.nombreActualizado,
          usuario: self.apellidoActualizado,
          password: self.passwordActualizada,
          email: self.emailActualizada,
          foto: self.imagenActualizada
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
      location.reload();
    },
    mostrarCliente(datosCliente) {
      this.nombreActualizado = datosCliente.nombre;
      this.apellidoActualizado = datosCliente.usuario;
      this.passwordActualizada = datosCliente.password;
      this.emailActualizada = datosCliente.email;
      this.imagenActualizada = datosCliente.foto;
      this.idCliente = datosCliente.id;

      this.seeModal = true;
    },
    //FUNCION PARA CONSEGUIR CLIENTES
    getClients() {
      var self = this;
      axios
        .get("http://localhost:3308/clientes")
        .then(function(response) {
          self.clientes = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },

  //CREAMOS EL HUB
  created() {
    this.getClients();
  }
};
</script>

<style scoped>
div h1 {
  color: #5878ca;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.modalBox {
  background-color: #fefefe;
  margin: 2% auto;
  padding: 5rem;
  width: 80%;
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
</style>>

