<template>
<div>
    <p> Name: {{ name }}</p>
    <p> Status: {{ status }}</p>
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