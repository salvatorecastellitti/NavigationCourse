import { configureStore, ConfigureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favorites";

export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer,
  },
});
