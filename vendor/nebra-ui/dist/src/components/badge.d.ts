import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';
declare const badgeVariants: (props?: ({
    variant?: "neutral" | "success" | "warning" | "danger" | "info" | "accent" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type BadgeProps = HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>;
export declare function Badge({ className, variant, ...props }: BadgeProps): import("react").JSX.Element;
export { badgeVariants };
//# sourceMappingURL=badge.d.ts.map