
<script lang="ts" setup>
import { defineProps } from 'vue'
import { useI18n } from 'vue-i18n'
const props = defineProps({
  aspiration: String,
})

const { t } = useI18n()
</script>
<template>
  <span class="infline-flex flex px-1.5 items-center font-xs border border-yellow-100 bg-yellow-50 text-yellow-500 rounded-xl">
    <img class="icon" :src="`/icons/aspirations/${aspiration}.png`" alt="" />
    <span>
      {{ t(`aspirations.${aspiration}`) }}
    </span>
  </span>
</template>

<style scoped>
.icon {
  @apply w-4 my-0 mr-1
}
</style>
