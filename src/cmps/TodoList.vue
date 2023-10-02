<template>
    <section class="todo-list">
        <template v-for="todo in todos" :key="todo._id">
            <TodoPreview :todo="todo" />
            <button @click="removeTodo(todo._id)">Remove</button>
        </template>
    </section>
</template>
<script>
import TodoPreview from './TodoPreview.vue';
export default {
    props: {
        todos: {
            type: Array,
            required: true,
        }

    },
    name: 'Todo List',
    methods: {
        removeTodo(todoId) {
            this.$emit('remove-todo', todoId)
        }
    },
    components: {
        TodoPreview
    }

}
</script>
