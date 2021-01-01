import { createSlice } from "@reduxjs/toolkit";

let todoId = 1;

export const slice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    create: (state, action) => {
      const { payload } = action;

      state.push({
        id: todoId,
        description: payload,
        isComplete: false,
      });
      todoId++;
    },
    edit: (state, action) => {
      const { id, description } = action.payload;

      const todoToEdit = state.find((todo) => todo.id === id);

      if (todoToEdit) {
        todoToEdit.description = description;
      }
    },
    toggleComplete: (state, action) => {
      const { payload } = action;

      const todoTotoggle = state.find((todo) => todo.id === payload);

      if (todoTotoggle) {
        todoTotoggle.isComplete = !todoTotoggle.isComplete;
      }
    },
    remove: (state, action) => {
      const { payload } = action;

      const index = state.findIndex((todo) => todo.id === payload);

      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { create, edit, toggleComplete, remove } = slice.actions;

export default slice.reducer