<template>
  <div class="w-full h-full flex flex-col gap-2">
    <span>Поселение</span>
    <span>--------------</span>
    <span>Лесорубы: {{ store.loggers }}</span>
    <span>Камнеломы: {{ store.miners }}</span>
    <span>Торговцы: {{ store.traders }}</span>
    <span>--------------</span>
    <span>
      Чудо света построено на {{ (store.construction / 10000).toFixed(3) }}%
    </span>
    <span> Прогресс: {{ store.construction }} / 1000000 </span>
    <span>--------------</span>
    <p>
      Цена:
      <span>
        <Twemoji emoji="🪵" />
        {{ store.buildPrice[0] }}
      </span>
      |
      <span>
        <Twemoji emoji="🪨" />
        {{ store.buildPrice[1] }}
      </span>
      |
      <span>
        <Twemoji emoji="🪙" />
        {{ store.buildPrice[2] }}
      </span>
    </p>
    <Button
      text="Строить"
      icon="🔨"
      reverse
      :action="store.build"
      class="bg-stone-700 text-white active:bg-stone-600"
      :disabled="!store.buildable"
    />
  </div>
</template>

<script setup>
const store = mainStore();
</script>
