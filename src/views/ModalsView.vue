<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show Modal</button>
    <modal-component
      v-if="showModal"
      title="My Modal Title"
      @hideModal="showModal = false"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
        blanditiis corporis culpa dolore impedit, ipsam ipsum, iste numquam odit
        qui sapiente sequi sint tenetur. Dolore laudantium natus officiis
        placeat unde?
      </p>
    </modal-component>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ModalComponent from "@/components/ModalComponent.vue";

const showModal = ref(false);
</script>
