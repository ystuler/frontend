<script setup lang="ts">
//Включает в себя информацию о расписании (от выбора недели до легенды)
import { useLessonStore } from '../stores/lesson.store';
import { computed } from 'vue';
import AppLesson from './AppLesson.vue';

const lessonStore = useLessonStore();
const lessons = computed(() => lessonStore.lessons);
</script>

<template>
  <div class="app-lesson-list">
    <div class="app-lesson-list__day">
      <span>
        Понедельник
      </span>
      <span>
        01.01
      </span>
    </div>
    <table class="app-lesson-list__table">
      <thead>
        <tr class="lesson-table__header">
          <th
            scope="col"
            class="lesson-table__column"
          >
            С
          </th>
          <th
            scope="col"
            class="lesson-table__column"
          >
            До
          </th>
          <th
            scope="col"
            class="lesson-table__column lesson-column__name"
          >
            Название
          </th>
          <th
            scope="col"
            class="lesson-table__column"
          >
            Преподаватель
          </th>
          <th
            scope="col"
            class="lesson-table__column"
          >
            п/г
          </th>
          <th
            scope="col"
            class="lesson-table_column"
          >
            Аудитория
          </th>
        </tr>
      </thead>
      <tbody class="lesson-table__body">
        <AppLesson
          v-for="lesson in lessons" 
          :key="lesson.id"
          class="lesson-table__lesson-row"
          :time-start="lesson.timeStart"
          :time-end="lesson.timeEnd"
          :name="lesson.name"
          :subgroup="lesson.subgroup"
          :teacher="lesson.teacher"
          :audience="lesson.audience"
        />
      </tbody>
    </table>
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
  padding: 16px 20px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
}

.app-lesson-list__day {
  font-size: 24px;
  font-weight: 600;
}

.lesson-table__header {
  border-bottom: 1px solid #3331;
}

.app-lesson-list__table {
  width: 100%;
}

.lesson-table__column {
  padding: 4px 8px;
}
</style>