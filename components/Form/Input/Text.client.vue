<template>
  <span class="relative form-input-text" :class="{ focused }">
    <font-awesome-icon icon="fa fa-search" class="addon left-3" />
    <InputText
      v-model="model"
      placeholder="Search"
      class="pl-10 pr-10"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
    />
    <font-awesome-icon
      icon="fa fa-spinner"
      spin-pulse
      class="addon right-3"
      v-if="loading"
    />
  </span>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";

const model = defineModel();

const props = defineProps<{
  loading: boolean;
}>();

const emit = defineEmits(["input", "focus", "blur"]);

const focused = computed({
  get() {
    return isFocused.value;
  },
  set(value: boolean) {
    isFocused.value = value;
  },
});

const isFocused = ref(false);

/**
 * Event
 */
const onInput = (event: Event) => {
  emit("input", event);
};

const onFocus = (event: Event) => {
  focused.value = true;
  emit("focus", event);
};

const onBlur = (event: Event) => {
  focused.value = false;
  emit("blur", event);
};
</script>
<style lang="scss">
.focused .addon {
  color: theme("colors.primary-300") !important;
}
.form-input-text {
  .addon {
    @apply text-surface-400 dark:text-surface-600 absolute top-2/4 -mt-2;
    transition: all ease 0.3s;
  }
}
</style>
