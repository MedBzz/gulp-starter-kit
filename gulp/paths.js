import path from 'path';

// Assuming this is run in a Node.js environment, `path.resolve()` is used
const main = './';

const paths = {
    src: {
        base: path.resolve(main, 'src'),
        styles: path.resolve(main, 'src/assets/styles/**/*.scss'),
        scripts: path.resolve(main, 'src/assets/scripts/main.js'),
        html: path.resolve(main, 'src/views/**/*.njk'),
        // html: path.resolve(main, 'src/views/**/*.html'),
        images: path.resolve(main, 'src/assets/images/**/*')
    },
    dist: {
        base: path.resolve(main, 'dist'),
        styles: path.resolve(main, 'dist/assets/styles'),
        scripts: path.resolve(main, 'dist/assets/scripts'),
        html: path.resolve(main, 'dist'),
        images: path.resolve(main, 'dist/assets/images')
    },
    watch: {
        styles: path.resolve(main, 'src/assets/styles/**/*.scss'),
        scripts: path.resolve(main, 'src/assets/scripts/**/*.js'),
        html: path.resolve(main, 'src/views/**/*.njk'),
        // html: path.resolve(main, 'src/views/**/*.html'),
        images: path.resolve(main, 'src/assets/images/**/*')
    }
};

// Export paths as the default export
export default paths;
