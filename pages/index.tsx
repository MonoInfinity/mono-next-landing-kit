import * as React from 'react';
import { ContainerLayout } from '../src/core/components/layouts/ContainerLayout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper';
import { useWindowDimensions } from '../src/core/hooks/useWindowDimension';
import { CommonSeo } from '../src/core/components';
import { useForm } from 'react-hook-form';
import { Contact } from '../src/core/components/contacts';
import { Devices, DeviceType } from '../src/core/components/devices';
import clsx from 'clsx';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, ShieldCheckIcon, ChatBubbleOvalLeftIcon, ShareIcon } from '@heroicons/react/24/outline';
import CountUp from 'react-countup';
import ReactVisibilitySensor from 'react-visibility-sensor';

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
        description: "We'll deploy your code to the cloud for you. You can push to deploy to any of our supported cloud providers.",
        icon: CloudArrowUpIcon,
    },
    {
        name: 'SSL Certificates',
        description: 'We provide free SSL certificates for all of your projects. We also support custom domains and subdomains.',
        icon: LockClosedIcon,
    },
    {
        name: 'Support 24/7',
        description: 'Our support team is available 24/7 to help you with any questions you might have.',
        icon: ChatBubbleOvalLeftIcon,
    },
    {
        name: 'Advanced Security',
        description: 'We provide a variety of security features to keep your projects safe and secure.',
        icon: ShieldCheckIcon,
    },
    {
        name: 'Social Media Integration',
        description: 'We support social media integration so you can share your app with the world.',
        icon: ShareIcon,
    },
    {
        name: 'Database Backups',
        description: 'We automatically backup all of your databases every day so you never have to worry about losing data.',
        icon: ServerIcon,
    },
];

