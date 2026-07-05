let friends = [];

async function loadData() {
  // console.log('loadData');
  // endpoint 
  const endpoint = 'http://localhost:3000/friends';
  // 异步变同步
  const res = await fetch(endpoint);
  const data = await res.json();
  return data;
  await fetch(endpoint) // 发送请求 异步
    // 等待响应返回
    // 响应体是json二进制字符串 转换为json对象
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })

}
function renderData() {
  console.log('renderData');
}

async function init() {
  console.log('init start');
  await loadData();
  renderData();
}

init();
console.log('init end')
