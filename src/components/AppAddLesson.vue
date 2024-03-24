<script setup lang="ts">
//Включает в себя все окно "дополнить расписание"
import AppInput from './AppInput.vue';
</script>

<template>
  <div class="app-add-lesson-container">
    <h2 class="app-add-lesson-title">
      Дополнить расписание
    </h2>
    <div class="date-time-container">
      <AppInput 
        id="start-time"
        input-type="date-time"
        label="Дата и время*"
      />
    </div>
    <AppInput 
      id="lesson"
      input-type="text"
      label="Название предмета*"
      placeholder="Физика"
    />
    <AppInput 
      id="teacher"
      input-type="text"
      label="ФИО преподавателя*"
      placeholder="Иванов И.И."
    />
    <AppInput 
      id="audience"
      input-type="text"
      label="Аудитория*"
      placeholder="А-332"
    />
    <AppInput 
      id="type"
      input-type="text"
      label="Вид занятия*"
      placeholder="Лекция"
    />
    <AppInput 
      id="subgroup"
      input-type="text"
      label="Подгруппа"
      placeholder="А-332"
    />
    <button class="app-add-lesson-container__button">
      Добавить в расписание
    </button>
  </div>
</template>

<style scoped>
.app-add-lesson-container__button {
  width: 100%;
  background-color: rgb(231, 136, 112);
  height: 40px;
  border-radius: 35px;
  margin-top: 20px;
  color:#EFEFEF;
  box-shadow: 1px 4px 4px rgba(126, 11, 11, 0.5);
}
.date-time-container {
  display: flex;
  align-items: flex-end;
  gap: 20px;
}
.app-add-lesson-title {
  font-weight: 700;
  text-align: center;
}
.app-add-lesson-container {
  width: 100%;
  border-radius: 30px;
  background-color: #EFEFEF;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.205);
}

/* Mobile, Landscape */
@media (max-width: 1134px) {
  .app-add-lesson-container {
    padding: calc(56 * 100vw / 480) calc(40 * 100vw / 480);
    margin: 8%;
  }
}
/* Desktop */
@media (min-width: 1134px) and (min-aspect-ratio: 6/5) {
  .app-add-lesson-container {
    padding: calc(16 * 100vw / 480) calc(8 * 100vw / 480);
  }
}
/* Wide (Ultra Wide) Monitors */
@media (min-width: 1134px) and (min-aspect-ratio: 5/2) {
  
  .app-add-lesson-container {
    padding: calc(4 * 100vw / 480);
  }
}
</style>