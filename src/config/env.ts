const configured = import.meta.env.VITE_API_URL?.trim()
const defaultApiBaseUrl = 'https://nebra.abdulrahman-hares.com/api/v1'

// Same-origin API calls only while the development server proxy is explicitly enabled.
// Production builds always use the real API URL directly.
const devProxy = import.meta.env.DEV && import.meta.env.VITE_DEV_API_PROXY === 'true'

export const env = {
  apiBaseUrl: devProxy ? '/api/v1' : (configured || defaultApiBaseUrl).replace(/\/+$/, ''),
}
