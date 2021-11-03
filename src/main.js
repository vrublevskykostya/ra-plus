import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import { firestorePlugin } from 'vuefire';
import App from './App';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.use(firestorePlugin);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA8uadaAdSPYEoA5vHMOCjPzGuGo2MZQ8k',
    libraries: 'places',
  },
  installComponents: true,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
