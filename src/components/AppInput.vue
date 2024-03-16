<script setup lang="ts">
//Поле ввода
export interface AppInputProps {
  id: string;
  label?: string;
  placeholder: string;
  inputType: 'text' | 'date-time';
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
          placeholder="hh:mm"
          class="app-input"
        >
        <input
          :id="id" 
          placeholder="hh:mm"
          class="app-input"
        >
        <input
          :id="id" 
          placeholder="dd:mm:yyyy"
          class="app-input"
        >
      </div>
    </template>
  </div> 
</template>

<style scoped>
.app-input__date-time{
  display: flex;
  gap: 8px;
}
.app-input{
  padding: 8px 16px;
  background-color: #D9D9D9;
  color: #9D9D9D;
  font-size: 20px;
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
</style>