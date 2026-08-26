# DOCKER FILE
蜜雪冰城 **标准的操作手册SOP**，写清“先加奶茶、再加奶、放三勺糖、摇匀”，
任何人照着做，做出来的味道都一样，就成了连锁店。

DOCKERFILE 是一个**文本配方文件**，里面写着一步步“做菜”的步骤
Docker照着做他就能自动做出一个一模一样的Docker镜像,运行

构建镜像 
docker build -t my-hello .
docker login -> 登录docker hub
docker push my-hello -> 推送镜像到docker hub
docker pull my-hello -> 从docker hub拉取镜像

Dockerfile 是发布项目的标准方式之一。

## todos 全栈项目 
- 前端 react + ts + zustand 
- 后端使用 nest.js + Todo Module
- nginx 
  80 -> 3000 
  跨域
  
