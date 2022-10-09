//@ts-nocheck
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga';
import { apiReducer, ApiState } from './api';
import { userReducer, UserState } from './user';
import rootSaga from './saga';
import { useSelector } from 'react-redux';

export interface RootState {
    api: ApiState;
    user: UserState;
}

const sageMiddleware = createSagaMiddleware();
const middleware = [sageMiddleware];

const reducers = combineReducers<RootState>({
    api: apiReducer,
    user: userReducer
});

export const store = configureStore({
    reducer: reducers,
    middleware,
    devTools: process.env.NODE_ENV !== 'production'
});

sageMiddleware.run(rootSaga);

export const useStoreApi: () => ApiState = () => useSelector<RootState, ApiState>((state) => state.api);
export const useStoreUser: () => UserState = () => useSelector<RootState, UserState>((state) => state.user);
