import Link from 'next/link';

import * as React from 'react';

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
interface MainFooterProps {}

export const MainFooter: React.FC<MainFooterProps> = () => {
    return (
        <footer className="relative flex flex-col items-center justify-center px-10 text-white dark:bg-black bg-violet-800 dark:bg-opacity-20">
            <div className="grid max-w-screen-xl grid-cols-6 pt-24 pb-12 gap-x-7 gap-y-14 md:grid-cols-12">
                <div className="col-span-3 md:col-span-4 ">
                    <div className="flex flex-col space-y-4">
                        <Link href={'/'} passHref>
                            <div className="flex items-center h-8 space-x-2 cursor-pointer">
                                <div className="h-8">
                                    <img src="/assets/images/mono-logo-dark.png" className="h-full" />
                                </div>
                                <p className="text-[#FDFBF9] text-4xl font-semibold lg:block hidden">Mono Infinity</p>
                            </div>
                        </Link>
                        <p className="text-sm text-gray-300">Design, Develop and Deploy website to your business. Powered by Mono Infinity team.</p>
                        <ul className="flex space-x-4">
                            {socialLinks.map((socialLink) => (
                                <li className="" key={socialLink.name}>
                                    <Link href={socialLink.link}>
                                        <a className="" href={socialLink.link}>
                                            <img src={socialLink.imageUrl} alt={socialLink.name} className="w-6 h-6" />
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex space-x-5">
                        <a target="_blank" rel="noopener noreferrer" className="cursor-pointer group" href="https://www.facebook.com">
                            <svg className="w-5 h-5 icon group-hover:fill-accent fill-gray-400 group-hover:fill-white">
                                <use xlinkHref="/icons.svg#icon-facebook" />
                            </svg>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" className="cursor-pointer group" href="https://www.twitter.com">
                            <svg className="w-5 h-5 icon group-hover:fill-accent fill-gray-400 group-hover:fill-white">
                                <use xlinkHref="/icons.svg#icon-twitter" />
                            </svg>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" className="cursor-pointer group" href="https://www.discord.com">
                            <svg className="w-5 h-5 icon group-hover:fill-accent fill-gray-400 group-hover:fill-white">
                                <use xlinkHref="/icons.svg#icon-discord" />
                            </svg>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" className="cursor-pointer group" href="https://www.instagram.com">
                            <svg className="w-5 h-5 icon group-hover:fill-accent fill-gray-400 group-hover:fill-white">
                                <use xlinkHref="/icons.svg#icon-instagram" />
                            </svg>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" className="cursor-pointer group" href="https://www.tiktok.com">
                            <svg className="w-5 h-5 icon group-hover:fill-accent fill-gray-400 group-hover:fill-white">
                                <use xlinkHref="/icons.svg#icon-tiktok" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="col-span-full sm:col-span-3 md:col-span-2 md:col-start-7">
                    <h3 className="mb-6 text-sm text-white font-display">Marketplace</h3>
                    <ul className="flex flex-col space-y-1 text-sm text-gray-300">
                        <li>
                            <a className="hover:text-accent hover:text-white" href="/home/home_4#">
                                domain names
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-accent hover:text-white" href="/home/home_4#">
                                collections
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-accent hover:text-white" href="/home/home_4#">
                                virtual world
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-span-full sm:col-span-3 md:col-span-2 ">
                    <h3 className="mb-6 text-sm text-white font-display">Company</h3>
                    <ul className="flex flex-col space-y-1 text-sm text-gray-300">
                        <li>
                            <a className="hover:text-white" href="/home/home_4#">
                                Explore
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-white" href="/home/home_4#">
                                About
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-white" href="/home/home_4#">
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-white" href="/home/home_4#">
                                Our Blog
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-white" href="/home/home_4#">
                                FAQ
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-span-full sm:col-span-3 md:col-span-2 ">
                    <h3 className="mb-6 text-sm text-white font-display ">My Account</h3>
                    <ul className="flex flex-col space-y-1 text-sm text-gray-300">
                        <li>
                            <a className="hover:text-white" href="/home/home_4#">
                                Authors
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-white" href="/home/home_4#">
                                Collection
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-white" href="/home/home_4#">
                                Author Profile
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-white" href="/home/home_4#">
                                Create Item
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center justify-between py-8 space-y-2 sm:flex-row sm:space-y-0">
                <span className="text-sm text-gray-300 ">
                    <span>© 2022 Mono Infinity. All Rights Reserved.</span>
                </span>
            </div>
        </footer>
    );
};
