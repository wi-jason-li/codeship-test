var path = require('path');

module.exports = function(grunt) {
    'use strict';


    function loadConfig(path) {
        var obj = {},
            file,
            key;

        grunt.file.expand(path).forEach(function(option) {
            file = option.replace(/\.js$/,'');
            key = file.match(/[^\/]+$/);

            obj[key] = require(file);
        });

        return obj;
    }

    var config = {
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
        }
    };

    grunt.util._.extend(config, loadConfig('./tasks/options/*'));
    require('load-grunt-tasks')(grunt);

    grunt.initConfig(config);

    grunt.loadTasks('tasks');

    grunt.registerTask('default', ['build']);
};