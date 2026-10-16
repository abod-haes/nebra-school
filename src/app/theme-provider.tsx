import { useState, type PropsWithChildren } from 'react'
import { ThemeContext as Context, type Theme } from './theme-context'
export function ThemeProvider({children}:PropsWithChildren){
 const [theme,setTheme]=useState<Theme>(()=>{const value=localStorage.getItem('nebra.school.theme');return value==='dark'||value==='light'?value:'light'})
 const toggleTheme=()=>setTheme(current=>{const next=current==='light'?'dark':'light';localStorage.setItem('nebra.school.theme',next);return next})
 return <Context.Provider value={{theme,toggleTheme}}>{children}</Context.Provider>
}
