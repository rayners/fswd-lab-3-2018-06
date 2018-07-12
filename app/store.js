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
            console.log('setting user!');
            console.log(user);
            state.user = user;
            state.isLoggedIn = !!user;
        }
    },
    actions: {
        checkLogin(store) {
            axios.get('http://localhost:8000/users/isLoggedIn')
                .then(response => {
                    console.log(response);
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
                    store.commit('setUser', response.data.user);
                    router.push('/tasks');
                });
    
        }    
    }
});