import { HTMLAttributes, ReactNode } from 'react';
export interface FilterBarProps extends HTMLAttributes<HTMLDivElement> {
    search?: ReactNode;
    filters?: ReactNode;
    actions?: ReactNode;
    meta?: ReactNode;
}
export declare function FilterBar({ className, search, filters, actions, meta, children, ...props }: FilterBarProps): import("react").JSX.Element;
//# sourceMappingURL=filter-bar.d.ts.map