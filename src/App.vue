<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="w-full flex justify-center items-center mt-5 mb-8 space-x-5">
    <RouterLink
      class="py-2 px-4 bg-gray-700 text-gray-400 rounded text-sm hover:bg-gray-600 hover:text-gray-200"
      to="/"
      >Home
    </RouterLink>
    <div class="border-l border-gray-700 h-7"></div>
    <RouterLink
      class="py-2 px-4 bg-gray-700 text-gray-400 rounded text-sm hover:bg-gray-600 hover:text-gray-200"
      to="/posts"
      >Posts
    </RouterLink>
    <div class="border-l border-gray-700 h-7"></div>
    <RouterLink
      class="py-2 px-4 bg-gray-700 text-gray-400 rounded text-sm hover:bg-gray-600 hover:text-gray-200"
      to="/modals"
      >Modals
    </RouterLink>
  </nav>

  <RouterView />
</template>

<style scoped>
a.router-link-exact-active {
  @apply text-white bg-gray-600;
}
</style>
