<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  placeholder: String,
  error: {
    type: Boolean,
    default: false,
  },
  helperText: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
    default: '',
  },
})

const emits = defineEmits(['update:modelValue', 'change', 'input'])
let focus = $ref(false)

const emitOnInput = (e: UniInputEvent) => {
  emits('update:modelValue', e.detail.value)
  emits('input')
}
</script>

<template>
  <div>
    <div
      border
      py4
      px3
      rounded-lg
      transition-all
      border-2
      class="text-[#212B36]" :class="[
        focus ? 'border-[#00AB55]' : 'border-[#919EAB]/45',
        {
          '!border-[#FF5630]': props.error,
        },
      ]"
    >
      <input
        :type="props.type"
        :placeholder="props.placeholder"
        :value="props.modelValue"
        text-sm
        @input="emitOnInput"
        @focus="focus = true"
        @blur="focus = false"
      >
    </div>
    <div v-if="props.error && props.helperText?.length" px2 pt1 class="text-[#FF5630]" text-xs>
      {{ props.helperText }}
    </div>
  </div>
</template>
