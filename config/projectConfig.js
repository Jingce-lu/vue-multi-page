const projectName = require('./project')

const config = {
    //项目A
    projectA: {
      pages: {
        index: {
          entry: 'src/projects/projectA/main.js',
          outputDir: "dist/projectA/",
          template: 'public/index.html',
          filename: 'index.html',
        }
      }
    },
    //项目B
    projectB: {
      pages: {
        index: {
          entry: 'src/projects/projectB/main.js',
          outputDir: "dist/projectB/",
          template: 'public/index.html',
          filename: 'index.html',
        }
      }
    },
    // 更多...
}

const configObj = config[projectName.name]
module.exports = configObj
