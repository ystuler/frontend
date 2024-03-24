<script setup lang="ts">
//Включает в себя информацию о расписании (от выбора недели до легенды)
import AppLesson from './AppLesson.vue';
import { useLessonStore } from '../stores/lesson.store';
import { computed } from 'vue';

const lessonStore = useLessonStore();
const lessons = computed(() => lessonStore.lessons) 

</script>

<template>
  <div class="app-lesson-list">
    <div class="day">
      <p> Понедельник </p> <p>01.01</p>
    </div>
    <AppLesson
      v-for="lesson in lessons" 
      :key="lesson.id"
      :time-start="lesson.timeStart"
      :time-end="lesson.timeEnd"
      :name="lesson.name"
      :subgroup="lesson.subgroup"
      :teacher="lesson.teacher"
      :audience="lesson.audience"
    /> 
  </div>
</template>

<style scoped>

.app-lesson-list {
  width: 100%;
  min-height: 120px;
  background-color: rgb(239, 239, 239);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px 0;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.2);;
}
.day {
  width: 100%;
  font-size: 24px;
  font-weight: 600;
  margin: 0 24px;
  gap:12px;
  display: flex;
}
</style>