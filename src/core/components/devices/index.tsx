import React, { HTMLAttributes, PropsWithChildren } from 'react';

interface DevicesProps extends HTMLAttributes<HTMLDivElement>, PropsWithChildren {
    isLaptop?: boolean;
    laptopClassName?: string;
}

export const Devices: React.FunctionComponent<DevicesProps> = ({
    className = 'w-[248px] h-[538px]',
    children,
    isLaptop = false,
    laptopClassName = '',
}) => {
    return (
        <div className="relative flex flex-col items-center justify-center p-4 space-y-3 w-fit">
            <div
                className={`h-[538px] bg-gray-500 rounded-3xl relative ${className} before:content-[''] before:absolute before:bg-white before:rounded-[30px] before:-z-0 before:-inset-3 before:shadow-2xl `}
            >
                <div className="absolute z-10 w-32 h-5 -translate-x-1/2 bg-white left-1/2 rounded-bl-xl rounded-br-xl">
                    <div className="absolute h-1/4 w-[45%] bg-[#f2f2f2] rounded-[100vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[inset_0_0_2px_rgba(0,0,0,0.5)]"></div>
                    <div className="absolute right-[10px] w-3 h-3 bg-black rounded-full top-1/2 -translate-y-1/2 before:content-[''] before:absolute before:rounded-full before:w-2 before:h-2 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-[#001f5c]"></div>
                </div>
                <div className="absolute top-0 left-0 z-0 w-full h-full overflow-hidden rounded-3xl">{children}</div>
            </div>
            {isLaptop && (
                <div className={`md:w-[388px] w-[200px] h-4 bg-white rounded relative ${laptopClassName}`}>
                    <div className="absolute bottom-0 block h-2 -translate-x-1/2 bg-gray-400 rounded-lg w-28 left-1/2"></div>
                </div>
            )}
        </div>
    );
};
