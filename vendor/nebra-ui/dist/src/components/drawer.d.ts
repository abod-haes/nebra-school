import { HTMLAttributes } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
export declare const Drawer: import('react').FC<DialogPrimitive.DialogProps>;
export declare const DrawerTrigger: import('react').ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & import('react').RefAttributes<HTMLButtonElement>>;
export declare const DrawerClose: import('react').ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & import('react').RefAttributes<HTMLButtonElement>>;
export declare const DrawerOverlay: import('react').ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & import('react').RefAttributes<HTMLDivElement>, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export declare const DrawerContent: import('react').ForwardRefExoticComponent<Omit<DialogPrimitive.DialogContentProps & import('react').RefAttributes<HTMLDivElement>, "ref"> & {
    side?: "left" | "right" | "top" | "bottom";
    hideClose?: boolean;
} & import('react').RefAttributes<HTMLDivElement>>;
export declare function DrawerHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>): import("react").JSX.Element;
export declare function DrawerFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>): import("react").JSX.Element;
export declare const DrawerTitle: import('react').ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & import('react').RefAttributes<HTMLHeadingElement>, "ref"> & import('react').RefAttributes<HTMLHeadingElement>>;
export declare const DrawerDescription: import('react').ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & import('react').RefAttributes<HTMLParagraphElement>, "ref"> & import('react').RefAttributes<HTMLParagraphElement>>;
//# sourceMappingURL=drawer.d.ts.map