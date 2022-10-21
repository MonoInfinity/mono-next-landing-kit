import * as React from 'react';

interface BackgroundLayoutProps extends React.PropsWithChildren {}

const BackgroundLayout: React.FunctionComponent<BackgroundLayoutProps> = ({ children }) => {
    return (
        <div className="absolute top-0 left-0 w-full">
            <div className="relative w-full h-full">
                <div className="absolute top-0 left-0 w-full h-full bg-white dark:bg-black">
                    <div className="w-full h-full dark:bg-blue-800/20">
                        <div className="relative h-full bg-gradient-to-r dark:from-indigo-500/20 dark:via-purple-500/20 dark:to-pink-500/20 from-indigo-200/70 via-purple-200/70 to-pink-200/70 blur-3xl"></div>
                    </div>
                </div>
                <div className="pt-24">{children}</div>
            </div>
        </div>
    );
};

export default BackgroundLayout;
