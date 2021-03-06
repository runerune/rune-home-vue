<template>
	<section class="photo-list">
		<h2 class="hide">Photos</h2>
		
		<ul>
			<li v-for="photo in photos" :key="photo.url">
				<figure :style="{ backgroundImage: 'url(' + photo.thumb + ')' }" @click="select(photo.url, photo.alt)">
					<img :src="photo.thumb" :alt="photo.alt">
				</figure>
			</li>
		</ul>
	</section>
</template>

<script>
	export default {
		props: ['url', 'alt', 'head', 'tagline'],

		data: () => {
			return {
				photos: [],
				selected: 0,
			}
		},

		async mounted() {
			this.photos = await this.load();
		},

		methods: {
			select(url, alt) {
				this.$store.dispatch('photoSelect', {
					url: url,
					alt: alt
				});
			},
			async load() {
				const photos = await fetch('../../assets/photos.json');
				return await photos.json();
			}
		},
	}
</script>

<style scoped>
	.photo-list {
		width: 100%;
		z-index: 50;
		position: relative;
		backdrop-filter: contrast(70%) blur(1rem);
	}

	@-moz-document url-prefix() {
		.photo-list {
			background: url(/assets/blur-fallback.jpg) top fixed no-repeat;
			background-size: cover;
			backdrop-filter: none;
		}
	}

	@media only screen and (max-width: 720px) {
		.photo-list {
			background: url(/assets/blur-fallback.jpg) top fixed no-repeat;
			background-size: cover;
			backdrop-filter: none;
		}
	}

	.photo-list ul {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;
		padding: 3rem;
		box-sizing: border-box;
		list-style: none;
	}

	.photo-list ul:after {
		content: "";
		flex: auto;
		padding: 0 3rem;
		width: 100%;
	}

	.photo-list li {
		min-width: 25%;
		max-width: 25%;
		overflow: hidden;
		box-sizing: border-box;
	}

	.photo-list li figure {
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		margin: 1rem;
		border-radius: .55rem;
		transition: box-shadow .2s, filter .2s;
		box-shadow: 0 0 0 .3rem transparent;
		cursor: pointer;
		max-height: 18rem;
	}

	.photo-list li:hover figure {
		transition: box-shadow .1s, filter .1s;
		box-shadow: 0 0 0 .3rem rgba(255,255,255,.5);
		filter: contrast(110%) brightness(1.05);
	}

	.photo-list li:nth-of-type(6n+1),
	.photo-list li:nth-of-type(6n) {
		min-width: 50%;
		max-width: 50%;
	}

	.photo-list img {
		opacity: 0;
	}

	@media only screen and (max-width: 1280px) {
		.photo-list li,
		.photo-list li:nth-of-type(6n+1),
		.photo-list li:nth-of-type(6n) {
			min-width: 33%;
			max-width: 33%;
		}

		.photo-list li:nth-of-type(4n+1),
		.photo-list li:nth-of-type(4n) {
			min-width: 66%;
			max-width: 66%;
		}
	}

	@media only screen and (max-width: 960px) {
		.photo-list li,
		.photo-list li:nth-of-type(6n+1),
		.photo-list li:nth-of-type(6n),
		.photo-list li:nth-of-type(4n+1),
		.photo-list li:nth-of-type(4n) {
			min-width: 50%;
			max-width: 50%;
		}
		
		.photo-list li:nth-of-type(3n+1) {
			min-width: 100%;
			max-width: 100%;
		}
	}

	@media only screen and (max-width: 720px) {
		.photo-list li,
		.photo-list li:nth-of-type(6n+1),
		.photo-list li:nth-of-type(6n),
		.photo-list li:nth-of-type(4n+1),
		.photo-list li:nth-of-type(4n),
		.photo-list li:nth-of-type(3n+1) {
			min-width: 100%;
			max-width: 100%;
		}
	}
</style>