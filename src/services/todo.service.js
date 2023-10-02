import { storageService } from './async-storage.service.js'

const TODO_DB = 'todoDB'
export const todoService = {
  query,
  getById,
  remove,
  update,
  getEmptyTodo,
}
_createTodos()

function query() {
  return storageService.query(TODO_DB)
}

function getById(todoId) {
  return storageService.get(TODO_DB, todoId)
}

function remove(todoId) {
  return storageService.remove(TODO_DB, todoId)
}

function update(todo) {
  if (todo._id) {
    return storageService.put(TODO_DB, todo)
  } else {
    return storageService.post(TODO_DB, todo)
  }
}

function getEmptyTodo() {
  return {
    severity: 0,
    title: '',
  }
}
function _createTodos() {
  let todos = localStorage.getItem(TODO_DB) ? JSON.parse(localStorage.getItem(TODO_DB)) : undefined
  if (!todos || !todos.length) {
    todos = [{ _id: 'dedd1', title: 'Learn vue', severity: 3 }]
    localStorage.setItem(TODO_DB, JSON.stringify(todos))
  }
  return todos
}
