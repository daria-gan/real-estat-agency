import svgSprite from "gulp-svg-sprite"; 
import { TRUE } from "node-sass";

export const svgSprive = () => {
    // 
    return app.gulp.src(`${app.path.src.svgicons}`, {})
        .pipe(app.plugins.plumber( 
            app.plugins.notify.onError({
                title: "SVG",
                message: "Error: <%= error.message %>"
            }))
        )
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: `../icons/icons.svg`,
                    // создаёт страницу с перечнем иконок
                    example: true
                }
            },
        }))
        
        .pipe(app.gulp.dest(`${app.path.build.images}`));
}
    