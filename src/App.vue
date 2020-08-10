<template>
	<fragment>
		<Pano></Pano>
		<Index></Index>

		<PhotoFeatured
			url="assets/featured/operator.jpg" 
			alt="Aerial image of a drone operator among people walking by"
			head="Rise above"
			tagline="Break the limits <br> of imagination"
		></PhotoFeatured>

		<PhotoList></PhotoList>

		<PhotoFeatured
			url="assets/featured/trams-edit.jpg" 
			alt="Aerial image of two electric trams passing each other"
			head="The big picture"
			tagline="Everyday spaces &bull; <br> brand new perspective"
		></PhotoFeatured>

		<Photo></Photo>

	</fragment>
</template>

<script>
	import Index from './components/Index.vue'
	import Pano from './components/Pano.vue'
	import PhotoFeatured from './components/PhotoFeatured.vue'
	import PhotoList from './components/PhotoList.vue'
	import Photo from './components/Photo.vue'

	export default {
		name: 'App',
		components: {
			Index,
			Pano,
			PhotoFeatured,
			PhotoList,
			Photo,
		}
	}
</script>

<style>
	* {
		vertical-align: baseline;
		font-weight: inherit;
		font-family: sans-serif;
		font-style: inherit;
		outline: 0;
		padding: 0;
		margin: 0;
		image-rendering: optimizeQuality;
		backface-visibility: hidden;
	}

	*:not(input) {
		border: 0 none;
	}

	html,
	body {
		width: 100%;
		height: 100%;
		font-family: 'Open Sans', sans-serif;
	}

	.pnlm-load-box {
		top: 1rem !important;
		left: 1rem !important;
		margin: 0 !important;
		height: 2.6rem !important;
	}

	.pnlm-load-box p, .pnlm-load-box .pnlm-lmsg {
		display: none;
	}

	.pnlm-load-box .pnlm-lbar {
		margin-top: 1.1rem !important;
	}

	.pnlm-container {
		background-image: none;
	}

	.hide {
		position: absolute;
		top: -1000vw;
		left: -1000vh;
		width: 1rem;
		height: 1rem;
	}

	.photo-featured br {
		display: none;
	}

	@media only screen and (max-width: 700px) {
		.photo-featured br {
			display: block;
		}

		.photo-featured span {
			display: block;
			height: 0;
			overflow: hidden;
		}
	}
</style>
