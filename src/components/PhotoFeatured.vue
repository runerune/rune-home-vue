<template>
	<div class="photo-featured" :style="{ backgroundImage: 'url(' + url + ')' }">
		<h2 v-html="head"></h2>
		<p v-html="tagline"></p>
		<img :src="url" class="hide" :alt="alt">
	</div>
</template>

<script>
	export default {
		props: ['url', 'alt', 'head', 'tagline'],
	}
</script>

<style scoped>
	.photo-featured {
		position: relative;
		z-index: 50;
		width: 100%;
		height: 25rem;
		background-attachment: fixed;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}

	.photo-featured h2,
	.photo-featured p {
		text-align: center;
		display: block;
		color: #eee;
		text-transform: uppercase;
	}

	.photo-featured h2 {
		padding-top: 9.4rem;
		font-size: 3rem;
		text-shadow: .2rem .2rem 0 rgba(0,0,0,.9);
	}

	.photo-featured p {
		padding-top: .5rem;
		font-size: 1.4rem;
		text-shadow: .08rem .08rem 0 rgba(0,0,0,.9), .12rem .12rem 0 rgba(0,0,0,.9);
	}

	@media only screen and (max-width: 1000px) {
		.photo-featured h2 {
			padding-top: 10rem;
			font-size: 2.4rem;
			text-shadow: .15rem .15rem 0 rgba(0,0,0,.9);
		}

		.photo-featured p {
			font-size: 1.2rem;
			text-shadow: .08rem .08rem 0 rgba(0,0,0,.9), .1rem .1rem 0 rgba(0,0,0,.9);;
		}
	}

	@media only screen and (max-width: 700px) {
		.photo-featured h2 {
			padding-top: 9rem;
			font-size: 2.6rem;
		}

		.photo-featured p {
			font-size: 1.3rem;
		}
	}

	@media only screen and (max-width: 500px) {
		.photo-featured h2 {
			padding-top: 9.4rem;
			font-size: 2.1rem;
		}

		.photo-featured p {
			font-size: 1.2rem;
		}
	}
</style>