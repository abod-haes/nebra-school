import { createContext, useContext } from 'react'
export type Locale = 'ar' | 'en'
export const LocaleContext = createContext<{locale:Locale;setLocale:(value:Locale)=>void}|null>(null)
export function useLocale(){const value=useContext(LocaleContext);if(!value)throw new Error('LocaleProvider missing');return value}
