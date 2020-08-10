<template>
	<div id="app">
		<Pano></Pano>
		<Index></Index>
	</div>
</template>

<script>
import Index from './components/Index.vue'
import Pano from './components/Pano.vue'

export default {
	name: 'App',
	components: {
		Index,
		Pano
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
