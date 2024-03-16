<script setup lang="ts">
//Поле ввода
export interface AppInputProps {
  id: string;
  label: string;
}
defineProps<AppInputProps>();
</script>

<template>
  <label :for="id">
    {{ label }}
  </label>
  <input :id="id">
</template>