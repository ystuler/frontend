<template>
  <div class="grid-container noselect">
    <div class="square">
      <div class="rectangle">
        <svg class="star" width="45.000000" height="57.000000" viewBox="0 0 25 23" fill="none"
             xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <desc>
          </desc>
          <defs/>
          <path id="Звезда 1"
                d="M12 -3.06e-5L9.08 8.63L-0.37 8.63L7.27 13.97L4.35 22.61L12 17.27L19.64 22.61L16.72 13.97L24.36 8.63L14.91 8.63L12 -3.06e-5Z"
                fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero"/>
          <path id="Звезда 1"
                d="M9.08 8.63L-0.37 8.63L7.27 13.97L4.35 22.61L12 17.27L19.64 22.61L16.72 13.97L24.36 8.63L14.91 8.63L12 -3.06e-5L9.08 8.63ZM12 3.12L9.79 9.63L2.81 9.63L8.46 13.58L6.27 20.05L12 16.05L17.72 20.05L15.53 13.58L21.18 9.63L14.2 9.63L12 3.12Z"
                fill="#8A8A8A" fill-opacity="1.000000" fill-rule="evenodd"/>
        </svg>

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