// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import { Store } from './store/store'
// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'
// const vuetify = new Vuetify()


// createApp(App)
// .use(router)
// .use(Store)
// .use(vuetify)
// .mount('#app')

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { Store } from './store/store'; // Assuming 'Store' is your Vuex store instance
//vuetify
// import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import Vuetify from 'vuetify'; // Import Vuetify
import * as directives from 'vuetify/directives'

import 'vuetify/dist/vuetify.min.css';

const vuetify = createVuetify({
    components,
    directives
})
// const vuetify = new Vuetify(); // Create a Vuetify instance

const app = createApp(App);

// Use the various plugins before mounting the app
app.use(router);
app.use(Store);
app.use(vuetify);

app.mount('#app');
