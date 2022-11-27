<script lang="ts" setup>
const props = defineProps({
  href: String,
})

const handleLinkClick = () => {
  app.to('/pages/web-view/index', { url: props.href })
}
</script>

<template>
  <div font-bold class="text-[#00AB55] text-xs" @click="handleLinkClick">
    <slot />
  </div>
</template>
