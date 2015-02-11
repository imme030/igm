
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
      js: {
        src: ['js/jquery2.1.3.js','js/bootstrap.js','js/jquery.dotdotdot.js','js/igm.js','js/flexslider/jquery.flexslider-min.js', 'js/stackslider/stackslider.js'],
        dest: 'js/scripts.js'
      }
     // dist: {
      //  src: 'js/*.js',
      //  dest: 'js/igmnrw.js'
      //}
    },
   uglify: {
        dist: {
          src: 'js/scripts.js',
          dest: 'js/scripts-min.js'
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