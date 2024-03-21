<script setup lang="ts">
import AddLessonIcon from '../components/icons/AddLessonIcon.vue'
</script>

<template>
  <button class="add-lesson-button">
    <AddLessonIcon width="100%" />
  </button>
</template>

<style scoped>
.add-lesson-button{
  width: 80px;
  background-color: rgb(235, 235, 235);
  padding: 12px;
  border-radius: 40px;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.4);
}
</style>