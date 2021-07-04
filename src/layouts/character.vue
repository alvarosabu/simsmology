
<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const route = useRoute()
const { t } = useI18n()

const character = computed(() => route.meta.frontmatter)

</script>

<template>
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <Toolbar />
    <div class="container mx-auto flex items-start p-8">
      <div class="w-2/3">
        <router-view />
      </div>
      <aside class="w-1/3 card prose prose-sm">
        <img :src="character?.media" :alt="character?.title">
        <div class="px-4">
          <h2>{{ character.title }}</h2>
          <blockquote class="text-sm">
            <p>{{ character.description }}</p>
          </blockquote>
          <div>
            <div class="flex w-full items-center text-left px-4">
              <strong class="w-1/2">{{ t('gender') }}</strong>
              <span class="w-1/2 flex items-center">
                <GenderIcon
                  class="mr-4"
                  :gender="character.gender"
                />

                {{ t(character.gender) }}

              </span>
            </div>
            <div class="flex w-full items-center text-left px-4">
              <strong class="w-1/2">{{ t('career') }}</strong>
              <span class="w-1/2 flex items-center">
                <img
                  class="mr-4 w-4"
                  :src="`/icons/${character.career}.png`"
                  :alt="t(character.career)"
                />
                <span>
                  {{ t(`careers.${character.career}`) }}
                </span>
              </span>
            </div>
          </div>
        </div>
      </aside>
    </div>
    <Footer />
    <div class="mt-5 mx-auto text-center opacity-25 text-sm">
      [Character Layout]
    </div>
  </main>
</template>
