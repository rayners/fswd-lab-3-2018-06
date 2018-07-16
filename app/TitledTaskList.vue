<template>
    <div>
        <h1>{{ title }} ({{ taskCount }})</h1>
        <ul><task-item v-for="task in tasks" :key="task.id" v-bind:task="task"></task-item></ul>
    </div>
</template>

<script>
import TaskItem from './TaskItem.vue';
export default {
    components: {
        TaskItem
    },
    name: 'TitledTaskList',
    props: ['title', 'tasks'],
    computed: {
        taskCount() {
            return this.tasks.length;
        }
    }
}
</script>