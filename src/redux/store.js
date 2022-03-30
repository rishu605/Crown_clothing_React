import { applyMiddleware, createStore } from "redux";
import logger from 'redux-logger'
import {persistStore} from 'redux-persist'

import rootReducer from "./root-reducer";


const store = createStore(rootReducer, applyMiddleware(logger))
const persistor = persistStore(store)
export {store, persistor}