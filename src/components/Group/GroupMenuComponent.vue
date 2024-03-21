<script setup lang="ts">
import {ref} from "vue";
import {useGroupStore} from "../../stores/group.store.ts";

const groupStore = useGroupStore();

const fastChoiceGroup = ref("Быстрый выбор группы:");
const choiceFac = ref("Выберите институт:");


</script>

<template>
  <div class="background">
    <div class="menu">
      <div class="fast-group">{{ fastChoiceGroup }} ЦИС___17</div>
      <div class="choise-fac-text">{{ choiceFac }}</div>
      <ul class="grid-container">
        <li v-for="group in groupStore.groups"
            :key="group.id">
          <div class="item-faculty">{{ group.faculty }}</div>

        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.grid-container {
  padding-top: 4vh;

  display: grid;
  grid-template-columns: repeat(3, 15vw);
  grid-gap: 1vw;
  justify-content: center;

}

.item-faculty {
  background-color: #fa0000;
  padding: 2vw;
  text-align: center;
  height: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.background {
  display: grid;
  height: 100vh;
  background-color: #D9D9D9;
  place-items: center;
}

.fast-group {
  padding-top: 5vh;
  color: rgb(53, 53, 53);
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;

}

.choise-fac-text {
  padding-top: 5vh;

  color: rgb(53, 53, 53);
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
}

.menu {
  width: 60vw;
  height: 90vh;
  border-radius: 32px;
  position: relative;
  background: rgb(241, 241, 241);
}

.menu > * {
  padding-left: 72px;
  padding-right: 72px;

}
</style>