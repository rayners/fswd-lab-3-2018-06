import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';

new Vue({
    el: '#vueTasks',
    router,
    store,
    render: h => h(App)
});
