<template>
  <teleport to=".modals-container">
    <div
      v-if="modelValue"
      class="modal p-4 bg-gray-700 absolute left-0 top-0 w-full h-full z-10"
    >
      <h1 class="text-2xl">
        {{ title }}
      </h1>
      <slot></slot>
      <button @click="$emit('update:modelValue', false)">Hide Modal</button>
    </div>
  </teleport>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "No Title Passed",
  },
});

defineEmits(["update:modelValue"]);

console.log(props.title);
</script>
