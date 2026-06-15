// 任务资源
// ts = js + 强类型
// 自定义类型的对象 接口
// 面向对象核心概念
interface Todo {
    id: string;
    tittle: string;
    completed: boolean;
    createdAt:  Date;
}
// 资源
const todos: Todo[] = [
    {
        id: "1",
        tittle: "吃饭",
        completed: false,
        createdAt: new Date(),
    },
    {
        id: "2",
        tittle: "吃饭",
        completed: false,
        createdAt: new Date(),
    },
    {
        id: "3",
        tittle: "吃饭",
        completed: false,
        createdAt: new Date(),
    },
];
// 内置了 高性能的服务器 
const server = Bun.server({
    port: 8080,// 127.0.0.1:8080 
    // ip 对应一台服务器 ，不同的端口 提供不同的服务
    // http 服务，mail服务，音乐服务
    // http server 处于伺服状态 http 是基于请求req响应 response的协议
    // 用户通过浏览器输入URL 发送一个请求（req对象 n个）
    // server fetch函数 BUN.server的内置方法，所有的请求都会在这里处理。
    async fetch(req){
        // 异步任务，控制流程 await 
        console.log(req);
        // http：//baidu.com:port/pathname/:params?a-1&n=2
        const url = new URL(req.url);//用户访问的地址
    }
})