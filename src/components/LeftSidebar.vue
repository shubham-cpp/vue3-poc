<script setup lang="ts">
type MButton = {
  iconName: string
  title?: string
  name: string
  onClick?: () => void
}
const btnGroup1: MButton[] = [
  { iconName: 'diversity_3', name: 'Friends' },
  { iconName: 'storefront', name: 'Market Place' },
  { iconName: 'featured_video', name: 'Watch' },
  { iconName: 'theater_comedy', name: 'Memories' }
]
const btnGroup2: MButton[] = [
  { iconName: 'event', name: 'Events' },
  { iconName: 'stadia_controller', name: 'Gaming' },
  { iconName: 'photo_library', name: 'Gallery' },
  { iconName: 'forum', name: 'Pages' }
]
</script>

<template>
  <aside class="col-span-2 h-full dark:bg-[#4a4a4a] dark:text-gray-300">
    <button
      v-for="btn in btnGroup1"
      :key="btn.iconName"
      class="ml-4 mb-2 flex items-center gap-2 rounded-lg px-3 py-2 text-xl hover:bg-purple-500 hover:font-bold hover:text-white"
      :title="btn?.title ?? `View ${btn.name}`"
      @click="btn.onClick"
    >
      <span class="material-symbols-outlined"> {{ btn.iconName }} </span>
      {{ btn.name }}
    </button>
    <hr />
    <span class="mt-4 ml-4 text-gray-400">Your Shortcuts</span>
    <button
      v-for="btn in btnGroup2"
      :key="btn.iconName"
      class="ml-4 mb-3 flex items-center gap-2 rounded-lg px-3 py-2 text-xl hover:bg-purple-500 hover:font-bold hover:text-white"
      :title="btn?.title ?? `View ${btn.name}`"
      @click="btn.onClick"
    >
      <span class="material-symbols-outlined"> {{ btn.iconName }} </span>
      {{ btn.name }}
    </button>
  </aside>
</template>
