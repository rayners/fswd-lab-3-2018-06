<template lang="pug">
div
    p Name: {{ name }}
    p Status: {{ status }}
</template>

<script>
import axios from 'axios';
export default {
    props: ['id'],
    data: function() {
        return {
            task: {}
        };
    },
    computed: {
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
    },
    mounted() {
        axios.get('http://localhost:8000/tasks/' + this.id)
            .then(response => {
                this.task = response.data;
            });
    }
};
</script>