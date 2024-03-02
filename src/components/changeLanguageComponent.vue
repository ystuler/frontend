<script setup lang="ts">
import {useI18n} from "vue-i18n";

const {t, locale} = useI18n({useScope: 'global'})

const swithLang = () => {
  locale.value === 'en' ? locale.value='ru' : locale.value='en'
}
</script>

<template>
<button @click="swithLang" class="button"> change lanugage</button>
</template>

<style scoped>

</style>