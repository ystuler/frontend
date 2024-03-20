<script setup lang="ts">
interface AppStarProps {
  width: string;
  height: string;
  color: string;
  colorBack: string;
}

const props = defineProps<AppStarProps>();
</script>

<template>
  <svg class="star" :width="props.width" :height="props.height" viewBox="0 0 25 23" fill="none"
       xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <desc>
    </desc>
    <defs/>
    <path id="Звезда 1"
          d="M12 -3.06e-5L9.08 8.63L-0.37 8.63L7.27 13.97L4.35 22.61L12 17.27L19.64 22.61L16.72 13.97L24.36 8.63L14.91 8.63L12 -3.06e-5Z"
          :fill="props.colorBack" fill-opacity="1.000000" fill-rule="nonzero"/>
    <path id="Звезда 1"
          d="M9.08 8.63L-0.37 8.63L7.27 13.97L4.35 22.61L12 17.27L19.64 22.61L16.72 13.97L24.36 8.63L14.91 8.63L12 -3.06e-5L9.08 8.63ZM12 3.12L9.79 9.63L2.81 9.63L8.46 13.58L6.27 20.05L12 16.05L17.72 20.05L15.53 13.58L21.18 9.63L14.2 9.63L12 3.12Z"
          :fill="props.color" fill-opacity="1.000000" fill-rule="evenodd"/>
  </svg>
</template>

<style scoped>
.star{
  padding-left: 10px;
}
</style>
