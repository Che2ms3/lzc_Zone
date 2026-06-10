const queue = []; // 空队列
queue.push("许");
queue.push("叶");
queue.push("戴");
while(queue.length) {
    const top = queue[0];
    console.log(`请取餐`, top);
    queue.shift();
}
console.log(queue);