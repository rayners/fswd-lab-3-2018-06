import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({
    store: {
        user: null,
        isLoggedIn: false,
        tasks: []
    },
    getters: {
        completedTasks(state) {
            var tasks = state.tasks || [];
            return tasks.filter(task => task.completedAt);
        },
        incompleteTasks(state) {
            var tasks = state.tasks || [];
            return tasks.filter(task => !task.completedAt);
        },
        taskById(state) {
            return (id) => {
                var tasks = state.tasks || [],
                    intId = parseInt(id);
                return tasks.find(task => task.id === intId);
            }
        }
    },
    mutations: {
        setUser(state, user) {
            Vue.set(state, 'user', user);
            Vue.set(state, 'isLoggedIn', !!user);
        },
        setTasks(state, tasks) {
            Vue.set(state, 'tasks', tasks);
        },
        addTask(state, task) {
            state.tasks.push(task);
        },
        updateTask(state, updateInfo) {
            var id = updateInfo.id;
            var task = updateInfo.task;
            var taskIndex = state.tasks.findIndex(t => t.id === id);
            if (taskIndex > -1) {
                state.tasks[taskIndex] = task;
            }
        },
        removeTask(state, id) {
            Vue.set(state, 'tasks', state.tasks.filter(task => task.id !== id));
        }
    },
    actions: {
        checkLogin(store) {
            axios.get('http://localhost:8000/users/isLoggedIn')
                .then(response => {
                    if (response.data.user) {
                        store.commit('setUser', response.data.user);
                    } else {
                        store.commit('setUser', null);
                    }
                });
        },
        doRegister(store, userInfo) {
            axios.post('http://localhost:8000/users/register', {
                username: userInfo.username,
                password: userInfo.password,
                password_confirm: userInfo.password_confirm
            })
                .then(response => {                    
                    store.commit('setUser', response.data);
                    router.push('/tasks');
                });
    
        },
        getTasks(store) {
            axios.get('http://localhost:8000/tasks')
                .then(response => {
                    store.commit('setTasks', response.data);
                });
        },

        addTask(store, task) {
            store.commit('addTask', { id: -1, name: task });
            axios.post('http://localhost:8000/tasks', { name: task })
                .then(response => {
                    store.commit('updateTask', { id: -1, task: response.data });
                })
                .catch(() => {
                    console.log('Task failed to be added!');
                    store.commit('removeTask', -1);
                });
        }

    }
});