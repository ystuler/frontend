<script setup lang="ts">

export interface AppLessonProps {
  time: number;
  name: string;
  subgroup: number;
  teacher: string;
  audience: string;
}
//Включает в себя всю информацию о предмете
</script>

<template>
  <div class="day">
    {{ time }}
  </div>
</template>