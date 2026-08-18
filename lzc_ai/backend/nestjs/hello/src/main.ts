// nestjs 按需加载
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // 面向对象思想
  //
  //  / 首页由AppModule来服务
  // M Module是一个整体 后端最常见的一个MVC模式
  // C Controller 控制器
  // V View 视图层 html
  // 一个文件 及千行代码，
  // localhost: 3000/   /后端路由 -> 送到AppModule
  // 组织控制器 controller， server层CRUD sql
  const app = await NestFactory.create(AppModule);
  // 启动web http 服务 3000
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
