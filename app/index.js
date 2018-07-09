import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vue from 'vue';
import App from './App.vue';

console.log('Hi with bootstrap');

new Vue({
    el: '#vueTasks',
    render: h => h(App)
});
