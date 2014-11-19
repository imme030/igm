
module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          // target.css file: source.less file
          "css/igm.css": "less/igm.less"
        }
      }
    },
    concat: {
      dist: {
        src: 'bower_components/bootstrap/js/*.js',
        dest: 'js/bootstrap.js'
      }
    },
   uglify: {
        dist: {
            files: {
                'js/bootstrap.js': 'js/bootstrap.js'               
            }
        }
    },
    watch: {
      styles: {
        files: ['less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          livereload: true,
          nospawn: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['watch']);
};