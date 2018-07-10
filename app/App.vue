<template>
    <div class="container">
        <router-view></router-view>
        <!-- <h1>My stuff is here!</h1>
        <task-list v-bind:tasks="tasks"></task-list>
        <input v-model="newTask">
        <button v-on:click="addTask">Add Task</button> -->
    </div>
</template>

<script>
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
    methods: {
        addTask: function() {
            this.tasks.push(this.newTask);
        }
    }
}
</script>