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
export const i18n = new VueI18n({
  locale: "zh-CN",
  fallbackLocale: "vi",
  messages: loadLocaleMessages(),
});
i18n.setLang = (lang) => {
  i18n.locale = lang;
  return lang;
};
export default i18n;
