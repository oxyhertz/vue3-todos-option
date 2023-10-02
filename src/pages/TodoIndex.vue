<template>
    <section class="todo-container">
        <TodoFilter />
        <RouterLink to="/toy/edit">Add </RouterLink>
        <TodoList @removeTodo="removeTodo" v-if="todosToDisplay.length" :todos="todosToDisplay" />
    </section>
</template>
<script>
import TodoList from '../cmps/TodoList.vue';
import TodoFilter from '../cmps/TodoFilter.vue';
import { mapGetters } from 'vuex'
export default {
    name: 'Todo App',
    created() {
        this.$store.dispatch({ type: 'loadTodos' })
    },
    computed: {
        ...mapGetters(['todosToDisplay'])
    },
    methods: {
        removeTodo(todoId) {
            try {
                this.$store.dispatch({ type: 'removeTodo', todoId })
            } catch (error) {
                throw error
            }
        }
    },
    components: {
        TodoList,
        TodoFilter
    }
}
</script>
