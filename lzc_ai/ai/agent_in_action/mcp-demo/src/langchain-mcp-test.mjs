import 'dotenv/config';
// agent 配置 mcp client ？可以配置多个mcp server的client
import { MultiServerMCPClient } from '@langchain/mcp-adapters'
import { ChatOpenAI } from '@langchain/openai';
import chalk from 'chalk';
import { HumanMessage,
         ToolMessage,
         SystemMessage,
} from '@langchain/core/messages';

const mcpClient = new MultiServerMCPClient({
    mcpServer:{
        'my-mcp-server':{
            command: 'node',
            args:['']
        }
    }
})










// 获取文件
const tools = await mcpClient.getTools();
const modelWithTools = model.bindTools(tools);

async function runAgentWithTools(query,maxIterations=30 ) {
    
}