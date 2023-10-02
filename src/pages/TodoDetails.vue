<template>
    <section class="todo-details" v-if="todo">

        <h3>{{ todo.title }}</h3>
        <p>Severity:{{ todo.severity }}</p>
        <p>Todo ID:{{ todo._id }}</p>
    </section>
</template>
<script>
import { todoService } from '@/services/todo.service.js'
export default {
    name: 'Todo Details',
    data() {
        return {
            todo: null
        }
    },
    computed: {
        todoId() {
            return this.$route.params.todoId
        }
    },
    methods: {
        async loadTodo() {
            if (!this.todoId) return
            try {
                const todo = await todoService.getById(this.todoId)
                this.todo = todo
            } catch (error) {
                throw error
            }
        }
    },
    watch: {
        todoId: {
            handler() {
                this.loadTodo()
            },
            immediate: true
        }
    }
}
</script>
