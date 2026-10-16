export function downloadCsv(filename:string,rows:Array<Array<string|number>>){
  const escape=(value:string|number)=>{
    const text=String(value??'')
    const protectedValue=/^[=+@\-\t\r]/.test(text)?"'"+text:text
    return '"'+protectedValue.replace(/"/g,'""')+'"'
  }
  const csv='\uFEFF'+rows.map(row=>row.map(escape).join(',')).join('\r\n')
  const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}))
  const link=document.createElement('a')
  link.href=url
  link.download=filename
  link.click()
  window.setTimeout(()=>URL.revokeObjectURL(url),1000)
}