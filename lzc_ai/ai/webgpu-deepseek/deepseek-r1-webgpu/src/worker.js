import {
  AutoTokenizer,
  AutoModelForCausalLM,
  TextStreamer,
  InterruptableStoppingCriteria,
} from "@huggingface/transformers";
// 不能dom
async function check() {
  try {
    // window 
    // DOM Document Object Model  document
    // BOM Browser Object Model navigator 
    // adapter 是 GPU 适配器的抽象，
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

class TextGenerationPipeline {
  static model_id = "onnx-community/DeepSeek-R1-Distill-Qwen-1.5B-ONNX";

  static async getInstance(progress_callback = null) {
    this.tokenizer ??= AutoTokenizer.from_pretrained(this.model_id, {
      progress_callback,
    });

    this.model ??= AutoModelForCausalLM.from_pretrained(this.model_id, {
      dtype: "q4f16",
      device: "webgpu",
      progress_callback,
    });

    return Promise.all([this.tokenizer, this.model]);
  }
}

const stopping_criteria = new InterruptableStoppingCriteria();

let past_key_values_cache = null;

async function load() {

// Load the pipeline and save it for future use.
  const [tokenizer, model] = await TextGenerationPipeline.getInstance((x) => {
    // We also add a progress callback to the pipeline so that we can
    // track model loading.
    self.postMessage(x);
  });

  self.postMessage({
    status: "loading",
    data: "Compiling shaders and warming up model...",
  });

  // Run model with dummy input to compile shaders
  const inputs = tokenizer("a");
  await model.generate({ ...inputs, max_new_tokens: 1 });
  self.postMessage({ status: "ready" });

// console.log(this.tokenizer,"/////////");
}


// 事件监听
self.addEventListener("message", async (e) => {
  const { type, data } = e.data;

  switch (type) {
    // 检查webgpu是否支持
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
    // 重置模型
    case "reset":
      break;
  }
});

