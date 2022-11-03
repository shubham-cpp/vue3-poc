<script setup lang="ts">
import { useUserStore } from '@/stores'
import { useRouter } from 'vue-router'

const { push } = useRouter()
const { login: userLogin } = useUserStore()

const handleSubmit = () => {
  userLogin({
    username: 'shubham-cpp',
    fullName: 'Shubham Pawar',
    id: '1',
    profilePicture:
      'https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830__180.jpg'
  })
  push('/')
}
const gotoRegisterPage = () => push('/register')
</script>

<template>
  <main
    class="col-span-8 flex h-screen items-center justify-center bg-purple-300 dark:bg-purple-600"
  >
    <section
      class="flex h-[28rem] max-w-[52rem] flex-col items-center justify-center gap-2 md:flex-row"
    >
      <section
        class="imgBg flex h-full flex-1 flex-col justify-between rounded-md py-4 px-5 text-white"
      >
        <article>
          <h3 class="text-center font-mono text-xl font-bold">Socials</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
            distinctio quia fugiat laboriosam? Eaque impedit tenetur cupiditate
            placeat quisquam. Esse tenetur quisquam animi alias saepe eius.
            Voluptates ipsa beatae optio! Voluptate soluta fuga nisi placeat
            maxime accusantium dolorem, doloremque a odio vero, libero suscipit
          </p>
        </article>
        <article class="mt-4 flex flex-col gap-2">
          <p class="font-bold">Don't Have an Account?</p>
          <button
            title="Visit Register Page"
            class="rounded-md bg-gray-100 px-3 py-1 text-black"
            @click="gotoRegisterPage"
          >
            Register
          </button>
        </article>
      </section>
      <section
        class="flex h-full flex-1 flex-col justify-evenly rounded-md bg-slate-100 px-2 py-1 dark:bg-darkPrimary dark:text-gray-200"
      >
        <h2 class="text-center font-serif text-2xl font-bold">Login</h2>
        <form class="ml-5 grid gap-6" @submit.prevent="handleSubmit">
          <label class="block">
            <span class="text-gray-700 dark:text-gray-300">Username</span>
            <input
              type="text"
              class="mt-1 block w-full rounded-md border-transparent bg-gray-200 focus:border-gray-500 focus:bg-white focus:ring-0"
              placeholder="Enter unique username"
            />
          </label>
          <label class="block">
            <span class="text-gray-700 dark:text-gray-300">Password</span>
            <input
              type="text"
              class="mt-1 block w-full rounded-md border-transparent bg-gray-200 focus:border-gray-500 focus:bg-white focus:ring-0"
              placeholder="Enter unique username"
            />
          </label>
          <div class="block">
            <div class="mt-2 w-[18rem]">
              <button
                type="submit"
                class="w-full rounded-lg bg-purple-400 py-1 hover:bg-purple-600 hover:font-bold hover:text-white"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </section>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.imgBg {
  background: linear-gradient(
      rgba(37, 40, 42, 0.6),
      rgba(156, 163, 175, 0.6),
      rgba(60, 68, 79, 0.6)
    ),
    url('https://cdn.pixabay.com/photo/2017/08/07/15/38/nature-2605009_960_720.jpg')
      center;
}
form {
  label {
    max-width: 18rem;
  }
}
</style>
