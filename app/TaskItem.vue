<template>
<li>Task #{{task.id}} {{ task.name }}</li>
</template>

<script>
export default {
    props: ['task']
};
</script>