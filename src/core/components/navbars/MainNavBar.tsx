import * as React from 'react';
import { useStoreUser } from '../../store';
import Link from 'next/link';
import Image from 'next/image';
import { constant } from '../../constant';
import { routes } from '../../routes';
import Cookie from 'universal-cookie';
import { Menu, Transition } from '@headlessui/react';
import { UserCircleIcon, ChevronDownIcon, ArrowLeftOnRectangleIcon, UserIcon } from '@heroicons/react/24/outline';
import { ProgressLoadingBar } from '../loading';

interface MainNavBarProps {}

export const MainNavBar: React.FC<MainNavBarProps> = () => {
    const userState = useStoreUser();

    const _handleOnLogout = () => {
        const cookie = new Cookie();
        cookie.set(constant.TOKEN_COOKIE_KEY, '', { maxAge: -999 });
        window.location.reload();
    };

    return (
        <div className="relative px-4 py-3 mb-0.5 bg-white shadow-lg">
            <div className="relative flex items-center justify-between max-w-5xl mx-auto">
                <Link href={routes.home()}>
                    <a>
                        <div>
                            <Image width={200} height={48} src="/assets/images/logo.png" alt="logo" />
                        </div>
                    </a>
                </Link>

                <div className="flex items-center space-x-8 justify-evenly">
                    <div className="flex items-center space-x-4 justify-evenly">
                        <Link href={routes.trip.search()}>
                            <a className="text-sm font-medium duration-300 hover:text-primary-700">Thuê Xe</a>
                        </Link>
                        <Link href={routes.trip.search()}>
                            <a className="text-sm font-medium duration-300 hover:text-primary-700">Limosine</a>
                        </Link>
                        {userState.isAuth && (
                            <>
                                {Boolean(userState.companies.length) ? (
                                    <Link href={routes.partner.vehicles.list()}>
                                        <a href={routes.partner.vehicles.list()} className="text-sm font-medium duration-300 hover:text-primary-700">
                                            Quản lý
                                        </a>
                                    </Link>
                                ) : (
                                    <Link href={routes.partner.register.info()}>
                                        <a className="text-sm font-medium duration-300 hover:text-primary-700">Trở Thành Đối Tác</a>
                                    </Link>
                                )}
                            </>
                        )}
                    </div>
                    {userState.isAuth ? (
                        <>
                            <Menu>
                                <Menu.Button>
                                    <div className="flex items-center px-2 space-x-3 text-white rounded-lg cursor-pointer bg-primary-600">
                                        <UserCircleIcon className="w-10 h-10" />
                                        <ChevronDownIcon />
                                    </div>
                                </Menu.Button>
                                <Transition
                                    className="absolute right-0 z-30 top-full"
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <Menu.Items className="flex flex-col px-2 py-4 text-sm text-gray-800 bg-white border rounded-sm shadow-xl">
                                        <Menu.Item>
                                            <Link href={routes.account.edit()}>
                                                <a className="flex items-center px-2 py-2 space-x-2 duration-300 hover:bg-primary-600 hover:text-white">
                                                    <div>
                                                        <UserCircleIcon className="w-4 h-4" />
                                                    </div>
                                                    <span>Thông Tin Tài Khoản</span>
                                                </a>
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <button
                                                className="flex items-center px-2 py-2 space-x-2 duration-300 hover:bg-primary-600 hover:text-white"
                                                onClick={_handleOnLogout}
                                            >
                                                <div>
                                                    <ArrowLeftOnRectangleIcon className="w-4 h-4" />
                                                </div>
                                                <span>Đăng Xuất</span>
                                            </button>
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </>
                    ) : (
                        <Link href={routes.auth.login()}>
                            <a
                                href={routes.auth.login()}
                                className="flex items-center justify-center px-2 py-1 space-x-1 text-white duration-300 rounded bg-primary-600 hover:bg-primary-700"
                            >
                                <div>
                                    <UserIcon className="w-4 h-4" />
                                </div>
                                <div>Đăng Nhập</div>
                            </a>
                        </Link>
                    )}
                </div>
            </div>
            <div className="fixed top-0 left-0 z-50 w-full">
                <ProgressLoadingBar className="h-1 bg-tango-500" />
            </div>
        </div>
    );
};
