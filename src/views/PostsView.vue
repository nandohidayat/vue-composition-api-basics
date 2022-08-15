<template>
  <div class="posts">
    <h1>Posts</h1>
    <ul class="mb-8">
      <li v-for="post in posts" :key="post.id">
        <RouterLink :to="`/postDetail/${post.id}`">{{ post.title }}</RouterLink>
      </li>
    </ul>
    <textarea v-autofocus class="text-gray-800"></textarea>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { vAutofocus } from "@/directives/vAutofocus";

const posts = ref([
  { id: "id1", title: "Post 1" },
  { id: "id2", title: "Post 2" },
  { id: "id3", title: "Post 3" },
]);
</script>
