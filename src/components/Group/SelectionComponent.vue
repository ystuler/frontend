<template>
  <div class="grid-container noselect">
    <div class="square">
      <div class="rectangle">
        <div
          class="star"
          v-html="selectedGroupNameId === null ? starSVG : starSVG4"
        />

        <span class="FavoriteGroup">{{ holder }}</span>
      </div>
      <div class="rectangle2">
        <div class="scrollWrapper">
          <div class="forScroll">
            <ul class="cursor-pointer">
              <li
                v-for="group in groupStore.groups"
                :key="group.id"
              >
                <div
                  class="boxF"
                  @click="toggleFacultyVisibility(group.id)"
                >
                  <span class="p fac">{{ group.Faculty }}</span>
                  <span
                    class="arrow"
                    v-html="activeFaculty === group.id ? arrowSVG : arrowSVG2"
                  />
                </div>

                <ul v-if="activeFaculty === group.id">
                  <li
                    v-for="direction in group.Direction"
                    :key="direction.id"
                  >
                    <div
                      class="boxF2 boxF"
                      @click="toggleGroupVisibility(direction.id)"
                    >
                      <span class="p group">{{ direction.name_group }}</span>
                      <span
                        class="arrow"
                        v-html="activeGroup === direction.id ? arrowSVG1 : arrowSVG21"
                      />
                    </div>
                    <ul v-if="activeGroup === direction.id">
                      <li
                        v-for="groupName in direction.list"
                        :key="groupName.id"
                      >
                        <div
                          class="boxF3 boxF"
                          @click="toggleFavoriteGroup(groupName.id)"
                        >
                          <span
                            class="star"
                            v-html="groupName.id === selectedGroupNameId ? starSVG3 : starSVG2"
                          />
                          <span class="p2 Sgroup">{{ groupName.name }}</span>
                        </div>
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

<script setup lang="ts">
import { starSVG, starSVG2, starSVG3, starSVG4 } from "../../utils/StarSVG.ts";
import { arrowSVG, arrowSVG2,arrowSVG1,arrowSVG21 } from "../../utils/arrowSVG.ts";
import { useGroupStore } from "../../stores/group.store.ts";
import { ref } from "vue";

const groupStore = useGroupStore();
const activeFaculty = ref<number | null>(null);
const activeGroup = ref<number | null>(null);
const selectedGroupNameId = ref<number | null>(null);

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

const holder = ref("Избранная группа будет тут...");

//todo переписать toggleFavoriteGroup совершенно не чиатемая функция
const toggleFavoriteGroup = (groupNameId: number) => {
  const foundGroup = groupStore.groups.find(group =>
      group.Direction.some(direction =>
          direction.list.some(groupName => groupName.id === groupNameId)
      )
  );

  const allGroupNamesInFoundGroup = foundGroup?.Direction.flatMap(direction => direction.list);

  const foundGroupName = allGroupNamesInFoundGroup?.find(groupName => groupName.id === groupNameId)?.name || "";

  holder.value = foundGroupName;
  selectedGroupNameId.value = groupNameId;
};
</script>


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
.arrow{
  position: absolute;
  top: 13%;
  right: 0;
}
.grid-container {
  display: grid;
  height: 100vh;
  place-items: center;
}
.p2{
  padding-left: 0.5vw;

}
.fac{
  color: rgb(143, 143, 143);
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: 29px;
  overflow: hidden;

  white-space: nowrap;

  text-overflow: ellipsis;

}
.group{
  color: rgb(143, 143, 143);
  font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0px;
  text-align: left;
}
.Sgroup{
  color: rgb(143, 143, 143);
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: 29px;
}
.boxF {
  position: relative;
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
  text-overflow: ellipsis;
  align-items: center;
  display: flex;

}

.boxF2{
  border: 0.13rem solid rgb(153, 148, 148);
  border-top: none;
  border-left: none;
}
.boxF3{
  border: 0.13rem solid rgb(212, 207, 207);
  border-top: none;
  border-left: none;
}
.p{
  padding-left: 1vw;

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
.star2 {
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
