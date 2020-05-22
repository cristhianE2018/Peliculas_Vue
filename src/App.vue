<template>
    <v-app>
		<!-- Barra de navegación -->
		<v-navigation-drawer app color="blue-grey darken-4">
			<v-list-item>
				<v-list-item-content class="itemslist">
					<v-list-item-title>
						<h1> Movies Store </h1>
					</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
	

	
			<v-list dense nav>
				<v-list-item v-for="item in items" :key="item.title" link>
					<v-list-item-icon>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-icon>

					<v-list-item :to="item.route" color="indigo">
						<v-list-item-title class="itemslist">{{ item.title }}</v-list-item-title>
					</v-list-item>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<!-- Barra de título -->
		<v-app-bar app color="#1A242E">
			<v-toolbar-title class="headline text-uppercase">
				<span> </span>
			</v-toolbar-title>
			<v-spacer></v-spacer>
		</v-app-bar>

		<v-content class="contenido">
			<router-view/>
		</v-content>
		
	</v-app>
  
</template>

<script>
export default {
  name: 'App',
  data: () => ({

     items: [
        { title: 'Peliculas', icon: '', route: 'Peliculas' },
        { title: 'Generos', icon: '', route: 'Generos' },
        { title: 'Actores', icon: '', route: '' }
        ],
        right: null,
  }),
};
</script>

<style scoped>
.itemslist{
	color: azure;
}
.contenido{
	background-color: #1A242E;
}
</style>