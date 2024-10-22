import gulp from 'gulp';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import paths from '../paths.js'; // Import the paths module

// Define the 'scripts' task using ES Modules
export const scripts = () => {
    return browserify({
        entries: [paths.src.scripts],
        debug: true
    })
    .bundle()
    .pipe(source('bundle.js')) // Convert browserify's bundle into a stream Vinyl can work with
    .pipe(buffer()) // Convert the streaming vinyl file to a buffered file for Gulp plugins
    .pipe(sourcemaps.init({ loadMaps: true })) // Initialize sourcemaps and load maps from browserify
    .pipe(babel({ presets: ['@babel/preset-env'] })) // Use Babel for ES6+ transpiling
    .pipe(uglify()) // Minify the JavaScript
    .pipe(sourcemaps.write('.')) // Write sourcemaps
    .pipe(gulp.dest(paths.dist.scripts)); // Output the result to the destination folder
};
