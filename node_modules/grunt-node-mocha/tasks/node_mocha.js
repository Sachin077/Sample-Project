/*
 * grunt-node-mocha
 * https://github.com/sannymulyono/grunt-node-mocha
 *
 * Copyright (c) 2014 Sanny Mulyono
 * Licensed under the MIT license.
 */

'use strict';
module.exports = function(grunt) {
    function runMochaTest(target, data){
        grunt.config('simplemocha.' + target, data);
        grunt.task.run('simplemocha:' + target);
    }

    function runMochaIstanbulTest(target, data){
        grunt.config('mocha_istanbul.' + target, data);
        grunt.task.run('mocha_istanbul:' + target);
    }

    grunt.registerMultiTask('node_mocha', 'Opiniated complete mocha testing framework for nodejs application. Where all watch,clean,mocha and instanbul code coverage configured as one.', function() {
        //-- load task dependencies
        grunt.loadNpmTasks('grunt-simple-mocha');
        grunt.loadNpmTasks('grunt-mocha-istanbul');

        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            runCoverage: false
        });

        // merge options with this.data.options
        this.data.options = options;

        if (options.runCoverage){
            // mocha-istanbul
            runMochaIstanbulTest(this.target, this.data);
        } else {
            // simple-mocha 
            // putting all options.mochaOptions into options
            if (this.data.options.hasOwnProperty("mochaOptions")){
                this.data.options = this.data.options.mochaOptions;
            } else {
                this.data.options = {};
            }
            runMochaTest(this.target, this.data);
        }
    });
};