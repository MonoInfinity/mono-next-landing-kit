import { useRouter } from 'next/router';
import * as React from 'react';
import { allRole } from '../../models';
import { ProtectWrapper, UnProtectWrapper } from '../wrappers';

interface DynamicLayoutProps {
    children: React.ReactNode;
}

export const DynamicLayout: React.FC<DynamicLayoutProps> = ({ children }) => {
    const router = useRouter();

    return <>{children}</>;
};
