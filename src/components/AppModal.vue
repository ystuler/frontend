<script setup lang="ts">
export interface AppModalEmits {
  (e: 'close'): void;
}

const emit = defineEmits<AppModalEmits>();

const close = () => emit('close');
</script>

<template>
  <Teleport to="body">
    <div class="app-modal" @click="close">
      <slot />
    </div>
  </Teleport>
</template>

<style scoped>
.app-modal {
  background: #3335;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
}
</style>