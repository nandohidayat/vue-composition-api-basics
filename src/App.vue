<template>
  <div class="absolute top-0 right-0 bg-gray-100 text-gray-900 p-1">
    {{ userData.name }} @{{ userData.username }} | Network Staus:
    <span :class="{ 'text-green-400': online, 'text-red-400': !online }">{{
      online ? "Online" : "Offline"
    }}</span>
  </div>
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

<script setup>
import { provide, reactive } from "vue";
import { useOnline } from "@vueuse/core";

const userData = reactive({
  name: "Nando Hidayat",
  username: "nandohidayat",
});

provide("userData", userData);

const online = useOnline();
</script>

<style scoped>
a.router-link-exact-active {
  @apply text-white bg-gray-600;
}
</style>
