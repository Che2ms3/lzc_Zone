// Todos Module 的定义文件
import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
// 大模型后端框架，MVC 实图层不可以直接去数据库查数据
// View Controller Module
@Module({
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
