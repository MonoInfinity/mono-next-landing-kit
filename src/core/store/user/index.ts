import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

import { User, UserRole, UserStatus } from '../../models';

export interface UserState extends User {
    isLogin: boolean;
    isAuth: boolean;
}

const initialState: UserState = {
    address: '',
    avatarUrl: '',
    createAt: '',
    email: '',
    googleId: '',
    isVerified: true,
    name: '',
    password: '',
    phone: '',
    role: UserRole.USER,
    status: UserStatus.ACTIVE,
    updateAt: '',
    userId: '',
    wallets: [],
    isLogin: false,
    isAuth: false,
    companies: [],
};

const reducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetState: () => ({ ...initialState }),
        autoLogin: (state) => ({ ...state, isLogin: false }),
        autoLoginSuccess: (state, { payload }: PayloadAction<User>) => ({ ...state, ...payload, isLogin: true, isAuth: true }),
        autoLoginFailed: (state, { payload }: PayloadAction<null>) => ({ ...state, isLogin: true, isAuth: false }),
    },
});
export const userActions = {
    ...reducer.actions,
};
export const userReducer = reducer.reducer;

export const useSelectUser = () =>
    createSelector(
        (state: RootState) => state.user,
        (user) => user
    );
