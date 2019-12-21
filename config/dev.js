let projectName = process.argv[2]

console.log('正在运行的项目名————————————————————', projectName);

let fs = require('fs');

// 记录正在运行的项目名
fs.writeFileSync('./config/project.js', `exports.name = '${projectName}'`)

// 启动一个新的进程，并执行命令
let exec = require('child_process').execSync;
exec('npm run serve', {stdio: 'inherit'});

