import Vue from 'vue';
import VueRouter from 'vue-router';
import TaskList from './TaskList.vue';
import Task from './Task.vue';
import Register from './Register.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/tasks',
            component: TaskList
        },
        {
            path: '/tasks/:id',
            component: Task,
            props: true
        },
        {
            path: '/register',
            component: Register
        }
    ]
});