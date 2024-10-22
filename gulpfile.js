import gulp from 'gulp';

// Import tasks explicitly
import { clean } from './gulp/tasks/clean.js';
import { styles } from './gulp/tasks/styles.js';
import { scripts } from './gulp/tasks/scripts.js';
import { html } from './gulp/tasks/html.js';
import { images } from './gulp/tasks/images.js';
import { serve } from './gulp/tasks/serve.js';

// Development task (no minification, sourcemaps enabled, etc.)
gulp.task('dev', gulp.series(
    clean,
    gulp.parallel(styles, scripts, html, images),
    serve
));

// Production task (with minification, no sourcemaps, etc.)
gulp.task('dist', gulp.series(
    clean,
    gulp.parallel(styles, scripts, html, images)
));
