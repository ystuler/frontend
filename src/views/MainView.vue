<script setup lang="ts">
import AppSchedule from '../components/AppSchedule.vue';
import AppAddLesson from '../components/AppAddLesson.vue';
import AddLessonButton from '../components/AddLessonButton.vue';
import AppModal from '../components/AppModal.vue';
import { ref } from 'vue';

const isModalOpen = ref(false);

const openModal = () => {
  console.log('asdfkjasldf')
  isModalOpen.value = true;
}

const editSchedule = () => {
  closeModal();
} 

const closeModal = () => {
  isModalOpen.value = false;
}
</script>

<template>
  <div class="main-container">
    <AppModal v-if="isModalOpen">
      <AppAddLesson />
    </AppModal>
    <div class="main-container-block">
      <AppSchedule class="main-container-block__schedule" />
    </div>
    <div class="main-container-block main-container-block__add-lesson">
      <AppAddLesson
        class="app-add-lesson-expanded"
      />
      <AddLessonButton 
        class="app-add-lesson-mini"
        @click="openModal"
      />
    </div>
  </div>
</template>

<style scoped>
@media screen and (width < 1200px) {
  .app-add-lesson-expanded {
    display: none;
  }
  .app-add-lesson-mini {
    display: block;
  }
  .main-container-block.main-container-block__add-lesson {
    width: 5%;
  }
}
@media screen and (width >= 1200px) {
  .app-add-lesson-mini {
    display: none;
  }
}
.main-container-block__schedule {
  width: 100%;
}
.app-add-lesson-mini {
  flex-shrink: none;
  position: fixed;
  right: 52px;
  top: 52px;
}
.main-container-block__add-lesson {
  padding: 0 16px;
}
.main-container-block {
  width: 100%;
  display: flex;
  justify-content: center;
}
.main-container {
  display: grid;
  grid-template-columns: 3fr 1fr;
  justify-content: center;
  align-items: center;
}
</style>


