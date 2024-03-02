<script setup lang="ts">
import {useI18n} from "vue-i18n";
const {t} = useI18n({useScope: 'global'})
</script>

<template>
  <div class='tailer'>
    {{$t('me.i')}}
  </div>
  <div class="taino">
    {{$t('me.name')}}
  </div>
</template>

<style scoped>
</style>
