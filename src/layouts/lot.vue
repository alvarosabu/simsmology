
<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const lot = computed(() => route.meta.frontmatter)

</script>

<template>
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <Toolbar />
    <div class="container mx-auto flex items-start p-8  prose prose-sm">
      <img :src="lot?.map" :alt="lot?.title">
      <div class="px-4">
        <h2>{{ lot.title }}</h2>
        <blockquote class="text-sm">
          <p>{{ lot.description }}</p>
        </blockquote>
      </div>
      <router-view />
    </div>
    <Footer />
    <div class="mt-5 mx-auto text-center opacity-25 text-sm">
      [Lot Layout]
    </div>
  </main>
</template>
