
<script setup lang="ts">
import { ref, computed } from 'vue';
import {useGroupStore} from "../../stores/group.store.ts";

const groupStore = useGroupStore();
const searchQuery = ref('');

const filteredGroups = computed(() => {
  return groupStore.filterGroups(searchQuery.value);
});

const showDropdown = computed(() => searchQuery.value.length > 0);
</script>

<template>
  <div class="search-input-container">
    <input
      v-model="searchQuery"
      class="input"
      type="text"
      placeholder="Введите название группы"
    >
    <div
      v-if="showDropdown"
      class="dropdown-menu"
    >
      <div
        v-for="group in filteredGroups"
        :key="group.id"
        class="dropdown-item"
      >
        {{ group.name }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.search-input-container {

}
.input{
  font-size: 24px;
  font-family: Inter, serif;
  color: rgb(196, 194, 194);
  margin-left: 10px;
  border: 2px solid transparent;
  width: 20vw;
  height: 3.5vh;
  outline: none;
  overflow: hidden;
  transition: all 0.5s;
}


.dropdown-menu {
  position: absolute;
  background-color: #f9f9f9;
}
</style>