
<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const family = computed(() => route.meta.frontmatter)

</script>

<template>
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <Toolbar />
    <div class="container mx-auto flex items-start p-8">
      <div class="w-2/3">
        <router-view />
      </div>
      <aside class="w-1/3 card prose prose-sm">
        <img :src="family?.media" :alt="family?.title">
        <div class="px-4">
          <h2>{{ family.title }}</h2>
          <blockquote class="text-sm">
            <p>{{ family.description }}</p>
          </blockquote>
        </div>
      </aside>
    </div>
    <Footer />
    <div class="mt-5 mx-auto text-center opacity-25 text-sm">
      [Family Layout]
    </div>
  </main>
</template>
