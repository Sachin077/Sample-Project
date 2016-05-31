# grunt-node-mocha

> Opiniated complete mocha testing framework for nodejs application. Where all watch,clean,mocha and instanbul code coverage configured as one.

## Install and Configuration 

```shell
npm install grunt-node-mocha --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-node-mocha');
```

This plugin is actually combining the usage of these 2 great plugins:

* [grunt-mocha-istanbul](https://github.com/pocesar/grunt-mocha-istanbul)
* [grunt-simple-mocha](https://github.com/yaymukund/grunt-simple-mocha)

They are both great plugins to run unit test with mocha. But there are some cases where I would like just to run unit test without generating the code coverage or vice versa. So this is just to simplify thing and only have to use 1 grunt plugin. 

### Options

#### options.runCoverage
Type: `Boolean`
Default value: `'False'`

Boolean value to run the unit test  along with code coverage (e.g istanbul).

__Other options will use the same format as shown in [grunt-mocha-istanbul](https://github.com/pocesar/grunt-mocha-istanbul).__


### Usage Examples
```
module.exports = function(grunt){
    grunt.initConfig({
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
                    reportFormats : ['html'] // other grunt-mocha-istanbul can be added here
                    runCoverage : true // Run the unit test and generate coverage test
                }
            }
        }
    })
}
```

## Release History

_v0.1.0_ - Initial release!

-v0.1.1_ - Package description update