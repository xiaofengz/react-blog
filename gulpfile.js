var gulp = require("gulp"),
    concat = require("gulp-concat"),
    commonPath = require("./build/commonPath");

// 第三方库文件
var thirdFiles = [
    'lib/codemirror.css',
    'lib/codemirror.js',
    'lib/javascript.js',
];

// 压缩合并第三方库文件，并输出到dist/static目录中
gulp.task("third", function(done) {
    return gulp.src(thirdFiles)
        .pipe(concat("thirds.min.js"))
        .pipe(gulp.dest(commonPath.src));
});