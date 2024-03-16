<script setup lang="ts">
//Включает в себя все окно "дополнить расписание"
import AppInput from './AppInput.vue';
</script>

<template>
  <div class="app-add-lesson-container">
    <p class="app-add-lesson-title">
      Дополнить расписание
    </p>
    <div class="date-time-container">
      <AppInput 
        id="start-time" 
        input-type="text"
      />
    </div>
  </div>
</template>

<style scoped>
.date-time-container {
  display: flex;
  align-items: end;
  gap: 20px;
}
.app-add-lesson-title {
  font-size: 44px;
  font-weight: 700;
  text-align: center;
}
.app-add-lesson-container {
  max-width: 800px;
  border-radius: 30px;
  background-color: #EFEFEF;
  display: flex;
  flex-direction: column;
  padding: 44px 60px;
  gap: 20px;
}
</style>