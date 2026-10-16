import { HTMLAttributes, ReactNode } from 'react';
export interface AppHeaderProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
    leading?: ReactNode;
    title?: ReactNode;
    subtitle?: ReactNode;
    center?: ReactNode;
    actions?: ReactNode;
    user?: ReactNode;
    sticky?: boolean;
}
export declare function AppHeader({ className, leading, title, subtitle, center, actions, user, sticky, ...props }: AppHeaderProps): import("react").JSX.Element;
//# sourceMappingURL=app-header.d.ts.map