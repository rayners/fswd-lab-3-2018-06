<template>
<li><router-link :to="'/tasks/' + task.id">Task #{{task.id}} {{ task.name }}</router-link></li>
</template>

<script>
export default {
    props: ['task']
};
</script>