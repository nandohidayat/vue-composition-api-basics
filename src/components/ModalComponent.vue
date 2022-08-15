<template>
  <teleport to=".modals-container">
    <div class="modal p-4 bg-gray-700 absolute left-0 top-0 w-full h-full z-10">
      <h1 class="text-2xl">
        {{ title }}
      </h1>
      <slot></slot>
      <button @click="handleButtonClick">Hide Modal</button>
    </div>
  </teleport>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "No Title Passed",
  },
});

const emit = defineEmits(["hideModal"]);

const handleButtonClick = () => {
  emit("hideModal");
};

console.log(props.title);
</script>
