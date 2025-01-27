<template>
  <main>
    <!-- Grid Pane -->
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-6">
      <!-- User Info -->
      <GPanel span="4" custom>
        <!-- <div class="bg-gray-200 rounded-tl-xl rounded-br-xl w-50 h-full hidden lg:block">
          <img
            class="rounded-tl-xl rounded-br-xl w-50 h-60 object-cover grayscale"
            src="@/assets/images/eldho_profile.png"
            alt=""
          />
        </div> -->
        <!-- <div class="bg-gray-200 rounded-tl-xl rounded-br-xl w-50 h-full">
          <img
            class="rounded-tl-xl rounded-br-xl w-50 h-full object-cover grayscale"
            alt=""
            src="@/assets/images/eldho_profile.png"
          />
        </div> -->
        <div class="flex flex-col gap-2 justify-center">
          <div class="text-4xl text-white font-semibold">
            {{ user.name }}
          </div>
          <div class="uppercase font-semibold text-gray-400">
            {{ user.occupation }}
          </div>
          <div>
            {{ user.introduction }}
          </div>
        </div>
      </GPanel>

      <!-- Skills -->
      <GPanel to="" span="4" title="" subtitle="">
        <div class="h-12 flex justify-between items-center">
          <DeVuejsOriginalWordmark class="text-6xl text-red-500" />

          <DeTypescriptOriginal class="text-6xl text-red-500" />

          <DeJavascriptOriginal class="text-6xl text-red-500" />

          <DeNuxtjsOriginal class="text-6xl text-red-500" />

          <DeVuetifyOriginal class="text-6xl text-red-500" />

          <DeTailwindcssPlain class="text-6xl text-red-500" />

          <DeHtml5PlainWordmark class="text-6xl text-red-500" />

          <DeGitPlainWordmark class="text-6xl text-red-500" />

          <DeDockerPlainWordmark class="text-6xl text-red-500" />

          <CoBrandLinux class="text-6xl text-black-500" />

          <CoBrandAmazonAws class="text-6xl text-orange-500" />

          <DeBitbucketOriginalWordmark class="text-6xl text-red-500" />
        </div>
      </GPanel>

      <!-- About -->
      <!-- <GPanel to="About" title="About Me" subtitle="">
        <div>
          <img class="" src="@/assets/images/about_me.png" alt="about" />
        </div>
      </GPanel> -->

      <!-- Projects -->
      <!-- <GPanel title="Projects" subtitle="">
        <div>
          <img class="rounded-xl" src="@/assets/images/my_works.png" alt="" />
        </div>
      </GPanel> -->

      <GPanel custom span="2" sparkle  class="items-end">
        <div>
          <div class="text-5xl text-white">
            Let's<br />
            work <span class="text-blue-600">together</span>
          </div>
        </div>
      </GPanel>
      <!-- </div>
      </div> -->

      <!-- Services -->
      <template v-for="(stat, i) in stats" :key="i">
        <GPanel>
          <div class="grid grid-cols-1 sm:grid-cols-1 gap-4">
            <div class="flex flex-col justify-center items-center rounded-3xl gap-5 px-4 py-9">
              <div class="text-4xl text-white">
                <number
                  class="bold transition"
                  ref="number2"
                  :from="0"
                  :to="stat.number"
                  :duration="1"
                  easing="Power4.easeOut"
                />
                <span v-if="stat.suffix">
                  {{ stat.suffix }}
                </span>
              </div>
              <div class="uppercase text-sm text-center">
                {{ stat.title }}
              </div>
            </div>
          </div>
        </GPanel>
      </template>

      <!-- Social -->
      <GPanel span="1" title="" subtitle="">
        <div
          class="bg-gradient-to-br from-gray-700 to-gray-900 border border-gray-700 rounded-3xl text-white flex items-center justify-between gap-2 p-4"
        >
          <Github
            @click="toGithub"
            height="14" width="14" 
            class="bg-gradient-to-br cursor-pointer from-gray-700 to-gray-800 border border-gray-700 rounded-full p-6 hover:text-gray-700 hover:from-gray-100 hover:to-gray-300 shadow-md hover:shadow-none shadow-black transition-all"
          />
          <Linkedin
            @click="toLinkedIn"
            class="bg-gradient-to-br from-gray-700 cursor-pointer to-gray-900 border border-gray-700 rounded-full p-6 hover:text-gray-700 hover:from-gray-100 hover:to-gray-300 shadow-md hover:shadow-none shadow-black transition-all"
          />

          <!-- <Instagram
            @click="toInstagram"
            class="bg-gradient-to-br from-gray-700 cursor-pointer to-gray-900 border border-gray-700 rounded-full p-6 hover:text-gray-700 hover:from-gray-100 hover:to-gray-300 shadow-md hover:shadow-none shadow-black transition-all"
          /> -->
        </div>
      </GPanel>

      <!-- CTA -->

      <!-- Notice -->
      <GPanel to="" span="4" custom>
        <div class="text-sm">
          <p>
            I created this portfolio using <a href="#" class="text-[#41B883]">Vue3</a> and
            <a href="#" class="text-[#07adca]">TailwindCSS</a><br />
            You are free to fork it and use it however you wish.<br />
          </p>
          <div class="mt-6">
            <a
              target="_blank"
              href="https://github.com/eldhokpaul"
              class="border border-gray-600 bg-gray-700 text-white px-6 py-3 rounded-xl hover:bg-white hover:text-gray-700 transition-all shadow-sm shadow-black"
            >
              View in Github
            </a>
          </div>
        </div>
      </GPanel>
    </div>
  </main>
</template>
<script setup lang="ts">
import GPanel from '@/components/GPanel.vue'
import { Github, Linkedin, Instagram,Iconoir } from 'iconoir-vue'
import {
  DeVuejsOriginalWordmark,
  DeTailwindcssPlain,
  DeTypescriptOriginal,
  DeNuxtjsOriginal,
  DeJavascriptOriginal,
  DeHtml5PlainWordmark,
  DeGitPlainWordmark,
  DeDockerPlainWordmark,
  DeUbuntuPlainWordmark,
  CoBrandAmazonAws,
  DeJavaOriginalWordmark,
  DeBitbucketOriginalWordmark,
  DeJiraOriginalWordmark,
  DeVuetifyOriginal,
  CoBrandLinux
} from '@kalimahapps/vue-icons'
const user = {
  name: 'Eldho K Paul',
  profilePhoto: '',
  occupation: 'Senior Software Engineer',
  introduction: `Experienced Senior Software Engineer with 5+ years of dedicated expertise in developing web applications using Vue.js.I have a proven track record of crafting user- friendly interfaces, ensuring a seamless and intuitive experience for
users.Proficient in building scalable solutions and collaborating effectively within diverse teams to deliver outstanding
digital products.I am passionate about taking on new challenges and fostering innovation in web development.`
}

const stats = [
  {
    number: 5,
    title: 'Years Experience',
    suffix: '+'
  },
  {
    number: 19,
    title: 'Total Projects',
    suffix: '+'
  }
]

function toLinkedIn() {
  window.open('https://www.linkedin.com/in/eldho-k-paul-7a5b93137/', '_blank')
}
function toInstagram() {
  window.open('https://www.instagram.com/i_eldho', '_blank')
}
function toGithub() {
  window.open('https://github.com/eldhokpaul', '_blank')
}
</script>
