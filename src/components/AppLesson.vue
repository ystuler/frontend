<script setup lang="ts">
export interface AppLessonProps {
  timeStart: number;
  timeEnd: number;
  name: string;
  subgroup: number;
  teacher: string;
  audience: string;
}

defineProps<AppLessonProps>();
</script>

<template>
  <tr class="app-lesson">
    <td class="app-lesson__time-start">
      {{ timeStart }}
    </td>
    <td class="app-lesson__time-end">
      {{ timeEnd }}
    </td>
    <td class="app-lesson__name">
      {{ name }}
    </td>
    <td class="app-lesson__teacher">
      {{ teacher }}
    </td>
    <td class="app-lesson__subgroup">
      {{ subgroup }}
    </td>
    <td class="app-lesson__audience">
      {{ audience }}
    </td>
  </tr>
</template>

<style scoped>

/* Mobile */
@media (max-width: 1134px) {
  .app-lesson td {
    padding: 2px 6px;
  }
}
/* Desktop */
@media (min-width: 1134px) and (min-aspect-ratio: 6/5) {
  .app-lesson td  {
    padding: 4px 8px;
  }
  
}
/* Wide (Ultra Wide) Monitors */
@media (min-width: 1134px) and (min-aspect-ratio: 5/2) {
  .app-lesson td  {
    padding: 4px 8px;
  }
}

.app-lesson {
  border-bottom: 1px solid #3331;
}

.app-lesson__name {
  width: 40%;
}

.app-lesson__subgroup,
.app-lesson__audience,
.app-lesson__teacher,
.app-lesson__time-start,
.app-lesson__time-end
{
  text-align: center;
}
</style>
