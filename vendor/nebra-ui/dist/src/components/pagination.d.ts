import { HTMLAttributes } from 'react';
export interface PaginationProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
    page: number;
    pageCount: number;
    onPageChange: (page: number) => void;
    siblingCount?: number;
    previousLabel?: string;
    nextLabel?: string;
}
export declare function Pagination({ className, page, pageCount, onPageChange, siblingCount, previousLabel, nextLabel, ...props }: PaginationProps): import("react").JSX.Element;
//# sourceMappingURL=pagination.d.ts.map