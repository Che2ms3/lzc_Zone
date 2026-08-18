// 生成简历 .docx —— node generate.js
const {
  Document, Packer, Paragraph, TextRun, AlignmentType,
  BorderStyle, LevelFormat, TabStopType,
} = require("docx");
const fs = require("fs");

const ACCENT = "1A56DB";
const INK = "1F2937";
const MUTED = "6B7280";
const FONT = { ascii: "Helvetica Neue", eastAsia: "PingFang SC", hAnsi: "Helvetica Neue" };

// ---------- 工具函数 ----------
const p = (runs, opts = {}) => new Paragraph({
  spacing: { after: opts.after ?? 50, before: opts.before ?? 0, line: 250 },
  ...opts,
  children: runs,
});

const run = (text, opts = {}) => new TextRun({
  text,
  font: FONT,
  size: opts.size ?? 20, // 10pt
  bold: opts.bold ?? false,
  color: opts.color ?? INK,
});

const sectionTitle = (text) => new Paragraph({
  spacing: { before: 130, after: 70 },
  border: { left: { style: BorderStyle.SINGLE, size: 22, color: ACCENT, space: 6 } },
  indent: { left: 110 },
  children: [new TextRun({ text, font: FONT, size: 24, bold: true, color: ACCENT })],
});

const bullet = (text) => new Paragraph({
  numbering: { reference: "bullet", level: 0 },
  spacing: { after: 30, line: 248 },
  children: [run(text)],
});

const skillRow = (cat, tags) => p([
  run(cat + "：", { bold: true, size: 19 }),
  run(tags.join(" ｜ "), { size: 19 }),
], { after: 30, line: 244 });

const projHead = (name, badge, tech) => p([
  run(name, { size: 21, bold: true }),
  run("　[" + badge + "]", { size: 16, color: ACCENT }),
  run("\t" + tech, { size: 16, color: MUTED }),
], { after: 24, before: 60 });

// ---------- 文档 ----------
const doc = new Document({
  numbering: {
    config: [{
      reference: "bullet",
      levels: [{
        level: 0, format: LevelFormat.BULLET, text: "•",
        alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 380, hanging: 190 } } },
      }],
    }],
  },
  styles: {
    default: { document: { run: { font: FONT, size: 20, color: INK } } },
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 }, // A4
        margin: { top: 620, bottom: 620, left: 900, right: 900 },
      },
    },
    children: [
      // ===== 头部 =====
      new Paragraph({
        spacing: { after: 60 },
        children: [
          run("XXX", { size: 46, bold: true }),
          run("  |  AI 全栈开发实习生 / Agent 开发实习生", { size: 22, color: ACCENT, bold: true }),
        ],
      }),
      p([
        run("电话：138-XXXX-XXXX", { color: MUTED, size: 19 }),
        run("    邮箱：xxx@xxx.com", { color: MUTED, size: 19 }),
        run("    GitHub：github.com/XXX", { color: MUTED, size: 19 }),
        run("    可远程", { color: MUTED, size: 19 }),
      ], { after: 50 }),
      new Paragraph({
        spacing: { after: 60 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 16, color: ACCENT, space: 2 } },
        children: [run("", { size: 2 })],
      }),

      // ===== 教育背景 =====
      sectionTitle("教育背景"),
      new Paragraph({
        spacing: { after: 40, line: 250 },
        tabStops: [{ type: TabStopType.RIGHT, position: 9300 }],
        children: [
          run("XXX大学　软件工程（本科）", { size: 21, bold: true }),
          run("\t20XX.09 – 2027.06（2027 届）", { size: 19, color: MUTED }),
        ],
      }),

      // ===== 专业技能 =====
      sectionTitle("专业技能"),
      skillRow("AI / Agent", ["LangChain", "RAG 检索增强生成", "Milvus 向量数据库", "MCP 协议", "Agent 工作流（ReAct / Tool Use）", "SSE 流式输出", "transformers.js 端侧推理"]),
      skillRow("前端", ["React 18", "TypeScript", "Vue 3 + Vite", "Next.js（SSR / RSC）", "Tailwind CSS"]),
      skillRow("后端", ["Node.js / Bun", "RESTful API", "BFF 架构", "DeepSeek / 大模型 API 集成"]),
      skillRow("工具", ["Git / GitHub", "Claude Code / Codex", "WebGPU", "Web Worker"]),

      // ===== 项目经验 =====
      sectionTitle("项目经验"),

      projHead("天龙八部知识库 RAG 问答系统", "AI 应用", "LangChain · Milvus · Embedding · RAG"),
      bullet("LangChain loader / splitter 完成 epub 等多格式文档加载与分块（chunk_size / overlap 调优），embedding 向量化存入 Milvus，跑通 RAG 全流程。"),
      bullet("cosine 相似度 top-k 语义检索，相关片段拼入 Prompt 增强生成，缓解大模型幻觉，实现私有知识库自然语言问答。"),

      projHead("MCP Server 开发与远程 MCP 集成", "Agent 开发", "MCP 协议 · stdio / HTTP · Tool Use"),
      bullet("基于 Model Context Protocol 编写 MCP Server，stdio / HTTP 跨进程、跨语言标准化工具调用，理解 LLM 与工具解耦的协议设计。"),
      bullet("集成高德地图（路线规划）、Chrome DevTools（浏览器控制）、File System（文件读写）等远程 MCP，搭建 Agent 第三方工具调用工作流。"),

      projHead("DeepSeek-R1 WebGPU 端侧推理", "端侧 AI", "React · TypeScript · transformers.js · WebGPU · Web Worker"),
      bullet("基于 @huggingface/transformers.js 在浏览器端加载 DeepSeek-R1-Distill-Qwen 1.5B，WebGPU 端侧推理，数据不出浏览器、无需 API Key。"),
      bullet("Web Worker 异步加载大模型，process_callback 流式展示下载 / 推理进度，marked 渲染模型输出的 Markdown。"),

      projHead("SSE 流式 AI 对话", "全栈", "Node.js BFF · SSE · Vue 3 · Vite"),
      bullet("前端 fetch 经 Node BFF 层转发大模型接口，SSE 流式解析二进制流分块，实现打字机式流式输出；Vite 代理解决跨域，流解析逻辑抽象到 BFF 层。"),

      projHead("Next.js 全栈博客 + React 全栈任务清单", "全栈", "Next.js（SSR / RSC） · React · TypeScript · Bun · RESTful"),
      bullet("Next.js 实践 SSR 与 React Server Component，两栏 Markdown 笔记 CRUD（marked 渲染）；Bun 后端 RESTful 接口（GET / POST / PATCH / DELETE），前端 model / api 分层、面向接口编程。"),

      // ===== 自我评价 =====
      sectionTitle("自我评价 / 亮点"),
      bullet("项目驱动学习 AI 全栈，维护 50+ commits 学习仓库，覆盖 RAG、MCP、Agent、SSE 流式、端侧推理完整链路。"),
      bullet("熟练使用 Claude Code / Codex 等 AI 编程工具与 Agent 工作流，践行借助 AI 独立完成项目闭环的开发方式；对 Agent 体系（LLM + Memory + Tool + RAG + MCP + Skills）有系统认知。"),
    ],
  }],
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync(__dirname + "/resume.docx", buf);
  console.log("resume.docx 已生成: " + buf.length + " bytes");
});
