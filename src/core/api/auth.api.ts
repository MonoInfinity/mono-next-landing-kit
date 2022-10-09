import { http } from '.';
import { User } from '../models';
import _get from 'lodash.get';

export interface IV1AuthLogin extends Pick<User, 'email' | 'password'> {}
export interface IV1AuthRegister extends Pick<User, 'email' | 'password' | 'name'> {
    confirmPassword: string;
}

export const authApi = {
    vGetGoogle: async (token: string) => {
        const res = await http.get(`/auth/google?credential=${token}`);
        return _get(res, 'data.token', '') as string;
    },
    v1PostLogin: async (input: IV1AuthLogin) => {
        const res = await http.post('/auth/login', input);
        return _get(res, 'data.token', '');
    },
    v1PostRegister: async (input: IV1AuthRegister) => {
        const res = await http.post('/auth/register', input);
        return _get(res, 'data.token', '');
    },
};
