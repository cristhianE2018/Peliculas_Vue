<template>
    <v-container>
        <v-row justify="center">
            <v-dialog v-model="ejemplo" max-width="800px" persistent class="ModalTrailer">
                <v-card class="ModalTrailer">
                    <v-toolbar dark color="#1A242E">
                    <v-btn icon dark @click="$store.state.ejemplo=false">
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
                        :src= trailer
                        autoplay
                        controls
                        ></video>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-row>
    </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'ModalTrailer',
    computed: {
        ...mapState(['peliculas','ejemplo','trailer'])
    }
}
</script>

<style scoped>
.ModalTrailer{
    background-color: transparent;
}
.vtrailer{
    max-width: 750px;
}
</style>

