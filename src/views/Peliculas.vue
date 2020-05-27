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
        }
    },
}
</script>

<style lang="stylus" scoped>

</style>