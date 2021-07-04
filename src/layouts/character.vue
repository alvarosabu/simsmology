
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
    <div class="container mt-8 mx-auto flex flex-col-reverse md:flex-row items-start md:p-8">
      <div class="w-full md:w-2/3">
        <router-view />
      </div>
      <aside class="w-full md:w-1/3 card prose prose-sm mb-8 pb-4">
        <img :src="character?.media" :alt="character?.title" />
        <div class="px-4">
          <h2>{{ character.title }}</h2>
          <blockquote class="text-sm">
            <p>{{ character.description }}</p>
          </blockquote>
          <div>
            <div class="flex w-full items-center text-left px-4">
              <strong class="w-1/2">{{ t('gender') }}</strong>
              <span class="w-1/2 flex items-center">
                <GenderIcon class="mr-4" :gender="character.gender" />

                {{ t(character.gender) }}
              </span>
            </div>
            <div class="flex w-full items-center text-left px-4">
              <strong class="w-1/2">{{ t('career') }}</strong>
              <span class="w-1/2 flex items-center">
                <img
                  class="mr-4 w-4"
                  :src="`/icons/careers/${character.career}.png`"
                  :alt="t(character.career)"
                />
                <span>{{ t(`careers.${character.career}`) }}</span>
              </span>
            </div>
            <div class="text-left px-4">
              <h4>
                {{ t('aspirations.label') }}
              </h4>
              <div class="flex flex-wrap justify-between">
                <AspirationTag v-for="aspiration in character.aspirations" :key="aspiration" class="m-1" :aspiration="aspiration" />
              </div>
            </div>
            <div class="text-left px-4">
              <h4>
                {{ t('traits.label') }}
              </h4>
              <div class="flex flex-wrap justify-between">
                <TraitTag v-for="trait in character.traits" :key="trait" class="m-1" :trait="trait" />
              </div>
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
