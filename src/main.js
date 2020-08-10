import Vue from 'vue'
import App from './App.vue'
import Fragment from 'vue-fragment';

Vue.use(Fragment.Plugin);

Vue.config.productionTip = false;
Vue.config.devtools = false;

new Vue({
	render: h => h(App),
}).$mount('#app');