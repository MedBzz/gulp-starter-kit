import gulp from 'gulp';
import newer from 'gulp-newer';
import imagemin, {gifsicle, mozjpeg, optipng, svgo} from 'gulp-imagemin';
import paths from '../paths.js'; // Import paths module

// Define the 'images' task using ES Modules
export const images = () => {
    return gulp.src(paths.src.images, {encoding: false})
        .pipe(newer(paths.dist.images)) 
        .pipe(imagemin([
            gifsicle({interlaced: true}),
            mozjpeg({quality: 75, progressive: true}),
            optipng({optimizationLevel: 5}),
            svgo({
                plugins: [
                    {
                        name: 'removeViewBox',
                        active: true
                    },
                    {
                        name: 'cleanupIDs',
                        active: false
                    }
                ]
            })
        ])) // Optimize images
        .pipe(gulp.dest(paths.dist.images)); // Output to destination folder
};
