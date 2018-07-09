<template>
<ul><task-item v-for="task in tasks" :key="task" v-bind:task="task"></task-item></ul>
</template>

<script>
import TaskItem from './TaskItem.vue';
export default {
    components: {
        TaskItem
    },
    props: ['tasks']
};
</script>