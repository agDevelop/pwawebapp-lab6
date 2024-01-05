<template>
  <div class="w-20 h-6 mx-auto flex flex-row gap-2 items-center justify-center">
    <div class="relative w-6 h-6">
      <svg
        fill="currentColor"
        fill-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="2"
        clip-rule="evenodd"
        viewBox="0 0 16 16"
        :class="[
          store.gameover ? '' : 'animate-spin-tick',
          'absolute left-0 top-0 w-full h-full origin-center text-stone-400',
        ]"
      >
        <path d="M8.833 8V4a.833.833 0 0 0-1.666 0v4a.833.833 0 0 0 1.666 0Z" />
      </svg>

      <svg
        fill="currentColor"
        fill-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="2"
        clip-rule="evenodd"
        viewBox="0 0 16 16"
        :class="[
          calcClockRot(),
          'absolute left-0 top-0 w-full h-full origin-center text-stone-800',
        ]"
      >
        <path d="M8.833 8V4a.833.833 0 0 0-1.666 0v4a.833.833 0 0 0 1.666 0Z" />
      </svg>
      <svg
        fill="currentColor"
        fill-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="2"
        clip-rule="evenodd"
        viewBox="0 0 16 16"
        class="absolute left-0 top-0 w-full h-full origin-center text-stone-800"
      >
        <path
          d="M8 0c4.415 0 8 3.585 8 8s-3.585 8-8 8-8-3.585-8-8 3.585-8 8-8Zm0 1.667A6.336 6.336 0 0 1 14.333 8 6.336 6.336 0 0 1 8 14.333 6.336 6.336 0 0 1 1.667 8 6.336 6.336 0 0 1 8 1.667Z"
        />
      </svg>
    </div>
    <div class="w-full">
      <p class="font-black text-stone-800">
        {{ ~~(store.turnsElapsed / 4) }}
      </p>
    </div>
  </div>
</template>

<script setup>
const store = mainStore();

function calcClockRot() {
  const t = store.turnsElapsed % 4;
  switch (t) {
    case 1:
      return "rotate-90";

    case 2:
      return "rotate-180";

    case 3:
      return "-rotate-90";

    default:
      return "rotate-0";
  }
}
</script>
