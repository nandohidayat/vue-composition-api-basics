<template>
  <div class="home text-center">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>
    <h3 class="mb-4">{{ counter.title }}:</h3>
    <div class="text-5xl flex items-center justify-center space-x-10 mb-2">
      <button
        class="py-2 px-4 bg-gray-700 text-gray-400 rounded hover:bg-gray-600 hover:text-gray-200"
        @click="counter.decreaseCounter(2)"
      >
        --
      </button>
      <button
        class="py-2 px-4 bg-gray-700 text-gray-400 rounded hover:bg-gray-600 hover:text-gray-200"
        @click="counter.decreaseCounter(1)"
      >
        -
      </button>
      <span>{{ counter.count }}</span>
      <button
        class="py-2 px-4 bg-gray-700 text-gray-400 rounded hover:bg-gray-600 hover:text-gray-200"
        @click="counter.increaseCounter(1)"
      >
        +
      </button>
      <button
        class="py-2 px-4 bg-gray-700 text-gray-400 rounded hover:bg-gray-600 hover:text-gray-200"
        @click="counter.increaseCounter(2)"
      >
        ++
      </button>
    </div>
    <p class="mb-8">This counter is {{ counter.oddOrEven }}</p>
    <div class="edit">
      <h4>Edit counter title:</h4>
      <input
        v-model="counter.title"
        v-autofocus
        class="text-gray-800 text-center"
        type="text"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCounterStore } from "@/stores/counter";
import { vAutofocus } from "@/directives/vAutofocus";

const appTitle = "My Amazing Counter App";

const appTitleRef = ref(null);

const counter = useCounterStore();
</script>
