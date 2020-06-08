<template>
    <v-app>
		<!-- Barra de navegación -->
		<v-navigation-drawer app color="blue-grey darken-4">
			<v-list-item>
				<v-list-item-content class="itemslist">
					<v-list-item-title>
						<h1> Movieland </h1>
						
					</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
	

	
			<v-list dense nav>
				<v-list-item v-for="item in items" :key="item.title" link>
					<v-list-item-icon>
						<v-icon color="white">{{ item.icon }}</v-icon>
					</v-list-item-icon>

					<v-list-item :to="item.route" color="indigo">
						<v-list-item-title class="itemslist">{{ item.title }}</v-list-item-title>
					</v-list-item>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<!-- Barra de título -->
		<v-app-bar app color="#1A242E">
			<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			<v-toolbar-title class="headline text-uppercase">
				<h5 class="promo" > Difruta de las mejores peliculas y series </h5>
				
			</v-toolbar-title>
			<v-spacer></v-spacer>
		</v-app-bar>

		<v-content class="contenido">
			<router-view/>
		</v-content>
		<v-footer color="#293646"> 
			
		</v-footer>
	</v-app>
  
</template>

<script>
export default {
  name: 'App',
  data: () => ({
     items: [
        { title: 'Peliculas', icon: 'movie', route: 'Peliculas' },
		{ title: 'Series', icon: 'play_arrow', route: '' },
		{ title: 'Configuración', icon: 'settings', route: '' },
		{ title: 'Añadidos recientemente', icon: 'schedule', route: '' },
		{ title: 'A cerca de', icon: 'info', route: '' },
        ],
		drawer: null,
  }),
};
</script>

<style scoped>
.itemslist{
	color: azure;
}
.promo{
	color: aliceblue;
}
.contenido{
	background-color: #1A242E;
}
</style>