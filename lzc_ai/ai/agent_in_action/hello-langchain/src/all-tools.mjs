import { tool } from '@langchain/core/tools';
import fs from 'node:fs/promises';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { z } from 'zod';

const readFileTool = tool(
    async ({ filePath }) => {
        const content = await fs.readFile(filePath, 'utf-8');
        console.log(`[read_file] ${filePath} (${content.length} 字节)`);
        return content;
    },
    {
        name: 'read_file',
        description: '读取文件内容',
        schema: z.object({
            filePath: z.string().describe('文件路径')
        })
    }
);

const writeFileTool = tool(
    async ({ filePath, content }) => {
        try {
            const dir = path.dirname(filePath);
            await fs.mkdir(dir, { recursive: true });
            await fs.writeFile(filePath, content, 'utf-8');
            console.log(`[write_file] ${filePath} (${content.length} 字节)`);
            return `成功写入 ${filePath}`;
        } catch (error) {
            return `写入失败: ${error.message}`;
        }
    },
    {
        name: 'write_file',
        description: '向指定路径写入文件内容，自动创建目录',
        schema: z.object({
            filePath: z.string().describe('文件路径'),
            content: z.string().describe('文件内容')
        })
    }
);

const listDirectoryTool = tool(
    async ({ directoryPath }) => {
        try {
            const files = await fs.readdir(directoryPath);
            console.log(`[list_directory] ${directoryPath} (${files.length} 项)`);
            return `目录内容:\n${files.join('\n')}`;
        } catch (error) {
            return `列出目录失败: ${error.message}`;
        }
    },
    {
        name: 'list_directory',
        description: '列出指定目录下的所有文件和文件夹',
        schema: z.object({
            directoryPath: z.string().describe('目录路径')
        })
    }
);

const executeCommandTool = tool(
    async ({ command, workingDirectory }) => {
        const cwd = workingDirectory || process.cwd();
        console.log(`[execute_command] ${command} (cwd: ${cwd})`);
        return new Promise((resolve) => {
            const [cmd, ...args] = command.split(' ');
            const child = spawn(cmd, args, { cwd, stdio: 'pipe', shell: true });
            let stdout = '';
            let stderr = '';
            child.stdout.on('data', (data) => { stdout += data.toString(); });
            child.stderr.on('data', (data) => { stderr += data.toString(); });
            child.on('close', (code) => {
                if (code === 0) {
                    resolve(`命令执行成功\n${stdout}`);
                } else {
                    resolve(`命令执行失败，退出码: ${code}\nstdout: ${stdout}\nstderr: ${stderr}`);
                }
            });
        });
    },
    {
        name: 'execute_command',
        description: '执行命令行命令，支持指定工作目录',
        schema: z.object({
            command: z.string().describe('要执行的命令'),
            workingDirectory: z.string().optional().describe('工作目录')
        })
    }
);

export { 
    readFileTool, 
    writeFileTool, 
    listDirectoryTool, 
    executeCommandTool 
    };
