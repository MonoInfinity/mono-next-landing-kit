import { stringify } from 'query-string';

export const routes = {
    auth: {
        login: () => '/auth/login',
        register: () => '/auth/register',
    },
    account: {
        edit: () => '/account/edit',
        payment: () => '/account/payment',
        paymentId: (id: string) => `/account/payment/${id}`,
    },
    dashboard: {
        users: {
            list: () => '/dashboard/user',
        },
        vehicles: {
            list: () => '/dashboard/vehicle',
        },
        company: {
            list: () => '/dashboard/company',
        },
        vehicleType: {
            list: () => '/dashboard/vehicle-type',
        },
    },
    partner: {
        vehicles: {
            list: () => '/partner/vehicle',
            create: () => '/partner/vehicle/create',
            edit: (id: string) => `/partner/vehicle/edit/${id}`,
        },
        register: {
            info: () => '/partner/register-information',
            detail: () => '/partner/register-detail',
            form: () => '/partner/register-form',
        },
    },
    trip: {
        search: () => '/trip',
        book: (vehicleId: string, filters: Record<string, any> = {}) => `/trip/book?${stringify({ vehicleId, ...filters })}`,
    },
    vehicle: {
        getById: (id: string, filters: Record<string, any> = {}) => `/vehicle/${id}?${stringify(filters)}`,
    },
    home: () => '/',
};
