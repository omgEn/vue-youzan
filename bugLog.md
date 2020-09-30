## npm 报错

### peer dependencies yourself

You must install peer dependencies yourself.
需自己安装对等依赖
原因：当前 npm 版本太低。
解决：升级 npm
`npm install npm -g`

### code Elifecycle

原因：可能 node_modules 有损坏，导致依赖库不完整
解决：重新安装包
`rm -rf node_modules;`或手动删除
`rm package-lock.json;`
`npm cache clear --force;`
`npm install;`

## import & require

## JS

### [object Object]

原因：
解决：先 JSON.stringify()再 JSON.parse

### Missing initializer in const declaration

缺少初始化，比如，const a ;
