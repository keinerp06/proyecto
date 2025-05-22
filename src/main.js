import { createApp } from "vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import PrimeVue from "primevue/config";

import Aura from "@primevue/themes/aura";
import App from "./App.vue";

import Dialog from "primevue/dialog";
import Button from "primevue/button";
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import Select from 'primevue/select';
import Skeleton from 'primevue/skeleton';


import ConfirmDialog from 'primevue/confirmdialog';
import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';
import Toast from 'primevue/toast';
import 'primeicons/primeicons.css'


const app = createApp(App);
app.component("ButtonPrime", Button);
app.component("DialogPrime", Dialog);
app.component("DataTable", DataTable);
app.component("ColumnTable", Column);
app.component("InputText", InputText);
app.component("PasswordText", Password);
app.component("SelectPrime", Select);
app.component("SkeletonPrime", Skeleton);
app.component("ConfirmDialog", ConfirmDialog);
app.component('ToastPrime', Toast);

app.component("ColumnPrime", Column);

app.use(router);
app.use(ConfirmationService);
app.use(ToastService);
app.use(VueAxios, axios);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.mount("#app");
export { app };
