<script setup lang="ts">
import {ref} from "vue";
import {useGroupStore} from "../../stores/group.store.ts";

const groupStore = useGroupStore();

const fastChoiceGroup = ref("Быстрый выбор группы:");
const choiceFac = ref("Выберите институт:");

const classes = ref ("Институт")

</script>

<template>
  <div class="background">
    <div class="menu">
      <div class="fast-group">{{ fastChoiceGroup }} ЦИС___17</div>
      <div class="choise-fac-text">{{ choiceFac }}</div>
      <ul class="grid-container">
        <li v-for="group in groupStore.faculties"
            :key="group.id">
          <div class="item-faculty">{{ group.facultyName }}</div>

        </li>
      </ul>
      <div class="fast-classes">
        <span>{{classes}}</span>
        <div class="circle-classes">1</div>
        <div class="circle-classes">2</div>
        <div class="circle-classes">3</div>
        <div class="circle-classes">4</div>

      </div>
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
  font-size: 0.9vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;

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
  font-size: 1.2vw;
  font-weight: 400;
  line-height: 24px;


}
.fast-classes {
  display: flex;
  align-items: center;
  padding-top: 3vh;
}

.circle-classes {
  width: 30px;
  height: 30px;
  background-color: #3498db;
  border-radius: 50%;
  margin: 0.5vw;
  display: flex;
  justify-content: center;
  align-items: center;

}

.choise-fac-text {
  padding-top: 5vh;

  color: rgb(53, 53, 53);
  font-size: 2vw;
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