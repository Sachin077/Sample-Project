/*
 * grunt-node-mocha
 * https://github.com/sannymulyono/grunt-node-mocha
 *
 * Copyright (c) 2014 Sanny Mulyono
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['coverage']
        },

        // Configuration to be run (and then tested).
        node_mocha: {
            without_coverage : {
                src : ['examples/test-example.js'],
                options : {
                    mochaOptions : {
                        globals : ['expect'],
                        timeout : 3000,
                        ignoreLeaks : false,
                        ui : 'bdd',
                        reporter : 'landing'                        
                    }
                }
            },
            with_coverage: {
                src : ['examples/test-example.js'],
                options : {
                    mochaOptions : {
                        globals : ['expect'],
                        timeout : 3000,
                        ignoreLeaks : false,
                        ui : 'bdd',
                        reporter : 'spec'                        
                    },
                    runCoverage : true
                }
            },
            functional_test : {
                src : ['test/node_mocha_test.js']
            }
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'node_mocha']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};