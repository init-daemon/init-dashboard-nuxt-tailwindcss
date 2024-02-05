<template>
  <div class="area flex items-center justify-between">
    <UFormGroup>
      <UInput placeholder="Rechercher..." icon="i-heroicons-magnifying-glass" />
    </UFormGroup>
    <div class="flex items-center justify-between">
      <CustomUDropdown
        class="overflow-y-auto relative"
        :items="notificationMenuItems"
        :ui="{
          width: 'md:w-1/2 w-4/5',
          height: 'max-h-80',
          item: {
            disabled: 'cursor-text select-text',
            base: 'flex items-center justify-between',
            rounded: 'rounded-sm',
          },
        }"
      >
        <template #toggler>
          <UChip
            size="2xl"
            text="2"
            :ui="{ position: { 'top-right': 'top-1 right-2' } }"
            class="overflow-visible"
          >
            <UButton
              color="white"
              variant="solid"
              icon="i-heroicons-bell-alert"
            />
          </UChip>
        </template>
      </CustomUDropdown>

      <CustomUDropdown
        :items="userMenuItems"
        :ui="{
          item: {
            disabled: 'cursor-text select-text',
            base: 'flex items-center justify-between',
            rounded: 'rounded-sm',
          },
        }"
      >
        <template #toggler>
          <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" />
        </template>
      </CustomUDropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
const userMenuItems = [
  [
    {
      label: "john@doe.com",
      title: "Connecté en tant que",
      slot: "head",
      disabled: true,
    },
  ],
  [
    {
      label: "Paramètre du compte",
      icon: "i-heroicons-cog-8-tooth",
    },
  ],
  [
    {
      label: "Mes contacts",
      icon: "i-heroicons-phone",
    },
    {
      label: "Mes Composants",
      icon: "i-heroicons-archive-box",
    },
  ],
  [
    {
      label: "Déconnexion",
      icon: "i-heroicons-arrow-left-on-rectangle",
    },
  ],
];

const notificationMenuItems = [
  [
    {
      label: "",
      title: "Notifications -",
      slot: "head",
      disabled: true,
    },
  ],
  [
    {
      title: "Vous avez supprimer...",
      time: "26 Janvier 2023",
      label:
        "Lorem ipsum dolor, sit amet consectetur voluptatibus corporis et dolor, quae sequi non placeat soluta fuga ad!",
      mainIcon: "i-heroicons-archive-box",
    },

    {
      title: "Mami vous a ajouté sur ...",
      time: "26 Janvier 2023",
      label:
        "Ipsum dolor, sit amet consectetur adipisicing elit. Beatae sit ea earum natus tempore praesentium  voluptatibus corporis et dolor, quae sequi non placeat soluta fuga ad!",
      mainIcon: "i-heroicons-archive-box",
    },

    {
      title: "Hi there...",
      time: "26 Janvier 2023",
      label:
        "em ipsum elit. Beatae sit ea earum natus tempore dolor, sit amet consectetur adipisicing  voluptatibus corporis et dolor, quae sequi non placeat soluta fuga ad!",
      mainIcon: "i-heroicons-archive-box",
    },
  ],
];
</script>
