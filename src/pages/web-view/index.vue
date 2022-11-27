<script lang="ts" setup>
const { data } = $(usePage({ url: '' }))

console.log(data)
</script>

<template>
  <web-view :src="data.url" />
</template>
