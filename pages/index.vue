<template>
  <div class="relative">
    <Gamewin />
    <Gameover />
    <div
      class="fixed left-2 right-2 top-2 h-20 p-2 grid grid-cols-3 gap-2 bg-white rounded shadow"
    >
      <Timer />
      <div
        class="w-20 h-6 mx-auto flex flex-row gap-2 items-center justify-center"
        v-for="res in store.resources"
        :id="res.id"
      >
        <div class="w-6 h-6 flex items-center justify-center">
          <Twemoji :emoji="res.icon" />
        </div>
        <div class="w-full">
          <p
            :class="[
              res.value > 0 ? 'text-stone-800' : 'text-rose-800',
              'font-black',
            ]"
          >
            {{ res.value }}
          </p>
        </div>
      </div>
    </div>

    <div
      class="fixed left-2 top-24 right-2 bottom-24 p-2 bg-slate-200 rounded shadow-inner"
    >
      <CoreConstruction v-show="activeTab == 0" />
      <CoreActions v-show="activeTab == 1" />
      <CoreUpgrades v-show="activeTab == 2" />
      <CoreInfo v-show="activeTab == 3" />
    </div>

    <div
      class="fixed left-2 right-2 bottom-2 h-20 grid grid-cols-4 divide-x bg-white rounded shadow"
    >
      <button
        :class="[
          activeTab == tab.id ? 'bg-stone-100' : 'bg-white active:bg-gray-50',
          'w-full h-full flex flex-col gap-1 items-center justify-center',
        ]"
        v-for="tab in tabs"
        :id="tab.id"
        @click="activeTab = tab.id"
      >
        <Twemoji :emoji="tab.icon" />
        <span>{{ tab.title }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const store = mainStore();

const activeTab = ref(0);

const tabs = [
  {
    id: 0,
    title: "Главная",
    icon: "🏠",
  },
  {
    id: 1,
    title: "Ресурсы",
    icon: "⚒️",
  },
  {
    id: 2,
    title: "Улучшения",
    icon: "🔝",
  },
  {
    id: 3,
    title: "Инфо",
    icon: "🤔",
  },
];
</script>
