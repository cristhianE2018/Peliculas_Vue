<template>
    <v-container fluid class="cont">
        <v-row justify="center">
            <v-dialog v-model="dialog2" max-width="800px" persistent class="ModalTrailer">
                <v-card class="ModalTrailer">
                    <v-toolbar dark color="#1A242E">
                    <v-btn icon dark @click="dialog2=false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title> Tráiler </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        
                    </v-toolbar-items>
                    </v-toolbar>
                    <v-card-text>
                        <video 
                        class="vtrailer"
                        :src= direccion
                        autoplay
                        controls
                        ></video>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-row>
        <v-row justify="center">
            <v-dialog v-model="dialog" persistent  dark="" max-width="600px">
            <v-card>
                    <v-toolbar dark color="primary">
                    <v-btn icon dark @click="cerrar()">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title> Mas información de la pelicula {{ peli.title }} </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        
                    </v-toolbar-items>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <h3> Reparto </h3>
                                </v-col>
                                <v-col cols="4" v-for="a in reparto" :key="a">
                                    <v-img
                                    :src= a.imagen>
                                    </v-img>
                                    <span class="text-center"> {{ a.nombre }} </span>
                                </v-col>
                                <v-col cols="12">
                                    <h1 class="text-center"> Resumen </h1>
                                </v-col>
                                <v-col cols="12">
                                    <p class="text-justify">
                                        {{ peli.descripcion }}
                                    </p>
                                </v-col>
                            </v-row>
                        </v-container> 
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-row>
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
                            <template>

                            </template>
                                    <v-btn

                                        color="white"
                                        @click="c(n)"
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
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'TablaPeliculas',
    data() {
        return {
            peli: {
                'title':'',
                'descripcion': ''
            },
            select: 0,
            dialog: false,
            dialog2: false,
            title: "",
            direccion: "",
            descripcion: "",
            reparto: [],
        }
    },
    methods: {
        obtenerPeliculasporGenero() {
            const path = `http://127.0.0.1:8000/api/generos/peliculas/${this.select}`
            axios.get(path).then((response) => {
                this.peliculas = response.data
            })
            .catch((error)=>{
                console.log(error)
            })
        },
        obtenerReparto(id){
            const path= `http://127.0.0.1:8000/api/actores/pelicula/${id}`
            axios.get(path).then((response) => {
                this.reparto = response.data
            })
            .catch((error)=>{
                console.log(error)
            })
        },
        verTrailer(dir) {
            this.dialog2=true;
            this.direccion= dir;
        },
        c(n) {
            this.dialog= true;
            this.peli.title= n.titulo;
            this.peli.descripcion = n.descripcion;
            this.obtenerReparto(n.id);
        },
        cerrar() {
            this.dialog=false;
            this.reparto=[];
        },
        ...mapMutations(['ObtenerPeliculas','ObtenerGeneros'])
    },
    created () {
        this.ObtenerPeliculas();
        this.ObtenerGeneros();
    },
    computed: {
        ...mapState(['peliculas','generos'])
    }
}
</script>

<style scoped>
.select{
    color: antiquewhite;
}
.ModalTrailer{
    background-color: transparent;
}
.vtrailer{
    max-width: 750px;
}
</style>