<template>
<div>
    <h1>Completed Tasks</h1>
    <ul><task-item v-for="task in completedTasks" :key="task.id" v-bind:task="task"></task-item></ul>

    <h1>Incomplete Tasks</h1>
    <ul><task-item v-for="task in incompleteTasks" :key="task.id" v-bind:task="task"></task-item></ul>
</div>
</template>

<script>
import axios from 'axios';
import TaskItem from './TaskItem.vue';
export default {
    components: {
        TaskItem
    },
    data: function() {
        return {
            incompleteTasks: [],
            completedTasks: []
        }
    },
    mounted() {
        axios.get('http://localhost:8000/tasks')
            .then(response => {
                this.incompleteTasks = response.data.incompleteTasks;
                this.completedTasks = response.data.completedTasks;
            });
    }
    // props: ['tasks']
};
</script>