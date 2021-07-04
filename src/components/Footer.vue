<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { isDark, toggleDark } from '~/logic'

const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <nav class="fixed w-full p-4 left-0 bottom-0 text-xl mt-6 bg-gray-50 z-10 shadow-lg underline">
    <router-link class="icon-btn mx-2" to="/world" :title="t('worlds')">
      <carbon-earth />
    </router-link>
    <router-link class="icon-btn px-4 mx-2" to="/family" :title="t('domestic-units')">
      <carbon-campsite />
    </router-link>
    <router-link class="icon-btn px-4 mx-2" to="/lot" :title="t('lots')">
      <carbon-home />
    </router-link>
    <router-link class="icon-btn px-4 mx-2" to="/character" :title="t('characters')">
      <icomoon-free-diamonds />
    </router-link>
    <!--  <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark">
      <carbon-moon v-if="isDark" />
      <carbon-sun v-else />
    </button> -->

    <!--  <a class="icon-btn mx-2" :title="t('button.toggle_langs')" @click="toggleLocales">
      <carbon-language />
    </a> -->
  </nav>
</template>
