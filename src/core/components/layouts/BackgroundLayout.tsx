import * as React from 'react';

interface BackgroundLayoutProps extends React.PropsWithChildren {}

const BackgroundLayout: React.FunctionComponent<BackgroundLayoutProps> = ({ children }) => {
    return (
        <div className="relative h-full w-full">
            <div className="bg-black top-0 left-0 h-full w-full absolute">
                <div className="bg-blue-800/20 h-screen w-full ">
                    <div className="bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 h-full relative blur-3xl -z-"></div>
                </div>
            </div>
            <div className="pt-40">{children}</div>
        </div>
    );
};

export default BackgroundLayout;
