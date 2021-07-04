
<script lang="ts" setup>
import { defineProps } from 'vue'
import { useI18n } from 'vue-i18n'
const props = defineProps({
  trait: String,
})

const { t } = useI18n()
</script>
<template>
  <span class="infline-flex flex px-1.5 items-center font-xs border border-gray-100 bg-gray-50 text-gray-500 rounded-xl">
    <img class="icon" :src="`/icons/traits/${trait}.png`" alt="" />
    <span>
      {{ t(`traits.${trait}`) }}
    </span>
  </span>
</template>

<style scoped>
.icon {
  @apply w-4 my-0 mr-1
}
</style>
