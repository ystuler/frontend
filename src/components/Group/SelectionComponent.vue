<template>
  <div class="grid-container noselect">
    <div class="square">
      <div class="rectangle">
        <div class="star" v-html="starSVG"></div>

        <span class="FavoriteGroup">{{ holder }}</span>
      </div>
      <div class="rectangle2">
        <div class="scrollWrapper">
          <div class="forScroll">
            <ul class="cursor-pointer">
              <li v-for="group in groupStore.groups" :key="group.id">
                <div @click="toggleFacultyVisibility(group.id)" class="boxF"><span >{{ group.Faculty }}</span></div>
                <ul v-if="activeFaculty ===group.id">
                  <li v-for="direction in group.Direction" :key="direction.id">
                    <div class="boxF" @click="toggleGroupVisibility(direction.id)"><span >{{ direction.name_group }}</span></div>
                    <ul v-if="activeGroup === direction.id">
                      <li v-for="groupName in direction.list" :key="groupName.id">
                        <div class="boxF" @click="toggleFavoriteGroup(groupName.name)"><span > {{ groupName.name }}</span></div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 20px;

}

::-webkit-scrollbar-track {
  background: rgb(196, 196, 196);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  transition: background 3s ease;
  background: rgb(175, 172, 172);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgb(157, 154, 154);
}

.grid-container {
  display: grid;
  height: 100vh;
  place-items: center;
}
.boxF{
  width: 27.1vw;
  height: 5vh;
  border: 0.13rem solid rgb(100, 99, 99);
  border-top: none;
  border-left: none;

  font-size: 24px;
  font-family: Inter, serif;
  color: rgb(196, 194, 194);
  overflow: hidden;
  white-space: nowrap;
  padding-left: 1vw;
  text-overflow: ellipsis;

}
.forScroll {
  width: 28.9vw;
  height: 53.4vh;
  overflow: auto;
  overflow-x: hidden;

}

.rectangle {
  width: 29.9vw;
  height: 6vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border: 0.13rem solid rgb(212, 207, 207);
  background: rgb(255, 255, 255);
  overflow: hidden;
  z-index: 2;
}

.star {
  padding-left: 10px;
}

text {
  user-select: none;
}

.groups {
  width: 27.1vw;
  height: 5vh;
  background: black;

}

.rectangle2 {
  width: 29.9vw;
  height: 53.9vh;
  background: rgb(241, 241, 241);
  border-radius: 0.19rem;
  border: 0.13rem solid rgb(158, 157, 157);
  z-index: 1;

}


.FavoriteGroup {
  font-size: 24px;
  font-family: Inter, serif;
  color: rgb(196, 194, 194);
  overflow: hidden;
  white-space: nowrap;
  padding-left: 10px;
  text-overflow: ellipsis;
}

.square {
  width: 30vw;
  height: 60vh;
  border: 0.06rem solid rgb(158, 157, 157);
  border-radius: 0.19rem;

  background: rgb(241, 241, 241);
  position: relative;

}

.noselect {
  user-select: none;
}
</style>
<script setup lang="ts">
import starSVG from "../../utils/StarSVG.ts";
import {useGroupStore} from "../../stores/group.store.ts";
import {computed, ref} from "vue";

const groupStore = useGroupStore();

const activeFaculty = ref<number | null>(null);
const activeGroup = ref<number | null>(null);

const toggleGroupVisibility = (directionId: number) => {
  if (activeGroup.value === directionId) {
    activeGroup.value = null;
  } else {
    activeGroup.value = directionId;
  }
};
const toggleFacultyVisibility = (groupId: number) => {
  if (activeFaculty.value === groupId) {
    activeFaculty.value = null;
  } else {
    activeFaculty.value = groupId;
  }
};

const FavoriteGroup = ""

const holder = ref("Избранная группа будет тут...")
const toggleFavoriteGroup = (SubGroupName: string) => {
  holder.value = SubGroupName
}

</script>