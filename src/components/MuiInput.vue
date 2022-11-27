<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  placeholder: String,
  modelValue: String,
})

defineEmits(['update:modelValue'])

let focus = $ref(false)
</script>

<template>
  <div
    border
    py4
    px3
    rounded-lg
    transition-all
    border-2
    class="text-[#212B36]"
    :class="focus ? 'border-[#00AB55]' : 'border-[#919EAB]/45'"
  >
    <input
      :type="props.type"
      :placeholder="props.placeholder"
      :value="props.modelValue"
      text-sm
      @input="$emit('update:modelValue')"
      @focus="focus = true"
      @blur="focus = false"
    />
  </div>
</template>
