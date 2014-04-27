module.exports = function(grunt) {
    var phantomjs  = require('phantomjs');
    var phantombin = phantomjs.path;

    grunt.initConfig({
        exec: {
            codecept: {
                stdout: true,
                command: [
                    '"./vendor/bin/codecept" clean',
                    '"./vendor/bin/codecept" run'
                ].join('&&')
            }
        },
        run: {
            phantomjs: {
                options: {
                    wait: false,
                    quiet: true,
                    ready: /running on port/
                },
                cmd: phantombin,
                args: [
                    '--webdriver=4444'
                ],
            }
        },
        watch: {
            // This is where we’ll trigger tests automagically.
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-run');

    grunt.registerTask('default', []);

    grunt.registerTask('test', ['run:phantomjs', 'exec:codecept', 'stop:phantomjs']);
};
