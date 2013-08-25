module.exports = function(grunt) {
	"use strict";

	grunt.initConfig({
		watch: {
			"server": {
				options: {
					livereload: true
				},
				files: ["css/sass/**/*.scss", "js/**/*.js", '**/*.html'],
				tasks: ["default"]
			},
			"all": {
				options: {
					livereload: true
				},
				files: ["css/sass/**.scss", "js/**.js"],
				tasks: ["default"]
			}
		},
		compass: {
			dev: {
				options: {
					sassDir: 'css/sass',
					cssDir: 'css/css',
					environment: 'development',
						outputStyle: 'expanded' // expanded, nested, compact, compressed
					}
				}
			},
			autoprefixer: {
				dist: {
					files: {
						'css/css/main.css': 'css/css/main.css'
					}
				}
			},
			cssmin: {
				dist: {
					options: {
						keepSpecialComments: 0
					},
					files: {
						'css/css/main.min.css': 'css/css/main.css'
					}
				}
			},
			jshint: {
				dev: ['gruntfile.js', 'js/**/*.js'],
				options: {
					ignores: ['js/vendor/**/*.js']
				}
			},
			concat: {
				dist: {
					src: ['js/**/*.js'],
					dest: 'js/min/scripts.min.js'
				}
			},
			uglify: {
				dist: {
					options: {
						mangle: false
					},
					files: {
						'js/min/scripts.min.js': ['js/min/scripts.min.js']
					}
				}
			},
			clean: {
				cleanbuild: ['js/min/scripts.min.js', 'css/css/main.css', 'css/css/main.min.css']
			},
			imagemin: {
				dist: {
					options: {
							optimizationLevel: 5 // 0-7
						},
						files: [{
							expand: true,
							cwd: 'img/',
							src: ['**/*.png', '**/*.jpg'],
							dest: 'img/'
						}]
					}
				}
			});

/*=====================================
=            Loading Tasks            =
=====================================*/

grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-imagemin');

/*=============================================
=                Build Systems                =
=============================================*/

//	Used for the final build
//	*Compiles SASS for files in css/sass in to single minfied MAIN.CSS file. I recommend including any other .SCSS files in the MAIN.SCSS file.
//	*Runs JSHint on all JS files, excluding files in the "vendor" directory.
//	*Concatinates all JS files.
//	*Uglifies concatinated js file (scripts.temp.js) and outputs scripts.min.js.
//	*Compressed JPG and PNG images.
grunt.registerTask('default', ["clean:cleanbuild", "compass:dev", "autoprefixer:dist", "cssmin:dist", "jshint:dev", "concat:dist", "uglify:dist", "imagemin:dist"]);

//	Used for the dev build
//	*Compiles SASS for files in css/sass in to single expanded MAIN.CSS file. I recommend including any other .SCSS files in the MAIN.SCSS file.
//	*Runs JSHint on all JS files, excluding files in the "vendor" directory.
grunt.registerTask('dev', ["clean:cleanbuild", "compass:dev", "autoprefixer:dist", "jshint:dev"]);

};