import { useRouter } from 'next/router';
import _get from 'lodash.get';
import * as React from 'react';

export enum SortOrder {
    ASC = 1,
    DESC = 0,
}

export interface ITableUtilContext {
    limit: number;
    page: number;
    totalPage: number;
    sortField: string;
    sortOrder: SortOrder;
    handleOnChangePage: (page: number) => void;
    setTotalPage: React.Dispatch<React.SetStateAction<number>>;
    setLimit: React.Dispatch<React.SetStateAction<number>>;
    handleOnChangeOrderFiled: (field: string) => void;
}

const TableUtilContext = React.createContext<ITableUtilContext>({
    limit: 10,
    page: 1,
    totalPage: 0,
    handleOnChangePage: () => {},
    setTotalPage: () => {},
    setLimit: () => {},
    handleOnChangeOrderFiled: () => {},
    sortField: '',
    sortOrder: SortOrder.ASC,
});
export interface TableProviderProps {
    children: React.ReactNode;
}

export const TableUtilProvider: React.FC<TableProviderProps> = ({ children }) => {
    const [limit, setLimit] = React.useState<number>(10);
    const [page, setPage] = React.useState<number>(0);
    const [totalPage, setTotalPage] = React.useState<number>(0);
    const [sortField, setSortField] = React.useState<string>('createAt');
    const [sortOrder, setSortOrder] = React.useState<SortOrder>(SortOrder.ASC);
    const router = useRouter();

    const handleOnChangeOrderFiled = (field: string) => {
        let newField = sortField;
        let newSortOrder = sortOrder;
        if (sortField === field) {
            if (sortOrder === SortOrder.ASC) {
                newSortOrder = SortOrder.DESC;
            } else {
                newField = 'createAt';
                newSortOrder = SortOrder.ASC;
            }
        } else {
            newField = field;
            newSortOrder = SortOrder.ASC;
        }
        setSortField(newField);
        setSortOrder(newSortOrder);
        router.push({
            query: {
                ...router.query,
                sortBy: newField,
                sortOrder: newSortOrder,
            },
        });
    };

    const handleOnChangePage = (page: number) => {
        let newPage = page;
        if (page < 0) {
            newPage = 0;
        } else if (page >= totalPage - 1) {
            newPage = totalPage;
        }

        setPage(newPage);

        router.push({
            query: {
                ...router.query,
                pageNumber: newPage,
                pageSize: limit,
            },
        });
    };

    React.useEffect(() => {
        const pageNumber = _get(router.query, 'pageNumber', 0);
        const pageSize = _get(router.query, 'pageSize', 10);
        if (pageNumber) {
            setPage(Number(pageNumber));
        }
        if (pageSize) {
            setLimit(Number(pageSize));
        }
    }, []);

    React.useEffect(() => {
        if (limit) {
            setPage(0);
            router.push({
                query: {
                    ...router.query,
                    pageNumber: 0,
                    pageSize: limit,
                },
            });
        }
    }, [limit]);

    return (
        <TableUtilContext.Provider
            value={{
                limit,
                page,
                handleOnChangePage,
                totalPage,
                setTotalPage,
                handleOnChangeOrderFiled,
                sortField,
                sortOrder,
                setLimit,
            }}
        >
            {children}
        </TableUtilContext.Provider>
    );
};

export const useTableUtil = () => {
    const context = React.useContext(TableUtilContext);

    return { ...context };
};
