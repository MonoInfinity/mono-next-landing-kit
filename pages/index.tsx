import * as React from 'react';
import { ContainerLayout } from '../src/core/components/layouts/ContainerLayout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper';
import { useWindowDimensions } from '../src/core/hooks/useWindowDimension';
import { CommonSeo } from '../src/core/components';

interface HomePageProps {}

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
        <>
            <CommonSeo title="Mono Infinity" />
            <ContainerLayout>
                <div className="relative flex flex-col items-center w-full min-h-screen space-y-12 text-white lg:space-y-20 md:space-y-16 sm:space-y-14">
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col items-center justify-center space-y-4 ">
                            <div className="relative w-20 h-20 rounded-lg rotate-12">
                                <div className="absolute w-full rotate-0 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                    <img alt="" src="/assets/gif/logo.gif" className="object-center" />
                                </div>
                                <div className="w-full rotate-[120deg] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute">
                                    <img alt="" src="/assets/gif/logo.gif" className="object-center" />
                                </div>
                                <div className="w-full rotate-[240deg] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute">
                                    <img alt="" src="/assets/gif/logo.gif" className="object-center" />
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center px-4 space-y-1 text-xl font-bold tracking-wider hello">
                                <h1 className="text-lg lg:text-4xl">Building Your Modern Web App</h1>
                                <h1 className="space-y-4 md:text-5xl ">Being the higher level</h1>
                            </div>
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
                                        <div className="bg-gray-400 h-80">
                                            <img src={item.imageUrl} className="object-cover w-full h-full" />
                                        </div>
                                        <div className="flex items-start flex-1 px-4 py-4 space-x-2 bg-violet-900 ">
                                            {/* <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-full"></div> */}
                                            <div className="flex flex-col space-y-2">
                                                <p>{item.name}</p>
                                                <div className="flex flex-wrap items-start justify-start space-x-2">
                                                    {item.categories.map((cate, index) => (
                                                        <div key={index} className="px-2 py-1 mb-2 text-xs border-2 rounded-2xl w-fit">
                                                            {cate}
                                                        </div>
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
            </ContainerLayout>
        </>
    );
};

export default HomePage;
