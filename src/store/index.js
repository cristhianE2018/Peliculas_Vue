import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    peliculas: [],
    generos: [],
    ejemplo: false,
    trailer: ''
  },
  mutations: {
    //Función que solicitará las peliculas a la API
      ObtenerPeliculas: function(state) {
        const path = 'http://127.0.0.1:8000/api/peliculas/'
        axios.get(path).then((response) => {
            state.peliculas = response.data
        })
        .catch((error)=>{
            console.log(error)
        })
    },
    //Función que solicitará los generos a la API
      ObtenerGeneros: function(state){
        const path = 'http://127.0.0.1:8000/api/generos/'
            axios.get(path).then((response) => {
                state.generos = response.data
            })
            .catch((error)=>{
                console.log(error)
            })
      },
      //Función que solicitará las peliculas dependiendo el genero seleccionado
      ObtenerPeliculasporGenero: function(state, select) {
        const path = `http://127.0.0.1:8000/api/generos/peliculas/${select}`
        axios.get(path).then((response) => {
            state.peliculas = response.data
        })
        .catch((error)=>{
            console.log(error)
        })
    },
      verTrailer: function(state,direccion){
        state.ejemplo= true;
        state.trailer = direccion;
      }
  },
  actions: {
  },
  modules: {
  }
})
