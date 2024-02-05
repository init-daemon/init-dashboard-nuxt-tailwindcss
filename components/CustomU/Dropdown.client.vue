<template>
  <UDropdown
    :items="items"
    :popper="{ placement: 'bottom-start', arrow: true }"
  >
    <slot name="toggler" />

    <template #head="{ item }">
      <div class="text-left">
        <p v-if="item.title" class="font-bold">{{ item.title }}</p>
        <p class="truncate font-medium text-gray-900 dark:text-white">
          {{ item.label }}
        </p>
      </div>
    </template>

    <template #item="{ item }">
      <div class="flex items-center">
        <UButton
          color="gray"
          variant="ghost"
          :ui="{ rounded: 'rounded-full' }"
          class="text-5 bg-slate-50"
          v-if="item.mainIcon"
        >
          <UIcon
            :name="item.mainIcon"
            class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto"
          />
        </UButton>
        <div class="text-left">
          <p class="truncate text-gray-500 font-bold">{{ item.title }}</p>
          <p class="text-gray-500">{{ item.label }}</p>
          <p class="text-primary-500 text-right text-xs mt-2">
            {{ item.time }}
          </p>
        </div>
      </div>
      <div v-if="item.icon">
        <UIcon
          :name="item.icon"
          class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto"
        />
      </div>
    </template>
  </UDropdown>
</template>

<script setup lang="ts">
const props = defineProps({
  items: Array,
});
</script>
