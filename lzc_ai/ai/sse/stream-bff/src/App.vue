<script setup>
// 一次性的-> 流式  前端 -> bff -> llm请求
// 简洁
fetch('/api/stream?prompt=hello')
.then(res => res.json())
.then(data => {
  console.log(data);
})
</script>

<template>
<div class="container">
  <div>
    <label>输入：</label><input class="input" v-model="question" />
    <button @click="update">提交</button>
  </div>
  <div class="output">
    <div><label>Streaming</label><input type="checkbox" v-model="stream"/></div>
    <div>{{ content }}</div>
  </div>
</div>
</template>
