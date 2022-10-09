//@ts-nocheck
import * as React from 'react';
import { Column, ColumnInstance, useTable } from 'react-table';
import _get from 'lodash.get';

interface TableBuilderProps<T extends object> {
    extraCol?: JSX.Element;
    data: T[];
    emptyContent?: string;
    columns: ReadonlyArray<Column<T>>;
}

export const TableBuilder = <T extends object>({ data, extraCol, columns, emptyContent = 'Danh sách trống' }: TableBuilderProps<T>) => {
    const { getTableProps, getTableBodyProps, headers, rows, prepareRow, columns: tableColumns } = useTable({ columns, data });

    return (
        <div className="shadow  ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="w-full divide-y divide-gray-300 ">
                <thead className="bg-gray-50 " {...getTableProps}>
                    <tr className="">{headers.map((column: ColumnInstance<T>) => column.render('Header', { ...column.getHeaderProps() }))}</tr>
                </thead>
                <tbody className="duration-300 bg-white divide-y divide-gray-200 " {...getTableBodyProps}>
                    {Boolean(!rows.length) && (
                        <tr>
                            <td className="py-3.5 px-3 text-sm">{emptyContent}</td>
                            {Array.from(Array(tableColumns.length - 1).keys()).map((index) => (
                                <td key={index}></td>
                            ))}
                        </tr>
                    )}

                    {rows.map((row, index) => {
                        prepareRow(row);
                        const { key, className } = row.getRowProps();

                        return (
                            <tr key={`${key}${index}`} className={`hover:bg-gray-100 duration-300   ${className}`}>
                                {row.cells.map((cell, index2) => {
                                    return cell.render('Cell', { key: `${index}${index2}` });
                                })}
                            </tr>
                        );
                    })}

                    {extraCol}
                </tbody>
            </table>
        </div>
    );
};
