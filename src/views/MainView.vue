<script setup lang="ts">
import AppSchedule from '../components/AppSchedule.vue';
import AppAddLesson from '../components/AppAddLesson.vue';
</script>

<template>
  <div class="main-container">
    <div class="main-container-block" />
    <div class="main-container-block">
      <AppSchedule />
    </div>
    <div class="main-container-block main-container-block__add-lesson">
      <AppAddLesson />
    </div>
  </div>
</template>

<style scoped>
.main-container-block__add-lesson {
  padding: 0 32px;
}
.main-container-block {
  width: 100%;
  display: flex;
  justify-content: center;
}
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>


