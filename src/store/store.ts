import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';

// Example: Import your reducers here
// import counterReducer from './slices/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
