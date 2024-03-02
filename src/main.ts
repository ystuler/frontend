import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'
import {createI18n, useI18n} from "vue-i18n";
import {languages} from "../i18n";
import {defaultLocale} from "../i18n";

const messages = Object.assign(languages)
const i18n = createI18n({
    legacy: false,
    locale: defaultLocale,
    fallbackLocale: 'ru',
    messages
})
const app = createApp(App, {
    setup() {
        const {t} = useI18n()
        return {t}
    }
})
app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
