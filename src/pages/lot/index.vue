
<script async setup lang="ts">
import { useLots } from '~/composables/useLots'

const { lots } = useLots()

</script>
<template>
  <div class="container mx-auto p-8">
    <div v-if="lots.length > 0" class="grid grid-cols-1 gap-10 sm:grid-cols-2 md:-mx-8 md:grid-flow-row md:grid-cols-3 md:gap-16 md:auto-rows-min">
      <router-link v-for="lot in lots" :key="lot?.slug" class="card" :to="`/lot/${lot.slug}`">
        <img :src="lot.media" :alt="lot.title">
        <div class="p-4">
          <h2 class="flex items-center justify-center">
            <carbon-home class="mr-2" />
            {{ lot.title }}
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
  title: Lots
</route>
