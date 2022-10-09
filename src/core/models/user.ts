import { Company } from './company';
import { Wallet } from './wallet';

export enum UserStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
}

export enum UserRole {
    ADMIN = 'ADMIN',
    USER = 'USER',
}

export interface User {
    userId: string;
    address: string;
    phone: string;
    avatarUrl: string;
    name: string;
    password: string;
    email: string;
    isVerified: boolean;
    googleId: string;
    createAt: string;

    updateAt: string;

    status: UserStatus;
    role: UserRole;
    wallets: Wallet[];
    companies: Company[];
}

export const optionsUserRole = [
    { value: UserRole.ADMIN, label: 'Admin', origin: UserRole.ADMIN },
    {
        value: UserRole.USER,
        label: 'User',
        origin: UserRole.USER,
    },
];

export const optionsUserStatus = [
    { value: UserStatus.ACTIVE, label: 'Active', origin: UserStatus.ACTIVE },
    { value: UserStatus.INACTIVE, label: 'Inactive', origin: UserStatus.INACTIVE },
];
export const allRole = [UserRole.ADMIN, UserRole.USER];
