import gulp from 'gulp';
import browserSync from 'browser-sync';
import paths from '../paths.js'; // Import paths module

import { styles } from './styles.js'; // Import the styles task
import { scripts } from './scripts.js'; // Import the scripts task
import { html } from './html.js'; // Import the html task
import { images } from './images.js'; // Import the images task

const browsersync = browserSync.create();

// Define the 'serve' task using ES module export
export const serve = () => {
    // Initialize BrowserSync server
    browsersync.init({
        server: {
            baseDir: paths.dist.base
        }
    });

    // Watch for changes in styles, scripts, html, and images
    gulp.watch(paths.watch.styles, gulp.series(styles, (done) => {
        browsersync.reload(); // Reload browser after script changes
        done();
    }));
    gulp.watch(paths.watch.scripts, gulp.series(scripts, (done) => {
        browsersync.reload(); // Reload browser after script changes
        done();
    }));
    gulp.watch(paths.watch.html, gulp.series(html, (done) => {
        browsersync.reload(); // Reload browser after script changes
        done();
    }));
    gulp.watch(paths.watch.images, gulp.series(images, (done) => {
        browsersync.reload(); // Reload browser after script changes
        done();
    }));
};
