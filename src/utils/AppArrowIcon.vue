<script setup lang="ts">
interface AppArrowProps {
  width: string;
  height: string;
  opacity: string;
  rotate: string;
}

const props = defineProps<AppArrowProps>();
</script>

<template>
  <svg class="arrow" :width="props.width" :height="props.height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <desc>
      Created with Pixso.
    </desc>
    <g :opacity="props.opacity" :transform="`rotate(${props.rotate}, 12, 12)`">
      <clipPath id="clip5_121">
        <rect width="24" height="24" fill="white" fill-opacity="0"/>
      </clipPath>
      <g clip-path="url(#clip5_121)">
        <path d="M19 8L5 8L12 19L19 8Z" fill="#444444" fill-rule="evenodd"/>
      </g>
    </g>
  </svg>
</template>

<style scoped>
.arrow{
  position: absolute;
  top: 13%;
  right: 0;
}

</style>
