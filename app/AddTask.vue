<template>
    <div>
        <input v-model="newTask">
        <button v-on:click="addTask">Add Task</button>
    </div>
</template>

<script>
export default {
    name: 'AddTask',
    data: function() {
        return { newTask: '' };
    },
    methods: {
        addTask() {
            this.$emit('add-task', this.newTask);
        }
    }
};
</script>
