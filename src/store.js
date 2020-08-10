import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

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

export default store;