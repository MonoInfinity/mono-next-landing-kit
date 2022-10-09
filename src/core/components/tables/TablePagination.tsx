import { CheckIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpDownIcon } from '@heroicons/react/24/solid';
import * as React from 'react';
import _clsx from 'clsx';
import { useTableUtil } from '../../contexts';
import _range from 'lodash.range';
import { Listbox, Transition } from '@headlessui/react';

const PAGING_DEFAULT_LIMIT = 5;
const LIMIT_PAGE_OPTIONS = [10, 25, 50, 100];

interface TablePaginationProps {}

export const TablePagination: React.FC<TablePaginationProps> = ({}) => {
    const { limit, page, handleOnChangePage, setLimit, totalPage } = useTableUtil();
    const [pageRange, setPageRange] = React.useState<number[]>([]);

    React.useEffect(() => {
        const rangeSize = Math.ceil(PAGING_DEFAULT_LIMIT / 2) + 1;
        const prePage = rangeSize > page ? 0 : page - rangeSize;
        const postPage = page + rangeSize > totalPage ? totalPage : page + rangeSize;
        setPageRange(_range(prePage, postPage - 1));
    }, [page, totalPage]);

    return (
        <div className="flex items-center justify-between py-2">
            <ul className="flex space-x-1">
                {pageRange.length > 1 && (
                    <>
                        <li
                            className="flex items-center justify-center w-8 h-8 text-gray-900 duration-300 rounded-lg cursor-pointer hover:bg-gray-300"
                            onClick={() => handleOnChangePage(page - 1)}
                        >
                            <ChevronLeftIcon className="w-4 h-4 " />
                        </li>
                        {pageRange.map((pageIndex) => (
                            <li
                                className={_clsx('w-8 h-8 text-sm font-light leading-8 text-center duration-300 rounded-lg cursor-pointer ', {
                                    'border border-black bg-white': pageIndex === page,
                                    'border-gray-900 hover:bg-gray-300': pageIndex !== page,
                                })}
                                onClick={() => handleOnChangePage(pageIndex)}
                                key={pageIndex}
                            >
                                {pageIndex + 1}
                            </li>
                        ))}
                        <li
                            className="flex items-center justify-center w-8 h-8 text-gray-500 duration-300 rounded-lg cursor-pointer hover:bg-gray-300"
                            onClick={() => handleOnChangePage(page + 1)}
                        >
                            <ChevronRightIcon className="w-4 h-4 " />
                        </li>
                    </>
                )}
            </ul>
            <div>
                <Listbox value={limit} onChange={setLimit}>
                    <div className="relative w-32 mt-1 ">
                        <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-900 rounded-md cursor-default focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                            <span className="block truncate">{limit} / trang</span>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <ChevronUpDownIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                            </span>
                        </Listbox.Button>
                        <Transition as={React.Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                            <Listbox.Options className="absolute w-full py-1 mt-1 text-base bg-white rounded-md shadow-lg bottom-full max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {LIMIT_PAGE_OPTIONS.map((person, personIdx) => (
                                    <Listbox.Option
                                        key={personIdx}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                            }`
                                        }
                                        value={person}
                                    >
                                        {({ selected }) => (
                                            <>
                                                <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{person} / trang</span>
                                                {selected ? (
                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                        <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>
            </div>
        </div>
    );
};
