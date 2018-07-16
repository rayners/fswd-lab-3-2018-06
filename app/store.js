import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({
    store: {
        user: null,
        isLoggedIn: false
    },
    mutations: {
        setUser(state, user) {
            Vue.set(state, 'user', user);
            Vue.set(state, 'isLoggedIn', !!user);
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
    
        }    
    }
});