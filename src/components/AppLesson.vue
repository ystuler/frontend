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
    <p>
      {{ time }}
    </p>
  </div>
</template>
<style scoped>
.day {
  display:flex;
  width:30px;
  height: 30px;
  background-color: aqua;
}
.time {

}
</style>