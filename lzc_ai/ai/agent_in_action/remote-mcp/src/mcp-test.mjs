import 'dotenv/config';
import { MultiServerMCPClient } from '@langchain/mcp-adapters';
import { ChatOpenAI } from '@langchain/openai';
import chalk from 'chalk';
import {
    HumanMessage,
    SystemMessage,
    ToolMessage
} from '@langchain/core/messages';


const model = new ChatOpenAI({
  modelName:'deepseek-v4-pro',
  apiKey: process.env.DEEPSEEK_API_KEY,
  temperature: 0,
  configuration: {
    baseURL: 'https://api.deepseek.com/v1',
  },
});

const mcpClient = new MultiServerMCPClient({
    mcpServers:{
        'amap-mcp':{
            "url":`https://mcp.amap.com/mcp?key=${process.env.AMAP_MCP_KEY}`,
            "headers": {
                "Accept": "application/json, text/event-stream"
            }
        },
        'local-mcp':{
            command: "node",
            args: [
                "/Users/cheems23/Desktop/WorkSpase/lzc_ai/ai/agent_in_action/mcp-demo/src/my-mcp-server.mjs"
            ]
        },
        'chrome-devtools':{
            command: "npx",
            args: ["chrome-devtools-mcp@latest"]
        },
        'filesystem':{
            command: "npx",
            args: ["-y", "@modelcontextprotocol/server-filesystem", "/Users/cheems23/Desktop/WorkSpase/lzc_ai"]
        }
    },
    onConnectionError: "ignore"
});

const tools = await mcpClient.getTools();
console.log(tools);

const modelWithTools = model.bindTools(tools);

async function runAgentWithTools(query, maxIterations = 30) {
    const messages = [
        new HumanMessage(query)
    ];

    for(let i = 0; i < maxIterations; i++){
        console.log(chalk.bgGreen(`第${i+1}轮迭代 `));
        const response = await modelWithTools.invoke(messages);
        messages.push(response);

        if(!response.tool_calls || response.tool_calls.length === 0){
            console.log(chalk.bgRed(`AI 回答：${i+1}`));
            return response.content
        }

        console.log(chalk.bgBlue(`工具调用：
            ${response.tool_calls.map(t => t.name).join(', ')}
            `));

            for(const toolCall of response.tool_calls){
                const foundTool = tools.find(t => t.name === toolCall.name);
                if(foundTool){
                    const toolResult = await foundTool.invoke(toolCall.args);
                    let contentStr;
                    // mcp tool 返回一般字符串
                    // 还有可能 处理对象
                    if(typeof toolResult === 'string'){
                        contentStr = toolResult;
                        // str
                        // fileSystem   {text:}
                    } else if (toolResult && toolResult.text) {
                        contentStr = toolResult.text;
                    }
                    messages.push(new ToolMessage({
                        content: contentStr,
                        tool_call_id: toolCall.id
                    }));
                }
            }
    }

    // 最后一个消息是AI的回复
    // 改进
    return messages[messages.length-1].content;
}

await runAgentWithTools(`北京南站附近的3个酒店，以及去的路线，
    路线规划生成文档保存到 当前目录 的一个 md 文件`)
await mcpClient.close();
