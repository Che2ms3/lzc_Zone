const jsonServer = require('json-server')
const app = jsonServer.create()
const router = jsonServer.router('data.json')
const middle = jsonServer.defaults()

// 全局配置utf8编码头
app.use((req,res,next)=>{
  res.setHeader('Content-Type','application/json;charset=utf-8')
  next()
})
app.use(middle)
app.use(router)
app.listen(3000,()=>console.log('服务启动'))