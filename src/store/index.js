import { createStore } from 'vuex'
import { todo } from './todoStore'
const initialStoreModules = {
  todo,
}
const store = createStore({
  strict: true,
  modules: initialStoreModules,
})

export default store
