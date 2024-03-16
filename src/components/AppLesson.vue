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
//Включает в себя всю информацию о предмете
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
  align-items: center;
  display:flex;
  width: 100%;
  text-align: justify;
}
.time {
  margin-left: 12px;
  max-width: 100%;
}
.name {
  margin-left: 12px;
  max-width: 300px;
  overflow: hidden;
  white-space: nowrap;
  flex-grow: 1;
}
.teacher {
  margin-left: 36px;
  margin-right: 36px;
}
.subgroup {
  margin-right: 36px;
  font-size: 20px;
}
.audience {
  margin-right: 12px;
}
</style>