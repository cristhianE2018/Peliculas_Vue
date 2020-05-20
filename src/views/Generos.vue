<template>
    <v-container>
        <h5> Sección de generos </h5>
        {{ generos }}
    </v-container>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Generos',
    data() {
        return {
            generos: []
        }
    },
    methods :{
        ObtenerGeneros() {
            const path = 'http://127.0.0.1:8000/api/generos/'
            axios.get(path).then((response) => {
                this.generos = response.data
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    },
    created() {
        this.ObtenerGeneros();
    }
}
</script>

<style scoped>

</style>