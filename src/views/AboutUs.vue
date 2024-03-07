<template>
  <main>
    <!-- Grid Pane -->
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-6">
      <!-- User Info -->
      <GPanel span="4" custom>
        <div class="bg-gray-200 rounded-tl-xl rounded-br-xl w-50 h-full hidden lg:block">
          <img
            class="rounded-tl-xl rounded-br-xl w-50 h-60 object-cover grayscale"
            src="@/assets/images/eldho_profile.png"
            alt=""
          />
        </div>
        <div class="flex flex-col gap-2 justify-center">
          <div class="uppercase font-semibold text-gray-400">
            {{ user.occupation }}
          </div>
          <div class="text-4xl text-white font-semibold">
            {{ user.name }}
          </div>
          <div>
            {{ user.introduction }}
          </div>
        </div>

        <div class="relative col-span-2 group rounded-3xl p-8 flex gap-6"></div>
      </GPanel>
      <GPanel span="4" custom>
        <div class="bg-gray-200 rounded-tl-xl rounded-br-xl w-50 h-full hidden lg:block">
          <img
            class="rounded-tl-xl rounded-br-xl w-50 h-60 object-cover grayscale"
            src="@/assets/images/eldho_profile.png"
            alt=""
          />
        </div>
        <div class="flex flex-col gap-2 justify-center">
          <div class="uppercase font-semibold text-gray-400">
            {{ user.occupation }}
          </div>
          <div class="text-4xl text-white font-semibold">
            {{ user.name }}
          </div>
          <div>
            {{ user.introduction }}
          </div>
        </div>
      </GPanel>
    </div>
  </main>
</template>
<script setup lang="ts">
import GPanel from '@/components/GPanel.vue'
const user = {
  name: 'Eldho K Paul',
  profilePhoto: '',
  occupation: 'Senior Software Engineer',
  introduction:
    'Experienced Senior Software Engineer with over 4 years of dedicated expertise in developing web applications using Vue.js.'
}
</script>
