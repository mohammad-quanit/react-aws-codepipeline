import { createStore, applyMiddleware } from "redux"
import ReduxThunk from "redux-thunk"

import rootReducer from "./Reducers/rootReducer"

export const middlewares = [ReduxThunk]

export const createStoreWithMiddlewares = applyMiddleware(...middlewares)(
  createStore
)

export const store = createStoreWithMiddlewares(rootReducer)
