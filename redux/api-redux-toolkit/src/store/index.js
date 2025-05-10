import { configureStore } from "@reduxjs/toolkit";
import userSlices from "./slices/userSlices";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
  //   whitelist: ['counter'], // Persist only the counter reducer
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, userSlices);

// Initialize store
export const store = configureStore({
  reducer: {
    users: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"], // Ignore redux-persist actions
      },
    }),
});

export const persistor = persistStore(store);
