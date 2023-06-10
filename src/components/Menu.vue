<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import MenuItem from './MenuItem.vue'

const activeItem = ref<string|null>(null);

const emit = defineEmits<{
  (e: 'itemClicked', item: string): void
}>()

const onWindowClick = () => {
  activeItem.value = null;
};

const onItemClick = (e: Event, title: string) => {
  e.stopPropagation();

  if (activeItem.value === title) {
    activeItem.value = null;
  } else {
    activeItem.value = title;
  }
}

onMounted(() => {
  window.addEventListener('click', onWindowClick);
})

onUnmounted(() => {
  window.removeEventListener('click', onWindowClick);
})

const handleSubItemClicked = (item: string) => {
  activeItem.value = null;
  emit('itemClicked', item)
}

</script>

<template>
  <div class="container">
    <MenuItem title="File" :options="['New','Open','Save','Save as...']" @click="onItemClick" v-bind:activeItem="activeItem" @subItemClicked="handleSubItemClicked"/>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  height: 32px;
  padding-left: 4px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #F0F5F9;
}

</style>
