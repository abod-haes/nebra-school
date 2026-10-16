import { useEffect, useState, type PropsWithChildren } from 'react'
import { LocaleContext as Context, type Locale } from './locale-context'
export function LocaleProvider({children}:PropsWithChildren){
 const [locale,setState]=useState<Locale>(()=>localStorage.getItem('nebra.school.locale')==='en'?'en':'ar')
 useEffect(()=>{document.documentElement.lang=locale;document.documentElement.dir=locale==='ar'?'rtl':'ltr';document.title=locale==='ar'?'نبرة | إدارة المدرسة':'NEBRA | School Dashboard'},[locale])
 const setLocale=(value:Locale)=>{setState(value);localStorage.setItem('nebra.school.locale',value)}
 return <Context.Provider value={{locale,setLocale}}>{children}</Context.Provider>
}
