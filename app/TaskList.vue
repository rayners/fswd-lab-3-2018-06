<template>
<div>
    <titled-task-list title="Completed Tasks" :tasks="completedTasks"></titled-task-list>
    <titled-task-list title="Incomplete Tasks" :tasks="incompleteTasks"></titled-task-list>

    <add-task @add-task="addTask"></add-task>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import TitledTaskList from './TitledTaskList.vue';
import AddTask from './AddTask.vue';
export default {
    data: function() {
        return {
            newTask: ''
        };
    },
    methods: {
        addTask(newTask) {
            this.$store.dispatch('addTask', newTask);
        }
    },
    components: {
        TitledTaskList,
        AddTask
    },
    computed: mapGetters(['completedTasks', 'incompleteTasks'])
};
</script>