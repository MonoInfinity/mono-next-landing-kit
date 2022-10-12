import { useState, useEffect } from 'react';

function getWindowDimensions() {
    if (typeof window === 'undefined')
        return {
            width: 0,
            height: 0,
            scrollTo: () => {
                return;
            },
        };

    const { innerWidth: width, innerHeight: height, scrollTo } = window;
    return {
        width,
        height,

        scrollTo,
    };
}

export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}
