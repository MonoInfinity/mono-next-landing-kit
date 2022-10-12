import * as React from 'react';
import { ContainerLayout } from '../src/core/components/layouts/ContainerLayout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper';
import { useWindowDimensions } from '../src/core/hooks/useWindowDimension';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
    const [slidesPerView, setSlidesPerView] = React.useState(1);

    const { width } = useWindowDimensions();

    React.useEffect(() => {
        if (width > 1024) {
            setSlidesPerView(5);
            return;
        }

        if (width > 640) {
            setSlidesPerView(3);
            return;
        }
        setSlidesPerView(1);
    }, [width]);

    return (
        <ContainerLayout>
            <div className="relative min-h-screen flex w-full text-white flex-col items-center space-y-12 lg:space-y-20 md:space-y-16 sm:space-y-14">
                <div className="flex flex-col items-center">
                    <div className="relative h-24 w-24  rounded-lg rotate-12">
                        <div className="w-full rotate-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute">
                            <img alt="" src="/assets/gif/logo-gif.gif" className="object-center" />
                        </div>
                        <div className="w-full rotate-[120deg] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute">
                            <img alt="" src="/assets/gif/logo-gif.gif" className="object-center" />
                        </div>
                        <div className="w-full rotate-[240deg] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute">
                            <img alt="" src="/assets/gif/logo-gif.gif" className="object-center" />
                        </div>
                    </div>
                    <div className="flex items-center sm:space-x-2 space-x-0 justify-center">
                        <div className="flex-col text-4xl md:text-2xl font-semibold sm:flex hidden">
                            <h1>Hello there!</h1>
                            <div>Welcome to</div>
                        </div>
                        <h1 className="font-semibold md:text-8xl sm:text-6xl text-4xl ">Mono Infinity</h1>
                    </div>
                </div>

                <div className="relative w-full px-4 sm:px-0">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        // centeredSlides={true}
                        slidesPerView={slidesPerView}
                        loop={true}
                        coverflowEffect={{
                            rotate: 20,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="w-full"
                    >
                        <SwiperSlide>
                            <div className="h-[480px] bg-red-200 w-full flex flex-col rounded-2xl overflow-hidden">
                                <div className="bg-blue-200 h-full"></div>
                                <div className="bg-violet-800 py-6 flex items-start px-4 space-x-2">
                                    <div className="bg-gray-900 h-12 w-12 rounded-full"></div>
                                    <div className="flex flex-col space-y-1">
                                        <p>Name</p>
                                        <div className=" grid-cols-3 gap-2 grid">
                                            <div className="text-sm p-1 border-2 rounded-2xl">Cate 1</div>
                                            <div className="text-sm p-1 border-2 rounded-2xl">Cate 2</div>
                                            <div className="text-sm p-1 border-2 rounded-2xl">Cate 3</div>
                                            <div className="text-sm p-1 border-2 rounded-2xl">Cate 4</div>
                                            <div className="text-sm p-1 border-2 rounded-2xl">Cate 5</div>
                                            <div className="text-sm p-1 border-2 rounded-2xl">Cate 6</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="h-[480px] bg-red-200 w-full flex flex-col rounded-2xl overflow-hidden">
                                <div className="bg-blue-200 h-full"></div>
                                <div className="bg-violet-800 py-6 flex items-start px-4 space-x-2">
                                    <div className="bg-gray-900 h-12 w-12 rounded-full"></div>
                                    <div className="flex flex-col space-y-1">
                                        <p>Name</p>
                                        <div className="grid grid-cols-3 gap-2">
                                            <div className="text-sm p-1 border-2 rounded-2xl">Cate 1</div>
                                            <div className="text-sm p-1 border-2 rounded-2xl">Cate 2</div>
                                            <div className="text-sm p-1 border-2 rounded-2xl">Cate 3</div>
                                            <div className="text-sm p-1 border-2 rounded-2xl">Cate 4</div>
                                            <div className="text-sm p-1 border-2 rounded-2xl">Cate 5</div>
                                            <div className="text-sm p-1 border-2 rounded-2xl">Cate 6</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="h-[480px] bg-red-200 w-full flex flex-col rounded-2xl overflow-hidden">
                                <div className="bg-blue-200 h-full"></div>
                                <div className="bg-violet-800 py-6 flex items-start px-4 space-x-2">
                                    <div className="bg-gray-900 h-12 w-12 rounded-full"></div>
                                    <div className="flex flex-col space-y-1">
                                        <p>Name</p>
                                        <div className="grid grid-cols-3 gap-2">
                                            <div className="text-sm p-1 border-2 rounded-2xl">Cate 1</div>
                                            <div className="text-sm p-1 border-2 rounded-2xl">Cate 2</div>
                                            <div className="text-sm p-1 border-2 rounded-2xl">Cate 3</div>
                                            <div className="text-sm p-1 border-2 rounded-2xl">Cate 4</div>
                                            <div className="text-sm p-1 border-2 rounded-2xl">Cate 5</div>
                                            <div className="text-sm p-1 border-2 rounded-2xl">Cate 6</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="h-[480px] bg-red-200 w-full flex flex-col rounded-2xl overflow-hidden">
                                <div className="bg-blue-200 h-full"></div>
                                <div className="bg-violet-800 py-6 flex items-start px-4 space-x-2">
                                    <div className="bg-gray-900 h-12 w-12 rounded-full"></div>
                                    <div className="flex flex-col space-y-1">
                                        <p>Name</p>
                                        <div className="grid grid-cols-3 gap-2">
                                            <div className="text-sm p-1 border-2 rounded-2xl">Cate 1</div>
                                            <div className="text-sm p-1 border-2 rounded-2xl">Cate 2</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="h-[480px] bg-red-200 w-full flex flex-col rounded-2xl overflow-hidden">
                                <div className="bg-blue-200 h-full"></div>
                                <div className="bg-violet-800 py-6 flex items-start px-4 space-x-2">
                                    <div className="bg-gray-900 h-12 w-12 rounded-full"></div>
                                    <div className="flex flex-col space-y-1">
                                        <p>Name</p>
                                        <div className="grid grid-cols-3 gap-2">
                                            <div className="text-sm p-1 border-2 rounded-2xl">Cate 1</div>
                                            <div className="text-sm p-1 border-2 rounded-2xl">Cate 2</div>
                                            <div className="text-sm p-1 border-2 rounded-2xl">Cate 3</div>
                                            <div className="text-sm p-1 border-2 rounded-2xl">Cate 4</div>
                                            <div className="text-sm p-1 border-2 rounded-2xl">Cate 5</div>
                                            <div className="text-sm p-1 border-2 rounded-2xl">Cate 6</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="h-[480px] bg-red-200 w-full flex flex-col rounded-2xl overflow-hidden">
                                <div className="bg-blue-200 h-full"></div>
                                <div className="bg-violet-800 py-6 flex items-start px-4 space-x-2">
                                    <div className="bg-gray-900 h-12 w-12 rounded-full"></div>
                                    <div className="flex flex-col space-y-1">
                                        <p>Name</p>
                                        <div className="grid grid-cols-3 gap-2">
                                            <div className="text-sm p-1 border-2 rounded-2xl">Cate 1</div>
                                            <div className="text-sm p-1 border-2 rounded-2xl">Cate 2</div>
                                            <div className="text-sm p-1 border-2 rounded-2xl">Cate 3</div>
                                            <div className="text-sm p-1 border-2 rounded-2xl">Cate 4</div>
                                            <div className="text-sm p-1 border-2 rounded-2xl">Cate 5</div>
                                            <div className="text-sm p-1 border-2 rounded-2xl">Cate 6</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <div>Project we working</div>
        </ContainerLayout>
    );
};

export default HomePage;
