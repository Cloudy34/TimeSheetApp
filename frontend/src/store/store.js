import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "state";
import rootReducer from "./reducers";
import { api } from "state/api";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer,
    rootReducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});
setupListeners(store.dispatch);

export default store;
