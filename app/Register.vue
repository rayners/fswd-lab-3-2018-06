<template>
<form v-on:submit.prevent="registerUser">
    <div class="form-group">
        <label for="username">Username:</label>
        <input v-model="username" class="form-control" id="username" name="username" type="text">
    </div>
    <div class="form-group">
        <label for="password">Password:</label>
        <input v-model="password" class="form-control" id="password" type="password">
        <label for="password_confirm">Password (confirm)</label>
        <input v-model="password_confirm" class="form-control" id="password_confirm" type="password">
    </div>
    <button v-show="formValid" :disabled="!formValid" class="btn btn-primary" type="submit">Register</button>
</form>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';

export default {
    name: 'register',
    data: function() {
        return {
            password: '',
            password_confirm: '',
            username: '',
            usernameIsAvailable: false
        };
    },
    computed: {
        formValid() {
            return this.usernameIsAvailable && this.password === this.password_confirm;
        }
    },
    methods: {
        registerUser() {
            this.$store.dispatch('doRegister', {
                username: this.username,
                password: this.password,
                password_confirm: this.password_confirm
            });
        }
    },
    watch: {
        // username: _.debounce(function(value) {
        //         console.log('Making the request!');
        //         axios.get('http://localhost:8000/users/isAvailable?username=' + value)
        //             .then(response => {
        //                 this.usernameIsAvailable = response.data.isAvailable;
        //             });
        //     })
        username(value) {
            console.log('Making the request!');
            axios.get('http://localhost:8000/users/isAvailable?username=' + value)
                .then(response => {
                    this.usernameIsAvailable = response.data.isAvailable;
                });
        }
    }
}
</script>