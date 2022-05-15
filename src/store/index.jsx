import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {profileReducer} from "./profile/reducer";
import {chatsReducer} from "./chats/reducer";
import {messagesReducer} from "./messages/reducer";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from "./sagas";
import {articlesReducer} from "./articles/reducer";

const persistConfig = {
    key: "Messenger",
    storage,
    blacklist:['articles', 'profile', 'chats', 'messages']
}
const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
    articles: articlesReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);