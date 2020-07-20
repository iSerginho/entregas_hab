import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

//declaramos la string que almacene los objetos
//con los datos de las rutas del menu de nuestro proyecto
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",

    component: () => import("../views/About.vue"),
  },
  {
    path: "/TopArtists",
    name: "TopArtists",
    component: () => import("../views/TopArtists.vue"),
  },
  {
    path: "/TopTracks",
    name: "TopTracks",
    component: () => import("../views/TopTracks.vue"),
  },
  {
    path: "*",
    name: "Error",
    component: () => import("../views/Error.vue"),
  },
];

const router = new VueRouter({
  routes,
});

//exportamos la variable que le pase los valores de la ruta del menu
export default router;
