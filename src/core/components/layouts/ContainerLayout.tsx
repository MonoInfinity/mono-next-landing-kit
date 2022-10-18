import React, { HTMLAttributes, PropsWithChildren } from 'react';
import { useTheme } from 'next-themes';

interface ContainerLayoutProps extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {}

export const ContainerLayout: React.FunctionComponent<ContainerLayoutProps> = ({ children, className = 'w-full ', ...rest }) => {
    return (
        <div className="flex justify-center">
            <div className={className} {...rest}>
                {children}
            </div>
        </div>
    );
};
