<template>
	<section class="video">
		<h2 class="hide">Featured video</h2>
		
		<iframe src="https://www.youtube.com/embed/CboI5d5hxdg?version=3&modestbranding=1&showinfo=0&autohide=1&controls=1&vq=hd720"></iframe>
	</section>
</template>

<style scoped>
	.video {
		position: relative;
		z-index: 50;
		width: 100%;
		backdrop-filter: contrast(70%) blur(1rem);
	}

	@-moz-document url-prefix() {
		.video {
			background: url('/assets/blur-fallback.jpg') top fixed no-repeat;
			background-size: cover;
			backdrop-filter: none;
		}
	}

	@media only screen and (max-width: 720px) {
		.video {
			background: url('/assets/blur-fallback.jpg') top fixed no-repeat;
			background-size: cover;
			backdrop-filter: none;
		}
	}

	.video iframe {
		width: 1280px;
		height: 720px;
		margin: 0 auto;
		padding: 4rem 0;
		display: block;
	}

	@media only screen and (max-width: 1420px) {
		.video iframe {
			width: 960px;
			height: 540px;
		}
	}

	@media only screen and (max-width: 1120px) {
		.video iframe {
			width: 720px;
			height: 360px;
		}
	}

	@media only screen and (max-width: 860px) {
		.video iframe {
			width: 540px;
			height: 270px;
		}
	} 

	@media only screen and (max-width: 690px) {
		.video iframe {
			width: 100%;
			max-width: 405px;
			height: 202px;
		}
	}
</style>