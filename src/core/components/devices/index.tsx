import React, { HTMLAttributes, PropsWithChildren, useEffect } from 'react';
import _clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useWindowDimensions } from '../../hooks/useWindowDimension';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper';

const content = [
    {
        name: 'Cyber One',
        imageUrl: '/assets/images/slide-1.jpg',
        categories: ['NextJS', 'Micro Service'],
    },
    {
        name: 'Equo VN',
        imageUrl: '/assets/images/slide-2.jpg',
        categories: ['cate1', 'cate2', 'cate3'],
    },
    {
        name: 'The Hood',
        imageUrl: '/assets/images/slide-3.jpg',
        categories: ['cate1', 'cate2', 'cate3'],
    },
    {
        name: 'Cyber Core',
        imageUrl: '/assets/images/slide-4.jpg',
        categories: ['cate1', 'cate2', 'cate3'],
    },
    {
        name: 'Trip 2',
        imageUrl: '/assets/images/slide-5.jpg',
        categories: ['cate1', 'cate2', 'cate3'],
    },
];

interface DevicesProps extends HTMLAttributes<HTMLDivElement>, PropsWithChildren {
    defaultSize?: DeviceType;
    setSize?: (size: DeviceType) => void;
    delay?: 3000;
}
export enum DeviceType {
    Laptop = 'laptop',
    Mobile = 'mobile',
    Tablet = 'tablet',
}

