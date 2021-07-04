
<script async setup lang="ts">
import { useDomesticUnits } from '~/composables/useDomesticUnits'

const { families } = useDomesticUnits()

</script>
<template>
  <div class="container mx-auto p-8">
    <div v-if="families.length > 0" class="grid grid-cols-1 gap-10 sm:grid-cols-2 md:-mx-8 md:grid-flow-row md:grid-cols-3 md:gap-16 md:auto-rows-min">
      <router-link v-for="family in families" :key="family?.slug" class="card" :to="`/family/${family.slug}`">
        <img :src="family.media" :alt="family.title">
        <div class="p-4">
          <h2 class="flex items-center justify-center">
            <carbon-home class="mr-2" />
            {{ family.title }}
          </h2>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style>

</style>

<route lang="yaml">
meta:
  title: Domestic Units
</route>
