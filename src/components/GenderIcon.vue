<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  gender: {
    type: String,
    default: 'female',
  },
})
</script>
<template>
  <div class="inline-flex">
    <carbon-gender-female v-if="gender === 'female'" class="text-pink-500" />
    <carbon-gender-male v-else-if="gender === 'male'" class="text-blue" />
    <carbon-transgender v-else />
  </div>
</template>
