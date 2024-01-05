<template>
  <div class="w-full h-full flex flex-col gap-2">
    <span> Улучшения! </span>
    <span>--------------</span>
    <p>
      Цена:
      <span>
        <Twemoji emoji="🪙" />
        {{ store.maxUpgradeLvl }}
      </span>
    </p>
    <Button
      :text="
        'Навык строительства (' +
        store.toolLVL +
        ' > ' +
        (store.toolLVL + 1) +
        ')'
      "
      icon="🔨"
      reverse
      :action="store.upgradeTool"
      class="bg-stone-700 text-white active:bg-stone-600"
    />
    <Button
      :text="
        'Навык рубки дерева (' +
        store.chopLVL +
        ' > ' +
        (store.chopLVL + 1) +
        ')'
      "
      icon="🪵"
      reverse
      :action="store.upgradeChop"
      class="bg-stone-700 text-white active:bg-stone-600"
    />
    <Button
      :text="
        'Навык добычи камня (' +
        store.mineLVL +
        ' > ' +
        (store.mineLVL + 1) +
        ')'
      "
      icon="🪨"
      reverse
      :action="store.upgradeMine"
      class="bg-stone-700 text-white active:bg-stone-600"
    />
    <Button
      :text="
        'Навык торговли (' + store.tradeLVL + ' > ' + (store.tradeLVL + 1) + ')'
      "
      icon="🪙"
      reverse
      :action="store.upgradeTrade"
      class="bg-stone-700 text-white active:bg-stone-600"
    />
    <Button
      :text="
        'Навык управления (' +
        store.houseLVL +
        ' > ' +
        (store.houseLVL + 1) +
        ')'
      "
      icon="😀"
      reverse
      :action="store.upgradeHouse"
      class="bg-stone-700 text-white active:bg-stone-600"
    />
    <span>--------------</span>
    <p>
      Цена:
      <span>
        <Twemoji emoji="👤" />
        1
      </span>
      |
      <span>
        <Twemoji emoji="🪙" />
        25
      </span>
    </p>
    <Button
      text="Обучить лесоруба"
      icon="🪵"
      reverse
      :action="store.trainLogger"
      class="bg-stone-700 text-white active:bg-stone-600"
    />
    <Button
      text="Обучить камнелома"
      icon="🪨"
      reverse
      :action="store.trainMiner"
      class="bg-stone-700 text-white active:bg-stone-600"
    />
    <Button
      text="Обучить торговца"
      icon="🪙"
      reverse
      :action="store.trainTrader"
      class="bg-stone-700 text-white active:bg-stone-600"
    />
  </div>
</template>

<script setup>
const store = mainStore();
</script>
