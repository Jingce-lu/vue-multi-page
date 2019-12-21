const projectName = require('./project')

const config = {
    //活动1
    projectA: {
      pages: {
        index: {
          entry: 'src/projects/projectA/main.js',
          outputDir: "dist/projectA/",
          template: 'public/index.html',
          filename: 'index.html',
          title: 'projectA Page',
        }
      }
    },
    //活动2
    projectB: {
      pages: {
        index: {
          entry: 'src/projects/projectB/main.js',
          outputDir: "dist/projectB/",
          template: 'public/index.html',
          filename: 'index.html',
        }
      }
    }
}

const configObj = config[projectName.name]
module.exports = configObj
