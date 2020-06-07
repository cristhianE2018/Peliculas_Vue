<template>
    
    <v-container fluid class="cont">
        <!-- Componente modal donde se visualizará el trailer de la pelicula -->
            <ModalTrailer></ModalTrailer>
        <!-- Componente modal donde se visualizará la información de la pelicula -->
            <ModalDescripcion> </ModalDescripcion>
        
        <v-row>
            <v-col cols="4">
                <v-select
                class="select"
                dark
                v-model="select"
                :items="generos"
                item-text="nombre"
                item-value='id'
                label="Buscar por Genero"
                @change="ObtenerPeliculasporGenero(select)"
                dense
                ></v-select>
            </v-col>
        </v-row>
        <v-row>
           <!-- <v-col cols="12" v-if="!servidor">
                <h4> Servidor no disponible </h4>
            </v-col> -->
            <v-col cols="12" v-if="peliculas.length==0">
                <v-row  v-if="mensaje" justify="center">
                    
                        <v-img
                        max-height="400"
                        max-width="400"
                        src="servidor.png"
                        
                        >
                        </v-img>
                    
                </v-row>
                <v-row v-else justify="center">
                    <v-cols cols="12">
                        <h1 class="mensaje"> Buscando ..... </h1>
                        <v-sheet color="transparent" class="px-3" tile="">
                            <v-skeleton-loader class="mx-auto cargar" 
                            loading max-width="1000" 
                            type="text"
                            >
                            </v-skeleton-loader>
                        </v-sheet>
                    </v-cols>
                
                </v-row>
                    
                
                
            </v-col>

            <v-col cols="4" v-for="n in peliculas" :key="n" v-else>
                <v-card class="mx-auto" max-width="400"
                elevation="15"
                 color="#1A242E">
                        <v-img
                        class="white--text align-end"
                        height="200px"
                        :src= n.imagen
                        >
                        </v-img>
                        <v-card-text class="text--primary">
                        </v-card-text>
                        
                        <v-card-actions >
                                    <v-btn
                                        color="white"
                                        @click="verDescripcion(n)"
                                        text
                                        >
                                        Descripción
                                    </v-btn>
                                   
                            <v-btn
                            color="white"
                            text
                            @click="verTrailer(n.trailer)"
                            >
                            Ver Tráiler
                            </v-btn>
                        </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>    
</template>

<script>
import ModalTrailer from '@/components/ModalTrailer.vue'
import ModalDescripcion from '@/components/ModalDescripcion.vue'
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'TablaPeliculas',
    components: {
        ModalTrailer, ModalDescripcion,
    },
    data() {
        return {
            select: 0,
            reparto: [],
        }
    },
    methods: {
        obtenerReparto(id){
            const path= `http://127.0.0.1:8000/api/actores/pelicula/${id}`
            axios.get(path).then((response) => {
                this.reparto = response.data
            })
            .catch((error)=>{
                console.log(error)
            })
        },
        cerrar() {
            this.dialog=false;
            this.reparto=[];
        },
        ...mapMutations(['ObtenerPeliculas','ObtenerGeneros',
            'ObtenerPeliculasporGenero','verTrailer','verDescripcion','servidor'])
    },
    created () {
        this.ObtenerPeliculas();
        this.ObtenerGeneros();
    },
    computed: {
        ...mapState(['peliculas','generos','verdad','servidor','mensaje'])
    }
}
</script>

<style scoped>
.select{
    color: antiquewhite;
}
.cargar{
    background-color: #263238;
}
.mensaje{
    color: azure;
}
</style>