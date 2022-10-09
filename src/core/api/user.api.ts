import { Company, User } from '../models';
import { http } from '.';
import { jsonToFormData } from '../utils/object.helper';
import _get from 'lodash.get';

export interface IV1UserUpdateMe extends Pick<User, 'name' | 'address' | 'phone' | 'avatarUrl'> {}
export interface IV1UserCompanyRegister extends Pick<Company, 'address' | 'hotline' | 'description' | 'lat' | 'lng'> {
    companyName: string;
}

export const userApi = {
    v1GetMe: async () => {
        const res = await http.get<User>('/users/me');
        return _get(res, 'data');
    },
    v1PutMe: async (data: IV1UserUpdateMe) => {
        const res = await http.put<User>('/users/me', jsonToFormData(data));
        return _get(res, 'data');
    },
    v1GetId: async (userId: string) => {
        const res = await http.get<User>(`/users/${userId}`);
        return _get(res, 'data');
    },
    v1PostCompanyRegister: async (data: IV1UserCompanyRegister) => {
        const res = await http.post<User>('/users/company/register', data);
        return _get(res, 'data');
    }
};
