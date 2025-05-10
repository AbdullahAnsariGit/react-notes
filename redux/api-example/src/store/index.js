// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';  // default is localStorage
import dataReducer from '../store/dataSlice';
import { combineReducers } from 'redux';

// Redux Persist config
const persistConfig = {
  key: 'root', // Key to identify the storage
  storage, // Local storage is used here
};

// Combine reducers if you have more than one reducer
const rootReducer = combineReducers({
  data: dataReducer,
});

// Persist the reducer with the config
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

// Create a persistor for persisting the store
export const persistor = persistStore(store);
