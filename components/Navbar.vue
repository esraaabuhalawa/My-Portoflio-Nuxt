<template>
  <nav class="sticky top-0 z-50 backdrop-blur-md bg-card/80 border-b border-primary/20 transition-colors duration-300">
    <div class="max-w-7xl my-0 !mx-auto">
      <div class="flex  items-center justify-between h-16 px-4">

        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="#home" class="text-2xl font-bold">
            <img :src="logoLight" alt="Logo" class="block h-10 w-auto dark:hidden" />
            <img :src="logoDark" alt="" aria-hidden="true" class="hidden h-10 w-auto dark:block" />
          </a>
        </div>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-6">

          <!-- Links -->
          <div class="flex items-baseline gap-4">
            <a href="#home" class="px-3 py-2 text-sm font-medium text-text hover:text-neon-purple transition-colors">
              Home
            </a>

            <a href="#experience"
              class="px-3 py-2 text-sm font-medium text-text hover:text-neon-purple transition-colors">
              Experience
            </a>

            <a href="#projects"
              class="px-3 py-2 text-sm font-medium text-text hover:text-neon-purple transition-colors">
              Projects
            </a>

            <a href="#contact" class="px-3 py-2 text-sm font-medium text-text hover:text-neon-purple transition-colors">
              Contact
            </a>
          </div>

          <!-- Theme Toggle -->
          <button @click="toggleTheme" title="Toggle dark mode" aria-label="Toggle dark mode">
            <svg class="hidden h-5 w-5 dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <!-- Sun -->
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1m-16 0H1m15.364 1.636l.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>

            <svg class="block h-5 w-5 dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <!-- Moon -->
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M20.354 15.354A9 9 0 015.646 5.646 9.003 9.003 0 0015.354 20.354z" />
            </svg>
          </button>

        </div>

        <!-- Mobile button -->
        <div class="md:hidden flex items-center gap-2">
          <button @click="toggleTheme" class="p-2 rounded-lg bg-card text-text border border-primary/20">
            🌙
          </button>

          <button @click="mobileMenuOpen = !mobileMenuOpen"
            class="p-2 rounded-md text-primary hover:bg-card transition">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </div>

      <!-- Backdrop -->
      <Transition name="fade">
        <div v-if="mobileMenuOpen" class="fixed inset-0 h-screen bg-black/50 z-40 md:hidden"
          @click="mobileMenuOpen = false"></div>
      </Transition>

      <!-- Offcanvas panel -->
      <Transition name="slide">
        <div v-if="mobileMenuOpen" dir="auto"
          class="fixed top-0 ltr:left-0 rtl:right-0 h-screen w-64 bg-white dark:bg-card border-e border-primary/20 z-50 md:hidden flex flex-col">
          <div
            class="flex items-center justify-between px-4 py-4 bg-gray-100 dark:bg-white/5 border-b border-primary/20">
            <!-- Logo -->
            <div class="flex-shrink-0">
              <a href="#home" class="text-2xl font-bold">
                <img :src="logoLight" alt="Logo" class="block h-10 w-auto dark:hidden" />
                <img :src="logoDark" alt="" aria-hidden="true" class="hidden h-10 w-auto dark:block" />
              </a>
            </div>
            <button @click="mobileMenuOpen = false" aria-label="Close menu"
              class="p-2 text-text hover:text-neon-purple transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav class="flex flex-col pb-4">
            <a href="#home" @click="mobileMenuOpen = false"
              class="block px-4 py-3 text-base font-medium text-text hover:text-neon-purple hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
              Home
            </a>
            <a href="#experience" @click="mobileMenuOpen = false"
              class="block px-4 py-3 text-base font-medium text-text hover:text-neon-purple hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
              Experience
            </a>
            <a href="#projects" @click="mobileMenuOpen = false"
              class="block px-4 py-3 text-base font-medium text-text hover:text-neon-purple hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
              Projects
            </a>
            <a href="#contact" @click="mobileMenuOpen = false"
              class="block px-4 py-3 text-base font-medium text-text hover:text-neon-purple hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </Transition>
      <!-- <div v-if="mobileMenuOpen" class="md:hidden pb-4 bg-card border-t border-primary/20">
        <a href="#home" class="block px-3 py-2 text-base font-medium text-text hover:text-primary transition">
          Home
        </a>

        <a href="#experience" class="block px-3 py-2 text-base font-medium text-text hover:text-primary transition">
          Experience
        </a>

        <a href="#projects" class="block px-3 py-2 text-base font-medium text-text hover:text-primary transition">
          Projects
        </a>

        <a href="#contact" class="block px-3 py-2 text-base font-medium text-text hover:text-primary transition">
          Contact
        </a>
      </div> -->
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const logoDark = '/images/logo-dark.png'
const logoLight = '/images/logo-light.png'

const mobileMenuOpen = ref(false)
const colorMode = useColorMode()

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<style scoped>
a {
  cursor: pointer;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

[dir="rtl"] .slide-enter-from,
[dir="rtl"] .slide-leave-to {
  transform: translateX(100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
