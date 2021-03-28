import { persistStore, persistReducer } from "redux-persist";
import { rootReducer } from "./modules";

import { configureStore as baseConfigureStore, Store } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { Persistor } from "redux-persist/es/types";

const persistConfig = {
  key: "root-v1",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = (): { store: Store; persistor: Persistor } => {
  const store = baseConfigureStore({
    reducer: persistedReducer,
  });
  const persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
