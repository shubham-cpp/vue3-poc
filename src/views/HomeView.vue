<script setup lang="ts">
import PostCard from '@/components/PostCard.vue'
import { usePostStore } from '@/stores'

const { posts } = usePostStore()
</script>

<template>
  <section class="col-span-4">
    <ul class="flex flex-col gap-2">
      <li v-for="post in posts" :key="post.id"><PostCard :post="post" /></li>
    </ul>
  </section>
</template>
