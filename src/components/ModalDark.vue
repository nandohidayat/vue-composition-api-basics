<template>
  <teleport to=".modals-container">
    <div
      v-if="modelValue"
      class="modal p-4 bg-gray-100 text-gray-900 absolute left-0 top-0 w-full h-full z-10"
    >
      <h1 class="text-2xl">
        {{ title }}
      </h1>
      <slot></slot>
      <button @click="$emit('update:modelValue', false)">Hide Modal</button>
      <div>Username is: {{ userData.username }}</div>
    </div>
  </teleport>
</template>

<script setup>
import { inject } from "vue";

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

const userData = inject("userData");

console.log(props.title);
</script>
