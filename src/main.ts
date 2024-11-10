import { createApp } from 'vue'
import App from './App.vue'

import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

import './assets/css/style.css';
import 'aos/dist/aos.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faTwitter, faFacebook, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faTwitter)
library.add(faFacebook)
library.add(faLinkedin)
library.add(faGithub)
library.add(faInstagram)
library.add(faBars)
library.add(faTimes)

const app = createApp(App);
app.use(BootstrapVue3);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app');

// import * as main from './assets/js/main.js';
// import * as bootstrap_bundle from './assets/vendor/bootstrap/js/bootstrap.bundle.min.js';
// import * as glightbox from './assets/vendor/glightbox/js/glightbox.min.js';