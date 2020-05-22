<template>
    <v-container fluid>
        <v-row>
            <v-col cols="4" v-for="n in peliculas" :key="n">
                <v-card class="mx-auto" max-width="400" color="#F1F1F1">
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
                            color="blue"
                            text
                            >
                            Descripción
                        </v-btn>
                        <v-btn
                            color="blue"
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
            peliculas: []
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
        }
    },
    created () {
        this.ObtenerPeliculas();
    }
}
</script>

<style scoped>

</style>