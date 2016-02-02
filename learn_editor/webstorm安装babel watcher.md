npm install -g babel-cli
npm install babel-preset-es2015
npm install babel-preset-react
File => Settings => Tools => File Watchers => + => Babel
可以添加两个Babel Watcher，一个监听es6的js文件，一个监听jsx文件，每个Watcher可以配置对应的Scope（监听范围）
创建.babelrc文件
输入
{
  "presets": ["es2015","react"]
}
