import { computed } from 'vue'
import { useRouter } from 'vue-router'

export function useDomesticUnits() {
  const router = useRouter()
  const routes = router?.getRoutes()
    .filter(i => i.path.startsWith('/family'))

  const families = computed(() =>
    routes?.filter(route => !route.path.endsWith('.html') && route.meta.isMD).map(route => ({ ...route.meta.frontmatter as Object, slug: route.meta.slug })),
  )
  return {
    families,
  }
}
