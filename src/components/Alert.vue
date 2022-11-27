<script lang="ts" setup>
// const props = defineProps<{}>()
</script>

<template>
  <div mt2 p3 rounded-lg flex gap2 class="bg-#D0F2FF">
    <div class="icon text-[#2B9AFF]" i-ri-information-fill inline-block text-lg />
    <p class="text-#04297A" flex-center-col text-xs text-sm>
      <slot />
    </p>
  </div>
</template>

<style lang="scss" scoped></style>
