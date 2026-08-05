import * as React from 'react';
// props 需要满足的接口约束
interface Props{
    username:string;
}
// 类型别名
// type Props = { 
//     username:string;
// }
const Hello: React.FC<Props>  = (props) =>{
    return (
        <h2>Hello {props.username}!</h2>
    )
}

export default Hello;
