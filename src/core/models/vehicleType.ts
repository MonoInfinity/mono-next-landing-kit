export enum VehicleTypeStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
}

export interface VehicleType {
    vehicleTypeId: string;
    name: string;
    description: string;
    createAt: string;
    imageUrl: string;
    updateAt: string;
    pricePerKm: number;
    defaultPrice: number;
    status: VehicleTypeStatus;
}

export const optionsVehicleTypeStatus = [
    { value: VehicleTypeStatus.ACTIVE, label: 'Active', origin: VehicleTypeStatus.ACTIVE },
    { value: VehicleTypeStatus.INACTIVE, label: 'Inactive', origin: VehicleTypeStatus.INACTIVE },
];
