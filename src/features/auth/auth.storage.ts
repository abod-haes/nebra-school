import type { Tokens } from './auth.types'
const KEY='nebra.school.session'
export function getTokens():Tokens|null {try{const value=sessionStorage.getItem(KEY);return value?JSON.parse(value) as Tokens:null}catch{return null}}
export function saveTokens(value:Tokens){sessionStorage.setItem(KEY,JSON.stringify(value))}
export function clearTokens(){sessionStorage.removeItem(KEY)}
