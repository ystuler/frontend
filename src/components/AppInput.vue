<script setup lang="ts">
import { ref, watch } from 'vue';

//Поле ввода
export interface AppInputProps {
  id: string;
  label?: string;
  placeholder?: string;
  inputType: 'text' | 'date-time';
}

const startTime = ref('');
const endTime = ref('');
const date = ref('01.01.2024');

watch(startTime, (newValue, oldValue) => {
  if (!isValidTimeFormat(newValue)) {
    startTime.value = oldValue;
  }
});

function isValidTimeFormat(value: string) {
  const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

  return timeRegex.test(value);
}

defineProps<AppInputProps>();
</script>

<template>
  <div class="app-input-container">
    <label 
      v-if="label"
      :for="id"
      class="app-input-lable"
    >
      {{ label }}
    </label>
    <template
      v-if="inputType=='text'"
    >
      <input
        :id="id" 
        :placeholder="placeholder"
        class="app-input"
      >
    </template>
    <template
      v-if="inputType=='date-time'"
    >
      <div class="app-input__date-time">
        <input 
          :id="id"
          v-model="startTime"
          type="time"
          placeholder="hh:mm"
          class="app-input date-input"
        >
        <input
          :id="id" 
          v-model="endTime"
          type="time"
          placeholder="hh:mm"
          class="app-input date-input"
        >
        <input
          :id="id"
          v-model="date"
          type="date"
          placeholder="dd:mm:yyyy"
          class="app-input date-input"
        >
      </div>
    </template>
  </div> 
</template>

<style scoped>
.date-input {
  width: 100%;
}
.app-input__date-time{
  display: flex;
  gap: 8px;
}
.app-input{
  padding: 8px 16px;
  background-color: #D9D9D9;
  color: #9D9D9D;
  font-size: 20px;
  border-radius: 10px;
  box-shadow: inset 0px 2px 8px rgba(56, 55, 55, 0.253);
}
.app-input-lable{
  font-size: 24px;
  color: #9A9696;
}
.app-input-container{
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.app-input:focus {
  outline: 1px solid rgb(231, 136, 112);
  color: black
}
</style>