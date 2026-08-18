# nestjs

nest.js 全栈，next js就是node的纯后端企业级开发框架。
默认使用ts，全面模块化思想，适合构建企业级服务。

## 后端开发做什么？
- 提供api接口 web开发
- 系统集成，并发 底层服务，AI Infra 
- 微服务 
## 安装
npm i -g @nestjs/cli
nest new hello
nest run start

## 目录架构
- src
  main.ts 入口文件
  app.module.ts 根模块
## 工厂模式
  
## 高度模块化
  约定
  App -> Modules 
         ->@nestjs/common Module类
         ->import依赖项
         ->controller 控制器 参数校验，简单逻辑 最后return response
         ->seervice 服务 return 数据
## 装饰器模式
不修改原类代码，动态给对象叠加新能力。
@ 
class

## 开发流程
AppModule import 里面植入我们的Module
Module是nestjs的独立业务模块
  xx.module.ts第一 组装
  xx.controller.ts 控制器
  xx.service.ts provider 数据业务
  @Injectable()自动依赖注入
  自动注入controller或者任何用它的地方
  controller 里的任何一个属性
  MVC 本质
  装饰器模式用到极致 
- NotFoundException
  nestjs 内置的错误类
  请说一下你是如何处理后端报错的？
  try catch finally ts独苗 线程挂
  nest.js 提供了各种错误类，标准化错误输出
  statusCode状态码
  message 消息
