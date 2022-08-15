<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="w-full flex justify-center items-center my-5 space-x-5">
    <RouterLink
      class="py-2 px-4 bg-gray-700 text-gray-400 rounded text-xl hover:bg-gray-600 hover:text-gray-200"
      to="/"
      >Home
    </RouterLink>
    <div class="border-l border-gray-700 h-7"></div>
    <RouterLink
      class="py-2 px-4 bg-gray-700 text-gray-400 rounded text-xl hover:bg-gray-600 hover:text-gray-200"
      to="/about"
      >About
    </RouterLink>
  </nav>

  <RouterView />
</template>

<style scoped>
a.router-link-exact-active {
  @apply text-white bg-gray-600;
}
</style>
