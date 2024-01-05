<template>
  <div
    class="min-w-8 min-h-3 w-fit px-3 py-1 bg-slate-500 rounded shadow-md active:bg-slate-600"
  >
    <button @click="action()" :disabled="disabled">
      <span
        :class="[reverse ? 'flex-row-reverse' : '', 'flex items-center gap-2']"
      >
        <p>{{ text }}</p>
        <Twemoji v-show="icon != ''" :emoji="icon" />
      </span>
    </button>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    default: "Button",
  },
  icon: {
    type: String,
    default: "",
  },
  reverse: {
    type: Boolean,
    default: false,
  },
  action: {
    type: Function,
    default: () => {},
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>
