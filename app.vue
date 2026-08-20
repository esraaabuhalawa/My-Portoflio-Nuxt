<template>
  <NuxtPage />

  <Transition name="fade">
    <div v-if="isLoading" class="start-page">
      <Start />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Start from '~/components/Start.vue'

const isLoading = ref(true)
useSeoMeta({
  title: 'Esraa Abuhalawa — Frontend Developer (Vue.js & Angular)',
  description: 'Portfolio of Esraa Abuhalawa, a Frontend Developer building fast, accessible, and futuristic web applications with Vue.js and Angular.',
  ogTitle: 'Esraa Abuhalawa | Frontend Developer',
  ogDescription: 'Frontend Developer specializing in Vue.js and Angular.',
  ogImage: '/og-image.png', // fallback if nuxt-og-image isn't generating one yet
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Esraa Abuhalawa | Frontend Developer',
  twitterDescription: 'Frontend Developer specializing in Vue.js and Angular.',
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://esraa-abuhalawa-site.vercel.app/' }
  ]
})

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 3000)
})
</script>

<style scoped>
.start-page {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg, #000); /* match your theme */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>