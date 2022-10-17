import * as React from 'react';
import { ContainerLayout } from '../src/core/components/layouts/ContainerLayout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, EffectFade, Navigation, Pagination } from 'swiper';
import { useWindowDimensions } from '../src/core/hooks/useWindowDimension';
import { CommonSeo, FormWrapper, TextareaField, TextInput } from '../src/core/components';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { routes } from '../src/core/routes';
import { Contact } from '../src/core/components/contacts';
import { Devices, DeviceType } from '../src/core/components/devices';
import clsx from 'clsx';

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
    const formMethods = useForm();

    const { width } = useWindowDimensions();
    const [size, setSize] = React.useState<DeviceType>(DeviceType.Laptop);

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
                    <div className="flex flex-col items-center mb-12 max-w-app">
                        <div className="flex flex-col items-center justify-center space-y-4 ">
                            <div className="relative hidden w-20 h-20 rounded-lg lg:block rotate-12">
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
                            <div className="flex flex-col items-center justify-center px-4 space-y-1 text-xl font-bold tracking-wider">
                                <h1 className="text-lg text-transparent bg-clip-text from-red-500 via-violet-500 to-blue-500 bg-gradient-to-r lg:text-4xl animate-color-animation">
                                    Building Your Modern Web App
                                </h1>
                                <h1 className="space-y-4 md:text-5xl ">Being Your Project To A Higher Level</h1>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full px-4 sm:px-0 max-w-app">
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
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
                                    <div className="min-w-[280px] h-[480px] w-full flex flex-col rounded-2xl overflow-hidden border-violet-600 border transform group:focus:rotate-180 z-10 relative">
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

                    <div className="w-full px-4 max-w-app">
                        <div className="flex flex-col items-center justify-center lg:items-center lg:space-x-16 xl:flex-row">
                            <div className="lg:flex hidden justify-center lg:w-[720px] sm:h-[640px]">
                                <div className="relative z-10 flex items-center">
                                    <Devices setSize={setSize} />
                                </div>
                            </div>
                            <div className="flex flex-col items-start h-full max-w-xl space-y-5">
                                <div className="hidden space-x-4 text-xl font-semibold text-gray-600 lg:flex">
                                    <span className={clsx(`duration-300`, { 'text-violet-300': size === DeviceType.Laptop })}>Laptop</span>
                                    <span className={clsx(`duration-300`, { 'text-yellow-300': size === DeviceType.Tablet })}>Tablet</span>
                                    <span className={clsx(`duration-300`, { 'text-pink-300': size === DeviceType.Mobile })}>Mobile</span>
                                </div>
                                <div className="flex flex-col space-y-3">
                                    <div
                                        className={clsx(
                                            'font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-2xl duration-300 text-white text-transparent bg-clip-text from-red-500 via-violet-500 to-blue-500 bg-gradient-to-r animate-color-animation'
                                        )}
                                    >
                                        Support Multiple Devices
                                    </div>
                                    <ul className={clsx('font-medium duration-300 text-gray-300 lg:text-lg md:text-base text-sm')}>
                                        <li>
                                            <h1>Support Multiple Devices</h1>
                                            Design for all devices, from desktop to mobile, and everything in between. We make sure your app looks
                                            great on any screen.
                                        </li>
                                        <li>
                                            <h1>Grow your business</h1>
                                            Improve your results with the click of a button. Unbounce routes your visitors to the best landing page
                                            for people like them and—on average—gets you 30% more sales and signups.
                                        </li>
                                        <li>
                                            <h1>Get your business online</h1>
                                            Support website live all the time
                                        </li>
                                        <li>
                                            <h1>Optimize SEO</h1>
                                            Support website live all the time
                                        </li>
                                    </ul>
                                    {/* <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                        make a type specimen book.
                                    </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative  transform scale-[45%] h-[550px] lg:hidden space-y-8 flex flex-col justify-center items-center ">
                        <div className="transform ">
                            <Devices defaultSize={DeviceType.Laptop} />
                        </div>
                        <div className="flex space-x-4">
                            <Devices defaultSize={DeviceType.Tablet} />
                            <Devices defaultSize={DeviceType.Mobile} />
                        </div>
                    </div>
                    <div className="flex flex-1 w-full max-w-app">
                        <div className="flex-1">Join in on something big 50M Learners 190+ Countries 3.7B Code submits</div>
                        <div className="flex items-center justify-center flex-1">
                            <Contact />
                        </div>
                    </div>
                    <div className="flex flex-1 w-full max-w-app">
                        <div className="flex items-center justify-center flex-1">
                            <Contact />
                        </div>
                        <div className="flex-1">our service</div>
                    </div>
                    <div className="w-full py-16 bg-pink-500 bg-opacity-50 ">
                        <div className="flex flex-col items-center justify-center mx-auto space-y-8 max-w-app">
                            <div className="flex items-center justify-between w-full space-x-16">
                                <div className="w-24 h-24">
                                    <img src="https://picsum.photos/200/200" alt="123" />
                                </div>
                                <div className="w-24 h-24">
                                    <img src="https://picsum.photos/200/200" alt="123" />
                                </div>
                                <div className="w-24 h-24">
                                    <img src="https://picsum.photos/200/200" alt="123" />
                                </div>
                                <div className="w-24 h-24">
                                    <img src="https://picsum.photos/200/200" alt="123" />
                                </div>
                                <div className="w-24 h-24">
                                    <img src="https://picsum.photos/200/200" alt="123" />
                                </div>
                                <div className="w-24 h-24">
                                    <img src="https://picsum.photos/200/200" alt="123" />
                                </div>
                                <div className="w-24 h-24">
                                    <img src="https://picsum.photos/200/200" alt="123" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <footer className="w-full max-w-5xl py-8 space-y-4">
                        <div className="flex items-center justify-between w-full space-y-4">
                            <ul className="flex space-x-4 text-sm text-gray-400 ">
                                <li>Contact</li>
                                <li>About</li>
                                <li>Services</li>
                            </ul>
                            <ul className="flex space-x-4">
                                <li className="">
                                    <div className="w-6 h-6">
                                        <img src="/assets/images/github.png" alt="Github" />
                                    </div>
                                </li>
                                <li>
                                    <div className="w-6 h-6">
                                        <img src="/assets/images/facebook.png" alt="Facebook" />
                                    </div>
                                </li>
                                <li>
                                    <div className="w-6 h-6">
                                        <img src="/assets/images/github.png" alt="Github" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center justify-between mx-auto text-sm text-gray-400 l">
                            <div className="">© {new Date().getFullYear()} Mono Infinity. All Rights Reserved. </div>
                            <Link href={routes.termAndConditions()}>
                                <a className="">Terms And Conditions</a>
                            </Link>
                        </div>
                    </footer> */}
                </div>
            </ContainerLayout>
        </>
    );
};

export default HomePage;
