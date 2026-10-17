import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// Development-only API proxy avoids cross-origin requests from localhost:5174
// while production always calls the configured API directly.
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  const useDevProxy = command === 'serve' && env.VITE_DEV_API_PROXY === 'true'
  const apiUrl = env.VITE_API_URL?.trim() || 'https://nebra.abdulrahman-hares.com/api/v1'

  if (!useDevProxy) {
    return { plugins: [react()] }
  }

  let url: URL
  try {
    url = new URL(apiUrl)
  } catch {
    throw new Error('VITE_API_URL must be a valid URL for the development API proxy.')
  }
  if (!['http:', 'https:'].includes(url.protocol) ||
      url.username || url.password || url.pathname.replace(/\/+$/, '') !== '/api/v1') {
    throw new Error('VITE_API_URL must be an http(s) /api/v1 URL without embedded credentials.')
  }

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api/v1': {
          target: url.origin,
          changeOrigin: true,
          secure: url.protocol === 'https:',
        },
      },
    },
  }
})
