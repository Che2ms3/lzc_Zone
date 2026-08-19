## Docker
- 本地安装了mysql
- docker pull mysql

// docker run -d --name mysql-demo -p 3307: -e MYSQL_ROOT_PASSWORD=123456 mysql:8.0 

docker exec -it mysql-demo /bin/bash
进入Linux终端

mysql -uproot -p123456

## TS 高级类型
- Pick<T,选取类型的联合字符串>
- Omit<T,要排除的类型的联合字符串>

Omit<T,k> 等价于Pick<T,Exclude<keyof T,k>> 怎么理解？
- keyof T 拿到 所有的键的联合类型
- Exclude 把要剔除的K键删除，剩下的需要保留的键
- 再用Pick把剩下的键从类型T中挑选出来，就实现了Omit 的效果
- TS 内部Omit的等价实现

## 工具类型
Pick、Omit、Partial、Exclude、keyed、Record、ReturnType
