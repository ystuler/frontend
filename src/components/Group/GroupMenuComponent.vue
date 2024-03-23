<script setup lang="ts">
import {computed, ref} from "vue";
import {useGroupStore} from "../../stores/group.store.ts";

const groupStore = useGroupStore();

const choiceFac = ref<string>("Выберите институт:");
const choiceGroup = ref<string>("Выберите группу:");
const classes = ref<string>("Курс");

const selectedFacultyName = ref<string>("");
const selectedClass = ref<string>("");

const extendedFlatGroupList = computed(() => {
  const filledItems = flatGroupList.value.slice();
  const totalItems = 20;
  const emptyItemsCount = totalItems - filledItems.length;

  for (let i = 0; i < emptyItemsCount; i++) {
    filledItems.push({id: `empty-${i}`, groupUpName: ''});
  }

  return filledItems;
});

function selectFaculty(facultyName: string): void {
  selectedFacultyName.value = facultyName;
  selectedClass.value = "";
}

const flatGroupList = computed(() => {
  //todo сделать нормальный тип данных для groups
  const groups = [];
  const filteredFaculties = groupStore.faculties.filter(faculty => faculty.facultyName === selectedFacultyName.value);

  filteredFaculties.forEach(faculty => {
    faculty.directions.forEach(direction => {
      if (!selectedClass.value || direction.cursNumber === selectedClass.value) {
        direction.listGroups.forEach(listGroup => {
          listGroup.listUpGroups.forEach(listUpGroup => {
            groups.push(listUpGroup);
          });
        });
      }
    });
  });

  return groups;
});

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
        <div v-for="n in 5" :key="n" class="circle-classes" @click="selectClass(n.toString())">{{ n }}</div>
      </div>
      <div class="choise-group-text">{{ choiceGroup }}</div>
      <div class="block-group" >
        <ul class="group-grid-container">
          <li v-for="group in extendedFlatGroupList" :key="group.id" class="group-grid-item">
            <div v-if="group.groupUpName">{{ group.groupUpName }}</div>
            <div v-else class="empty-group"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<style scoped>
.block-group {
  padding: 2vh;

  overflow: auto;
  overflow-x: hidden;
  width: 60vw;
  height: calc(41vh + 9px);
  position: relative;
}

.group-grid-container {

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
}

.group-grid-item {
  padding: 5px;
  border: 1px solid #ccc;
  text-align: center;
  height: 5vh;
}

.grid-container {
  padding-top: 4vh;

  display: grid;
  grid-template-columns: repeat(3, 15vw);
  grid-gap: 1vw;
  justify-content: center;

}

.choise-group-text {
  padding-top: 1vh;

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