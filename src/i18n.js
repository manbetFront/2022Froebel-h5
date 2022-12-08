import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

function loadLocaleMessages() {
  const locales = require.context("./lang", true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}
let lang = sessionStorage.getItem("lang");
console.log("lang11", lang);
console.log("loadLocaleMessages", loadLocaleMessages());
export const i18n = new VueI18n({
  locale: lang,
  fallbackLocale: "zh-CN",
  messages: loadLocaleMessages(),
});
i18n.setLang = (lang) => {
  console.log("zzzz");
  i18n.locale = lang;
  return lang;
};
export default i18n;
