// next.js 除了use client都是后端
// /api 数据接口 仍然满足 app router 约定
// route.ts返回json数据接口的
import { type Todo } from '../../todos/type';

let todos: Todo[] = [
    { id: 1, content: '学习AppRouter',completed: true},
    { id: 2, content: 'next.js 个人官网开发 ',completed: false},
]
// /api/todoa get 请求 restful 
export async function GET(){
    // 返回json 数据接口 next.js封装好了Response
    return Response.json(todos);
}

export async function POST(req:Request) {
    const body = await req.json();
    const newTodo: Todo ={
        id: +DataTransfer.new(),
        content: body.content,
        completed: false
    }
    todos.push(newTodo);
    return Response.json(newTodo);
}