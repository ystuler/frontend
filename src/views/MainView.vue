<script setup lang="ts">
import AppSchedule from '../components/AppSchedule.vue';
import AppAddLesson from '../components/AppAddLesson.vue';
</script>

<template>
  <div class="main-container">
    <div class="main-container-block">
    </div>
    <div class="main-container-block">
      <AppSchedule />
    </div>
    <div class="main-container-block">
      <AppAddLesson />
    </div>
  </div>
</template>

<style scoped>
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