const socialLinks = [
    {
        name: 'Github',
        imageUrl: '/assets/images/github.png',
        link: 'https://github.com/MonoInfinity',
    },
    {
        name: 'Facebook',
        imageUrl: '/assets/images/facebook.png',
        link: 'https://www.facebook.com/profile.php?id=100083413363217',
    },
    {
        name: 'Youtube',
        imageUrl: '/assets/images/youtube.png',
        link: 'https://www.youtube.com/channel/UCHTHyBTGhDAz_iJtI9tVu2w',
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
                    <div className="flex flex-col items-center mb-4 lg:mt-10 lg:mb-12 max-w-app">
                        <div className="flex flex-col items-center justify-center space-y-4 ">
                            <div className="relative hidden w-20 h-20 rounded-full bg-violet-900/20 lg:block rotate-12 dark:bg-inherit">
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
                                <h1 className="space-y-4 text-sm lg:text-5xl dark:text-gray-100 sm:text-violet-800">
                                    Being Your Project To A Higher Level
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full px-4 mb-4 sm:px-0 max-w-app lg:mb-12">
                        <Swiper
                            effect={`coverflow`}
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

                    <div className="py-8 mx-auto space-y-20 lg:py-24 max-w-app" id="about">
                        <div className="flex flex-col space-x-0 lg:space-x-10 lg:flex-row">
                            <div className="flex flex-col items-center justify-center flex-1 px-6 space-y-14 lg:space-y-32">
                                <div className="flex flex-col items-center justify-center space-y-16 leading-5 text-center dark:text-gray-200 text-violet-800 max-w-7xl">
                                    <p className="text-2xl font-medium">Hello there 👋 from</p>
                                    <div className="flex flex-col space-y-8 font-semibold lg:space-y-4">
                                        <span className="text-3xl lg:text-5xl">
                                            <span className="text-pink-600">Mono Infinity</span> - software development company
                                        </span>
                                        <span className="text-2xl lg:text-4xl">
                                            <span className="text-pink-600">Provides</span> a wide range of services, including{' '}
                                            <span className="text-pink-600">web, server, mobile</span> application development.
                                        </span>
                                    </div>
                                </div>

                                <span className="w-full h-1 max-w-xl rounded bg-pink-600/80 dark:bg-blue-800/50"></span>

                                <p className="max-w-3xl text-lg text-center sm:text-xl text-violet-500">
                                    We are a team of highly skilled and experienced developers who are passionate about creating innovative and
                                    high-quality software solutions. We are committed to providing our customers with the best possible
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="px-8 py-3 text-lg font-medium duration-300 rounded-md bg-violet-800 hover:bg-violet-900">
                                Explore Our Services
                            </button>
                        </div>
                    </div>
                    <div
                        className="flex justify-center w-full px-4 py-12 mb-4 text-blue-800 dark:text-white bg-violet-200/50 dark:bg-violet-800/10 lg:mb-12 scroll-m-12"
                        id="values"
                    >
                        <div className="flex flex-col items-center justify-between flex-1 max-w-screen-xl space-x-0 space-y-6 lg:space-x-16 lg:space-y-0 lg:flex-row">
                            <p className="max-w-xl text-3xl font-semibold">
                                What value did
                                <span className="block">We provide?</span>
                            </p>
                            <div className="flex lg:space-x-8 lg:items-end lg:text-2xl">
                                <div className="flex flex-col items-center flex-1 lg:flex-auto lg:items-start">
                                    <p className="text-4xl">
                                        <CountUp start={1} end={17} duration={1}>
                                            {({ countUpRef, start }) => (
                                                <ReactVisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </ReactVisibilitySensor>
                                            )}
                                        </CountUp>
                                        +
                                    </p>
                                    <p className="text-center lg:text-left">Delivered Projects</p>
                                </div>
                                <div className="flex flex-col items-center flex-1 lg:flex-auto lg:items-start">
                                    <p className="text-4xl">
                                        <CountUp start={1} end={13} duration={2}>
                                            {({ countUpRef, start }) => (
                                                <ReactVisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </ReactVisibilitySensor>
                                            )}
                                        </CountUp>
                                        +
                                    </p>
                                    <p className="text-center lg:text-left">Clients</p>
                                </div>
                                <div className="flex flex-col items-center flex-1 lg:flex-auto lg:items-start">
                                    <p className="text-4xl">
                                        <CountUp start={1} end={3} duration={1}>
                                            {({ countUpRef, start }) => (
                                                <ReactVisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </ReactVisibilitySensor>
                                            )}
                                        </CountUp>
                                        +
                                    </p>
                                    <p className="text-center lg:text-left">Year Of Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 mb-4 max-w-app lg:mb-12">
                        <div className="flex flex-col items-center justify-center lg:items-center lg:space-x-16 xl:flex-row">
                            <div className="lg:flex hidden justify-center lg:w-[720px] sm:h-[640px]">
                                <div className="relative z-10 flex items-center">
                                    <Devices setSize={setSize} />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center h-full max-w-xl space-y-5">
                                <div className="hidden space-x-4 text-xl font-semibold text-gray-700 lg:flex">
                                    <span className={clsx(`duration-300`, { 'text-violet-600': size === DeviceType.Laptop })}>Laptop</span>
                                    <span className={clsx(`duration-300`, { 'text-yellow-600': size === DeviceType.Tablet })}>Tablet</span>
                                    <span className={clsx(`duration-300`, { 'text-sky-600': size === DeviceType.Mobile })}>Mobile</span>
                                </div>

                                <div className="flex flex-col items-center space-y-8 lg:space-y-0">
                                    <ul className="space-y-4">
                                        <li className="space-y-1">
                                            <div className={clsx('font-bold lg:text-3xl md:text-2xl duration-300 text-violet-600')}>
                                                Support Multiple Devices
                                            </div>
                                            <p className={clsx(' dark:text-gray-300 text-gray-800 duration-300 t lg:text-lg md:text-base text-sm ')}>
                                                Design for all devices, from desktop to mobile, and everything in between. We make sure your app looks
                                                great on any screen.
                                            </p>
                                        </li>
                                        <li className="space-y-1">
                                            <div className={clsx('font-bold  lg:text-3xl md:text-2xl duration-300 text-yellow-600 ')}>
                                                Customizable Design
                                            </div>
                                            <p className={clsx(' dark:text-gray-300 text-gray-800 duration-300 t lg:text-lg md:text-base text-sm ')}>
                                                Make your app beautiful and unique with our customizable design. You can change colors, fonts, and so
                                                on.
                                            </p>
                                        </li>
                                        <li className="space-y-1">
                                            <div className={clsx('font-bold  lg:text-3xl md:text-2xl duration-300 text-sky-600')}>
                                                Optimize SEO and Traffic
                                            </div>
                                            <p className={clsx(' dark:text-gray-300 text-gray-800 duration-300 t lg:text-lg md:text-base text-sm ')}>
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
                    <div className="relative py-16 sm:py-24 lg:py-32" id="services">
                        <div className="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                                <span className="block">Why to choose us</span>
                            </h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight dark:text-violet-300 text-violet-700 sm:text-4xl">
                                A better way to build
                            </p>

                            <div className="mt-12">
                                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="pt-6">
                                            <div className="flow-root h-full px-6 pb-8 text-white rounded-lg dark:bg-black bg-violet-700 dark:bg-opacity-30">
                                                <div className="-mt-6">
                                                    <div>
                                                        <span className="inline-flex items-center justify-center p-3 bg-gray-700 rounded-lg shadow-lg dark:bg-violet-700">
                                                            <feature.icon className="w-6 h-6 text-white" aria-hidden="true" />
                                                        </span>
                                                    </div>
                                                    <h3 className="mt-8 text-lg font-medium tracking-tight text-white">{feature.name}</h3>
                                                    <p className="mt-5 text-base text-gray-300">{feature.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="flex flex-col flex-1 w-full py-8 mb-4 space-y-6 lg:py-28 max-w-app lg:flex-row lg:mb-12 lg:space-y-0"
                        id="contact"
                    >
                        <div className="flex flex-col flex-1 px-4 space-y-12">
                            <div className="flex flex-col space-y-8">
                                <div className="flex flex-col items-center px-4 space-y-4 lg:items-end lg:space-y-14">
                                    <p className="flex flex-col text-4xl font-semibold text-violet-700 dark:text-gray-100 lg:text-7xl ">
                                        <span>Let&apos;s discuss</span>
                                        <span>working together</span>
                                    </p>
                                    <p className="max-w-md text-base lg:text-xl dark:text-gray-300 text-violet-600">
                                        Begin the process by providing us with a high level overview of the project you are interested in and we will
                                        be in touch!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center flex-1">
                            <Contact />
                        </div>
                    </div>
                </div>
            </ContainerLayout>
        </>
    );
};

export default HomePage;
