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
  margin-top: 44px;
  font-weight: 600;
}

.app-schedule-container {
  width: 50vw;
  height: 100vh;
  min-width: 480px;
  border-left: 2px solid rgb(199, 199, 199);
  border-right: 2px solid rgb(199, 199, 199);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 0 64px;
}
</style>