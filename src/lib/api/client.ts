import axios from 'axios'
import { env } from '../../config/env'
export const apiClient=axios.create({baseURL:env.apiBaseUrl,timeout:15000,headers:{Accept:'application/json'}})
// Authentication and tenant context are intentionally deferred to the next phase.
