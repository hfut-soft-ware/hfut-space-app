import type AutoImport from 'unplugin-auto-import/vite'
import { importModule } from 'local-pkg'
import * as Hooks from '../src/hooks'

(async () => {
  console.log(await importModule('@tanstack/vue-query'))
})()

const Config: Parameters<typeof AutoImport>[0] = {
  imports: [
    'vue',
    'uni-app',
    { '@/app/index': ['app'] },
    getImports('@/hooks', Hooks),
    { 'power-assert': [['default', 'assert']] },
    {
      '@tanstack/vue-query': [
        'useQuery',
        'useQueries',
        'useInfiniteQuery',
        'useMutation',
        'useQueryClient',
        'useIsFetching',
        'useIsMutating',
      ],
    },
  ],
  dts: 'declare/auto-imports.d.ts',
}

function getImports(path: string, o: Record<string, any>) {
  return { [path]: Object.keys(o) }
}

export default Config
