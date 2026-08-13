export default [
    {
        url: '/api/todos',
        method: 'get',
        timeout: 2000,
        response: (req,res) => {
            return {
                code: 0,// 成功，没问题
                todos: [
                    {
                        id: 1,
                        title: '学习前端工程',
                        completed: true,
                    }
                ],
                
                todos: [
                    {
                        id: 2,
                        title: '看龙餐馆',
                        completed: false,
                    }
                ]
            }
        }
    }
]