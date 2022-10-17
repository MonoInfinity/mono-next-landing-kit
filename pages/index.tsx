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
import { ArrowPathIcon, CloudArrowUpIcon, CogIcon, LockClosedIcon, ServerIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

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

const features = [
    {
        name: 'Push to Deploy',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'SSL Certificates',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: LockClosedIcon,
    },
    {
        name: 'Simple Queues',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Advanced Security',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ShieldCheckIcon,
    },
    {
        name: 'Powerful API',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CogIcon,
    },
    {
        name: 'Database Backups',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ServerIcon,
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
                <div className="relative flex flex-col items-center w-full min-h-screen text-white lg:space-y-20 md:space-y-16 sm:space-y-14">
                    <div className="flex flex-col items-center mb-4 lg:mb-12 max-w-app">
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
                                <h1 className="text-xl text-transparent bg-clip-text from-red-500 via-violet-500 to-blue-500 bg-gradient-to-r lg:text-4xl animate-color-animation">
                                    Building Your Modern Web App
                                </h1>
                                <h1 className="space-y-4 text-sm lg:text-5xl ">Being Your Project To A Higher Level</h1>
                            </div>
                        </div>
                    </div>

                    <div>
                        About us
                        <div></div>
                        divider SolidBytes is custom software development company with a headquarter in Ho Chi Minh, Vietnam. Company offers a wide
                        range of services: Web development, Prototyping MVP development, Business Analysis, UX/UI Design, Mobile App development,
                        Quality Assurance and Testing. We are providing specialized solutions to multiple business domains, such as healthcare,
                        education, transport & logistics, media and others. We provide high-quality and cost-effective software development services
                        to small and medium-sized enterprises and startups
                    </div>
                    <div className="relative w-full px-4 mb-4 sm:px-0 max-w-app lg:mb-12">
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
                            initialSlide={3}
                            draggable
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

                    <div className="w-full px-4 mb-4 max-w-app lg:mb-12">
                        <div className="flex flex-col items-center justify-center lg:items-center lg:space-x-16 xl:flex-row">
                            <div className="lg:flex hidden justify-center lg:w-[720px] sm:h-[640px]">
                                <div className="relative z-10 flex items-center">
                                    <Devices setSize={setSize} />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center h-full max-w-xl space-y-5">
                                <div className="hidden space-x-4 text-xl font-semibold text-gray-600 lg:flex">
                                    <span className={clsx(`duration-300`, { 'text-violet-300': size === DeviceType.Laptop })}>Laptop</span>
                                    <span className={clsx(`duration-300`, { 'text-yellow-300': size === DeviceType.Tablet })}>Tablet</span>
                                    <span className={clsx(`duration-300`, { 'text-pink-300': size === DeviceType.Mobile })}>Mobile</span>
                                </div>

                                <div className="flex flex-col items-center space-y-8 lg:space-y-0">
                                    <ul className="space-y-4">
                                        <li className="space-y-1">
                                            <div className={clsx('font-bold lg:text-3xl md:text-2xl duration-300 text-violet-300')}>
                                                Support Multiple Devices
                                            </div>
                                            <p className={clsx(' text-white duration-300 t lg:text-lg md:text-base text-sm opacity-40')}>
                                                Design for all devices, from desktop to mobile, and everything in between. We make sure your app looks
                                                great on any screen.
                                            </p>
                                        </li>
                                        <li className="space-y-1">
                                            <div className={clsx('font-bold  lg:text-3xl md:text-2xl duration-300 text-yellow-300 ')}>
                                                Customizable Design
                                            </div>
                                            <p className={clsx(' text-white duration-300 t lg:text-lg md:text-base text-sm opacity-40')}>
                                                Make your app beautiful and unique with our customizable design. You can change colors, fonts, and so
                                                on.
                                            </p>
                                        </li>
                                        <li className="space-y-1">
                                            <div className={clsx('font-bold  lg:text-3xl md:text-2xl duration-300 text-pink-300')}>
                                                Optimize SEO and Traffic
                                            </div>
                                            <p className={clsx(' text-white duration-300 t lg:text-lg md:text-base text-sm opacity-40')}>
                                                Improve your search engine ranking, drive more traffic to your website, and increase your revenue with
                                            </p>
                                        </li>
                                    </ul>
                                    <div className="lg:hidden">
                                        <Devices defaultSize={DeviceType.Mobile} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative py-16 sm:py-24 lg:py-32">
                        <div className="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                            <h2 className="text-lg font-semibold text-indigo-600">Deploy faster</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need to deploy your app</p>
                            <p className="mx-auto mt-5 text-xl text-gray-500 max-w-prose">
                                Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada.
                                Eleifend condimentum id viverra nulla.
                            </p>
                            <div className="mt-12">
                                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="pt-6">
                                            <div className="flow-root px-6 pb-8 rounded-lg bg-gray-50">
                                                <div className="-mt-6">
                                                    <div>
                                                        <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                                                            <feature.icon className="w-6 h-6 text-white" aria-hidden="true" />
                                                        </span>
                                                    </div>
                                                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                                                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 w-full mb-4 max-w-app lg:flex-row lg:mb-12">
                        <div className="flex-1">our service</div>
                        <div className="flex items-center justify-center flex-1">
                            <Contact />
                        </div>
                    </div>
                    <div className="w-full py-16 mb-4 bg-pink-500 bg-opacity-50 lg:mb-12 ">
                        <div className="flex flex-col items-center justify-center mx-auto space-y-8 max-w-app">
                            Join in on something big 50M Learners 190+ Countries 3.7B Code submits
                        </div>
                    </div>
                </div>
            </ContainerLayout>
        </>
    );
};

export default HomePage;
