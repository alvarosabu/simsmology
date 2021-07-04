
<script async setup lang="ts">
import { useWorlds } from '~/composables/useWorlds'

const { worlds } = useWorlds()

</script>
<template>
  <div class="container mx-auto p-8">
    <div v-if="worlds.length > 0" class="grid grid-cols-1 gap-10 sm:grid-cols-2 md:-mx-8 md:grid-flow-row md:grid-cols-3 md:gap-16 md:auto-rows-min">
      <router-link v-for="world in worlds" :key="world?.slug" class="card" :to="`/world/${world.slug}`">
        <img :src="world.map" :alt="world.title">
        <div class="p-4">
          <h2 class="flex items-center justify-center">
            <carbon-location class="mr-2" />
            {{ world.title }}
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
  title: Worlds
</route>
