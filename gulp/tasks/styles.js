import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as sass from 'sass';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
import paths from '../paths.js'; // Import the paths module

const browsersync = browserSync.create();
const sassCompiler = gulpSass(sass);

// Define the styles task using ES Modules
export const styles = () => {
    return gulp.src(paths.src.styles)
        .pipe(sourcemaps.init())
        .pipe(sassCompiler().on('error', sassCompiler.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.dist.styles))
        .pipe(browsersync.stream());
};

