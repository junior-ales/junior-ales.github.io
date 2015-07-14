//http://www.colourlovers.com/palette/1396022/gray_matters
module.exports = {
  config: {
    paths: {
      public: 'dist/'
    },
    files: {
      javascripts: {
        joinTo: {
          'scripts/app.js': /^app/,
          'scripts/libs.js': /^vendor\/scripts/
        }
      },
      stylesheets: {
        joinTo: {
          'styles/app.css': /^app/,
          'styles/libs.css': /^vendor\/styles/
        }
      },
      templates: {
        joinTo: 'scripts/app.js'
      }
    }
  }
};
