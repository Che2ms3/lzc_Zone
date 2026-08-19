 interface User{
    id:number;
    name:string;
    age:number;
    email:string;
}
// 有什么特性 一个类型挑选一些你需要的字段，形成新的类型？
// 负责项目，区分度
// 大型项目类型消费比较多
type UserPreview = Pick<User,'id'|'name'>;
const u: UserPreview = {
    id:1,
    name: 'zh',
}

// Omit 去掉部分字段
type UserSafe = Omit<User,'email'>;

const safeUser:UserSafe = {
    id:2,
    name:'dd',
    age:18
}
// 所有字段全部变成可选
type PartialUser = Partial<User>;
// patch 修改 对象属性很多，
const patchUser:PartialUser = {
    name:'mm',
    age:18
}
const emptyObj:PartialUser = {};
// json key:value
type Dict = Record<string,number>;
const obj: Dict = { a:1,b:2 }; 
// http 状态码 status code
// 1XX 执行中
// 2XX 执行中
// 3XX 要跳转
// 4XX 用户错误
// 5XX 服务器错 
type ErrorMsgMap = Record<number,string>;
const errorMessage: ErrorMsgMap = {
    400:"请求参数错误",
    401:"未登录，请重新登录",
    403:"权限不足，禁止访问",
    404:"资源找不到",
    500:"服务器内部错误"
}

function getErrMsg(code:number){
    return errorMessage[code]??"未知错误"
}

function fn(){return{x:1,y:2}};
type fnReturn = ReturnType<typeof fn>;
// 联合类型
type All = "id"|"name"|"age"|"email";
type AfterExclude = Exclude<All,"email">;
// Omit ? Exclude 处理联合类型，Omit处理接口
