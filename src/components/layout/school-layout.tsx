import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Languages, Menu, Moon, Sun, X } from 'lucide-react'
import { NebraBrandMark, Button } from '@nebra/ui'
import { navigation } from '../../app/navigation'
import { useLocale } from '../../app/locale-context'
import { useTheme } from '../../app/theme-context'
export function SchoolLayout(){
 const {locale,setLocale}=useLocale();const {theme,toggleTheme}=useTheme();const [open,setOpen]=useState(false)
 const ar=locale==='ar';const label=(item:typeof navigation[number])=>ar?item.ar:item.en
 return <div className="school-shell"><aside className={'school-sidebar '+(open?'is-open':'')}><div className="school-brand"><NebraBrandMark size={40}/><span><strong>NEBRA</strong><small>{ar?'إدارة المدرسة':'School Management'}</small></span><button className="close-menu" aria-label="Close menu" onClick={()=>setOpen(false)}><X size={20}/></button></div><p className="sidebar-heading">{ar?'القائمة الرئيسية':'MAIN MENU'}</p><nav aria-label={ar?'القائمة الرئيسية':'Main navigation'}>{navigation.map(item=><NavLink key={item.path} to={item.path} end={item.path==='/'} onClick={()=>setOpen(false)} className={({isActive})=>'nav-item '+(isActive?'active':'')}><item.icon size={19}/><span>{label(item)}</span></NavLink>)}</nav><div className="sidebar-footer">{ar?'لوحة المدرسة — المرحلة التأسيسية':'School dashboard — Foundation'}</div></aside>{open&&<button className="menu-backdrop" aria-label="Close navigation" onClick={()=>setOpen(false)}/>}<div className="school-workspace"><header className="school-header"><div className="header-leading"><button className="menu-toggle" onClick={()=>setOpen(true)} aria-label="Open navigation"><Menu size={20}/></button><span>{ar?'لوحة إدارة المدرسة':'School dashboard'}</span></div><div className="header-actions"><Button variant="ghost" size="sm" onClick={()=>setLocale(ar?'en':'ar')}><Languages size={17}/>{ar?'English':'العربية'}</Button><Button variant="ghost" size="sm" onClick={toggleTheme}>{theme==='dark'?<Sun size={18}/>:<Moon size={18}/>}</Button></div></header><main className="school-content"><Outlet/></main></div></div>
}
