<template>
<div>
    <p> Name: <span class='task-name'>{{ name }}</span></p>
    <p> Status: <span class='task-status'>{{ status }}</span></p>
</div>
</template>

<script>
export default {
    props: ['id'],
    computed: {
        task() {
            return this.$store.getters.taskById(this.id) || { name: 'Unknown task' };
        },
        name() {
            return this.task.name;
        },
        status() {
            if (this.task.completedAt) {
                return "Completed";
            } else {
                return "Incomplete";
            }
        }
    }
};
</script>