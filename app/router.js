import Vue from 'vue';
import Router from 'vue-router';
import TaskList from './TaskList.vue';
import Task from './Task.vue';

Vue.use(Router);

export default new Router({
    routes: [
    // {
    //     path: '/',
    //     component: {
    //         template: '<h1>Hi</h1>'
    //     }
    // },
        {
            path: '/tasks',
            component: TaskList
        },
        {
            path: '/tasks/:id',
            component: Task,
            props: true
        }
    ]
});