<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'

const isFsApiSupported = (window as any).showOpenFilePicker !== undefined;

onMounted(() => {
  if (!isFsApiSupported) {
    alert('Sorry, your browser does not support the File System Access API. Plese consider using another browser for installing this app.');
  }
});
</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>
