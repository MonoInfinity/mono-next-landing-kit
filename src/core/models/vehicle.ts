import { Company } from './company';
import { User, optionsUserStatus } from './user';
import { VehicleType } from './vehicleType';

export enum VehicleStatus {
    AVAILABLE = 'AVAILABLE',
    UNAVAILABLE = 'UNAVAILABLE',
    INACTIVE = 'INACTIVE',
}

export interface Vehicle {
    vehicleId: string;
    name: string;
    imageUrl: string;
    registrationPlate: string;
    status: VehicleStatus;
    createAt: string;
    updateAt: string;
    vehicleTypeId: string;
    vehicleType: VehicleType;
    tonnage: number;
    userId: string;
    user: User;
    companyId: string;
    company: Company;
    features: Feature[];
}

export interface Feature {
    imageUrl: string;
    name: string;
}

export const optionFeatures: Array<Feature> = [
    {
        name: 'Bản đồ',
        imageUrl: 'https://n1-cstg.mioto.vn/v4/p/m/icons/features/map.png',
    },
    {
        name: 'Bluetooth',
        imageUrl: 'https://n1-cstg.mioto.vn/v4/p/m/icons/features/bluetooth.png',
    },
    {
        name: 'Camera hành trình',
        imageUrl: 'https://n1-cstg.mioto.vn/v4/p/m/icons/features/dash_camera.png',
    },
    {
        name: 'Camera lùi',
        imageUrl: 'https://n1-cstg.mioto.vn/v4/p/m/icons/features/reverse_camera.png',
    },

    { name: 'Cửa sổ trời', imageUrl: 'https://n1-cstg.mioto.vn/v4/p/m/icons/features/sunroof.png' },
    { name: 'Cảnh báo tốc độ', imageUrl: 'https://n1-cstg.mioto.vn/v4/p/m/icons/features/head_up.png' },
    { name: 'Định Vị GPS', imageUrl: 'https://n1-cstg.mioto.vn/v4/p/m/icons/features/gps.png' },
    { name: 'Khe cắm USB', imageUrl: 'https://n1-cstg.mioto.vn/v4/p/m/icons/features/usb.png' },
    { name: 'Lớp dự phòng', imageUrl: 'https://n1-cstg.mioto.vn/v4/p/m/icons/features/spare_tire.png' },
    { name: 'Màng hình LCD', imageUrl: 'https://n1-cstg.mioto.vn/v4/p/m/icons/features/dvd.png' },
    { name: 'Thu phí không dừng', imageUrl: 'https://n1-cstg.mioto.vn/v4/p/m/icons/features/etc.png' },
    { name: 'Túi khí', imageUrl: 'https://n1-cstg.mioto.vn/v4/p/m/icons/features/airbags.png' },
];

export const optionsVehicleStatus = [
    {
        label: 'Available',
        value: VehicleStatus.AVAILABLE,
        origin: VehicleStatus.AVAILABLE,
    },
    {
        label: 'Unavailable',
        value: VehicleStatus.UNAVAILABLE,
        origin: VehicleStatus.UNAVAILABLE,
    },
    {
        label: 'Inactive',
        value: VehicleStatus.INACTIVE,
        origin: VehicleStatus.INACTIVE,
    },
];
