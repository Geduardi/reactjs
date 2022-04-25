import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {profileReducer} from "./profile/reducer";
import {chatsReducer} from "./chats/reducer";
import {messagesReducer} from "./messages/reducer";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";
import createSagaMiddleware from 'redux-saga'

const persistConfig =  {
    key: "Messenger",
    storage
}
const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
})

const persistedReducer = persistReducer(persistConfig,rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const saga = createSagaMiddleware();

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(saga))
)

export const persistor = persistStore(store);