import { SVGProps } from 'react';
export interface NebraBrandMarkProps extends Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> {
    size?: number | string;
    tone?: 'auto' | 'light' | 'dark';
}
export declare function NebraBrandMark({ size, tone, className, style, ...props }: NebraBrandMarkProps): import("react").JSX.Element;
//# sourceMappingURL=nebra-brand-mark.d.ts.map