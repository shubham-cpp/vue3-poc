import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

type User = {
  fullName: string
  username: string
  profilePicture: string
  id: string
}

const useUserStore = defineStore('userStore', () => {
  const user = ref<User>({
    fullName: '',
    username: '',
    profilePicture: '',
    id: ''
  })
  function login(userDetails: User) {
    user.value = userDetails
  }
  const isUserLoggedIn = computed(() => user.value.username.trim().length > 1)

  return { user, login, isUserLoggedIn }
})

export default useUserStore
