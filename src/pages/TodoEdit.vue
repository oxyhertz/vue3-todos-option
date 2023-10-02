<template>
    <section class="todo-edit" v-if="todo">
        <label for="todo-title">Title</label>
        <input type="text" name="todo-title" placeholder="Title" v-model="todo.title">
        <label for="todo-severity"></label>
        <input min="1" max="3" type="number" name="todo-severity" v-model="todo.severity">
        <button @click="saveTodo()">{{ todo._id ? "Update " : "Save" }}</button>
    </section>
</template>
<script>
import { todoService } from '../services/todo.service'
export default {
    name: 'Todo Edit',
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
            if (!this.todoId) {
                this.todo = todoService.getEmptyTodo()
            } else {
                try {
                    const todo = await todoService.getById(this.todoId)
                    this.todo = todo
                } catch (error) {
                    throw error
                }
            }
        },
        async saveTodo() {
            await todoService.update(this.todo)
            this.$router.push('/todos')
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
