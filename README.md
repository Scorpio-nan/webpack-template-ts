## 这是webpack多页面开发模板ts版
## 启动运行项目:
    1、如果没有node_modules文件夹，执行npm install
    2、node_modules文件夹下载完毕(一次下载，永久使用，无需删除)
    3、npm run dev
## 打包部署项目：
    npm run build--test 测试环境部署
    npm run build--prod 正式环境部署
## 配置项目内url：
    项目内url分为开发环境url和部署环境url，分别对应外层config文件夹中的-开发.js和部署.js
    1、开发环境：
        运行npm run dev的话，会先执行-devServer.js，在项目打包的目标路径static/json/下新建一个urls.json，并将-开发.js中的testData写入到urls.json中，然后在启动项目
    2、部署环境：
        同理，运行npm run build的话，会先执行-buildProd.js，在项目打包的目标路径static/json/下新建一个urls.json,并将-部署.js中的testData写入到urls.json中，然后再进行项目打包
   无论开发还是部署，经过上述步骤后，在程序中，src/public/config.js中，通过ajax请求，请求我们上面生成的urls.json，拿到数据后，通过循环把这些变量挂在到window对象中，形成全局变量，这样每个页面的js都可以直接调用，比如let last = await axios.get(URL + 'xxx接口');直接使用URL即可
## 何时dev？何时build--test？何时build--prod?
    dev:
        前端开发人员在开发时，只需要关注config/开发.js，只需改里面的url的value即可，PS：改一次，重新运行npm run dev
    build--test:
        前端开发人员在协助后台开发人员进行测试环境代码部署(代码放到测试服务器)时，只需要关注config/开发.js，只需改里面的url的value即可,然后npm run build--test进行项目打包即可
    build--prod:
        前端开发人员在协助后台开发人员进行正式环境代码部署(代码放到正式服务器)时，只需要关注config/部署.js，只需改里面的url的value即可,然后npm run build--prod进行项目打包即可
    PS：一般来说，开发环境和测试环境应该是一致的，所以只需要一个-开发.js即可
## url说明：
    URL：大部分接口的请求地址