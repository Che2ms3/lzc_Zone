// 返回jsx的函数就是组件
// 函数接受参数，复用组件的时候，进度、文件、大小不一
// 组件的属性 html属性的方式传过来
const Progress = ({ text, percentage, total }) => {
    console.log(text,percentage,total);
    return (
        <div>
            <p>{}</p>
            <p>{}</p>
            <p>{}</p>
            
        </div>
    )
}

export default Progress