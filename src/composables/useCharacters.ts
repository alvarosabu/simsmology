import { computed } from 'vue'
import { useRouter } from 'vue-router'

export function useCharacters() {
  const router = useRouter()
  const routes = router?.getRoutes()
    .filter(i => i.path.startsWith('/character'))

  const characters = computed(() =>
    routes?.filter(route => !route.path.endsWith('.html') && route.meta.isMD).map(route => ({ ...route.meta.frontmatter as Object, slug: route.meta.slug })),
  )
  return {
    characters,
  }
}
