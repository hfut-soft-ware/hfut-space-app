<script lang="ts" setup>
const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
})

const emits = defineEmits(['click'])

let clicked = $ref(false)

const onClick = (e: Event) => {
  if (!props.loading) {
    emits('click', e)
    clicked = true
  }

  setTimeout(() => {
    clicked = false
  }, 500)
}
</script>

<template>
  <div
    class="bg-[#00AB55]"
    :class="[props.loading as Boolean ? '!bg-[#E5E8EB]' : 'mui-button']"
    relative
    text-white
    px5
    py3
    rounded-lg
    flex-center
    font-bold
    overflow-hidden
    transition-all
    @click="onClick"
  >
    <template v-if="props.loading">
      <div center text-2xl>
        <div absolute animate-spin class="text-black/10 i-ri:loader-4-line" />
        <div animate-spin class="text-black/20 i-ri:loader-5-line" />
      </div>
    </template>
    <template v-else>
      <slot />
      <div v-if="clicked" class="ripple" />
    </template>
  </div>
</template>

<style scoped>
.mui-button {
  box-shadow: rgb(0 171 85 / 24%) 0px 8px 16px 0px;
}

.ripple {
  position: absolute;
  width: 0vw;
  height: 0vw;
  border-radius: 9999px;
  background-color: rgba(0, 0, 0, 0.15);
  animation: ripple 0.5s ease-out;
}

@keyframes ripple {
  0% {
    transform: scale(0);
    opacity: 1;
    width: 0vw;
    height: 0vw;
  }
  100% {
    transform: scale(3);
    opacity: 0;
    width: 100vw;
    height: 100vw;
  }
}
</style>
