import { defineStore } from 'pinia'
import { ref } from 'vue'
import { nanoid } from 'nanoid'

export type Post = {
  id: string
  imageUrl: string
  title: string
  description: string
  likes: string[]
  comments: string[]
  username: string
}

const initialPosts: Post[] = [
  {
    id: nanoid(),
    username: 'Shubham Pawar',
    imageUrl:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
    title: 'What a trip',
    description: 'Friends make trips awesome',
    likes: [nanoid(), nanoid()],
    comments: []
  },
  {
    id: nanoid(),
    username: 'Shubham Pawar',
    imageUrl:
      'https://images.pexels.com/photos/7150075/pexels-photo-7150075.jpeg?cs=srgb&dl=pexels-ashford-marx-7150075.jpg&fm=jpg&_gl=1*vxt9in*_ga*MjEzNzMxMDczNy4xNjY3NDY3Nzk0*_ga_8JE65Q40S6*MTY2NzQ2Nzc5NC4xLjEuMTY2NzQ2NzgyOS4wLjAuMA..',
    title: 'Girls forever',
    description: 'Friends make trips awesome',
    likes: [nanoid(), nanoid()],
    comments: []
  },
  {
    id: nanoid(),
    username: 'Shubham Pawar',
    imageUrl:
      'https://images.pexels.com/photos/3856026/pexels-photo-3856026.jpeg?cs=srgb&dl=pexels-matheus-bertelli-3856026.jpg&fm=jpg&_gl=1*1r5946u*_ga*MjEzNzMxMDczNy4xNjY3NDY3Nzk0*_ga_8JE65Q40S6*MTY2NzQ2Nzc5NC4xLjEuMTY2NzQ2Nzg2OC4wLjAuMA..',
    title: 'Big things coming',
    description: 'Cant wait for tomorrow',
    likes: [nanoid(), nanoid()],
    comments: []
  }
]

// type PostID = keyof Post
const usePostStore = defineStore('postsStore', () => {
  const posts = ref<Post[]>(initialPosts)
  const totalLikes = (postId: string) => {
    const idx = posts.value.findIndex(post => post.id === postId)
    return idx ? posts.value[idx].likes.length : 0
  }
  const totalComments = (postId: string) => {
    const idx = posts.value.findIndex(post => post.id === postId)
    return idx ? posts.value[idx].comments.length : 0
  }
  return { posts, totalComments, totalLikes }
})
export default usePostStore
