// 不能dom
async function check() {
    try {
    // window
    // DOM Document Object Model 
    // BOM Browser Object Model navigator
    // adapter 是GPU 适配器的抽象，
    // 后续所有 WebGPU 计算/渲染操作都通过 device 执行
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) {
        // 抛出错误
      throw new Error("WebGPU is not supported (no adapter found)");
    }
    // fp16_supported = adapter.features.has("shader-f16")
  } catch (e) {
    self.postMessage({
      status: "error",
      data: e.toString(),
    });
  }
}

async function load() {
    
}
// 事件监听
self.addEventListener("message", async (e) => {
  const { type, data } = e.data;

  switch (type) {
    // 检查gpu是否支持
    case "check":
      check();
      break;
      // 加载模型
    case "load":
      load();
      break;
      // 生成文本
    case "generate":
      break;
      // 中断生成
    case "interrupt":
      break;
      // 重制模型
    case "reset":
      break;
  }
});
