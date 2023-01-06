import type { Rule } from 'unocss'
import type { ThemeMode } from '../palette'
import type { Theme } from '../types'

export const textColors: Rule<Theme>[] = [
  [/^text-([^-]*)-?(.*)?$/, (matched, { theme, rawSelector }) => {
    const mode: ThemeMode = rawSelector.includes('dark:') ? 'light' : 'dark'
    const matched1 = theme.palette[mode]?.[matched[1]]
    const matched2 = matched1?.[matched[2]]

    if (matched1 && !matched[2] && !matched2) {
      return { color: matched1?.main }
    }

    if (matched1 && matched2) {
      return { color: matched2 }
    }
  }],
]
