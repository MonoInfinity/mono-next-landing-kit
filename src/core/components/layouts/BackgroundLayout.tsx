import * as React from 'react';

interface BackgroundLayoutProps extends React.PropsWithChildren {}

const BackgroundLayout: React.FunctionComponent<BackgroundLayoutProps> = ({ children }) => {
    return (
        <div className="absolute top-0 left-0 w-full">
            <div className="relative w-full h-full">
                <div className="absolute top-0 left-0 w-full h-full dark:bg-black">
                    <div className="w-full h-full dark:bg-blue-800/20 ">
                        <div className="relative h-full dark:bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl"></div>
                    </div>
                </div>
                <div className="pt-24">{children}</div>
            </div>
        </div>
    );
};

export default BackgroundLayout;
