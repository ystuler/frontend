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
    <p> 
      {{ timeStart }}
    </p>
    <p>
      {{ timeEnd }}
    </p>
    <p>
      {{ name }}
    </p>
  </div>
</template>
<style scoped>
.app-lesson-info {
  display:flex;
  width: 100%;
  background-color: rgb(239, 239, 239);
}
</style>