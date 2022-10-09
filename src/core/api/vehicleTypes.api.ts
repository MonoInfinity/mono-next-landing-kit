import { stringify } from 'query-string';
import { VehicleType } from '../models';
import _get from 'lodash.get';
import { PagingProps, ResponseList } from '../models/interface';
import { http } from './http';

export interface IV1VehicleType extends PagingProps, Pick<VehicleType, 'name' | 'status'> {}
export interface IV1VehicleTypeCreate extends Pick<VehicleType, 'name' | 'description' | 'pricePerKm' | 'defaultPrice' | 'status' | 'imageUrl'> {}
export interface IV1VehicleTypeUpdate extends Pick<VehicleType, 'vehicleTypeId' | 'name' | 'description' | 'pricePerKm' | 'defaultPrice' | 'status' | 'imageUrl'> {}

export const vehicleTypesApi = {
    v1Put: async (data: IV1VehicleTypeUpdate) => {
        const res = await http.put<VehicleType>(`/vehicle-types`, data);
        return _get(res, 'data');
    },
    v1Get: async (query: Partial<IV1VehicleType>) => {
        const res = await http.get<ResponseList<VehicleType>>(`/vehicle-types?${stringify(query)}`);
        return _get(res, 'data');
    },
    v1Post: async (input: IV1VehicleTypeCreate) => {
        const res = await http.post(`/vehicle-types`, input);
        return _get(res, 'data');
    },
    v1DeleteId: async (vehicleTypeId: string) => {
        const res = await http.delete(`/vehicle-types/${vehicleTypeId}`);
        return _get(res, 'data');
    },
    v1GetId: async (id: string) => {
        const res = await http.get<VehicleType>(`/vehicle-types/${id}`);
        return _get(res, 'data');
    }
};
