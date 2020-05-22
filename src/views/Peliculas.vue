<template>
    <v-container>
        <Tabla> </Tabla>
    </v-container>
</template>

<script>
import Tabla from '@/components/TablaPeliculas.vue'
export default {
    name: 'Peliculas',
    components: {
        Tabla
    },
    data () {
        return {
            peliculas: [],
        }
    },
}
</script>

<style lang="stylus" scoped>

</style>