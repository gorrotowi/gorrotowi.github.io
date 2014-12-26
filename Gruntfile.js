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
          "css/main.css": "less/main.less",
          "css/default.css":"less/default.less",
          "css/media-queries.css":"less/media-queries.less"
        }
      }
    },
    jade: {
      compile: {
        options: {
          pretty: false
        },
        files: {
          // target.css file: source.less file
          "index.html": "jade/index.jade"
        }
      }
    },
    watch: {
      jade: {
        files: ['jade/**/*.jade'], // which files to watch
        tasks: ['jade'],
        options: {
          nospawn: true
        }
      },
      less: {
        files: ['less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
};