<script setup lang="ts">
import { ref } from "vue";
import { useGroupStore } from "../../stores/group.store.ts";

const groupStore = useGroupStore();

const fastChoiceGroup = ref<string>("Быстрый выбор группы:");
const choiceFac = ref<string>("Выберите институт:");
const choiceGroup = ref<string>("Выберите группу:");
const classes = ref<string>("Курс");

const selectedFacultyName = ref<string>("");
const selectedClass = ref<string>("");

function selectFaculty(facultyName: string): void {
  selectedFacultyName.value = facultyName;
  selectedClass.value = "";
}

function selectClass(className: string): void {
  selectedClass.value = className;
}
const letterInput = ref('');
const numberInput = ref('');
const groupName = ref('');

const findGroupName = () => {
  groupName.value = '';
  const formattedLetterInput = letterInput.value.replace(/-/g, '');

  const searchString = (`${formattedLetterInput}-${numberInput.value}`).toLowerCase();

  for (const faculty of groupStore.faculties) {
    for (const direction of faculty.directions) {
      for (const listGroup of direction.listGroups) {
        for (const listUpGroup of listGroup.listUpGroups) {
          if (listUpGroup.groupUpName.toLowerCase() === searchString) {
            console.log(listUpGroup.groupUpName)
            groupName.value = listUpGroup.groupUpName;
            return;
          }
        }
      }
    }
  }

  if (!groupName.value) {
    console.log('Группа не найдена')
    groupName.value = 'Группа не найдена';
  }
};
</script>



<template>
  <div class="background">
    <div class="menu">
      <div class="fast-group">
        <input v-model="letterInput" type="text" placeholder="Введите буквы"/>
        <input v-model="numberInput" type="number" placeholder="Введите число"/>
        <button @click="findGroupName">Найти группу</button>
      </div>
      <div class="choise-fac-text" @click="selectFaculty('')">{{ choiceFac }}</div>
      <ul class="grid-container">
        <li v-for="faculty in groupStore.faculties" :key="faculty.id" @click="selectFaculty(faculty.facultyName)">
          <div class="item-faculty">{{ faculty.facultyName }}</div>
        </li>
      </ul>
      <div class="fast-classes">
        <span class="text-classes" @click="selectClass('')">{{ classes }}</span>
        <div v-for="n in 4" :key="n" class="circle-classes" @click="selectClass(n.toString())">{{ n }}</div>
      </div>
      <div class="choise-group-text" >{{ choiceGroup }}</div>
      <ul v-if="selectedFacultyName">
        <li v-for="faculty in groupStore.faculties.filter(faculty => faculty.facultyName === selectedFacultyName)" :key="faculty.id">
          <ul v-for="direction in faculty.directions.filter(direction => !selectedClass || direction.cursNumber === selectedClass)" :key="direction.id">
            <li v-for="listGroup in direction.listGroups" :key="listGroup.id">
              <ul>
                <li v-for="listUpGroup in listGroup.listUpGroups" :key="listUpGroup.id">
                  <div>{{ listUpGroup.groupUpName }}</div>
                </li>
              </ul>
            </li>
          </ul>
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

.choise-group-text {
  padding-top: 3vh;

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
  margin: 0.2vw;
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