module.exports = function(grunt) {
 grunt.initConfig({
   pkg: grunt.file.readJSON('package.json'),

   concat: {
     options: {
       // define a string to put between each file in the concatenated output
       seperator: ';'
     },
     dist: {
       // the files to concatenate
       src: ['src/**/*.js'],
       // the location of the resulting JS file
       dest: 'dist/<%= pkg.name %>.js'
     }
   },
   uglify: {
     options: {
       // the banner is inserted at the top of the output
       banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
     },
     dist: {
       'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
     }
   },
   less: {
     development: {
       options: {
         paths: ['content']
       },
       files: {
         "dist/css/style.css": 'less/main.less'
       }
     }
   },
   qunit: {
     files: ['test/**/*.html']
   },
   jshint: {
     // define the files to lint
     files: ['Gruntfile.js', 'js/**/*.js'],
     // configure JSHint (documented at http://www.jshint.com/docs/)
     questions: {
       // more options here if you want to override JSHint defaults
       globals: {
         jQuery: true,
         console: true,
         module: true
       }
     }
   },
   watch: {
     files: ['<%= jshint.files %>', 'less/*.less'],
     tasks: ['jshint', 'less']
   }
 });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('test', ['jshint','qunit']);
  grunt.registerTask('default',['jshint','qunit','concat','uglify','less']);
};
