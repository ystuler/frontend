<script setup lang="ts">
// Все окно с расписанием
import AppLessonList from './AppLessonList.vue';
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
    <h2 class="app-schedule-title">
      Расписание занятий GroupName
    </h2>
    <div
      v-for="(lessonList, index) in lessonLists"
      :key="index"
    >
      <AppLessonList :lessons="lessonList" />
    </div>
  </div>
</template>


<style scoped>
.app-schedule-title {
  font-weight: 600;
}

.app-schedule-container {
  max-height: 100vh;
  border-left: 2px solid rgb(199, 199, 199);
  border-right: 2px solid rgb(199, 199, 199);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
}
/* Mobile, Landscape */
@media (max-width: 1134px) {
  .app-schedule-container {
    padding: calc(20 * 100vw / 480);
    gap: 8px;
  }
}
/* Desktop */
@media (min-width: 1134px) and (min-aspect-ratio: 6/5) {
  .app-schedule-container {
    padding: calc(10 * 100vw / 480);
    gap: 24px;
  }
}
/* Wide (Ultra Wide) Monitors */
@media (min-width: 1134px) and (min-aspect-ratio: 5/2) {
  
  .app-schedule-container {
    padding: calc(4 * 100vw / 480);
    gap: 24px;
  }
}
</style>