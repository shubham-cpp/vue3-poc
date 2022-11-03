<script setup lang="ts">
import type { Post } from '@/stores/posts'
import { usePostStore } from '@/stores'
import CommentSection from './CommentSection.vue'
import { ref } from 'vue'
const { totalComments, totalLikes } = usePostStore()
const showComments = ref(false)
defineProps<{ post: Post }>()
</script>
<template>
  <article class="flex flex-col gap-2 px-2 py-1 shadow-lg shadow-neutral-600">
    <header>
      <h3 class="text-bold font-serif text-xl">{{ post.username }}</h3>
      <p class="text-lg font-bold">{{ post.title }}</p>
      <p>{{ post.description }}</p>
    </header>
    <img
      class="mx-auto aspect-square w-5/6"
      :src="post.imageUrl"
      :alt="post.title"
    />
    <div class="flex items-center gap-2 px-4 py-3">
      <button
        class="flex items-center gap-2"
        :title="`${totalLikes(post.id)} Like`"
      >
        <span class="material-symbols-outlined"> favorite </span>
        {{ totalLikes(post.id) }}
      </button>
      <button
        class="flex items-center gap-2"
        :title="`${totalComments(post.id)} Comment`"
        @click="showComments = !showComments"
      >
        <span class="material-symbols-outlined"> comment </span>
        {{ totalComments(post.id) }}
      </button>
    </div>
    <div v-if="showComments">
      <CommentSection />
      <CommentSection />
    </div>
  </article>
</template>
