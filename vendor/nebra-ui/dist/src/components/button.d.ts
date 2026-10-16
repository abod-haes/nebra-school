import { VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';
declare const buttonVariants: (props?: ({
    variant?: "danger" | "primary" | "secondary" | "outline" | "ghost" | null | undefined;
    size?: "icon" | "sm" | "md" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
export declare const Button: import('react').ForwardRefExoticComponent<ButtonProps & import('react').RefAttributes<HTMLButtonElement>>;
export { buttonVariants };
//# sourceMappingURL=button.d.ts.map