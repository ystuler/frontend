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
  font-size: 24px;
  box-shadow: 1px 4px 4px rgba(126, 11, 11, 0.5);
}
.date-time-container {
  display: flex;
  align-items: flex-end;
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
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.205);
}
</style>