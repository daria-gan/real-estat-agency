// подгружаю плагины
import replace from "gulp-replace"; // Для поиска и замены
import plumber from "gulp-plumber"; // Обработка ошибок
import notify from "gulp-notify"; // Сообщения и подсказки
import browsersync from "browser-sync"; // Локальный сервер
import newer from "gulp-newer"; // проверка обновления
import ifPlugin from "gulp-if"; // разделение на режим разработчика и продакшена

// создаю объект с плагином
export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
  newer: newer,
  if: ifPlugin
};
