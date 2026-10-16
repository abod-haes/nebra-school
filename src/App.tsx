import { BrowserRouter } from 'react-router-dom'
import { NebraProvider } from '@nebra/ui'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { LocaleProvider } from './app/locale-provider'
import { useLocale } from './app/locale-context'
import { ThemeProvider } from './app/theme-provider'
import { useTheme } from './app/theme-context'
import { AppRoutes } from './app/app-routes'

const queryClient = new QueryClient({ defaultOptions: { queries: { retry: 1, refetchOnWindowFocus: false } } })
function Providers() {
  const { locale } = useLocale()
  const { theme } = useTheme()
  return <NebraProvider theme={theme} direction={locale === 'ar' ? 'rtl' : 'ltr'}><QueryClientProvider client={queryClient}><AppRoutes /></QueryClientProvider></NebraProvider>
}
export default function App() {
  const [ready] = useState(true)
  return <BrowserRouter><LocaleProvider><ThemeProvider>{ready && <Providers />}</ThemeProvider></LocaleProvider></BrowserRouter>
}
