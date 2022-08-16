<template>
  <div class="posts">
    <h1>Posts</h1>
    <ul class="mb-8">
      <li v-for="post in posts" :key="post.id">
        <RouterLink :to="`/postDetail/${post.id}`">{{ post.title }}</RouterLink>
      </li>
    </ul>
    <textarea v-autofocus class="text-gray-800"></textarea>
    <div>
      <button
        :class="{ 'bg-gray-500': counter.oddOrEven === 'odd' }"
        class="w-full text-4xl bg-gray-700 p-3"
        @click="counter.increaseCounter(1)"
      >
        {{ counter.count }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { vAutofocus } from "@/directives/vAutofocus";
import { useCounterStore } from "@/stores/counter";

const posts = ref([
  { id: "id1", title: "Post 1" },
  { id: "id2", title: "Post 2" },
  { id: "id3", title: "Post 3" },
]);

const counter = useCounterStore();
</script>
