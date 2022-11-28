<script lang="ts" setup>
import type { PropType } from 'vue'

const { variant } = defineProps({
  variant: {
    type: String as PropType<'success' | 'error' | 'info'>,
    default: 'info',
  },
})

const classes = $computed(() => ({
  bg: {
    'bg-#D8FBDE': variant === 'success',
    'bg-#FFE7D9': variant === 'error',
    'bg-#D0F2FF': variant === 'info',
  },
  text: {
    'text-#0A5554': variant === 'success',
    'text-#7A0C2E': variant === 'error',
    'text-#04297A': variant === 'info',
  },
  icon: {
    'text-#FF4842 i-ri-information-fill': variant === 'error',
    'text-#2B9AFF i-ri-information-fill': variant === 'info',
    'text-#36B37E i-ri:checkbox-circle-fill': variant === 'success',
  },
}))
</script>

<template>
  <div mt2 px3 py4 rounded-lg flex gap2 :class="classes.bg">
    <div :class="classes.icon" inline-block text-2xl />
    <p :class="classes.text" flex-center-col text-xs text-sm>
      <slot />
    </p>
  </div>
</template>
