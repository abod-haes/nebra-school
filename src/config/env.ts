const configured=import.meta.env.VITE_API_URL?.trim()
export const env={apiBaseUrl:(configured||'https://nebra.abdulrahman-hares.com/api/v1').replace(/\/+$/,'')}