export const Devices: React.FunctionComponent<DevicesProps> = ({ defaultSize, setSize, delay }) => {
    const [slidesPerView, setSlidesPerView] = React.useState(1);
    const [screenSize, setScreenSize] = React.useState<DeviceType>(defaultSize || DeviceType.Mobile);

    React.useEffect(() => {
        if (screenSize === DeviceType.Laptop) {
            setSlidesPerView(5);
            return;
        }

        if (screenSize === DeviceType.Tablet) {
            setSlidesPerView(3);
            return;
        }
        setSlidesPerView(1);
    }, [screenSize]);

    useEffect(() => {
        if (!defaultSize) {
            const timeOutId = setInterval(() => {
                setScreenSize((pre) =>
                    pre === DeviceType.Laptop ? DeviceType.Tablet : pre === DeviceType.Tablet ? DeviceType.Mobile : DeviceType.Laptop
                );
            }, 3000);
            return () => {
                clearInterval(timeOutId);
            };
        }
    }, [defaultSize]);

    useEffect(() => {
        if (setSize) {
            setSize(screenSize);
        }
    }, [screenSize]);

    return (
        <div className="relative z-10 flex flex-col items-center justify-center p-4 space-y-3 w-fit">
            <div
                className={_clsx(
                    ` bg-gray-500 duration-300 rounded-3xl relative  before:content-[''] before:absolute before:bg-white before:rounded-[30px] before:-z-0 before:-inset-3 before:shadow-2xl `,
                    {
                        'h-[512px] w-[668px] ': screenSize === DeviceType.Laptop,
                        'h-[450px] w-[400px] ': screenSize === DeviceType.Tablet,
                        'h-[430px] w-[250px] ': screenSize === DeviceType.Mobile,
                    }
                )}
            >
                <div className="absolute z-10 w-32 h-5 -translate-x-1/2 bg-white left-1/2 rounded-bl-xl rounded-br-xl">
                    <div className="absolute h-1/4 w-[45%] bg-[#f2f2f2] rounded-[100vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[inset_0_0_2px_rgba(0,0,0,0.5)]"></div>
                    <div className="absolute right-[10px] w-3 h-3 bg-black rounded-full top-1/2 -translate-y-1/2 before:content-[''] before:absolute before:rounded-full before:w-2 before:h-2 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-[#001f5c]"></div>
                </div>
                <div className="absolute top-0 left-0 z-0 w-full h-full overflow-hidden bg-gray-900 rounded-3xl">
                    <div className="flex items-center justify-between w-full px-4 py-4 bg-gray-700 ">
                        <div className="flex items-center h-8 space-x-2 ">
                            <div className="h-4">
                                <img src="/assets/images/mono-logo-dark.png" className="h-full" />
                            </div>
                            <p
                                className={_clsx('text-[#FDFBF9] text-lg font-semibold  ', {
                                    block: screenSize === DeviceType.Laptop,
                                    hidden: screenSize === DeviceType.Tablet,
                                    'hidden ': screenSize === DeviceType.Mobile,
                                })}
                            >
                                Mono Infinity
                            </p>
                        </div>
                        {screenSize === DeviceType.Laptop && (
                            <ul className="flex space-x-8 text-sm font-semibold ">
                                <li className="duration-300 cursor-pointer hover:text-violet-500">Contact</li>
                                <li className="duration-300 cursor-pointer hover:text-violet-500">Home</li>
                                <li className="duration-300 cursor-pointer hover:text-violet-500">About</li>
                            </ul>
                        )}
                        {screenSize === DeviceType.Tablet && (
                            <div className="space-y-1">
                                <div className="w-6 h-0.5 bg-gray-300"></div>
                                <div className="w-6 h-0.5 bg-gray-300"></div>
                                <div className="w-6 h-0.5 bg-gray-300"></div>
                            </div>
                        )}
                        {screenSize === DeviceType.Mobile && (
                            <div className="space-y-1">
                                <div className="w-6 h-0.5 bg-gray-300"></div>
                                <div className="w-6 h-0.5 bg-gray-300"></div>
                                <div className="w-6 h-0.5 bg-gray-300"></div>
                            </div>
                        )}
                    </div>
                    <div className="px-4 py-4 space-y-4">
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={slidesPerView}
                            loop={true}
                            autoplay={{ delay: 300, pauseOnMouseEnter: true, disableOnInteraction: false }}
                            coverflowEffect={{
                                rotate: 20,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                            }}
                            pagination={true}
                            modules={[EffectCoverflow, Pagination, Autoplay]}
                            className="w-full"
                        >
                            {content.map((item, index) => (
                                <SwiperSlide key={`${item.name}-${index}`}>
                                    <div
                                        className={_clsx(' w-full flex flex-col rounded-2xl overflow-hidden border-violet-600 border ', {
                                            'min-w-[200px] h-[150px]': screenSize === DeviceType.Laptop,
                                            'min-w-[200px] h-[100px]': screenSize === DeviceType.Tablet,
                                            'min-w-[150px] h-[200px]': screenSize === DeviceType.Mobile,
                                        })}
                                    >
                                        <div className="bg-slate-700 h-80 animate-pulse"></div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        {screenSize !== DeviceType.Mobile && (
                            <div className="w-full mx-auto rounded-md ">
                                <div className="flex justify-center space-x-2 animate-pulse">
                                    <div
                                        className={_clsx('col-span-2 rounded bg-slate-700', {
                                            'h-40 w-32': screenSize === DeviceType.Laptop,
                                            'h-24 w-24': screenSize === DeviceType.Tablet,
                                        })}
                                    ></div>
                                    <div
                                        className={_clsx('col-span-2 rounded bg-slate-700', {
                                            'h-40 w-32': screenSize === DeviceType.Laptop,
                                            'h-24 w-24': screenSize === DeviceType.Tablet,
                                        })}
                                    ></div>
                                    <div
                                        className={_clsx('col-span-2 rounded bg-slate-700', {
                                            'h-40 w-32': screenSize === DeviceType.Laptop,
                                            'h-24 w-24': screenSize === DeviceType.Tablet,
                                        })}
                                    ></div>

                                    {screenSize === DeviceType.Laptop && (
                                        <>
                                            <div className="w-32 h-40 col-span-2 rounded bg-slate-700"></div>
                                            <div className="w-32 h-40 col-span-2 rounded bg-slate-700"></div>
                                        </>
                                    )}
                                </div>
                            </div>
                        )}
                        <div
                            className={_clsx('grid ', {
                                'grid-cols-2 gap-8': screenSize === DeviceType.Laptop,
                                'grid-cols-1 gap-4': screenSize === DeviceType.Tablet,
                                'grid-cols-1  ': screenSize === DeviceType.Mobile,
                            })}
                        >
                            <div className="w-full max-w-sm mx-auto rounded-md shadow">
                                <div className="flex space-x-4 animate-pulse">
                                    <div className="w-10 h-10 rounded-full bg-slate-700"></div>
                                    <div className="flex-1 py-1 space-y-6">
                                        <div className="h-2 rounded bg-slate-700"></div>
                                        <div className="space-y-3">
                                            <div className="grid grid-cols-3 gap-4">
                                                <div className="h-2 col-span-2 rounded bg-slate-700"></div>
                                                <div className="h-2 col-span-1 rounded bg-slate-700"></div>
                                            </div>
                                            <div className="h-2 rounded bg-slate-700"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full max-w-sm mx-auto rounded-md shadow">
                                <div className="flex space-x-4 animate-pulse">
                                    <div className="w-10 h-10 rounded-full bg-slate-700"></div>
                                    <div className="flex-1 py-1 space-y-6">
                                        <div className="h-2 rounded bg-slate-700"></div>
                                        <div className="space-y-3">
                                            <div className="grid grid-cols-3 gap-4">
                                                <div className="h-2 col-span-2 rounded bg-slate-700"></div>
                                                <div className="h-2 col-span-1 rounded bg-slate-700"></div>
                                            </div>
                                            <div className="h-2 rounded bg-slate-700"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {screenSize === DeviceType.Laptop && (
                <div className={`  h-4 bg-white rounded relative w-[688px]`}>
                    <div className="absolute bottom-0 block h-2 -translate-x-1/2 bg-gray-400 rounded-lg w-28 left-1/2"></div>
                </div>
            )}
        </div>
    );
};
