<template>
  <div class="area shadow-lg w-64 h-screen sticky">
    <div class="mt-1.5" v-for="(section, i) in config" :key="'config-' + i">
      <div class="font-bold text-gray-300 dark:text-gray-500 mb-1">
        {{ section.title }}
      </div>
      <template v-for="(items, j) in section.items" :key="'items' + j">
        <UAccordion :items="items" v-if="Array.isArray(items)" class="mb-2">
          <template #item="{ item }">
            <AppSidebarLink
              class="relative bottom-2 mb-1"
              v-for="(link, i) in item.links"
              :key="i"
              :to="link.to"
              >{{ link.label }}</AppSidebarLink
            >
          </template>
        </UAccordion>
        <AppSidebarLink v-else class="relative bottom-2 mb-1" :to="items.to">{{
          items.label
        }}</AppSidebarLink>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = [
  {
    //section hello world
    title: "Hello world",
    items: [
      [
        {
          label: "Utilities",
          icon: "i-heroicons-wrench-screwdriver",
          links: [
            {
              to: "#hello",
              label: "Hello",
              icon: "i-heroicons-wrench-screwdriver",
            },
            {
              to: "#world",
              label: "World",
              icon: "i-heroicons-wrench-screwdriver",
            },
          ],
        },
        {
          label: "Utilities",
          icon: "i-heroicons-archive-box",
          links: [
            {
              to: "#hello 1",
              label: "Hello",
              icon: "i-heroicons-wrench-screwdriver",
            },
            {
              to: "#world 1",
              label: "World",
              icon: "i-heroicons-wrench-screwdriver",
            },
          ],
        },
      ],
    ],
  },
  {
    title: "Salut tout le monde",
    items: [
      [
        {
          label: "Utilités",
          icon: "i-heroicons-wrench-screwdriver",
          links: [
            {
              to: "#salut",
              label: "Salut",
              icon: "i-heroicons-wrench-screwdriver",
            },
            {
              to: "#Monde",
              label: "Monde",
              icon: "i-heroicons-wrench-screwdriver",
            },
          ],
        },
        {
          label: "Utilities",
          icon: "i-heroicons-archive-box",
          links: [
            {
              to: "#Salut 1",
              label: "Salut",
              icon: "i-heroicons-wrench-screwdriver",
            },
            {
              to: "#Salut 1",
              label: "Salut",
              icon: "i-heroicons-wrench-screwdriver",
            },
          ],
        },
      ],
      {
        label: "Juste link",
        icon: "i-heroicons-archive-box",
        to: "#",
      },
    ],
  },
];
</script>
