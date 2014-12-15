'use strict';

module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        language: grunt.option('lang') || 'en',

        meta: {
            banner: '/**\n * <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                ' * <%= pkg.homepage %>\n' +
                ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
                ' * License: <%= pkg.license %>\n */\n'
        },

        build_dir: 'dist',

        files: {

            js: [
                'profile/js/jquery.js',
                'profile/js/bootstrap.js',
                'profile/js/jquery.nav.js',
                'profile/js/jquery.scrollTo.js',
                'profile/js/jquery.nicescroll.js',
                'profile/js/jquery.sticky.js',
                'profile/js/jquery.appear.js',
                'profile/js/jquery.isotope.js',
                'profile/js/jquery.parallax-1.1.3.js',
                'profile/js/jquery.easing-1.3.pack.js',
                'profile/js/owl.carousel.js',
                'profile/js/skrollr.js',
                'profile/js/gmap3.js',
                'profile/js/twitterFetcher.js',
                'profile/js/scripts.js'
            ],

            css: [
                'profile/css/bootstrap.css',
                'profile/css/font-awesome/css/font-awesome.css',
                'profile/css/fontello/css/fontello.css',
                'profile/css/styles.css',
                'profile/css/animate.css',
                'profile/css/owl.carousel.css',
                'profile/css/owl.theme.css',
                'profile/css/responsive.css',
                'profile/css/topics.css',
                'profile/css/twitterFetcher.css',
                'profile/css/colors/color-red.css'
            ]

        },

        clean: {
            options: {
                'no-write': true
            },
            process: ['<%= build_dir %>/**', '<%= build_dir %>'],
            build: [
                'profile/js/profile_all.js',
                'profile/css/profile_all.css'
            ]
        },

        csslint: {
            lax: {
                options: {
                    import: false
                },
                src: ['<%= files.css %>']
            }
        },

        jshint: {

            options: {
                jshintrc: true
            },

            all: ['Gruntfile.js', '<%= files.js %>'],

            core: {
                files: {
                    src: ['<%= files.js %>']
                }
            }
        },

        concat: {

            js: {
                options: {
                    banner: '<%= meta.banner %>'
                },
                src: ['<%= files.js %>'],
                dest: '<%= build_dir %>/profile_all.js'
            },

            css: {
                options: {
                    banner: '<%= meta.banner %>'
                },
                src: ['<%= files.css %>'],
                dest: '<%= build_dir %>/profile_all.css'
            }

        },

        cssmin: {

            compact: {
                files: [{
                    expand: true,
                    src: ['<%= concat.css.dest %>'],
                    ext: '.min.css'
                }]
            }
        },


        uglify: {
            core: {
                files: {
                    '<%= build_dir %>/profile_all.min.js': '<%= concat.js.dest %>'
                }
            }
        },

        copy: {
            js: {
                files: [{
                    cwd: '<%= build_dir %>',
                    src: 'profile_all.js',
                    dest: 'profile/js/',
                    expand: true
                }]
            },
            css: {
                files: [{
                    cwd: '<%= build_dir %>',
                    src: 'profile_all.css',
                    dest: 'profile/css/',
                    expand: true
                }]
            }
        }

    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('cls', [ 'clean:build', 'clean:process' ]);
    grunt.registerTask('process', [ 'clean:process', 'concat:js', 'uglify:core', 'concat:css', 'cssmin:compact']);
    grunt.registerTask('build', [ 'clean:build', 'copy:js', 'copy:css']);

    grunt.registerTask('default', ['process', 'build']);

};