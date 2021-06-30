<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { isDark, toggleDark } from '~/logic'

const { t } = useI18n()
const route = useRoute()

</script>
<template>
  <nav class="flex items-center bg-white dark:bg-blue shadow-lg fixed top-0 left-0 w-full px-8 py-2">
    <a href="/" class="mr-8"><img src="/logo.png" class="w-4 h-auto" alt="Simsmology"></a>
    <h1 v-show="route.meta.title" class="font-sans">
      {{ route.meta.title }}
    </h1>
  </nav>
</template>
