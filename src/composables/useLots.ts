import { computed } from 'vue'
import { useRouter } from 'vue-router'

export function useLots() {
  const router = useRouter()
  const routes = router?.getRoutes()
    .filter(i => i.path.startsWith('/lot'))

  const lots = computed(() =>
    routes?.filter(route => !route.path.endsWith('.html') && route.meta.isMD).map(route => ({ ...route.meta.frontmatter as Object, slug: route.meta.slug })),
  )
  return {
    lots,
  }
}
