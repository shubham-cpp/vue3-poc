<script setup lang="ts">
import { RouterView } from 'vue-router'

const app = document.querySelector('body')
const dark = Boolean(localStorage.getItem('darkMode'))
if (dark) app?.classList.add('dark')
else app?.classList.remove('dark')
</script>

<template>
  <div class="flex flex-col gap-y-4 dark:bg-darkPrimary dark:text-gray-200">
    <RouterView name="navBar" />
    <div class="grid grid-cols-8 gap-2">
      <RouterView name="leftSidebar" />
      <RouterView />
      <RouterView name="rightSidebar" />
    </div>
  </div>
</template>
