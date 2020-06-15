module.exports = function (grunt) {

    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "src/css/style.css": "src/less/main.less",
                    "src/css/style404.css": "src/less/style404.less"
                }
            }
        },
        includereplace: {
            gestus: {
              options: {
                // Task-specific options go here.
              },
              // Files to perform replacements and includes with
              src: '*.html',
              // Destination directory to copy files to
              expand: true, cwd: 'src/pages/',
              dest: 'dist/'
            }
        },
        includereplacemore: {
          gestus: {
            options: {
              // Task-specific options go here.
            },
            // Files to perform replacements and includes with
            src: '*.html',
            // Destination directory to copy files to
            expand: true, cwd: 'src/pages/',
            dest: 'dist/'
          }
        },
        copy: {
            styles: {
              files: [
                // includes files within path
                {expand: true, src: ['css/*'], dest: 'dist/', cwd: 'src/', filter: 'isFile'},
          
                // includes files within path and its sub-directories
               // {expand: true, src: ['path/**'], dest: 'dest/'},
          
                // makes all src relative to cwd
               // {expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},
          
                // flattens results to a single level
               // {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
              ],
            },
            scropts: {
                files: [
                  {expand: true, src: ['js/*'], dest: 'dist/', cwd: 'src/', filter: 'isFile'},
                ],
            },
            images: {
                files: [
                  {expand: true, src: ['img/**'], dest: 'dist/', cwd: 'src/'},
                ],
            },
            fonts: {
                files: [
                  {expand: true, src: ['fonts/**'], dest: 'dist/', cwd: 'src/'},
                ],
            },
            root: {
                files: [
                  {expand: true, src: ['**'], dest: 'dist/', cwd: 'src/root-files/', dot: true},
                ],
            },
          },
        watch: {
            styles: {
                files: ['src/js/**/*.js', 'src/less/**/*.less', 'src/pages/**/*.html', 'src/img/**/**'],
                tasks: ['less', 'includereplacemore', 'copy'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-include-replace');
    grunt.loadNpmTasks('grunt-include-replace-more');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['less', 'includereplacemore', 'copy', 'watch']);
};