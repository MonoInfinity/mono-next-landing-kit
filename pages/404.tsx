import Link from 'next/link';
import * as React from 'react';

interface NotFoundPageProps {}

const NotFoundPage: React.FC<NotFoundPageProps> = () => {
    return (
        <div className="relative z-10 flex-1 ">
            <div className="min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
                <div className="mx-auto mt-16 lg:mt-32 max-w-max">
                    <main className="sm:flex">
                        <p className="text-4xl font-bold tracking-tight text-white sm:text-5xl">404</p>
                        <div className="sm:ml-6">
                            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Page not found</h1>
                                <p className="mt-1 text-base text-gray-300">Please check the URL in the address bar and try again.</p>
                            </div>
                            <div className="flex mt-10 space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                                <Link href="/">
                                    <a
                                        href="#"
                                        className="inline-flex items-center px-6 py-3 text-sm font-medium text-white duration-300 bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Go back home
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
