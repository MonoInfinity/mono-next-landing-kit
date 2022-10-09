import { User } from './user';

export enum CompanyStatus {
    VERIFY = 'VERIFY',
    NOT_VERIFY = 'NOT_VERIFY',
}

export interface Company {
    companyId: string;
    name: string;
    email: string;
    hotline: string;
    address: string;
    description: string;
    createAt: string;
    updateAt: string;
    status: string;
    userId: string;
    user: User;
    lat: number;
    lng: number;
}

export const optionsCompanyStatus = [
    { value: CompanyStatus.VERIFY, label: 'Verify', origin: CompanyStatus.VERIFY },
    { value: CompanyStatus.NOT_VERIFY, label: 'Not Verify', origin: CompanyStatus.NOT_VERIFY },
];
