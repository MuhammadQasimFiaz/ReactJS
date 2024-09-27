import { createSlice, nanoid } from "@reduxjs/toolkit";

const loadFromLocalStorage = ()=> {
  try {
    const savedTodos = localStorage.getItem("todos")
    if (savedTodos) {
      const parsedTodos = JSON.parse(savedTodos)
      if (Array.isArray(parsedTodos)) {
        return parsedTodos
      }
    }
  } catch (e) {
    console.error("Failed to load todos from localStorage:", e)
  }
  return []
}

const initialState = {
  todos: loadFromLocalStorage()
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false
      }
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    updateTodo: (state, action) => {
      const {id, text} = action.payload
      const todo = state.todos.find((todo) => todo.id === id)
      if(todo) {
        todo.text = text
      }
    },
    completeTodo: (state, action) => {
      const {id, completed} = action.payload
      const todo = state.todos.find(todo => todo.id === id)
      console.log("function called")
      if(todo) {
        todo.completed = !completed
      }
    }
  }
})

export const {addTodo, removeTodo, updateTodo, completeTodo} = todoSlice.actions

export default todoSlice.reducer