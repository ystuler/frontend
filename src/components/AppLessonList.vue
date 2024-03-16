<script setup lang="ts">
//Включает в себя информацию о расписании (от выбора недели до легенды)
import AppLesson from './AppLesson.vue';
import { useLessonStore } from '../stores/lesson.store';
import { computed } from 'vue';

const lessonStore = useLessonStore();
const lessons = computed(() => lessonStore.lessons) 
</script>

<template>
  <AppLesson
    v-for="lesson in lessons" 
    :key="lesson.id"
    :time-start="lesson.timeStart"
    :time-end="lesson.timeEnd"
    :name="lesson.name"
    :subgroup="lesson.subgroup"
    :teacher="lesson.teacher"
    :audience="lesson.audience"
    class="app-lesson-info" 
  />
</template>

<style scoped>
</style>