import { HTMLAttributes, ReactNode } from 'react';
export type PageHeaderProps = Omit<HTMLAttributes<HTMLElement>, 'title'> & {
    eyebrow?: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    actions?: ReactNode;
};
export declare function PageHeader({ className, eyebrow, title, description, actions, ...props }: PageHeaderProps): import("react").JSX.Element;
//# sourceMappingURL=page-header.d.ts.map