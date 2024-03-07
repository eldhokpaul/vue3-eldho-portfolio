<template>
  <div class="sm:max-w-6xl sm:mx-auto text-gray-500 py-5 transition-all">
    <!-- Header -->
    <transition name="fade" mode="out-in">
      <div class="flex w-full justify-between px-2 sm:p-0">
        <!-- Logo -->
        <div id="logo">
          <img class="h-9 rounded-tl-xl rounded-br-xl" src="@/assets/images/logo.svg" alt="" />
        </div>
        <!-- Nav -->
        <!-- <div id="nav-menu" class="hidden sm:flex gap-10">
        <div class="text-white">
          <RouterLink to="/">Home</RouterLink>
        </div>
        <div>
          <RouterLink to="/about">About</RouterLink>
        </div>
        <div>
          <RouterLink to="/about">Works</RouterLink>
        </div>
        <div>
          <RouterLink to="/about">Contact</RouterLink>
        </div>
      </div> -->
        <!-- CTA Button -->
        <div id="cta-btn">
          <a
            href="mailto:eldhokpaul007@gmail.com"
            class="bg-gray-700 text-white px-6 py-3 rounded-xl hover:bg-white hover:text-gray-700 transition-all"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </transition>

    <!-- Router view -->
    <div id="main" class="my-10 sm:my-20 px-4 xl:p-0">
      <RouterView />
    </div>
    <transition name="fade" mode="out-in">
      <!-- Footer -->
      <div class="flex flex-col items-center gap-8">
        <!-- Logo -->
        <div id="logo">
          <img class="h-12 rounded-xl" src="@/assets/images/logo.svg" alt="" />
        </div>
        <!-- Nav -->
        <!-- <div id="nav-menu" class="flex gap-10">
        <div class="text-white">
          <RouterLink to="/">Home</RouterLink>
        </div>
        <div>
          <RouterLink to="/about">About</RouterLink>
        </div>
        <div>
          <RouterLink to="/about">Works</RouterLink>
        </div>
        <div>
          <RouterLink to="/about">Contact</RouterLink>
        </div>
      </div> -->
        <!-- Copyright -->
        <div class="text-gray-500">
          © {{ new Date().getFullYear() }} <a href="#" class="text-blue-500">Eldho</a>. All rights
          reserved.
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
<style lang="scss" scoped>
#main {
  transition: none !important;
}
</style>
