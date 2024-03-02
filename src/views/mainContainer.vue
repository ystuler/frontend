<script  lang="ts">
import TestComponent from "../components/testComponent.vue";
import ChangeLanguageComponent from "../components/changeLanguageComponent.vue";
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
  <ChangeLanguageComponent></ChangeLanguageComponent>
  <test-component></test-component>
</template>

<style scoped>

</style>