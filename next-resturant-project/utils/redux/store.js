"use client";
const { configureStore } = require("@reduxjs/toolkit");
const { cartReducer } = require("./slices/cartSlice");
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, cartReducer);
export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    shoppingCart: persistedReducer,
  },
});
export const persistor = persistStore(store);
