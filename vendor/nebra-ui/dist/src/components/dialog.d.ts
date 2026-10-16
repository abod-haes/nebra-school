import { HTMLAttributes } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
export declare const Dialog: import('react').FC<DialogPrimitive.DialogProps>;
export declare const DialogTrigger: import('react').ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & import('react').RefAttributes<HTMLButtonElement>>;
export declare const DialogClose: import('react').ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & import('react').RefAttributes<HTMLButtonElement>>;
export declare const DialogOverlay: import('react').ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & import('react').RefAttributes<HTMLDivElement>, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export declare const DialogContent: import('react').ForwardRefExoticComponent<Omit<DialogPrimitive.DialogContentProps & import('react').RefAttributes<HTMLDivElement>, "ref"> & {
    hideClose?: boolean;
} & import('react').RefAttributes<HTMLDivElement>>;
export declare function DialogHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>): import("react").JSX.Element;
export declare function DialogFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>): import("react").JSX.Element;
export declare const DialogTitle: import('react').ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & import('react').RefAttributes<HTMLHeadingElement>, "ref"> & import('react').RefAttributes<HTMLHeadingElement>>;
export declare const DialogDescription: import('react').ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & import('react').RefAttributes<HTMLParagraphElement>, "ref"> & import('react').RefAttributes<HTMLParagraphElement>>;
//# sourceMappingURL=dialog.d.ts.map