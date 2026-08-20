import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteMockServe } from 'vite-plugin-mock'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), viteMockServe({
    mockPath: 'mock',
    localEnabled: true
  }),
  // mock 未匹配的 /api 请求（如用 GET 请求 POST 接口）会被 Vite 的 SPA fallback
  // 兜底返回 index.html，导致接口调试拿到 text/html。这里兜底返回 JSON 404。
  {
    name: 'api-404-json',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url.startsWith('/api')) {
          res.statusCode = 404
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          res.end(JSON.stringify({
            code: 404,
            message: `Mock 路由不存在: ${req.method} ${req.url}`
          }))
          return
        }
        next()
      })
    }
  }],
})
