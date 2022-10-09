import * as React from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { SortOrder, useTableUtil } from '../../contexts';

interface TableHeaderCellProps extends React.DetailedHTMLProps<React.ThHTMLAttributes<any>, any> {
    label: string;
    sortKey?: string;
}

export const TableHeaderCell: React.FC<TableHeaderCellProps> = ({ label, sortKey, className, ...rest }) => {
    const { sortField, sortOrder, handleOnChangeOrderFiled } = useTableUtil();

    return (
        <th
            className={`px-3 py-3.5 text-left text-sm font-semibold text-gray-900 cursor-pointer first:pl-6 first:pr-3 last:pr-6 last:pl-3  ${className}`}
            {...rest}
            onClick={() => {
                if (sortKey) handleOnChangeOrderFiled(sortKey);
            }}
        >
            <div className="relative inline-block">
                {label}
                {Boolean(sortKey) && (
                    <div className="absolute top-0 left-full">
                        {sortField === sortKey &&
                            (sortOrder === SortOrder.ASC ? (
                                <ChevronUpIcon className="inline-block w-4 h-4 ml-1" />
                            ) : (
                                <ChevronDownIcon className="inline-block w-4 h-4 ml-1" />
                            ))}
                    </div>
                )}
            </div>
        </th>
    );
};
