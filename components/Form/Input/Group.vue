<template>
  <div class="card flex justify-center">
    <InputText :pt="myInputStyle" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const myInputStyle = ref({
  root: "bg-gray-100 dark:bg-gray-900 p-4 text-gray-900 dark:text-gray-50 rounded-full placeholder:text-gray-500 border border-transparent",
});
</script>
