import { compose, createStore, applyMiddleware } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import thunk from "redux-thunk"

import { rootReducer } from "./root-reducer"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["portfolio"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunk]

const composedEnhancers = compose(applyMiddleware(...middlewares))

export const store = createStore(persistedReducer, composedEnhancers)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)