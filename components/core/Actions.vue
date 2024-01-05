<template>
  <div class="w-full h-full flex flex-col gap-2">
    <span> Добыча ресурсов! </span>
    <span>--------------</span>
    <Button
      :text="'Рубить дерево (' + store.chopLVL + ')'"
      icon="🪵"
      reverse
      :action="store.chop"
      class="bg-stone-700 text-white active:bg-stone-600"
    />
    <Button
      :text="'Добывать камень (' + store.mineLVL + ')'"
      icon="🪨"
      reverse
      :action="store.mine"
      class="bg-stone-700 text-white active:bg-stone-600"
    />
    <Button
      :text="'Торговать (???)'"
      icon="🪙"
      reverse
      :action="store.trade"
      class="bg-stone-700 text-white active:bg-stone-600"
    />
    <Button
      :text="'Отдыхать (от 2 до ' + (2 + store.houseLVL) + ')'"
      icon="😀"
      reverse
      :action="store.rest"
      class="bg-stone-700 text-white active:bg-stone-600"
    />
  </div>
</template>

<script setup>
const store = mainStore();
</script>
