<template>
	<aside id="pano-container" role="presentation"></aside>
</template>

<script>

	import 'pannellum/build/pannellum.js';
	import 'pannellum/build/pannellum.css';

	export default {
		data: () => {
			return {
				pano: undefined
			}
		},

		methods: {
			getHfov: (width) => {
				if(width < 1000) return 60;
				if(width < 1400) return 80;

				return 100;
			},

			getUrl: (width) => {
				if(width <= 640) return 'assets/pano-background-small.jpg';
				return 'assets/pano-background.jpg';
			}
		},

		mounted: function() {
			// eslint-disable-next-line no-undef
			this.pano = pannellum.viewer('pano-container', {
				type: 'equirectangular',
				panorama: this.getUrl(window.innerWidth),
				preview: 'assets/pano-preview.jpg',
				keyboardZoom: false,
				disableKeyboardCtrl: true,
				mouseZoom: false,
				friction: 0.01,
				pitch: -25,
				yaw: 10,
				maxPitch: 38,
				autoRotate: -2,
				autoLoad: true,
				autoRotateInactivityDelay: 3*1000,
				autoRotateStopDelay: 1,
				showControls: false,
				draggable: false,
				hfov: this.getHfov(window.innerWidth),
			});
		},

	}
</script>

<style scoped>
	#pano-container {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
	}
</style>