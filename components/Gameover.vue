<template>
  <div
    v-show="store.gameover"
    class="fixed left-0 top-0 right-0 bottom-0 z-10 flex bg-slate-900/70"
  >
    <div
      class="w-80 min-h-40 mx-auto relative z-20 place-self-center bg-slate-50 rounded shadow"
    >
      <div class="mx-auto mt-8 w-fit">
        <p class="text-2xl font-bold text-stone-800">Вы проиграли!</p>
      </div>

      <Button
        text="Рестарт"
        icon="🤡"
        class="absolute left-1/2 transform -translate-x-1/2 bottom-4 text-white bg-indigo-500"
        :action="store.$reset"
      />
    </div>
  </div>
</template>

<script setup>
const store = mainStore();
</script>
