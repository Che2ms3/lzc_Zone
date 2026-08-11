  interface User {
    name: string;
    age: number;
    avatarUrl: string;
  }
  type UserType = {
    name: string;
    age: number;
    avatarUrl: string;
  }

const u1:User = {
    name: '张三',
    age: 20,
    avatarUrl: 'http://example.com/avatar.jpg'
}
const u2:User = {
    name: '李四',
    age: 20,
    avatarUrl: 'http://example.com/avatar.jpg'
}

interface Person {
    name: string;
}
// 不从0开始，继承Person
interface Employee extends Person {
    job: string;
}
// 类型别名
type PersonType = { name: string }
type EmployeeType = PersonType & { job: string }
const e1:Employee = { name:'陈总',job:'bytedance Agent开发工程师'}
const e2:EmployeeType = { name: '钟总',job:'大厂苗子'}
