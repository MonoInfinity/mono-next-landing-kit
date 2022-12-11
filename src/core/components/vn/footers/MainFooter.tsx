import Link from 'next/link';

import * as React from 'react';
import { constantVN as constant } from '../../../constant';

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
            <div className="flex flex-col justify-between flex-1 w-full max-w-screen-xl pt-24 pb-12 lg:flex-row gap-x-7 gap-y-14">
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
                        <p className="text-sm text-gray-300">
                            Thiết kế, phát triển, triển khai website cho bạn, được cung cấp bởi đội ngũ Mono Infinity
                        </p>
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
                <div className="flex flex-col space-y-16 lg:space-y-0 lg:space-x-16 lg:flex-row">
                    <div className="flex-1 col-span-full sm:col-span-3 md:col-span-2 min-w-[150px]">
                        <h3 className="mb-6 text-sm text-white font-display">Mony Infinity</h3>
                        <ul className="flex flex-col space-y-1 text-sm text-gray-300">
                            {constant.NAVBAR.map((item) => {
                                return (
                                    <li key={item.path}>
                                        <a className="hover:text-white" href={item.path}>
                                            {item.name}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
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
