module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        ts: {
            src: {
                src: ['node/*.ts'],
                dest: 'js',
                options: {
                    module: 'commonjs',
                    target: 'es5',
                    sourceMap: true,
                    declaration: false,
                    experimentalDecorators: true,
                    watch: true
                }
            },
            test: {
                src: ['test/**/*.ts'],
                dest: 'js-test',
                options: {
                    module: 'commonjs',
                    target: 'es5',
                    sourceMap: true,
                    declaration: false,
                    experimentalDecorators: true
                }
            }
        },
        'node_mocha': {
            test: {
                src: ['js-test/test/**/*.js'],
                options: {
                    mochaOptions: {
                        globals: ['expect'],
                        timeout: 3000,
                        ignoreLeaks: false,
                        ui: 'bdd',
                        reporter: 'landing'
                    }
                }
            },
            coverage: {
                src: ['js-test/test/**/*.js'],
                options: {
                    mochaOptions: {
                        globals: ['expect'],
                        timeout: 3000,
                        ignoreLeaks: false,
                        ui: 'bdd',
                        reporter: 'spec'
                    },
                    reportFormats: ['html'], // other grunt-mocha-istanbul can be added here
                    runCoverage: true // Run the unit test and generate coverage test
                }
            }
        },
        'http-server': {
            'coverage': {
                root: 'coverage'
            }
        },
        shell: {
            debug: {
                command: 'node-debug js/MyUserServer.js'
            }
        },
        nodemon: {
            dev: {
                script: 'js/MyUserServer.js'
            }
        },
        tsd: {
            refresh: {
                options: {
                    command: 'reinstall',
                    latest: true,
                    config: 'tsd.json'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-node-mocha');
    grunt.loadNpmTasks('grunt-http-server');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-tsd');
    grunt.loadNpmTasks('grunt-ts');

    grunt.registerTask('build', ['tsd', 'ts:src']);
    grunt.registerTask('test', ['ts:test', 'node_mocha:test']);
    grunt.registerTask('coverage', ['ts:test', 'node_mocha:coverage', 'http-server:coverage']);
    grunt.registerTask('run', ['nodemon']);
    // Must have installed node-inspector globally 'sudo npm install -g node-inspector'
    grunt.registerTask('debug', ['shell:debug']);

};