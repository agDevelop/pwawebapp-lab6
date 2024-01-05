<template>
  <div>
    <VitePwaManifest />
    <NuxtPage />
  </div>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: "bg-slate-100",
  },
});
</script>
