<script  lang="ts">
import {defineComponent} from "vue";
import '../styles/app.css'

export default defineComponent({
  components: {
    TestComponent,
    ChangeLanguageComponent
  }
})
</script>

<template>
  <ChangeLanguageComponent />
  <test-component />
</template>

<style scoped>

</style>