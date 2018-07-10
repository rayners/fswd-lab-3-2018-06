import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

new Vue({
    el: '#vueTasks',
    router,
    render: h => h(App)
});
