import { todoService } from '@/services/todo.service.js'

export const todo = {
  state: {
    todos: [],
    filterBy: null,
  },
  getters: {
    todos({ todos }) {
      return todos
    },
    todosToDisplay({ todos, filterBy }) {
      let todosToDisplay = [...todos]
      if (filterBy?.title) {
        const titleRegex = new RegExp(filterBy.title, 'i')
        todosToDisplay = todosToDisplay.filter((todo) => titleRegex.test(todo.title))
      }
      if (filterBy?.severity) {
        todosToDisplay = todosToDisplay.filter((todo) => todo.severity === filterBy.severity)
      }
      return todosToDisplay
    },
  },
  mutations: {
    setTodos(state, { todos }) {
      state.todos = todos
    },
    removeTodo(state, { todoId }) {
      state.todos = state.todos.filter((todo) => todo._id !== todoId)
    },
    setFilter(state, { filterBy }) {
      state.filterBy = { ...filterBy }
    },
  },
  actions: {
    async loadTodos(context) {
      try {
        const todos = await todoService.query()
        context.commit({ type: 'setTodos', todos })
      } catch (error) {
        throw error
      }
    },
    async removeTodo(context, { todoId }) {
      try {
        await todoService.remove(todoId)
        context.commit({ type: 'removeTodo', todoId })
      } catch (error) {
        throw error
      }
    },
  },
}
