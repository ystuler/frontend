<script setup lang="ts">
export interface AppLessonProps {
  timeStart: number;
  timeEnd: number;
  name: string;
  subgroup: number;
  teacher: string;
  audience: string;
}

defineProps<AppLessonProps>();
</script>

<template>
  <div class="app-lesson-info">
    <p class="time">
      {{ timeStart }} - {{ timeEnd }}
    </p>
    <p class="name">
      {{ name }}
    </p>
    <p class="teacher">
      {{ teacher }}
    </p>
    <p class="subgroup">
      {{ subgroup }}
    </p>
    <p class="audience">
      {{ audience }}
    </p>
  </div>
</template>

<style scoped>
.app-lesson-info {
  font-size: 20px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  text-align: center;
}

.time {
  width: 140px;
}

.name {
  max-width: 400px;
  overflow: hidden;
  white-space: nowrap;
  flex-grow: 1;
}

.teacher {
  width: 240px;
}

.subgroup {
  font-size: 20px;
  width: 40px;
}

.audience {
  width: 100px;
}
</style>
