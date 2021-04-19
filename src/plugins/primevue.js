import PrimeVue from 'primevue/config';

// styles
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

// components
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';

export default {
  install(app) {
    app.use(PrimeVue);
    app.component('DataTable', DataTable);
    app.component('Column', Column);
    app.component('Dialog', Dialog);
    app.component('Button', Button);
  }
};
