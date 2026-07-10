// 预加载模块：在所有 import 之前 patch fetch 超时
const originalFetch = globalThis.fetch;
globalThis.fetch = (url, init) => {
  if (!init?.signal) {
    return originalFetch(url, { ...init, signal: AbortSignal.timeout(30000) });
  }
  return originalFetch(url, init);
};
