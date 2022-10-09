import { optionFeatures } from './../models/vehicle';
import { http } from '.';
import { PagingProps, ResponseList, Vehicle } from '../models';
import _get from 'lodash.get';
import { stringify } from 'query-string';

export interface IV1VehiclesCreate extends Pick<Vehicle, 'name' | 'status' | 'tonnage' | 'imageUrl' | 'vehicleTypeId' | 'registrationPlate'> {}
export interface IV1VehiclesUpdate
    extends Pick<Vehicle, 'vehicleId' | 'name' | 'status' | 'tonnage' | 'imageUrl' | 'vehicleTypeId' | 'registrationPlate'> {}
export interface IV1VehicleMe extends Pick<Vehicle, 'name' | 'status' | 'vehicleTypeId'>, PagingProps {}
export interface IV1Vehicle extends Pick<Vehicle, 'name' | 'status' | 'vehicleTypeId' | 'userId'>, PagingProps {}

export const vehicleApi = {
    v1GetMe: async (query: Partial<IV1VehicleMe>) => {
        const res = await http.get<ResponseList<Vehicle>>(`/vehicles/me?${stringify(query)}`);
        return _get(res, 'data');
    },
    v1Get: async (query: Partial<IV1VehicleMe>) => {
        const res = await http.get<ResponseList<Vehicle>>(`/vehicles?${stringify(query)}`);
        return _get(res, 'data');
    },
    v1Post: async (input: IV1VehiclesCreate) => {
        const res = await http.post(`/vehicles`, input);
        return _get(res, 'data');
    },
    v1Put: async (input: IV1VehiclesUpdate) => {
        const res = await http.put(`/vehicles`, input);
        return _get(res, 'data');
    },
    v1GetId: async (vehicleId: string) => {
        const res = await http.get<Vehicle>(`/vehicles/${vehicleId}`);
        const vehicle = _get(res, 'data') as Vehicle;
        vehicle.features = optionFeatures;
        return vehicle;
    },
    v1DeleteId: async (vehicleId: string) => {
        const res = await http.delete(`/vehicles/${vehicleId}`);
        return _get(res, 'data');
    },
    v1GetUserId: async (userId: string, query: Partial<IV1Vehicle>) => {
        const res = await http.get<ResponseList<Vehicle>>(`/vehicles/user/${userId}?${stringify(query)}`);
        return _get(res, 'data');
    },
};
