<script setup lang="ts">
// Все окно с расписанием
import AppLessonListV2 from './AppLessonListV2.vue';
const lessonLists = [
  // я хз что с этим сделать ыыы
  {},
  {},
  {},
  {},
  {},
  {}
];

</script>

<template>
  <div class="app-schedule-container">
    <p class="app-schedule-title">
      Расписание занятий GroupName
    </p>
    <div
      v-for="(lessonList, index) in lessonLists"
      :key="index"
    >
      <AppLessonListV2 :lessons="lessonList" />
    </div>
  </div>
</template>


<style scoped>
.app-schedule-title {
  font-size: 32px;
  font-weight: 600;
}

.app-schedule-container {
  max-height: 100vh;
  border-left: 2px solid rgb(199, 199, 199);
  border-right: 2px solid rgb(199, 199, 199);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 44px 64px;
  overflow-y: auto;
}
</style>