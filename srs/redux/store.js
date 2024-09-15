import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userReducer, postsReducer } from "./slice";
// import rootReducer from './rootReducer';

const persistUserConfig = {
    key: "user",
    storage: AsyncStorage,
};

const persistedUserReducer = persistReducer(persistUserConfig, userReducer);

const persistPostsConfig = {
    key: "posts",
    storage: AsyncStorage,
};
const persistedPostsReducer = persistReducer(persistPostsConfig, postsReducer);

export const store = configureStore({
    reducer: {
        user: persistedUserReducer,
        posts: persistedPostsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);