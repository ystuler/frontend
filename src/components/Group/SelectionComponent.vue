<template>
  <div class="grid-container">
    <div class="square">
      <div class="rectangle">
        <svg class="star" width="45.000000" height="57.000000" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <desc>
          </desc>
          <defs/>
          <path id="Звезда 1" d="M12 -3.06e-5L9.08 8.63L-0.37 8.63L7.27 13.97L4.35 22.61L12 17.27L19.64 22.61L16.72 13.97L24.36 8.63L14.91 8.63L12 -3.06e-5Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero"/>
          <path id="Звезда 1" d="M9.08 8.63L-0.37 8.63L7.27 13.97L4.35 22.61L12 17.27L19.64 22.61L16.72 13.97L24.36 8.63L14.91 8.63L12 -3.06e-5L9.08 8.63ZM12 3.12L9.79 9.63L2.81 9.63L8.46 13.58L6.27 20.05L12 16.05L17.72 20.05L15.53 13.58L21.18 9.63L14.2 9.63L12 3.12Z" fill="#8A8A8A" fill-opacity="1.000000" fill-rule="evenodd"/>
        </svg>

        <span class="FavoriteGroup">{{ holder }}</span>
      </div>
      <div class="rectangle2">

      </div>

    </div>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  height: 100vh;
  place-items: center;
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
.star{
  padding-left: 10px;
}

.rectangle2{
  width: 29.9vw;
  height: 53.9vh;
  background: rgb(241, 241, 241);
  border-radius: 0.19rem;
  border: 0.13rem solid rgb(158, 157, 157);
  z-index: 1;

}
.scroll {
  width: 2vw;
  height: 50vh;
  background-color: yellow;
  position: absolute;
  right: 10px;
  top: 70px;
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
</style>
<script setup lang="ts">
import { useGroupStore} from "../../stores/group.store.ts";
import {computed} from "vue";

const groupStore = useGroupStore();

const groups = computed(() => groupStore.groups)

const FavoriteGroup = ""
const holder = "Избранная группа будет тут..."

</script>