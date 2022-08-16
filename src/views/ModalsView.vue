<template>
  <div class="modals">
    <h1>Modals</h1>
    <div>
      <label
        >Show dark modal?
        <input v-model="showDarkModal" type="checkbox" />
      </label>
    </div>
    <button @click="showModal = true">Show Modal</button>
    <component
      :is="showDarkModal ? ModalDark : ModalLight"
      v-model="showModal"
      title="My Modal Title"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
        blanditiis corporis culpa dolore impedit, ipsam ipsum, iste numquam odit
        qui sapiente sequi sint tenetur. Dolore laudantium natus officiis
        placeat unde?
      </p>
    </component>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ModalLight from "@/components/ModalLight.vue";
import ModalDark from "@/components/ModalDark.vue";

const showModal = ref(false);
const showDarkModal = ref(false);
</script>
