<script lang="ts" setup></script>

<template>
  <div class="bg-[#00AB55] mui-button" text-white px5 py3 rounded-lg flex-center font-bold>
    <slot />
  </div>
</template>

<style scoped>
.mui-button {
  box-shadow: rgb(0 171 85 / 24%) 0px 8px 16px 0px;
}
</style>
