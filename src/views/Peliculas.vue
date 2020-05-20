<template>
    <v-container>
        <H5> Sección de Peliculas </H5>
        {{ peliculas }}
    </v-container>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Peliculas',
    data () {
        return {
            peliculas: [],
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

<style lang="stylus" scoped>

</style>