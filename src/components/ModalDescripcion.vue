<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent  dark="" max-width="600px">
            <v-card>
                    <v-toolbar dark color="#263238">
                    <v-btn icon dark @click="$store.state.dialog=false">
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
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'ModalDescripcion',
    computed: {
        ...mapState(['dialog','peli'])
    }
}
</script>

<style scoped>

</style>