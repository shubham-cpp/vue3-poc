<script setup lang="ts">
import { nanoid } from 'nanoid'
import { ref } from 'vue'
import type { Comment } from './types'

const comment = ref<Comment>({
  id: nanoid(),
  description: 'Some desc',
  postId: nanoid(),
  userId: nanoid()
})
</script>
<template>
  <article class="mx-4 my-2 flex flex-col gap-3">
    <header>
      <h6 class="font-bold">{{ comment.userId }}</h6>
    </header>
    <p>{{ comment.description }}</p>
  </article>
</template>
