module.exports = function(grunt) {
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        concat : {
            dist : {
                src : [
                    "src/js/modules/*.js",
                    "src/js/main.js"
                ],
                dest : "dist/bundle.js"
            }
        },
        uglify : {
            build : {
                src : "dist/bundle.js",
                dest : "dist/bundle.min.js"
            }
        },
        watch : {
            files : ["src/js/**/*.js"],
            tasks : ["default"]
        }
    })
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat')
    grunt.registerTask("default", ["concat", "uglify"])
}

