import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';

const database = {
    users: {
        '001': { id: '001', name: 'zuhao', email: 'zh@qq.com', role: 'admin' }
    }
};

const server = new McpServer({
    name: 'my-mcp-server',
    version: '1.0.0'
});

server.registerTool('query_user', {
    description: '查询数据库中的用户信息。输入用户ID，返回该用户的详细信息（姓名、邮箱、角色）',
    inputSchema: {
        userID: z.string().describe('用户ID，例如：001，002，003')
    }
}, async ({ userID }) => {
    const user = database.users[userID];
    if (!user) {
        return {
            content: [
                { type: 'text', text: `用户ID ${userID} 不存在。可用的ID：001，002，003` }
            ]
        };
    }
    return {
        content: [
            { type: 'text', text: `姓名：${user.name}，邮箱：${user.email}，角色：${user.role}` }
        ]
    };
});

const transport = new StdioServerTransport();
await server.connect(transport);
