
<script async setup lang="ts">
import { useCharacters } from '~/composables/useCharacters'

const { characters } = useCharacters()

</script>
<template>
  <div class="container mx-auto p-8">
    <div v-if="characters.length > 0" class="grid grid-cols-2 gap-10 md:-mx-8 md:grid-flow-row md:grid-cols-3 md:gap-16 md:auto-rows-min">
      <router-link v-for="character in characters" :key="character?.slug" class="card" :to="`/character/${character.slug}`">
        <img :src="character.media" :alt="character.title">
        <div class="p-4">
          <h2 class="flex items-center justify-center">
            <icomoon-free-diamonds class="mr-2 text-lime-600" />
            {{ character.title }}
          </h2>
        </div>
      </router-link>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  title: Characters
</route>
