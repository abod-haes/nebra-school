import { HTMLAttributes, ReactNode } from 'react';
export type EmptyStateProps = Omit<HTMLAttributes<HTMLDivElement>, 'title'> & {
    icon?: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    actions?: ReactNode;
};
export declare function EmptyState({ className, icon, title, description, actions, ...props }: EmptyStateProps): import("react").JSX.Element;
//# sourceMappingURL=empty-state.d.ts.map