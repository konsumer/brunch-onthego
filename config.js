/**
 * brunch config
 */

exports.config = {
  paths: {
    'public': 'www',
    'watched':['src']
  },
  files: {
    javascripts: {
      defaultExtension: 'js',
      joinTo: {
        'js/site.js': /^src/,
        'js/vendor.js': /^bower_components/,
      },
      order: {
        before: ['bower_components/angular/angular.js']
      }
    },
    stylesheets: {
      defaltExtension: 'scss',
      joinTo: {
        'css/site.css': /^src\/scss\/site\.scss/,
      }
    }
  },
  plugins:{
    sass:{
      options:{
        includePaths: ['bower_components/ionic/scss']
      }
    }
  }
};