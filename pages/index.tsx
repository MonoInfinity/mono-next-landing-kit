import * as React from 'react';
import { ContainerLayout } from '../src/core/components/layouts/ContainerLayout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper';
import { useWindowDimensions } from '../src/core/hooks/useWindowDimension';

interface HomePageProps {}

const content = [
    { name: 'Name 1', categories: ['NextJS', 'Micro Service', 'TailwindCSS', 'Firebase', 'NestJS'] },
    { name: 'Name 2', categories: ['cate1', 'cate2', 'cate3', 'cate4', 'cate 5'] },
    { name: 'Name 3', categories: ['cate1', 'cate2', 'cate3', 'cate4', 'cate 5'] },
    { name: 'Name 4', categories: ['cate1', 'cate2', 'cate3', 'cate4', 'cate 5'] },
    { name: 'Name 5', categories: ['cate1', 'cate2', 'cate3', 'cate4', 'cate 5'] },
];

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
                    <div className="flex items-center sm:space-x-2 space-x-0 justify-center">
                        <div className="relative h-28 w-28  rounded-lg rotate-12">
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
                        autoplay={{ delay: 3000, pauseOnMouseEnter: true, disableOnInteraction: false }}
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
                                <div className="min-w-[280px] h-[480px] w-full flex flex-col rounded-2xl overflow-hidden border-violet-600 border ">
                                    <div className="bg-gray-400 h-full"></div>
                                    <div className="bg-violet-900 py-6 flex items-start px-4 space-x-2 ">
                                        <div className="bg-gray-900 h-12 w-12 rounded-full flex-shrink-0"></div>
                                        <div className="flex flex-col space-y-1">
                                            <p>{item.name}</p>
                                            <div className="flex space-x-2 flex-wrap justify-start items-start">
                                                {item.categories.map((cate, index) => (
                                                    <div className="text-sm p-1 border-2 mb-2 rounded-2xl w-fit">{cate}</div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <div>Project we working</div>
        </ContainerLayout>
    );
};

export default HomePage;
