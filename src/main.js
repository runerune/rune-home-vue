import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import Fragment from 'vue-fragment';

Vue.use(Vuex);
Vue.use(Fragment.Plugin);

Vue.config.productionTip = false;
Vue.config.devtools = false;

const store = new Vuex.Store({
	state: {
		photo: null,
	},
	getters: {
		getPhoto(state) {
			return state.photo;
		}
	},
	mutations: {
		photoSelect: (state, photo) => { state.photo = photo; },
		photoClear: (state) => { state.photo = null },
	},
	actions: {
		photoSelect: ({ commit }, photo) => commit('photoSelect', photo),
		photoClear: ({ commit }) => commit('photoClear'),
	}
});

new Vue({
	render: h => h(App),
	store
}).$mount('#app');