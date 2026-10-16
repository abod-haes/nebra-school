import { HTMLAttributes, ReactNode } from 'react';
export type AlertVariant = 'neutral' | 'success' | 'warning' | 'danger' | 'info';
export type AlertProps = Omit<HTMLAttributes<HTMLDivElement>, 'title'> & {
    variant?: AlertVariant;
    icon?: ReactNode;
    title: ReactNode;
    description?: ReactNode;
};
export declare function Alert({ className, variant, icon, title, description, ...props }: AlertProps): import("react").JSX.Element;
//# sourceMappingURL=alert.d.ts.map