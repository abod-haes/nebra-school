const configured = import.meta.env.VITE_API_URL?.trim()
const defaultApiBaseUrl = 'https://nebra.abdulrahman-hares.com/api/v1'

export const env = {
  apiBaseUrl: (configured || defaultApiBaseUrl).replace(/\/+$/, ''),
}