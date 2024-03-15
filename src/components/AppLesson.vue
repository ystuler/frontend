<script setup lang="ts">

export interface AppLessonProps {
  time: number;
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
      {{ time }}
    </p>
  </div>
</template>
<style scoped>
.app-lesson-info {
  display:flex;
  width: 100%;
  background-color: rgb(229, 233, 233);
}
</style>