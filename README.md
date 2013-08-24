# [Neat Starter Template](http://html5boilerplate.com)

Neat Starter Template is a simple boilerplate contaning a few extra to get you off the ground. 

Neat Starter Template contains:

* Bourbon
* Neat
* Forms and Tables from Pure, modified to work with base elements without having to declare any classes in css. (".pure-form" now targets "form" etc.)

* Source: [https://github.com/Sashmac/neat-starter-template](https://github.com/Sashmac/neat-starter-template)

## Quick start

Clone the git repo — `git clone
https://github.com/Sashmac/neat-starter-template`

**If you find any bugs, or would like to contribute, feel free to do so.**

**If you have knowledge of testing, I would appreciate it if someone could whip up soe testing units for this project.**

## Features

* HTML5 ready. Use the new elements with confidence.
* Cross-browser compatible (Chrome, Opera, Safari, Firefox 3.6+, IE6+).
* Designed with progressive enhancement in mind.
* Includes [Normalize.css](http://necolas.github.com/normalize.css/) for CSS
  normalizations and common bug fixes.
* The latest [jQuery](http://jquery.com/) via CDN, with a local fallback.
* The latest [Modernizr](http://modernizr.com/) build for feature detection.
* IE-specific classes for easier cross-browser control.
* Placeholder CSS Media Queries.
* Useful CSS helpers.
* Default print CSS, performance optimized.
* Protection against any stray `console.log` causing JavaScript errors in
  IE6/7.
* An optimized Google Analytics snippet.
* Apache server caching, compression, and other configuration defaults for
  Grade-A performance.
* Cross-domain Ajax and Flash.
* "Delete-key friendly." Easy to strip out parts you don't need.
* Extensive inline and accompanying documentation.
* Includes [Bourbon](http://bourbon.io/) and [Neat](http://neat.bourbon.io/)
* Includes the Forms and Tables part of [Pure CSS](http://purecss.io/)
* Includes a Grunt build system.


## Documentation

### Grunt

A grunt build system has been added to this project. There are two build systems.

* Dev build (grunt dev) 
    - Cleans up any left over minified js files to pass JSHint.
    - Compiles **SASS** for files in css/sass in to single expanded **main.css**
    - Runs JSHint on all JS files, excluding files in the **"vendor"** directory
* Final build (grunt)
    - Compiles SASS for files in css/sass in to single minfied MAIN.CSS file.
    - Runs JSHint on all JS files, excluding files in the "vendor" directory.
    - Concatinates all JS files.
    - Uglifies concatinated js file.
    - Compresses JPG and PNG images.

**Use grunt watch:server to launch a livereload server. At the moment, this requires the [live reload](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-) Chrome extension.**

**Use @import to include any other .sccs files in to the final build. Compass only target _main.scss and its imports.**

### HTML5 Boilerplate

Take a look at the [documentation table of contents](doc/TOC.md). This
documentation is bundled with the project, which makes it readily available for
offline reading and provides a useful starting point for any documentation you
want to write about your project.


## To-do

* Add grunt support for compiling, minifying, uglifying, autoprefixing, and concatination

Html5 boilerplate with bourbon, neat and pure forms and tables
>>>>>>> 8738a85af4c867cf5ab9a2c35a8b70730ab1d887
