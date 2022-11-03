<script setup lang="ts">
let msg = 'Hello from Right Sidebar'
const usersOnline = [
  {
    imgUrl:
      'https://www.mykhel.com/thumb/250x90x250/football/players/4/19054.jpg',
    alt: 'Lionel Messi is Online',
    name: 'Lionel Messi'
  },
  {
    imgUrl:
      'https://i.pinimg.com/originals/94/2a/b4/942ab47f442b0dff017b106a615554c5.jpg',
    alt: 'Cristiano Ronaldo is Online',
    name: 'Cristiano Ronaldo'
  }
]
</script>

<template>
  <section
    class="col-span-2 flex flex-col gap-10 rounded-md px-2 py-1 dark:bg-darkSecondary"
  >
    <div class="flex flex-col gap-2 rounded-md px-3 py-1 dark:bg-darkPrimary">
      <span class="text-lg font-bold">Active Users</span>
      <ul class="flex flex-col gap-4 py-2">
        <li
          v-for="activeUser in usersOnline"
          :key="activeUser.imgUrl"
          class="relative mx-2 flex items-center gap-2"
        >
          <span
            class="absolute inset-0 h-2 w-2 rounded-full bg-green-600"
          ></span>
          <img
            class="h-8 w-8 rounded-[50%]"
            :src="activeUser.imgUrl"
            :alt="activeUser.alt"
          />
          <span>{{ activeUser.name }}</span>
        </li>
      </ul>
    </div>
    <div class="rounded-md px-3 py-1 dark:bg-darkPrimary">messages</div>
    <div class="rounded-md px-3 py-1 dark:bg-darkPrimary">pages</div>
  </section>
</template>
