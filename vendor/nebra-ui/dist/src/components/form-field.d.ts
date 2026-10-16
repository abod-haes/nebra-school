import { HTMLAttributes, ReactNode } from 'react';
export interface FormFieldProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    label?: ReactNode;
    hint?: ReactNode;
    error?: ReactNode;
    required?: boolean;
    htmlFor?: string;
    children: ReactNode;
}
export declare function FormField({ className, label, hint, error, required, htmlFor, children, ...props }: FormFieldProps): import("react").JSX.Element;
//# sourceMappingURL=form-field.d.ts.map