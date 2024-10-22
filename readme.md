# Gulp Starter Kit

This Gulp starter kit is designed for building HTML, CSS (SCSS), and JavaScript projects efficiently with Nunjucks templating. It provides a clean and structured setup for compiling, minifying, and optimizing assets using modern build tools. Perfect for frontend development with task automation.

## Features

- **Nunjucks Templating**: Compile Nunjucks templates into static HTML.
- **SASS (SCSS) Compilation**: Compile and minify SCSS files to CSS.
- **JavaScript Processing**: Babel transpiling, bundling with Browserify, and minification.
- **Image Optimization**: Compress images for faster loading times.
- **Live Reloading**: Automatically refresh the browser upon file changes.
- **Clean Task**: Deletes old build files before generating new ones.

## Installation

``` bash
# 1. Clone the repository
git clone https://github.com/MedBzz/gulp-starter-kit.git
   
# 2. Navigate to the project directory
cd gulp-starter-kit

# 3. Install dependencies
npm install
```
## Usage

### Development Mode
To start the project in development mode (with live reload, sourcemaps, etc.):
``` bash
npm run dev
```
### Production Mode
To build the project for production (minified, optimized files):
``` bash
npm run dist
```
