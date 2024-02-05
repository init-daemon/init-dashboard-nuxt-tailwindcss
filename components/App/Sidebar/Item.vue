<template>
  <div>
    <div class="font-bold">Hello world</div>
    <UAccordion
      :items="[
        {
          label: 'Utilities',
          icon: 'i-heroicons-wrench-screwdriver',
          content: 'Lorem ipsum dolor sit amet, consectetur.',
        },
      ]"
    />
  </div>
</template>

<script setup lang="ts"></script>

<!-- 
{
    "wrapper": "w-full flex flex-col",
    "item": {
      "base": "",
      "size": "text-sm",
      "color": "text-gray-500 dark:text-gray-400",
      "padding": "pt-1.5 pb-3",
      "icon": "ms-auto transform transition-transform duration-200"
    },
    "transition": {
      "enterActiveClass": "overflow-hidden transition-[height] duration-200 ease-out",
      "leaveActiveClass": "overflow-hidden transition-[height] duration-200 ease-out"
    },
    "default": {
      "openIcon": "i-heroicons-chevron-down-20-solid",
      "closeIcon": "",
      "class": "mb-1.5 w-full",
      "variant": "soft"
    }
  } -->
