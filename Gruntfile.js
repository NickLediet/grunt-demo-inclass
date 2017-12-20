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
        sass : {
            dist : {
                options : {
                    style: "compressed",
                },
                files : {
                    "dist/bundle.min.css" : "src/sass/main.sass"
                }
            }
        },
        watch : {
            scripts : {
                files : ["src/js/**/*.js"],
                tasks : ["default"]
            },
            sass : {
                files : ["src/sass/**/*.sass"],
                tasks : ["sass"]
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat')
    grunt.registerTask("default", ["concat", "uglify", "sass"])
    grunt.registerTask("watchFiles", ["watch", "sass"])
}

