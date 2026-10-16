import { HTMLAttributes, ReactNode } from 'react';
export interface StatCardProps extends HTMLAttributes<HTMLDivElement> {
    label: ReactNode;
    value: ReactNode;
    icon?: ReactNode;
    footer?: ReactNode;
    trend?: 'up' | 'down' | 'neutral';
}
export declare function StatCard({ className, label, value, icon, footer, trend, ...props }: StatCardProps): import("react").JSX.Element;
//# sourceMappingURL=stat-card.d.ts.map