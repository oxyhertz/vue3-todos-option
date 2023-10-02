<template>
    <article class="todo-preview">
        <p>Title:{{ todo.title }}</p>
        <p>Severity:{{ todo.severity }}</p>
        <RouterLink :to="`/todo/${todo._id}`">Full Details</RouterLink>
        <RouterLink :to="`/todo/edit/${todo._id}`">Edit </RouterLink>
    </article>
</template>
<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    name: 'Todo Preview',

}
</script>
