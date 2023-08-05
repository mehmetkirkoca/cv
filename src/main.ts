import { createApp } from 'vue'
import App from './App.vue'


import './assets/css/style.css';
import 'aos/dist/aos.css'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

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

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')


// import * as main from './assets/js/main.js';
// import * as bootstrap_bundle from './assets/vendor/bootstrap/js/bootstrap.bundle.min.js';
// import * as glightbox from './assets/vendor/glightbox/js/glightbox.min.js';