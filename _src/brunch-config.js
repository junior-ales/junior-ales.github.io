module.exports = {
  config: {
    paths: {
      public: 'dist/'
    },

    files: {
      javascripts: {
        joinTo: {
          'scripts/app.js': /^app\//,
          'scripts/libs.js': /^vendor\/scripts\//,
          'scripts/libs-header.js': /^vendor\/headerScripts\//
        },

        order: {
          before: [
            'app/scripts/main.js',
            'vendor/scripts/react.js',
            'vendor/scripts/react-dom.js'
          ]
        }
      },

      stylesheets: {
        joinTo: {
          'styles/app.css': /^app\//,
          'styles/libs.css': /^vendor\/styles\//
        },

        order: {
          before: [
            'app/styles/font-awesome.min.css',
            'app/styles/google-fonts.css',
            'app/styles/main.css',
            'app/styles/main-responsive.css'
          ]
        }
      },

      templates: {
        joinTo: 'scripts/app.js'
      }
    }
  }
};
