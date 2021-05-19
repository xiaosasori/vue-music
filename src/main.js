import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VeeValidatePlugin from './includes/validation';
import { auth } from './includes/firebase'
import './assets/tailwind.css';
import './assets/main.css';
import i18n from './i18n'
import './registerServiceWorker'
// import GlobalComponents from './includes/_global';
import ProgessBar from './includes/progress-bar';
import 'nprogress/nprogress.css';

ProgessBar(router);

let app;

// mount app after firebase initialized
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(i18n);

    app.use(store);
    app.use(router);
    app.use(VeeValidatePlugin);
    // app.use(GlobalComponents);

    app.mount('#app');
  }
});
