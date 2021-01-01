import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todosReducer from '../features/todo/TodoSlice'


export default configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer
  },
});
