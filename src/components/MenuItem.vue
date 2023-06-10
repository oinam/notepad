<script setup lang="ts">

const props = defineProps<{
  title: string
  options: string[]
  activeItem: string|null
}>()

const emit = defineEmits<{
  (e: 'click', event: Event, title: string): void
  (e: 'subItemClicked', option: string): void
}>()

const onSubmenuClick = (e: MouseEvent) => {
  e.stopPropagation();
}

</script>

<template>
  <div class="item" v-bind:class="{ selected: props.activeItem === props.title }" @click="emit('click', $event, props.title)">
    {{ props.title }}

    <div class="submenu" @click="onSubmenuClick" v-if="props.activeItem === props.title">
      <div class="submenu-item" v-bind:key="option" v-for="option in props.options" @click="$event => emit('subItemClicked', option)">
        {{ option }}
      </div>
    </div>
  </div>
</template>

<style scoped>

.item {
  position: relative;
  padding: 0;
  padding-left: 8px;
  padding-right: 8px;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10pt;
  height: 100%;
  border-radius: 4px;
}
.item:hover, .selected {
  background-color: #E8EBF0;

}

.submenu {
  background-color: #F8F8F8;
  width: 160px;
  position: absolute;
  top: 100%;
  left: 0px;
  padding: 4px;
  box-shadow: 0 8px 8px rgba(0,0,0,0.15);
  border: 1px solid #e9e9e9;
  border-radius: 8px;
  font-size: 1em;
}

.submenu-item {
  padding: 6px;
  border-radius: 4px;
}

.submenu-item:hover {
  background-color: #E8EBF0;
}
</style>
