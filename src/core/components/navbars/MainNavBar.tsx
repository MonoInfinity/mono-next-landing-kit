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
                    <div className="cursor-pointer group">
                        <button className="w-full px-6 py-2 text-white duration-300 rounded-lg hover:text-indigo-500 hover:bg-slate-100 text-start">
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
        <div className="fixed top-0 left-0 z-10 flex justify-center w-full">
            <div className="absolute block w-full h-24 bg-inherit backdrop-blur-md"></div>
            <div className={`flex justify-between items-center p-6 fixed w-full max-w-[1440px] sm:bg-inherit ${isActive ? 'bg-violet-900' : ''}`}>
                <Link href={'/'} passHref>
                    <div className="flex items-center h-8 space-x-2 cursor-pointer">
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
                        <button className="flex items-center justify-center w-10 h-10 p-2 text-white duration-300 rounded-full bg-white/20 hover:bg-violet-500/80">
                            <UserIcon />
                        </button>
                        <button className="flex items-center justify-center w-10 h-10 p-2 text-white duration-300 rounded-full bg-white/20 hover:bg-violet-500/80">
                            <LightBulbIcon />
                        </button>
                        <button
                            onClick={() => setIsActive(!isActive)}
                            className="flex items-center justify-center w-10 h-10 p-2 text-white duration-300 rounded-full sm:hidden bg-white/20 hover:bg-violet-500/80"
                        >
                            {isActive ? <XMarkIcon /> : <Bars4Icon />}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
