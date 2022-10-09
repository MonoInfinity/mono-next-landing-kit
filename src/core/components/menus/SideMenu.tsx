import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import _clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

interface SideMenuProps {
    title: string;
    menus: { label: string; icon: () => JSX.Element; submenu: { label: string; href: string }[] }[];
}

export const SideMenu: React.FC<SideMenuProps> = ({ menus, title }) => {
    const router = useRouter();

    return (
        <div className="space-y-2">
            <div className="mx-2 font-semibold opacity-60">{title}</div>
            <div className="w-full ">
                <div className="w-full max-w-md mx-auto space-y-2 rounded-2xl">
                    {menus.map((item, index) => {
                        return (
                            <Disclosure key={item.label} as="div">
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button
                                            className={_clsx(
                                                'flex justify-between w-full px-4 py-2 text-sm font-medium text-left duration-300 rounded-lg  focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75',
                                                {
                                                    'bg-primary-600 text-white': open,
                                                    'text-gray-900 hover:bg-gray-300': !open,
                                                }
                                            )}
                                        >
                                            <div className="flex items-center space-x-1">
                                                <div className="flex-shrink-0 w-5 h-5 transition duration-75 ">
                                                    <item.icon />
                                                </div>
                                                <span>{item.label}</span>
                                            </div>
                                            <ChevronUpIcon
                                                className={_clsx('h-5 w-5 duration-100', {
                                                    'rotate-180 transform text-white': open,
                                                    'text-gray-500 ': !open,
                                                })}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="pt-3 pb-2 pl-4 space-y-2 text-sm text-gray-500" as="ul">
                                            {item.submenu.map((subItem, index) => (
                                                <li key={subItem.href}>
                                                    <Link href={subItem.href}>
                                                        <a
                                                            className={_clsx(
                                                                'block py-2 pl-4 pr-1 duration-300 rounded-lg hover:bg-gray-200 hover:text-gray-800',
                                                                {
                                                                    'bg-primary-100 text-gray-800': router.pathname === subItem.href,
                                                                }
                                                            )}
                                                        >
                                                            {subItem.label}
                                                        </a>
                                                    </Link>
                                                </li>
                                            ))}
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
