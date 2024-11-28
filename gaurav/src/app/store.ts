import { combineReducers, configureStore } from "@reduxjs/toolkit";
import punchDataReducer from "../redux/reducers.ts"
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
    data: punchDataReducer
})
const persistConfig = {
    key: 'root',
    storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
    reducer: persistedReducer
});
export const persistor = persistStore(store);
export default store;