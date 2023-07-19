import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "todos",
  initialState: { todos: ["react.js", "react-redux"], completedTodos: [] },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = action.payload;
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action) => {
      const indexToBeDeleted = action.payload;
      state.completedTodos = state.completedTodos.filter(
        (todo, index) => index !== indexToBeDeleted
      );
    },
    markTodo: (state, action) => {
      const indexToBeMarked = action.payload;
      const markedTodo = state.todos[indexToBeMarked];
      state.todos = state.todos.filter((todo, i) => {
        return i !== indexToBeMarked;
      });
      state.completedTodos.push(markedTodo);
    },
  },
});
export const { addTodo, deleteTodo, markTodo } = todoSlice.actions;
export default todoSlice.reducer;
export const completedTodoSelector = (state) => state.todos.completedTodos;
export const todosSelector = (state) => state.todos.todos;
