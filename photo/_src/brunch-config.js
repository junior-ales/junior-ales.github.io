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
      }
    },

    plugins: {
      afterBrunch: [
        'cp -R app/styles/fonts/ dist/styles/fonts'
      ]
    }
  }
};
