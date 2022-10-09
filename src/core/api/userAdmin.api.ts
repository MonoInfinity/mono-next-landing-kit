import { Company } from './../models';
import { stringify } from 'query-string';
import { User } from '../models';
import { PagingProps, ResponseList } from '../models/interface';
import { http } from './http';
import _get from 'lodash.get';

export interface IV1AdminUsers extends Pick<User, 'role' | 'status' | 'name'>, PagingProps {}
export interface IV1UserCompanies extends PagingProps {}
export interface IV1UserCompany extends Pick<Company, 'companyId' | 'status'> {}

export const userAdminApi = {
    v1GetUsers: async (query: Partial<IV1AdminUsers>) => {
        const res = await http.get<ResponseList<User>>(`/admin/users?${stringify(query)}`);
        return _get(res, 'data');
    },
    v1GetUsersCompanies: async (query: Partial<IV1UserCompanies>) => {
        const res = await http.get<ResponseList<Company>>(`/admin/users/companies?${stringify(query)}`);
        return _get(res, 'data');
    },
    v1PutUpdateUserCompany: async (input: IV1UserCompany) => {
        const res = await http.put<Company>(`/admin/users/company`, input);
        return _get(res, 'data');
    }
};
