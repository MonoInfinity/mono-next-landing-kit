export interface ResponseList<T> {
    data: T[];
    count: number;
}

export enum SortOrder {
    ASC = 0,
    DESC = 1
}

export interface PagingProps {
    pageNumber: number;
    pageSize: number;
    orderBy: string;
    sortOrder: SortOrder;
}

export const defaultPagingProps: PagingProps = {
    pageNumber: 0,
    pageSize: 10,
    orderBy: 'createAt',
    sortOrder: SortOrder.ASC
};
