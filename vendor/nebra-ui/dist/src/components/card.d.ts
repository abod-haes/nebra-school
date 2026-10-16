import { HTMLAttributes } from 'react';
export type CardProps = HTMLAttributes<HTMLDivElement> & {
    interactive?: boolean;
};
export declare function Card({ className, interactive, ...props }: CardProps): import("react").JSX.Element;
export declare function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>): import("react").JSX.Element;
export declare function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>): import("react").JSX.Element;
export declare function CardDescription({ className, ...props }: HTMLAttributes<HTMLParagraphElement>): import("react").JSX.Element;
export declare function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>): import("react").JSX.Element;
export declare function CardFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>): import("react").JSX.Element;
//# sourceMappingURL=card.d.ts.map