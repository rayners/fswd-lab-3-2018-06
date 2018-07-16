<template>
    <div class="container">
        <p v-if="user">Hi: {{ user.username }}</p>
        <router-view></router-view>
        <!-- <h1>My stuff is here!</h1>
        <task-list v-bind:tasks="tasks"></task-list>
        <input v-model="newTask">
        <button v-on:click="addTask">Add Task</button> -->
    </div>
</template>

<script>
import { mapState } from 'vuex';
import TaskList from './TaskList.vue';

export default {
    components: {
        TaskList
    },
    // el: '#vueTasks',
    // // template: '<div><ul><li v-for="task in tasks">{{ task }}</li></ul><input v-model="newTask"><button v-on:click="addTask">Add Task</button></div>',
    // template: '<div><task-list v-bind:tasks="tasks"></task-list><input v-model="newTask"><button v-on:click="addTask">Add Task</button></div>',
    data: function () {
        return {
            newTask: 'hi!',
            tasks: []
        };
    },
    computed: mapState(['user']),
    // computed: {
    //     user() {
    //         return this.$store.state.user;
    //     },
    //     username() {
    //         return this.user && this.user.username;
    //     }
    // },
    methods: {
        addTask: function() {
            this.tasks.push(this.newTask);
        }
    },
    created() {
        // ?? is the user logged in?
        this.$store.dispatch('checkLogin');
        this.$store.dispatch('getTasks');
    }
}
</script>