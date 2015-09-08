module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'http-server': {
      'dev': {
        'root':'',
        'port':'8282',
        'host':'0.0.0.0',
        'showDir':true,
        'autoIndex':true,
        'ext':'html',
      }
    },
    'less': {
      'development': {
        'files': {
          'app/styles/app.css': 'app/styles/less/app.less',
        }
      },
    },
  });
  grunt.loadNpmTasks('grunt-http-server');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['less', 'http-server']);
};