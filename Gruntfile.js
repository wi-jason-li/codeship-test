var path = require('path');

module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        dirs: {
            src: {
                server: 'src/'
            },
            dist: {
                server: 'dist/'
            }
        },

        files: {
            any: '**/*'
        },

        copy: {
            server: {
                expand: true,
                cwd:   '<%= dirs.src.server %>',

                src:   '<%= files.any %>',
                dest:  '<%= dirs.dist.server %>'
            }
        },

        clean: {
            server: [
                '<%= dirs.dist.server %>'
            ]
        }
    });



    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');


    grunt.registerTask('default', ['build']);
    grunt.registerTask('build', [
        'clean', 
        'copy'
    ]);
};