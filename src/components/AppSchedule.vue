<script setup lang="ts">
//Все окно с рассписанием
import AppLessonList from './AppLessonList.vue';
</script>

<template>
  <div class="app-schedule-container">
    <p class="app-schedule-title">
      Расписание занятий GroupName
    </p>
    <AppLessonList />
  </div>
</template>


<style scoped>
.app-schedule-title {
  font-size: 32px;
  margin-top: 24px;
}

.app-schedule-container {
  width: 50vw;
  height: 90vh;
  border-radius: 40px;
  background-color: rgb(255, 254, 254);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 0 64px;
}
</style>