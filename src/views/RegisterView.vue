<script setup lang="ts">
import { useRouter } from 'vue-router'

const { push } = useRouter()
const handleSubmit = () => {
  console.log('Form submit')
}
const gotoLoginPage = () => push('/login')
</script>

<template>
  <main
    class="col-span-8 flex h-screen items-center justify-center bg-purple-300 dark:bg-purple-600"
  >
    <section
      class="flex h-[35rem] max-w-[52rem] flex-col items-center justify-center gap-2 md:flex-row-reverse"
    >
      <section
        class="imgBg flex h-full flex-1 flex-col justify-between rounded-md py-4 px-5 text-white"
      >
        <article class="">
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
          <p class="font-bold">Already Have an Account?</p>
          <button
            title="Visit Login Page"
            class="rounded-md bg-purple-100 px-3 py-1 text-black"
            @click="gotoLoginPage"
          >
            Login
          </button>
        </article>
      </section>
      <section class="h-full flex-1 rounded-md bg-slate-100 px-2 py-1">
        <h2 class="text-center font-serif text-xl font-bold">Register</h2>
        <form class="grid grid-cols-1 gap-6" @submit.prevent="handleSubmit">
          <label class="block">
            <span class="text-gray-700">Full name</span>
            <input
              type="text"
              class="mt-1 block w-full rounded-md border-transparent bg-gray-200 focus:border-gray-500 focus:bg-white focus:ring-0"
              placeholder="FirstName and LastName"
            />
          </label>
          <label class="block">
            <span class="text-gray-700">Username</span>
            <input
              type="text"
              class="mt-1 block w-full rounded-md border-transparent bg-gray-200 focus:border-gray-500 focus:bg-white focus:ring-0"
              placeholder="Enter unique username"
            />
          </label>
          <label class="block">
            <span class="text-gray-700">Password</span>
            <input
              type="password"
              class="mt-1 block w-full rounded-md border-transparent bg-gray-200 focus:border-gray-500 focus:bg-white focus:ring-0"
              placeholder="Enter unique username"
            />
          </label>
          <label class="block">
            <span class="text-gray-700">Confirm Password</span>
            <input
              type="password"
              class="mt-1 block w-full rounded-md border-transparent bg-gray-200 focus:border-gray-500 focus:bg-white focus:ring-0"
              placeholder="Enter unique username"
            />
          </label>
          <label class="block">
            <span class="text-gray-700">Gender</span>
            <select
              class="mt-1 block w-full rounded-md border-transparent bg-gray-200 focus:border-gray-500 focus:bg-white focus:ring-0"
              title="Select your gender"
            >
              <option value="" selected disabled>Select a Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Others</option>
            </select>
            <div class="block">
              <div class="mt-2">
                <div>
                  <label class="inline-flex items-center">
                    <input
                      type="checkbox"
                      class="rounded border-transparent bg-gray-200 text-gray-700 focus:border-transparent focus:bg-gray-200 focus:ring-1 focus:ring-gray-500 focus:ring-offset-2"
                    />
                    <span class="ml-2">Accept Terms and Conditions</span>
                  </label>
                </div>
              </div>
            </div>
            <div class="block">
              <div class="mt-2 w-[18rem]">
                <button
                  type="submit"
                  class="w-full rounded-lg bg-purple-400 py-1 hover:bg-purple-700 hover:font-bold hover:text-white"
                >
                  Register
                </button>
              </div>
            </div>
          </label>
        </form>
      </section>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.imgBg {
  background: linear-gradient(
      rgba(37, 40, 42, 0.3),
      rgba(156, 163, 175, 0.3),
      rgba(60, 68, 79, 0.3)
    ),
    url('https://cdn.pixabay.com/photo/2017/08/07/15/38/nature-2605009_960_720.jpg')
      center;
}
form {
  label {
    max-width: 18rem !important;
  }
}
</style>
