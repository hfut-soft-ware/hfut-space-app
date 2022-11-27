<script lang="ts" setup>
const props = defineProps({
  href: String,
})

const handleLinkClick = () => {
  uni.navigateTo({
    url: `./webView?url=${props.href}`,
  })
}
</script>

<template>
  <div font-bold class="text-[#00AB55] text-xs" @click="handleLinkClick">
    <slot />
  </div>
</template>
