import gulp from 'gulp';
import {nunjucksCompile as nunjucks} from 'gulp-nunjucks';
import paths from '../paths.js'; // Import paths module

const data = {
    name: 'Starter Kit'
}

// Define the 'html' task using ES Modules
export const html = () => {
    return gulp.src(paths.src.html)
    .pipe(nunjucks(data))
    .pipe(gulp.dest(paths.dist.base));
};
