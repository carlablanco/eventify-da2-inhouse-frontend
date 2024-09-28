// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // Ajusta la ruta según tu estructura de carpetas

const store = configureStore({
  reducer: {
    auth: authReducer
    // otros reducers si los tienes
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
