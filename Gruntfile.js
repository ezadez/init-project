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
  });
  grunt.loadNpmTasks('grunt-http-server');

  grunt.registerTask('default', ['http-server']);
};