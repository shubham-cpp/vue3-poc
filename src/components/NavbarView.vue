<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useUserStore } from '@/stores'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const { push } = useRouter()
const { isUserLoggedIn, user } = useUserStore()
const darkMode = ref(Boolean(localStorage.getItem('darkMode')))

onMounted(() => {
  if (!isUserLoggedIn) push('/login')
})

const toggleDarkMode = () => {
  const app = document.querySelector('body')
  darkMode.value = !darkMode.value
  if (darkMode.value) app?.classList.add('dark')
  else app?.classList.remove('dark')
  localStorage.setItem('darkMode', JSON.stringify(darkMode.value))
}
</script>
<template>
  <header
    class="sticky top-0 border-b-2 px-2 py-3 shadow-md dark:bg-[#3b3b3b] dark:text-gray-300"
  >
    <nav class="flex justify-between">
      <div class="flex gap-4">
        <RouterLink to="/" class="font-serif text-xl font-bold text-purple-500"
          >Socials</RouterLink
        >
        <ul class="flex items-center gap-2">
          <li>
            <RouterLink to="/" class="material-symbols-outlined">
              home
            </RouterLink>
          </li>
          <li>
            <button
              class="material-symbols-outlined"
              :title="`Switch to ${darkMode ? 'Light' : 'Dark'} mode`"
              @click="toggleDarkMode"
            >
              {{ `${darkMode ? 'light' : 'dark'}_mode` }}
            </button>
          </li>
          <li class="flex items-center gap-2 rounded-lg border px-2">
            <span class="material-symbols-outlined"> search </span>
            <input
              type="text"
              placeholder="Search ..."
              class="rounded-md border-0 py-1 dark:bg-transparent dark:focus:ring-0"
            />
          </li>
        </ul>
      </div>
      <ul class="flex items-center gap-3">
        <li><button class="material-symbols-outlined">inbox</button></li>
        <li>
          <button class="material-symbols-outlined">
            notifications_active
          </button>
        </li>
        <li class="flex gap-2">
          <img
            :src="user.profilePicture"
            alt="profile picture"
            class="h-8 w-8 cursor-pointer rounded-[50%]"
            title="Manage Account"
          />
          <span>{{ user.fullName }}</span>
        </li>
      </ul>
    </nav>
  </header>
</template>
