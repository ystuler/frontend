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
    <p class="day">
      Понедельник
    </p>
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
  gap: 36px;
  padding: 24px 0;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.2);;
}
.day {
  font-size: 24px;
  font-weight: 600;
  max-width: 100%;
  text-align: center;
}
</style>