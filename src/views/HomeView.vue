<template>
  <div class="home text-center">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>
    <h3 class="mb-4">{{ counterData.title }}:</h3>
    <div class="text-5xl flex items-center justify-center space-x-10 mb-2">
      <button
        class="py-2 px-4 bg-gray-700 text-gray-400 rounded hover:bg-gray-600 hover:text-gray-200"
        @click="decreaseCounter(2)"
      >
        --
      </button>
      <button
        class="py-2 px-4 bg-gray-700 text-gray-400 rounded hover:bg-gray-600 hover:text-gray-200"
        @click="decreaseCounter(1)"
      >
        -
      </button>
      <span>{{ counterData.count }}</span>
      <button
        class="py-2 px-4 bg-gray-700 text-gray-400 rounded hover:bg-gray-600 hover:text-gray-200"
        @click="increaseCounter(1)"
      >
        +
      </button>
      <button
        class="py-2 px-4 bg-gray-700 text-gray-400 rounded hover:bg-gray-600 hover:text-gray-200"
        @click="increaseCounter(2)"
      >
        ++
      </button>
    </div>
    <p class="mb-8">This counter is {{ oddOrEven }}</p>
    <div class="edit">
      <h4>Edit counter title:</h4>
      <input
        v-model="counterData.title"
        v-autofocus
        class="text-gray-800 text-center"
        type="text"
      />
    </div>
  </div>
</template>

<script setup>
import {
  computed,
  nextTick,
  onBeforeMount,
  onMounted,
  reactive,
  ref,
  watch,
} from "vue";
import { vAutofocus } from "@/directives/vAutofocus";

const appTitle = "My Amazing Counter App";

const appTitleRef = ref(null);

onBeforeMount(() => {
  console.log("before mount");
});

const counterData = reactive({
  count: 0,
  title: "My Counter",
});

watch(
  () => counterData.count,
  (newCount) => {
    if (newCount === 20) alert("Way to go! you made it to 20!");
  }
);

const oddOrEven = computed(() => {
  return counterData.count % 2 === 0 ? "even" : "odd";
});

const increaseCounter = async (amount) => {
  counterData.count += amount;
  await nextTick();
  console.log("nextTick");
};

const decreaseCounter = (amount) => {
  counterData.count -= amount;
};

onMounted(() => {
  console.log(`The app title is: ${appTitleRef.value.offsetWidth} px wide`);
});
</script>
