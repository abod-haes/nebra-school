import { ColumnDef, Row, SortingState } from '@tanstack/react-table';
import { ReactNode } from 'react';
export interface DataTableProps<TData> {
    data: TData[];
    columns: ColumnDef<TData, unknown>[];
    getRowId?: (row: TData, index: number) => string;
    emptyState?: ReactNode;
    className?: string;
    rowClassName?: (row: Row<TData>) => string | undefined;
    onRowClick?: (row: Row<TData>) => void;
    renderMobileRow?: (row: Row<TData>) => ReactNode;
    initialSorting?: SortingState;
    ariaLabel?: string;
}
export declare function DataTable<TData>({ data, columns, getRowId, emptyState, className, rowClassName, onRowClick, renderMobileRow, initialSorting, ariaLabel, }: DataTableProps<TData>): import("react").JSX.Element;
export type { ColumnDef, Row, SortingState } from '@tanstack/react-table';
//# sourceMappingURL=data-table.d.ts.map