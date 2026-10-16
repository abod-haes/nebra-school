import { PropsWithChildren } from 'react';
export type NebraTheme = 'light' | 'dark' | 'system';
export type NebraDirection = 'ltr' | 'rtl';
export interface NebraProviderProps extends PropsWithChildren {
    theme?: NebraTheme;
    direction?: NebraDirection;
}
export declare function NebraProvider({ children, theme, direction, }: NebraProviderProps): import('react').ReactNode;
//# sourceMappingURL=nebra-provider.d.ts.map