import PrimeVue from 'primevue/config';

// styles
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

export default {
  install(app) {
    app.use(PrimeVue);
  }
};
