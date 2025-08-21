import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import userReducer from './features/userSlice';
import addressReducer from './features/addressSlice';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';


const rootReducer= combineReducers({
    user:userReducer,
    address: addressReducer, // Assuming you have an addressReducer defined
})

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['user','address']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store=configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck:false,
        }),
});
export const persistor = persistStore(store);

export type RootState= ReturnType<typeof store.getState>;
export type AppDispatch= typeof store.dispatch;