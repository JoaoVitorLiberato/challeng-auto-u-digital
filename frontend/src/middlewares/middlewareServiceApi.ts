import axios from "axios"

const CONNECT_API = axios.create({
  baseURL: String(process.env.VUE_APP_SERVICE_API_URL),
  // baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json"
  }
})

CONNECT_API.interceptors.request.use((config) => {
  config.headers["x-api-key"] = String(process.env.VUE_APP_SERVICE_API_KEY)

  return config
})

CONNECT_API.interceptors.response.use((config) => {
  return config
})

export {
  CONNECT_API as middlewareServiceApi
}
