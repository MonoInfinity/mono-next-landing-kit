import { http } from '.';

export const tripApi = {
    getTripById: async (id: string) => {
        const res = await http.get(`/trips/${id}`);
        return res;
    },
    deleteTripById: async (id: string) => {
        const res = await http.delete(`/trips/${id}`);
        return res;
    },
    createTrip: async (data: any) => {},
    updateTrip: async (data: any) => {}
};
