import { HTMLAttributes, ReactNode } from 'react';
export interface SidebarNavItem {
    id: string;
    label: ReactNode;
    icon?: ReactNode;
    badge?: ReactNode;
    href?: string;
    active?: boolean;
    disabled?: boolean;
    onSelect?: () => void;
}
export interface SidebarSection {
    id: string;
    label?: ReactNode;
    items: SidebarNavItem[];
}
export interface AppSidebarProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
    brand?: ReactNode;
    sections: SidebarSection[];
    footer?: ReactNode;
    collapsed?: boolean;
    ariaLabel?: string;
}
export declare function AppSidebar({ className, brand, sections, footer, collapsed, ariaLabel, ...props }: AppSidebarProps): import("react").JSX.Element;
//# sourceMappingURL=app-sidebar.d.ts.map