import { Bars4Icon, BarsArrowDownIcon, LightBulbIcon, UserIcon, WalletIcon, XMarkIcon } from '@heroicons/react/24/outline';
import * as React from 'react';
import { ContainerLayout } from '../layouts/ContainerLayout';
import { NavbarLinkProps } from './interface/Navbar.interface';
import Link from 'next/link';

interface MainNavBarProps {}

const navLinks: NavbarLinkProps[] = [
    {
        name: 'Home',
        path: '/',
        children: [
            { name: 'Home 0', path: '/' },
            { name: 'Home 1', path: '/' },
            { name: 'Home 2', path: '/' },
            { name: 'Home 3', path: '/' },
            { name: 'Home 4', path: '/' },
            { name: 'Home 5', path: '/' },
        ],
    },
    {
        name: 'Page',
        path: '/',
        children: [
            { name: 'About', path: '/about' },
            { name: 'Contact', path: '/contact' },
            {
                name: 'Auth',
                path: '/auth',
                // children: [
                //     { name: 'Login', path: '/login' },
                //     { name: 'Register', path: '/register' },
                //     { name: 'Forgot Password', path: '/forgot-password' },
                // ],
            },
            {
                name: 'User',
                path: '/user',
                // children: [
                //     { name: 'Reset Password', path: '/reset-password' },
                //     { name: 'Profile', path: '/profile' },
                // ],
            },
            {
                name: 'Product',
                path: '/',
                children: [
                    { name: 'List', path: '/list' },
                    { name: 'Detail', path: '/detail' },
                ],
            },

            {
                name: 'Error',
                path: '/',
                children: [
                    { name: 'Error 404', path: '/404' },
                    { name: 'Error 500', path: '/500' },
                ],
            },
        ],
    },
    {
        name: 'About',
        path: '/',
        children: [
            { name: 'About 0', path: '/' },
            { name: 'About 1', path: '/' },
            { name: 'About 2', path: '/' },
            { name: 'About 3', path: '/' },
            { name: 'About 4', path: '/' },
            { name: 'About 5', path: '/' },
        ],
    },
    { name: 'Contact', path: '/' },
];

export const MainNavBar: React.FC<MainNavBarProps> = () => {
    const [isActive, setIsActive] = React.useState<Boolean>(false);

    const _renderNavLinks = (data: NavbarLinkProps[], level = 0) => {
        return data.map((item, index) =>
            item.children ? (
                <div className={`relative w-fit sm:w-full z-index-10 `} key={`${item.name}-${level}-${index}`}>
                    <div className="group cursor-pointer">
                        <button className="px-6 py-2 text-white hover:text-indigo-500 duration-300 hover:bg-slate-100 rounded-lg w-full text-start">
                            {item.name}
                        </button>
                        <div
                            className={`left-full top-0 ${
                                level > 0 ? 'sm:left-full' : 'sm:left-0'
                            } p-2 absolute bg-violet-800 rounded-xl hidden flex-col items-start w-44 group-hover:flex child:hidden hover:child:block ${
                                level > 0 ? 'sm:top-0' : 'sm:top-full'
                            } space-y-2 ${level > 0 ? '' : 'left-full'}`}
                        >
                            {_renderNavLinks(item.children, level + 1)}
                        </div>
                    </div>
                </div>
            ) : (
                <Link href={item.path} passHref key={`${item.name}-${level}-${index}`}>
                    <button
                        className={`px-6 py-2 text-white hover:text-violet-500  ${
                            level > 0 ? 'hidden' : ''
                        } group-hover:block text-left duration-300 w-full ${level > 0 ? 'hover:bg-slate-100' : ''} rounded-lg`}
                    >
                        {item.name}
                    </button>
                </Link>
            )
        );
    };

    return (
        <div className="flex justify-center fixed top-0 left-0 w-full z-10">
            <div className="absolute bg-inherit backdrop-blur-md block w-full h-24"></div>
            <div className={`flex justify-between items-center p-6 fixed w-full max-w-[1440px] sm:bg-inherit ${isActive ? 'bg-violet-900' : ''}`}>
                <Link href={'/'} passHref>
                    <div className="flex h-8 space-x-2 items-center cursor-pointer">
                        <div className="h-8">
                            <img src="/assets/images/mono-logo-dark.png" className="h-full" />
                        </div>
                        <p className="text-[#FDFBF9] text-4xl font-semibold lg:block hidden">Mono Infinity</p>
                    </div>
                </Link>
                <div className="flex space-x-8">
                    <div
                        className={`${
                            isActive ? 'flex' : 'hidden'
                        } sm:flex flex-col w-full h-screen sm:h-fit sm:flex-row  sm:space-x-2 sm:space-y-0 space-y-2 px-6 sm:py-0 py-10 space-x-0 font-semibold absolute sm:relative top-full left-0 sm:bg-inherit ${
                            isActive ? 'bg-violet-900' : ''
                        }`}
                    >
                        {_renderNavLinks(navLinks)}
                    </div>
                    <div className="flex space-x-2">
                        <button className="h-10 w-10 text-white p-2 bg-white/20 hover:bg-violet-500/80 duration-300 flex justify-center items-center rounded-full">
                            <UserIcon />
                        </button>
                        <button className="h-10 w-10 p-2 text-white bg-white/20 hover:bg-violet-500/80 duration-300 flex justify-center items-center rounded-full">
                            <LightBulbIcon />
                        </button>
                        <button
                            onClick={() => setIsActive(!isActive)}
                            className="sm:hidden h-10 w-10 p-2 text-white bg-white/20 hover:bg-violet-500/80 duration-300 flex justify-center items-center rounded-full"
                        >
                            {isActive ? <XMarkIcon /> : <Bars4Icon />}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
