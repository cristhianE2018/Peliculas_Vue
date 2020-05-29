<template>
    <v-container fluid>
        <v-row>
            <v-col cols="4">
                <v-select
                class="select"
                dark
                v-model="select"
                :hint="`${select.id}`"
                :items="generos"
                item-text="nombre"
                item-value='id'
                label="Buscar por Genero"
                @change="obtenerPeliculasporGenero()"
                dense
                ></v-select>
            </v-col>
        </v-row>
        
        <v-row>
            <v-col cols="4" v-for="n in peliculas" :key="n">
                <v-card class="mx-auto" max-width="400" color="#263238">
                        <v-img
                        class="white--text align-end"
                        height="200px"
                        :src= n.imagen
                        >
                            <v-card-title> {{ n.titulo }} </v-card-title>
                        </v-img>
                        <v-card-subtitle class="pb-0"> Año de estreno: {{ n.anio_estreno }}</v-card-subtitle>

                        <v-card-text class="text--primary">
                        </v-card-text>

                        <v-card-actions>
                            <v-btn
                            color="white"
                            
                            text
                            >
                            Descripción
                        </v-btn>
                        <v-btn
                            color="white"
                            text
                        >
                            Ver
                        </v-btn>
                        </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>    
</template>

<script>
import axios from 'axios'
export default {
    name: 'TablaPeliculas',
    data() {
        return {
            peliculas: [],
            generos: [],
            select: 0,
        }
    },
    methods: {
        ObtenerPeliculas() {
            const path = 'http://127.0.0.1:8000/api/peliculas/'
            axios.get(path).then((response) => {
                this.peliculas = response.data
            })
            .catch((error)=>{
                console.log(error)
            })
        },
        obtenerGeneros() {
            const path = 'http://127.0.0.1:8000/api/generos/'
            axios.get(path).then((response) => {
                this.generos = response.data
            })
            .catch((error)=>{
                console.log(error)
            })
        },
        obtenerPeliculasporGenero() {
            const path = `http://127.0.0.1:8000/api/generos/peliculas/${this.select}`
            axios.get(path).then((response) => {
                this.peliculas = response.data
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    },
    created () {
        this.ObtenerPeliculas();
        this.obtenerGeneros();
    }
}
</script>

<style scoped>
.select{
    color: antiquewhite;
}
</style>