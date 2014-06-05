module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    nodewebkit: {
      options: {
        build_dir: './build',
        win: true,
        mac: true,
        linux32: true,
        linux64: true
      },
      src: ['./src/**/*']
    }
  });
  
  grunt.loadNpmTasks('grunt-node-webkit-builder');
  grunt.registerTask('default', ['nodewebkit']);
}