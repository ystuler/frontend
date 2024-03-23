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
  const totalItems = 0;
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
  const groups: any[] = [];
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
        <span class="search-text">Быстрый выбор группы:</span>
        <input
          v-model="letterInput"
          type="text"
          placeholder="ЦИС"
        >
        <input
          v-model="numberInput"
          type="number"
          placeholder="17"
        >
        <button
          class="search-button"
          @click="findGroupName"
        >
          Перейти
        </button>
      </div>
      <div
        class="choise-fac-text"
        @click="selectFaculty('')"
      >
        {{ choiceFac }}
      </div>
      <ul class="grid-container">
        <li
          v-for="faculty in groupStore.faculties"
          :key="faculty.id"
          @click="selectFaculty(faculty.facultyName)"
        >
          <div
            class="item-faculty"
            :class="{'selected-faculty': faculty.facultyName=== selectedFacultyName}"
          >
            {{ faculty.facultyName }}
          </div>
        </li>
      </ul>
      <div class="fast-classes">
        <span
          class="text-classes"
          @click="selectClass('')"
        >{{ classes }}</span>
        <div
          v-for="n in 5"
          :key="n"
          class="circle-classes"
          :class="{'selected-classes': n.toString()===selectedClass}"
          @click="selectClass(n.toString())"
        >
          {{ n }}
        </div>
      </div>
      <div class="choise-group-text">
        {{ choiceGroup }}
      </div>
      <div class="block-group">
        <ul class="group-grid-container">
          <li
            v-for="group in extendedFlatGroupList"
            :key="group.id"
            class="group-grid-item"
          >
            <div v-if="group.groupUpName">
              {{ group.groupUpName }}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.search-button {
  user-select: none;
  border-radius: 4px;
  font-size: 16px;
  color: white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: rgb(237, 100, 100);
  width: 112px;
  height: 32px;
  margin-left: 16px;
  transition: all 0.2s ease;
}

.search-button:active {
  transform: scale(0.95);
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
}

.search-text {
  margin-right: 24px;
}

input {
  font-size: 16px;
  text-align: center;
  outline: none;
  margin-left: 4px;
  width: 72px;
  height: 32px;
  border-radius: 4px;
  box-shadow: inset 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: rgb(204, 204, 204);
}

.block-group {
  padding: 2vh;

  overflow: auto;
  overflow-x: hidden;
  width: 60vw;
  height: calc(41vh + 8px);
  position: relative;
}

.group-grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
}

.selected-faculty {

  background: rgb(237, 100, 100) !important;
  color: rgb(239, 239, 239) !important;
  box-shadow: 0px 4px 8px rgba(237, 100, 100, 0.5) !important;
}

.selected-classes {
  background: rgb(237, 100, 100) !important;
  color: rgb(239, 239, 239) !important;

}

.group-grid-item {
  transition: background 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;
  user-select: none;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  padding: 4px;
  text-align: center;
  height: 6vh;
  color: rgb(65, 65, 65);

  background: rgb(217, 210, 210);
  font-size: 1vw;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
}

.group-grid-item:active {
  background: rgb(237, 100, 100) !important;

  box-shadow: 0px 4px 8px rgba(237, 100, 100, 0.5) !important;
  color: rgb(239, 239, 239) !important;

}

.grid-container {
  padding-top: 4vh;

  display: grid;
  grid-template-columns: repeat(3, 17vw);
  grid-gap: 1vw;
  justify-content: center;

}

.choise-group-text {
  padding-top: 1vh;
  color: rgb(105, 104, 104);
  font-size: 1.5vw;
  font-weight: 500;
  line-height: 44px;
}

.item-faculty {
  user-select: none;
  cursor: pointer;
  color: rgb(65, 65, 65);
  border-radius: 32px;
  background: rgb(217, 210, 210);
  padding: 2.3vw;
  text-align: center;
  height: 3vw;
  font-size: 1.1vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.background {
  display: grid;
  height: 100vh;
  background-color: #D9D9D9;
  place-items: center;
}

.fast-group {
  padding-top: 4vh;
  color: rgb(53, 53, 53);
  font-size: 1.2vw;
  font-weight: 400;
  line-height: 24px;

  display: flex;
  flex-direction: row;
}

.fast-classes {
  display: flex;
  align-items: center;
  padding-top: 3vh;
}

.text-classes {
  margin-right: 1vw;
  color: rgb(53, 53, 53);


}

.circle-classes {
  user-select: none;
  cursor: pointer;
  width: 32px;
  height: 32px;
  background: rgb(217, 210, 210);
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